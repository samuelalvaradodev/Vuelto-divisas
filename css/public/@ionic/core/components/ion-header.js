/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { readTask, writeTask, HTMLElement, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
import { b as getIonMode } from './ionic-global.js';
import { j as clamp, c as componentOnReady, i as inheritAttributes } from './helpers.js';
import { h as hostContext } from './theme.js';

const TRANSITION = 'all 0.2s ease-in-out';
const cloneElement = (tagName) => {
  const getCachedEl = document.querySelector(`${tagName}.ion-cloned-element`);
  if (getCachedEl !== null) {
    return getCachedEl;
  }
  const clonedEl = document.createElement(tagName);
  clonedEl.classList.add('ion-cloned-element');
  clonedEl.style.setProperty('display', 'none');
  document.body.appendChild(clonedEl);
  return clonedEl;
};
const createHeaderIndex = (headerEl) => {
  if (!headerEl) {
    return;
  }
  const toolbars = headerEl.querySelectorAll('ion-toolbar');
  return {
    el: headerEl,
    toolbars: Array.from(toolbars).map((toolbar) => {
      const ionTitleEl = toolbar.querySelector('ion-title');
      return {
        el: toolbar,
        background: toolbar.shadowRoot.querySelector('.toolbar-background'),
        ionTitleEl,
        innerTitleEl: (ionTitleEl) ? ionTitleEl.shadowRoot.querySelector('.toolbar-title') : null,
        ionButtonsEl: Array.from(toolbar.querySelectorAll('ion-buttons')) || []
      };
    }) || []
  };
};
const handleContentScroll = (scrollEl, scrollHeaderIndex, contentEl) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const scale = clamp(1, 1 + (-scrollTop / 500), 1.1);
    // Native refresher should not cause titles to scale
    const nativeRefresher = contentEl.querySelector('ion-refresher.refresher-native');
    if (nativeRefresher === null) {
      writeTask(() => {
        scaleLargeTitles(scrollHeaderIndex.toolbars, scale);
      });
    }
  });
};
const setToolbarBackgroundOpacity = (headerEl, opacity) => {
  /**
   * Fading in the backdrop opacity
   * should happen after the large title
   * has collapsed, so it is handled
   * by handleHeaderFade()
   */
  if (headerEl.collapse === 'fade') {
    return;
  }
  if (opacity === undefined) {
    headerEl.style.removeProperty('--opacity-scale');
  }
  else {
    headerEl.style.setProperty('--opacity-scale', opacity.toString());
  }
};
const handleToolbarBorderIntersection = (ev, mainHeaderIndex, scrollTop) => {
  if (!ev[0].isIntersecting) {
    return;
  }
  /**
   * There is a bug in Safari where overflow scrolling on a non-body element
   * does not always reset the scrollTop position to 0 when letting go. It will
   * set to 1 once the rubber band effect has ended. This causes the background to
   * appear slightly on certain app setups.
   *
   * Additionally, we check if user is rubber banding (scrolling is negative)
   * as this can mean they are using pull to refresh. Once the refresher starts,
   * the content is transformed which can cause the intersection observer to erroneously
   * fire here as well.
   */
  const scale = (ev[0].intersectionRatio > 0.9 || scrollTop <= 0) ? 0 : ((1 - ev[0].intersectionRatio) * 100) / 75;
  setToolbarBackgroundOpacity(mainHeaderIndex.el, (scale === 1) ? undefined : scale);
};
/**
 * If toolbars are intersecting, hide the scrollable toolbar content
 * and show the primary toolbar content. If the toolbars are not intersecting,
 * hide the primary toolbar content and show the scrollable toolbar content
 */
const handleToolbarIntersection = (ev, mainHeaderIndex, scrollHeaderIndex, scrollEl) => {
  writeTask(() => {
    const scrollTop = scrollEl.scrollTop;
    handleToolbarBorderIntersection(ev, mainHeaderIndex, scrollTop);
    const event = ev[0];
    const intersection = event.intersectionRect;
    const intersectionArea = intersection.width * intersection.height;
    const rootArea = event.rootBounds.width * event.rootBounds.height;
    const isPageHidden = intersectionArea === 0 && rootArea === 0;
    const leftDiff = Math.abs(intersection.left - event.boundingClientRect.left);
    const rightDiff = Math.abs(intersection.right - event.boundingClientRect.right);
    const isPageTransitioning = intersectionArea > 0 && (leftDiff >= 5 || rightDiff >= 5);
    if (isPageHidden || isPageTransitioning) {
      return;
    }
    if (event.isIntersecting) {
      setHeaderActive(mainHeaderIndex, false);
      setHeaderActive(scrollHeaderIndex);
    }
    else {
      /**
       * There is a bug with IntersectionObserver on Safari
       * where `event.isIntersecting === false` when cancelling
       * a swipe to go back gesture. Checking the intersection
       * x, y, width, and height provides a workaround. This bug
       * does not happen when using Safari + Web Animations,
       * only Safari + CSS Animations.
       */
      const hasValidIntersection = (intersection.x === 0 && intersection.y === 0) || (intersection.width !== 0 && intersection.height !== 0);
      if (hasValidIntersection && scrollTop > 0) {
        setHeaderActive(mainHeaderIndex);
        setHeaderActive(scrollHeaderIndex, false);
        setToolbarBackgroundOpacity(mainHeaderIndex.el);
      }
    }
  });
};
const setHeaderActive = (headerIndex, active = true) => {
  if (active) {
    headerIndex.el.classList.remove('header-collapse-condense-inactive');
  }
  else {
    headerIndex.el.classList.add('header-collapse-condense-inactive');
  }
};
const scaleLargeTitles = (toolbars = [], scale = 1, transition = false) => {
  toolbars.forEach(toolbar => {
    const ionTitle = toolbar.ionTitleEl;
    const titleDiv = toolbar.innerTitleEl;
    if (!ionTitle || ionTitle.size !== 'large') {
      return;
    }
    titleDiv.style.transition = (transition) ? TRANSITION : '';
    titleDiv.style.transform = `scale3d(${scale}, ${scale}, 1)`;
  });
};
const handleHeaderFade = (scrollEl, baseEl, condenseHeader) => {
  readTask(() => {
    const scrollTop = scrollEl.scrollTop;
    const baseElHeight = baseEl.clientHeight;
    const fadeStart = (condenseHeader) ? condenseHeader.clientHeight : 0;
    /**
     * If we are using fade header with a condense
     * header, then the toolbar backgrounds should
     * not begin to fade in until the condense
     * header has fully collapsed.
     *
     * Additionally, the main content should not
     * overflow out of the container until the
     * condense header has fully collapsed. When
     * using just the condense header the content
     * should overflow out of the container.
     */
    if ((condenseHeader !== null) && (scrollTop < fadeStart)) {
      baseEl.style.setProperty('--opacity-scale', '0');
      scrollEl.style.setProperty('clip-path', `inset(${baseElHeight}px 0px 0px 0px)`);
      return;
    }
    const distanceToStart = scrollTop - fadeStart;
    const fadeDuration = 10;
    const scale = clamp(0, (distanceToStart / fadeDuration), 1);
    writeTask(() => {
      scrollEl.style.removeProperty('clip-path');
      baseEl.style.setProperty('--opacity-scale', scale.toString());
    });
  });
};

const headerIosCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-ios ion-toolbar:last-of-type{--border-width:0 0 0.55px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.header-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8}.header-collapse-condense-inactive .header-background{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px)}}.header-ios.ion-no-border ion-toolbar:last-of-type{--border-width:0}.header-collapse-fade ion-toolbar{--opacity-scale:inherit}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-of-type{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{--background:var(--ion-background-color, #fff);z-index:0}.header-collapse-condense ion-toolbar:last-of-type{--border-width:0px}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0px;padding-bottom:13px}.header-collapse-main{--opacity-scale:1}.header-collapse-main ion-toolbar{--opacity-scale:inherit}.header-collapse-main ion-toolbar.in-toolbar ion-title,.header-collapse-main ion-toolbar.in-toolbar ion-buttons{-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out}.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive:not(.header-collapse-condense) ion-toolbar.in-toolbar ion-buttons.buttons-collapse{opacity:0;pointer-events:none}.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-title,.header-collapse-condense-inactive.header-collapse-condense ion-toolbar.in-toolbar ion-buttons.buttons-collapse{visibility:hidden}";

const headerMdCss = "ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{left:unset;right:unset;right:0}[dir=rtl] .header-md::after,:host-context([dir=rtl]) .header-md::after{background-position:right 0 top -2px}.header-collapse-condense{display:none}.header-md.ion-no-border::after{display:none}";

let Header = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.inheritedAttributes = {};
    /**
     * If `true`, the header will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     *
     * Note: In order to scroll content behind the header, the `fullscreen`
     * attribute needs to be set on the content.
     */
    this.translucent = false;
    this.setupFadeHeader = async (contentEl, condenseHeader) => {
      if (!contentEl) {
        console.error('ion-header requires a content to collapse. Make sure there is an ion-content.');
        return;
      }
      await new Promise(resolve => componentOnReady(contentEl, resolve));
      const scrollEl = this.scrollEl = await contentEl.getScrollElement();
      /**
       * Handle fading of toolbars on scroll
       */
      this.contentScrollCallback = () => { handleHeaderFade(this.scrollEl, this.el, condenseHeader); };
      scrollEl.addEventListener('scroll', this.contentScrollCallback);
      handleHeaderFade(this.scrollEl, this.el, condenseHeader);
    };
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['role']);
  }
  componentDidLoad() {
    this.checkCollapsibleHeader();
  }
  componentDidUpdate() {
    this.checkCollapsibleHeader();
  }
  disconnectedCallback() {
    this.destroyCollapsibleHeader();
  }
  async checkCollapsibleHeader() {
    const mode = getIonMode(this);
    if (mode !== 'ios') {
      return;
    }
    const { collapse } = this;
    const hasCondense = collapse === 'condense';
    const hasFade = collapse === 'fade';
    this.destroyCollapsibleHeader();
    if (hasCondense) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
      // Cloned elements are always needed in iOS transition
      writeTask(() => {
        const title = cloneElement('ion-title');
        title.size = 'large';
        cloneElement('ion-back-button');
      });
      await this.setupCondenseHeader(contentEl, pageEl);
    }
    else if (hasFade) {
      const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
      const contentEl = (pageEl) ? pageEl.querySelector('ion-content') : null;
      const condenseHeader = (contentEl) ? contentEl.querySelector('ion-header[collapse="condense"]') : null;
      await this.setupFadeHeader(contentEl, condenseHeader);
    }
  }
  destroyCollapsibleHeader() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
      this.intersectionObserver = undefined;
    }
    if (this.scrollEl && this.contentScrollCallback) {
      this.scrollEl.removeEventListener('scroll', this.contentScrollCallback);
      this.contentScrollCallback = undefined;
    }
    if (this.collapsibleMainHeader) {
      this.collapsibleMainHeader.classList.remove('header-collapse-main');
      this.collapsibleMainHeader = undefined;
    }
  }
  async setupCondenseHeader(contentEl, pageEl) {
    if (!contentEl || !pageEl) {
      console.error('ion-header requires a content to collapse, make sure there is an ion-content.');
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    await new Promise(resolve => componentOnReady(contentEl, resolve));
    this.scrollEl = await contentEl.getScrollElement();
    const headers = pageEl.querySelectorAll('ion-header');
    this.collapsibleMainHeader = Array.from(headers).find((header) => header.collapse !== 'condense');
    if (!this.collapsibleMainHeader) {
      return;
    }
    const mainHeaderIndex = createHeaderIndex(this.collapsibleMainHeader);
    const scrollHeaderIndex = createHeaderIndex(this.el);
    if (!mainHeaderIndex || !scrollHeaderIndex) {
      return;
    }
    setHeaderActive(mainHeaderIndex, false);
    setToolbarBackgroundOpacity(mainHeaderIndex.el, 0);
    /**
     * Handle interaction between toolbar collapse and
     * showing/hiding content in the primary ion-header
     * as well as progressively showing/hiding the main header
     * border as the top-most toolbar collapses or expands.
     */
    const toolbarIntersection = (ev) => { handleToolbarIntersection(ev, mainHeaderIndex, scrollHeaderIndex, this.scrollEl); };
    this.intersectionObserver = new IntersectionObserver(toolbarIntersection, { root: contentEl, threshold: [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
    this.intersectionObserver.observe(scrollHeaderIndex.toolbars[scrollHeaderIndex.toolbars.length - 1].el);
    /**
     * Handle scaling of large iOS titles and
     * showing/hiding border on last toolbar
     * in primary header
     */
    this.contentScrollCallback = () => { handleContentScroll(this.scrollEl, scrollHeaderIndex, contentEl); };
    this.scrollEl.addEventListener('scroll', this.contentScrollCallback);
    writeTask(() => {
      if (this.collapsibleMainHeader !== undefined) {
        this.collapsibleMainHeader.classList.add('header-collapse-main');
      }
    });
  }
  render() {
    const { translucent, inheritedAttributes } = this;
    const mode = getIonMode(this);
    const collapse = this.collapse || 'none';
    // banner role must be at top level, so remove role if inside a menu
    const roleType = hostContext('ion-menu', this.el) ? 'none' : 'banner';
    return (h(Host, Object.assign({ role: roleType, class: {
        [mode]: true,
        // Used internally for styling
        [`header-${mode}`]: true,
        [`header-translucent`]: this.translucent,
        [`header-collapse-${collapse}`]: true,
        [`header-translucent-${mode}`]: this.translucent,
      } }, inheritedAttributes), mode === 'ios' && translucent &&
      h("div", { class: "header-background" }), h("slot", null)));
  }
  get el() { return this; }
  static get style() { return {
    ios: headerIosCss,
    md: headerMdCss
  }; }
};
Header = /*@__PURE__*/ proxyCustomElement(Header, [36, "ion-header", {
    "collapse": [1],
    "translucent": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-header"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Header);
      }
      break;
  } });
}

const IonHeader = Header;
const defineCustomElement = defineCustomElement$1;

export { IonHeader, defineCustomElement };

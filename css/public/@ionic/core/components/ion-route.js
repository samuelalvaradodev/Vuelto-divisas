/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { HTMLElement, createEvent, proxyCustomElement } from '@stencil/core/internal/client';

let Route = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.ionRouteDataChanged = createEvent(this, "ionRouteDataChanged", 7);
    /**
     * Relative path that needs to match in order for this route to apply.
     *
     * Accepts paths similar to expressjs so that you can define parameters
     * in the url /foo/:bar where bar would be available in incoming props.
     */
    this.url = '';
  }
  onUpdate(newValue) {
    this.ionRouteDataChanged.emit(newValue);
  }
  onComponentProps(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    const keys1 = newValue ? Object.keys(newValue) : [];
    const keys2 = oldValue ? Object.keys(oldValue) : [];
    if (keys1.length !== keys2.length) {
      this.onUpdate(newValue);
      return;
    }
    for (const key of keys1) {
      if (newValue[key] !== oldValue[key]) {
        this.onUpdate(newValue);
        return;
      }
    }
  }
  connectedCallback() {
    this.ionRouteDataChanged.emit();
  }
  static get watchers() { return {
    "url": ["onUpdate"],
    "component": ["onUpdate"],
    "componentProps": ["onComponentProps"]
  }; }
};
Route = /*@__PURE__*/ proxyCustomElement(Route, [0, "ion-route", {
    "url": [1],
    "component": [1],
    "componentProps": [16],
    "beforeLeave": [16],
    "beforeEnter": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ion-route"];
  components.forEach(tagName => { switch (tagName) {
    case "ion-route":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Route);
      }
      break;
  } });
}

const IonRoute = Route;
const defineCustomElement = defineCustomElement$1;

export { IonRoute, defineCustomElement };

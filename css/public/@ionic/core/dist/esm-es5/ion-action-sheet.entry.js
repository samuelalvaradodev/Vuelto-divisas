import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,e as createEvent,f as readTask,h,H as Host,i as getElement}from"./index-06cd27b1.js";import{b as getIonMode}from"./ionic-global-a049bcbf.js";import{c as createButtonActiveGesture}from"./button-active-767ae7c7.js";import{B as BACKDROP,i as isCancel,d as present,e as prepareOverlay,f as dismiss,g as eventMethod,s as safeCall}from"./overlays-963ffac5.js";import{g as getClassMap}from"./theme-a24ff1ad.js";import{c as createAnimation}from"./animation-7e9a7324.js";import"./haptic-9a9aa7ec.js";import"./index-41bf41f2.js";import"./gesture-controller-68c023a4.js";import"./hardware-back-button-ace6a71b.js";import"./helpers-6ff04165.js";var iosEnterAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])};var iosLeaveAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])};var mdEnterAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(100%)","translateY(0%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation([o,n])};var mdLeaveAnimation=function(t){var e=createAnimation();var o=createAnimation();var n=createAnimation();o.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);n.addElement(t.querySelector(".action-sheet-wrapper")).fromTo("transform","translateY(0%)","translateY(100%)");return e.addElement(t).easing("cubic-bezier(.36,.66,.04,1)").duration(450).addAnimation([o,n])};var actionSheetIosCss='.sc-ion-action-sheet-ios-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-ios-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-ios{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-ios{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-ios{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-ios::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-ios{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-ios::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-ios{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-ios::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-ios::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-ios:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-ios:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--backdrop-opacity:var(--ion-backdrop-opacity, 0.4);--button-background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent;--button-background-activated:var(--ion-text-color, #000);--button-background-activated-opacity:.08;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-background-selected:var(--ion-color-step-150, var(--ion-background-color, #fff));--button-background-selected-opacity:1;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-400, #999999);text-align:center}.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:var(--ion-safe-area-bottom, 0)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-container.sc-ion-action-sheet-ios{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-container.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.action-sheet-group.sc-ion-action-sheet-ios{border-radius:13px;margin-bottom:8px}.action-sheet-group.sc-ion-action-sheet-ios:first-child{margin-top:10px}.action-sheet-group.sc-ion-action-sheet-ios:last-child{margin-bottom:10px}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-group.sc-ion-action-sheet-ios{background-color:transparent;-webkit-backdrop-filter:saturate(280%) blur(20px);backdrop-filter:saturate(280%) blur(20px)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-title.sc-ion-action-sheet-ios,.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.sc-ion-action-sheet-ios{background-color:transparent;background-image:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8))), -webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4)), color-stop(50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background-image:linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%), linear-gradient(0deg, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4), rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.4) 50%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 50%);background-repeat:no-repeat;background-position:top, bottom;background-size:100% calc(100% - 1px), 100% 1px;-webkit-backdrop-filter:saturate(120%);backdrop-filter:saturate(120%)}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-button.ion-activated.sc-ion-action-sheet-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.7);background-image:none}.action-sheet-translucent.sc-ion-action-sheet-ios-h .action-sheet-cancel.sc-ion-action-sheet-ios{background:var(--button-background-selected)}}.action-sheet-title.sc-ion-action-sheet-ios{background:-webkit-gradient(linear, left bottom, left top, from(rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08)), color-stop(50%, transparent)) bottom/100% 1px no-repeat transparent;background:linear-gradient(0deg, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08), rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.08) 50%, transparent 50%) bottom/100% 1px no-repeat transparent}.action-sheet-title.sc-ion-action-sheet-ios{padding-left:10px;padding-right:10px;padding-top:14px;padding-bottom:13px;color:var(--color, var(--ion-color-step-400, #999999));font-size:13px;font-weight:400;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px}}.action-sheet-title.action-sheet-has-sub-title.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-sub-title.sc-ion-action-sheet-ios{padding-left:0;padding-right:0;padding-top:6px;padding-bottom:0;font-size:13px;font-weight:400}.action-sheet-button.sc-ion-action-sheet-ios{padding-left:18px;padding-right:18px;padding-top:18px;padding-bottom:18px;height:56px;font-size:20px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:18px;padding-inline-start:18px;-webkit-padding-end:18px;padding-inline-end:18px}}.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:0.3em;font-size:28px;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-ios .action-sheet-icon.sc-ion-action-sheet-ios{margin-right:unset;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}.action-sheet-button.sc-ion-action-sheet-ios:last-child{background-image:none}.action-sheet-selected.sc-ion-action-sheet-ios{font-weight:bold}.action-sheet-cancel.sc-ion-action-sheet-ios{font-weight:600}.action-sheet-cancel.sc-ion-action-sheet-ios::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-destructive.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-activated.sc-ion-action-sheet-ios,.action-sheet-destructive.ion-focused.sc-ion-action-sheet-ios{color:var(--ion-color-danger, #eb445a)}@media (any-hover: hover){.action-sheet-destructive.sc-ion-action-sheet-ios:hover{color:var(--ion-color-danger, #eb445a)}}';var actionSheetMdCss='.sc-ion-action-sheet-md-h{--color:initial;--button-color-activated:var(--button-color);--button-color-focused:var(--button-color);--button-color-hover:var(--button-color);--button-color-selected:var(--button-color);--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--height:100%;--max-height:calc(100% - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:block;position:fixed;outline:none;font-family:var(--ion-font-family, inherit);-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-action-sheet-md-h{display:none}.action-sheet-wrapper.sc-ion-action-sheet-md{left:0;right:0;bottom:0;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:block;position:absolute;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);z-index:10;pointer-events:none}.action-sheet-button.sc-ion-action-sheet-md{display:block;position:relative;width:100%;border:0;outline:none;background:var(--button-background);color:var(--button-color);font-family:inherit;overflow:hidden}.action-sheet-button-inner.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;width:100%;height:100%;z-index:1}.action-sheet-container.sc-ion-action-sheet-md{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:end;justify-content:flex-end;height:100%;max-height:100%}.action-sheet-group.sc-ion-action-sheet-md{-ms-flex-negative:2;flex-shrink:2;overscroll-behavior-y:contain;overflow-y:auto;-webkit-overflow-scrolling:touch;pointer-events:all;background:var(--background)}.action-sheet-group.sc-ion-action-sheet-md::-webkit-scrollbar{display:none}.action-sheet-group-cancel.sc-ion-action-sheet-md{-ms-flex-negative:0;flex-shrink:0;overflow:hidden}.action-sheet-button.sc-ion-action-sheet-md::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.action-sheet-selected.sc-ion-action-sheet-md{color:var(--button-color-selected)}.action-sheet-selected.sc-ion-action-sheet-md::after{background:var(--button-background-selected);opacity:var(--button-background-selected-opacity)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md{color:var(--button-color-activated)}.action-sheet-button.ion-activated.sc-ion-action-sheet-md::after{background:var(--button-background-activated);opacity:var(--button-background-activated-opacity)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md{color:var(--button-color-focused)}.action-sheet-button.ion-focused.sc-ion-action-sheet-md::after{background:var(--button-background-focused);opacity:var(--button-background-focused-opacity)}@media (any-hover: hover){.action-sheet-button.sc-ion-action-sheet-md:hover{color:var(--button-color-hover)}.action-sheet-button.sc-ion-action-sheet-md:hover::after{background:var(--button-background-hover);opacity:var(--button-background-hover-opacity)}}.sc-ion-action-sheet-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);--button-background:transparent;--button-background-selected:currentColor;--button-background-selected-opacity:0;--button-background-activated:transparent;--button-background-activated-opacity:0;--button-background-hover:currentColor;--button-background-hover-opacity:.04;--button-background-focused:currentColor;--button-background-focused-opacity:.12;--button-color:var(--ion-color-step-850, #262626);--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54)}.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:auto;margin-right:auto;margin-top:var(--ion-safe-area-top, 0);margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-wrapper.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.action-sheet-title.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:20px;padding-bottom:17px;min-height:60px;color:var(--color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54));font-size:16px;text-align:start}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-title.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-sub-title.sc-ion-action-sheet-md{padding-left:0;padding-right:0;padding-top:16px;padding-bottom:0;font-size:14px}.action-sheet-group.sc-ion-action-sheet-md:first-child{padding-top:0}.action-sheet-group.sc-ion-action-sheet-md:last-child{padding-bottom:var(--ion-safe-area-bottom)}.action-sheet-button.sc-ion-action-sheet-md{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;position:relative;height:52px;font-size:16px;text-align:start;contain:strict;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-button.sc-ion-action-sheet-md{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.action-sheet-icon.sc-ion-action-sheet-md{padding-bottom:4px;margin-left:0;margin-right:32px;margin-top:0;margin-bottom:0;color:var(--color);font-size:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.action-sheet-icon.sc-ion-action-sheet-md{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:32px;margin-inline-end:32px}}.action-sheet-button-inner.sc-ion-action-sheet-md{-ms-flex-pack:start;justify-content:flex-start}.action-sheet-selected.sc-ion-action-sheet-md{font-weight:bold}';var ActionSheet=function(){function t(t){var e=this;registerInstance(this,t);this.didPresent=createEvent(this,"ionActionSheetDidPresent",7);this.willPresent=createEvent(this,"ionActionSheetWillPresent",7);this.willDismiss=createEvent(this,"ionActionSheetWillDismiss",7);this.didDismiss=createEvent(this,"ionActionSheetDidDismiss",7);this.presented=false;this.keyboardClose=true;this.buttons=[];this.backdropDismiss=true;this.translucent=false;this.animated=true;this.onBackdropTap=function(){e.dismiss(undefined,BACKDROP)};this.dispatchCancelHandler=function(t){var o=t.detail.role;if(isCancel(o)){var n=e.getButtons().find((function(t){return t.role==="cancel"}));e.callButtonHandler(n)}}}t.prototype.present=function(){return present(this,"actionSheetEnter",iosEnterAnimation,mdEnterAnimation)};t.prototype.connectedCallback=function(){prepareOverlay(this.el)};t.prototype.dismiss=function(t,e){return dismiss(this,t,e,"actionSheetLeave",iosLeaveAnimation,mdLeaveAnimation)};t.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionActionSheetDidDismiss")};t.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionActionSheetWillDismiss")};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,o;return __generator(this,(function(n){switch(n.label){case 0:e=t.role;if(isCancel(e)){return[2,this.dismiss(t.data,e)]}return[4,this.callButtonHandler(t)];case 1:o=n.sent();if(o){return[2,this.dismiss(t.data,t.role)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(o){switch(o.label){case 0:if(!t)return[3,2];return[4,safeCall(t.handler)];case 1:e=o.sent();if(e===false){return[2,false]}o.label=2;case 2:return[2,true]}}))}))};t.prototype.getButtons=function(){return this.buttons.map((function(t){return typeof t==="string"?{text:t}:t}))};t.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.componentDidLoad=function(){var t=this;var e=this,o=e.groupEl,n=e.wrapperEl;if(this.gesture||getIonMode(this)==="md"||!n||!o){return}readTask((function(){var e=o.scrollHeight>o.clientHeight;if(!e){t.gesture=createButtonActiveGesture(n,(function(t){return t.classList.contains("action-sheet-button")}));t.gesture.enable(true)}}))};t.prototype.render=function(){var t;var e=this;var o=this.htmlAttributes;var n=getIonMode(this);var i=this.getButtons();var a=i.find((function(t){return t.role==="cancel"}));var r=i.filter((function(t){return t.role!=="cancel"}));return h(Host,Object.assign({role:"dialog","aria-modal":"true",tabindex:"-1"},o,{style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign(Object.assign((t={},t[n]=true,t),getClassMap(this.cssClass)),{"overlay-hidden":true,"action-sheet-translucent":this.translucent}),onIonActionSheetWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),h("ion-backdrop",{tappable:this.backdropDismiss}),h("div",{tabindex:"0"}),h("div",{class:"action-sheet-wrapper ion-overlay-wrapper",role:"dialog",ref:function(t){return e.wrapperEl=t}},h("div",{class:"action-sheet-container"},h("div",{class:"action-sheet-group",ref:function(t){return e.groupEl=t}},this.header!==undefined&&h("div",{class:{"action-sheet-title":true,"action-sheet-has-sub-title":this.subHeader!==undefined}},this.header,this.subHeader&&h("div",{class:"action-sheet-sub-title"},this.subHeader)),r.map((function(t){return h("button",{type:"button",id:t.id,class:buttonClass(t),onClick:function(){return e.buttonClick(t)}},h("span",{class:"action-sheet-button-inner"},t.icon&&h("ion-icon",{icon:t.icon,lazy:false,class:"action-sheet-icon"}),t.text),n==="md"&&h("ion-ripple-effect",null))}))),a&&h("div",{class:"action-sheet-group action-sheet-group-cancel"},h("button",{type:"button",class:buttonClass(a),onClick:function(){return e.buttonClick(a)}},h("span",{class:"action-sheet-button-inner"},a.icon&&h("ion-icon",{icon:a.icon,lazy:false,class:"action-sheet-icon"}),a.text),n==="md"&&h("ion-ripple-effect",null))))),h("div",{tabindex:"0"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return t}();var buttonClass=function(t){var e;return Object.assign((e={"action-sheet-button":true,"ion-activatable":true,"ion-focusable":true},e["action-sheet-"+t.role]=t.role!==undefined,e),getClassMap(t.cssClass))};ActionSheet.style={ios:actionSheetIosCss,md:actionSheetMdCss};export{ActionSheet as ion_action_sheet};
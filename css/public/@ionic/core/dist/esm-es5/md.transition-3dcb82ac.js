/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as createAnimation}from"./animation-7e9a7324.js";import{g as getIonPageElement}from"./index-2497e97d.js";import"./helpers-6ff04165.js";import"./index-06cd27b1.js";var mdTransitionAnimation=function(e,n){var a="40px";var i="0px";var t=n.direction==="back";var r=n.enteringEl;var o=n.leavingEl;var m=getIonPageElement(r);var s=m.querySelector("ion-toolbar");var l=createAnimation();l.addElement(m).fill("both").beforeRemoveClass("ion-page-invisible");if(t){l.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{l.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+a+")","translateY("+i+")").fromTo("opacity",.01,1)}if(s){var d=createAnimation();d.addElement(s);l.addAnimation(d)}if(o&&t){l.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var c=createAnimation();c.addElement(getIonPageElement(o)).onFinish((function(e){if(e===1&&c.elements.length>0){c.elements[0].style.setProperty("display","none")}})).fromTo("transform","translateY("+i+")","translateY("+a+")").fromTo("opacity",1,0);l.addAnimation(c)}return l};export{mdTransitionAnimation};
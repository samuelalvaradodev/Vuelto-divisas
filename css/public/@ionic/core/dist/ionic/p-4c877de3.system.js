/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-847a6715.system.js","./p-24e81426.system.js","./p-212464dc.system.js","./p-2c9d3ce3.system.js","./p-48158f96.system.js","./p-a25e771f.system.js","./p-8278cb8e.system.js","./p-9fc6326d.system.js","./p-7dd6dd56.system.js","./p-00c09b7c.system.js","./p-8cbcdebf.system.js","./p-ba2492cf.system.js","./p-aa4f3ccf.system.js","./p-8b8d1fdb.system.js"],(function(e){"use strict";var i,t,o;return{setters:[function(i){e("createAnimation",i.c)},function(i){e("iosTransitionAnimation",i.iosTransitionAnimation)},function(i){e("mdTransitionAnimation",i.mdTransitionAnimation)},function(i){e("getTimeGivenProgression",i.g)},function(i){e("createGesture",i.createGesture)},function(i){var t={};t.getPlatforms=i.g;t.initialize=i.i;t.isPlatform=i.a;e(t)},function(n){i=n.a;t=n.r;o=n.b;e("componentOnReady",n.c)},function(i){e("IonicSafeString",i.I)},function(i){var t={};t.LIFECYCLE_DID_ENTER=i.a;t.LIFECYCLE_DID_LEAVE=i.c;t.LIFECYCLE_WILL_ENTER=i.L;t.LIFECYCLE_WILL_LEAVE=i.b;t.LIFECYCLE_WILL_UNLOAD=i.d;e(t)},function(i){e("menuController",i.m)},function(i){var t={};t.actionSheetController=i.b;t.alertController=i.a;t.loadingController=i.l;t.modalController=i.m;t.pickerController=i.p;t.popoverController=i.c;t.toastController=i.t;e(t)},function(){},function(){},function(){}],execute:function(){var n=e("setupConfig",(function(e){var i=window;var t=i.Ionic;if(t&&t.config&&t.config.constructor.name!=="Object"){return}i.Ionic=i.Ionic||{};i.Ionic.config=Object.assign(Object.assign({},i.Ionic.config),e);return i.Ionic.config}));var s=e("getMode",(function(){var e=window;var i=e&&e.Ionic&&e.Ionic.config;if(i){if(i.mode){return i.mode}else{return i.get("mode")}}return"md"}));var r=function(e,n){if(n===void 0){n=true}if(typeof window==="undefined"){return}var s=e.el;var a=s.closest(".ion-page");if(!a){if(n){var l=s.getRootNode();if(l.tagName==="DIV"){var c=new MutationObserver((function(i){var t=i[0];var o=t.oldValue===null;var n=l.classList.contains("ion-page");if(o&&n){c.disconnect();r(e,false)}}));c.observe(l,{attributeFilter:["class"],attributeOldValue:true})}}return}var f=s.closest("ion-modal, ion-popover");if(f){var d=f.tagName==="ION-MODAL"?"ionModalWillPresent":"ionPopoverWillPresent";var u=function(){t((function(){s.swiper.update();o(f,d,u)}))};i(f,d,u)}else{var p=new MutationObserver((function(e){var i;var t=e[0];var o=(i=t.oldValue)===null||i===void 0?void 0:i.includes("ion-page-invisible");var n=a.classList.contains("ion-page-invisible");if(!n&&n!==o){s.swiper.update()}}));p.observe(a,{attributeFilter:["class"],attributeOldValue:true})}var m=function(){s.swiper.update();o(window,"appload",m)};i(window,"appload",m)};var a=e("IonicSwiper",{name:"ionic",on:{afterInit:function(e){console.warn("[Deprecation Warning]: The IonicSwiper module has been deprecated in favor of the IonSlides module. This change was made to better support the Swiper 7 release. The IonicSwiper module will be removed in Ionic 7.0. See https://ionicframework.com/docs/api/slides#migration for revised migration steps.");r(e)}}});var l=e("IonicSlides",(function(e){var i=e.swiper,t=e.extendParams;var o={effect:undefined,direction:"horizontal",initialSlide:0,loop:false,parallax:false,slidesPerView:1,spaceBetween:0,speed:300,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:false,slidesOffsetBefore:0,slidesOffsetAfter:0,touchEventsTarget:"container",autoplay:false,freeMode:false,freeModeMomentum:true,freeModeMomentumRatio:1,freeModeMomentumBounce:true,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:false,freeModeMinimumVelocity:.02,autoHeight:false,setWrapperSize:false,zoom:{maxRatio:3,minRatio:1,toggle:false},touchRatio:1,touchAngle:45,simulateTouch:true,touchStartPreventDefault:false,shortSwipes:true,longSwipes:true,longSwipesRatio:.5,longSwipesMs:300,followFinger:true,threshold:0,touchMoveStopPropagation:true,touchReleaseOnEdges:false,iOSEdgeSwipeDetection:false,iOSEdgeSwipeThreshold:20,resistance:true,resistanceRatio:.85,watchSlidesProgress:false,watchSlidesVisibility:false,preventClicks:true,preventClicksPropagation:true,slideToClickedSlide:false,loopAdditionalSlides:0,noSwiping:true,runCallbacksOnInit:true,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:true},flipEffect:{slideShadows:true,limitRotation:true},cubeEffect:{slideShadows:true,shadow:true,shadowOffset:20,shadowScale:.94},fadeEffect:{crossFade:false},a11y:{prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide"}};if(i.pagination){o.pagination={type:"bullets",clickable:false,hideOnClick:false}}if(i.scrollbar){o.scrollbar={hide:true}}t(o)}))}}}));
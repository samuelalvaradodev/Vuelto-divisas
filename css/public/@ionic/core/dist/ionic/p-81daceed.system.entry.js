var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i["throw"](e))}catch(e){o(e)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-aa4f3ccf.system.js","./p-a25e771f.system.js","./p-2c9d3ce3.system.js","./p-8278cb8e.system.js","./p-7dd6dd56.system.js","./p-4a9a9887.system.js"],(function(e,t){"use strict";var n,i,r,o,s,a,u,f,c,l,h,p,v,d,m,g;return{setters:[function(e){n=e.r;i=e.e;r=e.h;o=e.i;s=e.H},function(e){a=e.b;u=e.c},function(e){f=e.g},function(e){c=e.m},function(e){l=e.l;h=e.t;p=e.s;v=e.d;d=e.b;m=e.c},function(e){g=e.a}],execute:function(){var w=1;var y=2;var b=3;var S=function(){function e(e,t){this.component=e;this.params=t;this.state=w}e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(i){switch(i.label){case 0:this.state=y;if(!!this.element)return[3,2];t=this.component;n=this;return[4,g(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)];case 1:n.element=i.sent();i.label=2;case 2:return[2]}}))}))};e.prototype._destroy=function(){c(this.state!==b,"view state must be ATTACHED");var e=this.element;if(e){if(this.delegate){this.delegate.removeViewFromDom(e.parentElement,e)}else{e.remove()}}this.nav=undefined;this.state=b};return e}();var _=function(e,t,n){if(!e){return false}if(e.component!==t){return false}var i=e.params;if(i===n){return true}if(!i&&!n){return true}if(!i||!n){return false}var r=Object.keys(i);var o=Object.keys(n);if(r.length!==o.length){return false}for(var s=0,a=r;s<a.length;s++){var u=a[s];if(i[u]!==n[u]){return false}}return true};var k=function(e,t){if(!e){return null}if(e instanceof S){return e}return new S(e,t)};var C=function(e){return e.map((function(e){if(e instanceof S){return e}if("component"in e){return k(e.component,e.componentProps===null?undefined:e.componentProps)}return k(e,undefined)})).filter((function(e){return e!==null}))};var T=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var V=e("ion_nav",function(){function e(e){n(this,e);this.ionNavWillLoad=i(this,"ionNavWillLoad",7);this.ionNavWillChange=i(this,"ionNavWillChange",3);this.ionNavDidChange=i(this,"ionNavDidChange",3);this.transInstr=[];this.animationEnabled=true;this.useRouter=false;this.isTransitioning=false;this.destroyed=false;this.views=[];this.animated=true}e.prototype.swipeGestureChanged=function(){if(this.gesture){this.gesture.enable(this.swipeGesture===true)}};e.prototype.rootChanged=function(){if(this.root!==undefined){if(!this.useRouter){this.setRoot(this.root,this.rootParams)}}};e.prototype.componentWillLoad=function(){this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]");if(this.swipeGesture===undefined){var e=a(this);this.swipeGesture=u.getBoolean("swipeBackEnabled",e==="ios")}this.ionNavWillLoad.emit()};e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:this.rootChanged();e=this;return[4,t.import("./p-9c784512.system.js")];case 1:e.gesture=n.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this));this.swipeGestureChanged();return[2]}}))}))};e.prototype.disconnectedCallback=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];l(n.element,v);n._destroy()}if(this.gesture){this.gesture.destroy();this.gesture=undefined}this.transInstr.length=this.views.length=0;this.destroyed=true};e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:n},i)};e.prototype.insert=function(e,t,n,i,r){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:n}],opts:i},r)};e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)};e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)};e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};if(typeof e==="object"&&e.component){i.removeView=e;i.removeStart=1}else if(typeof e==="number"){i.removeStart=e+1}return this.queueTrns(i,n)};e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)};e.prototype.removeIndex=function(e,t,n,i){if(t===void 0){t=1}return this.queueTrns({removeStart:e,removeCount:t,opts:n},i)};e.prototype.setRoot=function(e,t,n,i){return this.setPages([{component:e,componentProps:t}],n,i)};e.prototype.setPages=function(e,t,n){if(t==null){t={}}if(t.animated!==true){t.animated=false}return this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)};e.prototype.setRouteId=function(e,t,n,i){var r=this;var o=this.getActiveSync();if(_(o,e,t)){return Promise.resolve({changed:false,element:o.element})}var s;var a=new Promise((function(e){return s=e}));var u;var f={updateURL:false,viewIsReady:function(e){var t;var n=new Promise((function(e){return t=e}));s({changed:true,element:e,markVisible:function(){return __awaiter(r,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:t();return[4,u];case 1:e.sent();return[2]}}))}))}});return n}};if(n==="root"){u=this.setRoot(e,t,f)}else{var c=this.views.find((function(n){return _(n,e,t)}));if(c){u=this.popTo(c,Object.assign(Object.assign({},f),{direction:"back",animationBuilder:i}))}else if(n==="forward"){u=this.push(e,t,Object.assign(Object.assign({},f),{animationBuilder:i}))}else if(n==="back"){u=this.setRoot(e,t,Object.assign(Object.assign({},f),{direction:"back",animated:true,animationBuilder:i}))}}return a};e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.getActiveSync();return[2,e?{id:e.element.tagName,params:e.params,element:e.element}:undefined]}))}))};e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())};e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])};e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))};e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))};e.prototype.getLength=function(){return this.views.length};e.prototype.getActiveSync=function(){return this.views[this.views.length-1]};e.prototype.canGoBackSync=function(e){if(e===void 0){e=this.getActiveSync()}return!!(e&&this.getPreviousSync(e))};e.prototype.getPreviousSync=function(e){if(e===void 0){e=this.getActiveSync()}if(!e){return undefined}var t=this.views;var n=t.indexOf(e);return n>0?t[n-1]:undefined};e.prototype.queueTrns=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,i,r;return __generator(this,(function(o){switch(o.label){case 0:if(this.isTransitioning&&e.opts!=null&&e.opts.skipIfBusy){return[2,Promise.resolve(false)]}n=new Promise((function(t,n){e.resolve=t;e.reject=n}));e.done=t;if(!(e.opts&&e.opts.updateURL!==false&&this.useRouter))return[3,2];i=document.querySelector("ion-router");if(!i)return[3,2];return[4,i.canTransition()];case 1:r=o.sent();if(r===false){return[2,Promise.resolve(false)]}else if(typeof r==="string"){i.push(r,e.opts.direction||"back");return[2,Promise.resolve(false)]}o.label=2;case 2:if(e.insertViews&&e.insertViews.length===0){e.insertViews=undefined}this.transInstr.push(e);this.nextTrns();return[2,n]}}))}))};e.prototype.success=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}if(t.done){t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction)}t.resolve(e.hasCompleted);if(t.opts.updateURL!==false&&this.useRouter){var n=document.querySelector("ion-router");if(n){var i=e.direction==="back"?"back":"forward";n.navChanged(i)}}};e.prototype.failed=function(e,t){if(this.destroyed){this.fireError("nav controller was destroyed",t);return}this.transInstr.length=0;this.fireError(e,t)};e.prototype.fireError=function(e,t){if(t.done){t.done(false,false,e)}if(t.reject&&!this.destroyed){t.reject(e)}else{t.resolve(false)}};e.prototype.nextTrns=function(){if(this.isTransitioning){return false}var e=this.transInstr.shift();if(!e){return false}this.runTransition(e);return true};e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,r,o,s,a;return __generator(this,(function(u){switch(u.label){case 0:u.trys.push([0,6,,7]);this.ionNavWillChange.emit();this.isTransitioning=true;this.prepareTI(e);t=this.getActiveSync();n=this.getEnteringView(e,t);if(!t&&!n){throw new Error("no views in the stack to be removed")}if(!(n&&n.state===w))return[3,2];return[4,n.init(this.el)];case 1:u.sent();u.label=2;case 2:this.postViewInit(n,t,e);i=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t;if(i&&e.opts&&t){r=e.opts.direction==="back";if(r){e.opts.animationBuilder=e.opts.animationBuilder||n&&n.animationBuilder}t.animationBuilder=e.opts.animationBuilder}if(!i)return[3,4];return[4,this.transition(n,t,e)];case 3:s=u.sent();return[3,5];case 4:s={hasCompleted:true,requiresTransition:false};u.label=5;case 5:o=s;this.success(o,e);this.ionNavDidChange.emit();return[3,7];case 6:a=u.sent();this.failed(a,e);return[3,7];case 7:this.isTransitioning=false;this.nextTrns();return[2]}}))}))};e.prototype.prepareTI=function(e){var t=this.views.length;e.opts=e.opts||{};if(e.opts.delegate===undefined){e.opts.delegate=this.delegate}if(e.removeView!==undefined){c(e.removeStart!==undefined,"removeView needs removeStart");c(e.removeCount!==undefined,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0){throw new Error("removeView was not found")}e.removeStart+=n}if(e.removeStart!==undefined){if(e.removeStart<0){e.removeStart=t-1}if(e.removeCount<0){e.removeCount=t-e.removeStart}e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t}if(e.insertViews){if(e.insertStart<0||e.insertStart>t){e.insertStart=t}e.enteringRequiresTransition=e.insertStart===t}var i=e.insertViews;if(!i){return}c(i.length>0,"length can not be zero");var r=C(i);if(r.length===0){throw new Error("invalid views to insert")}for(var o=0,s=r;o<s.length;o++){var a=s[o];a.delegate=e.opts.delegate;var u=a.nav;if(u&&u!==this){throw new Error("inserted view was already inserted")}if(a.state===b){throw new Error("inserted view was already destroyed")}}e.insertViews=r};e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(n!==undefined){return n[n.length-1]}var i=e.removeStart;if(i!==undefined){var r=this.views;var o=i+e.removeCount;for(var s=r.length-1;s>=0;s--){var a=r[s];if((s<i||s>=o)&&a!==t){return a}}}return undefined};e.prototype.postViewInit=function(e,t,n){c(t||e,"Both leavingView and enteringView are null");c(n.resolve,"resolve must be valid");c(n.reject,"reject must be valid");var i=n.opts;var r=n.insertViews;var o=n.removeStart;var s=n.removeCount;var a;if(o!==undefined&&s!==undefined){c(o>=0,"removeStart can not be negative");c(s>=0,"removeCount can not be negative");a=[];for(var u=0;u<s;u++){var f=this.views[u+o];if(f&&f!==e&&f!==t){a.push(f)}}i.direction=i.direction||"back"}var h=this.views.length+(r!==undefined?r.length:0)-(s!==undefined?s:0);c(h>=0,"final balance can not be negative");if(h===0){console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el);throw new Error("navigation stack needs at least one root page")}if(r){var p=n.insertStart;for(var g=0,w=r;g<w.length;g++){var f=w[g];this.insertViewAt(f,p);p++}if(n.enteringRequiresTransition){i.direction=i.direction||"forward"}}if(a&&a.length>0){for(var y=0,b=a;y<b.length;y++){var f=b[y];l(f.element,d);l(f.element,m);l(f.element,v)}for(var S=0,_=a;S<_.length;S++){var f=_[S];this.destroyView(f)}}};e.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var i,r,o,s,f,c,l;var p=this;return __generator(this,(function(v){switch(v.label){case 0:i=n.opts;r=i.progressAnimation?function(e){return p.sbAni=e}:undefined;o=a(this);s=e.element;f=t&&t.element;c=Object.assign(Object.assign({mode:o,showGoBack:this.canGoBackSync(e),baseEl:this.el,progressCallback:r,animated:this.animated&&u.getBoolean("animated",true),enteringEl:s,leavingEl:f},i),{animationBuilder:i.animationBuilder||this.animation||u.get("navAnimation")});return[4,h(c)];case 1:l=v.sent().hasCompleted;return[2,this.transitionFinish(l,e,t,i)]}}))}))};e.prototype.transitionFinish=function(e,t,n,i){var r=e?t:n;if(r){this.cleanup(r)}return{hasCompleted:e,requiresTransition:true,enteringView:t,leavingView:n,direction:i.direction}};e.prototype.insertViewAt=function(e,t){var n=this.views;var i=n.indexOf(e);if(i>-1){c(e.nav===this,"view is not part of the nav");n.splice(t,0,n.splice(i,1)[0])}else{c(!e.nav,"nav is used");e.nav=this;n.splice(t,0,e)}};e.prototype.removeView=function(e){c(e.state===y||e.state===b,"view state should be loaded or destroyed");var t=this.views;var n=t.indexOf(e);c(n>-1,"view must be part of the stack");if(n>=0){t.splice(n,1)}};e.prototype.destroyView=function(e){e._destroy();this.removeView(e)};e.prototype.cleanup=function(e){if(this.destroyed){return}var t=this.views;var n=t.indexOf(e);for(var i=t.length-1;i>=0;i--){var r=t[i];var o=r.element;if(o){if(i>n){l(o,v);this.destroyView(r)}else if(i<n){p(o,true)}}}};e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.transInstr.length===0&&this.animationEnabled&&this.canGoBackSync()};e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:true}},undefined)};e.prototype.onMove=function(e){if(this.sbAni){this.sbAni.progressStep(e)}};e.prototype.onEnd=function(e,t,n){var i=this;if(this.sbAni){this.animationEnabled=false;this.sbAni.onFinish((function(){i.animationEnabled=true}),{oneTimeCallback:true});var r=e?-.001:.001;if(!e){this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)");r+=f([0,0],[1,0],[.68,.28],[1,1],t)[0]}else{r+=f([0,0],[.32,.72],[0,1],[1,1],t)[0]}this.sbAni.progressEnd(e?1:0,r,n)}};e.prototype.render=function(){return r("slot",null)};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:false,configurable:true});return e}());V.style=T;var P=function(e,t,n,i,r){var o=e.closest("ion-nav");if(o){if(t==="forward"){if(n!==undefined){return o.push(n,i,{skipIfBusy:true,animationBuilder:r})}}else if(t==="root"){if(n!==undefined){return o.setRoot(n,i,{skipIfBusy:true,animationBuilder:r})}}else if(t==="back"){return o.pop({skipIfBusy:true,animationBuilder:r})}}return Promise.resolve(false)};var B=e("ion_nav_link",function(){function e(e){var t=this;n(this,e);this.routerDirection="forward";this.onClick=function(){return P(t.el,t.routerDirection,t.component,t.componentProps,t.routerAnimation)}}e.prototype.render=function(){return r(s,{onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return e}())}}}));
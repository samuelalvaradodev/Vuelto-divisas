var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r["throw"](t))}catch(t){i(t)}}function c(t){t.done?n(t.value):o(t.value).then(a,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(t){return function(e){return c([t,e])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,o&&(i=a[0]&2?o["return"]:a[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;if(o=0,i)a=[a[0]&2,i.value];switch(a[0]){case 0:case 1:i=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;o=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1];i=a;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(a);break}if(i[2])n.ops.pop();n.trys.pop();continue}a=e.call(t,n)}catch(t){a=[6,t];o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-aa4f3ccf.system.js","./p-8278cb8e.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.f;n=t.c},function(t){r=t.c}],execute:function(){var o=this;var i=t("startStatusTap",(function(){var t=window;t.addEventListener("statusTap",(function(){e((function(){var e=t.innerWidth;var i=t.innerHeight;var a=document.elementFromPoint(e/2,i/2);if(!a){return}var u=a.closest("ion-content");if(u){new Promise((function(t){return r(u,t)})).then((function(){n((function(){return __awaiter(o,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:u.style.setProperty("--overflow","hidden");return[4,u.scrollToTop(300)];case 1:t.sent();u.style.removeProperty("--overflow");return[2]}}))}))}))}))}}))}))}))}}}));
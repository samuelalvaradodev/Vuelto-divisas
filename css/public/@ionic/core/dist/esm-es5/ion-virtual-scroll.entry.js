import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,f as readTask,c as writeTask,j as forceUpdate,h,H as Host,i as getElement}from"./index-06cd27b1.js";import{c as componentOnReady}from"./helpers-6ff04165.js";var CELL_TYPE_ITEM="item";var CELL_TYPE_HEADER="header";var CELL_TYPE_FOOTER="footer";var NODE_CHANGE_NONE=0;var NODE_CHANGE_POSITION=1;var NODE_CHANGE_CELL=2;var MIN_READS=2;var updateVDom=function(t,e,i,r){for(var n=0,o=t;n<o.length;n++){var a=o[n];a.change=NODE_CHANGE_NONE;a.d=true}var s=[];var l=r.offset+r.length;var h=function(r){var n=i[r];var o=t.find((function(t){return t.d&&t.cell===n}));if(o){var a=e[r];if(a!==o.top){o.top=a;o.change=NODE_CHANGE_POSITION}o.d=false}else{s.push(n)}};for(var c=r.offset;c<l;c++){h(c)}var u=t.filter((function(t){return t.d}));var f=function(i){var r=u.find((function(t){return t.d&&t.cell.type===i.type}));var n=i.i;if(r){r.d=false;r.change=NODE_CHANGE_CELL;r.cell=i;r.top=e[n]}else{t.push({d:false,cell:i,visible:true,change:NODE_CHANGE_CELL,top:e[n]})}};for(var d=0,p=s;d<p.length;d++){var v=p[d];f(v)}t.filter((function(t){return t.d&&t.top!==-9999})).forEach((function(t){t.change=NODE_CHANGE_POSITION;t.top=-9999}))};var doRender=function(t,e,i,r){var n=Array.from(t.children).filter((function(t){return t.tagName!=="TEMPLATE"}));var o=n.length;var a;for(var s=0;s<i.length;s++){var l=i[s];var h=l.cell;if(l.change===NODE_CHANGE_CELL){if(s<o){a=n[s];e(a,h,s)}else{var c=createNode(t,h.type);a=e(c,h,s)||c;a.classList.add("virtual-item");t.appendChild(a)}a["$ionCell"]=h}else{a=n[s]}if(l.change!==NODE_CHANGE_NONE){a.style.transform="translate3d(0,"+l.top+"px,0)"}var u=h.visible;if(l.visible!==u){if(u){a.classList.remove("virtual-loading")}else{a.classList.add("virtual-loading")}l.visible=u}if(h.reads>0){r(h,a);h.reads--}}};var createNode=function(t,e){var i=getTemplate(t,e);if(i&&t.ownerDocument){return t.ownerDocument.importNode(i.content,true).children[0]}return null};var getTemplate=function(t,e){switch(e){case CELL_TYPE_ITEM:return t.querySelector("template:not([name])");case CELL_TYPE_HEADER:return t.querySelector("template[name=header]");case CELL_TYPE_FOOTER:return t.querySelector("template[name=footer]")}};var getViewport=function(t,e,i){return{top:Math.max(t-i,0),bottom:t+e+i}};var getRange=function(t,e,i){var r=e.top;var n=e.bottom;var o=0;for(;o<t.length;o++){if(t[o]>r){break}}var a=Math.max(o-i-1,0);for(;o<t.length;o++){if(t[o]>=n){break}}var s=Math.min(o+i,t.length);var l=s-a;return{offset:a,length:l}};var getShouldUpdate=function(t,e,i){var r=i.offset+i.length;return t<=r||e.offset!==i.offset||e.length!==i.length};var findCellIndex=function(t,e){var i=t.length>0?t[t.length-1].index:0;if(e===0){return 0}else if(e===i+1){return t.length}else{return t.findIndex((function(t){return t.index===e}))}};var inplaceUpdate=function(t,e,i){if(i===0&&e.length>=t.length){return e}for(var r=0;r<e.length;r++){t[r+i]=e[r]}return t};var calcCells=function(t,e,i,r,n,o,a,s,l,h,c,u){var f=[];var d=u+c;for(var p=c;p<d;p++){var v=t[p];if(n){var g=n(v,p,t);if(g!=null){f.push({i:h++,type:CELL_TYPE_HEADER,value:g,index:p,height:i?i(g,p):a,reads:i?0:MIN_READS,visible:!!i})}}f.push({i:h++,type:CELL_TYPE_ITEM,value:v,index:p,height:e?e(v,p):l,reads:e?0:MIN_READS,visible:!!e});if(o){var g=o(v,p,t);if(g!=null){f.push({i:h++,type:CELL_TYPE_FOOTER,value:g,index:p,height:r?r(g,p):s,reads:r?0:MIN_READS,visible:!!r})}}}return f};var calcHeightIndex=function(t,e,i){var r=t[i];for(var n=i;n<t.length;n++){t[n]=r;r+=e[n].height}return r};var resizeBuffer=function(t,e){if(!t){return new Uint32Array(e)}if(t.length===e){return t}else if(e>t.length){var i=new Uint32Array(e);i.set(t);return i}else{return t.subarray(0,e)}};var positionForIndex=function(t,e,i){var r=e.find((function(e){return e.type===CELL_TYPE_ITEM&&e.index===t}));if(r){return i[r.i]}return-1};var virtualScrollCss="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}";var VirtualScroll=function(){function t(t){var e=this;registerInstance(this,t);this.range={offset:0,length:0};this.viewportHeight=0;this.cells=[];this.virtualDom=[];this.isEnabled=false;this.viewportOffset=0;this.currentScrollTop=0;this.indexDirty=0;this.lastItemLen=0;this.totalHeight=0;this.approxItemHeight=45;this.approxHeaderHeight=30;this.approxFooterHeight=30;this.onScroll=function(){e.updateVirtualScroll()}}t.prototype.itemsChanged=function(){this.calcCells();this.updateVirtualScroll()};t.prototype.componentWillLoad=function(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")};t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:t=this.el.closest("ion-content");if(!t){console.error("<ion-virtual-scroll> must be used inside an <ion-content>");return[2]}e=this;return[4,t.getScrollElement()];case 1:e.scrollEl=i.sent();this.contentEl=t;this.calcCells();this.updateState();return[2]}}))}))};t.prototype.componentDidUpdate=function(){this.updateState()};t.prototype.disconnectedCallback=function(){this.scrollEl=undefined};t.prototype.onResize=function(){this.calcCells();this.updateVirtualScroll()};t.prototype.positionForItem=function(t){return Promise.resolve(positionForIndex(t,this.cells,this.getHeightIndex()))};t.prototype.checkRange=function(t,e){if(e===void 0){e=-1}return __awaiter(this,void 0,void 0,(function(){var i,r,n;return __generator(this,(function(o){if(!this.items){return[2]}i=e===-1?this.items.length-t:e;r=findCellIndex(this.cells,t);n=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,r,t,i);this.cells=inplaceUpdate(this.cells,n,r);this.lastItemLen=this.items.length;this.indexDirty=Math.max(t-1,0);this.scheduleUpdate();return[2]}))}))};t.prototype.checkEnd=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){if(this.items){this.checkRange(this.lastItemLen)}return[2]}))}))};t.prototype.updateVirtualScroll=function(){if(!this.isEnabled||!this.scrollEl){return}if(this.timerUpdate){clearTimeout(this.timerUpdate);this.timerUpdate=undefined}readTask(this.readVS.bind(this));writeTask(this.writeVS.bind(this))};t.prototype.readVS=function(){var t=this,e=t.contentEl,i=t.scrollEl,r=t.el;var n=0;var o=r;while(o&&o!==e){n+=o.offsetTop;o=o.offsetParent}this.viewportOffset=n;if(i){this.viewportHeight=i.offsetHeight;this.currentScrollTop=i.scrollTop}};t.prototype.writeVS=function(){var t=this.indexDirty;var e=this.currentScrollTop-this.viewportOffset;var i=getViewport(e,this.viewportHeight,100);var r=this.getHeightIndex();var n=getRange(r,i,2);var o=getShouldUpdate(t,this.range,n);if(!o){return}this.range=n;updateVDom(this.virtualDom,r,this.cells,n);if(this.nodeRender){doRender(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this))}else if(this.domRender){this.domRender(this.virtualDom)}else if(this.renderItem){forceUpdate(this)}};t.prototype.updateCellHeight=function(t,e){var i=this;var r=function(){if(e["$ionCell"]===t){var r=window.getComputedStyle(e);var n=e.offsetHeight+parseFloat(r.getPropertyValue("margin-bottom"));i.setCellHeight(t,n)}};if(e){componentOnReady(e,r)}else{r()}};t.prototype.setCellHeight=function(t,e){var i=t.i;if(t!==this.cells[i]){return}if(t.height!==e||t.visible!==true){t.visible=true;t.height=e;this.indexDirty=Math.min(this.indexDirty,i);this.scheduleUpdate()}};t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate);this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)};t.prototype.updateState=function(){var t=!!(this.scrollEl&&this.cells);if(t!==this.isEnabled){this.enableScrollEvents(t);if(t){this.updateVirtualScroll()}}};t.prototype.calcCells=function(){if(!this.items){return}this.lastItemLen=this.items.length;this.cells=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen);this.indexDirty=0};t.prototype.getHeightIndex=function(){if(this.indexDirty!==Infinity){this.calcHeightIndex(this.indexDirty)}return this.heightIndex};t.prototype.calcHeightIndex=function(t){if(t===void 0){t=0}this.heightIndex=resizeBuffer(this.heightIndex,this.cells.length);this.totalHeight=calcHeightIndex(this.heightIndex,this.cells,t);this.indexDirty=Infinity};t.prototype.enableScrollEvents=function(t){var e=this;if(this.rmEvent){this.rmEvent();this.rmEvent=undefined}var i=this.scrollEl;if(i){this.isEnabled=t;i.addEventListener("scroll",this.onScroll);this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)}}};t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,r=e.value,n=e.index;switch(i){case CELL_TYPE_ITEM:return this.renderItem(r,n);case CELL_TYPE_HEADER:return this.renderHeader(r,n);case CELL_TYPE_FOOTER:return this.renderFooter(r,n)}};t.prototype.render=function(){var t=this;return h(Host,{style:{height:this.totalHeight+"px"}},this.renderItem&&h(VirtualProxy,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:false,configurable:true});return t}();var VirtualProxy=function(t,e,i){var r=t.dom;return i.map(e,(function(t,e){var i=r[e];var n=t.vattrs||{};var o=n.class||"";o+="virtual-item ";if(!i.visible){o+="virtual-loading"}return Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},n),{class:o,style:Object.assign(Object.assign({},n.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))};VirtualScroll.style=virtualScrollCss;export{VirtualScroll as ion_virtual_scroll};
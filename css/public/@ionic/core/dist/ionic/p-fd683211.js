/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{k as t}from"./p-dc344987.js";import{createGesture as o}from"./p-ca42820c.js";import"./p-d216b4ab.js";const r=(r,e,s,a,n)=>{const c=r.ownerDocument.defaultView;return o({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:s,onMove:t=>{a(t.deltaX/c.innerWidth)},onEnd:o=>{const r=c.innerWidth,e=o.deltaX/r,s=o.velocityX,a=s>=0&&(s>.2||o.deltaX>r/2),p=(a?1-e:e)*r;let i=0;if(p>5){const t=p/Math.abs(s);i=Math.min(t,540)}n(a,e<=0?.01:t(0,e,.9999),i)}})};export{r as createSwipeBackGesture}
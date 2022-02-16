/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,f as n,c as i,h as a,i as e,H as o}from"./p-70d27bbc.js";import{b as r}from"./p-6cc127f3.js";let s=class{constructor(n){t(this,n),this.type="bounded"}async addRipple(t,a){return new Promise((e=>{n((()=>{const n=this.el.getBoundingClientRect(),o=n.width,r=n.height,s=Math.sqrt(o*o+r*r),l=Math.max(r,o),u=this.unbounded?l:s+c,d=Math.floor(l*f),p=u/d;let b=t-n.left,w=a-n.top;this.unbounded&&(b=.5*o,w=.5*r);const k=b-.5*d,h=w-.5*d,y=.5*o-b,g=.5*r-w;i((()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=h+"px",n.left=k+"px",n.width=n.height=d+"px",n.setProperty("--final-scale",`${p}`),n.setProperty("--translate-end",`${y}px, ${g}px`),(this.el.shadowRoot||this.el).appendChild(t),setTimeout((()=>{e((()=>{m(t)}))}),325)}))}))}))}get unbounded(){return"unbounded"===this.type}render(){const t=r(this);return a(o,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return e(this)}};const m=t=>{t.classList.add("fade-out"),setTimeout((()=>{t.remove()}),200)},c=10,f=.5;s.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}";export{s as ion_ripple_effect}
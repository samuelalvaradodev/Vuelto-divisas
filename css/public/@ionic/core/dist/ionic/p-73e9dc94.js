/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{f as o,c as t}from"./p-70d27bbc.js";import{c as n}from"./p-dc344987.js";const s=()=>{const s=window;s.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(s.innerWidth/2,s.innerHeight/2);if(!o)return;const c=o.closest("ion-content");c&&new Promise((o=>n(c,o))).then((()=>{t((async()=>{c.style.setProperty("--overflow","hidden"),await c.scrollToTop(300),c.style.removeProperty("--overflow")}))}))}))}))};export{s as startStatusTap}
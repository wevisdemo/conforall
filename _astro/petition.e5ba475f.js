import{n as nt,s as un,v as ys,S as Nn,i as Fn,e as T,a as te,w as Zn,c as I,b as L,d as g,f as ne,x as Es,j as O,y as Cr,r as Me,z as Sr,t as Ne,A as ws,o as Pr,B as As,C as Dr,D as xr,E as kr,F as Rr,G as Or,l as At,p as Tt,m as ve,h as f,H as jt,k as A,q as It,I as Ts,u as Ct,J as Is,K as Ye,L as Je,M as Cs,N as Kt,O as Ue,P as je,Q as Ss}from"./index.a3c019eb.js";function Ps(n,...e){const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function We(n){let e;return Ps(n,t=>e=t)(),e}class Ds extends Error{constructor(e,t){super(e),this.name="FelteSubmitError",this.response=t}}function xs(n,e){return Object.keys(n).some(r=>e(n[r]))}function hn(n,e){return Object.keys(n||{}).reduce((r,s)=>Object.assign(Object.assign({},r),{[s]:e(n[s])}),{})}function N(n){return Object.prototype.toString.call(n)==="[object Object]"}function Ce(n){return Object.keys(n||{}).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:N(n[t])?Ce(n[t]):Array.isArray(n[t])?[...n[t]]:n[t]}),{})}function ks(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Rs(n){return function(e){if(N(e)){const t=Se(e,n);return ks(t,["key"])}return n}}function Se(n,e){return hn(n,t=>N(t)?Se(t,e):Array.isArray(t)?t.map(Rs(e)):e)}function rt(...n){const e=n.pop(),t=n.shift();if(typeof t=="string")return t;const r=Ce(t);if(n.length===0)return r;for(const s of n){if(!s)continue;if(typeof s=="string")return s;let i=e(r,s);if(typeof i<"u")return i;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(s))));for(const a of o)if(i=e(r[a],s[a]),typeof i<"u")r[a]=i;else if(N(s[a])&&N(r[a]))r[a]=rt(r[a],s[a],e);else if(Array.isArray(s[a]))r[a]=s[a].map((l,c)=>{if(!N(l))return l;const h=Array.isArray(r[a])?r[a][c]:r[a];return rt(h,l,e)});else if(N(s[a])){const l=Se(Ce(s[a]),void 0);r[a]=rt(l,s[a],e)}else typeof s[a]<"u"&&(r[a]=s[a])}return r}function Os(n,e){if(!(N(n)&&N(e))){if(Array.isArray(e)){if(e.some(N))return;const t=Array.isArray(n)?n:[];return e.map((r,s)=>{var i;return(i=t[s])!==null&&i!==void 0?i:r})}if(typeof n<"u")return n}}function Yn(...n){return rt(...n,Os)}function Lr(...n){return rt(...n,()=>{})}function ze(n,e,t){const r=i=>String.prototype.split.call(e,i).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,n),s=r(/[,[\]]+?/)||r(/[,[\].]+?/);return s===void 0||s===n?t:s}function Bt(n,e,t){n&&(n=Ce(n)),N(n)||(n={});const r=Array.isArray(e)?e:e.match(/[^.[\]]+/g)||[],s=r[r.length-1];if(!s)return n;let i=n;for(let o=0;o<r.length-1;o++){const a=r[o];if(!i[a]||!N(i[a])&&!Array.isArray(i[a])){const l=r[o+1];isNaN(Number(l))?i[a]={}:i[a]=[]}i=i[a]}return i[s]=t(i[s]),n}function J(n,e,t){return Bt(n,e,()=>t)}function St(n,e){if(!n||Object(n)!==n)return;typeof n<"u"&&(n=Ce(n));const t=Array.isArray(e)?e:e.toString().match(/[^.[\]]+/g)||[],r=t.length===1?n:ze(n,t.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(t[t.length-1]),1):r==null||delete r[t[t.length-1]],n}function Rt(n,e){return xs(n,t=>N(t)?Rt(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e(t):t.some(r=>N(r)?Rt(r,e):e(r)):e(t))}function pt(n){return n?.nodeName==="INPUT"}function Ls(n){return n?.nodeName==="TEXTAREA"}function mt(n){return n?.nodeName==="SELECT"}function dn(n){return n?.nodeName==="FIELDSET"}function _e(n){return pt(n)||Ls(n)||mt(n)}function Jn(n){return n.nodeType===Node.ELEMENT_NODE}function de(n,e){return e??(_e(n)?n.name:"")}function gn(n){let e=n;for(;e&&e.nodeName!=="FORM";){if(e.hasAttribute("data-felte-ignore"))return!0;e=e.parentElement}return!1}function Vs(n,e){if(!(N(n)||N(e))){if(n===null||n==="")return e;if(e===null||e===""||!e)return n;if(!(!n||!e)){if(Array.isArray(n)){if(!Array.isArray(e))return[...n,e];const t=[],r=Math.max(e.length,n.length);for(let s=0;s<r;s++){let i=n[s],o=e[s];!N(i)&&!N(o)?(Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]),t.push(...i,...o)):t.push(ft([i??{},o??{}]))}return t.filter(Boolean)}return Array.isArray(e)||(e=[e]),[n,...e].reduce((t,r)=>t.concat(r),[]).filter(Boolean)}}}function ft(n){return rt(...n,Vs)}function Ms(n,e){return e?(Array.isArray(e)?e:[e]).map(r=>r(n)):[]}function An(n,e){return e?Array.isArray(e)?e.reduce((t,r)=>r(t),n):e(n):n}function $n(n=8){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function Zt(n,e,{onInit:t,onEnd:r}={}){let s;return(...i)=>{s||t?.(),s&&clearTimeout(s),s=setTimeout(()=>{n.apply(this,i),s=void 0,r?.()},e)}}function Tn(n){if(_e(n))return[n];if(n.childElementCount===0)return[];const e=new Set;for(const t of n.children){if(_e(t)&&e.add(t),dn(t))for(const r of t.elements)_e(r)&&e.add(r);t.childElementCount>0&&Tn(t).forEach(r=>e.add(r))}return Array.from(e)}function Vr(n){for(const e of n.elements)!_e(e)&&!dn(e)||n.hasAttribute("data-felte-keep-on-remove")&&!e.hasAttribute("data-felte-keep-on-remove")&&(e.dataset.felteKeepOnRemove=n.dataset.felteKeepOnRemove)}function Mr(n){return n.type.match(/^(number|range)$/)?n.value?+n.value:void 0:n.value}function Xn(n){var e;let t={},r={};for(const s of n.elements){if(dn(s)&&Vr(s),!_e(s)||!s.name)continue;const i=de(s);if(pt(s)){if(s.type==="checkbox"){if(typeof ze(t,i)>"u"){if(Array.from(n.querySelectorAll(`[name="${s.name}"]`)).filter(l=>_e(l)?i===de(l):!1).length===1){t=J(t,i,s.checked),r=J(r,i,!1);continue}t=J(t,i,s.checked?[s.value]:[]),r=J(r,i,!1);continue}Array.isArray(ze(t,i))&&s.checked&&(t=Bt(t,i,a=>[...a,s.value]));continue}if(s.type==="radio"){if(ze(t,i))continue;t=J(t,i,s.checked?s.value:void 0),r=J(r,i,!1);continue}if(s.type==="file"){t=J(t,i,s.multiple?Array.from(s.files||[]):(e=s.files)===null||e===void 0?void 0:e[0]),r=J(r,i,!1);continue}}else if(mt(s)){if(!s.multiple)t=J(t,i,s.value);else{const l=Array.from(s.selectedOptions).map(c=>c.value);t=J(t,i,l)}r=J(r,i,!1);continue}const o=Mr(s);t=J(t,i,o),r=J(r,i,!1)}return{defaultData:t,defaultTouched:r}}function Ns(n,e){var t;if(!_e(n))return;const r=e;if(pt(n)){if(n.type==="checkbox"){const s=r;if(typeof s>"u"||typeof s=="boolean"){n.checked=!!s;return}Array.isArray(s)&&(s.includes(n.value)?n.checked=!0:n.checked=!1);return}if(n.type==="radio"){const s=r;n.value===s?n.checked=!0:n.checked=!1;return}if(n.type==="file"){if(e instanceof FileList)n.files=e;else if(e instanceof File&&typeof DataTransfer<"u"){const s=new DataTransfer;s.items.add(e),n.files=s.files}else if(typeof DataTransfer<"u"&&Array.isArray(e)&&e.some(s=>s instanceof File)){const s=new DataTransfer;for(const i of e)i instanceof File&&s.items.add(i);n.files=s.files}else(!e||Array.isArray(e)&&!e.length)&&(n.files=null,n.value="");return}}else if(mt(n)){if(n.multiple){if(Array.isArray(r)){n.value=String((t=r[0])!==null&&t!==void 0?t:"");const i=r.map(o=>String(o));for(const o of n.options)i.includes(o.value)?o.selected=!0:o.selected=!1}}else{n.value=String(r??"");for(const i of n.options)i.value===String(r)?i.selected=!0:i.selected=!1}return}n.value=String(r??"")}function Ht(n,e){for(const t of n.elements){if(dn(t)&&Vr(t),!_e(t)||!t.name)continue;const r=de(t);Ns(t,ze(e,r))}}function Nr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function qe(n,e){return hn(n,t=>N(t)?qe(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e:t.map(r=>{const s=qe(r,e);return Nr(s,["key"])}):e)}function ut(n){return n?hn(n,e=>N(e)?ut(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!N(t))return t;const r=ut(t);return r.key||(r.key=$n()),r}):e):{}}function ct(n){return n?hn(n,e=>N(e)?ct(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!N(t))return t;const r=ct(t);return Nr(r,["key"])}):e):{}}function Fs(){class n extends CustomEvent{constructor(s){super("feltesuccess",{detail:s})}}class e extends CustomEvent{constructor(s){super("felteerror",{detail:s,cancelable:!0})}setErrors(s){this.preventDefault(),this.errors=s}}class t extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(s){this.onSubmit=s}handleError(s){this.onError=s}handleSuccess(s){this.onSuccess=s}}return{createErrorEvent:r=>new e(r),createSubmitEvent:()=>new t,createSuccessEvent:r=>new n(r)}}function $s(n){if(n)return async function(){let t=new FormData(n);const r=new URL(n.action),s=n.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||n.method;let i=n.enctype;n.querySelector('input[type="file"]')&&(i="multipart/form-data"),(s==="get"||i==="application/x-www-form-urlencoded")&&(t=new URLSearchParams(t));let o;s==="get"?(t.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:s,headers:{Accept:"application/json"}}):o={method:s,body:t,headers:Object.assign(Object.assign({},i!=="multipart/form-data"&&{"Content-Type":i}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new Ds("An error occurred while submitting the form",a)}}function zt(n,e,t,r){return Bt(n,e,s=>(typeof s<"u"&&!Array.isArray(s)||(s||(s=[]),typeof r>"u"?s.push(t):s.splice(r,0,t)),s))}function Bs(n,e,t,r){return Bt(n,e,s=>(!s||!Array.isArray(s)||([s[t],s[r]]=[s[r],s[t]]),s))}function Us(n,e,t,r){return Bt(n,e,s=>(!s||!Array.isArray(s)||s.splice(r,0,s.splice(t,1)[0]),s))}function Qn(n){return typeof n=="function"}function tt(n){return(t,r)=>{if(typeof t=="string"){const s=t;n(i=>{const o=Qn(r)?r(ze(i,s)):r;return J(i,s,o)})}else n(s=>Qn(t)?t(s):t)}}function js({stores:n,config:e,validateErrors:t,validateWarnings:r,_getCurrentExtenders:s}){var i;let o,a=ut((i=e.initialValues)!==null&&i!==void 0?i:{});const{data:l,touched:c,errors:h,warnings:u,isDirty:d,isSubmitting:v,interacted:y}=n,k=tt(l.update),C=tt(c.update),b=tt(h.update),j=tt(u.update);function re(_){k(D=>{const P=_(D);return o&&Ht(o,P),P})}const F=(_,D,P)=>{tt(re)(_,D),typeof _=="string"&&P&&C(_,!0)};function be(_,D,P){const X=N(D)?qe(D,!1):!1,H=N(X)?Se(X,[]):[];D=N(D)?Object.assign(Object.assign({},D),{key:$n()}):D,h.update(ee=>zt(ee,_,H,P)),u.update(ee=>zt(ee,_,H,P)),c.update(ee=>zt(ee,_,X,P)),l.update(ee=>{const pe=zt(ee,_,D,P);return setTimeout(()=>o&&Ht(o,pe)),pe})}function V(_){h.update(_),u.update(_),c.update(_),l.update(D=>{const P=_(D);return setTimeout(()=>o&&Ht(o,P)),P})}function oe(_){V(D=>St(D,_))}function R(_,D,P){V(X=>Bs(X,_,D,P))}function B(_,D,P){V(X=>Us(X,_,D,P))}function ae(_){const D=ze(a,_),P=N(D)?qe(D,!1):!1,X=N(P)?Se(P,[]):[];l.update(H=>{const ee=J(H,_,D);return o&&Ht(o,ee),ee}),c.update(H=>J(H,_,P)),h.update(H=>J(H,_,X)),u.update(H=>J(H,_,X))}const S=tt(v.update),W=tt(d.update),ie=tt(y.update);async function we(){const _=We(l);c.set(qe(_,!0)),y.set(null);const D=await t(_);return await r(_),D}function Pe(){F(Ce(a)),C(_=>Se(_,!1)),y.set(null),d.set(!1)}function Q(_){return async function(P){var X,H,ee,pe,ue,Re,Fe;const{createErrorEvent:Qe,createSubmitEvent:$e,createSuccessEvent:ce}=Fs(),K=$e();o?.dispatchEvent(K);const E=(H=(X=K.onError)!==null&&X!==void 0?X:_?.onError)!==null&&H!==void 0?H:e.onError,p=(pe=(ee=K.onSuccess)!==null&&ee!==void 0?ee:_?.onSuccess)!==null&&pe!==void 0?pe:e.onSuccess,w=(Fe=(Re=(ue=K.onSubmit)!==null&&ue!==void 0?ue:_?.onSubmit)!==null&&Re!==void 0?Re:e.onSubmit)!==null&&Fe!==void 0?Fe:$s(o);if(!w||(P?.preventDefault(),K.defaultPrevented))return;v.set(!0),y.set(null);const m=ct(We(l)),M=await t(m,_?.validate),Z=await r(m,_?.warn);if(Z&&u.set(Lr(Se(m,[]),Z)),c.set(qe(m,!0)),M&&(c.set(qe(M,!0)),Rt(M,q=>Array.isArray(q)?q.length>=1:!!q))){await new Promise(q=>setTimeout(q)),s().forEach(q=>{var Ae;return(Ae=q.onSubmitError)===null||Ae===void 0?void 0:Ae.call(q,{data:m,errors:M})}),v.set(!1);return}const he={event:P,setFields:F,setData:k,setTouched:C,setErrors:b,setWarnings:j,unsetField:oe,addField:be,resetField:ae,reset:Pe,setInitialValues:le.setInitialValues,moveField:B,swapFields:R,form:o,controls:o&&Array.from(o.elements).filter(_e),config:Object.assign(Object.assign({},e),_)};try{const Y=await w(m,he);o?.dispatchEvent(ce(Object.assign({response:Y},he))),await p?.(Y,he)}catch(Y){const q=Qe(Object.assign({error:Y},he));if(o?.dispatchEvent(q),!E&&!q.defaultPrevented)throw Y;if(!E&&!q.errors)return;const Ae=q.errors||await E?.(Y,he);Ae&&(c.set(qe(Ae,!0)),h.set(Ae),await new Promise(me=>setTimeout(me)),s().forEach(me=>{var De;return(De=me.onSubmitError)===null||De===void 0?void 0:De.call(me,{data:m,errors:We(h)})}))}finally{v.set(!1)}}}const le={setData:k,setFields:F,setTouched:C,setErrors:b,setWarnings:j,setIsSubmitting:S,setIsDirty:W,setInteracted:ie,validate:we,reset:Pe,unsetField:oe,resetField:ae,addField:be,swapFields:R,moveField:B,createSubmitHandler:Q,handleSubmit:Q(),setInitialValues:_=>{a=ut(_)}};return{public:le,private:{_setFormNode(_){o=_},_getInitialValues:()=>a}}}function Hs({helpers:n,stores:e,config:t,extender:r,createSubmitHandler:s,handleSubmit:i,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:h,setTouched:u,reset:d,setInitialValues:v}=n,{addValidator:y,addTransformer:k,validate:C}=n,{data:b,errors:j,warnings:re,touched:F,isSubmitting:be,isDirty:V,interacted:oe,isValid:R,isValidating:B}=e;function ae(S){S.requestSubmit||(S.requestSubmit=i);function W(E){return function(p){return p({form:S,stage:E,controls:Array.from(S.elements).filter(_e),data:b,errors:j,warnings:re,touched:F,isValid:R,isValidating:B,isSubmitting:be,isDirty:V,interacted:oe,config:t,addValidator:y,addTransformer:k,setFields:h,validate:C,reset:d,createSubmitHandler:s,handleSubmit:i})}}l(r.map(W("MOUNT"))),S.noValidate=!!t.validate;const{defaultData:ie,defaultTouched:we}=Xn(S);o(S),v(Lr(Ce(ie),a())),h(a()),F.set(we);function Pe(E){const p=de(E),w=Array.from(S.querySelectorAll(`[name="${E.name}"]`)).filter(m=>_e(m)?p===de(m):!1);if(w.length!==0)return w.length===1?b.update(m=>J(m,de(E),E.checked)):b.update(m=>J(m,de(E),w.filter(pt).filter(M=>M.checked).map(M=>M.value)))}function Q(E){const p=S.querySelectorAll(`[name="${E.name}"]`),w=Array.from(p).find(m=>pt(m)&&m.checked);b.update(m=>J(m,de(E),w?.value))}function le(E){var p;const w=Array.from((p=E.files)!==null&&p!==void 0?p:[]);b.update(m=>J(m,de(E),E.multiple?w:w[0]))}function ke(E){if(!E.multiple)b.update(p=>J(p,de(E),E.value));else{const p=Array.from(E.selectedOptions).map(w=>w.value);b.update(w=>J(w,de(E),p))}}function _(E){const p=E.target;if(!p||!_e(p)||mt(p)||gn(p)||["checkbox","radio","file"].includes(p.type)||!p.name)return;V.set(!0);const w=Mr(p);oe.set(p.name),b.update(m=>J(m,de(p),w))}function D(E){const p=E.target;if(!(!p||!_e(p)||gn(p))&&p.name)if(u(de(p),!0),oe.set(p.name),(mt(p)||["checkbox","radio","file","hidden"].includes(p.type))&&V.set(!0),p.type==="hidden"&&b.update(w=>J(w,de(p),p.value)),mt(p))ke(p);else if(pt(p))p.type==="checkbox"?Pe(p):p.type==="radio"?Q(p):p.type==="file"&&le(p);else return}function P(E){const p=E.target;!p||!_e(p)||gn(p)||p.name&&(u(de(p),!0),oe.set(p.name))}function X(E){E.preventDefault(),d()}const H={childList:!0,subtree:!0};function ee(E){let p=We(b),w=We(F),m=We(j),M=We(re);for(const Z of E.reverse()){if(Z.hasAttribute("data-felte-keep-on-remove")&&Z.dataset.felteKeepOnRemove!=="false")continue;const he=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let Y=de(Z);const q=We(F);if(he.test(Y)){const me=Y.split(".").slice(0,-1).join("."),De=ze(q,me);N(De)&&Object.keys(De).length<=1&&(Y=me)}p=St(p,Y),w=St(w,Y),m=St(m,Y),M=St(M,Y)}b.set(p),F.set(w),j.set(m),re.set(M)}const pe=Zt(()=>{c().forEach(w=>{var m;return(m=w.destroy)===null||m===void 0?void 0:m.call(w)}),l(r.map(W("UPDATE")));const{defaultData:E,defaultTouched:p}=Xn(S);b.update(w=>Yn(w,E)),F.update(w=>Yn(w,p)),n.setFields(We(b))},0);let ue=[];const Re=Zt(()=>{c().forEach(E=>{var p;return(p=E.destroy)===null||p===void 0?void 0:p.call(E)}),l(r.map(W("UPDATE"))),ee(ue),ue=[]},0);function Fe(E){Array.from(E.addedNodes).some(w=>Jn(w)?_e(w)?!0:Tn(w).length>0:!1)&&pe()}function Qe(E){for(const p of E.removedNodes){if(!Jn(p))continue;const w=Tn(p);w.length!==0&&(ue.push(...w),Re())}}function $e(E){for(const p of E)p.type==="childList"&&(p.addedNodes.length>0&&Fe(p),p.removedNodes.length>0&&Qe(p))}const ce=new MutationObserver($e);ce.observe(S,H),S.addEventListener("input",_),S.addEventListener("change",D),S.addEventListener("focusout",P),S.addEventListener("submit",i),S.addEventListener("reset",X);const K=j.subscribe(E=>{for(const p of S.elements){if(!_e(p)||!p.name)continue;const w=ze(E,de(p)),m=Array.isArray(w)?w.join(`
`):typeof w=="string"?w:void 0;m!==p.dataset.felteValidationMessage&&(m?(p.dataset.felteValidationMessage=m,p.setAttribute("aria-invalid","true")):(delete p.dataset.felteValidationMessage,p.removeAttribute("aria-invalid")))}});return{destroy(){ce.disconnect(),S.removeEventListener("input",_),S.removeEventListener("change",D),S.removeEventListener("focusout",P),S.removeEventListener("submit",i),S.removeEventListener("reset",X),K(),c().forEach(E=>{var p;return(p=E.destroy)===null||p===void 0?void 0:p.call(E)})}}}return{form:ae}}function zs(n){const e={aborted:!1,priority:n};return{signal:e,abort(){e.aborted=!0}}}function Ws(n,e){if(N(n))return!e||N(e)&&Object.keys(e).length===0?Se(n,null):void 0;if(Array.isArray(n)){if(n.some(N))return;const t=Array.isArray(e)?e:[];return n.map((r,s)=>{const i=t[s];return Array.isArray(i)&&i.length===0?null:r&&i||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?n?e:null:n&&e?[e]:null}function qs(n,e){if(N(n))return!e||N(e)&&Object.keys(e).length===0?Se(n,null):void 0;if(Array.isArray(n)){if(n.some(N))return;const t=Array.isArray(e)?e:[];return n.map((r,s)=>{const i=t[s];return Array.isArray(i)&&i.length===0?null:i||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?e:e?[e]:null}function Gs([n,e]){return rt(e,n,Ws)}function Ks([n,e]){return rt(e,n,qs)}function Zs(n){return function(t,r,s){const i=Array.isArray(t)?t:[t],o=new Array(i.length),a=n(s),l=a.set,c=a.subscribe;let h;function u(){h=i.map((v,y)=>v.subscribe(k=>{o[y]=k,l(r(o))}))}function d(){h?.forEach(v=>v())}return a.subscribe=function(y){const k=c(y);return()=>{k()}},[a,u,d]}}function Ys(n,e){var t,r,s,i,o,a,l,c,h;const u=Zs(n),d=e.initialValues=e.initialValues?ut(An(Ce(e.initialValues),e.transform)):{},v=qe(ct(d),!1),y=n(v),k=n(0),[C,b,j]=u([y,k],([se,G])=>Rt(se,xe=>!!xe)&&G>=1,!1);delete C.set,delete C.update;function re(se){let G;return async function(xe,Oe,Te,ot=!1){if(!Te||!xe)return;let et=Oe&&Object.keys(Oe).length>0?Oe:Se(xe,[]);const at=zs(ot);if((!G?.signal.priority||ot)&&(G?.abort(),G=at),G.signal.priority&&!ot)return;k.update(wt=>wt+1);const Kn=Ms(xe,Te);return Kn.forEach(async wt=>{const bs=await wt;at.signal.aborted||(et=ft([et,bs]),se.set(et))}),await Promise.all(Kn),G=void 0,k.update(wt=>wt-1),et}}let F=Se(v,[]);const be=n(d),V=Se(v,[]),oe=n(V),R=n(Ce(V)),[B,ae,S]=u([oe,R],ft,Ce(V)),W=Se(v,[]),ie=n(W),we=n(Ce(W)),[Pe,Q,le]=u([ie,we],ft,Ce(W)),[ke,_,D]=u([B,y],Gs,Ce(V)),[P,X,H]=u([Pe,y],Ks,Ce(W));let ee=!1;const[pe,ue,Re]=u(B,([se])=>{var G;return ee?!Rt(se,Ee=>Array.isArray(Ee)?Ee.length>=1:!!Ee):(ee=!0,!e.validate&&!(!((G=e.debounced)===null||G===void 0)&&G.validate))},!e.validate&&!(!((t=e.debounced)===null||t===void 0)&&t.validate));delete pe.set,delete pe.update;const Fe=n(!1),Qe=n(!1),$e=n(null),ce=re(oe),K=re(ie),E=re(R),p=re(we),w=Zt(E,(o=(s=(r=e.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&s!==void 0?s:(i=e.debounced)===null||i===void 0?void 0:i.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{k.update(se=>se+1)},onEnd:()=>{k.update(se=>se-1)}}),m=Zt(p,(h=(l=(a=e.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=e.debounced)===null||c===void 0?void 0:c.timeout)!==null&&h!==void 0?h:300);async function M(se,G){var Ee;const xe=ct(se),Oe=ce(xe,F,G??e.validate,!0);if(G)return Oe;const Te=E(xe,F,(Ee=e.debounced)===null||Ee===void 0?void 0:Ee.validate,!0);return ft(await Promise.all([Oe,Te]))}async function Z(se,G){var Ee;const xe=ct(se),Oe=K(xe,F,G??e.warn,!0);if(G)return Oe;const Te=p(xe,F,(Ee=e.debounced)===null||Ee===void 0?void 0:Ee.warn,!0);return ft(await Promise.all([Oe,Te]))}let he=V,Y=W;function q(){const se=be.subscribe(Te=>{var ot,et;const at=ct(Te);ce(at,F,e.validate),K(at,F,e.warn),w(at,F,(ot=e.debounced)===null||ot===void 0?void 0:ot.validate),m(at,F,(et=e.debounced)===null||et===void 0?void 0:et.warn)}),G=y.subscribe(Te=>{F=Se(Te,[])}),Ee=B.subscribe(Te=>{he=Te}),xe=Pe.subscribe(Te=>{Y=Te});ae(),ue(),Q(),_(),X(),b();function Oe(){se(),D(),S(),le(),H(),Re(),j(),G(),Ee(),xe()}return Oe}function Ae(se){oe.set(se(he)),R.set({})}function me(se){ie.set(se(Y)),we.set({})}function De(se){Ae(()=>se)}function Ut(se){me(()=>se)}return ke.set=De,ke.update=Ae,P.set=Ut,P.update=me,{data:be,errors:ke,warnings:P,touched:y,isValid:pe,isSubmitting:Fe,isDirty:Qe,isValidating:C,interacted:$e,validateErrors:M,validateWarnings:Z,cleanup:e.preventStoreStart?()=>{}:q(),start:q}}function Js(n,e){var t,r;(t=n.extend)!==null&&t!==void 0||(n.extend=[]),(r=n.debounced)!==null&&r!==void 0||(n.debounced={}),n.validate&&!Array.isArray(n.validate)&&(n.validate=[n.validate]),n.debounced.validate&&!Array.isArray(n.debounced.validate)&&(n.debounced.validate=[n.debounced.validate]),n.transform&&!Array.isArray(n.transform)&&(n.transform=[n.transform]),n.warn&&!Array.isArray(n.warn)&&(n.warn=[n.warn]),n.debounced.warn&&!Array.isArray(n.debounced.warn)&&(n.debounced.warn=[n.debounced.warn]);function s(Q,{debounced:le,level:ke}={debounced:!1,level:"error"}){var _;const D=ke==="error"?"validate":"warn";(_=n.debounced)!==null&&_!==void 0||(n.debounced={});const P=le?n.debounced:n;P[D]?P[D]=[...P[D],Q]:P[D]=[Q]}function i(Q){n.transform?n.transform=[...n.transform,Q]:n.transform=[Q]}const o=Array.isArray(n.extend)?n.extend:[n.extend];let a=[];const l=()=>a,c=Q=>{a=Q},{isSubmitting:h,isValidating:u,data:d,errors:v,warnings:y,touched:k,isValid:C,isDirty:b,cleanup:j,start:re,validateErrors:F,validateWarnings:be,interacted:V}=Ys(e.storeFactory,n),oe=d.update,R=d.set,B=Q=>oe(le=>ut(An(Q(le),n.transform))),ae=Q=>R(ut(An(Q,n.transform)));d.update=B,d.set=ae;const S=js({extender:o,config:n,addValidator:s,addTransformer:i,validateErrors:F,validateWarnings:be,_getCurrentExtenders:l,stores:{data:d,errors:v,warnings:y,touched:k,isValid:C,isValidating:u,isSubmitting:h,isDirty:b,interacted:V}}),{createSubmitHandler:W,handleSubmit:ie}=S.public;a=o.map(Q=>Q({stage:"SETUP",errors:v,warnings:y,touched:k,data:d,isDirty:b,isValid:C,isValidating:u,isSubmitting:h,interacted:V,config:n,addValidator:s,addTransformer:i,setFields:S.public.setFields,reset:S.public.reset,validate:S.public.validate,handleSubmit:ie,createSubmitHandler:W}));const we=Object.assign({config:n,stores:{data:d,touched:k,errors:v,warnings:y,isSubmitting:h,isValidating:u,isValid:C,isDirty:b,interacted:V},createSubmitHandler:W,handleSubmit:ie,helpers:Object.assign(Object.assign({},S.public),{addTransformer:i,addValidator:s}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},S.private),{form:Pe}=Hs(we);return Object.assign({data:d,errors:v,warnings:y,touched:k,isValid:C,isSubmitting:h,isValidating:u,isDirty:b,interacted:V,form:Pe,cleanup:j,startStores:re},S.public)}function Xs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const dt=[];function Fr(n,e=nt){let t;const r=new Set;function s(a){if(un(n,a)&&(n=a,t)){const l=!dt.length;for(const c of r)c[1](),dt.push(c,n);if(l){for(let c=0;c<dt.length;c+=2)dt[c][0](dt[c+1]);dt.length=0}}}function i(a){s(a(n))}function o(a,l=nt){const c=[a,l];return r.add(c),r.size===1&&(t=e(s,i)||nt),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Qs(n){const e=Js(n??{},{storeFactory:Fr}),{cleanup:t,startStores:r}=e,s=Xs(e,["cleanup","startStores"]);return ys(t),s}const $r={},Br={};function er(n){const e=n.config;if(n.stage==="SETUP"){if(!e.__felteReporterSvelteId){const t=$n(21);e.__felteReporterSvelteId=t,$r[t]=n.errors,Br[t]=n.warnings}return{}}return n.form.hasAttribute("data-felte-reporter-svelte-id")||(n.form.dataset.felteReporterSvelteId=e.__felteReporterSvelteId),{onSubmitError(){const t=n&&n.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');t&&t.focus()}}}function ei(n){return!n||"preventFocusOnError"in n?e=>er(e):er(n)}const ti=n=>({}),tr=n=>({}),ni=n=>({messages:n&4}),nr=n=>({messages:n[2]});function ri(n){let e;const t=n[9].placeholder,r=xr(t,n,n[8],tr);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&256)&&kr(r,t,s,s[8],e?Or(t,s[8],i,ti):Rr(s[8]),tr)},i(s){e||(Ne(r,s),e=!0)},o(s){Me(r,s),e=!1},d(s){r&&r.d(s)}}}function si(n){let e;const t=n[9].default,r=xr(t,n,n[8],nr);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&260)&&kr(r,t,s,s[8],e?Or(t,s[8],i,ni):Rr(s[8]),nr)},i(s){e||(Ne(r,s),e=!0)},o(s){Me(r,s),e=!1},d(s){r&&r.d(s)}}}function ii(n){let e,t,r,s,i,o;const a=[si,ri],l=[];function c(h,u){return!h[3].placeholder||h[2]?0:1}return r=c(n),s=l[r]=a[r](n),{c(){e=T("div"),t=te(),s.c(),i=Zn(),this.h()},l(h){e=I(h,"DIV",{style:!0}),L(e).forEach(g),t=ne(h),s.l(h),i=Zn(),this.h()},h(){Es(e,"display","none")},m(h,u){O(h,e,u),n[10](e),O(h,t,u),l[r].m(h,u),O(h,i,u),o=!0},p(h,[u]){let d=r;r=c(h),r===d?l[r].p(h,u):(Cr(),Me(l[d],1,1,()=>{l[d]=null}),Sr(),s=l[r],s?s.p(h,u):(s=l[r]=a[r](h),s.c()),Ne(s,1),s.m(i.parentNode,i))},i(h){o||(Ne(s),o=!0)},o(h){Me(s),o=!1},d(h){h&&(g(e),g(t),g(i)),n[10](null),l[r].d(h)}}}function oi(n,e,t){let r,s,i=nt,o=()=>(i(),i=As(d,b=>t(7,s=b)),d);n.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e;const c=ws(a);let{level:h="error"}=e,{for:u}=e,d,v,y;function k(){return y.closest("form")}Pr(()=>{t(6,v=de(y,u));const j=k();o(j?h==="error"?t(0,d=$r[j.dataset.felteReporterSvelteId]):t(0,d=Br[j.dataset.felteReporterSvelteId]):t(0,d=Fr({})))});function C(b){Dr[b?"unshift":"push"](()=>{y=b,t(1,y)})}return n.$$set=b=>{"level"in b&&t(4,h=b.level),"for"in b&&t(5,u=b.for),"$$scope"in b&&t(8,l=b.$$scope)},n.$$.update=()=>{n.$$.dirty&192&&t(2,r=v&&ze(s,v))},[d,y,r,c,h,u,v,s,l,a,C]}class ai extends Nn{constructor(e){super(),Fn(this,e,oi,ii,un,{level:4,for:5})}}const Wt=ai;function li(n){return n.issues.reduce((e,t)=>{if(t.path){const r=t.path.map(({key:s})=>s).join(".");e.nested[r]=[...e.nested[r]||[],t.message]}else e.root=[...e.root||[],t.message];return e},{nested:{}})}var _t=class extends Error{issues;constructor(n){super(n[0].message),this.name="ValiError",this.issues=n}};function Ur(n,e,t){let r=n;const s=[];for(const i of e)try{r=i(r,t)}catch(o){if(t.abortEarly||t.abortPipeEarly)throw o;s.push(...o.issues)}if(s.length)throw new _t(s);return r}function ci(n,e){return[...n?.path||[],e]}function jr(n,e){const[t,r=[]]=!n||typeof n=="string"?[n,e]:[void 0,n];return{error:t,pipe:r}}function Hr(n,e,t){const{error:r,pipe:s}=jr(e,t);return{schema:"object",object:n,async:!1,parse(i,o){if(!i||typeof i!="object"||i.toString()!=="[object Object]")throw new _t([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:i,...o}]);const a={},l=[];for(const[c,h]of Object.entries(n))try{const u=i[c];a[c]=h.parse(u,{...o,path:ci(o,{schema:"object",input:i,key:c,value:u})})}catch(u){if(o?.abortEarly)throw u;l.push(...u.issues)}if(l.length)throw new _t(l);return Ur(a,s,{...o,reason:"object"})}}}function ui(n){return{schema:"optional",wrapped:n,async:!1,parse(e,t){return e===void 0?e:n.parse(e,t)}}}function Le(n,e){const{error:t,pipe:r}=jr(n,e);return{schema:"string",async:!1,parse(s,i){if(typeof s!="string")throw new _t([{reason:"type",validation:"string",origin:"value",message:t||"Invalid type",input:s,...i}]);return Ur(s,r,{...i,reason:"string"})}}}function In(n,e,t){return n.parse(e,t)}function _n(){return n=>n.trim()}function hi(n,e){return(t,r)=>{if(t.length!==n)throw new _t([{validation:"length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}function rr(n,e){return(t,r)=>{if(t.length<n)throw new _t([{validation:"min_length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class Yt{constructor(e,t,r,s){if(isNaN(e)||isNaN(t))throw new Error(`Point is invalid: (${e}, ${t})`);this.x=+e,this.y=+t,this.pressure=r||0,this.time=s||Date.now()}distanceTo(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}equals(e){return this.x===e.x&&this.y===e.y&&this.pressure===e.pressure&&this.time===e.time}velocityFrom(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):0}}class Bn{constructor(e,t,r,s,i,o){this.startPoint=e,this.control2=t,this.control1=r,this.endPoint=s,this.startWidth=i,this.endWidth=o}static fromPoints(e,t){const r=this.calculateControlPoints(e[0],e[1],e[2]).c2,s=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new Bn(e[1],r,s,e[2],t.start,t.end)}static calculateControlPoints(e,t,r){const s=e.x-t.x,i=e.y-t.y,o=t.x-r.x,a=t.y-r.y,l={x:(e.x+t.x)/2,y:(e.y+t.y)/2},c={x:(t.x+r.x)/2,y:(t.y+r.y)/2},h=Math.sqrt(s*s+i*i),u=Math.sqrt(o*o+a*a),d=l.x-c.x,v=l.y-c.y,y=u/(h+u),k={x:c.x+d*y,y:c.y+v*y},C=t.x-k.x,b=t.y-k.y;return{c1:new Yt(l.x+C,l.y+b),c2:new Yt(c.x+C,c.y+b)}}length(){let t=0,r,s;for(let i=0;i<=10;i+=1){const o=i/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const c=a-r,h=l-s;t+=Math.sqrt(c*c+h*h)}r=a,s=l}return t}point(e,t,r,s,i){return t*(1-e)*(1-e)*(1-e)+3*r*(1-e)*(1-e)*e+3*s*(1-e)*e*e+i*e*e*e}}class di{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(e,t,r){this._et.addEventListener(e,t,r)}dispatchEvent(e){return this._et.dispatchEvent(e)}removeEventListener(e,t,r){this._et.removeEventListener(e,t,r)}}function fi(n,e=250){let t=0,r=null,s,i,o;const a=()=>{t=Date.now(),r=null,s=n.apply(i,o),r||(i=null,o=[])};return function(...c){const h=Date.now(),u=e-(h-t);return i=this,o=c,u<=0||u>e?(r&&(clearTimeout(r),r=null),t=h,s=n.apply(i,o),r||(i=null,o=[])):r||(r=window.setTimeout(a,u)),s}}class Jt extends di{constructor(e,t={}){super(),this.canvas=e,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const s=r.changedTouches[0];this._strokeBegin(s)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const s=r.targetTouches[0];this._strokeMoveUpdate(s)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const i=r.changedTouches[0];this._strokeEnd(i)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||0,this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=t.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?fi(Jt.prototype._strokeUpdate,this.throttle):Jt.prototype._strokeUpdate,this._ctx=e.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:e,canvas:t}=this;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(e,t={}){return new Promise((r,s)=>{const i=new Image,o=t.ratio||window.devicePixelRatio||1,a=t.width||this.canvas.width/o,l=t.height||this.canvas.height/o,c=t.xOffset||0,h=t.yOffset||0;this._reset(this._getPointGroupOptions()),i.onload=()=>{this._ctx.drawImage(i,c,h,a,l),r()},i.onerror=u=>{s(u)},i.crossOrigin="anonymous",i.src=e,this._isEmpty=!1})}toDataURL(e="image/png",t){switch(e){case"image/svg+xml":return typeof t!="object"&&(t=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(t))}`;default:return typeof t!="number"&&(t=void 0),this.canvas.toDataURL(e,t)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const e=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!e?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(e,{clear:t=!0}={}){t&&this.clear(),this._fromData(e,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(e)}toData(){return this._data}_getPointGroupOptions(e){return{penColor:e&&"penColor"in e?e.penColor:this.penColor,dotSize:e&&"dotSize"in e?e.dotSize:this.dotSize,minWidth:e&&"minWidth"in e?e.minWidth:this.minWidth,maxWidth:e&&"maxWidth"in e?e.maxWidth:this.maxWidth,velocityFilterWeight:e&&"velocityFilterWeight"in e?e.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:e&&"compositeOperation"in e?e.compositeOperation:this.compositeOperation}}_strokeBegin(e){this.dispatchEvent(new CustomEvent("beginStroke",{detail:e}));const t=this._getPointGroupOptions(),r=Object.assign(Object.assign({},t),{points:[]});this._data.push(r),this._reset(t),this._strokeUpdate(e)}_strokeUpdate(e){if(this._data.length===0){this._strokeBegin(e);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:e}));const t=e.clientX,r=e.clientY,s=e.pressure!==void 0?e.pressure:e.force!==void 0?e.force:0,i=this._createPoint(t,r,s),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?i.distanceTo(l)<=this.minDistance:!1,h=this._getPointGroupOptions(o);if(!l||!(l&&c)){const u=this._addPoint(i,h);l?u&&this._drawCurve(u,h):this._drawDot(i,h),a.push({time:i.time,x:i.x,y:i.y,pressure:i.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:e}))}_strokeEnd(e){this._strokeUpdate(e),this.dispatchEvent(new CustomEvent("endStroke",{detail:e}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(e){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(e.minWidth+e.maxWidth)/2,this._ctx.fillStyle=e.penColor,this._ctx.globalCompositeOperation=e.compositeOperation}_createPoint(e,t,r){const s=this.canvas.getBoundingClientRect();return new Yt(e-s.left,t-s.top,r,new Date().getTime())}_addPoint(e,t){const{_lastPoints:r}=this;if(r.push(e),r.length>2){r.length===3&&r.unshift(r[0]);const s=this._calculateCurveWidths(r[1],r[2],t),i=Bn.fromPoints(r,s);return r.shift(),i}return null}_calculateCurveWidths(e,t,r){const s=r.velocityFilterWeight*t.velocityFrom(e)+(1-r.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(s,r),o={end:i,start:this._lastWidth};return this._lastVelocity=s,this._lastWidth=i,o}_strokeWidth(e,t){return Math.max(t.maxWidth/(e+1),t.minWidth)}_drawCurveSegment(e,t,r){const s=this._ctx;s.moveTo(e,t),s.arc(e,t,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(e,t){const r=this._ctx,s=e.endWidth-e.startWidth,i=Math.ceil(e.length())*2;r.beginPath(),r.fillStyle=t.penColor;for(let o=0;o<i;o+=1){const a=o/i,l=a*a,c=l*a,h=1-a,u=h*h,d=u*h;let v=d*e.startPoint.x;v+=3*u*a*e.control1.x,v+=3*h*l*e.control2.x,v+=c*e.endPoint.x;let y=d*e.startPoint.y;y+=3*u*a*e.control1.y,y+=3*h*l*e.control2.y,y+=c*e.endPoint.y;const k=Math.min(e.startWidth+c*s,t.maxWidth);this._drawCurveSegment(v,y,k)}r.closePath(),r.fill()}_drawDot(e,t){const r=this._ctx,s=t.dotSize>0?t.dotSize:(t.minWidth+t.maxWidth)/2;r.beginPath(),this._drawCurveSegment(e.x,e.y,s),r.closePath(),r.fillStyle=t.penColor,r.fill()}_fromData(e,t,r){for(const s of e){const{points:i}=s,o=this._getPointGroupOptions(s);if(i.length>1)for(let a=0;a<i.length;a+=1){const l=i[a],c=new Yt(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const h=this._addPoint(c,o);h&&t(h,o)}else this._reset(o),r(i[0],o)}}toSVG({includeBackgroundColor:e=!1}={}){const t=this._data,r=Math.max(window.devicePixelRatio||1,1),s=0,i=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${s} ${i} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),e&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(t,(c,{penColor:h})=>{const u=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const d=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;u.setAttribute("d",d),u.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),u.setAttribute("stroke",h),u.setAttribute("fill","none"),u.setAttribute("stroke-linecap","round"),l.appendChild(u)}},(c,{penColor:h,dotSize:u,minWidth:d,maxWidth:v})=>{const y=document.createElement("circle"),k=u>0?u:(d+v)/2;y.setAttribute("r",k.toString()),y.setAttribute("cx",c.x.toString()),y.setAttribute("cy",c.y.toString()),y.setAttribute("fill",h),l.appendChild(y)}),l.outerHTML}}const sr=Hr({personalid:Le([_n(),hi(13)]),prefix:ui(Le()),firstname:Le([_n(),rr(1)]),lastname:Le([_n(),rr(1)]),signature:Le("กรุณาลงชื่อ")});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},pi=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=i>>2,u=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(d=64)),r.push(t[h],t[u],t[d],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(zr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):pi(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||u==null)throw new mi;const d=i<<2|a>>4;if(r.push(d),c!==64){const v=a<<4&240|c>>2;if(r.push(v),u!==64){const y=c<<6&192|u;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gi=function(n){const e=zr(n);return Wr.encodeByteArray(e,!0)},Xt=function(n){return gi(n).replace(/\./g,"")},_i=function(n){try{return Wr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=()=>vi().__FIREBASE_DEFAULTS__,yi=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ei=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&_i(n[1]);return e&&JSON.parse(e)},qr=()=>{try{return bi()||yi()||Ei()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wi=n=>{var e,t;return(t=(e=qr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ai=n=>{const e=wi(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Gr=()=>{var n;return(n=qr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Xt(JSON.stringify(t)),Xt(JSON.stringify(o)),a].join(".")}function Ci(){try{return typeof indexedDB=="object"}catch{return!1}}function Si(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Pi,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Kr.prototype.create)}}class Kr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Di(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yt(s,a,r)}}function Di(n,e){return n.replace(xi,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xi=/\{\$([^}]+)}/g;function Cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ir(i)&&ir(o)){if(!Cn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ir(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(n){return n&&n._delegate?n._delegate:n}class Lt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ti;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Oi(e))try{this.getOrInitializeService({instanceIdentifier:lt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lt){return this.instances.has(e)}getOptions(e=lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ri(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lt){return this.component?this.component.multipleInstances?e:lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ri(n){return n===lt?void 0:n}function Oi(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ki(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Vi={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Mi=z.INFO,Ni={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Fi=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ni[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zr{constructor(e){this.name=e,this._logLevel=Mi,this._logHandler=Fi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const $i=(n,e)=>e.some(t=>n instanceof t);let or,ar;function Bi(){return or||(or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ui(){return ar||(ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yr=new WeakMap,Sn=new WeakMap,Jr=new WeakMap,vn=new WeakMap,Un=new WeakMap;function ji(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(st(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Yr.set(t,n)}).catch(()=>{}),Un.set(e,n),e}function Hi(n){if(Sn.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Sn.set(n,e)}let Pn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return st(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zi(n){Pn=n(Pn)}function Wi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bn(this),e,...t);return Jr.set(r,e.sort?e.sort():[e]),st(r)}:Ui().includes(n)?function(...e){return n.apply(bn(this),e),st(Yr.get(this))}:function(...e){return st(n.apply(bn(this),e))}}function qi(n){return typeof n=="function"?Wi(n):(n instanceof IDBTransaction&&Hi(n),$i(n,Bi())?new Proxy(n,Pn):n)}function st(n){if(n instanceof IDBRequest)return ji(n);if(vn.has(n))return vn.get(n);const e=qi(n);return e!==n&&(vn.set(n,e),Un.set(e,n)),e}const bn=n=>Un.get(n);function Gi(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=st(o);return r&&o.addEventListener("upgradeneeded",l=>{r(st(o.result),l.oldVersion,l.newVersion,st(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ki=["get","getKey","getAll","getAllKeys","count"],Zi=["put","add","delete","clear"],yn=new Map;function lr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yn.get(e))return yn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Zi.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ki.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return yn.set(e,i),i}zi(n=>({...n,get:(e,t,r)=>lr(e,t)||n.get(e,t,r),has:(e,t)=>!!lr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ji(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ji(n){const e=n.getComponent();return e?.type==="VERSION"}const Dn="@firebase/app",cr="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Zr("@firebase/app"),Xi="@firebase/app-compat",Qi="@firebase/analytics-compat",eo="@firebase/analytics",to="@firebase/app-check-compat",no="@firebase/app-check",ro="@firebase/auth",so="@firebase/auth-compat",io="@firebase/database",oo="@firebase/database-compat",ao="@firebase/functions",lo="@firebase/functions-compat",co="@firebase/installations",uo="@firebase/installations-compat",ho="@firebase/messaging",fo="@firebase/messaging-compat",po="@firebase/performance",mo="@firebase/performance-compat",go="@firebase/remote-config",_o="@firebase/remote-config-compat",vo="@firebase/storage",bo="@firebase/storage-compat",yo="@firebase/firestore",Eo="@firebase/firestore-compat",wo="firebase",Ao="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn="[DEFAULT]",To={[Dn]:"fire-core",[Xi]:"fire-core-compat",[eo]:"fire-analytics",[Qi]:"fire-analytics-compat",[no]:"fire-app-check",[to]:"fire-app-check-compat",[ro]:"fire-auth",[so]:"fire-auth-compat",[io]:"fire-rtdb",[oo]:"fire-rtdb-compat",[ao]:"fire-fn",[lo]:"fire-fn-compat",[co]:"fire-iid",[uo]:"fire-iid-compat",[ho]:"fire-fcm",[fo]:"fire-fcm-compat",[po]:"fire-perf",[mo]:"fire-perf-compat",[go]:"fire-rc",[_o]:"fire-rc-compat",[vo]:"fire-gcs",[bo]:"fire-gcs-compat",[yo]:"fire-fst",[Eo]:"fire-fst-compat","fire-js":"fire-js",[wo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Map,kn=new Map;function Io(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function en(n){const e=n.name;if(kn.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;kn.set(e,n);for(const t of Qt.values())Io(t,n);return!0}function Co(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},it=new Kr("app","Firebase",So);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do=Ao;function Xr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:xn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw it.create("bad-app-name",{appName:String(s)});if(t||(t=Gr()),!t)throw it.create("no-options");const i=Qt.get(s);if(i){if(Cn(t,i.options)&&Cn(r,i.config))return i;throw it.create("duplicate-app",{appName:s})}const o=new Li(s);for(const l of kn.values())o.addComponent(l);const a=new Po(t,r,o);return Qt.set(s,a),a}function xo(n=xn){const e=Qt.get(n);if(!e&&n===xn&&Gr())return Xr();if(!e)throw it.create("no-app",{appName:n});return e}function gt(n,e,t){var r;let s=(r=To[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}en(new Lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko="firebase-heartbeat-database",Ro=1,Vt="firebase-heartbeat-store";let En=null;function Qr(){return En||(En=Gi(ko,Ro,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vt)}}}).catch(n=>{throw it.create("idb-open",{originalErrorMessage:n.message})})),En}async function Oo(n){try{return await(await Qr()).transaction(Vt).objectStore(Vt).get(es(n))}catch(e){if(e instanceof yt)ht.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:e?.message});ht.warn(t.message)}}}async function ur(n,e){try{const r=(await Qr()).transaction(Vt,"readwrite");await r.objectStore(Vt).put(e,es(n)),await r.done}catch(t){if(t instanceof yt)ht.warn(t.message);else{const r=it.create("idb-set",{originalErrorMessage:t?.message});ht.warn(r.message)}}}function es(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=1024,Vo=30*24*60*60*1e3;class Mo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Vo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hr(),{heartbeatsToSend:t,unsentEntries:r}=No(this._heartbeatsCache.heartbeats),s=Xt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hr(){return new Date().toISOString().substring(0,10)}function No(n,e=Lo){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),dr(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),dr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Fo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ci()?Si().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Oo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ur(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ur(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function dr(n){return Xt(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n){en(new Lt("platform-logger",e=>new Yi(e),"PRIVATE")),en(new Lt("heartbeat",e=>new Mo(e),"PRIVATE")),gt(Dn,cr,n),gt(Dn,cr,"esm2017"),gt("fire-js","")}$o("");var Bo="firebase",Uo="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gt(Bo,Uo,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Et="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Zr("@firebase/firestore");function tn(n,...e){if(vt.logLevel<=z.DEBUG){const t=e.map(jn);vt.debug(`Firestore (${Et}): ${n}`,...t)}}function ts(n,...e){if(vt.logLevel<=z.ERROR){const t=e.map(jn);vt.error(`Firestore (${Et}): ${n}`,...t)}}function ns(n,...e){if(vt.logLevel<=z.WARN){const t=e.map(jn);vt.warn(`Firestore (${Et}): ${n}`,...t)}}function jn(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(n="Unexpected state"){const e=`FIRESTORE (${Et}) INTERNAL ASSERTION FAILED: `+n;throw ts(e),new Error(e)}function nn(n,e){n||fe()}function jo(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="ok",Ho="cancelled",Pt="unknown",U="invalid-argument",zo="deadline-exceeded",Wo="not-found",qo="permission-denied",Rn="unauthenticated",Go="resource-exhausted",bt="failed-precondition",Ko="aborted",Zo="out-of-range",Yo="unimplemented",Jo="internal",Xo="unavailable";class x extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class ea{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ta{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(nn(typeof e.accessToken=="string"),new rs(e.accessToken,new Ie(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class na{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ra{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new na(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ia{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(nn(typeof e.token=="string"),new sa(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,s,i,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class rn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof rn&&e.projectId===this.projectId&&e.database===this.database}}class Mt{constructor(e,t,r){t===void 0?t=0:t>e.length&&fe(),r===void 0?r=e.length-t:r>e.length-t&&fe(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ye extends Mt{construct(e,t,r){return new ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(U,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new ye(t)}static emptyPath(){return new ye([])}}const aa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Mt{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return aa.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new x(U,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new x(U,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(U,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new x(U,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.path=e}static fromPath(e){return new He(ye.fromString(e))}static fromName(e){return new He(ye.fromString(e).popFirst(5))}static empty(){return new He(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new He(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(n,e,t){if(!t)throw new x(U,`Function ${n}() cannot be called with an empty ${e}.`)}function pr(n){if(!He.isDocumentKey(n))throw new x(U,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mr(n){if(He.isDocumentKey(n))throw new x(U,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Hn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":fe()}function is(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new x(U,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hn(n);throw new x(U,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qt=null;function la(){return qt===null?qt=function(){return 268435456+Math.round(2147483648*Math.random())}():qt++,"0x"+qt.toString(16)}function sn(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr,$;function _r(n){if(n===void 0)return ts("RPC_ERROR","HTTP error has no status"),Pt;switch(n){case 200:return fr;case 400:return bt;case 401:return Rn;case 403:return qo;case 404:return Wo;case 409:return Ko;case 416:return Zo;case 429:return Go;case 499:return Ho;case 500:return Pt;case 501:return Yo;case 503:return Xo;case 504:return zo;default:return n>=200&&n<300?fr:n>=400&&n<500?bt:n>=500&&n<600?Jo:Pt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */($=gr||(gr={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";class ua extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get P(){return!1}R(t,r,s,i,o){const a=la(),l=this.I(t,r);tn("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(c,i,o),this.p(t,l,c,s).then(h=>(tn("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw ns("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}g(t,r,s,i,o,a){return this.R(t,r,s,i,o)}V(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Et}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}I(t,r){const s=ca[t];return`${this.m}/v1/${r}:${s}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new x(_r(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l?.error)===null||i===void 0?void 0:i.message;throw new x(_r(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ha(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Nt(n,e){return n<e?-1:n>e?1:0}function as(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function zn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new fa("Invalid base64 string: "+i):i}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Nt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const pa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(nn(!!n),typeof n=="string"){let e=0;const t=pa.exec(n);if(nn(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function br(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(U,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(U,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(U,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(U,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ge(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Nt(this.nanoseconds,e.nanoseconds):Nt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function yr(n){const e=On(n.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}function Er(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ma(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:fe()}function Ln(n,e){if(n===e)return!0;const t=Er(n);if(t!==Er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return yr(n).isEqual(yr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=On(s.timestampValue),a=On(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return br(s.bytesValue).isEqual(br(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?sn(o)===sn(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return as(n.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(vr(o)!==vr(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ln(o[l],a[l])))return!1;return!0}(n,e);default:return fe()}}function wn(n){return!!n&&"mapValue"in n}function Dt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return zn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Dt(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dt(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new on(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new on(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gt(this.root,e,this.comparator,!0)}}class Gt{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ge.RED,this.left=s??ge.EMPTY,this.right=i??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.comparator=e,this.data=new on(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wr(this.data.getIterator())}getIteratorFrom(e){return new wr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof an)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new an(this.comparator);return t.data=e,t}}class wr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new an(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dt(t)}setAll(e){let t=Ve.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Dt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());wn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];wn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){zn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ln(Dt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!sn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sn(s)?"-0":s}}(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this._=void 0}}class va extends fn{}class ba extends fn{constructor(e){super(),this.elements=e}}class ya extends fn{constructor(e){super(),this.elements=e}}class Ea extends fn{constructor(e,t){super(),this.serializer=e,this.$=t}}class xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class pn{}class ls extends pn{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cs extends pn{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class wa extends pn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Aa extends pn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Ta{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ia(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ca(n,e){return Vn(n,e.toTimestamp())}function us(n,e){return function(r){return new ye(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Mn(n,e){return us(n.databaseId,e.path)}function Sa(n){return new ye(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ar(n,e,t){return{name:Mn(n,e),fields:t.value.mapValue.fields}}function Pa(n,e){let t;if(e instanceof ls)t={update:Ar(n,e.key,e.value)};else if(e instanceof wa)t={delete:Mn(n,e.key)};else if(e instanceof cs)t={update:Ar(n,e.key,e.data),updateMask:Da(e.fieldMask)};else{if(!(e instanceof Aa))return fe();t={verify:Mn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof va)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ea)return{fieldPath:o.field.canonicalString(),increment:a.$};throw fe()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ca(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(n,e.precondition)),t}function Da(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(n){return new Ta(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.Z=!1}X(){if(this.Z)throw new x(bt,"The client has already been terminated.")}R(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.R(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Rn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(Pt,s.toString())})}g(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.g(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Rn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(Pt,i.toString())})}terminate(){this.Z=!0}}async function ka(n,e){const t=jo(n),r=Sa(t.serializer)+"/documents",s={writes:e.map(i=>Pa(t.serializer,i))};await t.R("Commit",r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Map;function Ra(n){if(n._terminated)throw new x(bt,"The client has already been terminated.");if(!kt.has(n)){tn("ComponentProvider","Initializing Datastore");const e=function(i){return new ua(i,fetch.bind(null))}(function(i,o,a,l){return new oa(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,os(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Wn(n._databaseId),r=function(i,o,a,l){return new xa(i,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);kt.set(n,r)}return kt.get(n)}class Tr{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(U,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(U,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new x(U,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=os((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(U,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(U,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(U,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mn{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(bt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(bt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Qo;switch(r.type){case"firstParty":return new ra(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(U,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kt.get(t);r&&(tn("ComponentProvider","Removing Datastore"),kt.delete(t),r.terminate())}(this),Promise.resolve()}}function Oa(n,e){const t=typeof n=="object"?n:xo(),r=typeof n=="string"?n:e||"(default)",s=Co(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=Ai("firestore");i&&La(s,...i)}return s}function La(n,e,t,r={}){var s;const i=(n=is(n,mn))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ie.MOCK_USER;else{a=Ii(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new x(U,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ie(c)}n._authCredentials=new ea(new rs(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qn(this.firestore,e,this._query)}}class Ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ze(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class Ze extends qn{constructor(e,t,r){super(e,t,function(i){return new ga(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new He(e))}withConverter(e){return new Ze(this.firestore,e,this._path)}}function Va(n,e,...t){if(n=Ot(n),ss("collection","path",e),n instanceof mn){const r=ye.fromString(e,...t);return mr(r),new Ze(n,null,r)}{if(!(n instanceof Ke||n instanceof Ze))throw new x(U,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return mr(r),new Ze(n.firestore,null,r)}}function Ma(n,e,...t){if(n=Ot(n),arguments.length===1&&(e=da.C()),ss("doc","path",e),n instanceof mn){const r=ye.fromString(e,...t);return pr(r),new Ke(n,null,new He(r))}{if(!(n instanceof Ke||n instanceof Ze))throw new x(U,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ye.fromString(e,...t));return pr(r),new Ke(n.firestore,n instanceof Ze?n.converter:null,new He(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(Xe.fromBase64String(e))}catch(t){throw new x(U,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $t(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new x(U,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(U,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(U,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Nt(this._lat,e._lat)||Nt(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=/^__.*__$/;class Fa{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,t,this.fieldTransforms):new ls(e,this.data,t,this.fieldTransforms)}}function ps(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class Gn{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(e){return new Gn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.ot(e),s}ut(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.et(),s}_t(e){return this.nt({path:void 0,st:!0})}lt(e){return cn(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.ht)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(ps(this.rt)&&Na.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class $a{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wn(e)}dt(e,t,r,s=!1){return new Gn({rt:e,methodName:t,ht:r,path:Ve.emptyPath(),st:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ba(n){const e=n._freezeSettings(),t=Wn(n._databaseId);return new $a(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ua(n,e,t,r,s,i={}){const o=n.dt(i.merge||i.mergeFields?2:0,e,t,s);vs("Data must be an object, but it was:",o,r);const a=gs(r,o);let l,c;if(i.merge)l=new Ft(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const u of i.mergeFields){const d=ja(e,u,t);if(!o.contains(d))throw new x(U,`Field '${d}' is specified in your field mask but missing from your input data.`);Wa(h,d)||h.push(d)}l=new Ft(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new Fa(new ln(a),l,c)}function ms(n,e){if(_s(n=Ot(n)))return vs("Unsupported field value:",e,n),gs(n,e);if(n instanceof ds)return function(r,s){if(!ps(s.rt))throw s.lt(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.lt(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.rt!==4)throw e.lt("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ms(a,s._t(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _a(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:Vn(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vn(s.serializer,i)}}if(r instanceof fs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:Ia(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.lt(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:us(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.lt(`Unsupported field value: ${Hn(r)}`)}(n,e)}function gs(n,e){const t={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zn(n,(r,s)=>{const i=ms(s,e.it(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function _s(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ge||n instanceof fs||n instanceof $t||n instanceof Ke||n instanceof ds)}function vs(n,e,t){if(!_s(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Hn(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function ja(n,e,t){if((e=Ot(e))instanceof hs)return e._internalPath;if(typeof e=="string")return za(n,e);throw cn("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ha=new RegExp("[~\\*/\\[\\]]");function za(n,e,t){if(e.search(Ha)>=0)throw cn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new hs(...e.split("."))._internalPath}catch{throw cn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function cn(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new x(U,a+n+l)}function Wa(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function Ga(n,e){const t=Ma(n=is(n,Ze)),r=qa(n.converter,e),s=Ua(Ba(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return ka(Ra(n.firestore),[s.toMutation(t._key,xt.exists(!1))]).then(()=>t)}(function(){(function(t){Et=t})(`${Do}_lite`),en(new Lt("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new mn(new ta(e.getProvider("auth-internal")),new ia(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(U,'"projectId" not provided in firebase.initializeApp.');return new rn(a.options.projectId,l)}(s,t),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),gt("firestore-lite","4.1.0",""),gt("firestore-lite","4.1.0","esm2017")})();const Ka=Hr({apiKey:Le(),authDomain:Le(),projectId:Le(),storageBucket:Le(),messagingSenderId:Le(),appId:Le()}),Za="documents",Ya=In(Ka,JSON.parse('{"apiKey":"AIzaSyBYGz_WUwzIpZYGf4SN4jo5xqp3MNEC8FA","authDomain":"conforall.firebaseapp.com","projectId":"conforall","storageBucket":"conforall.appspot.com","messagingSenderId":"289133639309","appId":"1:289133639309:web:b6ddf29928a923028214c4"}')),Ja=Xr(Ya),Xa=Oa(Ja),Qa=n=>Ga(Va(Xa,Za),n);function el(n){let e,t='<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>',r,s,i,o,a,l,c,h;return{c(){e=T("label"),e.innerHTML=t,r=te(),s=T("input"),o=te(),a=T("div"),l=T("span"),c=Ye("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(u){e=I(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ve(e)!=="svelte-9g4zpn"&&(e.innerHTML=t),r=ne(u),s=I(u,"INPUT",{type:!0,name:!0,class:!0}),o=ne(u),a=I(u,"DIV",{class:!0});var d=L(a);l=I(d,"SPAN",{class:!0});var v=L(l);c=Je(v,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),v.forEach(g),d.forEach(g),this.h()},h(){f(e,"class","label"),f(e,"for","personalid"),f(s,"type","string"),f(s,"name","personalid"),f(s,"class",i="input rounded-sm bg-base-200 "+(n[14]?"input-error":"")),s.disabled=n[2],f(l,"class",h="label-text-alt "+(n[14]?"text-error":"")),f(a,"class","label")},m(u,d){O(u,e,d),O(u,r,d),O(u,s,d),O(u,o,d),O(u,a,d),A(a,l),A(l,c)},p(u,d){d&16384&&i!==(i="input rounded-sm bg-base-200 "+(u[14]?"input-error":""))&&f(s,"class",i),d&4&&(s.disabled=u[2]),d&16384&&h!==(h="label-text-alt "+(u[14]?"text-error":""))&&f(l,"class",h)},d(u){u&&(g(e),g(r),g(s),g(o),g(a))}}}function tl(n){let e,t='<span class="label-text heading-03">ชื่อ*</span>',r,s,i,o,a,l,c,h;return{c(){e=T("label"),e.innerHTML=t,r=te(),s=T("input"),o=te(),a=T("div"),l=T("span"),c=Ye("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(u){e=I(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ve(e)!=="svelte-i2bah3"&&(e.innerHTML=t),r=ne(u),s=I(u,"INPUT",{type:!0,name:!0,class:!0}),o=ne(u),a=I(u,"DIV",{class:!0});var d=L(a);l=I(d,"SPAN",{class:!0});var v=L(l);c=Je(v,"ระบุชื่อจริงเป็นภาษาไทย"),v.forEach(g),d.forEach(g),this.h()},h(){f(e,"class","label"),f(e,"for","firstname"),f(s,"type","text"),f(s,"name","firstname"),f(s,"class",i="input rounded-sm bg-base-200 w-full "+(n[14]?"input-error":"")),s.disabled=n[2],f(l,"class",h="label-text-alt "+(n[14]?"text-error":"")),f(a,"class","label")},m(u,d){O(u,e,d),O(u,r,d),O(u,s,d),O(u,o,d),O(u,a,d),A(a,l),A(l,c)},p(u,d){d&16384&&i!==(i="input rounded-sm bg-base-200 w-full "+(u[14]?"input-error":""))&&f(s,"class",i),d&4&&(s.disabled=u[2]),d&16384&&h!==(h="label-text-alt "+(u[14]?"text-error":""))&&f(l,"class",h)},d(u){u&&(g(e),g(r),g(s),g(o),g(a))}}}function nl(n){let e,t='<span class="label-text heading-03">นามสกุล*</span>',r,s,i,o,a,l,c,h;return{c(){e=T("label"),e.innerHTML=t,r=te(),s=T("input"),o=te(),a=T("div"),l=T("span"),c=Ye("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(u){e=I(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1lqzuwh"&&(e.innerHTML=t),r=ne(u),s=I(u,"INPUT",{type:!0,name:!0,class:!0}),o=ne(u),a=I(u,"DIV",{class:!0});var d=L(a);l=I(d,"SPAN",{class:!0});var v=L(l);c=Je(v,"ระบุนามสกุลเป็นภาษาไทย"),v.forEach(g),d.forEach(g),this.h()},h(){f(e,"class","label"),f(e,"for","lastname"),f(s,"type","text"),f(s,"name","lastname"),f(s,"class",i="input rounded-sm bg-base-200 "+(n[14]?"input-error":"")),s.disabled=n[2],f(l,"class",h="label-text-alt "+(n[14]?"text-error":"")),f(a,"class","label")},m(u,d){O(u,e,d),O(u,r,d),O(u,s,d),O(u,o,d),O(u,a,d),A(a,l),A(l,c)},p(u,d){d&16384&&i!==(i="input rounded-sm bg-base-200 "+(u[14]?"input-error":""))&&f(s,"class",i),d&4&&(s.disabled=u[2]),d&16384&&h!==(h="label-text-alt "+(u[14]?"text-error":""))&&f(l,"class",h)},d(u){u&&(g(e),g(r),g(s),g(o),g(a))}}}function rl(n){let e,t,r=`คลิกเพื่อกรอกลายเซ็น
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z" fill="black"></path><path d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z" fill="black"></path></svg>`,s,i;return{c(){e=T("div"),t=T("button"),t.innerHTML=r,this.h()},l(o){e=I(o,"DIV",{class:!0});var a=L(e);t=I(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),ve(t)!=="svelte-1oknu6s"&&(t.innerHTML=r),a.forEach(g),this.h()},h(){f(t,"type","button"),f(t,"class","btn bg-base-100 heading-03 shadow-xl"),f(e,"class","absolute w-full h-full flex justify-center items-center top-0 left-0")},m(o,a){O(o,e,a),A(e,t),s||(i=Kt(t,"click",n[9]),s=!0)},p:nt,d(o){o&&g(e),s=!1,i()}}}function sl(n){let e,t=`ล้าง
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"></rect><path d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z" fill="#8054FF"></path></svg>`,r,s;return{c(){e=T("button"),e.innerHTML=t,this.h()},l(i){e=I(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-1sk22b2"&&(e.innerHTML=t),this.h()},h(){f(e,"type","button"),f(e,"class","btn btn-outline btn-accent absolute right-[10px] bottom-4")},m(i,o){O(i,e,o),r||(s=Kt(e,"click",n[7]),r=!0)},p:nt,d(i){i&&g(e),r=!1,s()}}}function il(n){let e,t,r=(n[14]||"")+"",s;return{c(){e=T("div"),t=T("span"),s=Ye(r),this.h()},l(i){e=I(i,"DIV",{class:!0});var o=L(e);t=I(o,"SPAN",{class:!0});var a=L(t);s=Je(a,r),a.forEach(g),o.forEach(g),this.h()},h(){f(t,"class","label-text-alt text-error"),f(e,"class","label")},m(i,o){O(i,e,o),A(e,t),A(t,s)},p(i,o){o&16384&&r!==(r=(i[14]||"")+"")&&Cs(s,r)},d(i){i&&g(e)}}}function Ir(n){let e,t='<span class="label-text-alt text-error">เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง</span>';return{c(){e=T("div"),e.innerHTML=t,this.h()},l(r){e=I(r,"DIV",{class:!0,"data-svelte-h":!0}),ve(e)!=="svelte-auejgl"&&(e.innerHTML=t),this.h()},h(){f(e,"class","label")},m(r,s){O(r,e,s)},d(r){r&&g(e)}}}function ol(n){let e,t;return{c(){e=Ye(`กำลังลงชื่อ...
				`),t=T("span"),this.h()},l(r){e=Je(r,`กำลังลงชื่อ...
				`),t=I(r,"SPAN",{class:!0}),L(t).forEach(g),this.h()},h(){f(t,"class","loading loading-spinner")},m(r,s){O(r,e,s),O(r,t,s)},d(r){r&&(g(e),g(t))}}}function al(n){let e,t,r,s,i;return{c(){e=Ye(`ลองลงชื่อใหม่อีกครั้ง
				`),t=Ue("svg"),r=Ue("path"),s=Ue("path"),i=Ue("path"),this.h()},l(o){e=Je(o,`ลองลงชื่อใหม่อีกครั้ง
				`),t=je(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=L(t);r=je(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),L(r).forEach(g),s=je(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),L(s).forEach(g),i=je(a,"path",{d:!0,fill:!0}),L(i).forEach(g),a.forEach(g),this.h()},h(){f(r,"fill-rule","evenodd"),f(r,"clip-rule","evenodd"),f(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),f(r,"fill","white"),f(s,"fill-rule","evenodd"),f(s,"clip-rule","evenodd"),f(s,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),f(s,"fill","white"),f(i,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),f(i,"fill","white"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"width","16"),f(t,"height","16"),f(t,"viewBox","0 0 16 16"),f(t,"fill","none")},m(o,a){O(o,e,a),O(o,t,a),A(t,r),A(t,s),A(t,i)},d(o){o&&(g(e),g(t))}}}function ll(n){let e,t,r,s,i;return{c(){e=Ye(`ลงชื่อเลย
				`),t=Ue("svg"),r=Ue("path"),s=Ue("path"),i=Ue("path"),this.h()},l(o){e=Je(o,`ลงชื่อเลย
				`),t=je(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=L(t);r=je(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),L(r).forEach(g),s=je(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),L(s).forEach(g),i=je(a,"path",{d:!0,fill:!0}),L(i).forEach(g),a.forEach(g),this.h()},h(){f(r,"fill-rule","evenodd"),f(r,"clip-rule","evenodd"),f(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),f(r,"fill","white"),f(s,"fill-rule","evenodd"),f(s,"clip-rule","evenodd"),f(s,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),f(s,"fill","white"),f(i,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),f(i,"fill","white"),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"width","16"),f(t,"height","16"),f(t,"viewBox","0 0 16 16"),f(t,"fill","none")},m(o,a){O(o,e,a),O(o,t,a),A(t,r),A(t,s),A(t,i)},d(o){o&&(g(e),g(t))}}}function cl(n){let e,t,r,s,i,o,a,l='<span class="label-text heading-03">คำนำหน้า</span>',c,h,u,d,v="นาย",y,k="นาง",C,b="นางสาว",j,re,F,be,V,oe,R,B,ae='<span class="label-text heading-03">ลงลายมือชื่อ*</span>',S,W,ie,we,Pe,Q,le,ke,_,D='<label class="label cursor-pointer space-x-2 justify-normal"><input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อ</span></label>',P,X,H,ee,pe,ue,Re,Fe;r=new Wt({props:{for:"personalid",$$slots:{default:[el,({messages:m})=>({14:m}),({messages:m})=>m?16384:0]},$$scope:{ctx:n}}}),F=new Wt({props:{for:"firstname",$$slots:{default:[tl,({messages:m})=>({14:m}),({messages:m})=>m?16384:0]},$$scope:{ctx:n}}}),V=new Wt({props:{for:"lastname",$$slots:{default:[nl,({messages:m})=>({14:m}),({messages:m})=>m?16384:0]},$$scope:{ctx:n}}});function Qe(m,M){return m[1]?sl:rl}let $e=Qe(n),ce=$e(n);le=new Wt({props:{for:"signature",$$slots:{default:[il,({messages:m})=>({14:m}),({messages:m})=>m?16384:0]},$$scope:{ctx:n}}});let K=n[3]&&Ir();function E(m,M){return!m[2]&&!m[3]?ll:!m[2]&&m[3]?al:ol}let p=E(n),w=p(n);return{c(){e=T("form"),t=T("div"),At(r.$$.fragment),s=te(),i=T("div"),o=T("div"),a=T("label"),a.innerHTML=l,c=te(),h=T("select"),u=T("option"),d=T("option"),d.textContent=v,y=T("option"),y.textContent=k,C=T("option"),C.textContent=b,j=te(),re=T("div"),At(F.$$.fragment),be=te(),At(V.$$.fragment),oe=te(),R=T("div"),B=T("div"),B.innerHTML=ae,S=te(),W=T("div"),ie=T("canvas"),Pe=te(),ce.c(),Q=te(),At(le.$$.fragment),ke=te(),_=T("div"),_.innerHTML=D,P=te(),K&&K.c(),X=te(),H=T("button"),w.c(),this.h()},l(m){e=I(m,"FORM",{});var M=L(e);t=I(M,"DIV",{class:!0});var Z=L(t);Tt(r.$$.fragment,Z),s=ne(Z),i=I(Z,"DIV",{class:!0});var he=L(i);o=I(he,"DIV",{class:!0});var Y=L(o);a=I(Y,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ve(a)!=="svelte-1h1uakk"&&(a.innerHTML=l),c=ne(Y),h=I(Y,"SELECT",{class:!0,name:!0});var q=L(h);u=I(q,"OPTION",{}),L(u).forEach(g),d=I(q,"OPTION",{"data-svelte-h":!0}),ve(d)!=="svelte-1en4y3b"&&(d.textContent=v),y=I(q,"OPTION",{"data-svelte-h":!0}),ve(y)!=="svelte-18vmce2"&&(y.textContent=k),C=I(q,"OPTION",{"data-svelte-h":!0}),ve(C)!=="svelte-1lp5zi9"&&(C.textContent=b),q.forEach(g),Y.forEach(g),j=ne(he),re=I(he,"DIV",{class:!0});var Ae=L(re);Tt(F.$$.fragment,Ae),Ae.forEach(g),he.forEach(g),be=ne(Z),Tt(V.$$.fragment,Z),oe=ne(Z),R=I(Z,"DIV",{class:!0});var me=L(R);B=I(me,"DIV",{class:!0,"data-svelte-h":!0}),ve(B)!=="svelte-zde8yy"&&(B.innerHTML=ae),S=ne(me),W=I(me,"DIV",{class:!0});var De=L(W);ie=I(De,"CANVAS",{class:!0}),L(ie).forEach(g),Pe=ne(De),ce.l(De),De.forEach(g),Q=ne(me),Tt(le.$$.fragment,me),me.forEach(g),ke=ne(Z),_=I(Z,"DIV",{class:!0,"data-svelte-h":!0}),ve(_)!=="svelte-qjy4ha"&&(_.innerHTML=D),P=ne(Z),K&&K.l(Z),X=ne(Z),H=I(Z,"BUTTON",{type:!0,class:!0});var Ut=L(H);w.l(Ut),Ut.forEach(g),Z.forEach(g),M.forEach(g),this.h()},h(){f(a,"class","label"),f(a,"for","prefix"),u.selected=!0,u.__value="",jt(u,u.__value),d.__value="นาย",jt(d,d.__value),y.__value="นาง",jt(y,y.__value),C.__value="นางสาว",jt(C,C.__value),f(h,"class","select rounded-sm max-w-xs bg-base-200"),h.disabled=n[2],f(h,"name","prefix"),f(o,"class","form-control"),f(re,"class","form-control flex-1"),f(i,"class","flex flex-row space-x-[10px]"),f(B,"class","label"),f(ie,"class",we="bg-base-200 h-[258px] w-full rounded-sm "+(!n[1]||n[2]?"pointer-events-none":"")),f(W,"class","relative"),f(R,"class","form-control"),f(_,"class","form-control"),f(H,"type","submit"),f(H,"class",ee="btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100 "+(n[3]?"bg-error":"red")),H.disabled=pe=!n[4].consent||n[2],f(t,"class","form-control w-full")},m(m,M){O(m,e,M),A(e,t),It(r,t,null),A(t,s),A(t,i),A(i,o),A(o,a),A(o,c),A(o,h),A(h,u),A(h,d),A(h,y),A(h,C),A(i,j),A(i,re),It(F,re,null),A(t,be),It(V,t,null),A(t,oe),A(t,R),A(R,B),A(R,S),A(R,W),A(W,ie),n[8](ie),A(W,Pe),ce.m(W,null),A(R,Q),It(le,R,null),A(t,ke),A(t,_),A(t,P),K&&K.m(t,null),A(t,X),A(t,H),w.m(H,null),ue=!0,Re||(Fe=Ts(n[5].call(null,e)),Re=!0)},p(m,[M]){const Z={};M&49156&&(Z.$$scope={dirty:M,ctx:m}),r.$set(Z),(!ue||M&4)&&(h.disabled=m[2]);const he={};M&49156&&(he.$$scope={dirty:M,ctx:m}),F.$set(he);const Y={};M&49156&&(Y.$$scope={dirty:M,ctx:m}),V.$set(Y),(!ue||M&6&&we!==(we="bg-base-200 h-[258px] w-full rounded-sm "+(!m[1]||m[2]?"pointer-events-none":"")))&&f(ie,"class",we),$e===($e=Qe(m))&&ce?ce.p(m,M):(ce.d(1),ce=$e(m),ce&&(ce.c(),ce.m(W,null)));const q={};M&49152&&(q.$$scope={dirty:M,ctx:m}),le.$set(q),m[3]?K||(K=Ir(),K.c(),K.m(t,X)):K&&(K.d(1),K=null),p!==(p=E(m))&&(w.d(1),w=p(m),w&&(w.c(),w.m(H,null))),(!ue||M&8&&ee!==(ee="btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100 "+(m[3]?"bg-error":"red")))&&f(H,"class",ee),(!ue||M&20&&pe!==(pe=!m[4].consent||m[2]))&&(H.disabled=pe)},i(m){ue||(Ne(r.$$.fragment,m),Ne(F.$$.fragment,m),Ne(V.$$.fragment,m),Ne(le.$$.fragment,m),ue=!0)},o(m){Me(r.$$.fragment,m),Me(F.$$.fragment,m),Me(V.$$.fragment,m),Me(le.$$.fragment,m),ue=!1},d(m){m&&g(e),Ct(r),Ct(F),Ct(V),n[8](null),ce.d(),Ct(le),K&&K.d(),w.d(),Re=!1,Fe()}}}function ul(n,e,t){let r,s,i,o=!1,a=!1,l=!1;const c=new ResizeObserver(b=>{t(0,s.width=b[0].target.clientWidth,s),t(0,s.height=b[0].target.clientHeight,s),i.fromData(i.toData())}),{form:h,setTouched:u,setData:d,data:v}=Qs({validate(b){try{In(sr,b)}catch(j){return li(j).nested}return{}},async onSubmit(b){try{t(3,l=!1),t(2,a=!0),await Qa(In(sr,b))}catch(j){t(3,l=!0),alert(j)}t(2,a=!1)},extend:ei});Is(n,v,b=>t(4,r=b)),Pr(()=>{i=new Jt(s),i.addEventListener("endStroke",()=>{u("signature",!0),d("signature",i.toDataURL())}),c.observe(s)});function y(){i.clear(),d("signature",void 0)}function k(b){Dr[b?"unshift":"push"](()=>{s=b,t(0,s)})}return[s,o,a,l,r,h,v,y,k,()=>t(1,o=!0)]}class hl extends Nn{constructor(e){super(),Fn(this,e,ul,cl,un,{})}}function dl(n){let e,t,r;return t=new hl({}),{c(){e=T("div"),At(t.$$.fragment),this.h()},l(s){e=I(s,"DIV",{class:!0});var i=L(e);Tt(t.$$.fragment,i),i.forEach(g),this.h()},h(){f(e,"class","bg-base-100 px-[10px] py-5")},m(s,i){O(s,e,i),It(t,e,null),r=!0},i(s){r||(Ne(t.$$.fragment,s),r=!0)},o(s){Me(t.$$.fragment,s),r=!1},d(s){s&&g(e),Ct(t)}}}function fl(n){let e,t="เราอยากให้ลงลายมือชื่อบนกระดาษมากกว่าออนไลน์ เพราะประกาศของกกต. เขียนไว้ไม่ชัดเจนว่าลงชื่อทางออนไลน์ได้หรือไม่ได้ จึงต้องรวบรวมชื่อบนกระดาษให้ได้ 50,000 เป็นอย่างน้อยก่อน",r,s,i=`<h1 class="heading-responsive-01">วิธีที่ 1 : เดินทางไปลงชื่อที่จุดตั้งโต๊ะ</h1> <a href="/locations" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดูสถานที่ตั้งโต๊ะ
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.33332 0C5.40622 0 3 2.28256 3 5.53844C3 6.70035 3.27369 7.50866 3.78205 8.40382L7.97434 15.7884C8.00983 15.8525 8.06184 15.9059 8.12497 15.9432C8.1881 15.9804 8.26004 16 8.33332 16C8.4066 16 8.47854 15.9804 8.54166 15.9432C8.60479 15.9059 8.6568 15.8525 8.69229 15.7884L12.8846 8.40382C13.393 7.50864 13.6666 6.70035 13.6666 5.53844C13.6666 2.28256 11.2604 0 8.33332 0ZM8.33332 0.82051C10.8441 0.82051 12.8461 2.67673 12.8461 5.53844C12.8461 6.58135 12.6437 7.17112 12.173 7.99999L8.33332 14.7564L4.49359 7.99999C4.02289 7.17114 3.82051 6.58135 3.82051 5.53844C3.82051 2.67673 5.82255 0.82051 8.33332 0.82051ZM8.33332 3.28204C9.47107 3.28204 10.3846 4.19558 10.3846 5.33332C10.3846 6.47104 9.47106 7.38459 8.33332 7.38459C7.19557 7.38459 6.28204 6.47104 6.28204 5.33332C6.28204 4.19558 7.19557 3.28204 8.33332 3.28204Z" fill="white"></path></svg></a>`,o,a,l="หรือ",c,h,u=`<h1 class="heading-responsive-01 mb-3">วิธีที่ 2 : ดาวน์โหลดแบบฟอร์มมากรอก</h1> <div class="border-t grid gap-2 py-5"><p class="heading-03">1. ดาวน์โหลดแบบฟอร์ม และพิมพ์ลงกระดาษ A4</p> <button class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดาวน์โหลดแบบฟอร์ม
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="white" style="mix-blend-mode:multiply"></rect><path d="M13.5 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V13.5C1.5 13.7652 1.60536 14.0196 1.79289 14.2071C1.98043 14.3946 2.23478 14.5 2.5 14.5H13.5C13.7652 14.5 14.0196 14.3946 14.2071 14.2071C14.3946 14.0196 14.5 13.7652 14.5 13.5V2.5C14.5 2.23478 14.3946 1.98043 14.2071 1.79289C14.0196 1.60536 13.7652 1.5 13.5 1.5ZM13.5 2.5V4.5H2.5V2.5H13.5ZM8.5 5.5H13.5V9H8.5V5.5ZM7.5 9H2.5V5.5H7.5V9ZM2.5 10H7.5V13.5H2.5V10ZM8.5 13.5V10H13.5V13.5H8.5Z" fill="white"></path></svg></button></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">2. ลงลายมือชื่อบนแบบฟอร์ม</p> <p>ชวนคนใกล้ๆ ตัวมาร่วมลงชื่อให้เต็มแผ่นเลยก็ได้</p> <img class="mx-auto" src="/register-form.svg" alt="register-form"/></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">3. ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw ภายในเวลา 20.00 น. ของวันที่ 20 สิงหาคม 2566</p> <div class="grid gap-1"><p>3.1. นำส่งด้วยตัวเองที่ iLaw</p> <a href="https://goo.gl/maps/PM5nXuVFUv5GCUZw7" class="link px-6 py-2 text-center text-accent font-bold heading-03 ">ดูแผนที่</a></div> <div class="grid gap-1"><p>3.2. ส่งไปรษณีย์ (ต้องใช้บริการไปรษณีย์ไทยเท่านั้น)</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">ตู้ ปณ.79 ปณศ.สามเสนใน เขตพญาไท กรุงเทพฯ ประเทศไทย 10400 โทร. 0996786031</p></div> <div class="grid gap-1"><p>3.3. สแกนแล้วส่งอีเมลล์มาที่</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">conforall66@gmail.com</p></div></div>`;return{c(){e=T("p"),e.textContent=t,r=te(),s=T("div"),s.innerHTML=i,o=te(),a=T("p"),a.textContent=l,c=te(),h=T("div"),h.innerHTML=u,this.h()},l(d){e=I(d,"P",{"data-svelte-h":!0}),ve(e)!=="svelte-ack3u8"&&(e.textContent=t),r=ne(d),s=I(d,"DIV",{class:!0,"data-svelte-h":!0}),ve(s)!=="svelte-x9jdd5"&&(s.innerHTML=i),o=ne(d),a=I(d,"P",{"data-svelte-h":!0}),ve(a)!=="svelte-nl1k6i"&&(a.textContent=l),c=ne(d),h=I(d,"DIV",{class:!0,"data-svelte-h":!0}),ve(h)!=="svelte-1x934pl"&&(h.innerHTML=u),this.h()},h(){f(s,"class","p-4 bg-base-100 grid gap-3 text-left"),f(h,"class","p-4 bg-base-100 text-left")},m(d,v){O(d,e,v),O(d,r,v),O(d,s,v),O(d,o,v),O(d,a,v),O(d,c,v),O(d,h,v)},i:nt,o:nt,d(d){d&&(g(e),g(r),g(s),g(o),g(a),g(c),g(h))}}}function pl(n){let e,t,r="ร่วมลงชื่อ",s,i,o,a,l,c,h,u,d,v,y,k,C,b,j,re,F;const be=[fl,dl],V=[];function oe(R,B){return R[0]?0:1}return C=oe(n),b=V[C]=be[C](n),{c(){e=T("div"),t=T("h3"),t.textContent=r,s=te(),i=T("div"),o=T("button"),a=Ye(`แบบกระดาษ
            `),l=Ue("svg"),c=Ue("path"),u=te(),d=T("button"),v=Ye("แบบออนไลน์"),k=te(),b.c(),this.h()},l(R){e=I(R,"DIV",{class:!0});var B=L(e);t=I(B,"H3",{class:!0,"data-svelte-h":!0}),ve(t)!=="svelte-l3nsqj"&&(t.textContent=r),s=ne(B),i=I(B,"DIV",{class:!0});var ae=L(i);o=I(ae,"BUTTON",{class:!0});var S=L(o);a=Je(S,`แบบกระดาษ
            `),l=je(S,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var W=L(l);c=je(W,"path",{d:!0,fill:!0}),L(c).forEach(g),W.forEach(g),S.forEach(g),u=ne(ae),d=I(ae,"BUTTON",{class:!0});var ie=L(d);v=Je(ie,"แบบออนไลน์"),ie.forEach(g),ae.forEach(g),k=ne(B),b.l(B),B.forEach(g),this.h()},h(){f(t,"class","heading-responsive-03"),f(c,"d","M11.5 3.33838C10.8584 3.33838 10.2311 3.5283 9.69722 3.88422C9.16336 4.24013 8.74678 4.7461 8.5 5.33838C8.25322 4.7461 7.83664 4.24013 7.30278 3.88422C6.76891 3.5283 6.14163 3.33838 5.5 3.33838C4.70435 3.33838 3.94129 3.65445 3.37868 4.21706C2.81607 4.77967 2.5 5.54273 2.5 6.33838C2.5 9.40088 8.5 14.3384 8.5 14.3384C8.5 14.3384 14.5 9.40088 14.5 6.33838C14.5 5.54273 14.1839 4.77967 13.6213 4.21706C13.0587 3.65445 12.2956 3.33838 11.5 3.33838Z"),f(c,"fill","black"),f(l,"xmlns","http://www.w3.org/2000/svg"),f(l,"width","17"),f(l,"height","17"),f(l,"viewBox","0 0 17 17"),f(l,"fill","none"),f(o,"class",h=n[1](n[0])),f(d,"class",y=n[1](!n[0])),f(i,"class","join w-full"),f(e,"class","text-center grid gap-3 body-02-normal")},m(R,B){O(R,e,B),A(e,t),A(e,s),A(e,i),A(i,o),A(o,a),A(o,l),A(l,c),A(i,u),A(i,d),A(d,v),A(e,k),V[C].m(e,null),j=!0,re||(F=[Kt(o,"click",n[2]),Kt(d,"click",n[3])],re=!0)},p(R,[B]){(!j||B&1&&h!==(h=R[1](R[0])))&&f(o,"class",h),(!j||B&1&&y!==(y=R[1](!R[0])))&&f(d,"class",y);let ae=C;C=oe(R),C!==ae&&(Cr(),Me(V[ae],1,1,()=>{V[ae]=null}),Sr(),b=V[C],b||(b=V[C]=be[C](R),b.c()),Ne(b,1),b.m(e,null))},i(R){j||(Ne(b),j=!0)},o(R){Me(b),j=!1},d(R){R&&g(e),V[C].d(),re=!1,Ss(F)}}}function ml(n,e,t){let r=!0;return[r,a=>{const l="btn join-item flex-1 heading-03 gap-1 py-2 px-6";return a?l:l+" opacity-50"},()=>t(0,r=!0),()=>t(0,r=!1)]}class yl extends Nn{constructor(e){super(),Fn(this,e,ml,pl,un,{})}}export{yl as default};

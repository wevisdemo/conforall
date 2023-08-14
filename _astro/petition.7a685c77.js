import{n as Xe,s as dn,C as vs,S as Fn,i as $n,e as T,a as Q,D as Jn,c as I,b as j,d as g,f as ee,E as ys,j as N,F as Cr,r as Fe,G as Pr,t as $e,H as Es,o as Bn,I as ws,J as Kt,v as Dr,z as xr,A as kr,B as Rr,l as At,p as Tt,m as me,h as p,K as jt,k as A,q as It,L as As,u as St,M as Ts,w as nt,x as rt,y as Is,N as Zt,O as ht,P as ft,Q as Ss}from"./index.6809c92f.js";function Cs(n,...e){const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function He(n){let e;return Cs(n,t=>e=t)(),e}class Ps extends Error{constructor(e,t){super(e),this.name="FelteSubmitError",this.response=t}}function Ds(n,e){return Object.keys(n).some(r=>e(n[r]))}function hn(n,e){return Object.keys(n||{}).reduce((r,s)=>Object.assign(Object.assign({},r),{[s]:e(n[s])}),{})}function F(n){return Object.prototype.toString.call(n)==="[object Object]"}function Ie(n){return Object.keys(n||{}).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:F(n[t])?Ie(n[t]):Array.isArray(n[t])?[...n[t]]:n[t]}),{})}function xs(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ks(n){return function(e){if(F(e)){const t=Se(e,n);return xs(t,["key"])}return n}}function Se(n,e){return hn(n,t=>F(t)?Se(t,e):Array.isArray(t)?t.map(ks(e)):e)}function Qe(...n){const e=n.pop(),t=n.shift();if(typeof t=="string")return t;const r=Ie(t);if(n.length===0)return r;for(const s of n){if(!s)continue;if(typeof s=="string")return s;let i=e(r,s);if(typeof i<"u")return i;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(s))));for(const a of o)if(i=e(r[a],s[a]),typeof i<"u")r[a]=i;else if(F(s[a])&&F(r[a]))r[a]=Qe(r[a],s[a],e);else if(Array.isArray(s[a]))r[a]=s[a].map((l,c)=>{if(!F(l))return l;const d=Array.isArray(r[a])?r[a][c]:r[a];return Qe(d,l,e)});else if(F(s[a])){const l=Se(Ie(s[a]),void 0);r[a]=Qe(l,s[a],e)}else typeof s[a]<"u"&&(r[a]=s[a])}return r}function Rs(n,e){if(!(F(n)&&F(e))){if(Array.isArray(e)){if(e.some(F))return;const t=Array.isArray(n)?n:[];return e.map((r,s)=>{var i;return(i=t[s])!==null&&i!==void 0?i:r})}if(typeof n<"u")return n}}function Xn(...n){return Qe(...n,Rs)}function Or(...n){return Qe(...n,()=>{})}function je(n,e,t){const r=i=>String.prototype.split.call(e,i).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,n),s=r(/[,[\]]+?/)||r(/[,[\].]+?/);return s===void 0||s===n?t:s}function Bt(n,e,t){n&&(n=Ie(n)),F(n)||(n={});const r=Array.isArray(e)?e:e.match(/[^.[\]]+/g)||[],s=r[r.length-1];if(!s)return n;let i=n;for(let o=0;o<r.length-1;o++){const a=r[o];if(!i[a]||!F(i[a])&&!Array.isArray(i[a])){const l=r[o+1];isNaN(Number(l))?i[a]={}:i[a]=[]}i=i[a]}return i[s]=t(i[s]),n}function J(n,e,t){return Bt(n,e,()=>t)}function Ct(n,e){if(!n||Object(n)!==n)return;typeof n<"u"&&(n=Ie(n));const t=Array.isArray(e)?e:e.toString().match(/[^.[\]]+/g)||[],r=t.length===1?n:je(n,t.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(t[t.length-1]),1):r==null||delete r[t[t.length-1]],n}function Rt(n,e){return Ds(n,t=>F(t)?Rt(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e(t):t.some(r=>F(r)?Rt(r,e):e(r)):e(t))}function pt(n){return n?.nodeName==="INPUT"}function Os(n){return n?.nodeName==="TEXTAREA"}function mt(n){return n?.nodeName==="SELECT"}function fn(n){return n?.nodeName==="FIELDSET"}function ye(n){return pt(n)||Os(n)||mt(n)}function Qn(n){return n.nodeType===Node.ELEMENT_NODE}function pe(n,e){return e??(ye(n)?n.name:"")}function _n(n){let e=n;for(;e&&e.nodeName!=="FORM";){if(e.hasAttribute("data-felte-ignore"))return!0;e=e.parentElement}return!1}function Ls(n,e){if(!(F(n)||F(e))){if(n===null||n==="")return e;if(e===null||e===""||!e)return n;if(!(!n||!e)){if(Array.isArray(n)){if(!Array.isArray(e))return[...n,e];const t=[],r=Math.max(e.length,n.length);for(let s=0;s<r;s++){let i=n[s],o=e[s];!F(i)&&!F(o)?(Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]),t.push(...i,...o)):t.push(dt([i??{},o??{}]))}return t.filter(Boolean)}return Array.isArray(e)||(e=[e]),[n,...e].reduce((t,r)=>t.concat(r),[]).filter(Boolean)}}}function dt(n){return Qe(...n,Ls)}function Vs(n,e){return e?(Array.isArray(e)?e:[e]).map(r=>r(n)):[]}function Tn(n,e){return e?Array.isArray(e)?e.reduce((t,r)=>r(t),n):e(n):n}function Un(n=8){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function Yt(n,e,{onInit:t,onEnd:r}={}){let s;return(...i)=>{s||t?.(),s&&clearTimeout(s),s=setTimeout(()=>{n.apply(this,i),s=void 0,r?.()},e)}}function In(n){if(ye(n))return[n];if(n.childElementCount===0)return[];const e=new Set;for(const t of n.children){if(ye(t)&&e.add(t),fn(t))for(const r of t.elements)ye(r)&&e.add(r);t.childElementCount>0&&In(t).forEach(r=>e.add(r))}return Array.from(e)}function Lr(n){for(const e of n.elements)!ye(e)&&!fn(e)||n.hasAttribute("data-felte-keep-on-remove")&&!e.hasAttribute("data-felte-keep-on-remove")&&(e.dataset.felteKeepOnRemove=n.dataset.felteKeepOnRemove)}function Vr(n){return n.type.match(/^(number|range)$/)?n.value?+n.value:void 0:n.value}function er(n){var e;let t={},r={};for(const s of n.elements){if(fn(s)&&Lr(s),!ye(s)||!s.name)continue;const i=pe(s);if(pt(s)){if(s.type==="checkbox"){if(typeof je(t,i)>"u"){if(Array.from(n.querySelectorAll(`[name="${s.name}"]`)).filter(l=>ye(l)?i===pe(l):!1).length===1){t=J(t,i,s.checked),r=J(r,i,!1);continue}t=J(t,i,s.checked?[s.value]:[]),r=J(r,i,!1);continue}Array.isArray(je(t,i))&&s.checked&&(t=Bt(t,i,a=>[...a,s.value]));continue}if(s.type==="radio"){if(je(t,i))continue;t=J(t,i,s.checked?s.value:void 0),r=J(r,i,!1);continue}if(s.type==="file"){t=J(t,i,s.multiple?Array.from(s.files||[]):(e=s.files)===null||e===void 0?void 0:e[0]),r=J(r,i,!1);continue}}else if(mt(s)){if(!s.multiple)t=J(t,i,s.value);else{const l=Array.from(s.selectedOptions).map(c=>c.value);t=J(t,i,l)}r=J(r,i,!1);continue}const o=Vr(s);t=J(t,i,o),r=J(r,i,!1)}return{defaultData:t,defaultTouched:r}}function Ms(n,e){var t;if(!ye(n))return;const r=e;if(pt(n)){if(n.type==="checkbox"){const s=r;if(typeof s>"u"||typeof s=="boolean"){n.checked=!!s;return}Array.isArray(s)&&(s.includes(n.value)?n.checked=!0:n.checked=!1);return}if(n.type==="radio"){const s=r;n.value===s?n.checked=!0:n.checked=!1;return}if(n.type==="file"){if(e instanceof FileList)n.files=e;else if(e instanceof File&&typeof DataTransfer<"u"){const s=new DataTransfer;s.items.add(e),n.files=s.files}else if(typeof DataTransfer<"u"&&Array.isArray(e)&&e.some(s=>s instanceof File)){const s=new DataTransfer;for(const i of e)i instanceof File&&s.items.add(i);n.files=s.files}else(!e||Array.isArray(e)&&!e.length)&&(n.files=null,n.value="");return}}else if(mt(n)){if(n.multiple){if(Array.isArray(r)){n.value=String((t=r[0])!==null&&t!==void 0?t:"");const i=r.map(o=>String(o));for(const o of n.options)i.includes(o.value)?o.selected=!0:o.selected=!1}}else{n.value=String(r??"");for(const i of n.options)i.value===String(r)?i.selected=!0:i.selected=!1}return}n.value=String(r??"")}function Ht(n,e){for(const t of n.elements){if(fn(t)&&Lr(t),!ye(t)||!t.name)continue;const r=pe(t);Ms(t,je(e,r))}}function Mr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function ze(n,e){return hn(n,t=>F(t)?ze(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e:t.map(r=>{const s=ze(r,e);return Mr(s,["key"])}):e)}function lt(n){return n?hn(n,e=>F(e)?lt(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!F(t))return t;const r=lt(t);return r.key||(r.key=Un()),r}):e):{}}function at(n){return n?hn(n,e=>F(e)?at(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!F(t))return t;const r=at(t);return Mr(r,["key"])}):e):{}}function Ns(){class n extends CustomEvent{constructor(s){super("feltesuccess",{detail:s})}}class e extends CustomEvent{constructor(s){super("felteerror",{detail:s,cancelable:!0})}setErrors(s){this.preventDefault(),this.errors=s}}class t extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(s){this.onSubmit=s}handleError(s){this.onError=s}handleSuccess(s){this.onSuccess=s}}return{createErrorEvent:r=>new e(r),createSubmitEvent:()=>new t,createSuccessEvent:r=>new n(r)}}function Fs(n){if(n)return async function(){let t=new FormData(n);const r=new URL(n.action),s=n.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||n.method;let i=n.enctype;n.querySelector('input[type="file"]')&&(i="multipart/form-data"),(s==="get"||i==="application/x-www-form-urlencoded")&&(t=new URLSearchParams(t));let o;s==="get"?(t.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:s,headers:{Accept:"application/json"}}):o={method:s,body:t,headers:Object.assign(Object.assign({},i!=="multipart/form-data"&&{"Content-Type":i}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new Ps("An error occurred while submitting the form",a)}}function zt(n,e,t,r){return Bt(n,e,s=>(typeof s<"u"&&!Array.isArray(s)||(s||(s=[]),typeof r>"u"?s.push(t):s.splice(r,0,t)),s))}function $s(n,e,t,r){return Bt(n,e,s=>(!s||!Array.isArray(s)||([s[t],s[r]]=[s[r],s[t]]),s))}function Bs(n,e,t,r){return Bt(n,e,s=>(!s||!Array.isArray(s)||s.splice(r,0,s.splice(t,1)[0]),s))}function tr(n){return typeof n=="function"}function Je(n){return(t,r)=>{if(typeof t=="string"){const s=t;n(i=>{const o=tr(r)?r(je(i,s)):r;return J(i,s,o)})}else n(s=>tr(t)?t(s):t)}}function Us({stores:n,config:e,validateErrors:t,validateWarnings:r,_getCurrentExtenders:s}){var i;let o,a=lt((i=e.initialValues)!==null&&i!==void 0?i:{});const{data:l,touched:c,errors:d,warnings:u,isDirty:h,isSubmitting:_,interacted:b}=n,O=Je(l.update),S=Je(c.update),w=Je(d.update),K=Je(u.update);function X(m){O(k=>{const D=m(k);return o&&Ht(o,D),D})}const V=(m,k,D)=>{Je(X)(m,k),typeof m=="string"&&D&&S(m,!0)};function $(m,k,D){const W=F(k)?ze(k,!1):!1,ne=F(W)?Se(W,[]):[];k=F(k)?Object.assign(Object.assign({},k),{key:Un()}):k,d.update(re=>zt(re,m,ne,D)),u.update(re=>zt(re,m,ne,D)),c.update(re=>zt(re,m,W,D)),l.update(re=>{const se=zt(re,m,k,D);return setTimeout(()=>o&&Ht(o,se)),se})}function L(m){d.update(m),u.update(m),c.update(m),l.update(k=>{const D=m(k);return setTimeout(()=>o&&Ht(o,D)),D})}function oe(m){L(k=>Ct(k,m))}function M(m,k,D){L(W=>$s(W,m,k,D))}function z(m,k,D){L(W=>Bs(W,m,k,D))}function ae(m){const k=je(a,m),D=F(k)?ze(k,!1):!1,W=F(D)?Se(D,[]):[];l.update(ne=>{const re=J(ne,m,k);return o&&Ht(o,re),re}),c.update(ne=>J(ne,m,D)),d.update(ne=>J(ne,m,W)),u.update(ne=>J(ne,m,W))}const C=Je(_.update),Y=Je(h.update),ie=Je(b.update);async function we(){const m=He(l);c.set(ze(m,!0)),b.set(null);const k=await t(m);return await r(m),k}function Ce(){V(Ie(a)),S(m=>Se(m,!1)),b.set(null),h.set(!1)}function te(m){return async function(D){var W,ne,re,se,Re,Oe,_e;const{createErrorEvent:Ze,createSubmitEvent:Pe,createSuccessEvent:Le}=Ns(),De=Pe();o?.dispatchEvent(De);const y=(ne=(W=De.onError)!==null&&W!==void 0?W:m?.onError)!==null&&ne!==void 0?ne:e.onError,f=(se=(re=De.onSuccess)!==null&&re!==void 0?re:m?.onSuccess)!==null&&se!==void 0?se:e.onSuccess,E=(_e=(Oe=(Re=De.onSubmit)!==null&&Re!==void 0?Re:m?.onSubmit)!==null&&Oe!==void 0?Oe:e.onSubmit)!==null&&_e!==void 0?_e:Fs(o);if(!E||(D?.preventDefault(),De.defaultPrevented))return;_.set(!0),b.set(null);const x=at(He(l)),ce=await t(x,m?.validate),de=await r(x,m?.warn);if(de&&u.set(Or(Se(x,[]),de)),c.set(ze(x,!0)),ce&&(c.set(ze(ce,!0)),Rt(ce,B=>Array.isArray(B)?B.length>=1:!!B))){await new Promise(B=>setTimeout(B)),s().forEach(B=>{var ue;return(ue=B.onSubmitError)===null||ue===void 0?void 0:ue.call(B,{data:x,errors:ce})}),_.set(!1);return}const v={event:D,setFields:V,setData:O,setTouched:S,setErrors:w,setWarnings:K,unsetField:oe,addField:$,resetField:ae,reset:Ce,setInitialValues:le.setInitialValues,moveField:z,swapFields:M,form:o,controls:o&&Array.from(o.elements).filter(ye),config:Object.assign(Object.assign({},e),m)};try{const P=await E(x,v);o?.dispatchEvent(Le(Object.assign({response:P},v))),await f?.(P,v)}catch(P){const B=Ze(Object.assign({error:P},v));if(o?.dispatchEvent(B),!y&&!B.defaultPrevented)throw P;if(!y&&!B.errors)return;const ue=B.errors||await y?.(P,v);ue&&(c.set(ze(ue,!0)),d.set(ue),await new Promise(he=>setTimeout(he)),s().forEach(he=>{var be;return(be=he.onSubmitError)===null||be===void 0?void 0:be.call(he,{data:x,errors:He(d)})}))}finally{_.set(!1)}}}const le={setData:O,setFields:V,setTouched:S,setErrors:w,setWarnings:K,setIsSubmitting:C,setIsDirty:Y,setInteracted:ie,validate:we,reset:Ce,unsetField:oe,resetField:ae,addField:$,swapFields:M,moveField:z,createSubmitHandler:te,handleSubmit:te(),setInitialValues:m=>{a=lt(m)}};return{public:le,private:{_setFormNode(m){o=m},_getInitialValues:()=>a}}}function js({helpers:n,stores:e,config:t,extender:r,createSubmitHandler:s,handleSubmit:i,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:d,setTouched:u,reset:h,setInitialValues:_}=n,{addValidator:b,addTransformer:O,validate:S}=n,{data:w,errors:K,warnings:X,touched:V,isSubmitting:$,isDirty:L,interacted:oe,isValid:M,isValidating:z}=e;function ae(C){C.requestSubmit||(C.requestSubmit=i);function Y(y){return function(f){return f({form:C,stage:y,controls:Array.from(C.elements).filter(ye),data:w,errors:K,warnings:X,touched:V,isValid:M,isValidating:z,isSubmitting:$,isDirty:L,interacted:oe,config:t,addValidator:b,addTransformer:O,setFields:d,validate:S,reset:h,createSubmitHandler:s,handleSubmit:i})}}l(r.map(Y("MOUNT"))),C.noValidate=!!t.validate;const{defaultData:ie,defaultTouched:we}=er(C);o(C),_(Or(Ie(ie),a())),d(a()),V.set(we);function Ce(y){const f=pe(y),E=Array.from(C.querySelectorAll(`[name="${y.name}"]`)).filter(x=>ye(x)?f===pe(x):!1);if(E.length!==0)return E.length===1?w.update(x=>J(x,pe(y),y.checked)):w.update(x=>J(x,pe(y),E.filter(pt).filter(ce=>ce.checked).map(ce=>ce.value)))}function te(y){const f=C.querySelectorAll(`[name="${y.name}"]`),E=Array.from(f).find(x=>pt(x)&&x.checked);w.update(x=>J(x,pe(y),E?.value))}function le(y){var f;const E=Array.from((f=y.files)!==null&&f!==void 0?f:[]);w.update(x=>J(x,pe(y),y.multiple?E:E[0]))}function ke(y){if(!y.multiple)w.update(f=>J(f,pe(y),y.value));else{const f=Array.from(y.selectedOptions).map(E=>E.value);w.update(E=>J(E,pe(y),f))}}function m(y){const f=y.target;if(!f||!ye(f)||mt(f)||_n(f)||["checkbox","radio","file"].includes(f.type)||!f.name)return;L.set(!0);const E=Vr(f);oe.set(f.name),w.update(x=>J(x,pe(f),E))}function k(y){const f=y.target;if(!(!f||!ye(f)||_n(f))&&f.name)if(u(pe(f),!0),oe.set(f.name),(mt(f)||["checkbox","radio","file","hidden"].includes(f.type))&&L.set(!0),f.type==="hidden"&&w.update(E=>J(E,pe(f),f.value)),mt(f))ke(f);else if(pt(f))f.type==="checkbox"?Ce(f):f.type==="radio"?te(f):f.type==="file"&&le(f);else return}function D(y){const f=y.target;!f||!ye(f)||_n(f)||f.name&&(u(pe(f),!0),oe.set(f.name))}function W(y){y.preventDefault(),h()}const ne={childList:!0,subtree:!0};function re(y){let f=He(w),E=He(V),x=He(K),ce=He(X);for(const de of y.reverse()){if(de.hasAttribute("data-felte-keep-on-remove")&&de.dataset.felteKeepOnRemove!=="false")continue;const v=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let P=pe(de);const B=He(V);if(v.test(P)){const he=P.split(".").slice(0,-1).join("."),be=je(B,he);F(be)&&Object.keys(be).length<=1&&(P=he)}f=Ct(f,P),E=Ct(E,P),x=Ct(x,P),ce=Ct(ce,P)}w.set(f),V.set(E),K.set(x),X.set(ce)}const se=Yt(()=>{c().forEach(E=>{var x;return(x=E.destroy)===null||x===void 0?void 0:x.call(E)}),l(r.map(Y("UPDATE")));const{defaultData:y,defaultTouched:f}=er(C);w.update(E=>Xn(E,y)),V.update(E=>Xn(E,f)),n.setFields(He(w))},0);let Re=[];const Oe=Yt(()=>{c().forEach(y=>{var f;return(f=y.destroy)===null||f===void 0?void 0:f.call(y)}),l(r.map(Y("UPDATE"))),re(Re),Re=[]},0);function _e(y){Array.from(y.addedNodes).some(E=>Qn(E)?ye(E)?!0:In(E).length>0:!1)&&se()}function Ze(y){for(const f of y.removedNodes){if(!Qn(f))continue;const E=In(f);E.length!==0&&(Re.push(...E),Oe())}}function Pe(y){for(const f of y)f.type==="childList"&&(f.addedNodes.length>0&&_e(f),f.removedNodes.length>0&&Ze(f))}const Le=new MutationObserver(Pe);Le.observe(C,ne),C.addEventListener("input",m),C.addEventListener("change",k),C.addEventListener("focusout",D),C.addEventListener("submit",i),C.addEventListener("reset",W);const De=K.subscribe(y=>{for(const f of C.elements){if(!ye(f)||!f.name)continue;const E=je(y,pe(f)),x=Array.isArray(E)?E.join(`
`):typeof E=="string"?E:void 0;x!==f.dataset.felteValidationMessage&&(x?(f.dataset.felteValidationMessage=x,f.setAttribute("aria-invalid","true")):(delete f.dataset.felteValidationMessage,f.removeAttribute("aria-invalid")))}});return{destroy(){Le.disconnect(),C.removeEventListener("input",m),C.removeEventListener("change",k),C.removeEventListener("focusout",D),C.removeEventListener("submit",i),C.removeEventListener("reset",W),De(),c().forEach(y=>{var f;return(f=y.destroy)===null||f===void 0?void 0:f.call(y)})}}}return{form:ae}}function Hs(n){const e={aborted:!1,priority:n};return{signal:e,abort(){e.aborted=!0}}}function zs(n,e){if(F(n))return!e||F(e)&&Object.keys(e).length===0?Se(n,null):void 0;if(Array.isArray(n)){if(n.some(F))return;const t=Array.isArray(e)?e:[];return n.map((r,s)=>{const i=t[s];return Array.isArray(i)&&i.length===0?null:r&&i||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?n?e:null:n&&e?[e]:null}function Ws(n,e){if(F(n))return!e||F(e)&&Object.keys(e).length===0?Se(n,null):void 0;if(Array.isArray(n)){if(n.some(F))return;const t=Array.isArray(e)?e:[];return n.map((r,s)=>{const i=t[s];return Array.isArray(i)&&i.length===0?null:i||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?e:e?[e]:null}function qs([n,e]){return Qe(e,n,zs)}function Gs([n,e]){return Qe(e,n,Ws)}function Ks(n){return function(t,r,s){const i=Array.isArray(t)?t:[t],o=new Array(i.length),a=n(s),l=a.set,c=a.subscribe;let d;function u(){d=i.map((_,b)=>_.subscribe(O=>{o[b]=O,l(r(o))}))}function h(){d?.forEach(_=>_())}return a.subscribe=function(b){const O=c(b);return()=>{O()}},[a,u,h]}}function Zs(n,e){var t,r,s,i,o,a,l,c,d;const u=Ks(n),h=e.initialValues=e.initialValues?lt(Tn(Ie(e.initialValues),e.transform)):{},_=ze(at(h),!1),b=n(_),O=n(0),[S,w,K]=u([b,O],([G,H])=>Rt(G,xe=>!!xe)&&H>=1,!1);delete S.set,delete S.update;function X(G){let H;return async function(xe,Ve,Ae,st=!1){if(!Ae||!xe)return;let Ye=Ve&&Object.keys(Ve).length>0?Ve:Se(xe,[]);const it=Hs(st);if((!H?.signal.priority||st)&&(H?.abort(),H=it),H.signal.priority&&!st)return;O.update(wt=>wt+1);const Yn=Vs(xe,Ae);return Yn.forEach(async wt=>{const bs=await wt;it.signal.aborted||(Ye=dt([Ye,bs]),G.set(Ye))}),await Promise.all(Yn),H=void 0,O.update(wt=>wt-1),Ye}}let V=Se(_,[]);const $=n(h),L=Se(_,[]),oe=n(L),M=n(Ie(L)),[z,ae,C]=u([oe,M],dt,Ie(L)),Y=Se(_,[]),ie=n(Y),we=n(Ie(Y)),[Ce,te,le]=u([ie,we],dt,Ie(Y)),[ke,m,k]=u([z,b],qs,Ie(L)),[D,W,ne]=u([Ce,b],Gs,Ie(Y));let re=!1;const[se,Re,Oe]=u(z,([G])=>{var H;return re?!Rt(G,fe=>Array.isArray(fe)?fe.length>=1:!!fe):(re=!0,!e.validate&&!(!((H=e.debounced)===null||H===void 0)&&H.validate))},!e.validate&&!(!((t=e.debounced)===null||t===void 0)&&t.validate));delete se.set,delete se.update;const _e=n(!1),Ze=n(!1),Pe=n(null),Le=X(oe),De=X(ie),y=X(M),f=X(we),E=Yt(y,(o=(s=(r=e.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&s!==void 0?s:(i=e.debounced)===null||i===void 0?void 0:i.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{O.update(G=>G+1)},onEnd:()=>{O.update(G=>G-1)}}),x=Yt(f,(d=(l=(a=e.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=e.debounced)===null||c===void 0?void 0:c.timeout)!==null&&d!==void 0?d:300);async function ce(G,H){var fe;const xe=at(G),Ve=Le(xe,V,H??e.validate,!0);if(H)return Ve;const Ae=y(xe,V,(fe=e.debounced)===null||fe===void 0?void 0:fe.validate,!0);return dt(await Promise.all([Ve,Ae]))}async function de(G,H){var fe;const xe=at(G),Ve=De(xe,V,H??e.warn,!0);if(H)return Ve;const Ae=f(xe,V,(fe=e.debounced)===null||fe===void 0?void 0:fe.warn,!0);return dt(await Promise.all([Ve,Ae]))}let v=L,P=Y;function B(){const G=$.subscribe(Ae=>{var st,Ye;const it=at(Ae);Le(it,V,e.validate),De(it,V,e.warn),E(it,V,(st=e.debounced)===null||st===void 0?void 0:st.validate),x(it,V,(Ye=e.debounced)===null||Ye===void 0?void 0:Ye.warn)}),H=b.subscribe(Ae=>{V=Se(Ae,[])}),fe=z.subscribe(Ae=>{v=Ae}),xe=Ce.subscribe(Ae=>{P=Ae});ae(),Re(),te(),m(),W(),w();function Ve(){G(),k(),C(),le(),ne(),Oe(),K(),H(),fe(),xe()}return Ve}function ue(G){oe.set(G(v)),M.set({})}function he(G){ie.set(G(P)),we.set({})}function be(G){ue(()=>G)}function Ut(G){he(()=>G)}return ke.set=be,ke.update=ue,D.set=Ut,D.update=he,{data:$,errors:ke,warnings:D,touched:b,isValid:se,isSubmitting:_e,isDirty:Ze,isValidating:S,interacted:Pe,validateErrors:ce,validateWarnings:de,cleanup:e.preventStoreStart?()=>{}:B(),start:B}}function Ys(n,e){var t,r;(t=n.extend)!==null&&t!==void 0||(n.extend=[]),(r=n.debounced)!==null&&r!==void 0||(n.debounced={}),n.validate&&!Array.isArray(n.validate)&&(n.validate=[n.validate]),n.debounced.validate&&!Array.isArray(n.debounced.validate)&&(n.debounced.validate=[n.debounced.validate]),n.transform&&!Array.isArray(n.transform)&&(n.transform=[n.transform]),n.warn&&!Array.isArray(n.warn)&&(n.warn=[n.warn]),n.debounced.warn&&!Array.isArray(n.debounced.warn)&&(n.debounced.warn=[n.debounced.warn]);function s(te,{debounced:le,level:ke}={debounced:!1,level:"error"}){var m;const k=ke==="error"?"validate":"warn";(m=n.debounced)!==null&&m!==void 0||(n.debounced={});const D=le?n.debounced:n;D[k]?D[k]=[...D[k],te]:D[k]=[te]}function i(te){n.transform?n.transform=[...n.transform,te]:n.transform=[te]}const o=Array.isArray(n.extend)?n.extend:[n.extend];let a=[];const l=()=>a,c=te=>{a=te},{isSubmitting:d,isValidating:u,data:h,errors:_,warnings:b,touched:O,isValid:S,isDirty:w,cleanup:K,start:X,validateErrors:V,validateWarnings:$,interacted:L}=Zs(e.storeFactory,n),oe=h.update,M=h.set,z=te=>oe(le=>lt(Tn(te(le),n.transform))),ae=te=>M(lt(Tn(te,n.transform)));h.update=z,h.set=ae;const C=Us({extender:o,config:n,addValidator:s,addTransformer:i,validateErrors:V,validateWarnings:$,_getCurrentExtenders:l,stores:{data:h,errors:_,warnings:b,touched:O,isValid:S,isValidating:u,isSubmitting:d,isDirty:w,interacted:L}}),{createSubmitHandler:Y,handleSubmit:ie}=C.public;a=o.map(te=>te({stage:"SETUP",errors:_,warnings:b,touched:O,data:h,isDirty:w,isValid:S,isValidating:u,isSubmitting:d,interacted:L,config:n,addValidator:s,addTransformer:i,setFields:C.public.setFields,reset:C.public.reset,validate:C.public.validate,handleSubmit:ie,createSubmitHandler:Y}));const we=Object.assign({config:n,stores:{data:h,touched:O,errors:_,warnings:b,isSubmitting:d,isValidating:u,isValid:S,isDirty:w,interacted:L},createSubmitHandler:Y,handleSubmit:ie,helpers:Object.assign(Object.assign({},C.public),{addTransformer:i,addValidator:s}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},C.private),{form:Ce}=js(we);return Object.assign({data:h,errors:_,warnings:b,touched:O,isValid:S,isSubmitting:d,isValidating:u,isDirty:w,interacted:L,form:Ce,cleanup:K,startStores:X},C.public)}function Js(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const ut=[];function Nr(n,e=Xe){let t;const r=new Set;function s(a){if(dn(n,a)&&(n=a,t)){const l=!ut.length;for(const c of r)c[1](),ut.push(c,n);if(l){for(let c=0;c<ut.length;c+=2)ut[c][0](ut[c+1]);ut.length=0}}}function i(a){s(a(n))}function o(a,l=Xe){const c=[a,l];return r.add(c),r.size===1&&(t=e(s,i)||Xe),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Xs(n){const e=Ys(n??{},{storeFactory:Nr}),{cleanup:t,startStores:r}=e,s=Js(e,["cleanup","startStores"]);return vs(t),s}const Fr={},$r={};function nr(n){const e=n.config;if(n.stage==="SETUP"){if(!e.__felteReporterSvelteId){const t=Un(21);e.__felteReporterSvelteId=t,Fr[t]=n.errors,$r[t]=n.warnings}return{}}return n.form.hasAttribute("data-felte-reporter-svelte-id")||(n.form.dataset.felteReporterSvelteId=e.__felteReporterSvelteId),{onSubmitError(){const t=n&&n.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');t&&t.focus()}}}function Qs(n){return!n||"preventFocusOnError"in n?e=>nr(e):nr(n)}const ei=n=>({}),rr=n=>({}),ti=n=>({messages:n&4}),sr=n=>({messages:n[2]});function ni(n){let e;const t=n[9].placeholder,r=Dr(t,n,n[8],rr);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&256)&&xr(r,t,s,s[8],e?Rr(t,s[8],i,ei):kr(s[8]),rr)},i(s){e||($e(r,s),e=!0)},o(s){Fe(r,s),e=!1},d(s){r&&r.d(s)}}}function ri(n){let e;const t=n[9].default,r=Dr(t,n,n[8],sr);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&260)&&xr(r,t,s,s[8],e?Rr(t,s[8],i,ti):kr(s[8]),sr)},i(s){e||($e(r,s),e=!0)},o(s){Fe(r,s),e=!1},d(s){r&&r.d(s)}}}function si(n){let e,t,r,s,i,o;const a=[ri,ni],l=[];function c(d,u){return!d[3].placeholder||d[2]?0:1}return r=c(n),s=l[r]=a[r](n),{c(){e=T("div"),t=Q(),s.c(),i=Jn(),this.h()},l(d){e=I(d,"DIV",{style:!0}),j(e).forEach(g),t=ee(d),s.l(d),i=Jn(),this.h()},h(){ys(e,"display","none")},m(d,u){N(d,e,u),n[10](e),N(d,t,u),l[r].m(d,u),N(d,i,u),o=!0},p(d,[u]){let h=r;r=c(d),r===h?l[r].p(d,u):(Cr(),Fe(l[h],1,1,()=>{l[h]=null}),Pr(),s=l[r],s?s.p(d,u):(s=l[r]=a[r](d),s.c()),$e(s,1),s.m(i.parentNode,i))},i(d){o||($e(s),o=!0)},o(d){Fe(s),o=!1},d(d){d&&(g(e),g(t),g(i)),n[10](null),l[r].d(d)}}}function ii(n,e,t){let r,s,i=Xe,o=()=>(i(),i=ws(h,w=>t(7,s=w)),h);n.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e;const c=Es(a);let{level:d="error"}=e,{for:u}=e,h,_,b;function O(){return b.closest("form")}Bn(()=>{t(6,_=pe(b,u));const K=O();o(K?d==="error"?t(0,h=Fr[K.dataset.felteReporterSvelteId]):t(0,h=$r[K.dataset.felteReporterSvelteId]):t(0,h=Nr({})))});function S(w){Kt[w?"unshift":"push"](()=>{b=w,t(1,b)})}return n.$$set=w=>{"level"in w&&t(4,d=w.level),"for"in w&&t(5,u=w.for),"$$scope"in w&&t(8,l=w.$$scope)},n.$$.update=()=>{n.$$.dirty&192&&t(2,r=_&&je(s,_))},[h,b,r,c,d,u,_,s,l,a,S]}class oi extends Fn{constructor(e){super(),$n(this,e,ii,si,dn,{level:4,for:5})}}const Wt=oi;function ai(n){return n.issues.reduce((e,t)=>{if(t.path){const r=t.path.map(({key:s})=>s).join(".");e.nested[r]=[...e.nested[r]||[],t.message]}else e.root=[...e.root||[],t.message];return e},{nested:{}})}var _t=class extends Error{issues;constructor(n){super(n[0].message),this.name="ValiError",this.issues=n}};function Br(n,e,t){let r=n;const s=[];for(const i of e)try{r=i(r,t)}catch(o){if(t.abortEarly||t.abortPipeEarly)throw o;s.push(...o.issues)}if(s.length)throw new _t(s);return r}function li(n,e){return[...n?.path||[],e]}function Ur(n,e){const[t,r=[]]=!n||typeof n=="string"?[n,e]:[void 0,n];return{error:t,pipe:r}}function jr(n,e,t){const{error:r,pipe:s}=Ur(e,t);return{schema:"object",object:n,async:!1,parse(i,o){if(!i||typeof i!="object"||i.toString()!=="[object Object]")throw new _t([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:i,...o}]);const a={},l=[];for(const[c,d]of Object.entries(n))try{const u=i[c];a[c]=d.parse(u,{...o,path:li(o,{schema:"object",input:i,key:c,value:u})})}catch(u){if(o?.abortEarly)throw u;l.push(...u.issues)}if(l.length)throw new _t(l);return Br(a,s,{...o,reason:"object"})}}}function ci(n){return{schema:"optional",wrapped:n,async:!1,parse(e,t){return e===void 0?e:n.parse(e,t)}}}function Me(n,e){const{error:t,pipe:r}=Ur(n,e);return{schema:"string",async:!1,parse(s,i){if(typeof s!="string")throw new _t([{reason:"type",validation:"string",origin:"value",message:t||"Invalid type",input:s,...i}]);return Br(s,r,{...i,reason:"string"})}}}function Sn(n,e,t){return n.parse(e,t)}function bn(){return n=>n.trim()}function ui(n,e){return(t,r)=>{if(t.length!==n)throw new _t([{validation:"length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}function ir(n,e){return(t,r)=>{if(t.length<n)throw new _t([{validation:"min_length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class Jt{constructor(e,t,r,s){if(isNaN(e)||isNaN(t))throw new Error(`Point is invalid: (${e}, ${t})`);this.x=+e,this.y=+t,this.pressure=r||0,this.time=s||Date.now()}distanceTo(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}equals(e){return this.x===e.x&&this.y===e.y&&this.pressure===e.pressure&&this.time===e.time}velocityFrom(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):0}}class jn{constructor(e,t,r,s,i,o){this.startPoint=e,this.control2=t,this.control1=r,this.endPoint=s,this.startWidth=i,this.endWidth=o}static fromPoints(e,t){const r=this.calculateControlPoints(e[0],e[1],e[2]).c2,s=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new jn(e[1],r,s,e[2],t.start,t.end)}static calculateControlPoints(e,t,r){const s=e.x-t.x,i=e.y-t.y,o=t.x-r.x,a=t.y-r.y,l={x:(e.x+t.x)/2,y:(e.y+t.y)/2},c={x:(t.x+r.x)/2,y:(t.y+r.y)/2},d=Math.sqrt(s*s+i*i),u=Math.sqrt(o*o+a*a),h=l.x-c.x,_=l.y-c.y,b=u/(d+u),O={x:c.x+h*b,y:c.y+_*b},S=t.x-O.x,w=t.y-O.y;return{c1:new Jt(l.x+S,l.y+w),c2:new Jt(c.x+S,c.y+w)}}length(){let t=0,r,s;for(let i=0;i<=10;i+=1){const o=i/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const c=a-r,d=l-s;t+=Math.sqrt(c*c+d*d)}r=a,s=l}return t}point(e,t,r,s,i){return t*(1-e)*(1-e)*(1-e)+3*r*(1-e)*(1-e)*e+3*s*(1-e)*e*e+i*e*e*e}}class di{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(e,t,r){this._et.addEventListener(e,t,r)}dispatchEvent(e){return this._et.dispatchEvent(e)}removeEventListener(e,t,r){this._et.removeEventListener(e,t,r)}}function hi(n,e=250){let t=0,r=null,s,i,o;const a=()=>{t=Date.now(),r=null,s=n.apply(i,o),r||(i=null,o=[])};return function(...c){const d=Date.now(),u=e-(d-t);return i=this,o=c,u<=0||u>e?(r&&(clearTimeout(r),r=null),t=d,s=n.apply(i,o),r||(i=null,o=[])):r||(r=window.setTimeout(a,u)),s}}class Xt extends di{constructor(e,t={}){super(),this.canvas=e,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const s=r.changedTouches[0];this._strokeBegin(s)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const s=r.targetTouches[0];this._strokeMoveUpdate(s)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const i=r.changedTouches[0];this._strokeEnd(i)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||0,this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=t.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?hi(Xt.prototype._strokeUpdate,this.throttle):Xt.prototype._strokeUpdate,this._ctx=e.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:e,canvas:t}=this;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(e,t={}){return new Promise((r,s)=>{const i=new Image,o=t.ratio||window.devicePixelRatio||1,a=t.width||this.canvas.width/o,l=t.height||this.canvas.height/o,c=t.xOffset||0,d=t.yOffset||0;this._reset(this._getPointGroupOptions()),i.onload=()=>{this._ctx.drawImage(i,c,d,a,l),r()},i.onerror=u=>{s(u)},i.crossOrigin="anonymous",i.src=e,this._isEmpty=!1})}toDataURL(e="image/png",t){switch(e){case"image/svg+xml":return typeof t!="object"&&(t=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(t))}`;default:return typeof t!="number"&&(t=void 0),this.canvas.toDataURL(e,t)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const e=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!e?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(e,{clear:t=!0}={}){t&&this.clear(),this._fromData(e,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(e)}toData(){return this._data}_getPointGroupOptions(e){return{penColor:e&&"penColor"in e?e.penColor:this.penColor,dotSize:e&&"dotSize"in e?e.dotSize:this.dotSize,minWidth:e&&"minWidth"in e?e.minWidth:this.minWidth,maxWidth:e&&"maxWidth"in e?e.maxWidth:this.maxWidth,velocityFilterWeight:e&&"velocityFilterWeight"in e?e.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:e&&"compositeOperation"in e?e.compositeOperation:this.compositeOperation}}_strokeBegin(e){this.dispatchEvent(new CustomEvent("beginStroke",{detail:e}));const t=this._getPointGroupOptions(),r=Object.assign(Object.assign({},t),{points:[]});this._data.push(r),this._reset(t),this._strokeUpdate(e)}_strokeUpdate(e){if(this._data.length===0){this._strokeBegin(e);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:e}));const t=e.clientX,r=e.clientY,s=e.pressure!==void 0?e.pressure:e.force!==void 0?e.force:0,i=this._createPoint(t,r,s),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?i.distanceTo(l)<=this.minDistance:!1,d=this._getPointGroupOptions(o);if(!l||!(l&&c)){const u=this._addPoint(i,d);l?u&&this._drawCurve(u,d):this._drawDot(i,d),a.push({time:i.time,x:i.x,y:i.y,pressure:i.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:e}))}_strokeEnd(e){this._strokeUpdate(e),this.dispatchEvent(new CustomEvent("endStroke",{detail:e}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(e){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(e.minWidth+e.maxWidth)/2,this._ctx.fillStyle=e.penColor,this._ctx.globalCompositeOperation=e.compositeOperation}_createPoint(e,t,r){const s=this.canvas.getBoundingClientRect();return new Jt(e-s.left,t-s.top,r,new Date().getTime())}_addPoint(e,t){const{_lastPoints:r}=this;if(r.push(e),r.length>2){r.length===3&&r.unshift(r[0]);const s=this._calculateCurveWidths(r[1],r[2],t),i=jn.fromPoints(r,s);return r.shift(),i}return null}_calculateCurveWidths(e,t,r){const s=r.velocityFilterWeight*t.velocityFrom(e)+(1-r.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(s,r),o={end:i,start:this._lastWidth};return this._lastVelocity=s,this._lastWidth=i,o}_strokeWidth(e,t){return Math.max(t.maxWidth/(e+1),t.minWidth)}_drawCurveSegment(e,t,r){const s=this._ctx;s.moveTo(e,t),s.arc(e,t,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(e,t){const r=this._ctx,s=e.endWidth-e.startWidth,i=Math.ceil(e.length())*2;r.beginPath(),r.fillStyle=t.penColor;for(let o=0;o<i;o+=1){const a=o/i,l=a*a,c=l*a,d=1-a,u=d*d,h=u*d;let _=h*e.startPoint.x;_+=3*u*a*e.control1.x,_+=3*d*l*e.control2.x,_+=c*e.endPoint.x;let b=h*e.startPoint.y;b+=3*u*a*e.control1.y,b+=3*d*l*e.control2.y,b+=c*e.endPoint.y;const O=Math.min(e.startWidth+c*s,t.maxWidth);this._drawCurveSegment(_,b,O)}r.closePath(),r.fill()}_drawDot(e,t){const r=this._ctx,s=t.dotSize>0?t.dotSize:(t.minWidth+t.maxWidth)/2;r.beginPath(),this._drawCurveSegment(e.x,e.y,s),r.closePath(),r.fillStyle=t.penColor,r.fill()}_fromData(e,t,r){for(const s of e){const{points:i}=s,o=this._getPointGroupOptions(s);if(i.length>1)for(let a=0;a<i.length;a+=1){const l=i[a],c=new Jt(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const d=this._addPoint(c,o);d&&t(d,o)}else this._reset(o),r(i[0],o)}}toSVG({includeBackgroundColor:e=!1}={}){const t=this._data,r=Math.max(window.devicePixelRatio||1,1),s=0,i=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${s} ${i} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),e&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(t,(c,{penColor:d})=>{const u=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const h=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;u.setAttribute("d",h),u.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),u.setAttribute("stroke",d),u.setAttribute("fill","none"),u.setAttribute("stroke-linecap","round"),l.appendChild(u)}},(c,{penColor:d,dotSize:u,minWidth:h,maxWidth:_})=>{const b=document.createElement("circle"),O=u>0?u:(h+_)/2;b.setAttribute("r",O.toString()),b.setAttribute("cx",c.x.toString()),b.setAttribute("cy",c.y.toString()),b.setAttribute("fill",d),l.appendChild(b)}),l.outerHTML}}const or=jr({personalid:Me([bn(),ui(13)]),prefix:ci(Me()),firstname:Me([bn(),ir(1)]),lastname:Me([bn(),ir(1)]),signature:Me("กรุณาลงชื่อ")});/**
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
 */const Hr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fi=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=i>>2,u=(i&3)<<4|a>>4;let h=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(h=64)),r.push(t[d],t[u],t[h],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Hr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fi(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||u==null)throw new pi;const h=i<<2|a>>4;if(r.push(h),c!==64){const _=a<<4&240|c>>2;if(r.push(_),u!==64){const b=c<<6&192|u;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mi=function(n){const e=Hr(n);return zr.encodeByteArray(e,!0)},Qt=function(n){return mi(n).replace(/\./g,"")},gi=function(n){try{return zr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _i(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bi=()=>_i().__FIREBASE_DEFAULTS__,vi=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gi(n[1]);return e&&JSON.parse(e)},Wr=()=>{try{return bi()||vi()||yi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ei=n=>{var e,t;return(t=(e=Wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wi=n=>{const e=Ei(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},qr=()=>{var n;return(n=Wr())===null||n===void 0?void 0:n.config};/**
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
 */class Ai{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ti(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Qt(JSON.stringify(t)),Qt(JSON.stringify(o)),a].join(".")}function Ii(){try{return typeof indexedDB=="object"}catch{return!1}}function Si(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ci="FirebaseError";class yt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ci,Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pi(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new yt(s,a,r)}}function Pi(n,e){return n.replace(Di,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Di=/\{\$([^}]+)}/g;function Cn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(ar(i)&&ar(o)){if(!Cn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ar(n){return n!==null&&typeof n=="object"}/**
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
 */const ot="[DEFAULT]";/**
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
 */class xi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ai;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ri(e))try{this.getOrInitializeService({instanceIdentifier:ot})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ot){return this.instances.has(e)}getOptions(e=ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ki(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ot){return this.component?this.component.multipleInstances?e:ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ki(n){return n===ot?void 0:n}function Ri(n){return n.instantiationMode==="EAGER"}/**
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
 */class Oi{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const Li={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Vi=Z.INFO,Mi={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Ni=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Mi[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kr{constructor(e){this.name=e,this._logLevel=Vi,this._logHandler=Ni,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Li[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const Fi=(n,e)=>e.some(t=>n instanceof t);let lr,cr;function $i(){return lr||(lr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bi(){return cr||(cr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zr=new WeakMap,Pn=new WeakMap,Yr=new WeakMap,vn=new WeakMap,Hn=new WeakMap;function Ui(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(et(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Zr.set(t,n)}).catch(()=>{}),Hn.set(e,n),e}function ji(n){if(Pn.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Pn.set(n,e)}let Dn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Hi(n){Dn=n(Dn)}function zi(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yn(this),e,...t);return Yr.set(r,e.sort?e.sort():[e]),et(r)}:Bi().includes(n)?function(...e){return n.apply(yn(this),e),et(Zr.get(this))}:function(...e){return et(n.apply(yn(this),e))}}function Wi(n){return typeof n=="function"?zi(n):(n instanceof IDBTransaction&&ji(n),Fi(n,$i())?new Proxy(n,Dn):n)}function et(n){if(n instanceof IDBRequest)return Ui(n);if(vn.has(n))return vn.get(n);const e=Wi(n);return e!==n&&(vn.set(n,e),Hn.set(e,n)),e}const yn=n=>Hn.get(n);function qi(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=et(o);return r&&o.addEventListener("upgradeneeded",l=>{r(et(o.result),l.oldVersion,l.newVersion,et(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Gi=["get","getKey","getAll","getAllKeys","count"],Ki=["put","add","delete","clear"],En=new Map;function ur(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(En.get(e))return En.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Ki.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Gi.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return En.set(e,i),i}Hi(n=>({...n,get:(e,t,r)=>ur(e,t)||n.get(e,t,r),has:(e,t)=>!!ur(e,t)||n.has(e,t)}));/**
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
 */class Zi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yi(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Yi(n){const e=n.getComponent();return e?.type==="VERSION"}const xn="@firebase/app",dr="0.9.15";/**
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
 */const ct=new Kr("@firebase/app"),Ji="@firebase/app-compat",Xi="@firebase/analytics-compat",Qi="@firebase/analytics",eo="@firebase/app-check-compat",to="@firebase/app-check",no="@firebase/auth",ro="@firebase/auth-compat",so="@firebase/database",io="@firebase/database-compat",oo="@firebase/functions",ao="@firebase/functions-compat",lo="@firebase/installations",co="@firebase/installations-compat",uo="@firebase/messaging",ho="@firebase/messaging-compat",fo="@firebase/performance",po="@firebase/performance-compat",mo="@firebase/remote-config",go="@firebase/remote-config-compat",_o="@firebase/storage",bo="@firebase/storage-compat",vo="@firebase/firestore",yo="@firebase/firestore-compat",Eo="firebase",wo="10.1.0";/**
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
 */const kn="[DEFAULT]",Ao={[xn]:"fire-core",[Ji]:"fire-core-compat",[Qi]:"fire-analytics",[Xi]:"fire-analytics-compat",[to]:"fire-app-check",[eo]:"fire-app-check-compat",[no]:"fire-auth",[ro]:"fire-auth-compat",[so]:"fire-rtdb",[io]:"fire-rtdb-compat",[oo]:"fire-fn",[ao]:"fire-fn-compat",[lo]:"fire-iid",[co]:"fire-iid-compat",[uo]:"fire-fcm",[ho]:"fire-fcm-compat",[fo]:"fire-perf",[po]:"fire-perf-compat",[mo]:"fire-rc",[go]:"fire-rc-compat",[_o]:"fire-gcs",[bo]:"fire-gcs-compat",[vo]:"fire-fst",[yo]:"fire-fst-compat","fire-js":"fire-js",[Eo]:"fire-js-all"};/**
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
 */const en=new Map,Rn=new Map;function To(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tn(n){const e=n.name;if(Rn.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Rn.set(e,n);for(const t of en.values())To(t,n);return!0}function Io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const So={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},tt=new Gr("app","Firebase",So);/**
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
 */class Co{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Po=wo;function Jr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw tt.create("bad-app-name",{appName:String(s)});if(t||(t=qr()),!t)throw tt.create("no-options");const i=en.get(s);if(i){if(Cn(t,i.options)&&Cn(r,i.config))return i;throw tt.create("duplicate-app",{appName:s})}const o=new Oi(s);for(const l of Rn.values())o.addComponent(l);const a=new Co(t,r,o);return en.set(s,a),a}function Do(n=kn){const e=en.get(n);if(!e&&n===kn&&qr())return Jr();if(!e)throw tt.create("no-app",{appName:n});return e}function gt(n,e,t){var r;let s=(r=Ao[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}tn(new Lt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xo="firebase-heartbeat-database",ko=1,Vt="firebase-heartbeat-store";let wn=null;function Xr(){return wn||(wn=qi(xo,ko,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Vt)}}}).catch(n=>{throw tt.create("idb-open",{originalErrorMessage:n.message})})),wn}async function Ro(n){try{return await(await Xr()).transaction(Vt).objectStore(Vt).get(Qr(n))}catch(e){if(e instanceof yt)ct.warn(e.message);else{const t=tt.create("idb-get",{originalErrorMessage:e?.message});ct.warn(t.message)}}}async function hr(n,e){try{const r=(await Xr()).transaction(Vt,"readwrite");await r.objectStore(Vt).put(e,Qr(n)),await r.done}catch(t){if(t instanceof yt)ct.warn(t.message);else{const r=tt.create("idb-set",{originalErrorMessage:t?.message});ct.warn(r.message)}}}function Qr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Oo=1024,Lo=30*24*60*60*1e3;class Vo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new No(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Lo}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fr(),{heartbeatsToSend:t,unsentEntries:r}=Mo(this._heartbeatsCache.heartbeats),s=Qt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function fr(){return new Date().toISOString().substring(0,10)}function Mo(n,e=Oo){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pr(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class No{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ii()?Si().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ro(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pr(n){return Qt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Fo(n){tn(new Lt("platform-logger",e=>new Zi(e),"PRIVATE")),tn(new Lt("heartbeat",e=>new Vo(e),"PRIVATE")),gt(xn,dr,n),gt(xn,dr,"esm2017"),gt("fire-js","")}Fo("");var $o="firebase",Bo="10.1.0";/**
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
 */gt($o,Bo,"app");/**
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
 */class Te{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Te.UNAUTHENTICATED=new Te(null),Te.GOOGLE_CREDENTIALS=new Te("google-credentials-uid"),Te.FIRST_PARTY=new Te("first-party-uid"),Te.MOCK_USER=new Te("mock-user");/**
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
 */const bt=new Kr("@firebase/firestore");function nn(n,...e){if(bt.logLevel<=Z.DEBUG){const t=e.map(zn);bt.debug(`Firestore (${Et}): ${n}`,...t)}}function es(n,...e){if(bt.logLevel<=Z.ERROR){const t=e.map(zn);bt.error(`Firestore (${Et}): ${n}`,...t)}}function ts(n,...e){if(bt.logLevel<=Z.WARN){const t=e.map(zn);bt.warn(`Firestore (${Et}): ${n}`,...t)}}function zn(n){if(typeof n=="string")return n;try{/**
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
 */function ge(n="Unexpected state"){const e=`FIRESTORE (${Et}) INTERNAL ASSERTION FAILED: `+n;throw es(e),new Error(e)}function rn(n,e){n||ge()}function Uo(n,e){return n}/**
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
 */const mr="ok",jo="cancelled",Pt="unknown",q="invalid-argument",Ho="deadline-exceeded",zo="not-found",Wo="permission-denied",On="unauthenticated",qo="resource-exhausted",vt="failed-precondition",Go="aborted",Ko="out-of-range",Zo="unimplemented",Yo="internal",Jo="unavailable";class R extends yt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ns{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Te.UNAUTHENTICATED))}shutdown(){}}class Qo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ea{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(rn(typeof e.accessToken=="string"),new ns(e.accessToken,new Te(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ta{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=Te.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class na{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new ta(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(Te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ra{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sa{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(rn(typeof e.token=="string"),new ra(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class ia{constructor(e,t,r,s,i,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}class Mt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ge(),r===void 0?r=e.length-t:r>e.length-t&&ge(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ee extends Mt{construct(e,t,r){return new Ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(q,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ee(t)}static emptyPath(){return new Ee([])}}const oa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends Mt{construct(e,t,r){return new Ne(e,t,r)}static isValidIdentifier(e){return oa.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new R(q,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new R(q,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new R(q,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new R(q,"Unterminated ` in path: "+e);return new Ne(t)}static emptyPath(){return new Ne([])}}/**
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
 */class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(Ee.fromString(e))}static fromName(e){return new Ue(Ee.fromString(e).popFirst(5))}static empty(){return new Ue(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new Ee(e.slice()))}}/**
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
 */function rs(n,e,t){if(!t)throw new R(q,`Function ${n}() cannot be called with an empty ${e}.`)}function gr(n){if(!Ue.isDocumentKey(n))throw new R(q,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function _r(n){if(Ue.isDocumentKey(n))throw new R(q,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ge()}function ss(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new R(q,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wn(n);throw new R(q,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function is(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let qt=null;function aa(){return qt===null?qt=function(){return 268435456+Math.round(2147483648*Math.random())}():qt++,"0x"+qt.toString(16)}function on(n){return n===0&&1/n==-1/0}/**
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
 */const la={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var br,U;function vr(n){if(n===void 0)return es("RPC_ERROR","HTTP error has no status"),Pt;switch(n){case 200:return mr;case 400:return vt;case 401:return On;case 403:return Wo;case 404:return zo;case 409:return Go;case 416:return Ko;case 429:return qo;case 499:return jo;case 500:return Pt;case 501:return Zo;case 503:return Jo;case 504:return Ho;default:return n>=200&&n<300?mr:n>=400&&n<500?vt:n>=500&&n<600?Yo:Pt}}/**
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
 */(U=br||(br={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";class ca extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get P(){return!1}R(t,r,s,i,o){const a=aa(),l=this.I(t,r);nn("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(c,i,o),this.p(t,l,c,s).then(d=>(nn("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw ts("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",l,"request:",s),d})}g(t,r,s,i,o,a){return this.R(t,r,s,i,o)}V(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Et}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}I(t,r){const s=la[t];return`${this.m}/v1/${r}:${s}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new R(vr(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l?.error)===null||i===void 0?void 0:i.message;throw new R(vr(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function ua(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class da{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ua(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Nt(n,e){return n<e?-1:n>e?1:0}function os(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */function yr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class ha extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ha("Invalid base64 string: "+i):i}}(e);return new Ke(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Nt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const fa=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ln(n){if(rn(!!n),typeof n=="string"){let e=0;const t=fa.exec(n);if(rn(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(n.seconds),nanos:Be(n.nanos)}}function Be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Er(n){return typeof n=="string"?Ke.fromBase64String(n):Ke.fromUint8Array(n)}/**
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
 */class We{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(q,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(q,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(q,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(q,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new We(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Nt(this.nanoseconds,e.nanoseconds):Nt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function pa(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function wr(n){const e=Ln(n.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}function Ar(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pa(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:ge()}function Vn(n,e){if(n===e)return!0;const t=Ar(n);if(t!==Ar(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return wr(n).isEqual(wr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ln(s.timestampValue),a=Ln(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Er(s.bytesValue).isEqual(Er(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?on(o)===on(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return os(n.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(yr(o)!==yr(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Vn(o[l],a[l])))return!1;return!0}(n,e);default:return ge()}}function An(n){return!!n&&"mapValue"in n}function Dt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Dt(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Dt(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class an{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new an(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new an(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gt(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gt(this.root,e,this.comparator,!0)}}class Gt{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ln{constructor(e){this.comparator=e,this.data=new an(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Tr(this.data.getIterator())}getIteratorFrom(e){return new Tr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ln)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ln(this.comparator);return t.data=e,t}}class Tr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new ln(Ne.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!An(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dt(t)}setAll(e){let t=Ne.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Dt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());An(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];An(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){qn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new cn(Dt(this.value))}}/**
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
 */class ma{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.startAt,this.endAt}}/**
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
 */function ga(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!on(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:on(s)?"-0":s}}(n,e)}/**
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
 */class pn{constructor(){this._=void 0}}class _a extends pn{}class ba extends pn{constructor(e){super(),this.elements=e}}class va extends pn{constructor(e){super(),this.elements=e}}class ya extends pn{constructor(e,t){super(),this.serializer=e,this.$=t}}class xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class mn{}class as extends mn{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ls extends mn{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class Ea extends mn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wa extends mn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Aa{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ta(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ia(n,e){return Mn(n,e.toTimestamp())}function cs(n,e){return function(r){return new Ee(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Nn(n,e){return cs(n.databaseId,e.path)}function Sa(n){return new Ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ir(n,e,t){return{name:Nn(n,e),fields:t.value.mapValue.fields}}function Ca(n,e){let t;if(e instanceof as)t={update:Ir(n,e.key,e.value)};else if(e instanceof Ea)t={delete:Nn(n,e.key)};else if(e instanceof ls)t={update:Ir(n,e.key,e.data),updateMask:Pa(e.fieldMask)};else{if(!(e instanceof wa))return ge();t={verify:Nn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof _a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ba)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof va)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),increment:a.$};throw ge()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ia(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(n,e.precondition)),t}function Pa(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}/**
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
 */function Gn(n){return new Aa(n,!0)}/**
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
 */class Da extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.Z=!1}X(){if(this.Z)throw new R(vt,"The client has already been terminated.")}R(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.R(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===On&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new R(Pt,s.toString())})}g(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.g(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===On&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new R(Pt,i.toString())})}terminate(){this.Z=!0}}async function xa(n,e){const t=Uo(n),r=Sa(t.serializer)+"/documents",s={writes:e.map(i=>Ca(t.serializer,i))};await t.R("Commit",r,s)}/**
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
 */const kt=new Map;function ka(n){if(n._terminated)throw new R(vt,"The client has already been terminated.");if(!kt.has(n)){nn("ComponentProvider","Initializing Datastore");const e=function(i){return new ca(i,fetch.bind(null))}(function(i,o,a,l){return new ia(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,is(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=Gn(n._databaseId),r=function(i,o,a,l){return new Da(i,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);kt.set(n,r)}return kt.get(n)}class Sr{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new R(q,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(q,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new R(q,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=is((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new R(q,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new R(q,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new R(q,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gn{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(vt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(vt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xo;switch(r.type){case"firstParty":return new na(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new R(q,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=kt.get(t);r&&(nn("ComponentProvider","Removing Datastore"),kt.delete(t),r.terminate())}(this),Promise.resolve()}}function Ra(n,e){const t=typeof n=="object"?n:Do(),r=typeof n=="string"?n:e||"(default)",s=Io(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=wi("firestore");i&&Oa(s,...i)}return s}function Oa(n,e,t,r={}){var s;const i=(n=ss(n,gn))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Te.MOCK_USER;else{a=Ti(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new R(q,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Te(c)}n._authCredentials=new Qo(new ns(a,l))}}/**
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
 */class Kn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ge(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Ge extends Kn{constructor(e,t,r){super(e,t,function(i){return new ma(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new Ue(e))}withConverter(e){return new Ge(this.firestore,e,this._path)}}function La(n,e,...t){if(n=Ot(n),rs("collection","path",e),n instanceof gn){const r=Ee.fromString(e,...t);return _r(r),new Ge(n,null,r)}{if(!(n instanceof qe||n instanceof Ge))throw new R(q,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(e,...t));return _r(r),new Ge(n.firestore,null,r)}}function Va(n,e,...t){if(n=Ot(n),arguments.length===1&&(e=da.C()),rs("doc","path",e),n instanceof gn){const r=Ee.fromString(e,...t);return gr(r),new qe(n,null,new Ue(r))}{if(!(n instanceof qe||n instanceof Ge))throw new R(q,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ee.fromString(e,...t));return gr(r),new qe(n.firestore,n instanceof Ge?n.converter:null,new Ue(r))}}/**
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
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(Ke.fromBase64String(e))}catch(t){throw new R(q,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $t(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class us{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new R(q,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hs{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(q,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(q,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Nt(this._lat,e._lat)||Nt(this._long,e._long)}}/**
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
 */const Ma=/^__.*__$/;class Na{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,t,this.fieldTransforms):new as(e,this.data,t,this.fieldTransforms)}}function fs(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Zn{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(e){return new Zn(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.ot(e),s}ut(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.et(),s}_t(e){return this.nt({path:void 0,st:!0})}lt(e){return un(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.ht)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(fs(this.rt)&&Ma.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class Fa{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gn(e)}dt(e,t,r,s=!1){return new Zn({rt:e,methodName:t,ht:r,path:Ne.emptyPath(),st:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $a(n){const e=n._freezeSettings(),t=Gn(n._databaseId);return new Fa(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Ba(n,e,t,r,s,i={}){const o=n.dt(i.merge||i.mergeFields?2:0,e,t,s);_s("Data must be an object, but it was:",o,r);const a=ms(r,o);let l,c;if(i.merge)l=new Ft(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const u of i.mergeFields){const h=Ua(e,u,t);if(!o.contains(h))throw new R(q,`Field '${h}' is specified in your field mask but missing from your input data.`);za(d,h)||d.push(h)}l=new Ft(d),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new Na(new cn(a),l,c)}function ps(n,e){if(gs(n=Ot(n)))return _s("Unsupported field value:",e,n),ms(n,e);if(n instanceof ds)return function(r,s){if(!fs(s.rt))throw s.lt(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.lt(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.rt!==4)throw e.lt("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ps(a,s._t(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ga(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Mn(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mn(s.serializer,i)}}if(r instanceof hs)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:Ta(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.lt(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cs(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.lt(`Unsupported field value: ${Wn(r)}`)}(n,e)}function ms(n,e){const t={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qn(n,(r,s)=>{const i=ps(s,e.it(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function gs(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof We||n instanceof hs||n instanceof $t||n instanceof qe||n instanceof ds)}function _s(n,e,t){if(!gs(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Wn(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function Ua(n,e,t){if((e=Ot(e))instanceof us)return e._internalPath;if(typeof e=="string")return Ha(n,e);throw un("Field path arguments must be of type string or ",n,!1,void 0,t)}const ja=new RegExp("[~\\*/\\[\\]]");function Ha(n,e,t){if(e.search(ja)>=0)throw un(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new us(...e.split("."))._internalPath}catch{throw un(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function un(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new R(q,a+n+l)}function za(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */function Wa(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function qa(n,e){const t=Va(n=ss(n,Ge)),r=Wa(n.converter,e),s=Ba($a(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return xa(ka(n.firestore),[s.toMutation(t._key,xt.exists(!1))]).then(()=>t)}(function(){(function(t){Et=t})(`${Po}_lite`),tn(new Lt("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new gn(new ea(e.getProvider("auth-internal")),new sa(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new R(q,'"projectId" not provided in firebase.initializeApp.');return new sn(a.options.projectId,l)}(s,t),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),gt("firestore-lite","4.1.0",""),gt("firestore-lite","4.1.0","esm2017")})();const Ga=jr({apiKey:Me(),authDomain:Me(),projectId:Me(),storageBucket:Me(),messagingSenderId:Me(),appId:Me()}),Ka="documents",Za=Sn(Ga,JSON.parse('{"apiKey":"AIzaSyBYGz_WUwzIpZYGf4SN4jo5xqp3MNEC8FA","authDomain":"conforall.firebaseapp.com","projectId":"conforall","storageBucket":"conforall.appspot.com","messagingSenderId":"289133639309","appId":"1:289133639309:web:b6ddf29928a923028214c4"}')),Ya=Jr(Za),Ja=Ra(Ya),Xa=n=>qa(La(Ja,Ka),n);function Qa(n){let e,t='<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>',r,s,i,o,a,l,c,d;return{c(){e=T("label"),e.innerHTML=t,r=Q(),s=T("input"),o=Q(),a=T("div"),l=T("span"),c=nt("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(u){e=I(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),me(e)!=="svelte-5u2x8b"&&(e.innerHTML=t),r=ee(u),s=I(u,"INPUT",{type:!0,name:!0,class:!0}),o=ee(u),a=I(u,"DIV",{class:!0});var h=j(a);l=I(h,"SPAN",{class:!0});var _=j(l);c=rt(_,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),_.forEach(g),h.forEach(g),this.h()},h(){p(e,"class","label"),p(e,"for","personalid"),p(s,"type","string"),p(s,"name","personalid"),p(s,"class",i="input rounded-sm bg-base-200 "+(n[18]?"input-error":"")),s.disabled=n[4],p(l,"class",d="label-text-alt "+(n[18]?"text-error":"")),p(a,"class","label")},m(u,h){N(u,e,h),N(u,r,h),N(u,s,h),N(u,o,h),N(u,a,h),A(a,l),A(l,c)},p(u,h){h&262144&&i!==(i="input rounded-sm bg-base-200 "+(u[18]?"input-error":""))&&p(s,"class",i),h&16&&(s.disabled=u[4]),h&262144&&d!==(d="label-text-alt "+(u[18]?"text-error":""))&&p(l,"class",d)},d(u){u&&(g(e),g(r),g(s),g(o),g(a))}}}function el(n){let e,t='<span class="label-text heading-03">ชื่อ*</span>',r,s,i,o,a,l,c,d;return{c(){e=T("label"),e.innerHTML=t,r=Q(),s=T("input"),o=Q(),a=T("div"),l=T("span"),c=nt("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(u){e=I(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),me(e)!=="svelte-i2bah3"&&(e.innerHTML=t),r=ee(u),s=I(u,"INPUT",{type:!0,name:!0,class:!0}),o=ee(u),a=I(u,"DIV",{class:!0});var h=j(a);l=I(h,"SPAN",{class:!0});var _=j(l);c=rt(_,"ระบุชื่อจริงเป็นภาษาไทย"),_.forEach(g),h.forEach(g),this.h()},h(){p(e,"class","label"),p(e,"for","firstname"),p(s,"type","text"),p(s,"name","firstname"),p(s,"class",i="input rounded-sm bg-base-200 w-full "+(n[18]?"input-error":"")),s.disabled=n[4],p(l,"class",d="label-text-alt "+(n[18]?"text-error":"")),p(a,"class","label")},m(u,h){N(u,e,h),N(u,r,h),N(u,s,h),N(u,o,h),N(u,a,h),A(a,l),A(l,c)},p(u,h){h&262144&&i!==(i="input rounded-sm bg-base-200 w-full "+(u[18]?"input-error":""))&&p(s,"class",i),h&16&&(s.disabled=u[4]),h&262144&&d!==(d="label-text-alt "+(u[18]?"text-error":""))&&p(l,"class",d)},d(u){u&&(g(e),g(r),g(s),g(o),g(a))}}}function tl(n){let e,t='<span class="label-text heading-03">นามสกุล*</span>',r,s,i,o,a,l,c,d;return{c(){e=T("label"),e.innerHTML=t,r=Q(),s=T("input"),o=Q(),a=T("div"),l=T("span"),c=nt("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(u){e=I(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),me(e)!=="svelte-1lqzuwh"&&(e.innerHTML=t),r=ee(u),s=I(u,"INPUT",{type:!0,name:!0,class:!0}),o=ee(u),a=I(u,"DIV",{class:!0});var h=j(a);l=I(h,"SPAN",{class:!0});var _=j(l);c=rt(_,"ระบุนามสกุลเป็นภาษาไทย"),_.forEach(g),h.forEach(g),this.h()},h(){p(e,"class","label"),p(e,"for","lastname"),p(s,"type","text"),p(s,"name","lastname"),p(s,"class",i="input rounded-sm bg-base-200 "+(n[18]?"input-error":"")),s.disabled=n[4],p(l,"class",d="label-text-alt "+(n[18]?"text-error":"")),p(a,"class","label")},m(u,h){N(u,e,h),N(u,r,h),N(u,s,h),N(u,o,h),N(u,a,h),A(a,l),A(l,c)},p(u,h){h&262144&&i!==(i="input rounded-sm bg-base-200 "+(u[18]?"input-error":""))&&p(s,"class",i),h&16&&(s.disabled=u[4]),h&262144&&d!==(d="label-text-alt "+(u[18]?"text-error":""))&&p(l,"class",d)},d(u){u&&(g(e),g(r),g(s),g(o),g(a))}}}function nl(n){let e,t,r=`คลิกเพื่อกรอกลายเซ็น
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z" fill="black"></path><path d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z" fill="black"></path></svg>`,s,i;return{c(){e=T("div"),t=T("button"),t.innerHTML=r,this.h()},l(o){e=I(o,"DIV",{class:!0});var a=j(e);t=I(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),me(t)!=="svelte-u454pn"&&(t.innerHTML=r),a.forEach(g),this.h()},h(){p(t,"type","button"),p(t,"class","btn bg-base-100 heading-03 shadow-xl"),p(e,"class","absolute w-full h-full flex justify-center items-center top-0 left-0")},m(o,a){N(o,e,a),A(e,t),s||(i=Zt(t,"click",n[10]),s=!0)},p:Xe,d(o){o&&g(e),s=!1,i()}}}function rl(n){let e,t=`ล้าง
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z" fill="#8054FF"></path></svg>`,r,s;return{c(){e=T("button"),e.innerHTML=t,this.h()},l(i){e=I(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),me(e)!=="svelte-1auzjm1"&&(e.innerHTML=t),this.h()},h(){p(e,"type","button"),p(e,"class","btn btn-outline btn-accent absolute right-[10px] bottom-4")},m(i,o){N(i,e,o),r||(s=Zt(e,"click",n[8]),r=!0)},p:Xe,d(i){i&&g(e),r=!1,s()}}}function sl(n){let e,t,r=(n[18]||"")+"",s;return{c(){e=T("div"),t=T("span"),s=nt(r),this.h()},l(i){e=I(i,"DIV",{class:!0});var o=j(e);t=I(o,"SPAN",{class:!0});var a=j(t);s=rt(a,r),a.forEach(g),o.forEach(g),this.h()},h(){p(t,"class","label-text-alt text-error"),p(e,"class","label")},m(i,o){N(i,e,o),A(e,t),A(t,s)},p(i,o){o&262144&&r!==(r=(i[18]||"")+"")&&Is(s,r)},d(i){i&&g(e)}}}function il(n){let e,t;return{c(){e=nt(`กำลังลงชื่อ...
				`),t=T("span"),this.h()},l(r){e=rt(r,`กำลังลงชื่อ...
				`),t=I(r,"SPAN",{class:!0}),j(t).forEach(g),this.h()},h(){p(t,"class","loading loading-spinner")},m(r,s){N(r,e,s),N(r,t,s)},d(r){r&&(g(e),g(t))}}}function ol(n){let e,t,r,s,i;return{c(){e=nt(`ลงชื่อเลย
				`),t=ht("svg"),r=ht("path"),s=ht("path"),i=ht("path"),this.h()},l(o){e=rt(o,`ลงชื่อเลย
				`),t=ft(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=j(t);r=ft(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),j(r).forEach(g),s=ft(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),j(s).forEach(g),i=ft(a,"path",{d:!0,fill:!0}),j(i).forEach(g),a.forEach(g),this.h()},h(){p(r,"fill-rule","evenodd"),p(r,"clip-rule","evenodd"),p(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),p(r,"fill","white"),p(s,"fill-rule","evenodd"),p(s,"clip-rule","evenodd"),p(s,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),p(s,"fill","white"),p(i,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),p(i,"fill","white"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"width","16"),p(t,"height","16"),p(t,"viewBox","0 0 16 16"),p(t,"fill","none")},m(o,a){N(o,e,a),N(o,t,a),A(t,r),A(t,s),A(t,i)},d(o){o&&(g(e),g(t))}}}function al(n){let e,t,r,s,i,o,a,l='<span class="label-text heading-03">คำนำหน้า</span>',c,d,u,h,_="นาย",b,O="นาง",S,w="นางสาว",K,X,V,$,L,oe,M,z,ae='<span class="label-text heading-03">ลงลายมือชื่อ*</span>',C,Y,ie,we,Ce,te,le,ke,m,k='<label class="label cursor-pointer space-x-2 justify-normal"><input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อ</span></label>',D,W,ne,re,se,Re='<form method="dialog" class="modal-box"><p class="py-4">ลงชื่อสำเร็จ</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',Oe,_e,Ze='<form method="dialog" class="modal-box"><p class="py-4">เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',Pe,Le,De;r=new Wt({props:{for:"personalid",$$slots:{default:[Qa,({messages:v})=>({18:v}),({messages:v})=>v?262144:0]},$$scope:{ctx:n}}}),V=new Wt({props:{for:"firstname",$$slots:{default:[el,({messages:v})=>({18:v}),({messages:v})=>v?262144:0]},$$scope:{ctx:n}}}),L=new Wt({props:{for:"lastname",$$slots:{default:[tl,({messages:v})=>({18:v}),({messages:v})=>v?262144:0]},$$scope:{ctx:n}}});function y(v,P){return v[3]?rl:nl}let f=y(n),E=f(n);le=new Wt({props:{for:"signature",$$slots:{default:[sl,({messages:v})=>({18:v}),({messages:v})=>v?262144:0]},$$scope:{ctx:n}}});function x(v,P){return v[4]?il:ol}let ce=x(n),de=ce(n);return{c(){e=T("form"),t=T("div"),At(r.$$.fragment),s=Q(),i=T("div"),o=T("div"),a=T("label"),a.innerHTML=l,c=Q(),d=T("select"),u=T("option"),h=T("option"),h.textContent=_,b=T("option"),b.textContent=O,S=T("option"),S.textContent=w,K=Q(),X=T("div"),At(V.$$.fragment),$=Q(),At(L.$$.fragment),oe=Q(),M=T("div"),z=T("div"),z.innerHTML=ae,C=Q(),Y=T("div"),ie=T("canvas"),Ce=Q(),E.c(),te=Q(),At(le.$$.fragment),ke=Q(),m=T("div"),m.innerHTML=k,D=Q(),W=T("button"),de.c(),re=Q(),se=T("dialog"),se.innerHTML=Re,Oe=Q(),_e=T("dialog"),_e.innerHTML=Ze,this.h()},l(v){e=I(v,"FORM",{});var P=j(e);t=I(P,"DIV",{class:!0});var B=j(t);Tt(r.$$.fragment,B),s=ee(B),i=I(B,"DIV",{class:!0});var ue=j(i);o=I(ue,"DIV",{class:!0});var he=j(o);a=I(he,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),me(a)!=="svelte-1h1uakk"&&(a.innerHTML=l),c=ee(he),d=I(he,"SELECT",{class:!0,name:!0});var be=j(d);u=I(be,"OPTION",{}),j(u).forEach(g),h=I(be,"OPTION",{"data-svelte-h":!0}),me(h)!=="svelte-1en4y3b"&&(h.textContent=_),b=I(be,"OPTION",{"data-svelte-h":!0}),me(b)!=="svelte-18vmce2"&&(b.textContent=O),S=I(be,"OPTION",{"data-svelte-h":!0}),me(S)!=="svelte-1lp5zi9"&&(S.textContent=w),be.forEach(g),he.forEach(g),K=ee(ue),X=I(ue,"DIV",{class:!0});var Ut=j(X);Tt(V.$$.fragment,Ut),Ut.forEach(g),ue.forEach(g),$=ee(B),Tt(L.$$.fragment,B),oe=ee(B),M=I(B,"DIV",{class:!0});var G=j(M);z=I(G,"DIV",{class:!0,"data-svelte-h":!0}),me(z)!=="svelte-zde8yy"&&(z.innerHTML=ae),C=ee(G),Y=I(G,"DIV",{class:!0});var H=j(Y);ie=I(H,"CANVAS",{class:!0}),j(ie).forEach(g),Ce=ee(H),E.l(H),H.forEach(g),te=ee(G),Tt(le.$$.fragment,G),G.forEach(g),ke=ee(B),m=I(B,"DIV",{class:!0,"data-svelte-h":!0}),me(m)!=="svelte-1aqwcdk"&&(m.innerHTML=k),D=ee(B),W=I(B,"BUTTON",{type:!0,class:!0});var fe=j(W);de.l(fe),fe.forEach(g),B.forEach(g),re=ee(P),se=I(P,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),me(se)!=="svelte-hy64ql"&&(se.innerHTML=Re),Oe=ee(P),_e=I(P,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),me(_e)!=="svelte-zw178f"&&(_e.innerHTML=Ze),P.forEach(g),this.h()},h(){p(a,"class","label"),p(a,"for","prefix"),u.selected=!0,u.__value="",jt(u,u.__value),h.__value="นาย",jt(h,h.__value),b.__value="นาง",jt(b,b.__value),S.__value="นางสาว",jt(S,S.__value),p(d,"class","select rounded-sm max-w-xs bg-base-200"),d.disabled=n[4],p(d,"name","prefix"),p(o,"class","form-control"),p(X,"class","form-control flex-1"),p(i,"class","flex flex-row space-x-[10px]"),p(z,"class","label"),p(ie,"class",we="bg-base-200 h-[258px] w-full rounded-sm "+(!n[3]||n[4]?"pointer-events-none":"")),p(Y,"class","relative"),p(M,"class","form-control"),p(m,"class","form-control"),p(W,"type","submit"),p(W,"class","btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100"),W.disabled=ne=!n[5].consent||n[4],p(t,"class","form-control w-full"),p(se,"id","success-dialog"),p(se,"class","modal modal-bottom sm:modal-middle"),p(_e,"id","error-dialog"),p(_e,"class","modal modal-bottom sm:modal-middle")},m(v,P){N(v,e,P),A(e,t),It(r,t,null),A(t,s),A(t,i),A(i,o),A(o,a),A(o,c),A(o,d),A(d,u),A(d,h),A(d,b),A(d,S),A(i,K),A(i,X),It(V,X,null),A(t,$),It(L,t,null),A(t,oe),A(t,M),A(M,z),A(M,C),A(M,Y),A(Y,ie),n[9](ie),A(Y,Ce),E.m(Y,null),A(M,te),It(le,M,null),A(t,ke),A(t,m),A(t,D),A(t,W),de.m(W,null),A(e,re),A(e,se),n[11](se),A(e,Oe),A(e,_e),n[12](_e),Pe=!0,Le||(De=As(n[6].call(null,e)),Le=!0)},p(v,[P]){const B={};P&786448&&(B.$$scope={dirty:P,ctx:v}),r.$set(B),(!Pe||P&16)&&(d.disabled=v[4]);const ue={};P&786448&&(ue.$$scope={dirty:P,ctx:v}),V.$set(ue);const he={};P&786448&&(he.$$scope={dirty:P,ctx:v}),L.$set(he),(!Pe||P&24&&we!==(we="bg-base-200 h-[258px] w-full rounded-sm "+(!v[3]||v[4]?"pointer-events-none":"")))&&p(ie,"class",we),f===(f=y(v))&&E?E.p(v,P):(E.d(1),E=f(v),E&&(E.c(),E.m(Y,null)));const be={};P&786432&&(be.$$scope={dirty:P,ctx:v}),le.$set(be),ce!==(ce=x(v))&&(de.d(1),de=ce(v),de&&(de.c(),de.m(W,null))),(!Pe||P&48&&ne!==(ne=!v[5].consent||v[4]))&&(W.disabled=ne)},i(v){Pe||($e(r.$$.fragment,v),$e(V.$$.fragment,v),$e(L.$$.fragment,v),$e(le.$$.fragment,v),Pe=!0)},o(v){Fe(r.$$.fragment,v),Fe(V.$$.fragment,v),Fe(L.$$.fragment,v),Fe(le.$$.fragment,v),Pe=!1},d(v){v&&g(e),St(r),St(V),St(L),n[9](null),E.d(),St(le),de.d(),n[11](null),n[12](null),Le=!1,De()}}}function ll(n,e,t){let r,s,i,o,a,l=!1,c=!1;const d=new ResizeObserver($=>{t(0,s.width=$[0].target.clientWidth,s),t(0,s.height=$[0].target.clientHeight,s),i.fromData(i.toData())}),{form:u,setTouched:h,setData:_,data:b,reset:O}=Xs({validate($){try{Sn(or,$)}catch(L){return ai(L).nested}return{}},async onSubmit($){t(4,c=!0);try{await Xa(Sn(or,$)),o.showModal(),S(),O()}catch{a.showModal()}t(4,c=!1)},extend:Qs});Ts(n,b,$=>t(5,r=$)),Bn(()=>{i=new Xt(s),i.addEventListener("endStroke",()=>{h("signature",!0),_("signature",i.toDataURL())}),d.observe(s)});function S(){i.clear(),_("signature",void 0)}function w($){Kt[$?"unshift":"push"](()=>{s=$,t(0,s)})}const K=()=>t(3,l=!0);function X($){Kt[$?"unshift":"push"](()=>{o=$,t(1,o)})}function V($){Kt[$?"unshift":"push"](()=>{a=$,t(2,a)})}return[s,o,a,l,c,r,u,b,S,w,K,X,V]}class cl extends Fn{constructor(e){super(),$n(this,e,ll,al,dn,{})}}function ul(n){let e,t,r;return t=new cl({}),{c(){e=T("div"),At(t.$$.fragment),this.h()},l(s){e=I(s,"DIV",{class:!0});var i=j(e);Tt(t.$$.fragment,i),i.forEach(g),this.h()},h(){p(e,"class","bg-base-100 px-[10px] py-5")},m(s,i){N(s,e,i),It(t,e,null),r=!0},i(s){r||($e(t.$$.fragment,s),r=!0)},o(s){Fe(t.$$.fragment,s),r=!1},d(s){s&&g(e),St(t)}}}function dl(n){let e,t="เราอยากให้ลงลายมือชื่อบนกระดาษมากกว่าออนไลน์ เพราะประกาศของกกต. เขียนไว้ไม่ชัดเจนว่าลงชื่อทางออนไลน์ได้หรือไม่ได้ จึงต้องรวบรวมชื่อบนกระดาษให้ได้ 50,000 เป็นอย่างน้อยก่อน",r,s,i=`<h1 class="heading-responsive-01">วิธีที่ 1 : เดินทางไปลงชื่อที่จุดตั้งโต๊ะ</h1> <a href="/locations" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดูสถานที่ตั้งโต๊ะ
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.33332 0C5.40622 0 3 2.28256 3 5.53844C3 6.70035 3.27369 7.50866 3.78205 8.40382L7.97434 15.7884C8.00983 15.8525 8.06184 15.9059 8.12497 15.9432C8.1881 15.9804 8.26004 16 8.33332 16C8.4066 16 8.47854 15.9804 8.54166 15.9432C8.60479 15.9059 8.6568 15.8525 8.69229 15.7884L12.8846 8.40382C13.393 7.50864 13.6666 6.70035 13.6666 5.53844C13.6666 2.28256 11.2604 0 8.33332 0ZM8.33332 0.82051C10.8441 0.82051 12.8461 2.67673 12.8461 5.53844C12.8461 6.58135 12.6437 7.17112 12.173 7.99999L8.33332 14.7564L4.49359 7.99999C4.02289 7.17114 3.82051 6.58135 3.82051 5.53844C3.82051 2.67673 5.82255 0.82051 8.33332 0.82051ZM8.33332 3.28204C9.47107 3.28204 10.3846 4.19558 10.3846 5.33332C10.3846 6.47104 9.47106 7.38459 8.33332 7.38459C7.19557 7.38459 6.28204 6.47104 6.28204 5.33332C6.28204 4.19558 7.19557 3.28204 8.33332 3.28204Z" fill="white"></path></svg></a>`,o,a,l="หรือ",c,d,u=`<h1 class="heading-responsive-01 mb-3">วิธีที่ 2 : ดาวน์โหลดแบบฟอร์มมากรอก</h1> <div class="border-t grid gap-2 py-5"><p class="heading-03">1. ดาวน์โหลดแบบฟอร์ม และพิมพ์ลงกระดาษ A4</p> <a target="_blank" href="https://pin.ski/3Qtz6l3" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดาวน์โหลดแบบฟอร์ม
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M13.5 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V13.5C1.5 13.7652 1.60536 14.0196 1.79289 14.2071C1.98043 14.3946 2.23478 14.5 2.5 14.5H13.5C13.7652 14.5 14.0196 14.3946 14.2071 14.2071C14.3946 14.0196 14.5 13.7652 14.5 13.5V2.5C14.5 2.23478 14.3946 1.98043 14.2071 1.79289C14.0196 1.60536 13.7652 1.5 13.5 1.5ZM13.5 2.5V4.5H2.5V2.5H13.5ZM8.5 5.5H13.5V9H8.5V5.5ZM7.5 9H2.5V5.5H7.5V9ZM2.5 10H7.5V13.5H2.5V10ZM8.5 13.5V10H13.5V13.5H8.5Z" fill="white"></path></svg></a></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">2. ลงลายมือชื่อบนแบบฟอร์ม</p> <p>ชวนคนใกล้ๆ ตัวมาร่วมลงชื่อให้เต็มแผ่นเลยก็ได้</p> <img class="mx-auto" src="/register-form.svg" alt="register-form"/></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">3. ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw</p> <div class="grid gap-1"><p>3.1. นำส่งด้วยตัวเองที่ iLaw</p> <a href="https://goo.gl/maps/PM5nXuVFUv5GCUZw7" class="link px-6 py-2 text-center text-accent font-bold heading-03 ">ดูแผนที่</a></div> <div class="grid gap-1"><p>3.2. ส่งไปรษณีย์ (ต้องใช้บริการไปรษณีย์ไทยเท่านั้น)</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">ตู้ ปณ.79 ปณศ.สามเสนใน เขตพญาไท กรุงเทพฯ ประเทศไทย 10400 โทร. 0996786031</p></div> <div class="grid gap-1"><p>3.3. สแกนแล้วส่งอีเมลล์มาที่</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">conforall66@gmail.com</p></div></div>`;return{c(){e=T("p"),e.textContent=t,r=Q(),s=T("div"),s.innerHTML=i,o=Q(),a=T("p"),a.textContent=l,c=Q(),d=T("div"),d.innerHTML=u,this.h()},l(h){e=I(h,"P",{"data-svelte-h":!0}),me(e)!=="svelte-ack3u8"&&(e.textContent=t),r=ee(h),s=I(h,"DIV",{class:!0,"data-svelte-h":!0}),me(s)!=="svelte-x9jdd5"&&(s.innerHTML=i),o=ee(h),a=I(h,"P",{"data-svelte-h":!0}),me(a)!=="svelte-nl1k6i"&&(a.textContent=l),c=ee(h),d=I(h,"DIV",{class:!0,"data-svelte-h":!0}),me(d)!=="svelte-a9mn6s"&&(d.innerHTML=u),this.h()},h(){p(s,"class","p-4 bg-base-100 grid gap-3 text-left"),p(d,"class","p-4 bg-base-100 text-left")},m(h,_){N(h,e,_),N(h,r,_),N(h,s,_),N(h,o,_),N(h,a,_),N(h,c,_),N(h,d,_)},i:Xe,o:Xe,d(h){h&&(g(e),g(r),g(s),g(o),g(a),g(c),g(d))}}}function hl(n){let e,t,r="ร่วมลงชื่อ",s,i,o,a,l,c,d,u,h,_,b,O,S,w,K,X,V;const $=[dl,ul],L=[];function oe(M,z){return M[0]?0:1}return S=oe(n),w=L[S]=$[S](n),{c(){e=T("div"),t=T("h3"),t.textContent=r,s=Q(),i=T("div"),o=T("button"),a=nt(`แบบกระดาษ
            `),l=ht("svg"),c=ht("path"),u=Q(),h=T("button"),_=nt("แบบออนไลน์"),O=Q(),w.c(),this.h()},l(M){e=I(M,"DIV",{class:!0});var z=j(e);t=I(z,"H3",{class:!0,"data-svelte-h":!0}),me(t)!=="svelte-l3nsqj"&&(t.textContent=r),s=ee(z),i=I(z,"DIV",{class:!0});var ae=j(i);o=I(ae,"BUTTON",{class:!0});var C=j(o);a=rt(C,`แบบกระดาษ
            `),l=ft(C,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var Y=j(l);c=ft(Y,"path",{d:!0,fill:!0}),j(c).forEach(g),Y.forEach(g),C.forEach(g),u=ee(ae),h=I(ae,"BUTTON",{class:!0});var ie=j(h);_=rt(ie,"แบบออนไลน์"),ie.forEach(g),ae.forEach(g),O=ee(z),w.l(z),z.forEach(g),this.h()},h(){p(t,"class","heading-responsive-03"),p(c,"d","M11.5 3.33838C10.8584 3.33838 10.2311 3.5283 9.69722 3.88422C9.16336 4.24013 8.74678 4.7461 8.5 5.33838C8.25322 4.7461 7.83664 4.24013 7.30278 3.88422C6.76891 3.5283 6.14163 3.33838 5.5 3.33838C4.70435 3.33838 3.94129 3.65445 3.37868 4.21706C2.81607 4.77967 2.5 5.54273 2.5 6.33838C2.5 9.40088 8.5 14.3384 8.5 14.3384C8.5 14.3384 14.5 9.40088 14.5 6.33838C14.5 5.54273 14.1839 4.77967 13.6213 4.21706C13.0587 3.65445 12.2956 3.33838 11.5 3.33838Z"),p(c,"fill","black"),p(l,"xmlns","http://www.w3.org/2000/svg"),p(l,"width","17"),p(l,"height","17"),p(l,"viewBox","0 0 17 17"),p(l,"fill","none"),p(o,"class",d="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(n[0]?"":"opacity-50")),p(h,"class",b="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(n[0]?"opacity-50":"")),p(i,"class","join w-full"),p(e,"class","text-center grid gap-3 body-02-normal")},m(M,z){N(M,e,z),A(e,t),A(e,s),A(e,i),A(i,o),A(o,a),A(o,l),A(l,c),A(i,u),A(i,h),A(h,_),A(e,O),L[S].m(e,null),K=!0,X||(V=[Zt(o,"click",n[1]),Zt(h,"click",n[2])],X=!0)},p(M,[z]){(!K||z&1&&d!==(d="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(M[0]?"":"opacity-50")))&&p(o,"class",d),(!K||z&1&&b!==(b="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(M[0]?"opacity-50":"")))&&p(h,"class",b);let ae=S;S=oe(M),S!==ae&&(Cr(),Fe(L[ae],1,1,()=>{L[ae]=null}),Pr(),w=L[S],w||(w=L[S]=$[S](M),w.c()),$e(w,1),w.m(e,null))},i(M){K||($e(w),K=!0)},o(M){Fe(w),K=!1},d(M){M&&g(e),L[S].d(),X=!1,Ss(V)}}}function fl(n,e,t){let r=!0;return Bn(()=>{new URLSearchParams(window.location.search).has("online")&&t(0,r=!1)}),[r,()=>t(0,r=!0),()=>t(0,r=!1)]}class bl extends Fn{constructor(e){super(),$n(this,e,fl,hl,dn,{})}}export{bl as default};

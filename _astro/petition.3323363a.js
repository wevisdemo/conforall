import{n as ht,s as Qn,C as xo,S as Fr,i as $r,e as A,a as ne,D as hi,c as S,b as W,d as v,f as re,E as Mo,j as $,F as ls,r as Be,G as cs,t as je,H as Uo,o as Br,I as Vo,J as Pn,v as us,z as ds,A as hs,B as fs,l as Jt,p as Yt,m as de,h as p,K as En,k as E,q as Xt,L as Fo,u as Zt,M as $o,w as vt,x as yt,y as Bo,N as Ln,O as xt,P as Mt,Q as jo}from"./index.6809c92f.js";function Ho(n,...e){const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Ke(n){let e;return Ho(n,t=>e=t)(),e}class Wo extends Error{constructor(e,t){super(e),this.name="FelteSubmitError",this.response=t}}function zo(n,e){return Object.keys(n).some(r=>e(n[r]))}function er(n,e){return Object.keys(n||{}).reduce((r,i)=>Object.assign(Object.assign({},r),{[i]:e(n[i])}),{})}function B(n){return Object.prototype.toString.call(n)==="[object Object]"}function Pe(n){return Object.keys(n||{}).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:B(n[t])?Pe(n[t]):Array.isArray(n[t])?[...n[t]]:n[t]}),{})}function qo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Go(n){return function(e){if(B(e)){const t=Re(e,n);return qo(t,["key"])}return n}}function Re(n,e){return er(n,t=>B(t)?Re(t,e):Array.isArray(t)?t.map(Go(e)):e)}function ft(...n){const e=n.pop(),t=n.shift();if(typeof t=="string")return t;const r=Pe(t);if(n.length===0)return r;for(const i of n){if(!i)continue;if(typeof i=="string")return i;let s=e(r,i);if(typeof s<"u")return s;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(i))));for(const a of o)if(s=e(r[a],i[a]),typeof s<"u")r[a]=s;else if(B(i[a])&&B(r[a]))r[a]=ft(r[a],i[a],e);else if(Array.isArray(i[a]))r[a]=i[a].map((l,c)=>{if(!B(l))return l;const d=Array.isArray(r[a])?r[a][c]:r[a];return ft(d,l,e)});else if(B(i[a])){const l=Re(Pe(i[a]),void 0);r[a]=ft(l,i[a],e)}else typeof i[a]<"u"&&(r[a]=i[a])}return r}function Ko(n,e){if(!(B(n)&&B(e))){if(Array.isArray(e)){if(e.some(B))return;const t=Array.isArray(n)?n:[];return e.map((r,i)=>{var s;return(s=t[i])!==null&&s!==void 0?s:r})}if(typeof n<"u")return n}}function fi(...n){return ft(...n,Ko)}function ps(...n){return ft(...n,()=>{})}function ze(n,e,t){const r=s=>String.prototype.split.call(e,s).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,n),i=r(/[,[\]]+?/)||r(/[,[\].]+?/);return i===void 0||i===n?t:i}function hn(n,e,t){n&&(n=Pe(n)),B(n)||(n={});const r=Array.isArray(e)?e:e.match(/[^.[\]]+/g)||[],i=r[r.length-1];if(!i)return n;let s=n;for(let o=0;o<r.length-1;o++){const a=r[o];if(!s[a]||!B(s[a])&&!Array.isArray(s[a])){const l=r[o+1];isNaN(Number(l))?s[a]={}:s[a]=[]}s=s[a]}return s[i]=t(s[i]),n}function te(n,e,t){return hn(n,e,()=>t)}function Qt(n,e){if(!n||Object(n)!==n)return;typeof n<"u"&&(n=Pe(n));const t=Array.isArray(e)?e:e.toString().match(/[^.[\]]+/g)||[],r=t.length===1?n:ze(n,t.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(t[t.length-1]),1):r==null||delete r[t[t.length-1]],n}function sn(n,e){return zo(n,t=>B(t)?sn(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e(t):t.some(r=>B(r)?sn(r,e):e(r)):e(t))}function Vt(n){return n?.nodeName==="INPUT"}function Jo(n){return n?.nodeName==="TEXTAREA"}function Ft(n){return n?.nodeName==="SELECT"}function tr(n){return n?.nodeName==="FIELDSET"}function we(n){return Vt(n)||Jo(n)||Ft(n)}function pi(n){return n.nodeType===Node.ELEMENT_NODE}function ge(n,e){return e??(we(n)?n.name:"")}function dr(n){let e=n;for(;e&&e.nodeName!=="FORM";){if(e.hasAttribute("data-felte-ignore"))return!0;e=e.parentElement}return!1}function Yo(n,e){if(!(B(n)||B(e))){if(n===null||n==="")return e;if(e===null||e===""||!e)return n;if(!(!n||!e)){if(Array.isArray(n)){if(!Array.isArray(e))return[...n,e];const t=[],r=Math.max(e.length,n.length);for(let i=0;i<r;i++){let s=n[i],o=e[i];!B(s)&&!B(o)?(Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]),t.push(...s,...o)):t.push(Lt([s??{},o??{}]))}return t.filter(Boolean)}return Array.isArray(e)||(e=[e]),[n,...e].reduce((t,r)=>t.concat(r),[]).filter(Boolean)}}}function Lt(n){return ft(...n,Yo)}function Xo(n,e){return e?(Array.isArray(e)?e:[e]).map(r=>r(n)):[]}function Ir(n,e){return e?Array.isArray(e)?e.reduce((t,r)=>r(t),n):e(n):n}function jr(n=8){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function xn(n,e,{onInit:t,onEnd:r}={}){let i;return(...s)=>{i||t?.(),i&&clearTimeout(i),i=setTimeout(()=>{n.apply(this,s),i=void 0,r?.()},e)}}function Tr(n){if(we(n))return[n];if(n.childElementCount===0)return[];const e=new Set;for(const t of n.children){if(we(t)&&e.add(t),tr(t))for(const r of t.elements)we(r)&&e.add(r);t.childElementCount>0&&Tr(t).forEach(r=>e.add(r))}return Array.from(e)}function ms(n){for(const e of n.elements)!we(e)&&!tr(e)||n.hasAttribute("data-felte-keep-on-remove")&&!e.hasAttribute("data-felte-keep-on-remove")&&(e.dataset.felteKeepOnRemove=n.dataset.felteKeepOnRemove)}function gs(n){return n.type.match(/^(number|range)$/)?n.value?+n.value:void 0:n.value}function mi(n){var e;let t={},r={};for(const i of n.elements){if(tr(i)&&ms(i),!we(i)||!i.name)continue;const s=ge(i);if(Vt(i)){if(i.type==="checkbox"){if(typeof ze(t,s)>"u"){if(Array.from(n.querySelectorAll(`[name="${i.name}"]`)).filter(l=>we(l)?s===ge(l):!1).length===1){t=te(t,s,i.checked),r=te(r,s,!1);continue}t=te(t,s,i.checked?[i.value]:[]),r=te(r,s,!1);continue}Array.isArray(ze(t,s))&&i.checked&&(t=hn(t,s,a=>[...a,i.value]));continue}if(i.type==="radio"){if(ze(t,s))continue;t=te(t,s,i.checked?i.value:void 0),r=te(r,s,!1);continue}if(i.type==="file"){t=te(t,s,i.multiple?Array.from(i.files||[]):(e=i.files)===null||e===void 0?void 0:e[0]),r=te(r,s,!1);continue}}else if(Ft(i)){if(!i.multiple)t=te(t,s,i.value);else{const l=Array.from(i.selectedOptions).map(c=>c.value);t=te(t,s,l)}r=te(r,s,!1);continue}const o=gs(i);t=te(t,s,o),r=te(r,s,!1)}return{defaultData:t,defaultTouched:r}}function Zo(n,e){var t;if(!we(n))return;const r=e;if(Vt(n)){if(n.type==="checkbox"){const i=r;if(typeof i>"u"||typeof i=="boolean"){n.checked=!!i;return}Array.isArray(i)&&(i.includes(n.value)?n.checked=!0:n.checked=!1);return}if(n.type==="radio"){const i=r;n.value===i?n.checked=!0:n.checked=!1;return}if(n.type==="file"){if(e instanceof FileList)n.files=e;else if(e instanceof File&&typeof DataTransfer<"u"){const i=new DataTransfer;i.items.add(e),n.files=i.files}else if(typeof DataTransfer<"u"&&Array.isArray(e)&&e.some(i=>i instanceof File)){const i=new DataTransfer;for(const s of e)s instanceof File&&i.items.add(s);n.files=i.files}else(!e||Array.isArray(e)&&!e.length)&&(n.files=null,n.value="");return}}else if(Ft(n)){if(n.multiple){if(Array.isArray(r)){n.value=String((t=r[0])!==null&&t!==void 0?t:"");const s=r.map(o=>String(o));for(const o of n.options)s.includes(o.value)?o.selected=!0:o.selected=!1}}else{n.value=String(r??"");for(const s of n.options)s.value===String(r)?s.selected=!0:s.selected=!1}return}n.value=String(r??"")}function In(n,e){for(const t of n.elements){if(tr(t)&&ms(t),!we(t)||!t.name)continue;const r=ge(t);Zo(t,ze(e,r))}}function _s(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Je(n,e){return er(n,t=>B(t)?Je(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e:t.map(r=>{const i=Je(r,e);return _s(i,["key"])}):e)}function Ct(n){return n?er(n,e=>B(e)?Ct(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!B(t))return t;const r=Ct(t);return r.key||(r.key=jr()),r}):e):{}}function Tt(n){return n?er(n,e=>B(e)?Tt(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!B(t))return t;const r=Tt(t);return _s(r,["key"])}):e):{}}function Qo(){class n extends CustomEvent{constructor(i){super("feltesuccess",{detail:i})}}class e extends CustomEvent{constructor(i){super("felteerror",{detail:i,cancelable:!0})}setErrors(i){this.preventDefault(),this.errors=i}}class t extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(i){this.onSubmit=i}handleError(i){this.onError=i}handleSuccess(i){this.onSuccess=i}}return{createErrorEvent:r=>new e(r),createSubmitEvent:()=>new t,createSuccessEvent:r=>new n(r)}}function ea(n){if(n)return async function(){let t=new FormData(n);const r=new URL(n.action),i=n.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||n.method;let s=n.enctype;n.querySelector('input[type="file"]')&&(s="multipart/form-data"),(i==="get"||s==="application/x-www-form-urlencoded")&&(t=new URLSearchParams(t));let o;i==="get"?(t.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:i,headers:{Accept:"application/json"}}):o={method:i,body:t,headers:Object.assign(Object.assign({},s!=="multipart/form-data"&&{"Content-Type":s}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new Wo("An error occurred while submitting the form",a)}}function Tn(n,e,t,r){return hn(n,e,i=>(typeof i<"u"&&!Array.isArray(i)||(i||(i=[]),typeof r>"u"?i.push(t):i.splice(r,0,t)),i))}function ta(n,e,t,r){return hn(n,e,i=>(!i||!Array.isArray(i)||([i[t],i[r]]=[i[r],i[t]]),i))}function na(n,e,t,r){return hn(n,e,i=>(!i||!Array.isArray(i)||i.splice(r,0,i.splice(t,1)[0]),i))}function gi(n){return typeof n=="function"}function ot(n){return(t,r)=>{if(typeof t=="string"){const i=t;n(s=>{const o=gi(r)?r(ze(s,i)):r;return te(s,i,o)})}else n(i=>gi(t)?t(i):t)}}function ra({stores:n,config:e,validateErrors:t,validateWarnings:r,_getCurrentExtenders:i}){var s;let o,a=Ct((s=e.initialValues)!==null&&s!==void 0?s:{});const{data:l,touched:c,errors:d,warnings:u,isDirty:h,isSubmitting:m,interacted:_}=n,C=ot(l.update),P=ot(c.update),T=ot(d.update),X=ot(u.update);function F(g){C(U=>{const L=g(U);return o&&In(o,L),L})}const k=(g,U,L)=>{ot(F)(g,U),typeof g=="string"&&L&&P(g,!0)};function N(g,U,L){const G=B(U)?Je(U,!1):!1,se=B(G)?Re(G,[]):[];U=B(U)?Object.assign(Object.assign({},U),{key:jr()}):U,d.update(oe=>Tn(oe,g,se,L)),u.update(oe=>Tn(oe,g,se,L)),c.update(oe=>Tn(oe,g,G,L)),l.update(oe=>{const ae=Tn(oe,g,U,L);return setTimeout(()=>o&&In(o,ae)),ae})}function V(g){d.update(g),u.update(g),c.update(g),l.update(U=>{const L=g(U);return setTimeout(()=>o&&In(o,L)),L})}function ie(g){V(U=>Qt(U,g))}function ee(g,U,L){V(G=>ta(G,g,U,L))}function K(g,U,L){V(G=>na(G,g,U,L))}function Ee(g){const U=ze(a,g),L=B(U)?Je(U,!1):!1,G=B(L)?Re(L,[]):[];l.update(se=>{const oe=te(se,g,U);return o&&In(o,oe),oe}),c.update(se=>te(se,g,L)),d.update(se=>te(se,g,G)),u.update(se=>te(se,g,G))}const I=ot(m.update),M=ot(h.update),Z=ot(_.update);async function he(){const g=Ke(l);c.set(Je(g,!0)),_.set(null);const U=await t(g);return await r(g),U}function Ie(){k(Pe(a)),P(g=>Re(g,!1)),_.set(null),h.set(!1)}function Q(g){return async function(L){var G,se,oe,ae,xe,Me,ve;const{createErrorEvent:it,createSubmitEvent:Oe,createSuccessEvent:Ue}=Qo(),De=Oe();o?.dispatchEvent(De);const b=(se=(G=De.onError)!==null&&G!==void 0?G:g?.onError)!==null&&se!==void 0?se:e.onError,f=(ae=(oe=De.onSuccess)!==null&&oe!==void 0?oe:g?.onSuccess)!==null&&ae!==void 0?ae:e.onSuccess,w=(ve=(Me=(xe=De.onSubmit)!==null&&xe!==void 0?xe:g?.onSubmit)!==null&&Me!==void 0?Me:e.onSubmit)!==null&&ve!==void 0?ve:ea(o);if(!w||(L?.preventDefault(),De.defaultPrevented))return;m.set(!0),_.set(null);const x=Tt(Ke(l)),ce=await t(x,g?.validate),fe=await r(x,g?.warn);if(fe&&u.set(ps(Re(x,[]),fe)),c.set(Je(x,!0)),ce&&(c.set(Je(ce,!0)),sn(ce,j=>Array.isArray(j)?j.length>=1:!!j))){await new Promise(j=>setTimeout(j)),i().forEach(j=>{var ue;return(ue=j.onSubmitError)===null||ue===void 0?void 0:ue.call(j,{data:x,errors:ce})}),m.set(!1);return}const y={event:L,setFields:k,setData:C,setTouched:P,setErrors:T,setWarnings:X,unsetField:ie,addField:N,resetField:Ee,reset:Ie,setInitialValues:le.setInitialValues,moveField:K,swapFields:ee,form:o,controls:o&&Array.from(o.elements).filter(we),config:Object.assign(Object.assign({},e),g)};try{const O=await w(x,y);o?.dispatchEvent(Ue(Object.assign({response:O},y))),await f?.(O,y)}catch(O){const j=it(Object.assign({error:O},y));if(o?.dispatchEvent(j),!b&&!j.defaultPrevented)throw O;if(!b&&!j.errors)return;const ue=j.errors||await b?.(O,y);ue&&(c.set(Je(ue,!0)),d.set(ue),await new Promise(pe=>setTimeout(pe)),i().forEach(pe=>{var ye;return(ye=pe.onSubmitError)===null||ye===void 0?void 0:ye.call(pe,{data:x,errors:Ke(d)})}))}finally{m.set(!1)}}}const le={setData:C,setFields:k,setTouched:P,setErrors:T,setWarnings:X,setIsSubmitting:I,setIsDirty:M,setInteracted:Z,validate:he,reset:Ie,unsetField:ie,resetField:Ee,addField:N,swapFields:ee,moveField:K,createSubmitHandler:Q,handleSubmit:Q(),setInitialValues:g=>{a=Ct(g)}};return{public:le,private:{_setFormNode(g){o=g},_getInitialValues:()=>a}}}function ia({helpers:n,stores:e,config:t,extender:r,createSubmitHandler:i,handleSubmit:s,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:d,setTouched:u,reset:h,setInitialValues:m}=n,{addValidator:_,addTransformer:C,validate:P}=n,{data:T,errors:X,warnings:F,touched:k,isSubmitting:N,isDirty:V,interacted:ie,isValid:ee,isValidating:K}=e;function Ee(I){I.requestSubmit||(I.requestSubmit=s);function M(b){return function(f){return f({form:I,stage:b,controls:Array.from(I.elements).filter(we),data:T,errors:X,warnings:F,touched:k,isValid:ee,isValidating:K,isSubmitting:N,isDirty:V,interacted:ie,config:t,addValidator:_,addTransformer:C,setFields:d,validate:P,reset:h,createSubmitHandler:i,handleSubmit:s})}}l(r.map(M("MOUNT"))),I.noValidate=!!t.validate;const{defaultData:Z,defaultTouched:he}=mi(I);o(I),m(ps(Pe(Z),a())),d(a()),k.set(he);function Ie(b){const f=ge(b),w=Array.from(I.querySelectorAll(`[name="${b.name}"]`)).filter(x=>we(x)?f===ge(x):!1);if(w.length!==0)return w.length===1?T.update(x=>te(x,ge(b),b.checked)):T.update(x=>te(x,ge(b),w.filter(Vt).filter(ce=>ce.checked).map(ce=>ce.value)))}function Q(b){const f=I.querySelectorAll(`[name="${b.name}"]`),w=Array.from(f).find(x=>Vt(x)&&x.checked);T.update(x=>te(x,ge(b),w?.value))}function le(b){var f;const w=Array.from((f=b.files)!==null&&f!==void 0?f:[]);T.update(x=>te(x,ge(b),b.multiple?w:w[0]))}function Le(b){if(!b.multiple)T.update(f=>te(f,ge(b),b.value));else{const f=Array.from(b.selectedOptions).map(w=>w.value);T.update(w=>te(w,ge(b),f))}}function g(b){const f=b.target;if(!f||!we(f)||Ft(f)||dr(f)||["checkbox","radio","file"].includes(f.type)||!f.name)return;V.set(!0);const w=gs(f);ie.set(f.name),T.update(x=>te(x,ge(f),w))}function U(b){const f=b.target;if(!(!f||!we(f)||dr(f))&&f.name)if(u(ge(f),!0),ie.set(f.name),(Ft(f)||["checkbox","radio","file","hidden"].includes(f.type))&&V.set(!0),f.type==="hidden"&&T.update(w=>te(w,ge(f),f.value)),Ft(f))Le(f);else if(Vt(f))f.type==="checkbox"?Ie(f):f.type==="radio"?Q(f):f.type==="file"&&le(f);else return}function L(b){const f=b.target;!f||!we(f)||dr(f)||f.name&&(u(ge(f),!0),ie.set(f.name))}function G(b){b.preventDefault(),h()}const se={childList:!0,subtree:!0};function oe(b){let f=Ke(T),w=Ke(k),x=Ke(X),ce=Ke(F);for(const fe of b.reverse()){if(fe.hasAttribute("data-felte-keep-on-remove")&&fe.dataset.felteKeepOnRemove!=="false")continue;const y=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let O=ge(fe);const j=Ke(k);if(y.test(O)){const pe=O.split(".").slice(0,-1).join("."),ye=ze(j,pe);B(ye)&&Object.keys(ye).length<=1&&(O=pe)}f=Qt(f,O),w=Qt(w,O),x=Qt(x,O),ce=Qt(ce,O)}T.set(f),k.set(w),X.set(x),F.set(ce)}const ae=xn(()=>{c().forEach(w=>{var x;return(x=w.destroy)===null||x===void 0?void 0:x.call(w)}),l(r.map(M("UPDATE")));const{defaultData:b,defaultTouched:f}=mi(I);T.update(w=>fi(w,b)),k.update(w=>fi(w,f)),n.setFields(Ke(T))},0);let xe=[];const Me=xn(()=>{c().forEach(b=>{var f;return(f=b.destroy)===null||f===void 0?void 0:f.call(b)}),l(r.map(M("UPDATE"))),oe(xe),xe=[]},0);function ve(b){Array.from(b.addedNodes).some(w=>pi(w)?we(w)?!0:Tr(w).length>0:!1)&&ae()}function it(b){for(const f of b.removedNodes){if(!pi(f))continue;const w=Tr(f);w.length!==0&&(xe.push(...w),Me())}}function Oe(b){for(const f of b)f.type==="childList"&&(f.addedNodes.length>0&&ve(f),f.removedNodes.length>0&&it(f))}const Ue=new MutationObserver(Oe);Ue.observe(I,se),I.addEventListener("input",g),I.addEventListener("change",U),I.addEventListener("focusout",L),I.addEventListener("submit",s),I.addEventListener("reset",G);const De=X.subscribe(b=>{for(const f of I.elements){if(!we(f)||!f.name)continue;const w=ze(b,ge(f)),x=Array.isArray(w)?w.join(`
`):typeof w=="string"?w:void 0;x!==f.dataset.felteValidationMessage&&(x?(f.dataset.felteValidationMessage=x,f.setAttribute("aria-invalid","true")):(delete f.dataset.felteValidationMessage,f.removeAttribute("aria-invalid")))}});return{destroy(){Ue.disconnect(),I.removeEventListener("input",g),I.removeEventListener("change",U),I.removeEventListener("focusout",L),I.removeEventListener("submit",s),I.removeEventListener("reset",G),De(),c().forEach(b=>{var f;return(f=b.destroy)===null||f===void 0?void 0:f.call(b)})}}}return{form:Ee}}function sa(n){const e={aborted:!1,priority:n};return{signal:e,abort(){e.aborted=!0}}}function oa(n,e){if(B(n))return!e||B(e)&&Object.keys(e).length===0?Re(n,null):void 0;if(Array.isArray(n)){if(n.some(B))return;const t=Array.isArray(e)?e:[];return n.map((r,i)=>{const s=t[i];return Array.isArray(s)&&s.length===0?null:r&&s||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?n?e:null:n&&e?[e]:null}function aa(n,e){if(B(n))return!e||B(e)&&Object.keys(e).length===0?Re(n,null):void 0;if(Array.isArray(n)){if(n.some(B))return;const t=Array.isArray(e)?e:[];return n.map((r,i)=>{const s=t[i];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?e:e?[e]:null}function la([n,e]){return ft(e,n,oa)}function ca([n,e]){return ft(e,n,aa)}function ua(n){return function(t,r,i){const s=Array.isArray(t)?t:[t],o=new Array(s.length),a=n(i),l=a.set,c=a.subscribe;let d;function u(){d=s.map((m,_)=>m.subscribe(C=>{o[_]=C,l(r(o))}))}function h(){d?.forEach(m=>m())}return a.subscribe=function(_){const C=c(_);return()=>{C()}},[a,u,h]}}function da(n,e){var t,r,i,s,o,a,l,c,d;const u=ua(n),h=e.initialValues=e.initialValues?Ct(Ir(Pe(e.initialValues),e.transform)):{},m=Je(Tt(h),!1),_=n(m),C=n(0),[P,T,X]=u([_,C],([J,q])=>sn(J,Ne=>!!Ne)&&q>=1,!1);delete P.set,delete P.update;function F(J){let q;return async function(Ne,Ve,Ce,wt=!1){if(!Ce||!Ne)return;let st=Ve&&Object.keys(Ve).length>0?Ve:Re(Ne,[]);const Et=sa(wt);if((!q?.signal.priority||wt)&&(q?.abort(),q=Et),q.signal.priority&&!wt)return;C.update(Kt=>Kt+1);const di=Xo(Ne,Ce);return di.forEach(async Kt=>{const Lo=await Kt;Et.signal.aborted||(st=Lt([st,Lo]),J.set(st))}),await Promise.all(di),q=void 0,C.update(Kt=>Kt-1),st}}let k=Re(m,[]);const N=n(h),V=Re(m,[]),ie=n(V),ee=n(Pe(V)),[K,Ee,I]=u([ie,ee],Lt,Pe(V)),M=Re(m,[]),Z=n(M),he=n(Pe(M)),[Ie,Q,le]=u([Z,he],Lt,Pe(M)),[Le,g,U]=u([K,_],la,Pe(V)),[L,G,se]=u([Ie,_],ca,Pe(M));let oe=!1;const[ae,xe,Me]=u(K,([J])=>{var q;return oe?!sn(J,me=>Array.isArray(me)?me.length>=1:!!me):(oe=!0,!e.validate&&!(!((q=e.debounced)===null||q===void 0)&&q.validate))},!e.validate&&!(!((t=e.debounced)===null||t===void 0)&&t.validate));delete ae.set,delete ae.update;const ve=n(!1),it=n(!1),Oe=n(null),Ue=F(ie),De=F(Z),b=F(ee),f=F(he),w=xn(b,(o=(i=(r=e.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&i!==void 0?i:(s=e.debounced)===null||s===void 0?void 0:s.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{C.update(J=>J+1)},onEnd:()=>{C.update(J=>J-1)}}),x=xn(f,(d=(l=(a=e.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=e.debounced)===null||c===void 0?void 0:c.timeout)!==null&&d!==void 0?d:300);async function ce(J,q){var me;const Ne=Tt(J),Ve=Ue(Ne,k,q??e.validate,!0);if(q)return Ve;const Ce=b(Ne,k,(me=e.debounced)===null||me===void 0?void 0:me.validate,!0);return Lt(await Promise.all([Ve,Ce]))}async function fe(J,q){var me;const Ne=Tt(J),Ve=De(Ne,k,q??e.warn,!0);if(q)return Ve;const Ce=f(Ne,k,(me=e.debounced)===null||me===void 0?void 0:me.warn,!0);return Lt(await Promise.all([Ve,Ce]))}let y=V,O=M;function j(){const J=N.subscribe(Ce=>{var wt,st;const Et=Tt(Ce);Ue(Et,k,e.validate),De(Et,k,e.warn),w(Et,k,(wt=e.debounced)===null||wt===void 0?void 0:wt.validate),x(Et,k,(st=e.debounced)===null||st===void 0?void 0:st.warn)}),q=_.subscribe(Ce=>{k=Re(Ce,[])}),me=K.subscribe(Ce=>{y=Ce}),Ne=Ie.subscribe(Ce=>{O=Ce});Ee(),xe(),Q(),g(),G(),T();function Ve(){J(),U(),I(),le(),se(),Me(),X(),q(),me(),Ne()}return Ve}function ue(J){ie.set(J(y)),ee.set({})}function pe(J){Z.set(J(O)),he.set({})}function ye(J){ue(()=>J)}function wn(J){pe(()=>J)}return Le.set=ye,Le.update=ue,L.set=wn,L.update=pe,{data:N,errors:Le,warnings:L,touched:_,isValid:ae,isSubmitting:ve,isDirty:it,isValidating:P,interacted:Oe,validateErrors:ce,validateWarnings:fe,cleanup:e.preventStoreStart?()=>{}:j(),start:j}}function ha(n,e){var t,r;(t=n.extend)!==null&&t!==void 0||(n.extend=[]),(r=n.debounced)!==null&&r!==void 0||(n.debounced={}),n.validate&&!Array.isArray(n.validate)&&(n.validate=[n.validate]),n.debounced.validate&&!Array.isArray(n.debounced.validate)&&(n.debounced.validate=[n.debounced.validate]),n.transform&&!Array.isArray(n.transform)&&(n.transform=[n.transform]),n.warn&&!Array.isArray(n.warn)&&(n.warn=[n.warn]),n.debounced.warn&&!Array.isArray(n.debounced.warn)&&(n.debounced.warn=[n.debounced.warn]);function i(Q,{debounced:le,level:Le}={debounced:!1,level:"error"}){var g;const U=Le==="error"?"validate":"warn";(g=n.debounced)!==null&&g!==void 0||(n.debounced={});const L=le?n.debounced:n;L[U]?L[U]=[...L[U],Q]:L[U]=[Q]}function s(Q){n.transform?n.transform=[...n.transform,Q]:n.transform=[Q]}const o=Array.isArray(n.extend)?n.extend:[n.extend];let a=[];const l=()=>a,c=Q=>{a=Q},{isSubmitting:d,isValidating:u,data:h,errors:m,warnings:_,touched:C,isValid:P,isDirty:T,cleanup:X,start:F,validateErrors:k,validateWarnings:N,interacted:V}=da(e.storeFactory,n),ie=h.update,ee=h.set,K=Q=>ie(le=>Ct(Ir(Q(le),n.transform))),Ee=Q=>ee(Ct(Ir(Q,n.transform)));h.update=K,h.set=Ee;const I=ra({extender:o,config:n,addValidator:i,addTransformer:s,validateErrors:k,validateWarnings:N,_getCurrentExtenders:l,stores:{data:h,errors:m,warnings:_,touched:C,isValid:P,isValidating:u,isSubmitting:d,isDirty:T,interacted:V}}),{createSubmitHandler:M,handleSubmit:Z}=I.public;a=o.map(Q=>Q({stage:"SETUP",errors:m,warnings:_,touched:C,data:h,isDirty:T,isValid:P,isValidating:u,isSubmitting:d,interacted:V,config:n,addValidator:i,addTransformer:s,setFields:I.public.setFields,reset:I.public.reset,validate:I.public.validate,handleSubmit:Z,createSubmitHandler:M}));const he=Object.assign({config:n,stores:{data:h,touched:C,errors:m,warnings:_,isSubmitting:d,isValidating:u,isValid:P,isDirty:T,interacted:V},createSubmitHandler:M,handleSubmit:Z,helpers:Object.assign(Object.assign({},I.public),{addTransformer:s,addValidator:i}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},I.private),{form:Ie}=ia(he);return Object.assign({data:h,errors:m,warnings:_,touched:C,isValid:P,isSubmitting:d,isValidating:u,isDirty:T,interacted:V,form:Ie,cleanup:X,startStores:F},I.public)}function fa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}const Nt=[];function vs(n,e=ht){let t;const r=new Set;function i(a){if(Qn(n,a)&&(n=a,t)){const l=!Nt.length;for(const c of r)c[1](),Nt.push(c,n);if(l){for(let c=0;c<Nt.length;c+=2)Nt[c][0](Nt[c+1]);Nt.length=0}}}function s(a){i(a(n))}function o(a,l=ht){const c=[a,l];return r.add(c),r.size===1&&(t=e(i,s)||ht),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:s,subscribe:o}}function pa(n){const e=ha(n??{},{storeFactory:vs}),{cleanup:t,startStores:r}=e,i=fa(e,["cleanup","startStores"]);return xo(t),i}const ys={},bs={};function _i(n){const e=n.config;if(n.stage==="SETUP"){if(!e.__felteReporterSvelteId){const t=jr(21);e.__felteReporterSvelteId=t,ys[t]=n.errors,bs[t]=n.warnings}return{}}return n.form.hasAttribute("data-felte-reporter-svelte-id")||(n.form.dataset.felteReporterSvelteId=e.__felteReporterSvelteId),{onSubmitError(){const t=n&&n.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');t&&t.focus()}}}function ma(n){return!n||"preventFocusOnError"in n?e=>_i(e):_i(n)}const ga=n=>({}),vi=n=>({}),_a=n=>({messages:n&4}),yi=n=>({messages:n[2]});function va(n){let e;const t=n[9].placeholder,r=us(t,n,n[8],vi);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&256)&&ds(r,t,i,i[8],e?fs(t,i[8],s,ga):hs(i[8]),vi)},i(i){e||(je(r,i),e=!0)},o(i){Be(r,i),e=!1},d(i){r&&r.d(i)}}}function ya(n){let e;const t=n[9].default,r=us(t,n,n[8],yi);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&260)&&ds(r,t,i,i[8],e?fs(t,i[8],s,_a):hs(i[8]),yi)},i(i){e||(je(r,i),e=!0)},o(i){Be(r,i),e=!1},d(i){r&&r.d(i)}}}function ba(n){let e,t,r,i,s,o;const a=[ya,va],l=[];function c(d,u){return!d[3].placeholder||d[2]?0:1}return r=c(n),i=l[r]=a[r](n),{c(){e=A("div"),t=ne(),i.c(),s=hi(),this.h()},l(d){e=S(d,"DIV",{style:!0}),W(e).forEach(v),t=re(d),i.l(d),s=hi(),this.h()},h(){Mo(e,"display","none")},m(d,u){$(d,e,u),n[10](e),$(d,t,u),l[r].m(d,u),$(d,s,u),o=!0},p(d,[u]){let h=r;r=c(d),r===h?l[r].p(d,u):(ls(),Be(l[h],1,1,()=>{l[h]=null}),cs(),i=l[r],i?i.p(d,u):(i=l[r]=a[r](d),i.c()),je(i,1),i.m(s.parentNode,s))},i(d){o||(je(i),o=!0)},o(d){Be(i),o=!1},d(d){d&&(v(e),v(t),v(s)),n[10](null),l[r].d(d)}}}function wa(n,e,t){let r,i,s=ht,o=()=>(s(),s=Vo(h,T=>t(7,i=T)),h);n.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:l}=e;const c=Uo(a);let{level:d="error"}=e,{for:u}=e,h,m,_;function C(){return _.closest("form")}Br(()=>{t(6,m=ge(_,u));const X=C();o(X?d==="error"?t(0,h=ys[X.dataset.felteReporterSvelteId]):t(0,h=bs[X.dataset.felteReporterSvelteId]):t(0,h=vs({})))});function P(T){Pn[T?"unshift":"push"](()=>{_=T,t(1,_)})}return n.$$set=T=>{"level"in T&&t(4,d=T.level),"for"in T&&t(5,u=T.for),"$$scope"in T&&t(8,l=T.$$scope)},n.$$.update=()=>{n.$$.dirty&192&&t(2,r=m&&ze(i,m))},[h,_,r,c,d,u,m,i,l,a,P]}class Ea extends Fr{constructor(e){super(),$r(this,e,wa,ba,Qn,{level:4,for:5})}}const An=Ea;function Ia(n){return n.issues.reduce((e,t)=>{if(t.path){const r=t.path.map(({key:i})=>i).join(".");e.nested[r]=[...e.nested[r]||[],t.message]}else e.root=[...e.root||[],t.message];return e},{nested:{}})}var jt=class extends Error{issues;constructor(n){super(n[0].message),this.name="ValiError",this.issues=n}};function ws(n,e,t){let r=n;const i=[];for(const s of e)try{r=s(r,t)}catch(o){if(t.abortEarly||t.abortPipeEarly)throw o;i.push(...o.issues)}if(i.length)throw new jt(i);return r}function Ta(n,e){return[...n?.path||[],e]}function Es(n,e){const[t,r=[]]=!n||typeof n=="string"?[n,e]:[void 0,n];return{error:t,pipe:r}}function Is(n,e,t){const{error:r,pipe:i}=Es(e,t);return{schema:"object",object:n,async:!1,parse(s,o){if(!s||typeof s!="object"||s.toString()!=="[object Object]")throw new jt([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:s,...o}]);const a={},l=[];for(const[c,d]of Object.entries(n))try{const u=s[c];a[c]=d.parse(u,{...o,path:Ta(o,{schema:"object",input:s,key:c,value:u})})}catch(u){if(o?.abortEarly)throw u;l.push(...u.issues)}if(l.length)throw new jt(l);return ws(a,i,{...o,reason:"object"})}}}function Aa(n){return{schema:"optional",wrapped:n,async:!1,parse(e,t){return e===void 0?e:n.parse(e,t)}}}function Fe(n,e){const{error:t,pipe:r}=Es(n,e);return{schema:"string",async:!1,parse(i,s){if(typeof i!="string")throw new jt([{reason:"type",validation:"string",origin:"value",message:t||"Invalid type",input:i,...s}]);return ws(i,r,{...s,reason:"string"})}}}function Ar(n,e,t){return n.parse(e,t)}function hr(){return n=>n.trim()}function Sa(n,e){return(t,r)=>{if(t.length!==n)throw new jt([{validation:"length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}function bi(n,e){return(t,r)=>{if(t.length<n)throw new jt([{validation:"min_length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class Mn{constructor(e,t,r,i){if(isNaN(e)||isNaN(t))throw new Error(`Point is invalid: (${e}, ${t})`);this.x=+e,this.y=+t,this.pressure=r||0,this.time=i||Date.now()}distanceTo(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}equals(e){return this.x===e.x&&this.y===e.y&&this.pressure===e.pressure&&this.time===e.time}velocityFrom(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):0}}class Hr{constructor(e,t,r,i,s,o){this.startPoint=e,this.control2=t,this.control1=r,this.endPoint=i,this.startWidth=s,this.endWidth=o}static fromPoints(e,t){const r=this.calculateControlPoints(e[0],e[1],e[2]).c2,i=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new Hr(e[1],r,i,e[2],t.start,t.end)}static calculateControlPoints(e,t,r){const i=e.x-t.x,s=e.y-t.y,o=t.x-r.x,a=t.y-r.y,l={x:(e.x+t.x)/2,y:(e.y+t.y)/2},c={x:(t.x+r.x)/2,y:(t.y+r.y)/2},d=Math.sqrt(i*i+s*s),u=Math.sqrt(o*o+a*a),h=l.x-c.x,m=l.y-c.y,_=u/(d+u),C={x:c.x+h*_,y:c.y+m*_},P=t.x-C.x,T=t.y-C.y;return{c1:new Mn(l.x+P,l.y+T),c2:new Mn(c.x+P,c.y+T)}}length(){let t=0,r,i;for(let s=0;s<=10;s+=1){const o=s/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const c=a-r,d=l-i;t+=Math.sqrt(c*c+d*d)}r=a,i=l}return t}point(e,t,r,i,s){return t*(1-e)*(1-e)*(1-e)+3*r*(1-e)*(1-e)*e+3*i*(1-e)*e*e+s*e*e*e}}class Ca{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(e,t,r){this._et.addEventListener(e,t,r)}dispatchEvent(e){return this._et.dispatchEvent(e)}removeEventListener(e,t,r){this._et.removeEventListener(e,t,r)}}function ka(n,e=250){let t=0,r=null,i,s,o;const a=()=>{t=Date.now(),r=null,i=n.apply(s,o),r||(s=null,o=[])};return function(...c){const d=Date.now(),u=e-(d-t);return s=this,o=c,u<=0||u>e?(r&&(clearTimeout(r),r=null),t=d,i=n.apply(s,o),r||(s=null,o=[])):r||(r=window.setTimeout(a,u)),i}}class Un extends Ca{constructor(e,t={}){super(),this.canvas=e,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const i=r.changedTouches[0];this._strokeBegin(i)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const i=r.targetTouches[0];this._strokeMoveUpdate(i)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const s=r.changedTouches[0];this._strokeEnd(s)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||0,this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=t.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?ka(Un.prototype._strokeUpdate,this.throttle):Un.prototype._strokeUpdate,this._ctx=e.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:e,canvas:t}=this;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(e,t={}){return new Promise((r,i)=>{const s=new Image,o=t.ratio||window.devicePixelRatio||1,a=t.width||this.canvas.width/o,l=t.height||this.canvas.height/o,c=t.xOffset||0,d=t.yOffset||0;this._reset(this._getPointGroupOptions()),s.onload=()=>{this._ctx.drawImage(s,c,d,a,l),r()},s.onerror=u=>{i(u)},s.crossOrigin="anonymous",s.src=e,this._isEmpty=!1})}toDataURL(e="image/png",t){switch(e){case"image/svg+xml":return typeof t!="object"&&(t=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(t))}`;default:return typeof t!="number"&&(t=void 0),this.canvas.toDataURL(e,t)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const e=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!e?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(e,{clear:t=!0}={}){t&&this.clear(),this._fromData(e,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(e)}toData(){return this._data}_getPointGroupOptions(e){return{penColor:e&&"penColor"in e?e.penColor:this.penColor,dotSize:e&&"dotSize"in e?e.dotSize:this.dotSize,minWidth:e&&"minWidth"in e?e.minWidth:this.minWidth,maxWidth:e&&"maxWidth"in e?e.maxWidth:this.maxWidth,velocityFilterWeight:e&&"velocityFilterWeight"in e?e.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:e&&"compositeOperation"in e?e.compositeOperation:this.compositeOperation}}_strokeBegin(e){this.dispatchEvent(new CustomEvent("beginStroke",{detail:e}));const t=this._getPointGroupOptions(),r=Object.assign(Object.assign({},t),{points:[]});this._data.push(r),this._reset(t),this._strokeUpdate(e)}_strokeUpdate(e){if(this._data.length===0){this._strokeBegin(e);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:e}));const t=e.clientX,r=e.clientY,i=e.pressure!==void 0?e.pressure:e.force!==void 0?e.force:0,s=this._createPoint(t,r,i),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?s.distanceTo(l)<=this.minDistance:!1,d=this._getPointGroupOptions(o);if(!l||!(l&&c)){const u=this._addPoint(s,d);l?u&&this._drawCurve(u,d):this._drawDot(s,d),a.push({time:s.time,x:s.x,y:s.y,pressure:s.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:e}))}_strokeEnd(e){this._strokeUpdate(e),this.dispatchEvent(new CustomEvent("endStroke",{detail:e}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(e){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(e.minWidth+e.maxWidth)/2,this._ctx.fillStyle=e.penColor,this._ctx.globalCompositeOperation=e.compositeOperation}_createPoint(e,t,r){const i=this.canvas.getBoundingClientRect();return new Mn(e-i.left,t-i.top,r,new Date().getTime())}_addPoint(e,t){const{_lastPoints:r}=this;if(r.push(e),r.length>2){r.length===3&&r.unshift(r[0]);const i=this._calculateCurveWidths(r[1],r[2],t),s=Hr.fromPoints(r,i);return r.shift(),s}return null}_calculateCurveWidths(e,t,r){const i=r.velocityFilterWeight*t.velocityFrom(e)+(1-r.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(i,r),o={end:s,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=s,o}_strokeWidth(e,t){return Math.max(t.maxWidth/(e+1),t.minWidth)}_drawCurveSegment(e,t,r){const i=this._ctx;i.moveTo(e,t),i.arc(e,t,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(e,t){const r=this._ctx,i=e.endWidth-e.startWidth,s=Math.ceil(e.length())*2;r.beginPath(),r.fillStyle=t.penColor;for(let o=0;o<s;o+=1){const a=o/s,l=a*a,c=l*a,d=1-a,u=d*d,h=u*d;let m=h*e.startPoint.x;m+=3*u*a*e.control1.x,m+=3*d*l*e.control2.x,m+=c*e.endPoint.x;let _=h*e.startPoint.y;_+=3*u*a*e.control1.y,_+=3*d*l*e.control2.y,_+=c*e.endPoint.y;const C=Math.min(e.startWidth+c*i,t.maxWidth);this._drawCurveSegment(m,_,C)}r.closePath(),r.fill()}_drawDot(e,t){const r=this._ctx,i=t.dotSize>0?t.dotSize:(t.minWidth+t.maxWidth)/2;r.beginPath(),this._drawCurveSegment(e.x,e.y,i),r.closePath(),r.fillStyle=t.penColor,r.fill()}_fromData(e,t,r){for(const i of e){const{points:s}=i,o=this._getPointGroupOptions(i);if(s.length>1)for(let a=0;a<s.length;a+=1){const l=s[a],c=new Mn(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const d=this._addPoint(c,o);d&&t(d,o)}else this._reset(o),r(s[0],o)}}toSVG({includeBackgroundColor:e=!1}={}){const t=this._data,r=Math.max(window.devicePixelRatio||1,1),i=0,s=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${i} ${s} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),e&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(t,(c,{penColor:d})=>{const u=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const h=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;u.setAttribute("d",h),u.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),u.setAttribute("stroke",d),u.setAttribute("fill","none"),u.setAttribute("stroke-linecap","round"),l.appendChild(u)}},(c,{penColor:d,dotSize:u,minWidth:h,maxWidth:m})=>{const _=document.createElement("circle"),C=u>0?u:(h+m)/2;_.setAttribute("r",C.toString()),_.setAttribute("cx",c.x.toString()),_.setAttribute("cy",c.y.toString()),_.setAttribute("fill",d),l.appendChild(_)}),l.outerHTML}}const wi=Is({personalid:Fe([hr(),Sa(13)]),prefix:Aa(Fe()),firstname:Fe([hr(),bi(1)]),lastname:Fe([hr(),bi(1)]),signature:Fe("กรุณาลงชื่อ")});/**
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
 */const Ts=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Pa=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},As={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),r.push(t[d],t[u],t[h],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ts(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pa(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new Ra;const h=s<<2|a>>4;if(r.push(h),c!==64){const m=a<<4&240|c>>2;if(r.push(m),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ra extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Oa=function(n){const e=Ts(n);return As.encodeByteArray(e,!0)},Vn=function(n){return Oa(n).replace(/\./g,"")},Ss=function(n){try{return As.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Da(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Na=()=>Da().__FIREBASE_DEFAULTS__,La=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xa=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ss(n[1]);return e&&JSON.parse(e)},Wr=()=>{try{return Na()||La()||xa()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cs=n=>{var e,t;return(t=(e=Wr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ma=n=>{const e=Cs(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ks=()=>{var n;return(n=Wr())===null||n===void 0?void 0:n.config},Ps=n=>{var e;return(e=Wr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ua{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Va(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Vn(JSON.stringify(t)),Vn(JSON.stringify(o)),a].join(".")}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function $a(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ba(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ja(){const n=Ae();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ha(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const za="FirebaseError";class rt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=za,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qa(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new rt(i,a,r)}}function qa(n,e){return n.replace(Ga,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ga=/\{\$([^}]+)}/g;function Ka(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Ei(s)&&Ei(o)){if(!Fn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ei(n){return n!==null&&typeof n=="object"}/**
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
 */function pn(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ja(n,e){const t=new Ya(n,e);return t.subscribe.bind(t)}class Ya{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xa(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=fr),i.error===void 0&&(i.error=fr),i.complete===void 0&&(i.complete=fr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xa(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fr(){}/**
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
 */function Se(n){return n&&n._delegate?n._delegate:n}class kt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const It="[DEFAULT]";/**
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
 */class Za{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ua;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(el(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qa(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qa(n){return n===It?void 0:n}function el(n){return n.instantiationMode==="EAGER"}/**
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
 */class tl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Za(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const nl={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},rl=Y.INFO,il={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},sl=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=il[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=rl,this._logHandler=sl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const ol=(n,e)=>e.some(t=>n instanceof t);let Ii,Ti;function al(){return Ii||(Ii=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ll(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rs=new WeakMap,Sr=new WeakMap,Os=new WeakMap,pr=new WeakMap,qr=new WeakMap;function cl(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(pt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Rs.set(t,n)}).catch(()=>{}),qr.set(e,n),e}function ul(n){if(Sr.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Sr.set(n,e)}let Cr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Os.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dl(n){Cr=n(Cr)}function hl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(mr(this),e,...t);return Os.set(r,e.sort?e.sort():[e]),pt(r)}:ll().includes(n)?function(...e){return n.apply(mr(this),e),pt(Rs.get(this))}:function(...e){return pt(n.apply(mr(this),e))}}function fl(n){return typeof n=="function"?hl(n):(n instanceof IDBTransaction&&ul(n),ol(n,al())?new Proxy(n,Cr):n)}function pt(n){if(n instanceof IDBRequest)return cl(n);if(pr.has(n))return pr.get(n);const e=fl(n);return e!==n&&(pr.set(n,e),qr.set(e,n)),e}const mr=n=>qr.get(n);function pl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pt(o.result),l.oldVersion,l.newVersion,pt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ml=["get","getKey","getAll","getAllKeys","count"],gl=["put","add","delete","clear"],gr=new Map;function Ai(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gr.get(e))return gr.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=gl.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ml.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return gr.set(e,s),s}dl(n=>({...n,get:(e,t,r)=>Ai(e,t)||n.get(e,t,r),has:(e,t)=>!!Ai(e,t)||n.has(e,t)}));/**
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
 */class _l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vl(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function vl(n){const e=n.getComponent();return e?.type==="VERSION"}const kr="@firebase/app",Si="0.9.15";/**
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
 */const Pt=new zr("@firebase/app"),yl="@firebase/app-compat",bl="@firebase/analytics-compat",wl="@firebase/analytics",El="@firebase/app-check-compat",Il="@firebase/app-check",Tl="@firebase/auth",Al="@firebase/auth-compat",Sl="@firebase/database",Cl="@firebase/database-compat",kl="@firebase/functions",Pl="@firebase/functions-compat",Rl="@firebase/installations",Ol="@firebase/installations-compat",Dl="@firebase/messaging",Nl="@firebase/messaging-compat",Ll="@firebase/performance",xl="@firebase/performance-compat",Ml="@firebase/remote-config",Ul="@firebase/remote-config-compat",Vl="@firebase/storage",Fl="@firebase/storage-compat",$l="@firebase/firestore",Bl="@firebase/firestore-compat",jl="firebase",Hl="10.1.0";/**
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
 */const Pr="[DEFAULT]",Wl={[kr]:"fire-core",[yl]:"fire-core-compat",[wl]:"fire-analytics",[bl]:"fire-analytics-compat",[Il]:"fire-app-check",[El]:"fire-app-check-compat",[Tl]:"fire-auth",[Al]:"fire-auth-compat",[Sl]:"fire-rtdb",[Cl]:"fire-rtdb-compat",[kl]:"fire-fn",[Pl]:"fire-fn-compat",[Rl]:"fire-iid",[Ol]:"fire-iid-compat",[Dl]:"fire-fcm",[Nl]:"fire-fcm-compat",[Ll]:"fire-perf",[xl]:"fire-perf-compat",[Ml]:"fire-rc",[Ul]:"fire-rc-compat",[Vl]:"fire-gcs",[Fl]:"fire-gcs-compat",[$l]:"fire-fst",[Bl]:"fire-fst-compat","fire-js":"fire-js",[jl]:"fire-js-all"};/**
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
 */const $n=new Map,Rr=new Map;function zl(n,e){try{n.container.addComponent(e)}catch(t){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ht(n){const e=n.name;if(Rr.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Rr.set(e,n);for(const t of $n.values())zl(t,n);return!0}function Gr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const ql={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mt=new fn("app","Firebase",ql);/**
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
 */class Gl{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
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
 */const qt=Hl;function Ds(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pr,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mt.create("bad-app-name",{appName:String(i)});if(t||(t=ks()),!t)throw mt.create("no-options");const s=$n.get(i);if(s){if(Fn(t,s.options)&&Fn(r,s.config))return s;throw mt.create("duplicate-app",{appName:i})}const o=new tl(i);for(const l of Rr.values())o.addComponent(l);const a=new Gl(t,r,o);return $n.set(i,a),a}function Ns(n=Pr){const e=$n.get(n);if(!e&&n===Pr&&ks())return Ds();if(!e)throw mt.create("no-app",{appName:n});return e}function gt(n,e,t){var r;let i=(r=Wl[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Ht(new kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Kl="firebase-heartbeat-database",Jl=1,on="firebase-heartbeat-store";let _r=null;function Ls(){return _r||(_r=pl(Kl,Jl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(on)}}}).catch(n=>{throw mt.create("idb-open",{originalErrorMessage:n.message})})),_r}async function Yl(n){try{return await(await Ls()).transaction(on).objectStore(on).get(xs(n))}catch(e){if(e instanceof rt)Pt.warn(e.message);else{const t=mt.create("idb-get",{originalErrorMessage:e?.message});Pt.warn(t.message)}}}async function Ci(n,e){try{const r=(await Ls()).transaction(on,"readwrite");await r.objectStore(on).put(e,xs(n)),await r.done}catch(t){if(t instanceof rt)Pt.warn(t.message);else{const r=mt.create("idb-set",{originalErrorMessage:t?.message});Pt.warn(r.message)}}}function xs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xl=1024,Zl=30*24*60*60*1e3;class Ql{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ki();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Zl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ki(),{heartbeatsToSend:t,unsentEntries:r}=ec(this._heartbeatsCache.heartbeats),i=Vn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ki(){return new Date().toISOString().substring(0,10)}function ec(n,e=Xl){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pi(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Pi(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ha()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Yl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pi(n){return Vn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function nc(n){Ht(new kt("platform-logger",e=>new _l(e),"PRIVATE")),Ht(new kt("heartbeat",e=>new Ql(e),"PRIVATE")),gt(kr,Si,n),gt(kr,Si,"esm2017"),gt("fire-js","")}nc("");var rc="firebase",ic="10.1.0";/**
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
 */gt(rc,ic,"app");function Kr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ms(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sc=Ms,Us=new fn("auth","Firebase",Ms());/**
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
 */const Bn=new zr("@firebase/auth");function oc(n,...e){Bn.logLevel<=Y.WARN&&Bn.warn(`Auth (${qt}): ${n}`,...e)}function Rn(n,...e){Bn.logLevel<=Y.ERROR&&Bn.error(`Auth (${qt}): ${n}`,...e)}/**
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
 */function et(n,...e){throw Jr(n,...e)}function qe(n,...e){return Jr(n,...e)}function ac(n,e,t){const r=Object.assign(Object.assign({},sc()),{[e]:t});return new fn("auth","Firebase",r).create(e,{appName:n.name})}function Jr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Us.create(n,...e)}function R(n,e,...t){if(!n)throw Jr(e,...t)}function Ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Rn(e),new Error(e)}function tt(n,e){n||Ye(e)}/**
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
 */function Or(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lc(){return Ri()==="http:"||Ri()==="https:"}function Ri(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function cc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lc()||$a()||"connection"in navigator)?navigator.onLine:!0}function uc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Fa()||Ba()}get(){return cc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yr(n,e){tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Vs{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hc=new mn(3e4,6e4);function Xr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function gn(n,e,t,r,i={}){return Fs(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Vs.fetch()(Bs(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Fs(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},dc),e);try{const i=new fc(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sn(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ac(n,d,c);et(n,d)}}catch(i){if(i instanceof rt)throw i;et(n,"network-request-failed",{message:String(i)})}}async function $s(n,e,t,r,i={}){const s=await gn(n,e,t,r,i);return"mfaPendingCredential"in s&&et(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Bs(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?Yr(n.config,i):`${n.config.apiScheme}://${i}`}class fc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(qe(this.auth,"network-request-failed")),hc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=qe(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function pc(n,e){return gn(n,"POST","/v1/accounts:delete",e)}async function mc(n,e){return gn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function en(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gc(n,e=!1){const t=Se(n),r=await t.getIdToken(e),i=Zr(r);R(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:en(vr(i.auth_time)),issuedAtTime:en(vr(i.iat)),expirationTime:en(vr(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function vr(n){return Number(n)*1e3}function Zr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Rn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ss(t);return i?JSON.parse(i):(Rn("Failed to decode base64 JWT payload"),null)}catch(i){return Rn("Caught error parsing JWT payload as JSON",i?.toString()),null}}function _c(n){const e=Zr(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function an(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof rt&&vc(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vc({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class yc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class js{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=en(this.lastLoginAt),this.creationTime=en(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jn(n){var e;const t=n.auth,r=await n.getIdToken(),i=await an(n,mc(t,{idToken:r}));R(i?.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ec(s.providerUserInfo):[],a=wc(n.providerData,o),l=n.isAnonymous,c=!(n.email&&s.passwordHash)&&!a?.length,d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new js(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function bc(n){const e=Se(n);await jn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wc(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ec(n){return n.map(e=>{var{providerId:t}=e,r=Kr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ic(n,e){const t=await Fs(n,{},async()=>{const r=pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Bs(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Vs.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ic(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new ln;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(R(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function at(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Kr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new js(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await an(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gc(this,e)}reload(){return bc(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await jn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await an(this,pc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,a,l,c,d;const u=(r=t.displayName)!==null&&r!==void 0?r:void 0,h=(i=t.email)!==null&&i!==void 0?i:void 0,m=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=t.createdAt)!==null&&c!==void 0?c:void 0,X=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:k,isAnonymous:N,providerData:V,stsTokenManager:ie}=t;R(F&&ie,e,"internal-error");const ee=ln.fromJSON(this.name,ie);R(typeof F=="string",e,"internal-error"),at(u,e.name),at(h,e.name),R(typeof k=="boolean",e,"internal-error"),R(typeof N=="boolean",e,"internal-error"),at(m,e.name),at(_,e.name),at(C,e.name),at(P,e.name),at(T,e.name),at(X,e.name);const K=new At({uid:F,auth:e,email:h,emailVerified:k,displayName:u,isAnonymous:N,photoURL:_,phoneNumber:m,tenantId:C,stsTokenManager:ee,createdAt:T,lastLoginAt:X});return V&&Array.isArray(V)&&(K.providerData=V.map(Ee=>Object.assign({},Ee))),P&&(K._redirectEventId=P),K}static async _fromIdTokenResponse(e,t,r=!1){const i=new ln;i.updateFromServerResponse(t);const s=new At({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jn(s),s}}/**
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
 */const Oi=new Map;function Xe(n){tt(n instanceof Function,"Expected a class definition");let e=Oi.get(n);return e?(tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Oi.set(n,e),e)}/**
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
 */class Hs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hs.type="NONE";const Di=Hs;/**
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
 */function On(n,e,t){return`firebase:${n}:${e}:${t}`}class $t{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=On(this.userKey,i.apiKey,s),this.fullPersistenceKey=On("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new $t(Xe(Di),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xe(Di);const o=On(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const u=At._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new $t(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new $t(s,e,r))}}/**
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
 */function Ni(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ws(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ks(e))return"Blackberry";if(Js(e))return"Webos";if(Qr(e))return"Safari";if((e.includes("chrome/")||zs(e))&&!e.includes("edge/"))return"Chrome";if(Gs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Ws(n=Ae()){return/firefox\//i.test(n)}function Qr(n=Ae()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zs(n=Ae()){return/crios\//i.test(n)}function qs(n=Ae()){return/iemobile/i.test(n)}function Gs(n=Ae()){return/android/i.test(n)}function Ks(n=Ae()){return/blackberry/i.test(n)}function Js(n=Ae()){return/webos/i.test(n)}function nr(n=Ae()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Tc(n=Ae()){var e;return nr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ac(){return ja()&&document.documentMode===10}function Ys(n=Ae()){return nr(n)||Gs(n)||Js(n)||Ks(n)||/windows phone/i.test(n)||qs(n)}function Sc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xs(n,e=[]){let t;switch(n){case"Browser":t=Ni(Ae());break;case"Worker":t=`${Ni(Ae())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${r}`}async function Zs(n,e){return gn(n,"GET","/v2/recaptchaConfig",Xr(n,e))}function Li(n){return n!==void 0&&n.enterprise!==void 0}class Qs{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Cc(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function eo(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=qe("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Cc().appendChild(r)})}function kc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Pc="https://www.google.com/recaptcha/enterprise.js?render=",Rc="recaptcha-enterprise",Oc="NO_RECAPTCHA";class Dc{constructor(e){this.type=Rc,this.auth=_n(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Zs(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Qs(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Li(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Oc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!t&&Li(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}eo(Pc+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Nc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */class Lc{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xi(this),this.idTokenSubscription=new xi(this),this.beforeStateQueue=new Nc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Us,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xe(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await $t.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Se(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}async initializeRecaptchaConfig(){const e=await Zs(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Qs(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Dc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xe(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[Xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&oc(`Error while retrieving App Check token: ${t.error}`),t?.token}}function _n(n){return Se(n)}class xi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ja(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function xc(n,e){const t=Gr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Fn(s,e??{}))return i;et(i,"already-initialized")}return t.initialize({options:e})}function Mc(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Xe);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Uc(n,e,t){const r=_n(n);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!t?.disableWarnings,s=to(e),{host:o,port:a}=Vc(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Fc()}function to(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Vc(n){const e=to(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mi(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mi(o)}}}function Mi(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fc(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class no{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,t){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}/**
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
 */async function Bt(n,e){return $s(n,"POST","/v1/accounts:signInWithIdp",Xr(n,e))}/**
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
 */const $c="http://localhost";class Rt extends no{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):et("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Kr(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Rt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Bt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Bt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bt(e,t)}buildRequest(){const e={requestUri:$c,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=pn(t)}return e}}/**
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
 */class ro{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vn extends ro{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lt extends vn{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
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
 */class ct extends vn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ct.credential(t,r)}catch{return null}}}ct.GOOGLE_SIGN_IN_METHOD="google.com";ct.PROVIDER_ID="google.com";/**
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
 */class ut extends vn{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
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
 */class dt extends vn{constructor(){super("twitter.com")}static credential(e,t){return Rt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return dt.credential(t,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */async function Bc(n,e){return $s(n,"POST","/v1/accounts:signUp",Xr(n,e))}/**
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
 */class bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await At._fromIdTokenResponse(e,r,i),o=Ui(r);return new bt({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Ui(r);return new bt({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Ui(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function jc(n){var e;const t=_n(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new bt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Bc(t,{returnSecureToken:!0}),i=await bt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class Hn extends rt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Hn(e,t,r,i)}}function io(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hn._fromErrorAndOperation(n,s,e,r):s})}async function Hc(n,e,t=!1){const r=await an(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bt._forOperation(n,"link",r)}/**
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
 */async function Wc(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const s=await an(n,io(r,i,e,n),t);R(s.idToken,r,"internal-error");const o=Zr(s.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(n.uid===a,r,"user-mismatch"),bt._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&et(r,"user-mismatch"),s}}/**
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
 */async function zc(n,e,t=!1){const r="signIn",i=await io(n,r,e),s=await bt._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function qc(n,e,t,r){return Se(n).onIdTokenChanged(e,t,r)}function Gc(n,e,t){return Se(n).beforeAuthStateChanged(e,t)}function Kc(n,e,t,r){return Se(n).onAuthStateChanged(e,t,r)}const Wn="__sak";/**
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
 */class so{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wn,"1"),this.storage.removeItem(Wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Jc(){const n=Ae();return Qr(n)||nr(n)}const Yc=1e3,Xc=10;class oo extends so{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jc()&&Sc(),this.fallbackToPolling=Ys(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ac()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Xc):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Yc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}oo.type="LOCAL";const Zc=oo;/**
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
 */class ao extends so{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ao.type="SESSION";const lo=ao;/**
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
 */function Qc(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new rr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await Qc(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
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
 */function ei(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class eu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ei("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ge(){return window}function tu(n){Ge().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function co(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function nu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ru(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function iu(){return co()?self:null}/**
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
 */const uo="firebaseLocalStorageDb",su=1,zn="firebaseLocalStorage",ho="fbase_key";class yn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ir(n,e){return n.transaction([zn],e?"readwrite":"readonly").objectStore(zn)}function ou(){const n=indexedDB.deleteDatabase(uo);return new yn(n).toPromise()}function Dr(){const n=indexedDB.open(uo,su);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(zn,{keyPath:ho})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(zn)?e(r):(r.close(),await ou(),e(await Dr()))})})}async function Vi(n,e,t){const r=ir(n,!0).put({[ho]:e,value:t});return new yn(r).toPromise()}async function au(n,e){const t=ir(n,!1).get(e),r=await new yn(t).toPromise();return r===void 0?null:r.value}function Fi(n,e){const t=ir(n,!0).delete(e);return new yn(t).toPromise()}const lu=800,cu=3;class fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>cu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return co()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(iu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nu(),!this.activeServiceWorker)return;this.sender=new eu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ru()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dr();return await Vi(e,Wn,"1"),await Fi(e,Wn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vi(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>au(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ir(i,!1).getAll();return new yn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fo.type="LOCAL";const uu=fo;new mn(3e4,6e4);/**
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
 */function du(n,e){return e?Xe(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ti extends no{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hu(n){return zc(n.auth,new ti(n),n.bypassAuthState)}function fu(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Wc(t,new ti(n),n.bypassAuthState)}async function pu(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Hc(t,new ti(n),n.bypassAuthState)}/**
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
 */class po{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hu;case"linkViaPopup":case"linkViaRedirect":return pu;case"reauthViaPopup":case"reauthViaRedirect":return fu;default:et(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mu=new mn(2e3,1e4);class Ut extends po{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=ei();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mu.get())};e()}}Ut.currentPopupAction=null;/**
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
 */const gu="pendingRedirect",Dn=new Map;class _u extends po{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Dn.get(this.auth._key());if(!e){try{const r=await vu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Dn.set(this.auth._key(),e)}return this.bypassAuthState||Dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vu(n,e){const t=wu(e),r=bu(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function yu(n,e){Dn.set(n._key(),e)}function bu(n){return Xe(n._redirectPersistence)}function wu(n){return On(gu,n.config.apiKey,n.name)}async function Eu(n,e,t=!1){const r=_n(n),i=du(r,e),o=await new _u(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Iu=10*60*1e3;class Tu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Au(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!mo(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(qe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Iu&&this.cachedEventUids.clear(),this.cachedEventUids.has($i(e))}saveEventToCache(e){this.cachedEventUids.add($i(e)),this.lastProcessedEventTime=Date.now()}}function $i(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function mo({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Au(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mo(n);default:return!1}}/**
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
 */async function Su(n,e={}){return gn(n,"GET","/v1/projects",e)}/**
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
 */const Cu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ku=/^https?/;async function Pu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Su(n);for(const t of e)try{if(Ru(t))return}catch{}et(n,"unauthorized-domain")}function Ru(n){const e=Or(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ku.test(t))return!1;if(Cu.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ou=new mn(3e4,6e4);function Bi(){const n=Ge().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Du(n){return new Promise((e,t)=>{var r,i,s;function o(){Bi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bi(),t(qe(n,"network-request-failed"))},timeout:Ou.get()})}if(!((i=(r=Ge().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ge().gapi)===null||s===void 0)&&s.load)o();else{const a=kc("iframefcb");return Ge()[a]=()=>{gapi.load?o():t(qe(n,"network-request-failed"))},eo(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Nn=null,e})}let Nn=null;function Nu(n){return Nn=Nn||Du(n),Nn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Lu=new mn(5e3,15e3),xu="__/auth/iframe",Mu="emulator/auth/iframe",Uu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fu(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yr(e,Mu):`https://${n.config.authDomain}/${xu}`,r={apiKey:e.apiKey,appName:n.name,v:qt},i=Vu.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${pn(r).slice(1)}`}async function $u(n){const e=await Nu(n),t=Ge().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:Fu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uu,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qe(n,"network-request-failed"),a=Ge().setTimeout(()=>{s(o)},Lu.get());function l(){Ge().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Bu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ju=500,Hu=600,Wu="_blank",zu="http://localhost";class ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qu(n,e,t,r=ju,i=Hu){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bu),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ae().toLowerCase();t&&(a=zs(c)?Wu:t),Ws(c)&&(e=e||zu,l.scrollbars="yes");const d=Object.entries(l).reduce((h,[m,_])=>`${h}${m}=${_},`,"");if(Tc(c)&&a!=="_self")return Gu(e||"",a),new ji(null);const u=window.open(e||"",a,d);R(u,n,"popup-blocked");try{u.focus()}catch{}return new ji(u)}function Gu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Ku="__/auth/handler",Ju="emulator/auth/handler",Yu=encodeURIComponent("fac");async function Hi(n,e,t,r,i,s){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:qt,eventId:i};if(e instanceof ro){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ka(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof vn){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${Yu}=${encodeURIComponent(l)}`:"";return`${Xu(n)}?${pn(a).slice(1)}${c}`}function Xu({config:n}){return n.emulator?Yr(n,Ju):`https://${n.authDomain}/${Ku}`}/**
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
 */const yr="webStorageSupport";class Zu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lo,this._completeRedirectFn=Eu,this._overrideRedirectResult=yu}async _openPopup(e,t,r,i){var s;tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Hi(e,t,r,Or(),i);return qu(e,o,ei())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Hi(e,t,r,Or(),i);return tu(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(tt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await $u(e),r=new Tu(e);return t.register("authEvent",i=>(R(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(yr,{type:yr},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[yr];o!==void 0&&t(!!o),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ys()||Qr()||nr()}}const Qu=Zu;var Wi="@firebase/auth",zi="1.1.0";/**
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
 */class ed{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function td(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nd(n){Ht(new kt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xs(n)},c=new Lc(r,i,s,l);return Mc(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ht(new kt("auth-internal",e=>{const t=_n(e.getProvider("auth").getImmediate());return(r=>new ed(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gt(Wi,zi,td(n)),gt(Wi,zi,"esm2017")}/**
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
 */const rd=5*60,id=Ps("authIdTokenMaxAge")||rd;let qi=null;const sd=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>id)return;const i=t?.token;qi!==i&&(qi=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function od(n=Ns()){const e=Gr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xc(n,{popupRedirectResolver:Qu,persistence:[uu,Zc,lo]}),r=Ps("authTokenSyncURL");if(r){const s=sd(r);Gc(t,s,()=>s(t.currentUser)),qc(t,o=>s(o))}const i=Cs("auth");return i&&Uc(t,`http://${i}`),t}nd("Browser");/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let Gt="10.1.0";/**
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
 */const Wt=new zr("@firebase/firestore");function qn(n,...e){if(Wt.logLevel<=Y.DEBUG){const t=e.map(ni);Wt.debug(`Firestore (${Gt}): ${n}`,...t)}}function go(n,...e){if(Wt.logLevel<=Y.ERROR){const t=e.map(ni);Wt.error(`Firestore (${Gt}): ${n}`,...t)}}function _o(n,...e){if(Wt.logLevel<=Y.WARN){const t=e.map(ni);Wt.warn(`Firestore (${Gt}): ${n}`,...t)}}function ni(n){if(typeof n=="string")return n;try{/**
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
 */function _e(n="Unexpected state"){const e=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: `+n;throw go(e),new Error(e)}function Gn(n,e){n||_e()}function ad(n,e){return n}/**
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
 */const Gi="ok",ld="cancelled",tn="unknown",z="invalid-argument",cd="deadline-exceeded",ud="not-found",dd="permission-denied",Nr="unauthenticated",hd="resource-exhausted",Ot="failed-precondition",fd="aborted",pd="out-of-range",md="unimplemented",gd="internal",_d="unavailable";class D extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ke.UNAUTHENTICATED))}shutdown(){}}class yd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bd{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Gn(typeof e.accessToken=="string"),new vo(e.accessToken,new ke(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class wd{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class Ed{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new wd(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Td{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Gn(typeof e.token=="string"),new Id(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class Ad{constructor(e,t,r,i,s,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Kn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}class cn{constructor(e,t,r){t===void 0?t=0:t>e.length&&_e(),r===void 0?r=e.length-t:r>e.length-t&&_e(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Te extends cn{construct(e,t,r){return new Te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(z,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new Te(t)}static emptyPath(){return new Te([])}}const Sd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends cn{construct(e,t,r){return new $e(e,t,r)}static isValidIdentifier(e){return Sd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(z,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(z,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(z,"Unterminated ` in path: "+e);return new $e(t)}static emptyPath(){return new $e([])}}/**
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
 */class We{constructor(e){this.path=e}static fromPath(e){return new We(Te.fromString(e))}static fromName(e){return new We(Te.fromString(e).popFirst(5))}static empty(){return new We(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new We(new Te(e.slice()))}}/**
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
 */function yo(n,e,t){if(!t)throw new D(z,`Function ${n}() cannot be called with an empty ${e}.`)}function Ki(n){if(!We.isDocumentKey(n))throw new D(z,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ji(n){if(We.isDocumentKey(n))throw new D(z,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":_e()}function bo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new D(z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ri(n);throw new D(z,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function wo(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let Cn=null;function Cd(){return Cn===null?Cn=function(){return 268435456+Math.round(2147483648*Math.random())}():Cn++,"0x"+Cn.toString(16)}function Jn(n){return n===0&&1/n==-1/0}/**
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
 */const kd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var Yi,H;function Xi(n){if(n===void 0)return go("RPC_ERROR","HTTP error has no status"),tn;switch(n){case 200:return Gi;case 400:return Ot;case 401:return Nr;case 403:return dd;case 404:return ud;case 409:return fd;case 416:return pd;case 429:return hd;case 499:return ld;case 500:return tn;case 501:return md;case 503:return _d;case 504:return cd;default:return n>=200&&n<300?Gi:n>=400&&n<500?Ot:n>=500&&n<600?gd:tn}}/**
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
 */(H=Yi||(Yi={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";class Pd extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(t,r,i,s,o){const a=Cd(),l=this.I(t,r);qn("RestConnection",`Sending RPC '${t}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(c,s,o),this.p(t,l,c,i).then(d=>(qn("RestConnection",`Received RPC '${t}' ${a}: `,d),d),d=>{throw _o("RestConnection",`RPC '${t}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}g(t,r,i,s,o,a){return this.R(t,r,i,s,o)}V(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}I(t,r){const i=kd[t];return`${this.m}/v1/${r}:${i}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new D(Xi(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(s=l?.error)===null||s===void 0?void 0:s.message;throw new D(Xi(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function Rd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Od{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Rd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function un(n,e){return n<e?-1:n>e?1:0}function Eo(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */function Zi(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class Dd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dd("Invalid base64 string: "+s):s}}(e);return new nt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return un(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const Nd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(n){if(Gn(!!n),typeof n=="string"){let e=0;const t=Nd.exec(n);if(Gn(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(n.seconds),nanos:He(n.nanos)}}function He(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qi(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
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
 */class Ze{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new D(z,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new D(z,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new D(z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(z,"Timestamp seconds out of range: "+e)}static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ze(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?un(this.nanoseconds,e.nanoseconds):un(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function Ld(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function es(n){const e=Lr(n.mapValue.fields.__local_write_time__.timestampValue);return new Ze(e.seconds,e.nanos)}function ts(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ld(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:_e()}function xr(n,e){if(n===e)return!0;const t=ts(n);if(t!==ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return es(n).isEqual(es(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Lr(i.timestampValue),a=Lr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Qi(i.bytesValue).isEqual(Qi(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),a=He(s.doubleValue);return o===a?Jn(o)===Jn(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Eo(n.arrayValue.values||[],e.arrayValue.values||[],xr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Zi(o)!==Zi(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xr(o[l],a[l])))return!1;return!0}(n,e);default:return _e()}}function br(n){return!!n&&"mapValue"in n}function nn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return sr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=nn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=nn(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class Yn{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new Yn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Yn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kn(this.root,e,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kn(this.root,e,this.comparator,!0)}}class kn{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new be(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,t,r,i,s){return this}insert(e,t,r){return new be(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xn{constructor(e){this.comparator=e,this.data=new Yn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ns(this.data.getIterator())}getIteratorFrom(e){return new ns(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Xn)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Xn(this.comparator);return t.data=e,t}}class ns{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new Xn($e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!br(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=nn(t)}setAll(e){let t=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=nn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());br(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){sr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(nn(this.value))}}/**
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
 */class xd{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.startAt,this.endAt}}/**
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
 */function Md(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(i)?"-0":i}}(n,e)}/**
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
 */class or{constructor(){this._=void 0}}class Io extends or{}class Ud extends or{constructor(e){super(),this.elements=e}}class Vd extends or{constructor(e){super(),this.elements=e}}class Fd extends or{constructor(e,t){super(),this.serializer=e,this.$=t}}/**
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
 */class $d{constructor(e,t){this.field=e,this.transform=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ar{}class To extends ar{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ii extends ar{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class Ao extends ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bd extends ar{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class jd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Mr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Wd(n,e){return Mr(n,e.toTimestamp())}function So(n,e){return function(r){return new Te(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Ur(n,e){return So(n.databaseId,e.path)}function zd(n){return new Te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function rs(n,e,t){return{name:Ur(n,e),fields:t.value.mapValue.fields}}function qd(n,e){let t;if(e instanceof To)t={update:rs(n,e.key,e.value)};else if(e instanceof Ao)t={delete:Ur(n,e.key)};else if(e instanceof ii)t={update:rs(n,e.key,e.data),updateMask:Gd(e.fieldMask)};else{if(!(e instanceof Bd))return _e();t={verify:Ur(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Io)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ud)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vd)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Fd)return{fieldPath:o.field.canonicalString(),increment:a.$};throw _e()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Wd(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:_e()}(n,e.precondition)),t}function Gd(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}/**
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
 */function si(n){return new jd(n,!0)}/**
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
 */class Kd extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.Z=!1}X(){if(this.Z)throw new D(Ot,"The client has already been terminated.")}R(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,t,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Nr&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(tn,i.toString())})}g(e,t,r,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,t,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Nr&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(tn,s.toString())})}terminate(){this.Z=!0}}async function Jd(n,e){const t=ad(n),r=zd(t.serializer)+"/documents",i={writes:e.map(s=>qd(t.serializer,s))};await t.R("Commit",r,i)}/**
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
 */const rn=new Map;function Yd(n){if(n._terminated)throw new D(Ot,"The client has already been terminated.");if(!rn.has(n)){qn("ComponentProvider","Initializing Datastore");const e=function(s){return new Pd(s,fetch.bind(null))}(function(s,o,a,l){return new Ad(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,wo(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=si(n._databaseId),r=function(s,o,a,l){return new Kd(s,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);rn.set(n,r)}return rn.get(n)}class is{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new D(z,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wo((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(z,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(z,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(z,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bn{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new is({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(Ot,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(Ot,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new is(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vd;switch(r.type){case"firstParty":return new Ed(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=rn.get(t);r&&(qn("ComponentProvider","Removing Datastore"),rn.delete(t),r.terminate())}(this),Promise.resolve()}}function Xd(n,e){const t=typeof n=="object"?n:Ns(),r=typeof n=="string"?n:e||"(default)",i=Gr(t,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Ma("firestore");s&&Zd(i,...s)}return i}function Zd(n,e,t,r={}){var i;const s=(n=bo(n,bn))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ke.MOCK_USER;else{a=Va(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new D(z,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ke(c)}n._authCredentials=new yd(new vo(a,l))}}/**
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
 */class oi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oi(this.firestore,e,this._query)}}class Qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _t(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}}class _t extends oi{constructor(e,t,r){super(e,t,function(s){return new xd(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new We(e))}withConverter(e){return new _t(this.firestore,e,this._path)}}function Qd(n,e,...t){if(n=Se(n),yo("collection","path",e),n instanceof bn){const r=Te.fromString(e,...t);return Ji(r),new _t(n,null,r)}{if(!(n instanceof Qe||n instanceof _t))throw new D(z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return Ji(r),new _t(n.firestore,null,r)}}function ss(n,e,...t){if(n=Se(n),arguments.length===1&&(e=Od.C()),yo("doc","path",e),n instanceof bn){const r=Te.fromString(e,...t);return Ki(r),new Qe(n,null,new We(r))}{if(!(n instanceof Qe||n instanceof _t))throw new D(z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return Ki(r),new Qe(n.firestore,n instanceof _t?n.converter:null,new We(r))}}/**
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
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(nt.fromBase64String(e))}catch(t){throw new D(z,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dn(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ai{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new D(z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lr{constructor(e){this._methodName=e}}/**
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
 */class Co{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new D(z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new D(z,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return un(this._lat,e._lat)||un(this._long,e._long)}}/**
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
 */const eh=/^__.*__$/;class th{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,t,this.fieldTransforms):new To(e,this.data,t,this.fieldTransforms)}}class ko{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new ii(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Po(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class li{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.et(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(e){return new li(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.nt({path:r,st:!1});return i.ot(e),i}ut(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.nt({path:r,st:!1});return i.et(),i}_t(e){return this.nt({path:void 0,st:!0})}lt(e){return Zn(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.ht)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(Po(this.rt)&&eh.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class nh{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||si(e)}dt(e,t,r,i=!1){return new li({rt:e,methodName:t,ht:r,path:$e.emptyPath(),st:!1,ct:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rh(n){const e=n._freezeSettings(),t=si(n._databaseId);return new nh(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ih(n,e,t,r,i,s={}){const o=n.dt(s.merge||s.mergeFields?2:0,e,t,i);ui("Data must be an object, but it was:",o,r);const a=Ro(r,o);let l,c;if(s.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const u of s.mergeFields){const h=Vr(e,u,t);if(!o.contains(h))throw new D(z,`Field '${h}' is specified in your field mask but missing from your input data.`);No(d,h)||d.push(h)}l=new Dt(d),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new th(new zt(a),l,c)}class cr extends lr{_toFieldTransform(e){if(e.rt!==2)throw e.rt===1?e.lt(`${this._methodName}() can only appear at the top level of your update data`):e.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cr}}class ci extends lr{_toFieldTransform(e){return new $d(e.path,new Io)}isEqual(e){return e instanceof ci}}function sh(n,e,t,r){const i=n.dt(1,e,t);ui("Data must be an object, but it was:",i,r);const s=[],o=zt.empty();sr(r,(l,c)=>{const d=Do(e,l,t);c=Se(c);const u=i.ut(d);if(c instanceof cr)s.push(d);else{const h=ur(c,u);h!=null&&(s.push(d),o.set(d,h))}});const a=new Dt(s);return new ko(o,a,i.fieldTransforms)}function oh(n,e,t,r,i,s){const o=n.dt(1,e,t),a=[Vr(e,r,t)],l=[i];if(s.length%2!=0)throw new D(z,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Vr(e,s[h])),l.push(s[h+1]);const c=[],d=zt.empty();for(let h=a.length-1;h>=0;--h)if(!No(c,a[h])){const m=a[h];let _=l[h];_=Se(_);const C=o.ut(m);if(_ instanceof cr)c.push(m);else{const P=ur(_,C);P!=null&&(c.push(m),d.set(m,P))}}const u=new Dt(c);return new ko(d,u,o.fieldTransforms)}function ur(n,e){if(Oo(n=Se(n)))return ui("Unsupported field value:",e,n),Ro(n,e);if(n instanceof lr)return function(r,i){if(!Po(i.rt))throw i.lt(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.lt(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.rt!==4)throw e.lt("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ur(a,i._t(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Md(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ze.fromDate(r);return{timestampValue:Mr(i.serializer,s)}}if(r instanceof Ze){const s=new Ze(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mr(i.serializer,s)}}if(r instanceof Co)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof dn)return{bytesValue:Hd(i.serializer,r._byteString)};if(r instanceof Qe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.lt(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:So(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.lt(`Unsupported field value: ${ri(r)}`)}(n,e)}function Ro(n,e){const t={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(n,(r,i)=>{const s=ur(i,e.it(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Oo(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ze||n instanceof Co||n instanceof dn||n instanceof Qe||n instanceof lr)}function ui(n,e,t){if(!Oo(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ri(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function Vr(n,e,t){if((e=Se(e))instanceof ai)return e._internalPath;if(typeof e=="string")return Do(n,e);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,t)}const ah=new RegExp("[~\\*/\\[\\]]");function Do(n,e,t){if(e.search(ah)>=0)throw Zn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ai(...e.split("."))._internalPath}catch{throw Zn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zn(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(z,a+n+l)}function No(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */function lh(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function os(){return new ci("serverTimestamp")}/**
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
 */class ch{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=rh(e)}set(e,t,r){this._verifyNotCommitted();const i=wr(e,this._firestore),s=lh(i.converter,t,r),o=ih(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,St.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=wr(e,this._firestore);let o;return o=typeof(t=Se(t))=="string"||t instanceof ai?oh(this._dataReader,"WriteBatch.update",s._key,t,r,i):sh(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,St.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=wr(e,this._firestore);return this._mutations=this._mutations.concat(new Ao(t._key,St.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(Ot,"A write batch can no longer be used after commit() has been called.")}}function wr(n,e){if((n=Se(n)).firestore!==e)throw new D(z,"Provided document reference is from a different Firestore instance.");return n}function uh(n){const e=Yd(n=bo(n,bn));return new ch(n,t=>Jd(e,t))}(function(){(function(t){Gt=t})(`${qt}_lite`),Ht(new kt("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new bn(new bd(e.getProvider("auth-internal")),new Td(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new D(z,'"projectId" not provided in firebase.initializeApp.');return new Kn(a.options.projectId,l)}(i,t),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),gt("firestore-lite","4.1.0",""),gt("firestore-lite","4.1.0","esm2017")})();const dh=Is({apiKey:Fe(),authDomain:Fe(),projectId:Fe(),storageBucket:Fe(),messagingSenderId:Fe(),appId:Fe()}),hh="documents",fh="users",ph=Ar(dh,JSON.parse('{"apiKey":"AIzaSyBYGz_WUwzIpZYGf4SN4jo5xqp3MNEC8FA","authDomain":"conforall.firebaseapp.com","projectId":"conforall","storageBucket":"conforall.appspot.com","messagingSenderId":"289133639309","appId":"1:289133639309:web:b6ddf29928a923028214c4"}')),mh=Ds(ph),Er=Xd(mh),as=od(),gh=n=>new Promise((e,t)=>{Kc(n,r=>r?e(r):t())}),_h=async n=>{await jc(as);const e=await gh(as),t=uh(Er),r=ss(Qd(Er,hh)),i=ss(Er,fh,e.uid);return t.set(r,{...n,uid:e.uid,timestamp:os()}),t.set(i,{timestamp:os()},{merge:!0}),t.commit()};function vh(n){let e,t='<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>',r,i,s,o,a,l,c,d;return{c(){e=A("label"),e.innerHTML=t,r=ne(),i=A("input"),o=ne(),a=A("div"),l=A("span"),c=vt("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(u){e=S(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),de(e)!=="svelte-5u2x8b"&&(e.innerHTML=t),r=re(u),i=S(u,"INPUT",{type:!0,name:!0,class:!0}),o=re(u),a=S(u,"DIV",{class:!0});var h=W(a);l=S(h,"SPAN",{class:!0});var m=W(l);c=yt(m,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),m.forEach(v),h.forEach(v),this.h()},h(){p(e,"class","label"),p(e,"for","personalid"),p(i,"type","string"),p(i,"name","personalid"),p(i,"class",s="input rounded-sm bg-base-200 "+(n[18]?"input-error":"")),i.disabled=n[4],p(l,"class",d="label-text-alt "+(n[18]?"text-error":"")),p(a,"class","label")},m(u,h){$(u,e,h),$(u,r,h),$(u,i,h),$(u,o,h),$(u,a,h),E(a,l),E(l,c)},p(u,h){h&262144&&s!==(s="input rounded-sm bg-base-200 "+(u[18]?"input-error":""))&&p(i,"class",s),h&16&&(i.disabled=u[4]),h&262144&&d!==(d="label-text-alt "+(u[18]?"text-error":""))&&p(l,"class",d)},d(u){u&&(v(e),v(r),v(i),v(o),v(a))}}}function yh(n){let e,t='<span class="label-text heading-03">ชื่อ*</span>',r,i,s,o,a,l,c,d;return{c(){e=A("label"),e.innerHTML=t,r=ne(),i=A("input"),o=ne(),a=A("div"),l=A("span"),c=vt("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(u){e=S(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),de(e)!=="svelte-i2bah3"&&(e.innerHTML=t),r=re(u),i=S(u,"INPUT",{type:!0,name:!0,class:!0}),o=re(u),a=S(u,"DIV",{class:!0});var h=W(a);l=S(h,"SPAN",{class:!0});var m=W(l);c=yt(m,"ระบุชื่อจริงเป็นภาษาไทย"),m.forEach(v),h.forEach(v),this.h()},h(){p(e,"class","label"),p(e,"for","firstname"),p(i,"type","text"),p(i,"name","firstname"),p(i,"class",s="input rounded-sm bg-base-200 w-full "+(n[18]?"input-error":"")),i.disabled=n[4],p(l,"class",d="label-text-alt "+(n[18]?"text-error":"")),p(a,"class","label")},m(u,h){$(u,e,h),$(u,r,h),$(u,i,h),$(u,o,h),$(u,a,h),E(a,l),E(l,c)},p(u,h){h&262144&&s!==(s="input rounded-sm bg-base-200 w-full "+(u[18]?"input-error":""))&&p(i,"class",s),h&16&&(i.disabled=u[4]),h&262144&&d!==(d="label-text-alt "+(u[18]?"text-error":""))&&p(l,"class",d)},d(u){u&&(v(e),v(r),v(i),v(o),v(a))}}}function bh(n){let e,t='<span class="label-text heading-03">นามสกุล*</span>',r,i,s,o,a,l,c,d;return{c(){e=A("label"),e.innerHTML=t,r=ne(),i=A("input"),o=ne(),a=A("div"),l=A("span"),c=vt("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(u){e=S(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),de(e)!=="svelte-1lqzuwh"&&(e.innerHTML=t),r=re(u),i=S(u,"INPUT",{type:!0,name:!0,class:!0}),o=re(u),a=S(u,"DIV",{class:!0});var h=W(a);l=S(h,"SPAN",{class:!0});var m=W(l);c=yt(m,"ระบุนามสกุลเป็นภาษาไทย"),m.forEach(v),h.forEach(v),this.h()},h(){p(e,"class","label"),p(e,"for","lastname"),p(i,"type","text"),p(i,"name","lastname"),p(i,"class",s="input rounded-sm bg-base-200 "+(n[18]?"input-error":"")),i.disabled=n[4],p(l,"class",d="label-text-alt "+(n[18]?"text-error":"")),p(a,"class","label")},m(u,h){$(u,e,h),$(u,r,h),$(u,i,h),$(u,o,h),$(u,a,h),E(a,l),E(l,c)},p(u,h){h&262144&&s!==(s="input rounded-sm bg-base-200 "+(u[18]?"input-error":""))&&p(i,"class",s),h&16&&(i.disabled=u[4]),h&262144&&d!==(d="label-text-alt "+(u[18]?"text-error":""))&&p(l,"class",d)},d(u){u&&(v(e),v(r),v(i),v(o),v(a))}}}function wh(n){let e,t,r=`คลิกเพื่อกรอกลายเซ็น
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z" fill="black"></path><path d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z" fill="black"></path></svg>`,i,s;return{c(){e=A("div"),t=A("button"),t.innerHTML=r,this.h()},l(o){e=S(o,"DIV",{class:!0});var a=W(e);t=S(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),de(t)!=="svelte-u454pn"&&(t.innerHTML=r),a.forEach(v),this.h()},h(){p(t,"type","button"),p(t,"class","btn bg-base-100 heading-03 shadow-xl"),p(e,"class","absolute w-full h-full flex justify-center items-center top-0 left-0")},m(o,a){$(o,e,a),E(e,t),i||(s=Ln(t,"click",n[10]),i=!0)},p:ht,d(o){o&&v(e),i=!1,s()}}}function Eh(n){let e,t=`ล้าง
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z" fill="#8054FF"></path></svg>`,r,i;return{c(){e=A("button"),e.innerHTML=t,this.h()},l(s){e=S(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),de(e)!=="svelte-1auzjm1"&&(e.innerHTML=t),this.h()},h(){p(e,"type","button"),p(e,"class","btn btn-outline btn-accent absolute right-[10px] bottom-4")},m(s,o){$(s,e,o),r||(i=Ln(e,"click",n[8]),r=!0)},p:ht,d(s){s&&v(e),r=!1,i()}}}function Ih(n){let e,t,r=(n[18]||"")+"",i;return{c(){e=A("div"),t=A("span"),i=vt(r),this.h()},l(s){e=S(s,"DIV",{class:!0});var o=W(e);t=S(o,"SPAN",{class:!0});var a=W(t);i=yt(a,r),a.forEach(v),o.forEach(v),this.h()},h(){p(t,"class","label-text-alt text-error"),p(e,"class","label")},m(s,o){$(s,e,o),E(e,t),E(t,i)},p(s,o){o&262144&&r!==(r=(s[18]||"")+"")&&Bo(i,r)},d(s){s&&v(e)}}}function Th(n){let e,t;return{c(){e=vt(`กำลังลงชื่อ...
				`),t=A("span"),this.h()},l(r){e=yt(r,`กำลังลงชื่อ...
				`),t=S(r,"SPAN",{class:!0}),W(t).forEach(v),this.h()},h(){p(t,"class","loading loading-spinner")},m(r,i){$(r,e,i),$(r,t,i)},d(r){r&&(v(e),v(t))}}}function Ah(n){let e,t,r,i,s;return{c(){e=vt(`ลงชื่อเลย
				`),t=xt("svg"),r=xt("path"),i=xt("path"),s=xt("path"),this.h()},l(o){e=yt(o,`ลงชื่อเลย
				`),t=Mt(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=W(t);r=Mt(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),W(r).forEach(v),i=Mt(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),W(i).forEach(v),s=Mt(a,"path",{d:!0,fill:!0}),W(s).forEach(v),a.forEach(v),this.h()},h(){p(r,"fill-rule","evenodd"),p(r,"clip-rule","evenodd"),p(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),p(r,"fill","white"),p(i,"fill-rule","evenodd"),p(i,"clip-rule","evenodd"),p(i,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),p(i,"fill","white"),p(s,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),p(s,"fill","white"),p(t,"xmlns","http://www.w3.org/2000/svg"),p(t,"width","16"),p(t,"height","16"),p(t,"viewBox","0 0 16 16"),p(t,"fill","none")},m(o,a){$(o,e,a),$(o,t,a),E(t,r),E(t,i),E(t,s)},d(o){o&&(v(e),v(t))}}}function Sh(n){let e,t,r,i,s,o,a,l='<span class="label-text heading-03">คำนำหน้า</span>',c,d,u,h,m="นาย",_,C="นาง",P,T="นางสาว",X,F,k,N,V,ie,ee,K,Ee='<span class="label-text heading-03">ลงลายมือชื่อ*</span>',I,M,Z,he,Ie,Q,le,Le,g,U='<label class="label cursor-pointer space-x-2 justify-normal"><input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อ <a href="/privacy-policy" class="underline">อ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคล</a></span></label>',L,G,se,oe,ae,xe='<form method="dialog" class="modal-box"><p class="py-4">ลงชื่อสำเร็จ</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',Me,ve,it='<form method="dialog" class="modal-box"><p class="py-4">เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',Oe,Ue,De;r=new An({props:{for:"personalid",$$slots:{default:[vh,({messages:y})=>({18:y}),({messages:y})=>y?262144:0]},$$scope:{ctx:n}}}),k=new An({props:{for:"firstname",$$slots:{default:[yh,({messages:y})=>({18:y}),({messages:y})=>y?262144:0]},$$scope:{ctx:n}}}),V=new An({props:{for:"lastname",$$slots:{default:[bh,({messages:y})=>({18:y}),({messages:y})=>y?262144:0]},$$scope:{ctx:n}}});function b(y,O){return y[3]?Eh:wh}let f=b(n),w=f(n);le=new An({props:{for:"signature",$$slots:{default:[Ih,({messages:y})=>({18:y}),({messages:y})=>y?262144:0]},$$scope:{ctx:n}}});function x(y,O){return y[4]?Th:Ah}let ce=x(n),fe=ce(n);return{c(){e=A("form"),t=A("div"),Jt(r.$$.fragment),i=ne(),s=A("div"),o=A("div"),a=A("label"),a.innerHTML=l,c=ne(),d=A("select"),u=A("option"),h=A("option"),h.textContent=m,_=A("option"),_.textContent=C,P=A("option"),P.textContent=T,X=ne(),F=A("div"),Jt(k.$$.fragment),N=ne(),Jt(V.$$.fragment),ie=ne(),ee=A("div"),K=A("div"),K.innerHTML=Ee,I=ne(),M=A("div"),Z=A("canvas"),Ie=ne(),w.c(),Q=ne(),Jt(le.$$.fragment),Le=ne(),g=A("div"),g.innerHTML=U,L=ne(),G=A("button"),fe.c(),oe=ne(),ae=A("dialog"),ae.innerHTML=xe,Me=ne(),ve=A("dialog"),ve.innerHTML=it,this.h()},l(y){e=S(y,"FORM",{});var O=W(e);t=S(O,"DIV",{class:!0});var j=W(t);Yt(r.$$.fragment,j),i=re(j),s=S(j,"DIV",{class:!0});var ue=W(s);o=S(ue,"DIV",{class:!0});var pe=W(o);a=S(pe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),de(a)!=="svelte-1h1uakk"&&(a.innerHTML=l),c=re(pe),d=S(pe,"SELECT",{class:!0,name:!0});var ye=W(d);u=S(ye,"OPTION",{}),W(u).forEach(v),h=S(ye,"OPTION",{"data-svelte-h":!0}),de(h)!=="svelte-1en4y3b"&&(h.textContent=m),_=S(ye,"OPTION",{"data-svelte-h":!0}),de(_)!=="svelte-18vmce2"&&(_.textContent=C),P=S(ye,"OPTION",{"data-svelte-h":!0}),de(P)!=="svelte-1lp5zi9"&&(P.textContent=T),ye.forEach(v),pe.forEach(v),X=re(ue),F=S(ue,"DIV",{class:!0});var wn=W(F);Yt(k.$$.fragment,wn),wn.forEach(v),ue.forEach(v),N=re(j),Yt(V.$$.fragment,j),ie=re(j),ee=S(j,"DIV",{class:!0});var J=W(ee);K=S(J,"DIV",{class:!0,"data-svelte-h":!0}),de(K)!=="svelte-zde8yy"&&(K.innerHTML=Ee),I=re(J),M=S(J,"DIV",{class:!0});var q=W(M);Z=S(q,"CANVAS",{class:!0}),W(Z).forEach(v),Ie=re(q),w.l(q),q.forEach(v),Q=re(J),Yt(le.$$.fragment,J),J.forEach(v),Le=re(j),g=S(j,"DIV",{class:!0,"data-svelte-h":!0}),de(g)!=="svelte-dsszle"&&(g.innerHTML=U),L=re(j),G=S(j,"BUTTON",{type:!0,class:!0});var me=W(G);fe.l(me),me.forEach(v),j.forEach(v),oe=re(O),ae=S(O,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),de(ae)!=="svelte-hy64ql"&&(ae.innerHTML=xe),Me=re(O),ve=S(O,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),de(ve)!=="svelte-zw178f"&&(ve.innerHTML=it),O.forEach(v),this.h()},h(){p(a,"class","label"),p(a,"for","prefix"),u.selected=!0,u.__value="",En(u,u.__value),h.__value="นาย",En(h,h.__value),_.__value="นาง",En(_,_.__value),P.__value="นางสาว",En(P,P.__value),p(d,"class","select rounded-sm max-w-xs bg-base-200"),d.disabled=n[4],p(d,"name","prefix"),p(o,"class","form-control"),p(F,"class","form-control flex-1"),p(s,"class","flex flex-row space-x-[10px]"),p(K,"class","label"),p(Z,"class",he="bg-base-200 h-[258px] w-full rounded-sm "+(!n[3]||n[4]?"pointer-events-none":"")),p(M,"class","relative"),p(ee,"class","form-control"),p(g,"class","form-control"),p(G,"type","submit"),p(G,"class","btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100"),G.disabled=se=!n[5].consent||n[4],p(t,"class","form-control w-full"),p(ae,"id","success-dialog"),p(ae,"class","modal modal-bottom sm:modal-middle"),p(ve,"id","error-dialog"),p(ve,"class","modal modal-bottom sm:modal-middle")},m(y,O){$(y,e,O),E(e,t),Xt(r,t,null),E(t,i),E(t,s),E(s,o),E(o,a),E(o,c),E(o,d),E(d,u),E(d,h),E(d,_),E(d,P),E(s,X),E(s,F),Xt(k,F,null),E(t,N),Xt(V,t,null),E(t,ie),E(t,ee),E(ee,K),E(ee,I),E(ee,M),E(M,Z),n[9](Z),E(M,Ie),w.m(M,null),E(ee,Q),Xt(le,ee,null),E(t,Le),E(t,g),E(t,L),E(t,G),fe.m(G,null),E(e,oe),E(e,ae),n[11](ae),E(e,Me),E(e,ve),n[12](ve),Oe=!0,Ue||(De=Fo(n[6].call(null,e)),Ue=!0)},p(y,[O]){const j={};O&786448&&(j.$$scope={dirty:O,ctx:y}),r.$set(j),(!Oe||O&16)&&(d.disabled=y[4]);const ue={};O&786448&&(ue.$$scope={dirty:O,ctx:y}),k.$set(ue);const pe={};O&786448&&(pe.$$scope={dirty:O,ctx:y}),V.$set(pe),(!Oe||O&24&&he!==(he="bg-base-200 h-[258px] w-full rounded-sm "+(!y[3]||y[4]?"pointer-events-none":"")))&&p(Z,"class",he),f===(f=b(y))&&w?w.p(y,O):(w.d(1),w=f(y),w&&(w.c(),w.m(M,null)));const ye={};O&786432&&(ye.$$scope={dirty:O,ctx:y}),le.$set(ye),ce!==(ce=x(y))&&(fe.d(1),fe=ce(y),fe&&(fe.c(),fe.m(G,null))),(!Oe||O&48&&se!==(se=!y[5].consent||y[4]))&&(G.disabled=se)},i(y){Oe||(je(r.$$.fragment,y),je(k.$$.fragment,y),je(V.$$.fragment,y),je(le.$$.fragment,y),Oe=!0)},o(y){Be(r.$$.fragment,y),Be(k.$$.fragment,y),Be(V.$$.fragment,y),Be(le.$$.fragment,y),Oe=!1},d(y){y&&v(e),Zt(r),Zt(k),Zt(V),n[9](null),w.d(),Zt(le),fe.d(),n[11](null),n[12](null),Ue=!1,De()}}}function Ch(n,e,t){let r,i,s,o,a,l=!1,c=!1;const d=new ResizeObserver(N=>{t(0,i.width=N[0].target.clientWidth,i),t(0,i.height=N[0].target.clientHeight,i),s.fromData(s.toData())}),{form:u,setTouched:h,setData:m,data:_,reset:C}=pa({validate(N){try{Ar(wi,N)}catch(V){return Ia(V).nested}return{}},async onSubmit(N){t(4,c=!0);try{await _h(Ar(wi,N)),o.showModal(),P(),C()}catch{a.showModal()}t(4,c=!1)},extend:ma});$o(n,_,N=>t(5,r=N)),Br(()=>{s=new Un(i),s.addEventListener("endStroke",()=>{h("signature",!0),m("signature",s.toDataURL())}),d.observe(i)});function P(){s.clear(),m("signature",void 0)}function T(N){Pn[N?"unshift":"push"](()=>{i=N,t(0,i)})}const X=()=>t(3,l=!0);function F(N){Pn[N?"unshift":"push"](()=>{o=N,t(1,o)})}function k(N){Pn[N?"unshift":"push"](()=>{a=N,t(2,a)})}return[i,o,a,l,c,r,u,_,P,T,X,F,k]}class kh extends Fr{constructor(e){super(),$r(this,e,Ch,Sh,Qn,{})}}function Ph(n){let e,t,r;return t=new kh({}),{c(){e=A("div"),Jt(t.$$.fragment),this.h()},l(i){e=S(i,"DIV",{class:!0});var s=W(e);Yt(t.$$.fragment,s),s.forEach(v),this.h()},h(){p(e,"class","bg-base-100 px-[10px] py-5")},m(i,s){$(i,e,s),Xt(t,e,null),r=!0},i(i){r||(je(t.$$.fragment,i),r=!0)},o(i){Be(t.$$.fragment,i),r=!1},d(i){i&&v(e),Zt(t)}}}function Rh(n){let e,t=`เราอยากให้ลงลายมือชื่อบนกระดาษมากกว่าออนไลน์ เพราะประกาศของกกต.
			เขียนไว้ไม่ชัดเจนว่าลงชื่อทางออนไลน์ได้หรือไม่ได้
			จึงต้องรวบรวมชื่อบนกระดาษให้ได้ 50,000 เป็นอย่างน้อยก่อน`,r,i,s=`<h1 class="heading-responsive-01">วิธีที่ 1 : เดินทางไปลงชื่อที่จุดตั้งโต๊ะ</h1> <a href="/locations" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดูสถานที่ลงชื่อ
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.33332 0C5.40622 0 3 2.28256 3 5.53844C3 6.70035 3.27369 7.50866 3.78205 8.40382L7.97434 15.7884C8.00983 15.8525 8.06184 15.9059 8.12497 15.9432C8.1881 15.9804 8.26004 16 8.33332 16C8.4066 16 8.47854 15.9804 8.54166 15.9432C8.60479 15.9059 8.6568 15.8525 8.69229 15.7884L12.8846 8.40382C13.393 7.50864 13.6666 6.70035 13.6666 5.53844C13.6666 2.28256 11.2604 0 8.33332 0ZM8.33332 0.82051C10.8441 0.82051 12.8461 2.67673 12.8461 5.53844C12.8461 6.58135 12.6437 7.17112 12.173 7.99999L8.33332 14.7564L4.49359 7.99999C4.02289 7.17114 3.82051 6.58135 3.82051 5.53844C3.82051 2.67673 5.82255 0.82051 8.33332 0.82051ZM8.33332 3.28204C9.47107 3.28204 10.3846 4.19558 10.3846 5.33332C10.3846 6.47104 9.47106 7.38459 8.33332 7.38459C7.19557 7.38459 6.28204 6.47104 6.28204 5.33332C6.28204 4.19558 7.19557 3.28204 8.33332 3.28204Z" fill="white"></path></svg></a>`,o,a,l="หรือ",c,d,u=`<h1 class="heading-responsive-01 mb-3">วิธีที่ 2 : ดาวน์โหลดแบบฟอร์มมากรอก</h1> <div class="border-t grid gap-2 py-5"><p class="heading-03">1. ดาวน์โหลดแบบฟอร์ม และพิมพ์ลงกระดาษ A4</p> <a target="_blank" href="https://pin.ski/3Qtz6l3" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดาวน์โหลดแบบฟอร์ม
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M13.5 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V13.5C1.5 13.7652 1.60536 14.0196 1.79289 14.2071C1.98043 14.3946 2.23478 14.5 2.5 14.5H13.5C13.7652 14.5 14.0196 14.3946 14.2071 14.2071C14.3946 14.0196 14.5 13.7652 14.5 13.5V2.5C14.5 2.23478 14.3946 1.98043 14.2071 1.79289C14.0196 1.60536 13.7652 1.5 13.5 1.5ZM13.5 2.5V4.5H2.5V2.5H13.5ZM8.5 5.5H13.5V9H8.5V5.5ZM7.5 9H2.5V5.5H7.5V9ZM2.5 10H7.5V13.5H2.5V10ZM8.5 13.5V10H13.5V13.5H8.5Z" fill="white"></path></svg></a></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">2. ลงลายมือชื่อบนแบบฟอร์ม</p> <p>ชวนคนใกล้ๆ ตัวมาร่วมลงชื่อให้เต็มแผ่นเลยก็ได้</p> <img class="mx-auto" src="/register-form.svg" alt="register-form"/></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">3. ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw</p> <div class="grid gap-1"><p>3.1. นำส่งด้วยตัวเองที่ iLaw</p> <a href="https://goo.gl/maps/PM5nXuVFUv5GCUZw7" class="link px-6 py-2 text-center text-accent font-bold heading-03">ดูแผนที่</a></div> <div class="grid gap-1"><p>3.2. ส่งไปรษณีย์ (ต้องใช้บริการไปรษณีย์ไทยเท่านั้น)</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">ตู้ ปณ.79 ปณศ.สามเสนใน เขตพญาไท กรุงเทพฯ ประเทศไทย 10400 โทร.
						0996786031</p></div></div>`;return{c(){e=A("p"),e.textContent=t,r=ne(),i=A("div"),i.innerHTML=s,o=ne(),a=A("p"),a.textContent=l,c=ne(),d=A("div"),d.innerHTML=u,this.h()},l(h){e=S(h,"P",{"data-svelte-h":!0}),de(e)!=="svelte-ri6d4r"&&(e.textContent=t),r=re(h),i=S(h,"DIV",{class:!0,"data-svelte-h":!0}),de(i)!=="svelte-1kllz1y"&&(i.innerHTML=s),o=re(h),a=S(h,"P",{"data-svelte-h":!0}),de(a)!=="svelte-nl1k6i"&&(a.textContent=l),c=re(h),d=S(h,"DIV",{class:!0,"data-svelte-h":!0}),de(d)!=="svelte-kk9bq7"&&(d.innerHTML=u),this.h()},h(){p(i,"class","p-4 bg-base-100 grid gap-3 text-left"),p(d,"class","p-4 bg-base-100 text-left")},m(h,m){$(h,e,m),$(h,r,m),$(h,i,m),$(h,o,m),$(h,a,m),$(h,c,m),$(h,d,m)},i:ht,o:ht,d(h){h&&(v(e),v(r),v(i),v(o),v(a),v(c),v(d))}}}function Oh(n){let e,t,r="ร่วมลงชื่อ",i,s,o="*ผู้มีสิทธิเข้าชื่อต้องอายุ 18 ปีขึ้นไป นับจากวันที่ 20 ส.ค. 2563",a,l,c,d,u,h,m,_,C,P,T,X,F,k,N,V,ie;const ee=[Rh,Ph],K=[];function Ee(I,M){return I[0]?0:1}return F=Ee(n),k=K[F]=ee[F](n),{c(){e=A("div"),t=A("h3"),t.textContent=r,i=ne(),s=A("p"),s.textContent=o,a=ne(),l=A("div"),c=A("button"),d=vt(`แบบกระดาษ
			`),u=xt("svg"),h=xt("path"),_=ne(),C=A("button"),P=vt("แบบออนไลน์"),X=ne(),k.c(),this.h()},l(I){e=S(I,"DIV",{class:!0});var M=W(e);t=S(M,"H3",{class:!0,"data-svelte-h":!0}),de(t)!=="svelte-l3nsqj"&&(t.textContent=r),i=re(M),s=S(M,"P",{"data-svelte-h":!0}),de(s)!=="svelte-1rtaws5"&&(s.textContent=o),a=re(M),l=S(M,"DIV",{class:!0});var Z=W(l);c=S(Z,"BUTTON",{class:!0});var he=W(c);d=yt(he,`แบบกระดาษ
			`),u=Mt(he,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var Ie=W(u);h=Mt(Ie,"path",{d:!0,fill:!0}),W(h).forEach(v),Ie.forEach(v),he.forEach(v),_=re(Z),C=S(Z,"BUTTON",{class:!0});var Q=W(C);P=yt(Q,"แบบออนไลน์"),Q.forEach(v),Z.forEach(v),X=re(M),k.l(M),M.forEach(v),this.h()},h(){p(t,"class","heading-responsive-03"),p(h,"d","M11.5 3.33838C10.8584 3.33838 10.2311 3.5283 9.69722 3.88422C9.16336 4.24013 8.74678 4.7461 8.5 5.33838C8.25322 4.7461 7.83664 4.24013 7.30278 3.88422C6.76891 3.5283 6.14163 3.33838 5.5 3.33838C4.70435 3.33838 3.94129 3.65445 3.37868 4.21706C2.81607 4.77967 2.5 5.54273 2.5 6.33838C2.5 9.40088 8.5 14.3384 8.5 14.3384C8.5 14.3384 14.5 9.40088 14.5 6.33838C14.5 5.54273 14.1839 4.77967 13.6213 4.21706C13.0587 3.65445 12.2956 3.33838 11.5 3.33838Z"),p(h,"fill","black"),p(u,"xmlns","http://www.w3.org/2000/svg"),p(u,"width","17"),p(u,"height","17"),p(u,"viewBox","0 0 17 17"),p(u,"fill","none"),p(c,"class",m="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(n[0]?"":"opacity-50")),p(C,"class",T="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(n[0]?"opacity-50":"")),p(l,"class","join w-full"),p(e,"class","text-center grid gap-3 body-02-normal")},m(I,M){$(I,e,M),E(e,t),E(e,i),E(e,s),E(e,a),E(e,l),E(l,c),E(c,d),E(c,u),E(u,h),E(l,_),E(l,C),E(C,P),E(e,X),K[F].m(e,null),N=!0,V||(ie=[Ln(c,"click",n[1]),Ln(C,"click",n[2])],V=!0)},p(I,[M]){(!N||M&1&&m!==(m="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(I[0]?"":"opacity-50")))&&p(c,"class",m),(!N||M&1&&T!==(T="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(I[0]?"opacity-50":"")))&&p(C,"class",T);let Z=F;F=Ee(I),F!==Z&&(ls(),Be(K[Z],1,1,()=>{K[Z]=null}),cs(),k=K[F],k||(k=K[F]=ee[F](I),k.c()),je(k,1),k.m(e,null))},i(I){N||(je(k),N=!0)},o(I){Be(k),N=!1},d(I){I&&v(e),K[F].d(),V=!1,jo(ie)}}}function Dh(n,e,t){let r=!0;return Br(()=>{new URLSearchParams(window.location.search).has("online")&&t(0,r=!1)}),[r,()=>t(0,r=!0),()=>t(0,r=!1)]}class Uh extends Fr{constructor(e){super(),$r(this,e,Dh,Oh,Qn,{})}}export{Uh as default};

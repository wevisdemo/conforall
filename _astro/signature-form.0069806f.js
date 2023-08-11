import{n as Wt,s as kn,o as ps,S as br,i as vr,e as N,a as oe,b as zn,c as V,d as re,f as P,g as ae,h as ms,j as K,k as gs,t as Je,l as _s,m as Xe,p as ys,q as Er,r as bs,u as wr,v as Ar,w as Ir,x as Tr,y as Sr,z as Nt,A as Ct,B as Vt,C as Fe,D as kt,E as w,F as Mt,G as C,H as Ft,I as vs,J as Es,K as Lt,L as ws,M as As,N as Is}from"./index.ccb3cb08.js";function Ts(n,...e){const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Be(n){let e;return Ts(n,t=>e=t)(),e}class Ss extends Error{constructor(e,t){super(e),this.name="FelteSubmitError",this.response=t}}function Ps(n,e){return Object.keys(n).some(r=>e(n[r]))}function on(n,e){return Object.keys(n||{}).reduce((r,s)=>Object.assign(Object.assign({},r),{[s]:e(n[s])}),{})}function D(n){return Object.prototype.toString.call(n)==="[object Object]"}function ve(n){return Object.keys(n||{}).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:D(n[t])?ve(n[t]):Array.isArray(n[t])?[...n[t]]:n[t]}),{})}function Ds(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Rs(n){return function(e){if(D(e)){const t=Ee(e,n);return Ds(t,["key"])}return n}}function Ee(n,e){return on(n,t=>D(t)?Ee(t,e):Array.isArray(t)?t.map(Rs(e)):e)}function Ze(...n){const e=n.pop(),t=n.shift();if(typeof t=="string")return t;const r=ve(t);if(n.length===0)return r;for(const s of n){if(!s)continue;if(typeof s=="string")return s;let i=e(r,s);if(typeof i<"u")return i;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(s))));for(const a of o)if(i=e(r[a],s[a]),typeof i<"u")r[a]=i;else if(D(s[a])&&D(r[a]))r[a]=Ze(r[a],s[a],e);else if(Array.isArray(s[a]))r[a]=s[a].map((l,c)=>{if(!D(l))return l;const h=Array.isArray(r[a])?r[a][c]:r[a];return Ze(h,l,e)});else if(D(s[a])){const l=Ee(ve(s[a]),void 0);r[a]=Ze(l,s[a],e)}else typeof s[a]<"u"&&(r[a]=s[a])}return r}function xs(n,e){if(!(D(n)&&D(e))){if(Array.isArray(e)){if(e.some(D))return;const t=Array.isArray(n)?n:[];return e.map((r,s)=>{var i;return(i=t[s])!==null&&i!==void 0?i:r})}if(typeof n<"u")return n}}function Wn(...n){return Ze(...n,xs)}function Pr(...n){return Ze(...n,()=>{})}function $e(n,e,t){const r=i=>String.prototype.split.call(e,i).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,n),s=r(/[,[\]]+?/)||r(/[,[\].]+?/);return s===void 0||s===n?t:s}function Ot(n,e,t){n&&(n=ve(n)),D(n)||(n={});const r=Array.isArray(e)?e:e.match(/[^.[\]]+/g)||[],s=r[r.length-1];if(!s)return n;let i=n;for(let o=0;o<r.length-1;o++){const a=r[o];if(!i[a]||!D(i[a])&&!Array.isArray(i[a])){const l=r[o+1];isNaN(Number(l))?i[a]={}:i[a]=[]}i=i[a]}return i[s]=t(i[s]),n}function j(n,e,t){return Ot(n,e,()=>t)}function yt(n,e){if(!n||Object(n)!==n)return;typeof n<"u"&&(n=ve(n));const t=Array.isArray(e)?e:e.toString().match(/[^.[\]]+/g)||[],r=t.length===1?n:$e(n,t.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(t[t.length-1]),1):r==null||delete r[t[t.length-1]],n}function At(n,e){return Ps(n,t=>D(t)?At(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e(t):t.some(r=>D(r)?At(r,e):e(r)):e(t))}function ct(n){return n?.nodeName==="INPUT"}function Cs(n){return n?.nodeName==="TEXTAREA"}function ut(n){return n?.nodeName==="SELECT"}function an(n){return n?.nodeName==="FIELDSET"}function ce(n){return ct(n)||Cs(n)||ut(n)}function Hn(n){return n.nodeType===Node.ELEMENT_NODE}function ne(n,e){return e??(ce(n)?n.name:"")}function hn(n){let e=n;for(;e&&e.nodeName!=="FORM";){if(e.hasAttribute("data-felte-ignore"))return!0;e=e.parentElement}return!1}function ks(n,e){if(!(D(n)||D(e))){if(n===null||n==="")return e;if(e===null||e===""||!e)return n;if(!(!n||!e)){if(Array.isArray(n)){if(!Array.isArray(e))return[...n,e];const t=[],r=Math.max(e.length,n.length);for(let s=0;s<r;s++){let i=n[s],o=e[s];!D(i)&&!D(o)?(Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]),t.push(...i,...o)):t.push(lt([i??{},o??{}]))}return t.filter(Boolean)}return Array.isArray(e)||(e=[e]),[n,...e].reduce((t,r)=>t.concat(r),[]).filter(Boolean)}}}function lt(n){return Ze(...n,ks)}function Os(n,e){return e?(Array.isArray(e)?e:[e]).map(r=>r(n)):[]}function yn(n,e){return e?Array.isArray(e)?e.reduce((t,r)=>r(t),n):e(n):n}function On(n=8){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let r=0;r<n;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function Ht(n,e,{onInit:t,onEnd:r}={}){let s;return(...i)=>{s||t?.(),s&&clearTimeout(s),s=setTimeout(()=>{n.apply(this,i),s=void 0,r?.()},e)}}function bn(n){if(ce(n))return[n];if(n.childElementCount===0)return[];const e=new Set;for(const t of n.children){if(ce(t)&&e.add(t),an(t))for(const r of t.elements)ce(r)&&e.add(r);t.childElementCount>0&&bn(t).forEach(r=>e.add(r))}return Array.from(e)}function Dr(n){for(const e of n.elements)!ce(e)&&!an(e)||n.hasAttribute("data-felte-keep-on-remove")&&!e.hasAttribute("data-felte-keep-on-remove")&&(e.dataset.felteKeepOnRemove=n.dataset.felteKeepOnRemove)}function Rr(n){return n.type.match(/^(number|range)$/)?n.value?+n.value:void 0:n.value}function qn(n){var e;let t={},r={};for(const s of n.elements){if(an(s)&&Dr(s),!ce(s)||!s.name)continue;const i=ne(s);if(ct(s)){if(s.type==="checkbox"){if(typeof $e(t,i)>"u"){if(Array.from(n.querySelectorAll(`[name="${s.name}"]`)).filter(l=>ce(l)?i===ne(l):!1).length===1){t=j(t,i,s.checked),r=j(r,i,!1);continue}t=j(t,i,s.checked?[s.value]:[]),r=j(r,i,!1);continue}Array.isArray($e(t,i))&&s.checked&&(t=Ot(t,i,a=>[...a,s.value]));continue}if(s.type==="radio"){if($e(t,i))continue;t=j(t,i,s.checked?s.value:void 0),r=j(r,i,!1);continue}if(s.type==="file"){t=j(t,i,s.multiple?Array.from(s.files||[]):(e=s.files)===null||e===void 0?void 0:e[0]),r=j(r,i,!1);continue}}else if(ut(s)){if(!s.multiple)t=j(t,i,s.value);else{const l=Array.from(s.selectedOptions).map(c=>c.value);t=j(t,i,l)}r=j(r,i,!1);continue}const o=Rr(s);t=j(t,i,o),r=j(r,i,!1)}return{defaultData:t,defaultTouched:r}}function Ns(n,e){var t;if(!ce(n))return;const r=e;if(ct(n)){if(n.type==="checkbox"){const s=r;if(typeof s>"u"||typeof s=="boolean"){n.checked=!!s;return}Array.isArray(s)&&(s.includes(n.value)?n.checked=!0:n.checked=!1);return}if(n.type==="radio"){const s=r;n.value===s?n.checked=!0:n.checked=!1;return}if(n.type==="file"){if(e instanceof FileList)n.files=e;else if(e instanceof File&&typeof DataTransfer<"u"){const s=new DataTransfer;s.items.add(e),n.files=s.files}else if(typeof DataTransfer<"u"&&Array.isArray(e)&&e.some(s=>s instanceof File)){const s=new DataTransfer;for(const i of e)i instanceof File&&s.items.add(i);n.files=s.files}else(!e||Array.isArray(e)&&!e.length)&&(n.files=null,n.value="");return}}else if(ut(n)){if(n.multiple){if(Array.isArray(r)){n.value=String((t=r[0])!==null&&t!==void 0?t:"");const i=r.map(o=>String(o));for(const o of n.options)i.includes(o.value)?o.selected=!0:o.selected=!1}}else{n.value=String(r??"");for(const i of n.options)i.value===String(r)?i.selected=!0:i.selected=!1}return}n.value=String(r??"")}function $t(n,e){for(const t of n.elements){if(an(t)&&Dr(t),!ce(t)||!t.name)continue;const r=ne(t);Ns(t,$e(e,r))}}function xr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ue(n,e){return on(n,t=>D(t)?Ue(t,e):Array.isArray(t)?t.length===0||t.every(r=>typeof r=="string")?e:t.map(r=>{const s=Ue(r,e);return xr(s,["key"])}):e)}function it(n){return n?on(n,e=>D(e)?it(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!D(t))return t;const r=it(t);return r.key||(r.key=On()),r}):e):{}}function st(n){return n?on(n,e=>D(e)?st(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!D(t))return t;const r=st(t);return xr(r,["key"])}):e):{}}function Vs(){class n extends CustomEvent{constructor(s){super("feltesuccess",{detail:s})}}class e extends CustomEvent{constructor(s){super("felteerror",{detail:s,cancelable:!0})}setErrors(s){this.preventDefault(),this.errors=s}}class t extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(s){this.onSubmit=s}handleError(s){this.onError=s}handleSuccess(s){this.onSuccess=s}}return{createErrorEvent:r=>new e(r),createSubmitEvent:()=>new t,createSuccessEvent:r=>new n(r)}}function Ms(n){if(n)return async function(){let t=new FormData(n);const r=new URL(n.action),s=n.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||n.method;let i=n.enctype;n.querySelector('input[type="file"]')&&(i="multipart/form-data"),(s==="get"||i==="application/x-www-form-urlencoded")&&(t=new URLSearchParams(t));let o;s==="get"?(t.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:s,headers:{Accept:"application/json"}}):o={method:s,body:t,headers:Object.assign(Object.assign({},i!=="multipart/form-data"&&{"Content-Type":i}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new Ss("An error occurred while submitting the form",a)}}function Bt(n,e,t,r){return Ot(n,e,s=>(typeof s<"u"&&!Array.isArray(s)||(s||(s=[]),typeof r>"u"?s.push(t):s.splice(r,0,t)),s))}function Fs(n,e,t,r){return Ot(n,e,s=>(!s||!Array.isArray(s)||([s[t],s[r]]=[s[r],s[t]]),s))}function Ls(n,e,t,r){return Ot(n,e,s=>(!s||!Array.isArray(s)||s.splice(r,0,s.splice(t,1)[0]),s))}function Gn(n){return typeof n=="function"}function Ye(n){return(t,r)=>{if(typeof t=="string"){const s=t;n(i=>{const o=Gn(r)?r($e(i,s)):r;return j(i,s,o)})}else n(s=>Gn(t)?t(s):t)}}function $s({stores:n,config:e,validateErrors:t,validateWarnings:r,_getCurrentExtenders:s}){var i;let o,a=it((i=e.initialValues)!==null&&i!==void 0?i:{});const{data:l,touched:c,errors:h,warnings:u,isDirty:d,isSubmitting:g,interacted:_}=n,k=Ye(l.update),F=Ye(c.update),E=Ye(h.update),Y=Ye(u.update);function J(p){k(I=>{const y=p(I);return o&&$t(o,y),y})}const O=(p,I,y)=>{Ye(J)(p,I),typeof p=="string"&&y&&F(p,!0)};function we(p,I,y){const W=D(I)?Ue(I,!1):!1,H=D(W)?Ee(W,[]):[];I=D(I)?Object.assign(Object.assign({},I),{key:On()}):I,h.update(z=>Bt(z,p,H,y)),u.update(z=>Bt(z,p,H,y)),c.update(z=>Bt(z,p,W,y)),l.update(z=>{const he=Bt(z,p,I,y);return setTimeout(()=>o&&$t(o,he)),he})}function B(p){h.update(p),u.update(p),c.update(p),l.update(I=>{const y=p(I);return setTimeout(()=>o&&$t(o,y)),y})}function ie(p){B(I=>yt(I,p))}function Z(p,I,y){B(W=>Fs(W,p,I,y))}function Ae(p,I,y){B(W=>Ls(W,p,I,y))}function Pe(p){const I=$e(a,p),y=D(I)?Ue(I,!1):!1,W=D(y)?Ee(y,[]):[];l.update(H=>{const z=j(H,p,I);return o&&$t(o,z),z}),c.update(H=>j(H,p,y)),h.update(H=>j(H,p,W)),u.update(H=>j(H,p,W))}const A=Ye(g.update),Q=Ye(d.update),G=Ye(_.update);async function De(){const p=Be(l);c.set(Ue(p,!0)),_.set(null);const I=await t(p);return await r(p),I}function Ie(){O(ve(a)),F(p=>Ee(p,!1)),_.set(null),d.set(!1)}function L(p){return async function(y){var W,H,z,he,Re,v,R;const{createErrorEvent:fe,createSubmitEvent:Te,createSuccessEvent:pe}=Vs(),X=Te();o?.dispatchEvent(X);const m=(H=(W=X.onError)!==null&&W!==void 0?W:p?.onError)!==null&&H!==void 0?H:e.onError,f=(he=(z=X.onSuccess)!==null&&z!==void 0?z:p?.onSuccess)!==null&&he!==void 0?he:e.onSuccess,b=(R=(v=(Re=X.onSubmit)!==null&&Re!==void 0?Re:p?.onSubmit)!==null&&v!==void 0?v:e.onSubmit)!==null&&R!==void 0?R:Ms(o);if(!b||(y?.preventDefault(),X.defaultPrevented))return;g.set(!0),_.set(null);const S=st(Be(l)),_e=await t(S,p?.validate),qe=await r(S,p?.warn);if(qe&&u.set(Pr(Ee(S,[]),qe)),c.set(Ue(S,!0)),_e&&(c.set(Ue(_e,!0)),At(_e,te=>Array.isArray(te)?te.length>=1:!!te))){await new Promise(te=>setTimeout(te)),s().forEach(te=>{var xe;return(xe=te.onSubmitError)===null||xe===void 0?void 0:xe.call(te,{data:S,errors:_e})}),g.set(!1);return}const Ne={event:y,setFields:O,setData:k,setTouched:F,setErrors:E,setWarnings:Y,unsetField:ie,addField:we,resetField:Pe,reset:Ie,setInitialValues:ge.setInitialValues,moveField:Ae,swapFields:Z,form:o,controls:o&&Array.from(o.elements).filter(ce),config:Object.assign(Object.assign({},e),p)};try{const ee=await b(S,Ne);o?.dispatchEvent(pe(Object.assign({response:ee},Ne))),await f?.(ee,Ne)}catch(ee){const te=fe(Object.assign({error:ee},Ne));if(o?.dispatchEvent(te),!m&&!te.defaultPrevented)throw ee;if(!m&&!te.errors)return;const xe=te.errors||await m?.(ee,Ne);xe&&(c.set(Ue(xe,!0)),h.set(xe),await new Promise(Ve=>setTimeout(Ve)),s().forEach(Ve=>{var Ge;return(Ge=Ve.onSubmitError)===null||Ge===void 0?void 0:Ge.call(Ve,{data:S,errors:Be(h)})}))}finally{g.set(!1)}}}const ge={setData:k,setFields:O,setTouched:F,setErrors:E,setWarnings:Y,setIsSubmitting:A,setIsDirty:Q,setInteracted:G,validate:De,reset:Ie,unsetField:ie,resetField:Pe,addField:we,swapFields:Z,moveField:Ae,createSubmitHandler:L,handleSubmit:L(),setInitialValues:p=>{a=it(p)}};return{public:ge,private:{_setFormNode(p){o=p},_getInitialValues:()=>a}}}function Bs({helpers:n,stores:e,config:t,extender:r,createSubmitHandler:s,handleSubmit:i,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:h,setTouched:u,reset:d,setInitialValues:g}=n,{addValidator:_,addTransformer:k,validate:F}=n,{data:E,errors:Y,warnings:J,touched:O,isSubmitting:we,isDirty:B,interacted:ie,isValid:Z,isValidating:Ae}=e;function Pe(A){A.requestSubmit||(A.requestSubmit=i);function Q(m){return function(f){return f({form:A,stage:m,controls:Array.from(A.elements).filter(ce),data:E,errors:Y,warnings:J,touched:O,isValid:Z,isValidating:Ae,isSubmitting:we,isDirty:B,interacted:ie,config:t,addValidator:_,addTransformer:k,setFields:h,validate:F,reset:d,createSubmitHandler:s,handleSubmit:i})}}l(r.map(Q("MOUNT"))),A.noValidate=!!t.validate;const{defaultData:G,defaultTouched:De}=qn(A);o(A),g(Pr(ve(G),a())),h(a()),O.set(De);function Ie(m){const f=ne(m),b=Array.from(A.querySelectorAll(`[name="${m.name}"]`)).filter(S=>ce(S)?f===ne(S):!1);if(b.length!==0)return b.length===1?E.update(S=>j(S,ne(m),m.checked)):E.update(S=>j(S,ne(m),b.filter(ct).filter(_e=>_e.checked).map(_e=>_e.value)))}function L(m){const f=A.querySelectorAll(`[name="${m.name}"]`),b=Array.from(f).find(S=>ct(S)&&S.checked);E.update(S=>j(S,ne(m),b?.value))}function ge(m){var f;const b=Array.from((f=m.files)!==null&&f!==void 0?f:[]);E.update(S=>j(S,ne(m),m.multiple?b:b[0]))}function ue(m){if(!m.multiple)E.update(f=>j(f,ne(m),m.value));else{const f=Array.from(m.selectedOptions).map(b=>b.value);E.update(b=>j(b,ne(m),f))}}function p(m){const f=m.target;if(!f||!ce(f)||ut(f)||hn(f)||["checkbox","radio","file"].includes(f.type)||!f.name)return;B.set(!0);const b=Rr(f);ie.set(f.name),E.update(S=>j(S,ne(f),b))}function I(m){const f=m.target;if(!(!f||!ce(f)||hn(f))&&f.name)if(u(ne(f),!0),ie.set(f.name),(ut(f)||["checkbox","radio","file","hidden"].includes(f.type))&&B.set(!0),f.type==="hidden"&&E.update(b=>j(b,ne(f),f.value)),ut(f))ue(f);else if(ct(f))f.type==="checkbox"?Ie(f):f.type==="radio"?L(f):f.type==="file"&&ge(f);else return}function y(m){const f=m.target;!f||!ce(f)||hn(f)||f.name&&(u(ne(f),!0),ie.set(f.name))}function W(m){m.preventDefault(),d()}const H={childList:!0,subtree:!0};function z(m){let f=Be(E),b=Be(O),S=Be(Y),_e=Be(J);for(const qe of m.reverse()){if(qe.hasAttribute("data-felte-keep-on-remove")&&qe.dataset.felteKeepOnRemove!=="false")continue;const Ne=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let ee=ne(qe);const te=Be(O);if(Ne.test(ee)){const Ve=ee.split(".").slice(0,-1).join("."),Ge=$e(te,Ve);D(Ge)&&Object.keys(Ge).length<=1&&(ee=Ve)}f=yt(f,ee),b=yt(b,ee),S=yt(S,ee),_e=yt(_e,ee)}E.set(f),O.set(b),Y.set(S),J.set(_e)}const he=Ht(()=>{c().forEach(b=>{var S;return(S=b.destroy)===null||S===void 0?void 0:S.call(b)}),l(r.map(Q("UPDATE")));const{defaultData:m,defaultTouched:f}=qn(A);E.update(b=>Wn(b,m)),O.update(b=>Wn(b,f)),n.setFields(Be(E))},0);let Re=[];const v=Ht(()=>{c().forEach(m=>{var f;return(f=m.destroy)===null||f===void 0?void 0:f.call(m)}),l(r.map(Q("UPDATE"))),z(Re),Re=[]},0);function R(m){Array.from(m.addedNodes).some(b=>Hn(b)?ce(b)?!0:bn(b).length>0:!1)&&he()}function fe(m){for(const f of m.removedNodes){if(!Hn(f))continue;const b=bn(f);b.length!==0&&(Re.push(...b),v())}}function Te(m){for(const f of m)f.type==="childList"&&(f.addedNodes.length>0&&R(f),f.removedNodes.length>0&&fe(f))}const pe=new MutationObserver(Te);pe.observe(A,H),A.addEventListener("input",p),A.addEventListener("change",I),A.addEventListener("focusout",y),A.addEventListener("submit",i),A.addEventListener("reset",W);const X=Y.subscribe(m=>{for(const f of A.elements){if(!ce(f)||!f.name)continue;const b=$e(m,ne(f)),S=Array.isArray(b)?b.join(`
`):typeof b=="string"?b:void 0;S!==f.dataset.felteValidationMessage&&(S?(f.dataset.felteValidationMessage=S,f.setAttribute("aria-invalid","true")):(delete f.dataset.felteValidationMessage,f.removeAttribute("aria-invalid")))}});return{destroy(){pe.disconnect(),A.removeEventListener("input",p),A.removeEventListener("change",I),A.removeEventListener("focusout",y),A.removeEventListener("submit",i),A.removeEventListener("reset",W),X(),c().forEach(m=>{var f;return(f=m.destroy)===null||f===void 0?void 0:f.call(m)})}}}return{form:Pe}}function Us(n){const e={aborted:!1,priority:n};return{signal:e,abort(){e.aborted=!0}}}function js(n,e){if(D(n))return!e||D(e)&&Object.keys(e).length===0?Ee(n,null):void 0;if(Array.isArray(n)){if(n.some(D))return;const t=Array.isArray(e)?e:[];return n.map((r,s)=>{const i=t[s];return Array.isArray(i)&&i.length===0?null:r&&i||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?n?e:null:n&&e?[e]:null}function zs(n,e){if(D(n))return!e||D(e)&&Object.keys(e).length===0?Ee(n,null):void 0;if(Array.isArray(n)){if(n.some(D))return;const t=Array.isArray(e)?e:[];return n.map((r,s)=>{const i=t[s];return Array.isArray(i)&&i.length===0?null:i||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?e:e?[e]:null}function Ws([n,e]){return Ze(e,n,js)}function Hs([n,e]){return Ze(e,n,zs)}function qs(n){return function(t,r,s){const i=Array.isArray(t)?t:[t],o=new Array(i.length),a=n(s),l=a.set,c=a.subscribe;let h;function u(){h=i.map((g,_)=>g.subscribe(k=>{o[_]=k,l(r(o))}))}function d(){h?.forEach(g=>g())}return a.subscribe=function(_){const k=c(_);return()=>{k()}},[a,u,d]}}function Gs(n,e){var t,r,s,i,o,a,l,c,h;const u=qs(n),d=e.initialValues=e.initialValues?it(yn(ve(e.initialValues),e.transform)):{},g=Ue(st(d),!1),_=n(g),k=n(0),[F,E,Y]=u([_,k],([q,U])=>At(q,Se=>!!Se)&&U>=1,!1);delete F.set,delete F.update;function J(q){let U;return async function(Se,Ce,ye,tt=!1){if(!ye||!Se)return;let Ke=Ce&&Object.keys(Ce).length>0?Ce:Ee(Se,[]);const nt=Us(tt);if((!U?.signal.priority||tt)&&(U?.abort(),U=nt),U.signal.priority&&!tt)return;k.update(_t=>_t+1);const jn=Os(Se,ye);return jn.forEach(async _t=>{const fs=await _t;nt.signal.aborted||(Ke=lt([Ke,fs]),q.set(Ke))}),await Promise.all(jn),U=void 0,k.update(_t=>_t-1),Ke}}let O=Ee(g,[]);const we=n(d),B=Ee(g,[]),ie=n(B),Z=n(ve(B)),[Ae,Pe,A]=u([ie,Z],lt,ve(B)),Q=Ee(g,[]),G=n(Q),De=n(ve(Q)),[Ie,L,ge]=u([G,De],lt,ve(Q)),[ue,p,I]=u([Ae,_],Ws,ve(B)),[y,W,H]=u([Ie,_],Hs,ve(Q));let z=!1;const[he,Re,v]=u(Ae,([q])=>{var U;return z?!At(q,me=>Array.isArray(me)?me.length>=1:!!me):(z=!0,!e.validate&&!(!((U=e.debounced)===null||U===void 0)&&U.validate))},!e.validate&&!(!((t=e.debounced)===null||t===void 0)&&t.validate));delete he.set,delete he.update;const R=n(!1),fe=n(!1),Te=n(null),pe=J(ie),X=J(G),m=J(Z),f=J(De),b=Ht(m,(o=(s=(r=e.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&s!==void 0?s:(i=e.debounced)===null||i===void 0?void 0:i.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{k.update(q=>q+1)},onEnd:()=>{k.update(q=>q-1)}}),S=Ht(f,(h=(l=(a=e.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=e.debounced)===null||c===void 0?void 0:c.timeout)!==null&&h!==void 0?h:300);async function _e(q,U){var me;const Se=st(q),Ce=pe(Se,O,U??e.validate,!0);if(U)return Ce;const ye=m(Se,O,(me=e.debounced)===null||me===void 0?void 0:me.validate,!0);return lt(await Promise.all([Ce,ye]))}async function qe(q,U){var me;const Se=st(q),Ce=X(Se,O,U??e.warn,!0);if(U)return Ce;const ye=f(Se,O,(me=e.debounced)===null||me===void 0?void 0:me.warn,!0);return lt(await Promise.all([Ce,ye]))}let Ne=B,ee=Q;function te(){const q=we.subscribe(ye=>{var tt,Ke;const nt=st(ye);pe(nt,O,e.validate),X(nt,O,e.warn),b(nt,O,(tt=e.debounced)===null||tt===void 0?void 0:tt.validate),S(nt,O,(Ke=e.debounced)===null||Ke===void 0?void 0:Ke.warn)}),U=_.subscribe(ye=>{O=Ee(ye,[])}),me=Ae.subscribe(ye=>{Ne=ye}),Se=Ie.subscribe(ye=>{ee=ye});Pe(),Re(),L(),p(),W(),E();function Ce(){q(),I(),A(),ge(),H(),v(),Y(),U(),me(),Se()}return Ce}function xe(q){ie.set(q(Ne)),Z.set({})}function Ve(q){G.set(q(ee)),De.set({})}function Ge(q){xe(()=>q)}function ds(q){Ve(()=>q)}return ue.set=Ge,ue.update=xe,y.set=ds,y.update=Ve,{data:we,errors:ue,warnings:y,touched:_,isValid:he,isSubmitting:R,isDirty:fe,isValidating:F,interacted:Te,validateErrors:_e,validateWarnings:qe,cleanup:e.preventStoreStart?()=>{}:te(),start:te}}function Ks(n,e){var t,r;(t=n.extend)!==null&&t!==void 0||(n.extend=[]),(r=n.debounced)!==null&&r!==void 0||(n.debounced={}),n.validate&&!Array.isArray(n.validate)&&(n.validate=[n.validate]),n.debounced.validate&&!Array.isArray(n.debounced.validate)&&(n.debounced.validate=[n.debounced.validate]),n.transform&&!Array.isArray(n.transform)&&(n.transform=[n.transform]),n.warn&&!Array.isArray(n.warn)&&(n.warn=[n.warn]),n.debounced.warn&&!Array.isArray(n.debounced.warn)&&(n.debounced.warn=[n.debounced.warn]);function s(L,{debounced:ge,level:ue}={debounced:!1,level:"error"}){var p;const I=ue==="error"?"validate":"warn";(p=n.debounced)!==null&&p!==void 0||(n.debounced={});const y=ge?n.debounced:n;y[I]?y[I]=[...y[I],L]:y[I]=[L]}function i(L){n.transform?n.transform=[...n.transform,L]:n.transform=[L]}const o=Array.isArray(n.extend)?n.extend:[n.extend];let a=[];const l=()=>a,c=L=>{a=L},{isSubmitting:h,isValidating:u,data:d,errors:g,warnings:_,touched:k,isValid:F,isDirty:E,cleanup:Y,start:J,validateErrors:O,validateWarnings:we,interacted:B}=Gs(e.storeFactory,n),ie=d.update,Z=d.set,Ae=L=>ie(ge=>it(yn(L(ge),n.transform))),Pe=L=>Z(it(yn(L,n.transform)));d.update=Ae,d.set=Pe;const A=$s({extender:o,config:n,addValidator:s,addTransformer:i,validateErrors:O,validateWarnings:we,_getCurrentExtenders:l,stores:{data:d,errors:g,warnings:_,touched:k,isValid:F,isValidating:u,isSubmitting:h,isDirty:E,interacted:B}}),{createSubmitHandler:Q,handleSubmit:G}=A.public;a=o.map(L=>L({stage:"SETUP",errors:g,warnings:_,touched:k,data:d,isDirty:E,isValid:F,isValidating:u,isSubmitting:h,interacted:B,config:n,addValidator:s,addTransformer:i,setFields:A.public.setFields,reset:A.public.reset,validate:A.public.validate,handleSubmit:G,createSubmitHandler:Q}));const De=Object.assign({config:n,stores:{data:d,touched:k,errors:g,warnings:_,isSubmitting:h,isValidating:u,isValid:F,isDirty:E,interacted:B},createSubmitHandler:Q,handleSubmit:G,helpers:Object.assign(Object.assign({},A.public),{addTransformer:i,addValidator:s}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},A.private),{form:Ie}=Bs(De);return Object.assign({data:d,errors:g,warnings:_,touched:k,isValid:F,isSubmitting:h,isValidating:u,isDirty:E,interacted:B,form:Ie,cleanup:Y,startStores:J},A.public)}function Ys(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const at=[];function Cr(n,e=Wt){let t;const r=new Set;function s(a){if(kn(n,a)&&(n=a,t)){const l=!at.length;for(const c of r)c[1](),at.push(c,n);if(l){for(let c=0;c<at.length;c+=2)at[c][0](at[c+1]);at.length=0}}}function i(a){s(a(n))}function o(a,l=Wt){const c=[a,l];return r.add(c),r.size===1&&(t=e(s,i)||Wt),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:s,update:i,subscribe:o}}function Js(n){const e=Ks(n??{},{storeFactory:Cr}),{cleanup:t,startStores:r}=e,s=Ys(e,["cleanup","startStores"]);return ps(t),s}const kr={},Or={};function Kn(n){const e=n.config;if(n.stage==="SETUP"){if(!e.__felteReporterSvelteId){const t=On(21);e.__felteReporterSvelteId=t,kr[t]=n.errors,Or[t]=n.warnings}return{}}return n.form.hasAttribute("data-felte-reporter-svelte-id")||(n.form.dataset.felteReporterSvelteId=e.__felteReporterSvelteId),{onSubmitError(){const t=n&&n.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');t&&t.focus()}}}function Xs(n){return!n||"preventFocusOnError"in n?e=>Kn(e):Kn(n)}const Zs=n=>({}),Yn=n=>({}),Qs=n=>({messages:n&4}),Jn=n=>({messages:n[2]});function ei(n){let e;const t=n[9].placeholder,r=Ar(t,n,n[8],Yn);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&256)&&Ir(r,t,s,s[8],e?Sr(t,s[8],i,Zs):Tr(s[8]),Yn)},i(s){e||(Xe(r,s),e=!0)},o(s){Je(r,s),e=!1},d(s){r&&r.d(s)}}}function ti(n){let e;const t=n[9].default,r=Ar(t,n,n[8],Jn);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&260)&&Ir(r,t,s,s[8],e?Sr(t,s[8],i,Qs):Tr(s[8]),Jn)},i(s){e||(Xe(r,s),e=!0)},o(s){Je(r,s),e=!1},d(s){r&&r.d(s)}}}function ni(n){let e,t,r,s,i,o;const a=[ti,ei],l=[];function c(h,u){return!h[3].placeholder||h[2]?0:1}return r=c(n),s=l[r]=a[r](n),{c(){e=N("div"),t=oe(),s.c(),i=zn(),this.h()},l(h){e=V(h,"DIV",{style:!0}),re(e).forEach(P),t=ae(h),s.l(h),i=zn(),this.h()},h(){ms(e,"display","none")},m(h,u){K(h,e,u),n[10](e),K(h,t,u),l[r].m(h,u),K(h,i,u),o=!0},p(h,[u]){let d=r;r=c(h),r===d?l[r].p(h,u):(gs(),Je(l[d],1,1,()=>{l[d]=null}),_s(),s=l[r],s?s.p(h,u):(s=l[r]=a[r](h),s.c()),Xe(s,1),s.m(i.parentNode,i))},i(h){o||(Xe(s),o=!0)},o(h){Je(s),o=!1},d(h){h&&(P(e),P(t),P(i)),n[10](null),l[r].d(h)}}}function ri(n,e,t){let r,s,i=Wt,o=()=>(i(),i=bs(d,E=>t(7,s=E)),d);n.$$.on_destroy.push(()=>i());let{$$slots:a={},$$scope:l}=e;const c=ys(a);let{level:h="error"}=e,{for:u}=e,d,g,_;function k(){return _.closest("form")}Er(()=>{t(6,g=ne(_,u));const Y=k();o(Y?h==="error"?t(0,d=kr[Y.dataset.felteReporterSvelteId]):t(0,d=Or[Y.dataset.felteReporterSvelteId]):t(0,d=Cr({})))});function F(E){wr[E?"unshift":"push"](()=>{_=E,t(1,_)})}return n.$$set=E=>{"level"in E&&t(4,h=E.level),"for"in E&&t(5,u=E.for),"$$scope"in E&&t(8,l=E.$$scope)},n.$$.update=()=>{n.$$.dirty&192&&t(2,r=g&&$e(s,g))},[d,_,r,c,h,u,g,s,l,a,F]}class si extends br{constructor(e){super(),vr(this,e,ri,ni,kn,{level:4,for:5})}}const Ut=si;function ii(n){return n.issues.reduce((e,t)=>{if(t.path){const r=t.path.map(({key:s})=>s).join(".");e.nested[r]=[...e.nested[r]||[],t.message]}else e.root=[...e.root||[],t.message];return e},{nested:{}})}var dt=class extends Error{issues;constructor(n){super(n[0].message),this.name="ValiError",this.issues=n}};function Nr(n,e,t){let r=n;const s=[];for(const i of e)try{r=i(r,t)}catch(o){if(t.abortEarly||t.abortPipeEarly)throw o;s.push(...o.issues)}if(s.length)throw new dt(s);return r}function oi(n,e){return[...n?.path||[],e]}function Vr(n,e){const[t,r=[]]=!n||typeof n=="string"?[n,e]:[void 0,n];return{error:t,pipe:r}}function Mr(n,e,t){const{error:r,pipe:s}=Vr(e,t);return{schema:"object",object:n,async:!1,parse(i,o){if(!i||typeof i!="object"||i.toString()!=="[object Object]")throw new dt([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:i,...o}]);const a={},l=[];for(const[c,h]of Object.entries(n))try{const u=i[c];a[c]=h.parse(u,{...o,path:oi(o,{schema:"object",input:i,key:c,value:u})})}catch(u){if(o?.abortEarly)throw u;l.push(...u.issues)}if(l.length)throw new dt(l);return Nr(a,s,{...o,reason:"object"})}}}function ai(n){return{schema:"optional",wrapped:n,async:!1,parse(e,t){return e===void 0?e:n.parse(e,t)}}}function ke(n,e){const{error:t,pipe:r}=Vr(n,e);return{schema:"string",async:!1,parse(s,i){if(typeof s!="string")throw new dt([{reason:"type",validation:"string",origin:"value",message:t||"Invalid type",input:s,...i}]);return Nr(s,r,{...i,reason:"string"})}}}function vn(n,e,t){return n.parse(e,t)}function dn(){return n=>n.trim()}function li(n,e){return(t,r)=>{if(t.length!==n)throw new dt([{validation:"length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}function Xn(n,e){return(t,r)=>{if(t.length<n)throw new dt([{validation:"min_length",origin:"value",message:e||"Invalid length",input:t,...r}]);return t}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class qt{constructor(e,t,r,s){if(isNaN(e)||isNaN(t))throw new Error(`Point is invalid: (${e}, ${t})`);this.x=+e,this.y=+t,this.pressure=r||0,this.time=s||Date.now()}distanceTo(e){return Math.sqrt(Math.pow(this.x-e.x,2)+Math.pow(this.y-e.y,2))}equals(e){return this.x===e.x&&this.y===e.y&&this.pressure===e.pressure&&this.time===e.time}velocityFrom(e){return this.time!==e.time?this.distanceTo(e)/(this.time-e.time):0}}class Nn{constructor(e,t,r,s,i,o){this.startPoint=e,this.control2=t,this.control1=r,this.endPoint=s,this.startWidth=i,this.endWidth=o}static fromPoints(e,t){const r=this.calculateControlPoints(e[0],e[1],e[2]).c2,s=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new Nn(e[1],r,s,e[2],t.start,t.end)}static calculateControlPoints(e,t,r){const s=e.x-t.x,i=e.y-t.y,o=t.x-r.x,a=t.y-r.y,l={x:(e.x+t.x)/2,y:(e.y+t.y)/2},c={x:(t.x+r.x)/2,y:(t.y+r.y)/2},h=Math.sqrt(s*s+i*i),u=Math.sqrt(o*o+a*a),d=l.x-c.x,g=l.y-c.y,_=u/(h+u),k={x:c.x+d*_,y:c.y+g*_},F=t.x-k.x,E=t.y-k.y;return{c1:new qt(l.x+F,l.y+E),c2:new qt(c.x+F,c.y+E)}}length(){let t=0,r,s;for(let i=0;i<=10;i+=1){const o=i/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){const c=a-r,h=l-s;t+=Math.sqrt(c*c+h*h)}r=a,s=l}return t}point(e,t,r,s,i){return t*(1-e)*(1-e)*(1-e)+3*r*(1-e)*(1-e)*e+3*s*(1-e)*e*e+i*e*e*e}}class ci{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(e,t,r){this._et.addEventListener(e,t,r)}dispatchEvent(e){return this._et.dispatchEvent(e)}removeEventListener(e,t,r){this._et.removeEventListener(e,t,r)}}function ui(n,e=250){let t=0,r=null,s,i,o;const a=()=>{t=Date.now(),r=null,s=n.apply(i,o),r||(i=null,o=[])};return function(...c){const h=Date.now(),u=e-(h-t);return i=this,o=c,u<=0||u>e?(r&&(clearTimeout(r),r=null),t=h,s=n.apply(i,o),r||(i=null,o=[])):r||(r=window.setTimeout(a,u)),s}}class Gt extends ci{constructor(e,t={}){super(),this.canvas=e,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const s=r.changedTouches[0];this._strokeBegin(s)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const s=r.targetTouches[0];this._strokeMoveUpdate(s)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const i=r.changedTouches[0];this._strokeEnd(i)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=t.velocityFilterWeight||.7,this.minWidth=t.minWidth||.5,this.maxWidth=t.maxWidth||2.5,this.throttle="throttle"in t?t.throttle:16,this.minDistance="minDistance"in t?t.minDistance:5,this.dotSize=t.dotSize||0,this.penColor=t.penColor||"black",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=t.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?ui(Gt.prototype._strokeUpdate,this.throttle):Gt.prototype._strokeUpdate,this._ctx=e.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:e,canvas:t}=this;e.fillStyle=this.backgroundColor,e.clearRect(0,0,t.width,t.height),e.fillRect(0,0,t.width,t.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(e,t={}){return new Promise((r,s)=>{const i=new Image,o=t.ratio||window.devicePixelRatio||1,a=t.width||this.canvas.width/o,l=t.height||this.canvas.height/o,c=t.xOffset||0,h=t.yOffset||0;this._reset(this._getPointGroupOptions()),i.onload=()=>{this._ctx.drawImage(i,c,h,a,l),r()},i.onerror=u=>{s(u)},i.crossOrigin="anonymous",i.src=e,this._isEmpty=!1})}toDataURL(e="image/png",t){switch(e){case"image/svg+xml":return typeof t!="object"&&(t=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(t))}`;default:return typeof t!="number"&&(t=void 0),this.canvas.toDataURL(e,t)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const e=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!e?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(e,{clear:t=!0}={}){t&&this.clear(),this._fromData(e,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(e)}toData(){return this._data}_getPointGroupOptions(e){return{penColor:e&&"penColor"in e?e.penColor:this.penColor,dotSize:e&&"dotSize"in e?e.dotSize:this.dotSize,minWidth:e&&"minWidth"in e?e.minWidth:this.minWidth,maxWidth:e&&"maxWidth"in e?e.maxWidth:this.maxWidth,velocityFilterWeight:e&&"velocityFilterWeight"in e?e.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:e&&"compositeOperation"in e?e.compositeOperation:this.compositeOperation}}_strokeBegin(e){this.dispatchEvent(new CustomEvent("beginStroke",{detail:e}));const t=this._getPointGroupOptions(),r=Object.assign(Object.assign({},t),{points:[]});this._data.push(r),this._reset(t),this._strokeUpdate(e)}_strokeUpdate(e){if(this._data.length===0){this._strokeBegin(e);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:e}));const t=e.clientX,r=e.clientY,s=e.pressure!==void 0?e.pressure:e.force!==void 0?e.force:0,i=this._createPoint(t,r,s),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?i.distanceTo(l)<=this.minDistance:!1,h=this._getPointGroupOptions(o);if(!l||!(l&&c)){const u=this._addPoint(i,h);l?u&&this._drawCurve(u,h):this._drawDot(i,h),a.push({time:i.time,x:i.x,y:i.y,pressure:i.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:e}))}_strokeEnd(e){this._strokeUpdate(e),this.dispatchEvent(new CustomEvent("endStroke",{detail:e}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(e){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(e.minWidth+e.maxWidth)/2,this._ctx.fillStyle=e.penColor,this._ctx.globalCompositeOperation=e.compositeOperation}_createPoint(e,t,r){const s=this.canvas.getBoundingClientRect();return new qt(e-s.left,t-s.top,r,new Date().getTime())}_addPoint(e,t){const{_lastPoints:r}=this;if(r.push(e),r.length>2){r.length===3&&r.unshift(r[0]);const s=this._calculateCurveWidths(r[1],r[2],t),i=Nn.fromPoints(r,s);return r.shift(),i}return null}_calculateCurveWidths(e,t,r){const s=r.velocityFilterWeight*t.velocityFrom(e)+(1-r.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(s,r),o={end:i,start:this._lastWidth};return this._lastVelocity=s,this._lastWidth=i,o}_strokeWidth(e,t){return Math.max(t.maxWidth/(e+1),t.minWidth)}_drawCurveSegment(e,t,r){const s=this._ctx;s.moveTo(e,t),s.arc(e,t,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(e,t){const r=this._ctx,s=e.endWidth-e.startWidth,i=Math.ceil(e.length())*2;r.beginPath(),r.fillStyle=t.penColor;for(let o=0;o<i;o+=1){const a=o/i,l=a*a,c=l*a,h=1-a,u=h*h,d=u*h;let g=d*e.startPoint.x;g+=3*u*a*e.control1.x,g+=3*h*l*e.control2.x,g+=c*e.endPoint.x;let _=d*e.startPoint.y;_+=3*u*a*e.control1.y,_+=3*h*l*e.control2.y,_+=c*e.endPoint.y;const k=Math.min(e.startWidth+c*s,t.maxWidth);this._drawCurveSegment(g,_,k)}r.closePath(),r.fill()}_drawDot(e,t){const r=this._ctx,s=t.dotSize>0?t.dotSize:(t.minWidth+t.maxWidth)/2;r.beginPath(),this._drawCurveSegment(e.x,e.y,s),r.closePath(),r.fillStyle=t.penColor,r.fill()}_fromData(e,t,r){for(const s of e){const{points:i}=s,o=this._getPointGroupOptions(s);if(i.length>1)for(let a=0;a<i.length;a+=1){const l=i[a],c=new qt(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const h=this._addPoint(c,o);h&&t(h,o)}else this._reset(o),r(i[0],o)}}toSVG({includeBackgroundColor:e=!1}={}){const t=this._data,r=Math.max(window.devicePixelRatio||1,1),s=0,i=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${s} ${i} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),e&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(t,(c,{penColor:h})=>{const u=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const d=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;u.setAttribute("d",d),u.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),u.setAttribute("stroke",h),u.setAttribute("fill","none"),u.setAttribute("stroke-linecap","round"),l.appendChild(u)}},(c,{penColor:h,dotSize:u,minWidth:d,maxWidth:g})=>{const _=document.createElement("circle"),k=u>0?u:(d+g)/2;_.setAttribute("r",k.toString()),_.setAttribute("cx",c.x.toString()),_.setAttribute("cy",c.y.toString()),_.setAttribute("fill",h),l.appendChild(_)}),l.outerHTML}}const Zn=Mr({personalid:ke([dn(),li(13)]),prefix:ai(ke()),firstname:ke([dn(),Xn(1)]),lastname:ke([dn(),Xn(1)]),signature:ke("กรุณาลงชื่อ")});/**
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
 */const Fr=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hi=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=i>>2,u=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),r.push(t[h],t[u],t[d],t[g])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fr(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hi(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||c==null||u==null)throw new di;const d=i<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),u!==64){const _=c<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class di extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fi=function(n){const e=Fr(n);return Lr.encodeByteArray(e,!0)},Kt=function(n){return fi(n).replace(/\./g,"")},pi=function(n){try{return Lr.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gi=()=>mi().__FIREBASE_DEFAULTS__,_i=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yi=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pi(n[1]);return e&&JSON.parse(e)},$r=()=>{try{return gi()||_i()||yi()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bi=n=>{var e,t;return(t=(e=$r())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vi=n=>{const e=bi(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Br=()=>{var n;return(n=$r())===null||n===void 0?void 0:n.config};/**
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
 */class Ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function wi(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Kt(JSON.stringify(t)),Kt(JSON.stringify(o)),a].join(".")}function Ai(){try{return typeof indexedDB=="object"}catch{return!1}}function Ii(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Ti="FirebaseError";class mt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ti,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Si(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new mt(s,a,r)}}function Si(n,e){return n.replace(Pi,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pi=/\{\$([^}]+)}/g;function En(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Qn(i)&&Qn(o)){if(!En(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Qn(n){return n!==null&&typeof n=="object"}/**
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
 */function It(n){return n&&n._delegate?n._delegate:n}class Tt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rt="[DEFAULT]";/**
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
 */class Di{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ei;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xi(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ri(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ri(n){return n===rt?void 0:n}function xi(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ci{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Di(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const ki={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Oi=$.INFO,Ni={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Vi=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ni[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jr{constructor(e){this.name=e,this._logLevel=Oi,this._logHandler=Vi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ki[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Mi=(n,e)=>e.some(t=>n instanceof t);let er,tr;function Fi(){return er||(er=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Li(){return tr||(tr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zr=new WeakMap,wn=new WeakMap,Wr=new WeakMap,fn=new WeakMap,Vn=new WeakMap;function $i(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Qe(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zr.set(t,n)}).catch(()=>{}),Vn.set(e,n),e}function Bi(n){if(wn.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});wn.set(n,e)}let An={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return wn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wr.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Qe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ui(n){An=n(An)}function ji(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(pn(this),e,...t);return Wr.set(r,e.sort?e.sort():[e]),Qe(r)}:Li().includes(n)?function(...e){return n.apply(pn(this),e),Qe(zr.get(this))}:function(...e){return Qe(n.apply(pn(this),e))}}function zi(n){return typeof n=="function"?ji(n):(n instanceof IDBTransaction&&Bi(n),Mi(n,Fi())?new Proxy(n,An):n)}function Qe(n){if(n instanceof IDBRequest)return $i(n);if(fn.has(n))return fn.get(n);const e=zi(n);return e!==n&&(fn.set(n,e),Vn.set(e,n)),e}const pn=n=>Vn.get(n);function Wi(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=Qe(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qe(o.result),l.oldVersion,l.newVersion,Qe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Hi=["get","getKey","getAll","getAllKeys","count"],qi=["put","add","delete","clear"],mn=new Map;function nr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(mn.get(e))return mn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qi.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hi.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return mn.set(e,i),i}Ui(n=>({...n,get:(e,t,r)=>nr(e,t)||n.get(e,t,r),has:(e,t)=>!!nr(e,t)||n.has(e,t)}));/**
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
 */class Gi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ki(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ki(n){const e=n.getComponent();return e?.type==="VERSION"}const In="@firebase/app",rr="0.9.15";/**
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
 */const ot=new jr("@firebase/app"),Yi="@firebase/app-compat",Ji="@firebase/analytics-compat",Xi="@firebase/analytics",Zi="@firebase/app-check-compat",Qi="@firebase/app-check",eo="@firebase/auth",to="@firebase/auth-compat",no="@firebase/database",ro="@firebase/database-compat",so="@firebase/functions",io="@firebase/functions-compat",oo="@firebase/installations",ao="@firebase/installations-compat",lo="@firebase/messaging",co="@firebase/messaging-compat",uo="@firebase/performance",ho="@firebase/performance-compat",fo="@firebase/remote-config",po="@firebase/remote-config-compat",mo="@firebase/storage",go="@firebase/storage-compat",_o="@firebase/firestore",yo="@firebase/firestore-compat",bo="firebase",vo="10.1.0";/**
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
 */const Tn="[DEFAULT]",Eo={[In]:"fire-core",[Yi]:"fire-core-compat",[Xi]:"fire-analytics",[Ji]:"fire-analytics-compat",[Qi]:"fire-app-check",[Zi]:"fire-app-check-compat",[eo]:"fire-auth",[to]:"fire-auth-compat",[no]:"fire-rtdb",[ro]:"fire-rtdb-compat",[so]:"fire-fn",[io]:"fire-fn-compat",[oo]:"fire-iid",[ao]:"fire-iid-compat",[lo]:"fire-fcm",[co]:"fire-fcm-compat",[uo]:"fire-perf",[ho]:"fire-perf-compat",[fo]:"fire-rc",[po]:"fire-rc-compat",[mo]:"fire-gcs",[go]:"fire-gcs-compat",[_o]:"fire-fst",[yo]:"fire-fst-compat","fire-js":"fire-js",[bo]:"fire-js-all"};/**
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
 */const Yt=new Map,Sn=new Map;function wo(n,e){try{n.container.addComponent(e)}catch(t){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jt(n){const e=n.name;if(Sn.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;Sn.set(e,n);for(const t of Yt.values())wo(t,n);return!0}function Ao(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Io={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},et=new Ur("app","Firebase",Io);/**
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
 */class To{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}}/**
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
 */const So=vo;function Hr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tn,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw et.create("bad-app-name",{appName:String(s)});if(t||(t=Br()),!t)throw et.create("no-options");const i=Yt.get(s);if(i){if(En(t,i.options)&&En(r,i.config))return i;throw et.create("duplicate-app",{appName:s})}const o=new Ci(s);for(const l of Sn.values())o.addComponent(l);const a=new To(t,r,o);return Yt.set(s,a),a}function Po(n=Tn){const e=Yt.get(n);if(!e&&n===Tn&&Br())return Hr();if(!e)throw et.create("no-app",{appName:n});return e}function ht(n,e,t){var r;let s=(r=Eo[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(a.join(" "));return}Jt(new Tt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Do="firebase-heartbeat-database",Ro=1,St="firebase-heartbeat-store";let gn=null;function qr(){return gn||(gn=Wi(Do,Ro,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(St)}}}).catch(n=>{throw et.create("idb-open",{originalErrorMessage:n.message})})),gn}async function xo(n){try{return await(await qr()).transaction(St).objectStore(St).get(Gr(n))}catch(e){if(e instanceof mt)ot.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:e?.message});ot.warn(t.message)}}}async function sr(n,e){try{const r=(await qr()).transaction(St,"readwrite");await r.objectStore(St).put(e,Gr(n)),await r.done}catch(t){if(t instanceof mt)ot.warn(t.message);else{const r=et.create("idb-set",{originalErrorMessage:t?.message});ot.warn(r.message)}}}function Gr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Co=1024,ko=30*24*60*60*1e3;class Oo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Vo(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ir();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=ko}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ir(),{heartbeatsToSend:t,unsentEntries:r}=No(this._heartbeatsCache.heartbeats),s=Kt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ir(){return new Date().toISOString().substring(0,10)}function No(n,e=Co){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),or(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),or(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Vo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ai()?Ii().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xo(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return sr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function or(n){return Kt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Mo(n){Jt(new Tt("platform-logger",e=>new Gi(e),"PRIVATE")),Jt(new Tt("heartbeat",e=>new Oo(e),"PRIVATE")),ht(In,rr,n),ht(In,rr,"esm2017"),ht("fire-js","")}Mo("");var Fo="firebase",Lo="10.1.0";/**
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
 */ht(Fo,Lo,"app");/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let gt="10.1.0";/**
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
 */const ft=new jr("@firebase/firestore");function Xt(n,...e){if(ft.logLevel<=$.DEBUG){const t=e.map(Mn);ft.debug(`Firestore (${gt}): ${n}`,...t)}}function Kr(n,...e){if(ft.logLevel<=$.ERROR){const t=e.map(Mn);ft.error(`Firestore (${gt}): ${n}`,...t)}}function Yr(n,...e){if(ft.logLevel<=$.WARN){const t=e.map(Mn);ft.warn(`Firestore (${gt}): ${n}`,...t)}}function Mn(n){if(typeof n=="string")return n;try{/**
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
 */function se(n="Unexpected state"){const e=`FIRESTORE (${gt}) INTERNAL ASSERTION FAILED: `+n;throw Kr(e),new Error(e)}function Zt(n,e){n||se()}function $o(n,e){return n}/**
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
 */const ar="ok",Bo="cancelled",bt="unknown",M="invalid-argument",Uo="deadline-exceeded",jo="not-found",zo="permission-denied",Pn="unauthenticated",Wo="resource-exhausted",pt="failed-precondition",Ho="aborted",qo="out-of-range",Go="unimplemented",Ko="internal",Yo="unavailable";class T extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Jr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class Xo{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Zo{constructor(e){this.auth=null,e.onInit(t=>{this.auth=t})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Zt(typeof e.accessToken=="string"),new Jr(e.accessToken,new be(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Qo{constructor(e,t,r){this.t=e,this.i=t,this.o=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class ea{constructor(e,t,r){this.t=e,this.i=t,this.o=r}getToken(){return Promise.resolve(new Qo(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ta{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class na{constructor(e){this.h=e,this.appCheck=null,e.onInit(t=>{this.appCheck=t})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Zt(typeof e.token=="string"),new ta(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */class ra{constructor(e,t,r,s,i,o,a,l,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Qt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qt&&e.projectId===this.projectId&&e.database===this.database}}class Pt{constructor(e,t,r){t===void 0?t=0:t>e.length&&se(),r===void 0?r=e.length-t:r>e.length-t&&se(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class de extends Pt{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new T(M,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new de(t)}static emptyPath(){return new de([])}}const sa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends Pt{construct(e,t,r){return new Oe(e,t,r)}static isValidIdentifier(e){return sa.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Oe(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new T(M,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(M,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(M,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new T(M,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
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
 */class Le{constructor(e){this.path=e}static fromPath(e){return new Le(de.fromString(e))}static fromName(e){return new Le(de.fromString(e).popFirst(5))}static empty(){return new Le(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Le(new de(e.slice()))}}/**
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
 */function Xr(n,e,t){if(!t)throw new T(M,`Function ${n}() cannot be called with an empty ${e}.`)}function lr(n){if(!Le.isDocumentKey(n))throw new T(M,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function cr(n){if(Le.isDocumentKey(n))throw new T(M,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":se()}function Zr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new T(M,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fn(n);throw new T(M,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Qr(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */let jt=null;function ia(){return jt===null?jt=function(){return 268435456+Math.round(2147483648*Math.random())}():jt++,"0x"+jt.toString(16)}function en(n){return n===0&&1/n==-1/0}/**
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
 */const oa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */var ur,x;function hr(n){if(n===void 0)return Kr("RPC_ERROR","HTTP error has no status"),bt;switch(n){case 200:return ar;case 400:return pt;case 401:return Pn;case 403:return zo;case 404:return jo;case 409:return Ho;case 416:return qo;case 429:return Wo;case 499:return Bo;case 500:return bt;case 501:return Go;case 503:return Yo;case 504:return Uo;default:return n>=200&&n<300?ar:n>=400&&n<500?pt:n>=500&&n<600?Ko:bt}}/**
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
 */(x=ur||(ur={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";class aa extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.m=r+"://"+t.host,this.A=`projects/${s}/databases/${i}`,this.T=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get P(){return!1}R(t,r,s,i,o){const a=ia(),l=this.I(t,r);Xt("RestConnection",`Sending RPC '${t}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(c,i,o),this.p(t,l,c,s).then(h=>(Xt("RestConnection",`Received RPC '${t}' ${a}: `,h),h),h=>{throw Yr("RestConnection",`RPC '${t}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}g(t,r,s,i,o,a){return this.R(t,r,s,i,o)}V(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}I(t,r){const s=oa[t];return`${this.m}/v1/${r}:${s}`}}{constructor(e,t){super(e),this.F=t}v(e,t){throw new Error("Not supported by FetchConnection")}async p(e,t,r,s){var i;const o=JSON.stringify(s);let a;try{a=await this.F(t,{method:"POST",headers:r,body:o})}catch(l){const c=l;throw new T(hr(c.status),"Request failed with error: "+c.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const c=(i=l?.error)===null||i===void 0?void 0:i.message;throw new T(hr(a.status),`Request failed with error: ${c??a.statusText}`)}return a.json()}}/**
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
 */function la(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class ca{static C(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=la(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function Dt(n,e){return n<e?-1:n>e?1:0}function es(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */function dr(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}/**
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
 */class ua extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ua("Invalid base64 string: "+i):i}}(e);return new He(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new He(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Dt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const ha=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(n){if(Zt(!!n),typeof n=="string"){let e=0;const t=ha.exec(n);if(Zt(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(n.seconds),nanos:Me(n.nanos)}}function Me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fr(n){return typeof n=="string"?He.fromBase64String(n):He.fromUint8Array(n)}/**
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
 */class je{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(M,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(M,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(M,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(M,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new je(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Dt(this.nanoseconds,e.nanoseconds):Dt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */function da(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pr(n){const e=Dn(n.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}function mr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?da(n)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(n)?9007199254740991:10:se()}function Rn(n,e){if(n===e)return!0;const t=mr(n);if(t!==mr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dn(s.timestampValue),a=Dn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return fr(s.bytesValue).isEqual(fr(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),a=Me(i.doubleValue);return o===a?en(o)===en(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return es(n.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(dr(o)!==dr(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Rn(o[l],a[l])))return!1;return!0}(n,e);default:return se()}}function _n(n){return!!n&&"mapValue"in n}function vt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=vt(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vt(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
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
 */class tn{constructor(e,t){this.comparator=e,this.root=t||le.EMPTY}insert(e,t){return new tn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,le.BLACK,null,null))}remove(e){return new tn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,le.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zt(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zt(this.root,e,this.comparator,!1)}getReverseIterator(){return new zt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zt(this.root,e,this.comparator,!0)}}class zt{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class le{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??le.RED,this.left=s??le.EMPTY,this.right=i??le.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new le(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return le.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return le.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}le.EMPTY=null,le.RED=!0,le.BLACK=!1;le.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,t,r,s,i){return this}insert(e,t,r){return new le(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nn{constructor(e){this.comparator=e,this.data=new tn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gr(this.data.getIterator())}getIteratorFrom(e){return new gr(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof nn)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new nn(this.comparator);return t.data=e,t}}class gr{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new Rt([])}unionWith(e){let t=new nn(Oe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!_n(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vt(t)}setAll(e){let t=Oe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=vt(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());_n(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];_n(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ln(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rn(vt(this.value))}}/**
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
 */class fa{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.B=null,this.startAt,this.endAt}}/**
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
 */function pa(n,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!en(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,s){if(r.useProto3Json){if(isNaN(s))return{doubleValue:"NaN"};if(s===1/0)return{doubleValue:"Infinity"};if(s===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:en(s)?"-0":s}}(n,e)}/**
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
 */class ln{constructor(){this._=void 0}}class ma extends ln{}class ga extends ln{constructor(e){super(),this.elements=e}}class _a extends ln{constructor(e){super(),this.elements=e}}class ya extends ln{constructor(e,t){super(),this.serializer=e,this.$=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class cn{}class ts extends cn{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends cn{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class ba extends cn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class va extends cn{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Ea{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function xn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wa(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Aa(n,e){return xn(n,e.toTimestamp())}function rs(n,e){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(e).canonicalString()}function Cn(n,e){return rs(n.databaseId,e.path)}function Ia(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function _r(n,e,t){return{name:Cn(n,e),fields:t.value.mapValue.fields}}function Ta(n,e){let t;if(e instanceof ts)t={update:_r(n,e.key,e.value)};else if(e instanceof ba)t={delete:Cn(n,e.key)};else if(e instanceof ns)t={update:_r(n,e.key,e.data),updateMask:Sa(e.fieldMask)};else{if(!(e instanceof va))return se();t={verify:Cn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _a)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),increment:a.$};throw se()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Aa(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se()}(n,e.precondition)),t}function Sa(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}/**
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
 */function $n(n){return new Ea(n,!0)}/**
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
 */class Pa extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.Z=!1}X(){if(this.Z)throw new T(pt,"The client has already been terminated.")}R(e,t,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.R(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===Pn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(bt,s.toString())})}g(e,t,r,s){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.g(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===Pn&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new T(bt,i.toString())})}terminate(){this.Z=!0}}async function Da(n,e){const t=$o(n),r=Ia(t.serializer)+"/documents",s={writes:e.map(i=>Ta(t.serializer,i))};await t.R("Commit",r,s)}/**
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
 */const wt=new Map;function Ra(n){if(n._terminated)throw new T(pt,"The client has already been terminated.");if(!wt.has(n)){Xt("ComponentProvider","Initializing Datastore");const e=function(i){return new aa(i,fetch.bind(null))}(function(i,o,a,l){return new ra(i,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Qr(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,n.app.options.appId||"",n._persistenceKey,n._freezeSettings())),t=$n(n._databaseId),r=function(i,o,a,l){return new Pa(i,o,a,l)}(n._authCredentials,n._appCheckCredentials,e,t);wt.set(n,r)}return wt.get(n)}class yr{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new T(M,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(M,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,o,a,l){if(o===!0&&l===!0)throw new T(M,`${i} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qr((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new T(M,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new T(M,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new T(M,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class un{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new yr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(pt,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(pt,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new yr(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Jo;switch(r.type){case"firstParty":return new ea(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new T(M,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=wt.get(t);r&&(Xt("ComponentProvider","Removing Datastore"),wt.delete(t),r.terminate())}(this),Promise.resolve()}}function xa(n,e){const t=typeof n=="object"?n:Po(),r=typeof n=="string"?n:e||"(default)",s=Ao(t,"firestore/lite").getImmediate({identifier:r});if(!s._initialized){const i=vi("firestore");i&&Ca(s,...i)}return s}function Ca(n,e,t,r={}){var s;const i=(n=Zr(n,un))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=be.MOCK_USER;else{a=wi(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new T(M,"mockUserToken must contain 'sub' or 'user_id' field!");l=new be(c)}n._authCredentials=new Xo(new Jr(a,l))}}/**
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
 */class Bn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bn(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new We(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class We extends Bn{constructor(e,t,r){super(e,t,function(i){return new fa(i)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new Le(e))}withConverter(e){return new We(this.firestore,e,this._path)}}function ka(n,e,...t){if(n=It(n),Xr("collection","path",e),n instanceof un){const r=de.fromString(e,...t);return cr(r),new We(n,null,r)}{if(!(n instanceof ze||n instanceof We))throw new T(M,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return cr(r),new We(n.firestore,null,r)}}function Oa(n,e,...t){if(n=It(n),arguments.length===1&&(e=ca.C()),Xr("doc","path",e),n instanceof un){const r=de.fromString(e,...t);return lr(r),new ze(n,null,new Le(r))}{if(!(n instanceof ze||n instanceof We))throw new T(M,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return lr(r),new ze(n.firestore,n instanceof We?n.converter:null,new Le(r))}}/**
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
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(He.fromBase64String(e))}catch(t){throw new T(M,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xt(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ss{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new T(M,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class is{constructor(e){this._methodName=e}}/**
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
 */class os{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(M,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(M,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Dt(this._lat,e._lat)||Dt(this._long,e._long)}}/**
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
 */const Na=/^__.*__$/;class Va{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,t,this.fieldTransforms):new ts(e,this.data,t,this.fieldTransforms)}}function as(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class Un{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.et(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get rt(){return this.settings.rt}nt(e){return new Un(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}it(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.ot(e),s}ut(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.nt({path:r,st:!1});return s.et(),s}_t(e){return this.nt({path:void 0,st:!0})}lt(e){return sn(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.ht)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}et(){if(this.path)for(let e=0;e<this.path.length;e++)this.ot(this.path.get(e))}ot(e){if(e.length===0)throw this.lt("Document fields must not be empty");if(as(this.rt)&&Na.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class Ma{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$n(e)}dt(e,t,r,s=!1){return new Un({rt:e,methodName:t,ht:r,path:Oe.emptyPath(),st:!1,ct:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fa(n){const e=n._freezeSettings(),t=$n(n._databaseId);return new Ma(n._databaseId,!!e.ignoreUndefinedProperties,t)}function La(n,e,t,r,s,i={}){const o=n.dt(i.merge||i.mergeFields?2:0,e,t,s);hs("Data must be an object, but it was:",o,r);const a=cs(r,o);let l,c;if(i.merge)l=new Rt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const u of i.mergeFields){const d=$a(e,u,t);if(!o.contains(d))throw new T(M,`Field '${d}' is specified in your field mask but missing from your input data.`);ja(h,d)||h.push(d)}l=new Rt(h),c=o.fieldTransforms.filter(u=>l.covers(u.field))}else l=null,c=o.fieldTransforms;return new Va(new rn(a),l,c)}function ls(n,e){if(us(n=It(n)))return hs("Unsupported field value:",e,n),cs(n,e);if(n instanceof is)return function(r,s){if(!as(s.rt))throw s.lt(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.lt(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.st&&e.rt!==4)throw e.lt("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=ls(a,s._t(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=It(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pa(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=je.fromDate(r);return{timestampValue:xn(s.serializer,i)}}if(r instanceof je){const i=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xn(s.serializer,i)}}if(r instanceof os)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xt)return{bytesValue:wa(s.serializer,r._byteString)};if(r instanceof ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.lt(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rs(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.lt(`Unsupported field value: ${Fn(r)}`)}(n,e)}function cs(n,e){const t={};return function(s){for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i))return!1;return!0}(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,(r,s)=>{const i=ls(s,e.it(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function us(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof je||n instanceof os||n instanceof xt||n instanceof ze||n instanceof is)}function hs(n,e,t){if(!us(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Fn(t);throw r==="an object"?e.lt(n+" a custom object"):e.lt(n+" "+r)}}function $a(n,e,t){if((e=It(e))instanceof ss)return e._internalPath;if(typeof e=="string")return Ua(n,e);throw sn("Field path arguments must be of type string or ",n,!1,void 0,t)}const Ba=new RegExp("[~\\*/\\[\\]]");function Ua(n,e,t){if(e.search(Ba)>=0)throw sn(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ss(...e.split("."))._internalPath}catch{throw sn(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function sn(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new T(M,a+n+l)}function ja(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */function za(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}function Wa(n,e){const t=Oa(n=Zr(n,We)),r=za(n.converter,e),s=La(Fa(n.firestore),"addDoc",t._key,r,t.converter!==null,{});return Da(Ra(n.firestore),[s.toMutation(t._key,Et.exists(!1))]).then(()=>t)}(function(){(function(t){gt=t})(`${So}_lite`),Jt(new Tt("firestore/lite",(e,{instanceIdentifier:t,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new un(new Zo(e.getProvider("auth-internal")),new na(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(M,'"projectId" not provided in firebase.initializeApp.');return new Qt(a.options.projectId,l)}(s,t),s);return r&&i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),ht("firestore-lite","4.1.0",""),ht("firestore-lite","4.1.0","esm2017")})();const Ha=Mr({apiKey:ke(),authDomain:ke(),projectId:ke(),storageBucket:ke(),messagingSenderId:ke(),appId:ke()}),qa="documents",Ga=vn(Ha,JSON.parse('{"apiKey":"AIzaSyBYGz_WUwzIpZYGf4SN4jo5xqp3MNEC8FA","authDomain":"conforall.firebaseapp.com","projectId":"conforall","storageBucket":"conforall.appspot.com","messagingSenderId":"289133639309","appId":"1:289133639309:web:b6ddf29928a923028214c4"}')),Ka=Hr(Ga),Ya=xa(Ka),Ja=n=>Wa(ka(Ya,qa),n);function Xa(n){let e,t='<span class="label-text font-bold">เลขประจำตัวประชาชน*</span>',r,s,i,o,a,l,c,h;return{c(){e=N("label"),e.innerHTML=t,r=oe(),s=N("input"),o=oe(),a=N("div"),l=N("span"),c=Ct("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(u){e=V(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-1hbik5o"&&(e.innerHTML=t),r=ae(u),s=V(u,"INPUT",{type:!0,name:!0,class:!0}),o=ae(u),a=V(u,"DIV",{class:!0});var d=re(a);l=V(d,"SPAN",{class:!0});var g=re(l);c=kt(g,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),g.forEach(P),d.forEach(P),this.h()},h(){w(e,"class","label"),w(e,"for","personalid"),w(s,"type","string"),w(s,"name","personalid"),w(s,"class",i="input input-bordered "+(n[9]?"input-error":"")),w(l,"class",h="label-text-alt "+(n[9]?"text-error":"")),w(a,"class","label")},m(u,d){K(u,e,d),K(u,r,d),K(u,s,d),K(u,o,d),K(u,a,d),C(a,l),C(l,c)},p(u,d){d&512&&i!==(i="input input-bordered "+(u[9]?"input-error":""))&&w(s,"class",i),d&512&&h!==(h="label-text-alt "+(u[9]?"text-error":""))&&w(l,"class",h)},d(u){u&&(P(e),P(r),P(s),P(o),P(a))}}}function Za(n){let e,t='<span class="label-text font-bold">ชื่อ*</span>',r,s,i,o,a,l,c,h;return{c(){e=N("label"),e.innerHTML=t,r=oe(),s=N("input"),o=oe(),a=N("div"),l=N("span"),c=Ct("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(u){e=V(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-151gpj2"&&(e.innerHTML=t),r=ae(u),s=V(u,"INPUT",{type:!0,name:!0,class:!0}),o=ae(u),a=V(u,"DIV",{class:!0});var d=re(a);l=V(d,"SPAN",{class:!0});var g=re(l);c=kt(g,"ระบุชื่อจริงเป็นภาษาไทย"),g.forEach(P),d.forEach(P),this.h()},h(){w(e,"class","label"),w(e,"for","firstname"),w(s,"type","text"),w(s,"name","firstname"),w(s,"class",i="input input-bordered "+(n[9]?"input-error":"")),w(l,"class",h="label-text-alt "+(n[9]?"text-error":"")),w(a,"class","label")},m(u,d){K(u,e,d),K(u,r,d),K(u,s,d),K(u,o,d),K(u,a,d),C(a,l),C(l,c)},p(u,d){d&512&&i!==(i="input input-bordered "+(u[9]?"input-error":""))&&w(s,"class",i),d&512&&h!==(h="label-text-alt "+(u[9]?"text-error":""))&&w(l,"class",h)},d(u){u&&(P(e),P(r),P(s),P(o),P(a))}}}function Qa(n){let e,t='<span class="label-text font-bold">นามสกุล*</span>',r,s,i,o,a,l,c,h;return{c(){e=N("label"),e.innerHTML=t,r=oe(),s=N("input"),o=oe(),a=N("div"),l=N("span"),c=Ct("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(u){e=V(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Fe(e)!=="svelte-l9o2wm"&&(e.innerHTML=t),r=ae(u),s=V(u,"INPUT",{type:!0,name:!0,class:!0}),o=ae(u),a=V(u,"DIV",{class:!0});var d=re(a);l=V(d,"SPAN",{class:!0});var g=re(l);c=kt(g,"ระบุนามสกุลเป็นภาษาไทย"),g.forEach(P),d.forEach(P),this.h()},h(){w(e,"class","label"),w(e,"for","lastname"),w(s,"type","text"),w(s,"name","lastname"),w(s,"class",i="input input-bordered "+(n[9]?"input-error":"")),w(l,"class",h="label-text-alt "+(n[9]?"text-error":"")),w(a,"class","label")},m(u,d){K(u,e,d),K(u,r,d),K(u,s,d),K(u,o,d),K(u,a,d),C(a,l),C(l,c)},p(u,d){d&512&&i!==(i="input input-bordered "+(u[9]?"input-error":""))&&w(s,"class",i),d&512&&h!==(h="label-text-alt "+(u[9]?"text-error":""))&&w(l,"class",h)},d(u){u&&(P(e),P(r),P(s),P(o),P(a))}}}function el(n){let e,t,r=(n[9]||"")+"",s;return{c(){e=N("div"),t=N("span"),s=Ct(r),this.h()},l(i){e=V(i,"DIV",{class:!0});var o=re(e);t=V(o,"SPAN",{class:!0});var a=re(t);s=kt(a,r),a.forEach(P),o.forEach(P),this.h()},h(){w(t,"class","label-text-alt text-error"),w(e,"class","label")},m(i,o){K(i,e,o),C(e,t),C(t,s)},p(i,o){o&512&&r!==(r=(i[9]||"")+"")&&Is(s,r)},d(i){i&&P(e)}}}function tl(n){let e,t,r,s,i,o,a,l='<span class="label-text font-bold">คำนำหน้า</span>',c,h,u,d,g="นาย",_,k="นาง",F,E="นางสาว",Y,J,O,we,B,ie,Z,Ae='<span class="label-text font-bold">ลงลายมือชื่อ*</span>',Pe,A,Q,G,De="ลบ",Ie,L,ge,ue,p='<input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อเสนอกฎหมาย อ่านนโยบายคุ้มครองข้อมูลส่วนบุคคล</span>',I,y,W,H,z,he,Re;return r=new Ut({props:{for:"personalid",$$slots:{default:[Xa,({messages:v})=>({9:v}),({messages:v})=>v?512:0]},$$scope:{ctx:n}}}),O=new Ut({props:{for:"firstname",$$slots:{default:[Za,({messages:v})=>({9:v}),({messages:v})=>v?512:0]},$$scope:{ctx:n}}}),B=new Ut({props:{for:"lastname",$$slots:{default:[Qa,({messages:v})=>({9:v}),({messages:v})=>v?512:0]},$$scope:{ctx:n}}}),L=new Ut({props:{for:"signature",$$slots:{default:[el,({messages:v})=>({9:v}),({messages:v})=>v?512:0]},$$scope:{ctx:n}}}),{c(){e=N("form"),t=N("div"),Nt(r.$$.fragment),s=oe(),i=N("div"),o=N("div"),a=N("label"),a.innerHTML=l,c=oe(),h=N("select"),u=N("option"),d=N("option"),d.textContent=g,_=N("option"),_.textContent=k,F=N("option"),F.textContent=E,Y=oe(),J=N("div"),Nt(O.$$.fragment),we=oe(),Nt(B.$$.fragment),ie=oe(),Z=N("div"),Z.innerHTML=Ae,Pe=oe(),A=N("canvas"),Q=oe(),G=N("button"),G.textContent=De,Ie=oe(),Nt(L.$$.fragment),ge=oe(),ue=N("label"),ue.innerHTML=p,I=oe(),y=N("button"),W=Ct("ลงชื่อเลย"),this.h()},l(v){e=V(v,"FORM",{});var R=re(e);t=V(R,"DIV",{class:!0});var fe=re(t);Vt(r.$$.fragment,fe),s=ae(fe),i=V(fe,"DIV",{class:!0});var Te=re(i);o=V(Te,"DIV",{});var pe=re(o);a=V(pe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Fe(a)!=="svelte-1flkdsb"&&(a.innerHTML=l),c=ae(pe),h=V(pe,"SELECT",{class:!0,name:!0});var X=re(h);u=V(X,"OPTION",{}),re(u).forEach(P),d=V(X,"OPTION",{"data-svelte-h":!0}),Fe(d)!=="svelte-1en4y3b"&&(d.textContent=g),_=V(X,"OPTION",{"data-svelte-h":!0}),Fe(_)!=="svelte-18vmce2"&&(_.textContent=k),F=V(X,"OPTION",{"data-svelte-h":!0}),Fe(F)!=="svelte-1lp5zi9"&&(F.textContent=E),X.forEach(P),pe.forEach(P),Y=ae(Te),J=V(Te,"DIV",{class:!0});var m=re(J);Vt(O.$$.fragment,m),m.forEach(P),Te.forEach(P),we=ae(fe),Vt(B.$$.fragment,fe),fe.forEach(P),ie=ae(R),Z=V(R,"DIV",{class:!0,"data-svelte-h":!0}),Fe(Z)!=="svelte-1656t35"&&(Z.innerHTML=Ae),Pe=ae(R),A=V(R,"CANVAS",{}),re(A).forEach(P),Q=ae(R),G=V(R,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Fe(G)!=="svelte-1l97cx7"&&(G.textContent=De),Ie=ae(R),Vt(L.$$.fragment,R),ge=ae(R),ue=V(R,"LABEL",{class:!0,"data-svelte-h":!0}),Fe(ue)!=="svelte-1v0qgfk"&&(ue.innerHTML=p),I=ae(R),y=V(R,"BUTTON",{type:!0,class:!0});var f=re(y);W=kt(f,"ลงชื่อเลย"),f.forEach(P),R.forEach(P),this.h()},h(){w(a,"class","label"),w(a,"for","prefix"),u.selected=!0,u.__value="",Mt(u,u.__value),d.__value="นาย",Mt(d,d.__value),_.__value="นาง",Mt(_,_.__value),F.__value="นางสาว",Mt(F,F.__value),w(h,"class","select select-bordered w-full max-w-xs"),w(h,"name","prefix"),w(J,"class","flex-1"),w(i,"class","flex flex-row justify-between"),w(t,"class","form-control w-full"),w(Z,"class","label"),w(G,"type","button"),w(G,"class","btn"),w(ue,"class","label cursor-pointer space-x-2"),w(y,"type","submit"),w(y,"class","btn btn-primary"),y.disabled=H=!n[1].consent},m(v,R){K(v,e,R),C(e,t),Ft(r,t,null),C(t,s),C(t,i),C(i,o),C(o,a),C(o,c),C(o,h),C(h,u),C(h,d),C(h,_),C(h,F),C(i,Y),C(i,J),Ft(O,J,null),C(t,we),Ft(B,t,null),C(e,ie),C(e,Z),C(e,Pe),C(e,A),n[5](A),C(e,Q),C(e,G),C(e,Ie),Ft(L,e,null),C(e,ge),C(e,ue),C(e,I),C(e,y),C(y,W),z=!0,he||(Re=[vs(G,"click",n[4]),Es(n[2].call(null,e))],he=!0)},p(v,[R]){const fe={};R&1536&&(fe.$$scope={dirty:R,ctx:v}),r.$set(fe);const Te={};R&1536&&(Te.$$scope={dirty:R,ctx:v}),O.$set(Te);const pe={};R&1536&&(pe.$$scope={dirty:R,ctx:v}),B.$set(pe);const X={};R&1536&&(X.$$scope={dirty:R,ctx:v}),L.$set(X),(!z||R&2&&H!==(H=!v[1].consent))&&(y.disabled=H)},i(v){z||(Xe(r.$$.fragment,v),Xe(O.$$.fragment,v),Xe(B.$$.fragment,v),Xe(L.$$.fragment,v),z=!0)},o(v){Je(r.$$.fragment,v),Je(O.$$.fragment,v),Je(B.$$.fragment,v),Je(L.$$.fragment,v),z=!1},d(v){v&&P(e),Lt(r),Lt(O),Lt(B),n[5](null),Lt(L),he=!1,ws(Re)}}}function nl(n,e,t){let r,s,i;const{form:o,setTouched:a,setData:l,data:c}=Js({validate(d){try{vn(Zn,d)}catch(g){return ii(g).nested}return{}},async onSubmit(d){try{await Ja(vn(Zn,d))}catch(g){alert(g)}},extend:Xs});As(n,c,d=>t(1,r=d)),Er(()=>{i=new Gt(s),i.addEventListener("endStroke",()=>{a("signature",!0),l("signature",i.toDataURL())})});function h(){i.clear(),l("signature",void 0)}function u(d){wr[d?"unshift":"push"](()=>{s=d,t(0,s)})}return[s,r,o,c,h,u]}class al extends br{constructor(e){super(),vr(this,e,nl,tl,kn,{})}}export{al as default};

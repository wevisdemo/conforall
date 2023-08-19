import{z as Xe,s as ns,A as fd,S as Oo,i as Vo,e as O,a as ut,B as Fa,b as V,d as Y,h as A,f as ht,C as pd,k as G,D as ac,q as Ee,E as lc,p as we,F as md,G as Mo,H as gd,I as Ti,c as cc,u as uc,n as hc,o as dc,r as cr,w as ur,v as Rt,j as y,J as li,l as P,x as hr,K as _d,y as dr,L as yd,t as nn,g as rn,m as vd,M as Pi,N as Vn,O as Mn,P as Ed}from"./index.c8f5ee00.js";function wd(e,...t){const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function De(e){let t;return wd(e,n=>t=n)(),t}class Td extends Error{constructor(t,n){super(t),this.name="FelteSubmitError",this.response=n}}function Id(e,t){return Object.keys(e).some(r=>t(e[r]))}function rs(e,t){return Object.keys(e||{}).reduce((r,i)=>Object.assign(Object.assign({},r),{[i]:t(e[i])}),{})}function K(e){return Object.prototype.toString.call(e)==="[object Object]"}function re(e){return Object.keys(e||{}).reduce((t,n)=>Object.assign(Object.assign({},t),{[n]:K(e[n])?re(e[n]):Array.isArray(e[n])?[...e[n]]:e[n]}),{})}function Ad(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function bd(e){return function(t){if(K(t)){const n=ie(t,e);return Ad(n,["key"])}return e}}function ie(e,t){return rs(e,n=>K(n)?ie(n,t):Array.isArray(n)?n.map(bd(t)):t)}function Je(...e){const t=e.pop(),n=e.shift();if(typeof n=="string")return n;const r=re(n);if(e.length===0)return r;for(const i of e){if(!i)continue;if(typeof i=="string")return i;let s=t(r,i);if(typeof s<"u")return s;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(i))));for(const a of o)if(s=t(r[a],i[a]),typeof s<"u")r[a]=s;else if(K(i[a])&&K(r[a]))r[a]=Je(r[a],i[a],t);else if(Array.isArray(i[a]))r[a]=i[a].map((l,c)=>{if(!K(l))return l;const u=Array.isArray(r[a])?r[a][c]:r[a];return Je(u,l,t)});else if(K(i[a])){const l=ie(re(i[a]),void 0);r[a]=Je(l,i[a],t)}else typeof i[a]<"u"&&(r[a]=i[a])}return r}function Rd(e,t){if(!(K(e)&&K(t))){if(Array.isArray(t)){if(t.some(K))return;const n=Array.isArray(e)?e:[];return t.map((r,i)=>{var s;return(s=n[i])!==null&&s!==void 0?s:r})}if(typeof e<"u")return e}}function Ua(...e){return Je(...e,Rd)}function fc(...e){return Je(...e,()=>{})}function Re(e,t,n){const r=s=>String.prototype.split.call(t,s).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,e),i=r(/[,[\]]+?/)||r(/[,[\].]+?/);return i===void 0||i===e?n:i}function $r(e,t,n){e&&(e=re(e)),K(e)||(e={});const r=Array.isArray(t)?t:t.match(/[^.[\]]+/g)||[],i=r[r.length-1];if(!i)return e;let s=e;for(let o=0;o<r.length-1;o++){const a=r[o];if(!s[a]||!K(s[a])&&!Array.isArray(s[a])){const l=r[o+1];isNaN(Number(l))?s[a]={}:s[a]=[]}s=s[a]}return s[i]=n(s[i]),e}function ct(e,t,n){return $r(e,t,()=>n)}function fr(e,t){if(!e||Object(e)!==e)return;typeof e<"u"&&(e=re(e));const n=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g)||[],r=n.length===1?e:Re(e,n.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(n[n.length-1]),1):r==null||delete r[n[n.length-1]],e}function Tr(e,t){return Id(e,n=>K(n)?Tr(n,t):Array.isArray(n)?n.length===0||n.every(r=>typeof r=="string")?t(n):n.some(r=>K(r)?Tr(r,t):t(r)):t(n))}function Fn(e){return e?.nodeName==="INPUT"}function Cd(e){return e?.nodeName==="TEXTAREA"}function Un(e){return e?.nodeName==="SELECT"}function is(e){return e?.nodeName==="FIELDSET"}function jt(e){return Fn(e)||Cd(e)||Un(e)}function Ba(e){return e.nodeType===Node.ELEMENT_NODE}function Dt(e,t){return t??(jt(e)?e.name:"")}function Ms(e){let t=e;for(;t&&t.nodeName!=="FORM";){if(t.hasAttribute("data-felte-ignore"))return!0;t=t.parentElement}return!1}function Sd(e,t){if(!(K(e)||K(t))){if(e===null||e==="")return t;if(t===null||t===""||!t)return e;if(!(!e||!t)){if(Array.isArray(e)){if(!Array.isArray(t))return[...e,t];const n=[],r=Math.max(t.length,e.length);for(let i=0;i<r;i++){let s=e[i],o=t[i];!K(s)&&!K(o)?(Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]),n.push(...s,...o)):n.push(Nn([s??{},o??{}]))}return n.filter(Boolean)}return Array.isArray(t)||(t=[t]),[e,...t].reduce((n,r)=>n.concat(r),[]).filter(Boolean)}}}function Nn(e){return Je(...e,Sd)}function Pd(e,t){return t?(Array.isArray(t)?t:[t]).map(r=>r(e)):[]}function ro(e,t){return t?Array.isArray(t)?t.reduce((n,r)=>r(n),e):t(e):e}function Lo(e=8){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function ki(e,t,{onInit:n,onEnd:r}={}){let i;return(...s)=>{i||n?.(),i&&clearTimeout(i),i=setTimeout(()=>{e.apply(this,s),i=void 0,r?.()},t)}}function io(e){if(jt(e))return[e];if(e.childElementCount===0)return[];const t=new Set;for(const n of e.children){if(jt(n)&&t.add(n),is(n))for(const r of n.elements)jt(r)&&t.add(r);n.childElementCount>0&&io(n).forEach(r=>t.add(r))}return Array.from(t)}function pc(e){for(const t of e.elements)!jt(t)&&!is(t)||e.hasAttribute("data-felte-keep-on-remove")&&!t.hasAttribute("data-felte-keep-on-remove")&&(t.dataset.felteKeepOnRemove=e.dataset.felteKeepOnRemove)}function mc(e){return e.type.match(/^(number|range)$/)?e.value?+e.value:void 0:e.value}function $a(e){var t;let n={},r={};for(const i of e.elements){if(is(i)&&pc(i),!jt(i)||!i.name)continue;const s=Dt(i);if(Fn(i)){if(i.type==="checkbox"){if(typeof Re(n,s)>"u"){if(Array.from(e.querySelectorAll(`[name="${i.name}"]`)).filter(l=>jt(l)?s===Dt(l):!1).length===1){n=ct(n,s,i.checked),r=ct(r,s,!1);continue}n=ct(n,s,i.checked?[i.value]:[]),r=ct(r,s,!1);continue}Array.isArray(Re(n,s))&&i.checked&&(n=$r(n,s,a=>[...a,i.value]));continue}if(i.type==="radio"){if(Re(n,s))continue;n=ct(n,s,i.checked?i.value:void 0),r=ct(r,s,!1);continue}if(i.type==="file"){n=ct(n,s,i.multiple?Array.from(i.files||[]):(t=i.files)===null||t===void 0?void 0:t[0]),r=ct(r,s,!1);continue}}else if(Un(i)){if(!i.multiple)n=ct(n,s,i.value);else{const l=Array.from(i.selectedOptions).map(c=>c.value);n=ct(n,s,l)}r=ct(r,s,!1);continue}const o=mc(i);n=ct(n,s,o),r=ct(r,s,!1)}return{defaultData:n,defaultTouched:r}}function kd(e,t){var n;if(!jt(e))return;const r=t;if(Fn(e)){if(e.type==="checkbox"){const i=r;if(typeof i>"u"||typeof i=="boolean"){e.checked=!!i;return}Array.isArray(i)&&(i.includes(e.value)?e.checked=!0:e.checked=!1);return}if(e.type==="radio"){const i=r;e.value===i?e.checked=!0:e.checked=!1;return}if(e.type==="file"){if(t instanceof FileList)e.files=t;else if(t instanceof File&&typeof DataTransfer<"u"){const i=new DataTransfer;i.items.add(t),e.files=i.files}else if(typeof DataTransfer<"u"&&Array.isArray(t)&&t.some(i=>i instanceof File)){const i=new DataTransfer;for(const s of t)s instanceof File&&i.items.add(s);e.files=i.files}else(!t||Array.isArray(t)&&!t.length)&&(e.files=null,e.value="");return}}else if(Un(e)){if(e.multiple){if(Array.isArray(r)){e.value=String((n=r[0])!==null&&n!==void 0?n:"");const s=r.map(o=>String(o));for(const o of e.options)s.includes(o.value)?o.selected=!0:o.selected=!1}}else{e.value=String(r??"");for(const s of e.options)s.value===String(r)?s.selected=!0:s.selected=!1}return}e.value=String(r??"")}function ci(e,t){for(const n of e.elements){if(is(n)&&pc(n),!jt(n)||!n.name)continue;const r=Dt(n);kd(n,Re(t,r))}}function gc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ne(e,t){return rs(e,n=>K(n)?Ne(n,t):Array.isArray(n)?n.length===0||n.every(r=>typeof r=="string")?t:n.map(r=>{const i=Ne(r,t);return gc(i,["key"])}):t)}function Tn(e){return e?rs(e,t=>K(t)?Tn(t):Array.isArray(t)?t.length===0||t.every(n=>typeof n=="string")?t:t.map(n=>{if(!K(n))return n;const r=Tn(n);return r.key||(r.key=Lo()),r}):t):{}}function mn(e){return e?rs(e,t=>K(t)?mn(t):Array.isArray(t)?t.length===0||t.every(n=>typeof n=="string")?t:t.map(n=>{if(!K(n))return n;const r=mn(n);return gc(r,["key"])}):t):{}}function Dd(){class e extends CustomEvent{constructor(i){super("feltesuccess",{detail:i})}}class t extends CustomEvent{constructor(i){super("felteerror",{detail:i,cancelable:!0})}setErrors(i){this.preventDefault(),this.errors=i}}class n extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(i){this.onSubmit=i}handleError(i){this.onError=i}handleSuccess(i){this.onSuccess=i}}return{createErrorEvent:r=>new t(r),createSubmitEvent:()=>new n,createSuccessEvent:r=>new e(r)}}function Nd(e){if(e)return async function(){let n=new FormData(e);const r=new URL(e.action),i=e.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||e.method;let s=e.enctype;e.querySelector('input[type="file"]')&&(s="multipart/form-data"),(i==="get"||s==="application/x-www-form-urlencoded")&&(n=new URLSearchParams(n));let o;i==="get"?(n.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:i,headers:{Accept:"application/json"}}):o={method:i,body:n,headers:Object.assign(Object.assign({},s!=="multipart/form-data"&&{"Content-Type":s}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new Td("An error occurred while submitting the form",a)}}function ui(e,t,n,r){return $r(e,t,i=>(typeof i<"u"&&!Array.isArray(i)||(i||(i=[]),typeof r>"u"?i.push(n):i.splice(r,0,n)),i))}function Od(e,t,n,r){return $r(e,t,i=>(!i||!Array.isArray(i)||([i[n],i[r]]=[i[r],i[n]]),i))}function Vd(e,t,n,r){return $r(e,t,i=>(!i||!Array.isArray(i)||i.splice(r,0,i.splice(n,1)[0]),i))}function ja(e){return typeof e=="function"}function We(e){return(n,r)=>{if(typeof n=="string"){const i=n;e(s=>{const o=ja(r)?r(Re(s,i)):r;return ct(s,i,o)})}else e(i=>ja(n)?n(i):n)}}function Md({stores:e,config:t,validateErrors:n,validateWarnings:r,_getCurrentExtenders:i}){var s;let o,a=Tn((s=t.initialValues)!==null&&s!==void 0?s:{});const{data:l,touched:c,errors:u,warnings:h,isDirty:d,isSubmitting:f,interacted:p}=e,E=We(l.update),w=We(c.update),I=We(u.update),$=We(h.update);function M(T){E(z=>{const j=T(z);return o&&ci(o,j),j})}const S=(T,z,j)=>{We(M)(T,z),typeof T=="string"&&j&&w(T,!0)};function x(T,z,j){const nt=K(z)?Ne(z,!1):!1,mt=K(nt)?ie(nt,[]):[];z=K(z)?Object.assign(Object.assign({},z),{key:Lo()}):z,u.update(gt=>ui(gt,T,mt,j)),h.update(gt=>ui(gt,T,mt,j)),c.update(gt=>ui(gt,T,nt,j)),l.update(gt=>{const yt=ui(gt,T,z,j);return setTimeout(()=>o&&ci(o,yt)),yt})}function U(T){u.update(T),h.update(T),c.update(T),l.update(z=>{const j=T(z);return setTimeout(()=>o&&ci(o,j)),j})}function lt(T){U(z=>fr(z,T))}function st(T,z,j){U(nt=>Od(nt,T,z,j))}function Z(T,z,j){U(nt=>Vd(nt,T,z,j))}function Tt(T){const z=Re(a,T),j=K(z)?Ne(z,!1):!1,nt=K(j)?ie(j,[]):[];l.update(mt=>{const gt=ct(mt,T,z);return o&&ci(o,gt),gt}),c.update(mt=>ct(mt,T,j)),u.update(mt=>ct(mt,T,nt)),h.update(mt=>ct(mt,T,nt))}const k=We(f.update),q=We(d.update),ot=We(p.update);async function Ct(){const T=De(l);c.set(Ne(T,!0)),p.set(null);const z=await n(T);return await r(T),z}function qt(){S(re(a)),w(T=>ie(T,!1)),p.set(null),d.set(!1)}function at(T){return async function(j){var nt,mt,gt,yt,fe,me,Ft;const{createErrorEvent:je,createSubmitEvent:oe,createSuccessEvent:ge}=Dd(),ae=oe();o?.dispatchEvent(ae);const R=(mt=(nt=ae.onError)!==null&&nt!==void 0?nt:T?.onError)!==null&&mt!==void 0?mt:t.onError,m=(yt=(gt=ae.onSuccess)!==null&&gt!==void 0?gt:T?.onSuccess)!==null&&yt!==void 0?yt:t.onSuccess,C=(Ft=(me=(fe=ae.onSubmit)!==null&&fe!==void 0?fe:T?.onSubmit)!==null&&me!==void 0?me:t.onSubmit)!==null&&Ft!==void 0?Ft:Nd(o);if(!C||(j?.preventDefault(),ae.defaultPrevented))return;f.set(!0),p.set(null);const H=mn(De(l)),At=await n(H,T?.validate),St=await r(H,T?.warn);if(St&&h.set(fc(ie(H,[]),St)),c.set(Ne(H,!0)),At&&(c.set(Ne(At,!0)),Tr(At,X=>Array.isArray(X)?X.length>=1:!!X))){await new Promise(X=>setTimeout(X)),i().forEach(X=>{var bt;return(bt=X.onSubmitError)===null||bt===void 0?void 0:bt.call(X,{data:H,errors:At})}),f.set(!1);return}const b={event:j,setFields:S,setData:E,setTouched:w,setErrors:I,setWarnings:$,unsetField:lt,addField:x,resetField:Tt,reset:qt,setInitialValues:It.setInitialValues,moveField:Z,swapFields:st,form:o,controls:o&&Array.from(o.elements).filter(jt),config:Object.assign(Object.assign({},t),T)};try{const B=await C(H,b);o?.dispatchEvent(ge(Object.assign({response:B},b))),await m?.(B,b)}catch(B){const X=je(Object.assign({error:B},b));if(o?.dispatchEvent(X),!R&&!X.defaultPrevented)throw B;if(!R&&!X.errors)return;const bt=X.errors||await R?.(B,b);bt&&(c.set(Ne(bt,!0)),u.set(bt),await new Promise(Pt=>setTimeout(Pt)),i().forEach(Pt=>{var Ut;return(Ut=Pt.onSubmitError)===null||Ut===void 0?void 0:Ut.call(Pt,{data:H,errors:De(u)})}))}finally{f.set(!1)}}}const It={setData:E,setFields:S,setTouched:w,setErrors:I,setWarnings:$,setIsSubmitting:k,setIsDirty:q,setInteracted:ot,validate:Ct,reset:qt,unsetField:lt,resetField:Tt,addField:x,swapFields:st,moveField:Z,createSubmitHandler:at,handleSubmit:at(),setInitialValues:T=>{a=Tn(T)}};return{public:It,private:{_setFormNode(T){o=T},_getInitialValues:()=>a}}}function Ld({helpers:e,stores:t,config:n,extender:r,createSubmitHandler:i,handleSubmit:s,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:u,setTouched:h,reset:d,setInitialValues:f}=e,{addValidator:p,addTransformer:E,validate:w}=e,{data:I,errors:$,warnings:M,touched:S,isSubmitting:x,isDirty:U,interacted:lt,isValid:st,isValidating:Z}=t;function Tt(k){k.requestSubmit||(k.requestSubmit=s);function q(R){return function(m){return m({form:k,stage:R,controls:Array.from(k.elements).filter(jt),data:I,errors:$,warnings:M,touched:S,isValid:st,isValidating:Z,isSubmitting:x,isDirty:U,interacted:lt,config:n,addValidator:p,addTransformer:E,setFields:u,validate:w,reset:d,createSubmitHandler:i,handleSubmit:s})}}l(r.map(q("MOUNT"))),k.noValidate=!!n.validate;const{defaultData:ot,defaultTouched:Ct}=$a(k);o(k),f(fc(re(ot),a())),u(a()),S.set(Ct);function qt(R){const m=Dt(R),C=Array.from(k.querySelectorAll(`[name="${R.name}"]`)).filter(H=>jt(H)?m===Dt(H):!1);if(C.length!==0)return C.length===1?I.update(H=>ct(H,Dt(R),R.checked)):I.update(H=>ct(H,Dt(R),C.filter(Fn).filter(At=>At.checked).map(At=>At.value)))}function at(R){const m=k.querySelectorAll(`[name="${R.name}"]`),C=Array.from(m).find(H=>Fn(H)&&H.checked);I.update(H=>ct(H,Dt(R),C?.value))}function It(R){var m;const C=Array.from((m=R.files)!==null&&m!==void 0?m:[]);I.update(H=>ct(H,Dt(R),R.multiple?C:C[0]))}function de(R){if(!R.multiple)I.update(m=>ct(m,Dt(R),R.value));else{const m=Array.from(R.selectedOptions).map(C=>C.value);I.update(C=>ct(C,Dt(R),m))}}function T(R){const m=R.target;if(!m||!jt(m)||Un(m)||Ms(m)||["checkbox","radio","file"].includes(m.type)||!m.name)return;U.set(!0);const C=mc(m);lt.set(m.name),I.update(H=>ct(H,Dt(m),C))}function z(R){const m=R.target;if(!(!m||!jt(m)||Ms(m))&&m.name)if(h(Dt(m),!0),lt.set(m.name),(Un(m)||["checkbox","radio","file","hidden"].includes(m.type))&&U.set(!0),m.type==="hidden"&&I.update(C=>ct(C,Dt(m),m.value)),Un(m))de(m);else if(Fn(m))m.type==="checkbox"?qt(m):m.type==="radio"?at(m):m.type==="file"&&It(m);else return}function j(R){const m=R.target;!m||!jt(m)||Ms(m)||m.name&&(h(Dt(m),!0),lt.set(m.name))}function nt(R){R.preventDefault(),d()}const mt={childList:!0,subtree:!0};function gt(R){let m=De(I),C=De(S),H=De($),At=De(M);for(const St of R.reverse()){if(St.hasAttribute("data-felte-keep-on-remove")&&St.dataset.felteKeepOnRemove!=="false")continue;const b=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let B=Dt(St);const X=De(S);if(b.test(B)){const Pt=B.split(".").slice(0,-1).join("."),Ut=Re(X,Pt);K(Ut)&&Object.keys(Ut).length<=1&&(B=Pt)}m=fr(m,B),C=fr(C,B),H=fr(H,B),At=fr(At,B)}I.set(m),S.set(C),$.set(H),M.set(At)}const yt=ki(()=>{c().forEach(C=>{var H;return(H=C.destroy)===null||H===void 0?void 0:H.call(C)}),l(r.map(q("UPDATE")));const{defaultData:R,defaultTouched:m}=$a(k);I.update(C=>Ua(C,R)),S.update(C=>Ua(C,m)),e.setFields(De(I))},0);let fe=[];const me=ki(()=>{c().forEach(R=>{var m;return(m=R.destroy)===null||m===void 0?void 0:m.call(R)}),l(r.map(q("UPDATE"))),gt(fe),fe=[]},0);function Ft(R){Array.from(R.addedNodes).some(C=>Ba(C)?jt(C)?!0:io(C).length>0:!1)&&yt()}function je(R){for(const m of R.removedNodes){if(!Ba(m))continue;const C=io(m);C.length!==0&&(fe.push(...C),me())}}function oe(R){for(const m of R)m.type==="childList"&&(m.addedNodes.length>0&&Ft(m),m.removedNodes.length>0&&je(m))}const ge=new MutationObserver(oe);ge.observe(k,mt),k.addEventListener("input",T),k.addEventListener("change",z),k.addEventListener("focusout",j),k.addEventListener("submit",s),k.addEventListener("reset",nt);const ae=$.subscribe(R=>{for(const m of k.elements){if(!jt(m)||!m.name)continue;const C=Re(R,Dt(m)),H=Array.isArray(C)?C.join(`
`):typeof C=="string"?C:void 0;H!==m.dataset.felteValidationMessage&&(H?(m.dataset.felteValidationMessage=H,m.setAttribute("aria-invalid","true")):(delete m.dataset.felteValidationMessage,m.removeAttribute("aria-invalid")))}});return{destroy(){ge.disconnect(),k.removeEventListener("input",T),k.removeEventListener("change",z),k.removeEventListener("focusout",j),k.removeEventListener("submit",s),k.removeEventListener("reset",nt),ae(),c().forEach(R=>{var m;return(m=R.destroy)===null||m===void 0?void 0:m.call(R)})}}}return{form:Tt}}function xd(e){const t={aborted:!1,priority:e};return{signal:t,abort(){t.aborted=!0}}}function Fd(e,t){if(K(e))return!t||K(t)&&Object.keys(t).length===0?ie(e,null):void 0;if(Array.isArray(e)){if(e.some(K))return;const n=Array.isArray(t)?t:[];return e.map((r,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:r&&s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?e?t:null:e&&t?[t]:null}function Ud(e,t){if(K(e))return!t||K(t)&&Object.keys(t).length===0?ie(e,null):void 0;if(Array.isArray(e)){if(e.some(K))return;const n=Array.isArray(t)?t:[];return e.map((r,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?t:t?[t]:null}function Bd([e,t]){return Je(t,e,Fd)}function $d([e,t]){return Je(t,e,Ud)}function jd(e){return function(n,r,i){const s=Array.isArray(n)?n:[n],o=new Array(s.length),a=e(i),l=a.set,c=a.subscribe;let u;function h(){u=s.map((f,p)=>f.subscribe(E=>{o[p]=E,l(r(o))}))}function d(){u?.forEach(f=>f())}return a.subscribe=function(p){const E=c(p);return()=>{E()}},[a,h,d]}}function Hd(e,t){var n,r,i,s,o,a,l,c,u;const h=jd(e),d=t.initialValues=t.initialValues?Tn(ro(re(t.initialValues),t.transform)):{},f=Ne(mn(d),!1),p=e(f),E=e(0),[w,I,$]=h([p,E],([rt,tt])=>Tr(rt,le=>!!le)&&tt>=1,!1);delete w.set,delete w.update;function M(rt){let tt;return async function(le,_e,ne,dn=!1){if(!ne||!le)return;let He=_e&&Object.keys(_e).length>0?_e:ie(le,[]);const fn=xd(dn);if((!tt?.signal.priority||dn)&&(tt?.abort(),tt=fn),tt.signal.priority&&!dn)return;E.update(or=>or+1);const xa=Pd(le,ne);return xa.forEach(async or=>{const dd=await or;fn.signal.aborted||(He=Nn([He,dd]),rt.set(He))}),await Promise.all(xa),tt=void 0,E.update(or=>or-1),He}}let S=ie(f,[]);const x=e(d),U=ie(f,[]),lt=e(U),st=e(re(U)),[Z,Tt,k]=h([lt,st],Nn,re(U)),q=ie(f,[]),ot=e(q),Ct=e(re(q)),[qt,at,It]=h([ot,Ct],Nn,re(q)),[de,T,z]=h([Z,p],Bd,re(U)),[j,nt,mt]=h([qt,p],$d,re(q));let gt=!1;const[yt,fe,me]=h(Z,([rt])=>{var tt;return gt?!Tr(rt,kt=>Array.isArray(kt)?kt.length>=1:!!kt):(gt=!0,!t.validate&&!(!((tt=t.debounced)===null||tt===void 0)&&tt.validate))},!t.validate&&!(!((n=t.debounced)===null||n===void 0)&&n.validate));delete yt.set,delete yt.update;const Ft=e(!1),je=e(!1),oe=e(null),ge=M(lt),ae=M(ot),R=M(st),m=M(Ct),C=ki(R,(o=(i=(r=t.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&i!==void 0?i:(s=t.debounced)===null||s===void 0?void 0:s.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{E.update(rt=>rt+1)},onEnd:()=>{E.update(rt=>rt-1)}}),H=ki(m,(u=(l=(a=t.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=t.debounced)===null||c===void 0?void 0:c.timeout)!==null&&u!==void 0?u:300);async function At(rt,tt){var kt;const le=mn(rt),_e=ge(le,S,tt??t.validate,!0);if(tt)return _e;const ne=R(le,S,(kt=t.debounced)===null||kt===void 0?void 0:kt.validate,!0);return Nn(await Promise.all([_e,ne]))}async function St(rt,tt){var kt;const le=mn(rt),_e=ae(le,S,tt??t.warn,!0);if(tt)return _e;const ne=m(le,S,(kt=t.debounced)===null||kt===void 0?void 0:kt.warn,!0);return Nn(await Promise.all([_e,ne]))}let b=U,B=q;function X(){const rt=x.subscribe(ne=>{var dn,He;const fn=mn(ne);ge(fn,S,t.validate),ae(fn,S,t.warn),C(fn,S,(dn=t.debounced)===null||dn===void 0?void 0:dn.validate),H(fn,S,(He=t.debounced)===null||He===void 0?void 0:He.warn)}),tt=p.subscribe(ne=>{S=ie(ne,[])}),kt=Z.subscribe(ne=>{b=ne}),le=qt.subscribe(ne=>{B=ne});Tt(),fe(),at(),T(),nt(),I();function _e(){rt(),z(),k(),It(),mt(),me(),$(),tt(),kt(),le()}return _e}function bt(rt){lt.set(rt(b)),st.set({})}function Pt(rt){ot.set(rt(B)),Ct.set({})}function Ut(rt){bt(()=>rt)}function ai(rt){Pt(()=>rt)}return de.set=Ut,de.update=bt,j.set=ai,j.update=Pt,{data:x,errors:de,warnings:j,touched:p,isValid:yt,isSubmitting:Ft,isDirty:je,isValidating:w,interacted:oe,validateErrors:At,validateWarnings:St,cleanup:t.preventStoreStart?()=>{}:X(),start:X}}function Wd(e,t){var n,r;(n=e.extend)!==null&&n!==void 0||(e.extend=[]),(r=e.debounced)!==null&&r!==void 0||(e.debounced={}),e.validate&&!Array.isArray(e.validate)&&(e.validate=[e.validate]),e.debounced.validate&&!Array.isArray(e.debounced.validate)&&(e.debounced.validate=[e.debounced.validate]),e.transform&&!Array.isArray(e.transform)&&(e.transform=[e.transform]),e.warn&&!Array.isArray(e.warn)&&(e.warn=[e.warn]),e.debounced.warn&&!Array.isArray(e.debounced.warn)&&(e.debounced.warn=[e.debounced.warn]);function i(at,{debounced:It,level:de}={debounced:!1,level:"error"}){var T;const z=de==="error"?"validate":"warn";(T=e.debounced)!==null&&T!==void 0||(e.debounced={});const j=It?e.debounced:e;j[z]?j[z]=[...j[z],at]:j[z]=[at]}function s(at){e.transform?e.transform=[...e.transform,at]:e.transform=[at]}const o=Array.isArray(e.extend)?e.extend:[e.extend];let a=[];const l=()=>a,c=at=>{a=at},{isSubmitting:u,isValidating:h,data:d,errors:f,warnings:p,touched:E,isValid:w,isDirty:I,cleanup:$,start:M,validateErrors:S,validateWarnings:x,interacted:U}=Hd(t.storeFactory,e),lt=d.update,st=d.set,Z=at=>lt(It=>Tn(ro(at(It),e.transform))),Tt=at=>st(Tn(ro(at,e.transform)));d.update=Z,d.set=Tt;const k=Md({extender:o,config:e,addValidator:i,addTransformer:s,validateErrors:S,validateWarnings:x,_getCurrentExtenders:l,stores:{data:d,errors:f,warnings:p,touched:E,isValid:w,isValidating:h,isSubmitting:u,isDirty:I,interacted:U}}),{createSubmitHandler:q,handleSubmit:ot}=k.public;a=o.map(at=>at({stage:"SETUP",errors:f,warnings:p,touched:E,data:d,isDirty:I,isValid:w,isValidating:h,isSubmitting:u,interacted:U,config:e,addValidator:i,addTransformer:s,setFields:k.public.setFields,reset:k.public.reset,validate:k.public.validate,handleSubmit:ot,createSubmitHandler:q}));const Ct=Object.assign({config:e,stores:{data:d,touched:E,errors:f,warnings:p,isSubmitting:u,isValidating:h,isValid:w,isDirty:I,interacted:U},createSubmitHandler:q,handleSubmit:ot,helpers:Object.assign(Object.assign({},k.public),{addTransformer:s,addValidator:i}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},k.private),{form:qt}=Ld(Ct);return Object.assign({data:d,errors:f,warnings:p,touched:E,isValid:w,isSubmitting:u,isValidating:h,isDirty:I,interacted:U,form:qt,cleanup:$,startStores:M},k.public)}function qd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const kn=[];function _c(e,t=Xe){let n;const r=new Set;function i(a){if(ns(e,a)&&(e=a,n)){const l=!kn.length;for(const c of r)c[1](),kn.push(c,e);if(l){for(let c=0;c<kn.length;c+=2)kn[c][0](kn[c+1]);kn.length=0}}}function s(a){i(a(e))}function o(a,l=Xe){const c=[a,l];return r.add(c),r.size===1&&(n=t(i,s)||Xe),a(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function zd(e){const t=Wd(e??{},{storeFactory:_c}),{cleanup:n,startStores:r}=t,i=qd(t,["cleanup","startStores"]);return fd(n),i}const yc={},vc={};function Ha(e){const t=e.config;if(e.stage==="SETUP"){if(!t.__felteReporterSvelteId){const n=Lo(21);t.__felteReporterSvelteId=n,yc[n]=e.errors,vc[n]=e.warnings}return{}}return e.form.hasAttribute("data-felte-reporter-svelte-id")||(e.form.dataset.felteReporterSvelteId=t.__felteReporterSvelteId),{onSubmitError(){const n=e&&e.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');n&&n.focus()}}}function Gd(e){return!e||"preventFocusOnError"in e?t=>Ha(t):Ha(e)}const Kd=e=>({}),Wa=e=>({}),Qd=e=>({messages:e&4}),qa=e=>({messages:e[2]});function Xd(e){let t;const n=e[9].placeholder,r=cc(n,e,e[8],Wa);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),t=!0},p(i,s){r&&r.p&&(!t||s&256)&&uc(r,n,i,i[8],t?dc(n,i[8],s,Kd):hc(i[8]),Wa)},i(i){t||(we(r,i),t=!0)},o(i){Ee(r,i),t=!1},d(i){r&&r.d(i)}}}function Jd(e){let t;const n=e[9].default,r=cc(n,e,e[8],qa);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),t=!0},p(i,s){r&&r.p&&(!t||s&260)&&uc(r,n,i,i[8],t?dc(n,i[8],s,Qd):hc(i[8]),qa)},i(i){t||(we(r,i),t=!0)},o(i){Ee(r,i),t=!1},d(i){r&&r.d(i)}}}function Yd(e){let t,n,r,i,s,o;const a=[Jd,Xd],l=[];function c(u,h){return!u[3].placeholder||u[2]?0:1}return r=c(e),i=l[r]=a[r](e),{c(){t=O("div"),n=ut(),i.c(),s=Fa(),this.h()},l(u){t=V(u,"DIV",{style:!0}),Y(t).forEach(A),n=ht(u),i.l(u),s=Fa(),this.h()},h(){pd(t,"display","none")},m(u,h){G(u,t,h),e[10](t),G(u,n,h),l[r].m(u,h),G(u,s,h),o=!0},p(u,[h]){let d=r;r=c(u),r===d?l[r].p(u,h):(ac(),Ee(l[d],1,1,()=>{l[d]=null}),lc(),i=l[r],i?i.p(u,h):(i=l[r]=a[r](u),i.c()),we(i,1),i.m(s.parentNode,s))},i(u){o||(we(i),o=!0)},o(u){Ee(i),o=!1},d(u){u&&(A(t),A(n),A(s)),e[10](null),l[r].d(u)}}}function Zd(e,t,n){let r,i,s=Xe,o=()=>(s(),s=gd(d,I=>n(7,i=I)),d);e.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:l}=t;const c=md(a);let{level:u="error"}=t,{for:h}=t,d,f,p;function E(){return p.closest("form")}Mo(()=>{n(6,f=Dt(p,h));const $=E();o($?u==="error"?n(0,d=yc[$.dataset.felteReporterSvelteId]):n(0,d=vc[$.dataset.felteReporterSvelteId]):n(0,d=_c({})))});function w(I){Ti[I?"unshift":"push"](()=>{p=I,n(1,p)})}return e.$$set=I=>{"level"in I&&n(4,u=I.level),"for"in I&&n(5,h=I.for),"$$scope"in I&&n(8,l=I.$$scope)},e.$$.update=()=>{e.$$.dirty&192&&n(2,r=f&&Re(i,f))},[d,p,r,c,u,h,f,i,l,a,w]}class tf extends Oo{constructor(t){super(),Vo(this,t,Zd,Yd,ns,{level:4,for:5})}}const hi=tf;function ef(e){return e.issues.reduce((t,n)=>{if(n.path){const r=n.path.map(({key:i})=>i).join(".");t.nested[r]=[...t.nested[r]||[],n.message]}else t.root=[...t.root||[],n.message];return t},{nested:{}})}var qn=class extends Error{issues;constructor(e){super(e[0].message),this.name="ValiError",this.issues=e}};function Ec(e,t,n){let r=e;const i=[];for(const s of t)try{r=s(r,n)}catch(o){if(n.abortEarly||n.abortPipeEarly)throw o;i.push(...o.issues)}if(i.length)throw new qn(i);return r}function nf(e,t){return[...e?.path||[],t]}function wc(e,t){const[n,r=[]]=!e||typeof e=="string"?[e,t]:[void 0,e];return{error:n,pipe:r}}function Tc(e,t,n){const{error:r,pipe:i}=wc(t,n);return{schema:"object",object:e,async:!1,parse(s,o){if(!s||typeof s!="object"||s.toString()!=="[object Object]")throw new qn([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:s,...o}]);const a={},l=[];for(const[c,u]of Object.entries(e))try{const h=s[c];a[c]=u.parse(h,{...o,path:nf(o,{schema:"object",input:s,key:c,value:h})})}catch(h){if(o?.abortEarly)throw h;l.push(...h.issues)}if(l.length)throw new qn(l);return Ec(a,i,{...o,reason:"object"})}}}function rf(e){return{schema:"optional",wrapped:e,async:!1,parse(t,n){return t===void 0?t:e.parse(t,n)}}}function ye(e,t){const{error:n,pipe:r}=wc(e,t);return{schema:"string",async:!1,parse(i,s){if(typeof i!="string")throw new qn([{reason:"type",validation:"string",origin:"value",message:n||"Invalid type",input:i,...s}]);return Ec(i,r,{...s,reason:"string"})}}}function so(e,t,n){return e.parse(t,n)}function Ls(){return e=>e.trim()}function sf(e,t){return(n,r)=>{if(n.length!==e)throw new qn([{validation:"length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}function za(e,t){return(n,r)=>{if(n.length<e)throw new qn([{validation:"min_length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class Di{constructor(t,n,r,i){if(isNaN(t)||isNaN(n))throw new Error(`Point is invalid: (${t}, ${n})`);this.x=+t,this.y=+n,this.pressure=r||0,this.time=i||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class xo{constructor(t,n,r,i,s,o){this.startPoint=t,this.control2=n,this.control1=r,this.endPoint=i,this.startWidth=s,this.endWidth=o}static fromPoints(t,n){const r=this.calculateControlPoints(t[0],t[1],t[2]).c2,i=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new xo(t[1],r,i,t[2],n.start,n.end)}static calculateControlPoints(t,n,r){const i=t.x-n.x,s=t.y-n.y,o=n.x-r.x,a=n.y-r.y,l={x:(t.x+n.x)/2,y:(t.y+n.y)/2},c={x:(n.x+r.x)/2,y:(n.y+r.y)/2},u=Math.sqrt(i*i+s*s),h=Math.sqrt(o*o+a*a),d=l.x-c.x,f=l.y-c.y,p=h/(u+h),E={x:c.x+d*p,y:c.y+f*p},w=n.x-E.x,I=n.y-E.y;return{c1:new Di(l.x+w,l.y+I),c2:new Di(c.x+w,c.y+I)}}length(){let n=0,r,i;for(let s=0;s<=10;s+=1){const o=s/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const c=a-r,u=l-i;n+=Math.sqrt(c*c+u*u)}r=a,i=l}return n}point(t,n,r,i,s){return n*(1-t)*(1-t)*(1-t)+3*r*(1-t)*(1-t)*t+3*i*(1-t)*t*t+s*t*t*t}}class of{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,n,r){this._et.addEventListener(t,n,r)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,n,r){this._et.removeEventListener(t,n,r)}}function af(e,t=250){let n=0,r=null,i,s,o;const a=()=>{n=Date.now(),r=null,i=e.apply(s,o),r||(s=null,o=[])};return function(...c){const u=Date.now(),h=t-(u-n);return s=this,o=c,h<=0||h>t?(r&&(clearTimeout(r),r=null),n=u,i=e.apply(s,o),r||(s=null,o=[])):r||(r=window.setTimeout(a,h)),i}}class Ni extends of{constructor(t,n={}){super(),this.canvas=t,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const i=r.changedTouches[0];this._strokeBegin(i)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const i=r.targetTouches[0];this._strokeMoveUpdate(i)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const s=r.changedTouches[0];this._strokeEnd(s)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=n.velocityFilterWeight||.7,this.minWidth=n.minWidth||.5,this.maxWidth=n.maxWidth||2.5,this.throttle="throttle"in n?n.throttle:16,this.minDistance="minDistance"in n?n.minDistance:5,this.dotSize=n.dotSize||0,this.penColor=n.penColor||"black",this.backgroundColor=n.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=n.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?af(Ni.prototype._strokeUpdate,this.throttle):Ni.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:n}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,n={}){return new Promise((r,i)=>{const s=new Image,o=n.ratio||window.devicePixelRatio||1,a=n.width||this.canvas.width/o,l=n.height||this.canvas.height/o,c=n.xOffset||0,u=n.yOffset||0;this._reset(this._getPointGroupOptions()),s.onload=()=>{this._ctx.drawImage(s,c,u,a,l),r()},s.onerror=h=>{i(h)},s.crossOrigin="anonymous",s.src=t,this._isEmpty=!1})}toDataURL(t="image/png",n){switch(t){case"image/svg+xml":return typeof n!="object"&&(n=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(n))}`;default:return typeof n!="number"&&(n=void 0),this.canvas.toDataURL(t,n)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:n=!0}={}){n&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){this.dispatchEvent(new CustomEvent("beginStroke",{detail:t}));const n=this._getPointGroupOptions(),r=Object.assign(Object.assign({},n),{points:[]});this._data.push(r),this._reset(n),this._strokeUpdate(t)}_strokeUpdate(t){if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const n=t.clientX,r=t.clientY,i=t.pressure!==void 0?t.pressure:t.force!==void 0?t.force:0,s=this._createPoint(n,r,i),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?s.distanceTo(l)<=this.minDistance:!1,u=this._getPointGroupOptions(o);if(!l||!(l&&c)){const h=this._addPoint(s,u);l?h&&this._drawCurve(h,u):this._drawDot(s,u),a.push({time:s.time,x:s.x,y:s.y,pressure:s.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._strokeUpdate(t),this.dispatchEvent(new CustomEvent("endStroke",{detail:t}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,n,r){const i=this.canvas.getBoundingClientRect();return new Di(t-i.left,n-i.top,r,new Date().getTime())}_addPoint(t,n){const{_lastPoints:r}=this;if(r.push(t),r.length>2){r.length===3&&r.unshift(r[0]);const i=this._calculateCurveWidths(r[1],r[2],n),s=xo.fromPoints(r,i);return r.shift(),s}return null}_calculateCurveWidths(t,n,r){const i=r.velocityFilterWeight*n.velocityFrom(t)+(1-r.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(i,r),o={end:s,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=s,o}_strokeWidth(t,n){return Math.max(n.maxWidth/(t+1),n.minWidth)}_drawCurveSegment(t,n,r){const i=this._ctx;i.moveTo(t,n),i.arc(t,n,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,n){const r=this._ctx,i=t.endWidth-t.startWidth,s=Math.ceil(t.length())*2;r.beginPath(),r.fillStyle=n.penColor;for(let o=0;o<s;o+=1){const a=o/s,l=a*a,c=l*a,u=1-a,h=u*u,d=h*u;let f=d*t.startPoint.x;f+=3*h*a*t.control1.x,f+=3*u*l*t.control2.x,f+=c*t.endPoint.x;let p=d*t.startPoint.y;p+=3*h*a*t.control1.y,p+=3*u*l*t.control2.y,p+=c*t.endPoint.y;const E=Math.min(t.startWidth+c*i,n.maxWidth);this._drawCurveSegment(f,p,E)}r.closePath(),r.fill()}_drawDot(t,n){const r=this._ctx,i=n.dotSize>0?n.dotSize:(n.minWidth+n.maxWidth)/2;r.beginPath(),this._drawCurveSegment(t.x,t.y,i),r.closePath(),r.fillStyle=n.penColor,r.fill()}_fromData(t,n,r){for(const i of t){const{points:s}=i,o=this._getPointGroupOptions(i);if(s.length>1)for(let a=0;a<s.length;a+=1){const l=s[a],c=new Di(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const u=this._addPoint(c,o);u&&n(u,o)}else this._reset(o),r(s[0],o)}}toSVG({includeBackgroundColor:t=!1}={}){const n=this._data,r=Math.max(window.devicePixelRatio||1,1),i=0,s=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${i} ${s} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),t&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(n,(c,{penColor:u})=>{const h=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const d=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;h.setAttribute("d",d),h.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),h.setAttribute("stroke",u),h.setAttribute("fill","none"),h.setAttribute("stroke-linecap","round"),l.appendChild(h)}},(c,{penColor:u,dotSize:h,minWidth:d,maxWidth:f})=>{const p=document.createElement("circle"),E=h>0?h:(d+f)/2;p.setAttribute("r",E.toString()),p.setAttribute("cx",c.x.toString()),p.setAttribute("cy",c.y.toString()),p.setAttribute("fill",u),l.appendChild(p)}),l.outerHTML}}const lf="personalid",Ga=Tc({[lf]:ye([Ls(),sf(13)]),prefix:rf(ye()),firstname:ye([Ls(),za(1)]),lastname:ye([Ls(),za(1)]),signature:ye("กรุณาลงชื่อ")});/**
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
 */const Ic=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},cf=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ic(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):cf(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new uf;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class uf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hf=function(e){const t=Ic(e);return Ac.encodeByteArray(t,!0)},Oi=function(e){return hf(e).replace(/\./g,"")},bc=function(e){try{return Ac.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function df(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ff=()=>df().__FIREBASE_DEFAULTS__,pf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},mf=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bc(e[1]);return t&&JSON.parse(t)},Fo=()=>{try{return ff()||pf()||mf()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Rc=e=>{var t,n;return(n=(t=Fo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},gf=e=>{const t=Rc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Cc=()=>{var e;return(e=Fo())===null||e===void 0?void 0:e.config},Sc=e=>{var t;return(t=Fo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class _f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function yf(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Oi(JSON.stringify(n)),Oi(JSON.stringify(o)),a].join(".")}/**
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function Ef(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function wf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tf(){const e=Yt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function If(){try{return typeof indexedDB=="object"}catch{return!1}}function Af(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const bf="FirebaseError";class $e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=bf,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Rf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $e(i,a,r)}}function Rf(e,t){return e.replace(Cf,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Cf=/\{\$([^}]+)}/g;function Sf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Vi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ka(s)&&Ka(o)){if(!Vi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ka(e){return e!==null&&typeof e=="object"}/**
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
 */function Hr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Pf(e,t){const n=new kf(e,t);return n.subscribe.bind(n)}class kf{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Df(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xs),i.error===void 0&&(i.error=xs),i.complete===void 0&&(i.complete=xs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Df(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xs(){}/**
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
 */function Zt(e){return e&&e._delegate?e._delegate:e}class In{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class Nf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _f;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vf(t))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pn){return this.instances.has(t)}getOptions(t=pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Of(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pn){return this.component?this.component.multipleInstances?t:pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Of(e){return e===pn?void 0:e}function Vf(e){return e.instantiationMode==="EAGER"}/**
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
 */class Mf{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Nf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(et||(et={}));const Lf={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},xf=et.INFO,Ff={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Uf=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Ff[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uo{constructor(t){this.name=t,this._logLevel=xf,this._logHandler=Uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Lf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const Bf=(e,t)=>t.some(n=>e instanceof n);let Qa,Xa;function $f(){return Qa||(Qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jf(){return Xa||(Xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pc=new WeakMap,oo=new WeakMap,kc=new WeakMap,Fs=new WeakMap,Bo=new WeakMap;function Hf(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ye(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Pc.set(n,e)}).catch(()=>{}),Bo.set(t,e),t}function Wf(e){if(oo.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});oo.set(e,t)}let ao={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return oo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qf(e){ao=e(ao)}function zf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Us(this),t,...n);return kc.set(r,t.sort?t.sort():[t]),Ye(r)}:jf().includes(e)?function(...t){return e.apply(Us(this),t),Ye(Pc.get(this))}:function(...t){return Ye(e.apply(Us(this),t))}}function Gf(e){return typeof e=="function"?zf(e):(e instanceof IDBTransaction&&Wf(e),Bf(e,$f())?new Proxy(e,ao):e)}function Ye(e){if(e instanceof IDBRequest)return Hf(e);if(Fs.has(e))return Fs.get(e);const t=Gf(e);return t!==e&&(Fs.set(e,t),Bo.set(t,e)),t}const Us=e=>Bo.get(e);function Kf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ye(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ye(o.result),l.oldVersion,l.newVersion,Ye(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Qf=["get","getKey","getAll","getAllKeys","count"],Xf=["put","add","delete","clear"],Bs=new Map;function Ja(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bs.get(t))return Bs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Xf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qf.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bs.set(t,s),s}qf(e=>({...e,get:(t,n,r)=>Ja(t,n)||e.get(t,n,r),has:(t,n)=>!!Ja(t,n)||e.has(t,n)}));/**
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
 */class Jf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yf(e){const t=e.getComponent();return t?.type==="VERSION"}const lo="@firebase/app",Ya="0.9.15";/**
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
 */const An=new Uo("@firebase/app"),Zf="@firebase/app-compat",tp="@firebase/analytics-compat",ep="@firebase/analytics",np="@firebase/app-check-compat",rp="@firebase/app-check",ip="@firebase/auth",sp="@firebase/auth-compat",op="@firebase/database",ap="@firebase/database-compat",lp="@firebase/functions",cp="@firebase/functions-compat",up="@firebase/installations",hp="@firebase/installations-compat",dp="@firebase/messaging",fp="@firebase/messaging-compat",pp="@firebase/performance",mp="@firebase/performance-compat",gp="@firebase/remote-config",_p="@firebase/remote-config-compat",yp="@firebase/storage",vp="@firebase/storage-compat",Ep="@firebase/firestore",wp="@firebase/firestore-compat",Tp="firebase",Ip="10.1.0";/**
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
 */const co="[DEFAULT]",Ap={[lo]:"fire-core",[Zf]:"fire-core-compat",[ep]:"fire-analytics",[tp]:"fire-analytics-compat",[rp]:"fire-app-check",[np]:"fire-app-check-compat",[ip]:"fire-auth",[sp]:"fire-auth-compat",[op]:"fire-rtdb",[ap]:"fire-rtdb-compat",[lp]:"fire-fn",[cp]:"fire-fn-compat",[up]:"fire-iid",[hp]:"fire-iid-compat",[dp]:"fire-fcm",[fp]:"fire-fcm-compat",[pp]:"fire-perf",[mp]:"fire-perf-compat",[gp]:"fire-rc",[_p]:"fire-rc-compat",[yp]:"fire-gcs",[vp]:"fire-gcs-compat",[Ep]:"fire-fst",[wp]:"fire-fst-compat","fire-js":"fire-js",[Tp]:"fire-js-all"};/**
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
 */const Mi=new Map,uo=new Map;function bp(e,t){try{e.container.addComponent(t)}catch(n){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zn(e){const t=e.name;if(uo.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;uo.set(t,e);for(const n of Mi.values())bp(n,e);return!0}function $o(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Rp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ze=new jr("app","Firebase",Rp);/**
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
 */class Cp{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
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
 */const tr=Ip;function Dc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:co,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(n||(n=Cc()),!n)throw Ze.create("no-options");const s=Mi.get(i);if(s){if(Vi(n,s.options)&&Vi(r,s.config))return s;throw Ze.create("duplicate-app",{appName:i})}const o=new Mf(i);for(const l of uo.values())o.addComponent(l);const a=new Cp(n,r,o);return Mi.set(i,a),a}function Nc(e=co){const t=Mi.get(e);if(!t&&e===co&&Cc())return Dc();if(!t)throw Ze.create("no-app",{appName:e});return t}function tn(e,t,n){var r;let i=(r=Ap[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}zn(new In(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Sp="firebase-heartbeat-database",Pp=1,Ir="firebase-heartbeat-store";let $s=null;function Oc(){return $s||($s=Kf(Sp,Pp,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ir)}}}).catch(e=>{throw Ze.create("idb-open",{originalErrorMessage:e.message})})),$s}async function kp(e){try{return await(await Oc()).transaction(Ir).objectStore(Ir).get(Vc(e))}catch(t){if(t instanceof $e)An.warn(t.message);else{const n=Ze.create("idb-get",{originalErrorMessage:t?.message});An.warn(n.message)}}}async function Za(e,t){try{const r=(await Oc()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(t,Vc(e)),await r.done}catch(n){if(n instanceof $e)An.warn(n.message);else{const r=Ze.create("idb-set",{originalErrorMessage:n?.message});An.warn(r.message)}}}function Vc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Dp=1024,Np=30*24*60*60*1e3;class Op{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Np}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tl(),{heartbeatsToSend:n,unsentEntries:r}=Vp(this._heartbeatsCache.heartbeats),i=Oi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tl(){return new Date().toISOString().substring(0,10)}function Vp(e,t=Dp){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),el(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),el(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mp{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return If()?Af().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function el(e){return Oi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Lp(e){zn(new In("platform-logger",t=>new Jf(t),"PRIVATE")),zn(new In("heartbeat",t=>new Op(t),"PRIVATE")),tn(lo,Ya,e),tn(lo,Ya,"esm2017"),tn("fire-js","")}Lp("");var xp="firebase",Fp="10.1.0";/**
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
 */tn(xp,Fp,"app");function jo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Mc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Up=Mc,Lc=new jr("auth","Firebase",Mc());/**
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
 */const Li=new Uo("@firebase/auth");function Bp(e,...t){Li.logLevel<=et.WARN&&Li.warn(`Auth (${tr}): ${e}`,...t)}function Ii(e,...t){Li.logLevel<=et.ERROR&&Li.error(`Auth (${tr}): ${e}`,...t)}/**
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
 */function xe(e,...t){throw Ho(e,...t)}function Ce(e,...t){return Ho(e,...t)}function $p(e,t,n){const r=Object.assign(Object.assign({},Up()),{[t]:n});return new jr("auth","Firebase",r).create(t,{appName:e.name})}function Ho(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Lc.create(e,...t)}function F(e,t,...n){if(!e)throw Ho(t,...n)}function Oe(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ii(t),new Error(t)}function Fe(e,t){e||Oe(t)}/**
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
 */function ho(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function jp(){return nl()==="http:"||nl()==="https:"}function nl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Hp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jp()||Ef()||"connection"in navigator)?navigator.onLine:!0}function Wp(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Fe(n>t,"Short delay should be less than long delay!"),this.isMobile=vf()||wf()}get(){return Hp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wo(e,t){Fe(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class xc{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zp=new Wr(3e4,6e4);function qo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qr(e,t,n,r,i={}){return Fc(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hr(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),xc.fetch()(Bc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Fc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qp),t);try{const i=new Gp(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw di(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw di(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw di(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw di(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $p(e,u,c);xe(e,u)}}catch(i){if(i instanceof $e)throw i;xe(e,"network-request-failed",{message:String(i)})}}async function Uc(e,t,n,r,i={}){const s=await qr(e,t,n,r,i);return"mfaPendingCredential"in s&&xe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bc(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wo(e.config,i):`${e.config.apiScheme}://${i}`}class Gp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ce(this.auth,"network-request-failed")),zp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function di(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ce(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Kp(e,t){return qr(e,"POST","/v1/accounts:delete",t)}async function Qp(e,t){return qr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function gr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Xp(e,t=!1){const n=Zt(e),r=await n.getIdToken(t),i=zo(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:gr(js(i.auth_time)),issuedAtTime:gr(js(i.iat)),expirationTime:gr(js(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function js(e){return Number(e)*1e3}function zo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=bc(n);return i?JSON.parse(i):(Ii("Failed to decode base64 JWT payload"),null)}catch(i){return Ii("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Jp(e){const t=zo(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ar(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $e&&Yp(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Yp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Zp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $c{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ar(e,Qp(n,{idToken:r}));F(i?.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?nm(s.providerUserInfo):[],a=em(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $c(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function tm(e){const t=Zt(e);await xi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function em(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function nm(e){return e.map(t=>{var{providerId:n}=t,r=jo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function rm(e,t){const n=await Fc(e,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Bc(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Jp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rm(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new br;return r&&(F(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Oe("not implemented")}}/**
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
 */function qe(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class vn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=jo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $c(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Xp(this,t)}reload(){return tm(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new vn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await xi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ar(this,Kp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:S,isAnonymous:x,providerData:U,stsTokenManager:lt}=n;F(M&&lt,t,"internal-error");const st=br.fromJSON(this.name,lt);F(typeof M=="string",t,"internal-error"),qe(h,t.name),qe(d,t.name),F(typeof S=="boolean",t,"internal-error"),F(typeof x=="boolean",t,"internal-error"),qe(f,t.name),qe(p,t.name),qe(E,t.name),qe(w,t.name),qe(I,t.name),qe($,t.name);const Z=new vn({uid:M,auth:t,email:d,emailVerified:S,displayName:h,isAnonymous:x,photoURL:p,phoneNumber:f,tenantId:E,stsTokenManager:st,createdAt:I,lastLoginAt:$});return U&&Array.isArray(U)&&(Z.providerData=U.map(Tt=>Object.assign({},Tt))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new br;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await xi(s),s}}/**
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
 */const rl=new Map;function Ve(e){Fe(e instanceof Function,"Expected a class definition");let t=rl.get(e);return t?(Fe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,rl.set(e,t),t)}/**
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
 */class jc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}jc.type="NONE";const il=jc;/**
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
 */function Ai(e,t,n){return`firebase:${e}:${t}:${n}`}class Bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ai("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?vn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Bn(Ve(il),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ve(il);const o=Ai(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vn._fromJSON(t,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bn(s,t,r))}}/**
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
 */function sl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(qc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Hc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gc(t))return"Blackberry";if(Kc(t))return"Webos";if(Go(t))return"Safari";if((t.includes("chrome/")||Wc(t))&&!t.includes("edge/"))return"Chrome";if(zc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Hc(e=Yt()){return/firefox\//i.test(e)}function Go(e=Yt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Wc(e=Yt()){return/crios\//i.test(e)}function qc(e=Yt()){return/iemobile/i.test(e)}function zc(e=Yt()){return/android/i.test(e)}function Gc(e=Yt()){return/blackberry/i.test(e)}function Kc(e=Yt()){return/webos/i.test(e)}function ss(e=Yt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function im(e=Yt()){var t;return ss(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function sm(){return Tf()&&document.documentMode===10}function Qc(e=Yt()){return ss(e)||zc(e)||Kc(e)||Gc(e)||/windows phone/i.test(e)||qc(e)}function om(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Xc(e,t=[]){let n;switch(e){case"Browser":n=sl(Yt());break;case"Worker":n=`${sl(Yt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}async function Jc(e,t){return qr(e,"GET","/v2/recaptchaConfig",qo(e,t))}function ol(e){return e!==void 0&&e.enterprise!==void 0}class Yc{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function am(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Zc(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ce("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",am().appendChild(r)})}function lm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const cm="https://www.google.com/recaptcha/enterprise.js?render=",um="recaptcha-enterprise",hm="NO_RECAPTCHA";class dm{constructor(t){this.type=um,this.auth=zr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Jc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Yc(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ol(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(hm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ol(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Zc(cm+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class fm{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */class pm{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new al(this),this.idTokenSubscription=new al(this),this.beforeStateQueue=new fm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ve(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await xi(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Wp()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Zt(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ve(t))})}async initializeRecaptchaConfig(){const t=await Jc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Yc(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new dm(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new jr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ve(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[Ve(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&Bp(`Error while retrieving App Check token: ${n.error}`),n?.token}}function zr(e){return Zt(e)}class al{constructor(t){this.auth=t,this.observer=null,this.addObserver=Pf(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mm(e,t){const n=$o(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vi(s,t??{}))return i;xe(i,"already-initialized")}return n.initialize({options:t})}function gm(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ve);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function _m(e,t,n){const r=zr(e);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=tu(t),{host:o,port:a}=ym(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||vm()}function tu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ym(e){const t=tu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ll(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ll(o)}}}function ll(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function vm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class eu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Oe("not implemented")}_getIdTokenResponse(t){return Oe("not implemented")}_linkToIdToken(t,n){return Oe("not implemented")}_getReauthenticationResolver(t){return Oe("not implemented")}}/**
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
 */async function $n(e,t){return Uc(e,"POST","/v1/accounts:signInWithIdp",qo(e,t))}/**
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
 */const Em="http://localhost";class bn extends eu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=jo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:Em,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hr(n)}return t}}/**
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
 */class nu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gr extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ze extends Gr{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ze.credential(t.oauthAccessToken)}catch{return null}}}ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";ze.PROVIDER_ID="facebook.com";/**
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
 */class Ge extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ge.credentialFromTaggedObject(t)}static credentialFromError(t){return Ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ge.credential(n,r)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";/**
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
 */class Ke extends Gr{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ke.credentialFromTaggedObject(t)}static credentialFromError(t){return Ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ke.credential(t.oauthAccessToken)}catch{return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com";Ke.PROVIDER_ID="github.com";/**
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
 */class Qe extends Gr{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Qe.credentialFromTaggedObject(t)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
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
 */async function wm(e,t){return Uc(e,"POST","/v1/accounts:signUp",qo(e,t))}/**
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
 */class sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await vn._fromIdTokenResponse(t,r,i),o=cl(r);return new sn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=cl(r);return new sn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function cl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function Tm(e){var t;const n=zr(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await wm(n,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Fi extends $e{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Fi(t,n,r,i)}}function ru(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fi._fromErrorAndOperation(e,s,t,r):s})}async function Im(e,t,n=!1){const r=await Ar(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sn._forOperation(e,"link",r)}/**
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
 */async function Am(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ar(e,ru(r,i,t,e),n);F(s.idToken,r,"internal-error");const o=zo(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(e.uid===a,r,"user-mismatch"),sn._forOperation(e,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&xe(r,"user-mismatch"),s}}/**
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
 */async function bm(e,t,n=!1){const r="signIn",i=await ru(e,r,t),s=await sn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Rm(e,t,n,r){return Zt(e).onIdTokenChanged(t,n,r)}function Cm(e,t,n){return Zt(e).beforeAuthStateChanged(t,n)}function Sm(e,t,n,r){return Zt(e).onAuthStateChanged(t,n,r)}const Ui="__sak";/**
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
 */class iu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pm(){const e=Yt();return Go(e)||ss(e)}const km=1e3,Dm=10;class su extends iu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pm()&&om(),this.fallbackToPolling=Qc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);sm()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Dm):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}su.type="LOCAL";const Nm=su;/**
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
 */class ou extends iu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ou.type="SESSION";const au=ou;/**
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
 */function Om(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class os{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new os(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await Om(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */function Ko(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Vm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ko("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Se(){return window}function Mm(e){Se().location.href=e}/**
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
 */function lu(){return typeof Se().WorkerGlobalScope<"u"&&typeof Se().importScripts=="function"}async function Lm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xm(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Fm(){return lu()?self:null}/**
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
 */const cu="firebaseLocalStorageDb",Um=1,Bi="firebaseLocalStorage",uu="fbase_key";class Kr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(e,t){return e.transaction([Bi],t?"readwrite":"readonly").objectStore(Bi)}function Bm(){const e=indexedDB.deleteDatabase(cu);return new Kr(e).toPromise()}function fo(){const e=indexedDB.open(cu,Um);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Bi,{keyPath:uu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Bi)?t(r):(r.close(),await Bm(),t(await fo()))})})}async function ul(e,t,n){const r=as(e,!0).put({[uu]:t,value:n});return new Kr(r).toPromise()}async function $m(e,t){const n=as(e,!1).get(t),r=await new Kr(n).toPromise();return r===void 0?null:r.value}function hl(e,t){const n=as(e,!0).delete(t);return new Kr(n).toPromise()}const jm=800,Hm=3;class hu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Fm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Lm(),!this.activeServiceWorker)return;this.sender=new Vm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||xm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fo();return await ul(t,Ui,"1"),await hl(t,Ui),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ul(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>$m(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>hl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=as(i,!1).getAll();return new Kr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hu.type="LOCAL";const Wm=hu;new Wr(3e4,6e4);/**
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
 */function qm(e,t){return t?Ve(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Qo extends eu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function zm(e){return bm(e.auth,new Qo(e),e.bypassAuthState)}function Gm(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),Am(n,new Qo(e),e.bypassAuthState)}async function Km(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),Im(n,new Qo(e),e.bypassAuthState)}/**
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
 */class du{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return zm;case"linkViaPopup":case"linkViaRedirect":return Km;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:xe(this.auth,"internal-error")}}resolve(t){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qm=new Wr(2e3,1e4);class Ln extends du{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const t=Ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Qm.get())};t()}}Ln.currentPopupAction=null;/**
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
 */const Xm="pendingRedirect",bi=new Map;class Jm extends du{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=bi.get(this.auth._key());if(!t){try{const r=await Ym(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}bi.set(this.auth._key(),t)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ym(e,t){const n=eg(t),r=tg(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Zm(e,t){bi.set(e._key(),t)}function tg(e){return Ve(e._redirectPersistence)}function eg(e){return Ai(Xm,e.config.apiKey,e.name)}async function ng(e,t,n=!1){const r=zr(e),i=qm(r,t),o=await new Jm(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const rg=10*60*1e3;class ig{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!sg(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!fu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ce(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=rg&&this.cachedEventUids.clear(),this.cachedEventUids.has(dl(t))}saveEventToCache(t){this.cachedEventUids.add(dl(t)),this.lastProcessedEventTime=Date.now()}}function dl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function fu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function sg(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fu(e);default:return!1}}/**
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
 */async function og(e,t={}){return qr(e,"GET","/v1/projects",t)}/**
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
 */const ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lg=/^https?/;async function cg(e){if(e.config.emulator)return;const{authorizedDomains:t}=await og(e);for(const n of t)try{if(ug(n))return}catch{}xe(e,"unauthorized-domain")}function ug(e){const t=ho(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!lg.test(n))return!1;if(ag.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const hg=new Wr(3e4,6e4);function fl(){const e=Se().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function dg(e){return new Promise((t,n)=>{var r,i,s;function o(){fl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fl(),n(Ce(e,"network-request-failed"))},timeout:hg.get()})}if(!((i=(r=Se().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Se().gapi)===null||s===void 0)&&s.load)o();else{const a=lm("iframefcb");return Se()[a]=()=>{gapi.load?o():n(Ce(e,"network-request-failed"))},Zc(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ri=null,t})}let Ri=null;function fg(e){return Ri=Ri||dg(e),Ri}/**
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
 */const pg=new Wr(5e3,15e3),mg="__/auth/iframe",gg="emulator/auth/iframe",_g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vg(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wo(t,gg):`https://${e.config.authDomain}/${mg}`,r={apiKey:t.apiKey,appName:e.name,v:tr},i=yg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function Eg(e){const t=await fg(e),n=Se().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:vg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_g,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ce(e,"network-request-failed"),a=Se().setTimeout(()=>{s(o)},pg.get());function l(){Se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const wg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tg=500,Ig=600,Ag="_blank",bg="http://localhost";class pl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rg(e,t,n,r=Tg,i=Ig){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Yt().toLowerCase();n&&(a=Wc(c)?Ag:n),Hc(c)&&(t=t||bg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(im(c)&&a!=="_self")return Cg(t||"",a),new pl(null);const h=window.open(t||"",a,u);F(h,e,"popup-blocked");try{h.focus()}catch{}return new pl(h)}function Cg(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sg="__/auth/handler",Pg="emulator/auth/handler",kg=encodeURIComponent("fac");async function ml(e,t,n,r,i,s){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:tr,eventId:i};if(t instanceof nu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Sf(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof Gr){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${kg}=${encodeURIComponent(l)}`:"";return`${Dg(e)}?${Hr(a).slice(1)}${c}`}function Dg({config:e}){return e.emulator?Wo(e,Pg):`https://${e.authDomain}/${Sg}`}/**
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
 */const Hs="webStorageSupport";class Ng{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=au,this._completeRedirectFn=ng,this._overrideRedirectResult=Zm}async _openPopup(t,n,r,i){var s;Fe((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ml(t,n,r,ho(),i);return Rg(t,o,Ko())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ml(t,n,r,ho(),i);return Mm(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Eg(t),r=new ig(t);return n.register("authEvent",i=>(F(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hs,{type:Hs},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Hs];o!==void 0&&n(!!o),xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cg(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qc()||Go()||ss()}}const Og=Ng;var gl="@firebase/auth",_l="1.1.0";/**
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
 */class Vg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mg(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lg(e){zn(new In("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xc(e)},c=new pm(r,i,s,l);return gm(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),zn(new In("auth-internal",t=>{const n=zr(t.getProvider("auth").getImmediate());return(r=>new Vg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(gl,_l,Mg(e)),tn(gl,_l,"esm2017")}/**
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
 */const xg=5*60,Fg=Sc("authIdTokenMaxAge")||xg;let yl=null;const Ug=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Fg)return;const i=n?.token;yl!==i&&(yl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bg(e=Nc()){const t=$o(e,"auth");if(t.isInitialized())return t.getImmediate();const n=mm(e,{popupRedirectResolver:Og,persistence:[Wm,Nm,au]}),r=Sc("authTokenSyncURL");if(r){const s=Ug(r);Cm(n,s,()=>s(n.currentUser)),Rm(n,o=>s(o))}const i=Rc("auth");return i&&_m(n,`http://${i}`),n}Lg("Browser");var $g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Xo=Xo||{},L=$g||self;function ls(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function jg(e){return Object.prototype.hasOwnProperty.call(e,Ws)&&e[Ws]||(e[Ws]=++Hg)}var Ws="closure_uid_"+(1e9*Math.random()>>>0),Hg=0;function Wg(e,t,n){return e.call.apply(e.bind,arguments)}function qg(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Xt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xt=Wg:Xt=qg,Xt.apply(null,arguments)}function fi(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function xt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function cn(){this.s=this.s,this.o=this.o}var zg=0;cn.prototype.s=!1;cn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),zg!=0)&&jg(this)};cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Jo(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function vl(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ls(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Jt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Jt.prototype.h=function(){this.defaultPrevented=!0};var Gg=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function Rr(e){return/^[\s\xa0]*$/.test(e)}function cs(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function Ie(e){return cs().indexOf(e)!=-1}function Yo(e){return Yo[" "](e),e}Yo[" "]=function(){};function Kg(e,t){var n=B_;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Qg=Ie("Opera"),Gn=Ie("Trident")||Ie("MSIE"),mu=Ie("Edge"),po=mu||Gn,gu=Ie("Gecko")&&!(cs().toLowerCase().indexOf("webkit")!=-1&&!Ie("Edge"))&&!(Ie("Trident")||Ie("MSIE"))&&!Ie("Edge"),Xg=cs().toLowerCase().indexOf("webkit")!=-1&&!Ie("Edge");function _u(){var e=L.document;return e?e.documentMode:void 0}var mo;t:{var qs="",zs=function(){var e=cs();if(gu)return/rv:([^\);]+)(\)|;)/.exec(e);if(mu)return/Edge\/([\d\.]+)/.exec(e);if(Gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Xg)return/WebKit\/(\S+)/.exec(e);if(Qg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zs&&(qs=zs?zs[1]:""),Gn){var Gs=_u();if(Gs!=null&&Gs>parseFloat(qs)){mo=String(Gs);break t}}mo=qs}var go;if(L.document&&Gn){var El=_u();go=El||parseInt(mo,10)||void 0}else go=void 0;var Jg=go;function Cr(e,t){if(Jt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(gu){t:{try{Yo(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Yg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Cr.$.h.call(this)}}xt(Cr,Jt);var Yg={2:"touch",3:"pen",4:"mouse"};Cr.prototype.h=function(){Cr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Xr="closure_listenable_"+(1e6*Math.random()|0),Zg=0;function t_(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Zg,this.fa=this.ia=!1}function us(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Zo(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function e_(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function yu(e){const t={};for(const n in e)t[n]=e[n];return t}const wl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vu(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<wl.length;s++)n=wl[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function hs(e){this.src=e,this.g={},this.h=0}hs.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=yo(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new t_(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function _o(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=pu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(us(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function yo(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ta="closure_lm_"+(1e6*Math.random()|0),Ks={};function Eu(e,t,n,r,i){if(r&&r.once)return Tu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Eu(e,t[s],n,r,i);return null}return n=ra(n),e&&e[Xr]?e.O(t,n,Qr(r)?!!r.capture:!!r,i):wu(e,t,n,!1,r,i)}function wu(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qr(i)?!!i.capture:!!i,a=na(e);if(a||(e[ta]=a=new hs(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=n_(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Gg||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Au(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function n_(){function e(n){return t.call(e.src,e.listener,n)}const t=r_;return e}function Tu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Tu(e,t[s],n,r,i);return null}return n=ra(n),e&&e[Xr]?e.P(t,n,Qr(r)?!!r.capture:!!r,i):wu(e,t,n,!0,r,i)}function Iu(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Iu(e,t[s],n,r,i);else r=Qr(r)?!!r.capture:!!r,n=ra(n),e&&e[Xr]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=yo(s,n,r,i),-1<n&&(us(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=na(e))&&(t=e.g[t.toString()],e=-1,t&&(e=yo(t,n,r,i)),(n=-1<e?t[e]:null)&&ea(n))}function ea(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Xr])_o(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Au(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=na(t))?(_o(n,e),n.h==0&&(n.src=null,t[ta]=null)):us(e)}}}function Au(e){return e in Ks?Ks[e]:Ks[e]="on"+e}function r_(e,t){if(e.fa)e=!0;else{t=new Cr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ea(e),e=n.call(r,t)}return e}function na(e){return e=e[ta],e instanceof hs?e:null}var Qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(e){return typeof e=="function"?e:(e[Qs]||(e[Qs]=function(t){return e.handleEvent(t)}),e[Qs])}function Mt(){cn.call(this),this.i=new hs(this),this.S=this,this.J=null}xt(Mt,cn);Mt.prototype[Xr]=!0;Mt.prototype.removeEventListener=function(e,t,n,r){Iu(this,e,t,n,r)};function Wt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Jt(t,e);else if(t instanceof Jt)t.target=t.target||e;else{var i=t;t=new Jt(r,e),vu(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=pi(o,r,!0,t)&&i}if(o=t.g=e,i=pi(o,r,!0,t)&&i,i=pi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=pi(o,r,!1,t)&&i}Mt.prototype.N=function(){if(Mt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)us(n[r]);delete e.g[t],e.h--}}this.J=null};Mt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Mt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function pi(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_o(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ia=L.JSON.stringify;class i_{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function s_(){var e=sa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class o_{constructor(){this.h=this.g=null}add(t,n){const r=bu.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bu=new i_(()=>new a_,e=>e.reset());class a_{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function l_(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function c_(e){L.setTimeout(()=>{throw e},0)}let Sr,Pr=!1,sa=new o_,Ru=()=>{const e=L.Promise.resolve(void 0);Sr=()=>{e.then(u_)}};var u_=()=>{for(var e;e=s_();){try{e.h.call(e.g)}catch(n){c_(n)}var t=bu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Pr=!1};function ds(e,t){Mt.call(this),this.h=e||1,this.g=t||L,this.j=Xt(this.qb,this),this.l=Date.now()}xt(ds,Mt);v=ds.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Wt(this,"tick"),this.ga&&(oa(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oa(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}v.N=function(){ds.$.N.call(this),oa(this),delete this.g};function aa(e,t,n){if(typeof e=="function")n&&(e=Xt(e,n));else if(e&&typeof e.handleEvent=="function")e=Xt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Cu(e){e.g=aa(()=>{e.g=null,e.i&&(e.i=!1,Cu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class h_ extends cn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Cu(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(e){cn.call(this),this.h=e,this.g={}}xt(kr,cn);var Tl=[];function Su(e,t,n,r){Array.isArray(n)||(n&&(Tl[0]=n.toString()),n=Tl);for(var i=0;i<n.length;i++){var s=Eu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Pu(e){Zo(e.g,function(t,n){this.g.hasOwnProperty(n)&&ea(t)},e),e.g={}}kr.prototype.N=function(){kr.$.N.call(this),Pu(this)};kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fs(){this.g=!0}fs.prototype.Ea=function(){this.g=!1};function d_(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function f_(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function xn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+m_(e,n)+(r?" "+r:"")})}function p_(e,t){e.info(function(){return"TIMEOUT: "+t})}fs.prototype.info=function(){};function m_(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ia(n)}catch{return t}}var Pn={},Il=null;function ps(){return Il=Il||new Mt}Pn.Ta="serverreachability";function ku(e){Jt.call(this,Pn.Ta,e)}xt(ku,Jt);function Dr(e){const t=ps();Wt(t,new ku(t))}Pn.STAT_EVENT="statevent";function Du(e,t){Jt.call(this,Pn.STAT_EVENT,e),this.stat=t}xt(Du,Jt);function te(e){const t=ps();Wt(t,new Du(t,e))}Pn.Ua="timingevent";function Nu(e,t){Jt.call(this,Pn.Ua,e),this.size=t}xt(Nu,Jt);function Jr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var ms={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ou={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function la(){}la.prototype.h=null;function Al(e){return e.h||(e.h=e.i())}function Vu(){}var Yr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ca(){Jt.call(this,"d")}xt(ca,Jt);function ua(){Jt.call(this,"c")}xt(ua,Jt);var vo;function gs(){}xt(gs,la);gs.prototype.g=function(){return new XMLHttpRequest};gs.prototype.i=function(){return{}};vo=new gs;function Zr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new kr(this),this.P=g_,e=po?125:void 0,this.V=new ds(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mu}function Mu(){this.i=null,this.g="",this.h=!1}var g_=45e3,Eo={},$i={};v=Zr.prototype;v.setTimeout=function(e){this.P=e};function wo(e,t,n){e.L=1,e.v=ys(Ue(t)),e.s=n,e.S=!0,Lu(e,null)}function Lu(e,t){e.G=Date.now(),ti(e),e.A=Ue(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Wu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Mu,e.g=hh(e.l,n?t:null,!e.s),0<e.O&&(e.M=new h_(Xt(e.Pa,e,e.g),e.O)),Su(e.U,e.g,"readystatechange",e.nb),t=e.I?yu(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Dr(),d_(e.j,e.u,e.A,e.m,e.W,e.s)}v.nb=function(e){e=e.target;const t=this.M;t&&Ae(e)==3?t.l():this.Pa(e)};v.Pa=function(e){try{if(e==this.g)t:{const u=Ae(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||po||this.g&&(this.h.h||this.g.ja()||Sl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Dr(3):Dr(2)),_s(this);var n=this.g.da();this.ca=n;e:if(xu(this)){var r=Sl(this.g);e="";var i=r.length,s=Ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),_r(this);var o="";break e}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,f_(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rr(a)){var c=a;break e}}c=null}if(n=c)xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,To(this,n);else{this.i=!1,this.o=3,te(12),gn(this),_r(this);break t}}this.S?(Fu(this,u,o),po&&this.i&&u==3&&(Su(this.U,this.V,"tick",this.mb),this.V.start())):(xn(this.j,this.m,o,null),To(this,o)),u==4&&gn(this),this.i&&!this.J&&(u==4?ah(this.l,this):(this.i=!1,ti(this)))}else x_(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),gn(this),_r(this)}}}catch{}finally{}};function xu(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Fu(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=__(e,n),i==$i){t==4&&(e.o=4,te(14),r=!1),xn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Eo){e.o=4,te(15),xn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else xn(e.j,e.m,i,null),To(e,i);xu(e)&&i!=$i&&i!=Eo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,te(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ga(t),t.M=!0,te(11))):(xn(e.j,e.m,n,"[Invalid Chunked Response]"),gn(e),_r(e))}v.mb=function(){if(this.g){var e=Ae(this.g),t=this.g.ja();this.C<t.length&&(_s(this),Fu(this,e,t),this.i&&e!=4&&ti(this))}};function __(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?$i:(n=Number(t.substring(n,r)),isNaN(n)?Eo:(r+=1,r+n>t.length?$i:(t=t.slice(r,r+n),e.C=r+n,t)))}v.cancel=function(){this.J=!0,gn(this)};function ti(e){e.Y=Date.now()+e.P,Uu(e,e.P)}function Uu(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Jr(Xt(e.lb,e),t)}function _s(e){e.B&&(L.clearTimeout(e.B),e.B=null)}v.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(p_(this.j,this.A),this.L!=2&&(Dr(),te(17)),gn(this),this.o=2,_r(this)):Uu(this,this.Y-e)};function _r(e){e.l.H==0||e.J||ah(e.l,e)}function gn(e){_s(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,oa(e.V),Pu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function To(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Io(n.i,e))){if(!e.K&&Io(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Wi(n),ws(n);else break t;ma(n),te(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Jr(Xt(n.ib,n),6e3));if(1>=Gu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else _n(n,11)}else if((e.K||n.g==e)&&Wi(n),!Rr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ha(s,s.h),s.h=null))}if(r.F){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,ft(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=uh(r,r.J?r.pa:null,r.Y),o.K){Ku(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(_s(a),ti(a)),r.g=o}else sh(r);0<n.j.length&&Ts(n)}else c[0]!="stop"&&c[0]!="close"||_n(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_n(n,7):pa(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Dr(4)}catch{}}function y_(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ls(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function v_(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ls(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Bu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ls(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=v_(e),r=y_(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var $u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E_(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function En(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof En){this.h=e.h,ji(this,e.j),this.s=e.s,this.g=e.g,Hi(this,e.m),this.l=e.l;var t=e.i,n=new Nr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),bl(this,n),this.o=e.o}else e&&(t=String(e).match($u))?(this.h=!1,ji(this,t[1]||"",!0),this.s=pr(t[2]||""),this.g=pr(t[3]||"",!0),Hi(this,t[4]),this.l=pr(t[5]||"",!0),bl(this,t[6]||"",!0),this.o=pr(t[7]||"")):(this.h=!1,this.i=new Nr(null,this.h))}En.prototype.toString=function(){var e=[],t=this.j;t&&e.push(mr(t,Rl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(mr(t,Rl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(mr(n,n.charAt(0)=="/"?I_:T_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",mr(n,b_)),e.join("")};function Ue(e){return new En(e)}function ji(e,t,n){e.j=n?pr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function bl(e,t,n){t instanceof Nr?(e.i=t,R_(e.i,e.h)):(n||(t=mr(t,A_)),e.i=new Nr(t,e.h))}function ft(e,t,n){e.i.set(t,n)}function ys(e){return ft(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function mr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,w_),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function w_(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Rl=/[#\/\?@]/g,T_=/[#\?:]/g,I_=/[#\?]/g,A_=/[#\?@]/g,b_=/#/g;function Nr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function un(e){e.g||(e.g=new Map,e.h=0,e.i&&E_(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=Nr.prototype;v.add=function(e,t){un(this),this.i=null,e=er(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ju(e,t){un(e),t=er(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Hu(e,t){return un(e),t=er(e,t),e.g.has(t)}v.forEach=function(e,t){un(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};v.ta=function(){un(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};v.Z=function(e){un(this);let t=[];if(typeof e=="string")Hu(this,e)&&(t=t.concat(this.g.get(er(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};v.set=function(e,t){return un(this),this.i=null,e=er(this,e),Hu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Wu(e,t,n){ju(e,t),0<n.length&&(e.i=null,e.g.set(er(e,t),Jo(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function er(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function R_(e,t){t&&!e.j&&(un(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ju(this,r),Wu(this,i,n))},e)),e.j=t}var C_=class{constructor(e,t){this.g=e,this.map=t}};function qu(e){this.l=e||S_,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var S_=10;function zu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Gu(e){return e.h?1:e.g?e.g.size:0}function Io(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ha(e,t){e.g?e.g.add(t):e.h=t}function Ku(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}qu.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Qu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Jo(e.i)}var P_=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function k_(){this.g=new P_}function D_(e,t,n){const r=n||"";try{Bu(e,function(i,s){let o=i;Qr(i)&&(o=ia(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function N_(e,t){const n=new fs;if(L.Image){const r=new Image;r.onload=fi(mi,n,r,"TestLoadImage: loaded",!0,t),r.onerror=fi(mi,n,r,"TestLoadImage: error",!1,t),r.onabort=fi(mi,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=fi(mi,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function mi(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ei(e){this.l=e.fc||null,this.j=e.ob||!1}xt(ei,la);ei.prototype.g=function(){return new vs(this.l,this.j)};ei.prototype.i=function(e){return function(){return e}}({});function vs(e,t){Mt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=da,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(vs,Mt);var da=0;v=vs.prototype;v.open=function(e,t){if(this.readyState!=da)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Or(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=da};v.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Or(this)),this.g&&(this.readyState=3,Or(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Xu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}v.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ni(this):Or(this),this.readyState==3&&Xu(this)}};v.Za=function(e){this.g&&(this.response=this.responseText=e,ni(this))};v.Ya=function(e){this.g&&(this.response=e,ni(this))};v.ka=function(){this.g&&ni(this)};function ni(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Or(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Or(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var O_=L.JSON.parse;function Et(e){Mt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ju,this.L=this.M=!1}xt(Et,Mt);var Ju="",V_=/^https?$/i,M_=["POST","PUT"];v=Et.prototype;v.Oa=function(e){this.M=e};v.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vo.g(),this.C=this.u?Al(this.u):Al(vo),this.g.onreadystatechange=Xt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Cl(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=pu(M_,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{th(this),0<this.B&&((this.L=L_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xt(this.ua,this)):this.A=aa(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Cl(this,s)}};function L_(e){return Gn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.ua=function(){typeof Xo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Wt(this,"timeout"),this.abort(8))};function Cl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Yu(e),Es(e)}function Yu(e){e.F||(e.F=!0,Wt(e,"complete"),Wt(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Wt(this,"complete"),Wt(this,"abort"),Es(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Es(this,!0)),Et.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Zu(this):this.kb())};v.kb=function(){Zu(this)};function Zu(e){if(e.h&&typeof Xo<"u"&&(!e.C[1]||Ae(e)!=4||e.da()!=2)){if(e.v&&Ae(e)==4)aa(e.La,0,e);else if(Wt(e,"readystatechange"),Ae(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match($u)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!V_.test(i?i.toLowerCase():"")}n=r}if(n)Wt(e,"complete"),Wt(e,"success");else{e.m=6;try{var s=2<Ae(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Yu(e)}}finally{Es(e)}}}}function Es(e,t){if(e.g){th(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Wt(e,"ready");try{n.onreadystatechange=r}catch{}}}function th(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}v.isActive=function(){return!!this.g};function Ae(e){return e.g?e.g.readyState:0}v.da=function(){try{return 2<Ae(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),O_(t)}};function Sl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ju:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function x_(e){const t={};e=(e.g&&2<=Ae(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Rr(e[r]))continue;var n=l_(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}e_(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function eh(e){let t="";return Zo(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function fa(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=eh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ft(e,t,n))}function ar(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function nh(e){this.Ga=0,this.j=[],this.l=new fs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ar("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ar("baseRetryDelayMs",5e3,e),this.hb=ar("retryDelaySeedMs",1e4,e),this.eb=ar("forwardChannelMaxRetries",2,e),this.xa=ar("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new qu(e&&e.concurrentRequestLimit),this.Ja=new k_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=nh.prototype;v.ra=8;v.H=1;function pa(e){if(rh(e),e.H==3){var t=e.W++,n=Ue(e.I);if(ft(n,"SID",e.K),ft(n,"RID",t),ft(n,"TYPE","terminate"),ri(e,n),t=new Zr(e,e.l,t),t.L=2,t.v=ys(Ue(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=hh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ti(t)}ch(e)}function ws(e){e.g&&(ga(e),e.g.cancel(),e.g=null)}function rh(e){ws(e),e.u&&(L.clearTimeout(e.u),e.u=null),Wi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function Ts(e){if(!zu(e.i)&&!e.m){e.m=!0;var t=e.Na;Sr||Ru(),Pr||(Sr(),Pr=!0),sa.add(t,e),e.C=0}}function F_(e,t){return Gu(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Jr(Xt(e.Na,e,t),lh(e,e.C)),e.C++,!0)}v.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Zr(this,this.l,e);let s=this.s;if(this.U&&(s?(s=yu(s),vu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=ih(this,i,t),n=Ue(this.I),ft(n,"RID",e),ft(n,"CVER",22),this.F&&ft(n,"X-HTTP-Session-Id",this.F),ri(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(eh(s)))+"&"+t:this.o&&fa(n,this.o,s)),ha(this.i,i),this.bb&&ft(n,"TYPE","init"),this.P?(ft(n,"$req",t),ft(n,"SID","null"),i.aa=!0,wo(i,n,null)):wo(i,n,t),this.H=2}}else this.H==3&&(e?Pl(this,e):this.j.length==0||zu(this.i)||Pl(this))};function Pl(e,t){var n;t?n=t.m:n=e.W++;const r=Ue(e.I);ft(r,"SID",e.K),ft(r,"RID",n),ft(r,"AID",e.V),ri(e,r),e.o&&e.s&&fa(r,e.o,e.s),n=new Zr(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ih(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ha(e.i,n),wo(n,r,t)}function ri(e,t){e.na&&Zo(e.na,function(n,r){ft(t,r,n)}),e.h&&Bu({},function(n,r){ft(t,r,n)})}function ih(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Xt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{D_(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function sh(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Sr||Ru(),Pr||(Sr(),Pr=!0),sa.add(t,e),e.A=0}}function ma(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Jr(Xt(e.Ma,e),lh(e,e.A)),e.A++,!0)}v.Ma=function(){if(this.u=null,oh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Jr(Xt(this.jb,this),e)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,te(10),ws(this),oh(this))};function ga(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function oh(e){e.g=new Zr(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ue(e.wa);ft(t,"RID","rpc"),ft(t,"SID",e.K),ft(t,"AID",e.V),ft(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ft(t,"TO",e.qa),ft(t,"TYPE","xmlhttp"),ri(e,t),e.o&&e.s&&fa(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ys(Ue(t)),n.s=null,n.S=!0,Lu(n,e)}v.ib=function(){this.v!=null&&(this.v=null,ws(this),ma(this),te(19))};function Wi(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function ah(e,t){var n=null;if(e.g==t){Wi(e),ga(e),e.g=null;var r=2}else if(Io(e.i,t))n=t.F,Ku(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=ps(),Wt(r,new Nu(r,n)),Ts(e)}else sh(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&F_(e,t)||r==2&&ma(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:_n(e,5);break;case 4:_n(e,10);break;case 3:_n(e,6);break;default:_n(e,2)}}}function lh(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function _n(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Xt(e.pb,e);n||(n=new En("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||ji(n,"https"),ys(n)),N_(n.toString(),r)}else te(2);e.H=0,e.h&&e.h.za(t),ch(e),rh(e)}v.pb=function(e){e?(this.l.info("Successfully pinged google.com"),te(2)):(this.l.info("Failed to ping google.com"),te(1))};function ch(e){if(e.H=0,e.ma=[],e.h){const t=Qu(e.i);(t.length!=0||e.j.length!=0)&&(vl(e.ma,t),vl(e.ma,e.j),e.i.i.length=0,Jo(e.j),e.j.length=0),e.h.ya()}}function uh(e,t,n){var r=n instanceof En?Ue(n):new En(n);if(r.g!="")t&&(r.g=t+"."+r.g),Hi(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new En(null);r&&ji(s,r),t&&(s.g=t),i&&Hi(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ft(r,n,t),ft(r,"VER",e.ra),ri(e,r),r}function hh(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Et(new ei({ob:!0})):new Et(e.va),t.Oa(e.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function dh(){}v=dh.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function qi(){if(Gn&&!(10<=Number(Jg)))throw Error("Environmental error: no available transport.")}qi.prototype.g=function(e,t){return new he(e,t)};function he(e,t){Mt.call(this),this.g=new nh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Rr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Rr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new nr(this)}xt(he,Mt);he.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;te(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=uh(e,null,e.Y),Ts(e)};he.prototype.close=function(){pa(this.g)};he.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ia(e),e=n);t.j.push(new C_(t.fb++,e)),t.H==3&&Ts(t)};he.prototype.N=function(){this.g.h=null,delete this.j,pa(this.g),delete this.g,he.$.N.call(this)};function fh(e){ca.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}xt(fh,ca);function ph(){ua.call(this),this.status=1}xt(ph,ua);function nr(e){this.g=e}xt(nr,dh);nr.prototype.Ba=function(){Wt(this.g,"a")};nr.prototype.Aa=function(e){Wt(this.g,new fh(e))};nr.prototype.za=function(e){Wt(this.g,new ph)};nr.prototype.ya=function(){Wt(this.g,"b")};function U_(){this.blockSize=-1}function Pe(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xt(Pe,U_);Pe.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xs(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Pe.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Xs(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Xs(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Xs(this,r),i=0;break}}this.h=i,this.i+=t};Pe.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function it(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var B_={};function _a(e){return-128<=e&&128>e?Kg(e,function(t){return new it([t|0],0>t?-1:0)}):new it([e|0],0>e?-1:0)}function be(e){if(isNaN(e)||!isFinite(e))return jn;if(0>e)return Ht(be(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ao;return new it(t,0)}function mh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ht(mh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=be(Math.pow(t,8)),r=jn,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=be(Math.pow(t,s)),r=r.R(s).add(be(o))):(r=r.R(n),r=r.add(be(o)))}return r}var Ao=4294967296,jn=_a(0),bo=_a(1),kl=_a(16777216);v=it.prototype;v.ea=function(){if(pe(this))return-Ht(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ao+r)*t,t*=Ao}return e};v.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Me(this))return"0";if(pe(this))return"-"+Ht(this).toString(e);for(var t=be(Math.pow(e,6)),n=this,r="";;){var i=Gi(n,t).g;n=zi(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Me(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Me(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function pe(e){return e.h==-1}v.X=function(e){return e=zi(this,e),pe(e)?-1:Me(e)?0:1};function Ht(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new it(n,~e.h).add(bo)}v.abs=function(){return pe(this)?Ht(this):this};v.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new it(n,n[n.length-1]&-2147483648?-1:0)};function zi(e,t){return e.add(Ht(t))}v.R=function(e){if(Me(this)||Me(e))return jn;if(pe(this))return pe(e)?Ht(this).R(Ht(e)):Ht(Ht(this).R(e));if(pe(e))return Ht(this.R(Ht(e)));if(0>this.X(kl)&&0>e.X(kl))return be(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,gi(n,2*r+2*i),n[2*r+2*i+1]+=s*l,gi(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,gi(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,gi(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new it(n,0)};function gi(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function lr(e,t){this.g=e,this.h=t}function Gi(e,t){if(Me(t))throw Error("division by zero");if(Me(e))return new lr(jn,jn);if(pe(e))return t=Gi(Ht(e),t),new lr(Ht(t.g),Ht(t.h));if(pe(t))return t=Gi(e,Ht(t)),new lr(Ht(t.g),t.h);if(30<e.g.length){if(pe(e)||pe(t))throw Error("slowDivide_ only works with positive integers.");for(var n=bo,r=t;0>=r.X(e);)n=Dl(n),r=Dl(r);var i=Dn(n,1),s=Dn(r,1);for(r=Dn(r,2),n=Dn(n,2);!Me(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Dn(r,1),n=Dn(n,1)}return t=zi(e,i.R(t)),new lr(i,t)}for(i=jn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=be(n),o=s.R(t);pe(o)||0<o.X(e);)n-=r,s=be(n),o=s.R(t);Me(s)&&(s=bo),i=i.add(s),e=zi(e,o)}return new lr(i,e)}v.gb=function(e){return Gi(this,e).h};v.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new it(n,this.h&e.h)};v.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new it(n,this.h|e.h)};v.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new it(n,this.h^e.h)};function Dl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new it(n,e.h)}function Dn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new it(i,e.h)}qi.prototype.createWebChannel=qi.prototype.g;he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;ms.NO_ERROR=0;ms.TIMEOUT=8;ms.HTTP_ERROR=6;Ou.COMPLETE="complete";Vu.EventType=Yr;Yr.OPEN="a";Yr.CLOSE="b";Yr.ERROR="c";Yr.MESSAGE="d";Mt.prototype.listen=Mt.prototype.O;Et.prototype.listenOnce=Et.prototype.P;Et.prototype.getLastError=Et.prototype.Sa;Et.prototype.getLastErrorCode=Et.prototype.Ia;Et.prototype.getStatus=Et.prototype.da;Et.prototype.getResponseJson=Et.prototype.Wa;Et.prototype.getResponseText=Et.prototype.ja;Et.prototype.send=Et.prototype.ha;Et.prototype.setWithCredentials=Et.prototype.Oa;Pe.prototype.digest=Pe.prototype.l;Pe.prototype.reset=Pe.prototype.reset;Pe.prototype.update=Pe.prototype.j;it.prototype.add=it.prototype.add;it.prototype.multiply=it.prototype.R;it.prototype.modulo=it.prototype.gb;it.prototype.compare=it.prototype.X;it.prototype.toNumber=it.prototype.ea;it.prototype.toString=it.prototype.toString;it.prototype.getBits=it.prototype.D;it.fromNumber=be;it.fromString=mh;var $_=function(){return new qi},j_=function(){return ps()},Js=ms,H_=Ou,W_=Pn,Nl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},q_=ei,_i=Vu,z_=Et,G_=it;const Ol="@firebase/firestore";/**
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
 */class Gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Gt.UNAUTHENTICATED=new Gt(null),Gt.GOOGLE_CREDENTIALS=new Gt("google-credentials-uid"),Gt.FIRST_PARTY=new Gt("first-party-uid"),Gt.MOCK_USER=new Gt("mock-user");/**
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
 */let rr="10.1.0";/**
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
 */const Rn=new Uo("@firebase/firestore");function Vl(){return Rn.logLevel}function D(e,...t){if(Rn.logLevel<=et.DEBUG){const n=t.map(ya);Rn.debug(`Firestore (${rr}): ${e}`,...n)}}function Cn(e,...t){if(Rn.logLevel<=et.ERROR){const n=t.map(ya);Rn.error(`Firestore (${rr}): ${e}`,...n)}}function Ki(e,...t){if(Rn.logLevel<=et.WARN){const n=t.map(ya);Rn.warn(`Firestore (${rr}): ${e}`,...n)}}function ya(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${rr}) INTERNAL ASSERTION FAILED: `+e;throw Cn(t),new Error(t)}function Lt(e,t){e||Q()}function pt(e,t){return e}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends $e{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class gh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class K_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Gt.UNAUTHENTICATED))}shutdown(){}}class Q_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class X_{constructor(t){this.t=t,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Lt(typeof r.accessToken=="string"),new gh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Lt(t===null||typeof t=="string"),new Gt(t)}}class J_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Y_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new J_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ty{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Lt(typeof n.token=="string"),this.R=n.token,new Z_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ey(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _h{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ey(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function dt(e,t){return e<t?-1:e>t?1:0}function Kn(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Vt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new N(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new N(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vt.fromMillis(Date.now())}static fromDate(t){return Vt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dt(this.nanoseconds,t.nanoseconds):dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _t{constructor(t){this.timestamp=t}static fromTimestamp(t){return new _t(t)}static min(){return new _t(new Vt(0,0))}static max(){return new _t(new Vt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vr{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Vr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Vr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class vt extends Vr{construct(t,n,r){return new vt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Vr{construct(t,n,r){return new Qt(t,n,r)}static isValidIdentifier(t){return ny.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new N(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new N(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new N(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new N(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(vt.fromString(t))}static fromName(t){return new W(vt.fromString(t).popFirst(5))}static empty(){return new W(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return vt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new vt(t.slice()))}}function ry(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=_t.fromTimestamp(r===1e9?new Vt(n+1,0):new Vt(n,r));return new on(i,W.empty(),t)}function iy(e){return new on(e.readTime,e.key,-1)}class on{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new on(_t.min(),W.empty(),-1)}static max(){return new on(_t.max(),W.empty(),-1)}}function sy(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=W.comparator(e.documentKey,t.documentKey),n!==0?n:dt(e.largestBatchId,t.largestBatchId))}/**
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
 */const oy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ay{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function yh(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==oy)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):_.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):_.reject(n)}static resolve(t){return new _((n,r)=>{n(t)})}static reject(t){return new _((n,r)=>{r(t)})}static waitFor(t){return new _((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=_.resolve(!1);for(const r of t)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new _((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new _((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Is(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class vh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}vh.ae=-1;function va(e){return e==null}function Qi(e){return e===0&&1/e==-1/0}function ly(e){return typeof e=="number"&&Number.isInteger(e)&&!Qi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ml(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ir(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Eh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class se{constructor(t,n){this.comparator=t,this.root=n||Bt.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new yi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new yi(this.root,t,this.comparator,!1)}getReverseIterator(){return new yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new yi(this.root,t,this.comparator,!0)}}class yi{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=s??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Bt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Bt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ll(this.data.getIterator())}getIteratorFrom(t){return new Ll(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ee(this.comparator);return n.data=t,n}}class Ll{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ue{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new ue([])}unionWith(t){let n=new ee(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ue(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Kn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class cy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cy("Invalid base64 string: "+s):s}}(t);return new Be(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const uy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sn(e){if(Lt(!!e),typeof e=="string"){let t=0;const n=uy.exec(e);if(Lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$t(e.seconds),nanos:$t(e.nanos)}}function $t(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Mr(e){return typeof e=="string"?Be.fromBase64String(e):Be.fromUint8Array(e)}/**
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
 */function Ea(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wh(e){const t=e.mapValue.fields.__previous_value__;return Ea(t)?wh(t):t}function Xi(e){const t=Sn(e.mapValue.fields.__local_write_time__.timestampValue);return new Vt(t.seconds,t.nanos)}/**
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
 */class hy{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ji{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ji("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ji&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const vi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ea(e)?4:dy(e)?9007199254740991:10:Q()}function ke(e,t){if(e===t)return!0;const n=Qn(e);if(n!==Qn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Xi(e).isEqual(Xi(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Sn(i.timestampValue),a=Sn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return $t(i.geoPointValue.latitude)===$t(s.geoPointValue.latitude)&&$t(i.geoPointValue.longitude)===$t(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $t(i.integerValue)===$t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$t(i.doubleValue),a=$t(s.doubleValue);return o===a?Qi(o)===Qi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Kn(e.arrayValue.values||[],t.arrayValue.values||[],ke);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ml(o)!==Ml(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ke(o[l],a[l])))return!1;return!0}(e,t);default:return Q()}}function Lr(e,t){return(e.values||[]).find(n=>ke(n,t))!==void 0}function Xn(e,t){if(e===t)return 0;const n=Qn(e),r=Qn(t);if(n!==r)return dt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return dt(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=$t(s.integerValue||s.doubleValue),l=$t(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return xl(e.timestampValue,t.timestampValue);case 4:return xl(Xi(e),Xi(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Mr(s),l=Mr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=dt(a[c],l[c]);if(u!==0)return u}return dt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=dt($t(s.latitude),$t(o.latitude));return a!==0?a:dt($t(s.longitude),$t(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Xn(a[c],l[c]);if(u)return u}return dt(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===vi.mapValue&&o===vi.mapValue)return 0;if(s===vi.mapValue)return 1;if(o===vi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=dt(l[h],u[h]);if(d!==0)return d;const f=Xn(a[l[h]],c[u[h]]);if(f!==0)return f}return dt(l.length,u.length)}(e.mapValue,t.mapValue);default:throw Q()}}function xl(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return dt(e,t);const n=Sn(e),r=Sn(t),i=dt(n.seconds,r.seconds);return i!==0?i:dt(n.nanos,r.nanos)}function Jn(e){return Ro(e)}function Ro(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Sn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Mr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return W.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ro(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ro(n.fields[o])}`;return i+"}"}(e.mapValue):Q()}function Co(e){return!!e&&"integerValue"in e}function wa(e){return!!e&&"arrayValue"in e}function Ci(e){return!!e&&"mapValue"in e}function yr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ir(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=yr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=yr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function dy(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ce{constructor(t){this.value=t}static empty(){return new ce({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ci(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=yr(n)}setAll(t){let n=Qt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Ci(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ke(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){ir(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ce(yr(this.value))}}function Th(e){const t=[];return ir(e.fields,(n,r)=>{const i=new Qt([n]);if(Ci(r)){const s=Th(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ue(t)}/**
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
 */class ve{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ve(t,0,_t.min(),_t.min(),_t.min(),ce.empty(),0)}static newFoundDocument(t,n,r,i){return new ve(t,1,n,_t.min(),r,i,0)}static newNoDocument(t,n){return new ve(t,2,n,_t.min(),_t.min(),ce.empty(),0)}static newUnknownDocument(t,n){return new ve(t,3,n,_t.min(),_t.min(),ce.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ce.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ve&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yi{constructor(t,n){this.position=t,this.inclusive=n}}function Fl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Xn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ul(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ke(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class vr{constructor(t,n="asc"){this.field=t,this.dir=n}}function fy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Ih{}class Ot extends Ih{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new my(t,n,r):n==="array-contains"?new yy(t,r):n==="in"?new vy(t,r):n==="not-in"?new Ey(t,r):n==="array-contains-any"?new wy(t,r):new Ot(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new gy(t,r):new _y(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xn(n,this.value)):n!==null&&Qn(this.value)===Qn(n)&&this.matchesComparison(Xn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class an extends Ih{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new an(t,n)}matches(t){return Ah(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Ah(e){return e.op==="and"}function bh(e){return py(e)&&Ah(e)}function py(e){for(const t of e.filters)if(t instanceof an)return!1;return!0}function So(e){if(e instanceof Ot)return e.field.canonicalString()+e.op.toString()+Jn(e.value);if(bh(e))return e.filters.map(t=>So(t)).join(",");{const t=e.filters.map(n=>So(n)).join(",");return`${e.op}(${t})`}}function Rh(e,t){return e instanceof Ot?function(r,i){return i instanceof Ot&&r.op===i.op&&r.field.isEqual(i.field)&&ke(r.value,i.value)}(e,t):e instanceof an?function(r,i){return i instanceof an&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Rh(o,i.filters[a]),!0):!1}(e,t):void Q()}function Ch(e){return e instanceof Ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Jn(n.value)}`}(e):e instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(Ch).join(" ,")+"}"}(e):"Filter"}class my extends Ot{constructor(t,n,r){super(t,n,r),this.key=W.fromName(r.referenceValue)}matches(t){const n=W.comparator(t.key,this.key);return this.matchesComparison(n)}}class gy extends Ot{constructor(t,n){super(t,"in",n),this.keys=Sh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class _y extends Ot{constructor(t,n){super(t,"not-in",n),this.keys=Sh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Sh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class yy extends Ot{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return wa(n)&&Lr(n.arrayValue,this.value)}}class vy extends Ot{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class Ey extends Ot{constructor(t,n){super(t,"not-in",n)}matches(t){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class wy extends Ot{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!wa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lr(this.value.arrayValue,r))}}/**
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
 */class Ty{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Bl(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Ty(e,t,n,r,i,s,o)}function Ta(e){const t=pt(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>So(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),va(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Jn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Jn(r)).join(",")),t.he=n}return t.he}function Ia(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!fy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Rh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ul(e.startAt,t.startAt)&&Ul(e.endAt,t.endAt)}/**
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
 */class As{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function Iy(e,t,n,r,i,s,o,a){return new As(e,t,n,r,i,s,o,a)}function Ay(e){return new As(e)}function $l(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function by(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ry(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Cy(e){return e.collectionGroup!==null}function Hn(e){const t=pt(e);if(t.Pe===null){t.Pe=[];const n=Ry(t),r=by(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new vr(n)),t.Pe.push(new vr(Qt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new vr(Qt.keyField(),s))}}}return t.Pe}function Yn(e){const t=pt(e);if(!t.Ie)if(t.limitType==="F")t.Ie=Bl(t.path,t.collectionGroup,Hn(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Hn(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new vr(s.field,o))}const r=t.endAt?new Yi(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Yi(t.startAt.position,t.startAt.inclusive):null;t.Ie=Bl(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function Po(e,t,n){return new As(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ph(e,t){return Ia(Yn(e),Yn(t))&&e.limitType===t.limitType}function kh(e){return`${Ta(Yn(e))}|lt:${e.limitType}`}function jl(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ch(i)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Jn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Jn(i)).join(",")),`Target(${r})`}(Yn(e))}; limitType=${e.limitType})`}function Aa(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Hn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=Fl(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Hn(r),i)||r.endAt&&!function(o,a,l){const c=Fl(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Hn(r),i))}(e,t)}function Sy(e){return(t,n)=>{let r=!1;for(const i of Hn(e)){const s=Py(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Py(e,t,n){const r=e.field.isKeyField()?W.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Xn(l,c):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class sr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ir(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Eh(this.inner)}size(){return this.innerSize}}/**
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
 */const ky=new se(W.comparator);function Zi(){return ky}const Dh=new se(W.comparator);function Ei(...e){let t=Dh;for(const n of e)t=t.insert(n.key,n);return t}function Nh(e){let t=Dh;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function yn(){return Er()}function Oh(){return Er()}function Er(){return new sr(e=>e.toString(),(e,t)=>e.isEqual(t))}const Dy=new se(W.comparator),Ny=new ee(W.comparator);function Kt(...e){let t=Ny;for(const n of e)t=t.add(n);return t}const Oy=new ee(dt);function Vy(){return Oy}/**
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
 */function Vh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qi(t)?"-0":t}}function Mh(e){return{integerValue:""+e}}function My(e,t){return ly(t)?Mh(t):Vh(e,t)}/**
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
 */class bs{constructor(){this._=void 0}}function Ly(e,t,n){return e instanceof xr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ea(s)&&(s=wh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Fr?xh(e,t):e instanceof Ur?Fh(e,t):function(i,s){const o=Lh(i,s),a=Hl(o)+Hl(i.Te);return Co(o)&&Co(i.Te)?Mh(a):Vh(i.serializer,a)}(e,t)}function xy(e,t,n){return e instanceof Fr?xh(e,t):e instanceof Ur?Fh(e,t):n}function Lh(e,t){return e instanceof ts?function(r){return Co(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class xr extends bs{}class Fr extends bs{constructor(t){super(),this.elements=t}}function xh(e,t){const n=Uh(t);for(const r of e.elements)n.some(i=>ke(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ur extends bs{constructor(t){super(),this.elements=t}}function Fh(e,t){let n=Uh(t);for(const r of e.elements)n=n.filter(i=>!ke(i,r));return{arrayValue:{values:n}}}class ts extends bs{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Hl(e){return $t(e.integerValue||e.doubleValue)}function Uh(e){return wa(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Fy{constructor(t,n){this.field=t,this.transform=n}}function Uy(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Fr&&i instanceof Fr||r instanceof Ur&&i instanceof Ur?Kn(r.elements,i.elements,ke):r instanceof ts&&i instanceof ts?ke(r.Te,i.Te):r instanceof xr&&i instanceof xr}(e.transform,t.transform)}class By{constructor(t,n){this.version=t,this.transformResults=n}}class Te{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Te}static exists(t){return new Te(void 0,t)}static updateTime(t){return new Te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Si(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Rs{}function Bh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ba(e.key,Te.none()):new ii(e.key,e.data,Te.none());{const n=e.data,r=ce.empty();let i=new ee(Qt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hn(e.key,r,new ue(i.toArray()),Te.none())}}function $y(e,t,n){e instanceof ii?function(i,s,o){const a=i.value.clone(),l=ql(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof hn?function(i,s,o){if(!Si(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ql(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll($h(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function wr(e,t,n,r){return e instanceof ii?function(s,o,a,l){if(!Si(s.precondition,o))return a;const c=s.value.clone(),u=zl(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof hn?function(s,o,a,l){if(!Si(s.precondition,o))return a;const c=zl(s.fieldTransforms,l,o),u=o.data;return u.setAll($h(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Si(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function jy(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Lh(r.transform,i||null);s!=null&&(n===null&&(n=ce.empty()),n.set(r.field,s))}return n||null}function Wl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Kn(r,i,(s,o)=>Uy(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ii extends Rs{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hn extends Rs{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $h(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ql(e,t,n){const r=new Map;Lt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,xy(o,a,n[i]))}return r}function zl(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ly(s,o,t))}return r}class ba extends Rs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hy extends Rs{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wy{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&$y(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=wr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=wr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Oh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Bh(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(_t.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Kt())}isEqual(t){return this.batchId===t.batchId&&Kn(this.mutations,t.mutations,(n,r)=>Wl(n,r))&&Kn(this.baseMutations,t.baseMutations,(n,r)=>Wl(n,r))}}class Ra{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Lt(t.mutations.length===r.length);let i=function(){return Dy}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ra(t,n,r,i)}}/**
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
 */class qy{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var wt,J;function zy(e){switch(e){default:return Q();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Gy(e){if(e===void 0)return Cn("GRPC error has no .code"),g.UNKNOWN;switch(e){case wt.OK:return g.OK;case wt.CANCELLED:return g.CANCELLED;case wt.UNKNOWN:return g.UNKNOWN;case wt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case wt.INTERNAL:return g.INTERNAL;case wt.UNAVAILABLE:return g.UNAVAILABLE;case wt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case wt.NOT_FOUND:return g.NOT_FOUND;case wt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case wt.ABORTED:return g.ABORTED;case wt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case wt.DATA_LOSS:return g.DATA_LOSS;default:return Q()}}(J=wt||(wt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new G_([4294967295,4294967295],0);class Ky{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ko(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Qy(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Xy(e,t){return ko(e,t.toTimestamp())}function Wn(e){return Lt(!!e),_t.fromTimestamp(function(n){const r=Sn(n);return new Vt(r.seconds,r.nanos)}(e))}function jh(e,t){return function(r){return new vt(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Jy(e){const t=vt.fromString(e);return Lt(sv(t)),t}function Do(e,t){return jh(e.databaseId,t.path)}function Yy(e){const t=Jy(e);return t.length===4?vt.emptyPath():tv(t)}function Zy(e){return new vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function tv(e){return Lt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Gl(e,t,n){return{name:Do(e,t),fields:n.value.mapValue.fields}}function ev(e,t){let n;if(t instanceof ii)n={update:Gl(e,t.key,t.value)};else if(t instanceof ba)n={delete:Do(e,t.key)};else if(t instanceof hn)n={update:Gl(e,t.key,t.data),updateMask:iv(t.fieldMask)};else{if(!(t instanceof Hy))return Q();n={verify:Do(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ts)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(e,t.precondition)),n}function nv(e,t){return e&&e.length>0?(Lt(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Wn(i.updateTime):Wn(s);return o.isEqual(_t.min())&&(o=Wn(s)),new By(o,i.transformResults||[])}(n,t))):[]}function rv(e){let t=Yy(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Lt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=Hh(h);return d instanceof an&&bh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new vr(On(p.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,va(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Yi(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Yi(f,d)}(n.endAt)),Iy(t,i,o,s,a,"F",l,c)}function Hh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=On(n.unaryFilter.field);return Ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=On(n.unaryFilter.field);return Ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=On(n.unaryFilter.field);return Ot.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=On(n.unaryFilter.field);return Ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Ot.create(On(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>Hh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function On(e){return Qt.fromServerFormat(e.fieldPath)}function iv(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function sv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ov{constructor(t){this.ct=t}}function av(e){const t=rv({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Po(t,t.limit,"L"):t}/**
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
 */class lv{constructor(){this.sn=new cv}addToCollectionParentIndex(t,n){return this.sn.add(n),_.resolve()}getCollectionParents(t,n){return _.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return _.resolve()}deleteFieldIndex(t,n){return _.resolve()}getDocumentsMatchingTarget(t,n){return _.resolve(null)}getIndexType(t,n){return _.resolve(0)}getFieldIndexes(t,n){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,n){return _.resolve(on.min())}getMinOffsetFromCollectionGroup(t,n){return _.resolve(on.min())}updateCollectionGroup(t,n,r){return _.resolve()}updateIndexEntries(t,n){return _.resolve()}}class cv{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ee(vt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ee(vt.comparator)).toArray()}}/**
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
 */class Zn{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Zn(0)}static On(){return new Zn(-1)}}/**
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
 */class uv{constructor(){this.changes=new sr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ve.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class hv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class dv{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&wr(r.mutation,i,ue.empty(),Vt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Kt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Kt()){const i=yn();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Ei();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=yn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Kt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Zi();const o=Er(),a=function(){return Er()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof hn)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),wr(u.mutation,c,u.mutation.getFieldMask(),Vt.now())):o.set(c.key,ue.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new hv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Er();let i=new se((o,a)=>o-a),s=Kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ue.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||Kt()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Oh();u.forEach(d=>{if(!s.has(d)){const f=Bh(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Cy(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):_.resolve(yn());let a=-1,l=s;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,Kt())).next(u=>({batchId:a,changes:Nh(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new W(n)).next(r=>{let i=Ei();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Ei();return this.indexManager.getCollectionParents(t,i).next(o=>_.forEach(o,a=>{const l=function(u,h){return new As(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,ve.newInvalidDocument(c)))});let o=Ei();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&wr(c.mutation,l,ue.empty(),Vt.now()),Aa(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class fv{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return _.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Wn(i.createTime)}}(n)),_.resolve()}getNamedQuery(t,n){return _.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:av(i.bundledQuery),readTime:Wn(i.readTime)}}(n)),_.resolve()}}/**
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
 */class pv{constructor(){this.overlays=new se(W.comparator),this.cr=new Map}getOverlay(t,n){return _.resolve(this.overlays.get(n))}getOverlays(t,n){const r=yn();return _.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),_.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),_.resolve()}getOverlaysForCollection(t,n,r){const i=yn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new se((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=yn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=yn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qy(n,r));let s=this.cr.get(n);s===void 0&&(s=Kt(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
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
 */class Ca{constructor(){this.lr=new ee(Nt.hr),this.Pr=new ee(Nt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new Nt(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new Nt(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new W(new vt([])),r=new Nt(n,t),i=new Nt(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new W(new vt([])),r=new Nt(n,t),i=new Nt(n,t+1);let s=Kt();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Nt(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Nt{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return W.comparator(t.key,n.key)||dt(t.mr,n.mr)}static Ir(t,n){return dt(t.mr,n.mr)||W.comparator(t.key,n.key)}}/**
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
 */class mv{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new ee(Nt.hr)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new Nt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,n){return _.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Nt(n,0),i=new Nt(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ee(dt);return n.forEach(i=>{const s=new Nt(i,0),o=new Nt(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),_.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Nt(new W(s),0);let a=new ee(dt);return this.pr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.mr)),!0)},o),_.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Lt(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return _.forEach(n.mutations,i=>{const s=new Nt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new Nt(n,0),i=this.pr.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class gv{constructor(t){this.Dr=t,this.docs=function(){return new se(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(n))}getEntries(t,n){let r=Zi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Zi();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||sy(iy(u),r)<=0||(i.has(u.key)||Aa(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Q()}vr(t,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new _v(this)}getSize(t){return _.resolve(this.size)}}class _v extends uv{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),_.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
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
 */class yv{constructor(t){this.persistence=t,this.Cr=new sr(n=>Ta(n),Ia),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new Ca,this.targetCount=0,this.Or=Zn.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),_.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new Zn(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,_.resolve()}updateTargetData(t,n){return this.Ln(n),_.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return _.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),_.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),_.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return _.resolve(r)}containsKey(t,n){return _.resolve(this.Mr.containsKey(n))}}/**
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
 */class vv{constructor(t,n){this.Nr={},this.overlays={},this.Br=new vh(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new yv(this),this.indexManager=new lv,this.remoteDocumentCache=function(i){return new gv(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new ov(n),this.Qr=new fv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new pv,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new mv(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const i=new Ev(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return _.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class Ev extends ay{constructor(t){super(),this.currentSequenceNumber=t}}class Sa{constructor(t){this.persistence=t,this.Wr=new Ca,this.Gr=null}static zr(t){return new Sa(t)}get jr(){if(this.Gr)return this.Gr;throw Q()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),_.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),_.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.jr,r=>{const i=W.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,_t.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return _.or([()=>_.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
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
 */class Pa{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=Kt(),i=Kt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Pa(t,n.fromCache,r,i)}}/**
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
 */class wv{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if($l(n))return _.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Po(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Kt(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Gi(n,a);return this.zi(n,c,o,l.readTime)?this.$i(t,Po(n,null,"F")):this.ji(t,c,n,l)}))})))}Ui(t,n,r,i){return $l(n)||i.isEqual(_t.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(Vl()<=et.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jl(n)),this.ji(t,o,n,ry(i,-1)))})}Gi(t,n){let r=new ee(Sy(t));return n.forEach((i,s)=>{Aa(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return Vl()<=et.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",jl(n)),this.Ki.getDocumentsMatchingQuery(t,n,on.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Tv{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new se(dt),this.Yi=new sr(s=>Ta(s),Ia),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new dv(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function Iv(e,t,n,r){return new Tv(e,t,n,r)}async function Wh(e,t){const n=pt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Kt();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ts:c,removedBatchIds:o,addedBatchIds:a}))})})}function Av(e,t){const n=pt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=_.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(E=>{const w=c.docVersions.get(p);Lt(w!==null),E.version.compareTo(w)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Kt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function bv(e){const t=pt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function Rv(e,t){const n=pt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Kl{constructor(){this.activeTargetIds=Vy()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Cv{constructor(){this.Hs=new Kl,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Kl,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Sv{Ys(t){}shutdown(){}}/**
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
 */class Ql{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wi=null;function Ys(){return wi===null?wi=function(){return 268435456+Math.round(2147483648*Math.random())}():wi++,"0x"+wi.toString(16)}/**
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
 */const Pv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class kv{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const zt="WebChannelConnection";class Dv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Ys(),l=this.mo(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(c,s,o),this.po(n,l,c,i).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Ki("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=Pv[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Ys();return new Promise((o,a)=>{const l=new z_;l.setWithCredentials(!0),l.listenOnce(H_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Js.NO_ERROR:const u=l.getResponseJson();D(zt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Js.TIMEOUT:D(zt,`RPC '${t}' ${s} timed out`),a(new N(g.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const h=l.getStatus();if(D(zt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const p=function(w){const I=w.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(I)>=0?I:g.UNKNOWN}(f.status);a(new N(p,f.message))}else a(new N(g.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new N(g.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{D(zt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);D(zt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}wo(t,n,r){const i=Ys(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=$_(),a=j_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new q_({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");D(zt,`Creating RPC '${t}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new kv({so:w=>{f?D(zt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(d||(D(zt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),D(zt,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},oo:()=>h.close()}),E=(w,I,$)=>{w.listen(I,M=>{try{$(M)}catch(S){setTimeout(()=>{throw S},0)}})};return E(h,_i.EventType.OPEN,()=>{f||D(zt,`RPC '${t}' stream ${i} transport opened.`)}),E(h,_i.EventType.CLOSE,()=>{f||(f=!0,D(zt,`RPC '${t}' stream ${i} transport closed`),p.Po())}),E(h,_i.EventType.ERROR,w=>{f||(f=!0,Ki(zt,`RPC '${t}' stream ${i} transport errored:`,w),p.Po(new N(g.UNAVAILABLE,"The operation could not be completed")))}),E(h,_i.EventType.MESSAGE,w=>{var I;if(!f){const $=w.data[0];Lt(!!$);const M=$,S=M.error||((I=M[0])===null||I===void 0?void 0:I.error);if(S){D(zt,`RPC '${t}' stream ${i} received error:`,S);const x=S.status;let U=function(Z){const Tt=wt[Z];if(Tt!==void 0)return Gy(Tt)}(x),lt=S.message;U===void 0&&(U=g.INTERNAL,lt="Unknown error status: "+x+" with message "+S.message),f=!0,p.Po(new N(U,lt)),h.close()}else D(zt,`RPC '${t}' stream ${i} received:`,$),p.Io($)}}),E(a,W_.STAT_EVENT,w=>{w.stat===Nl.PROXY?D(zt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Nl.NOPROXY&&D(zt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.ho()},0),p}}function Zs(){return typeof document<"u"?document:null}/**
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
 */function Cs(e){return new Ky(e,!0)}/**
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
 */class qh{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Nv{constructor(t,n,r,i,s,o,a,l){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new qh(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Cn(n.toString()),Cn("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new N(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ov extends Nv{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(Lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=nv(t.writeResults,t.commitTime),r=Wn(t.commitTime);return this.listener.u_(r,n)}return Lt(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=Zy(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>ev(this.serializer,r))};this.Ho(n)}}/**
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
 */class Vv extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new N(g.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(g.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(g.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class Mv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Cn(n),this.d_=!1):D("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class Lv{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{oi(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=pt(l);c.y_.add(4),await si(c),c.b_.set("Unknown"),c.y_.delete(4),await Ss(c)}(this))})}),this.b_=new Mv(r,i)}}async function Ss(e){if(oi(e))for(const t of e.w_)await t(!0)}async function si(e){for(const t of e.w_)await t(!1)}function oi(e){return pt(e).y_.size===0}async function zh(e,t,n){if(!Is(t))throw t;e.y_.add(1),await si(e),e.b_.set("Offline"),n||(n=()=>bv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Ss(e)})}function Gh(e,t){return t().catch(n=>zh(e,n,t))}async function Ps(e){const t=pt(e),n=ln(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;xv(t);)try{const i=await Rv(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,Fv(t,i)}catch(i){await zh(t,i)}Kh(t)&&Qh(t)}function xv(e){return oi(e)&&e.g_.length<10}function Fv(e,t){e.g_.push(t);const n=ln(e);n.Uo()&&n.__&&n.a_(t.mutations)}function Kh(e){return oi(e)&&!ln(e).$o()&&e.g_.length>0}function Qh(e){ln(e).start()}async function Uv(e){ln(e).l_()}async function Bv(e){const t=ln(e);for(const n of e.g_)t.a_(n.mutations)}async function $v(e,t,n){const r=e.g_.shift(),i=Ra.from(r,t,n);await Gh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ps(e)}async function jv(e,t){t&&ln(e).__&&await async function(r,i){if(function(o){return zy(o)&&o!==g.ABORTED}(i.code)){const s=r.g_.shift();ln(r).Go(),await Gh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ps(r)}}(e,t),Kh(e)&&Qh(e)}async function Xl(e,t){const n=pt(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=oi(n);n.y_.add(3),await si(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Ss(n)}async function Hv(e,t){const n=pt(e);t?(n.y_.delete(2),await Ss(n)):t||(n.y_.add(2),await si(n),n.b_.set("Unknown"))}function ln(e){return e.C_||(e.C_=function(n,r,i){const s=pt(n);return s.P_(),new Ov(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:Uv.bind(null,e),uo:jv.bind(null,e),c_:Bv.bind(null,e),u_:$v.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await Ps(e)):(await e.C_.stop(),e.g_.length>0&&(D("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
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
 */class ka{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new ka(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xh(e,t){if(Cn("AsyncQueue",`${t}: ${e}`),Is(e))return new N(g.UNAVAILABLE,`${t}: ${e}`);throw e}class Wv{constructor(){this.queries=new sr(t=>kh(t),Ph),this.onlineState="Unknown",this.O_=new Set}}function qv(e){e.O_.forEach(t=>{t.next()})}class zv{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new sr(a=>kh(a),Ph),this.da=new Map,this.Aa=new Set,this.Ra=new se(W.comparator),this.Va=new Map,this.ma=new Ca,this.fa={},this.ga=new Map,this.pa=Zn.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function Gv(e,t,n){const r=Jv(e);try{const i=await function(o,a){const l=pt(o),c=Vt.now(),u=a.reduce((f,p)=>f.add(p.key),Kt());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Zi(),E=Kt();return l.Xi.getEntries(f,u).next(w=>{p=w,p.forEach((I,$)=>{$.isValidDocument()||(E=E.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(w=>{h=w;const I=[];for(const $ of a){const M=jy($,h.get($.key).overlayedDocument);M!=null&&I.push(new hn($.key,M,Th(M.value.mapValue),Te.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,I,a)}).next(w=>{d=w;const I=w.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(f,w.batchId,I)})}).then(()=>({batchId:d.batchId,changes:Nh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.fa[o.currentUser.toKey()];c||(c=new se(dt)),c=c.insert(a,l),o.fa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ks(r,i.changes),await Ps(r.remoteStore)}catch(i){const s=Xh(i,"Failed to persist write");n.reject(s)}}function Jl(e,t,n){const r=pt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=pt(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(c=!0)}),c&&qv(l)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Kv(e,t){const n=pt(e),r=t.batch.batchId;try{const i=await Av(n.localStore,t);Yh(n,r,null),Jh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ks(n,i)}catch(i){await yh(i)}}async function Qv(e,t,n){const r=pt(e);try{const i=await function(o,a){const l=pt(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Lt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Yh(r,t,n),Jh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ks(r,i)}catch(i){await yh(i)}}function Jh(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function Yh(e,t,n){const r=pt(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}async function ks(e,t,n){const r=pt(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){i.push(c);const u=Pa.qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,c){const u=pt(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(c,d=>_.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>_.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Is(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),p=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(d,E)}}}(r.localStore,s))}async function Xv(e,t){const n=pt(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await Wh(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new N(g.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ks(n,r.ts)}}function Jv(e){const t=pt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Kv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qv.bind(null,t),t}class Yl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Cs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Iv(this.persistence,new wv,t.initialUser,this.serializer)}createPersistence(t){return new vv(Sa.zr,this.serializer)}createSharedClientState(t){return new Cv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yv{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xv.bind(null,this.syncEngine),await Hv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Wv}()}createDatastore(t){const n=Cs(t.databaseInfo.databaseId),r=function(s){return new Dv(s)}(t.databaseInfo);return function(s,o,a,l){return new Vv(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Lv(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Jl(this.syncEngine,n,0),function(){return Ql.v()?new Ql:new Sv}())}createSyncEngine(t,n){return function(i,s,o,a,l,c,u){const h=new zv(i,s,o,a,l,c);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=pt(n);D("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await si(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Zv{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Gt.UNAUTHENTICATED,this.clientId=_h.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Xh(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function to(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Zl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await e0(e);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Xl(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Xl(t.remoteStore,s)),e._onlineComponents=t}function t0(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function e0(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await to(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!t0(n))throw n;Ki("Error using user provided cache. Falling back to memory cache: "+n),await to(e,new Yl)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await to(e,new Yl);return e._offlineComponents}async function n0(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Zl(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Zl(e,new Yv))),e._onlineComponents}function r0(e){return n0(e).then(t=>t.syncEngine)}/**
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
 */function Zh(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const tc=new Map;/**
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
 */function td(e,t,n){if(!n)throw new N(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function i0(e,t,n,r){if(t===!0&&r===!0)throw new N(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ec(e){if(!W.isDocumentKey(e))throw new N(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function nc(e){if(W.isDocumentKey(e))throw new N(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Da(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function ed(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(e);throw new N(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class rc{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}i0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new N(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new N(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new N(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ds{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new K_;switch(r.type){case"firstParty":return new Y_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tc.get(n);r&&(D("ComponentProvider","Removing Datastore"),tc.delete(n),r.terminate())}(this),Promise.resolve()}}function s0(e,t,n,r={}){var i;const s=(e=ed(e,Ds))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Gt.MOCK_USER;else{a=yf(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new N(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Gt(c)}e._authCredentials=new Q_(new gh(a,l))}}/**
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
 */class Na{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Na(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class en extends Na{constructor(t,n,r){super(t,n,Ay(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new W(t))}withConverter(t){return new en(this.firestore,t,this._path)}}function o0(e,t,...n){if(e=Zt(e),td("collection","path",t),e instanceof Ds){const r=vt.fromString(t,...n);return nc(r),new en(e,null,r)}{if(!(e instanceof Le||e instanceof en))throw new N(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return nc(r),new en(e.firestore,null,r)}}function ic(e,t,...n){if(e=Zt(e),arguments.length===1&&(t=_h.V()),td("doc","path",t),e instanceof Ds){const r=vt.fromString(t,...n);return ec(r),new Le(e,null,new W(r))}{if(!(e instanceof Le||e instanceof en))throw new N(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return ec(r),new Le(e.firestore,e instanceof en?e.converter:null,new W(r))}}/**
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
 */class a0{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new qh(this,"async_queue_retry"),this.Xa=()=>{const n=Zs();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=Zs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=Zs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new wn;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Is(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Cn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=ka.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&Q()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}class nd extends Ds{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new a0}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||id(this),this._firestoreClient.terminate()}}function l0(e,t){const n=typeof e=="object"?e:Nc(),r=typeof e=="string"?e:t||"(default)",i=$o(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gf("firestore");s&&s0(i,...s)}return i}function rd(e){return e._firestoreClient||id(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function id(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,c,u){return new hy(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Zh(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Zv(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Br{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Br(Be.fromBase64String(t))}catch(n){throw new N(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Br(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Oa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new N(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ns{constructor(t){this._methodName=t}}/**
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
 */class sd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new N(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new N(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dt(this._lat,t._lat)||dt(this._long,t._long)}}/**
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
 */const c0=/^__.*__$/;class u0{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new hn(t,this.data,this.fieldMask,n,this.fieldTransforms):new ii(t,this.data,n,this.fieldTransforms)}}class od{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new hn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function ad(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Va{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Va(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return es(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(ad(this.uu)&&c0.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class h0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Cs(t)}Ru(t,n,r,i=!1){return new Va({uu:t,methodName:n,Au:r,path:Qt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function d0(e){const t=e._freezeSettings(),n=Cs(e._databaseId);return new h0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function f0(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);La("Data must be an object, but it was:",o,r);const a=ld(r,o);let l,c;if(s.merge)l=new ue(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=No(t,h,n);if(!o.contains(d))throw new N(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hd(u,d)||u.push(d)}l=new ue(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new u0(new ce(a),l,c)}class Os extends Ns{_toFieldTransform(t){if(t.uu!==2)throw t.uu===1?t.Eu(`${this._methodName}() can only appear at the top level of your update data`):t.Eu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Os}}class Ma extends Ns{_toFieldTransform(t){return new Fy(t.path,new xr)}isEqual(t){return t instanceof Ma}}function p0(e,t,n,r){const i=e.Ru(1,t,n);La("Data must be an object, but it was:",i,r);const s=[],o=ce.empty();ir(r,(l,c)=>{const u=ud(t,l,n);c=Zt(c);const h=i.Iu(u);if(c instanceof Os)s.push(u);else{const d=Vs(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new ue(s);return new od(o,a,i.fieldTransforms)}function m0(e,t,n,r,i,s){const o=e.Ru(1,t,n),a=[No(t,r,n)],l=[i];if(s.length%2!=0)throw new N(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(No(t,s[d])),l.push(s[d+1]);const c=[],u=ce.empty();for(let d=a.length-1;d>=0;--d)if(!hd(c,a[d])){const f=a[d];let p=l[d];p=Zt(p);const E=o.Iu(f);if(p instanceof Os)c.push(f);else{const w=Vs(p,E);w!=null&&(c.push(f),u.set(f,w))}}const h=new ue(c);return new od(u,h,o.fieldTransforms)}function Vs(e,t){if(cd(e=Zt(e)))return La("Unsupported field value:",t,e),ld(e,t);if(e instanceof Ns)return function(r,i){if(!ad(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Vs(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return My(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Vt.fromDate(r);return{timestampValue:ko(i.serializer,s)}}if(r instanceof Vt){const s=new Vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(i.serializer,s)}}if(r instanceof sd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Br)return{bytesValue:Qy(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jh(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${Da(r)}`)}(e,t)}function ld(e,t){const n={};return Eh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ir(e,(r,i)=>{const s=Vs(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function cd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Vt||e instanceof sd||e instanceof Br||e instanceof Le||e instanceof Ns)}function La(e,t,n){if(!cd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Da(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function No(e,t,n){if((t=Zt(t))instanceof Oa)return t._internalPath;if(typeof t=="string")return ud(e,t);throw es("Field path arguments must be of type string or ",e,!1,void 0,n)}const g0=new RegExp("[~\\*/\\[\\]]");function ud(e,t,n){if(t.search(g0)>=0)throw es(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Oa(...t.split("."))._internalPath}catch{throw es(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function es(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new N(g.INVALID_ARGUMENT,a+e+l)}function hd(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function _0(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function y0(e,t){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>Gv(await r0(r),i,s)),s.promise}(rd(e),t)}/**
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
 */class v0{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=d0(t)}set(t,n,r){this._verifyNotCommitted();const i=eo(t,this._firestore),s=_0(i.converter,n,r),o=f0(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Te.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=eo(t,this._firestore);let o;return o=typeof(n=Zt(n))=="string"||n instanceof Oa?m0(this._dataReader,"WriteBatch.update",s._key,n,r,i):p0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Te.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=eo(t,this._firestore);return this._mutations=this._mutations.concat(new ba(n._key,Te.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function eo(e,t){if((e=Zt(e)).firestore!==t)throw new N(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function sc(){return new Ma("serverTimestamp")}/**
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
 */function E0(e){return rd(e=ed(e,nd)),new v0(e,t=>y0(e,t))}(function(t,n=!0){(function(i){rr=i})(tr),zn(new In("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new nd(new X_(r.getProvider("auth-internal")),new ty(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new N(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ji(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(Ol,"4.1.0",t),tn(Ol,"4.1.0","esm2017")})();const w0=Tc({apiKey:ye(),authDomain:ye(),projectId:ye(),storageBucket:ye(),messagingSenderId:ye(),appId:ye()}),T0="documents",I0="users",A0=so(w0,JSON.parse('{"apiKey":"AIzaSyBYGz_WUwzIpZYGf4SN4jo5xqp3MNEC8FA","authDomain":"conforall.firebaseapp.com","projectId":"conforall","storageBucket":"conforall.appspot.com","messagingSenderId":"289133639309","appId":"1:289133639309:web:b6ddf29928a923028214c4"}')),b0=Dc(A0),no=l0(b0),oc=Bg(),R0=e=>new Promise((t,n)=>{Sm(e,r=>r?t(r):n())}),C0=async e=>{await Tm(oc);const t=await R0(oc),n=E0(no),r=ic(o0(no,T0)),i=ic(no,I0,t.uid);return n.set(r,{...e,uid:t.uid,timestamp:sc()}),n.set(i,{timestamp:sc()},{merge:!0}),n.commit()};function S0(e){let t,n='<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>',r,i,s,o,a,l,c,u;return{c(){t=O("label"),t.innerHTML=n,r=ut(),i=O("input"),o=ut(),a=O("div"),l=O("span"),c=nn("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(h){t=V(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Rt(t)!=="svelte-5u2x8b"&&(t.innerHTML=n),r=ht(h),i=V(h,"INPUT",{type:!0,name:!0,class:!0}),o=ht(h),a=V(h,"DIV",{class:!0});var d=Y(a);l=V(d,"SPAN",{class:!0});var f=Y(l);c=rn(f,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),f.forEach(A),d.forEach(A),this.h()},h(){y(t,"class","label"),y(t,"for","personalid"),y(i,"type","string"),y(i,"name","personalid"),y(i,"class",s="input rounded-sm bg-base-200 "+(e[18]?"input-error":"")),i.disabled=e[4],y(l,"class",u="label-text-alt "+(e[18]?"text-error":"")),y(a,"class","label")},m(h,d){G(h,t,d),G(h,r,d),G(h,i,d),G(h,o,d),G(h,a,d),P(a,l),P(l,c)},p(h,d){d&262144&&s!==(s="input rounded-sm bg-base-200 "+(h[18]?"input-error":""))&&y(i,"class",s),d&16&&(i.disabled=h[4]),d&262144&&u!==(u="label-text-alt "+(h[18]?"text-error":""))&&y(l,"class",u)},d(h){h&&(A(t),A(r),A(i),A(o),A(a))}}}function P0(e){let t,n='<span class="label-text heading-03">ชื่อ*</span>',r,i,s,o,a,l,c,u;return{c(){t=O("label"),t.innerHTML=n,r=ut(),i=O("input"),o=ut(),a=O("div"),l=O("span"),c=nn("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(h){t=V(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Rt(t)!=="svelte-i2bah3"&&(t.innerHTML=n),r=ht(h),i=V(h,"INPUT",{type:!0,name:!0,class:!0}),o=ht(h),a=V(h,"DIV",{class:!0});var d=Y(a);l=V(d,"SPAN",{class:!0});var f=Y(l);c=rn(f,"ระบุชื่อจริงเป็นภาษาไทย"),f.forEach(A),d.forEach(A),this.h()},h(){y(t,"class","label"),y(t,"for","firstname"),y(i,"type","text"),y(i,"name","firstname"),y(i,"class",s="input rounded-sm bg-base-200 w-full "+(e[18]?"input-error":"")),i.disabled=e[4],y(l,"class",u="label-text-alt "+(e[18]?"text-error":"")),y(a,"class","label")},m(h,d){G(h,t,d),G(h,r,d),G(h,i,d),G(h,o,d),G(h,a,d),P(a,l),P(l,c)},p(h,d){d&262144&&s!==(s="input rounded-sm bg-base-200 w-full "+(h[18]?"input-error":""))&&y(i,"class",s),d&16&&(i.disabled=h[4]),d&262144&&u!==(u="label-text-alt "+(h[18]?"text-error":""))&&y(l,"class",u)},d(h){h&&(A(t),A(r),A(i),A(o),A(a))}}}function k0(e){let t,n='<span class="label-text heading-03">นามสกุล*</span>',r,i,s,o,a,l,c,u;return{c(){t=O("label"),t.innerHTML=n,r=ut(),i=O("input"),o=ut(),a=O("div"),l=O("span"),c=nn("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(h){t=V(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Rt(t)!=="svelte-1lqzuwh"&&(t.innerHTML=n),r=ht(h),i=V(h,"INPUT",{type:!0,name:!0,class:!0}),o=ht(h),a=V(h,"DIV",{class:!0});var d=Y(a);l=V(d,"SPAN",{class:!0});var f=Y(l);c=rn(f,"ระบุนามสกุลเป็นภาษาไทย"),f.forEach(A),d.forEach(A),this.h()},h(){y(t,"class","label"),y(t,"for","lastname"),y(i,"type","text"),y(i,"name","lastname"),y(i,"class",s="input rounded-sm bg-base-200 "+(e[18]?"input-error":"")),i.disabled=e[4],y(l,"class",u="label-text-alt "+(e[18]?"text-error":"")),y(a,"class","label")},m(h,d){G(h,t,d),G(h,r,d),G(h,i,d),G(h,o,d),G(h,a,d),P(a,l),P(l,c)},p(h,d){d&262144&&s!==(s="input rounded-sm bg-base-200 "+(h[18]?"input-error":""))&&y(i,"class",s),d&16&&(i.disabled=h[4]),d&262144&&u!==(u="label-text-alt "+(h[18]?"text-error":""))&&y(l,"class",u)},d(h){h&&(A(t),A(r),A(i),A(o),A(a))}}}function D0(e){let t,n,r=`คลิกเพื่อกรอกลายเซ็น
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z" fill="black"></path><path d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z" fill="black"></path></svg>`,i,s;return{c(){t=O("div"),n=O("button"),n.innerHTML=r,this.h()},l(o){t=V(o,"DIV",{class:!0});var a=Y(t);n=V(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Rt(n)!=="svelte-u454pn"&&(n.innerHTML=r),a.forEach(A),this.h()},h(){y(n,"type","button"),y(n,"class","btn bg-base-100 heading-03 shadow-xl"),y(t,"class","absolute w-full h-full flex justify-center items-center top-0 left-0")},m(o,a){G(o,t,a),P(t,n),i||(s=Pi(n,"click",e[10]),i=!0)},p:Xe,d(o){o&&A(t),i=!1,s()}}}function N0(e){let t,n=`ล้าง
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z" fill="#8054FF"></path></svg>`,r,i;return{c(){t=O("button"),t.innerHTML=n,this.h()},l(s){t=V(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Rt(t)!=="svelte-1auzjm1"&&(t.innerHTML=n),this.h()},h(){y(t,"type","button"),y(t,"class","btn btn-outline btn-accent absolute right-[10px] bottom-4")},m(s,o){G(s,t,o),r||(i=Pi(t,"click",e[8]),r=!0)},p:Xe,d(s){s&&A(t),r=!1,i()}}}function O0(e){let t,n,r=(e[18]||"")+"",i;return{c(){t=O("div"),n=O("span"),i=nn(r),this.h()},l(s){t=V(s,"DIV",{class:!0});var o=Y(t);n=V(o,"SPAN",{class:!0});var a=Y(n);i=rn(a,r),a.forEach(A),o.forEach(A),this.h()},h(){y(n,"class","label-text-alt text-error"),y(t,"class","label")},m(s,o){G(s,t,o),P(t,n),P(n,i)},p(s,o){o&262144&&r!==(r=(s[18]||"")+"")&&vd(i,r)},d(s){s&&A(t)}}}function V0(e){let t,n;return{c(){t=nn(`กำลังลงชื่อ...
				`),n=O("span"),this.h()},l(r){t=rn(r,`กำลังลงชื่อ...
				`),n=V(r,"SPAN",{class:!0}),Y(n).forEach(A),this.h()},h(){y(n,"class","loading loading-spinner")},m(r,i){G(r,t,i),G(r,n,i)},d(r){r&&(A(t),A(n))}}}function M0(e){let t,n,r,i,s;return{c(){t=nn(`ลงชื่อเลย
				`),n=Vn("svg"),r=Vn("path"),i=Vn("path"),s=Vn("path"),this.h()},l(o){t=rn(o,`ลงชื่อเลย
				`),n=Mn(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=Y(n);r=Mn(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),Y(r).forEach(A),i=Mn(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),Y(i).forEach(A),s=Mn(a,"path",{d:!0,fill:!0}),Y(s).forEach(A),a.forEach(A),this.h()},h(){y(r,"fill-rule","evenodd"),y(r,"clip-rule","evenodd"),y(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),y(r,"fill","white"),y(i,"fill-rule","evenodd"),y(i,"clip-rule","evenodd"),y(i,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),y(i,"fill","white"),y(s,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),y(s,"fill","white"),y(n,"xmlns","http://www.w3.org/2000/svg"),y(n,"width","16"),y(n,"height","16"),y(n,"viewBox","0 0 16 16"),y(n,"fill","none")},m(o,a){G(o,t,a),G(o,n,a),P(n,r),P(n,i),P(n,s)},d(o){o&&(A(t),A(n))}}}function L0(e){let t,n,r,i,s,o,a,l='<span class="label-text heading-03">คำนำหน้า</span>',c,u,h,d,f="นาย",p,E="นาง",w,I="นางสาว",$,M,S,x,U,lt,st,Z,Tt='<span class="label-text heading-03">ลงลายมือชื่อ*</span>',k,q,ot,Ct,qt,at,It,de,T,z='<label class="label cursor-pointer space-x-2 justify-normal"><input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อ <a href="/privacy-policy" class="underline">อ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคล</a></span></label>',j,nt,mt,gt,yt,fe='<form method="dialog" class="modal-box"><p class="py-4">ลงชื่อสำเร็จ</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',me,Ft,je='<form method="dialog" class="modal-box"><p class="py-4">เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',oe,ge,ae;r=new hi({props:{for:"personalid",$$slots:{default:[S0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}}),S=new hi({props:{for:"firstname",$$slots:{default:[P0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}}),U=new hi({props:{for:"lastname",$$slots:{default:[k0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}});function R(b,B){return b[3]?N0:D0}let m=R(e),C=m(e);It=new hi({props:{for:"signature",$$slots:{default:[O0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}});function H(b,B){return b[4]?V0:M0}let At=H(e),St=At(e);return{c(){t=O("form"),n=O("div"),cr(r.$$.fragment),i=ut(),s=O("div"),o=O("div"),a=O("label"),a.innerHTML=l,c=ut(),u=O("select"),h=O("option"),d=O("option"),d.textContent=f,p=O("option"),p.textContent=E,w=O("option"),w.textContent=I,$=ut(),M=O("div"),cr(S.$$.fragment),x=ut(),cr(U.$$.fragment),lt=ut(),st=O("div"),Z=O("div"),Z.innerHTML=Tt,k=ut(),q=O("div"),ot=O("canvas"),qt=ut(),C.c(),at=ut(),cr(It.$$.fragment),de=ut(),T=O("div"),T.innerHTML=z,j=ut(),nt=O("button"),St.c(),gt=ut(),yt=O("dialog"),yt.innerHTML=fe,me=ut(),Ft=O("dialog"),Ft.innerHTML=je,this.h()},l(b){t=V(b,"FORM",{});var B=Y(t);n=V(B,"DIV",{class:!0});var X=Y(n);ur(r.$$.fragment,X),i=ht(X),s=V(X,"DIV",{class:!0});var bt=Y(s);o=V(bt,"DIV",{class:!0});var Pt=Y(o);a=V(Pt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Rt(a)!=="svelte-1h1uakk"&&(a.innerHTML=l),c=ht(Pt),u=V(Pt,"SELECT",{class:!0,name:!0});var Ut=Y(u);h=V(Ut,"OPTION",{}),Y(h).forEach(A),d=V(Ut,"OPTION",{"data-svelte-h":!0}),Rt(d)!=="svelte-1en4y3b"&&(d.textContent=f),p=V(Ut,"OPTION",{"data-svelte-h":!0}),Rt(p)!=="svelte-18vmce2"&&(p.textContent=E),w=V(Ut,"OPTION",{"data-svelte-h":!0}),Rt(w)!=="svelte-1lp5zi9"&&(w.textContent=I),Ut.forEach(A),Pt.forEach(A),$=ht(bt),M=V(bt,"DIV",{class:!0});var ai=Y(M);ur(S.$$.fragment,ai),ai.forEach(A),bt.forEach(A),x=ht(X),ur(U.$$.fragment,X),lt=ht(X),st=V(X,"DIV",{class:!0});var rt=Y(st);Z=V(rt,"DIV",{class:!0,"data-svelte-h":!0}),Rt(Z)!=="svelte-zde8yy"&&(Z.innerHTML=Tt),k=ht(rt),q=V(rt,"DIV",{class:!0});var tt=Y(q);ot=V(tt,"CANVAS",{class:!0}),Y(ot).forEach(A),qt=ht(tt),C.l(tt),tt.forEach(A),at=ht(rt),ur(It.$$.fragment,rt),rt.forEach(A),de=ht(X),T=V(X,"DIV",{class:!0,"data-svelte-h":!0}),Rt(T)!=="svelte-dsszle"&&(T.innerHTML=z),j=ht(X),nt=V(X,"BUTTON",{type:!0,class:!0});var kt=Y(nt);St.l(kt),kt.forEach(A),X.forEach(A),gt=ht(B),yt=V(B,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),Rt(yt)!=="svelte-hy64ql"&&(yt.innerHTML=fe),me=ht(B),Ft=V(B,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),Rt(Ft)!=="svelte-zw178f"&&(Ft.innerHTML=je),B.forEach(A),this.h()},h(){y(a,"class","label"),y(a,"for","prefix"),h.selected=!0,h.__value="",li(h,h.__value),d.__value="นาย",li(d,d.__value),p.__value="นาง",li(p,p.__value),w.__value="นางสาว",li(w,w.__value),y(u,"class","select rounded-sm max-w-xs bg-base-200"),u.disabled=e[4],y(u,"name","prefix"),y(o,"class","form-control"),y(M,"class","form-control flex-1"),y(s,"class","flex flex-row space-x-[10px]"),y(Z,"class","label"),y(ot,"class",Ct="bg-base-200 h-[258px] w-full rounded-sm "+(!e[3]||e[4]?"pointer-events-none":"")),y(q,"class","relative"),y(st,"class","form-control"),y(T,"class","form-control"),y(nt,"type","submit"),y(nt,"class","btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100"),nt.disabled=mt=!e[5].consent||e[4],y(n,"class","form-control w-full"),y(yt,"id","success-dialog"),y(yt,"class","modal modal-bottom sm:modal-middle"),y(Ft,"id","error-dialog"),y(Ft,"class","modal modal-bottom sm:modal-middle")},m(b,B){G(b,t,B),P(t,n),hr(r,n,null),P(n,i),P(n,s),P(s,o),P(o,a),P(o,c),P(o,u),P(u,h),P(u,d),P(u,p),P(u,w),P(s,$),P(s,M),hr(S,M,null),P(n,x),hr(U,n,null),P(n,lt),P(n,st),P(st,Z),P(st,k),P(st,q),P(q,ot),e[9](ot),P(q,qt),C.m(q,null),P(st,at),hr(It,st,null),P(n,de),P(n,T),P(n,j),P(n,nt),St.m(nt,null),P(t,gt),P(t,yt),e[11](yt),P(t,me),P(t,Ft),e[12](Ft),oe=!0,ge||(ae=_d(e[6].call(null,t)),ge=!0)},p(b,[B]){const X={};B&786448&&(X.$$scope={dirty:B,ctx:b}),r.$set(X),(!oe||B&16)&&(u.disabled=b[4]);const bt={};B&786448&&(bt.$$scope={dirty:B,ctx:b}),S.$set(bt);const Pt={};B&786448&&(Pt.$$scope={dirty:B,ctx:b}),U.$set(Pt),(!oe||B&24&&Ct!==(Ct="bg-base-200 h-[258px] w-full rounded-sm "+(!b[3]||b[4]?"pointer-events-none":"")))&&y(ot,"class",Ct),m===(m=R(b))&&C?C.p(b,B):(C.d(1),C=m(b),C&&(C.c(),C.m(q,null)));const Ut={};B&786432&&(Ut.$$scope={dirty:B,ctx:b}),It.$set(Ut),At!==(At=H(b))&&(St.d(1),St=At(b),St&&(St.c(),St.m(nt,null))),(!oe||B&48&&mt!==(mt=!b[5].consent||b[4]))&&(nt.disabled=mt)},i(b){oe||(we(r.$$.fragment,b),we(S.$$.fragment,b),we(U.$$.fragment,b),we(It.$$.fragment,b),oe=!0)},o(b){Ee(r.$$.fragment,b),Ee(S.$$.fragment,b),Ee(U.$$.fragment,b),Ee(It.$$.fragment,b),oe=!1},d(b){b&&A(t),dr(r),dr(S),dr(U),e[9](null),C.d(),dr(It),St.d(),e[11](null),e[12](null),ge=!1,ae()}}}function x0(e,t,n){let r,i,s,o,a,l=!1,c=!1;const u=new ResizeObserver(x=>{n(0,i.width=x[0].target.clientWidth,i),n(0,i.height=x[0].target.clientHeight,i),s.fromData(s.toData())}),{form:h,setTouched:d,setData:f,data:p,reset:E}=zd({validate(x){try{so(Ga,x)}catch(U){return ef(U).nested}return{}},async onSubmit(x){n(4,c=!0);try{await C0(so(Ga,x)),o.showModal(),w(),E()}catch{a.showModal()}n(4,c=!1)},extend:Gd});yd(e,p,x=>n(5,r=x)),Mo(()=>{s=new Ni(i),s.addEventListener("endStroke",()=>{d("signature",!0),f("signature",s.toDataURL())}),u.observe(i)});function w(){s.clear(),f("signature",void 0)}function I(x){Ti[x?"unshift":"push"](()=>{i=x,n(0,i)})}const $=()=>n(3,l=!0);function M(x){Ti[x?"unshift":"push"](()=>{o=x,n(1,o)})}function S(x){Ti[x?"unshift":"push"](()=>{a=x,n(2,a)})}return[i,o,a,l,c,r,h,p,w,I,$,M,S]}class F0 extends Oo{constructor(t){super(),Vo(this,t,x0,L0,ns,{})}}function U0(e){let t,n,r;return n=new F0({}),{c(){t=O("div"),cr(n.$$.fragment),this.h()},l(i){t=V(i,"DIV",{class:!0});var s=Y(t);ur(n.$$.fragment,s),s.forEach(A),this.h()},h(){y(t,"class","bg-base-100 px-[10px] py-5")},m(i,s){G(i,t,s),hr(n,t,null),r=!0},i(i){r||(we(n.$$.fragment,i),r=!0)},o(i){Ee(n.$$.fragment,i),r=!1},d(i){i&&A(t),dr(n)}}}function B0(e){let t,n=`เราอยากให้ลงลายมือชื่อบนกระดาษมากกว่าออนไลน์ เพราะประกาศของกกต.
			เขียนไว้ไม่ชัดเจนว่าลงชื่อทางออนไลน์ได้หรือไม่ได้
			จึงต้องรวบรวมชื่อบนกระดาษให้ได้ 50,000 เป็นอย่างน้อยก่อน`,r,i,s=`<h1 class="heading-responsive-01">วิธีที่ 1 : เดินทางไปลงชื่อที่จุดตั้งโต๊ะ</h1> <a href="/locations" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดูสถานที่ลงชื่อ
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.33332 0C5.40622 0 3 2.28256 3 5.53844C3 6.70035 3.27369 7.50866 3.78205 8.40382L7.97434 15.7884C8.00983 15.8525 8.06184 15.9059 8.12497 15.9432C8.1881 15.9804 8.26004 16 8.33332 16C8.4066 16 8.47854 15.9804 8.54166 15.9432C8.60479 15.9059 8.6568 15.8525 8.69229 15.7884L12.8846 8.40382C13.393 7.50864 13.6666 6.70035 13.6666 5.53844C13.6666 2.28256 11.2604 0 8.33332 0ZM8.33332 0.82051C10.8441 0.82051 12.8461 2.67673 12.8461 5.53844C12.8461 6.58135 12.6437 7.17112 12.173 7.99999L8.33332 14.7564L4.49359 7.99999C4.02289 7.17114 3.82051 6.58135 3.82051 5.53844C3.82051 2.67673 5.82255 0.82051 8.33332 0.82051ZM8.33332 3.28204C9.47107 3.28204 10.3846 4.19558 10.3846 5.33332C10.3846 6.47104 9.47106 7.38459 8.33332 7.38459C7.19557 7.38459 6.28204 6.47104 6.28204 5.33332C6.28204 4.19558 7.19557 3.28204 8.33332 3.28204Z" fill="white"></path></svg></a>`,o,a,l="หรือ",c,u,h=`<h1 class="heading-responsive-01 mb-3">วิธีที่ 2 : ดาวน์โหลดแบบฟอร์มมากรอก</h1> <div class="border-t grid gap-2 py-5"><p class="heading-03">1. ดาวน์โหลดแบบฟอร์ม และพิมพ์ลงกระดาษ A4</p> <a target="_blank" href="https://pin.ski/3Qtz6l3" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดาวน์โหลดแบบฟอร์ม
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M13.5 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V13.5C1.5 13.7652 1.60536 14.0196 1.79289 14.2071C1.98043 14.3946 2.23478 14.5 2.5 14.5H13.5C13.7652 14.5 14.0196 14.3946 14.2071 14.2071C14.3946 14.0196 14.5 13.7652 14.5 13.5V2.5C14.5 2.23478 14.3946 1.98043 14.2071 1.79289C14.0196 1.60536 13.7652 1.5 13.5 1.5ZM13.5 2.5V4.5H2.5V2.5H13.5ZM8.5 5.5H13.5V9H8.5V5.5ZM7.5 9H2.5V5.5H7.5V9ZM2.5 10H7.5V13.5H2.5V10ZM8.5 13.5V10H13.5V13.5H8.5Z" fill="white"></path></svg></a></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">2. ลงลายมือชื่อบนแบบฟอร์ม</p> <p>ชวนคนใกล้ๆ ตัวมาร่วมลงชื่อให้เต็มแผ่นเลยก็ได้</p> <img class="mx-auto" src="/register-form.svg" alt="register-form"/></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">3. ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw</p> <div class="grid gap-1"><p>3.1. นำส่งด้วยตัวเองที่ iLaw</p> <a href="https://goo.gl/maps/PM5nXuVFUv5GCUZw7" class="link px-6 py-2 text-center text-accent font-bold heading-03">ดูแผนที่</a></div> <div class="grid gap-1"><p>3.2. ส่งไปรษณีย์ (ต้องใช้บริการไปรษณีย์ไทยเท่านั้น)</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">ตู้ ปณ.79 ปณศ.สามเสนใน เขตพญาไท กรุงเทพฯ ประเทศไทย 10400 โทร.
						0996786031</p></div></div>`;return{c(){t=O("p"),t.textContent=n,r=ut(),i=O("div"),i.innerHTML=s,o=ut(),a=O("p"),a.textContent=l,c=ut(),u=O("div"),u.innerHTML=h,this.h()},l(d){t=V(d,"P",{"data-svelte-h":!0}),Rt(t)!=="svelte-ri6d4r"&&(t.textContent=n),r=ht(d),i=V(d,"DIV",{class:!0,"data-svelte-h":!0}),Rt(i)!=="svelte-1kllz1y"&&(i.innerHTML=s),o=ht(d),a=V(d,"P",{"data-svelte-h":!0}),Rt(a)!=="svelte-nl1k6i"&&(a.textContent=l),c=ht(d),u=V(d,"DIV",{class:!0,"data-svelte-h":!0}),Rt(u)!=="svelte-kk9bq7"&&(u.innerHTML=h),this.h()},h(){y(i,"class","p-4 bg-base-100 grid gap-3 text-left"),y(u,"class","p-4 bg-base-100 text-left")},m(d,f){G(d,t,f),G(d,r,f),G(d,i,f),G(d,o,f),G(d,a,f),G(d,c,f),G(d,u,f)},i:Xe,o:Xe,d(d){d&&(A(t),A(r),A(i),A(o),A(a),A(c),A(u))}}}function $0(e){let t,n,r="ร่วมลงชื่อ",i,s,o="*ผู้มีสิทธิเข้าชื่อต้องอายุ 18 ปีขึ้นไป นับจากวันที่ 20 ส.ค. 2566",a,l,c,u,h,d,f,p,E,w,I,$,M,S,x,U,lt;const st=[B0,U0],Z=[];function Tt(k,q){return k[0]?0:1}return M=Tt(e),S=Z[M]=st[M](e),{c(){t=O("div"),n=O("h3"),n.textContent=r,i=ut(),s=O("p"),s.textContent=o,a=ut(),l=O("div"),c=O("button"),u=nn(`แบบกระดาษ
			`),h=Vn("svg"),d=Vn("path"),p=ut(),E=O("button"),w=nn("แบบออนไลน์"),$=ut(),S.c(),this.h()},l(k){t=V(k,"DIV",{class:!0});var q=Y(t);n=V(q,"H3",{class:!0,"data-svelte-h":!0}),Rt(n)!=="svelte-l3nsqj"&&(n.textContent=r),i=ht(q),s=V(q,"P",{"data-svelte-h":!0}),Rt(s)!=="svelte-k2zji"&&(s.textContent=o),a=ht(q),l=V(q,"DIV",{class:!0});var ot=Y(l);c=V(ot,"BUTTON",{class:!0});var Ct=Y(c);u=rn(Ct,`แบบกระดาษ
			`),h=Mn(Ct,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var qt=Y(h);d=Mn(qt,"path",{d:!0,fill:!0}),Y(d).forEach(A),qt.forEach(A),Ct.forEach(A),p=ht(ot),E=V(ot,"BUTTON",{class:!0});var at=Y(E);w=rn(at,"แบบออนไลน์"),at.forEach(A),ot.forEach(A),$=ht(q),S.l(q),q.forEach(A),this.h()},h(){y(n,"class","heading-responsive-03"),y(d,"d","M11.5 3.33838C10.8584 3.33838 10.2311 3.5283 9.69722 3.88422C9.16336 4.24013 8.74678 4.7461 8.5 5.33838C8.25322 4.7461 7.83664 4.24013 7.30278 3.88422C6.76891 3.5283 6.14163 3.33838 5.5 3.33838C4.70435 3.33838 3.94129 3.65445 3.37868 4.21706C2.81607 4.77967 2.5 5.54273 2.5 6.33838C2.5 9.40088 8.5 14.3384 8.5 14.3384C8.5 14.3384 14.5 9.40088 14.5 6.33838C14.5 5.54273 14.1839 4.77967 13.6213 4.21706C13.0587 3.65445 12.2956 3.33838 11.5 3.33838Z"),y(d,"fill","black"),y(h,"xmlns","http://www.w3.org/2000/svg"),y(h,"width","17"),y(h,"height","17"),y(h,"viewBox","0 0 17 17"),y(h,"fill","none"),y(c,"class",f="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(e[0]?"":"opacity-50")),y(E,"class",I="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(e[0]?"opacity-50":"")),y(l,"class","join w-full"),y(t,"class","text-center grid gap-3 body-02-normal")},m(k,q){G(k,t,q),P(t,n),P(t,i),P(t,s),P(t,a),P(t,l),P(l,c),P(c,u),P(c,h),P(h,d),P(l,p),P(l,E),P(E,w),P(t,$),Z[M].m(t,null),x=!0,U||(lt=[Pi(c,"click",e[1]),Pi(E,"click",e[2])],U=!0)},p(k,[q]){(!x||q&1&&f!==(f="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(k[0]?"":"opacity-50")))&&y(c,"class",f),(!x||q&1&&I!==(I="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(k[0]?"opacity-50":"")))&&y(E,"class",I);let ot=M;M=Tt(k),M!==ot&&(ac(),Ee(Z[ot],1,1,()=>{Z[ot]=null}),lc(),S=Z[M],S||(S=Z[M]=st[M](k),S.c()),we(S,1),S.m(t,null))},i(k){x||(we(S),x=!0)},o(k){Ee(S),x=!1},d(k){k&&A(t),Z[M].d(),U=!1,Ed(lt)}}}function j0(e,t,n){let r=!0;return Mo(()=>{new URLSearchParams(window.location.search).has("online")&&n(0,r=!1)}),[r,()=>n(0,r=!0),()=>n(0,r=!1)]}class G0 extends Oo{constructor(t){super(),Vo(this,t,j0,$0,ns,{})}}export{G0 as default};

import{z as Xe,s as es,A as cd,S as No,i as Vo,e as N,a as ut,B as Fa,b as V,d as Y,h as A,f as ht,C as ud,k as G,D as oc,q as Ee,E as ac,p as we,F as hd,G as Mo,H as dd,I as wi,c as lc,u as cc,n as uc,o as hc,r as lr,w as cr,v as St,j as y,J as ai,l as R,x as ur,K as fd,y as hr,L as pd,t as nn,g as rn,m as md,M as Ci,N as Vn,O as Mn,P as gd}from"./index.c8f5ee00.js";function _d(e,...t){const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function De(e){let t;return _d(e,n=>t=n)(),t}class yd extends Error{constructor(t,n){super(t),this.name="FelteSubmitError",this.response=n}}function vd(e,t){return Object.keys(e).some(r=>t(e[r]))}function ns(e,t){return Object.keys(e||{}).reduce((r,i)=>Object.assign(Object.assign({},r),{[i]:t(e[i])}),{})}function K(e){return Object.prototype.toString.call(e)==="[object Object]"}function re(e){return Object.keys(e||{}).reduce((t,n)=>Object.assign(Object.assign({},t),{[n]:K(e[n])?re(e[n]):Array.isArray(e[n])?[...e[n]]:e[n]}),{})}function Ed(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function wd(e){return function(t){if(K(t)){const n=ie(t,e);return Ed(n,["key"])}return e}}function ie(e,t){return ns(e,n=>K(n)?ie(n,t):Array.isArray(n)?n.map(wd(t)):t)}function Je(...e){const t=e.pop(),n=e.shift();if(typeof n=="string")return n;const r=re(n);if(e.length===0)return r;for(const i of e){if(!i)continue;if(typeof i=="string")return i;let s=t(r,i);if(typeof s<"u")return s;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(i))));for(const a of o)if(s=t(r[a],i[a]),typeof s<"u")r[a]=s;else if(K(i[a])&&K(r[a]))r[a]=Je(r[a],i[a],t);else if(Array.isArray(i[a]))r[a]=i[a].map((l,c)=>{if(!K(l))return l;const u=Array.isArray(r[a])?r[a][c]:r[a];return Je(u,l,t)});else if(K(i[a])){const l=ie(re(i[a]),void 0);r[a]=Je(l,i[a],t)}else typeof i[a]<"u"&&(r[a]=i[a])}return r}function Id(e,t){if(!(K(e)&&K(t))){if(Array.isArray(t)){if(t.some(K))return;const n=Array.isArray(e)?e:[];return t.map((r,i)=>{var s;return(s=n[i])!==null&&s!==void 0?s:r})}if(typeof e<"u")return e}}function Ua(...e){return Je(...e,Id)}function dc(...e){return Je(...e,()=>{})}function Se(e,t,n){const r=s=>String.prototype.split.call(t,s).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,e),i=r(/[,[\]]+?/)||r(/[,[\].]+?/);return i===void 0||i===e?n:i}function $r(e,t,n){e&&(e=re(e)),K(e)||(e={});const r=Array.isArray(t)?t:t.match(/[^.[\]]+/g)||[],i=r[r.length-1];if(!i)return e;let s=e;for(let o=0;o<r.length-1;o++){const a=r[o];if(!s[a]||!K(s[a])&&!Array.isArray(s[a])){const l=r[o+1];isNaN(Number(l))?s[a]={}:s[a]=[]}s=s[a]}return s[i]=n(s[i]),e}function ct(e,t,n){return $r(e,t,()=>n)}function dr(e,t){if(!e||Object(e)!==e)return;typeof e<"u"&&(e=re(e));const n=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g)||[],r=n.length===1?e:Se(e,n.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(n[n.length-1]),1):r==null||delete r[n[n.length-1]],e}function Ir(e,t){return vd(e,n=>K(n)?Ir(n,t):Array.isArray(n)?n.length===0||n.every(r=>typeof r=="string")?t(n):n.some(r=>K(r)?Ir(r,t):t(r)):t(n))}function Fn(e){return e?.nodeName==="INPUT"}function Td(e){return e?.nodeName==="TEXTAREA"}function Un(e){return e?.nodeName==="SELECT"}function rs(e){return e?.nodeName==="FIELDSET"}function jt(e){return Fn(e)||Td(e)||Un(e)}function Ba(e){return e.nodeType===Node.ELEMENT_NODE}function Dt(e,t){return t??(jt(e)?e.name:"")}function Ms(e){let t=e;for(;t&&t.nodeName!=="FORM";){if(t.hasAttribute("data-felte-ignore"))return!0;t=t.parentElement}return!1}function Ad(e,t){if(!(K(e)||K(t))){if(e===null||e==="")return t;if(t===null||t===""||!t)return e;if(!(!e||!t)){if(Array.isArray(e)){if(!Array.isArray(t))return[...e,t];const n=[],r=Math.max(t.length,e.length);for(let i=0;i<r;i++){let s=e[i],o=t[i];!K(s)&&!K(o)?(Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]),n.push(...s,...o)):n.push(On([s??{},o??{}]))}return n.filter(Boolean)}return Array.isArray(t)||(t=[t]),[e,...t].reduce((n,r)=>n.concat(r),[]).filter(Boolean)}}}function On(e){return Je(...e,Ad)}function bd(e,t){return t?(Array.isArray(t)?t:[t]).map(r=>r(e)):[]}function ro(e,t){return t?Array.isArray(t)?t.reduce((n,r)=>r(n),e):t(e):e}function Lo(e=8){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function Ri(e,t,{onInit:n,onEnd:r}={}){let i;return(...s)=>{i||n?.(),i&&clearTimeout(i),i=setTimeout(()=>{e.apply(this,s),i=void 0,r?.()},t)}}function io(e){if(jt(e))return[e];if(e.childElementCount===0)return[];const t=new Set;for(const n of e.children){if(jt(n)&&t.add(n),rs(n))for(const r of n.elements)jt(r)&&t.add(r);n.childElementCount>0&&io(n).forEach(r=>t.add(r))}return Array.from(t)}function fc(e){for(const t of e.elements)!jt(t)&&!rs(t)||e.hasAttribute("data-felte-keep-on-remove")&&!t.hasAttribute("data-felte-keep-on-remove")&&(t.dataset.felteKeepOnRemove=e.dataset.felteKeepOnRemove)}function pc(e){return e.type.match(/^(number|range)$/)?e.value?+e.value:void 0:e.value}function $a(e){var t;let n={},r={};for(const i of e.elements){if(rs(i)&&fc(i),!jt(i)||!i.name)continue;const s=Dt(i);if(Fn(i)){if(i.type==="checkbox"){if(typeof Se(n,s)>"u"){if(Array.from(e.querySelectorAll(`[name="${i.name}"]`)).filter(l=>jt(l)?s===Dt(l):!1).length===1){n=ct(n,s,i.checked),r=ct(r,s,!1);continue}n=ct(n,s,i.checked?[i.value]:[]),r=ct(r,s,!1);continue}Array.isArray(Se(n,s))&&i.checked&&(n=$r(n,s,a=>[...a,i.value]));continue}if(i.type==="radio"){if(Se(n,s))continue;n=ct(n,s,i.checked?i.value:void 0),r=ct(r,s,!1);continue}if(i.type==="file"){n=ct(n,s,i.multiple?Array.from(i.files||[]):(t=i.files)===null||t===void 0?void 0:t[0]),r=ct(r,s,!1);continue}}else if(Un(i)){if(!i.multiple)n=ct(n,s,i.value);else{const l=Array.from(i.selectedOptions).map(c=>c.value);n=ct(n,s,l)}r=ct(r,s,!1);continue}const o=pc(i);n=ct(n,s,o),r=ct(r,s,!1)}return{defaultData:n,defaultTouched:r}}function Sd(e,t){var n;if(!jt(e))return;const r=t;if(Fn(e)){if(e.type==="checkbox"){const i=r;if(typeof i>"u"||typeof i=="boolean"){e.checked=!!i;return}Array.isArray(i)&&(i.includes(e.value)?e.checked=!0:e.checked=!1);return}if(e.type==="radio"){const i=r;e.value===i?e.checked=!0:e.checked=!1;return}if(e.type==="file"){if(t instanceof FileList)e.files=t;else if(t instanceof File&&typeof DataTransfer<"u"){const i=new DataTransfer;i.items.add(t),e.files=i.files}else if(typeof DataTransfer<"u"&&Array.isArray(t)&&t.some(i=>i instanceof File)){const i=new DataTransfer;for(const s of t)s instanceof File&&i.items.add(s);e.files=i.files}else(!t||Array.isArray(t)&&!t.length)&&(e.files=null,e.value="");return}}else if(Un(e)){if(e.multiple){if(Array.isArray(r)){e.value=String((n=r[0])!==null&&n!==void 0?n:"");const s=r.map(o=>String(o));for(const o of e.options)s.includes(o.value)?o.selected=!0:o.selected=!1}}else{e.value=String(r??"");for(const s of e.options)s.value===String(r)?s.selected=!0:s.selected=!1}return}e.value=String(r??"")}function li(e,t){for(const n of e.elements){if(rs(n)&&fc(n),!jt(n)||!n.name)continue;const r=Dt(n);Sd(n,Se(t,r))}}function mc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Oe(e,t){return ns(e,n=>K(n)?Oe(n,t):Array.isArray(n)?n.length===0||n.every(r=>typeof r=="string")?t:n.map(r=>{const i=Oe(r,t);return mc(i,["key"])}):t)}function In(e){return e?ns(e,t=>K(t)?In(t):Array.isArray(t)?t.length===0||t.every(n=>typeof n=="string")?t:t.map(n=>{if(!K(n))return n;const r=In(n);return r.key||(r.key=Lo()),r}):t):{}}function mn(e){return e?ns(e,t=>K(t)?mn(t):Array.isArray(t)?t.length===0||t.every(n=>typeof n=="string")?t:t.map(n=>{if(!K(n))return n;const r=mn(n);return mc(r,["key"])}):t):{}}function Pd(){class e extends CustomEvent{constructor(i){super("feltesuccess",{detail:i})}}class t extends CustomEvent{constructor(i){super("felteerror",{detail:i,cancelable:!0})}setErrors(i){this.preventDefault(),this.errors=i}}class n extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(i){this.onSubmit=i}handleError(i){this.onError=i}handleSuccess(i){this.onSuccess=i}}return{createErrorEvent:r=>new t(r),createSubmitEvent:()=>new n,createSuccessEvent:r=>new e(r)}}function Cd(e){if(e)return async function(){let n=new FormData(e);const r=new URL(e.action),i=e.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||e.method;let s=e.enctype;e.querySelector('input[type="file"]')&&(s="multipart/form-data"),(i==="get"||s==="application/x-www-form-urlencoded")&&(n=new URLSearchParams(n));let o;i==="get"?(n.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:i,headers:{Accept:"application/json"}}):o={method:i,body:n,headers:Object.assign(Object.assign({},s!=="multipart/form-data"&&{"Content-Type":s}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new yd("An error occurred while submitting the form",a)}}function ci(e,t,n,r){return $r(e,t,i=>(typeof i<"u"&&!Array.isArray(i)||(i||(i=[]),typeof r>"u"?i.push(n):i.splice(r,0,n)),i))}function Rd(e,t,n,r){return $r(e,t,i=>(!i||!Array.isArray(i)||([i[n],i[r]]=[i[r],i[n]]),i))}function kd(e,t,n,r){return $r(e,t,i=>(!i||!Array.isArray(i)||i.splice(r,0,i.splice(n,1)[0]),i))}function ja(e){return typeof e=="function"}function We(e){return(n,r)=>{if(typeof n=="string"){const i=n;e(s=>{const o=ja(r)?r(Se(s,i)):r;return ct(s,i,o)})}else e(i=>ja(n)?n(i):n)}}function Dd({stores:e,config:t,validateErrors:n,validateWarnings:r,_getCurrentExtenders:i}){var s;let o,a=In((s=t.initialValues)!==null&&s!==void 0?s:{});const{data:l,touched:c,errors:u,warnings:h,isDirty:d,isSubmitting:f,interacted:p}=e,E=We(l.update),w=We(c.update),T=We(u.update),$=We(h.update);function M(I){E(z=>{const j=I(z);return o&&li(o,j),j})}const C=(I,z,j)=>{We(M)(I,z),typeof I=="string"&&j&&w(I,!0)};function x(I,z,j){const nt=K(z)?Oe(z,!1):!1,mt=K(nt)?ie(nt,[]):[];z=K(z)?Object.assign(Object.assign({},z),{key:Lo()}):z,u.update(gt=>ci(gt,I,mt,j)),h.update(gt=>ci(gt,I,mt,j)),c.update(gt=>ci(gt,I,nt,j)),l.update(gt=>{const yt=ci(gt,I,z,j);return setTimeout(()=>o&&li(o,yt)),yt})}function U(I){u.update(I),h.update(I),c.update(I),l.update(z=>{const j=I(z);return setTimeout(()=>o&&li(o,j)),j})}function lt(I){U(z=>dr(z,I))}function st(I,z,j){U(nt=>Rd(nt,I,z,j))}function Z(I,z,j){U(nt=>kd(nt,I,z,j))}function It(I){const z=Se(a,I),j=K(z)?Oe(z,!1):!1,nt=K(j)?ie(j,[]):[];l.update(mt=>{const gt=ct(mt,I,z);return o&&li(o,gt),gt}),c.update(mt=>ct(mt,I,j)),u.update(mt=>ct(mt,I,nt)),h.update(mt=>ct(mt,I,nt))}const k=We(f.update),q=We(d.update),ot=We(p.update);async function Pt(){const I=De(l);c.set(Oe(I,!0)),p.set(null);const z=await n(I);return await r(I),z}function qt(){C(re(a)),w(I=>ie(I,!1)),p.set(null),d.set(!1)}function at(I){return async function(j){var nt,mt,gt,yt,fe,me,Ft;const{createErrorEvent:je,createSubmitEvent:oe,createSuccessEvent:ge}=Pd(),ae=oe();o?.dispatchEvent(ae);const S=(mt=(nt=ae.onError)!==null&&nt!==void 0?nt:I?.onError)!==null&&mt!==void 0?mt:t.onError,m=(yt=(gt=ae.onSuccess)!==null&&gt!==void 0?gt:I?.onSuccess)!==null&&yt!==void 0?yt:t.onSuccess,P=(Ft=(me=(fe=ae.onSubmit)!==null&&fe!==void 0?fe:I?.onSubmit)!==null&&me!==void 0?me:t.onSubmit)!==null&&Ft!==void 0?Ft:Cd(o);if(!P||(j?.preventDefault(),ae.defaultPrevented))return;f.set(!0),p.set(null);const H=mn(De(l)),At=await n(H,I?.validate),Ct=await r(H,I?.warn);if(Ct&&h.set(dc(ie(H,[]),Ct)),c.set(Oe(H,!0)),At&&(c.set(Oe(At,!0)),Ir(At,X=>Array.isArray(X)?X.length>=1:!!X))){await new Promise(X=>setTimeout(X)),i().forEach(X=>{var bt;return(bt=X.onSubmitError)===null||bt===void 0?void 0:bt.call(X,{data:H,errors:At})}),f.set(!1);return}const b={event:j,setFields:C,setData:E,setTouched:w,setErrors:T,setWarnings:$,unsetField:lt,addField:x,resetField:It,reset:qt,setInitialValues:Tt.setInitialValues,moveField:Z,swapFields:st,form:o,controls:o&&Array.from(o.elements).filter(jt),config:Object.assign(Object.assign({},t),I)};try{const B=await P(H,b);o?.dispatchEvent(ge(Object.assign({response:B},b))),await m?.(B,b)}catch(B){const X=je(Object.assign({error:B},b));if(o?.dispatchEvent(X),!S&&!X.defaultPrevented)throw B;if(!S&&!X.errors)return;const bt=X.errors||await S?.(B,b);bt&&(c.set(Oe(bt,!0)),u.set(bt),await new Promise(Rt=>setTimeout(Rt)),i().forEach(Rt=>{var Ut;return(Ut=Rt.onSubmitError)===null||Ut===void 0?void 0:Ut.call(Rt,{data:H,errors:De(u)})}))}finally{f.set(!1)}}}const Tt={setData:E,setFields:C,setTouched:w,setErrors:T,setWarnings:$,setIsSubmitting:k,setIsDirty:q,setInteracted:ot,validate:Pt,reset:qt,unsetField:lt,resetField:It,addField:x,swapFields:st,moveField:Z,createSubmitHandler:at,handleSubmit:at(),setInitialValues:I=>{a=In(I)}};return{public:Tt,private:{_setFormNode(I){o=I},_getInitialValues:()=>a}}}function Od({helpers:e,stores:t,config:n,extender:r,createSubmitHandler:i,handleSubmit:s,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:u,setTouched:h,reset:d,setInitialValues:f}=e,{addValidator:p,addTransformer:E,validate:w}=e,{data:T,errors:$,warnings:M,touched:C,isSubmitting:x,isDirty:U,interacted:lt,isValid:st,isValidating:Z}=t;function It(k){k.requestSubmit||(k.requestSubmit=s);function q(S){return function(m){return m({form:k,stage:S,controls:Array.from(k.elements).filter(jt),data:T,errors:$,warnings:M,touched:C,isValid:st,isValidating:Z,isSubmitting:x,isDirty:U,interacted:lt,config:n,addValidator:p,addTransformer:E,setFields:u,validate:w,reset:d,createSubmitHandler:i,handleSubmit:s})}}l(r.map(q("MOUNT"))),k.noValidate=!!n.validate;const{defaultData:ot,defaultTouched:Pt}=$a(k);o(k),f(dc(re(ot),a())),u(a()),C.set(Pt);function qt(S){const m=Dt(S),P=Array.from(k.querySelectorAll(`[name="${S.name}"]`)).filter(H=>jt(H)?m===Dt(H):!1);if(P.length!==0)return P.length===1?T.update(H=>ct(H,Dt(S),S.checked)):T.update(H=>ct(H,Dt(S),P.filter(Fn).filter(At=>At.checked).map(At=>At.value)))}function at(S){const m=k.querySelectorAll(`[name="${S.name}"]`),P=Array.from(m).find(H=>Fn(H)&&H.checked);T.update(H=>ct(H,Dt(S),P?.value))}function Tt(S){var m;const P=Array.from((m=S.files)!==null&&m!==void 0?m:[]);T.update(H=>ct(H,Dt(S),S.multiple?P:P[0]))}function de(S){if(!S.multiple)T.update(m=>ct(m,Dt(S),S.value));else{const m=Array.from(S.selectedOptions).map(P=>P.value);T.update(P=>ct(P,Dt(S),m))}}function I(S){const m=S.target;if(!m||!jt(m)||Un(m)||Ms(m)||["checkbox","radio","file"].includes(m.type)||!m.name)return;U.set(!0);const P=pc(m);lt.set(m.name),T.update(H=>ct(H,Dt(m),P))}function z(S){const m=S.target;if(!(!m||!jt(m)||Ms(m))&&m.name)if(h(Dt(m),!0),lt.set(m.name),(Un(m)||["checkbox","radio","file","hidden"].includes(m.type))&&U.set(!0),m.type==="hidden"&&T.update(P=>ct(P,Dt(m),m.value)),Un(m))de(m);else if(Fn(m))m.type==="checkbox"?qt(m):m.type==="radio"?at(m):m.type==="file"&&Tt(m);else return}function j(S){const m=S.target;!m||!jt(m)||Ms(m)||m.name&&(h(Dt(m),!0),lt.set(m.name))}function nt(S){S.preventDefault(),d()}const mt={childList:!0,subtree:!0};function gt(S){let m=De(T),P=De(C),H=De($),At=De(M);for(const Ct of S.reverse()){if(Ct.hasAttribute("data-felte-keep-on-remove")&&Ct.dataset.felteKeepOnRemove!=="false")continue;const b=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let B=Dt(Ct);const X=De(C);if(b.test(B)){const Rt=B.split(".").slice(0,-1).join("."),Ut=Se(X,Rt);K(Ut)&&Object.keys(Ut).length<=1&&(B=Rt)}m=dr(m,B),P=dr(P,B),H=dr(H,B),At=dr(At,B)}T.set(m),C.set(P),$.set(H),M.set(At)}const yt=Ri(()=>{c().forEach(P=>{var H;return(H=P.destroy)===null||H===void 0?void 0:H.call(P)}),l(r.map(q("UPDATE")));const{defaultData:S,defaultTouched:m}=$a(k);T.update(P=>Ua(P,S)),C.update(P=>Ua(P,m)),e.setFields(De(T))},0);let fe=[];const me=Ri(()=>{c().forEach(S=>{var m;return(m=S.destroy)===null||m===void 0?void 0:m.call(S)}),l(r.map(q("UPDATE"))),gt(fe),fe=[]},0);function Ft(S){Array.from(S.addedNodes).some(P=>Ba(P)?jt(P)?!0:io(P).length>0:!1)&&yt()}function je(S){for(const m of S.removedNodes){if(!Ba(m))continue;const P=io(m);P.length!==0&&(fe.push(...P),me())}}function oe(S){for(const m of S)m.type==="childList"&&(m.addedNodes.length>0&&Ft(m),m.removedNodes.length>0&&je(m))}const ge=new MutationObserver(oe);ge.observe(k,mt),k.addEventListener("input",I),k.addEventListener("change",z),k.addEventListener("focusout",j),k.addEventListener("submit",s),k.addEventListener("reset",nt);const ae=$.subscribe(S=>{for(const m of k.elements){if(!jt(m)||!m.name)continue;const P=Se(S,Dt(m)),H=Array.isArray(P)?P.join(`
`):typeof P=="string"?P:void 0;H!==m.dataset.felteValidationMessage&&(H?(m.dataset.felteValidationMessage=H,m.setAttribute("aria-invalid","true")):(delete m.dataset.felteValidationMessage,m.removeAttribute("aria-invalid")))}});return{destroy(){ge.disconnect(),k.removeEventListener("input",I),k.removeEventListener("change",z),k.removeEventListener("focusout",j),k.removeEventListener("submit",s),k.removeEventListener("reset",nt),ae(),c().forEach(S=>{var m;return(m=S.destroy)===null||m===void 0?void 0:m.call(S)})}}}return{form:It}}function Nd(e){const t={aborted:!1,priority:e};return{signal:t,abort(){t.aborted=!0}}}function Vd(e,t){if(K(e))return!t||K(t)&&Object.keys(t).length===0?ie(e,null):void 0;if(Array.isArray(e)){if(e.some(K))return;const n=Array.isArray(t)?t:[];return e.map((r,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:r&&s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?e?t:null:e&&t?[t]:null}function Md(e,t){if(K(e))return!t||K(t)&&Object.keys(t).length===0?ie(e,null):void 0;if(Array.isArray(e)){if(e.some(K))return;const n=Array.isArray(t)?t:[];return e.map((r,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?t:t?[t]:null}function Ld([e,t]){return Je(t,e,Vd)}function xd([e,t]){return Je(t,e,Md)}function Fd(e){return function(n,r,i){const s=Array.isArray(n)?n:[n],o=new Array(s.length),a=e(i),l=a.set,c=a.subscribe;let u;function h(){u=s.map((f,p)=>f.subscribe(E=>{o[p]=E,l(r(o))}))}function d(){u?.forEach(f=>f())}return a.subscribe=function(p){const E=c(p);return()=>{E()}},[a,h,d]}}function Ud(e,t){var n,r,i,s,o,a,l,c,u;const h=Fd(e),d=t.initialValues=t.initialValues?In(ro(re(t.initialValues),t.transform)):{},f=Oe(mn(d),!1),p=e(f),E=e(0),[w,T,$]=h([p,E],([rt,tt])=>Ir(rt,le=>!!le)&&tt>=1,!1);delete w.set,delete w.update;function M(rt){let tt;return async function(le,_e,ne,dn=!1){if(!ne||!le)return;let He=_e&&Object.keys(_e).length>0?_e:ie(le,[]);const fn=Nd(dn);if((!tt?.signal.priority||dn)&&(tt?.abort(),tt=fn),tt.signal.priority&&!dn)return;E.update(sr=>sr+1);const xa=bd(le,ne);return xa.forEach(async sr=>{const ld=await sr;fn.signal.aborted||(He=On([He,ld]),rt.set(He))}),await Promise.all(xa),tt=void 0,E.update(sr=>sr-1),He}}let C=ie(f,[]);const x=e(d),U=ie(f,[]),lt=e(U),st=e(re(U)),[Z,It,k]=h([lt,st],On,re(U)),q=ie(f,[]),ot=e(q),Pt=e(re(q)),[qt,at,Tt]=h([ot,Pt],On,re(q)),[de,I,z]=h([Z,p],Ld,re(U)),[j,nt,mt]=h([qt,p],xd,re(q));let gt=!1;const[yt,fe,me]=h(Z,([rt])=>{var tt;return gt?!Ir(rt,kt=>Array.isArray(kt)?kt.length>=1:!!kt):(gt=!0,!t.validate&&!(!((tt=t.debounced)===null||tt===void 0)&&tt.validate))},!t.validate&&!(!((n=t.debounced)===null||n===void 0)&&n.validate));delete yt.set,delete yt.update;const Ft=e(!1),je=e(!1),oe=e(null),ge=M(lt),ae=M(ot),S=M(st),m=M(Pt),P=Ri(S,(o=(i=(r=t.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&i!==void 0?i:(s=t.debounced)===null||s===void 0?void 0:s.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{E.update(rt=>rt+1)},onEnd:()=>{E.update(rt=>rt-1)}}),H=Ri(m,(u=(l=(a=t.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=t.debounced)===null||c===void 0?void 0:c.timeout)!==null&&u!==void 0?u:300);async function At(rt,tt){var kt;const le=mn(rt),_e=ge(le,C,tt??t.validate,!0);if(tt)return _e;const ne=S(le,C,(kt=t.debounced)===null||kt===void 0?void 0:kt.validate,!0);return On(await Promise.all([_e,ne]))}async function Ct(rt,tt){var kt;const le=mn(rt),_e=ae(le,C,tt??t.warn,!0);if(tt)return _e;const ne=m(le,C,(kt=t.debounced)===null||kt===void 0?void 0:kt.warn,!0);return On(await Promise.all([_e,ne]))}let b=U,B=q;function X(){const rt=x.subscribe(ne=>{var dn,He;const fn=mn(ne);ge(fn,C,t.validate),ae(fn,C,t.warn),P(fn,C,(dn=t.debounced)===null||dn===void 0?void 0:dn.validate),H(fn,C,(He=t.debounced)===null||He===void 0?void 0:He.warn)}),tt=p.subscribe(ne=>{C=ie(ne,[])}),kt=Z.subscribe(ne=>{b=ne}),le=qt.subscribe(ne=>{B=ne});It(),fe(),at(),I(),nt(),T();function _e(){rt(),z(),k(),Tt(),mt(),me(),$(),tt(),kt(),le()}return _e}function bt(rt){lt.set(rt(b)),st.set({})}function Rt(rt){ot.set(rt(B)),Pt.set({})}function Ut(rt){bt(()=>rt)}function oi(rt){Rt(()=>rt)}return de.set=Ut,de.update=bt,j.set=oi,j.update=Rt,{data:x,errors:de,warnings:j,touched:p,isValid:yt,isSubmitting:Ft,isDirty:je,isValidating:w,interacted:oe,validateErrors:At,validateWarnings:Ct,cleanup:t.preventStoreStart?()=>{}:X(),start:X}}function Bd(e,t){var n,r;(n=e.extend)!==null&&n!==void 0||(e.extend=[]),(r=e.debounced)!==null&&r!==void 0||(e.debounced={}),e.validate&&!Array.isArray(e.validate)&&(e.validate=[e.validate]),e.debounced.validate&&!Array.isArray(e.debounced.validate)&&(e.debounced.validate=[e.debounced.validate]),e.transform&&!Array.isArray(e.transform)&&(e.transform=[e.transform]),e.warn&&!Array.isArray(e.warn)&&(e.warn=[e.warn]),e.debounced.warn&&!Array.isArray(e.debounced.warn)&&(e.debounced.warn=[e.debounced.warn]);function i(at,{debounced:Tt,level:de}={debounced:!1,level:"error"}){var I;const z=de==="error"?"validate":"warn";(I=e.debounced)!==null&&I!==void 0||(e.debounced={});const j=Tt?e.debounced:e;j[z]?j[z]=[...j[z],at]:j[z]=[at]}function s(at){e.transform?e.transform=[...e.transform,at]:e.transform=[at]}const o=Array.isArray(e.extend)?e.extend:[e.extend];let a=[];const l=()=>a,c=at=>{a=at},{isSubmitting:u,isValidating:h,data:d,errors:f,warnings:p,touched:E,isValid:w,isDirty:T,cleanup:$,start:M,validateErrors:C,validateWarnings:x,interacted:U}=Ud(t.storeFactory,e),lt=d.update,st=d.set,Z=at=>lt(Tt=>In(ro(at(Tt),e.transform))),It=at=>st(In(ro(at,e.transform)));d.update=Z,d.set=It;const k=Dd({extender:o,config:e,addValidator:i,addTransformer:s,validateErrors:C,validateWarnings:x,_getCurrentExtenders:l,stores:{data:d,errors:f,warnings:p,touched:E,isValid:w,isValidating:h,isSubmitting:u,isDirty:T,interacted:U}}),{createSubmitHandler:q,handleSubmit:ot}=k.public;a=o.map(at=>at({stage:"SETUP",errors:f,warnings:p,touched:E,data:d,isDirty:T,isValid:w,isValidating:h,isSubmitting:u,interacted:U,config:e,addValidator:i,addTransformer:s,setFields:k.public.setFields,reset:k.public.reset,validate:k.public.validate,handleSubmit:ot,createSubmitHandler:q}));const Pt=Object.assign({config:e,stores:{data:d,touched:E,errors:f,warnings:p,isSubmitting:u,isValidating:h,isValid:w,isDirty:T,interacted:U},createSubmitHandler:q,handleSubmit:ot,helpers:Object.assign(Object.assign({},k.public),{addTransformer:s,addValidator:i}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},k.private),{form:qt}=Od(Pt);return Object.assign({data:d,errors:f,warnings:p,touched:E,isValid:w,isSubmitting:u,isValidating:h,isDirty:T,interacted:U,form:qt,cleanup:$,startStores:M},k.public)}function $d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const kn=[];function gc(e,t=Xe){let n;const r=new Set;function i(a){if(es(e,a)&&(e=a,n)){const l=!kn.length;for(const c of r)c[1](),kn.push(c,e);if(l){for(let c=0;c<kn.length;c+=2)kn[c][0](kn[c+1]);kn.length=0}}}function s(a){i(a(e))}function o(a,l=Xe){const c=[a,l];return r.add(c),r.size===1&&(n=t(i,s)||Xe),a(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function jd(e){const t=Bd(e??{},{storeFactory:gc}),{cleanup:n,startStores:r}=t,i=$d(t,["cleanup","startStores"]);return cd(n),i}const _c={},yc={};function Ha(e){const t=e.config;if(e.stage==="SETUP"){if(!t.__felteReporterSvelteId){const n=Lo(21);t.__felteReporterSvelteId=n,_c[n]=e.errors,yc[n]=e.warnings}return{}}return e.form.hasAttribute("data-felte-reporter-svelte-id")||(e.form.dataset.felteReporterSvelteId=t.__felteReporterSvelteId),{onSubmitError(){const n=e&&e.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');n&&n.focus()}}}function Hd(e){return!e||"preventFocusOnError"in e?t=>Ha(t):Ha(e)}const Wd=e=>({}),Wa=e=>({}),qd=e=>({messages:e&4}),qa=e=>({messages:e[2]});function zd(e){let t;const n=e[9].placeholder,r=lc(n,e,e[8],Wa);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),t=!0},p(i,s){r&&r.p&&(!t||s&256)&&cc(r,n,i,i[8],t?hc(n,i[8],s,Wd):uc(i[8]),Wa)},i(i){t||(we(r,i),t=!0)},o(i){Ee(r,i),t=!1},d(i){r&&r.d(i)}}}function Gd(e){let t;const n=e[9].default,r=lc(n,e,e[8],qa);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),t=!0},p(i,s){r&&r.p&&(!t||s&260)&&cc(r,n,i,i[8],t?hc(n,i[8],s,qd):uc(i[8]),qa)},i(i){t||(we(r,i),t=!0)},o(i){Ee(r,i),t=!1},d(i){r&&r.d(i)}}}function Kd(e){let t,n,r,i,s,o;const a=[Gd,zd],l=[];function c(u,h){return!u[3].placeholder||u[2]?0:1}return r=c(e),i=l[r]=a[r](e),{c(){t=N("div"),n=ut(),i.c(),s=Fa(),this.h()},l(u){t=V(u,"DIV",{style:!0}),Y(t).forEach(A),n=ht(u),i.l(u),s=Fa(),this.h()},h(){ud(t,"display","none")},m(u,h){G(u,t,h),e[10](t),G(u,n,h),l[r].m(u,h),G(u,s,h),o=!0},p(u,[h]){let d=r;r=c(u),r===d?l[r].p(u,h):(oc(),Ee(l[d],1,1,()=>{l[d]=null}),ac(),i=l[r],i?i.p(u,h):(i=l[r]=a[r](u),i.c()),we(i,1),i.m(s.parentNode,s))},i(u){o||(we(i),o=!0)},o(u){Ee(i),o=!1},d(u){u&&(A(t),A(n),A(s)),e[10](null),l[r].d(u)}}}function Qd(e,t,n){let r,i,s=Xe,o=()=>(s(),s=dd(d,T=>n(7,i=T)),d);e.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:l}=t;const c=hd(a);let{level:u="error"}=t,{for:h}=t,d,f,p;function E(){return p.closest("form")}Mo(()=>{n(6,f=Dt(p,h));const $=E();o($?u==="error"?n(0,d=_c[$.dataset.felteReporterSvelteId]):n(0,d=yc[$.dataset.felteReporterSvelteId]):n(0,d=gc({})))});function w(T){wi[T?"unshift":"push"](()=>{p=T,n(1,p)})}return e.$$set=T=>{"level"in T&&n(4,u=T.level),"for"in T&&n(5,h=T.for),"$$scope"in T&&n(8,l=T.$$scope)},e.$$.update=()=>{e.$$.dirty&192&&n(2,r=f&&Se(i,f))},[d,p,r,c,u,h,f,i,l,a,w]}class Xd extends No{constructor(t){super(),Vo(this,t,Qd,Kd,es,{level:4,for:5})}}const ui=Xd;function Jd(e){return e.issues.reduce((t,n)=>{if(n.path){const r=n.path.map(({key:i})=>i).join(".");t.nested[r]=[...t.nested[r]||[],n.message]}else t.root=[...t.root||[],n.message];return t},{nested:{}})}var Wn=class extends Error{issues;constructor(e){super(e[0].message),this.name="ValiError",this.issues=e}};function vc(e,t,n){let r=e;const i=[];for(const s of t)try{r=s(r,n)}catch(o){if(n.abortEarly||n.abortPipeEarly)throw o;i.push(...o.issues)}if(i.length)throw new Wn(i);return r}function Yd(e,t){return[...e?.path||[],t]}function Ec(e,t){const[n,r=[]]=!e||typeof e=="string"?[e,t]:[void 0,e];return{error:n,pipe:r}}function wc(e,t,n){const{error:r,pipe:i}=Ec(t,n);return{schema:"object",object:e,async:!1,parse(s,o){if(!s||typeof s!="object"||s.toString()!=="[object Object]")throw new Wn([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:s,...o}]);const a={},l=[];for(const[c,u]of Object.entries(e))try{const h=s[c];a[c]=u.parse(h,{...o,path:Yd(o,{schema:"object",input:s,key:c,value:h})})}catch(h){if(o?.abortEarly)throw h;l.push(...h.issues)}if(l.length)throw new Wn(l);return vc(a,i,{...o,reason:"object"})}}}function Zd(e){return{schema:"optional",wrapped:e,async:!1,parse(t,n){return t===void 0?t:e.parse(t,n)}}}function ye(e,t){const{error:n,pipe:r}=Ec(e,t);return{schema:"string",async:!1,parse(i,s){if(typeof i!="string")throw new Wn([{reason:"type",validation:"string",origin:"value",message:n||"Invalid type",input:i,...s}]);return vc(i,r,{...s,reason:"string"})}}}function so(e,t,n){return e.parse(t,n)}function Ls(){return e=>e.trim()}function tf(e,t){return(n,r)=>{if(n.length!==e)throw new Wn([{validation:"length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}function za(e,t){return(n,r)=>{if(n.length<e)throw new Wn([{validation:"min_length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class ki{constructor(t,n,r,i){if(isNaN(t)||isNaN(n))throw new Error(`Point is invalid: (${t}, ${n})`);this.x=+t,this.y=+n,this.pressure=r||0,this.time=i||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class xo{constructor(t,n,r,i,s,o){this.startPoint=t,this.control2=n,this.control1=r,this.endPoint=i,this.startWidth=s,this.endWidth=o}static fromPoints(t,n){const r=this.calculateControlPoints(t[0],t[1],t[2]).c2,i=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new xo(t[1],r,i,t[2],n.start,n.end)}static calculateControlPoints(t,n,r){const i=t.x-n.x,s=t.y-n.y,o=n.x-r.x,a=n.y-r.y,l={x:(t.x+n.x)/2,y:(t.y+n.y)/2},c={x:(n.x+r.x)/2,y:(n.y+r.y)/2},u=Math.sqrt(i*i+s*s),h=Math.sqrt(o*o+a*a),d=l.x-c.x,f=l.y-c.y,p=h/(u+h),E={x:c.x+d*p,y:c.y+f*p},w=n.x-E.x,T=n.y-E.y;return{c1:new ki(l.x+w,l.y+T),c2:new ki(c.x+w,c.y+T)}}length(){let n=0,r,i;for(let s=0;s<=10;s+=1){const o=s/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const c=a-r,u=l-i;n+=Math.sqrt(c*c+u*u)}r=a,i=l}return n}point(t,n,r,i,s){return n*(1-t)*(1-t)*(1-t)+3*r*(1-t)*(1-t)*t+3*i*(1-t)*t*t+s*t*t*t}}class ef{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,n,r){this._et.addEventListener(t,n,r)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,n,r){this._et.removeEventListener(t,n,r)}}function nf(e,t=250){let n=0,r=null,i,s,o;const a=()=>{n=Date.now(),r=null,i=e.apply(s,o),r||(s=null,o=[])};return function(...c){const u=Date.now(),h=t-(u-n);return s=this,o=c,h<=0||h>t?(r&&(clearTimeout(r),r=null),n=u,i=e.apply(s,o),r||(s=null,o=[])):r||(r=window.setTimeout(a,h)),i}}class Di extends ef{constructor(t,n={}){super(),this.canvas=t,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const i=r.changedTouches[0];this._strokeBegin(i)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const i=r.targetTouches[0];this._strokeMoveUpdate(i)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const s=r.changedTouches[0];this._strokeEnd(s)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=n.velocityFilterWeight||.7,this.minWidth=n.minWidth||.5,this.maxWidth=n.maxWidth||2.5,this.throttle="throttle"in n?n.throttle:16,this.minDistance="minDistance"in n?n.minDistance:5,this.dotSize=n.dotSize||0,this.penColor=n.penColor||"black",this.backgroundColor=n.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=n.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?nf(Di.prototype._strokeUpdate,this.throttle):Di.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:n}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,n={}){return new Promise((r,i)=>{const s=new Image,o=n.ratio||window.devicePixelRatio||1,a=n.width||this.canvas.width/o,l=n.height||this.canvas.height/o,c=n.xOffset||0,u=n.yOffset||0;this._reset(this._getPointGroupOptions()),s.onload=()=>{this._ctx.drawImage(s,c,u,a,l),r()},s.onerror=h=>{i(h)},s.crossOrigin="anonymous",s.src=t,this._isEmpty=!1})}toDataURL(t="image/png",n){switch(t){case"image/svg+xml":return typeof n!="object"&&(n=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(n))}`;default:return typeof n!="number"&&(n=void 0),this.canvas.toDataURL(t,n)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:n=!0}={}){n&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){this.dispatchEvent(new CustomEvent("beginStroke",{detail:t}));const n=this._getPointGroupOptions(),r=Object.assign(Object.assign({},n),{points:[]});this._data.push(r),this._reset(n),this._strokeUpdate(t)}_strokeUpdate(t){if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const n=t.clientX,r=t.clientY,i=t.pressure!==void 0?t.pressure:t.force!==void 0?t.force:0,s=this._createPoint(n,r,i),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?s.distanceTo(l)<=this.minDistance:!1,u=this._getPointGroupOptions(o);if(!l||!(l&&c)){const h=this._addPoint(s,u);l?h&&this._drawCurve(h,u):this._drawDot(s,u),a.push({time:s.time,x:s.x,y:s.y,pressure:s.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._strokeUpdate(t),this.dispatchEvent(new CustomEvent("endStroke",{detail:t}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,n,r){const i=this.canvas.getBoundingClientRect();return new ki(t-i.left,n-i.top,r,new Date().getTime())}_addPoint(t,n){const{_lastPoints:r}=this;if(r.push(t),r.length>2){r.length===3&&r.unshift(r[0]);const i=this._calculateCurveWidths(r[1],r[2],n),s=xo.fromPoints(r,i);return r.shift(),s}return null}_calculateCurveWidths(t,n,r){const i=r.velocityFilterWeight*n.velocityFrom(t)+(1-r.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(i,r),o={end:s,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=s,o}_strokeWidth(t,n){return Math.max(n.maxWidth/(t+1),n.minWidth)}_drawCurveSegment(t,n,r){const i=this._ctx;i.moveTo(t,n),i.arc(t,n,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,n){const r=this._ctx,i=t.endWidth-t.startWidth,s=Math.ceil(t.length())*2;r.beginPath(),r.fillStyle=n.penColor;for(let o=0;o<s;o+=1){const a=o/s,l=a*a,c=l*a,u=1-a,h=u*u,d=h*u;let f=d*t.startPoint.x;f+=3*h*a*t.control1.x,f+=3*u*l*t.control2.x,f+=c*t.endPoint.x;let p=d*t.startPoint.y;p+=3*h*a*t.control1.y,p+=3*u*l*t.control2.y,p+=c*t.endPoint.y;const E=Math.min(t.startWidth+c*i,n.maxWidth);this._drawCurveSegment(f,p,E)}r.closePath(),r.fill()}_drawDot(t,n){const r=this._ctx,i=n.dotSize>0?n.dotSize:(n.minWidth+n.maxWidth)/2;r.beginPath(),this._drawCurveSegment(t.x,t.y,i),r.closePath(),r.fillStyle=n.penColor,r.fill()}_fromData(t,n,r){for(const i of t){const{points:s}=i,o=this._getPointGroupOptions(i);if(s.length>1)for(let a=0;a<s.length;a+=1){const l=s[a],c=new ki(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const u=this._addPoint(c,o);u&&n(u,o)}else this._reset(o),r(s[0],o)}}toSVG({includeBackgroundColor:t=!1}={}){const n=this._data,r=Math.max(window.devicePixelRatio||1,1),i=0,s=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${i} ${s} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),t&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(n,(c,{penColor:u})=>{const h=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const d=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;h.setAttribute("d",d),h.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),h.setAttribute("stroke",u),h.setAttribute("fill","none"),h.setAttribute("stroke-linecap","round"),l.appendChild(h)}},(c,{penColor:u,dotSize:h,minWidth:d,maxWidth:f})=>{const p=document.createElement("circle"),E=h>0?h:(d+f)/2;p.setAttribute("r",E.toString()),p.setAttribute("cx",c.x.toString()),p.setAttribute("cy",c.y.toString()),p.setAttribute("fill",u),l.appendChild(p)}),l.outerHTML}}const rf="personalid",Ga=wc({[rf]:ye([Ls(),tf(13)]),prefix:Zd(ye()),firstname:ye([Ls(),za(1)]),lastname:ye([Ls(),za(1)]),signature:ye("กรุณาลงชื่อ")}),sf=wc({apiKey:ye(),authDomain:ye(),projectId:ye(),storageBucket:ye(),messagingSenderId:ye(),appId:ye()});/**
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
 */const Ic=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},of=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ic(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):of(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new af;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lf=function(e){const t=Ic(e);return Tc.encodeByteArray(t,!0)},Oi=function(e){return lf(e).replace(/\./g,"")},Ac=function(e){try{return Tc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function cf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const uf=()=>cf().__FIREBASE_DEFAULTS__,hf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},df=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ac(e[1]);return t&&JSON.parse(t)},Fo=()=>{try{return uf()||hf()||df()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},bc=e=>{var t,n;return(n=(t=Fo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ff=e=>{const t=bc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Sc=()=>{var e;return(e=Fo())===null||e===void 0?void 0:e.config},Pc=e=>{var t;return(t=Fo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class pf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function mf(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Oi(JSON.stringify(n)),Oi(JSON.stringify(o)),a].join(".")}/**
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
 */function Yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Yt())}function _f(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vf(){const e=Yt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ef(){try{return typeof indexedDB=="object"}catch{return!1}}function wf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const If="FirebaseError";class $e extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=If,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Tf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $e(i,a,r)}}function Tf(e,t){return e.replace(Af,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Af=/\{\$([^}]+)}/g;function bf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ni(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ka(s)&&Ka(o)){if(!Ni(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ka(e){return e!==null&&typeof e=="object"}/**
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
 */function Hr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Sf(e,t){const n=new Pf(e,t);return n.subscribe.bind(n)}class Pf{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Cf(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=xs),i.error===void 0&&(i.error=xs),i.complete===void 0&&(i.complete=xs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cf(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function xs(){}/**
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
 */function Zt(e){return e&&e._delegate?e._delegate:e}class Tn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Rf{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Df(t))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pn){return this.instances.has(t)}getOptions(t=pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kf(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pn){return this.component?this.component.multipleInstances?t:pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kf(e){return e===pn?void 0:e}function Df(e){return e.instantiationMode==="EAGER"}/**
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
 */class Of{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Rf(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(et||(et={}));const Nf={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},Vf=et.INFO,Mf={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Lf=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Mf[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uo{constructor(t){this.name=t,this._logLevel=Vf,this._logHandler=Lf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const xf=(e,t)=>t.some(n=>e instanceof n);let Qa,Xa;function Ff(){return Qa||(Qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uf(){return Xa||(Xa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cc=new WeakMap,oo=new WeakMap,Rc=new WeakMap,Fs=new WeakMap,Bo=new WeakMap;function Bf(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ye(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Cc.set(n,e)}).catch(()=>{}),Bo.set(t,e),t}function $f(e){if(oo.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});oo.set(e,t)}let ao={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return oo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Rc.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function jf(e){ao=e(ao)}function Hf(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Us(this),t,...n);return Rc.set(r,t.sort?t.sort():[t]),Ye(r)}:Uf().includes(e)?function(...t){return e.apply(Us(this),t),Ye(Cc.get(this))}:function(...t){return Ye(e.apply(Us(this),t))}}function Wf(e){return typeof e=="function"?Hf(e):(e instanceof IDBTransaction&&$f(e),xf(e,Ff())?new Proxy(e,ao):e)}function Ye(e){if(e instanceof IDBRequest)return Bf(e);if(Fs.has(e))return Fs.get(e);const t=Wf(e);return t!==e&&(Fs.set(e,t),Bo.set(t,e)),t}const Us=e=>Bo.get(e);function qf(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ye(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ye(o.result),l.oldVersion,l.newVersion,Ye(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const zf=["get","getKey","getAll","getAllKeys","count"],Gf=["put","add","delete","clear"],Bs=new Map;function Ja(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Bs.get(t))return Bs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Gf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zf.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bs.set(t,s),s}jf(e=>({...e,get:(t,n,r)=>Ja(t,n)||e.get(t,n,r),has:(t,n)=>!!Ja(t,n)||e.has(t,n)}));/**
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
 */class Kf{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qf(e){const t=e.getComponent();return t?.type==="VERSION"}const lo="@firebase/app",Ya="0.9.16";/**
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
 */const An=new Uo("@firebase/app"),Xf="@firebase/app-compat",Jf="@firebase/analytics-compat",Yf="@firebase/analytics",Zf="@firebase/app-check-compat",tp="@firebase/app-check",ep="@firebase/auth",np="@firebase/auth-compat",rp="@firebase/database",ip="@firebase/database-compat",sp="@firebase/functions",op="@firebase/functions-compat",ap="@firebase/installations",lp="@firebase/installations-compat",cp="@firebase/messaging",up="@firebase/messaging-compat",hp="@firebase/performance",dp="@firebase/performance-compat",fp="@firebase/remote-config",pp="@firebase/remote-config-compat",mp="@firebase/storage",gp="@firebase/storage-compat",_p="@firebase/firestore",yp="@firebase/firestore-compat",vp="firebase",Ep="10.2.0";/**
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
 */const co="[DEFAULT]",wp={[lo]:"fire-core",[Xf]:"fire-core-compat",[Yf]:"fire-analytics",[Jf]:"fire-analytics-compat",[tp]:"fire-app-check",[Zf]:"fire-app-check-compat",[ep]:"fire-auth",[np]:"fire-auth-compat",[rp]:"fire-rtdb",[ip]:"fire-rtdb-compat",[sp]:"fire-fn",[op]:"fire-fn-compat",[ap]:"fire-iid",[lp]:"fire-iid-compat",[cp]:"fire-fcm",[up]:"fire-fcm-compat",[hp]:"fire-perf",[dp]:"fire-perf-compat",[fp]:"fire-rc",[pp]:"fire-rc-compat",[mp]:"fire-gcs",[gp]:"fire-gcs-compat",[_p]:"fire-fst",[yp]:"fire-fst-compat","fire-js":"fire-js",[vp]:"fire-js-all"};/**
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
 */const Vi=new Map,uo=new Map;function Ip(e,t){try{e.container.addComponent(t)}catch(n){An.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qn(e){const t=e.name;if(uo.has(t))return An.debug(`There were multiple attempts to register component ${t}.`),!1;uo.set(t,e);for(const n of Vi.values())Ip(n,e);return!0}function $o(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Tp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ze=new jr("app","Firebase",Tp);/**
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
 */class Ap{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ze.create("app-deleted",{appName:this._name})}}/**
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
 */const Zn=Ep;function kc(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:co,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ze.create("bad-app-name",{appName:String(i)});if(n||(n=Sc()),!n)throw Ze.create("no-options");const s=Vi.get(i);if(s){if(Ni(n,s.options)&&Ni(r,s.config))return s;throw Ze.create("duplicate-app",{appName:i})}const o=new Of(i);for(const l of uo.values())o.addComponent(l);const a=new Ap(n,r,o);return Vi.set(i,a),a}function Dc(e=co){const t=Vi.get(e);if(!t&&e===co&&Sc())return kc();if(!t)throw Ze.create("no-app",{appName:e});return t}function tn(e,t,n){var r;let i=(r=wp[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),An.warn(a.join(" "));return}qn(new Tn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",Sp=1,Tr="firebase-heartbeat-store";let $s=null;function Oc(){return $s||($s=qf(bp,Sp,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Tr)}}}).catch(e=>{throw Ze.create("idb-open",{originalErrorMessage:e.message})})),$s}async function Pp(e){try{return await(await Oc()).transaction(Tr).objectStore(Tr).get(Nc(e))}catch(t){if(t instanceof $e)An.warn(t.message);else{const n=Ze.create("idb-get",{originalErrorMessage:t?.message});An.warn(n.message)}}}async function Za(e,t){try{const r=(await Oc()).transaction(Tr,"readwrite");await r.objectStore(Tr).put(t,Nc(e)),await r.done}catch(n){if(n instanceof $e)An.warn(n.message);else{const r=Ze.create("idb-set",{originalErrorMessage:n?.message});An.warn(r.message)}}}function Nc(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Cp=1024,Rp=30*24*60*60*1e3;class kp{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Op(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Rp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tl(),{heartbeatsToSend:n,unsentEntries:r}=Dp(this._heartbeatsCache.heartbeats),i=Oi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tl(){return new Date().toISOString().substring(0,10)}function Dp(e,t=Cp){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),el(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),el(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Op{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ef()?wf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Za(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function el(e){return Oi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Np(e){qn(new Tn("platform-logger",t=>new Kf(t),"PRIVATE")),qn(new Tn("heartbeat",t=>new kp(t),"PRIVATE")),tn(lo,Ya,e),tn(lo,Ya,"esm2017"),tn("fire-js","")}Np("");var Vp="firebase",Mp="10.2.0";/**
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
 */tn(Vp,Mp,"app");function jo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Vc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lp=Vc,Mc=new jr("auth","Firebase",Vc());/**
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
 */const Mi=new Uo("@firebase/auth");function xp(e,...t){Mi.logLevel<=et.WARN&&Mi.warn(`Auth (${Zn}): ${e}`,...t)}function Ii(e,...t){Mi.logLevel<=et.ERROR&&Mi.error(`Auth (${Zn}): ${e}`,...t)}/**
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
 */function xe(e,...t){throw Ho(e,...t)}function Pe(e,...t){return Ho(e,...t)}function Fp(e,t,n){const r=Object.assign(Object.assign({},Lp()),{[t]:n});return new jr("auth","Firebase",r).create(t,{appName:e.name})}function Ho(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Mc.create(e,...t)}function F(e,t,...n){if(!e)throw Ho(t,...n)}function Ne(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ii(t),new Error(t)}function Fe(e,t){e||Ne(t)}/**
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
 */function ho(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Up(){return nl()==="http:"||nl()==="https:"}function nl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Bp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Up()||_f()||"connection"in navigator)?navigator.onLine:!0}function $p(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Fe(n>t,"Short delay should be less than long delay!"),this.isMobile=gf()||yf()}get(){return Bp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class Lc{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hp=new Wr(3e4,6e4);function qo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qr(e,t,n,r,i={}){return xc(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Hr(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Lc.fetch()(Uc(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function xc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jp),t);try{const i=new Wp(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hi(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hi(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hi(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw hi(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Fp(e,u,c);xe(e,u)}}catch(i){if(i instanceof $e)throw i;xe(e,"network-request-failed",{message:String(i)})}}async function Fc(e,t,n,r,i={}){const s=await qr(e,t,n,r,i);return"mfaPendingCredential"in s&&xe(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Uc(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Wo(e.config,i):`${e.config.apiScheme}://${i}`}class Wp{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pe(this.auth,"network-request-failed")),Hp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pe(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function qp(e,t){return qr(e,"POST","/v1/accounts:delete",t)}async function zp(e,t){return qr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function mr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Gp(e,t=!1){const n=Zt(e),r=await n.getIdToken(t),i=zo(r);F(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:mr(js(i.auth_time)),issuedAtTime:mr(js(i.iat)),expirationTime:mr(js(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function js(e){return Number(e)*1e3}function zo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ac(n);return i?JSON.parse(i):(Ii("Failed to decode base64 JWT payload"),null)}catch(i){return Ii("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Kp(e){const t=zo(e);return F(t,"internal-error"),F(typeof t.exp<"u","internal-error"),F(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Ar(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $e&&Qp(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Qp({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Xp{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bc{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ar(e,zp(n,{idToken:r}));F(i?.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Zp(s.providerUserInfo):[],a=Yp(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Bc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Jp(e){const t=Zt(e);await Li(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Yp(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Zp(e){return e.map(t=>{var{providerId:n}=t,r=jo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tm(e,t){const n=await xc(e,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Uc(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Lc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){F(t.idToken,"internal-error"),F(typeof t.idToken<"u","internal-error"),F(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Kp(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return F(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tm(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new br;return r&&(F(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(F(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new br,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
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
 */function qe(e,t){F(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class vn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=jo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,t));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Gp(this,t)}reload(){return Jp(this)}_assign(t){this!==t&&(F(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new vn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ar(this,qp(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:M,emailVerified:C,isAnonymous:x,providerData:U,stsTokenManager:lt}=n;F(M&&lt,t,"internal-error");const st=br.fromJSON(this.name,lt);F(typeof M=="string",t,"internal-error"),qe(h,t.name),qe(d,t.name),F(typeof C=="boolean",t,"internal-error"),F(typeof x=="boolean",t,"internal-error"),qe(f,t.name),qe(p,t.name),qe(E,t.name),qe(w,t.name),qe(T,t.name),qe($,t.name);const Z=new vn({uid:M,auth:t,email:d,emailVerified:C,displayName:h,isAnonymous:x,photoURL:p,phoneNumber:f,tenantId:E,stsTokenManager:st,createdAt:T,lastLoginAt:$});return U&&Array.isArray(U)&&(Z.providerData=U.map(It=>Object.assign({},It))),w&&(Z._redirectEventId=w),Z}static async _fromIdTokenResponse(t,n,r=!1){const i=new br;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Li(s),s}}/**
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
 */class $c{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}$c.type="NONE";const il=$c;/**
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
 */function Ti(e,t,n){return`firebase:${e}:${t}:${n}`}class Bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ti(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ti("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?vn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Bn(Ve(il),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ve(il);const o=Ti(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=vn._fromJSON(t,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bn(s,t,r))}}/**
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
 */function sl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zc(t))return"Blackberry";if(Gc(t))return"Webos";if(Go(t))return"Safari";if((t.includes("chrome/")||Hc(t))&&!t.includes("edge/"))return"Chrome";if(qc(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function jc(e=Yt()){return/firefox\//i.test(e)}function Go(e=Yt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Hc(e=Yt()){return/crios\//i.test(e)}function Wc(e=Yt()){return/iemobile/i.test(e)}function qc(e=Yt()){return/android/i.test(e)}function zc(e=Yt()){return/blackberry/i.test(e)}function Gc(e=Yt()){return/webos/i.test(e)}function is(e=Yt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function em(e=Yt()){var t;return is(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function nm(){return vf()&&document.documentMode===10}function Kc(e=Yt()){return is(e)||qc(e)||Gc(e)||zc(e)||/windows phone/i.test(e)||Wc(e)}function rm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qc(e,t=[]){let n;switch(e){case"Browser":n=sl(Yt());break;case"Worker":n=`${sl(Yt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zn}/${r}`}/**
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
 */class im{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function sm(e,t={}){return qr(e,"GET","/v2/passwordPolicy",qo(e,t))}/**
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
 */const om=6;class am{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:om,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class lm{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ol(this),this.idTokenSubscription=new ol(this),this.beforeStateQueue=new im(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Ve(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Li(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$p()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Zt(t):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&F(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ve(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await sm(this),n=new am(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new jr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Ve(t)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[Ve(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Qc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&xp(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ss(e){return Zt(e)}class ol{constructor(t){this.auth=t,this.observer=null,this.addObserver=Sf(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function cm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function um(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Pe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cm().appendChild(r)})}function hm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dm(e,t){const n=$o(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ni(s,t??{}))return i;xe(i,"already-initialized")}return n.initialize({options:t})}function fm(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Ve);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function pm(e,t,n){const r=ss(e);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=Xc(t),{host:o,port:a}=mm(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gm()}function Xc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function mm(e){const t=Xc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:al(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:al(o)}}}function al(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function gm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Jc{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ne("not implemented")}_getIdTokenResponse(t){return Ne("not implemented")}_linkToIdToken(t,n){return Ne("not implemented")}_getReauthenticationResolver(t){return Ne("not implemented")}}/**
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
 */async function $n(e,t){return Fc(e,"POST","/v1/accounts:signInWithIdp",qo(e,t))}/**
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
 */const _m="http://localhost";class bn extends Jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=jo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:_m,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hr(n)}return t}}/**
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
 */class Yc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zr extends Yc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class ze extends zr{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ze.credential(t.oauthAccessToken)}catch{return null}}}ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";ze.PROVIDER_ID="facebook.com";/**
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
 */class Ge extends zr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ge.credentialFromTaggedObject(t)}static credentialFromError(t){return Ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ge.credential(n,r)}catch{return null}}}Ge.GOOGLE_SIGN_IN_METHOD="google.com";Ge.PROVIDER_ID="google.com";/**
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
 */class Ke extends zr{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ke.credentialFromTaggedObject(t)}static credentialFromError(t){return Ke.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ke.credential(t.oauthAccessToken)}catch{return null}}}Ke.GITHUB_SIGN_IN_METHOD="github.com";Ke.PROVIDER_ID="github.com";/**
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
 */class Qe extends zr{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Qe.credentialFromTaggedObject(t)}static credentialFromError(t){return Qe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Qe.credential(n,r)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
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
 */async function ym(e,t){return Fc(e,"POST","/v1/accounts:signUp",qo(e,t))}/**
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
 */class sn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await vn._fromIdTokenResponse(t,r,i),o=ll(r);return new sn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ll(r);return new sn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ll(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function vm(e){var t;const n=ss(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new sn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ym(n,{returnSecureToken:!0}),i=await sn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class xi extends $e{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new xi(t,n,r,i)}}function Zc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xi._fromErrorAndOperation(e,s,t,r):s})}async function Em(e,t,n=!1){const r=await Ar(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return sn._forOperation(e,"link",r)}/**
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
 */async function wm(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ar(e,Zc(r,i,t,e),n);F(s.idToken,r,"internal-error");const o=zo(s.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(e.uid===a,r,"user-mismatch"),sn._forOperation(e,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&xe(r,"user-mismatch"),s}}/**
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
 */async function Im(e,t,n=!1){const r="signIn",i=await Zc(e,r,t),s=await sn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Tm(e,t,n,r){return Zt(e).onIdTokenChanged(t,n,r)}function Am(e,t,n){return Zt(e).beforeAuthStateChanged(t,n)}function bm(e,t,n,r){return Zt(e).onAuthStateChanged(t,n,r)}const Fi="__sak";/**
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
 */class tu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fi,"1"),this.storage.removeItem(Fi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Sm(){const e=Yt();return Go(e)||is(e)}const Pm=1e3,Cm=10;class eu extends tu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sm()&&rm(),this.fallbackToPolling=Kc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nm()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Cm):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}eu.type="LOCAL";const Rm=eu;/**
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
 */class nu extends tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nu.type="SESSION";const ru=nu;/**
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
 */function km(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class os{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new os(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await km(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */class Dm{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ko("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ce(){return window}function Om(e){Ce().location.href=e}/**
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
 */function iu(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function Nm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vm(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Mm(){return iu()?self:null}/**
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
 */const su="firebaseLocalStorageDb",Lm=1,Ui="firebaseLocalStorage",ou="fbase_key";class Gr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(e,t){return e.transaction([Ui],t?"readwrite":"readonly").objectStore(Ui)}function xm(){const e=indexedDB.deleteDatabase(su);return new Gr(e).toPromise()}function fo(){const e=indexedDB.open(su,Lm);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ui,{keyPath:ou})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ui)?t(r):(r.close(),await xm(),t(await fo()))})})}async function cl(e,t,n){const r=as(e,!0).put({[ou]:t,value:n});return new Gr(r).toPromise()}async function Fm(e,t){const n=as(e,!1).get(t),r=await new Gr(n).toPromise();return r===void 0?null:r.value}function ul(e,t){const n=as(e,!0).delete(t);return new Gr(n).toPromise()}const Um=800,Bm=3;class au{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Bm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Mm()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Nm(),!this.activeServiceWorker)return;this.sender=new Dm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Vm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fo();return await cl(t,Fi,"1"),await ul(t,Fi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Fm(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ul(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=as(i,!1).getAll();return new Gr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Um)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}au.type="LOCAL";const $m=au;new Wr(3e4,6e4);/**
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
 */function jm(e,t){return t?Ve(t):(F(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Qo extends Jc{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Hm(e){return Im(e.auth,new Qo(e),e.bypassAuthState)}function Wm(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),wm(n,new Qo(e),e.bypassAuthState)}async function qm(e){const{auth:t,user:n}=e;return F(n,t,"internal-error"),Em(n,new Qo(e),e.bypassAuthState)}/**
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
 */class lu{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Hm;case"linkViaPopup":case"linkViaRedirect":return qm;case"reauthViaPopup":case"reauthViaRedirect":return Wm;default:xe(this.auth,"internal-error")}}resolve(t){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zm=new Wr(2e3,1e4);class Ln extends lu{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return F(t,this.auth,"internal-error"),t}async onExecution(){Fe(this.filter.length===1,"Popup operations only handle one event");const t=Ko();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,zm.get())};t()}}Ln.currentPopupAction=null;/**
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
 */const Gm="pendingRedirect",Ai=new Map;class Km extends lu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ai.get(this.auth._key());if(!t){try{const r=await Qm(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ai.set(this.auth._key(),t)}return this.bypassAuthState||Ai.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qm(e,t){const n=Ym(t),r=Jm(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Xm(e,t){Ai.set(e._key(),t)}function Jm(e){return Ve(e._redirectPersistence)}function Ym(e){return Ti(Gm,e.config.apiKey,e.name)}async function Zm(e,t,n=!1){const r=ss(e),i=jm(r,t),o=await new Km(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const tg=10*60*1e3;class eg{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ng(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!cu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tg&&this.cachedEventUids.clear(),this.cachedEventUids.has(hl(t))}saveEventToCache(t){this.cachedEventUids.add(hl(t)),this.lastProcessedEventTime=Date.now()}}function hl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function cu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function ng(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cu(e);default:return!1}}/**
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
 */async function rg(e,t={}){return qr(e,"GET","/v1/projects",t)}/**
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
 */const ig=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sg=/^https?/;async function og(e){if(e.config.emulator)return;const{authorizedDomains:t}=await rg(e);for(const n of t)try{if(ag(n))return}catch{}xe(e,"unauthorized-domain")}function ag(e){const t=ho(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sg.test(n))return!1;if(ig.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lg=new Wr(3e4,6e4);function dl(){const e=Ce().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function cg(e){return new Promise((t,n)=>{var r,i,s;function o(){dl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dl(),n(Pe(e,"network-request-failed"))},timeout:lg.get()})}if(!((i=(r=Ce().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ce().gapi)===null||s===void 0)&&s.load)o();else{const a=hm("iframefcb");return Ce()[a]=()=>{gapi.load?o():n(Pe(e,"network-request-failed"))},um(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw bi=null,t})}let bi=null;function ug(e){return bi=bi||cg(e),bi}/**
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
 */const hg=new Wr(5e3,15e3),dg="__/auth/iframe",fg="emulator/auth/iframe",pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gg(e){const t=e.config;F(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Wo(t,fg):`https://${e.config.authDomain}/${dg}`,r={apiKey:t.apiKey,appName:e.name,v:Zn},i=mg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function _g(e){const t=await ug(e),n=Ce().gapi;return F(n,e,"internal-error"),t.open({where:document.body,url:gg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Pe(e,"network-request-failed"),a=Ce().setTimeout(()=>{s(o)},hg.get());function l(){Ce().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vg=500,Eg=600,wg="_blank",Ig="http://localhost";class fl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tg(e,t,n,r=vg,i=Eg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},yg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Yt().toLowerCase();n&&(a=Hc(c)?wg:n),jc(c)&&(t=t||Ig,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(em(c)&&a!=="_self")return Ag(t||"",a),new fl(null);const h=window.open(t||"",a,u);F(h,e,"popup-blocked");try{h.focus()}catch{}return new fl(h)}function Ag(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const bg="__/auth/handler",Sg="emulator/auth/handler",Pg=encodeURIComponent("fac");async function pl(e,t,n,r,i,s){F(e.config.authDomain,e,"auth-domain-config-required"),F(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zn,eventId:i};if(t instanceof Yc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",bf(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof zr){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${Pg}=${encodeURIComponent(l)}`:"";return`${Cg(e)}?${Hr(a).slice(1)}${c}`}function Cg({config:e}){return e.emulator?Wo(e,Sg):`https://${e.authDomain}/${bg}`}/**
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
 */const Hs="webStorageSupport";class Rg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ru,this._completeRedirectFn=Zm,this._overrideRedirectResult=Xm}async _openPopup(t,n,r,i){var s;Fe((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await pl(t,n,r,ho(),i);return Tg(t,o,Ko())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await pl(t,n,r,ho(),i);return Om(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await _g(t),r=new eg(t);return n.register("authEvent",i=>(F(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Hs,{type:Hs},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[Hs];o!==void 0&&n(!!o),xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=og(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kc()||Go()||is()}}const kg=Rg;var ml="@firebase/auth",gl="1.2.0";/**
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
 */class Dg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Og(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ng(e){qn(new Tn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qc(e)},c=new lm(r,i,s,l);return fm(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),qn(new Tn("auth-internal",t=>{const n=ss(t.getProvider("auth").getImmediate());return(r=>new Dg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(ml,gl,Og(e)),tn(ml,gl,"esm2017")}/**
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
 */const Vg=5*60,Mg=Pc("authIdTokenMaxAge")||Vg;let _l=null;const Lg=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mg)return;const i=n?.token;_l!==i&&(_l=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xg(e=Dc()){const t=$o(e,"auth");if(t.isInitialized())return t.getImmediate();const n=dm(e,{popupRedirectResolver:kg,persistence:[$m,Rm,ru]}),r=Pc("authTokenSyncURL");if(r){const s=Lg(r);Am(n,s,()=>s(n.currentUser)),Tm(n,o=>s(o))}const i=bc("auth");return i&&pm(n,`http://${i}`),n}Ng("Browser");var Fg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Xo=Xo||{},L=Fg||self;function ls(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Kr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ug(e){return Object.prototype.hasOwnProperty.call(e,Ws)&&e[Ws]||(e[Ws]=++Bg)}var Ws="closure_uid_"+(1e9*Math.random()>>>0),Bg=0;function $g(e,t,n){return e.call.apply(e.bind,arguments)}function jg(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Xt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xt=$g:Xt=jg,Xt.apply(null,arguments)}function di(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function xt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function cn(){this.s=this.s,this.o=this.o}var Hg=0;cn.prototype.s=!1;cn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Hg!=0)&&Ug(this)};cn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Jo(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function yl(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ls(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Jt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Jt.prototype.h=function(){this.defaultPrevented=!0};var Wg=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{L.addEventListener("test",()=>{},t),L.removeEventListener("test",()=>{},t)}catch{}return e}();function Sr(e){return/^[\s\xa0]*$/.test(e)}function cs(){var e=L.navigator;return e&&(e=e.userAgent)?e:""}function Te(e){return cs().indexOf(e)!=-1}function Yo(e){return Yo[" "](e),e}Yo[" "]=function(){};function qg(e,t){var n=x_;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var zg=Te("Opera"),zn=Te("Trident")||Te("MSIE"),hu=Te("Edge"),po=hu||zn,du=Te("Gecko")&&!(cs().toLowerCase().indexOf("webkit")!=-1&&!Te("Edge"))&&!(Te("Trident")||Te("MSIE"))&&!Te("Edge"),Gg=cs().toLowerCase().indexOf("webkit")!=-1&&!Te("Edge");function fu(){var e=L.document;return e?e.documentMode:void 0}var mo;t:{var qs="",zs=function(){var e=cs();if(du)return/rv:([^\);]+)(\)|;)/.exec(e);if(hu)return/Edge\/([\d\.]+)/.exec(e);if(zn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Gg)return/WebKit\/(\S+)/.exec(e);if(zg)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zs&&(qs=zs?zs[1]:""),zn){var Gs=fu();if(Gs!=null&&Gs>parseFloat(qs)){mo=String(Gs);break t}}mo=qs}var go;if(L.document&&zn){var vl=fu();go=vl||parseInt(mo,10)||void 0}else go=void 0;var Kg=go;function Pr(e,t){if(Jt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(du){t:{try{Yo(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Qg[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Pr.$.h.call(this)}}xt(Pr,Jt);var Qg={2:"touch",3:"pen",4:"mouse"};Pr.prototype.h=function(){Pr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Qr="closure_listenable_"+(1e6*Math.random()|0),Xg=0;function Jg(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Xg,this.fa=this.ia=!1}function us(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Zo(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Yg(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function pu(e){const t={};for(const n in e)t[n]=e[n];return t}const El="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mu(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<El.length;s++)n=El[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function hs(e){this.src=e,this.g={},this.h=0}hs.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=yo(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Jg(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function _o(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=uu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(us(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function yo(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ta="closure_lm_"+(1e6*Math.random()|0),Ks={};function gu(e,t,n,r,i){if(r&&r.once)return yu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)gu(e,t[s],n,r,i);return null}return n=ra(n),e&&e[Qr]?e.O(t,n,Kr(r)?!!r.capture:!!r,i):_u(e,t,n,!1,r,i)}function _u(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Kr(i)?!!i.capture:!!i,a=na(e);if(a||(e[ta]=a=new hs(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Zg(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Wg||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Eu(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Zg(){function e(n){return t.call(e.src,e.listener,n)}const t=t_;return e}function yu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)yu(e,t[s],n,r,i);return null}return n=ra(n),e&&e[Qr]?e.P(t,n,Kr(r)?!!r.capture:!!r,i):_u(e,t,n,!0,r,i)}function vu(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)vu(e,t[s],n,r,i);else r=Kr(r)?!!r.capture:!!r,n=ra(n),e&&e[Qr]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=yo(s,n,r,i),-1<n&&(us(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=na(e))&&(t=e.g[t.toString()],e=-1,t&&(e=yo(t,n,r,i)),(n=-1<e?t[e]:null)&&ea(n))}function ea(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Qr])_o(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Eu(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=na(t))?(_o(n,e),n.h==0&&(n.src=null,t[ta]=null)):us(e)}}}function Eu(e){return e in Ks?Ks[e]:Ks[e]="on"+e}function t_(e,t){if(e.fa)e=!0;else{t=new Pr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ea(e),e=n.call(r,t)}return e}function na(e){return e=e[ta],e instanceof hs?e:null}var Qs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ra(e){return typeof e=="function"?e:(e[Qs]||(e[Qs]=function(t){return e.handleEvent(t)}),e[Qs])}function Mt(){cn.call(this),this.i=new hs(this),this.S=this,this.J=null}xt(Mt,cn);Mt.prototype[Qr]=!0;Mt.prototype.removeEventListener=function(e,t,n,r){vu(this,e,t,n,r)};function Wt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Jt(t,e);else if(t instanceof Jt)t.target=t.target||e;else{var i=t;t=new Jt(r,e),mu(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=fi(o,r,!0,t)&&i}if(o=t.g=e,i=fi(o,r,!0,t)&&i,i=fi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=fi(o,r,!1,t)&&i}Mt.prototype.N=function(){if(Mt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)us(n[r]);delete e.g[t],e.h--}}this.J=null};Mt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Mt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function fi(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&_o(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ia=L.JSON.stringify;class e_{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function n_(){var e=sa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class r_{constructor(){this.h=this.g=null}add(t,n){const r=wu.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wu=new e_(()=>new i_,e=>e.reset());class i_{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function s_(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function o_(e){L.setTimeout(()=>{throw e},0)}let Cr,Rr=!1,sa=new r_,Iu=()=>{const e=L.Promise.resolve(void 0);Cr=()=>{e.then(a_)}};var a_=()=>{for(var e;e=n_();){try{e.h.call(e.g)}catch(n){o_(n)}var t=wu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Rr=!1};function ds(e,t){Mt.call(this),this.h=e||1,this.g=t||L,this.j=Xt(this.qb,this),this.l=Date.now()}xt(ds,Mt);v=ds.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Wt(this,"tick"),this.ga&&(oa(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oa(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}v.N=function(){ds.$.N.call(this),oa(this),delete this.g};function aa(e,t,n){if(typeof e=="function")n&&(e=Xt(e,n));else if(e&&typeof e.handleEvent=="function")e=Xt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:L.setTimeout(e,t||0)}function Tu(e){e.g=aa(()=>{e.g=null,e.i&&(e.i=!1,Tu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class l_ extends cn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Tu(this)}N(){super.N(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kr(e){cn.call(this),this.h=e,this.g={}}xt(kr,cn);var wl=[];function Au(e,t,n,r){Array.isArray(n)||(n&&(wl[0]=n.toString()),n=wl);for(var i=0;i<n.length;i++){var s=gu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function bu(e){Zo(e.g,function(t,n){this.g.hasOwnProperty(n)&&ea(t)},e),e.g={}}kr.prototype.N=function(){kr.$.N.call(this),bu(this)};kr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fs(){this.g=!0}fs.prototype.Ea=function(){this.g=!1};function c_(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function u_(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function xn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+d_(e,n)+(r?" "+r:"")})}function h_(e,t){e.info(function(){return"TIMEOUT: "+t})}fs.prototype.info=function(){};function d_(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ia(n)}catch{return t}}var Rn={},Il=null;function ps(){return Il=Il||new Mt}Rn.Ta="serverreachability";function Su(e){Jt.call(this,Rn.Ta,e)}xt(Su,Jt);function Dr(e){const t=ps();Wt(t,new Su(t))}Rn.STAT_EVENT="statevent";function Pu(e,t){Jt.call(this,Rn.STAT_EVENT,e),this.stat=t}xt(Pu,Jt);function te(e){const t=ps();Wt(t,new Pu(t,e))}Rn.Ua="timingevent";function Cu(e,t){Jt.call(this,Rn.Ua,e),this.size=t}xt(Cu,Jt);function Xr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){e()},t)}var ms={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ru={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function la(){}la.prototype.h=null;function Tl(e){return e.h||(e.h=e.i())}function ku(){}var Jr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ca(){Jt.call(this,"d")}xt(ca,Jt);function ua(){Jt.call(this,"c")}xt(ua,Jt);var vo;function gs(){}xt(gs,la);gs.prototype.g=function(){return new XMLHttpRequest};gs.prototype.i=function(){return{}};vo=new gs;function Yr(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new kr(this),this.P=f_,e=po?125:void 0,this.V=new ds(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Du}function Du(){this.i=null,this.g="",this.h=!1}var f_=45e3,Eo={},Bi={};v=Yr.prototype;v.setTimeout=function(e){this.P=e};function wo(e,t,n){e.L=1,e.v=ys(Ue(t)),e.s=n,e.S=!0,Ou(e,null)}function Ou(e,t){e.G=Date.now(),Zr(e),e.A=Ue(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Bu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Du,e.g=ah(e.l,n?t:null,!e.s),0<e.O&&(e.M=new l_(Xt(e.Pa,e,e.g),e.O)),Au(e.U,e.g,"readystatechange",e.nb),t=e.I?pu(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Dr(),c_(e.j,e.u,e.A,e.m,e.W,e.s)}v.nb=function(e){e=e.target;const t=this.M;t&&Ae(e)==3?t.l():this.Pa(e)};v.Pa=function(e){try{if(e==this.g)t:{const u=Ae(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||po||this.g&&(this.h.h||this.g.ja()||Pl(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Dr(3):Dr(2)),_s(this);var n=this.g.da();this.ca=n;e:if(Nu(this)){var r=Pl(this.g);e="";var i=r.length,s=Ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){gn(this),gr(this);var o="";break e}this.h.i=new L.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,u_(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Sr(a)){var c=a;break e}}c=null}if(n=c)xn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Io(this,n);else{this.i=!1,this.o=3,te(12),gn(this),gr(this);break t}}this.S?(Vu(this,u,o),po&&this.i&&u==3&&(Au(this.U,this.V,"tick",this.mb),this.V.start())):(xn(this.j,this.m,o,null),Io(this,o)),u==4&&gn(this),this.i&&!this.J&&(u==4?rh(this.l,this):(this.i=!1,Zr(this)))}else V_(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,te(12)):(this.o=0,te(13)),gn(this),gr(this)}}}catch{}finally{}};function Nu(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Vu(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=p_(e,n),i==Bi){t==4&&(e.o=4,te(14),r=!1),xn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Eo){e.o=4,te(15),xn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else xn(e.j,e.m,i,null),Io(e,i);Nu(e)&&i!=Bi&&i!=Eo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,te(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ga(t),t.M=!0,te(11))):(xn(e.j,e.m,n,"[Invalid Chunked Response]"),gn(e),gr(e))}v.mb=function(){if(this.g){var e=Ae(this.g),t=this.g.ja();this.C<t.length&&(_s(this),Vu(this,e,t),this.i&&e!=4&&Zr(this))}};function p_(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Bi:(n=Number(t.substring(n,r)),isNaN(n)?Eo:(r+=1,r+n>t.length?Bi:(t=t.slice(r,r+n),e.C=r+n,t)))}v.cancel=function(){this.J=!0,gn(this)};function Zr(e){e.Y=Date.now()+e.P,Mu(e,e.P)}function Mu(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xr(Xt(e.lb,e),t)}function _s(e){e.B&&(L.clearTimeout(e.B),e.B=null)}v.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(h_(this.j,this.A),this.L!=2&&(Dr(),te(17)),gn(this),this.o=2,gr(this)):Mu(this,this.Y-e)};function gr(e){e.l.H==0||e.J||rh(e.l,e)}function gn(e){_s(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,oa(e.V),bu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Io(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||To(n.i,e))){if(!e.K&&To(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Hi(n),ws(n);else break t;ma(n),te(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xr(Xt(n.ib,n),6e3));if(1>=Hu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else _n(n,11)}else if((e.K||n.g==e)&&Hi(n),!Sr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ha(s,s.h),s.h=null))}if(r.F){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,ft(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=oh(r,r.J?r.pa:null,r.Y),o.K){Wu(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(_s(a),Zr(a)),r.g=o}else eh(r);0<n.j.length&&Is(n)}else c[0]!="stop"&&c[0]!="close"||_n(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?_n(n,7):pa(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Dr(4)}catch{}}function m_(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ls(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function g_(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ls(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lu(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ls(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=g_(e),r=m_(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function __(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function En(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof En){this.h=e.h,$i(this,e.j),this.s=e.s,this.g=e.g,ji(this,e.m),this.l=e.l;var t=e.i,n=new Or;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Al(this,n),this.o=e.o}else e&&(t=String(e).match(xu))?(this.h=!1,$i(this,t[1]||"",!0),this.s=fr(t[2]||""),this.g=fr(t[3]||"",!0),ji(this,t[4]),this.l=fr(t[5]||"",!0),Al(this,t[6]||"",!0),this.o=fr(t[7]||"")):(this.h=!1,this.i=new Or(null,this.h))}En.prototype.toString=function(){var e=[],t=this.j;t&&e.push(pr(t,bl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(pr(t,bl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(pr(n,n.charAt(0)=="/"?E_:v_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",pr(n,I_)),e.join("")};function Ue(e){return new En(e)}function $i(e,t,n){e.j=n?fr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ji(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Al(e,t,n){t instanceof Or?(e.i=t,T_(e.i,e.h)):(n||(t=pr(t,w_)),e.i=new Or(t,e.h))}function ft(e,t,n){e.i.set(t,n)}function ys(e){return ft(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function fr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function pr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,y_),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function y_(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var bl=/[#\/\?@]/g,v_=/[#\?:]/g,E_=/[#\?]/g,w_=/[#\?@]/g,I_=/#/g;function Or(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function un(e){e.g||(e.g=new Map,e.h=0,e.i&&__(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=Or.prototype;v.add=function(e,t){un(this),this.i=null,e=tr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Fu(e,t){un(e),t=tr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Uu(e,t){return un(e),t=tr(e,t),e.g.has(t)}v.forEach=function(e,t){un(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};v.ta=function(){un(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};v.Z=function(e){un(this);let t=[];if(typeof e=="string")Uu(this,e)&&(t=t.concat(this.g.get(tr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};v.set=function(e,t){return un(this),this.i=null,e=tr(this,e),Uu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Bu(e,t,n){Fu(e,t),0<n.length&&(e.i=null,e.g.set(tr(e,t),Jo(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function tr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function T_(e,t){t&&!e.j&&(un(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Fu(this,r),Bu(this,i,n))},e)),e.j=t}var A_=class{constructor(e,t){this.g=e,this.map=t}};function $u(e){this.l=e||b_,L.PerformanceNavigationTiming?(e=L.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(L.g&&L.g.Ka&&L.g.Ka()&&L.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var b_=10;function ju(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Hu(e){return e.h?1:e.g?e.g.size:0}function To(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ha(e,t){e.g?e.g.add(t):e.h=t}function Wu(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}$u.prototype.cancel=function(){if(this.i=qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function qu(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Jo(e.i)}var S_=class{stringify(e){return L.JSON.stringify(e,void 0)}parse(e){return L.JSON.parse(e,void 0)}};function P_(){this.g=new S_}function C_(e,t,n){const r=n||"";try{Lu(e,function(i,s){let o=i;Kr(i)&&(o=ia(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function R_(e,t){const n=new fs;if(L.Image){const r=new Image;r.onload=di(pi,n,r,"TestLoadImage: loaded",!0,t),r.onerror=di(pi,n,r,"TestLoadImage: error",!1,t),r.onabort=di(pi,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=di(pi,n,r,"TestLoadImage: timeout",!1,t),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function pi(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function ti(e){this.l=e.fc||null,this.j=e.ob||!1}xt(ti,la);ti.prototype.g=function(){return new vs(this.l,this.j)};ti.prototype.i=function(e){return function(){return e}}({});function vs(e,t){Mt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=da,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(vs,Mt);var da=0;v=vs.prototype;v.open=function(e,t){if(this.readyState!=da)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Nr(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||L).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ei(this)),this.readyState=da};v.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function zu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}v.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ei(this):Nr(this),this.readyState==3&&zu(this)}};v.Za=function(e){this.g&&(this.response=this.responseText=e,ei(this))};v.Ya=function(e){this.g&&(this.response=e,ei(this))};v.ka=function(){this.g&&ei(this)};function ei(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Nr(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Nr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var k_=L.JSON.parse;function Et(e){Mt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gu,this.L=this.M=!1}xt(Et,Mt);var Gu="",D_=/^https?$/i,O_=["POST","PUT"];v=Et.prototype;v.Oa=function(e){this.M=e};v.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():vo.g(),this.C=this.u?Tl(this.u):Tl(vo),this.g.onreadystatechange=Xt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Sl(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&e instanceof L.FormData,!(0<=uu(O_,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Xu(this),0<this.B&&((this.L=N_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xt(this.ua,this)):this.A=aa(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Sl(this,s)}};function N_(e){return zn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.ua=function(){typeof Xo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Wt(this,"timeout"),this.abort(8))};function Sl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ku(e),Es(e)}function Ku(e){e.F||(e.F=!0,Wt(e,"complete"),Wt(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Wt(this,"complete"),Wt(this,"abort"),Es(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Es(this,!0)),Et.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Qu(this):this.kb())};v.kb=function(){Qu(this)};function Qu(e){if(e.h&&typeof Xo<"u"&&(!e.C[1]||Ae(e)!=4||e.da()!=2)){if(e.v&&Ae(e)==4)aa(e.La,0,e);else if(Wt(e,"readystatechange"),Ae(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(xu)[1]||null;!i&&L.self&&L.self.location&&(i=L.self.location.protocol.slice(0,-1)),r=!D_.test(i?i.toLowerCase():"")}n=r}if(n)Wt(e,"complete"),Wt(e,"success");else{e.m=6;try{var s=2<Ae(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ku(e)}}finally{Es(e)}}}}function Es(e,t){if(e.g){Xu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Wt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Xu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(L.clearTimeout(e.A),e.A=null)}v.isActive=function(){return!!this.g};function Ae(e){return e.g?e.g.readyState:0}v.da=function(){try{return 2<Ae(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),k_(t)}};function Pl(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Gu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function V_(e){const t={};e=(e.g&&2<=Ae(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Sr(e[r]))continue;var n=s_(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Yg(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ju(e){let t="";return Zo(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function fa(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ju(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):ft(e,t,n))}function or(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Yu(e){this.Ga=0,this.j=[],this.l=new fs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=or("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=or("baseRetryDelayMs",5e3,e),this.hb=or("retryDelaySeedMs",1e4,e),this.eb=or("forwardChannelMaxRetries",2,e),this.xa=or("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new $u(e&&e.concurrentRequestLimit),this.Ja=new P_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Yu.prototype;v.ra=8;v.H=1;function pa(e){if(Zu(e),e.H==3){var t=e.W++,n=Ue(e.I);if(ft(n,"SID",e.K),ft(n,"RID",t),ft(n,"TYPE","terminate"),ni(e,n),t=new Yr(e,e.l,t),t.L=2,t.v=ys(Ue(n)),n=!1,L.navigator&&L.navigator.sendBeacon)try{n=L.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&L.Image&&(new Image().src=t.v,n=!0),n||(t.g=ah(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Zr(t)}sh(e)}function ws(e){e.g&&(ga(e),e.g.cancel(),e.g=null)}function Zu(e){ws(e),e.u&&(L.clearTimeout(e.u),e.u=null),Hi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&L.clearTimeout(e.m),e.m=null)}function Is(e){if(!ju(e.i)&&!e.m){e.m=!0;var t=e.Na;Cr||Iu(),Rr||(Cr(),Rr=!0),sa.add(t,e),e.C=0}}function M_(e,t){return Hu(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Xr(Xt(e.Na,e,t),ih(e,e.C)),e.C++,!0)}v.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Yr(this,this.l,e);let s=this.s;if(this.U&&(s?(s=pu(s),mu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=th(this,i,t),n=Ue(this.I),ft(n,"RID",e),ft(n,"CVER",22),this.F&&ft(n,"X-HTTP-Session-Id",this.F),ni(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ju(s)))+"&"+t:this.o&&fa(n,this.o,s)),ha(this.i,i),this.bb&&ft(n,"TYPE","init"),this.P?(ft(n,"$req",t),ft(n,"SID","null"),i.aa=!0,wo(i,n,null)):wo(i,n,t),this.H=2}}else this.H==3&&(e?Cl(this,e):this.j.length==0||ju(this.i)||Cl(this))};function Cl(e,t){var n;t?n=t.m:n=e.W++;const r=Ue(e.I);ft(r,"SID",e.K),ft(r,"RID",n),ft(r,"AID",e.V),ni(e,r),e.o&&e.s&&fa(r,e.o,e.s),n=new Yr(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=th(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ha(e.i,n),wo(n,r,t)}function ni(e,t){e.na&&Zo(e.na,function(n,r){ft(t,r,n)}),e.h&&Lu({},function(n,r){ft(t,r,n)})}function th(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Xt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{C_(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function eh(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Cr||Iu(),Rr||(Cr(),Rr=!0),sa.add(t,e),e.A=0}}function ma(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Xr(Xt(e.Ma,e),ih(e,e.A)),e.A++,!0)}v.Ma=function(){if(this.u=null,nh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Xr(Xt(this.jb,this),e)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,te(10),ws(this),nh(this))};function ga(e){e.B!=null&&(L.clearTimeout(e.B),e.B=null)}function nh(e){e.g=new Yr(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ue(e.wa);ft(t,"RID","rpc"),ft(t,"SID",e.K),ft(t,"AID",e.V),ft(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ft(t,"TO",e.qa),ft(t,"TYPE","xmlhttp"),ni(e,t),e.o&&e.s&&fa(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ys(Ue(t)),n.s=null,n.S=!0,Ou(n,e)}v.ib=function(){this.v!=null&&(this.v=null,ws(this),ma(this),te(19))};function Hi(e){e.v!=null&&(L.clearTimeout(e.v),e.v=null)}function rh(e,t){var n=null;if(e.g==t){Hi(e),ga(e),e.g=null;var r=2}else if(To(e.i,t))n=t.F,Wu(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=ps(),Wt(r,new Cu(r,n)),Is(e)}else eh(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&M_(e,t)||r==2&&ma(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:_n(e,5);break;case 4:_n(e,10);break;case 3:_n(e,6);break;default:_n(e,2)}}}function ih(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function _n(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Xt(e.pb,e);n||(n=new En("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||$i(n,"https"),ys(n)),R_(n.toString(),r)}else te(2);e.H=0,e.h&&e.h.za(t),sh(e),Zu(e)}v.pb=function(e){e?(this.l.info("Successfully pinged google.com"),te(2)):(this.l.info("Failed to ping google.com"),te(1))};function sh(e){if(e.H=0,e.ma=[],e.h){const t=qu(e.i);(t.length!=0||e.j.length!=0)&&(yl(e.ma,t),yl(e.ma,e.j),e.i.i.length=0,Jo(e.j),e.j.length=0),e.h.ya()}}function oh(e,t,n){var r=n instanceof En?Ue(n):new En(n);if(r.g!="")t&&(r.g=t+"."+r.g),ji(r,r.m);else{var i=L.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new En(null);r&&$i(s,r),t&&(s.g=t),i&&ji(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&ft(r,n,t),ft(r,"VER",e.ra),ni(e,r),r}function ah(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new Et(new ti({ob:!0})):new Et(e.va),t.Oa(e.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function lh(){}v=lh.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Wi(){if(zn&&!(10<=Number(Kg)))throw Error("Environmental error: no available transport.")}Wi.prototype.g=function(e,t){return new he(e,t)};function he(e,t){Mt.call(this),this.g=new Yu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Sr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Sr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new er(this)}xt(he,Mt);he.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;te(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=oh(e,null,e.Y),Is(e)};he.prototype.close=function(){pa(this.g)};he.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ia(e),e=n);t.j.push(new A_(t.fb++,e)),t.H==3&&Is(t)};he.prototype.N=function(){this.g.h=null,delete this.j,pa(this.g),delete this.g,he.$.N.call(this)};function ch(e){ca.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}xt(ch,ca);function uh(){ua.call(this),this.status=1}xt(uh,ua);function er(e){this.g=e}xt(er,lh);er.prototype.Ba=function(){Wt(this.g,"a")};er.prototype.Aa=function(e){Wt(this.g,new ch(e))};er.prototype.za=function(e){Wt(this.g,new uh)};er.prototype.ya=function(){Wt(this.g,"b")};function L_(){this.blockSize=-1}function Re(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xt(Re,L_);Re.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Xs(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Re.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Xs(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Xs(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Xs(this,r),i=0;break}}this.h=i,this.i+=t};Re.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function it(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var x_={};function _a(e){return-128<=e&&128>e?qg(e,function(t){return new it([t|0],0>t?-1:0)}):new it([e|0],0>e?-1:0)}function be(e){if(isNaN(e)||!isFinite(e))return jn;if(0>e)return Ht(be(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ao;return new it(t,0)}function hh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ht(hh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=be(Math.pow(t,8)),r=jn,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=be(Math.pow(t,s)),r=r.R(s).add(be(o))):(r=r.R(n),r=r.add(be(o)))}return r}var Ao=4294967296,jn=_a(0),bo=_a(1),Rl=_a(16777216);v=it.prototype;v.ea=function(){if(pe(this))return-Ht(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ao+r)*t,t*=Ao}return e};v.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Me(this))return"0";if(pe(this))return"-"+Ht(this).toString(e);for(var t=be(Math.pow(e,6)),n=this,r="";;){var i=zi(n,t).g;n=qi(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Me(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Me(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function pe(e){return e.h==-1}v.X=function(e){return e=qi(this,e),pe(e)?-1:Me(e)?0:1};function Ht(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new it(n,~e.h).add(bo)}v.abs=function(){return pe(this)?Ht(this):this};v.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new it(n,n[n.length-1]&-2147483648?-1:0)};function qi(e,t){return e.add(Ht(t))}v.R=function(e){if(Me(this)||Me(e))return jn;if(pe(this))return pe(e)?Ht(this).R(Ht(e)):Ht(Ht(this).R(e));if(pe(e))return Ht(this.R(Ht(e)));if(0>this.X(Rl)&&0>e.X(Rl))return be(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,mi(n,2*r+2*i),n[2*r+2*i+1]+=s*l,mi(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,mi(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,mi(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new it(n,0)};function mi(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function ar(e,t){this.g=e,this.h=t}function zi(e,t){if(Me(t))throw Error("division by zero");if(Me(e))return new ar(jn,jn);if(pe(e))return t=zi(Ht(e),t),new ar(Ht(t.g),Ht(t.h));if(pe(t))return t=zi(e,Ht(t)),new ar(Ht(t.g),t.h);if(30<e.g.length){if(pe(e)||pe(t))throw Error("slowDivide_ only works with positive integers.");for(var n=bo,r=t;0>=r.X(e);)n=kl(n),r=kl(r);var i=Dn(n,1),s=Dn(r,1);for(r=Dn(r,2),n=Dn(n,2);!Me(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Dn(r,1),n=Dn(n,1)}return t=qi(e,i.R(t)),new ar(i,t)}for(i=jn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=be(n),o=s.R(t);pe(o)||0<o.X(e);)n-=r,s=be(n),o=s.R(t);Me(s)&&(s=bo),i=i.add(s),e=qi(e,o)}return new ar(i,e)}v.gb=function(e){return zi(this,e).h};v.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new it(n,this.h&e.h)};v.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new it(n,this.h|e.h)};v.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new it(n,this.h^e.h)};function kl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new it(n,e.h)}function Dn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new it(i,e.h)}Wi.prototype.createWebChannel=Wi.prototype.g;he.prototype.send=he.prototype.u;he.prototype.open=he.prototype.m;he.prototype.close=he.prototype.close;ms.NO_ERROR=0;ms.TIMEOUT=8;ms.HTTP_ERROR=6;Ru.COMPLETE="complete";ku.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";Mt.prototype.listen=Mt.prototype.O;Et.prototype.listenOnce=Et.prototype.P;Et.prototype.getLastError=Et.prototype.Sa;Et.prototype.getLastErrorCode=Et.prototype.Ia;Et.prototype.getStatus=Et.prototype.da;Et.prototype.getResponseJson=Et.prototype.Wa;Et.prototype.getResponseText=Et.prototype.ja;Et.prototype.send=Et.prototype.ha;Et.prototype.setWithCredentials=Et.prototype.Oa;Re.prototype.digest=Re.prototype.l;Re.prototype.reset=Re.prototype.reset;Re.prototype.update=Re.prototype.j;it.prototype.add=it.prototype.add;it.prototype.multiply=it.prototype.R;it.prototype.modulo=it.prototype.gb;it.prototype.compare=it.prototype.X;it.prototype.toNumber=it.prototype.ea;it.prototype.toString=it.prototype.toString;it.prototype.getBits=it.prototype.D;it.fromNumber=be;it.fromString=hh;var F_=function(){return new Wi},U_=function(){return ps()},Js=ms,B_=Ru,$_=Rn,Dl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},j_=ti,gi=ku,H_=Et,W_=it;const Ol="@firebase/firestore";/**
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
 */let nr="10.2.0";/**
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
 */const Sn=new Uo("@firebase/firestore");function Nl(){return Sn.logLevel}function D(e,...t){if(Sn.logLevel<=et.DEBUG){const n=t.map(ya);Sn.debug(`Firestore (${nr}): ${e}`,...n)}}function Pn(e,...t){if(Sn.logLevel<=et.ERROR){const n=t.map(ya);Sn.error(`Firestore (${nr}): ${e}`,...n)}}function Gi(e,...t){if(Sn.logLevel<=et.WARN){const n=t.map(ya);Sn.warn(`Firestore (${nr}): ${e}`,...n)}}function ya(e){if(typeof e=="string")return e;try{/**
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
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${nr}) INTERNAL ASSERTION FAILED: `+e;throw Pn(t),new Error(t)}function Lt(e,t){e||Q()}function pt(e,t){return e}/**
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
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends $e{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class q_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Gt.UNAUTHENTICATED))}shutdown(){}}class z_{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class G_{constructor(t){this.t=t,this.currentUser=Gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Lt(typeof r.accessToken=="string"),new dh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Lt(t===null||typeof t=="string"),new Gt(t)}}class K_{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Q_{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new K_(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class X_{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class J_{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Lt(typeof n.token=="string"),this.R=n.token,new X_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Y_(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fh{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Y_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function dt(e,t){return e<t?-1:e>t?1:0}function Gn(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Vt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new O(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new O(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vt.fromMillis(Date.now())}static fromDate(t){return Vt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dt(this.nanoseconds,t.nanoseconds):dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Vr{constructor(t,n,r){n===void 0?n=0:n>t.length&&Q(),r===void 0?r=t.length-n:r>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Vr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Vr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class vt extends Vr{construct(t,n,r){return new vt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new vt(n)}static emptyPath(){return new vt([])}}const Z_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Vr{construct(t,n,r){return new Qt(t,n,r)}static isValidIdentifier(t){return Z_.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new O(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class W{constructor(t){this.path=t}static fromPath(t){return new W(vt.fromString(t))}static fromName(t){return new W(vt.fromString(t).popFirst(5))}static empty(){return new W(vt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&vt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return vt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new W(new vt(t.slice()))}}function ty(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=_t.fromTimestamp(r===1e9?new Vt(n+1,0):new Vt(n,r));return new on(i,W.empty(),t)}function ey(e){return new on(e.readTime,e.key,-1)}class on{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new on(_t.min(),W.empty(),-1)}static max(){return new on(_t.max(),W.empty(),-1)}}function ny(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=W.comparator(e.documentKey,t.documentKey),n!==0?n:dt(e.largestBatchId,t.largestBatchId))}/**
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
 */const ry="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ph(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==ry)throw e;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):_.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):_.reject(n)}static resolve(t){return new _((n,r)=>{n(t)})}static reject(t){return new _((n,r)=>{r(t)})}static waitFor(t){return new _((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=_.resolve(!1);for(const r of t)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new _((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new _((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Ts(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class mh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}mh.ae=-1;function va(e){return e==null}function Ki(e){return e===0&&1/e==-1/0}function sy(e){return typeof e=="number"&&Number.isInteger(e)&&!Ki(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Vl(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class se{constructor(t,n){this.comparator=t,this.root=n||Bt.EMPTY}insert(t,n){return new se(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(t){return new se(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new _i(this.root,t,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new _i(this.root,t,this.comparator,!0)}}class _i{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Bt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=s??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Bt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Bt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ee{constructor(t){this.comparator=t,this.data=new se(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ml(this.data.getIterator())}getIteratorFrom(t){return new Ml(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ee)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ee(this.comparator);return n.data=t,n}}class Ml{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ue{constructor(t){this.fields=t,t.sort(Qt.comparator)}static empty(){return new ue([])}unionWith(t){let n=new ee(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ue(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Gn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class oy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new oy("Invalid base64 string: "+s):s}}(t);return new Be(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Be(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const ay=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cn(e){if(Lt(!!e),typeof e=="string"){let t=0;const n=ay.exec(e);if(Lt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$t(e.seconds),nanos:$t(e.nanos)}}function $t(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Mr(e){return typeof e=="string"?Be.fromBase64String(e):Be.fromUint8Array(e)}/**
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
 */function Ea(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _h(e){const t=e.mapValue.fields.__previous_value__;return Ea(t)?_h(t):t}function Qi(e){const t=Cn(e.mapValue.fields.__local_write_time__.timestampValue);return new Vt(t.seconds,t.nanos)}/**
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
 */class ly{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Xi{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Xi&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ea(e)?4:cy(e)?9007199254740991:10:Q()}function ke(e,t){if(e===t)return!0;const n=Kn(e);if(n!==Kn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Qi(e).isEqual(Qi(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Cn(i.timestampValue),a=Cn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Mr(i.bytesValue).isEqual(Mr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return $t(i.geoPointValue.latitude)===$t(s.geoPointValue.latitude)&&$t(i.geoPointValue.longitude)===$t(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $t(i.integerValue)===$t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$t(i.doubleValue),a=$t(s.doubleValue);return o===a?Ki(o)===Ki(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Gn(e.arrayValue.values||[],t.arrayValue.values||[],ke);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Vl(o)!==Vl(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ke(o[l],a[l])))return!1;return!0}(e,t);default:return Q()}}function Lr(e,t){return(e.values||[]).find(n=>ke(n,t))!==void 0}function Qn(e,t){if(e===t)return 0;const n=Kn(e),r=Kn(t);if(n!==r)return dt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return dt(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=$t(s.integerValue||s.doubleValue),l=$t(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Ll(e.timestampValue,t.timestampValue);case 4:return Ll(Qi(e),Qi(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Mr(s),l=Mr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=dt(a[c],l[c]);if(u!==0)return u}return dt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=dt($t(s.latitude),$t(o.latitude));return a!==0?a:dt($t(s.longitude),$t(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Qn(a[c],l[c]);if(u)return u}return dt(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===yi.mapValue&&o===yi.mapValue)return 0;if(s===yi.mapValue)return 1;if(o===yi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=dt(l[h],u[h]);if(d!==0)return d;const f=Qn(a[l[h]],c[u[h]]);if(f!==0)return f}return dt(l.length,u.length)}(e.mapValue,t.mapValue);default:throw Q()}}function Ll(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return dt(e,t);const n=Cn(e),r=Cn(t),i=dt(n.seconds,r.seconds);return i!==0?i:dt(n.nanos,r.nanos)}function Xn(e){return So(e)}function So(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Cn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Mr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return W.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=So(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${So(n.fields[o])}`;return i+"}"}(e.mapValue):Q()}function Po(e){return!!e&&"integerValue"in e}function wa(e){return!!e&&"arrayValue"in e}function Si(e){return!!e&&"mapValue"in e}function _r(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return rr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=_r(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_r(e.arrayValue.values[n]);return t}return Object.assign({},e)}function cy(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ce{constructor(t){this.value=t}static empty(){return new ce({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Si(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=_r(n)}setAll(t){let n=Qt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_r(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Si(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ke(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){rr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ce(_r(this.value))}}function yh(e){const t=[];return rr(e.fields,(n,r)=>{const i=new Qt([n]);if(Si(r)){const s=yh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ue(t)}/**
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
 */class Ji{constructor(t,n){this.position=t,this.inclusive=n}}function xl(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Qn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fl(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ke(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class yr{constructor(t,n="asc"){this.field=t,this.dir=n}}function uy(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class vh{}class Nt extends vh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new dy(t,n,r):n==="array-contains"?new my(t,r):n==="in"?new gy(t,r):n==="not-in"?new _y(t,r):n==="array-contains-any"?new yy(t,r):new Nt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new fy(t,r):new py(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qn(n,this.value)):n!==null&&Kn(this.value)===Kn(n)&&this.matchesComparison(Qn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class an extends vh{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new an(t,n)}matches(t){return Eh(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Eh(e){return e.op==="and"}function wh(e){return hy(e)&&Eh(e)}function hy(e){for(const t of e.filters)if(t instanceof an)return!1;return!0}function Co(e){if(e instanceof Nt)return e.field.canonicalString()+e.op.toString()+Xn(e.value);if(wh(e))return e.filters.map(t=>Co(t)).join(",");{const t=e.filters.map(n=>Co(n)).join(",");return`${e.op}(${t})`}}function Ih(e,t){return e instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.field.isEqual(i.field)&&ke(r.value,i.value)}(e,t):e instanceof an?function(r,i){return i instanceof an&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ih(o,i.filters[a]),!0):!1}(e,t):void Q()}function Th(e){return e instanceof Nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Xn(n.value)}`}(e):e instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(Th).join(" ,")+"}"}(e):"Filter"}class dy extends Nt{constructor(t,n,r){super(t,n,r),this.key=W.fromName(r.referenceValue)}matches(t){const n=W.comparator(t.key,this.key);return this.matchesComparison(n)}}class fy extends Nt{constructor(t,n){super(t,"in",n),this.keys=Ah("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class py extends Nt{constructor(t,n){super(t,"not-in",n),this.keys=Ah("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Ah(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class my extends Nt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return wa(n)&&Lr(n.arrayValue,this.value)}}class gy extends Nt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Lr(this.value.arrayValue,n)}}class _y extends Nt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Lr(this.value.arrayValue,n)}}class yy extends Nt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!wa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lr(this.value.arrayValue,r))}}/**
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
 */class vy{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Ul(e,t=null,n=[],r=[],i=null,s=null,o=null){return new vy(e,t,n,r,i,s,o)}function Ia(e){const t=pt(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Co(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),va(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Xn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Xn(r)).join(",")),t.he=n}return t.he}function Ta(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!uy(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ih(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fl(e.startAt,t.startAt)&&Fl(e.endAt,t.endAt)}/**
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
 */class As{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Ey(e,t,n,r,i,s,o,a){return new As(e,t,n,r,i,s,o,a)}function wy(e){return new As(e)}function Bl(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Iy(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ty(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Ay(e){return e.collectionGroup!==null}function vr(e){const t=pt(e);if(t.Pe===null){t.Pe=[];const n=Ty(t),r=Iy(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new yr(n)),t.Pe.push(new yr(Qt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new yr(Qt.keyField(),s))}}}return t.Pe}function Jn(e){const t=pt(e);return t.Ie||(t.Ie=by(t,vr(e))),t.Ie}function by(e,t){if(e.limitType==="F")return Ul(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yr(i.field,s)});const n=e.endAt?new Ji(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ji(e.startAt.position,e.startAt.inclusive):null;return Ul(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ro(e,t,n){return new As(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bh(e,t){return Ta(Jn(e),Jn(t))&&e.limitType===t.limitType}function Sh(e){return`${Ia(Jn(e))}|lt:${e.limitType}`}function $l(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Th(i)).join(", ")}]`),va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xn(i)).join(",")),`Target(${r})`}(Jn(e))}; limitType=${e.limitType})`}function Aa(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of vr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=xl(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,vr(r),i)||r.endAt&&!function(o,a,l){const c=xl(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,vr(r),i))}(e,t)}function Sy(e){return(t,n)=>{let r=!1;for(const i of vr(e)){const s=Py(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Py(e,t,n){const r=e.field.isKeyField()?W.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Qn(l,c):Q()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
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
 */class ir{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return gh(this.inner)}size(){return this.innerSize}}/**
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
 */const Cy=new se(W.comparator);function Yi(){return Cy}const Ph=new se(W.comparator);function vi(...e){let t=Ph;for(const n of e)t=t.insert(n.key,n);return t}function Ch(e){let t=Ph;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function yn(){return Er()}function Rh(){return Er()}function Er(){return new ir(e=>e.toString(),(e,t)=>e.isEqual(t))}const Ry=new se(W.comparator),ky=new ee(W.comparator);function Kt(...e){let t=ky;for(const n of e)t=t.add(n);return t}const Dy=new ee(dt);function Oy(){return Dy}/**
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
 */function kh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ki(t)?"-0":t}}function Dh(e){return{integerValue:""+e}}function Ny(e,t){return sy(t)?Dh(t):kh(e,t)}/**
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
 */class bs{constructor(){this._=void 0}}function Vy(e,t,n){return e instanceof xr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ea(s)&&(s=_h(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Fr?Nh(e,t):e instanceof Ur?Vh(e,t):function(i,s){const o=Oh(i,s),a=jl(o)+jl(i.Ee);return Po(o)&&Po(i.Ee)?Dh(a):kh(i.serializer,a)}(e,t)}function My(e,t,n){return e instanceof Fr?Nh(e,t):e instanceof Ur?Vh(e,t):n}function Oh(e,t){return e instanceof Zi?function(r){return Po(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class xr extends bs{}class Fr extends bs{constructor(t){super(),this.elements=t}}function Nh(e,t){const n=Mh(t);for(const r of e.elements)n.some(i=>ke(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ur extends bs{constructor(t){super(),this.elements=t}}function Vh(e,t){let n=Mh(t);for(const r of e.elements)n=n.filter(i=>!ke(i,r));return{arrayValue:{values:n}}}class Zi extends bs{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function jl(e){return $t(e.integerValue||e.doubleValue)}function Mh(e){return wa(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class Ly{constructor(t,n){this.field=t,this.transform=n}}function xy(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Fr&&i instanceof Fr||r instanceof Ur&&i instanceof Ur?Gn(r.elements,i.elements,ke):r instanceof Zi&&i instanceof Zi?ke(r.Ee,i.Ee):r instanceof xr&&i instanceof xr}(e.transform,t.transform)}class Fy{constructor(t,n){this.version=t,this.transformResults=n}}class Ie{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ie}static exists(t){return new Ie(void 0,t)}static updateTime(t){return new Ie(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ss{}function Lh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new ba(e.key,Ie.none()):new ri(e.key,e.data,Ie.none());{const n=e.data,r=ce.empty();let i=new ee(Qt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hn(e.key,r,new ue(i.toArray()),Ie.none())}}function Uy(e,t,n){e instanceof ri?function(i,s,o){const a=i.value.clone(),l=Wl(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof hn?function(i,s,o){if(!Pi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Wl(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(xh(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function wr(e,t,n,r){return e instanceof ri?function(s,o,a,l){if(!Pi(s.precondition,o))return a;const c=s.value.clone(),u=ql(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof hn?function(s,o,a,l){if(!Pi(s.precondition,o))return a;const c=ql(s.fieldTransforms,l,o),u=o.data;return u.setAll(xh(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Pi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function By(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Oh(r.transform,i||null);s!=null&&(n===null&&(n=ce.empty()),n.set(r.field,s))}return n||null}function Hl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gn(r,i,(s,o)=>xy(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ri extends Ss{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hn extends Ss{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xh(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Wl(e,t,n){const r=new Map;Lt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,My(o,a,n[i]))}return r}function ql(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Vy(s,o,t))}return r}class ba extends Ss{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $y extends Ss{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jy{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Uy(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=wr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=wr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Rh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Lh(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(_t.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Kt())}isEqual(t){return this.batchId===t.batchId&&Gn(this.mutations,t.mutations,(n,r)=>Hl(n,r))&&Gn(this.baseMutations,t.baseMutations,(n,r)=>Hl(n,r))}}class Sa{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Lt(t.mutations.length===r.length);let i=function(){return Ry}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Sa(t,n,r,i)}}/**
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
 */class Hy{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var wt,J;function Wy(e){switch(e){default:return Q();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function qy(e){if(e===void 0)return Pn("GRPC error has no .code"),g.UNKNOWN;switch(e){case wt.OK:return g.OK;case wt.CANCELLED:return g.CANCELLED;case wt.UNKNOWN:return g.UNKNOWN;case wt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case wt.INTERNAL:return g.INTERNAL;case wt.UNAVAILABLE:return g.UNAVAILABLE;case wt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case wt.NOT_FOUND:return g.NOT_FOUND;case wt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case wt.ABORTED:return g.ABORTED;case wt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case wt.DATA_LOSS:return g.DATA_LOSS;default:return Q()}}(J=wt||(wt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new W_([4294967295,4294967295],0);class zy{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function ko(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Gy(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ky(e,t){return ko(e,t.toTimestamp())}function Hn(e){return Lt(!!e),_t.fromTimestamp(function(n){const r=Cn(n);return new Vt(r.seconds,r.nanos)}(e))}function Fh(e,t){return function(r){return new vt(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Qy(e){const t=vt.fromString(e);return Lt(rv(t)),t}function Do(e,t){return Fh(e.databaseId,t.path)}function Xy(e){const t=Qy(e);return t.length===4?vt.emptyPath():Yy(t)}function Jy(e){return new vt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Yy(e){return Lt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zl(e,t,n){return{name:Do(e,t),fields:n.value.mapValue.fields}}function Zy(e,t){let n;if(t instanceof ri)n={update:zl(e,t.key,t.value)};else if(t instanceof ba)n={delete:Do(e,t.key)};else if(t instanceof hn)n={update:zl(e,t.key,t.data),updateMask:nv(t.fieldMask)};else{if(!(t instanceof $y))return Q();n={verify:Do(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof xr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ur)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zi)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw Q()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ky(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(e,t.precondition)),n}function tv(e,t){return e&&e.length>0?(Lt(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Hn(i.updateTime):Hn(s);return o.isEqual(_t.min())&&(o=Hn(s)),new Fy(o,i.transformResults||[])}(n,t))):[]}function ev(e){let t=Xy(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Lt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=Uh(h);return d instanceof an&&wh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(p){return new yr(Nn(p.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,va(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new Ji(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new Ji(f,d)}(n.endAt)),Ey(t,i,o,s,a,"F",l,c)}function Uh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nn(n.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nn(n.unaryFilter.field);return Nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nn(n.unaryFilter.field);return Nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Nn(n.unaryFilter.field);return Nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(n){return Nt.create(Nn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>Uh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(e):Q()}function Nn(e){return Qt.fromServerFormat(e.fieldPath)}function nv(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class iv{constructor(t){this.lt=t}}function sv(e){const t=ev({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ro(t,t.limit,"L"):t}/**
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
 */class ov{constructor(){this.on=new av}addToCollectionParentIndex(t,n){return this.on.add(n),_.resolve()}getCollectionParents(t,n){return _.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return _.resolve()}deleteFieldIndex(t,n){return _.resolve()}getDocumentsMatchingTarget(t,n){return _.resolve(null)}getIndexType(t,n){return _.resolve(0)}getFieldIndexes(t,n){return _.resolve([])}getNextCollectionGroupToUpdate(t){return _.resolve(null)}getMinOffset(t,n){return _.resolve(on.min())}getMinOffsetFromCollectionGroup(t,n){return _.resolve(on.min())}updateCollectionGroup(t,n,r){return _.resolve()}updateIndexEntries(t,n){return _.resolve()}}class av{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ee(vt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ee(vt.comparator)).toArray()}}/**
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
 */class Yn{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Yn(0)}static Nn(){return new Yn(-1)}}/**
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
 */class lv{constructor(){this.changes=new ir(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ve.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class cv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class uv{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&wr(r.mutation,i,ue.empty(),Vt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Kt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Kt()){const i=yn();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=vi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=yn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Kt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Yi();const o=Er(),a=function(){return Er()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof hn)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),wr(u.mutation,c,u.mutation.getFieldMask(),Vt.now())):o.set(c.key,ue.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new cv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Er();let i=new se((o,a)=>o-a),s=Kt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||ue.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||Kt()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Rh();u.forEach(d=>{if(!s.has(d)){const f=Lh(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return W.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Ay(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):_.resolve(yn());let a=-1,l=s;return o.next(c=>_.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?_.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,Kt())).next(u=>({batchId:a,changes:Ch(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new W(n)).next(r=>{let i=vi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=vi();return this.indexManager.getCollectionParents(t,i).next(o=>_.forEach(o,a=>{const l=function(u,h){return new As(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,ve.newInvalidDocument(c)))});let o=vi();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&wr(c.mutation,l,ue.empty(),Vt.now()),Aa(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class hv{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return _.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Hn(i.createTime)}}(n)),_.resolve()}getNamedQuery(t,n){return _.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:sv(i.bundledQuery),readTime:Hn(i.readTime)}}(n)),_.resolve()}}/**
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
 */class dv{constructor(){this.overlays=new se(W.comparator),this.lr=new Map}getOverlay(t,n){return _.resolve(this.overlays.get(n))}getOverlays(t,n){const r=yn();return _.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.Pt(t,n,s)}),_.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),_.resolve()}getOverlaysForCollection(t,n,r){const i=yn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new se((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=yn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=yn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return _.resolve(a)}Pt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Hy(n,r));let s=this.lr.get(n);s===void 0&&(s=Kt(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Pa{constructor(){this.hr=new ee(Ot.Pr),this.Ir=new ee(Ot.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Ot(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Ot(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new W(new vt([])),r=new Ot(n,t),i=new Ot(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new W(new vt([])),r=new Ot(n,t),i=new Ot(n,t+1);let s=Kt();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ot(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return W.comparator(t.key,n.key)||dt(t.gr,n.gr)}static Tr(t,n){return dt(t.gr,n.gr)||W.comparator(t.key,n.key)}}/**
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
 */class fv{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ee(Ot.Pr)}checkEmpty(t){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jy(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ot(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(t,n){return _.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ee(dt);return n.forEach(i=>{const s=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),_.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Ot(new W(s),0);let a=new ee(dt);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),_.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Lt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return _.forEach(n.mutations,i=>{const s=new Ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Ot(n,0),i=this.yr.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,_.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class pv{constructor(t){this.vr=t,this.docs=function(){return new se(W.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():ve.newInvalidDocument(n))}getEntries(t,n){let r=Yi();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ve.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Yi();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ny(ey(u),r)<=0||(i.has(u.key)||Aa(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(t,n,r,i){Q()}Cr(t,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new mv(this)}getSize(t){return _.resolve(this.size)}}class mv extends lv{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),_.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class gv{constructor(t){this.persistence=t,this.Fr=new ir(n=>Ia(n),Ta),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Pa,this.targetCount=0,this.Nr=Yn.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(t){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return _.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),_.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Yn(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,_.resolve()}updateTargetData(t,n){return this.kn(n),_.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(t){return _.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return _.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),_.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),_.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return _.resolve(r)}containsKey(t,n){return _.resolve(this.Or.containsKey(n))}}/**
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
 */class _v{constructor(t,n){this.Br={},this.overlays={},this.Lr=new mh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new gv(this),this.indexManager=new ov,this.remoteDocumentCache=function(i){return new pv(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new iv(n),this.Kr=new hv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new dv,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new fv(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){D("MemoryPersistence","Starting transaction:",t);const i=new yv(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return _.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class yv extends iy{constructor(t){super(),this.currentSequenceNumber=t}}class Ca{constructor(t){this.persistence=t,this.Gr=new Pa,this.zr=null}static jr(t){return new Ca(t)}get Hr(){if(this.zr)return this.zr;throw Q()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),_.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),_.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),_.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Hr,r=>{const i=W.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,_t.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return _.or([()=>_.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class Ra{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=Kt(),i=Kt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ra(t,n.fromCache,r,i)}}/**
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
 */class vv{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Wi(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(Bl(n))return _.resolve(null);let r=Jn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ro(n,null,"F"),r=Jn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Kt(...s);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.zi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(t,Ro(n,null,"F")):this.Hi(t,c,n,l)}))})))}Wi(t,n,r,i){return Bl(n)||i.isEqual(_t.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(Nl()<=et.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$l(n)),this.Hi(t,o,n,ty(i,-1)))})}zi(t,n){let r=new ee(Sy(t));return n.forEach((i,s)=>{Aa(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return Nl()<=et.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",$l(n)),this.$i.getDocumentsMatchingQuery(t,n,on.min())}Hi(t,n,r,i){return this.$i.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Ev{constructor(t,n,r,i){this.persistence=t,this.Ji=n,this.serializer=i,this.Yi=new se(dt),this.Zi=new ir(s=>Ia(s),Ta),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new uv(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function wv(e,t,n,r){return new Ev(e,t,n,r)}async function Bh(e,t){const n=pt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Kt();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ns:c,removedBatchIds:o,addedBatchIds:a}))})})}function Iv(e,t){const n=pt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=_.resolve();return d.forEach(p=>{f=f.next(()=>u.getEntry(l,p)).next(E=>{const w=c.docVersions.get(p);Lt(w!==null),E.version.compareTo(w)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Kt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Tv(e){const t=pt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function Av(e,t){const n=pt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Gl{constructor(){this.activeTargetIds=Oy()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class bv{constructor(){this.Js=new Gl,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new Gl,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Sv{Zs(t){}shutdown(){}}/**
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
 */class Kl{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ei=null;function Ys(){return Ei===null?Ei=function(){return 268435456+Math.round(2147483648*Math.random())}():Ei++,"0x"+Ei.toString(16)}/**
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
 */class Cv{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
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
 */const zt="WebChannelConnection";class Rv extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=Ys(),l=this.fo(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(c,s,o),this.yo(n,l,c,i).then(u=>(D("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Gi("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+nr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=Pv[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,i){const s=Ys();return new Promise((o,a)=>{const l=new H_;l.setWithCredentials(!0),l.listenOnce(B_.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Js.NO_ERROR:const u=l.getResponseJson();D(zt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Js.TIMEOUT:D(zt,`RPC '${t}' ${s} timed out`),a(new O(g.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const h=l.getStatus();if(D(zt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const p=function(w){const T=w.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(T)>=0?T:g.UNKNOWN}(f.status);a(new O(p,f.message))}else a(new O(g.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(g.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{D(zt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);D(zt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}So(t,n,r){const i=Ys(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=F_(),a=U_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new j_({})),this.po(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");D(zt,`Creating RPC '${t}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const p=new Cv({oo:w=>{f?D(zt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(d||(D(zt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),D(zt,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},_o:()=>h.close()}),E=(w,T,$)=>{w.listen(T,M=>{try{$(M)}catch(C){setTimeout(()=>{throw C},0)}})};return E(h,gi.EventType.OPEN,()=>{f||D(zt,`RPC '${t}' stream ${i} transport opened.`)}),E(h,gi.EventType.CLOSE,()=>{f||(f=!0,D(zt,`RPC '${t}' stream ${i} transport closed`),p.Io())}),E(h,gi.EventType.ERROR,w=>{f||(f=!0,Gi(zt,`RPC '${t}' stream ${i} transport errored:`,w),p.Io(new O(g.UNAVAILABLE,"The operation could not be completed")))}),E(h,gi.EventType.MESSAGE,w=>{var T;if(!f){const $=w.data[0];Lt(!!$);const M=$,C=M.error||((T=M[0])===null||T===void 0?void 0:T.error);if(C){D(zt,`RPC '${t}' stream ${i} received error:`,C);const x=C.status;let U=function(Z){const It=wt[Z];if(It!==void 0)return qy(It)}(x),lt=C.message;U===void 0&&(U=g.INTERNAL,lt="Unknown error status: "+x+" with message "+C.message),f=!0,p.Io(new O(U,lt)),h.close()}else D(zt,`RPC '${t}' stream ${i} received:`,$),p.To($)}}),E(a,$_.STAT_EVENT,w=>{w.stat===Dl.PROXY?D(zt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Dl.NOPROXY&&D(zt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Po()},0),p}}function Zs(){return typeof document<"u"?document:null}/**
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
 */function Ps(e){return new zy(e,!0)}/**
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
 */class $h{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
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
 */class kv{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new $h(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Pn(n.toString()),Pn("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{t(()=>{const i=new O(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dv extends kv{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(t,n){return this.connection.So("Write",t,n)}onMessage(t){if(Lt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.__){this.$o.reset();const n=tv(t.writeResults,t.commitTime),r=Hn(t.commitTime);return this.listener.c_(r,n)}return Lt(!t.writeResults||t.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const t={};t.database=Jy(this.serializer),this.Jo(t)}u_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Zy(this.serializer,r))};this.Jo(n)}}/**
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
 */class Ov extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new O(g.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(g.UNKNOWN,i.toString())})}wo(t,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(g.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class Nv{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Pn(n),this.A_=!1):D("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
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
 */class Vv{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{si(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=pt(l);c.w_.add(4),await ii(c),c.D_.set("Unknown"),c.w_.delete(4),await Cs(c)}(this))})}),this.D_=new Nv(r,i)}}async function Cs(e){if(si(e))for(const t of e.S_)await t(!0)}async function ii(e){for(const t of e.S_)await t(!1)}function si(e){return pt(e).w_.size===0}async function jh(e,t,n){if(!Ts(t))throw t;e.w_.add(1),await ii(e),e.D_.set("Offline"),n||(n=()=>Tv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await Cs(e)})}function Hh(e,t){return t().catch(n=>jh(e,n,t))}async function Rs(e){const t=pt(e),n=ln(t);let r=t.p_.length>0?t.p_[t.p_.length-1].batchId:-1;for(;Mv(t);)try{const i=await Av(t.localStore,r);if(i===null){t.p_.length===0&&n.jo();break}r=i.batchId,Lv(t,i)}catch(i){await jh(t,i)}Wh(t)&&qh(t)}function Mv(e){return si(e)&&e.p_.length<10}function Lv(e,t){e.p_.push(t);const n=ln(e);n.Wo()&&n.a_&&n.u_(t.mutations)}function Wh(e){return si(e)&&!ln(e).Uo()&&e.p_.length>0}function qh(e){ln(e).start()}async function xv(e){ln(e).h_()}async function Fv(e){const t=ln(e);for(const n of e.p_)t.u_(n.mutations)}async function Uv(e,t,n){const r=e.p_.shift(),i=Sa.from(r,t,n);await Hh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Rs(e)}async function Bv(e,t){t&&ln(e).a_&&await async function(r,i){if(function(o){return Wy(o)&&o!==g.ABORTED}(i.code)){const s=r.p_.shift();ln(r).zo(),await Hh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Rs(r)}}(e,t),Wh(e)&&qh(e)}async function Ql(e,t){const n=pt(e);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=si(n);n.w_.add(3),await ii(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await Cs(n)}async function $v(e,t){const n=pt(e);t?(n.w_.delete(2),await Cs(n)):t||(n.w_.add(2),await ii(n),n.D_.set("Unknown"))}function ln(e){return e.F_||(e.F_=function(n,r,i){const s=pt(n);return s.I_(),new Dv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ao:xv.bind(null,e),co:Bv.bind(null,e),l_:Fv.bind(null,e),c_:Uv.bind(null,e)}),e.S_.push(async t=>{t?(e.F_.zo(),await Rs(e)):(await e.F_.stop(),e.p_.length>0&&(D("RemoteStore",`Stopping write stream with ${e.p_.length} pending writes`),e.p_=[]))})),e.F_}/**
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
 */class ka{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new ka(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zh(e,t){if(Pn("AsyncQueue",`${t}: ${e}`),Ts(e))return new O(g.UNAVAILABLE,`${t}: ${e}`);throw e}class jv{constructor(){this.queries=new ir(t=>Sh(t),bh),this.onlineState="Unknown",this.N_=new Set}}function Hv(e){e.N_.forEach(t=>{t.next()})}class Wv{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new ir(a=>Sh(a),bh),this.Aa=new Map,this.Ra=new Set,this.Va=new se(W.comparator),this.ma=new Map,this.fa=new Pa,this.ga={},this.pa=new Map,this.ya=Yn.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function qv(e,t,n){const r=Qv(e);try{const i=await function(o,a){const l=pt(o),c=Vt.now(),u=a.reduce((f,p)=>f.add(p.key),Kt());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=Yi(),E=Kt();return l.es.getEntries(f,u).next(w=>{p=w,p.forEach((T,$)=>{$.isValidDocument()||(E=E.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,p)).next(w=>{h=w;const T=[];for(const $ of a){const M=By($,h.get($.key).overlayedDocument);M!=null&&T.push(new hn($.key,M,yh(M.value.mapValue),Ie.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(w=>{d=w;const T=w.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(f,w.batchId,T)})}).then(()=>({batchId:d.batchId,changes:Ch(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.ga[o.currentUser.toKey()];c||(c=new se(dt)),c=c.insert(a,l),o.ga[o.currentUser.toKey()]=c}(r,i.batchId,n),await ks(r,i.changes),await Rs(r.remoteStore)}catch(i){const s=zh(i,"Failed to persist write");n.reject(s)}}function Xl(e,t,n){const r=pt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=pt(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.B_(a)&&(c=!0)}),c&&Hv(l)}(r.eventManager,t),i.length&&r.Ea.i_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zv(e,t){const n=pt(e),r=t.batch.batchId;try{const i=await Iv(n.localStore,t);Kh(n,r,null),Gh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ks(n,i)}catch(i){await ph(i)}}async function Gv(e,t,n){const r=pt(e);try{const i=await function(o,a){const l=pt(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Lt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Kh(r,t,n),Gh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ks(r,i)}catch(i){await ph(i)}}function Gh(e,t){(e.pa.get(t)||[]).forEach(n=>{n.resolve()}),e.pa.delete(t)}function Kh(e,t,n){const r=pt(e);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ga[r.currentUser.toKey()]=i}}async function ks(e,t,n){const r=pt(e),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,l)=>{o.push(r.Sa(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){i.push(c);const u=Ra.Qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(l,c){const u=pt(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>_.forEach(c,d=>_.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>_.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ts(h))throw h;D("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Yi.get(d),p=f.snapshotVersion,E=f.withLastLimboFreeSnapshotVersion(p);u.Yi=u.Yi.insert(d,E)}}}(r.localStore,s))}async function Kv(e,t){const n=pt(e);if(!n.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const r=await Bh(n.localStore,t);n.currentUser=t,function(s,o){s.pa.forEach(a=>{a.forEach(l=>{l.reject(new O(g.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ks(n,r.ns)}}function Qv(e){const t=pt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=zv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Gv.bind(null,t),t}class Jl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ps(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return wv(this.persistence,new vv,t.initialUser,this.serializer)}createPersistence(t){return new _v(Ca.jr,this.serializer)}createSharedClientState(t){return new bv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xv{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Kv.bind(null,this.syncEngine),await $v(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new jv}()}createDatastore(t){const n=Ps(t.databaseInfo.databaseId),r=function(s){return new Rv(s)}(t.databaseInfo);return function(s,o,a,l){return new Ov(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Vv(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Xl(this.syncEngine,n,0),function(){return Kl.v()?new Kl:new Sv}())}createSyncEngine(t,n){return function(i,s,o,a,l,c,u){const h=new Wv(i,s,o,a,l,c);return u&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=pt(n);D("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await ii(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Jv{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Gt.UNAUTHENTICATED,this.clientId=fh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=zh(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function to(e,t){e.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Bh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Yl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Zv(e);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Ql(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Ql(t.remoteStore,s)),e._onlineComponents=t}function Yv(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Zv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await to(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Yv(n))throw n;Gi("Error using user provided cache. Falling back to memory cache: "+n),await to(e,new Jl)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await to(e,new Jl);return e._offlineComponents}async function t0(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await Yl(e,e._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await Yl(e,new Xv))),e._onlineComponents}function e0(e){return t0(e).then(t=>t.syncEngine)}/**
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
 */function Qh(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Zl=new Map;/**
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
 */function Xh(e,t,n){if(!n)throw new O(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function n0(e,t,n,r){if(t===!0&&r===!0)throw new O(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tc(e){if(!W.isDocumentKey(e))throw new O(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ec(e){if(W.isDocumentKey(e))throw new O(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Da(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function Jh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(e);throw new O(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class nc{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}n0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ds{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new q_;switch(r.type){case"firstParty":return new Q_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zl.get(n);r&&(D("ComponentProvider","Removing Datastore"),Zl.delete(n),r.terminate())}(this),Promise.resolve()}}function r0(e,t,n,r={}){var i;const s=(e=Jh(e,Ds))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Gt.MOCK_USER;else{a=mf(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new O(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Gt(c)}e._authCredentials=new z_(new dh(a,l))}}/**
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
 */class Oa{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Oa(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new en(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class en extends Oa{constructor(t,n,r){super(t,n,wy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new W(t))}withConverter(t){return new en(this.firestore,t,this._path)}}function i0(e,t,...n){if(e=Zt(e),Xh("collection","path",t),e instanceof Ds){const r=vt.fromString(t,...n);return ec(r),new en(e,null,r)}{if(!(e instanceof Le||e instanceof en))throw new O(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return ec(r),new en(e.firestore,null,r)}}function rc(e,t,...n){if(e=Zt(e),arguments.length===1&&(t=fh.V()),Xh("doc","path",t),e instanceof Ds){const r=vt.fromString(t,...n);return tc(r),new Le(e,null,new W(r))}{if(!(e instanceof Le||e instanceof en))throw new O(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(vt.fromString(t,...n));return tc(r),new Le(e.firestore,e instanceof en?e.converter:null,new W(r))}}/**
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
 */class s0{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new $h(this,"async_queue_retry"),this.eu=()=>{const n=Zs();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=Zs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=Zs();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new wn;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!Ts(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Pn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=ka.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&Q()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class Yh extends Ds{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new s0}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||td(this),this._firestoreClient.terminate()}}function o0(e,t){const n=typeof e=="object"?e:Dc(),r=typeof e=="string"?e:t||"(default)",i=$o(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ff("firestore");s&&r0(i,...s)}return i}function Zh(e){return e._firestoreClient||td(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function td(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,c,u){return new ly(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Qh(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Jv(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Br{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Br(Be.fromBase64String(t))}catch(n){throw new O(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Br(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Na{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new O(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Os{constructor(t){this._methodName=t}}/**
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
 */class ed{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new O(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new O(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dt(this._lat,t._lat)||dt(this._long,t._long)}}/**
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
 */const a0=/^__.*__$/;class l0{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new hn(t,this.data,this.fieldMask,n,this.fieldTransforms):new ri(t,this.data,n,this.fieldTransforms)}}class nd{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new hn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function rd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Va{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new Va(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.Iu(t),i}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return ts(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(rd(this.cu)&&a0.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class c0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ps(t)}Vu(t,n,r,i=!1){return new Va({cu:t,methodName:n,Ru:r,path:Qt.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function u0(e){const t=e._freezeSettings(),n=Ps(e._databaseId);return new c0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function h0(e,t,n,r,i,s={}){const o=e.Vu(s.merge||s.mergeFields?2:0,t,n,i);La("Data must be an object, but it was:",o,r);const a=id(r,o);let l,c;if(s.merge)l=new ue(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Oo(t,h,n);if(!o.contains(d))throw new O(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ad(u,d)||u.push(d)}l=new ue(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new l0(new ce(a),l,c)}class Ns extends Os{_toFieldTransform(t){if(t.cu!==2)throw t.cu===1?t.du(`${this._methodName}() can only appear at the top level of your update data`):t.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ns}}class Ma extends Os{_toFieldTransform(t){return new Ly(t.path,new xr)}isEqual(t){return t instanceof Ma}}function d0(e,t,n,r){const i=e.Vu(1,t,n);La("Data must be an object, but it was:",i,r);const s=[],o=ce.empty();rr(r,(l,c)=>{const u=od(t,l,n);c=Zt(c);const h=i.Tu(u);if(c instanceof Ns)s.push(u);else{const d=Vs(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new ue(s);return new nd(o,a,i.fieldTransforms)}function f0(e,t,n,r,i,s){const o=e.Vu(1,t,n),a=[Oo(t,r,n)],l=[i];if(s.length%2!=0)throw new O(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Oo(t,s[d])),l.push(s[d+1]);const c=[],u=ce.empty();for(let d=a.length-1;d>=0;--d)if(!ad(c,a[d])){const f=a[d];let p=l[d];p=Zt(p);const E=o.Tu(f);if(p instanceof Ns)c.push(f);else{const w=Vs(p,E);w!=null&&(c.push(f),u.set(f,w))}}const h=new ue(c);return new nd(u,h,o.fieldTransforms)}function Vs(e,t){if(sd(e=Zt(e)))return La("Unsupported field value:",t,e),id(e,t);if(e instanceof Os)return function(r,i){if(!rd(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Vs(a,i.Eu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Zt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ny(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Vt.fromDate(r);return{timestampValue:ko(i.serializer,s)}}if(r instanceof Vt){const s=new Vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(i.serializer,s)}}if(r instanceof ed)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Br)return{bytesValue:Gy(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fh(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${Da(r)}`)}(e,t)}function id(e,t){const n={};return gh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rr(e,(r,i)=>{const s=Vs(i,t.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Vt||e instanceof ed||e instanceof Br||e instanceof Le||e instanceof Os)}function La(e,t,n){if(!sd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Da(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}function Oo(e,t,n){if((t=Zt(t))instanceof Na)return t._internalPath;if(typeof t=="string")return od(e,t);throw ts("Field path arguments must be of type string or ",e,!1,void 0,n)}const p0=new RegExp("[~\\*/\\[\\]]");function od(e,t,n){if(t.search(p0)>=0)throw ts(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Na(...t.split("."))._internalPath}catch{throw ts(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ts(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(g.INVALID_ARGUMENT,a+e+l)}function ad(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function m0(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function g0(e,t){return function(r,i){const s=new wn;return r.asyncQueue.enqueueAndForget(async()=>qv(await e0(r),i,s)),s.promise}(Zh(e),t)}/**
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
 */class _0{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=u0(t)}set(t,n,r){this._verifyNotCommitted();const i=eo(t,this._firestore),s=m0(i.converter,n,r),o=h0(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ie.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=eo(t,this._firestore);let o;return o=typeof(n=Zt(n))=="string"||n instanceof Na?f0(this._dataReader,"WriteBatch.update",s._key,n,r,i):d0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ie.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=eo(t,this._firestore);return this._mutations=this._mutations.concat(new ba(n._key,Ie.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new O(g.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function eo(e,t){if((e=Zt(e)).firestore!==t)throw new O(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function ic(){return new Ma("serverTimestamp")}/**
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
 */function y0(e){return Zh(e=Jh(e,Yh)),new _0(e,t=>g0(e,t))}(function(t,n=!0){(function(i){nr=i})(Zn),qn(new Tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Yh(new G_(r.getProvider("auth-internal")),new J_(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new O(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(Ol,"4.1.1",t),tn(Ol,"4.1.1","esm2017")})();const v0="documents",E0="users",w0=so(sf,JSON.parse('{"apiKey":"AIzaSyBYGz_WUwzIpZYGf4SN4jo5xqp3MNEC8FA","authDomain":"conforall.firebaseapp.com","projectId":"conforall","storageBucket":"conforall.appspot.com","messagingSenderId":"289133639309","appId":"1:289133639309:web:b6ddf29928a923028214c4"}')),I0=kc(w0),no=o0(I0),sc=xg(),T0=e=>new Promise((t,n)=>{bm(e,r=>r?t(r):n())}),A0=async e=>{await vm(sc);const t=await T0(sc),n=y0(no),r=rc(i0(no,v0)),i=rc(no,E0,t.uid);return n.set(r,{...e,uid:t.uid,timestamp:ic()}),n.set(i,{timestamp:ic()},{merge:!0}),n.commit()};function b0(e){let t,n='<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>',r,i,s,o,a,l,c,u;return{c(){t=N("label"),t.innerHTML=n,r=ut(),i=N("input"),o=ut(),a=N("div"),l=N("span"),c=nn("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(h){t=V(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),St(t)!=="svelte-5u2x8b"&&(t.innerHTML=n),r=ht(h),i=V(h,"INPUT",{type:!0,name:!0,class:!0}),o=ht(h),a=V(h,"DIV",{class:!0});var d=Y(a);l=V(d,"SPAN",{class:!0});var f=Y(l);c=rn(f,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),f.forEach(A),d.forEach(A),this.h()},h(){y(t,"class","label"),y(t,"for","personalid"),y(i,"type","string"),y(i,"name","personalid"),y(i,"class",s="input rounded-sm bg-base-200 "+(e[18]?"input-error":"")),i.disabled=e[4],y(l,"class",u="label-text-alt "+(e[18]?"text-error":"")),y(a,"class","label")},m(h,d){G(h,t,d),G(h,r,d),G(h,i,d),G(h,o,d),G(h,a,d),R(a,l),R(l,c)},p(h,d){d&262144&&s!==(s="input rounded-sm bg-base-200 "+(h[18]?"input-error":""))&&y(i,"class",s),d&16&&(i.disabled=h[4]),d&262144&&u!==(u="label-text-alt "+(h[18]?"text-error":""))&&y(l,"class",u)},d(h){h&&(A(t),A(r),A(i),A(o),A(a))}}}function S0(e){let t,n='<span class="label-text heading-03">ชื่อ*</span>',r,i,s,o,a,l,c,u;return{c(){t=N("label"),t.innerHTML=n,r=ut(),i=N("input"),o=ut(),a=N("div"),l=N("span"),c=nn("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(h){t=V(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),St(t)!=="svelte-i2bah3"&&(t.innerHTML=n),r=ht(h),i=V(h,"INPUT",{type:!0,name:!0,class:!0}),o=ht(h),a=V(h,"DIV",{class:!0});var d=Y(a);l=V(d,"SPAN",{class:!0});var f=Y(l);c=rn(f,"ระบุชื่อจริงเป็นภาษาไทย"),f.forEach(A),d.forEach(A),this.h()},h(){y(t,"class","label"),y(t,"for","firstname"),y(i,"type","text"),y(i,"name","firstname"),y(i,"class",s="input rounded-sm bg-base-200 w-full "+(e[18]?"input-error":"")),i.disabled=e[4],y(l,"class",u="label-text-alt "+(e[18]?"text-error":"")),y(a,"class","label")},m(h,d){G(h,t,d),G(h,r,d),G(h,i,d),G(h,o,d),G(h,a,d),R(a,l),R(l,c)},p(h,d){d&262144&&s!==(s="input rounded-sm bg-base-200 w-full "+(h[18]?"input-error":""))&&y(i,"class",s),d&16&&(i.disabled=h[4]),d&262144&&u!==(u="label-text-alt "+(h[18]?"text-error":""))&&y(l,"class",u)},d(h){h&&(A(t),A(r),A(i),A(o),A(a))}}}function P0(e){let t,n='<span class="label-text heading-03">นามสกุล*</span>',r,i,s,o,a,l,c,u;return{c(){t=N("label"),t.innerHTML=n,r=ut(),i=N("input"),o=ut(),a=N("div"),l=N("span"),c=nn("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(h){t=V(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),St(t)!=="svelte-1lqzuwh"&&(t.innerHTML=n),r=ht(h),i=V(h,"INPUT",{type:!0,name:!0,class:!0}),o=ht(h),a=V(h,"DIV",{class:!0});var d=Y(a);l=V(d,"SPAN",{class:!0});var f=Y(l);c=rn(f,"ระบุนามสกุลเป็นภาษาไทย"),f.forEach(A),d.forEach(A),this.h()},h(){y(t,"class","label"),y(t,"for","lastname"),y(i,"type","text"),y(i,"name","lastname"),y(i,"class",s="input rounded-sm bg-base-200 "+(e[18]?"input-error":"")),i.disabled=e[4],y(l,"class",u="label-text-alt "+(e[18]?"text-error":"")),y(a,"class","label")},m(h,d){G(h,t,d),G(h,r,d),G(h,i,d),G(h,o,d),G(h,a,d),R(a,l),R(l,c)},p(h,d){d&262144&&s!==(s="input rounded-sm bg-base-200 "+(h[18]?"input-error":""))&&y(i,"class",s),d&16&&(i.disabled=h[4]),d&262144&&u!==(u="label-text-alt "+(h[18]?"text-error":""))&&y(l,"class",u)},d(h){h&&(A(t),A(r),A(i),A(o),A(a))}}}function C0(e){let t,n,r=`คลิกเพื่อกรอกลายเซ็น
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z" fill="black"></path><path d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z" fill="black"></path></svg>`,i,s;return{c(){t=N("div"),n=N("button"),n.innerHTML=r,this.h()},l(o){t=V(o,"DIV",{class:!0});var a=Y(t);n=V(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),St(n)!=="svelte-u454pn"&&(n.innerHTML=r),a.forEach(A),this.h()},h(){y(n,"type","button"),y(n,"class","btn bg-base-100 heading-03 shadow-xl"),y(t,"class","absolute w-full h-full flex justify-center items-center top-0 left-0")},m(o,a){G(o,t,a),R(t,n),i||(s=Ci(n,"click",e[10]),i=!0)},p:Xe,d(o){o&&A(t),i=!1,s()}}}function R0(e){let t,n=`ล้าง
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z" fill="#8054FF"></path></svg>`,r,i;return{c(){t=N("button"),t.innerHTML=n,this.h()},l(s){t=V(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),St(t)!=="svelte-1auzjm1"&&(t.innerHTML=n),this.h()},h(){y(t,"type","button"),y(t,"class","btn btn-outline btn-accent absolute right-[10px] bottom-4")},m(s,o){G(s,t,o),r||(i=Ci(t,"click",e[8]),r=!0)},p:Xe,d(s){s&&A(t),r=!1,i()}}}function k0(e){let t,n,r=(e[18]||"")+"",i;return{c(){t=N("div"),n=N("span"),i=nn(r),this.h()},l(s){t=V(s,"DIV",{class:!0});var o=Y(t);n=V(o,"SPAN",{class:!0});var a=Y(n);i=rn(a,r),a.forEach(A),o.forEach(A),this.h()},h(){y(n,"class","label-text-alt text-error"),y(t,"class","label")},m(s,o){G(s,t,o),R(t,n),R(n,i)},p(s,o){o&262144&&r!==(r=(s[18]||"")+"")&&md(i,r)},d(s){s&&A(t)}}}function D0(e){let t,n;return{c(){t=nn(`กำลังลงชื่อ...
				`),n=N("span"),this.h()},l(r){t=rn(r,`กำลังลงชื่อ...
				`),n=V(r,"SPAN",{class:!0}),Y(n).forEach(A),this.h()},h(){y(n,"class","loading loading-spinner")},m(r,i){G(r,t,i),G(r,n,i)},d(r){r&&(A(t),A(n))}}}function O0(e){let t,n,r,i,s;return{c(){t=nn(`ลงชื่อเลย
				`),n=Vn("svg"),r=Vn("path"),i=Vn("path"),s=Vn("path"),this.h()},l(o){t=rn(o,`ลงชื่อเลย
				`),n=Mn(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=Y(n);r=Mn(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),Y(r).forEach(A),i=Mn(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),Y(i).forEach(A),s=Mn(a,"path",{d:!0,fill:!0}),Y(s).forEach(A),a.forEach(A),this.h()},h(){y(r,"fill-rule","evenodd"),y(r,"clip-rule","evenodd"),y(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),y(r,"fill","white"),y(i,"fill-rule","evenodd"),y(i,"clip-rule","evenodd"),y(i,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),y(i,"fill","white"),y(s,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),y(s,"fill","white"),y(n,"xmlns","http://www.w3.org/2000/svg"),y(n,"width","16"),y(n,"height","16"),y(n,"viewBox","0 0 16 16"),y(n,"fill","none")},m(o,a){G(o,t,a),G(o,n,a),R(n,r),R(n,i),R(n,s)},d(o){o&&(A(t),A(n))}}}function N0(e){let t,n,r,i,s,o,a,l='<span class="label-text heading-03">คำนำหน้า</span>',c,u,h,d,f="นาย",p,E="นาง",w,T="นางสาว",$,M,C,x,U,lt,st,Z,It='<span class="label-text heading-03">ลงลายมือชื่อ*</span>',k,q,ot,Pt,qt,at,Tt,de,I,z='<label class="label cursor-pointer space-x-2 justify-normal"><input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อ <a href="/privacy-policy" class="underline">อ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคล</a></span></label>',j,nt,mt,gt,yt,fe='<form method="dialog" class="modal-box"><p class="py-4">ลงชื่อสำเร็จ</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',me,Ft,je='<form method="dialog" class="modal-box"><p class="py-4">เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',oe,ge,ae;r=new ui({props:{for:"personalid",$$slots:{default:[b0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}}),C=new ui({props:{for:"firstname",$$slots:{default:[S0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}}),U=new ui({props:{for:"lastname",$$slots:{default:[P0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}});function S(b,B){return b[3]?R0:C0}let m=S(e),P=m(e);Tt=new ui({props:{for:"signature",$$slots:{default:[k0,({messages:b})=>({18:b}),({messages:b})=>b?262144:0]},$$scope:{ctx:e}}});function H(b,B){return b[4]?D0:O0}let At=H(e),Ct=At(e);return{c(){t=N("form"),n=N("div"),lr(r.$$.fragment),i=ut(),s=N("div"),o=N("div"),a=N("label"),a.innerHTML=l,c=ut(),u=N("select"),h=N("option"),d=N("option"),d.textContent=f,p=N("option"),p.textContent=E,w=N("option"),w.textContent=T,$=ut(),M=N("div"),lr(C.$$.fragment),x=ut(),lr(U.$$.fragment),lt=ut(),st=N("div"),Z=N("div"),Z.innerHTML=It,k=ut(),q=N("div"),ot=N("canvas"),qt=ut(),P.c(),at=ut(),lr(Tt.$$.fragment),de=ut(),I=N("div"),I.innerHTML=z,j=ut(),nt=N("button"),Ct.c(),gt=ut(),yt=N("dialog"),yt.innerHTML=fe,me=ut(),Ft=N("dialog"),Ft.innerHTML=je,this.h()},l(b){t=V(b,"FORM",{});var B=Y(t);n=V(B,"DIV",{class:!0});var X=Y(n);cr(r.$$.fragment,X),i=ht(X),s=V(X,"DIV",{class:!0});var bt=Y(s);o=V(bt,"DIV",{class:!0});var Rt=Y(o);a=V(Rt,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),St(a)!=="svelte-1h1uakk"&&(a.innerHTML=l),c=ht(Rt),u=V(Rt,"SELECT",{class:!0,name:!0});var Ut=Y(u);h=V(Ut,"OPTION",{}),Y(h).forEach(A),d=V(Ut,"OPTION",{"data-svelte-h":!0}),St(d)!=="svelte-1en4y3b"&&(d.textContent=f),p=V(Ut,"OPTION",{"data-svelte-h":!0}),St(p)!=="svelte-18vmce2"&&(p.textContent=E),w=V(Ut,"OPTION",{"data-svelte-h":!0}),St(w)!=="svelte-1lp5zi9"&&(w.textContent=T),Ut.forEach(A),Rt.forEach(A),$=ht(bt),M=V(bt,"DIV",{class:!0});var oi=Y(M);cr(C.$$.fragment,oi),oi.forEach(A),bt.forEach(A),x=ht(X),cr(U.$$.fragment,X),lt=ht(X),st=V(X,"DIV",{class:!0});var rt=Y(st);Z=V(rt,"DIV",{class:!0,"data-svelte-h":!0}),St(Z)!=="svelte-zde8yy"&&(Z.innerHTML=It),k=ht(rt),q=V(rt,"DIV",{class:!0});var tt=Y(q);ot=V(tt,"CANVAS",{class:!0}),Y(ot).forEach(A),qt=ht(tt),P.l(tt),tt.forEach(A),at=ht(rt),cr(Tt.$$.fragment,rt),rt.forEach(A),de=ht(X),I=V(X,"DIV",{class:!0,"data-svelte-h":!0}),St(I)!=="svelte-dsszle"&&(I.innerHTML=z),j=ht(X),nt=V(X,"BUTTON",{type:!0,class:!0});var kt=Y(nt);Ct.l(kt),kt.forEach(A),X.forEach(A),gt=ht(B),yt=V(B,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),St(yt)!=="svelte-hy64ql"&&(yt.innerHTML=fe),me=ht(B),Ft=V(B,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),St(Ft)!=="svelte-zw178f"&&(Ft.innerHTML=je),B.forEach(A),this.h()},h(){y(a,"class","label"),y(a,"for","prefix"),h.selected=!0,h.__value="",ai(h,h.__value),d.__value="นาย",ai(d,d.__value),p.__value="นาง",ai(p,p.__value),w.__value="นางสาว",ai(w,w.__value),y(u,"class","select rounded-sm max-w-xs bg-base-200"),u.disabled=e[4],y(u,"name","prefix"),y(o,"class","form-control"),y(M,"class","form-control flex-1"),y(s,"class","flex flex-row space-x-[10px]"),y(Z,"class","label"),y(ot,"class",Pt="bg-base-200 h-[258px] w-full rounded-sm "+(!e[3]||e[4]?"pointer-events-none":"")),y(q,"class","relative"),y(st,"class","form-control"),y(I,"class","form-control"),y(nt,"type","submit"),y(nt,"class","btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100"),nt.disabled=mt=!e[5].consent||e[4],y(n,"class","form-control w-full"),y(yt,"id","success-dialog"),y(yt,"class","modal modal-bottom sm:modal-middle"),y(Ft,"id","error-dialog"),y(Ft,"class","modal modal-bottom sm:modal-middle")},m(b,B){G(b,t,B),R(t,n),ur(r,n,null),R(n,i),R(n,s),R(s,o),R(o,a),R(o,c),R(o,u),R(u,h),R(u,d),R(u,p),R(u,w),R(s,$),R(s,M),ur(C,M,null),R(n,x),ur(U,n,null),R(n,lt),R(n,st),R(st,Z),R(st,k),R(st,q),R(q,ot),e[9](ot),R(q,qt),P.m(q,null),R(st,at),ur(Tt,st,null),R(n,de),R(n,I),R(n,j),R(n,nt),Ct.m(nt,null),R(t,gt),R(t,yt),e[11](yt),R(t,me),R(t,Ft),e[12](Ft),oe=!0,ge||(ae=fd(e[6].call(null,t)),ge=!0)},p(b,[B]){const X={};B&786448&&(X.$$scope={dirty:B,ctx:b}),r.$set(X),(!oe||B&16)&&(u.disabled=b[4]);const bt={};B&786448&&(bt.$$scope={dirty:B,ctx:b}),C.$set(bt);const Rt={};B&786448&&(Rt.$$scope={dirty:B,ctx:b}),U.$set(Rt),(!oe||B&24&&Pt!==(Pt="bg-base-200 h-[258px] w-full rounded-sm "+(!b[3]||b[4]?"pointer-events-none":"")))&&y(ot,"class",Pt),m===(m=S(b))&&P?P.p(b,B):(P.d(1),P=m(b),P&&(P.c(),P.m(q,null)));const Ut={};B&786432&&(Ut.$$scope={dirty:B,ctx:b}),Tt.$set(Ut),At!==(At=H(b))&&(Ct.d(1),Ct=At(b),Ct&&(Ct.c(),Ct.m(nt,null))),(!oe||B&48&&mt!==(mt=!b[5].consent||b[4]))&&(nt.disabled=mt)},i(b){oe||(we(r.$$.fragment,b),we(C.$$.fragment,b),we(U.$$.fragment,b),we(Tt.$$.fragment,b),oe=!0)},o(b){Ee(r.$$.fragment,b),Ee(C.$$.fragment,b),Ee(U.$$.fragment,b),Ee(Tt.$$.fragment,b),oe=!1},d(b){b&&A(t),hr(r),hr(C),hr(U),e[9](null),P.d(),hr(Tt),Ct.d(),e[11](null),e[12](null),ge=!1,ae()}}}function V0(e,t,n){let r,i,s,o,a,l=!1,c=!1;const u=new ResizeObserver(x=>{n(0,i.width=x[0].target.clientWidth,i),n(0,i.height=x[0].target.clientHeight,i),s.fromData(s.toData())}),{form:h,setTouched:d,setData:f,data:p,reset:E}=jd({validate(x){try{so(Ga,x)}catch(U){return Jd(U).nested}return{}},async onSubmit(x){n(4,c=!0);try{await A0(so(Ga,x)),o.showModal(),w(),E()}catch{a.showModal()}n(4,c=!1)},extend:Hd});pd(e,p,x=>n(5,r=x)),Mo(()=>{s=new Di(i),s.addEventListener("endStroke",()=>{d("signature",!0),f("signature",s.toDataURL())}),u.observe(i)});function w(){s.clear(),f("signature",void 0)}function T(x){wi[x?"unshift":"push"](()=>{i=x,n(0,i)})}const $=()=>n(3,l=!0);function M(x){wi[x?"unshift":"push"](()=>{o=x,n(1,o)})}function C(x){wi[x?"unshift":"push"](()=>{a=x,n(2,a)})}return[i,o,a,l,c,r,h,p,w,T,$,M,C]}class M0 extends No{constructor(t){super(),Vo(this,t,V0,N0,es,{})}}function L0(e){let t,n,r;return n=new M0({}),{c(){t=N("div"),lr(n.$$.fragment),this.h()},l(i){t=V(i,"DIV",{class:!0});var s=Y(t);cr(n.$$.fragment,s),s.forEach(A),this.h()},h(){y(t,"class","bg-base-100 px-[10px] py-5")},m(i,s){G(i,t,s),ur(n,t,null),r=!0},i(i){r||(we(n.$$.fragment,i),r=!0)},o(i){Ee(n.$$.fragment,i),r=!1},d(i){i&&A(t),hr(n)}}}function x0(e){let t,n=`เราอยากให้ลงลายมือชื่อบนกระดาษมากกว่าออนไลน์ เพราะประกาศของกกต.
			เขียนไว้ไม่ชัดเจนว่าลงชื่อทางออนไลน์ได้หรือไม่ได้
			จึงต้องรวบรวมชื่อบนกระดาษให้ได้ 50,000 เป็นอย่างน้อยก่อน`,r,i,s=`<h1 class="heading-responsive-01">วิธีที่ 1 : เดินทางไปลงชื่อที่จุดตั้งโต๊ะ</h1> <a href="/locations" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดูสถานที่ลงชื่อ
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.33332 0C5.40622 0 3 2.28256 3 5.53844C3 6.70035 3.27369 7.50866 3.78205 8.40382L7.97434 15.7884C8.00983 15.8525 8.06184 15.9059 8.12497 15.9432C8.1881 15.9804 8.26004 16 8.33332 16C8.4066 16 8.47854 15.9804 8.54166 15.9432C8.60479 15.9059 8.6568 15.8525 8.69229 15.7884L12.8846 8.40382C13.393 7.50864 13.6666 6.70035 13.6666 5.53844C13.6666 2.28256 11.2604 0 8.33332 0ZM8.33332 0.82051C10.8441 0.82051 12.8461 2.67673 12.8461 5.53844C12.8461 6.58135 12.6437 7.17112 12.173 7.99999L8.33332 14.7564L4.49359 7.99999C4.02289 7.17114 3.82051 6.58135 3.82051 5.53844C3.82051 2.67673 5.82255 0.82051 8.33332 0.82051ZM8.33332 3.28204C9.47107 3.28204 10.3846 4.19558 10.3846 5.33332C10.3846 6.47104 9.47106 7.38459 8.33332 7.38459C7.19557 7.38459 6.28204 6.47104 6.28204 5.33332C6.28204 4.19558 7.19557 3.28204 8.33332 3.28204Z" fill="white"></path></svg></a>`,o,a,l="หรือ",c,u,h=`<h1 class="heading-responsive-01 mb-3">วิธีที่ 2 : ดาวน์โหลดแบบฟอร์มมากรอก</h1> <div class="border-t grid gap-2 py-5"><p class="heading-03">1. ดาวน์โหลดแบบฟอร์ม และพิมพ์ลงกระดาษ A4</p> <a target="_blank" href="https://pin.ski/3Qtz6l3" class="btn btn-block btn-primary text-[16px] normal-case heading-03 text-base-100">ดาวน์โหลดแบบฟอร์ม
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M13.5 1.5H2.5C2.23478 1.5 1.98043 1.60536 1.79289 1.79289C1.60536 1.98043 1.5 2.23478 1.5 2.5V13.5C1.5 13.7652 1.60536 14.0196 1.79289 14.2071C1.98043 14.3946 2.23478 14.5 2.5 14.5H13.5C13.7652 14.5 14.0196 14.3946 14.2071 14.2071C14.3946 14.0196 14.5 13.7652 14.5 13.5V2.5C14.5 2.23478 14.3946 1.98043 14.2071 1.79289C14.0196 1.60536 13.7652 1.5 13.5 1.5ZM13.5 2.5V4.5H2.5V2.5H13.5ZM8.5 5.5H13.5V9H8.5V5.5ZM7.5 9H2.5V5.5H7.5V9ZM2.5 10H7.5V13.5H2.5V10ZM8.5 13.5V10H13.5V13.5H8.5Z" fill="white"></path></svg></a></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">2. ลงลายมือชื่อบนแบบฟอร์ม</p> <p>ชวนคนใกล้ๆ ตัวมาร่วมลงชื่อให้เต็มแผ่นเลยก็ได้</p> <img class="mx-auto" src="/register-form.svg" alt="register-form"/></div> <div class="border-t grid gap-2 py-5"><p class="heading-03">3. ส่งเอกสารรวบรวมรายชื่อมายังสำนักงาน iLaw</p> <div class="grid gap-1"><p>3.1. นำส่งด้วยตัวเองที่ iLaw</p> <a href="https://goo.gl/maps/PM5nXuVFUv5GCUZw7" class="link px-6 py-2 text-center text-accent font-bold heading-03">ดูแผนที่</a></div> <div class="grid gap-1"><p>3.2. ส่งไปรษณีย์ (ต้องใช้บริการไปรษณีย์ไทยเท่านั้น)</p> <p class="p-2 font-semibold bg-[#F2F2F2] text-center">ตู้ ปณ.79 ปณศ.สามเสนใน เขตพญาไท กรุงเทพฯ ประเทศไทย 10400 โทร.
						0996786031</p></div></div>`;return{c(){t=N("p"),t.textContent=n,r=ut(),i=N("div"),i.innerHTML=s,o=ut(),a=N("p"),a.textContent=l,c=ut(),u=N("div"),u.innerHTML=h,this.h()},l(d){t=V(d,"P",{"data-svelte-h":!0}),St(t)!=="svelte-ri6d4r"&&(t.textContent=n),r=ht(d),i=V(d,"DIV",{class:!0,"data-svelte-h":!0}),St(i)!=="svelte-1kllz1y"&&(i.innerHTML=s),o=ht(d),a=V(d,"P",{"data-svelte-h":!0}),St(a)!=="svelte-nl1k6i"&&(a.textContent=l),c=ht(d),u=V(d,"DIV",{class:!0,"data-svelte-h":!0}),St(u)!=="svelte-kk9bq7"&&(u.innerHTML=h),this.h()},h(){y(i,"class","p-4 bg-base-100 grid gap-3 text-left"),y(u,"class","p-4 bg-base-100 text-left")},m(d,f){G(d,t,f),G(d,r,f),G(d,i,f),G(d,o,f),G(d,a,f),G(d,c,f),G(d,u,f)},i:Xe,o:Xe,d(d){d&&(A(t),A(r),A(i),A(o),A(a),A(c),A(u))}}}function F0(e){let t,n,r="ร่วมลงชื่อ",i,s,o="*ผู้มีสิทธิเข้าชื่อต้องอายุ 18 ปีขึ้นไป นับจากวันที่ 20 ส.ค. 2566",a,l,c,u,h,d,f,p,E,w,T,$,M,C,x,U,lt;const st=[x0,L0],Z=[];function It(k,q){return k[0]?0:1}return M=It(e),C=Z[M]=st[M](e),{c(){t=N("div"),n=N("h3"),n.textContent=r,i=ut(),s=N("p"),s.textContent=o,a=ut(),l=N("div"),c=N("button"),u=nn(`แบบกระดาษ
			`),h=Vn("svg"),d=Vn("path"),p=ut(),E=N("button"),w=nn("แบบออนไลน์"),$=ut(),C.c(),this.h()},l(k){t=V(k,"DIV",{class:!0});var q=Y(t);n=V(q,"H3",{class:!0,"data-svelte-h":!0}),St(n)!=="svelte-l3nsqj"&&(n.textContent=r),i=ht(q),s=V(q,"P",{"data-svelte-h":!0}),St(s)!=="svelte-k2zji"&&(s.textContent=o),a=ht(q),l=V(q,"DIV",{class:!0});var ot=Y(l);c=V(ot,"BUTTON",{class:!0});var Pt=Y(c);u=rn(Pt,`แบบกระดาษ
			`),h=Mn(Pt,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var qt=Y(h);d=Mn(qt,"path",{d:!0,fill:!0}),Y(d).forEach(A),qt.forEach(A),Pt.forEach(A),p=ht(ot),E=V(ot,"BUTTON",{class:!0});var at=Y(E);w=rn(at,"แบบออนไลน์"),at.forEach(A),ot.forEach(A),$=ht(q),C.l(q),q.forEach(A),this.h()},h(){y(n,"class","heading-responsive-03"),y(d,"d","M11.5 3.33838C10.8584 3.33838 10.2311 3.5283 9.69722 3.88422C9.16336 4.24013 8.74678 4.7461 8.5 5.33838C8.25322 4.7461 7.83664 4.24013 7.30278 3.88422C6.76891 3.5283 6.14163 3.33838 5.5 3.33838C4.70435 3.33838 3.94129 3.65445 3.37868 4.21706C2.81607 4.77967 2.5 5.54273 2.5 6.33838C2.5 9.40088 8.5 14.3384 8.5 14.3384C8.5 14.3384 14.5 9.40088 14.5 6.33838C14.5 5.54273 14.1839 4.77967 13.6213 4.21706C13.0587 3.65445 12.2956 3.33838 11.5 3.33838Z"),y(d,"fill","black"),y(h,"xmlns","http://www.w3.org/2000/svg"),y(h,"width","17"),y(h,"height","17"),y(h,"viewBox","0 0 17 17"),y(h,"fill","none"),y(c,"class",f="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(e[0]?"":"opacity-50")),y(E,"class",T="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(e[0]?"opacity-50":"")),y(l,"class","join w-full"),y(t,"class","text-center grid gap-3 body-02-normal")},m(k,q){G(k,t,q),R(t,n),R(t,i),R(t,s),R(t,a),R(t,l),R(l,c),R(c,u),R(c,h),R(h,d),R(l,p),R(l,E),R(E,w),R(t,$),Z[M].m(t,null),x=!0,U||(lt=[Ci(c,"click",e[1]),Ci(E,"click",e[2])],U=!0)},p(k,[q]){(!x||q&1&&f!==(f="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(k[0]?"":"opacity-50")))&&y(c,"class",f),(!x||q&1&&T!==(T="btn join-item flex-1 heading-03 gap-1 py-2 px-6 "+(k[0]?"opacity-50":"")))&&y(E,"class",T);let ot=M;M=It(k),M!==ot&&(oc(),Ee(Z[ot],1,1,()=>{Z[ot]=null}),ac(),C=Z[M],C||(C=Z[M]=st[M](k),C.c()),we(C,1),C.m(t,null))},i(k){x||(we(C),x=!0)},o(k){Ee(C),x=!1},d(k){k&&A(t),Z[M].d(),U=!1,gd(lt)}}}function U0(e,t,n){let r=!0;return Mo(()=>{new URLSearchParams(window.location.search).has("online")&&n(0,r=!1)}),[r,()=>n(0,r=!0),()=>n(0,r=!1)]}class W0 extends No{constructor(t){super(),Vo(this,t,U0,F0,es,{})}}export{W0 as default};

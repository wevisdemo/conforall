function y(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function ot(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function B(t){return t()}function M(){return Object.create(null)}function x(t){t.forEach(B)}function S(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function T(t){return Object.keys(t).length===0}function ut(t,...n){if(t==null){for(const i of n)i(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e,i){if(t){const r=L(t,n,e,i);return t[0](r)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)l[u]=n.dirty[u]|r[u];return l}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,l){if(r){const c=L(n,e,i,l);t.p(c,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){const n={};for(const e in t)n[e]=!0;return n}function ht(t){return t&&S(t.destroy)?t.destroy:y}let w=!1;function q(){w=!0}function z(){w=!1}function F(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function G(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&o.push(a)}n=o}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let o=0;o<n.length;o++){const s=n[o].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:F(1,r,b=>n[e[b]].claim_order,s))-1;i[o]=e[a]+1;const f=a+1;e[f]=o,r=Math.max(f,r)}const l=[],c=[];let u=n.length-1;for(let o=e[r]+1;o!=0;o=i[o-1]){for(l.push(n[o-1]);u>=o;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);l.reverse(),c.sort((o,s)=>o.claim_order-s.claim_order);for(let o=0,s=0;o<c.length;o++){for(;s<l.length&&c[o].claim_order>=l[s].claim_order;)s++;const a=s<l.length?l[s]:null;t.insertBefore(c[o],a)}}function J(t,n){if(w){for(G(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function mt(t,n,e){w&&!e?J(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function K(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Q(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function yt(){return j(" ")}function gt(){return j("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $t(t){return t.dataset.svelteH}function R(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,r=!1){V(t);const l=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const o=e(u);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const o=e(u);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function W(t,n,e,i){return P(t,r=>r.nodeName===n,r=>{const l=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||l.push(u.name)}l.forEach(c=>r.removeAttribute(c))},()=>i(n))}function wt(t,n,e){return W(t,n,e,Q)}function U(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function vt(t){return U(t," ")}function Et(t,n){n=""+n,t.data!==n&&(t.data=n)}function Nt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}let g;function p(t){g=t}function I(){if(!g)throw new Error("Function called outside component initialization");return g}function St(t){I().$$.on_mount.push(t)}function jt(t){I().$$.on_destroy.push(t)}const h=[],O=[];let m=[];const k=[],X=Promise.resolve();let E=!1;function Y(){E||(E=!0,X.then(D))}function N(t){m.push(t)}const v=new Set;let _=0;function D(){if(_!==0)return;const t=g;do{try{for(;_<h.length;){const n=h[_];_++,p(n),Z(n.$$)}}catch(n){throw h.length=0,_=0,n}for(p(null),h.length=0,_=0;O.length;)O.pop()();for(let n=0;n<m.length;n+=1){const e=m[n];v.has(e)||(v.add(e),e())}m.length=0}while(h.length);for(;k.length;)k.pop()();E=!1,v.clear(),p(t)}function Z(t){if(t.fragment!==null){t.update(),x(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}function tt(t){const n=[],e=[];m.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),m=n}const $=new Set;let d;function At(){d={r:0,c:[],p:d}}function Ct(){d.r||x(d.c),d=d.p}function nt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Mt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ot(t){t&&t.c()}function kt(t,n){t&&t.l(n)}function et(t,n,e){const{fragment:i,after_update:r}=t.$$;i&&i.m(n,e),N(()=>{const l=t.$$.on_mount.map(B).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...l):x(l),t.$$.on_mount=[]}),r.forEach(N)}function it(t,n){const e=t.$$;e.fragment!==null&&(tt(e.after_update),x(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){t.$$.dirty[0]===-1&&(h.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,r,l,c,u=[-1]){const o=g;p(t);const s=t.$$={fragment:null,ctx:[],props:l,update:y,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(o?o.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:n.target||o.$$.root};c&&c(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,b,...A)=>{const C=A.length?A[0]:b;return s.ctx&&r(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&rt(t,f)),b}):[],s.update(),a=!0,x(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){q();const f=R(n.target);s.fragment&&s.fragment.l(f),f.forEach(K)}else s.fragment&&s.fragment.c();n.intro&&nt(t.$$.fragment),et(t,n.target,n.anchor),z(),D()}p(o)}class Lt{$$=void 0;$$set=void 0;$destroy(){it(this,1),this.$destroy=y}$on(n,e){if(!S(e))return y;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!T(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);export{kt as A,$t as B,bt as C,J as D,et as E,xt as F,ht as G,it as H,x as I,j as J,U as K,Et as L,ot as M,I as N,p as O,D as P,pt as Q,Lt as S,yt as a,gt as b,wt as c,R as d,Q as e,K as f,vt as g,Nt as h,Bt as i,mt as j,At as k,Ct as l,nt as m,y as n,jt as o,_t as p,St as q,ut as r,st as s,Mt as t,O as u,lt as v,at as w,dt as x,ft as y,Ot as z};

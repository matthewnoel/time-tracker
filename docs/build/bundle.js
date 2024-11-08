var app=function(){"use strict";"undefined"!=typeof window&&(window.__svelte||={v:new Set}).v.add("5");const t=Symbol();var e=Array.isArray,n=Array.from,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyDescriptors,i=Object.prototype,u=Array.prototype,a=Object.getPrototypeOf;function s(t){return"function"==typeof t}const f=()=>{};function c(t){return t()}function v(t){for(var e=0;e<t.length;e++)t[e]()}const d=32,p=128,h=256,g=512,y=1024,m=2048,b=4096,w=8192,_=32768,x=1<<19,k=Symbol("$state"),S=Symbol("");function E(t){return t===this.v}function $(t,e){return t!=t?e==e:t!==e||null!==t&&"object"==typeof t||"function"==typeof t}function C(t){return!$(t,this.v)}let L=!1;function O(t){return{f:0,v:t,reactions:null,equals:E,version:0}}function A(t){return P(O(t))}function j(t,e=!1){const n=O(t);return e||(n.equals=C),L&&null!==Nt&&null!==Nt.l&&(Nt.l.s??=[]).push(n),n}function N(t,e=!1){return P(j(t,e))}function P(t){return null!==xt&&2&xt.f&&(null===$t?$t=[t]:$t.push(t)),t}function D(t,e){return null!==xt&&Dt()&&18&xt.f&&(null===$t||!$t.includes(t))&&function(){throw new Error("state_unsafe_mutation")}(),T(t,e)}function T(t,e){return t.equals(e)||(t.v=e,t.version=Pt(),M(t,y),Dt()&&null!==St&&St.f&g&&!(St.f&d)&&(null!==Ct&&Ct.includes(t)?(Gt(St,y),Wt(St)):null===Ot?function(t){Ot=t}([t]):Ot.push(t))),e}function M(t,e){var n=t.reactions;if(null!==n)for(var r=Dt(),o=n.length,l=0;l<o;l++){var i=n[l],u=i.f;u&y||(r||i!==St)&&(Gt(i,e),640&u&&(2&u?M(i,m):Wt(i)))}}function q(t){var e=1026;null===St?e|=p:St.f|=x;const n={children:null,ctx:Nt,deps:null,equals:E,f:e,fn:t,reactions:null,v:null,version:0,parent:St};if(null!==xt&&2&xt.f){var r=xt;(r.children??=[]).push(n)}return n}function I(t){const e=q(t);return e.equals=C,e}function R(t){var e=t.children;if(null!==e){t.children=null;for(var n=0;n<e.length;n+=1){var r=e[n];2&r.f?F(r):rt(r)}}}function z(t){var e,n=St;Et(t.parent);try{R(t),e=Mt(t)}finally{Et(n)}return e}function B(t){var e=z(t);Gt(t,(jt||t.f&p)&&null!==t.deps?m:g),t.equals(e)||(t.v=e,t.version=Pt())}function F(t){R(t),It(t,0),Gt(t,w),t.v=t.children=t.deps=t.ctx=t.reactions=null}function W(t){null===St&&null===xt&&function(){throw new Error("effect_orphan")}(),null!==xt&&xt.f&p&&function(){throw new Error("effect_in_unowned_derived")}(),yt&&function(){throw new Error("effect_in_teardown")}()}function K(t,e,n,r=!0){var o=!!(64&t),l=St,i={ctx:Nt,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|y,first:null,fn:e,last:null,next:null,parent:o?null:l,prev:null,teardown:null,transitions:null,version:0};if(n){var u=gt;try{mt(!0),Rt(i),i.f|=16384}catch(t){throw rt(i),t}finally{mt(u)}}else null!==e&&Wt(i);if(!(n&&null===i.deps&&null===i.first&&null===i.nodes_start&&null===i.teardown&&!(i.f&x))&&!o&&r&&(null!==l&&function(t,e){var n=e.last;null===n?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}(i,l),null!==xt&&2&xt.f)){var a=xt;(a.children??=[]).push(i)}return i}function H(t){const e=K(8,null,!1);return Gt(e,g),e.teardown=t,e}function V(t){if(W(),!(null!==St&&!!(St.f&d)&&null!==Nt&&!Nt.m))return Z(t);var e=Nt;(e.e??=[]).push({fn:t,effect:St,reaction:xt})}function Z(t){return K(4,t,!1)}function G(t,e){var n=Nt,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=J((()=>{t(),r.ran||(r.ran=!0,D(n.l.r2,!0),Vt(e))}))}function U(){var t=Nt;J((()=>{if(Ht(t.l.r2)){for(var e of t.l.r1){var n=e.effect;n.f&g&&Gt(n,m),Tt(n)&&Rt(n),e.ran=!1}t.l.r2.v=!1}}))}function J(t){return K(8,t,!0)}function Q(t){return X(t)}function X(t,e=0){return K(24|e,t,!0)}function Y(t,e=!0){return K(40,t,!0,e)}function tt(t){var e=t.teardown;if(null!==e){const t=yt,n=xt;bt(!0),kt(null);try{e.call(null)}finally{bt(t),kt(n)}}}function et(t){var e=t.deriveds;if(null!==e){t.deriveds=null;for(var n=0;n<e.length;n+=1)F(e[n])}}function nt(t,e=!1){var n=t.first;for(t.first=t.last=null;null!==n;){var r=n.next;rt(n,e),n=r}}function rt(t,e=!0){var n=!1;if((e||262144&t.f)&&null!==t.nodes_start){for(var r=t.nodes_start,o=t.nodes_end;null!==r;){var l=r===o?null:ie(r);r.remove(),r=l}n=!0}nt(t,e&&!n),et(t),It(t,0),Gt(t,w);var i=t.transitions;if(null!==i)for(const t of i)t.stop();tt(t);var u=t.parent;null!==u&&null!==u.first&&ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function ot(t){var e=t.parent,n=t.prev,r=t.next;null!==n&&(n.next=r),null!==r&&(r.prev=n),null!==e&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function lt(t,e){var n=[];ut(t,n,!0),it(n,(()=>{rt(t),e&&e()}))}function it(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var o of t)o.out(r)}else e()}function ut(t,e,n){if(!(t.f&b)){if(t.f^=b,null!==t.transitions)for(const r of t.transitions)(r.is_global||n)&&e.push(r);for(var r=t.first;null!==r;){var o=r.next;ut(r,e,!!(!!(r.f&_)||!!(r.f&d))&&n),r=o}}}function at(t){st(t,!0)}function st(t,e){if(t.f&b){Tt(t)&&Rt(t),t.f^=b;for(var n=t.first;null!==n;){var r=n.next;st(n,!!(!!(n.f&_)||!!(n.f&d))&&e),n=r}if(null!==t.transitions)for(const n of t.transitions)(n.is_global||e)&&n.in()}}let ft=!1,ct=[];function vt(){ft=!1;const t=ct.slice();ct=[],v(t)}function dt(t){ft||(ft=!0,queueMicrotask(vt)),ct.push(t)}function pt(t){throw new Error("lifecycle_outside_component")}let ht=!1,gt=!1,yt=!1;function mt(t){gt=t}function bt(t){yt=t}let wt=[],_t=0,xt=null;function kt(t){xt=t}let St=null;function Et(t){St=t}let $t=null;let Ct=null,Lt=0,Ot=null;let At=0,jt=!1,Nt=null;function Pt(){return++At}function Dt(){return!L||null!==Nt&&null===Nt.l}function Tt(t){var e=t.f;if(e&y)return!0;if(e&m){var n=t.deps,r=!!(e&p);if(null!==n){var o;if(e&h){for(o=0;o<n.length;o++)(n[o].reactions??=[]).push(t);t.f^=h}for(o=0;o<n.length;o++){var l=n[o];if(Tt(l)&&B(l),!r||null===St||jt||l?.reactions?.includes(t)||(l.reactions??=[]).push(t),l.version>t.version)return!0}}r||Gt(t,g)}return!1}function Mt(t){var e=Ct,n=Lt,r=Ot,o=xt,l=jt,i=$t,u=Nt,a=t.f;Ct=null,Lt=0,Ot=null,xt=96&a?null:t,jt=!gt&&!!(a&p),$t=null,Nt=t.ctx;try{var s=(0,t.fn)(),f=t.deps;if(null!==Ct){var c;if(It(t,Lt),null!==f&&Lt>0)for(f.length=Lt+Ct.length,c=0;c<Ct.length;c++)f[Lt+c]=Ct[c];else t.deps=f=Ct;if(!jt)for(c=Lt;c<f.length;c++)(f[c].reactions??=[]).push(t)}else null!==f&&Lt<f.length&&(It(t,Lt),f.length=Lt);return s}finally{Ct=e,Lt=n,Ot=r,xt=o,jt=l,$t=i,Nt=u}}function qt(t,e){let n=e.reactions;if(null!==n){var r=n.indexOf(t);if(-1!==r){var o=n.length-1;0===o?n=e.reactions=null:(n[r]=n[o],n.pop())}}null===n&&2&e.f&&(null===Ct||!Ct.includes(e))&&(Gt(e,m),384&e.f||(e.f^=h),It(e,0))}function It(t,e){var n=t.deps;if(null!==n)for(var r=e;r<n.length;r++)qt(t,n[r])}function Rt(t){var e=t.f;if(!(e&w)){Gt(t,g);var n=St;St=t;try{16&e?function(t){for(var e=t.first;null!==e;){var n=e.next;e.f&d||rt(e),e=n}}(t):nt(t),et(t),tt(t);var r=Mt(t);t.teardown="function"==typeof r?r:null,t.version=At}catch(t){!function(t){throw t}(t)}finally{St=n}}}function zt(){_t>1e3&&(_t=0,function(){throw new Error("effect_update_depth_exceeded")}()),_t++}function Bt(t){var e=t.length;if(0!==e)for(var n=0;n<e;n++){var r=t[n];12288&r.f||!Tt(r)||(Rt(r),null===r.deps&&null===r.first&&null===r.nodes_start&&(null===r.teardown?ot(r):r.fn=null))}}function Ft(){if(ht=!1,_t>1001)return;const t=wt;wt=[],function(t){var e=t.length;if(0!==e){zt();var n=gt;gt=!0;try{for(var r=0;r<e;r++){var o=t[r];o.f&g||(o.f^=g);var l=[];Kt(o,l),Bt(l)}}finally{gt=n}}}(t),ht||(_t=0)}function Wt(t){ht||(ht=!0,queueMicrotask(Ft));for(var e=t;null!==e.parent;){var n=(e=e.parent).f;if(96&n){if(!(n&g))return;e.f^=g}}wt.push(e)}function Kt(t,e){var n=t.first,r=[];t:for(;null!==n;){var o=n.f,l=!!(o&d);if(!(l&&!!(o&g)||o&b))if(8&o){l?n.f^=g:Tt(n)&&Rt(n);var i=n.first;if(null!==i){n=i;continue}}else 4&o&&r.push(n);var u=n.next;if(null===u){let e=n.parent;for(;null!==e;){if(t===e)break t;var a=e.next;if(null!==a){n=a;continue t}e=e.parent}}n=u}for(var s=0;s<r.length;s++)i=r[s],e.push(i),Kt(i,e)}function Ht(t){var e=t.f,n=!!(2&e);if(n&&e&w){var r=z(t);return F(t),r}if(null!==xt){null!==$t&&$t.includes(t)&&function(){throw new Error("state_unsafe_local_read")}();var o=xt.deps;null===Ct&&null!==o&&o[Lt]===t?Lt++:null===Ct?Ct=[t]:Ct.push(t),null!==Ot&&null!==St&&St.f&g&&!(St.f&d)&&Ot.includes(t)&&(Gt(St,y),Wt(St))}else if(n&&null===t.deps){var l=t,i=l.parent;null===i||i.deriveds?.includes(l)||(i.deriveds??=[]).push(l)}return n&&Tt(l=t)&&B(l),t.v}function Vt(t){const e=xt;try{return xt=null,t()}finally{xt=e}}const Zt=-3585;function Gt(t,e){t.f=t.f&Zt|e}function Ut(t,e=!1,n){Nt={p:Nt,c:null,e:null,m:!1,s:t,x:null,l:null},L&&!e&&(Nt.l={s:null,u:null,r1:[],r2:O(!1)})}function Jt(t){const e=Nt;if(null!==e){const t=e.e;if(null!==t){var n=St,r=xt;e.e=null;try{for(var o=0;o<t.length;o++){var l=t[o];Et(l.effect),kt(l.reaction),Z(l.fn)}}finally{Et(n),kt(r)}}Nt=e.p,e.m=!0}return{}}function Qt(t){if("object"==typeof t&&t&&!(t instanceof EventTarget))if(k in t)Xt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];"object"==typeof n&&n&&k in n&&Xt(n)}}function Xt(t,e=new Set){if(!("object"!=typeof t||null===t||t instanceof EventTarget||e.has(t))){e.add(t),t instanceof Date&&t.getTime();for(let n in t)try{Xt(t[n],e)}catch(t){}const n=a(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=l(n);for(let n in e){const r=e[n].get;if(r)try{r.call(t)}catch(t){}}}}}function Yt(n,r=null,l){if("object"!=typeof n||null===n||k in n)return n;const s=a(n);if(s!==i&&s!==u)return n;var f,c=new Map,v=e(n),d=O(0);return v&&c.set("length",O(n.length)),new Proxy(n,{defineProperty(t,e,n){"value"in n&&!1!==n.configurable&&!1!==n.enumerable&&!1!==n.writable||function(){throw new Error("state_descriptors_fixed")}();var r=c.get(e);return void 0===r?(r=O(n.value),c.set(e,r)):D(r,Yt(n.value,f)),!0},deleteProperty(e,n){var r=c.get(n);if(void 0===r)n in e&&c.set(n,O(t));else{if(v&&"string"==typeof n){var o=c.get("length"),l=Number(n);Number.isInteger(l)&&l<o.v&&D(o,l)}D(r,t),te(d)}return!0},get(e,r,l){if(r===k)return n;var i=c.get(r),u=r in e;if(void 0!==i||u&&!o(e,r)?.writable||(i=O(Yt(u?e[r]:t,f)),c.set(r,i)),void 0!==i){var a=Ht(i);return a===t?void 0:a}return Reflect.get(e,r,l)},getOwnPropertyDescriptor(e,n){var r=Reflect.getOwnPropertyDescriptor(e,n);if(r&&"value"in r){var o=c.get(n);o&&(r.value=Ht(o))}else if(void 0===r){var l=c.get(n),i=l?.v;if(void 0!==l&&i!==t)return{enumerable:!0,configurable:!0,value:i,writable:!0}}return r},has(e,n){if(n===k)return!0;var r=c.get(n),l=void 0!==r&&r.v!==t||Reflect.has(e,n);if((void 0!==r||null!==St&&(!l||o(e,n)?.writable))&&(void 0===r&&(r=O(l?Yt(e[n],f):t),c.set(n,r)),Ht(r)===t))return!1;return l},set(e,n,r,l){var i=c.get(n),u=n in e;if(v&&"length"===n)for(var a=r;a<i.v;a+=1){var s=c.get(a+"");void 0!==s?D(s,t):a in e&&(s=O(t),c.set(a+"",s))}void 0===i?u&&!o(e,n)?.writable||(D(i=O(void 0),Yt(r,f)),c.set(n,i)):(u=i.v!==t,D(i,Yt(r,f)));var p=Reflect.getOwnPropertyDescriptor(e,n);if(p?.set&&p.set.call(l,r),!u){if(v&&"string"==typeof n){var h=c.get("length"),g=Number(n);Number.isInteger(g)&&g>=h.v&&D(h,g+1)}te(d)}return!0},ownKeys(e){Ht(d);var n=Reflect.ownKeys(e).filter((e=>{var n=c.get(e);return void 0===n||n.v!==t}));for(var[r,o]of c)o.v===t||r in e||n.push(r);return n},setPrototypeOf(){!function(){throw new Error("state_prototype_fixed")}()}})}function te(t,e=1){D(t,t.v+e)}var ee,ne,re;function oe(t=""){return document.createTextNode(t)}function le(t){return ne.call(t)}function ie(t){return re.call(t)}function ue(t,e){return le(t)}function ae(t,e){var n=le(t);return n instanceof Comment&&""===n.data?ie(n):n}function se(t,e=1,n=!1){let r=t;for(;e--;)r=ie(r);return r}let fe=!1,ce=!1;function ve(t){var e=xt,n=St;kt(null),Et(null);try{return t()}finally{kt(e),Et(n)}}function de(t,e,n,r=n){t.addEventListener(e,(()=>ve(n)));const o=t.__on_r;t.__on_r=o?()=>{o(),r()}:r,ce||(ce=!0,document.addEventListener("reset",(t=>{Promise.resolve().then((()=>{if(!t.defaultPrevented)for(const e of t.target.elements)e.__on_r?.()}))}),{capture:!0}))}const pe=new Set,he=new Set;function ge(t,e,n,r,o){var l={capture:r,passive:o},i=function(t,e,n,r){function o(t){if(r.capture||me.call(e,t),!t.cancelBubble)return ve((()=>n.call(this,t)))}return t.startsWith("pointer")||t.startsWith("touch")||"wheel"===t?dt((()=>{e.addEventListener(t,o,r)})):e.addEventListener(t,o,r),o}(t,e,n,l);e!==document.body&&e!==window&&e!==document||H((()=>{e.removeEventListener(t,i,l)}))}function ye(t){for(var e=0;e<t.length;e++)pe.add(t[e]);for(var n of he)n(t)}function me(t){var n=this,o=n.ownerDocument,l=t.type,i=t.composedPath?.()||[],u=i[0]||t.target,a=0,s=t.__root;if(s){var f=i.indexOf(s);if(-1!==f&&(n===document||n===window))return void(t.__root=n);var c=i.indexOf(n);if(-1===c)return;f<=c&&(a=f)}if((u=i[a]||t.target)!==n){r(t,"currentTarget",{configurable:!0,get:()=>u||o});var v=xt,d=St;kt(null),Et(null);try{for(var p,h=[];null!==u;){var g=u.assignedSlot||u.parentNode||u.host||null;try{var y=u["__"+l];if(void 0!==y&&!u.disabled)if(e(y)){var[m,...b]=y;m.apply(u,[t,...b])}else y.call(u,t)}catch(t){p?h.push(t):p=t}if(t.cancelBubble||g===n||null===g)break;u=g}if(p){for(let t of h)queueMicrotask((()=>{throw t}));throw p}}finally{t.__root=n,delete t.currentTarget,kt(v),Et(d)}}}function be(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function we(t,e){var n=St;null===n.nodes_start&&(n.nodes_start=t,n.nodes_end=e)}function _e(t,e){var n,r=!!(1&e),o=!!(2&e),l=!t.startsWith("<!>");return()=>{void 0===n&&(n=be(l?t:"<!>"+t),r||(n=le(n)));var e=o?document.importNode(n,!0):n.cloneNode(!0);r?we(le(e),e.lastChild):we(e,e);return e}}function xe(){var t=document.createDocumentFragment(),e=document.createComment(""),n=oe();return t.append(e,n),we(e,n),t}function ke(t,e){null!==t&&t.before(e)}const Se=["touchstart","touchmove"];function Ee(t){return Se.includes(t)}let $e=!0;function Ce(t,e){var n=null==e?"":"object"==typeof e?e+"":e;n!==(t.__t??=t.nodeValue)&&(t.__t=n,t.nodeValue=null==n?"":n+"")}const Le=new Map;let Oe=new WeakMap;function Ae(t,e,n,r=null,o=!1){var l=t,i=null,u=null,a=null;X((()=>{a!==(a=!!e())&&(a?(i?at(i):i=Y((()=>n(l))),u&&lt(u,(()=>{u=null}))):(u?at(u):r&&(u=Y((()=>r(l)))),i&&lt(i,(()=>{i=null}))))}),o?_:0)}let je=null;function Ne(t,e){return e}function Pe(t,r,o,l,i,u=null){var a=t,s={flags:r,items:new Map,first:null};!(4&r)||(a=t.appendChild(oe()));var f=null,c=!1;X((()=>{var t=o(),v=e(t)?t:null==t?[]:n(t),d=v.length;c&&0===d||(c=0===d,function(t,e,r,o,l,i,u){var a,s,f,c,v,d,p=!!(8&l),h=!!(3&l),g=t.length,y=e.items,m=e.first,w=m,_=null,x=[],k=[];if(p)for(d=0;d<g;d+=1)c=u(f=t[d],d),void 0!==(v=y.get(c))&&(v.a?.measure(),(s??=new Set).add(v));for(d=0;d<g;d+=1)if(c=u(f=t[d],d),void 0!==(v=y.get(c))){if(h&&De(v,f,d,l),v.e.f&b&&(at(v.e),p&&(v.a?.unfix(),(s??=new Set).delete(v))),v!==w){if(void 0!==a&&a.has(v)){if(x.length<k.length){var S,E=k[0];_=E.prev;var $=x[0],C=x[x.length-1];for(S=0;S<x.length;S+=1)Me(x[S],E,r);for(S=0;S<k.length;S+=1)a.delete(k[S]);qe(e,$.prev,C.next),qe(e,_,$),qe(e,C,E),w=E,_=C,d-=1,x=[],k=[]}else a.delete(v),Me(v,w,r),qe(e,v.prev,v.next),qe(e,v,null===_?e.first:_.next),qe(e,_,v),_=v;continue}for(x=[],k=[];null!==w&&w.k!==c;)!i&&w.e.f&b||(a??=new Set).add(w),k.push(w),w=w.next;if(null===w)continue;v=w}x.push(v),_=v,w=v.next}else{_=Te(w?w.e.nodes_start:r,e,_,null===_?e.first:_.next,f,c,d,o,l),y.set(c,_),x=[],k=[],w=_.next}if(null!==w||void 0!==a){for(var L=void 0===a?[]:n(a);null!==w;)!i&&w.e.f&b||L.push(w),w=w.next;var O=L.length;if(O>0){var A=4&l&&0===g?r:null;if(p){for(d=0;d<O;d+=1)L[d].a?.measure();for(d=0;d<O;d+=1)L[d].a?.fix()}!function(t,e,n,r){for(var o=[],l=e.length,i=0;i<l;i++)ut(e[i].e,o,!0);var u=l>0&&0===o.length&&null!==n;if(u){var a=n.parentNode;a.textContent="",a.append(n),r.clear(),qe(t,e[0].prev,e[l-1].next)}it(o,(()=>{for(var n=0;n<l;n++){var o=e[n];u||(r.delete(o.k),qe(t,o.prev,o.next)),rt(o.e,!u)}}))}(e,L,A,y)}}p&&dt((()=>{if(void 0!==s)for(v of s)v.a?.apply()}));St.first=e.first&&e.first.e,St.last=_&&_.e}(v,s,a,i,r,!!(xt.f&b),l),null!==u&&(0===d?f?at(f):f=Y((()=>u(a))):null!==f&&lt(f,(()=>{f=null}))),o())}))}function De(t,e,n,r){1&r&&T(t.v,e),2&r?T(t.i,n):t.i=n}function Te(t,e,n,r,o,l,i,u,a){var s=je,f=!!(1&a)?!(16&a)?j(o):O(o):o,c=2&a?O(i):i,v={i:c,v:f,k:l,a:null,e:null,prev:n,next:r};je=v;try{return v.e=Y((()=>u(t,f,c)),fe),v.e.prev=n&&n.e,v.e.next=r&&r.e,null===n?e.first=v:(n.next=v,n.e.next=v.e),null!==r&&(r.prev=v,r.e.prev=v.e),v}finally{je=s}}function Me(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,l=t.e.nodes_start;l!==r;){var i=ie(l);o.before(l),l=i}}function qe(t,e,n){null===e?t.first=n:(e.next=n,e.e.next=n&&n.e),null!==n&&(n.prev=e,n.e.prev=e&&e.e)}function Ie(t,e){var n=t.__attributes??={};n.value!==(n.value=e)&&(t.value!==e||0===e&&"PROGRESS"===t.nodeName)&&(t.value=e)}function Re(t,e,n,r){var o=t.__attributes??={};o[e]!==(o[e]=n)&&("style"===e&&"__styles"in t&&(t.__styles={}),"loading"===e&&(t[S]=n),null==n?t.removeAttribute(e):"string"!=typeof n&&function(t){var e,n=ze.get(t.nodeName);if(n)return n;ze.set(t.nodeName,n=[]);var r=a(t),o=Element.prototype;for(;o!==r;){for(var i in e=l(r))e[i].set&&n.push(i);r=a(r)}return n}(t).includes(e)?t[e]=n:t.setAttribute(e,n))}var ze=new Map;function Be(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}const Fe={tick:t=>requestAnimationFrame(t),now:()=>performance.now(),tasks:new Set};function We(t){Fe.tasks.forEach((e=>{e.c(t)||(Fe.tasks.delete(e),e.f())})),0!==Fe.tasks.size&&Fe.tick(We)}function Ke(t){let e;return 0===Fe.tasks.size&&Fe.tick(We),{promise:new Promise((n=>{Fe.tasks.add(e={c:t,f:n})})),abort(){Fe.tasks.delete(e)}}}function He(t,e){t.dispatchEvent(new CustomEvent(e))}function Ve(t){if("float"===t)return"cssFloat";if("offset"===t)return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return 1===e.length?e[0]:e[0]+e.slice(1).map((t=>t[0].toUpperCase()+t.slice(1))).join("")}function Ze(t){const e={},n=t.split(";");for(const t of n){const[n,r]=t.split(":");if(!n||void 0===r)break;e[Ve(n.trim())]=r.trim()}return e}const Ge=t=>t;function Ue(t,e,n,r){var o,l,i,u=!!(1&t),a=!!(2&t),s=!!(4&t),f=u&&a?"both":u?"in":"out",c=e.inert;function v(){var t=xt,l=St;kt(null),Et(null);try{return o??=n()(e,r?.()??{},{direction:f})}finally{kt(t),Et(l)}}var d={is_global:s,in(){if(e.inert=c,!u)return i?.abort(),void i?.reset?.();a||l?.abort(),He(e,"introstart"),l=Je(e,v(),i,1,(()=>{He(e,"introend"),l?.abort(),l=o=void 0}))},out(t){if(!a)return t?.(),void(o=void 0);e.inert=!0,He(e,"outrostart"),i=Je(e,v(),l,0,(()=>{He(e,"outroend"),t?.()}))},stop:()=>{l?.abort(),i?.abort()}},p=St;if((p.transitions??=[]).push(d),u&&$e){var h=s;if(!h){for(var g=p.parent;g&&g.f&_;)for(;(g=g.parent)&&!(16&g.f););h=!g||!!(16384&g.f)}h&&Z((()=>{Vt((()=>d.in()))}))}}function Je(t,e,n,r,o){var l=1===r;if(s(e)){var i,u=!1;return dt((()=>{if(!u){var a=e({direction:l?"in":"out"});i=Je(t,a,n,r,o)}})),{abort:()=>{u=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(n?.deactivate(),!e?.duration)return o(),{abort:f,deactivate:f,reset:f,t:()=>r};const{delay:a=0,css:c,tick:v,easing:d=Ge}=e;var p=[];if(l&&void 0===n&&(v&&v(0,1),c)){var h=Ze(c(0,1));p.push(h,h)}var g=()=>1-r,y=t.animate(p,{duration:a});return y.onfinish=()=>{var l=n?.t()??1-r;n?.abort();var i=r-l,u=e.duration*Math.abs(i),a=[];if(u>0){if(c)for(var s=Math.ceil(u/(1e3/60)),f=0;f<=s;f+=1){var p=l+i*d(f/s),h=c(p,1-p);a.push(Ze(h))}g=()=>{var t=y.currentTime;return l+i*d(t/u)},v&&Ke((()=>{if("running"!==y.playState)return!1;var t=g();return v(t,1-t),!0}))}(y=t.animate(a,{duration:u,fill:"forwards"})).onfinish=()=>{g=()=>r,v?.(r,1-r),o()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=f)},deactivate:()=>{o=f},reset:()=>{0===r&&v?.(1,0)},t:()=>g()}}function Qe(t){var e=t.type;return"number"===e||"range"===e}function Xe(t){return""===t?null:+t}function Ye(t=!1){const e=Nt,n=e.l.u;if(!n)return;let r=()=>Qt(e.s);if(t){let t=0,n={};const o=q((()=>{let r=!1;const o=e.s;for(const t in o)o[t]!==n[t]&&(n[t]=o[t],r=!0);return r&&t++,t}));r=()=>Ht(o)}var o;n.b.length&&(o=()=>{tn(e,r),v(n.b)},W(),J(o)),V((()=>{const t=Vt((()=>n.m.map(c)));return()=>{for(const e of t)"function"==typeof e&&e()}})),n.a.length&&V((()=>{tn(e,r),v(n.a)}))}function tn(t,e){if(t.l.s)for(const e of t.l.s)Ht(e);e()}function en(t){var e,n;null===Nt&&pt(),L&&null!==Nt.l?(e=Nt,n=e.l,n.u??={a:[],b:[],m:[]}).m.push(t):V((()=>{const e=Vt(t);if("function"==typeof e)return e}))}let nn=!1;function rn(t,e,n){const r=n[e]??={store:null,source:j(void 0),unsubscribe:f};if(r.store!==t)if(r.unsubscribe(),r.store=t??null,null==t)r.source.v=void 0,r.unsubscribe=f;else{var o=!0;r.unsubscribe=function(t,e,n){if(null==t)return e(void 0),f;const r=Vt((()=>t.subscribe(e,n)));return r.unsubscribe?()=>r.unsubscribe():r}(t,(t=>{o?r.source.v=t:D(r.source,t)})),o=!1}return Ht(r.source)}function on(){const t={};return H((()=>{for(var e in t){t[e].unsubscribe()}})),t}const ln={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(s(r)&&(r=r()),"object"==typeof r&&null!==r&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let l=t.props[r];s(l)&&(l=l());const i=o(l,e);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(s(r)&&(r=r()),"object"==typeof r&&null!==r&&e in r){const t=o(r,e);return t&&!t.configurable&&(t.configurable=!0),t}}},has(t,e){for(let n of t.props)if(s(n)&&(n=n()),null!=n&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props){s(n)&&(n=n());for(const t in n)e.includes(t)||e.push(t)}return e}};function un(t){for(var e=St,n=St;null!==e&&!(96&e.f);)e=e.parent;try{return Et(e),t()}finally{Et(n)}}function an(t,e,n,r){var l,i=!!(1&n),u=!L||!!(2&n),a=!!(8&n),s=!!(16&n),f=!1;a?[l,f]=function(t){var e=nn;try{return nn=!1,[t(),nn]}finally{nn=e}}((()=>t[e])):l=t[e];var c,v=o(t,e)?.set,d=r,p=!0,h=!1,g=()=>(h=!0,p&&(p=!1,d=s?Vt(r):r),d);if(void 0===l&&void 0!==r&&(v&&u&&function(){throw new Error("props_invalid_value")}(),l=g(),v&&v(l)),u)c=()=>{var n=t[e];return void 0===n?g():(p=!0,h=!1,n)};else{var y=un((()=>(i?q:I)((()=>t[e]))));y.f|=65536,c=()=>{var t=Ht(y);return void 0!==t&&(d=void 0),void 0===t?d:t}}if(!(4&n))return c;if(v){var m=t.$$legacy;return function(t,e){return arguments.length>0?(u&&e&&!m&&!f||v(e?c():t),t):c()}}var b=!1,w=j(l),_=un((()=>q((()=>{var t=c(),e=Ht(w);return b?(b=!1,e):w.v=t}))));return i||(_.equals=C),function(t,e){if(arguments.length>0){const n=e?Ht(_):u&&a?Yt(t):t;return _.equals(n)||(b=!0,D(w,n),h&&void 0!==d&&(d=n),Vt((()=>Ht(_)))),t}return Ht(_)}}L=!0;const sn=t=>t;function fn(t){const e=t-1;return e*e*e+1}function cn(t){const e="string"==typeof t&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}function vn(t,{delay:e=0,duration:n=400,easing:r=sn}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:t=>"opacity: "+t*o}}function dn(t,{delay:e=0,duration:n=400,easing:r=fn,x:o=0,y:l=0,opacity:i=0}={}){const u=getComputedStyle(t),a=+u.opacity,s="none"===u.transform?"":u.transform,f=a*(1-i),[c,v]=cn(o),[d,p]=cn(l);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${s} translate(${(1-t)*c}${v}, ${(1-t)*d}${p});\n\t\t\topacity: ${a-f*e}`}}function pn(t){return t}function hn(t){const e=t-1;return e*e*e+1}function gn(t,{from:e,to:n},r={}){var o=getComputedStyle(t),l=function(t){if("currentCSSZoom"in t)return t.currentCSSZoom;var e=t,n=1;for(;null!==e;)n*=+getComputedStyle(e).zoom,e=e.parentElement;return n}(t),i="none"===o.transform?"":o.transform,[u,a]=o.transformOrigin.split(" ").map(parseFloat),s=e.width/n.width,f=e.height/n.height,c=(e.left+s*u-(n.left+u))/l,v=(e.top+f*a-(n.top+a))/l,{delay:d=0,duration:p=t=>120*Math.sqrt(t),easing:h=hn}=r;return{delay:d,duration:"function"==typeof p?p(Math.sqrt(c*c+v*v)):p,easing:h,css:(t,e)=>`transform: ${i} scale(${t+e*s}, ${t+e*f}) translate(${e*c}px, ${e*v}px);`}}const yn=[];function mn(t,e=f){let n=null;const r=new Set;function o(e){if($(t,e)&&(t=e,n)){const e=!yn.length;for(const e of r)e[1](),yn.push(e,t);if(e){for(let t=0;t<yn.length;t+=2)yn[t][0](yn[t+1]);yn.length=0}}}function l(e){o(e(t))}return{set:o,update:l,subscribe:function(i,u=f){const a=[i,u];return r.add(a),1===r.size&&(n=e(o,l)||f),i(t),()=>{r.delete(a),0===r.size&&n&&(n(),n=null)}}}}const bn={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256}};const wn=function(){const{subscribe:t,update:e}=mn(new Array),n={};let r=0;function o(t){return t instanceof Object}return{subscribe:t,push:function(t,l){const i={target:"default",...o(t)?t:{...l,msg:t}},u=n[i.target]||{},a={...bn,...u,...i,theme:{...u.theme,...i.theme},classes:[...u.classes||[],...i.classes||[]],id:++r};return e((t=>a.reversed?[...t,a]:[a,...t])),r},pop:function(t){e((e=>{if(!e.length||0===t)return[];if("function"==typeof t)return e.filter((e=>t(e)));if(o(t))return e.filter((e=>e.target!==t.target));const n=t||Math.max(...e.map((t=>t.id)));return e.filter((t=>t.id!==n))}))},set:function(t,n){const r=o(t)?t:{...n,id:t};e((t=>{const e=t.findIndex((t=>t.id===r.id));return e>-1&&(t[e]={...t[e],...r}),t}))},_init:function(t="default",e={}){return n[t]=e,n}}}();function _n(t){return"[object Date]"===Object.prototype.toString.call(t)}function xn(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>xn(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(_n(t)&&_n(e)){const n=t.getTime(),r=e.getTime()-n;return t=>new Date(n+t*r)}const n=Object.keys(e),r={};return n.forEach((n=>{r[n]=xn(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=r[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}var kn=_e('<div class="_toastBtn pe svelte-l65oht" role="button" tabindex="0"></div>'),Sn=_e('<div role="status" class="_toastItem svelte-l65oht"><div class="_toastMsg svelte-l65oht"><!></div> <!> <progress class="_toastBar svelte-l65oht"></progress></div>');function En(t,e){Ut(e,!1);const n=on(),r=()=>rn(c,"$progress",n);let o,l,i=an(e,"item",12),u=N(i().initial),a=N(Ht(u)),s=N(!1),f=N({});const c=function(t,e={}){const n=mn(t);let r,o=t;function l(l,i){if(o=l,null==t)return n.set(t=l),Promise.resolve();let u=r,a=!1,{delay:s=0,duration:f=400,easing:c=pn,interpolate:v=xn}={...e,...i};if(0===f)return u&&(u.abort(),u=null),n.set(t=o),Promise.resolve();const d=Fe.now()+s;let p;return r=Ke((e=>{if(e<d)return!0;a||(p=v(t,l),"function"==typeof f&&(f=f(t,l)),a=!0),u&&(u.abort(),u=null);const r=e-d;return r>f?(n.set(t=l),!1):(n.set(t=p(c(r/f))),!0)})),r.promise}return{set:l,update:(e,n)=>l(e(o,t),n),subscribe:n.subscribe}}(i().initial,{duration:i().duration,easing:pn});function v(t){t&&(l=t),wn.pop(i().id)}function d(){1!==r()&&0!==r()||v()}function p(){Ht(s)||r()===Ht(u)||(c.set(r(),{duration:0}),D(s,!0))}function h(){if(Ht(s)){const t=i().duration,e=t-t*((r()-Ht(a))/(Ht(u)-Ht(a)));c.set(Ht(u),{duration:e}).then(d),D(s,!1)}}function g(t,e="undefined"){return typeof t===e}var y;en((function(t=document){if(g(t.hidden))return;const e=()=>t.hidden?p():h(),n="visibilitychange";t.addEventListener(n,e),o=()=>t.removeEventListener(n,e),e()})),y=()=>{i().onpop&&i().onpop(i().id,{event:l}),o&&o()},null===Nt&&pt(),en((()=>()=>Vt(y))),G((()=>(Ht(u),Qt(i()),r())),(()=>{Ht(u)!==i().next&&(D(u,i().next),D(a,r()),D(s,!1),c.set(Ht(u)).then(d))})),G((()=>Qt(i())),(()=>{if(i().component){const{props:t={},sendIdTo:e}=i().component;D(f,{...t,...e&&{[e]:i().id}})}})),G((()=>Qt(i())),(()=>{g(i().progress)||i(i().next=i().progress,!0)})),U(),Ye();var m=Sn(),b=ue(m);Ae(ue(b),(()=>i().component),(t=>{var e=xe();!function(t,e,n){var r,o,l=t;X((()=>{r!==(r=e())&&(o&&(lt(o),o=null),r&&(o=Y((()=>n(l,r)))))}),_)}(ae(e),(()=>i().component.src),((t,e)=>{e(t,function(...t){return new Proxy({props:t},ln)}((()=>Ht(f))))})),ke(t,e)}),(t=>{var e=xe();!function(t,e){var n,r=t,o="";X((()=>{o!==(o=e()??"")&&(void 0!==n&&(rt(n),n=void 0),""!==o&&(n=Y((()=>{var t=be(o+"");we(le(t),t.lastChild),r.before(t)}))))}))}(ae(e),(()=>i().msg)),ke(t,e)}));var w=se(b,2);Ae(w,(()=>i().dismissable),(t=>{var e=kn();ge("click",e,(t=>v(t))),ge("keydown",e,(t=>{t instanceof KeyboardEvent&&["Enter"," "].includes(t.key)&&v(t)})),ke(t,e)}));var x=se(w,2);Q((()=>{Be(m,"pe",i().pausable),Be(b,"pe",i().component),Ie(x,r())})),ge("mouseenter",m,(()=>{i().pausable&&p()})),ge("mouseleave",m,h),ke(t,m),Jt()}var $n=_e("<li><!></li>"),Cn=_e('<ul class="_toastContainer svelte-yh90az"></ul>');function Ln(t,e){Ut(e,!1);const n=on(),r=()=>rn(wn,"$toast",n);let o=an(e,"options",24,(()=>({}))),l=an(e,"target",8,"default"),i=N([]);G((()=>(Qt(l()),Qt(o()))),(()=>{wn._init(l(),o())})),G((()=>(r(),Qt(l()))),(()=>{D(i,r().filter((t=>t.target===l())))})),U(),Ye();var u=Cn();Pe(u,13,(()=>Ht(i)),(t=>t.id),((t,e)=>{var n=$n();const r=I((()=>`${Ht(e).classes?.join(" ")??""} svelte-yh90az`)),o=I((()=>{return(t=Ht(e).theme)?Object.keys(t).reduce(((e,n)=>`${e}${n}:${t[n]};`),""):void 0;var t}));En(ue(n),{get item(){return Ht(e)}}),Q((()=>{var t,e,l,i;t=n,e=Ht(r),l=t.__className,i=function(t){return null==t?"":t}(e),l!==i&&(null==e?t.removeAttribute("class"):t.className=i,t.__className=i),Re(n,"style",Ht(o))})),Ue(1,n,(()=>dn),(()=>Ht(e).intro)),Ue(2,n,(()=>vn)),function(t,e,n){var r,o,l,i=je,u=null;i.a??={element:t,measure(){r=this.element.getBoundingClientRect()},apply(){if(l?.abort(),o=this.element.getBoundingClientRect(),r.left!==o.left||r.right!==o.right||r.top!==o.top||r.bottom!==o.bottom){const t=e()(this.element,{from:r,to:o},n?.());l=Je(this.element,t,void 0,1,(()=>{l?.abort(),l=void 0}))}},fix(){if(!t.getAnimations().length){var{position:e,width:n,height:o}=getComputedStyle(t);if("absolute"!==e&&"fixed"!==e){var l=t.style;u={position:l.position,width:l.width,height:l.height,transform:l.transform},l.position="absolute",l.width=n,l.height=o;var i=t.getBoundingClientRect();if(r.left!==i.left||r.top!==i.top){var a=`translate(${r.left-i.left}px, ${r.top-i.top}px)`;l.transform=l.transform?`${l.transform} ${a}`:a}}}},unfix(){if(u){var e=t.style;e.position=u.position,e.width=u.width,e.height=u.height,e.transform=u.transform}}},i.a.element=t}(n,(()=>gn),(()=>({duration:200}))),ke(t,n)})),ke(t,u),Jt()}var On=_e('<input type="button" data-theme-toggle="">');ye(["click"]);const An=()=>{const t=document.querySelectorAll("input[type=text]");t.length<1||t[0].focus()};var jn=_e('<h2 class="svelte-1uopwy1">Latest Log</h2> <table class="svelte-1uopwy1"><thead><tr><th colspan="1">Log Time</th><th colspan="1">Duration</th><th colspan="1">Activity</th></tr></thead><tbody><tr><td> </td><td> </td><td> </td></tr></tbody></table>',1),Nn=_e("<tr><td> </td><td> </td><td> </td></tr>"),Pn=_e('<h2 class="svelte-1uopwy1">Full Summary</h2> <table class="svelte-1uopwy1"><thead><tr><th colspan="1">Log Time</th><th colspan="1">Duration</th><th colspan="1">Activity</th></tr></thead><tbody></tbody></table> <input type="button" value="New Day" class="svelte-1uopwy1">',1),Dn=_e('<input class="floating svelte-1uopwy1" type="button" value="🖋️">'),Tn=_e('<!> <h1 class="svelte-1uopwy1">Time Log</h1> <div class="form-wrapper svelte-1uopwy1"><form action="" class="svelte-1uopwy1"><div class="svelte-1uopwy1"><label for="activity">&nbsp;Activity:</label> <br> <input type="text" name="Activity" id="activity" class="svelte-1uopwy1"></div> <input type="submit" value="Log Time" class="svelte-1uopwy1"></form></div> <!> <!> <!> <div id="theme-wrapper" class="svelte-1uopwy1"><!></div> <footer class="svelte-1uopwy1"><a href="https://github.com/matthewnoel/time-log" target="_blank" class="svelte-1uopwy1">The Code</a> <a href="https://raw.githubusercontent.com/matthewnoel/time-log/main/third-party-licenses.txt" target="_blank" class="svelte-1uopwy1">Third-Party Licenses</a></footer>',1);ye(["click"]);var Mn=function(t,e){return function(t,{target:e,anchor:r,props:l={},events:i,context:u,intro:a=!0}){!function(){if(void 0===ee){ee=window;var t=Element.prototype,e=Node.prototype;ne=o(e,"firstChild").get,re=o(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}();var s=new Set,f=t=>{for(var n=0;n<t.length;n++){var r=t[n];if(!s.has(r)){s.add(r);var o=Ee(r);e.addEventListener(r,me,{passive:o});var l=Le.get(r);void 0===l?(document.addEventListener(r,me,{passive:o}),Le.set(r,1)):Le.set(r,l+1)}}};f(n(pe)),he.add(f);var c=void 0,v=function(t){const e=K(64,t,!0);return()=>{rt(e)}}((()=>{var n=r??e.appendChild(oe());return Y((()=>{u&&(Ut({}),Nt.c=u);i&&(l.$$events=i),$e=a,c=t(n,l)||{},$e=!0,u&&Jt()})),()=>{for(var t of s){e.removeEventListener(t,me);var o=Le.get(t);0==--o?(document.removeEventListener(t,me),Le.delete(t)):Le.set(t,o)}he.delete(f),Oe.delete(c),n!==r&&n.parentNode?.removeChild(n)}}));return Oe.set(c,v),c}(t,e)}((function(t,e){Ut(e,!0);const n=()=>{const t=Object.assign({},window.localStorage);return delete t.theme,t},r=()=>D(f,Yt(n())),o=()=>{var t;const e=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:"";window.localStorage.clear(),window.localStorage.setItem("theme",e),r(),wn.push("Cleared yesterday's activities!")},l=()=>{var t,e;const n=`${Math.floor(Date.now()/6e4)}`;if(null!=window.localStorage.getItem(n))return void wn.push("Cannot update twice per-minute.");(null===(e=null===(t=Ht(c)[Ht(c).length-1])||void 0===t?void 0:t.value)||void 0===e?void 0:e.toLowerCase().trim())==Ht(a).toLowerCase().trim()&&window.localStorage.removeItem(Ht(c)[Ht(c).length-1].key),window.localStorage.setItem(n,Ht(a)),D(a,""),r()},i=t=>{const e=new Date(6e4*t),n=e.getHours(),r=e.getMinutes();return`${n}:${1===`${r}`.length?0:""}${r}`},u=(t,e)=>null==e?"N/A":t-e+" min";let a=A(void 0),s=A(void 0),f=A(Yt(n())),c=q((()=>Object.entries(Ht(f)).map((t=>({key:t[0],value:t[1]}))).sort(((t,e)=>Number(t.key)-Number(e.key)))));var v=Tn(),d=ae(v);Ln(d,{});var p=se(d,4),h=ue(p),g=q((()=>{return t=l,function(...e){return e[0].preventDefault(),t?.apply(this,e)};var t})),y=ue(h),m=se(ue(y),4);Z((()=>function(t,e,n=e){var r=Dt();de(t,"input",(()=>{var o=Qe(t)?Xe(t.value):t.value;n(o),r&&o!==(o=e())&&(t.value=o??"")})),J((()=>{var n=e();Qe(t)&&n===Xe(t.value)||("date"!==t.type||n||t.value)&&n!==t.value&&(t.value=n??"")}))}(m,(()=>Ht(a)),(t=>D(a,t))))),function(t,e,n){Z((()=>{var r=Vt((()=>e(t,n?.())||{}));if(r?.destroy)return()=>r.destroy()}))}(m,(t=>(t=>{const e=()=>{D(s,!0),t&&"function"==typeof t.select&&t.select()},n=()=>{D(s,!1)};return t.addEventListener("focus",e),t.addEventListener("blur",n),{destroy(){t.removeEventListener("focus",e),t.removeEventListener("blur",n)}}})(t)));var b=se(y,2),w=se(p,2);Ae(w,(()=>Ht(c).length>1),(t=>{var e=jn(),n=se(ae(e),2),r=se(ue(n)),o=ue(r),l=ue(o),a=ue(l);Q((()=>Ce(a,i(Ht(c)[Ht(c).length-1].key))));var s=se(l),f=ue(s);Q((()=>Ce(f,u(Ht(c)[Ht(c).length-1].key,Ht(c)[Ht(c).length-2].key))));var v=ue(se(s));Q((()=>Ce(v,Ht(c)[Ht(c).length-1].value))),ke(t,e)}));var _=se(w,2);Ae(_,(()=>Ht(c).length>0),(t=>{var e=Pn(),n=se(ae(e),2);Pe(se(ue(n)),21,(()=>Ht(c)),Ne,((t,e,n)=>{let r=()=>Ht(e).key;var o=Nn(),l=ue(o),a=ue(l);Q((()=>Ce(a,i(r()))));var s=se(l),f=ue(s);Q((()=>Ce(f,u(r(),Ht(c)[n-1]?.key))));var v=ue(se(s));Q((()=>Ce(v,Ht(e).value))),ke(t,o)})),se(n,2).__click=o,ke(t,e)}));var x=se(_,2);Ae(x,(()=>!Ht(s)),(t=>{var e=Dn();e.__click=[An],ke(t,e)})),function(t,e){var n;Ut(e,!0);const r=t=>{D(s,Yt(t===l?"🌞":"🌚")),document.querySelector("html").setAttribute("data-theme",t)},o="light",l="dark",i=null!==(n=localStorage.getItem("theme"))&&void 0!==n?n:"",u=window.matchMedia("(prefers-color-scheme: dark)");let a=(({localStorageTheme:t=i,systemSettingDark:e=u})=>null!==i?i:u.matches?l:o)({localStorageTheme:i,systemSettingDark:u}),s=A("🌞");r(a);var f=On();f.__click=()=>{const t=a===l?o:l;localStorage.setItem("theme",t),r(t),a=t},Q((()=>{Re(f,"aria-label","🌚"===Ht(s)?"Change to dark theme.":"Change to light theme."),Ie(f,Ht(s))})),ke(t,f),Jt()}(ue(se(x,2)),{}),Q((()=>b.disabled=!Ht(a))),ge("submit",h,(function(...t){Ht(g)?.apply(this,t)})),ke(t,v),Jt()}),{target:document.body});return Mn}();
//# sourceMappingURL=bundle.js.map

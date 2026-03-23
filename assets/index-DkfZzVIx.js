function md(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function hd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _l={exports:{}},Ci={},Wl={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr=Symbol.for("react.element"),fd=Symbol.for("react.portal"),gd=Symbol.for("react.fragment"),yd=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),Cd=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Td=Symbol.for("react.memo"),Ad=Symbol.for("react.lazy"),da=Symbol.iterator;function kd(e){return e===null||typeof e!="object"?null:(e=da&&e[da]||e["@@iterator"],typeof e=="function"?e:null)}var Ul={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jl=Object.assign,Fl={};function yn(e,t,n){this.props=e,this.context=t,this.refs=Fl,this.updater=n||Ul}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bl(){}Bl.prototype=yn.prototype;function hs(e,t,n){this.props=e,this.context=t,this.refs=Fl,this.updater=n||Ul}var fs=hs.prototype=new Bl;fs.constructor=hs;jl(fs,yn.prototype);fs.isPureReactComponent=!0;var pa=Array.isArray,Hl=Object.prototype.hasOwnProperty,gs={current:null},zl={key:!0,ref:!0,__self:!0,__source:!0};function Gl(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Hl.call(t,r)&&!zl.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:lr,type:e,key:o,ref:s,props:i,_owner:gs.current}}function xd(e,t){return{$$typeof:lr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ys(e){return typeof e=="object"&&e!==null&&e.$$typeof===lr}function Id(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ma=/\/+/g;function Hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Id(""+e.key):t.toString(36)}function Lr(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case lr:case fd:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Hi(s,0):r,pa(i)?(n="",e!=null&&(n=e.replace(ma,"$&/")+"/"),Lr(i,t,n,"",function(c){return c})):i!=null&&(ys(i)&&(i=xd(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ma,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",pa(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Hi(o,a);s+=Lr(o,t,n,l,i)}else if(l=kd(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Hi(o,a++),s+=Lr(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function yr(e,t,n){if(e==null)return e;var r=[],i=0;return Lr(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Pd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},qr={transition:null},Ed={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:qr,ReactCurrentOwner:gs};function Vl(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:yr,forEach:function(e,t,n){yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yr(e,function(){t++}),t},toArray:function(e){return yr(e,function(t){return t})||[]},only:function(e){if(!ys(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=yn;D.Fragment=gd;D.Profiler=vd;D.PureComponent=hs;D.StrictMode=yd;D.Suspense=Sd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ed;D.act=Vl;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=jl({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=gs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Hl.call(t,l)&&!zl.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:lr,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:Cd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wd,_context:e},e.Consumer=e};D.createElement=Gl;D.createFactory=function(e){var t=Gl.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:bd,render:e}};D.isValidElement=ys;D.lazy=function(e){return{$$typeof:Ad,_payload:{_status:-1,_result:e},_init:Pd}};D.memo=function(e,t){return{$$typeof:Td,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=qr.transition;qr.transition={};try{e()}finally{qr.transition=t}};D.unstable_act=Vl;D.useCallback=function(e,t){return ue.current.useCallback(e,t)};D.useContext=function(e){return ue.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};D.useEffect=function(e,t){return ue.current.useEffect(e,t)};D.useId=function(){return ue.current.useId()};D.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return ue.current.useMemo(e,t)};D.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};D.useRef=function(e){return ue.current.useRef(e)};D.useState=function(e){return ue.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return ue.current.useTransition()};D.version="18.3.1";Wl.exports=D;var b=Wl.exports;const $l=hd(b),Rd=md({__proto__:null,default:$l},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=b,Nd=Symbol.for("react.element"),Dd=Symbol.for("react.fragment"),Md=Object.prototype.hasOwnProperty,Ld=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qd={key:!0,ref:!0,__self:!0,__source:!0};function Ql(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Md.call(t,r)&&!qd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Nd,type:e,key:o,ref:s,props:i,_owner:Ld.current}}Ci.Fragment=Dd;Ci.jsx=Ql;Ci.jsxs=Ql;_l.exports=Ci;var u=_l.exports,yo={},Kl={exports:{}},Se={},Jl={exports:{}},Yl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,R){var N=I.length;I.push(R);e:for(;0<N;){var V=N-1>>>1,X=I[V];if(0<i(X,R))I[V]=R,I[N]=X,N=V;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var R=I[0],N=I.pop();if(N!==R){I[0]=N;e:for(var V=0,X=I.length,fr=X>>>1;V<fr;){var At=2*(V+1)-1,Bi=I[At],kt=At+1,gr=I[kt];if(0>i(Bi,N))kt<X&&0>i(gr,Bi)?(I[V]=gr,I[kt]=N,V=kt):(I[V]=Bi,I[At]=N,V=At);else if(kt<X&&0>i(gr,N))I[V]=gr,I[kt]=N,V=kt;else break e}}return R}function i(I,R){var N=I.sortIndex-R.sortIndex;return N!==0?N:I.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],h=1,m=null,g=3,v=!1,y=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(I){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=I)r(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(c)}}function w(I){if(C=!1,f(I),!y)if(n(l)!==null)y=!0,ji(A);else{var R=n(c);R!==null&&Fi(w,R.startTime-I)}}function A(I,R){y=!1,C&&(C=!1,p(E),E=-1),v=!0;var N=g;try{for(f(R),m=n(l);m!==null&&(!(m.expirationTime>R)||I&&!ye());){var V=m.callback;if(typeof V=="function"){m.callback=null,g=m.priorityLevel;var X=V(m.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?m.callback=X:m===n(l)&&r(l),f(R)}else r(l);m=n(l)}if(m!==null)var fr=!0;else{var At=n(c);At!==null&&Fi(w,At.startTime-R),fr=!1}return fr}finally{m=null,g=N,v=!1}}var k=!1,P=null,E=-1,j=5,O=-1;function ye(){return!(e.unstable_now()-O<j)}function Cn(){if(P!==null){var I=e.unstable_now();O=I;var R=!0;try{R=P(!0,I)}finally{R?bn():(k=!1,P=null)}}else k=!1}var bn;if(typeof d=="function")bn=function(){d(Cn)};else if(typeof MessageChannel<"u"){var ua=new MessageChannel,pd=ua.port2;ua.port1.onmessage=Cn,bn=function(){pd.postMessage(null)}}else bn=function(){S(Cn,0)};function ji(I){P=I,k||(k=!0,bn())}function Fi(I,R){E=S(function(){I(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,ji(A))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var N=g;g=R;try{return I()}finally{g=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,R){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var N=g;g=I;try{return R()}finally{g=N}},e.unstable_scheduleCallback=function(I,R,N){var V=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,I){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=N+X,I={id:h++,callback:R,priorityLevel:I,startTime:N,expirationTime:X,sortIndex:-1},N>V?(I.sortIndex=N,t(c,I),n(l)===null&&I===n(c)&&(C?(p(E),E=-1):C=!0,Fi(w,N-V))):(I.sortIndex=X,t(l,I),y||v||(y=!0,ji(A))),I},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(I){var R=g;return function(){var N=g;g=R;try{return I.apply(this,arguments)}finally{g=N}}}})(Yl);Jl.exports=Yl;var _d=Jl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd=b,be=_d;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xl=new Set,Hn={};function Ut(e,t){cn(e,t),cn(e+"Capture",t)}function cn(e,t){for(Hn[e]=t,e=0;e<t.length;e++)Xl.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vo=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ha={},fa={};function jd(e){return vo.call(fa,e)?!0:vo.call(ha,e)?!1:Ud.test(e)?fa[e]=!0:(ha[e]=!0,!1)}function Fd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bd(e,t,n,r){if(t===null||typeof t>"u"||Fd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var vs=/[\-:]([a-z])/g;function ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vs,ws);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vs,ws);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vs,ws);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function Cs(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bd(t,n,i,r)&&(n=null),r||i===null?jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Wd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vr=Symbol.for("react.element"),zt=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),bs=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),Zl=Symbol.for("react.provider"),ec=Symbol.for("react.context"),Ss=Symbol.for("react.forward_ref"),Co=Symbol.for("react.suspense"),bo=Symbol.for("react.suspense_list"),Ts=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),tc=Symbol.for("react.offscreen"),ga=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=ga&&e[ga]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,zi;function Rn(e){if(zi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zi=t&&t[1]||""}return`
`+zi+e}var Gi=!1;function Vi(e,t){if(!e||Gi)return"";Gi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Gi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Hd(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Vi(e.type,!1),e;case 11:return e=Vi(e.type.render,!1),e;case 1:return e=Vi(e.type,!0),e;default:return""}}function So(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case zt:return"Portal";case wo:return"Profiler";case bs:return"StrictMode";case Co:return"Suspense";case bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ec:return(e.displayName||"Context")+".Consumer";case Zl:return(e._context.displayName||"Context")+".Provider";case Ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ts:return t=e.displayName||null,t!==null?t:So(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return So(e(t))}catch{}}return null}function zd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return So(t);case 8:return t===bs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gd(e){var t=nc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wr(e){e._valueTracker||(e._valueTracker=Gd(e))}function rc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function To(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ya(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ic(e,t){t=t.checked,t!=null&&Cs(e,"checked",t,!1)}function Ao(e,t){ic(e,t);var n=gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&ko(e,t.type,gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function va(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ko(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var On=Array.isArray;function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wa(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(On(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gt(n)}}function oc(e,t){var n=gt(t.value),r=gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Cr,ac=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vd=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){Vd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function lc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function cc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var $d=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Po(e,t){if(t){if($d[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function Eo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Oo=null,rn=null,on=null;function ba(e){if(e=dr(e)){if(typeof Oo!="function")throw Error(T(280));var t=e.stateNode;t&&(t=ki(t),Oo(e.stateNode,e.type,t))}}function uc(e){rn?on?on.push(e):on=[e]:rn=e}function dc(){if(rn){var e=rn,t=on;if(on=rn=null,ba(e),t)for(e=0;e<t.length;e++)ba(t[e])}}function pc(e,t){return e(t)}function mc(){}var $i=!1;function hc(e,t,n){if($i)return e(t,n);$i=!0;try{return pc(e,t,n)}finally{$i=!1,(rn!==null||on!==null)&&(mc(),dc())}}function Gn(e,t){var n=e.stateNode;if(n===null)return null;var r=ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var No=!1;if(Qe)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){No=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{No=!1}function Qd(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Ln=!1,Qr=null,Kr=!1,Do=null,Kd={onError:function(e){Ln=!0,Qr=e}};function Jd(e,t,n,r,i,o,s,a,l){Ln=!1,Qr=null,Qd.apply(Kd,arguments)}function Yd(e,t,n,r,i,o,s,a,l){if(Jd.apply(this,arguments),Ln){if(Ln){var c=Qr;Ln=!1,Qr=null}else throw Error(T(198));Kr||(Kr=!0,Do=c)}}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function fc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sa(e){if(jt(e)!==e)throw Error(T(188))}function Xd(e){var t=e.alternate;if(!t){if(t=jt(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Sa(i),e;if(o===r)return Sa(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function gc(e){return e=Xd(e),e!==null?yc(e):null}function yc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yc(e);if(t!==null)return t;e=e.sibling}return null}var vc=be.unstable_scheduleCallback,Ta=be.unstable_cancelCallback,Zd=be.unstable_shouldYield,ep=be.unstable_requestPaint,$=be.unstable_now,tp=be.unstable_getCurrentPriorityLevel,ks=be.unstable_ImmediatePriority,wc=be.unstable_UserBlockingPriority,Jr=be.unstable_NormalPriority,np=be.unstable_LowPriority,Cc=be.unstable_IdlePriority,bi=null,je=null;function rp(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Me=Math.clz32?Math.clz32:sp,ip=Math.log,op=Math.LN2;function sp(e){return e>>>=0,e===0?32:31-(ip(e)/op|0)|0}var br=64,Sr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Nn(a):(o&=s,o!==0&&(r=Nn(o)))}else s=n&~i,s!==0?r=Nn(s):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Me(t),i=1<<n,r|=e[n],t&=~i;return r}function ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Me(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=ap(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Mo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bc(){var e=br;return br<<=1,!(br&4194240)&&(br=64),e}function Qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Me(t),e[t]=n}function cp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Me(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Me(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var L=0;function Sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tc,Is,Ac,kc,xc,Lo=!1,Tr=[],at=null,lt=null,ct=null,Vn=new Map,$n=new Map,nt=[],up="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Aa(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":lt=null;break;case"mouseover":case"mouseout":ct=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function An(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=dr(t),t!==null&&Is(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function dp(e,t,n,r,i){switch(t){case"focusin":return at=An(at,e,t,n,r,i),!0;case"dragenter":return lt=An(lt,e,t,n,r,i),!0;case"mouseover":return ct=An(ct,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Vn.set(o,An(Vn.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$n.set(o,An($n.get(o)||null,e,t,n,r,i)),!0}return!1}function Ic(e){var t=Et(e.target);if(t!==null){var n=jt(t);if(n!==null){if(t=n.tag,t===13){if(t=fc(n),t!==null){e.blockedOn=t,xc(e.priority,function(){Ac(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ro=r,n.target.dispatchEvent(r),Ro=null}else return t=dr(n),t!==null&&Is(t),e.blockedOn=n,!1;t.shift()}return!0}function ka(e,t,n){_r(e)&&n.delete(t)}function pp(){Lo=!1,at!==null&&_r(at)&&(at=null),lt!==null&&_r(lt)&&(lt=null),ct!==null&&_r(ct)&&(ct=null),Vn.forEach(ka),$n.forEach(ka)}function kn(e,t){e.blockedOn===t&&(e.blockedOn=null,Lo||(Lo=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,pp)))}function Qn(e){function t(i){return kn(i,e)}if(0<Tr.length){kn(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&kn(at,e),lt!==null&&kn(lt,e),ct!==null&&kn(ct,e),Vn.forEach(t),$n.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Ic(n),n.blockedOn===null&&nt.shift()}var sn=Xe.ReactCurrentBatchConfig,Xr=!0;function mp(e,t,n,r){var i=L,o=sn.transition;sn.transition=null;try{L=1,Ps(e,t,n,r)}finally{L=i,sn.transition=o}}function hp(e,t,n,r){var i=L,o=sn.transition;sn.transition=null;try{L=4,Ps(e,t,n,r)}finally{L=i,sn.transition=o}}function Ps(e,t,n,r){if(Xr){var i=qo(e,t,n,r);if(i===null)io(e,t,r,Zr,n),Aa(e,r);else if(dp(i,e,t,n,r))r.stopPropagation();else if(Aa(e,r),t&4&&-1<up.indexOf(e)){for(;i!==null;){var o=dr(i);if(o!==null&&Tc(o),o=qo(e,t,n,r),o===null&&io(e,t,r,Zr,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else io(e,t,r,null,n)}}var Zr=null;function qo(e,t,n,r){if(Zr=null,e=As(r),e=Et(e),e!==null)if(t=jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=fc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function Pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tp()){case ks:return 1;case wc:return 4;case Jr:case np:return 16;case Cc:return 536870912;default:return 16}default:return 16}}var it=null,Es=null,Wr=null;function Ec(){if(Wr)return Wr;var e,t=Es,n=t.length,r,i="value"in it?it.value:it.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Wr=i.slice(e,1<r?1-r:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ar(){return!0}function xa(){return!1}function Te(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ar:xa,this.isPropagationStopped=xa,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ar)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ar)},persist:function(){},isPersistent:Ar}),t}var vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Te(vn),ur=H({},vn,{view:0,detail:0}),fp=Te(ur),Ki,Ji,xn,Si=H({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Ki=e.screenX-xn.screenX,Ji=e.screenY-xn.screenY):Ji=Ki=0,xn=e),Ki)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Ia=Te(Si),gp=H({},Si,{dataTransfer:0}),yp=Te(gp),vp=H({},ur,{relatedTarget:0}),Yi=Te(vp),wp=H({},vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Te(wp),bp=H({},vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sp=Te(bp),Tp=H({},vn,{data:0}),Pa=Te(Tp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xp[e])?!!t[e]:!1}function Os(){return Ip}var Pp=H({},ur,{key:function(e){if(e.key){var t=Ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ep=Te(Pp),Rp=H({},Si,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ea=Te(Rp),Op=H({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),Np=Te(Op),Dp=H({},vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mp=Te(Dp),Lp=H({},Si,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qp=Te(Lp),_p=[9,13,27,32],Ns=Qe&&"CompositionEvent"in window,qn=null;Qe&&"documentMode"in document&&(qn=document.documentMode);var Wp=Qe&&"TextEvent"in window&&!qn,Rc=Qe&&(!Ns||qn&&8<qn&&11>=qn),Ra=" ",Oa=!1;function Oc(e,t){switch(e){case"keyup":return _p.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Up(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Oa=!0,Ra);case"textInput":return e=t.data,e===Ra&&Oa?null:e;default:return null}}function jp(e,t){if(Vt)return e==="compositionend"||!Ns&&Oc(e,t)?(e=Ec(),Wr=Es=it=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var Fp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fp[e.type]:t==="textarea"}function Dc(e,t,n,r){uc(r),t=ei(t,"onChange"),0<t.length&&(n=new Rs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Kn=null;function Bp(e){zc(e,0)}function Ti(e){var t=Kt(e);if(rc(t))return e}function Hp(e,t){if(e==="change")return t}var Mc=!1;if(Qe){var Xi;if(Qe){var Zi="oninput"in document;if(!Zi){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Zi=typeof Da.oninput=="function"}Xi=Zi}else Xi=!1;Mc=Xi&&(!document.documentMode||9<document.documentMode)}function Ma(){_n&&(_n.detachEvent("onpropertychange",Lc),Kn=_n=null)}function Lc(e){if(e.propertyName==="value"&&Ti(Kn)){var t=[];Dc(t,Kn,e,As(e)),hc(Bp,t)}}function zp(e,t,n){e==="focusin"?(Ma(),_n=t,Kn=n,_n.attachEvent("onpropertychange",Lc)):e==="focusout"&&Ma()}function Gp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(Kn)}function Vp(e,t){if(e==="click")return Ti(t)}function $p(e,t){if(e==="input"||e==="change")return Ti(t)}function Qp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Qp;function Jn(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vo.call(t,i)||!qe(e[i],t[i]))return!1}return!0}function La(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qa(e,t){var n=La(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=La(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _c(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kp(e){var t=_c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(r!==null&&Ds(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qa(n,o);var s=qa(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jp=Qe&&"documentMode"in document&&11>=document.documentMode,$t=null,_o=null,Wn=null,Wo=!1;function _a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wo||$t==null||$t!==$r(r)||(r=$t,"selectionStart"in r&&Ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wn&&Jn(Wn,r)||(Wn=r,r=ei(_o,"onSelect"),0<r.length&&(t=new Rs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qt={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},eo={},Wc={};Qe&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function Ai(e){if(eo[e])return eo[e];if(!Qt[e])return e;var t=Qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wc)return eo[e]=t[n];return e}var Uc=Ai("animationend"),jc=Ai("animationiteration"),Fc=Ai("animationstart"),Bc=Ai("transitionend"),Hc=new Map,Wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,t){Hc.set(e,t),Ut(t,[e])}for(var to=0;to<Wa.length;to++){var no=Wa[to],Yp=no.toLowerCase(),Xp=no[0].toUpperCase()+no.slice(1);vt(Yp,"on"+Xp)}vt(Uc,"onAnimationEnd");vt(jc,"onAnimationIteration");vt(Fc,"onAnimationStart");vt("dblclick","onDoubleClick");vt("focusin","onFocus");vt("focusout","onBlur");vt(Bc,"onTransitionEnd");cn("onMouseEnter",["mouseout","mouseover"]);cn("onMouseLeave",["mouseout","mouseover"]);cn("onPointerEnter",["pointerout","pointerover"]);cn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function Ua(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yd(r,t,void 0,e),e.currentTarget=null}function zc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ua(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ua(i,a,c),o=l}}}if(Kr)throw e=Do,Kr=!1,Do=null,e}function _(e,t){var n=t[Ho];n===void 0&&(n=t[Ho]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function ro(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var xr="_reactListening"+Math.random().toString(36).slice(2);function Yn(e){if(!e[xr]){e[xr]=!0,Xl.forEach(function(n){n!=="selectionchange"&&(Zp.has(n)||ro(n,!1,e),ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xr]||(t[xr]=!0,ro("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(Pc(t)){case 1:var i=mp;break;case 4:i=hp;break;default:i=Ps}n=i.bind(null,t,n,e),i=void 0,!No||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function io(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Et(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}hc(function(){var c=o,h=As(n),m=[];e:{var g=Hc.get(e);if(g!==void 0){var v=Rs,y=e;switch(e){case"keypress":if(Ur(n)===0)break e;case"keydown":case"keyup":v=Ep;break;case"focusin":y="focus",v=Yi;break;case"focusout":y="blur",v=Yi;break;case"beforeblur":case"afterblur":v=Yi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=yp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Np;break;case Uc:case jc:case Fc:v=Cp;break;case Bc:v=Mp;break;case"scroll":v=fp;break;case"wheel":v=qp;break;case"copy":case"cut":case"paste":v=Sp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ea}var C=(t&4)!==0,S=!C&&e==="scroll",p=C?g!==null?g+"Capture":null:g;C=[];for(var d=c,f;d!==null;){f=d;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,p!==null&&(w=Gn(d,p),w!=null&&C.push(Xn(d,w,f)))),S)break;d=d.return}0<C.length&&(g=new v(g,y,null,n,h),m.push({event:g,listeners:C}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Ro&&(y=n.relatedTarget||n.fromElement)&&(Et(y)||y[Ke]))break e;if((v||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?Et(y):null,y!==null&&(S=jt(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(C=Ia,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=Ea,w="onPointerLeave",p="onPointerEnter",d="pointer"),S=v==null?g:Kt(v),f=y==null?g:Kt(y),g=new C(w,d+"leave",v,n,h),g.target=S,g.relatedTarget=f,w=null,Et(h)===c&&(C=new C(p,d+"enter",y,n,h),C.target=f,C.relatedTarget=S,w=C),S=w,v&&y)t:{for(C=v,p=y,d=0,f=C;f;f=Bt(f))d++;for(f=0,w=p;w;w=Bt(w))f++;for(;0<d-f;)C=Bt(C),d--;for(;0<f-d;)p=Bt(p),f--;for(;d--;){if(C===p||p!==null&&C===p.alternate)break t;C=Bt(C),p=Bt(p)}C=null}else C=null;v!==null&&ja(m,g,v,C,!1),y!==null&&S!==null&&ja(m,S,y,C,!0)}}e:{if(g=c?Kt(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var A=Hp;else if(Na(g))if(Mc)A=$p;else{A=Gp;var k=zp}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(A=Vp);if(A&&(A=A(e,c))){Dc(m,A,n,h);break e}k&&k(e,g,c),e==="focusout"&&(k=g._wrapperState)&&k.controlled&&g.type==="number"&&ko(g,"number",g.value)}switch(k=c?Kt(c):window,e){case"focusin":(Na(k)||k.contentEditable==="true")&&($t=k,_o=c,Wn=null);break;case"focusout":Wn=_o=$t=null;break;case"mousedown":Wo=!0;break;case"contextmenu":case"mouseup":case"dragend":Wo=!1,_a(m,n,h);break;case"selectionchange":if(Jp)break;case"keydown":case"keyup":_a(m,n,h)}var P;if(Ns)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Vt?Oc(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Rc&&n.locale!=="ko"&&(Vt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Vt&&(P=Ec()):(it=h,Es="value"in it?it.value:it.textContent,Vt=!0)),k=ei(c,E),0<k.length&&(E=new Pa(E,e,null,n,h),m.push({event:E,listeners:k}),P?E.data=P:(P=Nc(n),P!==null&&(E.data=P)))),(P=Wp?Up(e,n):jp(e,n))&&(c=ei(c,"onBeforeInput"),0<c.length&&(h=new Pa("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=P))}zc(m,t)})}function Xn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ei(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gn(e,n),o!=null&&r.unshift(Xn(e,o,i)),o=Gn(e,t),o!=null&&r.push(Xn(e,o,i))),e=e.return}return r}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Gn(n,o),l!=null&&s.unshift(Xn(n,l,a))):i||(l=Gn(n,o),l!=null&&s.push(Xn(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Fa(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Ir(e,t,n){if(t=Fa(t),Fa(e)!==t&&n)throw Error(T(425))}function ti(){}var Uo=null,jo=null;function Fo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Ba=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ba<"u"?function(e){return Ba.resolve(null).then(e).catch(im)}:Bo;function im(e){setTimeout(function(){throw e})}function oo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qn(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ha(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+wn,Zn="__reactProps$"+wn,Ke="__reactContainer$"+wn,Ho="__reactEvents$"+wn,om="__reactListeners$"+wn,sm="__reactHandles$"+wn;function Et(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ha(e);e!==null;){if(n=e[Ue])return n;e=Ha(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ue]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function ki(e){return e[Zn]||null}var zo=[],Jt=-1;function wt(e){return{current:e}}function W(e){0>Jt||(e.current=zo[Jt],zo[Jt]=null,Jt--)}function q(e,t){Jt++,zo[Jt]=e.current,e.current=t}var yt={},ae=wt(yt),he=wt(!1),Mt=yt;function un(e,t){var n=e.type.contextTypes;if(!n)return yt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function fe(e){return e=e.childContextTypes,e!=null}function ni(){W(he),W(ae)}function za(e,t,n){if(ae.current!==yt)throw Error(T(168));q(ae,t),q(he,n)}function Vc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,zd(e)||"Unknown",i));return H({},n,r)}function ri(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yt,Mt=ae.current,q(ae,e),q(he,he.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Vc(e,t,Mt),r.__reactInternalMemoizedMergedChildContext=e,W(he),W(ae),q(ae,e)):W(he),q(he,n)}var He=null,xi=!1,so=!1;function $c(e){He===null?He=[e]:He.push(e)}function am(e){xi=!0,$c(e)}function Ct(){if(!so&&He!==null){so=!0;var e=0,t=L;try{var n=He;for(L=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,xi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),vc(ks,Ct),i}finally{L=t,so=!1}}return null}var Yt=[],Xt=0,ii=null,oi=0,Ae=[],ke=0,Lt=null,ze=1,Ge="";function xt(e,t){Yt[Xt++]=oi,Yt[Xt++]=ii,ii=e,oi=t}function Qc(e,t,n){Ae[ke++]=ze,Ae[ke++]=Ge,Ae[ke++]=Lt,Lt=e;var r=ze;e=Ge;var i=32-Me(r)-1;r&=~(1<<i),n+=1;var o=32-Me(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ze=1<<32-Me(t)+i|n<<i|r,Ge=o+e}else ze=1<<o|n<<i|r,Ge=e}function Ms(e){e.return!==null&&(xt(e,1),Qc(e,1,0))}function Ls(e){for(;e===ii;)ii=Yt[--Xt],Yt[Xt]=null,oi=Yt[--Xt],Yt[Xt]=null;for(;e===Lt;)Lt=Ae[--ke],Ae[ke]=null,Ge=Ae[--ke],Ae[ke]=null,ze=Ae[--ke],Ae[ke]=null}var Ce=null,we=null,U=!1,De=null;function Kc(e,t){var n=xe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Va(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ce=e,we=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ce=e,we=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:ze,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=xe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ce=e,we=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vo(e){if(U){var t=we;if(t){var n=t;if(!Va(e,t)){if(Go(e))throw Error(T(418));t=ut(n.nextSibling);var r=Ce;t&&Va(e,t)?Kc(r,n):(e.flags=e.flags&-4097|2,U=!1,Ce=e)}}else{if(Go(e))throw Error(T(418));e.flags=e.flags&-4097|2,U=!1,Ce=e}}}function $a(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ce=e}function Pr(e){if(e!==Ce)return!1;if(!U)return $a(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fo(e.type,e.memoizedProps)),t&&(t=we)){if(Go(e))throw Jc(),Error(T(418));for(;t;)Kc(e,t),t=ut(t.nextSibling)}if($a(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){we=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}we=null}}else we=Ce?ut(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=we;e;)e=ut(e.nextSibling)}function dn(){we=Ce=null,U=!1}function qs(e){De===null?De=[e]:De.push(e)}var lm=Xe.ReactCurrentBatchConfig;function In(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Er(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Qa(e){var t=e._init;return t(e._payload)}function Yc(e){function t(p,d){if(e){var f=p.deletions;f===null?(p.deletions=[d],p.flags|=16):f.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=ht(p,d),p.index=0,p.sibling=null,p}function o(p,d,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<d?(p.flags|=2,d):f):(p.flags|=2,d)):(p.flags|=1048576,d)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,f,w){return d===null||d.tag!==6?(d=ho(f,p.mode,w),d.return=p,d):(d=i(d,f),d.return=p,d)}function l(p,d,f,w){var A=f.type;return A===Gt?h(p,d,f.props.children,w,f.key):d!==null&&(d.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===et&&Qa(A)===d.type)?(w=i(d,f.props),w.ref=In(p,d,f),w.return=p,w):(w=Vr(f.type,f.key,f.props,null,p.mode,w),w.ref=In(p,d,f),w.return=p,w)}function c(p,d,f,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=fo(f,p.mode,w),d.return=p,d):(d=i(d,f.children||[]),d.return=p,d)}function h(p,d,f,w,A){return d===null||d.tag!==7?(d=Dt(f,p.mode,w,A),d.return=p,d):(d=i(d,f),d.return=p,d)}function m(p,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ho(""+d,p.mode,f),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case vr:return f=Vr(d.type,d.key,d.props,null,p.mode,f),f.ref=In(p,null,d),f.return=p,f;case zt:return d=fo(d,p.mode,f),d.return=p,d;case et:var w=d._init;return m(p,w(d._payload),f)}if(On(d)||Sn(d))return d=Dt(d,p.mode,f,null),d.return=p,d;Er(p,d)}return null}function g(p,d,f,w){var A=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return A!==null?null:a(p,d,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:return f.key===A?l(p,d,f,w):null;case zt:return f.key===A?c(p,d,f,w):null;case et:return A=f._init,g(p,d,A(f._payload),w)}if(On(f)||Sn(f))return A!==null?null:h(p,d,f,w,null);Er(p,f)}return null}function v(p,d,f,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(f)||null,a(d,p,""+w,A);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case vr:return p=p.get(w.key===null?f:w.key)||null,l(d,p,w,A);case zt:return p=p.get(w.key===null?f:w.key)||null,c(d,p,w,A);case et:var k=w._init;return v(p,d,f,k(w._payload),A)}if(On(w)||Sn(w))return p=p.get(f)||null,h(d,p,w,A,null);Er(d,w)}return null}function y(p,d,f,w){for(var A=null,k=null,P=d,E=d=0,j=null;P!==null&&E<f.length;E++){P.index>E?(j=P,P=null):j=P.sibling;var O=g(p,P,f[E],w);if(O===null){P===null&&(P=j);break}e&&P&&O.alternate===null&&t(p,P),d=o(O,d,E),k===null?A=O:k.sibling=O,k=O,P=j}if(E===f.length)return n(p,P),U&&xt(p,E),A;if(P===null){for(;E<f.length;E++)P=m(p,f[E],w),P!==null&&(d=o(P,d,E),k===null?A=P:k.sibling=P,k=P);return U&&xt(p,E),A}for(P=r(p,P);E<f.length;E++)j=v(P,p,E,f[E],w),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?E:j.key),d=o(j,d,E),k===null?A=j:k.sibling=j,k=j);return e&&P.forEach(function(ye){return t(p,ye)}),U&&xt(p,E),A}function C(p,d,f,w){var A=Sn(f);if(typeof A!="function")throw Error(T(150));if(f=A.call(f),f==null)throw Error(T(151));for(var k=A=null,P=d,E=d=0,j=null,O=f.next();P!==null&&!O.done;E++,O=f.next()){P.index>E?(j=P,P=null):j=P.sibling;var ye=g(p,P,O.value,w);if(ye===null){P===null&&(P=j);break}e&&P&&ye.alternate===null&&t(p,P),d=o(ye,d,E),k===null?A=ye:k.sibling=ye,k=ye,P=j}if(O.done)return n(p,P),U&&xt(p,E),A;if(P===null){for(;!O.done;E++,O=f.next())O=m(p,O.value,w),O!==null&&(d=o(O,d,E),k===null?A=O:k.sibling=O,k=O);return U&&xt(p,E),A}for(P=r(p,P);!O.done;E++,O=f.next())O=v(P,p,E,O.value,w),O!==null&&(e&&O.alternate!==null&&P.delete(O.key===null?E:O.key),d=o(O,d,E),k===null?A=O:k.sibling=O,k=O);return e&&P.forEach(function(Cn){return t(p,Cn)}),U&&xt(p,E),A}function S(p,d,f,w){if(typeof f=="object"&&f!==null&&f.type===Gt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case vr:e:{for(var A=f.key,k=d;k!==null;){if(k.key===A){if(A=f.type,A===Gt){if(k.tag===7){n(p,k.sibling),d=i(k,f.props.children),d.return=p,p=d;break e}}else if(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===et&&Qa(A)===k.type){n(p,k.sibling),d=i(k,f.props),d.ref=In(p,k,f),d.return=p,p=d;break e}n(p,k);break}else t(p,k);k=k.sibling}f.type===Gt?(d=Dt(f.props.children,p.mode,w,f.key),d.return=p,p=d):(w=Vr(f.type,f.key,f.props,null,p.mode,w),w.ref=In(p,d,f),w.return=p,p=w)}return s(p);case zt:e:{for(k=f.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(p,d.sibling),d=i(d,f.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=fo(f,p.mode,w),d.return=p,p=d}return s(p);case et:return k=f._init,S(p,d,k(f._payload),w)}if(On(f))return y(p,d,f,w);if(Sn(f))return C(p,d,f,w);Er(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,f),d.return=p,p=d):(n(p,d),d=ho(f,p.mode,w),d.return=p,p=d),s(p)):n(p,d)}return S}var pn=Yc(!0),Xc=Yc(!1),si=wt(null),ai=null,Zt=null,_s=null;function Ws(){_s=Zt=ai=null}function Us(e){var t=si.current;W(si),e._currentValue=t}function $o(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function an(e,t){ai=e,_s=Zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(_s!==e)if(e={context:e,memoizedValue:t,next:null},Zt===null){if(ai===null)throw Error(T(308));Zt=e,ai.dependencies={lanes:0,firstContext:e}}else Zt=Zt.next=e;return t}var Rt=null;function js(e){Rt===null?Rt=[e]:Rt.push(e)}function Zc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,js(t)):(n.next=i.next,i.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function eu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $e(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Je(e,n)}return i=r.interleaved,i===null?(t.next=t,js(r)):(t.next=i.next,i.next=t),r.interleaved=t,Je(e,n)}function jr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var i=e.updateQueue;tt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==s&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(o!==null){var m=i.baseState;s=0,h=c=l=null,a=o;do{var g=a.lane,v=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,C=a;switch(g=t,v=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){m=y.call(v,m,g);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,g=typeof y=="function"?y.call(v,m,g):y,g==null)break e;m=H({},m,g);break e;case 2:tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else v={eventTime:v,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=m):h=h.next=v,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(l=m),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_t|=s,e.lanes=s,e.memoizedState=m}}function Ja(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var pr={},Fe=wt(pr),er=wt(pr),tr=wt(pr);function Ot(e){if(e===pr)throw Error(T(174));return e}function Bs(e,t){switch(q(tr,t),q(er,e),q(Fe,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}W(Fe),q(Fe,t)}function mn(){W(Fe),W(er),W(tr)}function tu(e){Ot(tr.current);var t=Ot(Fe.current),n=Io(t,e.type);t!==n&&(q(er,e),q(Fe,n))}function Hs(e){er.current===e&&(W(Fe),W(er))}var F=wt(0);function ci(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ao=[];function zs(){for(var e=0;e<ao.length;e++)ao[e]._workInProgressVersionPrimary=null;ao.length=0}var Fr=Xe.ReactCurrentDispatcher,lo=Xe.ReactCurrentBatchConfig,qt=0,B=null,J=null,Z=null,ui=!1,Un=!1,nr=0,cm=0;function ie(){throw Error(T(321))}function Gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Vs(e,t,n,r,i,o){if(qt=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fr.current=e===null||e.memoizedState===null?mm:hm,e=n(r,i),Un){o=0;do{if(Un=!1,nr=0,25<=o)throw Error(T(301));o+=1,Z=J=null,t.updateQueue=null,Fr.current=fm,e=n(r,i)}while(Un)}if(Fr.current=di,t=J!==null&&J.next!==null,qt=0,Z=J=B=null,ui=!1,t)throw Error(T(300));return e}function $s(){var e=nr!==0;return nr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function Ee(){if(J===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=J.next;var t=Z===null?B.memoizedState:Z.next;if(t!==null)Z=t,J=e;else{if(e===null)throw Error(T(310));J=e,e={memoizedState:J.memoizedState,baseState:J.baseState,baseQueue:J.baseQueue,queue:J.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function rr(e,t){return typeof t=="function"?t(e):t}function co(e){var t=Ee(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=J,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var h=c.lane;if((qt&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=m,s=r):l=l.next=m,B.lanes|=h,_t|=h}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,qe(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,B.lanes|=o,_t|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uo(e){var t=Ee(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);qe(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function nu(){}function ru(e,t){var n=B,r=Ee(),i=t(),o=!qe(r.memoizedState,i);if(o&&(r.memoizedState=i,me=!0),r=r.queue,Qs(su.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,ir(9,ou.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(T(349));qt&30||iu(n,t,i)}return i}function iu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ou(e,t,n,r){t.value=n,t.getSnapshot=r,au(t)&&lu(e)}function su(e,t,n){return n(function(){au(t)&&lu(e)})}function au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function lu(e){var t=Je(e,1);t!==null&&Le(t,e,1,-1)}function Ya(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:e},t.queue=e,e=e.dispatch=pm.bind(null,B,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cu(){return Ee().memoizedState}function Br(e,t,n,r){var i=We();B.flags|=e,i.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function Ii(e,t,n,r){var i=Ee();r=r===void 0?null:r;var o=void 0;if(J!==null){var s=J.memoizedState;if(o=s.destroy,r!==null&&Gs(r,s.deps)){i.memoizedState=ir(t,n,o,r);return}}B.flags|=e,i.memoizedState=ir(1|t,n,o,r)}function Xa(e,t){return Br(8390656,8,e,t)}function Qs(e,t){return Ii(2048,8,e,t)}function uu(e,t){return Ii(4,2,e,t)}function du(e,t){return Ii(4,4,e,t)}function pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mu(e,t,n){return n=n!=null?n.concat([e]):null,Ii(4,4,pu.bind(null,t,e),n)}function Ks(){}function hu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gu(e,t,n){return qt&21?(qe(n,t)||(n=bc(),B.lanes|=n,_t|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function um(e,t){var n=L;L=n!==0&&4>n?n:4,e(!0);var r=lo.transition;lo.transition={};try{e(!1),t()}finally{L=n,lo.transition=r}}function yu(){return Ee().memoizedState}function dm(e,t,n){var r=mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vu(e))wu(t,n);else if(n=Zc(e,t,n,r),n!==null){var i=ce();Le(n,e,r,i),Cu(n,t,r)}}function pm(e,t,n){var r=mt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vu(e))wu(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,qe(a,s)){var l=t.interleaved;l===null?(i.next=i,js(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Zc(e,t,i,r),n!==null&&(i=ce(),Le(n,e,r,i),Cu(n,t,r))}}function vu(e){var t=e.alternate;return e===B||t!==null&&t===B}function wu(e,t){Un=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xs(e,n)}}var di={readContext:Pe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},mm={readContext:Pe,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Xa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,pu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dm.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:Ya,useDebugValue:Ks,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=Ya(!1),t=e[0];return e=um.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=We();if(U){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),ee===null)throw Error(T(349));qt&30||iu(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xa(su.bind(null,r,o,e),[e]),r.flags|=2048,ir(9,ou.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=We(),t=ee.identifierPrefix;if(U){var n=Ge,r=ze;n=(r&~(1<<32-Me(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=nr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hm={readContext:Pe,useCallback:hu,useContext:Pe,useEffect:Qs,useImperativeHandle:mu,useInsertionEffect:uu,useLayoutEffect:du,useMemo:fu,useReducer:co,useRef:cu,useState:function(){return co(rr)},useDebugValue:Ks,useDeferredValue:function(e){var t=Ee();return gu(t,J.memoizedState,e)},useTransition:function(){var e=co(rr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:yu,unstable_isNewReconciler:!1},fm={readContext:Pe,useCallback:hu,useContext:Pe,useEffect:Qs,useImperativeHandle:mu,useInsertionEffect:uu,useLayoutEffect:du,useMemo:fu,useReducer:uo,useRef:cu,useState:function(){return uo(rr)},useDebugValue:Ks,useDeferredValue:function(e){var t=Ee();return J===null?t.memoizedState=e:gu(t,J.memoizedState,e)},useTransition:function(){var e=uo(rr)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:yu,unstable_isNewReconciler:!1};function Oe(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Qo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pi={isMounted:function(e){return(e=e._reactInternals)?jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),o=$e(r,i);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Le(t,e,i,r),jr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=mt(e),o=$e(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,i),t!==null&&(Le(t,e,i,r),jr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=mt(e),i=$e(n,r);i.tag=2,t!=null&&(i.callback=t),t=dt(e,i,r),t!==null&&(Le(t,e,r,n),jr(t,e,r))}};function Za(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(i,o):!0}function bu(e,t,n){var r=!1,i=yt,o=t.contextType;return typeof o=="object"&&o!==null?o=Pe(o):(i=fe(t)?Mt:ae.current,r=t.contextTypes,o=(r=r!=null)?un(e,i):yt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function el(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pi.enqueueReplaceState(t,t.state,null)}function Ko(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Fs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Pe(o):(o=fe(t)?Mt:ae.current,i.context=un(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Qo(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Pi.enqueueReplaceState(i,i.state,null),li(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function hn(e,t){try{var n="",r=t;do n+=Hd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function po(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Jo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function Su(e,t,n){n=$e(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){mi||(mi=!0,ss=r),Jo(e,t)},n}function Tu(e,t,n){n=$e(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Jo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Jo(e,t),typeof r!="function"&&(pt===null?pt=new Set([this]):pt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function tl(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rm.bind(null,e,t,n),t.then(e,e))}function nl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$e(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var ym=Xe.ReactCurrentOwner,me=!1;function le(e,t,n,r){t.child=e===null?Xc(t,null,n,r):pn(t,e.child,n,r)}function il(e,t,n,r,i){n=n.render;var o=t.ref;return an(t,i),r=Vs(e,t,n,r,o,i),n=$s(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):(U&&n&&Ms(t),t.flags|=1,le(e,t,r,i),t.child)}function ol(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ra(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Au(e,t,o,r,i)):(e=Vr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(s,r)&&e.ref===t.ref)return Ye(e,t,i)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function Au(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Jn(o,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,Ye(e,t,i)}return Yo(e,t,n,r,i)}function ku(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(tn,ve),ve|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(tn,ve),ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(tn,ve),ve|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(tn,ve),ve|=r;return le(e,t,i,n),t.child}function xu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Yo(e,t,n,r,i){var o=fe(n)?Mt:ae.current;return o=un(t,o),an(t,i),n=Vs(e,t,n,r,o,i),r=$s(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ye(e,t,i)):(U&&r&&Ms(t),t.flags|=1,le(e,t,n,i),t.child)}function sl(e,t,n,r,i){if(fe(n)){var o=!0;ri(t)}else o=!1;if(an(t,i),t.stateNode===null)Hr(e,t),bu(t,n,r),Ko(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Pe(c):(c=fe(n)?Mt:ae.current,c=un(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&el(t,s,r,c),tt=!1;var g=t.memoizedState;s.state=g,li(t,r,s,i),l=t.memoizedState,a!==r||g!==l||he.current||tt?(typeof h=="function"&&(Qo(t,n,h,r),l=t.memoizedState),(a=tt||Za(t,n,a,r,g,l,c))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,eu(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Oe(t.type,a),s.props=c,m=t.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pe(l):(l=fe(n)?Mt:ae.current,l=un(t,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||g!==l)&&el(t,s,r,l),tt=!1,g=t.memoizedState,s.state=g,li(t,r,s,i);var y=t.memoizedState;a!==m||g!==y||he.current||tt?(typeof v=="function"&&(Qo(t,n,v,r),y=t.memoizedState),(c=tt||Za(t,n,c,r,g,y,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Xo(e,t,n,r,o,i)}function Xo(e,t,n,r,i,o){xu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ga(t,n,!1),Ye(e,t,o);r=t.stateNode,ym.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=pn(t,e.child,null,o),t.child=pn(t,null,a,o)):le(e,t,a,o),t.memoizedState=r.state,i&&Ga(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?za(e,t.pendingContext,t.pendingContext!==t.context):t.context&&za(e,t.context,!1),Bs(e,t.containerInfo)}function al(e,t,n,r,i){return dn(),qs(i),t.flags|=256,le(e,t,n,r),t.child}var Zo={dehydrated:null,treeContext:null,retryLane:0};function es(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pu(e,t,n){var r=t.pendingProps,i=F.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(F,i&1),e===null)return Vo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Oi(s,r,0,null),e=Dt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=es(n),t.memoizedState=Zo,e):Js(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vm(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ht(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ht(a,o):(o=Dt(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?es(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Zo,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=Oi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rr(e,t,n,r){return r!==null&&qs(r),pn(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=po(Error(T(422))),Rr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Oi({mode:"visible",children:r.children},i,0,null),o=Dt(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&pn(t,e.child,null,s),t.child.memoizedState=es(s),t.memoizedState=Zo,o);if(!(t.mode&1))return Rr(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=po(o,r,void 0),Rr(e,t,s,r)}if(a=(s&e.childLanes)!==0,me||a){if(r=ee,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Je(e,i),Le(r,e,i,-1))}return na(),r=po(Error(T(421))),Rr(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,we=ut(i.nextSibling),Ce=t,U=!0,De=null,e!==null&&(Ae[ke++]=ze,Ae[ke++]=Ge,Ae[ke++]=Lt,ze=e.id,Ge=e.overflow,Lt=t),t=Js(t,r.children),t.flags|=4096,t)}function ll(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$o(e.return,t,n)}function mo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Eu(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(le(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ll(e,n,t);else if(e.tag===19)ll(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(F,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ci(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),mo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ci(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}mo(t,!0,n,null,o);break;case"together":mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ye(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_t|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wm(e,t,n){switch(t.tag){case 3:Iu(t),dn();break;case 5:tu(t);break;case 1:fe(t.type)&&ri(t);break;case 4:Bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(si,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?Pu(e,t,n):(q(F,F.current&1),e=Ye(e,t,n),e!==null?e.sibling:null);q(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Eu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,ku(e,t,n)}return Ye(e,t,n)}var Ru,ts,Ou,Nu;Ru=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ts=function(){};Ou=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ot(Fe.current);var o=null;switch(n){case"input":i=To(e,i),r=To(e,r),o=[];break;case"select":i=H({},i,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":i=xo(e,i),r=xo(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}Po(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Hn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Nu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Pn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cm(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return fe(t.type)&&ni(),oe(t),null;case 3:return r=t.stateNode,mn(),W(he),W(ae),zs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(cs(De),De=null))),ts(e,t),oe(t),null;case 5:Hs(t);var i=Ot(tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ou(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return oe(t),null}if(e=Ot(Fe.current),Pr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ue]=t,r[Zn]=o,e=(t.mode&1)!==0,n){case"dialog":_("cancel",r),_("close",r);break;case"iframe":case"object":case"embed":_("load",r);break;case"video":case"audio":for(i=0;i<Dn.length;i++)_(Dn[i],r);break;case"source":_("error",r);break;case"img":case"image":case"link":_("error",r),_("load",r);break;case"details":_("toggle",r);break;case"input":ya(r,o),_("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},_("invalid",r);break;case"textarea":wa(r,o),_("invalid",r)}Po(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ir(r.textContent,a,e),i=["children",""+a]):Hn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&_("scroll",r)}switch(n){case"input":wr(r),va(r,o,!0);break;case"textarea":wr(r),Ca(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ti)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ue]=t,e[Zn]=r,Ru(e,t,!1,!1),t.stateNode=e;e:{switch(s=Eo(n,r),n){case"dialog":_("cancel",e),_("close",e),i=r;break;case"iframe":case"object":case"embed":_("load",e),i=r;break;case"video":case"audio":for(i=0;i<Dn.length;i++)_(Dn[i],e);i=r;break;case"source":_("error",e),i=r;break;case"img":case"image":case"link":_("error",e),_("load",e),i=r;break;case"details":_("toggle",e),i=r;break;case"input":ya(e,r),i=To(e,r),_("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=H({},r,{value:void 0}),_("invalid",e);break;case"textarea":wa(e,r),i=xo(e,r),_("invalid",e);break;default:i=r}Po(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?cc(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ac(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zn(e,l):typeof l=="number"&&zn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&_("scroll",e):l!=null&&Cs(e,o,l,s))}switch(n){case"input":wr(e),va(e,r,!1);break;case"textarea":wr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?nn(e,!!r.multiple,o,!1):r.defaultValue!=null&&nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ti)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Nu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Ot(tr.current),Ot(Fe.current),Pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(o=r.nodeValue!==n)&&(e=Ce,e!==null))switch(e.tag){case 3:Ir(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ir(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return oe(t),null;case 13:if(W(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&we!==null&&t.mode&1&&!(t.flags&128))Jc(),dn(),t.flags|=98560,o=!1;else if(o=Pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[Ue]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else De!==null&&(cs(De),De=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?Y===0&&(Y=3):na())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return mn(),ts(e,t),e===null&&Yn(t.stateNode.containerInfo),oe(t),null;case 10:return Us(t.type._context),oe(t),null;case 17:return fe(t.type)&&ni(),oe(t),null;case 19:if(W(F),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Pn(o,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ci(e),s!==null){for(t.flags|=128,Pn(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(F,F.current&1|2),t.child}e=e.sibling}o.tail!==null&&$()>fn&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304)}else{if(!r)if(e=ci(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Pn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!U)return oe(t),null}else 2*$()-o.renderingStartTime>fn&&n!==1073741824&&(t.flags|=128,r=!0,Pn(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=$(),t.sibling=null,n=F.current,q(F,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return ta(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ve&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function bm(e,t){switch(Ls(t),t.tag){case 1:return fe(t.type)&&ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mn(),W(he),W(ae),zs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Hs(t),null;case 13:if(W(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(F),null;case 4:return mn(),null;case 10:return Us(t.type._context),null;case 22:case 23:return ta(),null;case 24:return null;default:return null}}var Or=!1,se=!1,Sm=typeof WeakSet=="function"?WeakSet:Set,x=null;function en(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){z(e,t,r)}else n.current=null}function ns(e,t,n){try{n()}catch(r){z(e,t,r)}}var cl=!1;function Tm(e,t){if(Uo=Xr,e=_c(),Ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var v;m!==n||i!==0&&m.nodeType!==3||(a=s+i),m!==o||r!==0&&m.nodeType!==3||(l=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)g=m,m=v;for(;;){if(m===e)break t;if(g===n&&++c===i&&(a=s),g===o&&++h===r&&(l=s),(v=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:e,selectionRange:n},Xr=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,S=y.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?C:Oe(t.type,C),S);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return y=cl,cl=!1,y}function jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ns(t,n,o)}i=i.next}while(i!==r)}}function Ei(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Du(e){var t=e.alternate;t!==null&&(e.alternate=null,Du(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Zn],delete t[Ho],delete t[om],delete t[sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mu(e){return e.tag===5||e.tag===3||e.tag===4}function ul(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}function os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(os(e,t,n),e=e.sibling;e!==null;)os(e,t,n),e=e.sibling}var te=null,Ne=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Lu(e,t,n),n=n.sibling}function Lu(e,t,n){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(bi,n)}catch{}switch(n.tag){case 5:se||en(n,t);case 6:var r=te,i=Ne;te=null,Ze(e,t,n),te=r,Ne=i,te!==null&&(Ne?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Ne?(e=te,n=n.stateNode,e.nodeType===8?oo(e.parentNode,n):e.nodeType===1&&oo(e,n),Qn(e)):oo(te,n.stateNode));break;case 4:r=te,i=Ne,te=n.stateNode.containerInfo,Ne=!0,Ze(e,t,n),te=r,Ne=i;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ns(n,t,s),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!se&&(en(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){z(n,t,a)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,Ze(e,t,n),se=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function dl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sm),t.forEach(function(r){var i=Nm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Re(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Ne=!1;break e;case 3:te=a.stateNode.containerInfo,Ne=!0;break e;case 4:te=a.stateNode.containerInfo,Ne=!0;break e}a=a.return}if(te===null)throw Error(T(160));Lu(o,s,i),te=null,Ne=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qu(t,e),t=t.sibling}function qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Re(t,e),_e(e),r&4){try{jn(3,e,e.return),Ei(3,e)}catch(C){z(e,e.return,C)}try{jn(5,e,e.return)}catch(C){z(e,e.return,C)}}break;case 1:Re(t,e),_e(e),r&512&&n!==null&&en(n,n.return);break;case 5:if(Re(t,e),_e(e),r&512&&n!==null&&en(n,n.return),e.flags&32){var i=e.stateNode;try{zn(i,"")}catch(C){z(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ic(i,o),Eo(a,s);var c=Eo(a,o);for(s=0;s<l.length;s+=2){var h=l[s],m=l[s+1];h==="style"?cc(i,m):h==="dangerouslySetInnerHTML"?ac(i,m):h==="children"?zn(i,m):Cs(i,h,m,c)}switch(a){case"input":Ao(i,o);break;case"textarea":oc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?nn(i,!!o.multiple,v,!1):g!==!!o.multiple&&(o.defaultValue!=null?nn(i,!!o.multiple,o.defaultValue,!0):nn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zn]=o}catch(C){z(e,e.return,C)}}break;case 6:if(Re(t,e),_e(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(C){z(e,e.return,C)}}break;case 3:if(Re(t,e),_e(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(t.containerInfo)}catch(C){z(e,e.return,C)}break;case 4:Re(t,e),_e(e);break;case 13:Re(t,e),_e(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Zs=$())),r&4&&dl(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(c=se)||h,Re(t,e),se=c):Re(t,e),_e(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(x=e,h=e.child;h!==null;){for(m=x=h;x!==null;){switch(g=x,v=g.child,g.tag){case 0:case 11:case 14:case 15:jn(4,g,g.return);break;case 1:en(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(C){z(r,n,C)}}break;case 5:en(g,g.return);break;case 22:if(g.memoizedState!==null){ml(m);continue}}v!==null?(v.return=g,x=v):ml(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{i=m.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=m.stateNode,l=m.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lc("display",s))}catch(C){z(e,e.return,C)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){z(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Re(t,e),_e(e),r&4&&dl(e);break;case 21:break;default:Re(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Mu(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zn(i,""),r.flags&=-33);var o=ul(e);os(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ul(e);is(e,a,s);break;default:throw Error(T(161))}}catch(l){z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Am(e,t,n){x=e,_u(e)}function _u(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var i=x,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Or;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||se;a=Or;var c=se;if(Or=s,(se=l)&&!c)for(x=i;x!==null;)s=x,l=s.child,s.tag===22&&s.memoizedState!==null?hl(i):l!==null?(l.return=s,x=l):hl(i);for(;o!==null;)x=o,_u(o),o=o.sibling;x=i,Or=a,se=c}pl(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,x=o):pl(e)}}function pl(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Ei(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Oe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ja(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ja(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Qn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}se||t.flags&512&&rs(t)}catch(g){z(t,t.return,g)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function ml(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function hl(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ei(4,t)}catch(l){z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){z(t,i,l)}}var o=t.return;try{rs(t)}catch(l){z(t,o,l)}break;case 5:var s=t.return;try{rs(t)}catch(l){z(t,s,l)}}}catch(l){z(t,t.return,l)}if(t===e){x=null;break}var a=t.sibling;if(a!==null){a.return=t.return,x=a;break}x=t.return}}var km=Math.ceil,pi=Xe.ReactCurrentDispatcher,Ys=Xe.ReactCurrentOwner,Ie=Xe.ReactCurrentBatchConfig,M=0,ee=null,Q=null,ne=0,ve=0,tn=wt(0),Y=0,or=null,_t=0,Ri=0,Xs=0,Fn=null,pe=null,Zs=0,fn=1/0,Be=null,mi=!1,ss=null,pt=null,Nr=!1,ot=null,hi=0,Bn=0,as=null,zr=-1,Gr=0;function ce(){return M&6?$():zr!==-1?zr:zr=$()}function mt(e){return e.mode&1?M&2&&ne!==0?ne&-ne:lm.transition!==null?(Gr===0&&(Gr=bc()),Gr):(e=L,e!==0||(e=window.event,e=e===void 0?16:Pc(e.type)),e):1}function Le(e,t,n,r){if(50<Bn)throw Bn=0,as=null,Error(T(185));cr(e,n,r),(!(M&2)||e!==ee)&&(e===ee&&(!(M&2)&&(Ri|=n),Y===4&&rt(e,ne)),ge(e,r),n===1&&M===0&&!(t.mode&1)&&(fn=$()+500,xi&&Ct()))}function ge(e,t){var n=e.callbackNode;lp(e,t);var r=Yr(e,e===ee?ne:0);if(r===0)n!==null&&Ta(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ta(n),t===1)e.tag===0?am(fl.bind(null,e)):$c(fl.bind(null,e)),rm(function(){!(M&6)&&Ct()}),n=null;else{switch(Sc(r)){case 1:n=ks;break;case 4:n=wc;break;case 16:n=Jr;break;case 536870912:n=Cc;break;default:n=Jr}n=Gu(n,Wu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wu(e,t){if(zr=-1,Gr=0,M&6)throw Error(T(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var r=Yr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fi(e,r);else{t=r;var i=M;M|=2;var o=ju();(ee!==e||ne!==t)&&(Be=null,fn=$()+500,Nt(e,t));do try{Pm();break}catch(a){Uu(e,a)}while(!0);Ws(),pi.current=o,M=i,Q!==null?t=0:(ee=null,ne=0,t=Y)}if(t!==0){if(t===2&&(i=Mo(e),i!==0&&(r=i,t=ls(e,i))),t===1)throw n=or,Nt(e,0),rt(e,r),ge(e,$()),n;if(t===6)rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!xm(i)&&(t=fi(e,r),t===2&&(o=Mo(e),o!==0&&(r=o,t=ls(e,o))),t===1))throw n=or,Nt(e,0),rt(e,r),ge(e,$()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:It(e,pe,Be);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Zs+500-$(),10<t)){if(Yr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Bo(It.bind(null,e,pe,Be),t);break}It(e,pe,Be);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Me(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=$()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*km(r/1960))-r,10<r){e.timeoutHandle=Bo(It.bind(null,e,pe,Be),r);break}It(e,pe,Be);break;case 5:It(e,pe,Be);break;default:throw Error(T(329))}}}return ge(e,$()),e.callbackNode===n?Wu.bind(null,e):null}function ls(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=fi(e,t),e!==2&&(t=pe,pe=n,t!==null&&cs(t)),e}function cs(e){pe===null?pe=e:pe.push.apply(pe,e)}function xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Xs,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Me(t),r=1<<n;e[n]=-1,t&=~r}}function fl(e){if(M&6)throw Error(T(327));ln();var t=Yr(e,0);if(!(t&1))return ge(e,$()),null;var n=fi(e,t);if(e.tag!==0&&n===2){var r=Mo(e);r!==0&&(t=r,n=ls(e,r))}if(n===1)throw n=or,Nt(e,0),rt(e,t),ge(e,$()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,It(e,pe,Be),ge(e,$()),null}function ea(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(fn=$()+500,xi&&Ct())}}function Wt(e){ot!==null&&ot.tag===0&&!(M&6)&&ln();var t=M;M|=1;var n=Ie.transition,r=L;try{if(Ie.transition=null,L=1,e)return e()}finally{L=r,Ie.transition=n,M=t,!(M&6)&&Ct()}}function ta(){ve=tn.current,W(tn)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ni();break;case 3:mn(),W(he),W(ae),zs();break;case 5:Hs(r);break;case 4:mn();break;case 13:W(F);break;case 19:W(F);break;case 10:Us(r.type._context);break;case 22:case 23:ta()}n=n.return}if(ee=e,Q=e=ht(e.current,null),ne=ve=t,Y=0,or=null,Xs=Ri=_t=0,pe=Fn=null,Rt!==null){for(t=0;t<Rt.length;t++)if(n=Rt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Rt=null}return e}function Uu(e,t){do{var n=Q;try{if(Ws(),Fr.current=di,ui){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ui=!1}if(qt=0,Z=J=B=null,Un=!1,nr=0,Ys.current=null,n===null||n.return===null){Y=1,or=t,Q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=nl(s);if(v!==null){v.flags&=-257,rl(v,s,a,o,t),v.mode&1&&tl(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var C=new Set;C.add(l),t.updateQueue=C}else y.add(l);break e}else{if(!(t&1)){tl(o,c,t),na();break e}l=Error(T(426))}}else if(U&&a.mode&1){var S=nl(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),rl(S,s,a,o,t),qs(hn(l,a));break e}}o=l=hn(l,a),Y!==4&&(Y=2),Fn===null?Fn=[o]:Fn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Su(o,l,t);Ka(o,p);break e;case 1:a=l;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(pt===null||!pt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=Tu(o,a,t);Ka(o,w);break e}}o=o.return}while(o!==null)}Bu(n)}catch(A){t=A,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ju(){var e=pi.current;return pi.current=di,e===null?di:e}function na(){(Y===0||Y===3||Y===2)&&(Y=4),ee===null||!(_t&268435455)&&!(Ri&268435455)||rt(ee,ne)}function fi(e,t){var n=M;M|=2;var r=ju();(ee!==e||ne!==t)&&(Be=null,Nt(e,t));do try{Im();break}catch(i){Uu(e,i)}while(!0);if(Ws(),M=n,pi.current=r,Q!==null)throw Error(T(261));return ee=null,ne=0,Y}function Im(){for(;Q!==null;)Fu(Q)}function Pm(){for(;Q!==null&&!Zd();)Fu(Q)}function Fu(e){var t=zu(e.alternate,e,ve);e.memoizedProps=e.pendingProps,t===null?Bu(e):Q=t,Ys.current=null}function Bu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bm(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=Cm(n,t,ve),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function It(e,t,n){var r=L,i=Ie.transition;try{Ie.transition=null,L=1,Em(e,t,n,r)}finally{Ie.transition=i,L=r}return null}function Em(e,t,n,r){do ln();while(ot!==null);if(M&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cp(e,o),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nr||(Nr=!0,Gu(Jr,function(){return ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var s=L;L=1;var a=M;M|=4,Ys.current=null,Tm(e,n),qu(n,e),Kp(jo),Xr=!!Uo,jo=Uo=null,e.current=n,Am(n),ep(),M=a,L=s,Ie.transition=o}else e.current=n;if(Nr&&(Nr=!1,ot=e,hi=i),o=e.pendingLanes,o===0&&(pt=null),rp(n.stateNode),ge(e,$()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(mi)throw mi=!1,e=ss,ss=null,e;return hi&1&&e.tag!==0&&ln(),o=e.pendingLanes,o&1?e===as?Bn++:(Bn=0,as=e):Bn=0,Ct(),null}function ln(){if(ot!==null){var e=Sc(hi),t=Ie.transition,n=L;try{if(Ie.transition=null,L=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,hi=0,M&6)throw Error(T(331));var i=M;for(M|=4,x=e.current;x!==null;){var o=x,s=o.child;if(x.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(x=c;x!==null;){var h=x;switch(h.tag){case 0:case 11:case 15:jn(8,h,o)}var m=h.child;if(m!==null)m.return=h,x=m;else for(;x!==null;){h=x;var g=h.sibling,v=h.return;if(Du(h),h===c){x=null;break}if(g!==null){g.return=v,x=g;break}x=v}}}var y=o.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var S=C.sibling;C.sibling=null,C=S}while(C!==null)}}x=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,x=s;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:jn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,x=p;break e}x=o.return}}var d=e.current;for(x=d;x!==null;){s=x;var f=s.child;if(s.subtreeFlags&2064&&f!==null)f.return=s,x=f;else e:for(s=d;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ei(9,a)}}catch(A){z(a,a.return,A)}if(a===s){x=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,x=w;break e}x=a.return}}if(M=i,Ct(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(bi,e)}catch{}r=!0}return r}finally{L=n,Ie.transition=t}}return!1}function gl(e,t,n){t=hn(n,t),t=Su(e,t,1),e=dt(e,t,1),t=ce(),e!==null&&(cr(e,1,t),ge(e,t))}function z(e,t,n){if(e.tag===3)gl(e,e,n);else for(;t!==null;){if(t.tag===3){gl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pt===null||!pt.has(r))){e=hn(n,e),e=Tu(t,e,1),t=dt(t,e,1),e=ce(),t!==null&&(cr(t,1,e),ge(t,e));break}}t=t.return}}function Rm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Y===4||Y===3&&(ne&130023424)===ne&&500>$()-Zs?Nt(e,0):Xs|=n),ge(e,t)}function Hu(e,t){t===0&&(e.mode&1?(t=Sr,Sr<<=1,!(Sr&130023424)&&(Sr=4194304)):t=1);var n=ce();e=Je(e,t),e!==null&&(cr(e,t,n),ge(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hu(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Hu(e,n)}var zu;zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,wm(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&Qc(t,oi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hr(e,t),e=t.pendingProps;var i=un(t,ae.current);an(t,n),i=Vs(null,t,r,e,i,n);var o=$s();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,fe(r)?(o=!0,ri(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fs(t),i.updater=Pi,t.stateNode=i,i._reactInternals=t,Ko(t,r,e,n),t=Xo(null,t,r,!0,o,n)):(t.tag=0,U&&o&&Ms(t),le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Mm(r),e=Oe(r,e),i){case 0:t=Yo(null,t,r,e,n);break e;case 1:t=sl(null,t,r,e,n);break e;case 11:t=il(null,t,r,e,n);break e;case 14:t=ol(null,t,r,Oe(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Yo(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),sl(e,t,r,i,n);case 3:e:{if(Iu(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,eu(e,t),li(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=hn(Error(T(423)),t),t=al(e,t,r,n,i);break e}else if(r!==i){i=hn(Error(T(424)),t),t=al(e,t,r,n,i);break e}else for(we=ut(t.stateNode.containerInfo.firstChild),Ce=t,U=!0,De=null,n=Xc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(dn(),r===i){t=Ye(e,t,n);break e}le(e,t,r,n)}t=t.child}return t;case 5:return tu(t),e===null&&Vo(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Fo(r,i)?s=null:o!==null&&Fo(r,o)&&(t.flags|=32),xu(e,t),le(e,t,s,n),t.child;case 6:return e===null&&Vo(t),null;case 13:return Pu(e,t,n);case 4:return Bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pn(t,null,r,n):le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),il(e,t,r,i,n);case 7:return le(e,t,t.pendingProps,n),t.child;case 8:return le(e,t,t.pendingProps.children,n),t.child;case 12:return le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(si,r._currentValue),r._currentValue=s,o!==null)if(qe(o.value,s)){if(o.children===i.children&&!he.current){t=Ye(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=$e(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$o(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),$o(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,an(t,n),i=Pe(i),r=r(i),t.flags|=1,le(e,t,r,n),t.child;case 14:return r=t.type,i=Oe(r,t.pendingProps),i=Oe(r.type,i),ol(e,t,r,i,n);case 15:return Au(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Oe(r,i),Hr(e,t),t.tag=1,fe(r)?(e=!0,ri(t)):e=!1,an(t,n),bu(t,r,i),Ko(t,r,i,n),Xo(null,t,r,!0,e,n);case 19:return Eu(e,t,n);case 22:return ku(e,t,n)}throw Error(T(156,t.tag))};function Gu(e,t){return vc(e,t)}function Dm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(e,t,n,r){return new Dm(e,t,n,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mm(e){if(typeof e=="function")return ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ss)return 11;if(e===Ts)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=xe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")ra(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gt:return Dt(n.children,i,o,t);case bs:s=8,i|=8;break;case wo:return e=xe(12,n,t,i|2),e.elementType=wo,e.lanes=o,e;case Co:return e=xe(13,n,t,i),e.elementType=Co,e.lanes=o,e;case bo:return e=xe(19,n,t,i),e.elementType=bo,e.lanes=o,e;case tc:return Oi(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zl:s=10;break e;case ec:s=9;break e;case Ss:s=11;break e;case Ts:s=14;break e;case et:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=xe(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dt(e,t,n,r){return e=xe(7,e,r,t),e.lanes=n,e}function Oi(e,t,n,r){return e=xe(22,e,r,t),e.elementType=tc,e.lanes=n,e.stateNode={isHidden:!1},e}function ho(e,t,n){return e=xe(6,e,null,t),e.lanes=n,e}function fo(e,t,n){return t=xe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qi(0),this.expirationTimes=Qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qi(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ia(e,t,n,r,i,o,s,a,l){return e=new Lm(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=xe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(o),e}function qm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vu(e){if(!e)return yt;e=e._reactInternals;e:{if(jt(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(fe(n))return Vc(e,n,t)}return t}function $u(e,t,n,r,i,o,s,a,l){return e=ia(n,r,!0,e,i,o,s,a,l),e.context=Vu(null),n=e.current,r=ce(),i=mt(n),o=$e(r,i),o.callback=t??null,dt(n,o,i),e.current.lanes=i,cr(e,i,r),ge(e,r),e}function Ni(e,t,n,r){var i=t.current,o=ce(),s=mt(i);return n=Vu(n),t.context===null?t.context=n:t.pendingContext=n,t=$e(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(i,t,s),e!==null&&(Le(e,i,s,o),jr(e,i,s)),s}function gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yl(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oa(e,t){yl(e,t),(e=e.alternate)&&yl(e,t)}function _m(){return null}var Qu=typeof reportError=="function"?reportError:function(e){console.error(e)};function sa(e){this._internalRoot=e}Di.prototype.render=sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Ni(e,t,null,null)};Di.prototype.unmount=sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Ni(null,e,null,null)}),t[Ke]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Ic(e)}};function aa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function vl(){}function Wm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=gi(s);o.call(c)}}var s=$u(t,r,e,0,null,!1,!1,"",vl);return e._reactRootContainer=s,e[Ke]=s.current,Yn(e.nodeType===8?e.parentNode:e),Wt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=gi(l);a.call(c)}}var l=ia(e,0,!1,null,null,!1,!1,"",vl);return e._reactRootContainer=l,e[Ke]=l.current,Yn(e.nodeType===8?e.parentNode:e),Wt(function(){Ni(t,l,n,r)}),l}function Li(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=gi(s);a.call(l)}}Ni(t,s,e,i)}else s=Wm(n,t,e,i,r);return gi(s)}Tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(xs(t,n|1),ge(t,$()),!(M&6)&&(fn=$()+500,Ct()))}break;case 13:Wt(function(){var r=Je(e,1);if(r!==null){var i=ce();Le(r,e,1,i)}}),oa(e,1)}};Is=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ce();Le(t,e,134217728,n)}oa(e,134217728)}};Ac=function(e){if(e.tag===13){var t=mt(e),n=Je(e,t);if(n!==null){var r=ce();Le(n,e,t,r)}oa(e,t)}};kc=function(){return L};xc=function(e,t){var n=L;try{return L=e,t()}finally{L=n}};Oo=function(e,t,n){switch(t){case"input":if(Ao(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ki(r);if(!i)throw Error(T(90));rc(r),Ao(r,i)}}}break;case"textarea":oc(e,n);break;case"select":t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}};pc=ea;mc=Wt;var Um={usingClientEntryPoint:!1,Events:[dr,Kt,ki,uc,dc,ea]},En={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jm={bundleType:En.bundleType,version:En.version,rendererPackageName:En.rendererPackageName,rendererConfig:En.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gc(e),e===null?null:e.stateNode},findFiberByHostInstance:En.findFiberByHostInstance||_m,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{bi=Dr.inject(jm),je=Dr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!aa(t))throw Error(T(200));return qm(e,t,null,n)};Se.createRoot=function(e,t){if(!aa(e))throw Error(T(299));var n=!1,r="",i=Qu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ia(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,Yn(e.nodeType===8?e.parentNode:e),new sa(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=gc(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Wt(e)};Se.hydrate=function(e,t,n){if(!Mi(t))throw Error(T(200));return Li(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!aa(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Qu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=$u(t,null,e,1,n??null,i,!1,o,s),e[Ke]=t.current,Yn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Di(t)};Se.render=function(e,t,n){if(!Mi(t))throw Error(T(200));return Li(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!Mi(e))throw Error(T(40));return e._reactRootContainer?(Wt(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Se.unstable_batchedUpdates=ea;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Mi(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Li(e,t,n,!1,r)};Se.version="18.3.1-next-f1338f8080-20240426";function Ku(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ku)}catch(e){console.error(e)}}Ku(),Kl.exports=Se;var Fm=Kl.exports,wl=Fm;yo.createRoot=wl.createRoot,yo.hydrateRoot=wl.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sr(){return sr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sr.apply(this,arguments)}var st;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(st||(st={}));const Cl="popstate";function Bm(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=Ft(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),us("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof o=="string"?o:yi(o))}function r(i,o){qi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return zm(t,n,r,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hm(){return Math.random().toString(36).substr(2,8)}function bl(e,t){return{usr:e.state,key:e.key,idx:t}}function us(e,t,n,r){return n===void 0&&(n=null),sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ft(t):t,{state:n,key:t&&t.key||r||Hm()})}function yi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ft(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=st.Pop,l=null,c=h();c==null&&(c=0,s.replaceState(sr({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function m(){a=st.Pop;let S=h(),p=S==null?null:S-c;c=S,l&&l({action:a,location:C.location,delta:p})}function g(S,p){a=st.Push;let d=us(C.location,S,p);n&&n(d,S),c=h()+1;let f=bl(d,c),w=C.createHref(d);try{s.pushState(f,"",w)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(w)}o&&l&&l({action:a,location:C.location,delta:1})}function v(S,p){a=st.Replace;let d=us(C.location,S,p);n&&n(d,S),c=h();let f=bl(d,c),w=C.createHref(d);s.replaceState(f,"",w),o&&l&&l({action:a,location:C.location,delta:0})}function y(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof S=="string"?S:yi(S);return d=d.replace(/ $/,"%20"),G(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let C={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cl,m),l=S,()=>{i.removeEventListener(Cl,m),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let p=y(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:v,go(S){return s.go(S)}};return C}var Sl;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Sl||(Sl={}));function Gm(e,t,n){return n===void 0&&(n="/"),Vm(e,t,n)}function Vm(e,t,n,r){let i=typeof t=="string"?Ft(t):t,o=gn(i.pathname||"/",n);if(o==null)return null;let s=Ju(e);$m(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=ih(o);a=nh(s[l],c)}return a}function Ju(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(G(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ft([r,l.relativePath]),h=n.concat(l);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ju(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:eh(c,o.index),routesMeta:h})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Yu(o.path))i(o,s,l)}),t}function Yu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Yu(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function $m(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:th(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qm=/^:[\w-]+$/,Km=3,Jm=2,Ym=1,Xm=10,Zm=-2,Tl=e=>e==="*";function eh(e,t){let n=e.split("/"),r=n.length;return n.some(Tl)&&(r+=Zm),t&&(r+=Jm),n.filter(i=>!Tl(i)).reduce((i,o)=>i+(Qm.test(o)?Km:o===""?Ym:Xm),r)}function th(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function nh(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",m=ds({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),g=l.route;if(!m)return null;Object.assign(i,m.params),s.push({params:i,pathname:ft([o,m.pathname]),pathnameBase:ch(ft([o,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(o=ft([o,m.pathnameBase]))}return s}function ds(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:g,isOptional:v}=h;if(g==="*"){let C=a[m]||"";s=o.slice(0,o.length-C.length).replace(/(.)\/+$/,"$1")}const y=a[m];return v&&!y?c[g]=void 0:c[g]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function rh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ih(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function gn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const oh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sh=e=>oh.test(e);function ah(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ft(e):e,o;if(n)if(sh(n))o=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),qi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=Al(n.substring(1),"/"):o=Al(n,t)}else o=t;return{pathname:o,search:uh(r),hash:dh(i)}}function Al(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function go(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xu(e,t){let n=lh(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ft(e):(i=sr({},e),G(!i.pathname||!i.pathname.includes("?"),go("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),go("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),go("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let m=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}a=m>=0?t[m]:"/"}let l=ah(i,a),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const ft=e=>e.join("/").replace(/\/\/+/g,"/"),ch=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),uh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ph(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ed=["post","put","patch","delete"];new Set(ed);const mh=["get",...ed];new Set(mh);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ar(){return ar=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ar.apply(this,arguments)}const _i=b.createContext(null),td=b.createContext(null),bt=b.createContext(null),Wi=b.createContext(null),St=b.createContext({outlet:null,matches:[],isDataRoute:!1}),nd=b.createContext(null);function hh(e,t){let{relative:n}=t===void 0?{}:t;mr()||G(!1);let{basename:r,navigator:i}=b.useContext(bt),{hash:o,pathname:s,search:a}=Ui(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:ft([r,s])),i.createHref({pathname:l,search:a,hash:o})}function mr(){return b.useContext(Wi)!=null}function hr(){return mr()||G(!1),b.useContext(Wi).location}function rd(e){b.useContext(bt).static||b.useLayoutEffect(e)}function la(){let{isDataRoute:e}=b.useContext(St);return e?Ih():fh()}function fh(){mr()||G(!1);let e=b.useContext(_i),{basename:t,future:n,navigator:r}=b.useContext(bt),{matches:i}=b.useContext(St),{pathname:o}=hr(),s=JSON.stringify(Xu(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return rd(()=>{a.current=!0}),b.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let m=Zu(c,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:ft([t,m.pathname])),(h.replace?r.replace:r.push)(m,h.state,h)},[t,r,s,o,e])}function id(){let{matches:e}=b.useContext(St),t=e[e.length-1];return t?t.params:{}}function Ui(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(bt),{matches:i}=b.useContext(St),{pathname:o}=hr(),s=JSON.stringify(Xu(i,r.v7_relativeSplatPath));return b.useMemo(()=>Zu(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function gh(e,t){return yh(e,t)}function yh(e,t,n,r){mr()||G(!1);let{navigator:i}=b.useContext(bt),{matches:o}=b.useContext(St),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=hr(),h;if(t){var m;let S=typeof t=="string"?Ft(t):t;l==="/"||(m=S.pathname)!=null&&m.startsWith(l)||G(!1),h=S}else h=c;let g=h.pathname||"/",v=g;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Gm(e,{pathname:v}),C=Sh(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:ft([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:ft([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&C?b.createElement(Wi.Provider,{value:{location:ar({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:st.Pop}},C):C}function vh(){let e=xh(),t=ph(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const wh=b.createElement(vh,null);class Ch extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(St.Provider,{value:this.props.routeContext},b.createElement(nd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bh(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(_i);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(St.Provider,{value:t},r)}function Sh(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=s.findIndex(m=>m.route.id&&(a==null?void 0:a[m.route.id])!==void 0);h>=0||G(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let m=s[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:v}=n,y=m.route.loader&&g[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,m,g)=>{let v,y=!1,C=null,S=null;n&&(v=a&&m.route.id?a[m.route.id]:void 0,C=m.route.errorElement||wh,l&&(c<0&&g===0?(Ph("route-fallback"),y=!0,S=null):c===g&&(y=!0,S=m.route.hydrateFallbackElement||null)));let p=t.concat(s.slice(0,g+1)),d=()=>{let f;return v?f=C:y?f=S:m.route.Component?f=b.createElement(m.route.Component,null):m.route.element?f=m.route.element:f=h,b.createElement(bh,{match:m,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:f})};return n&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?b.createElement(Ch,{location:n.location,revalidation:n.revalidation,component:C,error:v,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var od=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(od||{}),sd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sd||{});function Th(e){let t=b.useContext(_i);return t||G(!1),t}function Ah(e){let t=b.useContext(td);return t||G(!1),t}function kh(e){let t=b.useContext(St);return t||G(!1),t}function ad(e){let t=kh(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function xh(){var e;let t=b.useContext(nd),n=Ah(),r=ad();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ih(){let{router:e}=Th(od.UseNavigateStable),t=ad(sd.UseNavigateStable),n=b.useRef(!1);return rd(()=>{n.current=!0}),b.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ar({fromRouteId:t},o)))},[e,t])}const kl={};function Ph(e,t,n){kl[e]||(kl[e]=!0)}function Eh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pt(e){G(!1)}function Rh(e){let{basename:t="/",children:n=null,location:r,navigationType:i=st.Pop,navigator:o,static:s=!1,future:a}=e;mr()&&G(!1);let l=t.replace(/^\/*/,"/"),c=b.useMemo(()=>({basename:l,navigator:o,static:s,future:ar({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Ft(r));let{pathname:h="/",search:m="",hash:g="",state:v=null,key:y="default"}=r,C=b.useMemo(()=>{let S=gn(h,l);return S==null?null:{location:{pathname:S,search:m,hash:g,state:v,key:y},navigationType:i}},[l,h,m,g,v,y,i]);return C==null?null:b.createElement(bt.Provider,{value:c},b.createElement(Wi.Provider,{children:n,value:C}))}function Oh(e){let{children:t,location:n}=e;return gh(ps(t),n)}new Promise(()=>{});function ps(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let o=[...t,i];if(r.type===b.Fragment){n.push.apply(n,ps(r.props.children,o));return}r.type!==Pt&&G(!1),!r.props.index||!r.props.children||G(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=ps(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vi(){return vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vi.apply(this,arguments)}function ld(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Nh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dh(e,t){return e.button===0&&(!t||t==="_self")&&!Nh(e)}const Mh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Lh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],qh="6";try{window.__reactRouterVersion=qh}catch{}const _h=b.createContext({isTransitioning:!1}),Wh="startTransition",xl=Rd[Wh];function Uh(e){let{basename:t,children:n,future:r,window:i}=e,o=b.useRef();o.current==null&&(o.current=Bm({window:i,v5Compat:!0}));let s=o.current,[a,l]=b.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=b.useCallback(m=>{c&&xl?xl(()=>l(m)):l(m)},[l,c]);return b.useLayoutEffect(()=>s.listen(h),[s,h]),b.useEffect(()=>Eh(r),[r]),b.createElement(Rh,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const jh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:h,viewTransition:m}=t,g=ld(t,Mh),{basename:v}=b.useContext(bt),y,C=!1;if(typeof c=="string"&&Fh.test(c)&&(y=c,jh))try{let f=new URL(window.location.href),w=c.startsWith("//")?new URL(f.protocol+c):new URL(c),A=gn(w.pathname,v);w.origin===f.origin&&A!=null?c=A+w.search+w.hash:C=!0}catch{}let S=hh(c,{relative:i}),p=Hh(c,{replace:s,state:a,target:l,preventScrollReset:h,relative:i,viewTransition:m});function d(f){r&&r(f),f.defaultPrevented||p(f)}return b.createElement("a",vi({},g,{href:y||S,onClick:C||o?r:d,ref:n,target:l}))}),Mr=b.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,viewTransition:c,children:h}=t,m=ld(t,Lh),g=Ui(l,{relative:m.relative}),v=hr(),y=b.useContext(td),{navigator:C,basename:S}=b.useContext(bt),p=y!=null&&zh(g)&&c===!0,d=C.encodeLocation?C.encodeLocation(g).pathname:g.pathname,f=v.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(f=f.toLowerCase(),w=w?w.toLowerCase():null,d=d.toLowerCase()),w&&S&&(w=gn(w,S)||w);const A=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let k=f===d||!s&&f.startsWith(d)&&f.charAt(A)==="/",P=w!=null&&(w===d||!s&&w.startsWith(d)&&w.charAt(d.length)==="/"),E={isActive:k,isPending:P,isTransitioning:p},j=k?r:void 0,O;typeof o=="function"?O=o(E):O=[o,k?"active":null,P?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let ye=typeof a=="function"?a(E):a;return b.createElement(Ve,vi({},m,{"aria-current":j,className:O,ref:n,style:ye,to:l,viewTransition:c}),typeof h=="function"?h(E):h)});var ms;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ms||(ms={}));var Il;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Il||(Il={}));function Bh(e){let t=b.useContext(_i);return t||G(!1),t}function Hh(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=la(),c=hr(),h=Ui(e,{relative:s});return b.useCallback(m=>{if(Dh(m,n)){m.preventDefault();let g=r!==void 0?r:yi(c)===yi(h);l(e,{replace:g,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[c,l,h,r,i,n,e,o,s,a])}function zh(e,t){t===void 0&&(t={});let n=b.useContext(_h);n==null&&G(!1);let{basename:r}=Bh(ms.useViewTransitionState),i=Ui(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=gn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=gn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ds(i.pathname,s)!=null||ds(i.pathname,o)!=null}const cd="aspnet-course-progress",wi={attempts:0,correct:0,bestStreak:0},ud={levelTestResult:null,topicProgress:{},moduleTestResults:{},finalTestResult:null,randomQuestionStats:{...wi},quickLineStats:{...wi}};function Gh(e,t){switch(t.type){case"SET_LEVEL_TEST":return{...e,levelTestResult:t.payload};case"RESET_LEVEL_TEST":return{...e,levelTestResult:null};case"COMPLETE_TASK":{const n=e.topicProgress[t.payload.topicId],r=n!=null&&n.tasksCompleted?[...n.tasksCompleted]:[];r[t.payload.taskIndex]=!0;const i=r.filter(Boolean).length>=t.payload.totalTasks;return{...e,topicProgress:{...e.topicProgress,[t.payload.topicId]:{completed:i,tasksCompleted:r}}}}case"SET_MODULE_TEST":return{...e,moduleTestResults:{...e.moduleTestResults,[t.payload.moduleId]:t.payload.result}};case"SET_FINAL_TEST":return{...e,finalTestResult:t.payload};case"RECORD_RANDOM_QUESTION":{const n=e.randomQuestionStats??wi;return{...e,randomQuestionStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RECORD_QUICK_LINE":{const n=e.quickLineStats??wi;return{...e,quickLineStats:{attempts:n.attempts+1,correct:n.correct+(t.payload.correct?1:0),bestStreak:Math.max(n.bestStreak,t.payload.streak)}}}case"RESET":return ud;default:return e}}function Vh(){try{const e=localStorage.getItem(cd);if(e)return JSON.parse(e)}catch{}return ud}const dd=b.createContext(null);function $h({children:e}){const[t,n]=b.useReducer(Gh,void 0,Vh);return b.useEffect(()=>{localStorage.setItem(cd,JSON.stringify(t))},[t]),u.jsx(dd.Provider,{value:{progress:t,dispatch:n},children:e})}function Tt(){const e=b.useContext(dd);if(!e)throw new Error("useProgress must be used within ProgressProvider");return e}const Qh={id:"mod-1",title:"C# Fundamentals",description:"Learn the core building blocks of C#: syntax, data types, variables, operators, and control flow.",topics:[{id:"mod1-t1",title:"Hello World & Program Structure",explanation:`## Your First C# Program

Every C# application starts with a **Program** class and a **Main** method (or top-level statements in C# 9+).

\`\`\`csharp
// Traditional approach
using System;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
\`\`\`

### Top-Level Statements (C# 9+)

Modern C# allows you to skip the boilerplate:

\`\`\`csharp
// Top-level statements
Console.WriteLine("Hello, World!");
\`\`\`

### Key Concepts

1. **using directives** — import namespaces (\`using System;\`)
2. **namespace** — organize code into logical groups
3. **class** — a blueprint for objects
4. **Main method** — the entry point of a console application
5. **Console.WriteLine** — prints text to the console

### Comments

\`\`\`csharp
// Single-line comment
/* Multi-line
   comment */
/// <summary>XML documentation comment</summary>
\`\`\``,tasks:[{description:"Create a console application that prints your name and age on separate lines using Console.WriteLine.",starterCode:`using System;

class Program
{
    static void Main()
    {
        // TODO: Print your name on one line
        // TODO: Print your age on the next line
    }
}`,solution:`using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("John Doe");
        Console.WriteLine("25");
    }
}`,hints:["Use Console.WriteLine() to print a line of text","Each Console.WriteLine() call adds a newline at the end",'Strings are enclosed in double quotes "like this"']}]},{id:"mod1-t2",title:"Data Types & Variables",explanation:`## Data Types in C#

C# is a **strongly-typed** language. Every variable has a type declared at compile time.

### Value Types

| Type | Size | Range | Example |
|------|------|-------|---------|
| int | 4 bytes | -2.1B to 2.1B | \`int age = 25;\` |
| double | 8 bytes | ±5.0e−324 to ±1.7e308 | \`double pi = 3.14;\` |
| bool | 1 byte | true / false | \`bool isActive = true;\` |
| char | 2 bytes | Unicode char | \`char grade = 'A';\` |
| decimal | 16 bytes | High precision | \`decimal price = 29.99m;\` |
| float | 4 bytes | 7 digits precision | \`float temp = 36.6f;\` |
| long | 8 bytes | Very large integers | \`long big = 9999999999L;\` |

### Reference Types

\`\`\`csharp
string name = "Alice";        // immutable sequence of characters
object obj = 42;               // base type of all types
int[] numbers = { 1, 2, 3 };  // array
\`\`\`

### var Keyword

The compiler infers the type from the assigned value:

\`\`\`csharp
var count = 10;        // int
var message = "Hi";    // string
var ratio = 0.5;       // double
\`\`\`

### Constants

\`\`\`csharp
const double Pi = 3.14159;
const string AppName = "MyApp";
\`\`\`

### Nullable Value Types

\`\`\`csharp
int? maybeNull = null;
double? temperature = 36.6;
\`\`\``,tasks:[{description:"Declare variables of different types: an int for age, a string for name, a double for salary, a bool for isEmployed, and a decimal for accountBalance. Print each with a label.",starterCode:`using System;

class Program
{
    static void Main()
    {
        // TODO: Declare variables of different types
        // TODO: Print each with a label, e.g. "Name: Alice"
    }
}`,solution:`using System;

class Program
{
    static void Main()
    {
        int age = 30;
        string name = "Alice";
        double salary = 75000.50;
        bool isEmployed = true;
        decimal accountBalance = 12345.67m;

        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Age: {age}");
        Console.WriteLine($"Salary: {salary}");
        Console.WriteLine($"Employed: {isEmployed}");
        Console.WriteLine($"Balance: {accountBalance}");
    }
}`,hints:['Use $ before a string for string interpolation: $"text {variable}"',"Decimal literals need the m suffix: 29.99m","Use the appropriate type for each piece of data"]}]},{id:"mod1-t3",title:"Operators & Expressions",explanation:`## Operators in C#

### Arithmetic Operators

\`\`\`csharp
int a = 10, b = 3;
Console.WriteLine(a + b);  // 13
Console.WriteLine(a - b);  // 7
Console.WriteLine(a * b);  // 30
Console.WriteLine(a / b);  // 3 (integer division)
Console.WriteLine(a % b);  // 1 (remainder)
\`\`\`

### Comparison Operators

\`\`\`csharp
bool result;
result = (5 == 5);   // true
result = (5 != 3);   // true
result = (5 > 3);    // true
result = (5 >= 5);   // true
result = (5 < 10);   // true
result = (5 <= 5);   // true
\`\`\`

### Logical Operators

\`\`\`csharp
bool x = true, y = false;
Console.WriteLine(x && y);  // false (AND)
Console.WriteLine(x || y);  // true  (OR)
Console.WriteLine(!x);      // false (NOT)
\`\`\`

### Null-Coalescing & Null-Conditional

\`\`\`csharp
string? name = null;
string displayName = name ?? "Unknown";  // "Unknown"

int? length = name?.Length;  // null (no exception)
\`\`\`

### Ternary Operator

\`\`\`csharp
int age = 20;
string status = age >= 18 ? "Adult" : "Minor";
\`\`\``,tasks:[{description:"Write a program that takes two integers, performs all arithmetic operations (+, -, *, /, %), and prints the results. Also use the ternary operator to check if the first number is even or odd.",starterCode:`using System;

class Program
{
    static void Main()
    {
        int a = 17, b = 5;
        // TODO: Perform and print all arithmetic operations
        // TODO: Check if a is even or odd using ternary operator
    }
}`,solution:`using System;

class Program
{
    static void Main()
    {
        int a = 17, b = 5;
        Console.WriteLine($"{a} + {b} = {a + b}");
        Console.WriteLine($"{a} - {b} = {a - b}");
        Console.WriteLine($"{a} * {b} = {a * b}");
        Console.WriteLine($"{a} / {b} = {a / b}");
        Console.WriteLine($"{a} % {b} = {a % b}");

        string parity = a % 2 == 0 ? "even" : "odd";
        Console.WriteLine($"{a} is {parity}");
    }
}`,hints:["Integer division truncates: 17 / 5 = 3","Use % (modulo) to get the remainder","Ternary syntax: condition ? trueValue : falseValue"]}]},{id:"mod1-t4",title:"Control Flow",explanation:`## Control Flow Statements

### if / else if / else

\`\`\`csharp
int score = 85;

if (score >= 90)
    Console.WriteLine("A");
else if (score >= 80)
    Console.WriteLine("B");
else if (score >= 70)
    Console.WriteLine("C");
else
    Console.WriteLine("F");
\`\`\`

### switch Statement

\`\`\`csharp
string day = "Monday";
switch (day)
{
    case "Monday":
    case "Tuesday":
        Console.WriteLine("Early week");
        break;
    case "Friday":
        Console.WriteLine("TGIF!");
        break;
    default:
        Console.WriteLine("Another day");
        break;
}
\`\`\`

### Switch Expressions (C# 8+)

\`\`\`csharp
string result = day switch
{
    "Monday" => "Start of week",
    "Friday" => "End of week",
    _ => "Midweek"
};
\`\`\`

### Loops

\`\`\`csharp
// for loop
for (int i = 0; i < 5; i++)
    Console.WriteLine(i);

// while loop
int count = 0;
while (count < 3)
{
    Console.WriteLine(count);
    count++;
}

// do-while loop
do
{
    Console.WriteLine("Runs at least once");
} while (false);

// foreach loop
string[] fruits = { "Apple", "Banana", "Cherry" };
foreach (string fruit in fruits)
    Console.WriteLine(fruit);
\`\`\``,tasks:[{description:'Write a program that classifies a temperature: below 0 is "Freezing", 0-15 is "Cold", 16-25 is "Mild", 26-35 is "Warm", above 35 is "Hot". Use if/else. Then print numbers 1-10 using a for loop, skipping multiples of 3.',starterCode:`using System;

class Program
{
    static void Main()
    {
        int temp = 22;
        // TODO: Classify temperature using if/else

        // TODO: Print 1-10 skipping multiples of 3
    }
}`,solution:`using System;

class Program
{
    static void Main()
    {
        int temp = 22;

        if (temp < 0)
            Console.WriteLine("Freezing");
        else if (temp <= 15)
            Console.WriteLine("Cold");
        else if (temp <= 25)
            Console.WriteLine("Mild");
        else if (temp <= 35)
            Console.WriteLine("Warm");
        else
            Console.WriteLine("Hot");

        for (int i = 1; i <= 10; i++)
        {
            if (i % 3 == 0) continue;
            Console.WriteLine(i);
        }
    }
}`,hints:["Use else if to chain multiple conditions","Use the continue keyword to skip the current iteration","i % 3 == 0 checks if i is a multiple of 3"]}]}],test:[{id:"mod1-q1",question:"What is the entry point of a C# console application?",options:["The first line of code in the file","The Main method","The constructor of the Program class","The using directive"],correctAnswer:1,explanation:"The Main method is the entry point where program execution begins."},{id:"mod1-q2",question:"Which keyword declares a constant in C#?",options:["var","let","const","static"],correctAnswer:2,explanation:"The const keyword declares compile-time constants that cannot be changed."},{id:"mod1-q3",question:"What is the result of 17 / 5 in C# when both operands are int?",options:["3.4","3","4","3.0"],correctAnswer:1,explanation:"Integer division truncates the decimal part. 17 / 5 = 3 with remainder 2."},{id:"mod1-q4",question:"Which suffix is required for decimal literals?",options:["d","f","m","l"],correctAnswer:2,explanation:"Decimal literals require the m suffix: 29.99m"},{id:"mod1-q5",question:"What does the ?? operator do?",options:["Logical AND","Null-coalescing: returns left if non-null, else right","String concatenation","Bitwise XOR"],correctAnswer:1,explanation:"The ?? operator returns the left operand if non-null, otherwise the right operand."}]},Kh={id:"mod-2",title:"Methods & Arrays",description:"Master methods, parameter passing, arrays, and string manipulation in C#.",topics:[{id:"mod2-t1",title:"Methods & Parameters",explanation:`## Methods in C#

A method is a block of code that performs a task and can be called by name.

\`\`\`csharp
static int Add(int a, int b)
{
    return a + b;
}
\`\`\`

### Method Signature

\`\`\`csharp
[access] [static] returnType MethodName(parameters)
{
    // body
}
\`\`\`

### Parameter Passing

\`\`\`csharp
// By value (default) — a copy is passed
static void Increment(int x)
{
    x++; // does NOT affect the caller
}

// By reference — ref keyword
static void Increment(ref int x)
{
    x++; // DOES affect the caller
}

// Out parameter — must be assigned inside the method
static bool TryParse(string s, out int result)
{
    return int.TryParse(s, out result);
}
\`\`\`

### Optional & Named Parameters

\`\`\`csharp
static string Greet(string name, string greeting = "Hello")
{
    return $"{greeting}, {name}!";
}

// Usage
Greet("Alice");                    // "Hello, Alice!"
Greet("Bob", "Hi");               // "Hi, Bob!"
Greet(greeting: "Hey", name: "C"); // Named parameters
\`\`\`

### Expression-Bodied Members

\`\`\`csharp
static int Square(int x) => x * x;
static void Print(string msg) => Console.WriteLine(msg);
\`\`\``,tasks:[{description:"Create a method called `CalculateBMI` that takes weight (kg) and height (m) as doubles and returns the BMI. Create another method `ClassifyBMI` that takes a double BMI and returns a string classification.",starterCode:`using System;

class Program
{
    // TODO: Create CalculateBMI method

    // TODO: Create ClassifyBMI method

    static void Main()
    {
        double bmi = CalculateBMI(70, 1.75);
        Console.WriteLine($"BMI: {bmi:F1}");
        Console.WriteLine($"Classification: {ClassifyBMI(bmi)}");
    }
}`,solution:`using System;

class Program
{
    static double CalculateBMI(double weightKg, double heightM)
    {
        return weightKg / (heightM * heightM);
    }

    static string ClassifyBMI(double bmi)
    {
        if (bmi < 18.5) return "Underweight";
        if (bmi < 25) return "Normal";
        if (bmi < 30) return "Overweight";
        return "Obese";
    }

    static void Main()
    {
        double bmi = CalculateBMI(70, 1.75);
        Console.WriteLine($"BMI: {bmi:F1}");
        Console.WriteLine($"Classification: {ClassifyBMI(bmi)}");
    }
}`,hints:["BMI formula: weight / (height * height)","Use if/else or early returns for classification",":F1 in string interpolation formats to 1 decimal place"]}]},{id:"mod2-t2",title:"Arrays",explanation:`## Arrays in C#

Arrays are fixed-size collections of elements of the same type.

\`\`\`csharp
// Declaration and initialization
int[] numbers = new int[5];           // [0, 0, 0, 0, 0]
int[] primes = { 2, 3, 5, 7, 11 };   // shorthand
int[] squares = new int[] { 1, 4, 9 };

// Accessing elements
Console.WriteLine(primes[0]); // 2
primes[0] = 1;                // modify

// Length
Console.WriteLine(primes.Length); // 5
\`\`\`

### Multi-Dimensional Arrays

\`\`\`csharp
// 2D array
int[,] matrix = { { 1, 2 }, { 3, 4 }, { 5, 6 } };
Console.WriteLine(matrix[1, 0]); // 3

// Jagged array (array of arrays)
int[][] jagged = new int[3][];
jagged[0] = new int[] { 1, 2 };
jagged[1] = new int[] { 3, 4, 5 };
\`\`\`

### Common Array Operations

\`\`\`csharp
int[] nums = { 5, 3, 8, 1, 9 };

Array.Sort(nums);              // [1, 3, 5, 8, 9]
Array.Reverse(nums);           // [9, 8, 5, 3, 1]
int index = Array.IndexOf(nums, 5); // 2
bool exists = Array.Exists(nums, x => x > 7); // true
\`\`\`

### Iterating Arrays

\`\`\`csharp
string[] colors = { "Red", "Green", "Blue" };

// for loop
for (int i = 0; i < colors.Length; i++)
    Console.WriteLine($"{i}: {colors[i]}");

// foreach loop
foreach (string color in colors)
    Console.WriteLine(color);
\`\`\``,tasks:[{description:"Create an array of 10 random integers (1-100), print them, sort the array, print the sorted version, and display the min, max, and average.",starterCode:`using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];
        var rand = new Random();
        // TODO: Fill with random numbers 1-100
        // TODO: Print original array
        // TODO: Sort and print sorted array
        // TODO: Print min, max, and average
    }
}`,solution:`using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];
        var rand = new Random();

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = rand.Next(1, 101);

        Console.WriteLine("Original: " + string.Join(", ", numbers));

        Array.Sort(numbers);
        Console.WriteLine("Sorted:   " + string.Join(", ", numbers));

        Console.WriteLine($"Min: {numbers[0]}");
        Console.WriteLine($"Max: {numbers[^1]}");

        double avg = 0;
        foreach (int n in numbers) avg += n;
        avg /= numbers.Length;
        Console.WriteLine($"Average: {avg:F1}");
    }
}`,hints:["Random.Next(1, 101) generates a number from 1 to 100",'string.Join(", ", array) joins array elements into a string',"numbers[^1] accesses the last element (index from end)"]}]},{id:"mod2-t3",title:"Strings & StringBuilder",explanation:`## Strings in C#

Strings in C# are **immutable** — every modification creates a new string object.

\`\`\`csharp
string name = "Alice";
string upper = name.ToUpper();    // "ALICE"
string lower = name.ToLower();    // "alice"
int len = name.Length;            // 5
char first = name[0];            // 'A'
\`\`\`

### Common String Methods

\`\`\`csharp
string text = "  Hello, World!  ";

text.Trim()                    // "Hello, World!"
text.Contains("World")        // true
text.StartsWith("  He")       // true
text.Replace("World", "C#")   // "  Hello, C#!  "
text.Substring(8, 5)          // "World"
text.Split(',')               // ["  Hello", " World!  "]
text.IndexOf("World")         // 9
\`\`\`

### String Interpolation & Formatting

\`\`\`csharp
string name = "Bob";
int age = 30;

// String interpolation
string msg = $"Name: {name}, Age: {age}";

// Verbatim strings (no escape processing)
string path = @"C:\\Users\\file.txt";

// Raw string literals (C# 11)
string json = \\"\\"\\"
{
  "name": "test"
}
\\"\\"\\"
\`\`\`

### StringBuilder for Performance

\`\`\`csharp
using System.Text;

var sb = new StringBuilder();
for (int i = 0; i < 1000; i++)
    sb.Append($"Line {i}\\n");

string result = sb.ToString();
\`\`\`

> **Rule of thumb**: Use \`StringBuilder\` when concatenating strings in a loop.`,tasks:[{description:"Write a method that takes a sentence and returns a new string with each word capitalized (title case). Use string.Split and string.Join.",starterCode:`using System;

class Program
{
    static string ToTitleCase(string sentence)
    {
        // TODO: Split sentence into words
        // TODO: Capitalize first letter of each word
        // TODO: Join words back together
        return "";
    }

    static void Main()
    {
        Console.WriteLine(ToTitleCase("hello world from csharp"));
        // Expected: "Hello World From Csharp"
    }
}`,solution:`using System;

class Program
{
    static string ToTitleCase(string sentence)
    {
        string[] words = sentence.Split(' ');
        for (int i = 0; i < words.Length; i++)
        {
            if (words[i].Length > 0)
                words[i] = char.ToUpper(words[i][0]) + words[i].Substring(1);
        }
        return string.Join(" ", words);
    }

    static void Main()
    {
        Console.WriteLine(ToTitleCase("hello world from csharp"));
    }
}`,hints:["Split the string using Split(' ')","Use char.ToUpper() on the first character","Substring(1) gets everything after the first character"]}]}],test:[{id:"mod2-q1",question:"What does the ref keyword do when passing a parameter?",options:["Creates a copy of the value","Passes the variable by reference so changes affect the caller","Makes the parameter optional","Converts the parameter to a reference type"],correctAnswer:1,explanation:"The ref keyword passes a variable by reference, so modifications inside the method affect the caller."},{id:"mod2-q2",question:"What is the default value of elements in a new int[] array?",options:["null","undefined","0","-1"],correctAnswer:2,explanation:"Value types like int default to 0. Reference types default to null."},{id:"mod2-q3",question:"Why should you use StringBuilder instead of string concatenation in a loop?",options:["StringBuilder supports Unicode, string does not","Strings are immutable, so each concatenation allocates a new string","StringBuilder is thread-safe","String concatenation is not allowed in loops"],correctAnswer:1,explanation:"Strings are immutable. Concatenation in a loop creates many temporary string objects, while StringBuilder modifies an internal buffer."},{id:"mod2-q4",question:"What does numbers[^1] access?",options:["The first element","The last element","The element at index -1 (error)","The length of the array"],correctAnswer:1,explanation:"^1 is the index-from-end operator. ^1 means the last element."},{id:"mod2-q5",question:"What is the difference between a multi-dimensional array and a jagged array?",options:["No difference, they are the same","Multi-dimensional is int[,], jagged is int[][] with independent row lengths","Jagged arrays can only hold strings","Multi-dimensional arrays are reference types, jagged are value types"],correctAnswer:1,explanation:"int[,] is rectangular. int[][] is an array of arrays where each inner array can have a different length."}]},Jh={id:"mod-3",title:"Object-Oriented Programming",description:"Master classes, objects, inheritance, polymorphism, and encapsulation in C#.",topics:[{id:"mod3-t1",title:"Classes & Objects",explanation:`## Classes and Objects

A **class** is a blueprint. An **object** is an instance of that class.

\`\`\`csharp
public class Person
{
    // Fields
    private string _name;
    private int _age;

    // Constructor
    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }

    // Properties
    public string Name
    {
        get => _name;
        set => _name = value;
    }

    // Auto-property
    public string Email { get; set; } = "";

    // Method
    public string Introduce()
    {
        return $"Hi, I'm {_name}, {_age} years old.";
    }
}
\`\`\`

### Creating Objects

\`\`\`csharp
var alice = new Person("Alice", 30);
Console.WriteLine(alice.Introduce());

// Object initializer
var bob = new Person("Bob", 25) { Email = "bob@example.com" };
\`\`\`

### Access Modifiers

| Modifier | Access |
|----------|--------|
| public | Everywhere |
| private | Same class only |
| protected | Same class + derived classes |
| internal | Same assembly |
| protected internal | Same assembly or derived classes |`,tasks:[{description:"Create a `BankAccount` class with properties for AccountHolder (string), Balance (decimal, read-only from outside), and methods Deposit and Withdraw that validate amounts.",starterCode:`public class BankAccount
{
    // TODO: Properties for AccountHolder and Balance
    // TODO: Constructor
    // TODO: Deposit method
    // TODO: Withdraw method (check sufficient funds)
}`,solution:`public class BankAccount
{
    public string AccountHolder { get; set; }
    public decimal Balance { get; private set; }

    public BankAccount(string holder, decimal initialBalance)
    {
        AccountHolder = holder;
        Balance = initialBalance;
    }

    public void Deposit(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive.");
        Balance += amount;
    }

    public bool Withdraw(decimal amount)
    {
        if (amount <= 0)
            throw new ArgumentException("Amount must be positive.");
        if (amount > Balance)
            return false;
        Balance -= amount;
        return true;
    }
}`,hints:["Use { get; private set; } to make Balance readable but only settable internally","Validate that deposit/withdraw amounts are positive","Return bool from Withdraw to indicate success/failure"]}]},{id:"mod3-t2",title:"Inheritance & Polymorphism",explanation:`## Inheritance

A class can inherit from another class using \`:\`.

\`\`\`csharp
public class Animal
{
    public string Name { get; set; }

    public virtual string Speak()
    {
        return "...";
    }
}

public class Dog : Animal
{
    public override string Speak()
    {
        return "Woof!";
    }
}

public class Cat : Animal
{
    public override string Speak()
    {
        return "Meow!";
    }
}
\`\`\`

### Key Concepts

- **virtual** — marks a method as overridable
- **override** — provides a new implementation in a derived class
- **base** — calls the parent class constructor or method
- **sealed** — prevents further inheritance

\`\`\`csharp
public class Puppy : Dog
{
    public override string Speak()
    {
        return base.Speak() + " (tiny)";
    }
}
\`\`\`

### Polymorphism

\`\`\`csharp
Animal[] animals = { new Dog(), new Cat(), new Dog() };
foreach (Animal a in animals)
    Console.WriteLine(a.Speak()); // Calls the correct override
\`\`\`

### Abstract Classes

\`\`\`csharp
public abstract class Shape
{
    public abstract double Area();

    public void PrintArea()
    {
        Console.WriteLine($"Area: {Area()}");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }
    public override double Area() => Math.PI * Radius * Radius;
}
\`\`\``,tasks:[{description:"Create an abstract class `Shape` with an abstract method `Area()` and `Perimeter()`. Implement `Rectangle` and `Circle` subclasses. Create an array of shapes and print each area and perimeter.",starterCode:`using System;

public abstract class Shape
{
    // TODO: abstract Area() and Perimeter()
}

// TODO: Rectangle class

// TODO: Circle class

class Program
{
    static void Main()
    {
        // TODO: Create array of shapes and print areas/perimeters
    }
}`,solution:`using System;

public abstract class Shape
{
    public abstract double Area();
    public abstract double Perimeter();
}

public class Rectangle : Shape
{
    public double Width { get; set; }
    public double Height { get; set; }

    public Rectangle(double w, double h) { Width = w; Height = h; }

    public override double Area() => Width * Height;
    public override double Perimeter() => 2 * (Width + Height);
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(double r) { Radius = r; }

    public override double Area() => Math.PI * Radius * Radius;
    public override double Perimeter() => 2 * Math.PI * Radius;
}

class Program
{
    static void Main()
    {
        Shape[] shapes = { new Rectangle(5, 3), new Circle(4), new Rectangle(10, 2) };
        foreach (var shape in shapes)
        {
            Console.WriteLine($"{shape.GetType().Name}: Area={shape.Area():F2}, Perimeter={shape.Perimeter():F2}");
        }
    }
}`,hints:["Use the abstract keyword for methods without a body","Each subclass must override all abstract methods","shape.GetType().Name gives the runtime type name"]}]},{id:"mod3-t3",title:"Interfaces",explanation:`## Interfaces

An interface defines a **contract** — what a class must implement, without specifying how.

\`\`\`csharp
public interface ILogger
{
    void Log(string message);
    void LogError(string message);
}

public class ConsoleLogger : ILogger
{
    public void Log(string message)
        => Console.WriteLine($"[INFO] {message}");

    public void LogError(string message)
        => Console.WriteLine($"[ERROR] {message}");
}
\`\`\`

### Multiple Interface Implementation

\`\`\`csharp
public interface ISerializable
{
    string Serialize();
}

public interface IValidatable
{
    bool IsValid();
}

public class User : ISerializable, IValidatable
{
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";

    public string Serialize() => $"{Name}|{Email}";
    public bool IsValid() => !string.IsNullOrEmpty(Name) && Email.Contains("@");
}
\`\`\`

### Default Interface Methods (C# 8+)

\`\`\`csharp
public interface ILogger
{
    void Log(string message);

    void LogWarning(string message)
        => Log($"WARNING: {message}");  // default implementation
}
\`\`\`

### Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|---------------|
| Multiple inheritance | Yes | No |
| Fields | No | Yes |
| Constructors | No | Yes |
| Default methods | C# 8+ | Yes |
| Access modifiers | Public only (default) | Any |`,tasks:[{description:"Define an `IRepository<T>` interface with methods: GetById, GetAll, Add, Update, Delete. Implement an in-memory `InMemoryRepository<T>` using a List<T>.",starterCode:`using System;
using System.Collections.Generic;

public interface IRepository<T>
{
    // TODO: Define CRUD methods
}

// TODO: Implement InMemoryRepository<T>`,solution:`using System;
using System.Collections.Generic;
using System.Linq;

public interface IEntity
{
    int Id { get; set; }
}

public interface IRepository<T> where T : IEntity
{
    T? GetById(int id);
    List<T> GetAll();
    void Add(T entity);
    void Update(T entity);
    void Delete(int id);
}

public class InMemoryRepository<T> : IRepository<T> where T : IEntity
{
    private readonly List<T> _items = new();

    public T? GetById(int id) => _items.FirstOrDefault(x => x.Id == id);
    public List<T> GetAll() => new(_items);
    public void Add(T entity) => _items.Add(entity);

    public void Update(T entity)
    {
        var index = _items.FindIndex(x => x.Id == entity.Id);
        if (index >= 0) _items[index] = entity;
    }

    public void Delete(int id) => _items.RemoveAll(x => x.Id == id);
}`,hints:["Use generics <T> to make the repository type-safe","Consider adding a constraint like where T : IEntity","List<T>.FirstOrDefault can find items by predicate"]}]}],test:[{id:"mod3-q1",question:"What keyword marks a method as overridable in a base class?",options:["abstract","virtual","override","new"],correctAnswer:1,explanation:"The virtual keyword allows a method to be overridden in derived classes."},{id:"mod3-q2",question:"Can a class inherit from multiple classes in C#?",options:["Yes, C# supports multiple class inheritance","No, but a class can implement multiple interfaces","Yes, but only if they are abstract classes","No, C# does not support any form of inheritance"],correctAnswer:1,explanation:"C# supports single class inheritance but allows implementing multiple interfaces."},{id:"mod3-q3",question:"What is the purpose of the abstract keyword on a class?",options:["It makes the class static","It prevents the class from being instantiated directly","It makes all methods virtual automatically","It seals the class from inheritance"],correctAnswer:1,explanation:"Abstract classes cannot be instantiated. They serve as base classes that define a contract for derived classes."},{id:"mod3-q4",question:"What access modifier makes a property readable everywhere but only settable within the class?",options:["public get; private set;","protected get; public set;","internal get; internal set;","private get; public set;"],correctAnswer:0,explanation:"public get; private set; makes the property publicly readable but only modifiable within the declaring class."},{id:"mod3-q5",question:"What is polymorphism?",options:["Writing the same method name in different classes","The ability to treat objects of different types through a common base type","A design pattern for creating objects","Hiding base class methods in derived classes"],correctAnswer:1,explanation:"Polymorphism lets you use a base class reference to call overridden methods on derived class objects."}]},Yh={id:"mod-4",title:"Collections & LINQ",description:"Work with generic collections, dictionaries, and master LINQ for querying data.",topics:[{id:"mod4-t1",title:"Generic Collections",explanation:`## Generic Collections

C# provides type-safe collections in \`System.Collections.Generic\`.

### List<T>

\`\`\`csharp
var names = new List<string> { "Alice", "Bob", "Charlie" };
names.Add("Diana");
names.Remove("Bob");
names.Insert(1, "Eve");
Console.WriteLine(names.Count); // 3
Console.WriteLine(names[0]);    // "Alice"

bool hasAlice = names.Contains("Alice"); // true
int idx = names.IndexOf("Eve");          // 1
\`\`\`

### Dictionary<TKey, TValue>

\`\`\`csharp
var ages = new Dictionary<string, int>
{
    ["Alice"] = 30,
    ["Bob"] = 25
};

ages["Charlie"] = 35;
ages.TryGetValue("Alice", out int age); // age = 30

foreach (var kvp in ages)
    Console.WriteLine($"{kvp.Key}: {kvp.Value}");
\`\`\`

### HashSet<T>

\`\`\`csharp
var set = new HashSet<int> { 1, 2, 3, 3, 2 };
Console.WriteLine(set.Count); // 3 (no duplicates)
set.Add(4);
bool has = set.Contains(2); // true
\`\`\`

### Queue<T> and Stack<T>

\`\`\`csharp
var queue = new Queue<string>();
queue.Enqueue("First");
queue.Enqueue("Second");
string next = queue.Dequeue(); // "First"

var stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
int top = stack.Pop(); // 2
\`\`\``,tasks:[{description:"Create a phone book using Dictionary<string, string>. Support adding contacts, looking up by name, and listing all contacts sorted by name.",starterCode:`using System;
using System.Collections.Generic;

class PhoneBook
{
    private Dictionary<string, string> _contacts = new();

    // TODO: Add method
    // TODO: Lookup method
    // TODO: ListAll method (sorted by name)
}`,solution:`using System;
using System.Collections.Generic;
using System.Linq;

class PhoneBook
{
    private Dictionary<string, string> _contacts = new();

    public void Add(string name, string phone)
    {
        _contacts[name] = phone;
    }

    public string? Lookup(string name)
    {
        return _contacts.TryGetValue(name, out var phone) ? phone : null;
    }

    public void ListAll()
    {
        foreach (var kvp in _contacts.OrderBy(c => c.Key))
            Console.WriteLine($"{kvp.Key}: {kvp.Value}");
    }
}`,hints:["Use Dictionary<string, string> for name -> phone mapping","TryGetValue avoids exceptions when a key does not exist","OrderBy(c => c.Key) sorts dictionary entries by key"]}]},{id:"mod4-t2",title:"LINQ Basics",explanation:`## LINQ — Language Integrated Query

LINQ lets you query collections using a fluent, SQL-like syntax.

\`\`\`csharp
using System.Linq;

int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

// Method syntax (fluent)
var evens = numbers.Where(n => n % 2 == 0);
var doubled = numbers.Select(n => n * 2);
var firstThree = numbers.Take(3);
var sorted = numbers.OrderByDescending(n => n);

// Query syntax
var query = from n in numbers
            where n > 5
            orderby n descending
            select n * 10;
\`\`\`

### Common LINQ Methods

| Method | Description |
|--------|-------------|
| Where | Filter elements |
| Select | Transform/project elements |
| OrderBy / OrderByDescending | Sort |
| First / FirstOrDefault | Get first matching element |
| Any / All | Check conditions |
| Count | Count elements |
| Sum / Average / Min / Max | Aggregations |
| GroupBy | Group elements |
| Take / Skip | Pagination |
| Distinct | Remove duplicates |
| ToList / ToArray | Materialize query |

### Chaining

\`\`\`csharp
var result = students
    .Where(s => s.Grade >= 80)
    .OrderBy(s => s.Name)
    .Select(s => new { s.Name, s.Grade })
    .ToList();
\`\`\`

### Deferred Execution

LINQ queries are **lazy** — they execute only when you iterate or materialize:

\`\`\`csharp
var query = numbers.Where(n => n > 5); // not executed yet
var list = query.ToList();             // NOW it executes
\`\`\``,tasks:[{description:"Given a list of students with Name and Grade properties, use LINQ to: (1) find students with grade >= 90, (2) calculate average grade, (3) group by pass/fail (>= 60), (4) find the top 3 students by grade.",starterCode:`using System;
using System.Collections.Generic;
using System.Linq;

record Student(string Name, int Grade);

class Program
{
    static void Main()
    {
        var students = new List<Student>
        {
            new("Alice", 95), new("Bob", 72), new("Charlie", 88),
            new("Diana", 60), new("Eve", 45), new("Frank", 91)
        };

        // TODO: 1. Students with grade >= 90
        // TODO: 2. Average grade
        // TODO: 3. Group by pass/fail
        // TODO: 4. Top 3 by grade
    }
}`,solution:`using System;
using System.Collections.Generic;
using System.Linq;

record Student(string Name, int Grade);

class Program
{
    static void Main()
    {
        var students = new List<Student>
        {
            new("Alice", 95), new("Bob", 72), new("Charlie", 88),
            new("Diana", 60), new("Eve", 45), new("Frank", 91)
        };

        var honor = students.Where(s => s.Grade >= 90);
        Console.WriteLine("Honor Roll: " + string.Join(", ", honor.Select(s => s.Name)));

        double avg = students.Average(s => s.Grade);
        Console.WriteLine($"Average: {avg:F1}");

        var groups = students.GroupBy(s => s.Grade >= 60 ? "Pass" : "Fail");
        foreach (var g in groups)
            Console.WriteLine($"{g.Key}: {string.Join(", ", g.Select(s => s.Name))}");

        var top3 = students.OrderByDescending(s => s.Grade).Take(3);
        Console.WriteLine("Top 3: " + string.Join(", ", top3.Select(s => $"{s.Name} ({s.Grade})")));
    }
}`,hints:["Use .Where() to filter, .Average() to compute average",".GroupBy() creates groups you can iterate with foreach",".OrderByDescending().Take(3) gets the top 3"]}]},{id:"mod4-t3",title:"Advanced LINQ",explanation:`## Advanced LINQ Techniques

### SelectMany — Flatten Nested Collections

\`\`\`csharp
var departments = new[]
{
    new { Name = "Dev", Employees = new[] { "Alice", "Bob" } },
    new { Name = "QA", Employees = new[] { "Charlie", "Diana" } }
};

var allEmployees = departments.SelectMany(d => d.Employees);
// ["Alice", "Bob", "Charlie", "Diana"]
\`\`\`

### Join

\`\`\`csharp
var orders = new[] { new { Id = 1, CustomerId = 1 }, new { Id = 2, CustomerId = 2 } };
var customers = new[] { new { Id = 1, Name = "Alice" }, new { Id = 2, Name = "Bob" } };

var joined = orders.Join(customers,
    o => o.CustomerId,
    c => c.Id,
    (o, c) => new { OrderId = o.Id, CustomerName = c.Name });
\`\`\`

### Aggregate

\`\`\`csharp
var words = new[] { "Hello", "World", "From", "LINQ" };
string sentence = words.Aggregate((a, b) => $"{a} {b}");
// "Hello World From LINQ"
\`\`\`

### Zip

\`\`\`csharp
var names = new[] { "Alice", "Bob" };
var scores = new[] { 90, 85 };

var pairs = names.Zip(scores, (n, s) => $"{n}: {s}");
// ["Alice: 90", "Bob: 85"]
\`\`\`

### OfType — Filter by Type

\`\`\`csharp
object[] mixed = { 1, "hello", 2, "world", 3 };
var strings = mixed.OfType<string>(); // ["hello", "world"]
\`\`\``,tasks:[{description:"Given a list of orders with nested line items, use SelectMany to get all items, then calculate total revenue, find the most expensive item, and group items by category.",starterCode:`using System;
using System.Collections.Generic;
using System.Linq;

record LineItem(string Name, string Category, decimal Price, int Quantity);
record Order(int Id, List<LineItem> Items);

class Program
{
    static void Main()
    {
        var orders = new List<Order>
        {
            new(1, new() { new("Laptop", "Electronics", 999.99m, 1), new("Mouse", "Electronics", 29.99m, 2) }),
            new(2, new() { new("Desk", "Furniture", 249.99m, 1), new("Chair", "Furniture", 199.99m, 1) }),
            new(3, new() { new("Keyboard", "Electronics", 79.99m, 1) })
        };

        // TODO: Flatten all items with SelectMany
        // TODO: Total revenue (Price * Quantity)
        // TODO: Most expensive item
        // TODO: Group by Category
    }
}`,solution:`using System;
using System.Collections.Generic;
using System.Linq;

record LineItem(string Name, string Category, decimal Price, int Quantity);
record Order(int Id, List<LineItem> Items);

class Program
{
    static void Main()
    {
        var orders = new List<Order>
        {
            new(1, new() { new("Laptop", "Electronics", 999.99m, 1), new("Mouse", "Electronics", 29.99m, 2) }),
            new(2, new() { new("Desk", "Furniture", 249.99m, 1), new("Chair", "Furniture", 199.99m, 1) }),
            new(3, new() { new("Keyboard", "Electronics", 79.99m, 1) })
        };

        var allItems = orders.SelectMany(o => o.Items);

        decimal totalRevenue = allItems.Sum(i => i.Price * i.Quantity);
        Console.WriteLine($"Total Revenue: {totalRevenue:C}");

        var mostExpensive = allItems.OrderByDescending(i => i.Price).First();
        Console.WriteLine($"Most Expensive: {mostExpensive.Name} ({mostExpensive.Price:C})");

        var byCategory = allItems.GroupBy(i => i.Category);
        foreach (var group in byCategory)
            Console.WriteLine($"{group.Key}: {string.Join(", ", group.Select(i => i.Name))}");
    }
}`,hints:["SelectMany(o => o.Items) flattens all line items across orders","Use .Sum(i => i.Price * i.Quantity) for total revenue",".OrderByDescending().First() gets the most expensive item"]}]}],test:[{id:"mod4-q1",question:"What is deferred execution in LINQ?",options:["LINQ queries run immediately when defined","LINQ queries execute only when iterated or materialized","LINQ defers errors to runtime instead of compile time","LINQ caches results for deferred access"],correctAnswer:1,explanation:"LINQ queries are lazy — they are not executed until you enumerate them (e.g., foreach, ToList)."},{id:"mod4-q2",question:"Which LINQ method flattens nested collections?",options:["Select","SelectMany","Flatten","Aggregate"],correctAnswer:1,explanation:"SelectMany projects each element to a collection and flattens all results into one sequence."},{id:"mod4-q3",question:"What does HashSet<T> guarantee?",options:["Sorted order of elements","No duplicate elements","Thread safety","Fixed capacity"],correctAnswer:1,explanation:"HashSet<T> stores only unique elements. Adding a duplicate is silently ignored."},{id:"mod4-q4",question:"What is the time complexity of Dictionary<TKey, TValue> lookup?",options:["O(n)","O(log n)","O(1) average","O(n log n)"],correctAnswer:2,explanation:"Dictionary uses a hash table, providing O(1) average time for lookups."},{id:"mod4-q5",question:"What does .FirstOrDefault() return if no elements match?",options:["Throws an exception","Returns default(T) — null for reference types, 0 for int, etc.","Returns the last element instead","Returns an empty collection"],correctAnswer:1,explanation:"FirstOrDefault returns default(T) if no match is found, unlike First which throws."}]},Xh={id:"mod-5",title:"Async Programming & Exception Handling",description:"Learn async/await patterns, Task-based programming, and robust exception handling in C#.",topics:[{id:"mod5-t1",title:"Async/Await Fundamentals",explanation:`## Asynchronous Programming

Async programming prevents blocking the calling thread during I/O operations.

\`\`\`csharp
public async Task<string> FetchDataAsync(string url)
{
    using var client = new HttpClient();
    string data = await client.GetStringAsync(url);
    return data;
}
\`\`\`

### Key Concepts

1. **async** — marks a method as asynchronous
2. **await** — suspends execution until the Task completes
3. **Task** — represents an asynchronous operation (void return)
4. **Task<T>** — represents an async operation returning T

### Return Types

\`\`\`csharp
// Returns nothing
async Task DoWorkAsync() { await Task.Delay(1000); }

// Returns a value
async Task<int> GetValueAsync() { return await Task.FromResult(42); }

// Fire-and-forget (avoid in most cases)
async void OnButtonClick() { await DoWorkAsync(); }
\`\`\`

### Common Patterns

\`\`\`csharp
// Parallel execution
Task<string> task1 = FetchDataAsync("url1");
Task<string> task2 = FetchDataAsync("url2");
string[] results = await Task.WhenAll(task1, task2);

// First to complete
Task<string> fastest = await Task.WhenAny(task1, task2);

// With timeout
using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
await DoWorkAsync(cts.Token);
\`\`\`

> **Rule**: Never use \`.Result\` or \`.Wait()\` on tasks — it can cause deadlocks. Always use \`await\`.`,tasks:[{description:'Create an async method that simulates downloading files. It should accept a list of file names, "download" each with a random delay (Task.Delay), and report progress. Use Task.WhenAll to download them in parallel.',starterCode:`using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program
{
    static async Task DownloadFileAsync(string fileName)
    {
        // TODO: Simulate download with random delay
        // TODO: Print completion message
    }

    static async Task Main()
    {
        var files = new[] { "report.pdf", "data.csv", "image.png", "backup.zip" };
        // TODO: Download all files in parallel using Task.WhenAll
    }
}`,solution:`using System;
using System.Threading.Tasks;

class Program
{
    static async Task DownloadFileAsync(string fileName)
    {
        var delay = new Random().Next(500, 3000);
        Console.WriteLine($"Starting download: {fileName}");
        await Task.Delay(delay);
        Console.WriteLine($"Completed: {fileName} ({delay}ms)");
    }

    static async Task Main()
    {
        var files = new[] { "report.pdf", "data.csv", "image.png", "backup.zip" };

        var tasks = new List<Task>();
        foreach (var file in files)
            tasks.Add(DownloadFileAsync(file));

        await Task.WhenAll(tasks);
        Console.WriteLine("All downloads complete!");
    }
}`,hints:["Use Task.Delay(milliseconds) to simulate work","Create a Task for each file and collect them in a list","Task.WhenAll runs all tasks concurrently and awaits all"]}]},{id:"mod5-t2",title:"Exception Handling",explanation:`## Exception Handling in C#

### try/catch/finally

\`\`\`csharp
try
{
    int result = 10 / 0;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"Unexpected: {ex.Message}");
}
finally
{
    Console.WriteLine("Always runs");
}
\`\`\`

### Common Exception Types

| Exception | When |
|-----------|------|
| ArgumentNullException | Null argument |
| ArgumentOutOfRangeException | Value outside valid range |
| InvalidOperationException | Invalid state |
| NotImplementedException | Method not yet implemented |
| FileNotFoundException | File does not exist |
| HttpRequestException | HTTP request failure |
| KeyNotFoundException | Dictionary key not found |

### Custom Exceptions

\`\`\`csharp
public class InsufficientFundsException : Exception
{
    public decimal Balance { get; }
    public decimal Amount { get; }

    public InsufficientFundsException(decimal balance, decimal amount)
        : base($"Cannot withdraw {amount:C}. Balance: {balance:C}")
    {
        Balance = balance;
        Amount = amount;
    }
}
\`\`\`

### Exception Filters (C# 6+)

\`\`\`csharp
try { /* ... */ }
catch (HttpRequestException ex) when (ex.StatusCode == HttpStatusCode.NotFound)
{
    Console.WriteLine("Resource not found");
}
\`\`\`

### Best Practices

- Catch **specific** exceptions, not bare \`Exception\`
- Don't use exceptions for control flow
- Always include meaningful messages
- Use \`throw;\` to rethrow (preserves stack trace), not \`throw ex;\``,tasks:[{description:"Create a custom `ValidationException` class with a list of error messages. Write a `ValidateUser` method that validates name (not empty), age (1-150), and email (contains @). Throw ValidationException if any checks fail.",starterCode:`using System;
using System.Collections.Generic;

// TODO: Create ValidationException

// TODO: Create ValidateUser method

class Program
{
    static void Main()
    {
        try
        {
            ValidateUser("", -5, "invalid-email");
        }
        catch (ValidationException ex)
        {
            Console.WriteLine($"Validation failed: {ex.Message}");
            foreach (var error in ex.Errors)
                Console.WriteLine($"  - {error}");
        }
    }
}`,solution:`using System;
using System.Collections.Generic;

public class ValidationException : Exception
{
    public List<string> Errors { get; }

    public ValidationException(List<string> errors)
        : base($"Validation failed with {errors.Count} error(s).")
    {
        Errors = errors;
    }
}

static void ValidateUser(string name, int age, string email)
{
    var errors = new List<string>();

    if (string.IsNullOrWhiteSpace(name))
        errors.Add("Name is required.");
    if (age < 1 || age > 150)
        errors.Add("Age must be between 1 and 150.");
    if (!email.Contains("@"))
        errors.Add("Email must contain @.");

    if (errors.Count > 0)
        throw new ValidationException(errors);
}`,hints:["Inherit from Exception and call base constructor with a message","Collect all errors in a List<string> before throwing","string.IsNullOrWhiteSpace checks for null, empty, or whitespace"]}]},{id:"mod5-t3",title:"CancellationToken & IDisposable",explanation:`## CancellationToken

Cancellation tokens allow cooperative cancellation of async operations.

\`\`\`csharp
public async Task ProcessAsync(CancellationToken cancellationToken)
{
    for (int i = 0; i < 100; i++)
    {
        cancellationToken.ThrowIfCancellationRequested();
        await Task.Delay(100, cancellationToken);
        Console.WriteLine($"Step {i + 1}");
    }
}

// Usage
var cts = new CancellationTokenSource();
cts.CancelAfter(TimeSpan.FromSeconds(3));

try
{
    await ProcessAsync(cts.Token);
}
catch (OperationCanceledException)
{
    Console.WriteLine("Operation was cancelled.");
}
\`\`\`

## IDisposable & using

Resources like file handles, database connections, and HTTP clients must be explicitly released.

\`\`\`csharp
// using statement — disposes at end of block
using (var reader = new StreamReader("file.txt"))
{
    string content = reader.ReadToEnd();
}

// using declaration (C# 8+) — disposes at end of scope
using var reader = new StreamReader("file.txt");
string content = reader.ReadToEnd();
\`\`\`

### Implementing IDisposable

\`\`\`csharp
public class DatabaseConnection : IDisposable
{
    private bool _disposed;

    public void Open() { /* ... */ }

    public void Dispose()
    {
        if (!_disposed)
        {
            // Release resources
            _disposed = true;
        }
    }
}
\`\`\``,tasks:[{description:"Create a class `FileProcessor` that implements IDisposable. It should open a (simulated) resource in the constructor and release it in Dispose. Write an async method that uses CancellationToken to process items with a timeout.",starterCode:`using System;
using System.Threading;
using System.Threading.Tasks;

// TODO: Create FileProcessor implementing IDisposable

class Program
{
    static async Task Main()
    {
        // TODO: Use FileProcessor with using statement
        // TODO: Process with a 2-second timeout
    }
}`,solution:`using System;
using System.Threading;
using System.Threading.Tasks;

public class FileProcessor : IDisposable
{
    private bool _disposed;

    public FileProcessor()
    {
        Console.WriteLine("Resource opened.");
    }

    public async Task ProcessAsync(int itemCount, CancellationToken ct)
    {
        for (int i = 0; i < itemCount; i++)
        {
            ct.ThrowIfCancellationRequested();
            await Task.Delay(500, ct);
            Console.WriteLine($"Processed item {i + 1}");
        }
    }

    public void Dispose()
    {
        if (!_disposed)
        {
            Console.WriteLine("Resource released.");
            _disposed = true;
        }
    }
}

class Program
{
    static async Task Main()
    {
        using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(2));
        using var processor = new FileProcessor();

        try
        {
            await processor.ProcessAsync(10, cts.Token);
        }
        catch (OperationCanceledException)
        {
            Console.WriteLine("Processing cancelled due to timeout.");
        }
    }
}`,hints:["Implement IDisposable with a _disposed flag to prevent double disposal","Use CancellationTokenSource with a timeout to auto-cancel","Catch OperationCanceledException when using cancellation tokens"]}]}],test:[{id:"mod5-q1",question:"What does the await keyword do?",options:["Blocks the thread until the task completes","Suspends the method and returns control to the caller until the task completes","Creates a new thread for the task","Cancels the current operation"],correctAnswer:1,explanation:"await asynchronously suspends the method, freeing the thread. Execution resumes when the task completes."},{id:"mod5-q2",question:"Why should you avoid async void methods?",options:["They are slower than async Task methods","Exceptions cannot be caught by the caller","They block the calling thread","C# does not support async void"],correctAnswer:1,explanation:"async void methods cannot propagate exceptions to the caller. Use async Task instead (except for event handlers)."},{id:"mod5-q3",question:"What is the difference between throw; and throw ex;?",options:["No difference","throw; preserves the original stack trace, throw ex; resets it","throw ex; is faster","throw; only works in finally blocks"],correctAnswer:1,explanation:"throw; preserves the full stack trace. throw ex; resets the stack trace to the current catch block."},{id:"mod5-q4",question:"What does IDisposable.Dispose() do?",options:["Deletes the object from memory immediately","Releases unmanaged resources deterministically","Calls the garbage collector","Marks the object for finalization"],correctAnswer:1,explanation:"Dispose releases unmanaged resources (files, connections) in a deterministic way, without waiting for GC."},{id:"mod5-q5",question:"What happens when a CancellationToken is cancelled?",options:["The program terminates","An OperationCanceledException is thrown at the next cancellation check","The task is silently ignored","The thread is aborted immediately"],correctAnswer:1,explanation:"ThrowIfCancellationRequested() throws OperationCanceledException when cancellation is requested."}]},Zh={id:"mod-6",title:"ASP.NET Core Fundamentals",description:"Introduction to ASP.NET Core: project structure, middleware pipeline, configuration, and dependency injection.",topics:[{id:"mod6-t1",title:"ASP.NET Core Project Structure",explanation:`## ASP.NET Core Project Structure

A typical ASP.NET Core Web API project:

\`\`\`
MyWebApi/
├── Program.cs           # App entry point & configuration
├── appsettings.json     # Configuration settings
├── appsettings.Development.json
├── MyWebApi.csproj      # Project file
├── Controllers/
│   └── WeatherController.cs
├── Models/
│   └── WeatherForecast.cs
├── Services/
│   └── WeatherService.cs
└── Properties/
    └── launchSettings.json
\`\`\`

### Program.cs (Minimal API style)

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);

// Add services to the DI container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
\`\`\`

### .csproj File

\`\`\`xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
  </PropertyGroup>
</Project>
\`\`\`

### Key Concepts

- **WebApplication.CreateBuilder** — sets up hosting, config, logging, DI
- **builder.Services** — registers services for dependency injection
- **app.Use*()** — adds middleware to the pipeline
- **app.Map*()** — maps endpoints (controllers or minimal APIs)`,tasks:[{description:'Write a minimal Program.cs that creates a Web API with one GET endpoint "/api/hello" that returns a JSON object with a greeting message and the current UTC time.',starterCode:`// Program.cs
var builder = WebApplication.CreateBuilder(args);

// TODO: Build the app

// TODO: Map a GET endpoint "/api/hello"

// TODO: Run the app`,solution:`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/api/hello", () => new
{
    Message = "Hello from ASP.NET Core!",
    Timestamp = DateTime.UtcNow
});

app.Run();`,hints:["Use app.MapGet() for minimal API endpoints","Return an anonymous object — ASP.NET serializes it to JSON automatically","DateTime.UtcNow gets the current UTC time"]}]},{id:"mod6-t2",title:"Middleware Pipeline",explanation:`## Middleware in ASP.NET Core

Middleware are components that handle HTTP requests and responses in a **pipeline**.

\`\`\`
Request → Middleware 1 → Middleware 2 → Middleware 3 → Endpoint
Response ← Middleware 1 ← Middleware 2 ← Middleware 3 ←
\`\`\`

### Built-in Middleware

\`\`\`csharp
var app = builder.Build();

app.UseExceptionHandler("/error");  // Global error handling
app.UseHttpsRedirection();          // Redirect HTTP to HTTPS
app.UseStaticFiles();               // Serve static files
app.UseRouting();                   // Route matching
app.UseAuthentication();            // Who are you?
app.UseAuthorization();             // Are you allowed?
app.MapControllers();               // Map endpoints
\`\`\`

> **Order matters!** Middleware executes in the order it's added.

### Custom Middleware

\`\`\`csharp
// Inline middleware
app.Use(async (context, next) =>
{
    Console.WriteLine($"Request: {context.Request.Path}");
    var sw = Stopwatch.StartNew();
    await next();
    sw.Stop();
    Console.WriteLine($"Response: {sw.ElapsedMilliseconds}ms");
});

// Class-based middleware
public class RequestTimingMiddleware
{
    private readonly RequestDelegate _next;

    public RequestTimingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var sw = Stopwatch.StartNew();
        await _next(context);
        sw.Stop();
        context.Response.Headers["X-Response-Time"] = $"{sw.ElapsedMilliseconds}ms";
    }
}

// Register
app.UseMiddleware<RequestTimingMiddleware>();
\`\`\`

### Terminal Middleware

\`\`\`csharp
app.Run(async context =>
{
    await context.Response.WriteAsync("End of pipeline");
});
\`\`\``,tasks:[{description:"Create a custom middleware class `RequestLoggingMiddleware` that logs the HTTP method, path, and response status code. Register it in the pipeline.",starterCode:`using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

// TODO: Create RequestLoggingMiddleware class

// In Program.cs:
// TODO: Register the middleware`,solution:`public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<RequestLoggingMiddleware> _logger;

    public RequestLoggingMiddleware(RequestDelegate next, ILogger<RequestLoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        _logger.LogInformation("Request: {Method} {Path}",
            context.Request.Method, context.Request.Path);

        await _next(context);

        _logger.LogInformation("Response: {StatusCode}",
            context.Response.StatusCode);
    }
}

// In Program.cs:
// app.UseMiddleware<RequestLoggingMiddleware>();`,hints:["Accept RequestDelegate in the constructor and call it with await","Use ILogger for structured logging instead of Console.WriteLine","Log before and after calling _next(context)"]}]},{id:"mod6-t3",title:"Dependency Injection",explanation:`## Dependency Injection (DI) in ASP.NET Core

DI is a first-class citizen in ASP.NET Core. Instead of creating dependencies manually, you **register** them and let the framework **inject** them.

### Service Lifetimes

| Lifetime | Description |
|----------|-------------|
| Transient | New instance every time it's requested |
| Scoped | One instance per HTTP request |
| Singleton | One instance for the app's lifetime |

\`\`\`csharp
builder.Services.AddTransient<IEmailService, SmtpEmailService>();
builder.Services.AddScoped<IUserRepository, SqlUserRepository>();
builder.Services.AddSingleton<ICacheService, MemoryCacheService>();
\`\`\`

### Constructor Injection

\`\`\`csharp
public class UserController : ControllerBase
{
    private readonly IUserRepository _repo;
    private readonly IEmailService _email;

    public UserController(IUserRepository repo, IEmailService email)
    {
        _repo = repo;
        _email = email;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id)
    {
        var user = await _repo.GetByIdAsync(id);
        return user is null ? NotFound() : Ok(user);
    }
}
\`\`\`

### Why DI?

1. **Loose coupling** — classes depend on abstractions, not concrete types
2. **Testability** — easily swap real services with mocks
3. **Maintainability** — change implementations without modifying consumers
4. **Lifetime management** — framework handles creation and disposal

### Registering with Interface Segregation

\`\`\`csharp
// Register
builder.Services.AddScoped<IOrderService, OrderService>();

// Resolve (in controller/service constructor)
public class CheckoutService
{
    private readonly IOrderService _orderService;
    public CheckoutService(IOrderService orderService)
    {
        _orderService = orderService;
    }
}
\`\`\``,tasks:[{description:"Define an `IGreetingService` interface with a `Greet(string name)` method. Create two implementations: `FormalGreetingService` and `CasualGreetingService`. Register one as a scoped service and inject it into a minimal API endpoint.",starterCode:`// TODO: Define IGreetingService interface
// TODO: Create FormalGreetingService 
// TODO: Create CasualGreetingService
// TODO: Register and use in Program.cs`,solution:`public interface IGreetingService
{
    string Greet(string name);
}

public class FormalGreetingService : IGreetingService
{
    public string Greet(string name) => $"Good day, {name}. How may I assist you?";
}

public class CasualGreetingService : IGreetingService
{
    public string Greet(string name) => $"Hey {name}! What's up?";
}

// Program.cs
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IGreetingService, CasualGreetingService>();

var app = builder.Build();

app.MapGet("/greet/{name}", (string name, IGreetingService greeter) =>
    new { Greeting = greeter.Greet(name) });

app.Run();`,hints:["Define the interface first, then implement it","Use builder.Services.AddScoped<Interface, Implementation>()","Minimal API endpoints can accept injected services as parameters"]}]}],test:[{id:"mod6-q1",question:"What does builder.Services.AddScoped<T>() do?",options:["Creates a new instance every time","Creates one instance per HTTP request","Creates one instance for the app lifetime","Creates an instance per controller"],correctAnswer:1,explanation:"Scoped services are created once per HTTP request scope and disposed at the end of that request."},{id:"mod6-q2",question:"Does middleware execution order matter?",options:["No, ASP.NET Core automatically determines the order","Yes, middleware runs in the exact order it is added","Only authentication middleware order matters","Order only matters in production, not development"],correctAnswer:1,explanation:"Middleware runs in the order registered. Authentication must come before Authorization, etc."},{id:"mod6-q3",question:"What is the purpose of app.MapControllers()?",options:["Creates controller classes automatically","Maps HTTP requests to controller action methods based on routes","Compiles controllers into middleware","Validates controller code at startup"],correctAnswer:1,explanation:"MapControllers maps incoming HTTP requests to the appropriate controller actions based on route attributes."},{id:"mod6-q4",question:"Where should you configure services in ASP.NET Core?",options:["In the Startup.Configure method","Before builder.Build() using builder.Services","In the controller constructors","In appsettings.json"],correctAnswer:1,explanation:"Services are registered on builder.Services before builder.Build() creates the app."},{id:"mod6-q5",question:"What is constructor injection?",options:["Creating objects inside the constructor manually","Passing dependencies through the constructor parameters","Injecting JavaScript into the constructor","A reflection-based way to create objects"],correctAnswer:1,explanation:"Constructor injection is the preferred DI pattern where dependencies are provided as constructor parameters."}]},ef={id:"mod-7",title:"Controllers & Routing",description:"Build RESTful Web APIs with controllers, attribute routing, model binding, and action results.",topics:[{id:"mod7-t1",title:"Controllers & Actions",explanation:`## API Controllers

Controllers group related HTTP endpoints and inherit from \`ControllerBase\`.

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> _products = new()
    {
        new Product(1, "Laptop", 999.99m),
        new Product(2, "Mouse", 29.99m)
    };

    [HttpGet]
    public ActionResult<List<Product>> GetAll()
    {
        return Ok(_products);
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetById(int id)
    {
        var product = _products.FirstOrDefault(p => p.Id == id);
        return product is null ? NotFound() : Ok(product);
    }

    [HttpPost]
    public ActionResult<Product> Create(Product product)
    {
        _products.Add(product);
        return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Product product)
    {
        var index = _products.FindIndex(p => p.Id == id);
        if (index < 0) return NotFound();
        _products[index] = product;
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var removed = _products.RemoveAll(p => p.Id == id);
        return removed > 0 ? NoContent() : NotFound();
    }
}

public record Product(int Id, string Name, decimal Price);
\`\`\`

### Common Action Results

| Method | Status Code | Usage |
|--------|-------------|-------|
| Ok() | 200 | Successful GET |
| CreatedAtAction() | 201 | Successful POST |
| NoContent() | 204 | Successful PUT/DELETE |
| BadRequest() | 400 | Invalid input |
| NotFound() | 404 | Resource not found |
| Conflict() | 409 | Duplicate/conflict |`,tasks:[{description:"Create a `TodosController` with full CRUD operations for a Todo model (Id, Title, IsCompleted). Implement GET all, GET by id, POST, PUT, and DELETE endpoints.",starterCode:`[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private static List<Todo> _todos = new();
    private static int _nextId = 1;

    // TODO: Implement CRUD endpoints
}

public record Todo(int Id, string Title, bool IsCompleted);`,solution:`[ApiController]
[Route("api/[controller]")]
public class TodosController : ControllerBase
{
    private static List<Todo> _todos = new();
    private static int _nextId = 1;

    [HttpGet]
    public ActionResult<List<Todo>> GetAll() => Ok(_todos);

    [HttpGet("{id}")]
    public ActionResult<Todo> GetById(int id)
    {
        var todo = _todos.FirstOrDefault(t => t.Id == id);
        return todo is null ? NotFound() : Ok(todo);
    }

    [HttpPost]
    public ActionResult<Todo> Create(CreateTodoRequest request)
    {
        var todo = new Todo(_nextId++, request.Title, false);
        _todos.Add(todo);
        return CreatedAtAction(nameof(GetById), new { id = todo.Id }, todo);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Todo todo)
    {
        var index = _todos.FindIndex(t => t.Id == id);
        if (index < 0) return NotFound();
        _todos[index] = todo with { Id = id };
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        return _todos.RemoveAll(t => t.Id == id) > 0 ? NoContent() : NotFound();
    }
}

public record Todo(int Id, string Title, bool IsCompleted);
public record CreateTodoRequest(string Title);`,hints:["Use [HttpGet], [HttpPost], etc. to map HTTP methods","CreatedAtAction returns 201 with a Location header","Use a separate request DTO for POST to avoid exposing Id"]}]},{id:"mod7-t2",title:"Routing & Model Binding",explanation:`## Attribute Routing

\`\`\`csharp
[Route("api/[controller]")]  // /api/orders
public class OrdersController : ControllerBase
{
    [HttpGet("{id}")]              // GET /api/orders/5
    [HttpGet("status/{status}")]   // GET /api/orders/status/pending
    [HttpGet("search")]            // GET /api/orders/search?q=laptop
}
\`\`\`

### Route Constraints

\`\`\`csharp
[HttpGet("{id:int}")]         // Only matches integers
[HttpGet("{name:alpha}")]     // Only alphabetic characters
[HttpGet("{id:min(1)}")]      // Minimum value of 1
[HttpGet("{slug:regex(^[a-z0-9-]+$)}")]  // Custom regex
\`\`\`

### Model Binding Sources

\`\`\`csharp
[HttpPost("{id}")]
public IActionResult Process(
    [FromRoute] int id,           // From URL path
    [FromQuery] string? filter,   // From query string
    [FromBody] OrderRequest body,  // From request body (JSON)
    [FromHeader] string apiKey)   // From HTTP header
{
    // ...
}
\`\`\`

### [ApiController] Behavior

The \`[ApiController]\` attribute adds these automatic behaviors:
- **Automatic model validation** — returns 400 if ModelState is invalid
- **Binding source inference** — complex types from body, simple types from route/query
- **Problem details for errors** — standardized error response format

### Minimal APIs Alternative

\`\`\`csharp
app.MapGet("/products/{id:int}", (int id) => { /* ... */ });
app.MapPost("/products", (Product product) => { /* ... */ });
\`\`\``,tasks:[{description:"Create an endpoint that accepts route parameters, query parameters, and a request body. Build a search endpoint GET /api/products/search that accepts category (route), minPrice & maxPrice (query), and returns filtered results.",starterCode:`[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> _products = new()
    {
        new(1, "Laptop", "Electronics", 999.99m),
        new(2, "Mouse", "Electronics", 29.99m),
        new(3, "Desk", "Furniture", 249.99m),
        new(4, "Chair", "Furniture", 199.99m),
        new(5, "Keyboard", "Electronics", 79.99m)
    };

    // TODO: Create search endpoint with route + query params
}

public record Product(int Id, string Name, string Category, decimal Price);`,solution:`[ApiController]
[Route("api/products")]
public class ProductsController : ControllerBase
{
    private static readonly List<Product> _products = new()
    {
        new(1, "Laptop", "Electronics", 999.99m),
        new(2, "Mouse", "Electronics", 29.99m),
        new(3, "Desk", "Furniture", 249.99m),
        new(4, "Chair", "Furniture", 199.99m),
        new(5, "Keyboard", "Electronics", 79.99m)
    };

    [HttpGet("search/{category}")]
    public ActionResult<List<Product>> Search(
        [FromRoute] string category,
        [FromQuery] decimal? minPrice,
        [FromQuery] decimal? maxPrice)
    {
        var query = _products
            .Where(p => p.Category.Equals(category, StringComparison.OrdinalIgnoreCase));

        if (minPrice.HasValue)
            query = query.Where(p => p.Price >= minPrice.Value);
        if (maxPrice.HasValue)
            query = query.Where(p => p.Price <= maxPrice.Value);

        return Ok(query.ToList());
    }
}

public record Product(int Id, string Name, string Category, decimal Price);`,hints:["Use [FromRoute] for path parameters and [FromQuery] for query string","Make query parameters nullable (decimal?) to make them optional","Chain LINQ .Where() calls to build up the filter"]}]},{id:"mod7-t3",title:"Validation & DTOs",explanation:`## Data Transfer Objects (DTOs)

DTOs separate your API contract from your domain model:

\`\`\`csharp
// Domain model (internal)
public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; } // Never expose!
}

// DTO (API contract)
public record UserDto(int Id, string Name, string Email);
public record CreateUserRequest(string Name, string Email, string Password);
\`\`\`

### Model Validation with Data Annotations

\`\`\`csharp
using System.ComponentModel.DataAnnotations;

public class CreateProductRequest
{
    [Required]
    [StringLength(100, MinimumLength = 1)]
    public string Name { get; set; } = "";

    [Range(0.01, 99999.99)]
    public decimal Price { get; set; }

    [Required]
    public string Category { get; set; } = "";

    [Url]
    public string? ImageUrl { get; set; }

    [EmailAddress]
    public string? ContactEmail { get; set; }
}
\`\`\`

### Common Validation Attributes

| Attribute | Purpose |
|-----------|---------|
| [Required] | Field must be present |
| [StringLength(max)] | Max (and optional min) length |
| [Range(min, max)] | Numeric range |
| [EmailAddress] | Valid email format |
| [Url] | Valid URL format |
| [RegularExpression] | Custom regex pattern |
| [Compare] | Must match another property |

### Custom Validation

\`\`\`csharp
public class FutureDateAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext ctx)
    {
        if (value is DateTime date && date <= DateTime.Now)
            return new ValidationResult("Date must be in the future.");
        return ValidationResult.Success;
    }
}
\`\`\``,tasks:[{description:"Create DTOs for a user registration endpoint. Define CreateUserRequest with validation attributes for Name (required, 2-50 chars), Email (required, valid email), and Password (required, min 8 chars). Create a corresponding UserResponse DTO that excludes the password.",starterCode:`using System.ComponentModel.DataAnnotations;

// TODO: Create CreateUserRequest with validation
// TODO: Create UserResponse DTO
// TODO: Create a POST endpoint that validates and returns UserResponse`,solution:`using System.ComponentModel.DataAnnotations;

public class CreateUserRequest
{
    [Required]
    [StringLength(50, MinimumLength = 2)]
    public string Name { get; set; } = "";

    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";

    [Required]
    [MinLength(8)]
    public string Password { get; set; } = "";
}

public record UserResponse(int Id, string Name, string Email, DateTime CreatedAt);

// In controller:
[HttpPost]
public ActionResult<UserResponse> Register(CreateUserRequest request)
{
    // [ApiController] auto-validates — returns 400 if invalid
    var response = new UserResponse(1, request.Name, request.Email, DateTime.UtcNow);
    return CreatedAtAction(nameof(GetById), new { id = 1 }, response);
}`,hints:["Use [Required], [StringLength], [EmailAddress], [MinLength] attributes","Create separate request and response DTOs","[ApiController] automatically returns 400 for invalid models"]}]}],test:[{id:"mod7-q1",question:"What HTTP status code does CreatedAtAction return?",options:["200 OK","201 Created","204 No Content","301 Moved Permanently"],correctAnswer:1,explanation:"CreatedAtAction returns 201 Created with a Location header pointing to the new resource."},{id:"mod7-q2",question:"What does [ApiController] automatically do for invalid models?",options:["Throws an exception","Returns 400 Bad Request with validation details","Ignores validation and proceeds","Returns 500 Internal Server Error"],correctAnswer:1,explanation:"[ApiController] enables automatic model validation and returns 400 with problem details for invalid input."},{id:"mod7-q3",question:"What is the purpose of DTOs?",options:["To directly expose database entities","To separate the API contract from internal domain models","To slow down the application for security","To enforce database constraints"],correctAnswer:1,explanation:"DTOs prevent exposing internal details (like password hashes) and decouple the API shape from the data model."},{id:"mod7-q4",question:"Where does [FromQuery] bind data from?",options:["The URL path","The HTTP request body","The URL query string parameters","The HTTP headers"],correctAnswer:2,explanation:"[FromQuery] binds parameter values from the URL query string, e.g., ?filter=active."},{id:"mod7-q5",question:"What does a route constraint like {id:int} do?",options:["Converts the value to int automatically","Only matches if the route segment is a valid integer","Throws an error if id is not int","Sets the default value to 0"],correctAnswer:1,explanation:"Route constraints ensure the route only matches when the segment satisfies the constraint (e.g., is a valid integer)."}]},tf={id:"mod-8",title:"Entity Framework Core",description:"Master the ORM: DbContext, migrations, querying, relationships, and performance.",topics:[{id:"mod8-t1",title:"DbContext & Models",explanation:`## Entity Framework Core

EF Core is an **ORM** (Object-Relational Mapper) that lets you work with databases using C# objects.

### Setting Up DbContext

\`\`\`csharp
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    public DbSet<Product> Products => Set<Product>();
    public DbSet<Category> Categories => Set<Category>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(p => p.Id);
            entity.Property(p => p.Name).HasMaxLength(100).IsRequired();
            entity.Property(p => p.Price).HasPrecision(18, 2);
        });
    }
}
\`\`\`

### Entity Models

\`\`\`csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
    public int CategoryId { get; set; }
    public Category Category { get; set; } = null!;
}

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Product> Products { get; set; } = new();
}
\`\`\`

### Registration in Program.cs

\`\`\`csharp
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("Default")));
\`\`\`

### Migrations

\`\`\`bash
dotnet ef migrations add InitialCreate
dotnet ef database update
\`\`\``,tasks:[{description:"Define a DbContext with two entities: `Blog` (Id, Title, Url) and `Post` (Id, Title, Content, BlogId). Configure the one-to-many relationship in OnModelCreating.",starterCode:`using Microsoft.EntityFrameworkCore;

// TODO: Create Blog entity
// TODO: Create Post entity
// TODO: Create BlogDbContext with DbSets and relationship config`,solution:`using Microsoft.EntityFrameworkCore;

public class Blog
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Url { get; set; } = "";
    public List<Post> Posts { get; set; } = new();
}

public class Post
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Content { get; set; } = "";
    public int BlogId { get; set; }
    public Blog Blog { get; set; } = null!;
}

public class BlogDbContext : DbContext
{
    public BlogDbContext(DbContextOptions<BlogDbContext> options)
        : base(options) { }

    public DbSet<Blog> Blogs => Set<Blog>();
    public DbSet<Post> Posts => Set<Post>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog>()
            .HasMany(b => b.Posts)
            .WithOne(p => p.Blog)
            .HasForeignKey(p => p.BlogId);
    }
}`,hints:["Use navigation properties: Blog has List<Post>, Post has Blog","Configure relationships using HasMany/WithOne/HasForeignKey","DbSet<T> represents a table in the database"]}]},{id:"mod8-t2",title:"Querying & CRUD",explanation:`## Querying with EF Core

### Basic CRUD Operations

\`\`\`csharp
public class ProductService
{
    private readonly AppDbContext _db;

    public ProductService(AppDbContext db) => _db = db;

    // Read
    public async Task<List<Product>> GetAllAsync()
        => await _db.Products.ToListAsync();

    public async Task<Product?> GetByIdAsync(int id)
        => await _db.Products.FindAsync(id);

    // Create
    public async Task<Product> CreateAsync(Product product)
    {
        _db.Products.Add(product);
        await _db.SaveChangesAsync();
        return product;
    }

    // Update
    public async Task UpdateAsync(Product product)
    {
        _db.Products.Update(product);
        await _db.SaveChangesAsync();
    }

    // Delete
    public async Task DeleteAsync(int id)
    {
        var product = await _db.Products.FindAsync(id);
        if (product != null)
        {
            _db.Products.Remove(product);
            await _db.SaveChangesAsync();
        }
    }
}
\`\`\`

### LINQ Queries with EF Core

\`\`\`csharp
// Filtering
var expensive = await _db.Products
    .Where(p => p.Price > 100)
    .ToListAsync();

// Including related data (eager loading)
var blogsWithPosts = await _db.Blogs
    .Include(b => b.Posts)
    .ToListAsync();

// Projection
var names = await _db.Products
    .Select(p => new { p.Name, p.Price })
    .ToListAsync();

// Pagination
var page = await _db.Products
    .OrderBy(p => p.Name)
    .Skip(20)
    .Take(10)
    .ToListAsync();
\`\`\`

### Tracking vs No-Tracking

\`\`\`csharp
// Tracked (default) — EF monitors changes
var product = await _db.Products.FindAsync(1);

// No tracking — better for read-only queries
var products = await _db.Products
    .AsNoTracking()
    .ToListAsync();
\`\`\``,tasks:[{description:"Create a `ProductRepository` class that uses EF Core for: GetAll with optional filtering by name, GetById, Create, Update, Delete. Use async methods and include pagination support.",starterCode:`public class ProductRepository
{
    private readonly AppDbContext _db;

    public ProductRepository(AppDbContext db) => _db = db;

    // TODO: GetAllAsync with filtering and pagination
    // TODO: GetByIdAsync
    // TODO: CreateAsync
    // TODO: UpdateAsync
    // TODO: DeleteAsync
}`,solution:`public class ProductRepository
{
    private readonly AppDbContext _db;

    public ProductRepository(AppDbContext db) => _db = db;

    public async Task<(List<Product> Items, int Total)> GetAllAsync(
        string? nameFilter = null, int page = 1, int pageSize = 10)
    {
        var query = _db.Products.AsQueryable();

        if (!string.IsNullOrEmpty(nameFilter))
            query = query.Where(p => p.Name.Contains(nameFilter));

        int total = await query.CountAsync();
        var items = await query
            .OrderBy(p => p.Name)
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync();

        return (items, total);
    }

    public async Task<Product?> GetByIdAsync(int id)
        => await _db.Products.FindAsync(id);

    public async Task<Product> CreateAsync(Product product)
    {
        _db.Products.Add(product);
        await _db.SaveChangesAsync();
        return product;
    }

    public async Task UpdateAsync(Product product)
    {
        _db.Products.Update(product);
        await _db.SaveChangesAsync();
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var product = await _db.Products.FindAsync(id);
        if (product is null) return false;
        _db.Products.Remove(product);
        await _db.SaveChangesAsync();
        return true;
    }
}`,hints:["Use Skip and Take for pagination: .Skip((page-1)*pageSize).Take(pageSize)","Use AsNoTracking() for read-only queries to improve performance","Return a tuple (Items, Total) for paginated results"]}]},{id:"mod8-t3",title:"Migrations & Relationships",explanation:`## EF Core Migrations

Migrations keep your database schema in sync with your model.

\`\`\`bash
# Create a migration
dotnet ef migrations add AddCategoryTable

# Apply migrations to database
dotnet ef database update

# Remove last migration (if not applied)
dotnet ef migrations remove

# Generate SQL script
dotnet ef migrations script
\`\`\`

### Relationships

#### One-to-Many

\`\`\`csharp
public class Author
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Book> Books { get; set; } = new();
}

public class Book
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public int AuthorId { get; set; }        // FK
    public Author Author { get; set; } = null!;
}
\`\`\`

#### Many-to-Many

\`\`\`csharp
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public List<Course> Courses { get; set; } = new();
}

public class Course
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public List<Student> Students { get; set; } = new();
}

// EF Core 5+ auto-creates the join table
\`\`\`

#### One-to-One

\`\`\`csharp
public class User
{
    public int Id { get; set; }
    public UserProfile Profile { get; set; } = null!;
}

public class UserProfile
{
    public int Id { get; set; }
    public string Bio { get; set; } = "";
    public int UserId { get; set; }
    public User User { get; set; } = null!;
}
\`\`\`

### Seeding Data

\`\`\`csharp
protected override void OnModelCreating(ModelBuilder mb)
{
    mb.Entity<Category>().HasData(
        new Category { Id = 1, Name = "Electronics" },
        new Category { Id = 2, Name = "Furniture" }
    );
}
\`\`\``,tasks:[{description:"Design entities for an e-commerce: Customer (Id, Name, Email), Order (Id, OrderDate, CustomerId), and OrderItem (Id, ProductName, Quantity, UnitPrice, OrderId). Configure all relationships and add seed data.",starterCode:`using Microsoft.EntityFrameworkCore;

// TODO: Create Customer, Order, OrderItem entities
// TODO: Create ECommerceDbContext
// TODO: Configure relationships and seed data`,solution:`using Microsoft.EntityFrameworkCore;

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Email { get; set; } = "";
    public List<Order> Orders { get; set; } = new();
}

public class Order
{
    public int Id { get; set; }
    public DateTime OrderDate { get; set; }
    public int CustomerId { get; set; }
    public Customer Customer { get; set; } = null!;
    public List<OrderItem> Items { get; set; } = new();
}

public class OrderItem
{
    public int Id { get; set; }
    public string ProductName { get; set; } = "";
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
    public int OrderId { get; set; }
    public Order Order { get; set; } = null!;
}

public class ECommerceDbContext : DbContext
{
    public ECommerceDbContext(DbContextOptions<ECommerceDbContext> options)
        : base(options) { }

    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.Entity<Customer>().HasMany(c => c.Orders).WithOne(o => o.Customer).HasForeignKey(o => o.CustomerId);
        mb.Entity<Order>().HasMany(o => o.Items).WithOne(i => i.Order).HasForeignKey(i => i.OrderId);
        mb.Entity<OrderItem>().Property(i => i.UnitPrice).HasPrecision(18, 2);

        mb.Entity<Customer>().HasData(
            new Customer { Id = 1, Name = "Alice", Email = "alice@example.com" }
        );
    }
}`,hints:["Use navigation properties on both sides of each relationship","Configure Foreign Keys with HasForeignKey","Use HasPrecision for decimal columns to avoid precision warnings"]}]}],test:[{id:"mod8-q1",question:"What does DbContext represent in EF Core?",options:["A database table","A session with the database for querying and saving data","A SQL query builder","A migration script"],correctAnswer:1,explanation:"DbContext is a session with the database. It tracks changes and provides methods to query and save entities."},{id:"mod8-q2",question:"What does AsNoTracking() do?",options:["Prevents the query from executing","Disables change tracking for better read performance","Makes the query run synchronously","Removes all data from the table"],correctAnswer:1,explanation:"AsNoTracking tells EF Core not to track the returned entities, improving performance for read-only queries."},{id:"mod8-q3",question:"What is the purpose of EF Core migrations?",options:["To migrate data between databases","To keep the database schema in sync with the C# model","To optimize query performance","To back up the database"],correctAnswer:1,explanation:"Migrations generate incremental schema changes based on your model modifications."},{id:"mod8-q4",question:"How does EF Core handle many-to-many relationships (EF Core 5+)?",options:["It requires a manual join entity always","It auto-creates a join table from navigation properties on both sides","It does not support many-to-many","It uses a single table with duplicate rows"],correctAnswer:1,explanation:"EF Core 5+ can auto-create the join table when both entities have collection navigation properties."},{id:"mod8-q5",question:"What method applies pending migrations to the database?",options:["dotnet ef migrations add","dotnet ef database update","dotnet ef migrations remove","dotnet ef database drop"],correctAnswer:1,explanation:"dotnet ef database update applies all pending migrations to bring the database schema up to date."}]},nf={id:"mod-9",title:"Authentication & Authorization",description:"Implement JWT authentication, role-based authorization, and Identity framework in ASP.NET Core.",topics:[{id:"mod9-t1",title:"JWT Authentication",explanation:`## JSON Web Tokens (JWT)

JWT is a compact, URL-safe way to represent claims between two parties.

### JWT Structure

\`\`\`
Header.Payload.Signature

eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U
\`\`\`

### Generating JWT Tokens

\`\`\`csharp
public class TokenService
{
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config) => _config = config;

    public string GenerateToken(User user)
    {
        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Name),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
\`\`\`

### Configuring JWT in Program.cs

\`\`\`csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });

// In pipeline
app.UseAuthentication();
app.UseAuthorization();
\`\`\``,tasks:[{description:"Create a `TokenService` class that generates JWT tokens with user claims (Id, Name, Email, Role). Include token expiration and signing with HMAC-SHA256.",starterCode:`using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

public class TokenService
{
    // TODO: Implement GenerateToken method
}`,solution:`using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

public class TokenService
{
    private readonly IConfiguration _config;

    public TokenService(IConfiguration config) => _config = config;

    public string GenerateToken(int userId, string name, string email, string role)
    {
        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, userId.ToString()),
            new Claim(ClaimTypes.Name, name),
            new Claim(ClaimTypes.Email, email),
            new Claim(ClaimTypes.Role, role)
        };

        var token = new JwtSecurityToken(
            issuer: _config["Jwt:Issuer"],
            audience: _config["Jwt:Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(1),
            signingCredentials: creds);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}`,hints:["Use SymmetricSecurityKey with a secret from configuration","Add claims for user identity: Id, Name, Email, Role","Set expiration with DateTime.UtcNow.AddHours()"]}]},{id:"mod9-t2",title:"Authorization Policies",explanation:`## Authorization in ASP.NET Core

### Role-Based Authorization

\`\`\`csharp
[Authorize(Roles = "Admin")]
[HttpDelete("{id}")]
public IActionResult Delete(int id) { /* ... */ }

[Authorize(Roles = "Admin,Manager")]
[HttpPut("{id}")]
public IActionResult Update(int id) { /* ... */ }
\`\`\`

### Policy-Based Authorization

\`\`\`csharp
// Program.cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("MinAge18", policy =>
        policy.RequireClaim("DateOfBirth")
              .RequireAssertion(ctx =>
              {
                  var dob = DateTime.Parse(ctx.User.FindFirst("DateOfBirth")!.Value);
                  return DateTime.Today.Year - dob.Year >= 18;
              }));

    options.AddPolicy("PremiumUser", policy =>
        policy.RequireRole("Premium")
              .RequireClaim("Subscription", "active"));
});

// Usage
[Authorize(Policy = "PremiumUser")]
[HttpGet("premium-content")]
public IActionResult GetPremium() { /* ... */ }
\`\`\`

### Custom Authorization Handler

\`\`\`csharp
public class MinimumAgeRequirement : IAuthorizationRequirement
{
    public int MinimumAge { get; }
    public MinimumAgeRequirement(int age) => MinimumAge = age;
}

public class MinimumAgeHandler : AuthorizationHandler<MinimumAgeRequirement>
{
    protected override Task HandleRequirementAsync(
        AuthorizationHandlerContext context,
        MinimumAgeRequirement requirement)
    {
        var dobClaim = context.User.FindFirst("DateOfBirth");
        if (dobClaim != null)
        {
            var dob = DateTime.Parse(dobClaim.Value);
            var age = DateTime.Today.Year - dob.Year;
            if (age >= requirement.MinimumAge)
                context.Succeed(requirement);
        }
        return Task.CompletedTask;
    }
}
\`\`\`

### Attribute-Level Access

\`\`\`csharp
[AllowAnonymous]    // No auth required
[Authorize]          // Any authenticated user
[Authorize(Roles = "Admin")]  // Specific role
[Authorize(Policy = "CustomPolicy")]  // Custom policy
\`\`\``,tasks:[{description:'Set up authorization with two policies: "AdminOnly" requiring the Admin role, and "VerifiedUser" requiring a "EmailVerified" claim set to "true". Apply them to controller endpoints.',starterCode:`// Program.cs
// TODO: Configure authorization policies

// Controller
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    // TODO: Admin-only endpoint
    // TODO: Verified-user endpoint
    // TODO: Public endpoint
}`,solution:`// Program.cs
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy =>
        policy.RequireRole("Admin"));

    options.AddPolicy("VerifiedUser", policy =>
        policy.RequireClaim("EmailVerified", "true"));
});

// Controller
[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    [Authorize(Policy = "AdminOnly")]
    [HttpGet("dashboard")]
    public IActionResult GetDashboard() => Ok(new { Message = "Admin dashboard" });

    [Authorize(Policy = "VerifiedUser")]
    [HttpGet("profile")]
    public IActionResult GetProfile() => Ok(new { Message = "Verified user profile" });

    [AllowAnonymous]
    [HttpGet("public")]
    public IActionResult GetPublic() => Ok(new { Message = "Public content" });
}`,hints:["Use AddPolicy to define named authorization policies","RequireRole checks the Role claim, RequireClaim checks any claim","[AllowAnonymous] allows unauthenticated access to specific endpoints"]}]},{id:"mod9-t3",title:"ASP.NET Identity",explanation:`## ASP.NET Core Identity

Identity is a comprehensive membership system for user registration, login, and management.

### Setup

\`\`\`csharp
// Program.cs
builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>
{
    options.Password.RequiredLength = 8;
    options.Password.RequireDigit = true;
    options.Password.RequireUppercase = true;
    options.User.RequireUniqueEmail = true;
})
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();
\`\`\`

### ApplicationUser

\`\`\`csharp
public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; } = "";
    public string LastName { get; set; } = "";
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
\`\`\`

### Auth Controller

\`\`\`csharp
[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;

    public AuthController(
        UserManager<ApplicationUser> userManager,
        SignInManager<ApplicationUser> signInManager)
    {
        _userManager = userManager;
        _signInManager = signInManager;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        var user = new ApplicationUser
        {
            UserName = request.Email,
            Email = request.Email,
            FirstName = request.FirstName,
            LastName = request.LastName
        };

        var result = await _userManager.CreateAsync(user, request.Password);
        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok(new { Message = "User created successfully" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var result = await _signInManager.PasswordSignInAsync(
            request.Email, request.Password, false, false);

        if (!result.Succeeded)
            return Unauthorized();

        // Generate and return JWT token
        return Ok(new { Token = "..." });
    }
}
\`\`\``,tasks:[{description:"Create a registration endpoint using UserManager that validates password requirements, creates the user, and assigns a default role. Return appropriate error messages for failures.",starterCode:`[HttpPost("register")]
public async Task<IActionResult> Register(RegisterRequest request)
{
    // TODO: Create user with UserManager
    // TODO: Assign default role
    // TODO: Handle errors
}

public record RegisterRequest(string Email, string FirstName, string LastName, string Password);`,solution:`[HttpPost("register")]
public async Task<IActionResult> Register(RegisterRequest request)
{
    var existingUser = await _userManager.FindByEmailAsync(request.Email);
    if (existingUser != null)
        return Conflict(new { Message = "Email already registered." });

    var user = new ApplicationUser
    {
        UserName = request.Email,
        Email = request.Email,
        FirstName = request.FirstName,
        LastName = request.LastName
    };

    var result = await _userManager.CreateAsync(user, request.Password);
    if (!result.Succeeded)
        return BadRequest(new { Errors = result.Errors.Select(e => e.Description) });

    await _userManager.AddToRoleAsync(user, "User");

    return Ok(new { Message = "Registration successful." });
}

public record RegisterRequest(string Email, string FirstName, string LastName, string Password);`,hints:["Check for existing user with FindByEmailAsync before creating","UserManager.CreateAsync returns IdentityResult with Errors","AddToRoleAsync assigns a role after successful creation"]}]}],test:[{id:"mod9-q1",question:"What are the three parts of a JWT token?",options:["User, Password, Token","Header, Payload, Signature","Key, Value, Expiry","Issuer, Audience, Claims"],correctAnswer:1,explanation:"A JWT consists of a Header (algorithm), Payload (claims), and Signature (integrity verification)."},{id:"mod9-q2",question:"What does [Authorize] without parameters require?",options:["Admin role","Any authenticated user","No authentication","A specific policy"],correctAnswer:1,explanation:"[Authorize] without parameters requires any authenticated user, regardless of role."},{id:"mod9-q3",question:"In which order must auth middleware be added?",options:["UseAuthorization before UseAuthentication","UseAuthentication before UseAuthorization","Order does not matter","Only UseAuthorization is needed"],correctAnswer:1,explanation:"Authentication must run first (who are you?) before Authorization (are you allowed?)."},{id:"mod9-q4",question:"What does UserManager.CreateAsync return?",options:["The created user object","An IdentityResult with Succeeded and Errors properties","A boolean","A JWT token"],correctAnswer:1,explanation:"CreateAsync returns IdentityResult which contains Succeeded (bool) and Errors (list of error descriptions)."},{id:"mod9-q5",question:"What is the purpose of Claims in JWT?",options:["To encrypt the token","To store key-value pairs of user information","To compress the token size","To validate the token signature"],correctAnswer:1,explanation:"Claims are key-value pairs (e.g., Name, Email, Role) that carry user information in the token payload."}]},rf={id:"mod-10",title:"Error Handling & Logging",description:"Implement global error handling, structured logging with Serilog, and health checks.",topics:[{id:"mod10-t1",title:"Global Error Handling",explanation:`## Global Error Handling in ASP.NET Core

### Exception Handling Middleware

\`\`\`csharp
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.StatusCode = 500;
        context.Response.ContentType = "application/json";

        var error = context.Features.Get<IExceptionHandlerFeature>();
        if (error != null)
        {
            await context.Response.WriteAsJsonAsync(new
            {
                StatusCode = 500,
                Message = "An unexpected error occurred.",
                Detail = app.Environment.IsDevelopment() ? error.Error.Message : null
            });
        }
    });
});
\`\`\`

### Problem Details (RFC 7807)

\`\`\`csharp
builder.Services.AddProblemDetails(options =>
{
    options.CustomizeProblemDetails = ctx =>
    {
        ctx.ProblemDetails.Extensions["traceId"] = ctx.HttpContext.TraceIdentifier;
    };
});
\`\`\`

### Custom Exception Middleware

\`\`\`csharp
public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "Resource not found");
            context.Response.StatusCode = 404;
            await context.Response.WriteAsJsonAsync(new { ex.Message });
        }
        catch (ValidationException ex)
        {
            _logger.LogWarning(ex, "Validation error");
            context.Response.StatusCode = 400;
            await context.Response.WriteAsJsonAsync(new { ex.Message, ex.Errors });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception");
            context.Response.StatusCode = 500;
            await context.Response.WriteAsJsonAsync(new { Message = "Internal server error" });
        }
    }
}
\`\`\``,tasks:[{description:"Create a custom exception middleware that handles NotFoundException (404), ValidationException (400), and general exceptions (500). Use ILogger for structured logging.",starterCode:`public class ExceptionMiddleware
{
    // TODO: Implement exception handling middleware
}`,solution:`public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionMiddleware> _logger;

    public ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (NotFoundException ex)
        {
            _logger.LogWarning(ex, "Not found: {Message}", ex.Message);
            context.Response.StatusCode = 404;
            await context.Response.WriteAsJsonAsync(new { Error = ex.Message });
        }
        catch (ArgumentException ex)
        {
            _logger.LogWarning(ex, "Bad request: {Message}", ex.Message);
            context.Response.StatusCode = 400;
            await context.Response.WriteAsJsonAsync(new { Error = ex.Message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Unhandled exception");
            context.Response.StatusCode = 500;
            await context.Response.WriteAsJsonAsync(new { Error = "An unexpected error occurred." });
        }
    }
}

public class NotFoundException : Exception
{
    public NotFoundException(string message) : base(message) { }
}`,hints:["Wrap _next(context) in a try/catch block","Set context.Response.StatusCode before writing the response",'Use structured logging: _logger.LogError(ex, "Template {Param}", value)']}]},{id:"mod10-t2",title:"Structured Logging",explanation:`## Logging in ASP.NET Core

### Built-in ILogger

\`\`\`csharp
public class OrderService
{
    private readonly ILogger<OrderService> _logger;

    public OrderService(ILogger<OrderService> logger) => _logger = logger;

    public void ProcessOrder(int orderId)
    {
        _logger.LogInformation("Processing order {OrderId}", orderId);
        // ...
        _logger.LogWarning("Order {OrderId} has no items", orderId);
    }
}
\`\`\`

### Log Levels

| Level | When to use |
|-------|-------------|
| Trace | Very detailed diagnostic info |
| Debug | Development-time debugging |
| Information | General flow of the app |
| Warning | Abnormal or unexpected events |
| Error | Errors that need attention |
| Critical | System failures requiring action |

### Serilog Integration

\`\`\`csharp
// Program.cs
builder.Host.UseSerilog((context, config) =>
{
    config
        .ReadFrom.Configuration(context.Configuration)
        .WriteTo.Console()
        .WriteTo.File("logs/app-.log", rollingInterval: RollingInterval.Day)
        .Enrich.FromLogContext()
        .MinimumLevel.Information();
});

// Request logging middleware
app.UseSerilogRequestLogging();
\`\`\`

### Structured Logging Best Practices

\`\`\`csharp
// Good — structured with named placeholders
_logger.LogInformation("User {UserId} placed order {OrderId}", userId, orderId);

// Bad — string interpolation loses structure
_logger.LogInformation($"User {userId} placed order {orderId}");
\`\`\``,tasks:[{description:"Configure Serilog in a Program.cs to log to Console and a rolling file. Add request logging middleware. Create a service that uses ILogger with different log levels.",starterCode:`// Program.cs
// TODO: Configure Serilog
// TODO: Add request logging

public class PaymentService
{
    // TODO: Add logging at different levels
}`,solution:`// Program.cs
builder.Host.UseSerilog((context, config) =>
{
    config
        .WriteTo.Console()
        .WriteTo.File("logs/app-.log", rollingInterval: RollingInterval.Day)
        .Enrich.FromLogContext()
        .MinimumLevel.Information();
});

var app = builder.Build();
app.UseSerilogRequestLogging();

public class PaymentService
{
    private readonly ILogger<PaymentService> _logger;

    public PaymentService(ILogger<PaymentService> logger) => _logger = logger;

    public bool ProcessPayment(int orderId, decimal amount)
    {
        _logger.LogInformation("Processing payment for Order {OrderId}, Amount: {Amount}", orderId, amount);

        if (amount <= 0)
        {
            _logger.LogWarning("Invalid payment amount {Amount} for Order {OrderId}", amount, orderId);
            return false;
        }

        try
        {
            // Simulate payment processing
            _logger.LogDebug("Connecting to payment gateway for Order {OrderId}", orderId);
            _logger.LogInformation("Payment successful for Order {OrderId}", orderId);
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Payment failed for Order {OrderId}", orderId);
            return false;
        }
    }
}`,hints:["Use builder.Host.UseSerilog() to configure Serilog","Use structured logging with named placeholders, not string interpolation","app.UseSerilogRequestLogging() logs HTTP request details automatically"]}]},{id:"mod10-t3",title:"Health Checks",explanation:`## Health Checks in ASP.NET Core

Health checks verify that your application and its dependencies are running correctly.

\`\`\`csharp
// Program.cs
builder.Services.AddHealthChecks()
    .AddCheck("self", () => HealthCheckResult.Healthy())
    .AddSqlServer(builder.Configuration.GetConnectionString("Default")!)
    .AddRedis(builder.Configuration.GetConnectionString("Redis")!);

app.MapHealthChecks("/health");
\`\`\`

### Custom Health Check

\`\`\`csharp
public class ApiHealthCheck : IHealthCheck
{
    private readonly HttpClient _client;

    public ApiHealthCheck(HttpClient client) => _client = client;

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context,
        CancellationToken cancellationToken = default)
    {
        try
        {
            var response = await _client.GetAsync("/api/ping", cancellationToken);
            return response.IsSuccessStatusCode
                ? HealthCheckResult.Healthy("API is responsive")
                : HealthCheckResult.Degraded("API returned non-success status");
        }
        catch (Exception ex)
        {
            return HealthCheckResult.Unhealthy("API is unreachable", ex);
        }
    }
}

// Register
builder.Services.AddHealthChecks()
    .AddCheck<ApiHealthCheck>("external-api");
\`\`\``,tasks:[{description:'Create a custom health check that verifies a database connection and an external API. Register both checks with different tags (e.g., "db" and "api") and map separate health endpoints.',starterCode:`// TODO: Create DatabaseHealthCheck
// TODO: Create ExternalApiHealthCheck
// TODO: Register and map health endpoints`,solution:`public class DatabaseHealthCheck : IHealthCheck
{
    private readonly AppDbContext _db;
    public DatabaseHealthCheck(AppDbContext db) => _db = db;

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context, CancellationToken ct = default)
    {
        try
        {
            await _db.Database.CanConnectAsync(ct);
            return HealthCheckResult.Healthy("Database connection OK");
        }
        catch (Exception ex)
        {
            return HealthCheckResult.Unhealthy("Database unavailable", ex);
        }
    }
}

public class ExternalApiHealthCheck : IHealthCheck
{
    private readonly IHttpClientFactory _httpFactory;
    public ExternalApiHealthCheck(IHttpClientFactory httpFactory) => _httpFactory = httpFactory;

    public async Task<HealthCheckResult> CheckHealthAsync(
        HealthCheckContext context, CancellationToken ct = default)
    {
        var client = _httpFactory.CreateClient();
        try
        {
            var response = await client.GetAsync("https://api.example.com/health", ct);
            return response.IsSuccessStatusCode
                ? HealthCheckResult.Healthy()
                : HealthCheckResult.Degraded();
        }
        catch
        {
            return HealthCheckResult.Unhealthy("External API unreachable");
        }
    }
}

// Program.cs
builder.Services.AddHealthChecks()
    .AddCheck<DatabaseHealthCheck>("database", tags: new[] { "db" })
    .AddCheck<ExternalApiHealthCheck>("external-api", tags: new[] { "api" });

app.MapHealthChecks("/health");
app.MapHealthChecks("/health/db", new HealthCheckOptions
{
    Predicate = check => check.Tags.Contains("db")
});`,hints:["Implement IHealthCheck and return HealthCheckResult.Healthy/Degraded/Unhealthy","Use tags to group checks and filter them in different endpoints","Use CanConnectAsync() to verify database connectivity"]}]}],test:[{id:"mod10-q1",question:"Why use structured logging instead of string interpolation?",options:["String interpolation is slower","Structured logging preserves parameter names for searching and filtering in log aggregation tools","String interpolation does not work with ILogger","No real difference"],correctAnswer:1,explanation:"Structured logging preserves parameter names and values separately, making logs searchable and filterable."},{id:"mod10-q2",question:"What does UseExceptionHandler middleware do?",options:["Logs all exceptions to the console","Catches unhandled exceptions and produces error responses","Prevents exceptions from being thrown","Sends exceptions to an external monitoring service"],correctAnswer:1,explanation:"UseExceptionHandler catches unhandled exceptions in the pipeline and produces an appropriate error response."},{id:"mod10-q3",question:"What are the three health check statuses?",options:["Good, Bad, Unknown","Healthy, Degraded, Unhealthy","Up, Down, Maintenance","Green, Yellow, Red"],correctAnswer:1,explanation:"Health checks return Healthy (working), Degraded (working with issues), or Unhealthy (not working)."},{id:"mod10-q4",question:"Where should exception handling middleware be placed in the pipeline?",options:["At the very end","At the very beginning (first middleware)","After authentication","It does not matter"],correctAnswer:1,explanation:"Exception handling should be first so it catches exceptions from all subsequent middleware."},{id:"mod10-q5",question:"What log level is appropriate for an unhandled exception?",options:["Debug","Information","Warning","Error or Critical"],correctAnswer:3,explanation:"Unhandled exceptions indicate errors that need attention — use Error or Critical level."}]},of={id:"mod-11",title:"Configuration & Options Pattern",description:"Master appsettings.json, environment-specific configuration, the Options pattern, and secrets management.",topics:[{id:"mod11-t1",title:"Configuration System",explanation:`## Configuration in ASP.NET Core

ASP.NET Core uses a layered configuration system:

\`\`\`
appsettings.json → appsettings.{Environment}.json → Environment Variables → Command Line → User Secrets
\`\`\`

### appsettings.json

\`\`\`json
{
  "ConnectionStrings": {
    "Default": "Server=localhost;Database=MyApp;Trusted_Connection=true"
  },
  "Jwt": {
    "Key": "my-secret-key",
    "Issuer": "MyApp",
    "ExpiryMinutes": 60
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  }
}
\`\`\`

### Reading Configuration

\`\`\`csharp
// Direct access
var connStr = builder.Configuration.GetConnectionString("Default");
var jwtKey = builder.Configuration["Jwt:Key"];

// Section binding
var jwtSection = builder.Configuration.GetSection("Jwt");
var issuer = jwtSection["Issuer"];
\`\`\`

### Environment-Specific Config

\`\`\`csharp
// Automatically loaded based on ASPNETCORE_ENVIRONMENT
// appsettings.Development.json overrides appsettings.json in Development
if (app.Environment.IsDevelopment())
    app.UseSwagger();
\`\`\`

### User Secrets (Development Only)

\`\`\`bash
dotnet user-secrets init
dotnet user-secrets set "Jwt:Key" "my-dev-secret-key"
\`\`\``,tasks:[{description:"Create an appsettings.json with database, JWT, and SMTP email settings. Write code to read each section and demonstrate the configuration hierarchy.",starterCode:`// TODO: Define appsettings.json structure
// TODO: Read configuration values in Program.cs`,solution:`// appsettings.json
// {
//   "ConnectionStrings": { "Default": "Server=.;Database=MyApp;" },
//   "Jwt": { "Key": "secret", "Issuer": "MyApp", "ExpiryMinutes": 60 },
//   "Email": { "Host": "smtp.example.com", "Port": 587, "From": "noreply@example.com" }
// }

var builder = WebApplication.CreateBuilder(args);

var connStr = builder.Configuration.GetConnectionString("Default");
var jwtKey = builder.Configuration["Jwt:Key"];
var emailHost = builder.Configuration["Email:Host"];
var emailPort = builder.Configuration.GetValue<int>("Email:Port");

Console.WriteLine($"DB: {connStr}");
Console.WriteLine($"JWT Issuer: {builder.Configuration["Jwt:Issuer"]}");
Console.WriteLine($"Email: {emailHost}:{emailPort}");`,hints:['Use GetConnectionString("name") for connection strings','Use ["Section:Key"] syntax for nested values',"GetValue<T>() converts the string to the specified type"]}]},{id:"mod11-t2",title:"Options Pattern",explanation:`## Options Pattern

The Options pattern binds configuration sections to strongly-typed classes.

\`\`\`csharp
public class JwtOptions
{
    public const string SectionName = "Jwt";
    public string Key { get; set; } = "";
    public string Issuer { get; set; } = "";
    public string Audience { get; set; } = "";
    public int ExpiryMinutes { get; set; } = 60;
}
\`\`\`

### Registration

\`\`\`csharp
builder.Services.Configure<JwtOptions>(
    builder.Configuration.GetSection(JwtOptions.SectionName));
\`\`\`

### Consumption

\`\`\`csharp
public class TokenService
{
    private readonly JwtOptions _options;

    public TokenService(IOptions<JwtOptions> options)
    {
        _options = options.Value;
    }

    public string Generate() => $"Issuer: {_options.Issuer}";
}
\`\`\`

### IOptions vs IOptionsSnapshot vs IOptionsMonitor

| Interface | Lifetime | Reloads |
|-----------|----------|--------|
| IOptions<T> | Singleton | No |
| IOptionsSnapshot<T> | Scoped | Yes, per request |
| IOptionsMonitor<T> | Singleton | Yes, live updates |`,tasks:[{description:"Create an EmailOptions class bound to configuration. Register it using the Options pattern and inject it into an EmailService.",starterCode:`// TODO: Create EmailOptions class
// TODO: Register in Program.cs
// TODO: Create EmailService using IOptions<EmailOptions>`,solution:`public class EmailOptions
{
    public const string SectionName = "Email";
    public string Host { get; set; } = "";
    public int Port { get; set; } = 587;
    public string From { get; set; } = "";
    public string Username { get; set; } = "";
    public string Password { get; set; } = "";
}

// Program.cs
builder.Services.Configure<EmailOptions>(
    builder.Configuration.GetSection(EmailOptions.SectionName));
builder.Services.AddTransient<IEmailService, EmailService>();

public interface IEmailService { Task SendAsync(string to, string subject, string body); }

public class EmailService : IEmailService
{
    private readonly EmailOptions _options;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IOptions<EmailOptions> options, ILogger<EmailService> logger)
    {
        _options = options.Value;
        _logger = logger;
    }

    public async Task SendAsync(string to, string subject, string body)
    {
        _logger.LogInformation("Sending email from {From} via {Host}:{Port}", _options.From, _options.Host, _options.Port);
        await Task.CompletedTask; // Simulate sending
    }
}`,hints:["Create a POCO class matching the JSON section structure","Use builder.Services.Configure<T>(section) to bind","Inject IOptions<T> and access .Value"]}]},{id:"mod11-t3",title:"Secrets & Environment Variables",explanation:`## Secrets Management

### User Secrets (Development)

\`\`\`bash
dotnet user-secrets init
dotnet user-secrets set "Jwt:Key" "super-secret-dev-key"
dotnet user-secrets set "ConnectionStrings:Default" "Server=localhost;..."
\`\`\`

### Environment Variables

\`\`\`bash
# Use double underscore for nested keys
export ConnectionStrings__Default="Server=prod;..."
export Jwt__Key="prod-secret"
\`\`\`

### Azure Key Vault

\`\`\`csharp
builder.Configuration.AddAzureKeyVault(
    new Uri("https://my-vault.vault.azure.net/"),
    new DefaultAzureCredential());
\`\`\`

### Best Practices

- **Never** store secrets in appsettings.json or source control
- Use User Secrets for development
- Use environment variables or Key Vault in production
- Use the \`[DataProtection]\` API for encrypting sensitive data at rest`,tasks:[{description:"Demonstrate how to set up user secrets for a project and override appsettings.json values using environment variables. Show the configuration priority order.",starterCode:`// TODO: Show how secrets override appsettings
// TODO: Demonstrate environment variable naming convention`,solution:`// 1. Initialize user secrets
// dotnet user-secrets init
// dotnet user-secrets set "Database:Password" "dev-password-123"

// 2. appsettings.json (lowest priority for Database:Password)
// { "Database": { "Host": "localhost", "Password": "PLACEHOLDER" } }

// 3. Environment variable (highest priority)
// set Database__Password=prod-password-456

// 4. In code, just read — the framework merges automatically
var builder = WebApplication.CreateBuilder(args);
var dbPassword = builder.Configuration["Database:Password"];
// Will be: user-secret value in dev, env var in prod

Console.WriteLine($"DB Password source: {dbPassword}");

// Priority (highest to lowest):
// Command line > Environment variables > User secrets > appsettings.{Env}.json > appsettings.json`,hints:["User secrets are stored outside the project directory","Environment variables use __ (double underscore) for nesting","Configuration sources are merged — later sources override earlier ones"]}]}],test:[{id:"mod11-q1",question:"What is the configuration source priority order (highest to lowest)?",options:["appsettings > environment variables > user secrets","Command line > env variables > user secrets > appsettings.{Env}.json > appsettings.json","user secrets > appsettings > env variables","All sources have equal priority"],correctAnswer:1,explanation:"Later configuration sources override earlier ones. Command line args have the highest priority."},{id:"mod11-q2",question:"What is the difference between IOptions<T> and IOptionsSnapshot<T>?",options:["No difference","IOptions is singleton and does not reload; IOptionsSnapshot is scoped and reloads per request","IOptionsSnapshot is for development only","IOptions supports validation, IOptionsSnapshot does not"],correctAnswer:1,explanation:"IOptions<T> is a singleton with a fixed value. IOptionsSnapshot<T> is scoped and re-reads configuration per request."},{id:"mod11-q3",question:"How do you represent nested configuration keys as environment variables?",options:["Using dots: Section.Key","Using double underscores: Section__Key","Using dashes: Section-Key","Using slashes: Section/Key"],correctAnswer:1,explanation:"Environment variables use __ (double underscore) as the hierarchy separator, e.g., Jwt__Key."},{id:"mod11-q4",question:"Should you store secrets in appsettings.json?",options:["Yes, it is the recommended location","Only in production environments","No, use User Secrets for dev and Key Vault/env vars for production","Yes, if the file is in .gitignore"],correctAnswer:2,explanation:"Never store secrets in appsettings.json. Use User Secrets (dev) and Key Vault or env vars (production)."}]},sf={id:"mod-12",title:"Testing in C#",description:"Unit testing with xUnit, mocking with Moq, and integration testing ASP.NET Core APIs.",topics:[{id:"mod12-t1",title:"Unit Testing with xUnit",explanation:`## Unit Testing with xUnit

\`\`\`csharp
using Xunit;

public class CalculatorTests
{
    [Fact]
    public void Add_TwoNumbers_ReturnsSum()
    {
        var calc = new Calculator();
        var result = calc.Add(3, 5);
        Assert.Equal(8, result);
    }

    [Theory]
    [InlineData(1, 1, 2)]
    [InlineData(-1, 1, 0)]
    [InlineData(0, 0, 0)]
    public void Add_Various_ReturnsCorrectSum(int a, int b, int expected)
    {
        var calc = new Calculator();
        Assert.Equal(expected, calc.Add(a, b));
    }
}
\`\`\`

### Common Assertions

\`\`\`csharp
Assert.Equal(expected, actual);
Assert.True(condition);
Assert.False(condition);
Assert.Null(value);
Assert.NotNull(value);
Assert.Throws<ArgumentException>(() => method());
Assert.Contains("substring", text);
Assert.Empty(collection);
Assert.Single(collection);
\`\`\`

### Test Organization

\`\`\`csharp
// Naming: Method_Scenario_Expected
// Arrange-Act-Assert pattern
[Fact]
public void Withdraw_InsufficientFunds_ReturnsFalse()
{
    // Arrange
    var account = new BankAccount(100);

    // Act
    var result = account.Withdraw(200);

    // Assert
    Assert.False(result);
}
\`\`\``,tasks:[{description:"Write xUnit tests for a StringCalculator class that has an Add method taking a comma-separated string of numbers. Test empty string, single number, two numbers, and negative number exceptions.",starterCode:`public class StringCalculator
{
    public int Add(string numbers)
    {
        if (string.IsNullOrEmpty(numbers)) return 0;
        var parts = numbers.Split(',');
        int sum = 0;
        foreach (var p in parts)
        {
            int n = int.Parse(p.Trim());
            if (n < 0) throw new ArgumentException("Negatives not allowed");
            sum += n;
        }
        return sum;
    }
}

// TODO: Write tests`,solution:`public class StringCalculatorTests
{
    private readonly StringCalculator _calc = new();

    [Fact]
    public void Add_EmptyString_ReturnsZero()
    {
        Assert.Equal(0, _calc.Add(""));
    }

    [Fact]
    public void Add_SingleNumber_ReturnsThatNumber()
    {
        Assert.Equal(5, _calc.Add("5"));
    }

    [Theory]
    [InlineData("1,2", 3)]
    [InlineData("10,20,30", 60)]
    public void Add_MultipleNumbers_ReturnsSum(string input, int expected)
    {
        Assert.Equal(expected, _calc.Add(input));
    }

    [Fact]
    public void Add_NegativeNumber_ThrowsArgumentException()
    {
        Assert.Throws<ArgumentException>(() => _calc.Add("-1,2"));
    }
}`,hints:["Use [Fact] for single test cases, [Theory] with [InlineData] for parameterized tests","Follow the Arrange-Act-Assert pattern","Assert.Throws<T> verifies that an exception is thrown"]}]},{id:"mod12-t2",title:"Mocking with Moq",explanation:`## Mocking Dependencies with Moq

\`\`\`csharp
using Moq;
using Xunit;

public class OrderServiceTests
{
    [Fact]
    public async Task PlaceOrder_ValidOrder_SendsEmail()
    {
        // Arrange
        var mockRepo = new Mock<IOrderRepository>();
        var mockEmail = new Mock<IEmailService>();
        var service = new OrderService(mockRepo.Object, mockEmail.Object);

        mockRepo.Setup(r => r.SaveAsync(It.IsAny<Order>()))
                .ReturnsAsync(true);

        var order = new Order { Id = 1, Total = 100 };

        // Act
        await service.PlaceOrderAsync(order);

        // Assert
        mockEmail.Verify(e => e.SendAsync(
            It.IsAny<string>(),
            It.Is<string>(s => s.Contains("Order")),
            It.IsAny<string>()
        ), Times.Once);
    }
}
\`\`\`

### Common Moq Setup

\`\`\`csharp
// Return value
mock.Setup(x => x.GetById(1)).Returns(new User());
mock.Setup(x => x.GetByIdAsync(1)).ReturnsAsync(new User());

// Throw exception
mock.Setup(x => x.Save(null!)).Throws<ArgumentNullException>();

// Callback
mock.Setup(x => x.Log(It.IsAny<string>()))
    .Callback<string>(msg => Console.WriteLine(msg));

// Verify calls
mock.Verify(x => x.Save(It.IsAny<User>()), Times.Once);
mock.Verify(x => x.Delete(It.IsAny<int>()), Times.Never);
\`\`\``,tasks:[{description:"Write tests for a UserService that depends on IUserRepository and IEmailService. Test that registration creates a user and sends a welcome email. Test that duplicate email returns an error.",starterCode:"// TODO: Write tests for UserService using Moq",solution:`public class UserServiceTests
{
    private readonly Mock<IUserRepository> _mockRepo;
    private readonly Mock<IEmailService> _mockEmail;
    private readonly UserService _service;

    public UserServiceTests()
    {
        _mockRepo = new Mock<IUserRepository>();
        _mockEmail = new Mock<IEmailService>();
        _service = new UserService(_mockRepo.Object, _mockEmail.Object);
    }

    [Fact]
    public async Task Register_NewUser_CreatesAndSendsEmail()
    {
        _mockRepo.Setup(r => r.GetByEmailAsync("test@example.com"))
                 .ReturnsAsync((User?)null);
        _mockRepo.Setup(r => r.CreateAsync(It.IsAny<User>()))
                 .ReturnsAsync(new User { Id = 1, Email = "test@example.com" });

        await _service.RegisterAsync("test@example.com", "Test User", "password");

        _mockRepo.Verify(r => r.CreateAsync(It.IsAny<User>()), Times.Once);
        _mockEmail.Verify(e => e.SendAsync("test@example.com", It.IsAny<string>(), It.IsAny<string>()), Times.Once);
    }

    [Fact]
    public async Task Register_DuplicateEmail_ThrowsException()
    {
        _mockRepo.Setup(r => r.GetByEmailAsync("taken@example.com"))
                 .ReturnsAsync(new User { Email = "taken@example.com" });

        await Assert.ThrowsAsync<InvalidOperationException>(
            () => _service.RegisterAsync("taken@example.com", "User", "pass"));
    }
}`,hints:["Use Mock<T> to create mock instances of interfaces","Setup defines what the mock returns; Verify checks that methods were called","Use It.IsAny<T>() for any argument matching"]}]},{id:"mod12-t3",title:"Integration Testing",explanation:`## Integration Testing ASP.NET Core

Integration tests verify the full HTTP pipeline using \`WebApplicationFactory\`.

\`\`\`csharp
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

public class ApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public ApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetProducts_ReturnsSuccess()
    {
        var response = await _client.GetAsync("/api/products");
        response.EnsureSuccessStatusCode();

        var content = await response.Content.ReadAsStringAsync();
        Assert.Contains("Laptop", content);
    }

    [Fact]
    public async Task CreateProduct_ValidInput_Returns201()
    {
        var product = new { Name = "Test", Price = 9.99 };
        var content = JsonContent.Create(product);

        var response = await _client.PostAsync("/api/products", content);

        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }
}
\`\`\`

### Custom WebApplicationFactory

\`\`\`csharp
public class CustomFactory : WebApplicationFactory<Program>
{
    protected override void ConfigureWebHost(IWebHostBuilder builder)
    {
        builder.ConfigureServices(services =>
        {
            // Replace real DB with in-memory
            services.AddDbContext<AppDbContext>(options =>
                options.UseInMemoryDatabase("TestDb"));
        });
    }
}
\`\`\``,tasks:[{description:"Write an integration test class that tests GET and POST endpoints of a products API. Use WebApplicationFactory with an in-memory database.",starterCode:"// TODO: Create integration test class",solution:`public class ProductApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public ProductApiTests(WebApplicationFactory<Program> factory)
    {
        _client = factory.WithWebHostBuilder(builder =>
        {
            builder.ConfigureServices(services =>
            {
                services.AddDbContext<AppDbContext>(opt =>
                    opt.UseInMemoryDatabase("TestDb"));
            });
        }).CreateClient();
    }

    [Fact]
    public async Task GetAll_ReturnsOk()
    {
        var response = await _client.GetAsync("/api/products");
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task Create_ValidProduct_ReturnsCreated()
    {
        var product = new { Name = "Widget", Price = 19.99 };
        var response = await _client.PostAsJsonAsync("/api/products", product);
        Assert.Equal(HttpStatusCode.Created, response.StatusCode);
    }

    [Fact]
    public async Task Create_InvalidProduct_ReturnsBadRequest()
    {
        var product = new { Name = "", Price = -1 };
        var response = await _client.PostAsJsonAsync("/api/products", product);
        Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
    }
}`,hints:["Use IClassFixture<WebApplicationFactory<Program>> for shared test server","Override ConfigureServices to swap real services for test doubles","Use PostAsJsonAsync for sending JSON content in integration tests"]}]}],test:[{id:"mod12-q1",question:"What is the difference between [Fact] and [Theory] in xUnit?",options:["[Fact] is for async tests, [Theory] for sync tests","[Fact] runs once, [Theory] runs multiple times with different data","[Theory] is deprecated in favor of [Fact]","No difference"],correctAnswer:1,explanation:"[Fact] is for a single test case. [Theory] is parameterized — it runs once per set of [InlineData]."},{id:"mod12-q2",question:"What does Mock.Verify do?",options:["Verifies the mock was created successfully","Checks that a specific method was called with expected arguments and frequency","Validates the mock setup is correct","Tests that the mock returns correct values"],correctAnswer:1,explanation:"Verify asserts that a mocked method was called a specific number of times with matching arguments."},{id:"mod12-q3",question:"What does WebApplicationFactory provide?",options:["A factory for creating web pages","An in-memory test server that hosts the full ASP.NET Core pipeline","A mock HTTP client","A code generator for controllers"],correctAnswer:1,explanation:"WebApplicationFactory creates an in-memory test server, allowing full integration testing of the HTTP pipeline."},{id:"mod12-q4",question:"What is the Arrange-Act-Assert pattern?",options:["A design pattern for middleware","A test structure: set up data, execute the action, check the result","A way to organize controllers","A dependency injection pattern"],correctAnswer:1,explanation:"AAA structures tests into three phases: Arrange (setup), Act (execute), Assert (verify)."}]},af={id:"mod-13",title:"SignalR & Real-Time Communication",description:"Build real-time features with SignalR hubs, client connections, and group messaging.",topics:[{id:"mod13-t1",title:"SignalR Hubs",explanation:`## SignalR Overview

SignalR enables real-time, bidirectional communication between server and clients.

### Creating a Hub

\`\`\`csharp
using Microsoft.AspNetCore.SignalR;

public class ChatHub : Hub
{
    public async Task SendMessage(string user, string message)
    {
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }

    public async Task JoinGroup(string groupName)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        await Clients.Group(groupName).SendAsync("UserJoined", Context.ConnectionId);
    }

    public override async Task OnConnectedAsync()
    {
        await Clients.All.SendAsync("UserConnected", Context.ConnectionId);
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        await Clients.All.SendAsync("UserDisconnected", Context.ConnectionId);
        await base.OnDisconnectedAsync(exception);
    }
}
\`\`\`

### Registration

\`\`\`csharp
builder.Services.AddSignalR();
app.MapHub<ChatHub>("/chathub");
\`\`\`

### Client Targets

\`\`\`csharp
Clients.All          // All connected clients
Clients.Caller       // The caller only
Clients.Others       // Everyone except the caller
Clients.Group("name") // Specific group
Clients.User("userId") // Specific user
\`\`\``,tasks:[{description:"Create a NotificationHub that supports: broadcasting to all, sending to specific groups, and tracking connected users.",starterCode:`public class NotificationHub : Hub
{
    // TODO: Implement broadcast, group send, user tracking
}`,solution:`public class NotificationHub : Hub
{
    private static readonly HashSet<string> _connectedUsers = new();

    public async Task SendToAll(string message)
    {
        await Clients.All.SendAsync("ReceiveNotification", message, DateTime.UtcNow);
    }

    public async Task SendToGroup(string group, string message)
    {
        await Clients.Group(group).SendAsync("ReceiveNotification", message, DateTime.UtcNow);
    }

    public async Task JoinGroup(string group)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, group);
        await Clients.Caller.SendAsync("JoinedGroup", group);
    }

    public async Task LeaveGroup(string group)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, group);
    }

    public override async Task OnConnectedAsync()
    {
        _connectedUsers.Add(Context.ConnectionId);
        await Clients.All.SendAsync("UsersOnline", _connectedUsers.Count);
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? ex)
    {
        _connectedUsers.Remove(Context.ConnectionId);
        await Clients.All.SendAsync("UsersOnline", _connectedUsers.Count);
        await base.OnDisconnectedAsync(ex);
    }
}`,hints:["Override OnConnectedAsync and OnDisconnectedAsync for connection tracking","Use Groups.AddToGroupAsync to manage group membership",'Clients.Group("name") sends to all connections in that group']}]},{id:"mod13-t2",title:"Strongly-Typed Hubs",explanation:`## Strongly-Typed Hubs

Avoid magic strings with a typed hub interface.

\`\`\`csharp
public interface IChatClient
{
    Task ReceiveMessage(string user, string message);
    Task UserJoined(string connectionId);
    Task UserLeft(string connectionId);
}

public class ChatHub : Hub<IChatClient>
{
    public async Task SendMessage(string user, string message)
    {
        // Compile-time safety!
        await Clients.All.ReceiveMessage(user, message);
    }
}
\`\`\`

### Sending from Outside the Hub

\`\`\`csharp
public class OrderService
{
    private readonly IHubContext<ChatHub, IChatClient> _hub;

    public OrderService(IHubContext<ChatHub, IChatClient> hub) => _hub = hub;

    public async Task NotifyOrderCompleted(int orderId)
    {
        await _hub.Clients.All.ReceiveMessage("System", $"Order {orderId} completed!");
    }
}
\`\`\``,tasks:[{description:"Convert a basic ChatHub to use a strongly-typed client interface. Add methods for ReceiveMessage, UserTyping, and OnlineCount.",starterCode:`// TODO: Define IGameClient interface
// TODO: Create strongly-typed GameHub`,solution:`public interface IGameClient
{
    Task ReceiveMessage(string user, string message);
    Task UserTyping(string user);
    Task OnlineCount(int count);
}

public class GameHub : Hub<IGameClient>
{
    private static int _online = 0;

    public async Task SendMessage(string user, string message)
    {
        await Clients.All.ReceiveMessage(user, message);
    }

    public async Task NotifyTyping(string user)
    {
        await Clients.Others.UserTyping(user);
    }

    public override async Task OnConnectedAsync()
    {
        Interlocked.Increment(ref _online);
        await Clients.All.OnlineCount(_online);
        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? ex)
    {
        Interlocked.Decrement(ref _online);
        await Clients.All.OnlineCount(_online);
        await base.OnDisconnectedAsync(ex);
    }
}`,hints:["Define an interface with Task-returning methods for each client event","Inherit Hub<TInterface> instead of Hub for type safety","Use Interlocked for thread-safe counter operations"]}]}],test:[{id:"mod13-q1",question:"What transport protocols does SignalR use?",options:["Only WebSockets","WebSockets, Server-Sent Events, Long Polling (with automatic fallback)","Only HTTP polling","gRPC and WebSockets"],correctAnswer:1,explanation:"SignalR negotiates the best transport: WebSockets first, then SSE, then Long Polling."},{id:"mod13-q2",question:"How do you send a message to all clients except the caller?",options:["Clients.All","Clients.Others","Clients.AllExcept(Context.ConnectionId)",'Clients.Group("others")'],correctAnswer:1,explanation:"Clients.Others sends to all connected clients except the one that invoked the hub method."},{id:"mod13-q3",question:"What is the benefit of a strongly-typed hub?",options:["Better performance","Compile-time safety for client method names and parameters","Automatic serialization","Built-in authentication"],correctAnswer:1,explanation:"Strongly-typed hubs use an interface, giving compile-time checks instead of magic string method names."},{id:"mod13-q4",question:"How can you send SignalR messages from outside a Hub?",options:["You cannot","Inject IHubContext<THub> into any service","Create a new Hub instance manually","Use static Hub methods"],correctAnswer:1,explanation:"IHubContext<THub> can be injected via DI into any class to send messages without being inside the hub."}]},lf={id:"mod-14",title:"Blazor Fundamentals",description:"Build interactive web UIs with Blazor components, data binding, and event handling.",topics:[{id:"mod14-t1",title:"Blazor Components",explanation:`## Blazor Overview

Blazor lets you build interactive web UIs using C# instead of JavaScript.

### Component Structure (.razor)

\`\`\`csharp
@page "/counter"

<h1>Counter</h1>
<p>Current count: @currentCount</p>
<button @onclick="Increment">Click me</button>

@code {
    private int currentCount = 0;

    private void Increment()
    {
        currentCount++;
    }
}
\`\`\`

### Hosting Models

| Model | Description |
|-------|-------------|
| Blazor Server | Runs on server, uses SignalR for UI updates |
| Blazor WebAssembly | Runs in browser via WebAssembly |
| Blazor United (NET 8+) | Combines both with per-component choice |

### Component Parameters

\`\`\`csharp
// ChildComponent.razor
<h2>@Title</h2>
<p>@ChildContent</p>

@code {
    [Parameter] public string Title { get; set; } = "";
    [Parameter] public RenderFragment? ChildContent { get; set; }
}

// Usage
<ChildComponent Title="Hello">
    <p>This is child content.</p>
</ChildComponent>
\`\`\``,tasks:[{description:"Create a Blazor TodoList component with add, toggle complete, and delete functionality.",starterCode:`@page "/todos"

@* TODO: Build a complete todo list component *@

@code {
    // TODO: Todo model and list management
}`,solution:`@page "/todos"

<h1>Todo List</h1>

<div>
    <input @bind="newTodo" placeholder="New todo..." />
    <button @onclick="AddTodo">Add</button>
</div>

<ul>
    @foreach (var todo in todos)
    {
        <li>
            <input type="checkbox" checked="@todo.IsDone" @onchange="() => Toggle(todo)" />
            <span style="@(todo.IsDone ? "text-decoration: line-through" : "")">@todo.Title</span>
            <button @onclick="() => Remove(todo)">X</button>
        </li>
    }
</ul>

<p>@todos.Count(t => !t.IsDone) items remaining</p>

@code {
    private List<TodoItem> todos = new();
    private string newTodo = "";

    private void AddTodo()
    {
        if (!string.IsNullOrWhiteSpace(newTodo))
        {
            todos.Add(new TodoItem { Title = newTodo });
            newTodo = "";
        }
    }

    private void Toggle(TodoItem todo) => todo.IsDone = !todo.IsDone;
    private void Remove(TodoItem todo) => todos.Remove(todo);

    private class TodoItem
    {
        public string Title { get; set; } = "";
        public bool IsDone { get; set; }
    }
}`,hints:["Use @bind for two-way data binding on inputs","Use @onclick for button click handlers","@foreach renders a list — remember the Blazor component re-renders on state change"]}]},{id:"mod14-t2",title:"Data Binding & Events",explanation:`## Data Binding in Blazor

### One-Way Binding

\`\`\`csharp
<p>Hello, @name!</p>
@code { private string name = "World"; }
\`\`\`

### Two-Way Binding

\`\`\`csharp
<input @bind="searchText" />
<input @bind="searchText" @bind:event="oninput" />
@code { private string searchText = ""; }
\`\`\`

### Event Handling

\`\`\`csharp
<button @onclick="HandleClick">Click</button>
<button @onclick="() => HandleClickWithArg(42)">Click 42</button>
<input @onchange="OnValueChanged" />
<input @oninput="e => text = e.Value?.ToString()" />

@code {
    private void HandleClick() { }
    private void HandleClickWithArg(int id) { }
    private void OnValueChanged(ChangeEventArgs e) { }
}
\`\`\`

### EventCallback (Parent-Child Communication)

\`\`\`csharp
// Child
<button @onclick="() => OnClick.InvokeAsync(Value)">Select</button>
@code {
    [Parameter] public int Value { get; set; }
    [Parameter] public EventCallback<int> OnClick { get; set; }
}

// Parent
<ChildComponent Value="5" OnClick="HandleSelection" />
@code {
    private void HandleSelection(int value) { }
}
\`\`\``,tasks:[{description:"Create a form component with two-way binding for name, email, and a dropdown for role. Validate and display the submitted data.",starterCode:`@page "/form"

@* TODO: Create a form with data binding and validation *@

@code {
    // TODO: Form fields and submission
}`,solution:`@page "/form"

<h1>User Form</h1>

<div>
    <label>Name: <input @bind="name" /></label>
    <label>Email: <input @bind="email" type="email" /></label>
    <label>Role:
        <select @bind="role">
            <option value="">Select...</option>
            <option>Admin</option>
            <option>User</option>
            <option>Guest</option>
        </select>
    </label>
    <button @onclick="Submit" disabled="@(!IsValid)">Submit</button>
</div>

@if (submitted)
{
    <div>
        <h2>Submitted:</h2>
        <p>Name: @name</p>
        <p>Email: @email</p>
        <p>Role: @role</p>
    </div>
}

@code {
    private string name = "";
    private string email = "";
    private string role = "";
    private bool submitted;

    private bool IsValid => !string.IsNullOrWhiteSpace(name)
        && email.Contains("@")
        && !string.IsNullOrEmpty(role);

    private void Submit()
    {
        if (IsValid) submitted = true;
    }
}`,hints:["@bind creates two-way binding between a field and an input",'Use disabled="@(!condition)" to conditionally disable buttons',"Multiple @if blocks can conditionally render different sections"]}]}],test:[{id:"mod14-q1",question:"What is the file extension for Blazor components?",options:[".cs",".html",".razor",".blazor"],correctAnswer:2,explanation:"Blazor components use the .razor extension, combining HTML markup with C# code."},{id:"mod14-q2",question:"What does @bind do in Blazor?",options:["One-way data binding from code to UI","Two-way data binding between a C# field and an HTML element","Event binding for click handlers","CSS class binding"],correctAnswer:1,explanation:"@bind creates two-way data binding — changes in the UI update the field and vice versa."},{id:"mod14-q3",question:"How does a child component communicate events to a parent?",options:["Direct method calls on the parent","Using EventCallback<T> parameters","Through a shared static class","Using SignalR messages"],correctAnswer:1,explanation:"EventCallback<T> is a parameter that the child invokes to notify the parent of events."},{id:"mod14-q4",question:"What is the difference between Blazor Server and Blazor WebAssembly?",options:["No difference","Server runs C# on the server with SignalR UI updates; WASM runs C# in the browser","Server only supports static pages","WASM requires Node.js"],correctAnswer:1,explanation:"Blazor Server processes on the server and sends UI diffs via SignalR. WASM downloads .NET runtime to the browser."}]},cf={id:"mod-15",title:"Minimal APIs",description:"Build lightweight HTTP APIs with ASP.NET Core Minimal APIs — no controllers needed.",topics:[{id:"mod15-t1",title:"Minimal API Basics",explanation:`## Minimal APIs

Minimal APIs provide a streamlined way to build HTTP APIs without controllers.

### Basic Setup

\`\`\`csharp
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/items/{id}", (int id) => $"Item {id}");
app.MapPost("/items", (Item item) => Results.Created($"/items/{item.Id}", item));

app.Run();
\`\`\`

### Route Parameters & Binding

\`\`\`csharp
// Automatic parameter binding
app.MapGet("/search", (string? q, int page = 1) =>
    $"Query: {q}, Page: {page}");

// From route, query, body
app.MapPut("/items/{id}", (int id, Item item) =>
    Results.Ok(item));

// From services (DI)
app.MapGet("/users", (IUserService service) =>
    service.GetAll());
\`\`\`

### TypedResults for OpenAPI

\`\`\`csharp
app.MapGet("/items/{id}", (int id, ItemDb db) =>
{
    var item = db.Find(id);
    return item is not null
        ? TypedResults.Ok(item)
        : TypedResults.NotFound();
});
\`\`\``,tasks:[{description:"Build a minimal API for a bookstore with endpoints for listing, getting by ID, creating, and deleting books.",starterCode:`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var books = new List<Book>();

// TODO: Add CRUD endpoints for books

app.Run();

record Book(int Id, string Title, string Author, decimal Price);`,solution:`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var books = new List<Book>
{
    new(1, "C# in Depth", "Jon Skeet", 39.99m),
    new(2, "CLR via C#", "Jeffrey Richter", 49.99m),
};
var nextId = 3;

app.MapGet("/books", () => books);

app.MapGet("/books/{id}", (int id) =>
{
    var book = books.FirstOrDefault(b => b.Id == id);
    return book is not null ? Results.Ok(book) : Results.NotFound();
});

app.MapPost("/books", (BookDto dto) =>
{
    var book = new Book(nextId++, dto.Title, dto.Author, dto.Price);
    books.Add(book);
    return Results.Created($"/books/{book.Id}", book);
});

app.MapDelete("/books/{id}", (int id) =>
{
    var book = books.FirstOrDefault(b => b.Id == id);
    if (book is null) return Results.NotFound();
    books.Remove(book);
    return Results.NoContent();
});

app.Run();

record Book(int Id, string Title, string Author, decimal Price);
record BookDto(string Title, string Author, decimal Price);`,hints:["Use Results.Ok(), Results.NotFound(), Results.Created() for proper HTTP responses","MapGet, MapPost, MapPut, MapDelete map to HTTP methods","FirstOrDefault returns null if no match is found"]}]},{id:"mod15-t2",title:"Route Groups & Filters",explanation:`## Route Groups

Organize related endpoints together with \`MapGroup\`.

\`\`\`csharp
var group = app.MapGroup("/api/products")
    .WithTags("Products");

group.MapGet("/", GetAll);
group.MapGet("/{id}", GetById);
group.MapPost("/", Create);
\`\`\`

### Endpoint Filters (Middleware for Endpoints)

\`\`\`csharp
app.MapPost("/items", (Item item) => Results.Ok(item))
    .AddEndpointFilter(async (context, next) =>
    {
        var item = context.GetArgument<Item>(0);
        if (string.IsNullOrEmpty(item.Name))
            return Results.BadRequest("Name is required");
        return await next(context);
    });
\`\`\`

### Reusable Filters

\`\`\`csharp
public class ValidationFilter<T> : IEndpointFilter
{
    public async ValueTask<object?> InvokeAsync(
        EndpointFilterInvocationContext context,
        EndpointFilterDelegate next)
    {
        var arg = context.GetArgument<T>(0);
        var validator = context.HttpContext
            .RequestServices.GetService<IValidator<T>>();

        if (validator is not null)
        {
            var result = await validator.ValidateAsync(arg);
            if (!result.IsValid)
                return Results.BadRequest(result.Errors);
        }
        return await next(context);
    }
}

// Usage
group.MapPost("/", Create)
    .AddEndpointFilter<ValidationFilter<CreateItemDto>>();
\`\`\`

### Rate Limiting

\`\`\`csharp
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("fixed", opt =>
    {
        opt.PermitLimit = 10;
        opt.Window = TimeSpan.FromMinutes(1);
    });
});

app.UseRateLimiter();
app.MapGet("/api/data", () => "OK").RequireRateLimiting("fixed");
\`\`\``,tasks:[{description:"Refactor a flat set of API endpoints into route groups with a validation filter.",starterCode:`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// TODO: Use MapGroup and an endpoint filter for validation
// Currently all flat:
app.MapGet("/api/users", () => "all users");
app.MapGet("/api/users/{id}", (int id) => $"user {id}");
app.MapPost("/api/users", (User user) => Results.Ok(user));
app.MapGet("/api/orders", () => "all orders");
app.MapPost("/api/orders", (Order order) => Results.Ok(order));

app.Run();`,solution:`var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var users = app.MapGroup("/api/users").WithTags("Users");
users.MapGet("/", () => "all users");
users.MapGet("/{id}", (int id) => $"user {id}");
users.MapPost("/", (User user) => Results.Ok(user))
    .AddEndpointFilter(async (ctx, next) =>
    {
        var user = ctx.GetArgument<User>(0);
        if (string.IsNullOrWhiteSpace(user.Name))
            return Results.BadRequest("Name is required");
        if (string.IsNullOrWhiteSpace(user.Email))
            return Results.BadRequest("Email is required");
        return await next(ctx);
    });

var orders = app.MapGroup("/api/orders").WithTags("Orders");
orders.MapGet("/", () => "all orders");
orders.MapPost("/", (Order order) => Results.Ok(order))
    .AddEndpointFilter(async (ctx, next) =>
    {
        var order = ctx.GetArgument<Order>(0);
        if (order.Total <= 0)
            return Results.BadRequest("Total must be positive");
        return await next(ctx);
    });

app.Run();

record User(string Name, string Email);
record Order(int Id, decimal Total);`,hints:["MapGroup groups endpoints under a shared prefix","AddEndpointFilter runs before the endpoint handler","GetArgument<T>(index) gets the parameter at the given position"]}]}],test:[{id:"mod15-q1",question:"What is the main advantage of Minimal APIs over controller-based APIs?",options:["Better performance","Less boilerplate code and simpler setup","More features","Built-in authentication"],correctAnswer:1,explanation:"Minimal APIs reduce boilerplate — no controllers, action methods, or routing attributes needed."},{id:"mod15-q2",question:"Which method creates a route group in Minimal APIs?",options:["app.UseGroup()","app.MapGroup()","app.CreateGroup()","app.RouteGroup()"],correctAnswer:1,explanation:"MapGroup() creates a route group with a shared prefix for organizing endpoints."},{id:"mod15-q3",question:"How are endpoint filters applied?",options:["As global middleware only","Using .AddEndpointFilter() on specific endpoints","Through appsettings.json","Using [Filter] attributes"],correctAnswer:1,explanation:"AddEndpointFilter() adds filters to specific endpoints or route groups."},{id:"mod15-q4",question:"What does Results.Created() return?",options:["200 OK","201 Created with location header","204 No Content","301 Redirect"],correctAnswer:1,explanation:"Results.Created() returns a 201 Created response with a location header pointing to the new resource."}]},uf={id:"mod-16",title:"Caching & Performance",description:"Optimize ASP.NET Core applications with caching strategies, response compression, and performance best practices.",topics:[{id:"mod16-t1",title:"In-Memory & Distributed Caching",explanation:`## Caching in ASP.NET Core

### In-Memory Cache

\`\`\`csharp
builder.Services.AddMemoryCache();

public class ProductService
{
    private readonly IMemoryCache _cache;

    public ProductService(IMemoryCache cache) => _cache = cache;

    public async Task<List<Product>> GetProducts()
    {
        return await _cache.GetOrCreateAsync("products", async entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5);
            entry.SlidingExpiration = TimeSpan.FromMinutes(1);
            return await LoadFromDatabase();
        }) ?? new List<Product>();
    }
}
\`\`\`

### Distributed Cache (Redis)

\`\`\`csharp
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = builder.Configuration
        .GetConnectionString("Redis");
    options.InstanceName = "MyApp_";
});

public class CatalogService
{
    private readonly IDistributedCache _cache;

    public async Task<Product?> GetProduct(int id)
    {
        var key = $"product:{id}";
        var cached = await _cache.GetStringAsync(key);

        if (cached is not null)
            return JsonSerializer.Deserialize<Product>(cached);

        var product = await _db.Products.FindAsync(id);
        if (product is not null)
        {
            await _cache.SetStringAsync(key,
                JsonSerializer.Serialize(product),
                new DistributedCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
                });
        }
        return product;
    }
}
\`\`\`

### Response Caching

\`\`\`csharp
builder.Services.AddResponseCaching();
app.UseResponseCaching();

[HttpGet]
[ResponseCache(Duration = 60, VaryByQueryKeys = new[] { "category" })]
public IActionResult GetProducts(string? category) { }
\`\`\``,tasks:[{description:"Implement a weather service that uses IMemoryCache with expiration to cache API results.",starterCode:`public class WeatherService
{
    // TODO: Inject IMemoryCache and implement caching
    
    public async Task<WeatherData> GetWeather(string city)
    {
        // TODO: Check cache first, then call API
        throw new NotImplementedException();
    }
}

public record WeatherData(string City, double Temperature, string Condition);`,solution:`public class WeatherService
{
    private readonly IMemoryCache _cache;
    private readonly HttpClient _http;

    public WeatherService(IMemoryCache cache, HttpClient http)
    {
        _cache = cache;
        _http = http;
    }

    public async Task<WeatherData> GetWeather(string city)
    {
        var key = $"weather:{city.ToLower()}";

        return await _cache.GetOrCreateAsync(key, async entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(15);
            entry.SlidingExpiration = TimeSpan.FromMinutes(5);

            // Simulate API call
            await Task.Delay(500);
            return new WeatherData(city, 22.5, "Sunny");
        }) ?? new WeatherData(city, 0, "Unknown");
    }
}

public record WeatherData(string City, double Temperature, string Condition);`,hints:["Use GetOrCreateAsync to atomically check and populate the cache","AbsoluteExpiration removes the entry after a fixed time","SlidingExpiration resets the timer on each access"]}]},{id:"mod16-t2",title:"Performance Optimization",explanation:`## Performance Best Practices

### Output Caching (.NET 7+)

\`\`\`csharp
builder.Services.AddOutputCache(options =>
{
    options.AddBasePolicy(builder => builder.Expire(TimeSpan.FromMinutes(5)));
    options.AddPolicy("NoCache", builder => builder.NoCache());
});

app.UseOutputCache();

app.MapGet("/products", () => GetProducts())
    .CacheOutput(p => p.Expire(TimeSpan.FromMinutes(10)));
\`\`\`

### Response Compression

\`\`\`csharp
builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
    options.Providers.Add<BrotliCompressionProvider>();
    options.Providers.Add<GzipCompressionProvider>();
});

app.UseResponseCompression();
\`\`\`

### Async Best Practices

\`\`\`csharp
// GOOD: Async all the way down
public async Task<IActionResult> GetData()
{
    var result = await _service.GetDataAsync();
    return Ok(result);
}

// BAD: Blocking async code
public IActionResult GetData()
{
    var result = _service.GetDataAsync().Result; // Deadlock risk!
    return Ok(result);
}

// GOOD: Parallel async operations
public async Task<IActionResult> GetDashboard()
{
    var usersTask = _userService.GetCountAsync();
    var ordersTask = _orderService.GetRecentAsync();
    await Task.WhenAll(usersTask, ordersTask);
    return Ok(new { Users = usersTask.Result, Orders = ordersTask.Result });
}
\`\`\`

### EF Core Performance

\`\`\`csharp
// Use AsNoTracking for read-only queries
var products = await _db.Products
    .AsNoTracking()
    .Where(p => p.IsActive)
    .ToListAsync();

// Use projections instead of loading full entities
var dtos = await _db.Products
    .Select(p => new ProductDto(p.Id, p.Name, p.Price))
    .ToListAsync();

// Avoid N+1 with Include
var orders = await _db.Orders
    .Include(o => o.Items)
    .ThenInclude(i => i.Product)
    .ToListAsync();
\`\`\``,tasks:[{description:"Optimize a controller that has common performance anti-patterns: blocking async, N+1 queries, and no caching.",starterCode:`public class OrderController : ControllerBase
{
    private readonly AppDbContext _db;

    // BAD: Fix these anti-patterns
    public IActionResult GetOrders()
    {
        var orders = _db.Orders.ToList(); // N+1 potential
        foreach (var order in orders)
        {
            order.Items = _db.OrderItems
                .Where(i => i.OrderId == order.Id).ToList(); // N+1!
        }
        return Ok(orders);
    }
}`,solution:`public class OrderController : ControllerBase
{
    private readonly AppDbContext _db;
    private readonly IMemoryCache _cache;

    public OrderController(AppDbContext db, IMemoryCache cache)
    {
        _db = db;
        _cache = cache;
    }

    [ResponseCache(Duration = 30)]
    public async Task<IActionResult> GetOrders()
    {
        var orders = await _cache.GetOrCreateAsync("orders", async entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(2);
            return await _db.Orders
                .AsNoTracking()
                .Include(o => o.Items)
                .Select(o => new OrderDto(
                    o.Id, o.CustomerName,
                    o.Items.Select(i => new OrderItemDto(i.ProductName, i.Quantity)).ToList()
                ))
                .ToListAsync();
        });

        return Ok(orders);
    }
}`,hints:["Use Include() to eager-load related data in one query","AsNoTracking() improves read performance by disabling change tracking","Use async/await consistently — never call .Result or .Wait()"]}]}],test:[{id:"mod16-q1",question:"What is the difference between IMemoryCache and IDistributedCache?",options:["No difference","IMemoryCache is per-process; IDistributedCache is shared across servers","IDistributedCache is always faster","IMemoryCache requires Redis"],correctAnswer:1,explanation:"IMemoryCache stores data in the application process memory. IDistributedCache uses an external store (Redis, SQL) shared across server instances."},{id:"mod16-q2",question:"What does AsNoTracking() do in EF Core?",options:["Disables logging","Prevents change tracking for read-only queries, improving performance","Removes the entity from the database","Disables lazy loading"],correctAnswer:1,explanation:"AsNoTracking() tells EF Core not to track entities for changes, reducing memory usage and improving query performance."},{id:"mod16-q3",question:"Why is calling .Result on an async Task dangerous in ASP.NET?",options:["It throws an exception","It can cause deadlocks by blocking the synchronization context","It returns null","It skips error handling"],correctAnswer:1,explanation:"Blocking on .Result can deadlock because the sync context thread is blocked waiting for the async operation that needs that same thread to complete."},{id:"mod16-q4",question:"What does SlidingExpiration mean for a cache entry?",options:["The entry expires at a fixed time","The expiration resets each time the entry is accessed","The entry never expires","The entry is compressed on access"],correctAnswer:1,explanation:"SlidingExpiration resets the expiration timer each time the cached item is accessed, keeping frequently-used items alive."}]},df={id:"mod-17",title:"Background Services & Hosted Services",description:"Run background tasks, scheduled jobs, and long-running services in ASP.NET Core.",topics:[{id:"mod17-t1",title:"IHostedService & BackgroundService",explanation:`## Background Services

ASP.NET Core provides built-in support for background tasks.

### BackgroundService Base Class

\`\`\`csharp
public class TimerService : BackgroundService
{
    private readonly ILogger<TimerService> _logger;

    public TimerService(ILogger<TimerService> logger) => _logger = logger;

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Worker running at: {Time}", DateTimeOffset.Now);
            await Task.Delay(TimeSpan.FromSeconds(10), stoppingToken);
        }
    }
}

// Register
builder.Services.AddHostedService<TimerService>();
\`\`\`

### IHostedService Interface

\`\`\`csharp
public class StartupService : IHostedService
{
    public async Task StartAsync(CancellationToken cancellationToken)
    {
        // Runs when the application starts
        await SeedDatabaseAsync();
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        // Runs when the application shuts down
        return Task.CompletedTask;
    }
}
\`\`\`

### Scoped Services in Background Tasks

\`\`\`csharp
public class ScopedWorker : BackgroundService
{
    private readonly IServiceScopeFactory _scopeFactory;

    public ScopedWorker(IServiceScopeFactory scopeFactory)
        => _scopeFactory = scopeFactory;

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using var scope = _scopeFactory.CreateScope();
            var dbContext = scope.ServiceProvider
                .GetRequiredService<AppDbContext>();

            var expiredItems = await dbContext.Items
                .Where(i => i.ExpiresAt < DateTime.UtcNow)
                .ToListAsync(stoppingToken);

            dbContext.Items.RemoveRange(expiredItems);
            await dbContext.SaveChangesAsync(stoppingToken);

            await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
        }
    }
}
\`\`\``,tasks:[{description:"Create a BackgroundService that periodically checks for and processes queued email notifications.",starterCode:`public class EmailQueueProcessor : BackgroundService
{
    // TODO: Inject dependencies and implement periodic processing
    
    protected override Task ExecuteAsync(CancellationToken stoppingToken)
    {
        throw new NotImplementedException();
    }
}`,solution:`public class EmailQueueProcessor : BackgroundService
{
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly ILogger<EmailQueueProcessor> _logger;

    public EmailQueueProcessor(
        IServiceScopeFactory scopeFactory,
        ILogger<EmailQueueProcessor> logger)
    {
        _scopeFactory = scopeFactory;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        _logger.LogInformation("Email queue processor started.");

        while (!stoppingToken.IsCancellationRequested)
        {
            try
            {
                using var scope = _scopeFactory.CreateScope();
                var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                var emailSender = scope.ServiceProvider.GetRequiredService<IEmailSender>();

                var pendingEmails = await db.EmailQueue
                    .Where(e => !e.IsSent)
                    .OrderBy(e => e.CreatedAt)
                    .Take(10)
                    .ToListAsync(stoppingToken);

                foreach (var email in pendingEmails)
                {
                    await emailSender.SendAsync(email.To, email.Subject, email.Body);
                    email.IsSent = true;
                    email.SentAt = DateTime.UtcNow;
                    _logger.LogInformation("Sent email to {To}", email.To);
                }

                await db.SaveChangesAsync(stoppingToken);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing email queue");
            }

            await Task.Delay(TimeSpan.FromSeconds(30), stoppingToken);
        }
    }
}`,hints:["Use IServiceScopeFactory to create scopes for scoped services like DbContext","Always check stoppingToken.IsCancellationRequested in the loop","Wrap processing in try-catch to prevent the service from crashing on errors"]}]},{id:"mod17-t2",title:"Channels & Producer-Consumer",explanation:`## Channel-Based Background Processing

Use \`System.Threading.Channels\` for producer-consumer patterns.

### Setting Up a Channel

\`\`\`csharp
// Shared channel service
public class BackgroundTaskQueue
{
    private readonly Channel<WorkItem> _queue;

    public BackgroundTaskQueue(int capacity = 100)
    {
        _queue = Channel.CreateBounded<WorkItem>(new BoundedChannelOptions(capacity)
        {
            FullMode = BoundedChannelFullMode.Wait
        });
    }

    public async ValueTask EnqueueAsync(WorkItem item, CancellationToken ct = default)
        => await _queue.Writer.WriteAsync(item, ct);

    public async ValueTask<WorkItem> DequeueAsync(CancellationToken ct)
        => await _queue.Reader.ReadAsync(ct);
}

public record WorkItem(string Type, string Payload);
\`\`\`

### Consumer Background Service

\`\`\`csharp
public class QueueProcessor : BackgroundService
{
    private readonly BackgroundTaskQueue _queue;
    private readonly ILogger<QueueProcessor> _logger;

    public QueueProcessor(BackgroundTaskQueue queue, ILogger<QueueProcessor> logger)
    {
        _queue = queue;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var item = await _queue.DequeueAsync(stoppingToken);
            _logger.LogInformation("Processing: {Type}", item.Type);

            // Process the work item
            await ProcessWorkItem(item);
        }
    }
}
\`\`\`

### Producer (Controller)

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class ReportsController : ControllerBase
{
    private readonly BackgroundTaskQueue _queue;

    public ReportsController(BackgroundTaskQueue queue) => _queue = queue;

    [HttpPost("generate")]
    public async Task<IActionResult> GenerateReport(ReportRequest request)
    {
        var workItem = new WorkItem("report", JsonSerializer.Serialize(request));
        await _queue.EnqueueAsync(workItem);
        return Accepted(new { message = "Report queued for processing" });
    }
}
\`\`\`

### Registration

\`\`\`csharp
builder.Services.AddSingleton<BackgroundTaskQueue>();
builder.Services.AddHostedService<QueueProcessor>();
\`\`\``,tasks:[{description:"Implement a background task queue using Channel<T> with a producer endpoint and consumer service.",starterCode:`// TODO: Implement BackgroundTaskQueue with Channel
// TODO: Implement consumer BackgroundService
// TODO: Implement producer endpoint`,solution:`// Task Queue
public class TaskQueue
{
    private readonly Channel<Func<CancellationToken, Task>> _channel =
        Channel.CreateBounded<Func<CancellationToken, Task>>(50);

    public async ValueTask QueueAsync(
        Func<CancellationToken, Task> workItem,
        CancellationToken ct = default)
    {
        await _channel.Writer.WriteAsync(workItem, ct);
    }

    public async ValueTask<Func<CancellationToken, Task>> DequeueAsync(
        CancellationToken ct)
    {
        return await _channel.Reader.ReadAsync(ct);
    }
}

// Consumer
public class TaskConsumer : BackgroundService
{
    private readonly TaskQueue _queue;
    private readonly ILogger<TaskConsumer> _logger;

    public TaskConsumer(TaskQueue queue, ILogger<TaskConsumer> logger)
    {
        _queue = queue;
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var workItem = await _queue.DequeueAsync(stoppingToken);
            try
            {
                await workItem(stoppingToken);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error executing queued work item");
            }
        }
    }
}

// Registration
// builder.Services.AddSingleton<TaskQueue>();
// builder.Services.AddHostedService<TaskConsumer>();

// Producer endpoint
// app.MapPost("/api/tasks", async (TaskQueue queue) =>
// {
//     await queue.QueueAsync(async ct =>
//     {
//         await Task.Delay(5000, ct); // Simulate long work
//     });
//     return Results.Accepted();
// });`,hints:["Channel.CreateBounded limits the queue size to prevent memory issues","The consumer reads from the channel and processes items sequentially","Register the queue as Singleton and the consumer as HostedService"]}]}],test:[{id:"mod17-q1",question:"What is the base class for background services in ASP.NET Core?",options:["BackgroundWorker","BackgroundService","HostedWorker","TaskService"],correctAnswer:1,explanation:"BackgroundService is the abstract class that implements IHostedService and provides ExecuteAsync for background work."},{id:"mod17-q2",question:"Why do you need IServiceScopeFactory in a BackgroundService?",options:["To create new services","Because BackgroundService is Singleton but DbContext is Scoped","For dependency injection","For logging purposes"],correctAnswer:1,explanation:"BackgroundService is registered as Singleton but scoped services (like DbContext) require a scope. IServiceScopeFactory creates a new scope for each operation."},{id:"mod17-q3",question:"What does Channel<T> provide?",options:["HTTP channels for streaming","Thread-safe producer-consumer queue","SignalR communication channels","Database connection pooling"],correctAnswer:1,explanation:"Channel<T> from System.Threading.Channels provides a high-performance, thread-safe producer-consumer data structure."},{id:"mod17-q4",question:"When is IHostedService.StopAsync called?",options:["Every 5 seconds","When an exception occurs","When the application is shutting down","When the service is idle"],correctAnswer:2,explanation:"StopAsync is called during graceful application shutdown, giving the service a chance to clean up resources."}]},pf={id:"mod-18",title:"Deployment & Docker",description:"Deploy ASP.NET Core applications with Docker containers, CI/CD pipelines, and cloud platforms.",topics:[{id:"mod18-t1",title:"Docker for ASP.NET Core",explanation:`## Containerizing ASP.NET Core

### Dockerfile

\`\`\`dockerfile
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy csproj and restore
COPY *.csproj ./
RUN dotnet restore

# Copy everything and build
COPY . ./
RUN dotnet publish -c Release -o /app/publish

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 8080
ENTRYPOINT ["dotnet", "MyApp.dll"]
\`\`\`

### Docker Compose

\`\`\`yaml
version: '3.8'
services:
  api:
    build: .
    ports:
      - "5000:8080"
    environment:
      - ConnectionStrings__Default=Server=db;Database=myapp;User=sa;Password=YourPassword123!
    depends_on:
      - db

  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=YourPassword123!
    ports:
      - "1433:1433"
    volumes:
      - sqldata:/var/opt/mssql

volumes:
  sqldata:
\`\`\`

### .dockerignore

\`\`\`
bin/
obj/
.vs/
*.user
*.sln
Dockerfile
.dockerignore
\`\`\`

### Multi-stage builds optimize image size:

| Image | Size |
|-------|------|
| SDK image | ~700 MB |
| Runtime image | ~200 MB |
| With trimming | ~80 MB |`,tasks:[{description:"Write a multi-stage Dockerfile for an ASP.NET Core Web API with SQL Server in Docker Compose.",starterCode:`# TODO: Create a multi-stage Dockerfile
# Stage 1: Build with SDK image
# Stage 2: Runtime with ASP.NET image

# TODO: Create docker-compose.yml with API and SQL Server`,solution:`# Dockerfile
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyApi.csproj", "."]
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app/publish --no-restore

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080
ENTRYPOINT ["dotnet", "MyApi.dll"]

# docker-compose.yml
# version: '3.8'
# services:
#   api:
#     build: .
#     ports:
#       - "5000:8080"
#     environment:
#       - ConnectionStrings__Default=Server=db;Database=myapi;User=sa;Password=Strong_Pwd_123
#     depends_on:
#       db:
#         condition: service_healthy
#   db:
#     image: mcr.microsoft.com/mssql/server:2022-latest
#     environment:
#       - ACCEPT_EULA=Y
#       - SA_PASSWORD=Strong_Pwd_123
#     healthcheck:
#       test: /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Strong_Pwd_123 -Q "SELECT 1"
#       interval: 10s
#       timeout: 3s
#       retries: 5
#     volumes:
#       - sqldata:/var/opt/mssql
# volumes:
#   sqldata:`,hints:["Multi-stage builds use separate FROM statements for build and runtime","Copy .csproj first and restore to leverage Docker layer caching","Use depends_on with healthcheck to ensure DB is ready before API starts"]}]},{id:"mod18-t2",title:"CI/CD & Cloud Deployment",explanation:`## CI/CD Pipeline

### GitHub Actions

\`\`\`yaml
name: CI/CD
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: Restore
        run: dotnet restore

      - name: Build
        run: dotnet build --no-restore

      - name: Test
        run: dotnet test --no-build --verbosity normal

  deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Build and push Docker image
        run: |
          docker build -t myapp:latest .
          docker tag myapp:latest myregistry.azurecr.io/myapp:latest
          docker push myregistry.azurecr.io/myapp:latest
\`\`\`

### Environment Configuration

\`\`\`csharp
// Program.cs
var builder = WebApplication.CreateBuilder(args);

// Automatically reads appsettings.{Environment}.json
// Set ASPNETCORE_ENVIRONMENT=Production in deployment

if (builder.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (builder.Environment.IsProduction())
{
    app.UseHsts();
    app.UseHttpsRedirection();
}
\`\`\`

### Azure App Service Deployment

\`\`\`bash
# Using Azure CLI
az webapp create --name myapp --resource-group mygroup \\\\
  --plan myplan --runtime "DOTNET|8.0"

az webapp deployment source config-zip \\\\
  --name myapp --resource-group mygroup \\\\
  --src publish.zip
\`\`\`

### Health Checks for Orchestrators

\`\`\`csharp
builder.Services.AddHealthChecks()
    .AddSqlServer(connectionString)
    .AddRedis(redisConnection)
    .AddCheck("custom", () => HealthCheckResult.Healthy());

app.MapHealthChecks("/healthz");
\`\`\``,tasks:[{description:"Create a GitHub Actions workflow that builds, tests, and publishes a Docker image for an ASP.NET Core app.",starterCode:`# .github/workflows/ci-cd.yml
# TODO: Create a CI/CD workflow with:
# 1. Build and test job
# 2. Docker build and push job`,solution:`# .github/workflows/ci-cd.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'

      - name: Restore dependencies
        run: dotnet restore

      - name: Build
        run: dotnet build --no-restore --configuration Release

      - name: Run tests
        run: dotnet test --no-build --configuration Release --verbosity normal --collect:"XPlat Code Coverage"

  docker:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: docker build -t myapp:$\\{\\{ github.sha \\}\\} .

      - name: Tag as latest
        run: docker tag myapp:$\\{\\{ github.sha \\}\\} myapp:latest`,hints:["Use needs: to create job dependencies","The if: condition controls when jobs run","Use actions/setup-dotnet to install the .NET SDK"]}]}],test:[{id:"mod18-q1",question:"Why use multi-stage Docker builds?",options:["They run faster","They produce smaller final images by excluding build tools","They are required by Kubernetes","They support multiple architectures"],correctAnswer:1,explanation:"Multi-stage builds use the SDK image for building but the smaller runtime image for the final container, significantly reducing image size."},{id:"mod18-q2",question:"What does ASPNETCORE_ENVIRONMENT control?",options:["The server port","Which configuration file is loaded and environment-specific code paths","Docker container name","Database connection"],correctAnswer:1,explanation:"ASPNETCORE_ENVIRONMENT determines which appsettings.{Environment}.json is loaded and enables environment checks like IsDevelopment()."},{id:"mod18-q3",question:"What is the purpose of health checks in deployment?",options:["To monitor CPU usage","To let orchestrators know if the app and its dependencies are healthy","To restart the application","To log errors"],correctAnswer:1,explanation:"Health checks expose endpoints that orchestrators (Kubernetes, load balancers) use to determine if the app is ready to serve traffic."},{id:"mod18-q4",question:"In Docker Compose, what does depends_on do?",options:["Installs dependencies","Controls the startup order of services","Links network ports","Copies files between containers"],correctAnswer:1,explanation:"depends_on ensures services start in the correct order. With health checks, it can also wait for a service to be ready."}]},mf={id:"mod-19",title:"Design Patterns in C#",description:"Master essential creational, structural, and behavioral design patterns with real-world C# examples.",topics:[{id:"mod19-t1",title:"Creational Patterns",explanation:`## Creational Design Patterns

Creational patterns deal with object creation, hiding complexity and making the system independent of how objects are created.

### Singleton

\`\`\`csharp
public sealed class ConnectionPool
{
    private static readonly Lazy<ConnectionPool> _instance =
        new(() => new ConnectionPool());

    private ConnectionPool() { }

    public static ConnectionPool Instance => _instance.Value;

    public DbConnection GetConnection() => /* ... */;
}

// Thread-safe, lazy-initialized singleton
var pool = ConnectionPool.Instance;
\`\`\`

> **In ASP.NET Core**, prefer DI with \`AddSingleton<T>()\` over manual singletons.

### Factory Method

\`\`\`csharp
public interface INotification
{
    void Send(string message);
}

public class EmailNotification : INotification
{
    public void Send(string message) => Console.WriteLine($"Email: {message}");
}

public class SmsNotification : INotification
{
    public void Send(string message) => Console.WriteLine($"SMS: {message}");
}

public static class NotificationFactory
{
    public static INotification Create(string type) => type switch
    {
        "email" => new EmailNotification(),
        "sms" => new SmsNotification(),
        _ => throw new ArgumentException($"Unknown type: {type}")
    };
}
\`\`\`

### Builder

\`\`\`csharp
public class QueryBuilder
{
    private string _table = "";
    private readonly List<string> _conditions = new();
    private string? _orderBy;
    private int? _limit;

    public QueryBuilder From(string table) { _table = table; return this; }
    public QueryBuilder Where(string condition) { _conditions.Add(condition); return this; }
    public QueryBuilder OrderBy(string column) { _orderBy = column; return this; }
    public QueryBuilder Limit(int count) { _limit = count; return this; }

    public string Build()
    {
        var query = $"SELECT * FROM {_table}";
        if (_conditions.Any())
            query += " WHERE " + string.Join(" AND ", _conditions);
        if (_orderBy is not null)
            query += $" ORDER BY {_orderBy}";
        if (_limit.HasValue)
            query += $" LIMIT {_limit}";
        return query;
    }
}

// Usage
var sql = new QueryBuilder()
    .From("Products")
    .Where("Price > 10")
    .Where("IsActive = 1")
    .OrderBy("Name")
    .Limit(50)
    .Build();
\`\`\``,tasks:[{description:"Implement a PaymentProcessorFactory that creates different payment processors (CreditCard, PayPal, BankTransfer) based on a payment type enum.",starterCode:`public enum PaymentType { CreditCard, PayPal, BankTransfer }

public interface IPaymentProcessor
{
    Task<bool> ProcessAsync(decimal amount);
    string ProviderName { get; }
}

// TODO: Implement concrete processors and a factory`,solution:`public enum PaymentType { CreditCard, PayPal, BankTransfer }

public interface IPaymentProcessor
{
    Task<bool> ProcessAsync(decimal amount);
    string ProviderName { get; }
}

public class CreditCardProcessor : IPaymentProcessor
{
    public string ProviderName => "Credit Card";
    public async Task<bool> ProcessAsync(decimal amount)
    {
        await Task.Delay(100); // simulate
        return amount <= 10000;
    }
}

public class PayPalProcessor : IPaymentProcessor
{
    public string ProviderName => "PayPal";
    public async Task<bool> ProcessAsync(decimal amount)
    {
        await Task.Delay(100);
        return amount <= 5000;
    }
}

public class BankTransferProcessor : IPaymentProcessor
{
    public string ProviderName => "Bank Transfer";
    public async Task<bool> ProcessAsync(decimal amount)
    {
        await Task.Delay(200);
        return true; // no limit
    }
}

public static class PaymentProcessorFactory
{
    public static IPaymentProcessor Create(PaymentType type) => type switch
    {
        PaymentType.CreditCard => new CreditCardProcessor(),
        PaymentType.PayPal => new PayPalProcessor(),
        PaymentType.BankTransfer => new BankTransferProcessor(),
        _ => throw new ArgumentOutOfRangeException(nameof(type))
    };
}`,hints:["Use a switch expression for concise factory logic","Each processor implements the common IPaymentProcessor interface","The factory hides which concrete class is created"]}]},{id:"mod19-t2",title:"Structural Patterns",explanation:`## Structural Patterns

Structural patterns deal with composing objects and classes into larger structures.

### Decorator

Add behavior to objects dynamically without changing their code.

\`\`\`csharp
public interface IMessageSender
{
    Task SendAsync(string to, string body);
}

public class EmailSender : IMessageSender
{
    public async Task SendAsync(string to, string body)
    {
        await Task.Delay(50);
        Console.WriteLine($"Sent email to {to}");
    }
}

// Decorator: adds logging
public class LoggingMessageSender : IMessageSender
{
    private readonly IMessageSender _inner;
    private readonly ILogger _logger;

    public LoggingMessageSender(IMessageSender inner, ILogger logger)
    {
        _inner = inner;
        _logger = logger;
    }

    public async Task SendAsync(string to, string body)
    {
        _logger.LogInformation("Sending message to {To}", to);
        await _inner.SendAsync(to, body);
        _logger.LogInformation("Message sent to {To}", to);
    }
}

// Decorator: adds retry
public class RetryMessageSender : IMessageSender
{
    private readonly IMessageSender _inner;
    private readonly int _maxRetries;

    public RetryMessageSender(IMessageSender inner, int maxRetries = 3)
    {
        _inner = inner;
        _maxRetries = maxRetries;
    }

    public async Task SendAsync(string to, string body)
    {
        for (int i = 0; i <= _maxRetries; i++)
        {
            try { await _inner.SendAsync(to, body); return; }
            catch when (i < _maxRetries) { await Task.Delay(100 * (i + 1)); }
        }
    }
}

// Compose decorators
IMessageSender sender = new RetryMessageSender(
    new LoggingMessageSender(
        new EmailSender(), logger), maxRetries: 3);
\`\`\`

### Adapter

Convert one interface to another that a client expects.

\`\`\`csharp
// External library's interface
public class LegacyPrinter
{
    public void PrintDocument(string content, int copies) { /* ... */ }
}

// Our interface
public interface IPrinter
{
    void Print(string content);
}

// Adapter
public class LegacyPrinterAdapter : IPrinter
{
    private readonly LegacyPrinter _printer;
    public LegacyPrinterAdapter(LegacyPrinter printer) => _printer = printer;
    public void Print(string content) => _printer.PrintDocument(content, 1);
}
\`\`\`

### Composite

Treat individual objects and compositions uniformly.

\`\`\`csharp
public interface IMenuComponent
{
    string Name { get; }
    decimal GetPrice();
}

public class MenuItem : IMenuComponent
{
    public string Name { get; }
    public decimal Price { get; }
    public MenuItem(string name, decimal price) { Name = name; Price = price; }
    public decimal GetPrice() => Price;
}

public class MenuCategory : IMenuComponent
{
    public string Name { get; }
    private readonly List<IMenuComponent> _children = new();
    public MenuCategory(string name) => Name = name;
    public void Add(IMenuComponent item) => _children.Add(item);
    public decimal GetPrice() => _children.Sum(c => c.GetPrice());
}
\`\`\``,tasks:[{description:"Implement a Decorator pattern: create a CachingRepository that wraps an IRepository<Product> and caches GetByIdAsync results using IMemoryCache.",starterCode:`public interface IRepository<T>
{
    Task<T?> GetByIdAsync(int id);
    Task<List<T>> GetAllAsync();
}

public class ProductRepository : IRepository<Product>
{
    // Simulated DB calls
    public async Task<Product?> GetByIdAsync(int id) { /* ... */ }
    public async Task<List<Product>> GetAllAsync() { /* ... */ }
}

// TODO: Create CachingRepository decorator`,solution:`public interface IRepository<T>
{
    Task<T?> GetByIdAsync(int id);
    Task<List<T>> GetAllAsync();
}

public class ProductRepository : IRepository<Product>
{
    public async Task<Product?> GetByIdAsync(int id)
    {
        await Task.Delay(100);
        return new Product { Id = id, Name = $"Product {id}" };
    }
    public async Task<List<Product>> GetAllAsync()
    {
        await Task.Delay(100);
        return new List<Product>();
    }
}

public class CachingRepository<T> : IRepository<T> where T : class
{
    private readonly IRepository<T> _inner;
    private readonly IMemoryCache _cache;
    private readonly TimeSpan _expiration;

    public CachingRepository(
        IRepository<T> inner,
        IMemoryCache cache,
        TimeSpan? expiration = null)
    {
        _inner = inner;
        _cache = cache;
        _expiration = expiration ?? TimeSpan.FromMinutes(5);
    }

    public async Task<T?> GetByIdAsync(int id)
    {
        var key = $"{typeof(T).Name}:{id}";
        return await _cache.GetOrCreateAsync(key, async entry =>
        {
            entry.AbsoluteExpirationRelativeToNow = _expiration;
            return await _inner.GetByIdAsync(id);
        });
    }

    public Task<List<T>> GetAllAsync() => _inner.GetAllAsync();
}

// DI registration
// services.AddScoped<ProductRepository>();
// services.AddScoped<IRepository<Product>>(sp =>
//     new CachingRepository<Product>(
//         sp.GetRequiredService<ProductRepository>(),
//         sp.GetRequiredService<IMemoryCache>()));`,hints:["A decorator implements the same interface as the thing it wraps","Store a reference to the inner IRepository<T> and delegate calls","Use IMemoryCache.GetOrCreateAsync for cache-aside logic"]}]},{id:"mod19-t3",title:"Behavioral Patterns",explanation:`## Behavioral Patterns

Behavioral patterns define how objects communicate and distribute responsibility.

### Strategy

Define a family of algorithms, encapsulate each one, and make them interchangeable.

\`\`\`csharp
public interface IDiscountStrategy
{
    decimal Calculate(decimal price, int quantity);
}

public class NoDiscount : IDiscountStrategy
{
    public decimal Calculate(decimal price, int quantity) => price * quantity;
}

public class BulkDiscount : IDiscountStrategy
{
    public decimal Calculate(decimal price, int quantity) =>
        quantity >= 10 ? price * quantity * 0.9m : price * quantity;
}

public class SeasonalDiscount : IDiscountStrategy
{
    public decimal Calculate(decimal price, int quantity) =>
        price * quantity * 0.85m;
}

public class OrderCalculator
{
    private readonly IDiscountStrategy _strategy;
    public OrderCalculator(IDiscountStrategy strategy) => _strategy = strategy;
    public decimal GetTotal(decimal price, int qty) => _strategy.Calculate(price, qty);
}

// In ASP.NET Core — register strategies by name:
builder.Services.AddKeyedScoped<IDiscountStrategy, BulkDiscount>("bulk");
builder.Services.AddKeyedScoped<IDiscountStrategy, SeasonalDiscount>("seasonal");
\`\`\`

### Observer (Event-Based)

C# has built-in support via events and delegates.

\`\`\`csharp
public class OrderService
{
    public event EventHandler<Order>? OrderPlaced;

    public void PlaceOrder(Order order)
    {
        // Save order...
        OrderPlaced?.Invoke(this, order);
    }
}

// Subscribers
var service = new OrderService();
service.OrderPlaced += (sender, order) =>
    Console.WriteLine($"Email: Order {order.Id} confirmed");
service.OrderPlaced += (sender, order) =>
    Console.WriteLine($"Analytics: Order {order.Id} tracked");
\`\`\`

### MediatR (Mediator Pattern)

\`\`\`csharp
// Command
public record CreateOrderCommand(int ProductId, int Quantity)
    : IRequest<OrderResult>;

// Handler
public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, OrderResult>
{
    private readonly AppDbContext _db;
    public CreateOrderHandler(AppDbContext db) => _db = db;

    public async Task<OrderResult> Handle(
        CreateOrderCommand request, CancellationToken ct)
    {
        var order = new Order
        {
            ProductId = request.ProductId,
            Quantity = request.Quantity
        };
        _db.Orders.Add(order);
        await _db.SaveChangesAsync(ct);
        return new OrderResult(order.Id);
    }
}

// Controller
[HttpPost]
public async Task<IActionResult> Create(
    CreateOrderCommand command,
    IMediator mediator)
{
    var result = await mediator.Send(command);
    return Ok(result);
}
\`\`\`

### Chain of Responsibility

ASP.NET Core middleware IS the chain of responsibility pattern!

\`\`\`csharp
public interface IValidator<T>
{
    IValidator<T>? Next { get; set; }
    bool Validate(T input, out string error);
}

public class RequiredFieldValidator : IValidator<OrderRequest>
{
    public IValidator<OrderRequest>? Next { get; set; }
    public bool Validate(OrderRequest input, out string error)
    {
        if (string.IsNullOrEmpty(input.ProductName))
        {
            error = "Product name is required";
            return false;
        }
        error = "";
        return Next?.Validate(input, out error) ?? true;
    }
}
\`\`\``,tasks:[{description:"Implement the Strategy pattern for a shipping cost calculator with three strategies: Standard, Express, and Overnight.",starterCode:`// TODO: Define IShippingStrategy interface
// TODO: Implement Standard, Express, Overnight strategies
// TODO: Create ShippingCalculator that uses a strategy`,solution:`public interface IShippingStrategy
{
    string Name { get; }
    decimal CalculateCost(decimal weight, decimal distance);
    int EstimatedDays { get; }
}

public class StandardShipping : IShippingStrategy
{
    public string Name => "Standard";
    public int EstimatedDays => 7;
    public decimal CalculateCost(decimal weight, decimal distance)
        => weight * 0.5m + distance * 0.01m;
}

public class ExpressShipping : IShippingStrategy
{
    public string Name => "Express";
    public int EstimatedDays => 3;
    public decimal CalculateCost(decimal weight, decimal distance)
        => weight * 1.0m + distance * 0.03m + 5.00m;
}

public class OvernightShipping : IShippingStrategy
{
    public string Name => "Overnight";
    public int EstimatedDays => 1;
    public decimal CalculateCost(decimal weight, decimal distance)
        => weight * 2.0m + distance * 0.05m + 15.00m;
}

public class ShippingCalculator
{
    private readonly IShippingStrategy _strategy;

    public ShippingCalculator(IShippingStrategy strategy)
        => _strategy = strategy;

    public ShippingQuote GetQuote(decimal weight, decimal distance) => new(
        _strategy.Name,
        _strategy.CalculateCost(weight, distance),
        _strategy.EstimatedDays
    );
}

public record ShippingQuote(string Method, decimal Cost, int EstimatedDays);`,hints:["Each strategy implements the same interface with different logic","The calculator delegates cost computation to the injected strategy","In ASP.NET Core, register strategies via DI and resolve by key or configuration"]}]}],test:[{id:"mod19-q1",question:"What is the Factory Method pattern?",options:["A method that creates database connections","A pattern that delegates object creation to subclasses or a factory, hiding concrete types","A static constructor","A method that validates input"],correctAnswer:1,explanation:"The Factory Method encapsulates object creation logic, returning instances through a common interface without exposing concrete classes."},{id:"mod19-q2",question:"What is the Decorator pattern?",options:["A pattern for styling UI components","A pattern that wraps an object to add behavior without modifying the original class","A pattern for formatting strings","A pattern for database decorations"],correctAnswer:1,explanation:"Decorator wraps an object with the same interface, adding behavior (logging, caching, retry) while delegating to the inner object."},{id:"mod19-q3",question:"What is the Strategy pattern?",options:["A pattern for planning project tasks","A pattern where a family of algorithms are encapsulated and made interchangeable at runtime","A pattern for error handling strategies","A pattern for database query planning"],correctAnswer:1,explanation:"Strategy defines interchangeable algorithms behind a common interface, allowing behavior to change at runtime without modifying the client."},{id:"mod19-q4",question:"Which ASP.NET Core feature is an example of the Chain of Responsibility pattern?",options:["Dependency injection","The middleware pipeline","Entity Framework migrations","Razor pages"],correctAnswer:1,explanation:"The middleware pipeline passes each HTTP request through a chain of middleware components, each deciding whether to handle it or pass it along."},{id:"mod19-q5",question:"What is the Builder pattern?",options:["A CI/CD tool","A pattern for constructing complex objects step-by-step with a fluent API","A pattern for building databases","A pattern for compiling code"],correctAnswer:1,explanation:"The Builder pattern constructs complex objects step by step, allowing different representations with the same construction process."}]},hf={id:"mod-20",title:"Clean Architecture",description:"Structure ASP.NET Core applications with Clean Architecture — separate concerns into layers with clear dependency rules.",topics:[{id:"mod20-t1",title:"Layers & Dependency Rule",explanation:`## Clean Architecture Overview

Clean Architecture organizes code into concentric layers, with dependencies pointing **inward**.

### The Layers

| Layer | Contains | Depends On |
|-------|----------|------------|
| **Domain** (innermost) | Entities, value objects, domain events, interfaces | Nothing |
| **Application** | Use cases, DTOs, validators, interface definitions | Domain |
| **Infrastructure** | EF Core, external APIs, file system, email | Domain, Application |
| **Presentation** (outermost) | Controllers, Razor, Blazor, API endpoints | Application |

### The Dependency Rule

> Source code dependencies must point **inward** — outer layers depend on inner layers, never the reverse.

### Project Structure

\`\`\`
MyApp/
├── MyApp.Domain/          # Entities, interfaces, domain logic
│   ├── Entities/
│   ├── ValueObjects/
│   ├── Interfaces/
│   └── Exceptions/
├── MyApp.Application/     # Use cases, DTOs, validators
│   ├── Features/
│   │   ├── Products/
│   │   │   ├── Commands/
│   │   │   ├── Queries/
│   │   │   └── DTOs/
│   ├── Common/
│   │   ├── Interfaces/
│   │   └── Behaviors/
├── MyApp.Infrastructure/  # EF Core, external services
│   ├── Persistence/
│   ├── Services/
│   └── DependencyInjection.cs
├── MyApp.Api/             # Controllers, middleware
│   ├── Controllers/
│   ├── Middleware/
│   └── Program.cs
\`\`\`

### Domain Layer

\`\`\`csharp
// Domain/Entities/Product.cs
public class Product
{
    public int Id { get; private set; }
    public string Name { get; private set; } = "";
    public Money Price { get; private set; }
    public bool IsActive { get; private set; } = true;

    // Encapsulated business logic
    public void UpdatePrice(Money newPrice)
    {
        if (newPrice.Amount <= 0)
            throw new DomainException("Price must be positive");
        Price = newPrice;
    }

    public void Deactivate() => IsActive = false;
}

// Domain/ValueObjects/Money.cs
public record Money(decimal Amount, string Currency = "USD")
{
    public static Money operator +(Money a, Money b)
    {
        if (a.Currency != b.Currency)
            throw new DomainException("Cannot add different currencies");
        return new Money(a.Amount + b.Amount, a.Currency);
    }
}

// Domain/Interfaces/IProductRepository.cs
public interface IProductRepository
{
    Task<Product?> GetByIdAsync(int id, CancellationToken ct = default);
    Task<List<Product>> GetActiveAsync(CancellationToken ct = default);
    Task AddAsync(Product product, CancellationToken ct = default);
}
\`\`\``,tasks:[{description:"Design the Domain layer for an e-commerce app: create an Order entity with line items, a Money value object, and a repository interface.",starterCode:`// Domain/Entities/Order.cs
public class Order
{
    // TODO: Properties, line items, business rules
    // Rules: cannot add item with qty <= 0
    //        total is sum of all line items
}

// Domain/ValueObjects/Money.cs
// TODO: Immutable value object

// Domain/Interfaces/IOrderRepository.cs
// TODO: Repository interface`,solution:`// Domain/ValueObjects/Money.cs
public record Money(decimal Amount, string Currency = "USD")
{
    public static Money Zero(string currency = "USD") => new(0, currency);

    public static Money operator +(Money a, Money b)
    {
        if (a.Currency != b.Currency)
            throw new InvalidOperationException("Currency mismatch");
        return a with { Amount = a.Amount + b.Amount };
    }

    public static Money operator *(Money m, int quantity)
        => m with { Amount = m.Amount * quantity };
}

// Domain/Entities/OrderLineItem.cs
public class OrderLineItem
{
    public int Id { get; private set; }
    public string ProductName { get; private set; } = "";
    public Money UnitPrice { get; private set; } = Money.Zero();
    public int Quantity { get; private set; }
    public Money Total => UnitPrice * Quantity;

    private OrderLineItem() { } // EF Core

    public OrderLineItem(string productName, Money unitPrice, int quantity)
    {
        if (quantity <= 0)
            throw new ArgumentException("Quantity must be positive");
        ProductName = productName;
        UnitPrice = unitPrice;
        Quantity = quantity;
    }
}

// Domain/Entities/Order.cs
public class Order
{
    public int Id { get; private set; }
    public DateTime CreatedAt { get; private set; } = DateTime.UtcNow;
    public string CustomerEmail { get; private set; } = "";
    private readonly List<OrderLineItem> _items = new();
    public IReadOnlyList<OrderLineItem> Items => _items.AsReadOnly();

    public Money Total => _items.Aggregate(
        Money.Zero(), (sum, item) => sum + item.Total);

    public void AddItem(string product, Money price, int quantity)
    {
        _items.Add(new OrderLineItem(product, price, quantity));
    }
}

// Domain/Interfaces/IOrderRepository.cs
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(int id, CancellationToken ct = default);
    Task<List<Order>> GetByCustomerAsync(string email, CancellationToken ct = default);
    Task AddAsync(Order order, CancellationToken ct = default);
}`,hints:["Domain entities encapsulate business rules — validation lives in the entity","Value objects are immutable and compared by value (use record)","Repository interfaces belong in the Domain layer; implementations go in Infrastructure"]}]},{id:"mod20-t2",title:"Application Layer & CQRS",explanation:`## Application Layer

The Application layer orchestrates use cases without containing business rules.

### CQRS: Commands & Queries

Separate read (Query) and write (Command) operations.

\`\`\`csharp
// Application/Features/Products/Commands/CreateProduct.cs
public record CreateProductCommand(
    string Name, decimal Price, string Category) : IRequest<int>;

public class CreateProductHandler
    : IRequestHandler<CreateProductCommand, int>
{
    private readonly IProductRepository _repo;
    private readonly IUnitOfWork _uow;

    public CreateProductHandler(IProductRepository repo, IUnitOfWork uow)
    {
        _repo = repo;
        _uow = uow;
    }

    public async Task<int> Handle(
        CreateProductCommand cmd, CancellationToken ct)
    {
        var product = new Product(cmd.Name, new Money(cmd.Price), cmd.Category);
        await _repo.AddAsync(product, ct);
        await _uow.SaveChangesAsync(ct);
        return product.Id;
    }
}
\`\`\`

### Queries

\`\`\`csharp
// Application/Features/Products/Queries/GetProducts.cs
public record GetProductsQuery(string? Category) : IRequest<List<ProductDto>>;

public class GetProductsHandler
    : IRequestHandler<GetProductsQuery, List<ProductDto>>
{
    private readonly IProductReadRepository _readRepo;

    public GetProductsHandler(IProductReadRepository readRepo)
        => _readRepo = readRepo;

    public async Task<List<ProductDto>> Handle(
        GetProductsQuery query, CancellationToken ct)
    {
        return await _readRepo.GetProductsAsync(query.Category, ct);
    }
}
\`\`\`

### DTOs

\`\`\`csharp
public record ProductDto(
    int Id,
    string Name,
    decimal Price,
    string Category,
    bool IsActive);
\`\`\`

### Validation with FluentValidation

\`\`\`csharp
public class CreateProductValidator
    : AbstractValidator<CreateProductCommand>
{
    public CreateProductValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("Name is required")
            .MaximumLength(200);

        RuleFor(x => x.Price)
            .GreaterThan(0).WithMessage("Price must be positive");

        RuleFor(x => x.Category)
            .NotEmpty();
    }
}
\`\`\`

### Pipeline Behaviors (Cross-Cutting)

\`\`\`csharp
public class ValidationBehavior<TRequest, TResponse>
    : IPipelineBehavior<TRequest, TResponse>
    where TRequest : IRequest<TResponse>
{
    private readonly IEnumerable<IValidator<TRequest>> _validators;

    public ValidationBehavior(IEnumerable<IValidator<TRequest>> validators)
        => _validators = validators;

    public async Task<TResponse> Handle(
        TRequest request,
        RequestHandlerDelegate<TResponse> next,
        CancellationToken ct)
    {
        var context = new ValidationContext<TRequest>(request);
        var failures = _validators
            .Select(v => v.Validate(context))
            .SelectMany(r => r.Errors)
            .Where(f => f is not null)
            .ToList();

        if (failures.Any())
            throw new ValidationException(failures);

        return await next();
    }
}
\`\`\``,tasks:[{description:"Create a complete CQRS feature: a CreateOrderCommand with handler and validator, plus a GetOrderByIdQuery with handler.",starterCode:`// TODO: CreateOrderCommand record
// TODO: CreateOrderHandler
// TODO: CreateOrderValidator (FluentValidation)
// TODO: GetOrderByIdQuery record
// TODO: GetOrderByIdHandler`,solution:`// Commands
public record CreateOrderCommand(
    string CustomerEmail,
    List<OrderItemDto> Items) : IRequest<int>;

public record OrderItemDto(string ProductName, decimal Price, int Quantity);

public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, int>
{
    private readonly IOrderRepository _repo;
    private readonly IUnitOfWork _uow;

    public CreateOrderHandler(IOrderRepository repo, IUnitOfWork uow)
    {
        _repo = repo;
        _uow = uow;
    }

    public async Task<int> Handle(CreateOrderCommand cmd, CancellationToken ct)
    {
        var order = new Order { CustomerEmail = cmd.CustomerEmail };
        foreach (var item in cmd.Items)
            order.AddItem(item.ProductName, new Money(item.Price), item.Quantity);

        await _repo.AddAsync(order, ct);
        await _uow.SaveChangesAsync(ct);
        return order.Id;
    }
}

// Validation
public class CreateOrderValidator : AbstractValidator<CreateOrderCommand>
{
    public CreateOrderValidator()
    {
        RuleFor(x => x.CustomerEmail)
            .NotEmpty().EmailAddress();

        RuleFor(x => x.Items)
            .NotEmpty().WithMessage("Order must have at least one item");

        RuleForEach(x => x.Items).ChildRules(item =>
        {
            item.RuleFor(i => i.ProductName).NotEmpty();
            item.RuleFor(i => i.Price).GreaterThan(0);
            item.RuleFor(i => i.Quantity).GreaterThan(0);
        });
    }
}

// Queries
public record GetOrderByIdQuery(int Id) : IRequest<OrderDto?>;

public record OrderDto(int Id, string CustomerEmail, decimal Total, DateTime CreatedAt);

public class GetOrderByIdHandler : IRequestHandler<GetOrderByIdQuery, OrderDto?>
{
    private readonly IOrderRepository _repo;

    public GetOrderByIdHandler(IOrderRepository repo) => _repo = repo;

    public async Task<OrderDto?> Handle(GetOrderByIdQuery query, CancellationToken ct)
    {
        var order = await _repo.GetByIdAsync(query.Id, ct);
        return order is null ? null : new OrderDto(
            order.Id, order.CustomerEmail, order.Total.Amount, order.CreatedAt);
    }
}`,hints:["Commands change state; Queries read state — never mix them","Validators use FluentValidation rules and are auto-discovered via DI","Handlers should depend on interfaces defined in Domain, not concrete Infrastructure"]}]},{id:"mod20-t3",title:"Infrastructure & Wiring",explanation:`## Infrastructure Layer

Infrastructure implements the interfaces defined in Domain/Application.

### EF Core Implementation

\`\`\`csharp
// Infrastructure/Persistence/AppDbContext.cs
public class AppDbContext : DbContext, IUnitOfWork
{
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Order> Orders => Set<Order>();

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.ApplyConfigurationsFromAssembly(
            typeof(AppDbContext).Assembly);
    }
}

// Infrastructure/Persistence/ProductRepository.cs
public class ProductRepository : IProductRepository
{
    private readonly AppDbContext _db;
    public ProductRepository(AppDbContext db) => _db = db;

    public async Task<Product?> GetByIdAsync(int id, CancellationToken ct)
        => await _db.Products.FindAsync(new object[] { id }, ct);

    public async Task<List<Product>> GetActiveAsync(CancellationToken ct)
        => await _db.Products
            .Where(p => p.IsActive)
            .AsNoTracking()
            .ToListAsync(ct);

    public async Task AddAsync(Product product, CancellationToken ct)
        => await _db.Products.AddAsync(product, ct);
}
\`\`\`

### DI Registration Module

\`\`\`csharp
// Infrastructure/DependencyInjection.cs
public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(
                configuration.GetConnectionString("Default")));

        services.AddScoped<IUnitOfWork>(sp =>
            sp.GetRequiredService<AppDbContext>());

        services.AddScoped<IProductRepository, ProductRepository>();
        services.AddScoped<IOrderRepository, OrderRepository>();

        return services;
    }
}

// Application/DependencyInjection.cs
public static class DependencyInjection
{
    public static IServiceCollection AddApplication(
        this IServiceCollection services)
    {
        services.AddMediatR(cfg =>
            cfg.RegisterServicesFromAssembly(
                typeof(DependencyInjection).Assembly));

        services.AddValidatorsFromAssembly(
            typeof(DependencyInjection).Assembly);

        services.AddTransient(
            typeof(IPipelineBehavior<,>),
            typeof(ValidationBehavior<,>));

        return services;
    }
}
\`\`\`

### Clean Program.cs

\`\`\`csharp
// Api/Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddApplication()
    .AddInfrastructure(builder.Configuration);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseExceptionHandler("/error");
app.UseAuthorization();
app.MapControllers();
app.Run();
\`\`\`

### Benefits of Clean Architecture

| Benefit | How |
|---------|-----|
| Testability | Domain/Application have no infrastructure deps — pure unit tests |
| Flexibility | Swap databases, email providers without touching business logic |
| Maintainability | Clear boundaries prevent spaghetti code |
| Onboarding | New devs understand where code belongs |`,tasks:[{description:"Wire up the Infrastructure layer: implement the IOrderRepository with EF Core, create a DI registration extension method, and write a clean Program.cs.",starterCode:`// TODO: Implement OrderRepository : IOrderRepository
// TODO: Create AddInfrastructure extension method
// TODO: Write a clean Program.cs that wires all layers`,solution:`// Infrastructure/Persistence/OrderRepository.cs
public class OrderRepository : IOrderRepository
{
    private readonly AppDbContext _db;
    public OrderRepository(AppDbContext db) => _db = db;

    public async Task<Order?> GetByIdAsync(int id, CancellationToken ct)
        => await _db.Orders
            .Include(o => o.Items)
            .FirstOrDefaultAsync(o => o.Id == id, ct);

    public async Task<List<Order>> GetByCustomerAsync(
        string email, CancellationToken ct)
        => await _db.Orders
            .Include(o => o.Items)
            .Where(o => o.CustomerEmail == email)
            .AsNoTracking()
            .OrderByDescending(o => o.CreatedAt)
            .ToListAsync(ct);

    public async Task AddAsync(Order order, CancellationToken ct)
        => await _db.Orders.AddAsync(order, ct);
}

// Infrastructure/DependencyInjection.cs
public static class InfrastructureDI
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<AppDbContext>(o =>
            o.UseSqlServer(config.GetConnectionString("Default")));

        services.AddScoped<IUnitOfWork>(sp =>
            sp.GetRequiredService<AppDbContext>());
        services.AddScoped<IOrderRepository, OrderRepository>();
        services.AddScoped<IProductRepository, ProductRepository>();

        return services;
    }
}

// Api/Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddApplication()
    .AddInfrastructure(builder.Configuration);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseExceptionHandler("/error");
app.UseAuthorization();
app.MapControllers();
app.Run();`,hints:["Each layer has its own DI registration extension method","Repository implementations go in Infrastructure, interfaces in Domain","Program.cs should only call extension methods — no inline registrations"]}]}],test:[{id:"mod20-q1",question:"What is the Dependency Rule in Clean Architecture?",options:["All layers depend on Infrastructure","Dependencies must point inward — outer layers depend on inner layers, never the reverse","The Domain layer depends on the Application layer","All dependencies are bidirectional"],correctAnswer:1,explanation:"The Dependency Rule states that source code dependencies must point inward. Domain has no dependencies; Infrastructure depends on Domain."},{id:"mod20-q2",question:"Which layer contains Entity Framework Core DbContext?",options:["Domain","Application","Infrastructure","Presentation"],correctAnswer:2,explanation:"EF Core is an infrastructure concern. The DbContext implementation goes in Infrastructure, while repository interfaces live in Domain."},{id:"mod20-q3",question:"What is CQRS?",options:["A database query language","Separating read (Query) and write (Command) operations into different models","A caching strategy","A routing mechanism"],correctAnswer:1,explanation:"CQRS (Command Query Responsibility Segregation) separates reads and writes, allowing each to be optimized independently."},{id:"mod20-q4",question:"Where do repository interfaces belong in Clean Architecture?",options:["Infrastructure","Presentation","Domain","Application"],correctAnswer:2,explanation:"Repository interfaces (contracts) belong in the Domain layer. Concrete implementations using EF Core go in Infrastructure."},{id:"mod20-q5",question:"What is a Pipeline Behavior in MediatR?",options:["A CSS pipeline","Cross-cutting logic (validation, logging) that runs before/after every request handler","A database transaction","A middleware for HTTP requests"],correctAnswer:1,explanation:"Pipeline Behaviors wrap MediatR handlers, executing cross-cutting concerns like validation and logging for every command/query."}]},ff={id:"mod-21",title:"Security Best Practices",description:"Protect ASP.NET Core applications against common vulnerabilities — OWASP Top 10, input validation, CORS, HTTPS, and secrets management.",topics:[{id:"mod21-t1",title:"Input Validation & Injection Prevention",explanation:`## Defending Against Injection

Injection attacks are consistently #1 on the OWASP Top 10.

### SQL Injection Prevention

\`\`\`csharp
// VULNERABLE — never do this!
var sql = $"SELECT * FROM Users WHERE Name = '{userInput}'";
var result = _db.Users.FromSqlRaw(sql);

// SAFE — parameterized queries
var result = _db.Users
    .FromSqlInterpolated($"SELECT * FROM Users WHERE Name = {userInput}")
    .ToList();

// BEST — use LINQ (EF Core parameterizes automatically)
var result = _db.Users
    .Where(u => u.Name == userInput)
    .ToList();
\`\`\`

### Input Validation

\`\`\`csharp
public class CreateUserDto
{
    [Required]
    [StringLength(100, MinimumLength = 2)]
    [RegularExpression(@"^[a-zA-Z\\s]+$", ErrorMessage = "Letters only")]
    public string Name { get; set; } = "";

    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";

    [Range(18, 120)]
    public int Age { get; set; }
}
\`\`\`

### FluentValidation for Complex Rules

\`\`\`csharp
public class CreateUserValidator : AbstractValidator<CreateUserDto>
{
    public CreateUserValidator(IUserRepository users)
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MustAsync(async (email, ct) =>
                !await users.ExistsAsync(email, ct))
            .WithMessage("Email already registered");

        RuleFor(x => x.Name)
            .NotEmpty()
            .MaximumLength(100)
            .Matches(@"^[\\p{L}\\s]+$").WithMessage("Invalid characters");
    }
}
\`\`\`

### XSS Prevention

\`\`\`csharp
// Razor automatically HTML-encodes output
<p>@Model.UserInput</p>  // Safe — encoded

// Dangerous — only use with trusted/sanitized content
@Html.Raw(Model.Content)  // XSS risk!

// Sanitize if you must render HTML
using var sanitizer = new HtmlSanitizer();
var safe = sanitizer.Sanitize(userHtml);
\`\`\`

### Command Injection Prevention

\`\`\`csharp
// NEVER pass user input directly to shell commands
// If you must run a process:
var process = new Process
{
    StartInfo = new ProcessStartInfo
    {
        FileName = "myTool",
        Arguments = ProcessArguments.Escape(userInput), // escape!
        UseShellExecute = false
    }
};
\`\`\``,tasks:[{description:"Fix a vulnerable controller that has SQL injection, missing validation, and XSS issues.",starterCode:`[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    private readonly AppDbContext _db;

    // VULNERABLE: Fix all security issues
    [HttpGet]
    public IActionResult Search(string query)
    {
        // SQL injection
        var sql = $"SELECT * FROM Products WHERE Name LIKE '%{query}%'";
        var results = _db.Products.FromSqlRaw(sql).ToList();
        return Ok(results);
    }

    [HttpPost]
    public IActionResult Create(dynamic input)
    {
        // No validation at all
        _db.Products.Add(new Product
        {
            Name = input.name,
            Description = input.description
        });
        _db.SaveChanges();
        return Ok();
    }
}`,solution:`[ApiController]
[Route("api/[controller]")]
public class SearchController : ControllerBase
{
    private readonly AppDbContext _db;

    public SearchController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> Search(
        [FromQuery] string? query,
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 20)
    {
        if (pageSize > 100) pageSize = 100; // limit

        var products = await _db.Products
            .Where(p => string.IsNullOrEmpty(query)
                || p.Name.Contains(query)) // LINQ — parameterized
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .AsNoTracking()
            .ToListAsync();

        return Ok(products);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateProductRequest request)
    {
        // Model validation via [ApiController] + Data Annotations
        var product = new Product
        {
            Name = request.Name,
            Description = request.Description
        };
        _db.Products.Add(product);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(Search), new { query = product.Name }, product);
    }
}

public class CreateProductRequest
{
    [Required]
    [StringLength(200, MinimumLength = 1)]
    public string Name { get; set; } = "";

    [StringLength(2000)]
    public string? Description { get; set; }
}`,hints:["Use LINQ instead of raw SQL to prevent SQL injection","Use strongly-typed DTOs with Data Annotations instead of dynamic","Always use async methods and limit query results with pagination"]}]},{id:"mod21-t2",title:"Authentication & Secrets",explanation:`## Secure Authentication

### Password Hashing

\`\`\`csharp
// NEVER store plain-text passwords!
// ASP.NET Identity handles this automatically.
// If doing it manually:
using Microsoft.AspNetCore.Identity;

var hasher = new PasswordHasher<User>();
var hashed = hasher.HashPassword(user, rawPassword);
var result = hasher.VerifyHashedPassword(user, hashed, rawPassword);
// result == PasswordVerificationResult.Success
\`\`\`

### Secure JWT Configuration

\`\`\`csharp
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(
                    builder.Configuration["Jwt:Key"]!)),
            ClockSkew = TimeSpan.Zero // no tolerance for expired tokens
        };
    });
\`\`\`

### Secrets Management

\`\`\`bash
# Development — User Secrets (never commit to source control)
dotnet user-secrets init
dotnet user-secrets set "Jwt:Key" "your-256-bit-secret-key-here"
dotnet user-secrets set "ConnectionStrings:Default" "Server=..."
\`\`\`

\`\`\`csharp
// Production — use Azure Key Vault or environment variables
builder.Configuration.AddAzureKeyVault(
    new Uri("https://myvault.vault.azure.net/"),
    new DefaultAzureCredential());

// NEVER do this:
public class Config
{
    public string JwtKey = "hardcoded-secret"; // DANGER!
}
\`\`\`

### Anti-Forgery (CSRF Protection)

\`\`\`csharp
// For MVC/Razor Pages — built-in
[ValidateAntiForgeryToken]
[HttpPost]
public IActionResult UpdateProfile(ProfileModel model) { }

// For APIs — use SameSite cookies + CORS instead
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowApp", policy =>
    {
        policy.WithOrigins("https://myapp.com")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials();
    });
});
\`\`\``,tasks:[{description:"Secure a login endpoint: hash passwords properly, generate a short-lived JWT, and use User Secrets for the signing key.",starterCode:`[HttpPost("login")]
public IActionResult Login(LoginRequest request)
{
    // VULNERABLE: plain text password comparison
    var user = _db.Users.FirstOrDefault(u =>
        u.Email == request.Email &&
        u.Password == request.Password); // BAD!

    if (user == null) return Unauthorized();

    // VULNERABLE: weak token
    var token = Convert.ToBase64String(
        Encoding.UTF8.GetBytes($"{user.Id}:{user.Email}"));

    return Ok(new { token });
}`,solution:`[HttpPost("login")]
public async Task<IActionResult> Login(
    [FromBody] LoginRequest request,
    [FromServices] IConfiguration config)
{
    var user = await _db.Users
        .FirstOrDefaultAsync(u => u.Email == request.Email);

    if (user is null)
        return Unauthorized(new { message = "Invalid credentials" });

    // Verify hashed password
    var hasher = new PasswordHasher<User>();
    var result = hasher.VerifyHashedPassword(
        user, user.PasswordHash, request.Password);

    if (result == PasswordVerificationResult.Failed)
        return Unauthorized(new { message = "Invalid credentials" });

    // Generate secure JWT
    var key = new SymmetricSecurityKey(
        Encoding.UTF8.GetBytes(config["Jwt:Key"]!));

    var claims = new[]
    {
        new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim(ClaimTypes.Role, user.Role)
    };

    var token = new JwtSecurityToken(
        issuer: config["Jwt:Issuer"],
        audience: config["Jwt:Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddMinutes(30), // short-lived!
        signingCredentials: new SigningCredentials(
            key, SecurityAlgorithms.HmacSha256));

    return Ok(new
    {
        token = new JwtSecurityTokenHandler().WriteToken(token),
        expiresAt = token.ValidTo
    });
}`,hints:["Use PasswordHasher<T> — never compare passwords in plain text","JWT signing keys should come from config/secrets, never hardcoded","Set short token expiration (15-60 min) and use refresh tokens for longer sessions"]}]},{id:"mod21-t3",title:"HTTPS, Headers & Rate Limiting",explanation:`## Transport & Response Security

### Enforce HTTPS

\`\`\`csharp
// Program.cs
if (!app.Environment.IsDevelopment())
{
    app.UseHsts(); // Strict Transport Security header
}
app.UseHttpsRedirection();
\`\`\`

### Security Headers

\`\`\`csharp
// Custom middleware for security headers
public class SecurityHeadersMiddleware
{
    private readonly RequestDelegate _next;

    public SecurityHeadersMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        var headers = context.Response.Headers;

        headers["X-Content-Type-Options"] = "nosniff";
        headers["X-Frame-Options"] = "DENY";
        headers["X-XSS-Protection"] = "1; mode=block";
        headers["Referrer-Policy"] = "strict-origin-when-cross-origin";
        headers["Content-Security-Policy"] = "default-src 'self'";
        headers["Permissions-Policy"] = "camera=(), microphone=()";

        // Remove server identification
        headers.Remove("Server");
        headers.Remove("X-Powered-By");

        await _next(context);
    }
}

app.UseMiddleware<SecurityHeadersMiddleware>();
\`\`\`

### Rate Limiting (.NET 7+)

\`\`\`csharp
builder.Services.AddRateLimiter(options =>
{
    // Fixed window: 100 requests per minute
    options.AddFixedWindowLimiter("api", opt =>
    {
        opt.PermitLimit = 100;
        opt.Window = TimeSpan.FromMinutes(1);
        opt.QueueLimit = 0;
    });

    // Stricter limit for auth endpoints
    options.AddSlidingWindowLimiter("auth", opt =>
    {
        opt.PermitLimit = 5;
        opt.Window = TimeSpan.FromMinutes(5);
        opt.SegmentsPerWindow = 5;
    });

    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});

app.UseRateLimiter();

// Apply to endpoints
app.MapPost("/api/login", Login).RequireRateLimiting("auth");
app.MapGet("/api/products", GetProducts).RequireRateLimiting("api");
\`\`\`

### CORS Configuration

\`\`\`csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("Production", policy =>
    {
        policy
            .WithOrigins("https://myapp.com", "https://admin.myapp.com")
            .WithMethods("GET", "POST", "PUT", "DELETE")
            .WithHeaders("Authorization", "Content-Type")
            .SetPreflightMaxAge(TimeSpan.FromHours(1));
        // Do NOT use AllowAnyOrigin() with AllowCredentials()!
    });
});

app.UseCors("Production");
\`\`\`

### Logging Sensitive Data

\`\`\`csharp
// NEVER log sensitive data
_logger.LogInformation("Login attempt for {Email}", email); // OK
_logger.LogInformation("Password: {Pwd}", password);        // NEVER!
_logger.LogInformation("Token: {Token}", jwt);              // NEVER!
\`\`\``,tasks:[{description:"Create a SecurityHeadersMiddleware and configure rate limiting for an API — stricter limits on login, standard limits for other endpoints.",starterCode:`// TODO: SecurityHeadersMiddleware
// TODO: Rate limiting configuration in Program.cs`,solution:`// Middleware/SecurityHeadersMiddleware.cs
public class SecurityHeadersMiddleware
{
    private readonly RequestDelegate _next;

    public SecurityHeadersMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context)
    {
        var headers = context.Response.Headers;
        headers["X-Content-Type-Options"] = "nosniff";
        headers["X-Frame-Options"] = "DENY";
        headers["X-XSS-Protection"] = "1; mode=block";
        headers["Referrer-Policy"] = "strict-origin-when-cross-origin";
        headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()";
        headers.Remove("Server");
        headers.Remove("X-Powered-By");

        await _next(context);
    }
}

// Program.cs
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("standard", opt =>
    {
        opt.PermitLimit = 100;
        opt.Window = TimeSpan.FromMinutes(1);
    });

    options.AddSlidingWindowLimiter("auth", opt =>
    {
        opt.PermitLimit = 5;
        opt.Window = TimeSpan.FromMinutes(15);
        opt.SegmentsPerWindow = 5;
    });

    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});

var app = builder.Build();

app.UseMiddleware<SecurityHeadersMiddleware>();
app.UseHsts();
app.UseHttpsRedirection();
app.UseRateLimiter();
app.UseAuthentication();
app.UseAuthorization();

app.MapPost("/api/auth/login", Login).RequireRateLimiting("auth");
app.MapPost("/api/auth/register", Register).RequireRateLimiting("auth");
app.MapGet("/api/products", GetProducts).RequireRateLimiting("standard");

app.Run();`,hints:["Security headers go in middleware to apply globally","Use stricter rate limits on auth endpoints to prevent brute force","Middleware order matters: security headers first, then HTTPS, then rate limiting"]}]}],test:[{id:"mod21-q1",question:"What is the safest way to prevent SQL injection in EF Core?",options:["Escape user input with string.Replace","Use LINQ queries — EF Core parameterizes them automatically","Validate input length","Use stored procedures only"],correctAnswer:1,explanation:"LINQ queries are translated to parameterized SQL by EF Core, making SQL injection impossible for query parameters."},{id:"mod21-q2",question:"Where should JWT signing keys be stored?",options:["Hardcoded in the source code","In appsettings.json committed to source control","In User Secrets (dev) or Azure Key Vault / environment variables (prod)","In the database"],correctAnswer:2,explanation:"Signing keys are secrets. Use User Secrets in development and secure stores like Azure Key Vault in production. Never commit them."},{id:"mod21-q3",question:"What does the X-Content-Type-Options: nosniff header do?",options:["Compresses responses","Prevents browsers from MIME-sniffing the content type","Disables JavaScript","Enables caching"],correctAnswer:1,explanation:"nosniff tells the browser to trust the declared Content-Type and not try to detect it, preventing MIME confusion attacks."},{id:"mod21-q4",question:"Why use rate limiting on authentication endpoints?",options:["To improve performance","To prevent brute-force password attacks and credential stuffing","To reduce database load","To comply with HTTP standards"],correctAnswer:1,explanation:"Rate limiting on login/register endpoints prevents attackers from trying thousands of password combinations (brute force) or using stolen credentials at scale."},{id:"mod21-q5",question:"What is the OWASP Top 10?",options:["A list of the 10 best programming languages","A ranked list of the most critical web application security risks","The top 10 web frameworks","The 10 fastest databases"],correctAnswer:1,explanation:"The OWASP Top 10 is a standard awareness document listing the most critical web application security risks, including injection, broken auth, and XSS."}]},gf=[{id:"ft-1",question:"What is the difference between value types and reference types in C#?",options:["Value types are always faster than reference types in every scenario","Value types store data directly (stack); reference types store a reference to data on the heap","They behave identically and can be used interchangeably","Reference types cannot be null"],correctAnswer:1,explanation:"Value types (int, struct, bool) store data directly, typically on the stack. Reference types (class, string, array) store a reference pointing to data on the heap."},{id:"ft-2",question:"What is the purpose of the async/await pattern in C#?",options:["To execute code on multiple threads simultaneously","To enable non-blocking asynchronous operations without callbacks","To speed up CPU-bound computations","To replace exception handling"],correctAnswer:1,explanation:"async/await allows writing asynchronous code that reads like synchronous code. It frees the calling thread during I/O-bound waits without requiring manual callback management."},{id:"ft-3",question:"What are the three DI service lifetimes in ASP.NET Core?",options:["Static, Dynamic, Cached","Singleton (one for app), Scoped (one per request), Transient (new each time)","Global, Local, Session","Permanent, Temporary, Disposable"],correctAnswer:1,explanation:"Singleton creates one instance for the application lifetime. Scoped creates one per HTTP request. Transient creates a new instance every time the service is resolved."},{id:"ft-4",question:"What is the middleware pipeline in ASP.NET Core?",options:["A CI/CD deployment pipeline","An ordered chain of components that process HTTP requests and responses","A database query pipeline","A logging pipeline"],correctAnswer:1,explanation:"The middleware pipeline is an ordered sequence of components. Each can process the request, modify it, or pass it to the next middleware. Order matters: authentication before authorization, etc."},{id:"ft-5",question:"What happens if you call .Result on a Task inside an ASP.NET Core request?",options:["Nothing — it works fine in all cases","It can cause a deadlock by blocking the synchronization context","It throws an InvalidOperationException","It automatically converts to async"],correctAnswer:1,explanation:"Blocking on .Result can deadlock because the synchronization context thread is blocked waiting for the async operation that needs that same context to complete. Always use await."},{id:"ft-6",question:"What is Entity Framework Core and what does DbContext represent?",options:["EF Core is a testing framework; DbContext is a test fixture","EF Core is an ORM; DbContext is a session with the database that manages entities","EF Core is a web server; DbContext is a request context","EF Core is a UI framework; DbContext is a view model"],correctAnswer:1,explanation:"EF Core is an Object-Relational Mapper. DbContext represents a session with the database — it tracks entities, manages change detection, and coordinates saving changes."},{id:"ft-7",question:"What is the purpose of the [Authorize] attribute?",options:["To generate JWT tokens","To restrict access to authenticated/authorized users on controllers or actions","To configure database permissions","To enable CORS"],correctAnswer:1,explanation:'[Authorize] restricts access to authenticated users. It supports policies and roles: [Authorize(Policy = "Admin")] or [Authorize(Roles = "Manager")].'},{id:"ft-8",question:"What is the Options pattern and why use it?",options:["A pattern for optional method parameters","A way to bind configuration sections to strongly-typed classes via IOptions<T>","A pattern for nullable value types","A UI pattern for dropdown menus"],correctAnswer:1,explanation:"The Options pattern binds configuration from appsettings.json to strongly-typed classes, providing type safety, validation, and easy testing."},{id:"ft-9",question:"What is the difference between Include() and AsNoTracking() in EF Core?",options:["They do the same thing","Include() eager-loads related entities; AsNoTracking() disables change tracking for read-only queries","Include() is for filtering; AsNoTracking() is for sorting","Neither affects query performance"],correctAnswer:1,explanation:"Include() eager-loads navigation properties in a single query. AsNoTracking() skips change tracking, improving performance for read-only scenarios."},{id:"ft-10",question:"What is SignalR and when would you use it?",options:["A CSS framework for animations","A library for real-time bidirectional communication — chat, live updates, notifications","A database driver","A logging framework"],correctAnswer:1,explanation:"SignalR enables real-time communication via WebSockets (with fallbacks). Use it for chat, live dashboards, notifications, and collaborative features."},{id:"ft-11",question:"What is the difference between [Fact] and [Theory] in xUnit?",options:["[Fact] is for integration tests; [Theory] is for unit tests","[Fact] runs once with no parameters; [Theory] runs multiple times with different data sets","They are identical","[Theory] is deprecated"],correctAnswer:1,explanation:"[Fact] marks a test that runs once. [Theory] combined with [InlineData] runs the test multiple times with different input data."},{id:"ft-12",question:"What is the purpose of a DTO in an API?",options:["To store data in the database","To shape data for API input/output, separating the API contract from internal models","To define database tables","To configure routing"],correctAnswer:1,explanation:"DTOs (Data Transfer Objects) define the shape of API requests/responses, preventing exposure of internal entity details and enabling independent evolution."},{id:"ft-13",question:"How does model binding work in ASP.NET Core?",options:["It requires manual parsing of all HTTP request data","It automatically maps HTTP request data (route, query, body, headers) to action parameters","It only works with JSON bodies","It requires explicit deserialization code in every action"],correctAnswer:1,explanation:"Model binding automatically maps data from route values, query strings, request body, headers, and form data to action method parameters."},{id:"ft-14",question:"What is the purpose of global exception handling middleware?",options:["To prevent all exceptions from occurring","To catch unhandled exceptions and return consistent error responses","To log exceptions to the database only","To send error emails"],correctAnswer:1,explanation:"Global exception handling middleware catches unhandled exceptions, logs them, and returns consistent error responses (e.g., ProblemDetails) without exposing internal details."},{id:"ft-15",question:"What is a Minimal API and when would you use it?",options:["A reduced version of .NET with fewer features","A lightweight approach to building HTTP APIs without controllers — ideal for simple services","A mobile-only API framework","A testing API"],correctAnswer:1,explanation:"Minimal APIs define endpoints directly in Program.cs using MapGet/MapPost. They reduce boilerplate for simple APIs while still supporting DI, validation, and filters."},{id:"ft-16",question:"What is the purpose of CORS configuration in ASP.NET Core?",options:["To compress HTTP responses","To control which origins, methods, and headers are allowed for cross-origin requests","To cache static files","To configure SSL certificates"],correctAnswer:1,explanation:"CORS (Cross-Origin Resource Sharing) configures which external origins can access your API, which HTTP methods are allowed, and which headers can be sent."},{id:"ft-17",question:"Why use multi-stage Docker builds for ASP.NET Core apps?",options:["They enable running multiple apps in one container","They produce smaller final images by excluding SDK/build tools from the runtime image","They are required for .NET apps","They improve code quality"],correctAnswer:1,explanation:"Multi-stage builds use the full SDK image for building and the smaller runtime image for the final container, reducing image size from ~700MB to ~200MB or less."},{id:"ft-18",question:"What is a BackgroundService in ASP.NET Core?",options:["A service that runs in the browser","An abstract class for long-running background tasks within the application host","A JavaScript service worker","A database background process"],correctAnswer:1,explanation:"BackgroundService implements IHostedService and provides ExecuteAsync for running background work (queue processing, scheduled tasks) alongside the web application."},{id:"ft-19",question:"What is the Blazor @bind directive?",options:["CSS class binding","Two-way data binding between a C# field and an HTML element","Route parameter binding","Dependency injection binding"],correctAnswer:1,explanation:"@bind creates two-way data binding — UI changes update the C# field and field changes update the UI, similar to v-model in Vue or [(ngModel)] in Angular."},{id:"ft-20",question:"What is the difference between IMemoryCache and IDistributedCache?",options:["No difference","IMemoryCache is in-process; IDistributedCache uses an external store (Redis) shared across servers","IDistributedCache is always faster","IMemoryCache requires configuration"],correctAnswer:1,explanation:"IMemoryCache stores data in the application process memory (single server). IDistributedCache uses external stores like Redis, enabling caching across multiple server instances."},{id:"ft-21",question:"What is the purpose of health checks in ASP.NET Core?",options:["To monitor developer health","To expose app and dependency health status for load balancers and orchestrators","To check code quality metrics","To validate HTML markup"],correctAnswer:1,explanation:"Health checks expose endpoints (/healthz) that orchestrators (Kubernetes) and load balancers use to determine if the application is ready to serve traffic."},{id:"ft-22",question:"What is the ASPNETCORE_ENVIRONMENT variable used for?",options:["To set the CPU architecture","To determine which configuration is loaded and enable environment-specific behavior","To configure the IDE","To set the .NET version"],correctAnswer:1,explanation:"ASPNETCORE_ENVIRONMENT controls which appsettings.{Environment}.json is loaded and enables checks like IsDevelopment() for conditional middleware."},{id:"ft-23",question:"What is LINQ and why is it powerful?",options:["A logging library","Language Integrated Query — provides consistent query syntax for any data source in C#","A testing framework","A dependency injection library"],correctAnswer:1,explanation:"LINQ integrates query capabilities directly into C#. The same syntax works for in-memory collections, databases (EF Core), XML, and other data sources."},{id:"ft-24",question:"What is the record type in C# and when should you use it?",options:["A database record type","An immutable reference type with value-based equality — ideal for DTOs and domain values","A logging record","A configuration record"],correctAnswer:1,explanation:"Records provide value-based equality, concise syntax (positional records), immutability by default, and built-in ToString. Perfect for DTOs and immutable data models."},{id:"ft-25",question:"What is the purpose of EF Core migrations?",options:["Migrating applications between servers","Incrementally updating the database schema to match changes in the C# data model","Migrating from .NET Framework to .NET Core","Moving data between databases"],correctAnswer:1,explanation:"Migrations generate code that evolves the database schema incrementally, keeping it synchronized with your entity classes without losing data."},{id:"ft-26",question:"What is the difference between Blazor Server and Blazor WebAssembly?",options:["No difference","Server processes C# on the server with SignalR UI updates; WASM runs .NET in the browser","Blazor Server only supports static pages","WASM requires Node.js"],correctAnswer:1,explanation:"Blazor Server runs C# on the server and uses SignalR to send UI diffs to the client. Blazor WASM downloads the .NET runtime to the browser and executes C# locally."},{id:"ft-27",question:"What is the Channel<T> class used for?",options:["HTTP communication channels","A thread-safe producer-consumer queue for async background processing","SignalR hub channels","Database connection channels"],correctAnswer:1,explanation:"Channel<T> provides a high-performance, thread-safe producer-consumer data structure, ideal for queueing work items for background processing."},{id:"ft-28",question:"What is the purpose of the IServiceScopeFactory in a BackgroundService?",options:["To create new service registrations at runtime","To create DI scopes for resolving scoped services (like DbContext) in singleton contexts","To configure service lifetimes","To manage service health checks"],correctAnswer:1,explanation:"BackgroundService is Singleton, but DbContext is Scoped. IServiceScopeFactory creates a new scope to safely resolve scoped dependencies within the singleton context."},{id:"ft-29",question:"What is the purpose of endpoint filters in Minimal APIs?",options:["To filter CSS styles","To run logic before/after an endpoint handler — validation, logging, authorization","To filter database queries","To compress responses"],correctAnswer:1,explanation:"Endpoint filters run before and after endpoint handlers, enabling cross-cutting concerns like validation, logging, and transformation without modifying the handler."},{id:"ft-30",question:"What is structured logging and why is it important?",options:["Logging with proper indentation","Logging with named parameters that can be queried and analyzed programmatically","Logging only error messages","Logging to structured databases"],correctAnswer:1,explanation:"Structured logging captures log data as name-value pairs (not just strings), enabling powerful querying, filtering, and analysis in tools like Seq, Application Insights, or ELK."}],yf=[{id:"lt-1",question:"What is the Common Language Runtime (CLR)?",options:["A code editor for C#","The virtual machine that manages execution of .NET programs","A database engine","A front-end framework"],correctAnswer:1,explanation:"The CLR is the virtual machine component of .NET that manages memory, threading, and execution of managed code."},{id:"lt-2",question:"Which keyword is used to define a class in C#?",options:["define","struct","class","module"],correctAnswer:2,explanation:'The "class" keyword is used to define a reference type class in C#.'},{id:"lt-3",question:"What is the difference between value types and reference types?",options:["No difference","Value types are stored on the stack, reference types on the heap","Value types are faster","Reference types cannot be null"],correctAnswer:1,explanation:"Value types (int, struct) are stored on the stack, while reference types (class, string) store a reference on the stack pointing to data on the heap."},{id:"lt-4",question:'What does the "var" keyword do in C#?',options:["Declares a dynamic variable","Lets the compiler infer the type at compile time","Creates a global variable","Declares a variable with no type"],correctAnswer:1,explanation:"var enables implicit typing — the compiler infers the type from the assigned value at compile time. The variable is still strongly typed."},{id:"lt-5",question:'What is the purpose of the "using" statement?',options:["To import namespaces only","To ensure IDisposable resources are properly released","To create aliases for types","Both importing namespaces and ensuring resource disposal"],correctAnswer:3,explanation:'The "using" keyword serves dual purposes: importing namespaces at the top of files, and ensuring IDisposable objects are disposed properly in using blocks.'},{id:"lt-6",question:"What is the null-conditional operator (?.) in C#?",options:["A comparison operator","Safely accesses members of a potentially null object, returning null instead of throwing","A mathematical operator","A string formatting operator"],correctAnswer:1,explanation:"The ?. operator short-circuits to null if the left side is null, preventing NullReferenceException."},{id:"lt-7",question:"What is the difference between an interface and an abstract class?",options:["No difference","Interfaces have no implementation; abstract classes can have both abstract and concrete members","Interfaces are faster","Abstract classes cannot have methods"],correctAnswer:1,explanation:"Interfaces define contracts with no state (pre-C# 8). Abstract classes can have constructors, fields, and concrete method implementations. A class can implement multiple interfaces but inherit only one class."},{id:"lt-8",question:"What is LINQ?",options:["A logging library","Language Integrated Query — a set of query capabilities built into C#","A testing framework","A dependency injection container"],correctAnswer:1,explanation:"LINQ provides a consistent query syntax for collections, databases, XML, and other data sources directly in C#."},{id:"lt-9",question:"What does async/await do in C#?",options:["Makes code run in parallel threads","Enables asynchronous programming without blocking the calling thread","Creates background processes","Improves garbage collection"],correctAnswer:1,explanation:"async/await enables writing asynchronous code that reads like synchronous code. It frees the calling thread while waiting for I/O-bound operations."},{id:"lt-10",question:"What is the difference between IEnumerable<T> and IQueryable<T>?",options:["No difference","IEnumerable evaluates in-memory; IQueryable translates to queries (e.g., SQL)","IQueryable is always faster","IEnumerable is for databases only"],correctAnswer:1,explanation:"IEnumerable<T> performs LINQ operations in-memory. IQueryable<T> builds expression trees that providers translate to native queries (like SQL for EF Core)."},{id:"lt-11",question:"What is dependency injection?",options:["A security vulnerability","A pattern where objects receive their dependencies rather than creating them","A way to inject SQL queries","A method for creating singleton objects"],correctAnswer:1,explanation:"Dependency injection is a design pattern where dependencies are provided to objects externally, promoting loose coupling and testability."},{id:"lt-12",question:"What is middleware in ASP.NET Core?",options:["A database layer","Components that form a pipeline to handle HTTP requests and responses","A CSS framework","A testing tool"],correctAnswer:1,explanation:"Middleware are components assembled into a pipeline that process HTTP requests and responses. Each component can handle, modify, or pass the request to the next middleware."},{id:"lt-13",question:"What is the purpose of the [ApiController] attribute?",options:["It makes the class abstract","Enables automatic model validation, binding source inference, and problem details responses","It registers the controller in DI","It adds authentication"],correctAnswer:1,explanation:"[ApiController] enables API-specific behaviors: automatic model validation (returns 400), binding source inference, and ProblemDetails for error responses."},{id:"lt-14",question:"What is Entity Framework Core?",options:["A front-end framework","An Object-Relational Mapper (ORM) for .NET","A testing library","A logging framework"],correctAnswer:1,explanation:"EF Core is an ORM that lets you work with databases using C# objects, handling CRUD operations, relationships, and schema migrations."},{id:"lt-15",question:"What is a DbContext in Entity Framework Core?",options:["A database connection string","The main class that coordinates EF Core functionality — a session with the database","A migration file","A SQL query builder"],correctAnswer:1,explanation:"DbContext represents a session with the database. It manages entity tracking, queries, and saving changes."},{id:"lt-16",question:"What are EF Core migrations?",options:["Moving data between databases","A way to incrementally update the database schema to match the data model","Deploying applications","Importing CSV files"],correctAnswer:1,explanation:"Migrations generate code to update the database schema incrementally, keeping it in sync with your C# entity model."},{id:"lt-17",question:"What is JWT?",options:["A C# data type","JSON Web Token — a compact token format for securely transmitting claims","A database protocol","A CSS preprocessor"],correctAnswer:1,explanation:"JWT is a self-contained token format containing encoded claims, commonly used for API authentication and authorization."},{id:"lt-18",question:"What is the [Authorize] attribute used for?",options:["To authorize database access","To restrict access to controllers or actions to authenticated/authorized users","To generate authorization tokens","To configure CORS"],correctAnswer:1,explanation:'[Authorize] restricts access to authenticated users. It can specify policies or roles: [Authorize(Roles = "Admin")].'},{id:"lt-19",question:"What is the Options pattern in ASP.NET Core?",options:["A design pattern for UI options","A way to bind configuration sections to strongly-typed C# classes","A pattern for optional parameters","A nullable value type pattern"],correctAnswer:1,explanation:"The Options pattern uses IOptions<T> to bind configuration sections from appsettings.json to strongly-typed classes."},{id:"lt-20",question:"What is the difference between Singleton, Scoped, and Transient DI lifetimes?",options:["No difference","Singleton: one for app; Scoped: one per request; Transient: new each time","They are different names for the same thing","Scoped is always the best choice"],correctAnswer:1,explanation:"Singleton creates one instance for the app lifetime. Scoped creates one per HTTP request. Transient creates a new instance each time it is requested."},{id:"lt-21",question:"What is model binding in ASP.NET Core?",options:["Creating 3D models","Automatically mapping HTTP request data to action method parameters","Binding CSS to HTML","Connecting to a database"],correctAnswer:1,explanation:"Model binding automatically maps data from HTTP requests (route, query, body, headers) to action method parameters and model properties."},{id:"lt-22",question:"What is the IActionResult interface?",options:["An interface for database actions","A return type that represents various HTTP response types from controller actions","A filter interface","A configuration interface"],correctAnswer:1,explanation:"IActionResult is a return type that allows actions to return different HTTP responses: Ok(), NotFound(), BadRequest(), etc."},{id:"lt-23",question:"What is the difference between ActionResult<T> and IActionResult?",options:["No difference","ActionResult<T> provides type information for OpenAPI/Swagger documentation","IActionResult is newer","ActionResult<T> is only for GET requests"],correctAnswer:1,explanation:"ActionResult<T> combines IActionResult flexibility with strong typing, enabling better Swagger/OpenAPI documentation and type inference."},{id:"lt-24",question:"What is Kestrel?",options:["A testing framework","The cross-platform web server built into ASP.NET Core","A database","A CSS framework"],correctAnswer:1,explanation:"Kestrel is the default, cross-platform, high-performance web server included with ASP.NET Core."},{id:"lt-25",question:"What is the purpose of appsettings.json?",options:["To define CSS styles","To store application configuration like connection strings, feature flags, and settings","To configure the IDE","To define database schemas"],correctAnswer:1,explanation:"appsettings.json stores application configuration that can be read via the IConfiguration interface and Options pattern."},{id:"lt-26",question:"What does [HttpGet], [HttpPost], [HttpPut], [HttpDelete] do?",options:["Define CSS HTTP methods","Map controller actions to specific HTTP methods","Create HTTP servers","Enable HTTPS"],correctAnswer:1,explanation:"These attributes map controller actions to specific HTTP verbs, defining the RESTful API contract."},{id:"lt-27",question:"What is Swagger/OpenAPI in ASP.NET Core?",options:["A UI framework","A tool that auto-generates API documentation and a test UI from your controllers","A database tool","A CI/CD pipeline"],correctAnswer:1,explanation:"Swagger/OpenAPI generates interactive API documentation, letting developers test endpoints directly in the browser."},{id:"lt-28",question:"What is a DTO (Data Transfer Object)?",options:["A database table object","A simple object used to transfer data between layers, often different from the entity model","A TypeScript definition","A Docker transfer object"],correctAnswer:1,explanation:"DTOs are used to shape data for API responses/requests, separating the API contract from internal entity models."},{id:"lt-29",question:"What is the difference between .Include() and .ThenInclude() in EF Core?",options:["No difference","Include loads a related entity; ThenInclude loads a relation of the relation","ThenInclude is faster","Include is for one-to-one only"],correctAnswer:1,explanation:"Include() eager-loads a first-level navigation property. ThenInclude() loads a nested navigation property from the included entity."},{id:"lt-30",question:"What does AsNoTracking() do in EF Core?",options:["Disables logging","Tells EF Core not to track entities for changes, improving read query performance","Removes data from the database","Disables caching"],correctAnswer:1,explanation:"AsNoTracking() skips change tracking for read-only queries, reducing memory usage and improving performance."},{id:"lt-31",question:"What is SignalR?",options:["A logging library","A library for adding real-time web functionality via WebSockets and fallback transports","A database protocol","A CSS animation framework"],correctAnswer:1,explanation:"SignalR enables real-time bidirectional communication between server and clients using WebSockets, Server-Sent Events, or Long Polling."},{id:"lt-32",question:"What is xUnit?",options:["A CSS framework","A popular unit testing framework for .NET","A database tool","A deployment tool"],correctAnswer:1,explanation:"xUnit is a widely-used testing framework for .NET with features like [Fact], [Theory], constructor injection, and test isolation."},{id:"lt-33",question:"What is the Moq library used for?",options:["Mocking CSS styles","Creating mock objects for unit testing to isolate dependencies","Monitoring queries","Managing Docker containers"],correctAnswer:1,explanation:"Moq creates mock implementations of interfaces/classes for unit testing, allowing you to isolate the system under test."},{id:"lt-34",question:"What is the difference between [Fact] and [Theory] in xUnit?",options:["No difference","[Fact] runs once; [Theory] runs multiple times with different data","[Fact] is for integration tests","[Theory] is deprecated"],correctAnswer:1,explanation:"[Fact] marks a test that runs once with no parameters. [Theory] marks a data-driven test that runs with multiple sets of input data."},{id:"lt-35",question:"What is the record type in C#?",options:["A database record","A reference type with value-based equality, immutability support, and concise syntax","An audio recording type","A logging record"],correctAnswer:1,explanation:"Records provide value-based equality, a concise syntax for immutable data, and built-in ToString/deconstruction. Ideal for DTOs."},{id:"lt-36",question:"What is pattern matching in C#?",options:["Regex pattern matching","A feature for testing values against patterns and extracting data from them","CSS pattern matching","A design pattern"],correctAnswer:1,explanation:"Pattern matching enables concise conditional logic using is, switch expressions, type patterns, property patterns, and more."},{id:"lt-37",question:"What is the null-coalescing operator (??) in C#?",options:["A logical OR operator","Returns the left operand if non-null, otherwise the right operand","A comparison operator","A string concatenation operator"],correctAnswer:1,explanation:"The ?? operator returns the left operand if it is not null; otherwise, it returns the right operand as a fallback."},{id:"lt-38",question:'What does the "sealed" keyword do?',options:["Encrypts the class","Prevents a class from being inherited","Makes a class abstract","Marks a class as static"],correctAnswer:1,explanation:"The sealed keyword prevents other classes from inheriting from a sealed class, which can also enable certain JIT optimizations."},{id:"lt-39",question:"What is the difference between String and StringBuilder?",options:["No difference","String is immutable; StringBuilder is mutable and efficient for many concatenations","StringBuilder is slower","String is only for short text"],correctAnswer:1,explanation:"String creates a new object for each modification. StringBuilder modifies a buffer in place, making it efficient for repeated concatenations."},{id:"lt-40",question:"What is the purpose of the ILogger interface?",options:["To manage database logs","Provides a standard abstraction for structured logging in ASP.NET Core","To create log files","To format console output"],correctAnswer:1,explanation:"ILogger<T> provides structured logging with levels (Information, Warning, Error) and can output to multiple providers (console, file, Application Insights)."},{id:"lt-41",question:"What is a Minimal API in ASP.NET Core?",options:["A reduced version of .NET","A lightweight way to build HTTP APIs without controllers using MapGet/MapPost","A mobile API framework","A testing API"],correctAnswer:1,explanation:"Minimal APIs provide a streamlined way to define HTTP endpoints directly in Program.cs using Map methods, without controllers or routing attributes."},{id:"lt-42",question:"What is the IHostedService interface?",options:["A hosting provider interface","Defines methods for services that run in the background within the application host","A health check interface","A service locator"],correctAnswer:1,explanation:"IHostedService defines StartAsync and StopAsync for background services that run alongside the web application."},{id:"lt-43",question:"What does the [FromBody] attribute do?",options:["Reads from the request URL","Tells model binding to read the parameter value from the HTTP request body","Creates the request body","Validates the body content"],correctAnswer:1,explanation:"[FromBody] directs ASP.NET Core to deserialize the request body (usually JSON) into the parameter type."},{id:"lt-44",question:"What is the purpose of CORS middleware?",options:["To compress responses","To allow or restrict cross-origin HTTP requests from browsers","To cache responses","To log requests"],correctAnswer:1,explanation:"CORS (Cross-Origin Resource Sharing) middleware configures which origins, methods, and headers are allowed for cross-origin requests."},{id:"lt-45",question:"What is the difference between IMemoryCache and IDistributedCache?",options:["No difference","IMemoryCache is in-process; IDistributedCache uses an external store shared across servers","IDistributedCache is always faster","IMemoryCache requires Redis"],correctAnswer:1,explanation:"IMemoryCache stores data in the process memory (single server). IDistributedCache uses external stores like Redis, shared across multiple servers."},{id:"lt-46",question:"What is Blazor?",options:["A JavaScript framework","A framework for building interactive web UIs with C# instead of JavaScript","A CSS preprocessor","A database tool"],correctAnswer:1,explanation:"Blazor lets you build interactive web UIs using C# and .NET, running either on the server (Blazor Server) or in the browser (Blazor WebAssembly)."},{id:"lt-47",question:"What is a middleware pipeline?",options:["A data pipeline for ETL","A chain of middleware components that process HTTP requests in sequence","A CI/CD pipeline","A database query pipeline"],correctAnswer:1,explanation:"The middleware pipeline is an ordered series of components that each process the HTTP request and can pass it to the next component."},{id:"lt-48",question:"What is the difference between Task and Task<T>?",options:["No difference","Task represents an async operation with no result; Task<T> returns a value of type T","Task<T> is slower","Task is deprecated"],correctAnswer:1,explanation:"Task represents an asynchronous operation that does not return a value. Task<T> represents an async operation that returns a result of type T."},{id:"lt-49",question:"What is the purpose of the [Route] attribute?",options:["To configure network routes","To define the URL pattern that maps to a controller or action","To create redirect rules","To configure DNS"],correctAnswer:1,explanation:'[Route] defines the URL template for a controller or action method, supporting parameters like [Route("api/[controller]")].'},{id:"lt-50",question:"What is health checking in ASP.NET Core?",options:["Monitoring CPU temperature","A feature to expose app and dependency health status for orchestrators and load balancers","Checking code quality","Validating HTML markup"],correctAnswer:1,explanation:"Health checks expose endpoints (/healthz) that report the status of the application and its dependencies (database, cache, etc.)."},{id:"lt-51",question:'What does the "yield return" statement do?',options:["Returns and exits the method","Lazily produces the next element in an iterator without materializing the full collection","Throws an exception","Creates a new thread"],correctAnswer:1,explanation:"yield return lazily produces elements one at a time in an iterator method, enabling efficient streaming of data without building a full collection in memory."},{id:"lt-52",question:"What is the purpose of global exception handling middleware?",options:["To format exception messages in different languages","To catch unhandled exceptions across the application and return consistent error responses","To prevent exceptions from being thrown","To log exceptions to the console only"],correctAnswer:1,explanation:"Global exception handling middleware catches unhandled exceptions, logs them, and returns consistent error responses (e.g., ProblemDetails) to API clients."},{id:"lt-53",question:"What is a generic type constraint in C#?",options:["A database constraint","A restriction on what types can be used as type arguments for a generic (e.g., where T : class)","A CSS constraint","A memory limit"],correctAnswer:1,explanation:'Type constraints like "where T : IComparable" restrict generic type parameters to types that meet certain requirements.'},{id:"lt-54",question:"What is the purpose of Data Annotations in ASP.NET Core?",options:["To annotate CSS","Attributes like [Required], [MaxLength] that validate model properties","To annotate database tables","To add comments to code"],correctAnswer:1,explanation:"Data Annotations like [Required], [StringLength], [Range] add validation rules to model properties, enforced automatically by model binding."},{id:"lt-55",question:"What is the difference between .Select() and .Where() in LINQ?",options:["No difference",".Where() filters elements; .Select() transforms/projects elements",".Select() is for databases only",".Where() sorts elements"],correctAnswer:1,explanation:".Where() filters a sequence based on a condition. .Select() projects each element into a new form (transformation)."},{id:"lt-56",question:"What is a Docker multi-stage build?",options:["Building multiple Docker images at once","Using multiple FROM instructions to separate build and runtime, reducing final image size","Running multiple containers simultaneously","A CI/CD feature"],correctAnswer:1,explanation:"Multi-stage builds use separate stages (SDK for building, runtime for running) to produce smaller final images without build tools."},{id:"lt-57",question:"What is the Channel<T> class used for?",options:["HTTP channels","A thread-safe producer-consumer data structure for async programming","SignalR channels","WebSocket channels"],correctAnswer:1,explanation:"Channel<T> provides a high-performance, thread-safe producer-consumer queue for passing data between async operations."},{id:"lt-58",question:"What is the @bind directive in Blazor?",options:["CSS binding","Two-way data binding between a C# field and an HTML element","Route binding","Service binding"],correctAnswer:1,explanation:"@bind creates two-way data binding — changes in the UI update the C# field and vice versa, similar to frameworks like Angular or Vue."},{id:"lt-59",question:"What is the difference between AddSingleton, AddScoped, and AddTransient?",options:["They control thread priority","They define the lifetime of services in the DI container","They configure logging levels","They set database connection pooling"],correctAnswer:1,explanation:"AddSingleton: one instance for the app. AddScoped: one per HTTP request. AddTransient: a new instance every time the service is requested."},{id:"lt-60",question:"What does MapGroup() do in Minimal APIs?",options:["Creates map layouts","Groups related endpoints under a shared route prefix","Maps database tables","Creates middleware groups"],correctAnswer:1,explanation:"MapGroup() organizes related Minimal API endpoints under a common prefix with shared configuration like filters and tags."}];function Pl(e=30){const t=[...yf];for(let n=t.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t.slice(0,e).map((n,r)=>({...n,id:`lt-r-${r}`}))}const K={title:"C# & ASP.NET Mastery",description:"A comprehensive course covering everything from C# fundamentals to ASP.NET Core, Entity Framework, authentication, testing, and deployment best practices.",modules:[Qh,Kh,Jh,Yh,Xh,Zh,ef,tf,nf,rf,of,sf,af,lf,cf,uf,df,pf,mf,hf,ff],finalTest:gf};function vf(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}function wf({onRandomQuestion:e,onQuickLine:t,isOpen:n,onClose:r}){const{progress:i}=Tt(),o=s=>{const a=K.modules.find(c=>c.id===s);if(!a)return 0;const l=a.topics.filter(c=>{var h;return(h=i.topicProgress[c.id])==null?void 0:h.completed}).length;return Math.round(l/a.topics.length*100)};return u.jsxs("aside",{className:`sidebar ${n?"open":""}`,children:[u.jsx("div",{className:"sidebar-header",children:u.jsxs("h2",{children:["🟣 ",K.title]})}),u.jsxs("nav",{className:"sidebar-nav",children:[u.jsx(Mr,{to:"/",end:!0,className:"nav-item",onClick:r,children:"🏠 Dashboard"}),u.jsxs(Mr,{to:"/level-test",className:"nav-item",onClick:r,children:["📋 Level Evaluation",i.levelTestResult&&u.jsx("span",{className:"badge",children:vf(Math.round(i.levelTestResult.score/i.levelTestResult.total*100))})]}),e&&u.jsx("button",{className:"nav-item random-q-btn",onClick:()=>{e(),r()},children:"🎲 Random Question"}),t&&u.jsx("button",{className:"nav-item random-q-btn",onClick:()=>{t(),r()},children:"⚡ Quick Line"}),u.jsx("div",{className:"nav-section",children:u.jsx("span",{className:"nav-section-title",children:"Modules"})}),K.modules.map((s,a)=>u.jsx("div",{className:"module-nav",children:u.jsxs(Mr,{to:`/module/${s.id}`,className:"nav-item module-link",onClick:r,children:[u.jsxs("span",{children:[a+1,". ",s.title]}),u.jsxs("span",{className:"progress-badge",children:[o(s.id),"%"]})]})},s.id)),u.jsx("div",{className:"nav-section",children:u.jsx("span",{className:"nav-section-title",children:"Assessment"})}),u.jsxs(Mr,{to:"/final-test",className:"nav-item",onClick:r,children:["🏆 Final Test",i.finalTestResult&&u.jsxs("span",{className:"badge",children:[i.finalTestResult.score,"/",i.finalTestResult.total]})]})]})]})}function Cf(){const e=[];for(const t of K.modules)e.push(...t.test);return e.push(...K.finalTest),e}function bf(){const e=new Map;for(const t of K.modules)for(const n of t.test)e.set(n.id,{moduleId:t.id,moduleTitle:t.title});return e}const El=Cf(),Ht=bf();function Rl(){return El[Math.floor(Math.random()*El.length)]}function Sf({onClose:e}){const{dispatch:t}=Tt(),[n,r]=b.useState(Rl),[i,o]=b.useState(null),[s,a]=b.useState(!1),[l,c]=b.useState(0),[h,m]=b.useState(!1),[g,v]=b.useState(0),y=b.useCallback(()=>{r(Rl()),o(null),a(!1),m(!1)},[]),C=S=>{if(!s)if(o(S),a(!0),S===n.correctAnswer){const p=l+1;c(p),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!0,streak:p}})}else v(l),m(!0),c(0),t({type:"RECORD_RANDOM_QUESTION",payload:{correct:!1,streak:0}})};return u.jsx("div",{className:"modal-backdrop",onClick:e,children:u.jsxs("div",{className:"modal-content",onClick:S=>S.stopPropagation(),children:[u.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),u.jsx("h3",{className:"rq-question",children:n.question}),!h&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"rq-options",children:n.options.map((S,p)=>{let d="option";return i===p&&(d+=" selected"),s&&(p===n.correctAnswer?d+=" correct":i===p&&(d+=" incorrect")),u.jsx("button",{className:d,onClick:()=>C(p),children:S},p)})}),s&&i===n.correctAnswer&&u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"rq-explanation",children:n.explanation}),Ht.has(n.id)&&u.jsxs("a",{className:"module-ref-link",href:`#/module/${Ht.get(n.id).moduleId}`,onClick:e,children:["📖 Learn more: ",Ht.get(n.id).moduleTitle]})]}),s&&i===n.correctAnswer&&u.jsxs("div",{className:"rq-actions",children:[u.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",l]}),u.jsx("button",{className:"btn btn-primary",onClick:y,children:"Next Random Question →"})]})]}),h&&u.jsxs("div",{className:"rq-streak-end",children:[u.jsxs("p",{children:["OK. This one is incorrect. However, that was ",u.jsx("strong",{children:g})," correct answer",g!==1?"s":""," in a row. Congrats!"]}),u.jsx("p",{className:"rq-explanation",children:n.explanation}),Ht.has(n.id)&&u.jsxs("a",{className:"module-ref-link",href:`#/module/${Ht.get(n.id).moduleId}`,onClick:e,children:["📖 Learn more: ",Ht.get(n.id).moduleTitle]}),u.jsx("button",{className:"btn btn-primary",onClick:y,children:"Continue →"})]})]})})}const Ol=[{id:"ql-1",prompt:'Declare a string variable using var and assign "Hello, World!" to it.',codeBefore:[],codeAfter:["Console.WriteLine(greeting);"],answer:'var greeting = "Hello, World!";',hint:"Use var for implicit typing: var name = value;",moduleId:"mod-1",explanation:"The var keyword lets the compiler infer the type from the assigned value. Here it infers string."},{id:"ql-2",prompt:"Use string interpolation to create a greeting message.",codeBefore:['string name = "Alice";',"int age = 30;"],codeAfter:["Console.WriteLine(message);"],answer:'var message = $"Hello, {name}! You are {age} years old.";',hint:'String interpolation uses $"text {expression}" syntax.',moduleId:"mod-1",explanation:'String interpolation ($"...{expr}...") embeds expressions directly inside string literals for cleaner formatting.'},{id:"ql-3",prompt:"Use the null-coalescing operator to provide a default value.",codeBefore:["string? input = null;"],codeAfter:['Console.WriteLine(result); // "default"'],answer:'var result = input ?? "default";',hint:"The ?? operator returns the left side if non-null, otherwise the right side.",moduleId:"mod-1",explanation:"The ?? operator returns the left operand if it is non-null, otherwise it evaluates and returns the right operand."},{id:"ql-4",prompt:"Use the null-conditional operator to safely get the string length.",codeBefore:["string? text = null;"],codeAfter:["Console.WriteLine(length); // null"],answer:"int? length = text?.Length;",hint:"The ?. operator returns null if the left side is null instead of throwing.",moduleId:"mod-1",explanation:"The ?. operator short-circuits to null when the receiver is null, preventing NullReferenceException."},{id:"ql-5",prompt:"Declare a record type for a Person with Name and Age.",codeBefore:[],codeAfter:['var person = new Person("Alice", 30);'],answer:"record Person(string Name, int Age);",hint:"Records: record TypeName(Type Param1, Type Param2);",moduleId:"mod-1",explanation:"Records are immutable reference types with value-based equality, ideal for data transfer objects."},{id:"ql-6",prompt:"Use LINQ to filter only even numbers from the list.",codeBefore:["var numbers = new List<int> { 1, 2, 3, 4, 5, 6 };"],codeAfter:["// evens: [2, 4, 6]"],answer:"var evens = numbers.Where(n => n % 2 == 0).ToList();",hint:"Where() filters elements based on a predicate.",moduleId:"mod-4",explanation:"Where() is a LINQ extension method that filters a sequence, keeping only elements matching the predicate."},{id:"ql-7",prompt:"Use LINQ Select to project names to uppercase.",codeBefore:['var names = new List<string> { "alice", "bob", "charlie" };'],codeAfter:['// upper: ["ALICE", "BOB", "CHARLIE"]'],answer:"var upper = names.Select(n => n.ToUpper()).ToList();",hint:"Select() transforms each element: .Select(x => transform(x)).",moduleId:"mod-4",explanation:"Select() projects each element into a new form using the provided transform function."},{id:"ql-8",prompt:"Use LINQ to get the first user whose age is over 18, or null if none.",codeBefore:["var users = GetUsers();"],codeAfter:["// adult is User? (nullable)"],answer:"var adult = users.FirstOrDefault(u => u.Age > 18);",hint:"FirstOrDefault returns the first match or default (null for reference types).",moduleId:"mod-4",explanation:"FirstOrDefault returns the first element matching the predicate, or default(T) if no match is found."},{id:"ql-9",prompt:"Use LINQ to order products by price descending.",codeBefore:["var products = GetProducts();"],codeAfter:["// sorted from most to least expensive"],answer:"var sorted = products.OrderByDescending(p => p.Price).ToList();",hint:"OrderByDescending() sorts in descending order by the given key.",moduleId:"mod-4",explanation:"OrderByDescending() sorts elements from highest to lowest by the specified key selector."},{id:"ql-10",prompt:"Use LINQ to calculate the total price of all items.",codeBefore:["var items = GetCartItems();"],codeAfter:['Console.WriteLine($"Total: {total}");'],answer:"var total = items.Sum(i => i.Price);",hint:"Sum() calculates the sum of a numeric property.",moduleId:"mod-4",explanation:"Sum() computes the aggregate total of a numeric property across all elements in the collection."},{id:"ql-11",prompt:"Make this method async and await the database call.",codeBefore:["public async Task<List<Product>> GetProducts()","{"],codeAfter:["}"],answer:"return await _db.Products.ToListAsync();",hint:"Use await before the async method call inside an async method.",moduleId:"mod-5",explanation:"The await keyword asynchronously waits for a Task to complete without blocking the thread."},{id:"ql-12",prompt:"Run two async tasks in parallel and await both.",codeBefore:["var usersTask = GetUsersAsync();","var ordersTask = GetOrdersAsync();"],codeAfter:["var users = usersTask.Result;","var orders = ordersTask.Result;"],answer:"await Task.WhenAll(usersTask, ordersTask);",hint:"Task.WhenAll() runs multiple tasks concurrently and awaits all of them.",moduleId:"mod-5",explanation:"Task.WhenAll() creates a task that completes when all provided tasks finish, enabling parallel execution."},{id:"ql-13",prompt:"Define an interface for a repository with a GetById method.",codeBefore:[],codeAfter:["{","    Task<Product?> GetByIdAsync(int id);","}"],answer:"public interface IProductRepository",hint:'Interfaces use the "interface" keyword. Convention: prefix with I.',moduleId:"mod-3",explanation:"Interfaces define contracts that classes must implement. The I prefix is a C# naming convention."},{id:"ql-14",prompt:"Override the ToString method to return a formatted string.",codeBefore:["public class Product","{","    public string Name { get; set; }","    public decimal Price { get; set; }"],codeAfter:["}"],answer:'public override string ToString() => $"{Name}: ${Price}";',hint:'Use "public override" to override a base class method.',moduleId:"mod-3",explanation:"The override keyword replaces a virtual method from a base class with a new implementation."},{id:"ql-15",prompt:"Register a scoped service in the DI container.",codeBefore:["var builder = WebApplication.CreateBuilder(args);"],codeAfter:["var app = builder.Build();"],answer:"builder.Services.AddScoped<IUserService, UserService>();",hint:"AddScoped<TInterface, TImplementation>() registers a scoped service.",moduleId:"mod-6",explanation:"AddScoped registers a service that is created once per HTTP request and shared within that request."},{id:"ql-16",prompt:"Add the authorization middleware in the correct order.",codeBefore:["app.UseAuthentication();"],codeAfter:["app.MapControllers();"],answer:"app.UseAuthorization();",hint:"UseAuthorization() must come after UseAuthentication().",moduleId:"mod-6",explanation:"Middleware order matters: UseAuthorization must follow UseAuthentication so user identity is established first."},{id:"ql-17",prompt:"Create an API endpoint that returns a list of products.",codeBefore:["[HttpGet]"],codeAfter:["{","    var products = await _service.GetAllAsync();","    return Ok(products);","}"],answer:"public async Task<IActionResult> GetProducts()",hint:"Use async Task<IActionResult> for async controller actions.",moduleId:"mod-7",explanation:"Controller actions return Task<IActionResult> for async operations and use [HttpGet] to handle GET requests."},{id:"ql-18",prompt:"Return a 201 Created response with the location of the new resource.",codeBefore:["[HttpPost]","public async Task<IActionResult> Create(ProductDto dto)","{","    var product = await _service.CreateAsync(dto);"],codeAfter:["}"],answer:"return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);",hint:"CreatedAtAction returns 201 with a Location header pointing to the GET endpoint.",moduleId:"mod-7",explanation:"CreatedAtAction returns a 201 status with a Location header, following REST conventions for resource creation."},{id:"ql-19",prompt:"Configure a one-to-many relationship in OnModelCreating.",codeBefore:["protected override void OnModelCreating(ModelBuilder modelBuilder)","{"],codeAfter:["}"],answer:"modelBuilder.Entity<Order>().HasMany(o => o.Items).WithOne(i => i.Order);",hint:"HasMany().WithOne() configures a one-to-many relationship.",moduleId:"mod-8",explanation:"Fluent API's HasMany().WithOne() configures navigation properties for one-to-many relationships in EF Core."},{id:"ql-20",prompt:"Use AsNoTracking for a read-only query.",codeBefore:["public async Task<List<Product>> GetAll()","{"],codeAfter:["}"],answer:"return await _db.Products.AsNoTracking().ToListAsync();",hint:"AsNoTracking() disables change tracking for better read performance.",moduleId:"mod-8",explanation:"AsNoTracking() skips change tracking overhead, improving query performance for read-only scenarios."},{id:"ql-21",prompt:"Add the [Authorize] attribute with a specific policy.",codeBefore:[],codeAfter:["public class AdminController : ControllerBase","{","    // admin-only endpoints","}"],answer:'[Authorize(Policy = "AdminOnly")]',hint:'[Authorize(Policy = "PolicyName")] restricts access based on a policy.',moduleId:"mod-9",explanation:"The [Authorize] attribute with a Policy restricts access to users who satisfy the named authorization policy."},{id:"ql-22",prompt:"Get the current user's ID from the JWT claims.",codeBefore:["public IActionResult GetProfile()","{"],codeAfter:["    // use userId","}"],answer:"var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);",hint:"User.FindFirstValue() reads a claim from the authenticated user's JWT.",moduleId:"mod-9",explanation:"FindFirstValue extracts a specific claim from the authenticated user's ClaimsPrincipal (populated from JWT)."},{id:"ql-23",prompt:"Define a GET endpoint that returns all items using Minimal API syntax.",codeBefore:["var app = builder.Build();"],codeAfter:["app.Run();"],answer:'app.MapGet("/items", () => items);',hint:"MapGet(path, handler) defines a GET endpoint in Minimal APIs.",moduleId:"mod-15",explanation:"MapGet() registers a route handler for HTTP GET requests in Minimal API style without controllers."},{id:"ql-24",prompt:"Create a route group for API versioning.",codeBefore:["var app = builder.Build();"],codeAfter:['v1.MapGet("/users", () => "v1 users");'],answer:'var v1 = app.MapGroup("/api/v1");',hint:"MapGroup() creates a group with a shared route prefix.",moduleId:"mod-15",explanation:"MapGroup() creates a RouteGroupBuilder with a shared prefix, letting you organize related endpoints together."},{id:"ql-25",prompt:"Write a Theory test method signature with InlineData.",codeBefore:["[Theory]","[InlineData(2, 3, 5)]","[InlineData(0, 0, 0)]"],codeAfter:["{","    Assert.Equal(expected, a + b);","}"],answer:"public void Add_ReturnsSum(int a, int b, int expected)",hint:"[Theory] with [InlineData] runs the test with each set of parameters.",moduleId:"mod-12",explanation:"[Theory] tests run multiple times with different data sets provided by [InlineData] attributes."},{id:"ql-26",prompt:"Set up a mock to return a specific value.",codeBefore:["var mock = new Mock<IUserService>();"],codeAfter:["var controller = new UserController(mock.Object);"],answer:'mock.Setup(s => s.GetByIdAsync(1)).ReturnsAsync(new User { Id = 1, Name = "Test" });',hint:"mock.Setup(m => m.Method(args)).ReturnsAsync(value) configures the mock return.",moduleId:"mod-12",explanation:"Moq's Setup().ReturnsAsync() configures a mock to return a specific value when a method is called."},{id:"ql-27",prompt:"Use pattern matching to check the type and extract a value.",codeBefore:["object shape = GetShape();"],codeAfter:["{",'    Console.WriteLine($"Circle with radius {c.Radius}");',"}"],answer:"if (shape is Circle c)",hint:'Use "is Type variable" for type pattern matching with declaration.',moduleId:"mod-1",explanation:'The "is" pattern checks the type at runtime and declares a typed variable in one expression.'},{id:"ql-28",prompt:"Use a switch expression to return a description based on status.",codeBefore:["string description = status switch","{"],codeAfter:['    "Active" => "Currently active",','    "Inactive" => "Not active",','    _ => "Unknown"',"};"],answer:'    "Pending" => "Awaiting approval",',hint:"Switch expressions: value => result, with _ as the default case.",moduleId:"mod-1",explanation:"Switch expressions provide concise pattern-based branching, returning a value for each matched case."},{id:"ql-29",prompt:"Bind a configuration section to the Options pattern.",codeBefore:["var builder = WebApplication.CreateBuilder(args);"],codeAfter:["// Inject via IOptions<EmailSettings>"],answer:'builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("Email"));',hint:"Configure<T>(section) binds a config section to a strongly-typed class.",moduleId:"mod-11",explanation:"The Options pattern binds configuration sections to POCO classes, injectable via IOptions<T>."},{id:"ql-30",prompt:"Read a connection string from configuration.",codeBefore:["var builder = WebApplication.CreateBuilder(args);"],codeAfter:["builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlServer(conn));"],answer:'var conn = builder.Configuration.GetConnectionString("Default");',hint:"GetConnectionString() reads from the ConnectionStrings section.",moduleId:"mod-11",explanation:'GetConnectionString() reads from the "ConnectionStrings" section in appsettings.json by key name.'}];function Nl(){return Ol[Math.floor(Math.random()*Ol.length)]}function Tf({onClose:e}){var f,w;const{dispatch:t}=Tt(),[n,r]=b.useState(Nl),[i,o]=b.useState(""),[s,a]=b.useState(null),[l,c]=b.useState(!1),[h,m]=b.useState(0),[g,v]=b.useState(!1),[y,C]=b.useState(0),S=b.useCallback(()=>{r(Nl()),o(""),a(null),c(!1),v(!1)},[]),p=()=>{if(s)return;const A=i.trim();if(A)if(A.replace(/\s+/g,"")===n.answer.trim().replace(/\s+/g,"")){a("correct");const k=h+1;m(k),t({type:"RECORD_QUICK_LINE",payload:{correct:!0,streak:k}})}else a("incorrect"),C(h),v(!0),m(0),t({type:"RECORD_QUICK_LINE",payload:{correct:!1,streak:0}})},d=A=>{A.key==="Enter"&&p()};return u.jsx("div",{className:"modal-backdrop",onClick:e,children:u.jsxs("div",{className:"modal-content ql-modal",onClick:A=>A.stopPropagation(),children:[u.jsx("button",{className:"modal-close",onClick:e,children:"✕"}),u.jsx("h3",{className:"ql-prompt",children:n.prompt}),!g&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"ql-code-block",children:[n.codeBefore.map((A,k)=>u.jsx("div",{className:"ql-code-line",children:A||" "},"b"+k)),u.jsxs("div",{className:"ql-code-input-row",children:[u.jsx("span",{className:"ql-blank-marker",children:"→"}),u.jsx("input",{className:"ql-input"+(s==="correct"?" correct":s==="incorrect"?" incorrect":""),value:i,onChange:A=>o(A.target.value),onKeyDown:d,placeholder:"Type your one line here...",disabled:s!==null,autoFocus:!0})]}),n.codeAfter.map((A,k)=>u.jsx("div",{className:"ql-code-line",children:A||" "},"a"+k))]}),!s&&u.jsxs("div",{className:"ql-actions",children:[!l&&u.jsx("button",{className:"btn btn-secondary",onClick:()=>c(!0),children:"💡 Hint"}),u.jsx("button",{className:"btn btn-primary",onClick:p,children:"Check ✓"})]}),l&&!s&&u.jsxs("p",{className:"ql-hint",children:["💡 ",n.hint]}),s==="correct"&&u.jsxs("div",{className:"ql-result correct",children:[u.jsx("p",{children:"✅ Correct!"}),u.jsx("p",{className:"rq-explanation",children:n.explanation}),u.jsxs("a",{className:"module-ref-link",href:`#/module/${n.moduleId}`,onClick:e,children:["📖 Learn more: ",(f=K.modules.find(A=>A.id===n.moduleId))==null?void 0:f.title]}),u.jsxs("div",{className:"ql-actions",children:[u.jsxs("span",{className:"rq-streak",children:["🔥 Streak: ",h]}),u.jsx("button",{className:"btn btn-primary",onClick:S,children:"Next Quick Line →"})]})]})]}),g&&u.jsxs("div",{className:"ql-streak-end",children:[u.jsx("p",{children:"❌ Not quite. The correct line was:"}),u.jsx("div",{className:"ql-answer-reveal",children:u.jsx("code",{children:n.answer})}),u.jsx("p",{className:"rq-explanation",children:n.explanation}),u.jsxs("a",{className:"module-ref-link",href:`#/module/${n.moduleId}`,onClick:e,children:["📖 Learn more: ",(w=K.modules.find(A=>A.id===n.moduleId))==null?void 0:w.title]}),u.jsxs("p",{className:"ql-streak-msg",children:["That was ",u.jsx("strong",{children:y})," correct answer",y!==1?"s":""," in a row. Keep going!"]}),u.jsx("button",{className:"btn btn-primary",onClick:S,children:"Continue →"})]})]})})}function Af(){const{progress:e,dispatch:t}=Tt(),n=K.modules.reduce((v,y)=>v+y.topics.length,0),r=Object.values(e.topicProgress).filter(v=>v.completed).length,i=n>0?Math.round(r/n*100):0,o=Object.values(e.moduleTestResults).filter(v=>v.passed).length,s=e.randomQuestionStats??{attempts:0,correct:0,bestStreak:0},a=e.quickLineStats??{attempts:0,correct:0,bestStreak:0},l=s.attempts>0?Math.round(s.correct/s.attempts*100):0,c=a.attempts>0?Math.round(a.correct/a.attempts*100):0,h=e.levelTestResult,m=h?Math.round(h.score/h.total*100):0;function g(v){return v>=90?"Highly Proficient":v>=75?"Proficient":v>=55?"Advanced":v>=35?"Intermediate":"Beginner"}return u.jsxs("div",{className:"page dashboard",children:[u.jsx("h1",{children:K.title}),u.jsx("p",{className:"subtitle",children:K.description}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"stat-value",children:[i,"%"]}),u.jsx("div",{className:"stat-label",children:"Overall Progress"}),u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${i}%`}})})]}),u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"stat-value",children:[r,"/",n]}),u.jsx("div",{className:"stat-label",children:"Topics Completed"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsxs("div",{className:"stat-value",children:[o,"/",K.modules.length]}),u.jsx("div",{className:"stat-label",children:"Module Tests Passed"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-value",children:e.finalTestResult?`${e.finalTestResult.score}/${e.finalTestResult.total}`:"—"}),u.jsx("div",{className:"stat-label",children:"Final Test"})]})]}),u.jsx("h2",{children:"Activity Stats"}),u.jsxs("div",{className:"stats-grid",children:[h&&u.jsxs("div",{className:"stat-card activity-card level-card",children:[u.jsx("div",{className:"activity-icon",children:"📋"}),u.jsx("div",{className:"stat-value",children:g(m)}),u.jsx("div",{className:"stat-label",children:"Level Test Result"}),u.jsxs("div",{className:"activity-detail",children:[h.score,"/",h.total," (",m,"%)"]})]}),u.jsxs("div",{className:"stat-card activity-card rq-card",children:[u.jsx("div",{className:"activity-icon",children:"🎲"}),u.jsx("div",{className:"stat-value",children:s.attempts>0?`${l}%`:"—"}),u.jsx("div",{className:"stat-label",children:"Random Questions"}),s.attempts>0&&u.jsxs("div",{className:"activity-details",children:[u.jsxs("span",{children:[s.correct,"/",s.attempts," correct"]}),u.jsxs("span",{children:["🔥 Best streak: ",s.bestStreak]})]}),s.attempts===0&&u.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]}),u.jsxs("div",{className:"stat-card activity-card ql-card",children:[u.jsx("div",{className:"activity-icon",children:"⚡"}),u.jsx("div",{className:"stat-value",children:a.attempts>0?`${c}%`:"—"}),u.jsx("div",{className:"stat-label",children:"Quick Lines"}),a.attempts>0&&u.jsxs("div",{className:"activity-details",children:[u.jsxs("span",{children:[a.correct,"/",a.attempts," correct"]}),u.jsxs("span",{children:["🔥 Best streak: ",a.bestStreak]})]}),a.attempts===0&&u.jsx("div",{className:"activity-detail muted",children:"No attempts yet"})]})]}),!e.levelTestResult&&u.jsxs("div",{className:"cta-card",children:[u.jsx("h2",{children:"Start Here"}),u.jsx("p",{children:"Take the level evaluation test to assess your current C# & ASP.NET knowledge."}),u.jsx(Ve,{to:"/level-test",className:"btn btn-primary",children:"Take Level Test →"})]}),u.jsx("h2",{children:"Course Modules"}),u.jsx("div",{className:"modules-grid",children:K.modules.map((v,y)=>{const C=v.topics.length,S=v.topics.filter(f=>{var w;return(w=e.topicProgress[f.id])==null?void 0:w.completed}).length,p=Math.round(S/C*100),d=e.moduleTestResults[v.id];return u.jsxs(Ve,{to:`/module/${v.id}`,className:"module-card",children:[u.jsx("div",{className:"module-number",children:y+1}),u.jsx("h3",{children:v.title}),u.jsx("p",{children:v.description}),u.jsxs("div",{className:"module-meta",children:[u.jsxs("span",{children:[C," topics"]}),u.jsxs("span",{children:[p,"% done"]}),d&&u.jsxs("span",{className:d.passed?"pass":"fail",children:["Test: ",d.score,"/",d.total]})]}),u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})})]},v.id)})}),r>0&&u.jsx("div",{className:"reset-section",children:u.jsx("button",{className:"btn btn-danger",onClick:()=>{window.confirm("Reset all progress? This cannot be undone.")&&t({type:"RESET"})},children:"Reset All Progress"})})]})}function ca({title:e,questions:t,onComplete:n,previousResult:r,renderResult:i}){const[o,s]=b.useState({}),[a,l]=b.useState(!1),[c,h]=b.useState(r??null);if(c&&!a){const y=u.jsx("div",{className:"result-banner",children:u.jsxs("p",{className:c.passed?"pass":"fail",children:[c.passed?"✓ Passed":"✗ Failed"," — ",c.score,"/",c.total," (",Math.round(c.score/c.total*100),"%)"]})});return u.jsxs("div",{className:"quiz completed-quiz",children:[u.jsx("h2",{children:e}),i?i(c):y,u.jsx("button",{className:"btn",onClick:()=>{h(null),s({})},children:"Retake Test"})]})}const m=(y,C)=>{a||s(S=>({...S,[y]:C}))},g=()=>{let y=0;for(const S of t)o[S.id]===S.correctAnswer&&y++;const C={score:y,total:t.length,passed:y>=Math.ceil(t.length*.7),answers:o};h(C),l(!0),n(C)},v=t.every(y=>o[y.id]!==void 0);return u.jsxs("div",{className:"quiz",children:[u.jsx("h2",{children:e}),u.jsxs("p",{className:"quiz-progress",children:[Object.keys(o).length," of ",t.length," answered"]}),u.jsx("div",{className:"questions",children:t.map((y,C)=>u.jsxs("div",{className:`question ${a?"revealed":""}`,children:[u.jsxs("h3",{children:[C+1,". ",y.question]}),u.jsx("div",{className:"options",children:y.options.map((S,p)=>{let d="option";return o[y.id]===p&&(d+=" selected"),a&&(p===y.correctAnswer?d+=" correct":o[y.id]===p&&(d+=" incorrect")),u.jsx("button",{className:d,onClick:()=>m(y.id,p),disabled:a,children:S},p)})}),a&&u.jsx("p",{className:"explanation",children:y.explanation})]},y.id))}),!a&&u.jsx("button",{className:"btn btn-primary submit-btn",onClick:g,disabled:!v,children:"Submit Answers"}),a&&c&&(i?i(c):u.jsxs("div",{className:"result-banner",children:[u.jsxs("p",{className:c.passed?"pass":"fail",children:[c.passed?"✓ Passed":"✗ Failed"," — ",c.score,"/",c.total," (",Math.round(c.score/c.total*100),"%)"]}),!c.passed&&u.jsx("button",{className:"btn btn-primary",onClick:()=>{h(null),s({}),l(!1)},children:"🔄 Try Again"})]}))]})}function kf(e){return e>=90?"Highly Proficient":e>=75?"Proficient":e>=55?"Advanced":e>=35?"Intermediate":"Beginner"}const xf={Beginner:"You're just getting started with C# and ASP.NET. We recommend beginning from Module 1 and working through the entire course.",Intermediate:"You know the basics! Focus on Modules 3–5 to strengthen your understanding of OOP, LINQ, and async programming.",Advanced:"Solid foundation! Check out Modules 6–8 covering ASP.NET Core middleware, Entity Framework, and Web API design.",Proficient:"You have strong C#/ASP.NET skills. Review Modules 9–12 for advanced patterns like SignalR, Blazor, and microservices, then take the final test.","Highly Proficient":"Excellent C# & ASP.NET knowledge! You can go straight to the final test, or browse specific topics for a refresher."},Dl={Beginner:"#ef4444",Intermediate:"#f59e0b",Advanced:"#3b82f6",Proficient:"#22c55e","Highly Proficient":"#a855f7"};function Ml({result:e}){const t=Math.round(e.score/e.total*100),n=kf(t),r=Dl[n];return u.jsxs("div",{className:"level-result",children:[u.jsx("div",{className:"level-badge",style:{borderColor:r,color:r},children:n}),u.jsxs("p",{className:"level-score",children:[e.score,"/",e.total," (",t,"%)"]}),u.jsx("p",{className:"level-description",children:xf[n]}),u.jsx("div",{className:"level-scale",children:["Beginner","Intermediate","Advanced","Proficient","Highly Proficient"].map(i=>u.jsx("div",{className:`level-dot ${i===n?"active":""}`,style:i===n?{background:Dl[i]}:{},children:u.jsx("span",{className:"level-dot-label",children:i})},i))})]})}function If(){var s;const{progress:e,dispatch:t}=Tt(),[n,r]=b.useState(()=>Pl()),i=a=>{t({type:"SET_LEVEL_TEST",payload:a})},o=()=>{t({type:"RESET_LEVEL_TEST"}),r(Pl())};return u.jsxs("div",{className:"page",children:[u.jsx("h1",{children:"Level Evaluation Test"}),u.jsx("p",{className:"subtitle",children:"30 randomly selected questions to evaluate your C# & ASP.NET proficiency level. Each attempt gives you a different set of questions."}),e.levelTestResult&&u.jsxs(u.Fragment,{children:[u.jsx(Ml,{result:e.levelTestResult}),u.jsx("div",{className:"retake-section",children:u.jsx("button",{className:"btn",onClick:o,children:"Retake with New Questions"})})]}),!e.levelTestResult&&u.jsx(ca,{title:"C# & ASP.NET Knowledge Assessment",questions:n,onComplete:i,renderResult:a=>u.jsx(Ml,{result:a})},(s=n[0])==null?void 0:s.id)]})}function Pf(){const{moduleId:e}=id(),t=la(),{progress:n,dispatch:r}=Tt(),i=K.modules.findIndex(c=>c.id===e),o=K.modules[i];if(!o)return u.jsxs("div",{className:"page",children:[u.jsx("h1",{children:"Module Not Found"}),u.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const s=c=>{r({type:"SET_MODULE_TEST",payload:{moduleId:o.id,result:c}})},a=K.modules[i+1],l=K.modules[i-1];return u.jsxs("div",{className:"page module-page",children:[u.jsxs("div",{className:"module-header",children:[u.jsxs("span",{className:"module-badge",children:["Module ",i+1]}),u.jsx("h1",{children:o.title}),u.jsx("p",{className:"subtitle",children:o.description})]}),u.jsxs("div",{className:"topics-list",children:[u.jsx("h2",{children:"Topics"}),o.topics.map((c,h)=>{const m=n.topicProgress[c.id];return u.jsxs(Ve,{to:`/module/${o.id}/topic/${c.id}`,className:`topic-card ${m!=null&&m.completed?"completed":""}`,children:[u.jsx("span",{className:"topic-number",children:h+1}),u.jsx("span",{className:"topic-title",children:c.title}),(m==null?void 0:m.completed)&&u.jsx("span",{className:"check",children:"✓"})]},c.id)})]}),u.jsxs("div",{className:"module-test-section",children:[u.jsx("h2",{children:"Module Test"}),o.topics.every(c=>{var h;return(h=n.topicProgress[c.id])==null?void 0:h.completed})?u.jsx(ca,{title:`${o.title} — Test`,questions:o.test,onComplete:s,previousResult:n.moduleTestResults[o.id]}):u.jsx("p",{className:"test-locked",children:"🔒 Complete all practice tasks above to unlock the module test."})]}),u.jsxs("div",{className:"module-navigation",children:[l&&u.jsxs("button",{className:"btn",onClick:()=>t(`/module/${l.id}`),children:["← ",l.title]}),a&&u.jsxs("button",{className:"btn btn-primary",onClick:()=>t(`/module/${a.id}`),children:[a.title," →"]})]})]})}function Ef({content:e}){const t=Rf(e);return u.jsx("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}})}function Rf(e){let t=e;return t=t.replace(/```(\w*)\n([\s\S]*?)```/g,(n,r,i)=>{const o=Ll(i.trim());return`<div class="code-block"><div class="code-header"><span class="code-lang">${r||"code"}</span></div><pre><code>${o}</code></pre></div>`}),t=t.replace(/`([^`]+)`/g,(n,r)=>`<code class="inline-code">${Ll(r)}</code>`),t=t.replace(/\n(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/g,(n,r,i,o)=>{const s=r.split("|").filter(l=>l.trim()).map(l=>`<th>${l.trim()}</th>`).join(""),a=o.trim().split(`
`).map(l=>`<tr>${l.split("|").filter(h=>h.trim()).map(h=>`<td>${h.trim()}</td>`).join("")}</tr>`).join("");return`<table><thead><tr>${s}</tr></thead><tbody>${a}</tbody></table>`}),t=t.replace(/^### (.+)$/gm,"<h3>$1</h3>"),t=t.replace(/^## (.+)$/gm,"<h2>$1</h2>"),t=t.replace(/^# (.+)$/gm,"<h1>$1</h1>"),t=t.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/\*(.+?)\*/g,"<em>$1</em>"),t=t.replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>"),t=t.replace(/^(\d+)\. (.+)$/gm,"<oli>$2</oli>"),t=t.replace(/((?:<oli>.+<\/oli>\n?)+)/g,n=>`<ol>${n.replace(/<\/?oli>/g,i=>i==="<oli>"?"<li>":"</li>")}</ol>`),t=t.replace(/^- (.+)$/gm,"<li>$1</li>"),t=t.replace(/((?:<li>.+<\/li>\n?)+)/g,"<ul>$1</ul>"),t=t.replace(/^(?!<[a-z])((?!<\/?\w).+)$/gm,"<p>$1</p>"),t=t.replace(/<p>\s*<\/p>/g,""),t}function Ll(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Of({code:e,language:t="csharp"}){const[n,r]=b.useState(!1),i=()=>{navigator.clipboard.writeText(e).then(()=>{r(!0),setTimeout(()=>r(!1),2e3)})};return u.jsxs("div",{className:"code-block",children:[u.jsxs("div",{className:"code-header",children:[u.jsx("span",{className:"code-lang",children:t}),u.jsx("button",{className:"copy-btn",onClick:i,children:n?"✓ Copied":"Copy"})]}),u.jsx("pre",{children:u.jsx("code",{children:e})})]})}function ql(e){return e.replace(/\s+/g,"")}function Nf({task:e,taskIndex:t,onComplete:n,completed:r}){const[i,o]=b.useState(!1),[s,a]=b.useState(!1),[l,c]=b.useState(e.starterCode),[h,m]=b.useState(!!r),[g,v]=b.useState(null),y=()=>{const C=ql(l)===ql(e.solution);v(C?"correct":"incorrect"),C&&!h&&(m(!0),n())};return u.jsxs("div",{className:`task-view ${h?"task-solved":""}`,children:[u.jsxs("h3",{children:["📝 Task ",t+1]}),u.jsx("p",{className:"task-description",children:e.description}),u.jsxs("div",{className:"task-code",children:[u.jsx("h4",{children:"Your Code"}),u.jsx("textarea",{className:"code-editor",value:l,onChange:C=>{c(C.target.value),v(null)},rows:l.split(`
`).length+2,spellCheck:!1})]}),g==="correct"&&u.jsx("div",{className:"task-feedback correct",children:"✅ Correct! Well done."}),g==="incorrect"&&u.jsx("div",{className:"task-feedback incorrect",children:"❌ Not quite right. Check your code and try again."}),u.jsxs("div",{className:"task-actions",children:[u.jsx("button",{className:"btn btn-primary",onClick:y,disabled:h,children:h?"✓ Solved":"Check Solution"}),u.jsx("button",{className:"btn",onClick:()=>o(!i),children:i?"Hide Hints":"Show Hints"}),u.jsx("button",{className:"btn",onClick:()=>a(!s),children:s?"Hide Correct Code":"Show Correct Code"})]}),i&&u.jsxs("div",{className:"hints",children:[u.jsx("h4",{children:"Hints"}),u.jsx("ul",{children:e.hints.map((C,S)=>u.jsx("li",{children:C},S))})]}),s&&u.jsxs("div",{className:"solution",children:[u.jsx("h4",{children:"Correct Code"}),u.jsx(Of,{code:e.solution,language:"csharp"})]})]})}function Df(e){var t;return e.length>=2?e:[...e,{description:"Now implement the same solution from scratch, without any starter code provided.",starterCode:`// Write your complete solution here
`,solution:((t=e[0])==null?void 0:t.solution)||"",hints:["Try to recall the key concepts from the explanation above.","The solution should match what you built in the previous task."]}]}function Mf(){const{moduleId:e,topicId:t}=id(),n=la(),{progress:r,dispatch:i}=Tt(),o=K.modules.find(v=>v.id===e);if(!o)return u.jsxs("div",{className:"page",children:[u.jsx("h1",{children:"Module Not Found"}),u.jsx(Ve,{to:"/",className:"btn",children:"Back to Dashboard"})]});const s=o.topics.findIndex(v=>v.id===t),a=o.topics[s];if(!a)return u.jsxs("div",{className:"page",children:[u.jsx("h1",{children:"Topic Not Found"}),u.jsx(Ve,{to:`/module/${o.id}`,className:"btn",children:"Back to Module"})]});const l=Df(a.tasks),c=v=>{i({type:"COMPLETE_TASK",payload:{topicId:a.id,taskIndex:v,totalTasks:l.length}})},h=r.topicProgress[a.id],m=o.topics[s+1],g=o.topics[s-1];return u.jsxs("div",{className:"page topic-page",children:[u.jsxs("div",{className:"breadcrumb",children:[u.jsx(Ve,{to:"/",children:"Dashboard"}),u.jsx("span",{children:" / "}),u.jsx(Ve,{to:`/module/${o.id}`,children:o.title}),u.jsx("span",{children:" / "}),u.jsx("span",{children:a.title})]}),u.jsx("h1",{children:a.title}),u.jsx("div",{className:"topic-content",children:u.jsx(Ef,{content:a.explanation})}),u.jsx("hr",{}),l.map((v,y)=>{var C;return u.jsx(Nf,{task:v,taskIndex:y,onComplete:()=>c(y),completed:!!((C=h==null?void 0:h.tasksCompleted)!=null&&C[y])},`${a.id}-task-${y}`)}),u.jsxs("div",{className:"topic-navigation",children:[g&&u.jsxs("button",{className:"btn",onClick:()=>n(`/module/${o.id}/topic/${g.id}`),children:["← ",g.title]}),m?u.jsxs("button",{className:"btn btn-primary",onClick:()=>n(`/module/${o.id}/topic/${m.id}`),children:[m.title," →"]}):u.jsx("button",{className:"btn btn-primary",onClick:()=>n(`/module/${o.id}`),children:"Back to Module →"})]})]})}function Lf(){const{progress:e,dispatch:t}=Tt(),n=r=>{t({type:"SET_FINAL_TEST",payload:r})};return u.jsxs("div",{className:"page",children:[u.jsx("h1",{children:"🏆 Final Test"}),u.jsxs("p",{className:"subtitle",children:["This comprehensive test covers all ",K.modules.length," modules. You need 70% to pass and earn your certificate. Take your time!"]}),u.jsx(ca,{title:"C# & ASP.NET Mastery — Final Assessment",questions:K.finalTest,onComplete:n,previousResult:e.finalTestResult})]})}function qf(){const[e,t]=b.useState(!1),[n,r]=b.useState(!1),[i,o]=b.useState(!1),s=b.useCallback(()=>o(!1),[]);return u.jsxs("div",{className:"app-layout",children:[u.jsx("button",{className:"mobile-menu-btn",onClick:()=>o(!0),"aria-label":"Open menu",children:"☰"}),i&&u.jsx("div",{className:"sidebar-overlay",onClick:s}),u.jsx(wf,{onRandomQuestion:()=>{t(!0),s()},onQuickLine:()=>{r(!0),s()},isOpen:i,onClose:s}),e&&u.jsx(Sf,{onClose:()=>t(!1)}),n&&u.jsx(Tf,{onClose:()=>r(!1)}),u.jsx("main",{className:"main-content",children:u.jsxs(Oh,{children:[u.jsx(Pt,{path:"/",element:u.jsx(Af,{})}),u.jsx(Pt,{path:"/level-test",element:u.jsx(If,{})}),u.jsx(Pt,{path:"/module/:moduleId",element:u.jsx(Pf,{})}),u.jsx(Pt,{path:"/module/:moduleId/topic/:topicId",element:u.jsx(Mf,{})}),u.jsx(Pt,{path:"/final-test",element:u.jsx(Lf,{})}),u.jsx(Pt,{path:"*",element:u.jsx("div",{className:"page",children:u.jsx("h1",{children:"404 — Page Not Found"})})})]})})]})}function _f(){return u.jsx(Uh,{children:u.jsx($h,{children:u.jsx(qf,{})})})}yo.createRoot(document.getElementById("root")).render(u.jsx($l.StrictMode,{children:u.jsx(_f,{})}));

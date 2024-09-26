var tl=Object.defineProperty;var el=(r,e,t)=>e in r?tl(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var nl=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var et=(r,e,t)=>el(r,typeof e!="symbol"?e+"":e,t);var B0=nl((W0,$c)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Ds=function(r,e){return(Ds=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])})(r,e)};function ge(r,e){function t(){this.constructor=r}Ds(r,e),r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function X(r,e,t,n){return new(t||(t=Promise))(function(o,a){function i(c){try{u(n.next(c))}catch(l){a(l)}}function s(c){try{u(n.throw(c))}catch(l){a(l)}}function u(c){c.done?o(c.value):new t(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,[])).next())})}function Y(r,e){var t,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){i.label=l[1];break}if(l[0]===6&&i.label<o[1]){i.label=o[1],o=l;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(l);break}o[2]&&i.ops.pop(),i.trys.pop();continue}l=e.call(r,i)}catch(h){l=[6,h],n=0}finally{t=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var rl=function(){function r(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(e,t){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+t+"."),this.platformName=e,this.platform=t},r.prototype.registerFlag=function(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){var o=this.urlFlags[e];console.warn("Setting feature override from URL "+e+": "+o+"."),this.set(e,o)}},r.prototype.get=function(e){return e in this.flags?this.flags[e]:(this.flags[e]=this.evaluateFlag(e),this.flags[e])},r.prototype.getNumber=function(e){return this.get(e)},r.prototype.getBool=function(e){return this.get(e)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(e,t){if(this.flagRegistry[e]==null)throw new Error("Cannot set flag "+e+" as it has not been registered.");this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)},r.prototype.evaluateFlag=function(e){if(this.flagRegistry[e]==null)throw new Error("Cannot evaluate flag '"+e+"': no evaluation function found.");return this.flagRegistry[e].evaluationFn()},r.prototype.setFlags=function(e){this.flags=Object.assign({},e)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var e=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var t,n,o=(t=this.global.location.search,n={},t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(a){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return ol(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(a){var i=a.split(":"),s=i[0],u=i[1];e.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function ol(r,e,t){r[decodeURIComponent(e)]=decodeURIComponent(t||"")}function O(){return As}var As=null,Mr=new Map,Zo=new Map;function Ts(r,e){var t=Fs(r,e);return Mr.get(t)}function al(r){return Zo.get(r)}function Ei(r){for(var e=Mr.entries(),t=[];;){var n=e.next(),o=n.done,a=n.value;if(o)break;var i=a[0],s=a[1];i.split("_")[0]===r&&t.push(s)}return t}function Ns(r){var e=r.kernelName,t=r.backendName,n=Fs(e,t);if(Mr.has(n))throw new Error("The kernel '"+e+"' for backend '"+t+"' is already registered");Mr.set(n,r)}function il(r){var e=r.kernelName;Zo.has(e)&&console.warn("Overriding the gradient for '"+e+"'"),Zo.set(e,r)}function Fs(r,e){return e+"_"+r}function ta(r,e,t){return Math.max(r,Math.min(e,t))}function Ps(r){return r%2==0?r:r+1}function sl(r){for(var e=0,t=0;t<r.length;t++)e+=r[t];return e}function E(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function xt(r,e,t){t===void 0&&(t=""),E(zt(r,e),function(){return t+" Shapes "+r+" and "+e+" must match"})}function qn(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Un(r,e,t){if(e===void 0&&(e=[]),t===void 0&&(t=!1),e==null&&(e=[]),Array.isArray(r)||De(r)&&!t)for(var n=0;n<r.length;++n)Un(r[n],e,t);else e.push(r);return e}function $(r){if(r.length===0)return 1;for(var e=r[0],t=1;t<r.length;t++)e*=r[t];return e}function zt(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(var t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function Tt(r){return r%1==0}function ul(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var e=Math.exp(2*r);return(e-1)/(e+1)}function ea(r){var e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}function Pn(r,e){return e<=r.length?r:r+" ".repeat(e-r.length)}function Ii(r,e,t){return e===void 0&&(e=function(n){return 0}),new Promise(function(n,o){var a=0,i=function(){if(r())n();else{a++;var s=e(a);t!=null&&a>=t?o():setTimeout(i,s)}};i()})}function cl(r,e){for(var t=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)t*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(e>0&&e!==t)throw Error("Size("+e+") must match the product of shape "+r);return r}if(t===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(e%t!=0)throw Error("The implicit shape can't be a fractional number. Got "+e+" / "+t);var a=r.slice();return a[n]=e/t,a}function Lt(r,e){var t=e.length;return E((r=r==null?e.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-t&&n<t}),function(){return"All values in axis param must be in range [-"+t+", "+t+") but got axis "+r}),E(r.every(function(n){return Tt(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?t+n:n})}function hn(r,e){for(var t=[],n=[],o=e!=null&&Array.isArray(e)&&e.length===0,a=e==null||o?null:Lt(e,r).sort(),i=0,s=0;s<r.length;++s){if(a!=null){if(a[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(a[i]==null||a[i]>s)&&r[s]===1&&(t.push(r[s]),n.push(s)),a[i]<=s&&i++}r[s]!==1&&(t.push(r[s]),n.push(s))}return{newShape:t,keptDims:n}}function tr(r,e){var t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else{if(r!=="bool")throw new Error("Unknown data type "+r);t=new Uint8Array(e)}return t}function Or(r,e){var t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else{if(r!=="string")throw new Error("Unknown data type "+r);t=new Array(e)}return t}function ll(r,e){for(var t=0;t<r.length;t++){var n=r[t];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+e+" being uploaded contains "+n+".")}}function hl(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function fl(r,e){return e!=="complex64"&&(e!=="float32"||r==="complex64")&&(e!=="int32"||r==="float32"||r==="complex64")&&(e!=="bool"||r!=="bool")}function De(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function Ms(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function pl(r){if(r==null)return 0;var e=0;return r.forEach(function(t){return e+=t.length}),e}function _a(r){return typeof r=="string"||r instanceof String}function dl(r){return typeof r=="boolean"}function vl(r){return typeof r=="number"}function cr(r){return Array.isArray(r)?cr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":vl(r)?"float32":_a(r)?"string":dl(r)?"bool":"float32"}function na(r){return!!(r&&r.constructor&&r.call&&r.apply)}function ra(r,e){for(var t=e;t<r;++t)if(r%t==0)return t;return r}function Ae(r){var e=r.length;if(e<2)return[];var t=new Array(e-1);t[e-2]=r[e-1];for(var n=e-3;n>=0;--n)t[n]=t[n+1]*r[n+1];return t}function Os(r,e,t){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Un(r)),t&&ll(r,e),function(a,i){return a instanceof Float32Array&&i==="float32"||a instanceof Int32Array&&i==="int32"||a instanceof Uint8Array&&i==="bool"}(r,e))return r;if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+e)}function Ri(r,e){if(r.length===0)return e[0];var t=r.reduce(function(n,o){return n*o});if(t===0)return[];if(t!==e.length)throw new Error("["+r+"] does not match the input size.");return function n(o,a,i){var s=new Array;if(a.length===1)for(var u=a[0],c=0;c<u;c++)s[c]=i[o+c];else{u=a[0];var l=a.slice(1),h=l.reduce(function(f,p){return f*p});for(c=0;c<u;c++)s[c]=n(o+c*h,l,i)}return s}(0,r,e)}function Bs(r,e){for(var t=lr(r,e),n=0;n<t.length;n++)t[n]=1;return t}function lr(r,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+e)}function Ie(){return O().platform.now()}function Ls(r){r.forEach(function(e){E(Number.isInteger(e)&&e>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function ml(r,e){return e===void 0&&(e="utf-8"),e=e||"utf-8",O().platform.encode(r,e)}function Br(r,e){return e===void 0&&(e="utf-8"),e=e||"utf-8",O().platform.decode(r,e)}function ki(r,e,t){if(e===0)return 0;if(e===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=t[o]*r[o];return n}function gl(r,e,t){if(e===0)return[];if(e===1)return[r];for(var n=new Array(e),o=0;o<n.length-1;++o)n[o]=Math.floor(r/t[o]),r-=n[o]*t[o];return n[n.length-1]=r,n}var yl=function(){function r(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new xl)}return r.prototype.profileKernel=function(e,t,n){var o,a=this,i=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var p=c[f];if(isNaN(p)||!isFinite(p))return console.warn("Found "+p+" in the result of '"+h+"'"),!0}})(u,s.dtype,e),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),a.logger.logKernelProfile(e,s,u,c.kernelMs,t,l)})})}),o},r}(),xl=function(){function r(){}return r.prototype.logKernelProfile=function(e,t,n,o,a,i){var s=typeof o=="number"?Pn(o+"ms",9):o.error,u=Pn(e,25),c=t.rank,l=t.size,h=Pn(t.shape.toString(),14),f="";for(var p in a){var d=a[p].shape||t.shape,v=d.length;f+=p+": "+v+"D "+(v>0?d:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+i,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Si=20,Kn=3,Ro=7;function bl(r,e,t,n){var o=Ae(e),a=function(c,l,h,f){var p=$(l),d=f[f.length-1],v=new Array(d).fill(0),m=l.length,g=h==="complex64"?Yn(c):c;if(m>1)for(var x=0;x<p/d;x++)for(var b=x*d,y=0;y<d;y++)v[y]=Math.max(v[y],Xn(g[b+y],0,h).length);return v}(r,e,t,o),i=e.length,s=function c(l,h,f,p,d,v){v===void 0&&(v=!0);var m=f==="complex64"?2:1,g=h[0],x=h.length;if(x===0)return f==="complex64"?[Xn(Yn(l)[0],0,f)]:f==="bool"?[Ws(l[0])]:[l[0].toString()];if(x===1){if(g>Si){var b=Kn*m,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-Kn)*m,g*m));return f==="complex64"&&(y=Yn(y),w=Yn(w)),["["+y.map(function(B,U){return Xn(B,d[U],f)}).join(", ")+", ..., "+w.map(function(B,U){return Xn(B,d[g-Kn+U],f)}).join(", ")+"]"]}return["["+(f==="complex64"?Yn(l):Array.from(l)).map(function(B,U){return Xn(B,d[U],f)}).join(", ")+"]"]}var C=h.slice(1),S=p.slice(1),k=p[0]*m,I=[];if(g>Si){for(var R=0;R<Kn;R++){var N=(A=R*k)+k;I.push.apply(I,c(l.slice(A,N),C,f,S,d,!1))}for(I.push("..."),R=g-Kn;R<g;R++)N=(A=R*k)+k,I.push.apply(I,c(l.slice(A,N),C,f,S,d,R===g-1))}else for(R=0;R<g;R++){var A;N=(A=R*k)+k,I.push.apply(I,c(l.slice(A,N),C,f,S,d,R===g-1))}var L=x===2?",":"";for(I[0]="["+I[0]+L,R=1;R<I.length-1;R++)I[R]=" "+I[R]+L;var M=`,
`;for(R=2;R<x;R++)M+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(v?"":M),I}(r,e,t,o,a),u=["Tensor"];return n&&(u.push("  dtype: "+t),u.push("  rank: "+i),u.push("  shape: ["+e+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Xn(r,e,t){return Pn(Array.isArray(r)?parseFloat(r[0].toFixed(Ro))+" + "+parseFloat(r[1].toFixed(Ro))+"j":_a(r)?"'"+r+"'":t==="bool"?Ws(r):parseFloat(r.toFixed(Ro)).toString(),e)}function Ws(r){return r===0?"false":"true"}function Yn(r){for(var e=[],t=0;t<r.length;t+=2)e.push([r[t],r[t+1]]);return e}var er=function(){function r(e,t,n){var o=this;if(this.dtype=t,this.shape=e.slice(),this.size=$(e),n!=null){var a=n.length;E(a===this.size,function(){return"Length of values '"+a+"' does not match the size inferred by the shape '"+o.size+"'."})}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||Or(t,this.size),this.strides=Ae(e)}return r.prototype.set=function(e){for(var t=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+t.rank+")"});var a=this.locToIndex(n);this.values[a]=e},r.prototype.get=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];e.length===0&&(e=[0]);for(var n=0,o=0,a=e;o<a.length;o++){var i=a[o];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+e+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=e[e.length-1],c=0;c<e.length-1;++c)u+=this.strides[c]*e[c];return this.values[u]},r.prototype.locToIndex=function(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];for(var t=e[e.length-1],n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t},r.prototype.indexToLoc=function(e){if(this.rank===0)return[];if(this.rank===1)return[e];for(var t=new Array(this.shape.length),n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Re().makeTensor(this.values,this.shape,this.dtype)},r}(),Re=null,P=null,zs=null,It=function(){function r(e,t,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=$(e),this.strides=Ae(e),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(e,t){return this.throwIfDisposed(),this.reshape([e,t])},r.prototype.as3D=function(e,t,n){return this.throwIfDisposed(),this.reshape([e,t,n])},r.prototype.as4D=function(e,t,n,o){return this.throwIfDisposed(),this.reshape([e,t,n,o])},r.prototype.as5D=function(e,t,n,o,a){return this.throwIfDisposed(),this.reshape([e,t,n,o,a])},r.prototype.asType=function(e){return this.throwIfDisposed(),P.cast(this,e)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,P.buffer(this.shape,this.dtype,e)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){switch(t.label){case 0:return[4,this.data()];case 1:return e=t.sent(),[2,Ri(this.shape,e)]}})})},r.prototype.arraySync=function(){return Ri(this.shape,this.dataSync())},r.prototype.data=function(){return X(this,void 0,void 0,function(){var e,t;return Y(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),e=Re().read(this.dataId),this.dtype!=="string"?[3,2]:[4,e];case 1:t=n.sent();try{return[2,t.map(function(o){return Br(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,e]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var e=Re().readSync(this.dataId);if(this.dtype==="string")try{return e.map(function(t){return Br(t)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e},r.prototype.bytes=function(){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){switch(t.label){case 0:return this.throwIfDisposed(),[4,Re().read(this.dataId)];case 1:return e=t.sent(),this.dtype==="string"?[2,e]:[2,new Uint8Array(e.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Re().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(e){return e===void 0&&(e=!1),P.print(this,e)},r.prototype.reshape=function(e){return this.throwIfDisposed(),P.reshape(this,e)},r.prototype.reshapeAs=function(e){return this.throwIfDisposed(),this.reshape(e.shape)},r.prototype.expandDims=function(e){return e===void 0&&(e=0),P.expandDims(this,e)},r.prototype.cumsum=function(e,t,n){return e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1),P.cumsum(this,e,t,n)},r.prototype.squeeze=function(e){return this.throwIfDisposed(),P.squeeze(this,e)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(e,t,n){return this.throwIfDisposed(),P.oneHot(this,e,t,n)},r.prototype.toString=function(e){return e===void 0&&(e=!1),bl(this.dataSync(),this.shape,this.dtype,e)},r.prototype.tile=function(e){return this.throwIfDisposed(),P.tile(this,e)},r.prototype.gather=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),P.gather(this,e,t)},r.prototype.matMul=function(e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,e,t,n)},r.prototype.dot=function(e){return this.throwIfDisposed(),P.dot(this,e)},r.prototype.norm=function(e,t,n){return e===void 0&&(e="euclidean"),t===void 0&&(t=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,e,t,n)},r.prototype.slice=function(e,t){return this.throwIfDisposed(),P.slice(this,e,t)},r.prototype.reverse=function(e){return this.throwIfDisposed(),P.reverse(this,e)},r.prototype.concat=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),e instanceof r&&(e=[e]),P.concat([this].concat(e),t)},r.prototype.split=function(e,t){return t===void 0&&(t=0),this.throwIfDisposed(),P.split(this,e,t)},r.prototype.stack=function(e,t){return t===void 0&&(t=0),P.stack([this,e],t)},r.prototype.unstack=function(e){return e===void 0&&(e=0),P.unstack(this,e)},r.prototype.pad=function(e,t){return t===void 0&&(t=0),P.pad(this,e,t)},r.prototype.batchNormalization=function(e,t,n,o,a){return n===void 0&&(n=.001),zs("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(e,t,a,o,n)},r.prototype.batchNorm=function(e,t,n,o,a){return a===void 0&&(a=.001),this.throwIfDisposed(),P.batchNorm(this,e,t,n,o,a)},r.prototype.all=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.all(this,e,t)},r.prototype.any=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.any(this,e,t)},r.prototype.logSumExp=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.logSumExp(this,e,t)},r.prototype.sum=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.sum(this,e,t)},r.prototype.prod=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.prod(this,e,t)},r.prototype.mean=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.mean(this,e,t)},r.prototype.min=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.min(this,e,t)},r.prototype.max=function(e,t){return e===void 0&&(e=null),t===void 0&&(t=!1),this.throwIfDisposed(),P.max(this,e,t)},r.prototype.argMin=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),P.argMin(this,e)},r.prototype.argMax=function(e){return e===void 0&&(e=null),this.throwIfDisposed(),P.argMax(this,e)},r.prototype.cast=function(e){return this.throwIfDisposed(),P.cast(this,e)},r.prototype.add=function(e){return this.throwIfDisposed(),P.add(this,e)},r.prototype.addStrict=function(e){return this.throwIfDisposed(),P.addStrict(this,e)},r.prototype.atan2=function(e){return this.throwIfDisposed(),P.atan2(this,e)},r.prototype.sub=function(e){return this.throwIfDisposed(),P.sub(this,e)},r.prototype.subStrict=function(e){return this.throwIfDisposed(),P.subStrict(this,e)},r.prototype.pow=function(e){return this.throwIfDisposed(),P.pow(this,e)},r.prototype.powStrict=function(e){return this.throwIfDisposed(),P.powStrict(this,e)},r.prototype.mul=function(e){return this.throwIfDisposed(),P.mul(this,e)},r.prototype.mulStrict=function(e){return this.throwIfDisposed(),P.mulStrict(this,e)},r.prototype.div=function(e){return this.throwIfDisposed(),P.div(this,e)},r.prototype.divNoNan=function(e){return this.throwIfDisposed(),P.divNoNan(this,e)},r.prototype.floorDiv=function(e){return this.throwIfDisposed(),P.floorDiv(this,e)},r.prototype.divStrict=function(e){return this.throwIfDisposed(),P.divStrict(this,e)},r.prototype.minimum=function(e){return this.throwIfDisposed(),P.minimum(this,e)},r.prototype.minimumStrict=function(e){return this.throwIfDisposed(),P.minimumStrict(this,e)},r.prototype.maximum=function(e){return this.throwIfDisposed(),P.maximum(this,e)},r.prototype.maximumStrict=function(e){return this.throwIfDisposed(),P.maximumStrict(this,e)},r.prototype.mod=function(e){return this.throwIfDisposed(),P.mod(this,e)},r.prototype.modStrict=function(e){return this.throwIfDisposed(),P.modStrict(this,e)},r.prototype.squaredDifferenceStrict=function(e){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,e)},r.prototype.transpose=function(e){return this.throwIfDisposed(),P.transpose(this,e)},r.prototype.notEqual=function(e){return this.throwIfDisposed(),P.notEqual(this,e)},r.prototype.notEqualStrict=function(e){return this.throwIfDisposed(),P.notEqualStrict(this,e)},r.prototype.less=function(e){return this.throwIfDisposed(),P.less(this,e)},r.prototype.lessStrict=function(e){return this.throwIfDisposed(),P.lessStrict(this,e)},r.prototype.equal=function(e){return this.throwIfDisposed(),P.equal(this,e)},r.prototype.equalStrict=function(e){return this.throwIfDisposed(),P.equalStrict(this,e)},r.prototype.lessEqual=function(e){return this.throwIfDisposed(),P.lessEqual(this,e)},r.prototype.lessEqualStrict=function(e){return this.throwIfDisposed(),P.lessEqualStrict(this,e)},r.prototype.greater=function(e){return this.throwIfDisposed(),P.greater(this,e)},r.prototype.greaterStrict=function(e){return this.throwIfDisposed(),P.greaterStrict(this,e)},r.prototype.greaterEqual=function(e){return this.throwIfDisposed(),P.greaterEqual(this,e)},r.prototype.greaterEqualStrict=function(e){return this.throwIfDisposed(),P.greaterEqualStrict(this,e)},r.prototype.logicalAnd=function(e){return this.throwIfDisposed(),P.logicalAnd(this,e)},r.prototype.logicalOr=function(e){return this.throwIfDisposed(),P.logicalOr(this,e)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(e){return this.throwIfDisposed(),P.logicalXor(this,e)},r.prototype.where=function(e,t){return this.throwIfDisposed(),P.where(e,this,t)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(e,t){return this.throwIfDisposed(),P.clipByValue(this,e,t)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(e){return e===void 0&&(e=.2),this.throwIfDisposed(),P.leakyRelu(this,e)},r.prototype.prelu=function(e){return this.throwIfDisposed(),P.prelu(this,e)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(e){return e===void 0&&(e=0),this.throwIfDisposed(),P.step(this,e)},r.prototype.softmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),P.softmax(this,e)},r.prototype.logSoftmax=function(e){return e===void 0&&(e=-1),this.throwIfDisposed(),P.logSoftmax(this,e)},r.prototype.resizeBilinear=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,e,t)},r.prototype.resizeNearestNeighbor=function(e,t){return t===void 0&&(t=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,e,t)},r.prototype.conv1d=function(e,t,n,o,a,i){return o===void 0&&(o="NWC"),a===void 0&&(a=1),this.throwIfDisposed(),P.conv1d(this,e,t,n,o,a,i)},r.prototype.conv2d=function(e,t,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.conv2d(this,e,t,n,o,a,i)},r.prototype.conv2dTranspose=function(e,t,n,o,a){return this.throwIfDisposed(),P.conv2dTranspose(this,e,t,n,o,a)},r.prototype.depthwiseConv2D=function(e,t,n,o,a,i){return o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,e,t,n,o,a,i)},r.prototype.separableConv2d=function(e,t,n,o,a,i){return a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,e,t,n,o,a,i)},r.prototype.avgPool=function(e,t,n,o){return this.throwIfDisposed(),P.avgPool(this,e,t,n,o)},r.prototype.maxPool=function(e,t,n,o){return this.throwIfDisposed(),P.maxPool(this,e,t,n,o)},r.prototype.localResponseNormalization=function(e,t,n,o){return e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,e,t,n,o)},r.prototype.pool=function(e,t,n,o,a){return this.throwIfDisposed(),P.pool(this,e,t,n,o,a)},r.prototype.variable=function(e,t,n){return e===void 0&&(e=!0),this.throwIfDisposed(),Re().makeVariable(this,e,t,n)},r.prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),P.unsortedSegmentSum(this,e,t)},r.prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),P.batchToSpaceND(this,e,t)},r.prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),P.spaceToBatchND(this,e,t)},r.prototype.topk=function(e,t){return e===void 0&&(e=1),t===void 0&&(t=!0),this.throwIfDisposed(),P.topk(this,e,t)},r.prototype.stridedSlice=function(e,t,n,o,a,i,s,u){return o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,e,t,n,o,a,i,s,u)},r.prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),P.depthToSpace(this,e,t)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(It,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Di,oa,aa,ia,sa,Vn=function(r){function e(t,n,o,a){var i=r.call(this,t.shape,t.dtype,t.dataId,a)||this;return i.trainable=n,i.name=o,i}return ge(e,r),e.prototype.assign=function(t){if(t.dtype!==this.dtype)throw new Error("dtype of the new value ("+t.dtype+") and previous value ("+this.dtype+") must match");if(!zt(t.shape,this.shape))throw new Error("shape of the new value ("+t.shape+") and previous value ("+this.shape+") must match");Re().disposeTensor(this),this.dataId=t.dataId,Re().incRef(this,null)},e.prototype.dispose=function(){Re().disposeVariable(this),this.isDisposedInternal=!0},e}(It);Object.defineProperty(Vn,Symbol.hasInstance,{value:function(r){return r instanceof It&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Di||(Di={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(oa||(oa={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(aa||(aa={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(ia||(ia={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(sa||(sa={}));var wl={float32:ia,int32:oa,bool:aa,complex64:sa};function Gt(r,e){if(r==="string"||e==="string"){if(r==="string"&&e==="string")return"string";throw new Error("Can not upcast "+r+" with "+e)}return wl[r][e]}function ko(r){return Gt(r,"int32")}function kt(r,e){if(r.dtype===e.dtype)return[r,e];var t=Gt(r.dtype,e.dtype);return[r.cast(t),e.cast(t)]}function Cl(r,e){E(r.dtype===e.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+e.dtype+") input must match"})}function Us(r){var e=[];return function t(n,o,a){if(n!=null){if(n instanceof It)return void o.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];a.has(c)||(a.add(c),t(c,o,a))}}}}(r,e,new Set),e}var So,Ai=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var e in this.registeredVariables)this.registeredVariables[e].dispose()},r}(),_l=function(){function r(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ai}return r.prototype.ready=function(){return X(this,void 0,void 0,function(){var e,t,n;return Y(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];e=this.getSortedBackends(),t=0,o.label=1;case 1:return t<e.length?(n=e[t],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return t++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var e=this.initializeBackendsAndReturnBest(),t=e.name;if(e.asyncInit)throw new Error("The highest priority backend '"+t+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(t)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(e){return!(e in this.registry)&&(!(e in this.registryFactory)||this.initializeBackend(e).asyncInit)?null:this.registry[e]},r.prototype.findBackendFactory=function(e){return e in this.registryFactory?this.registryFactory[e].factory:null},r.prototype.registerBackend=function(e,t,n){return n===void 0&&(n=1),e in this.registryFactory?(console.warn(e+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[e]={factory:t,priority:n},!0)},r.prototype.setBackend=function(e){return X(this,void 0,void 0,function(){var t,n,o;return Y(this,function(a){switch(a.label){case 0:if(this.registryFactory[e]==null)throw new Error("Backend name '"+e+"' not found in registry");return this.backendName=e,this.registry[e]!=null?[3,4]:(this.backendInstance=null,t=this.initializeBackend(e),n=t.success,t.asyncInit?[4,n]:[3,2]);case 1:return o=a.sent(),[3,3];case 2:o=n,a.label=3;case 3:if(!o)return[2,!1];a.label=4;case 4:return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new yl(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var e=this;Ei(this.backendName).forEach(function(t){t.setupFunc!=null&&t.setupFunc(e.backendInstance)})},r.prototype.disposeRegisteredKernels=function(e){var t=this;Ei(e).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(t.registry[e])})},r.prototype.initializeBackend=function(e){var t=this,n=this.registryFactory[e];if(n==null)throw new Error("Cannot initialize backend "+e+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var a=++this.pendingBackendInitId,i=o.then(function(s){return!(a<t.pendingBackendInitId)&&(t.registry[e]=s,t.pendingBackendInit=null,!0)}).catch(function(s){return!(a<t.pendingBackendInitId)&&(t.pendingBackendInit=null,console.warn("Initialization of backend "+e+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[e]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+e+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(e){if(!(e in this.registryFactory))throw new Error(e+" backend not found in registry");this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var e=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(t,n){return e.registryFactory[n].priority-e.registryFactory[t].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var e=this.getSortedBackends(),t=0;t<e.length;t++){var n=e[t],o=this.initializeBackend(n),a=o.success,i=o.asyncInit;if(i||a)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(e,t){var n=this.state.tensorInfo.get(t),o=n.backend,a=this.readSync(t);o.disposeData(t),n.backend=e,e.move(t,a,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(e,t){var n,o=this,a=null;if(t==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");t=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof t!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");a=e}return this.scopedRun(function(){return o.startScope(a)},function(){return o.endScope(n)},function(){return(n=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(e,t,n){e();try{var o=n();return t(),o}catch(a){throw t(),a}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(e){var t=this.makeTensorFromDataId(e.dataId,e.shape,e.dtype),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],function(o){return{x:function(){return o.toFloat()}}},[]),t},r.prototype.runKernel=function(e,t,n,o,a){return this.runKernelFunc(null,t,null,e,n,o,a)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(e,t,n){var o=this.backend.numDataIds(),a=0;n.forEach(function(u){a+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-t-a-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+e+"'")},r.prototype.runKernelFunc=function(e,t,n,o,a,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,p=function(x){h&&(l=x.map(function(b){return c.keep(c.clone(b))}))},d=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=Ts(o,this.backendName);return f=g!=null?function(){var x=c.backend.numDataIds();m=g.kernelFunc({inputs:t,attrs:a,backend:c.backend});var b=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(C){var S=C.dataId,k=C.shape,I=C.dtype;return c.makeTensorFromDataId(S,k,I)}),w=y.filter(function(C,S){return s[S]});return p((i||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();m=c.tidy(function(){return e(c.backend,p)});var b=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,t,function(){return f()}):f()}),h&&this.addTapeNode(o,t,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-d,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(t).map(function(x){return t[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(m)?u:u[0]},r.prototype.makeTensor=function(e,t,n,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var a=e;n==="string"&&_a(e[0])&&(a=e.map(function(l){return ml(l)}));var i=o.write(a,t,n),s=new It(t,n,i,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(i),c=pl(a);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(e,t,n,o){var a=new It(t,n=n||"float32",e,this.nextTensorId());return this.incRef(a,o),a},r.prototype.makeVariable=function(e,t,n,o){t===void 0&&(t=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.asType(o));var a=new Vn(e,t,n,this.nextTensorId());if(this.state.registeredVariables[a.name]!=null)throw new Error("Variable with name "+a.name+" was already registered");return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a},r.prototype.incRef=function(e,t){var n=this.state.tensorInfo.has(e.dataId)?this.state.tensorInfo.get(e.dataId).refCount:0;if(this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(o=e.size*Ms(e.dtype)),this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(e.dataId).refCount++,e instanceof Vn||this.track(e)},r.prototype.disposeTensor=function(e){if(this.state.tensorInfo.has(e.dataId)){this.state.numTensors--,e.dtype==="string"&&this.state.numStringTensors--;var t=this.state.tensorInfo.get(e.dataId);t.refCount<=1?(e.dtype!=="complex64"&&(this.state.numBytes-=t.bytes),this.state.numDataBuffers--,t.backend.disposeData(e.dataId),this.state.tensorInfo.delete(e.dataId)):this.state.tensorInfo.get(e.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var e in this.state.registeredVariables){var t=this.state.registeredVariables[e];this.disposeVariable(t)}},r.prototype.disposeVariable=function(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]},r.prototype.memory=function(){var e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e},r.prototype.profile=function(e){return X(this,void 0,void 0,function(){var t,n;return Y(this,function(o){return this.state.profiling=!0,t=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(a){return a.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(e,t,n,o,a){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},u=al(e);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=n[h],p=lr(f.size,f.dtype);return i.makeTensor(p,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],a)}),this.state.activeTape.push(s)},r.prototype.keep=function(e){return e.kept=!0,e},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(e){var t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t},r.prototype.endScope=function(e){for(var t=this,n=Us(e),o=new Set(n.map(function(u){return u.id})),a=0;a<this.state.activeScope.track.length;a++){var i=this.state.activeScope.track[a];i.kept||o.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||t.track(u)})},r.prototype.gradients=function(e,t,n,o){var a=this;if(o===void 0&&(o=!1),E(t.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return a.startTape()},function(){return a.endTape()},function(){return a.tidy("forward",e)});E(i instanceof It,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},p=0;p<c.length;p++)h[c[p].id]=!0;for(p=0;p<u.length;p++){var d=(C=u[p]).inputs;for(var v in d){for(var m=d[v],g=!1,x=0;x<c.length;x++)if(h[m.id]){C.outputs.forEach(function(R){return h[R.id]=!0}),g=!0,f[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(p=u.length-1;p>=0;p--)for(d=(C=u[p]).inputs,x=0;x<C.outputs.length;x++)if(b[C.outputs[x].id]){for(var v in d)b[d[v].id]=!0,y[C.id]=!0;break}var w=[];for(p=0;p<u.length;p++){var C;if(f[(C=u[p]).id]&&y[C.id]){var S={};for(var v in C.inputs){var k=C.inputs[v];h[k.id]&&(S[v]=k)}var I=Object.assign({},C);I.inputs=S,I.outputs=C.outputs,w.push(I)}}return w}(this.state.activeTape,t,i);if(!o&&s.length===0&&t.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=Bs($(u),"float32"),T.makeTensor(c,u,"float32")),function(f,p,d){for(var v=function(g){var x=p[g],b=[];if(x.outputs.forEach(function(S){var k=f[S.id];k!=null?b.push(k):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(S){if(!(S in y))throw new Error("Cannot backprop through input "+S+". Available gradients found: "+Object.keys(y)+".");var k=d(function(){return y[S]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+S+" must have 'float32' dtype, but has '"+k.dtype+"'");var I=x.inputs[S];if(!zt(k.shape,I.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+S+"' has shape '"+k.shape+"', which does not match the shape of the input '"+I.shape+"'");if(f[I.id]==null)f[I.id]=k;else{var R=f[I.id];f[I.id]=R.add(k),R.dispose()}};for(var C in x.inputs)w(C)},m=p.length-1;m>=0;m--)v(m)}(l,s,function(f){return a.tidy(f)});var h=t.map(function(f){return l[f.id]});return a.state.gradientDepth===0&&(a.state.activeTape.forEach(function(f){for(var p=0,d=f.saved;p<d.length;p++)d[p].dispose()}),a.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(e){var t=this;return E(na(e),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];E(o.every(function(s){return s instanceof It}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return o.forEach(function(s,u){i[u]=s}),t.runKernelFunc(function(s,u){return E((n=e.apply(void 0,o.concat([u]))).value instanceof It,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(na(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(f){return f instanceof It}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,p){h[p]=function(){return f}}),h})}},r.prototype.readSync=function(e){return this.state.tensorInfo.get(e).backend.readSync(e)},r.prototype.read=function(e){return this.state.tensorInfo.get(e).backend.read(e)},r.prototype.time=function(e){return X(this,void 0,void 0,function(){var t,n;return Y(this,function(o){switch(o.label){case 0:return t=Ie(),[4,this.backend.time(e)];case 1:return(n=o.sent()).wallMs=Ie()-t,[2,n]}})})},r.prototype.track=function(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ai,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(So==null){var t=void 0;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else{if(typeof self>"u")throw new Error("Could not find a global object");t=self}So=t}return So}();if(r._tfengine==null){var e=new rl(r);r._tfengine=new _l(e)}return function(t){As=t}(r._tfengine.ENV),Re=function(){return r._tfengine},r._tfengine}();function Vs(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var We=O();We.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),We.registerFlag("IS_BROWSER",function(){return Vs()}),We.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),We.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),We.registerFlag("PROD",function(){return!1}),We.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return We.getBool("DEBUG")}),We.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),We.registerFlag("IS_TEST",function(){return!1});var nr,ie,ae,cn={},Do={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function El(r,e){cn[r]=e}function Fe(r){r in cn||(cn[r]=function(t){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(t);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete cn[t]},!1),t===1?n.getContext("webgl",Do)||n.getContext("experimental-webgl",Do):n.getContext("webgl2",Do)}(r));var e=cn[r];return e.isContextLost()?(delete cn[r],Fe(r)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),cn[r])}function ro(r,e){return[e,r]}function Jn(r){var e=$(r);return ea(Math.ceil(e/4))}function hr(r,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(r/2))]}function Ea(r,e){var t,n,o,a,i,s,u,c,l,h=r;return O().getNumber("WEBGL_VERSION")===2?(t=h.R32F,n=h.R16F,o=h.RGBA16F,a=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(t=r.RGBA,n=r.RGBA,o=r.RGBA,a=h.RGBA,i=r.RGBA,s=4,u=4,c=e!=null?e.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:t,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function Q(r,e,t){var n=t();return e&&function(o){var a=o.getError();if(a!==o.NO_ERROR)throw new Error("WebGL Error: "+Sl(o,a))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(nr||(nr={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(ie||(ie={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ae||(ae={}));var Il=596e-10,Rl=65504;function kl(r){return!!(O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Il<Math.abs(r)&&Math.abs(r)<Rl)}function Sl(r,e){switch(e){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+e}}function xr(r,e,t){return Ve(r,e,function(){return r.getExtension(t)},'Extension "'+t+'" not supported on this browser.')}function Dl(r,e,t){var n=Ve(r,e,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(Q(r,e,function(){return r.shaderSource(n,t)}),Q(r,e,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Al(r,e,t){var n=Ve(r,e,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(Q(r,e,function(){return r.shaderSource(n,t)}),Q(r,e,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,a){var i=Tl.exec(a);if(i==null)return console.log("Couldn't parse line number in error: "+a),void console.log(o);for(var s=+i[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return Pn((g+1).toString(),c)+m}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var p=l.slice(0,s-1),d=l.slice(s-1,s),v=l.slice(s);console.log(p.join(`
`)),console.log(a.split(`
`)[0]),console.log("%c "+Pn(d[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(t,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Ao,To,Tl=/ERROR: [0-9]+:([0-9]+):/g;function Nl(r,e){return Ve(r,e,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Fl(r,e,t){if(Q(r,e,function(){return r.linkProgram(t)}),r.getProgramParameter(t,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function No(r,e,t){if(Q(r,e,function(){return r.validateProgram(t)}),r.getProgramParameter(t,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function Pl(r,e,t){var n=Ve(r,e,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Q(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Q(r,e,function(){return r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW)}),n}function Ml(r,e,t){var n=Ve(r,e,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return Q(r,e,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),Q(r,e,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW)}),n}function Ol(r,e){return Ve(r,e,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Bl(r,e){var t=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||e<=0){var n="["+r+"x"+e+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>t||e>t)throw n="["+r+"x"+e+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+t+"x"+t+"]")+".")}function Ll(r,e){return Ve(r,e,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Ti(r,e,t,n,o,a,i,s){var u=r.getAttribLocation(t,n);return u!==-1&&(Q(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),Q(r,e,function(){return r.vertexAttribPointer(u,a,r.FLOAT,!1,i,s)}),Q(r,e,function(){return r.enableVertexAttribArray(u)}),!0)}function Wl(r,e,t,n){Hl(r,n),Q(r,e,function(){return r.activeTexture(r.TEXTURE0+n)}),Q(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)})}function zl(r,e,t,n){return Ve(r,e,function(){return r.getUniformLocation(t,n)},'uniform "'+n+'" not present in program.')}function Ul(r,e,t){return r.getUniformLocation(e,t)}function Vl(r,e,t,n,o,a){Q(r,e,function(){return Wl(r,e,n,a)}),Q(r,e,function(){return r.uniform1i(o,a)})}function Fo(r,e,t,n){Q(r,e,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),Q(r,e,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0)})}function Ni(r,e,t){Q(r,e,function(){return r.bindFramebuffer(r.FRAMEBUFFER,t)}),Q(r,e,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function br(r){var e=r.checkFramebufferStatus(r.FRAMEBUFFER);if(e!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Gl(r,e))}function Gl(r,e){switch(e){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+e}}function Ve(r,e,t,n){var o=Q(r,e,function(){return t()});if(o==null)throw new Error(n);return o}function Hl(r,e){var t=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=e+r.TEXTURE0;if(n<r.TEXTURE0||n>t)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+t+"]")+".")}function Lr(r,e){return e===void 0&&(e=2),$(r.slice(0,r.length-e))}function Wr(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Po(r){var e=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(e=[Lr(r)].concat(Wr(r))),e}function ql(r,e){var t;e===void 0&&(e=!1);var n=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(e&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?Ps(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=hn(r);r=o.newShape}var a=$(r);if(r.length<=1&&a<=n)return[1,a];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(e){var i=Lr(r),s=2,u=2;return r.length&&(s=(t=Wr(r))[0],u=t[1]),ea(a=i*(s/2)*(u/2)).map(function(c){return 2*c})}return ea(a)}function wr(r){return r%2==0}function Cr(r,e){if(zt(r=r.slice(-2),e=e.slice(-2))||!r.length||!e.length||r[0]===0||r[1]===0||e[0]===0||e[1]===0)return!0;if(r.length!==e.length){var t=r.slice(-1)[0],n=e.slice(-1)[0];if(t===n||wr(t)&&wr(n)&&(r[0]===1||e[0]===1))return!0}return r[1]===e[1]&&wr(r[0])&&wr(e[0])}function jl(r){if(Ao==null){var e=Fe(r);Ao=e.getParameter(e.MAX_TEXTURE_SIZE)}return Ao}function Kl(r){if(To==null){var e=Fe(r);To=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,To)}function Xl(r){if(r===0)return 0;var e=Fe(r);return fe(e,"EXT_disjoint_timer_query_webgl2")&&r===2?2:fe(e,"EXT_disjoint_timer_query")?1:0}function fe(r,e){return r.getExtension(e)!=null}function Fi(r){try{if(Fe(r)!=null)return!0}catch{return!1}return!1}function Yl(r){if(r===0)return!1;var e=Fe(r);if(r===1){if(!fe(e,"OES_texture_float"))return!1}else if(!fe(e,"EXT_color_buffer_float"))return!1;return ua(e)}function $l(r){if(r===0)return!1;var e=Fe(r);if(r!==1){if(fe(e,"EXT_color_buffer_float"))return ua(e);if(fe(e,"EXT_color_buffer_half_float")){var t=e.getExtension("EXT_color_buffer_half_float");return function(n,o){var a=Ea(n,o),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,a.internalFormatHalfFloat,1,1,0,a.textureFormatFloat,a.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(e,t)}return!1}return!!fe(e,"OES_texture_float")&&!!fe(e,"WEBGL_color_buffer_float")&&ua(e)}function ua(r){var e=Ea(r),t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t),r.texImage2D(r.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(t),r.deleteFramebuffer(n),o}function Jl(r){return r===2&&Fe(r).fenceSync!=null}var rt=O();function Gs(r){O().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function K(r,e){return T.tidy(r,e)}function te(r){Us(r).forEach(function(e){return e.dispose()})}function Ql(r){return T.keep(r)}function zr(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];O().getBool("IS_TEST")||console.warn.apply(console,r)}function on(r,e){var t=r;if(De(r))return e==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(t)||De(t)&&e!=="string";)n.push(t.length),t=t[0];return Array.isArray(r)&&O().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(a,i,s){if(s=s||[],!Array.isArray(a)&&!De(a))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+a.length+" elements"}),E(a.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+a.length+" elements"});for(var u=i.slice(1),c=0;c<a.length;++c)o(a[c],u,s.concat(c))}(r,n,[]),n}function Pi(r,e,t,n){if(r!=null&&(r!=="numeric"&&r!==e||r==="numeric"&&e==="string"))throw new Error("Argument '"+t+"' passed to '"+n+"' must be "+r+" tensor, but got "+e+" tensor")}function _(r,e,t,n){if(n===void 0&&(n="numeric"),r instanceof It)return Pi(n,r.dtype,e,t),r;var o=cr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Pi(n,o,e,t),r==null||!De(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var a=r==null?"null":r.constructor.name;throw new Error("Argument '"+e+"' passed to '"+t+"' must be a Tensor or TensorLike, but got '"+a+"'")}var i=on(r,o);De(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?Os(r,o,O().getBool("DEBUG")):Un(r,[],!0);return T.makeTensor(s,i,o)}function Ur(r,e,t,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+e+" passed to "+t+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,a){return _(o,e+"["+a+"]",t)},n)}function Hs(r,e){for(var t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0}function Zl(r,e,t){for(var n=r.length+e.length,o=[],a=0,i=0,s=0;s<n;s++)t.indexOf(s)===-1?o.push(r[a++]):o.push(e[i++]);return o}function qt(r,e){for(var t=[],n=r.length,o=0;o<n;o++)e.indexOf(o)===-1&&t.push(r[o]);return[t,e.map(function(a){return r[a]})]}function ee(r,e){return Zl(r,e.map(function(t){return 1}),e)}function oe(r,e,t){E(Hs(e,t),function(){return r+" supports only inner-most axes for now. Got axes "+e+" and rank-"+t+" input."})}function Pe(r,e){if(Hs(r,e))return null;for(var t=[],n=0;n<e;++n)r.indexOf(n)===-1&&t.push(n);return r.forEach(function(o){return t.push(o)}),t}function Ia(r){return r.map(function(e,t){return[t,e]}).sort(function(e,t){return e[1]-t[1]}).map(function(e){return e[0]})}function Me(r,e){for(var t=[],n=e-r;n<e;++n)t.push(n);return t}function th(r,e){var t=r[0].length;r.forEach(function(o,a){E(o.length===t,function(){return"Error in concat"+t+"D: rank of tensors["+a+"] must be the same as the rank of the rest ("+t+")"})}),E(e>=0&&e<t,function(){return"Error in concat"+t+"D: axis must be between 0 and "+(t-1)+"."});var n=r[0];r.forEach(function(o,a){for(var i=0;i<t;i++)E(i===e||o[i]===n[i],function(){return"Error in concat"+t+"D: Shape of tensors["+a+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+a+"."})})}function Gn(r,e){for(var t=r[0].slice(),n=1;n<r.length;n++)t[e]+=r[n][e];return t}function D(r){var e=Object.keys(r);if(e.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+e.length+" keys.");var t=e[0],n=r[t];t.endsWith("_")&&(t=t.substring(0,t.length-1));var o=function(){for(var a=[],i=0;i<arguments.length;i++)a[i]=arguments[i];T.startScope(t);try{var s=n.apply(void 0,a);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:t,configurable:!0}),o}rt.registerFlag("HAS_WEBGL",function(){return rt.getNumber("WEBGL_VERSION")>0}),rt.registerFlag("WEBGL_VERSION",function(){return Fi(2)?2:Fi(1)?1:0}),rt.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return rt.get("WEBGL_VERSION")===2}),rt.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),rt.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),rt.registerFlag("WEBGL_PACK",function(){return rt.getBool("HAS_WEBGL")}),rt.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_CLIP",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),rt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_PACK_REDUCE",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_LAZILY_UNPACK",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_CONV_IM2COL",function(){return rt.getBool("WEBGL_PACK")}),rt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return jl(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Kl(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=rt.getNumber("WEBGL_VERSION");return r===0?0:Xl(r)}),rt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return rt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),rt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Yl(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!rt.getBool("WEBGL_FORCE_F16_TEXTURES")&&rt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),rt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return $l(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Jl(rt.getNumber("WEBGL_VERSION"))}),rt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return rt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),zs=Gs;var Vt=D({complex_:function(r,e){var t=_(r,"real","complex"),n=_(e,"imag","complex");return xt(t.shape,n.shape,"real and imag shapes, "+t.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(t,n)},{$real:t,$imag:n})}}),he=D({real_:function(r){var e=_(r,"input","real");return T.runKernelFunc(function(t){return t.real(e)},{$input:e})}}),ke=D({imag_:function(r){var e=_(r,"input","imag");return T.runKernelFunc(function(t){return t.imag(e)},{$input:e})}});function Ht(r,e,t){return an(r,e,on(r,t),t)}function an(r,e,t,n){if(n==null&&(n=cr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!De(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){Ls(e);var o=$(e),a=$(t);E(o===a,function(){return"Based on the provided shape, ["+e+"], the tensor should have "+o+" values but has "+a});for(var i=0;i<t.length;++i){var s=t[i],u=i!==t.length-1||s!==$(e.slice(i));E(t[i]===e[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+t+") does not match the provided shape ("+e+"). "})}}return De(r)||Array.isArray(r)||(r=[r]),e=e||t,r=n!=="string"?Os(r,n,O().getBool("DEBUG")):Un(r,[],!0),T.makeTensor(r,e,n)}function q(r,e){if((De(r)&&e!=="string"||Array.isArray(r))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&De(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return an(r,[],[],e)}function Nt(r,e){qn(r);var t=on(r,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return an(r,null,t,e)}function Ze(r,e,t){if(qn(r),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=on(r,t);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return an(r,e,n,t)}function Ra(r,e,t){if(qn(r),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=on(r,t);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return an(r,e,n,t)}function Jt(r,e,t){if(qn(r),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=on(r,t);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return an(r,e,n,t)}function eh(r,e,t){if(qn(r),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=on(r,t);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return an(r,e,n,t)}function nh(r,e,t){if(qn(r),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=on(r,t);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return an(r,e=e||n,n,t)}function rh(r,e,t,n){return e===void 0&&(e=!0),T.makeVariable(r,e,t,n)}function jn(r,e){if(e===void 0&&(e="float32"),e==="complex64"){var t=jn(r,"float32"),n=Ct(r,"float32");return Vt(t,n)}var o=Bs($(r),e);return T.makeTensor(o,r,e)}function Ct(r,e){if(e===void 0&&(e="float32"),e==="complex64"){var t=Ct(r,"float32"),n=Ct(r,"float32");return Vt(t,n)}var o=lr($(r),e);return T.makeTensor(o,r,e)}function Te(r,e,t){return T.runKernelFunc(function(n){return n.fill(r,e,t)},{})}function oh(r,e,t){if(t<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(n){return n.linspace(r,e,t)},{})}function Vr(r,e,t,n){if(t===void 0&&(t=1),n===void 0&&(n="float32"),t===0)throw new Error("Cannot have a step of zero");if(r===e||r<e&&t<0||e<r&&t>1)return Ct([0],n);var o=lr(Math.abs(Math.ceil((e-r)/t)),n);e<r&&t===1&&(t=-1),o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+t;return Nt(o,n)}var qs=D({onesLike_:function(r){var e=_(r,"x","onesLike");if(e.dtype==="complex64"){var t=qs(he(e)),n=mt(ke(e));return Vt(t,n)}return T.runKernelFunc(function(o){return o.onesLike(e)},{$x:e},function(o,a){return{$x:function(){return mt(o)}}})}}),mt=D({zerosLike_:function(r){var e=_(r,"x","zerosLike");return T.runKernelFunc(function(t){return t.zerosLike(e)},{$x:e},function(t,n){return{$x:function(){return mt(t)}}})}}),Pt=D({concat_:function(r,e){e===void 0&&(e=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var t=Ur(r,"tensors","concat");t[0].dtype==="complex64"&&t.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),e=Lt(e,t[0].shape)[0];var n=Gn(t.map(function(s){return s.shape}),e);if($(n)===0)return Ht([],n);if((t=t.filter(function(s){return s.size>0})).length===1)return t[0];var o=t.map(function(s){return s.shape});th(o,e);var a=t,i={axis:e};return T.runKernelFunc(function(s){return s.concat(t,e)},a,function(s){var u=o.map(function(c){return c[e]});return ka(s,u,e).map(function(c){return function(){return c}})},"Concat",i)}}),ah=D({concat1d_:function(r){return Pt(r,0)}}),ih=D({concat2d_:function(r,e){return Pt(r,e)}}),sh=D({concat3d_:function(r,e){return Pt(r,e)}}),uh=D({concat4d_:function(r,e){return Pt(r,e)}}),ka=D({split_:function(r,e,t){t===void 0&&(t=0);var n,o=_(r,"x","split");return t=Lt(t,o.shape)[0],typeof e=="number"?(E(o.shape[t]%e==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(e).fill(o.shape[t]/e)):(E(o.shape[t]===e.reduce(function(a,i){return a+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=e),T.runKernelFunc(function(a){return a.split(o,n,t)},{$x:o},function(a){return{$x:function(){return Pt(a,t)}}})}});function yn(r,e){return r(e={exports:{}},e.exports),e.exports}var ch=yn(function(r){(function(e,t,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var p=.02519603282416938*(u+=h.charCodeAt(f));p-=u=p>>>0,u=(p*=u)>>>0,u+=4294967296*(p-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function a(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.alea=i})(0,r)}),lh=yn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xor128=i})(0,r)}),hh=yn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function a(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xorwow=i})(0,r)}),fh=yn(function(r){(function(e,t,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function a(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xorshift7=i})(0,r)}),ph=yn(function(r){(function(e,t,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,p=u.i;return u.w=h=h+1640531527|0,l=f[p+34&127],c=f[p=p+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[p]=l^c,u.i=p,l+(h^h>>>16)|0},function(c,l){var h,f,p,d,v,m=[],g=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,g=Math.max(g,l.length)),p=0,d=-32;d<g;++d)l&&(f^=l.charCodeAt((d+32)%l.length)),d===0&&(v=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,d>=0&&(v=v+1640531527|0,p=(h=m[127&d]^=f+v)==0?p+1:0);for(p>=128&&(m[127&(l&&l.length||0)]=-1),p=127,d=512;d>0;--d)f=m[p+34&127],h=m[p=p+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,m[p]=f^h;c.w=v,c.X=m,c.i=p}(u,s)}function a(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.xor4096=i})(0,r)}),dh=yn(function(r){(function(e,t,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,p=u.d,d=u.a;return h=h<<25^h>>>7^f,f=f-p|0,p=p<<24^p>>>8^d,d=d-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-p|0,u.d=p<<16^f>>>16^d,u.a=d-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function a(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&a(l,c),h.state=function(){return a(c,{})}),h}t&&t.exports?t.exports=i:this.tychei=i})(0,r)}),ln=yn(function(r){(function(e,t){var n,o=this,a=256,i=6,s="random",u=t.pow(a,i),c=t.pow(2,52),l=2*c,h=a-1;function f(g,x,b){var y=[],w=v(function k(I,R){var N,A=[],L=typeof I;if(R&&L=="object")for(N in I)try{A.push(k(I[N],R-1))}catch{}return A.length?A:L=="string"?I:I+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,m(e)]:g??function(){try{var k;return n&&(k=n.randomBytes)?k=k(a):(k=new Uint8Array(a),(o.crypto||o.msCrypto).getRandomValues(k)),m(k)}catch{var I=o.navigator,R=I&&I.plugins;return[+new Date,o,R,o.screen,m(e)]}}(),3),y),C=new p(y),S=function(){for(var k=C.g(i),I=u,R=0;k<c;)k=(k+R)*a,I*=a,R=C.g(1);for(;k>=l;)k/=2,I/=2,R>>>=1;return(k+R)/I};return S.int32=function(){return 0|C.g(4)},S.quick=function(){return C.g(4)/4294967296},S.double=S,v(m(C.S),e),(x.pass||b||function(k,I,R,N){return N&&(N.S&&d(N,C),k.state=function(){return d(C,{})}),R?(t[s]=k,I):k})(S,w,"global"in x?x.global:this==t,x.state)}function p(g){var x,b=g.length,y=this,w=0,C=y.i=y.j=0,S=y.S=[];for(b||(g=[b++]);w<a;)S[w]=w++;for(w=0;w<a;w++)S[w]=S[C=h&C+g[w%b]+(x=S[w])],S[C]=x;(y.g=function(k){for(var I,R=0,N=y.i,A=y.j,L=y.S;k--;)I=L[N=h&N+1],R=R*a+L[h&(L[N]=L[A=h&A+I])+(L[A]=I)];return y.i=N,y.j=A,R})(a)}function d(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function v(g,x){for(var b,y=g+"",w=0;w<y.length;)x[h&w]=h&(b^=19*x[h&w])+y.charCodeAt(w++);return m(x)}function m(g){return String.fromCharCode.apply(0,g)}if(t["seed"+s]=f,v(t.random(),e),r.exports){r.exports=f;try{n=require("crypto")}catch{}}})([],Math)});ln.alea=ch,ln.xor128=lh,ln.xorwow=hh,ln.xorshift7=fh,ln.xor4096=ph,ln.tychei=dh;var oo=ln.alea,Sa=function(){function r(e,t,n,o,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=a||Math.random();this.random=oo(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var e=this.nextVal;return this.nextVal=NaN,e}for(var t,n,o=!1;!o;){var a=void 0,i=void 0,s=void 0;do s=(a=2*this.random()-1)*a+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);t=this.mean+this.stdDev*a*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(t)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(t)},r.prototype.convertValue=function(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)},r.prototype.isValidTruncated=function(e){return e<=this.upper&&e>=this.lower},r}(),vh=function(){function r(e,t,n,o){this.alpha=e,this.beta=1/t,this.dtype=n;var a=o||Math.random();this.randu=oo(a.toString()),this.randn=new Sa(0,1,n,!1,this.randu()),this.d=e<1?e+2/3:e-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var e,t,n,o,a,i;;){do o=this.randn.nextValue(),i=1+this.c*o;while(i<=0);if(i*=i*i,t=1-.331*(e=o*o)*e,n=.5*e+this.d*(1-i+Math.log(i)),(a=this.randu())<t||Math.log(a)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(e){return this.dtype==="float32"?e:Math.round(e)},r}(),mh=function(){function r(e,t,n,o){var a=this;if(e===void 0&&(e=0),t===void 0&&(t=1),this.canReturnFloat=function(){return a.dtype==null||a.dtype==="float32"},this.min=e,this.range=t-e,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+e+" - "+t+" <= 1 and dtype is not float");this.random=oo(o)}return r.prototype.convertValue=function(e){return this.canReturnFloat()?e:Math.round(e)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function at(r,e,t){return e===void 0&&(e="float32"),e=e||"float32",Ls(r),new er(r,e,t)}function gh(r,e){e===void 0&&(e=!1),console.log(r.toString(e))}var js=D({batchToSpaceND_:function(r,e,t){var n=_(r,"x","batchToSpaceND"),o=e.reduce(function(a,i){return a*i});return E(n.rank>=1+e.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+e.length}),E(t.length===e.length,function(){return"crops.length is "+t.length+" but should be equal to blockShape.length  "+e.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+e.join(" * ")+" === "+o}),T.runKernelFunc(function(a){return a.batchToSpaceND(n,e,t)},{$x:n},function(a){return{$x:function(){return a.spaceToBatchND(e,t)}}})}}),yh=D({broadcastTo_:function(r,e){var t=_(r,"broadcastTo","x"),n=t.shape;if(e.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+e+"].");if(e.length<t.rank)throw new Error("broadcastTo(): shape.length="+e.length+" < input.rank="+t.rank+".");if(e.length>t.rank){for(var o=t.shape.slice();o.length<e.length;)o.unshift(1);t=t.reshape(o)}for(var a=Array.from(e),i=e.length-1;i>=0;i--)if(t.shape[i]===e[i])a[i]=1;else if(t.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+e+"].");var s=a.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?t.clone():T.runKernelFunc(function(u){return u.tile(t,a)},{input:t},function(u){return{input:function(){return u.sum(s,!0)}}})}}),xh=D({cast_:function(r,e){var t=_(r,"x","cast");if(!hl(e))throw new Error("Failed to cast to unknown dtype "+e);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:e};return T.runKernelFunc(function(o){return o.cast(t,e)},{x:t},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),bh=D({clone_:function(r){var e=_(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(e.dataId,e.shape,e.dtype)},{$x:e},function(t){return{$x:function(){return t.toFloat()}}})}}),wh=D({cumsum_:function(r,e,t,n){e===void 0&&(e=0),t===void 0&&(t=!1),n===void 0&&(n=!1);var o=_(r,"x","cumsum"),a=Pe([e|=0],o.rank),i=o;a!=null&&(i=o.transpose(a));var s=Me(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(i,s,t,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(e,t,!n)}}});return a!=null&&(u=u.transpose(a)),u}}),Ch=D({depthToSpace_:function(r,e,t){t===void 0&&(t="NHWC");var n=_(r,"x","depthToSpace"),o=t==="NHWC"?n.shape[1]:n.shape[2],a=t==="NHWC"?n.shape[2]:n.shape[3],i=t==="NHWC"?n.shape[3]:n.shape[1];return E(o*e>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+e+`  for depthToSpace with input shape
      `+n.shape}),E(a*e>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+e+` for depthToSpace with input shape
          `+n.shape}),E(i%(e*e)==0,function(){return"Dimension size must be evenly divisible by "+e*e+" but is "+i+" for depthToSpace with input shape "+n.shape}),T.runKernelFunc(function(s){return s.depthToSpace(n,e,t)},{$x:n})}}),le=D({expandDims_:function(r,e){e===void 0&&(e=0);var t=_(r,"x","expandDims",null);E(e<=t.rank,function(){return"Axis must be <= rank of the tensor"});var n=t.shape.slice();return e<0&&(E(-(t.rank+1)<=e,function(){return"Axis must be in the interval ["+-(t.rank+1)+", "+t.rank+"]"}),e=t.rank+e+1),n.splice(e,0,1),ve(t,n)}}),Ks=D({eye_:function(r,e,t,n){n===void 0&&(n="float32"),e==null&&(e=r);for(var o=at([r,e],n),a=r<=e?r:e,i=0;i<a;++i)o.set(1,i,i);var s=o.toTensor().as2D(r,e);if(t==null)return s;if(t.length===1)return Mn(le(s,0),[t[0],1,1]);if(t.length===2)return Mn(le(le(s,0),0),[t[0],t[1],1,1]);if(t.length===3)return Mn(le(le(le(s,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+t.length+"D.")}}),_h=D({multinomial_:function(r,e,t,n){n===void 0&&(n=!1);var o=_(r,"logits","multinomial"),a=o.size,i=o.rank;if(a<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+a+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);t=t||Math.random();var s=i===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,n,e,t)},{logits2D:s});return i===1?u.as1D():u}}),ca=D({oneHot_:function(r,e,t,n){if(t===void 0&&(t=1),n===void 0&&(n=0),e<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+e);var o=_(r,"indices","oneHot","int32"),a=o.shape.concat([e]);return o=o.flatten(),T.runKernelFunc(function(i){return i.oneHot(o,e,t,n)},{$indices:o},function(i){return{$indices:function(){return Ct(o.shape,"float32")}}}).reshape(a)}}),xn=D({pad_:function(r,e,t){t===void 0&&(t=0);var n=_(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:e,constantValue:t};return T.runKernelFunc(function(a){return a.pad(n,e,t)},{x:n},function(a){var i=e.map(function(s){return s[0]});return{x:function(){return a.slice(i,n.shape)}}},"PadV2",o)}}),Eh=D({pad1d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),xn(r,[e],t)}}),Ih=D({pad2d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===2&&e[0].length===2&&e[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),xn(r,e,t)}}),Rh=D({pad3d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),xn(r,e,t)}}),kh=D({pad4d_:function(r,e,t){return t===void 0&&(t=0),E(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),xn(r,e,t)}}),Sh=D({rand_:function(r,e,t){var n=$(r),o=null;if(t==null||t==="float32")o=new Float32Array(n);else if(t==="int32")o=new Int32Array(n);else{if(t!=="bool")throw new Error("Unknown data type "+t);o=new Uint8Array(n)}for(var a=0;a<n;a++)o[a]=e();return T.makeTensor(o,r,t)}}),Dh=D({randomNormal_:function(r,e,t,n,o){if(e===void 0&&(e=0),t===void 0&&(t=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Sa(e,t,n,!1,o),i=at(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Ah=D({randomGamma_:function(r,e,t,n,o){if(t===void 0&&(t=1),n===void 0&&(n="float32"),t==null&&(t=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var a=new vh(e,t,n,o),i=at(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Xs=D({randomUniform_:function(r,e,t,n,o){e===void 0&&(e=0),t===void 0&&(t=1),n===void 0&&(n="float32");for(var a=at(r,n),i=new mh(e,t,null,o),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),ve=D({reshape_:function(r,e){var t=_(r,"x","reshape",null);e=cl(e,t.size),E(t.size===$(e),function(){return"new shape and old shape must have the same number of elements."});var n={shape:e};return T.runKernelFunc(function(o){return o.reshape(t,e)},{x:t},function(o){return{x:function(){return o.reshape(t.shape)}}},"Reshape",n)}}),Ys=D({spaceToBatchND_:function(r,e,t){var n=_(r,"x","spaceToBatchND");return E(n.rank>=1+e.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+e.length}),E(t.length===e.length,function(){return"paddings.shape[0] "+t.length+" must be equal to [blockShape] "+e.length}),E(n.shape.reduce(function(o,a,i){return i>0&&i<=e.length?o&&(a+t[i-1][0]+t[i-1][1])%e[i-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+t.toString()+" must be divisible by blockShapes "+e.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(n,e,t)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(e,t)}}})}}),$s=D({squeeze_:function(r,e){var t=_(r,"x","squeeze");return ve(t,hn(t.shape,e).newShape)}}),ce=D({stack_:function(r,e){e===void 0&&(e=0);var t=Ur(r,"tensors","stack");if(E(t.length>=1,function(){return"Pass at least one tensor to tf.stack"}),t.length===1)return t[0].expandDims(e);var n=t[0].rank,o=t[0].shape,a=t[0].dtype;E(e<=n,function(){return"Axis must be <= rank of the tensor"}),t.forEach(function(s){xt(o,s.shape,"All tensors passed to stack must have matching shapes")}),t.forEach(function(s){E(a===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=t.map(function(s){return s.expandDims(e)});return Pt(i,e)}}),Mn=D({tile_:function(r,e){var t=_(r,"x","tile",null);E(t.rank===e.length,function(){return"Error in transpose: rank of input "+t.rank+" must match length of reps "+e+"."});var n=[t],o={reps:e};return T.runKernelFunc(function(a,i){var s=a.tile(t,e);return i([t]),s},{x:t},function(a,i){var s=i[0];return{x:function(){var u=mt(s);if(s.rank===1)for(var c=0;c<e[0];++c)u=u.add(a.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<e[0];++c)for(var l=0;l<e[1];++l)u=u.add(a.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<e[0];++c)for(l=0;l<e[1];++l)for(var h=0;h<e[2];++h)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<e[0];++c)for(l=0;l<e[1];++l)for(h=0;h<e[2];++h)for(var f=0;f<e[3];++f)u=u.add(a.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Th=D({truncatedNormal_:function(r,e,t,n,o){if(e===void 0&&(e=0),t===void 0&&(t=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var a=new Sa(e,t,n,!0,o),i=at(r,n),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Mt=D({unstack_:function(r,e){e===void 0&&(e=0),e=e||0;var t=_(r,"x","unstack");E(e>=-t.shape.length&&e<t.shape.length,function(){return"Axis = "+e+" is not in [-"+t.shape.length+", "+t.shape.length+")"}),e<0&&(e+=t.shape.length);var n={axis:e};return T.runKernelFunc(function(o){return o.unstack(t,e)},{x:t},function(o){return{x:function(){return ce(o,e)}}},"Unpack",n)}}),Nh=function(r,e){return X(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h;return Y(this,function(f){switch(f.label){case 0:return t=_(r,"x","setdiff1d"),n=_(e,"y","setdiff1d"),E(t.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+t.dtype+") and y ("+n.dtype+")."}),E(t.rank===1,function(){return"x should be 1D tensor, but got x ("+t.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,t.data()];case 1:return o=f.sent(),[4,n.data()];case 2:for(a=f.sent(),i=new Set(a),s=0,l=0;l<o.length;l++)i.has(o[l])||s++;for(u=new er([s],t.dtype),c=new er([s],"int32"),l=0,h=0;l<o.length;l++)i.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Gr(r,e,t,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(e.slice(0))).push(r[0]/t),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var a=e.length,i=0;i<a;++i)o=o.concat([r[i+1]/e[i],e[i]]);o=o.concat(r.slice(a+1))}return o}function Hr(r,e,t){t===void 0&&(t=!0);var n=[];if(t){n.push(e);for(var o=e+1;o<r;++o)o<=2*e?(n.push(o),n.push(o-(e+1))):n.push(o)}else{var a=[],i=[];for(o=1;o<r;++o)o>=2*e+1||o%2==1?i.push(o):a.push(o);n.push.apply(n,a),n.push(0),n.push.apply(n,i)}return n}function qr(r,e,t,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/t):o.push(r[0]*t);for(var a=1;a<r.length;++a)a<=e.length?n?o.push(e[a-1]*r[a]):o.push(r[a]/e[a-1]):o.push(r[a]);return o}function Js(r,e){for(var t=[0],n=0;n<e;++n)t.push(r[n][0]);return t}function Qs(r,e,t){for(var n=r.slice(0,1),o=0;o<t;++o)n.push(r[o+1]-e[o][0]-e[o][1]);return n}function Zs(r,e){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(e.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(e.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+e.dtype+".");if(e.shape[e.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+e.shape[e.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var t=e.shape,n=t[t.length-1],o=1,a=0;a<t.length-1;++a)o*=t[a];var i=r.shape,s=t.slice();s.pop();var u=1;for(a=n;a<r.rank;++a)u*=i[a],s.push(i[a]);var c=Ae(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var tu=30;function Mo(r){return r<=tu?r:ra(r,Math.floor(Math.sqrt(r)))}function Fh(r,e,t){var n=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,a="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+t.shape+", indices.shape: "+e.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(t.rank<o)throw new Error(a+" update.rank < "+o+". ");if(r.length<n+(t.rank-o))throw new Error(a+" Output shape length < "+(n+(t.rank-o)));if(t.rank!==o+r.length-n)throw new Error(a+" update.rank != "+(o+r.length-n));for(var i=0;i<o;++i)if(t.shape[i]!==e.shape[i])throw new Error(a+" updates.shape["+i+"] ("+t.shape[i]+") != indices.shape["+i+"] ("+e.shape[i]+").");for(i=0;i<t.rank-o;++i)if(t.shape[i+o]!==r[i+n])throw new Error(a+" updates.shape["+(i+o)+"] ("+t.shape[i+o]+") != shape["+(i+o)+"] ("+r[i+o]+")")}function Ph(r,e,t){if(e.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+e.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(e.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+e.dtype);if(t.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+t);if(t.length===0){if(e.size===0)throw new Error("Indices specified for empty output. indices shape: "+e.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Fh(t,e,r)}function jr(r,e,t){for(var n=e.shape.length,o=n>1?e.shape[n-1]:1,a=t.length,i=1,s=o;s<a;++s)i*=t[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:$(e.shape)/u,sliceSize:i,strides:Ae(t.slice(0,o)).concat([1]),outputSize:$(t)}}function Mh(r,e,t){E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+e+" must match the rank of the array ("+r.rank+")."}),E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of size "+t+" must match the rank of the array ("+r.rank+")."});for(var n=function(a){E(e[a]+t[a]<=r.shape[a],function(){return"Error in slice"+r.rank+"D: begin["+a+"] + size["+a+"] ("+(e[a]+t[a])+") would overflow input.shape["+a+"] ("+r.shape[a]+")"})},o=0;o<r.rank;++o)n(o)}function Mi(r){for(var e=[],t=0;r>0;)1&r&&e.push(t),r/=2,t++;return e}function Da(r,e,t){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((e[o]-r[o])/t[o]);return n}function Oh(r,e,t,n,o){var a=e[o],i=t[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=ta(0,a,s-1)}function Bh(r,e,t,n,o){var a=e[o],i=t[o]||1;(r&1<<o||a==null)&&(a=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return a<0&&(a+=s),a=i>0?ta(0,a,s):ta(-1,a,s-1)}function eu(r,e,t){for(var n=t.length,o=0;o<t.length;o++)if(t[o]>1){n=o;break}for(o=n+1;o<t.length;o++)if(e[o]>0||t[o]!==r[o])return!1;return!0}function nu(r,e){for(var t=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)t+=r[n]*e[n];return t}function Lh(r,e){E(na(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(e==null||Array.isArray(e)&&e.every(function(l){return l instanceof Vn}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var t=e!=null;if(!t)for(var n in e=[],T.registeredVariables)e.push(T.registeredVariables[n]);var o=t?e.filter(function(l){return!l.trainable}):null,a=e.length;E((e=e.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+a+" variables is trainable."});var i=T.gradients(r,e,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return e.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ao(r){return T.customGrad(r)}var Ge=D({softmax_:function(r,e){e===void 0&&(e=-1);var t=_(r,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and dim was "+e);return T.runKernelFunc(function(n,o){var a=n.softmax(t,e);return o([a]),a},{logits:t},function(n,o){var a=o[0],i=n.mul(a);return{logits:function(){return i.sub(i.sum([e],!0).mul(a))}}},"Softmax",{dim:e},[],[!0])}}),Wh=D({logSoftmax_:function(r,e){e===void 0&&(e=-1);var t=_(r,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+t.rank+" and axis was "+e);return ao(function(n,o){var a=n.max(e,!0),i=n.sub(a),s=i.toFloat().sub(i.exp().sum(e,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(e,!0).mul(l))}}})(t)}}),ru=function(){function r(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)},r.prototype.set=function(e,t){this.dataIdsCount++,this.data.set(e,t)},r.prototype.has=function(e){return this.data.has(e)},r.prototype.delete=function(e){return this.dataIdsCount--,this.data.delete(e)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),ou=function(){function r(){}return r.prototype.time=function(e){return F("time")},r.prototype.read=function(e){return F("read")},r.prototype.readSync=function(e){return F("readSync")},r.prototype.numDataIds=function(){return F("numDataIds")},r.prototype.disposeData=function(e){return F("disposeData")},r.prototype.write=function(e,t,n){return F("write")},r.prototype.move=function(e,t,n,o){return F("move")},r.prototype.memory=function(){return F("memory")},r.prototype.floatPrecision=function(){return F("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(e,t,n,o){return F("batchMatMul")},r.prototype.fusedBatchMatMul=function(e){return e.a,e.b,e.transposeA,e.transposeB,e.bias,e.activation,e.preluActivationWeights,F("fusedBatchMatMul")},r.prototype.slice=function(e,t,n){return F("slice")},r.prototype.stridedSlice=function(e,t,n,o){return F("stridedSlice")},r.prototype.unstack=function(e,t){return F("unstack")},r.prototype.reverse=function(e,t){return F("reverse")},r.prototype.concat=function(e,t){return F("concat")},r.prototype.neg=function(e){return F("neg")},r.prototype.add=function(e,t){return F("add")},r.prototype.addN=function(e){return F("addN")},r.prototype.subtract=function(e,t){return F("subtract")},r.prototype.multiply=function(e,t){return F("multiply")},r.prototype.realDivide=function(e,t){return F("realDivide")},r.prototype.floorDiv=function(e,t){return F("floorDiv")},r.prototype.sum=function(e,t){return F("sum")},r.prototype.prod=function(e,t){return F("prod")},r.prototype.unsortedSegmentSum=function(e,t,n){return F("unsortedSegmentSum")},r.prototype.argMin=function(e,t){return F("argMin")},r.prototype.argMax=function(e,t){return F("argMax")},r.prototype.equal=function(e,t){return F("equal")},r.prototype.notEqual=function(e,t){return F("notEqual")},r.prototype.less=function(e,t){return F("less")},r.prototype.lessEqual=function(e,t){return F("lessEqual")},r.prototype.greater=function(e,t){return F("greater")},r.prototype.greaterEqual=function(e,t){return F("greaterEqual")},r.prototype.logicalNot=function(e){return F("logicalNot")},r.prototype.logicalAnd=function(e,t){return F("logicalAnd")},r.prototype.logicalOr=function(e,t){return F("logicalOr")},r.prototype.where=function(e){return F("where")},r.prototype.select=function(e,t,n){return F("select")},r.prototype.topk=function(e,t,n){return F("topk")},r.prototype.min=function(e,t){return F("min")},r.prototype.minimum=function(e,t){return F("minimum")},r.prototype.mod=function(e,t){return F("mod")},r.prototype.max=function(e,t){return F("max")},r.prototype.maximum=function(e,t){return F("maximum")},r.prototype.all=function(e,t){return F("all")},r.prototype.any=function(e,t){return F("any")},r.prototype.squaredDifference=function(e,t){return F("squaredDifference")},r.prototype.ceil=function(e){return F("ceil")},r.prototype.floor=function(e){return F("floor")},r.prototype.round=function(e){return F("round")},r.prototype.sign=function(e){return F("sign")},r.prototype.isNaN=function(e){return F("isNaN")},r.prototype.isInf=function(e){return F("isInf")},r.prototype.isFinite=function(e){return F("isFinite")},r.prototype.pow=function(e,t){return F("pow")},r.prototype.exp=function(e){return F("exp")},r.prototype.expm1=function(e){return F("expm1")},r.prototype.softmax=function(e,t){return F("softmax")},r.prototype.log=function(e){return F("log")},r.prototype.log1p=function(e){return F("log1p")},r.prototype.sqrt=function(e){return F("sqrt")},r.prototype.rsqrt=function(e){return F("rsqrt")},r.prototype.square=function(e){return F("square")},r.prototype.reciprocal=function(e){return F("reciprocal")},r.prototype.relu=function(e){return F("relu")},r.prototype.relu6=function(e){return F("relu6")},r.prototype.prelu=function(e,t){return F("prelu")},r.prototype.elu=function(e){return F("elu")},r.prototype.eluDer=function(e,t){return F("eluDer")},r.prototype.selu=function(e){return F("selu")},r.prototype.int=function(e){return F("int")},r.prototype.clip=function(e,t,n){return F("clip")},r.prototype.abs=function(e){return F("abs")},r.prototype.complexAbs=function(e){return F("complexAbs")},r.prototype.sigmoid=function(e){return F("sigmoid")},r.prototype.softplus=function(e){return F("softplus")},r.prototype.sin=function(e){return F("sin")},r.prototype.cos=function(e){return F("cos")},r.prototype.tan=function(e){return F("tan")},r.prototype.asin=function(e){return F("asin")},r.prototype.acos=function(e){return F("acos")},r.prototype.atan=function(e){return F("atan")},r.prototype.atan2=function(e,t){return F("atan2")},r.prototype.sinh=function(e){return F("sinh")},r.prototype.cosh=function(e){return F("cosh")},r.prototype.tanh=function(e){return F("tanh")},r.prototype.asinh=function(e){return F("asinh")},r.prototype.acosh=function(e){return F("acosh")},r.prototype.atanh=function(e){return F("atanh")},r.prototype.erf=function(e){return F("erf")},r.prototype.step=function(e,t){return F("step")},r.prototype.fusedConv2d=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,F("fusedConv2d")},r.prototype.conv2d=function(e,t,n){return F("conv2d")},r.prototype.conv2dDerInput=function(e,t,n){return F("conv2dDerInput")},r.prototype.conv2dDerFilter=function(e,t,n){return F("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(e){return e.input,e.filter,e.convInfo,e.bias,e.activation,e.preluActivationWeights,F("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(e,t,n){return F("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(e,t,n){return F("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(e,t,n){return F("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(e,t,n){return F("conv3d")},r.prototype.conv3dDerInput=function(e,t,n){return F("conv3dDerInput")},r.prototype.conv3dDerFilter=function(e,t,n){return F("conv3dDerFilter")},r.prototype.maxPool=function(e,t){return F("maxPool")},r.prototype.maxPoolBackprop=function(e,t,n,o){return F("maxPoolBackprop")},r.prototype.avgPool=function(e,t){return F("avgPool")},r.prototype.avgPoolBackprop=function(e,t,n){return F("avgPoolBackprop")},r.prototype.avgPool3d=function(e,t){return F("avgPool3d")},r.prototype.avgPool3dBackprop=function(e,t,n){return F("avgPool3dBackprop")},r.prototype.maxPool3d=function(e,t){return F("maxPool3d")},r.prototype.maxPool3dBackprop=function(e,t,n,o){return F("maxPool3dBackprop")},r.prototype.reshape=function(e,t){return F("reshape")},r.prototype.cast=function(e,t){return F("cast")},r.prototype.tile=function(e,t){return F("tile")},r.prototype.pad=function(e,t,n){return F("pad")},r.prototype.transpose=function(e,t){return F("transpose")},r.prototype.gather=function(e,t,n){return F("gather")},r.prototype.gatherND=function(e,t){return F("gatherND")},r.prototype.scatterND=function(e,t,n){return F("scatterND")},r.prototype.batchToSpaceND=function(e,t,n){return F("batchToSpaceND")},r.prototype.spaceToBatchND=function(e,t,n){return F("spaceToBatchND")},r.prototype.resizeBilinear=function(e,t,n,o){return F("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(e,t,n){return F("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(e,t,n,o){return F("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(e,t,n){return F("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(e,t,n,o,a,i){return F("batchNormalization")},r.prototype.localResponseNormalization4D=function(e,t,n,o,a){return F("localResponseNormalization4D")},r.prototype.LRNGrad=function(e,t,n,o,a,i,s){return F("LRNGrad")},r.prototype.multinomial=function(e,t,n,o){return F("multinomial")},r.prototype.oneHot=function(e,t,n,o){return F("oneHot")},r.prototype.cumsum=function(e,t,n,o){return F("cumsum")},r.prototype.nonMaxSuppression=function(e,t,n,o,a){return F("nonMaxSuppression")},r.prototype.fft=function(e){return F("fft")},r.prototype.ifft=function(e){return F("ifft")},r.prototype.complex=function(e,t){return F("complex")},r.prototype.real=function(e){return F("real")},r.prototype.imag=function(e){return F("imag")},r.prototype.cropAndResize=function(e,t,n,o,a,i){return F("cropAndResize")},r.prototype.depthToSpace=function(e,t,n){return F("depthToSpace")},r.prototype.split=function(e,t,n){return F("split")},r.prototype.sparseToDense=function(e,t,n,o){return F("sparseToDense")},r.prototype.diag=function(e){return F("diag")},r.prototype.fill=function(e,t,n){return F("fill")},r.prototype.onesLike=function(e){return F("onesLike")},r.prototype.zerosLike=function(e){return F("zerosLike")},r.prototype.linspace=function(e,t,n){return F("linspace")},r.prototype.dispose=function(){return F("dispose")},r}();function F(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Je(r,e){for(var t=r.length,n=[],o=0;o<t;o++){var a=t-1-o,i=r[a]||1;(e[e.length-1-o]||1)>1&&i===1&&n.unshift(a)}return n}function Ot(r,e){for(var t=[],n=0;n<e.length;n++){var o=r[r.length-n-1],a=e.length-n-1,i=e[a];(o==null||o===1&&i>1)&&t.unshift(a)}return t}function ht(r,e){for(var t=[],n=Math.max(r.length,e.length),o=0;o<n;o++){var a=r[r.length-o-1];a==null&&(a=1);var i=e[e.length-o-1];if(i==null&&(i=1),a===1)t.unshift(i);else if(i===1)t.unshift(a);else{if(a!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+e+".");t.unshift(a)}}return t}function rr(r,e,t,n,o,a,i){i===void 0&&(i="channelsLast");var s,u=Yr(e),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return bn(r,s,t,n,o,a,!1,i)}function Kr(r,e,t,n,o,a,i){i===void 0&&(i="NDHWC");var s,u,c=la(e),l=c[0],h=c[1],f=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return Xr(r,s,t,n,o,!1,u,a)}function bn(r,e,t,n,o,a,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var p,d=e[0],v=e[1],m=e[3],g=Yr(t),x=g[0],b=g[1],y=Yr(n),w=y[0],C=y[1],S=On(d,w),k=On(v,C),I=function(M,B,U,W,z,G,H,j){var J,nt,st;if(typeof M=="number"){J={top:M,bottom:M,left:M,right:M,type:M===0?"VALID":"NUMBER"};var ut=function(pt,bt,gt,St,_t){St==null&&(St=au(pt,bt,gt));var Et=pt[0],be=pt[1],we=Qn((Et-bt+2*St)/gt+1,_t);E(Tt(we),function(){return"The output # of rows ("+we+") must be an integer. Change the stride and/or zero pad parameters"});var re=Qn((be-bt+2*St)/gt+1,_t);return E(Tt(re),function(){return"The output # of columns ("+re+") must be an integer. Change the stride and/or zero pad parameters"}),[we,re]}([B,U],G,W,M,j);nt=ut[0],st=ut[1]}else if(M==="same"){nt=Math.ceil(B/W),st=Math.ceil(U/z);var lt=Math.max(0,(nt-1)*W+G-B),dt=Math.max(0,(st-1)*z+H-U),ft=Math.floor(lt/2),vt=lt-ft,At=Math.floor(dt/2);J={top:ft,bottom:vt,left:At,right:dt-At,type:"SAME"}}else{if(M!=="valid")throw Error("Unknown padding parameter: "+M);J={top:0,bottom:0,left:0,right:0,type:"VALID"},nt=Math.ceil((B-G+1)/W),st=Math.ceil((U-H+1)/z)}return{padInfo:J,outHeight:nt,outWidth:st}}(o,l,h,x,b,S,k,a),R=I.padInfo,N=I.outHeight,A=I.outWidth,L=i?m*f:m;return s==="channelsFirst"?p=[c,L,N,A]:s==="channelsLast"&&(p=[c,N,A,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:N,outWidth:A,outChannels:L,padInfo:R,strideHeight:x,strideWidth:b,filterHeight:d,filterWidth:v,effectiveFilterHeight:S,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:C,inShape:r,outShape:p,filterShape:e}}function Xr(r,e,t,n,o,a,i,s){a===void 0&&(a=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],p=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],p=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],p=r[1],l=r[2],h=r[3],f=r[4]}var d,v=e[0],m=e[1],g=e[2],x=e[4],b=la(t),y=b[0],w=b[1],C=b[2],S=la(n),k=S[0],I=S[1],R=S[2],N=On(v,k),A=On(m,I),L=On(g,R),M=function(H,j,J,nt,st,ut,lt,dt,ft,vt,At){var pt,bt,gt,St;if(typeof H=="number"){pt={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var _t=function(En,Le,wo,In,Ce,Co){Ce==null&&(Ce=au(En,Le,In));var Jc=En[0],Qc=En[1],Zc=En[2],_o=Qn((Jc-Le+2*Ce)/In+1,Co);E(Tt(_o),function(){return"The output # of depths ("+_o+") must be an integer. Change the stride and/or zero pad parameters"});var Eo=Qn((Qc-Le+2*Ce)/In+1,Co);E(Tt(Eo),function(){return"The output # of rows ("+Eo+") must be an integer. Change the stride and/or zero pad parameters"});var Io=Qn((Zc-Le+2*Ce)/In+1,Co);return E(Tt(Io),function(){return"The output # of columns ("+Io+") must be an integer. Change the stride and/or zero pad parameters"}),[_o,Eo,Io,wo]}([j,J,nt,1],dt,1,st,H,At);bt=_t[0],gt=_t[1],St=_t[2]}else if(H==="same"){bt=Math.ceil(j/st),gt=Math.ceil(J/ut),St=Math.ceil(nt/lt);var Et=(bt-1)*st+dt-j,be=(gt-1)*ut+ft-J,we=(St-1)*lt+vt-nt,re=Math.floor(Et/2),_n=Et-re,Oe=Math.floor(be/2),Xe=be-Oe,Be=Math.floor(we/2);pt={top:Oe,bottom:Xe,left:Be,right:we-Be,front:re,back:_n,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);pt={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},bt=Math.ceil((j-dt+1)/st),gt=Math.ceil((J-ft+1)/ut),St=Math.ceil((nt-vt+1)/lt)}return{padInfo:pt,outDepth:bt,outHeight:gt,outWidth:St}}(o,l,h,f,y,w,C,N,A,L,s),B=M.padInfo,U=M.outDepth,W=M.outHeight,z=M.outWidth,G=a?x*p:x;return i==="channelsFirst"?d=[c,G,U,W,z]:i==="channelsLast"&&(d=[c,U,W,z,G]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:f,inChannels:p,outDepth:U,outHeight:W,outWidth:z,outChannels:G,padInfo:B,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:N,effectiveFilterHeight:A,effectiveFilterWidth:L,dilationDepth:k,dilationHeight:I,dilationWidth:R,inShape:r,outShape:d,filterShape:e}}function au(r,e,t,n){n===void 0&&(n=1);var o=On(e,n);return Math.floor((r[0]*(t-1)-t+o)/2)}function Yr(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function la(r){return typeof r=="number"?[r,r,r]:r}function On(r,e){return e<=1?r:r+(r-1)*(e-1)}function Qn(r,e){if(!e)return r;switch(e){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+e)}}function Hn(r){var e=Yr(r),t=e[0],n=e[1],o=e[2];return t===1&&n===1&&o===1}function ne(r,e){return Hn(r)||Hn(e)}function Aa(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function iu(r,e,t){if(e==="complex64"){if(r.dtype==="complex64")return r.clone();var n=Ct(r.shape),o=r.toFloat(),a=t.complex(o,n);return n.dispose(),o.dispose(),a}if(!fl(r.dtype,e))return T.makeTensorFromDataId(r.dataId,r.shape,e);if(r.dtype==="complex64"){var i=t.real(r);return a=i.cast(e),i.dispose(),a}if(e==="int32")return t.int(r);if(e==="bool"){var s=q(0,r.dtype);return a=t.notEqual(r,s),s.dispose(),a}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+e)}function ha(r,e){return T.makeTensorFromDataId(r.dataId,e,r.dtype)}function su(r,e,t){var n=(e-r)/(t-1),o=lr(t,"float32");o[0]=r;for(var a=1;a<o.length;a++)o[a]=o[a-1]+n;return Nt(o,"float32")}function fa(r,e){if(r.length!==e.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+e.length+".");for(var t=new Float32Array(2*r.length),n=0;n<t.length;n+=2)t[n]=r[n/2],t[n+1]=e[n/2];return t}function Oi(r,e){return{real:r[2*e],imag:r[2*e+1]}}function zh(r,e,t,n){r[2*n]=e,r[2*n+1]=t}function Uh(r,e,t){var n=(t?2:-2)*Math.PI*(r/e);return{real:Math.cos(n),imag:Math.sin(n)}}function Vh(r,e,t){var n=function(a,i,s){return function(u,c,l){for(var h=0,f=u.length,p=0,d=!1;h<f;){var v=l(c,u[p=h+(f-h>>>1)]);v>0?h=p+1:(f=p,d=!v)}return d?h:-h-1}(a,i,s||Gh)}(r,e,t),o=n<0?-(n+1):n;r.splice(o,0,e)}function Gh(r,e){return r>e?1:r<e?-1:0}function Ta(r,e,t,n,o){return uu(r,e,t,n,o,0).selectedIndices}function Na(r,e,t,n,o,a){var i=uu(r,e,t,n,o,a);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function uu(r,e,t,n,o,a,i,s){s===void 0&&(s=!1);for(var u=Array.from(e).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort(Bi),c=a>0?-.5/a:0,l=[],h=[];l.length<t&&u.length>0;){var f=u.pop(),p=f.score,d=f.boxIndex,v=f.suppressBeginIndex;if(p<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var x=Hh(r,d,l[g]);if(x>=n){m=!0;break}if(f.score=f.score*qh(n,c,x),f.score<=o)break}f.suppressBeginIndex=l.length,m||(f.score===p?(l.push(d),h.push(f.score)):f.score>o&&Vh(u,f,Bi))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Nt(l,"int32"),selectedScores:Nt(h,"float32"),numValidOutputs:q(b,"int32")}}function Hh(r,e,t){var n=r.subarray(4*e,4*e+4),o=r.subarray(4*t,4*t+4),a=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),p=(s-a)*(u-i),d=(h-c)*(f-l);if(p<=0||d<=0)return 0;var v=Math.max(a,c),m=Math.max(i,l),g=Math.min(s,h),x=Math.min(u,f),b=Math.max(g-v,0)*Math.max(x-m,0);return b/(p+d-b)}function qh(r,e,t){var n=Math.exp(e*t*t);return t<=r?n:0}function Bi(r,e){return r.score-e.score||r.score===e.score&&e.boxIndex-r.boxIndex}function cu(r,e,t){var n=new Array(r.rank).fill(0),o=r.shape.slice();return e.map(function(a){o[t]=a;var i=r.slice(n,o);return n[t]+=a,i})}function lu(r,e){for(var t=new Array(r.rank),n=0;n<t.length;n++)t[n]=r.shape[n]*e[n];var o=at(t,r.dtype);for(n=0;n<o.values.length;++n){for(var a=o.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=a[s]%r.shape[s];var u=r.locToIndex(i);o.values[n]=r.values[u]}return o.toTensor()}function hu(r,e,t,n,o){for(var a=e[e.length-1],i=[r.length/a,a],s=i[0],u=i[1],c=tr(t,s*n),l=tr("int32",s*n),h=0;h<s;h++){for(var f=h*u,p=r.subarray(f,f+u),d=[],v=0;v<p.length;v++)d.push({value:p[v],index:v});d.sort(function(y,w){return w.value-y.value});var m=h*n,g=c.subarray(m,m+n),x=l.subarray(m,m+n);for(v=0;v<n;v++)g[v]=d[v].value,x[v]=d[v].index}var b=e.slice();return b[b.length-1]=n,[Ht(c,b,t),Ht(l,b,"int32")]}function Fa(r,e){for(var t=[],n=0;n<e.length;n++)e[n]&&t.push(n);var o=at(r,"int32"),a=at([t.length,r.length],"int32");for(n=0;n<t.length;n++){var i=o.indexToLoc(t[n]),s=n*r.length;a.values.set(i,s)}return a.toTensor()}var jh=function(r,e){this.outputShape=[],this.outputShape=r,this.variableNames=e.map(function(o,a){return"T"+a});var t=[];this.variableNames.forEach(function(o){t.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Kh=function(r,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=e.map(function(o,a){return"T"+a});var t=[];this.variableNames.forEach(function(o){t.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+t.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Xh=function(r,e,t){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,a=r.inSize,i=Math.ceil(a/n);t||this.variableNames.push("bestIndicesA"),this.outputShape=[o,i];var s=e==="max"?">":"<",u=t?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function fu(r,e){return["x","y","z","w","u","v"].slice(0,e).map(function(t){return r+"."+t})}function Qt(r,e){return e===1?[r]:fu(r,e)}function Kt(){var r,e,t,n,o,a,i,s,u,c;return O().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",e="in",t="out",n="in",o="texture",a="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",e="attribute",t="varying",n="varying",o="texture2D",a="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:e,varyingVs:t,varyingFs:n,texture2D:o,output:a,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function fn(r,e,t){t===void 0&&(t="index");var n=Ae(e);return n.map(function(o,a){return"int "+r[a]+" = "+t+" / "+o+"; "+(a===n.length-1?"int "+r[a+1]+" = "+t+" - "+r[a]+" * "+o:"index -= "+r[a]+" * "+o)+";"}).join("")}function Pa(r){var e=Ae(r).map(function(t){return t.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+e[0]+" + coords.y * "+e[1]+` + coords.z;
  }
`}var pu=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function Yh(r,e,t,n){var o=[];r.forEach(function(p){var d=$(p.shapeInfo.logicalShape);p.shapeInfo.isUniform?o.push("uniform float "+p.name+(d>1?"["+d+"]":"")+";"):(o.push("uniform sampler2D "+p.name+";"),o.push("uniform int offset"+p.name+";"))});var a,i,s=o.join(`
`),u=r.map(function(p){return function(d,v,m){m===void 0&&(m=!1);var g="";g+=m?du(d):An(d);var x=d.shapeInfo.logicalShape,b=v.logicalShape;return x.length<=b.length&&(g+=m?function(y,w){var C,S=y.name,k=S.charAt(0).toUpperCase()+S.slice(1),I="get"+k+"AtOutCoords",R=y.shapeInfo.logicalShape.length,N=w.logicalShape.length,A=Je(y.shapeInfo.logicalShape,w.logicalShape),L=wt(N),M=N-R,B=["x","y","z","w","u","v"];C=R===0?"":N<2&&A.length>=1?"coords = 0;":A.map(function(J){return"coords."+B[J+M]+" = 0;"}).join(`
`);var U="";U=N<2&&R>0?"coords":y.shapeInfo.logicalShape.map(function(J,nt){return"coords."+B[nt+M]}).join(", ");var W="return outputValue;",z=$(y.shapeInfo.logicalShape)===1,G=$(w.logicalShape)===1;if(R!==1||z||G){if(z&&!G)W=N===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(A.length){var H=R-2,j=R-1;A.indexOf(H)>-1&&A.indexOf(j)>-1?W="return vec4(outputValue.x);":A.indexOf(H)>-1?W="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":A.indexOf(j)>-1&&(W="return vec4(outputValue.xx, outputValue.zz);")}}else W=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+L+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+k+"("+U+`);
      `+W+`
    }
  `}(d,v):function(y,w){var C=y.name,S=C.charAt(0).toUpperCase()+C.slice(1),k="get"+S+"AtOutCoords",I=w.texShape,R=y.shapeInfo.texShape,N=y.shapeInfo.logicalShape.length,A=w.logicalShape.length;if(!y.shapeInfo.isUniform&&N===A&&y.shapeInfo.flatOffset==null&&zt(R,I))return`
      float `+k+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var L,M=wt(A),B=Je(y.shapeInfo.logicalShape,w.logicalShape),U=A-N,W=["x","y","z","w","u","v"];L=N===0?"":A<2&&B.length>=1?"coords = 0;":B.map(function(G){return"coords."+W[G+U]+" = 0;"}).join(`
`);var z="";return z=A<2&&N>0?"coords":y.shapeInfo.logicalShape.map(function(G,H){return"coords."+W[H+U]}).join(", "),`
    float `+k+`() {
      `+M+` coords = getOutputCoords();
      `+L+`
      return get`+S+"("+z+`);
    }
  `}(d,v)),g}(p,e,n)}).join(`
`),c=e.texShape,l=Kt(),h=function(p){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+p.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(p){return p.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+p.varyingFs+` vec2 resultUV;
    `+p.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+p.defineSpecialNaN+`
    `+p.defineSpecialInf+`
    `+p.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+$h+`
    `+Jh+`
    `+Qh+`
  `}(l);return e.isPacked?(a=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,d);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(zt(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var S=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec2(r, c);
    }
  `}(p,d);case 3:return v=p,m=d,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],x=Math.ceil(v[2]/2),b=x*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],S=Math.ceil(y[y.length-1]/2),k=S*Math.ceil(y[y.length-2]/2),I=k,R="",N="b, r, c",A=2;A<y.length-1;A++)I*=y[y.length-A-1],R=`
      int b`+A+" = index / "+I+`;
      index -= b`+A+" * "+I+`;
    `+R,N="b"+A+", "+N;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+R+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+S+`);
      int c = imod(index, `+S+`) * 2;

      return ivec`+y.length+"("+N+`);
    }
  `}(p,d)}var v,m,g,x,b}(e.logicalShape,c),i=function(p){return`
    void setOutput(vec4 val) {
      `+p.output+` = val;
    }
  `}(l)):(a=function(p,d){switch(p.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,d);case 2:return function(g,x){return zt(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(p,d);case 3:return v=d,m=fn(["r","c","d"],p),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=fn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(p,d);case 5:return function(g,x){var b=fn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(p,d);case 6:return function(g,x){var b=fn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(p,d);default:throw new Error(p.length+"-D output sampling is not yet supported")}var v,m}(e.logicalShape,c),i=function(p){return`
    void setOutput(float val) {
      `+p.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(f+=Zh),[f,h,i,s,a,u,t].join(`
`)}function An(r){var e=r.shapeInfo.logicalShape;switch(e.length){case 0:return function(t){var n=t.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var a=t.shapeInfo.texShape,i=a[0],s=a[1];if(i===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=t.shapeInfo.texShape,c=u[0],l=u[1],h=un(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(t){var n=t.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Rn(t)+`
      }
    `;var a=t.shapeInfo.texShape,i=a[0],s=a[1];if(s===1&&i===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=un(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=t.shapeInfo.texShape;if(i!=null&&zt(n,i)){var s=i[0],u=i[1];return`
    float `+a+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=hn(n),l=c.newShape,h=c.keptDims,f=l;if(f.length<n.length){var p=Tn(t,f);return`
      `+An(p)+`
      float `+a+`(int row, int col) {
        return `+a+"("+Nn(["row","col"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Rn(t)+`
      }
    `;var d=i[0],v=i[1],m=un(o);return v===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:d===1?`
    float `+a+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+a+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+d+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[1]*n[2],s=n[2],u=hn(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var f=Tn(t,h);return`
        `+An(f)+`
        float `+a+`(int row, int col, int depth) {
          return `+a+"("+Nn(["row","col","depth"],l)+`);
        }
      `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Rn(t)+`
      }
    `;var p=t.shapeInfo.texShape,d=p[0],v=p[1],m=t.shapeInfo.flatOffset;if(v===i&&m==null)return`
        float `+a+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+d+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+a+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+d+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=un(o);return`
      float `+a+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+d+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=hn(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var f=Tn(t,l);return`
      `+An(f)+`
      float `+a+`(int row, int col, int depth, int depth2) {
        return `+a+"("+Nn(["row","col","depth","depth2"],h)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Rn(t)+`
      }
    `;var p=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,v=d[0],m=d[1];if(m===u&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===i&&p==null)return`
      float `+a+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=un(o);return`
    float `+a+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=hn(n),h=l.newShape,f=l.keptDims;if(h.length<n.length){var p=Tn(t,h);return`
      `+An(p)+`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        return `+a+"("+Nn(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Rn(t)+`
      }
    `;var d=t.shapeInfo.flatOffset,v=t.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===i&&d==null)return`
      float `+a+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=un(o);return`
    float `+a+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(t){var n=t.shapeInfo.logicalShape,o=t.name,a="get"+o.charAt(0).toUpperCase()+o.slice(1),i=hn(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=Tn(t,s);return`
      `+An(c)+`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+a+"("+Nn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,f=n[3]*h,p=n[2]*f,d=n[1]*p;if(t.shapeInfo.isUniform)return`
      float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+d+", "+p+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Rn(t)+`
      }
    `;var v=t.shapeInfo.flatOffset,m=t.shapeInfo.texShape,g=m[0],x=m[1];if(x===d&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+p+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&v==null)return`
      float `+a+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=un(o);return`
    float `+a+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+d+" + col * "+p+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(e.length+"-D input sampling is not yet supported")}}function du(r){var e,t,n;switch(r.shapeInfo.logicalShape.length){case 0:return e=r.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),n=Kt(),`
    vec4 `+t+`() {
      return `+n.texture2D+"("+e+`, halfCR);
    }
  `;case 1:return function(o){var a=o.name,i="get"+a.charAt(0).toUpperCase()+a.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Kt();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+a+`, uv);
    }
  `}(r);case 2:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=Kt();if(u!=null&&zt(a,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],p=Math.ceil(a[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+p+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(o){var a=o.shapeInfo.logicalShape,i=o.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(a[0]===1){var l=a.slice(1),h=Tn(o,l);return`
        `+du(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Nn(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],p=c[1],d=Math.ceil(a[2]/2),v=d*Math.ceil(a[1]/2),m=Kt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+p+", "+v+", "+d+`, b, row, col);
      return `+m.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(o){for(var a=o.shapeInfo.logicalShape,i=a.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],p=Math.ceil(a[i-1]/2),d=p*Math.ceil(a[i-2]/2),v="int b, int row, int col",m="b * "+d+" + (row / 2) * "+p+" + (col / 2)",g=2;g<i-1;g++)v="int b"+g+", "+v,d*=a[i-g-1],m="b"+g+" * "+d+" + "+m;var x=Kt();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(r)}}var $h=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Jh=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qh=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Zh=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function un(r){return"offset"+r}function Rn(r){var e=r.name,t=$(r.shapeInfo.logicalShape);return t<2?"return "+e+";":`
    for (int i = 0; i < `+t+`; i++) {
      if (i == index) {
        return `+e+`[i];
      }
    }
  `}function wt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Tn(r,e){var t=JSON.parse(JSON.stringify(r));return t.shapeInfo.logicalShape=e,t}function Nn(r,e){return e.map(function(t){return r[t]}).join(", ")}var tf=function(r,e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(t.charAt(0).toUpperCase()+t.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],a=Math.ceil(o/e);this.outputShape=r.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=wt(c),h=Qt("coords",c);if(a===1){var f=wt(s=c+1);i=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var p=["x","y","z","w","u","v"].slice(0,s),d="."+p[s-1],v=p.map(function(k){return"int "+k}),m=Qt("sourceLocR",s-1).concat("inIdx.r"),g=Qt("sourceLocG",s-1).concat("inIdx.g"),x=Qt("sourceLocB",s-1).concat("inIdx.b"),b=Qt("sourceLocA",s-1).concat("inIdx.a"),y=t==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",S=n?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+p.join()+`),
                                          vec2(`+p.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+p.join()+`),
                               vec2(`+p.slice(-2).join()+`));
      }
      `+S+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+d+", sourceLocG"+d+`,
          sourceLocB`+d+", sourceLocA"+d+") * "+e+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+e+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},ef=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(e*t);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+a+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},nf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var e=r.filterDepth,t=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=l-1-r.padInfo.front,d=h-1-r.padInfo.top,v=f-1-r.padInfo.left,m=1/(e*t*n);this.userCode=`
      const ivec3 pads = ivec3(`+p+", "+d+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},rf=function(r,e,t,n,o,a){this.outputShape=[],this.variableNames=["x","mean","variance"],ht(r,e),ht(r,t);var i="0.0";n!=null&&(ht(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";o!=null&&(ht(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+a+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},of=function(r,e,t,n,o,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],ht(r,e),ht(r,t);var i="vec4(0.0)";n!=null&&(ht(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(ht(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+a+`));

        setOutput((x - mean) * inv + offset);
      }
    `},af="return areal * breal - aimag * bimag;",sf="return areal * bimag + aimag * breal;",Li=function(r,e,t){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=ht(e,t),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Oo="return a + b;",Bo="return a - b;",Wi="return a * b;",vu="return (a < 0.) ? b * a : a;",Dt=function(r,e,t){this.variableNames=["A","B"],this.outputShape=ht(e,t),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},mu=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,ze=function(r,e,t,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=ht(e,t);var o=this.outputShape.length,a="";if(n)if(o===0||$(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          `+wt(o)+` coords = getOutputCoords();
        `,o===1)a+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=Qt("coords",o);a+=`
            bool nextRowOutOfBounds =
              (`+i[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+i[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+a+`

        setOutput(result);
      }
    `},uf=function(){function r(e){this.variableNames=["A"],this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,e),o.gl.uniform1f(n.maxLoc,t)}},r}(),cf=function(){function r(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(e,t){var n=this;return function(o,a){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(a,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(a,"maxVal")),o.gl.uniform1f(n.minLoc,e),o.gl.uniform1f(n.maxLoc,t)}},r}(),lf=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},hf=function(r){this.outputShape=[],this.outputShape=Gn(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var e=new Array(r.length-1);e[0]=r[0][1];for(var t=1;t<e.length;t++)e[t]=e[t-1]+r[t][1];var n=["if (yC < "+e[0]+") setOutput(getT0(yR, yC));"];for(t=1;t<e.length;t++){var o=e[t-1];n.push("else if (yC < "+e[t]+") setOutput(getT"+t+"(yR, yC-"+o+"));")}var a=e.length,i=e[e.length-1];n.push("else setOutput(getT"+a+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},ff=function(r,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=Gn(r,e);var t=this.outputShape,n=t.length,o=wt(n),a=Qt("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(m,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][e];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][e];var c=i[e],l=i.slice(-2),h=i.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var p=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+_r(i,c,p)+`),
            vec2(`+_r(l,c,p)+`));
        }`}var d=s.length,v=s[s.length-1];f+=`
        return getChannel(
          getT`+d+"("+_r(i,c,v)+`),
          vec2(`+_r(l,c,v)+"));",this.userCode=`
      float getValue(`+i.map(function(m){return"int "+m})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+a+`), 0., 0., 0.);

        `+a[n-1]+" = "+a[n-1]+` + 1;
        if (`+a[n-1]+" < "+t[n-1]+`) {
          result.g = getValue(`+a+`);
        }

        `+a[n-2]+" = "+a[n-2]+` + 1;
        if (`+a[n-2]+" < "+t[n-2]+`) {
          result.a = getValue(`+a+`);
        }

        `+a[n-1]+" = "+a[n-1]+` - 1;
        if (`+a[n-2]+" < "+t[n-2]+` &&
            `+a[n-1]+" < "+t[n-1]+`) {
          result.b = getValue(`+a+`);
        }
        setOutput(result);
      }
    `};function _r(r,e,t){var n=r.indexOf(e);return r.map(function(o,a){return a===n?o+" - "+t:o}).join()}var pf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideHeight,t=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+e+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+a+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},df=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=r.dataFormat==="channelsLast",i=e-1-r.padInfo.top,s=t-1-r.padInfo.left,u=a?1:2,c=a?2:3,l=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+e+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+e+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+a+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},vf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideDepth,t=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,a=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+e+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+t+" - "+a+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},mf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterDepth,t=r.filterHeight,n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=e-1-r.padInfo.front,u=t-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+e+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+e+` - 1 - wF;

          for (int wR = 0; wR < `+t+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+a+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+t+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},gf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var e=r.strideHeight,t=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,a=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+a+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+e+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+t+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},yf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var e=r.filterHeight,t=r.filterWidth,n=r.strideHeight,o=r.strideWidth,a=e-1-r.padInfo.top,i=t-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+e+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+e+` - 1 - wR;

          for (int wC = 0; wC < `+t+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+t+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},zi=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,a=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),p=r.inChannels%4,d=r.dataFormat==="channelsLast",v=d?1:2,m=d?2:3,g=d?3:1,x="",b="";t&&(x=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,b="result = activation(result);");var y=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+d+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(p===1)+`) {

              if (`+d+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(p===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+d+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(p===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+d+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},xf=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var e=r.padInfo.front,t=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,p=4*Math.floor(r.inChannels/4),d=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+e+", "+t+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+p+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(d===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+p+`) *
                  getW(wF, wR, wC, `+p+`, d2);
              } else if (`+(d===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(d===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+p+`),
                  getX(batch, xF, xR, xC, `+p+` + 1),
                  getX(batch, xF, xR, xC, `+p+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+p+`, d2),
                  getW(wF, wR, wC, `+p+` + 1, d2),
                  getW(wF, wR, wC, `+p+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ui=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=r.outChannels/r.inChannels,v="",m="";t&&(v=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`
          float activation(float x) {
            `+t+`
          }
        `,m="result = activation(result);");var g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+d+`;
        int q = d2 - d1 * `+d+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+p+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+a+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},Vi=function(r,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,a=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,p=r.filterWidth,d=p,v="int xR; int xC; int xCOffset;",m=0;m<f;m++)for(var g=0;g<p;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<f;m++)for(var x=0;x<d;x++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*x)*h+`;
        `,c===1){if(g<p&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+a+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+a+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<p)){var b=s%2==0?Ps(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+a+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+a+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<p&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+a+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<p&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+a+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+a+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+a+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<p&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<p&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<p&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<f;m++)for(g=0;g<p;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var y="",w="";t&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+t+`
        }`:`vec4 activation(vec4 x) {
          `+t+`
        }`,w="result = activation(result);");var C=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},bf=function(r,e,t,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var a=r[0],i=r[1],s=r[2],u=r[3],c=e[0],l=t[0],h=t[1];this.outputShape=[c,l,h,u];var f=n==="bilinear"?1:0,p=[i-1+".0",s-1+".0"],d=p[0],v=p[1],m=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+d+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+d],g=m[0],x=m[1],b=m[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=y[0],C=y[1],S=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+a+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+d+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+S+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},wf=function(r,e,t){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],a=t?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(t?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+wt(n)+` coords = getOutputCoords();
        int end = `+Gi(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+a+` end) {
            continue;
          }
          if (idx == end && `+e+`) {
            continue;
          }
          `+Gi(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function Gi(r,e){if(r===1)return""+e;if(r===2)return e+".y";if(r===3)return e+".z";if(r===4)return e+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Cf=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=nr.DENSE;var e=Jn(r),t=Kt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+fn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+e[0]+", "+e[1]+`));
        int index = 4 * (resTexRC.x * `+e[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+t.output+` = result;
      }
    `},_f=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=nr.DENSE;var e=Jn(r),t=Kt();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+fn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+e[0]+", "+e[1]+`));
        int index = 4 * (resTexRC.x * `+e[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+t.output+` = result;
      }
    `},Ef=function(){function r(e,t,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+t+`;
      int offset_h = imod(h, `+t+`);
      int in_w = w / `+t+`;
      int offset_w = imod(w, `+t+`);
      int offset_d = (offset_h * `+t+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),If=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Rf=function(r){this.variableNames=["A"],this.outTexUsage=ie.DOWNLOAD;var e=Kt();this.outputShape=r,this.userCode=`
      `+pu+`

      void main() {
        float x = getAAtOutCoords();
        `+e.output+` = encode_float(x);
      }
    `},kf=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ie.DOWNLOAD;var e=Kt();this.outputShape=r,this.userCode=`
      `+pu+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+e.output+` = encode_float(x);
      }
    `},Sf=function(r,e,t){t===void 0&&(t=!1),this.variableNames=["A"];var n=Kt(),o=e[0],a=e[1];this.outputShape=r;var i="result";t&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+Pa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+a+`;
        int c = imod(flatIndex, `+a+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Df=function(r,e,t){t===void 0&&(t=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Kt(),o=e[0],a=e[1];this.outputShape=r;var i="",s="result";t&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+a+`;
              c = imod(flatIndex, `+a+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+a+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Pa(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Af="return real * expR - imag * expI;",Tf="return real * expI + imag * expR;",Hi=function(r,e,t){this.variableNames=["real","imag"];var n=e[1];this.outputShape=e;var o=t?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,a=t?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+a+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Nf=function(){function r(e,t){this.outputShape=[],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,o){t.valueLoc==null&&(t.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(t.valueLoc,e)}},r}(),Ff=function(r,e,t){this.variableNames=["A","indices"];var n=r.slice();n[t]=e,this.outputShape=n,this.rank=n.length;var o=wt(this.rank),a=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,t);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Pf=function(r,e,t){this.sliceDim=r,this.strides=e,this.variableNames=["x","indices"],this.outputShape=t;var n=wt(e.length),o=wt(t.length),a=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+a+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Mf(r,e){var t=Kt();return Dl(r,e,t.version+`
    precision highp float;
    `+t.attribute+` vec3 clipSpacePos;
    `+t.attribute+` vec2 uv;
    `+t.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Of(r,e){return Pl(r,e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Bf(r,e){return Ml(r,e,new Uint16Array([0,1,2,2,1,3]))}function fr(r,e,t,n,o,a,i){Bl(t,n);var s=Ol(r,e),u=r.TEXTURE_2D;return Q(r,e,function(){return r.bindTexture(u,s)}),Q(r,e,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),Q(r,e,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),Q(r,e,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),Q(r,e,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),Q(r,e,function(){return r.texImage2D(u,0,o,t,n,0,a,i,null)}),Q(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Lf(r,e,t,n,o){var a=ro(t,n);return fr(r,e,a[0],a[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Wf(r,e,t,n,o){var a=ro(t,n);return fr(r,e,a[0],a[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function zf(r,e,t,n,o){var a=ro(t,n);return fr(r,e,a[0],a[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Uf(r,e,t,n,o){var a=hr(t,n);return fr(r,e,a[0],a[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Vf(r,e,t,n,o){var a=hr(t,n);return fr(r,e,a[0],a[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Gf(r,e,t,n){return Q(r,e,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),Ti(r,e,t,"clipSpacePos",n,3,20,0)&&Ti(r,e,t,"uv",n,2,20,12)}function Hf(r,e,t,n,o,a,i){var s,u,c;Q(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)}),a instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(a),Q(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),Q(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function qf(r,e,t,n){Q(r,e,function(){return r.bindTexture(r.TEXTURE_2D,t)}),n.data instanceof Uint8Array?Q(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):Q(r,e,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),Q(r,e,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function jf(r,e,t,n,o){var a=r.createBuffer();Q(r,e,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,a)});var i=16*t*n;return Q(r,e,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),Q(r,e,function(){return r.readPixels(0,0,n,t,r.RGBA,r.FLOAT,0)}),Q(r,e,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),a}function Kf(r,e,t){var n=r,o=new Float32Array(t);return n.bindBuffer(n.PIXEL_PACK_BUFFER,e),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function Xf(r,e,t,n,o){var a=ro(t,n),i=a[0],s=a[1],u=new Uint8Array(t*n*4);return Q(r,e,function(){return r.readPixels(0,0,i,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Yf(r,e,t,n,o,a,i,s){var u=r,c=new Float32Array(function(l,h){var f=hr(l,h);return f[0]*f[1]*4}(a,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,e),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function $f(r,e,t,n){var o=new Float32Array(t*n*4);return Q(r,e,function(){return r.readPixels(0,0,n,t,r.RGBA,r.FLOAT,o)}),o}var Jf=function(){function r(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var t=O().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,El(t,e)):this.gl=Fe(t);var n="WEBGL_color_buffer_float";if(O().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=xr(this.gl,this.debug,"OES_texture_float"),fe(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=xr(this.gl,this.debug,"OES_texture_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),fe(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=xr(this.gl,this.debug,"EXT_color_buffer_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",fe(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!fe(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Of(this.gl,this.debug),this.indexBuffer=Bf(this.gl,this.debug),this.framebuffer=Ll(this.gl,this.debug),this.textureConfig=Ea(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return O().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var e=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var t=this.gl;Q(t,this.debug,function(){return t.finish()}),Q(t,this.debug,function(){return t.bindFramebuffer(t.FRAMEBUFFER,null)}),Q(t,this.debug,function(){return t.deleteFramebuffer(e.framebuffer)}),Q(t,this.debug,function(){return t.bindBuffer(t.ARRAY_BUFFER,null)}),Q(t,this.debug,function(){return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)}),Q(t,this.debug,function(){return t.deleteBuffer(e.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(e,t){return this.throwIfDisposed(),Lf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(e,t){return this.throwIfDisposed(),Wf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(e,t){return this.throwIfDisposed(),zf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(e,t){this.throwIfDisposed(),qf(this.gl,this.debug,e,t)},r.prototype.uploadDenseMatrixToTexture=function(e,t,n,o){this.throwIfDisposed(),Hf(this.gl,this.debug,e,t,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(e,t){return this.throwIfDisposed(),Vf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(e,t){return this.throwIfDisposed(),Uf(this.gl,this.debug,e,t,this.textureConfig)},r.prototype.deleteMatrixTexture=function(e){var t=this;this.throwIfDisposed(),this.outputTexture===e&&(Ni(this.gl,this.debug,this.framebuffer),this.outputTexture=null),Q(this.gl,this.debug,function(){return t.gl.deleteTexture(e)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(e,t,n){var o=this;return this.downloadMatrixDriver(e,function(){return Xf(o.gl,o.debug,t,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(e,t,n,o,a,i){return Yf(this.gl,e,0,0,0,a,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(e,t){return Kf(this.gl,e,t)},r.prototype.createBufferFromTexture=function(e,t,n){this.bindTextureToFrameBuffer(e);var o=jf(this.gl,this.debug,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var e=this.createFence(this.gl);return this.pollFence(e)},r.prototype.createFence=function(e){var t,n,o=this;if(O().getBool("WEBGL_FENCE_API_ENABLED")){var a=e,i=a.fenceSync(a.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=function(){var s=a.clientWaitSync(i,0,0);return s===a.ALREADY_SIGNALED||s===a.CONDITION_SATISFIED},t=i}else O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:t,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(e,t,n){var o=this;return this.downloadMatrixDriver(e,function(){return $f(o.gl,o.debug,t,n)})},r.prototype.createProgram=function(e){this.throwIfDisposed();var t=this.gl,n=Al(t,this.debug,e),o=Mf(t,this.debug),a=Nl(t,this.debug);return Q(t,this.debug,function(){return t.attachShader(a,o)}),Q(t,this.debug,function(){return t.attachShader(a,n)}),Fl(t,this.debug,a),this.debug&&No(t,this.debug,a),this.vertexAttrsAreBound||(this.setProgram(a),this.vertexAttrsAreBound=Gf(t,this.debug,this.program,this.vertexBuffer)),a},r.prototype.deleteProgram=function(e){var t=this;this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&Q(this.gl,this.debug,function(){return t.gl.deleteProgram(e)})},r.prototype.setProgram=function(e){var t=this;this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&No(this.gl,this.debug,this.program),Q(this.gl,this.debug,function(){return t.gl.useProgram(e)})},r.prototype.getUniformLocation=function(e,t,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?zl(this.gl,this.debug,e,t):Ul(this.gl,e,t)},r.prototype.getAttributeLocation=function(e,t){var n=this;return this.throwIfDisposed(),Q(this.gl,this.debug,function(){return n.gl.getAttribLocation(e,t)})},r.prototype.getUniformLocationNoThrow=function(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)},r.prototype.setInputMatrixTexture=function(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),Vl(this.gl,this.debug,this.program,e,t,n)},r.prototype.setOutputMatrixTexture=function(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)},r.prototype.setOutputPackedMatrixTexture=function(e,t,n){this.throwIfDisposed();var o=hr(t,n),a=o[0],i=o[1];this.setOutputMatrixTextureDriver(e,a,i)},r.prototype.setOutputMatrixWriteRegion=function(e,t,n,o){this.setOutputMatrixWriteRegionDriver(n,e,o,t)},r.prototype.setOutputPackedMatrixWriteRegion=function(e,t,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&No(this.gl,this.debug,this.program),br(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var e=this.gl;this.debug&&this.debugValidate(),Q(e,this.debug,function(){return e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var e=this;this.throwIfDisposed(),Q(this.gl,this.debug,function(){return e.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=xr(this.gl,this.debug,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),a=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,a),a},r.prototype.endQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}else{var t=this.gl,n=this.getQueryTimerExtensionWebGL2();t.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(e){return X(this,void 0,void 0,function(){var t=this;return Y(this,function(n){switch(n.label){case 0:return[4,Ii(function(){return t.disposed||t.isQueryAvailable(e,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(e,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(e,t){if(t===0)return null;if(t===2){var n=this.gl;return n.getQueryParameter(e,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(e,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(e,t){if(t===0)return!0;if(t===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),a=n.getQueryParameter(e,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint}return a=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(e,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),a&&!this.disjoint},r.prototype.pollFence=function(e){var t=this;return new Promise(function(n){t.addItemToPoll(function(){return e.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var e=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),t=0;t<=e;++t)(0,this.itemsToPoll[t].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(e+1)},r.prototype.addItemToPoll=function(e,t){var n=this;this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1||Ii(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(e){this.throwIfDisposed(),Fo(this.gl,this.debug,e,this.framebuffer),this.debug&&br(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Fo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&br(this.gl)):Ni(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(e,t){this.bindTextureToFrameBuffer(e);var n=t();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(e,t,n){this.throwIfDisposed();var o=this.gl;Fo(o,this.debug,e,this.framebuffer),this.debug&&br(o),this.outputTexture=e,Q(o,this.debug,function(){return o.viewport(0,0,t,n)}),Q(o,this.debug,function(){return o.scissor(0,0,t,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(e,t,n,o){var a=this;this.throwIfDisposed(),Q(this.gl,this.debug,function(){return a.gl.scissor(e,t,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function qi(r,e){if(r.length!==e.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+e.length+" inputs");r.forEach(function(t,n){var o=t.logicalShape,a=e[n],i=a.shape;if(!zt(o,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+i+" must match");if(!t.isUniform||!a.isUniform){var s=t.texShape,u=a.isUniform?null:a.texData.texShape;if(!zt(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Qf=function(r,e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=t.filterWidth,o=t.inChannels,a=t.strideWidth,i=t.strideHeight,s=t.padInfo,u=t.outWidth,c=t.dilationWidth,l=t.dilationHeight,h=t.dataFormat,f=s.left,p=s.top,d=o*n,v=Kt(),m=h==="channelsLast",g=m?0:1,x=m?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+p+`;
            d0 = offsetY + `+l+" * (pos / "+d+`);

            if(d0 < `+e[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+a+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+d+".) / "+o+`.));

              if(d1 < `+e[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},Zf=function(r,e,t,n,o){this.variableNames=["x"],this.outputShape=[];var a,i=e,s=r[3]-1;this.outputShape=r;var u="float("+t+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+a+`;
        setOutput(val);
      }
    `},tp=function(r,e,t,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=e,this.bias=t,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+e+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+e+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+t+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},ep=function(r,e,t,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var a,i=e,s=r[3]-1;this.outputShape=r;var u="float("+t+") + float("+n+") * sum";a=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+a+`;
        setOutput(result);
      }
    `},np=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var e=r.strideHeight,t=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,a=r.effectiveFilterWidth,i=o-1-r.padInfo.top,s=a-1-r.padInfo.left,u=o*a-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+e+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+a+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+t+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+a+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},rp=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var e=r.strideDepth,t=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,a=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,p=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+e+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            float dyR = float(dyRCorner + wR) / `+t+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+p+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Lo=function(r,e,t,n,o,a,i){t===void 0&&(t=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),a===void 0&&(a=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e;var s=t?r[1]:r[2],u=Math.ceil(s/2),c=t?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=t?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],p="",d="";a&&(p=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+a+`
        }`:`vec4 activation(vec4 x) {
          `+a+`
        }`,d="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+p+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+d+`

        setOutput(result);
      }
    `},op=function(){function r(e,t,n){this.variableNames=["probs"],this.outputShape=[e,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(t-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(t-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;return function(n,o){t.seedLoc==null&&(t.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(t.seedLoc,e)}},r}(),ap=function(r,e,t,n){this.variableNames=["indices"],this.outputShape=[r,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+t+`),
                      float(index == coords.y)));
      }
    `},ip=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var e=r.length;if(e===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var t=Qt("rc",e),n=wt(e),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(e,r,t),a=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(e,r[r.length-1],r[r.length-2],t),i=function(s,u){var c=s.length,l=function(h,f){for(var p=[],d=0;d<=1;d++)for(var v=0;v<=1;v++){for(var m=(d===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<h;g++)m=f[f.length-1-g]+","+m;p.push(m)}return p}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,t);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+a+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},sp=function(r,e,t){this.variableNames=["x"],this.outputShape=e.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=wt(n),a=e.map(function(u){return u[0]}).join(","),i=e.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+a+`);
      `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+t+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+a+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+t+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},up=function(r,e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map(function(m,g){return m[0]+r[g]+m[1]});for(var n=r.length,o=wt(n),a=e.map(function(m){return m[0]}).join(","),i=e.map(function(m,g){return m[0]+r[g]}).join(","),s=Qt("rc",n),u=Qt("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",p="",d=0,v=n===1?2:4;d<v;d++)p+=`
        `+h[d]+`
        if (`+f+`) {
          result[`+d+"] = float("+t+`);
        } else {
          `+o+` source = rc - start;
          result[`+d+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;p+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+a+`);
      const `+o+" end = "+o+"("+i+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+p+`
        setOutput(result);
      }
    `},Wo=function(r,e,t){if(this.variableNames=["x"],e==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,a=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=e==="avg",p="0.0";if(f||(p="-1.0 / 1e-20"),t)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+a+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var d=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="avg"&&(d="avgValue / count");var v=4*Math.floor(n/4),m=n%4,g=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+a+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+p+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+p+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+d+`);
      }
    `}},zo=function(r,e,t){if(this.variableNames=["x"],e==="avg"&&t)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,a=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.front,d=r.padInfo.top,v=r.padInfo.left;this.outputShape=r.outShape;var m=e==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),t)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+a+", "+i+`);
        const ivec3 pads = ivec3(`+p+", "+d+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="avg"&&(x="avgValue / count");var b=4*Math.floor(n/4),y=n%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+a+", "+i+`);
      const ivec3 pads = ivec3(`+p+", "+d+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},cp=function(r,e){this.variableNames=["x"];var t=r.windowSize,n=r.batchSize,o=r.inSize,a=Math.ceil(o/t);this.outputShape=[n,a];var i="0.0",s="";e==="prod"?i="1.0":e==="min"?(i="1.0 / 1e-20",s="min"):e==="max"&&(i="-1.0 / 1e-20",s="max");var u=e+"("+e+"("+e+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";e==="sum"?u="sumValue":e==="prod"?u="prodValue":e==="all"?u="allValue":e==="any"&&(u="anyValue");var c=4*Math.floor(t/4),l=t%4,h=`
      if (`+(e==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(e==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";e==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):e==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var p="";o%t>0&&(p=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+p+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+t+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},lp=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var t="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),t+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+fn(["r","c","d"],e)+`
      return ivec3(r, c, d);
    }
  
      `+Pa(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+t+`

        setOutput(result);
      }
    `},hp=function(r,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var n=e.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[t&&s>1?o-1:o,t&&u>1?a-1:a],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,v=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(a-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},fp=function(r,e,t,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},pp=function(r,e,t,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+a+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(t-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},dp=function(r,e,t){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e.shape;var n=e.shape,o=n[1],a=n[2],i=r.shape,s=i[1],u=i[2],c=[t&&s>1?o-1:o,t&&u>1?a-1:a],l=[t&&s>1?s-1:s,t&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],p=1/h,d=1/f,v=2*Math.ceil(p)+2,m=2*Math.ceil(d)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+p+`);
        const float invWidthScale = float(`+d+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+t+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+a+`) - 1),
                `+t+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},vp=function(r,e,t,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],a=r[1],i=r[2],s=r[3];this.outputShape=[o,e,t,s];var u=[n&&e>1?a-1:a,n&&t>1?i-1:i],c=[n&&e>1?e-1:e,n&&t>1?t-1:t],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+a+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},mp=function(r,e){this.variableNames=["x"];var t=r.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");if(this.outputShape=r,t!==1){var n=r.map(function(a,i){return function(s){return e.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),o=wt(t);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},gp=function(r,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var t=r.length;if(t>4)throw new Error("WebGL backend: Reverse of rank-"+t+" tensor is not yet supported");this.outputShape=r;var n=Qt("rc",t),o=n[t-1]+" + 1 < "+this.outputShape[t-1],a=n[t-2]+" + 1 < "+this.outputShape[t-2],i=wt(t);function s(u){var c=r.map(function(l,h){return function(f,p){return e.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+p[f]+" - 1":""+p[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=t===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[t-1]="("+u[t-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+a+`) {
            result.b = `+function(u){return u[t-2]="("+u[t-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[t-1]="("+u[t-1]+" + 1)",u[t-2]="("+u[t-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},ji=function(r,e,t,n,o,a,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;var s=wt(o.length),u=wt(a.length),c="";t===1?c="i":t===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var f="getUpdates("+h+")",p=e>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+e+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+p+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},yp=function(r,e){this.variableNames=["x","segmentIds"];var t=r.windowSize,n=r.batchSize,o=r.inSize,a=r.numSegments,i=a*Math.ceil(o/t);this.outputShape=[n,i];var s=4*Math.floor(t/4),u=t%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%t>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%t>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+a+")) * float("+t+`));
        int currentSeg = int(mod(float(outIdx), float(`+a+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},xp=function(r,e,t){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=e,t>4)throw Error("Where for rank "+t+" is not yet supported");if(t===1)o="resRC",n="resRC";else{for(var a=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<e.length;u++)s.push(""+a[u]),u<r&&i.push(""+a[u]);n=i.join(),o=s.join()}var c=wt(t);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},bp=function(){function r(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;var t,n=wt(this.rank),o="uniform int start["+this.rank+"];",a=function(i){if(i===1)return"sourceLoc";if(i<=6)return Uo.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);t=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+e.map(function(i,s){return"sourceLoc."+Uo[s]+" = start["+s+"] + coords."+Uo[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+t+`
        setOutput(getSource(`+a+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,o){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},r}(),Uo=["x","y","z","w","u","v"],wp=function(){function r(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length;var t=wt(this.rank),n=Qt("coords",this.rank),o=Qt("sourceLoc",this.rank),a=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",i="getChannel(getSource("+o.join()+"), "+a+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+e[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+i+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+e[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+e[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+t+"("+e.map(function(l,h){return"start["+h+"]"}).join()+");":e.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+t+` coords = getOutputCoords();
        `+t+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(e){var t=this;if(e.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+e.length+")");return function(n,o){t.startLoc==null&&(t.startLoc=n.getUniformLocationNoThrow(o,"start"),t.startLoc==null)||n.gl.uniform1iv(t.startLoc,e)}},r}(),Cp=function(r,e,t){this.variableNames=["x"],this.outputShape=t;var n=t.length,o=wt(t.length),a=wt(t.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=t.map(function(u,c){return s++,t.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+e+`);

      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},_p=function(){function r(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(e,t,n){var o,a=Ki(t,n),i=Xi(e,a,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),a===ae.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):a===ae.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):a===ae.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):a===ae.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):a===ae.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),o},r.prototype.releaseTexture=function(e,t,n,o){if(this.freeTextures!=null){var a=Xi(t,Ki(n,o),o);a in this.freeTextures||(this.freeTextures[a]=[]),this.freeTextures[a].push(e),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[a],s=i.indexOf(e);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+e+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var e=this;if(this.freeTextures!=null){for(var t in this.freeTextures)this.freeTextures[t].forEach(function(n){e.gpgpu.deleteMatrixTexture(n)});for(var t in this.usedTextures)this.usedTextures[t].forEach(function(o){e.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Ki(r,e){if(r===ie.UPLOAD)return ae.PACKED_2X2_FLOAT32;if(r===ie.RENDER||r==null)return function(t){return O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?ae.PACKED_2X2_FLOAT32:ae.UNPACKED_FLOAT32:t?ae.PACKED_2X2_FLOAT16:ae.UNPACKED_FLOAT16}(e);if(r===ie.DOWNLOAD||r===ie.PIXELS)return ae.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function Xi(r,e,t){return r[0]+"_"+r[1]+"_"+e+"_"+t}var Ep=function(r,e){this.variableNames=["A"];for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[n]*e[n];this.outputShape=t,this.rank=t.length;var o=wt(this.rank),a=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+a+`));
      }
    `},Ip=function(r,e){this.variableNames=["A"];for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[e[n]];this.outputShape=t,this.rank=t.length;var o=wt(this.rank),a=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(e);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+a+`));
    }
    `},Rp=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var t=new Array(r.length),n=0;n<t.length;n++)t[n]=r[e[n]];if(this.outputShape=t,this.rank=t.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=wt(this.rank),a=fu("rc",this.rank),i=new Array(this.rank);for(n=0;n<e.length;n++)i[e[n]]=a[n];var s="vec2("+i.slice(-2).join()+")",u="++"+a[this.rank-1]+" < "+t[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+a[this.rank-1]+`;
      if(++`+a[this.rank-2]+" < "+t[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Ma=1.7580993408473768,Oa=1.0507009873554805,it=function(r,e){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+e+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},ye="if (isnan(x)) return x;",kp="return x;",Yi="return abs(x);",gu=ye+`
  return (x < 0.0) ? 0.0 : x;
`,yu=ye+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,xu="return (x >= 0.0) ? x : (exp(x) - 1.0);",Sp=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Ma+`;
  float scale = `+Oa+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,$i="return -x;",Ji="return ceil(x);",Qi="return floor(x);",Zi="return exp(x);",ts="return exp(x) - 1.0;",Dp=ye+`
  return sin(x);
`,Ap=ye+`
  return cos(x);
`,Tp=ye+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Np=ye+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Fp=ye+`
  return atan(x);
`,Pp=ye+"return log(x + sqrt(x * x + 1.0));",Mp=ye+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Op=ye+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Er="return x;",Bp="return x;",bu=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,wu=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Cu=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,$n=function(r,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+e+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Lp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var e=r.length,t=Qt("rc",e),n=wt(e),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(e,t),a=t.slice(-2),i=e<=1?"rc":"vec2("+a.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Ir={};function Rr(r,e){if(e===void 0&&(e=!1),r==="linear")return e?Bp:kp;if(r==="relu")return e?bu:gu;if(r==="elu")return e?Cu:xu;if(r==="relu6")return e?wu:yu;if(r==="prelu")return e?mu:vu;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Wp=600,zp=function(r){function e(t){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!O().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(t==null){var a=Fe(O().getNumber("WEBGL_VERSION"));o.binaryCache=((n=O().getNumber("WEBGL_VERSION"))in Ir||(Ir[n]={}),Ir[n]),o.gpgpu=new Jf(a),o.canvas=a.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=t,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=t.gl.canvas;return o.textureManager=new _p(o.gpgpu),o.numMBBeforeWarning=O().global.screen==null?1024:O().global.screen.height*O().global.screen.width*window.devicePixelRatio*Wp/1024/1024,o.texData=new ru(o,T),o}return ge(e,r),e.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},e.prototype.write=function(t,n,o){if(O().getBool("DEBUG")&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var a={};return this.texData.set(a,{shape:n,dtype:o,values:t,usage:ie.UPLOAD}),a},e.prototype.move=function(t,n,o,a){if(O().getBool("DEBUG")&&this.checkNumericalProblems(n),a==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:a,values:n,usage:ie.UPLOAD})},e.prototype.readSync=function(t){var n=this.texData.get(t),o=n.values,a=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new $n(u,Er):new it(u,Er);var h=this.runWebGLProgram(l,[{dataId:t,shape:u,dtype:a}],a),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(t);if(a==="string")return o;var p,d,v=this.activeTimers!=null;return v&&(p=Ie()),a==="complex64"?d=fa(i.real.dataSync(),i.imag.dataSync()):d=this.getValuesFromTexture(t),v&&(this.downloadWaitMs+=Ie()-p),this.convertAndCacheOnCPU(t,d)},e.prototype.read=function(t){return X(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,p,d,v,m,g,x,b,y,w,C,S,k;return Y(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(t))return n=this.pendingRead.get(t),[2,new Promise(function(R){return n.push(R)})];if(o=this.texData.get(t),a=o.values,i=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new $n(i,Er):new it(i,Er),f=this.runWebGLProgram(h,[{dataId:t,shape:i,dtype:u}],u),p=this.read(f.dataId),this.disposeData(f.dataId),[2,p];if(a!=null)return[2,this.convertAndCacheOnCPU(t)];if(!O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&O().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return d=null,u!=="complex64"&&O().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(t),m=this.texData.get(v.dataId),d=(k=this.gpgpu).createBufferFromTexture.apply(k,[m.texture].concat(Jn(i)))),this.pendingRead.set(t,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=I.sent(),b=x[0],y=x[1],g=fa(b,y),[3,5];case 4:d==null?g=this.getValuesFromTexture(t):(w=$(i),g=this.gpgpu.downloadFloat32MatrixFromBuffer(d,w)),I.label=5;case 5:return v!=null&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(t,g),S=this.pendingRead.get(t),this.pendingRead.delete(t),S.forEach(function(R){return R(C)}),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t),this.pendingDeletes--),[2,C]}})})},e.prototype.checkNumericalProblems=function(t){if(t!=null)for(var n=0;n<t.length;n++){var o=t[n];if(!kl(o))throw O().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},e.prototype.getValuesFromTexture=function(t){var n,o=this.texData.get(t),a=o.shape,i=o.dtype,s=o.isPacked,u=$(a);if(O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(t),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(Jn(a))).subarray(0,u);return this.disposeData(c.dataId),h}var f=O().getBool("WEBGL_PACK")&&s===!0,p=f?Po(a):a,d=f?new kf(p):new Rf(p),v=this.runWebGLProgram(d,[{shape:p,dtype:i,dataId:t}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},e.prototype.time=function(t){return X(this,void 0,void 0,function(){var n,o,a,i,s,u,c;return Y(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],a=!1,this.programTimersStack==null?(this.programTimersStack=o,a=!0):this.activeTimers.push(o),this.activeTimers=o,t(),i=Un(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=Un(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,a&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=sl(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},e.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},e.prototype.startTimer=function(){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Ie(),endMs:null}},e.prototype.endTimer=function(t){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=Ie(),t)},e.prototype.getQueryTime=function(t){return X(this,void 0,void 0,function(){var n;return Y(this,function(o){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(t)]:[2,(n=t).endMs-n.startMs]})})},e.prototype.disposeData=function(t){if(!this.pendingDisposal.has(t)){if(this.pendingRead.has(t))return this.pendingDisposal.add(t),void this.pendingDeletes++;if(this.texData.has(t)){this.releaseGPUData(t);var n=this.texData.get(t).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(t)}}},e.prototype.releaseGPUData=function(t){var n=this.texData.get(t),o=n.texture,a=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||t,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(i,a),this.textureManager.releaseTexture(o,i,s,u)));var f=this.texData.get(t);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},e.prototype.getTexture=function(t){return this.uploadToGPU(t),this.texData.get(t).texture},e.prototype.getDataInfo=function(t){return this.texData.get(t)},e.prototype.getCPUBackend=function(){return O().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},e.prototype.shouldExecuteOnCPU=function(t,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&t.every(function(a){return o.texData.get(a.dataId).texture==null&&a.size<n})},e.prototype.getGPGPUContext=function(){return this.gpgpu},e.prototype.complex=function(t,n){var o=this.makeOutput(t.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(t.clone()),imag:T.keep(n.clone())},o},e.prototype.real=function(t){return this.texData.get(t.dataId).complexTensors.real.clone()},e.prototype.imag=function(t){return this.texData.get(t.dataId).complexTensors.imag.clone()},e.prototype.slice=function(t,n,o){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.slice(t,n,o);if($(o)===0)return Ht([],o,t.dtype);var a=this.texData.get(t.dataId).isPacked,i=eu(t.shape,n,o);if(a||!i){var s=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new wp(o):new bp(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[t],null,u)}return this.uploadToGPU(t.dataId),this.shallowSlice(t,n,o)},e.prototype.shallowSlice=function(t,n,o){var a=this.texData.get(t.dataId),i=this.makeOutput(o,t.dtype),s=this.texData.get(i.dataId);Object.assign(s,a),s.shape=o,s.dtype=t.dtype;var u=nu(n,t.strides);a.slice&&(u+=a.slice.flatOffset),s.slice={flatOffset:u,origDataId:a.slice&&a.slice.origDataId||t.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},e.prototype.stridedSlice=function(t,n,o,a){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.stridedSlice(t,n,o,a);var i=Da(n,o,a);if(i.some(function(u){return u===0}))return Ht([],i);var s=new Cp(n,a,i);return this.compileAndRun(s,[t])},e.prototype.reverse=function(t,n){var o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new gp(t.shape,n):new mp(t.shape,n);return this.compileAndRun(o,[t])},e.prototype.concat=function(t,n){if(t[0].dtype==="complex64"){var o=t.map(function(p){return he(p)}),a=t.map(function(p){return ke(p)});return Vt(this.concat(o,n),this.concat(a,n))}if(this.shouldExecuteOnCPU(t))return this.cpuBackend.concat(t,n);if(t.length===1)return t[0];if(t.length>O().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(t.length/2),s=this.concat(t.slice(0,i),n),u=this.concat(t.slice(i),n);return this.concat([s,u],n)}if(O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].rank>1){var c=new ff(t.map(function(p){return p.shape}),n);return this.compileAndRun(c,t)}var l=Gn(t.map(function(p){return p.shape}),n),h=t.map(function(p){return p.as2D(-1,$(p.shape.slice(n)))}),f=new hf(h.map(function(p){return p.shape}));return this.compileAndRun(f,h).reshape(l)},e.prototype.neg=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.neg(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,$i,t.dtype);var n=new it(t.shape,$i);return this.compileAndRun(n,[t])},e.prototype.batchMatMul=function(t,n,o,a){var i=o?t.shape[2]:t.shape[1],s=a?n.shape[1]:n.shape[2],u=o?t.shape[1]:t.shape[2],c=t.shape[0];if((i===1||s===1)&&u>1e3){o&&(t=t.transpose([0,2,1])),a&&(n=n.transpose([0,2,1]));var l=s===1?t:t.as3D(c,u,1),h=s===1?2:1,f=s===1?n.as3D(c,1,u):n;return this.multiply(l,f).sum(h,!0)}var p=Gt(t.dtype,n.dtype),d=new Lo(t.shape,[c,i,s],o,a);return this.compileAndRun(d,[t,n],p)},e.prototype.fusedBatchMatMul=function(t){var n=t.a,o=t.b,a=t.transposeA,i=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=a?n.shape[2]:n.shape[1],h=i?o.shape[1]:o.shape[2],f=n.shape[0],p=Gt(n.dtype,o.dtype),d=s!=null,v=c!=null,m=u?Rr(u,!0):null,g=new Lo(n.shape,[f,l,h],a,i,d,m,v),x=[n,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,p)},e.prototype.multiply=function(t,n){if(t.dtype==="complex64"){var o=this.texData.get(t.dataId),a=this.texData.get(n.dataId),i=new Li(af,t.shape,n.shape),s=new Li(sf,t.shape,n.shape),u=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,a.complexTensors.real),this.makeComplexComponentTensorInfo(n,a.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.multiply(t,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,Wi,t.dtype);var f=new Dt(Wi,t.shape,n.shape);return this.compileAndRun(f,[t,n],t.dtype)},e.prototype.batchNormalization=function(t,n,o,a,i,s){var u=[t,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),O().getBool("WEBGL_PACK_NORMALIZATION")){var h=new of(t.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(h,u)}var f=new rf(t.shape,n.shape,o.shape,c,l,a);return this.compileAndRun(f,u)},e.prototype.localResponseNormalization4D=function(t,n,o,a,i){var s=O().getBool("WEBGL_PACK_NORMALIZATION")?new ep(t.shape,n,o,a,i):new Zf(t.shape,n,o,a,i);return this.compileAndRun(s,[t])},e.prototype.LRNGrad=function(t,n,o,a,i,s,u){var c=new tp(n.shape,a,i,s,u);return this.compileAndRun(c,[n,o,t])},e.prototype.tile=function(t,n){if(t.dtype==="string"){var o=this.readSync(t.dataId).map(function(i){return Br(i)});return lu(at(t.shape,t.dtype,o),n)}var a=new Ep(t.shape,n);return this.compileAndRun(a,[t])},e.prototype.pad=function(t,n,o){var a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new up(t.shape,n,o):new sp(t.shape,n,o);return this.compileAndRun(a,[t])},e.prototype.transpose=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.transpose(t,n);var o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Rp(t.shape,n):new Ip(t.shape,n);return this.compileAndRun(o,[t])},e.prototype.gather=function(t,n,o){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.gather(t,n,o);var a=new Ff(t.shape,n.size,o);return this.compileAndRun(a,[t,n])},e.prototype.batchToSpaceND=function(t,n,o){E(t.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(h,f){return h*f}),i=Gr(t.shape,n,a),s=Hr(i.length,n.length),u=qr(t.shape,n,a),c=Js(o,n.length),l=Qs(u,o,n.length);return t.reshape(i).transpose(s).reshape(u).slice(c,l)},e.prototype.spaceToBatchND=function(t,n,o){E(t.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var a=n.reduce(function(f,p){return f*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<t.shape.length;++s)i.push([0,0]);var u=t.pad(i),c=Gr(u.shape,n,a,!1),l=Hr(c.length,n.length,!1),h=qr(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},e.prototype.reduce=function(t,n,o){var a=t.shape[0],i=t.shape[1],s=Mo(i),u=new cp({windowSize:s,inSize:i,batchSize:a},n),c=this.compileAndRun(u,[t],o);return c.shape[1]===1?c:this.reduce(c,n,o)},e.prototype.argReduce=function(t,n,o){o===void 0&&(o=null);var a=t.shape[0],i=t.shape[1];o!=null&&(a=o.shape[0],i=o.shape[1]);var s=Mo(i),u=new Xh({windowSize:s,inSize:i,batchSize:a},n,o==null),c=[t];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(t,n,l)},e.prototype.argReducePacked=function(t,n,o){o===void 0&&(o=null);var a=o!=null?o.shape:t.shape,i=Mo(a[a.length-1]),s=new tf(a,i,n,o==null),u=o==null?[t]:[t,o],c=this.compileAndRun(s,u,"int32");return c.rank===t.rank?this.argReducePacked(t,n,c):c},e.prototype.sum=function(t,n){oe("sum",n,t.rank);var o=qt(t.shape,n),a=o[0],i=$(o[1]),s=t.as2D(-1,i),u=ko(t.dtype);return this.reduce(s,"sum",u).reshape(a)},e.prototype.prod=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.prod(t,n);var o=qt(t.shape,n),a=o[0],i=$(o[1]),s=t.as2D(-1,i),u=ko(t.dtype);return this.reduce(s,"prod",u).reshape(a)},e.prototype.unsortedSegmentSum=function(t,n,o){var a=0,i=Pe([a],t.rank),s=t;i!=null&&(s=t.transpose(i),a=Me(1,t.rank)[0]);var u=function(p,d,v){for(var m=[],g=p.length,x=0;x<g;x++)x!==d?m.push(p[x]):m.push(v);return m}(s.shape,a,o),c=$([s.shape[a]]),l=s.as2D(-1,c),h=ko(t.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return i!=null&&(f=f.transpose(Ia(i))),f},e.prototype.segOpCompute=function(t,n,o,a,i){var s=t.shape[0],u=t.shape[1],c=function(f,p){var d,v=!1;for(f<=tu?(d=f,v=!0):d=ra(f,Math.floor(Math.sqrt(f)));!v;)d>p||d===f?v=!0:d=ra(f,d+1);return d}(u,i),l=new yp({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[t,o],a);return h.shape[1]===i?h:(o=Vr(0,i).tile([u/c]),this.segOpCompute(h,n,o,a,i))},e.prototype.argMinMaxReduce=function(t,n,o){var a=[n];if(oe("arg"+o.charAt(0).toUpperCase()+o.slice(1),a,t.rank),!O().getBool("WEBGL_PACK_REDUCE")||t.rank<=2){var i=qt(t.shape,a),s=i[0],u=$(i[1]),c=t.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(t,o)},e.prototype.argMin=function(t,n){return this.argMinMaxReduce(t,n,"min")},e.prototype.argMax=function(t,n){return this.argMinMaxReduce(t,n,"max")},e.prototype.cumsum=function(t,n,o,a){if(n!==t.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(t.rank-1)+" but got axis="+n);var i=new wf(t.shape,o,a);return this.compileAndRun(i,[t])},e.prototype.equal=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Dt("return float(a == b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.notEqual=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Dt("return float(a != b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.less=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.less(t,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Dt("return float(a < b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.lessEqual=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Dt("return float(a <= b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.greater=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.greater(t,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Dt("return float(a > b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.greaterEqual=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Dt("return float(a >= b);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.logicalNot=function(t){var n=new it(t.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[t])},e.prototype.logicalAnd=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Dt("return float(a >= 1.0 && b >= 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.logicalOr=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Dt("return float(a >= 1.0 || b >= 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n],"bool")},e.prototype.select=function(t,n,o){var a=new xp(t.rank,n.shape,n.rank);return this.compileAndRun(a,[t,n,o],Gt(n.dtype,o.dtype))},e.prototype.where=function(t){zr("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=t.dataSync();return Fa(t.shape,n)},e.prototype.topk=function(t,n,o){return hu(t.dataSync(),t.shape,t.dtype,n)},e.prototype.min=function(t,n){oe("min",n,t.rank);var o=qt(t.shape,n),a=o[0],i=$(o[1]),s=t.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(a)},e.prototype.minimum=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.minimum(t,n);var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Dt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.mod=function(t,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Dt(`if (b == 0.0) return NAN;
  return mod(a, b);`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.max=function(t,n){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.max(t,n);oe("max",n,t.rank);var o=qt(t.shape,n),a=o[0],i=$(o[1]),s=t.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(a)},e.prototype.maximum=function(t,n){if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.maximum(t,n);var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Dt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.all=function(t,n){oe("all",n,t.rank);var o=qt(t.shape,n),a=o[0],i=$(o[1]),s=t.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(a)},e.prototype.any=function(t,n){oe("any",n,t.rank);var o=qt(t.shape,n),a=o[0],i=$(o[1]),s=t.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(a)},e.prototype.realDivide=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Dt(`
if (a == b) {
  return 1.0;
};
return a / b;`,t.shape,n.shape);return this.compileAndRun(o,[t,n],"float32")},e.prototype.floorDiv=function(t,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Dt(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,t.shape,n.shape);return this.compileAndRun(o,[t,n],"int32")},e.prototype.add=function(t,n){if(t.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(t,n,Oo);if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.add(t,n);var o=Gt(t.dtype,n.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,Oo,o);var a=new Dt(Oo,t.shape,n.shape);return this.compileAndRun(a,[t,n],o)},e.prototype.packedUnaryOp=function(t,n,o){var a=new $n(t.shape,n);return this.compileAndRun(a,[t],o)},e.prototype.packedBinaryOp=function(t,n,o,a,i){i===void 0&&(i=!1);var s=new ze(o,t.shape,n.shape,i);return this.compileAndRun(s,[t,n],a)},e.prototype.complexSeparableBinaryOp=function(t,n,o){var a=this,i=this.texData.get(t.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(f){var p=f[0],d=f[1],v=a.makeComplexComponentTensorInfo(t,p),m=a.makeComplexComponentTensorInfo(n,d),g=new Dt(o,t.shape,n.shape);return a.compileAndRun(g,[v,m],Gt(p.dtype,d.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},e.prototype.makeComplexComponentTensorInfo=function(t,n){return{dataId:n.dataId,dtype:n.dtype,shape:t.shape}},e.prototype.addN=function(t){if(t.length===1)return t[0];if(t.length>O().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(t.length/2),o=this.addN(t.slice(0,n)),a=this.addN(t.slice(n));return this.addN([o,a])}var i=t.map(function(c){return c.dtype}).reduce(function(c,l){return Gt(c,l)}),s=t.map(function(c){return c.shape}),u=O().getBool("WEBGL_PACK")?new Kh(t[0].shape,s):new jh(t[0].shape,s);return this.compileAndRun(u,t,i)},e.prototype.subtract=function(t,n){if(t.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(t,n,Bo);if(this.shouldExecuteOnCPU([t,n]))return this.cpuBackend.subtract(t,n);var o=Gt(t.dtype,n.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(t,n,Bo,t.dtype);var a=new Dt(Bo,t.shape,n.shape);return this.compileAndRun(a,[t,n],o)},e.prototype.pow=function(t,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Dt(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,t.shape,n.shape),a=Gt(t.dtype,n.dtype);return this.compileAndRun(o,[t,n],a)},e.prototype.ceil=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.ceil(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ji,t.dtype);var n=new it(t.shape,Ji);return this.compileAndRun(n,[t])},e.prototype.floor=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.floor(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Qi,t.dtype);var n=new it(t.shape,Qi);return this.compileAndRun(n,[t])},e.prototype.sign=function(t){var n=new it(t.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[t])},e.prototype.isNaN=function(t){var n=new it(t.shape,"return float(isnan(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.isInf=function(t){var n=new it(t.shape,"return float(isinf(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.isFinite=function(t){var n=new it(t.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[t],"bool")},e.prototype.round=function(t){var n=new it(t.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[t])},e.prototype.exp=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.exp(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Zi,t.dtype);var n=new it(t.shape,Zi);return this.compileAndRun(n,[t])},e.prototype.expm1=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.expm1(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,ts,t.dtype);var n=new it(t.shape,ts);return this.compileAndRun(n,[t])},e.prototype.softmax=function(t,n){var o=Lt([n],t.shape),a=this.max(t,o),i=ee(a.shape,o),s=this.subtract(t,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},e.prototype.log=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.log(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,t.dtype);var n=new it(t.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[t])},e.prototype.log1p=function(t){var n=new it(t.shape,"return log(1.0 + x);");return this.compileAndRun(n,[t])},e.prototype.sqrt=function(t){var n=new it(t.shape,"return sqrt(x);");return this.compileAndRun(n,[t])},e.prototype.rsqrt=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.rsqrt(t);var n=new it(t.shape,"return inversesqrt(x);");return this.compileAndRun(n,[t])},e.prototype.reciprocal=function(t){var n=new it(t.shape,"return 1.0 / x;");return this.compileAndRun(n,[t])},e.prototype.relu=function(t){var n;return n=O().getBool("WEBGL_PACK")?new $n(t.shape,bu):new it(t.shape,gu),this.compileAndRun(n,[t])},e.prototype.relu6=function(t){var n;return n=O().getBool("WEBGL_PACK")?new $n(t.shape,wu):new it(t.shape,yu),this.compileAndRun(n,[t])},e.prototype.prelu=function(t,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(mu,t.shape,n.shape):new Dt(vu,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.elu=function(t){if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Cu,t.dtype);var n=new it(t.shape,xu);return this.compileAndRun(n,[t])},e.prototype.eluDer=function(t,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,t.shape,n.shape):new Dt("return (b >= 1.0) ? a : a * (b + 1.0);",t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.selu=function(t){var n=new it(t.shape,Sp);return this.compileAndRun(n,[t])},e.prototype.int=function(t){var n=new it(t.shape,"return float(int(x));");return this.compileAndRun(n,[t],"int32")},e.prototype.clip=function(t,n,o){var a,i=(a=O().getBool("WEBGL_PACK_CLIP")?new cf(t.shape):new uf(t.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(a,[t],null,i)},e.prototype.abs=function(t){if(this.shouldExecuteOnCPU([t]))return this.cpuBackend.abs(t);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Yi,t.dtype);var n=new it(t.shape,Yi);return this.compileAndRun(n,[t])},e.prototype.complexAbs=function(t){var n=this.texData.get(t.dataId),o=new lf(t.shape),a=[this.makeComplexComponentTensorInfo(t,n.complexTensors.real),this.makeComplexComponentTensorInfo(t,n.complexTensors.imag)];return this.compileAndRun(o,a)},e.prototype.sigmoid=function(t){var n=new it(t.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[t])},e.prototype.softplus=function(t){var n=new it(t.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[t])},e.prototype.sin=function(t){var n=new it(t.shape,Dp);return this.compileAndRun(n,[t])},e.prototype.cos=function(t){var n=new it(t.shape,Ap);return this.compileAndRun(n,[t])},e.prototype.tan=function(t){var n=new it(t.shape,"return tan(x);");return this.compileAndRun(n,[t])},e.prototype.asin=function(t){var n=new it(t.shape,Tp);return this.compileAndRun(n,[t])},e.prototype.acos=function(t){var n=new it(t.shape,Np);return this.compileAndRun(n,[t])},e.prototype.atan=function(t){var n=new it(t.shape,Fp);return this.compileAndRun(n,[t])},e.prototype.atan2=function(t,n){var o=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,t.shape,n.shape):new Dt(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,t.shape,n.shape);return this.compileAndRun(o,[t,n])},e.prototype.sinh=function(t){var n=new it(t.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[t])},e.prototype.cosh=function(t){var n=new it(t.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[t])},e.prototype.tanh=function(t){var n=new it(t.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[t])},e.prototype.asinh=function(t){var n=new it(t.shape,Pp);return this.compileAndRun(n,[t])},e.prototype.acosh=function(t){var n=new it(t.shape,Mp);return this.compileAndRun(n,[t])},e.prototype.atanh=function(t){var n=new it(t.shape,Op);return this.compileAndRun(n,[t])},e.prototype.erf=function(t){var n=new it(t.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[t])},e.prototype.step=function(t,n){var o=new it(t.shape,function(a){return a===void 0&&(a=0),ye+`
    return x > 0.0 ? 1.0 : float(`+a+`);
  `}(n));return this.compileAndRun(o,[t])},e.prototype.conv2dByMatMul=function(t,n,o,a,i,s){var u=t.shape,c=this.texData.get(t.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,p=o.dataFormat==="channelsLast",d=(h===1||f===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(d||!O().getBool("WEBGL_LAZILY_UNPACK")||!O().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=p?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(t,[1,m,o.inChannels]),x=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),o.outShape)}var b=p?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:t.dataId,shape:[1,b,o.inChannels],dtype:t.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Cr(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),S=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:a,activation:i,preluActivationWeights:s}),k=this.texData.get(S.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=o.outShape,T.makeTensorFromDataId(S.dataId,o.outShape,S.dtype)},e.prototype.conv2dWithIm2Row=function(t,n,o,a,i,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,p=o.dataFormat==="channelsLast",d=u*c*l,v=f*h,m=[d,v],g=t.squeeze([0]),x=n.reshape([1,d,-1]),b=new Qf(m,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,m[0],m[1]]),w=a!=null,C=s!=null,S=i?Rr(i,!0):null,k=new Lo(y.shape,[1,v,o.outChannels],!0,!1,w,S,C),I=[y,x];a&&I.push(a),C&&I.push(s);var R=this.compileAndRun(k,I);return p?R.reshape([1,f,h,o.outChannels]):R.reshape([1,o.outChannels,f,h])},e.prototype.fusedConv2d=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights;if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,a,i,s,u);if(O().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,a,i,s,u);var c=i!=null,l=u!=null,h=s?Rr(s,!1):null,f=new zi(a,c,h,l),p=[n,o];return i&&p.push(i),u&&p.push(u),this.compileAndRun(f,p)},e.prototype.conv2d=function(t,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(t,n,o);if(O().getBool("WEBGL_CONV_IM2COL")&&t.shape[0]===1)return this.conv2dWithIm2Row(t,n,o);var a=new zi(o);return this.compileAndRun(a,[t,n])},e.prototype.conv2dDerInput=function(t,n,o){var a=new df(o);return this.compileAndRun(a,[t,n])},e.prototype.conv2dDerFilter=function(t,n,o){var a=new pf(o);return this.compileAndRun(a,[t,n])},e.prototype.fusedDepthwiseConv2D=function(t){var n,o=t.input,a=t.filter,i=t.convInfo,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=O().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?Rr(u,l):null,f=[o,a],p=s!=null,d=c!=null;return p&&f.push(s),d&&f.push(c),l?(n=new Vi(i,p,h,d),this.compileAndRun(n,f)):(n=new Ui(i,p,h,d),this.compileAndRun(n,f))},e.prototype.depthwiseConv2D=function(t,n,o){var a;return O().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(a=new Vi(o),this.compileAndRun(a,[t,n])):(a=new Ui(o),this.compileAndRun(a,[t,n]))},e.prototype.depthwiseConv2DDerInput=function(t,n,o){var a=new yf(o);return this.compileAndRun(a,[t,n])},e.prototype.depthwiseConv2DDerFilter=function(t,n,o){var a=new gf(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3d=function(t,n,o){var a=new xf(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3dDerInput=function(t,n,o){var a=new mf(o);return this.compileAndRun(a,[t,n])},e.prototype.conv3dDerFilter=function(t,n,o){var a=new vf(o);return this.compileAndRun(a,[t,n])},e.prototype.maxPool=function(t,n){var o=new Wo(n,"max",!1);return this.compileAndRun(o,[t])},e.prototype.avgPool=function(t,n){var o=new Wo(n,"avg",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.maxPoolBackprop=function(t,n,o,a){var i=new Wo(a,"max",!0),s=this.compileAndRun(i,[n]),u=new np(a),c=this.compileAndRun(u,[t,s],n.dtype);return s.dispose(),c},e.prototype.avgPoolBackprop=function(t,n,o){var a=new ef(o);return this.compileAndRun(a,[t],n.dtype)},e.prototype.cast=function(t,n){return iu(t,n,this)},e.prototype.unstack=function(t,n){for(var o=t.shape[n],a=new Array(t.rank-1),i=0,s=0;s<t.rank;s++)s!==n&&(a[i++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(t,u,c).reshape(a);return l},e.prototype.avgPool3d=function(t,n){var o=new zo(n,"avg",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.avgPool3dBackprop=function(t,n,o){var a=new nf(o);return this.compileAndRun(a,[t],n.dtype)},e.prototype.maxPool3d=function(t,n){var o=new zo(n,"max",!1);return this.compileAndRun(o,[t],"float32")},e.prototype.maxPool3dBackprop=function(t,n,o,a){var i=new zo(a,"max",!0),s=this.compileAndRun(i,[n]),u=new rp(a),c=this.compileAndRun(u,[t,s],n.dtype);return s.dispose(),c},e.prototype.reshape=function(t,n){var o=this.texData.get(t.dataId);if(o.isPacked&&!Cr(t.shape,n)&&(o.texture===null||!Cr(o.shape,n))){var a=this.packedReshape(t,n);return T.makeTensorFromDataId(a.dataId,a.shape,a.dtype)}return ha(t,n)},e.prototype.resizeBilinear=function(t,n,o,a){var i=O().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new pp(t.shape,n,o,a):new fp(t.shape,n,o,a);return this.compileAndRun(i,[t],"float32")},e.prototype.resizeBilinearBackprop=function(t,n,o){var a=new hp(t,n,o);return this.compileAndRun(a,[t])},e.prototype.resizeNearestNeighbor=function(t,n,o,a){var i=new vp(t.shape,n,o,a);return this.compileAndRun(i,[t])},e.prototype.resizeNearestNeighborBackprop=function(t,n,o){var a=new dp(t,n,o);return this.compileAndRun(a,[t])},e.prototype.multinomial=function(t,n,o,a){var i=n?t:Ge(t),s=i.shape[0],u=i.shape[1],c=new op(s,u,o),l=c.getCustomSetupFunc(a);return this.compileAndRun(c,[i],"int32",l)},e.prototype.oneHot=function(t,n,o,a){var i=new ap(t.size,n,o,a);return this.compileAndRun(i,[t])},e.prototype.diag=function(t){var n=new If(t.size);return this.compileAndRun(n,[t])},e.prototype.nonMaxSuppression=function(t,n,o,a,i){return zr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Ta(t.dataSync(),n.dataSync(),o,a,i)},e.prototype.cropAndResize=function(t,n,o,a,i,s){var u=new bf(t.shape,n.shape,a,i,s);return this.compileAndRun(u,[t,n,o],"float32")},e.prototype.depthToSpace=function(t,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var a=t.shape[0],i=o==="NHWC"?t.shape[1]:t.shape[2],s=o==="NHWC"?t.shape[2]:t.shape[3],u=o==="NHWC"?t.shape[3]:t.shape[1],c=i*n,l=s*n,h=u/(n*n),f=new Ef(o==="NHWC"?[a,c,l,h]:[a,h,c,l],n,o);return this.compileAndRun(f,[t])},e.prototype.split=function(t,n,o){return cu(t,n,o)},e.prototype.scatterND=function(t,n,o){var a=jr(0,t,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=[l/u,u],f=t.reshape([s,i]),p=n.reshape([s,u]);if(l===0)return ha(Ht([]),o);var d=q(0),v=new ji(s,i,f.rank,p.rank,c,h);return this.compileAndRun(v,[p,f,d]).reshape(o)},e.prototype.sparseToDense=function(t,n,o,a){var i=jr(0,t,o),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new ji(u,s,t.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,t,a]).reshape(o)},e.prototype.fft=function(t){return this.fftImpl(t,!1)},e.prototype.ifft=function(t){return this.fftImpl(t,!0)},e.prototype.fftImpl=function(t,n){var o=this.texData.get(t.dataId),a=new Hi(Af,t.shape,n),i=new Hi(Tf,t.shape,n),s=[this.makeComplexComponentTensorInfo(t,o.complexTensors.real),this.makeComplexComponentTensorInfo(t,o.complexTensors.imag)],u=this.compileAndRun(a,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(t.shape[0],t.shape[1]);return u.dispose(),c.dispose(),l},e.prototype.gatherND=function(t,n){var o=n.shape,a=o[o.length-1],i=Zs(t,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,a]),f=t.reshape([t.size/c,c]),p=new Pf(a,l,[u,c]);return this.compileAndRun(p,[f,h]).reshape(s)},e.prototype.fill=function(t,n,o){if((o=o||cr(n))==="string"){var a=Or(o,$(t));return a.fill(n),T.makeTensor(a,t,o,this)}var i=new Nf(t,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],o,s)},e.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(t.shape,1,t.dtype)},e.prototype.zerosLike=function(t){return this.fill(t.shape,t.dtype==="string"?"":0,t.dtype)},e.prototype.linspace=function(t,n,o){return su(t,n,o)},e.prototype.makeTensorInfo=function(t,n){var o=this.write(null,t,n);return this.texData.get(o).usage=null,{dataId:o,shape:t,dtype:n}},e.prototype.makeOutput=function(t,n){var o=this.makeTensorInfo(t,n).dataId;return T.makeTensorFromDataId(o,t,n,this)},e.prototype.unpackTensor=function(t){var n=new Lp(t.shape);return this.runWebGLProgram(n,[t],t.dtype)},e.prototype.packTensor=function(t){var n=new ip(t.shape);return this.runWebGLProgram(n,[t],t.dtype,null,!0)},e.prototype.packedReshape=function(t,n){var o=[Lr(t.shape)].concat(Wr(t.shape)),a={dtype:t.dtype,shape:o,dataId:t.dataId},i=[Lr(n)].concat(Wr(n)),s=new lp(i,o),u=this.runWebGLProgram(s,[a],t.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},e.prototype.decode=function(t){var n,o=this.texData.get(t),a=o.isPacked,i=o.shape,s=o.dtype,u=Po(i);return n=a?new _f(u):new Cf(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:t}],s,null,!0).dataId}},e.prototype.runWebGLProgram=function(t,n,o,a,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(t.outputShape,o),c=this.texData.get(u.dataId);if(t.packedOutput&&(c.isPacked=!0),t.outPackingScheme===nr.DENSE){var l=Jn(t.outputShape);c.texShape=l.map(function(b){return 2*b})}if(t.outTexUsage!=null&&(c.usage=t.outTexUsage),$(u.shape)===0)return c.values=tr(u.dtype,0),u;var h=[],f=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!t.packedInputs&&$(b.shape)<=O().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};t.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!t.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!Cr(y.shape,b.shape)){var w=b,C=b.shape;b.shape=y.shape,b=s.packedReshape(b,C),h.push(b),y=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var p,d={shape:u.shape,texData:c,isUniform:!1},v=function(b,y,w){var C="";y.concat(w).forEach(function(I){var R=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,N=I.isUniform?"uniform":I.texData.texShape;C+=I.shape+"_"+N+"_"+R});var S=b.userCode,k=b.constructor.name;return k+="_"+C+"_"+S}(t,f,d),m=this.getAndSaveBinary(v,function(){return function(b,y,w,C){var S=y.userCode,k=w.map(function(z,G){var H={logicalShape:z.shape,texShape:z.isUniform?null:z.texData.texShape,isUniform:z.isUniform,isPacked:!z.isUniform&&z.texData.isPacked,flatOffset:null};return z.texData!=null&&z.texData.slice!=null&&z.texData.slice.flatOffset>0&&(H.flatOffset=z.texData.slice.flatOffset),{name:y.variableNames[G],shapeInfo:H}}),I=k.map(function(z){return z.shapeInfo}),R={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},N=Yh(k,R,S,y.packedInputs),A=b.createProgram(N),L=null,M=b.getUniformLocation(A,"NAN",!1);O().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(A,"INFINITY",!1));for(var B={},U=0;U<y.variableNames.length;U++){var W=y.variableNames[U];B[W]=b.getUniformLocation(A,W,!1),B["offset"+W]=b.getUniformLocation(A,"offset"+W,!1)}return{program:y,source:N,webGLProgram:A,uniformLocations:B,inShapeInfos:I,outShapeInfo:R,infLoc:L,nanLoc:M}}(s.gpgpu,t,f,d)}),g=this.activeTimers!=null;if(g&&(p=this.startTimer()),function(b,y,w,C,S){qi(y.inShapeInfos,w),qi([y.outShapeInfo],[C]);var k=C.texData.texture,I=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(k,I[0],I[1]):b.setOutputMatrixTexture(k,I[0],I[1]),b.setProgram(y.webGLProgram),O().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(R,N){var A=y.program.variableNames[N],L=y.uniformLocations[A],M=y.uniformLocations["offset"+A];if(L!=null)if(R.isUniform)if($(R.shape)<2)b.gl.uniform1f(L,R.uniformValues[0]);else{var B=R.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else R.texData.slice!=null&&M!=null&&b.gl.uniform1i(M,R.texData.slice.flatOffset),b.setInputMatrixTexture(R.texData.texture,L,N)}),S!=null&&S(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,m,f,d,a),h.forEach(function(b){return s.disposeData(b.dataId)}),g&&(p=this.endTimer(p),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(p)})),!O().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},e.prototype.compileAndRun=function(t,n,o,a,i){i===void 0&&(i=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(t,n,o,a,i);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},e.prototype.getAndSaveBinary=function(t,n){return t in this.binaryCache||(this.binaryCache[t]=n()),this.binaryCache[t]},e.prototype.getTextureManager=function(){return this.textureManager},e.prototype.dispose=function(){var t=this;this.disposed||(O().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){t.gpgpu.deleteProgram(t.binaryCache[n].webGLProgram),delete t.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},e.prototype.floatPrecision=function(){var t=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=K(function(){if(!O().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=O().getBool("DEBUG");O().set("DEBUG",!1);var o=t.abs(q(1e-8)).dataSync()[0];if(O().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},e.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},e.prototype.uploadToGPU=function(t){var n,o=this.texData.get(t),a=o.shape,i=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=Ie());var p=o.texShape;if(p==null&&(p=ql(a,l),o.texShape=p),s!=null){var d=Po(a),v=void 0,m=p[1],g=p[0],x=s instanceof Uint8Array;l?(m=(n=hr(p[0],p[1]))[0],g=n[1],v=new Df(d,[g,m],x)):v=new Sf(d,[g,m],x);var b=this.makeTensorInfo([g,m],i);this.texData.get(b.dataId).usage=x?ie.PIXELS:ie.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),m,g,s);var y=this.runWebGLProgram(v,[b],i,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,f&&(this.uploadWaitMs+=Ie()-h)}else{var C=this.acquireTexture(p,c,i,l);o.texture=C}}},e.prototype.convertAndCacheOnCPU=function(t,n){var o=this.texData.get(t),a=o.dtype;return this.releaseGPUData(t),n!=null&&(o.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,a)),o.values},e.prototype.acquireTexture=function(t,n,o,a){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+i+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(t,n,a)},e.prototype.computeBytes=function(t,n){return t[0]*t[1]*Ms(n)},e}(ou);Vs()&&T.registerBackend("webgl",function(){return new zp},2);var Up=D({square_:function(r){var e=_(r,"x","square"),t=[e];return T.runKernelFunc(function(n,o){return o([e]),n.square(e)},{x:e},null,"Square",{},t,[])}}),or="SquaredDifference",_u=D({squaredDifference_:function(r,e){var t,n=_(r,"a","squaredDifference"),o=_(e,"b","squaredDifference");t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape);var a={a:n,b:o},i=[n,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},a,function(s,u){var c=u[0],l=u[1],h=q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},or,{},i,[])}}),Vp=D({abs_:function(r){var e=_(r,"x","abs");return e.dtype==="complex64"?T.runKernelFunc(function(t){return t.complexAbs(e)},{$x:e}):T.runKernelFunc(function(t,n){var o=t.abs(e);return n([e]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mul(o.toFloat().step(-1))}}},"Abs")}}),Gp=D({acos_:function(r){var e=_(r,"x","acos");return T.runKernelFunc(function(t,n){var o=t.acos(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Hp=D({acosh_:function(r){var e=_(r,"x","acosh");return T.runKernelFunc(function(t,n){var o=t.acosh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),qp=D({asin_:function(r){var e=_(r,"x","asin");return T.runKernelFunc(function(t,n){var o=t.asin(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),jp=D({asinh_:function(r){var e=_(r,"x","asinh");return T.runKernelFunc(function(t,n){var o=t.asinh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),Kp=D({atan_:function(r){var e=_(r,"x","atan");return T.runKernelFunc(function(t,n){var o=t.atan(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.toFloat().square().add(1))}}})}}),Xp=D({atanh_:function(r){var e=_(r,"x","atanh");return T.runKernelFunc(function(t,n){var o=t.atanh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(q(1).sub(o.toFloat().square()))}}})}}),Yp=D({ceil_:function(r){var e=_(r,"x","ceil");return T.runKernelFunc(function(t){return t.ceil(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Ba=D({clipByValue_:function(r,e,t){var n=_(r,"x","clipByValue");E(e<=t,function(){return"Error in clip: min ("+e+") must be less than or equal to max ("+t+")."});var o=[n],a={min:e,max:t};return T.runKernelFunc(function(i,s){var u=i.clip(n,e,t);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(e).logicalAnd(u.lessEqual(t)),mt(i))}}},"ClipByValue",a,o)}}),$p=D({cos_:function(r){var e=_(r,"x","cos"),t=[e];return T.runKernelFunc(function(n,o){var a=n.cos(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return a.toFloat().sin().neg().mul(n)}}},"Cos",{},t)}}),Jp=D({cosh_:function(r){var e=_(r,"x","cosh");return T.runKernelFunc(function(t,n){var o=t.cosh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(t)}}})}}),Qp=D({erf_:function(r){var e=_(r,"x","erf");return E(e.dtype==="int32"||e.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),e.dtype==="int32"&&(e=e.toFloat()),T.runKernelFunc(function(t,n){var o=t.erf(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),pa=D({exp_:function(r){var e=_(r,"x","exp");return T.runKernelFunc(function(t,n){var o=t.exp(e);return n([o]),o},{x:e},function(t,n){return{x:function(){return t.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),Zp=D({expm1_:function(r){var e=_(r,"x","expm1");return T.runKernelFunc(function(t,n){var o=t.expm1(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.exp())}}})}}),td=D({floor_:function(r){var e=_(r,"x","floor");return T.runKernelFunc(function(t){return t.floor(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),ed=D({log_:function(r){var e=_(r,"x","log"),t=[e];return T.runKernelFunc(function(n,o){var a=n.log(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return n.div(a.toFloat())}}},"Log",{},t)}}),nd=D({log1p_:function(r){var e=_(r,"x","log1p");return T.runKernelFunc(function(t,n){var o=t.log1p(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.add(1))}}})}}),rd=D({logSigmoid_:function(r){var e=_(r,"x","logSigmoid");return T.runKernelFunc(function(t,n){var o=t.softplus(e.neg()).neg();return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.neg().sigmoid())}}})}}),$r=D({neg_:function(r){var e=_(r,"x","neg"),t=[e];return T.runKernelFunc(function(n){return n.neg(e)},{x:e},function(n){return{x:function(){return n.neg()}}},"Neg",{},t)}}),od=D({reciprocal_:function(r){var e=_(r,"x","reciprocal");return T.runKernelFunc(function(t,n){var o=t.reciprocal(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.square().neg())}}})}}),ad=D({round_:function(r){var e=_(r,"x","round");return T.runKernelFunc(function(t){return t.round(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),Eu=D({rsqrt_:function(r){var e=_(r,"x","rsqrt"),t=[e];return T.runKernelFunc(function(n,o){var a=n.rsqrt(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return n.div(a.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},t)}}),Iu=D({sigmoid_:function(r){var e=_(r,"x","sigmoid");return T.runKernelFunc(function(t,n){var o=t.sigmoid(e);return n([o]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),id=D({sign_:function(r){var e=_(r,"x","sign");return T.runKernelFunc(function(t){return t.sign(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),sd=D({isNaN_:function(r){var e=_(r,"x","isNaN");return T.runKernelFunc(function(t){return t.isNaN(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),ud=D({isInf_:function(r){var e=_(r,"x","isInf");return T.runKernelFunc(function(t){return t.isInf(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),cd=D({isFinite_:function(r){var e=_(r,"x","isFinite");return T.runKernelFunc(function(t){return t.isFinite(e)},{$x:e},function(t){return{$x:function(){return mt(t)}}})}}),ld=D({sin_:function(r){var e=_(r,"x","sin"),t=[e];return T.runKernelFunc(function(n,o){var a=n.sin(e);return o([e]),a},{x:e},function(n,o){var a=o[0];return{x:function(){return a.toFloat().cos().mul(n)}}},"Sin",{},t)}}),hd=D({sinh_:function(r){var e=_(r,"x","sinh");return T.runKernelFunc(function(t,n){var o=t.sinh(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(t)}}})}}),fd=D({softplus_:function(r){var e=_(r,"x","softplus");return T.runKernelFunc(function(t,n){var o=t.softplus(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.mul(o.sigmoid())}}})}}),pd=D({sqrt_:function(r){var e=_(r,"x","sqrt");return T.runKernelFunc(function(t,n){var o=t.sqrt(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.toFloat().sqrt().mul(2))}}})}}),dd=D({step_:function(r,e){e===void 0&&(e=0);var t=_(r,"x","step");return T.runKernelFunc(function(n){return n.step(t,e)},{$x:t},function(n){return{$x:function(){return mt(n)}}})}}),vd=D({tan_:function(r){var e=_(r,"x","tan");return T.runKernelFunc(function(t,n){var o=t.tan(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return t.div(o.cos().square())}}})}}),md=D({tanh_:function(r){var e=_(r,"x","tanh");return T.runKernelFunc(function(t,n){var o=t.tanh(e);return n([o]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return q(1).sub(o.square()).mulStrict(t)}}},"Tanh",{},null,[!0])}});function Ru(r,e,t,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(e,"mean","batchNorm"),l=_(t,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),pr(u,c,l,s,i,a)}function ku(r,e,t,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(e,"mean","batchNorm"),l=_(t,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),pr(u,c,l,s,i,a)}function Su(r,e,t,n,o,a){var i,s,u=_(r,"x","batchNorm"),c=_(e,"mean","batchNorm"),l=_(t,"variance","batchNorm");return o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),pr(u,c,l,s,i,a)}function pr(r,e,t,n,o,a){a==null&&(a=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(e,"mean","batchNorm"),h=_(t,"variance","batchNorm");o!=null&&(i=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,i];return T.runKernelFunc(function(p,d){var v=p.batchNormalization(u,kr(l),kr(h),a,kr(i),kr(s));return d([c,l,h,i]),v},{x:c,mean:l,variance:h,scale:i,offset:s},function(p,d){var v=d,m=v[0],g=v[1],x=v[2],b=v[3],y=b??q(1),w=Ot(g.shape,u.shape),C=[];if(g.rank===1){for(var S=0;S<u.shape.length-1;++S)C.push(u.shape[S]);C.push(1)}var k=m.sub(g),I=p.mul(y),R=Eu(x.add(q(a))),N=R.mul(R).mul(R).mul(q(-.5));return{x:function(){return g.rank===1?p.mul(Mn(R.as4D(1,1,1,g.shape[0]),C)).mul(y).reshape(m.shape):p.mul(R).mul(y).reshape(m.shape)},mean:function(){var A=R.mul(q(-1)).mul(I);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},variance:function(){var A=N.mul(k).mul(I);return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)},scale:function(){var A=k.mul(R),L=p.mul(A);return g.rank===1&&(L=L.sum(w)),L.reshape(g.shape)},offset:function(){var A=p;return g.rank===1&&(A=A.sum(w)),A.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:a},f).reshape(c.shape)}function kr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function io(){Gs("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var gd=D({batchNormalization2d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),io(),Ru(r,e,t,a,o,n)}}),yd=D({batchNormalization3d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),io(),ku(r,e,t,a,o,n)}}),xd=D({batchNormalization4d_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),io(),Su(r,e,t,a,o,n)}}),bd=D({batchNormalization_:function(r,e,t,n,o,a){return n===void 0&&(n=.001),io(),pr(r,e,t,a,o,n)}}),Du=D({batchNorm_:pr}),wd=D({batchNorm2d_:Ru}),Cd=D({batchNorm3d_:ku}),_d=D({batchNorm4d_:Su}),so=D({logicalAnd_:function(r,e){var t=_(r,"a","logicalAnd","bool"),n=_(e,"b","logicalAnd","bool");return ht(t.shape,n.shape),T.runKernelFunc(function(o){return o.logicalAnd(t,n)},{a:t,b:n},null,"LogicalAnd")}}),Ed=D({logicalNot_:function(r){var e=_(r,"x","logicalNot","bool");return T.runKernelFunc(function(t){return t.logicalNot(e)},{$x:e})}}),Au=D({logicalOr_:function(r,e){var t=_(r,"a","logicalOr","bool"),n=_(e,"b","logicalOr","bool");return ht(t.shape,n.shape),T.runKernelFunc(function(o){return o.logicalOr(t,n)},{$a:t,$b:n})}}),Id=D({logicalXor_:function(r,e){var t=_(r,"a","logicalXor","bool"),n=_(e,"b","logicalXor","bool");return ht(t.shape,n.shape),Au(r,e).logicalAnd(so(r,e).logicalNot())}}),mn=D({where_:function(r,e,t){var n=_(e,"a","where"),o=_(t,"b","where"),a=_(r,"condition","where","bool");return xt(n.shape,o.shape,"Error in where: "),a.rank===1?E(a.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):xt(a.shape,o.shape,"Error in where: "),T.runKernelFunc(function(i,s){var u=i.select(a,n,o);return s([a]),u},{$condition:a,$a:n,$b:o},function(i,s){var u=s[0];return{$condition:function(){return mt(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),Tu=function(r){return X(this,void 0,void 0,function(){var e,t,n;return Y(this,function(o){switch(o.label){case 0:return[4,(e=_(r,"condition","whereAsync","bool")).data()];case 1:return t=o.sent(),n=Fa(e.shape,t),r!==e&&e.dispose(),[2,n]}})})},ct=D({add_:function(r,e){var t,n=_(r,"a","add"),o=_(e,"b","add");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i){return i.add(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ot(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ot(o.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Rd=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var e=r.map(function(o,a){return _(o,"tensors"+a,"addN")}),t=e[0];e.forEach(function(o){if(o.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(function(o){if(!zt(o.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=e;return T.runKernelFunc(function(o){return o.addN(e)},n,function(o){var a={};return e.forEach(function(i,s){a[s]=function(){return o.clone()}}),a},"AddN")}}),kd=D({addStrict_:function(r,e){var t=_(r,"a","addStrict"),n=_(e,"b","addStrict");return xt(t.shape,n.shape,"Error in addStrict: "),t.add(n)}}),Sd=D({atan2_:function(r,e){var t,n=_(r,"a","atan2"),o=_(e,"b","atan2");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=ct(u.square(),c.square()),h=i.mul(c.div(l)),f=Ot(u.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=ct(u.square(),c.square()),h=$r(i.mul(u.div(l))),f=Ot(c.shape,a);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),de=D({div_:function(r,e){var t,n=_(r,"a","div"),o=_(e,"b","div");if(t=kt(n,o),n=t[0],o=t[1],n.dtype==="int32"&&o.dtype==="int32")return Nu(n,o);var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Ot(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ot(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Dd=D({divNoNan_:function(r,e){var t,n=_(r,"a","div"),o=_(e,"b","div");n=(t=kt(n,o))[0],o=t[1];var a=de(n,o),i=mt(a),s=o.equal(i);return mn(s,i,a)}}),Ad=D({divStrict_:function(r,e){var t=_(r,"a","div"),n=_(e,"b","div");return xt(t.shape,n.shape,"Error in divideStrict: "),t.div(n)}}),Nu=D({floorDiv_:function(r,e){var t,n=_(r,"a","floorDiv"),o=_(e,"b","floorDiv");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Ot(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ot(c.shape,a);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),La=D({maximum_:function(r,e){var t,n=_(r,"a","maximum"),o=_(e,"b","maximum");return t=kt(n,o),n=t[0],o=t[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),ht(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.maximum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.greaterEqual(u).toFloat())},b:function(){return a.mul(s.less(u).toFloat())}}},"Maximum")}}),Td=D({maximumStrict_:function(r,e){var t=_(r,"a","maximumStrict"),n=_(e,"b","maximumStrict");return xt(t.shape,n.shape,"Error in maximumStrict: "),t.maximum(n)}}),Fu=D({minimum_:function(r,e){var t,n=_(r,"a","minimum"),o=_(e,"b","minimum");return t=kt(n,o),n=t[0],o=t[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),ht(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.minimum(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return a.mul(s.lessEqual(u).toFloat())},b:function(){return a.mul(s.greater(u).toFloat())}}},"Minimum")}}),Nd=D({minimumStrict_:function(r,e){var t=_(r,"a","minimumStrict"),n=_(e,"b","minimumStrict");return xt(t.shape,n.shape,"Error in minimumStrict: "),t.minimum(n)}}),Fd=D({mod_:function(r,e){var t,n=_(r,"a","mod"),o=_(e,"b","mod");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Ot(u.shape,a);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=Ot(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Pd=D({modStrict_:function(r,e){var t=_(r,"a","modStrict"),n=_(e,"b","modStrict");return xt(t.shape,n.shape,"Error in modStrict: "),t.mod(n)}}),Yt=D({mul_:function(r,e){var t,n=_(r,"a","mul"),o=_(e,"b","mul");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i,s){var u=i.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=Ot(u.shape,a);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Ot(c.shape,a);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Md=D({mulStrict_:function(r,e){var t=_(r,"a","mul"),n=_(e,"b","mul");return xt(t.shape,n.shape,"Error in multiplyStrict: "),t.mul(n)}}),Jr=D({pow_:function(r,e){var t,n=_(r,"base","pow"),o=_(e,"exp","pow");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape),i=[n,o];return T.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),p=s.mul(f.mul(c.pow(f.sub(q(1))))),d=Ot(c.shape,a);return d.length>0&&(p=p.sum(d)),p.reshape(c.shape)},b:function(){var f=c.greater(0),p=c.log().where(f,mt(c)),d=s.mul(h.mul(p)),v=Ot(l.shape,a);return v.length>0&&(d=d.sum(v)),d.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Od=D({powStrict_:function(r,e){return xt(r.shape,e.shape,"Error in powStrict: "),r.pow(e)}}),Bd=D({squaredDifferenceStrict_:function(r,e){var t=_(r,"a","squaredDifferenceStrict"),n=_(e,"b","squaredDifferenceStrict");return xt(t.shape,n.shape,"Error in squaredDifferenceStrict: "),t.squaredDifference(n)}}),Bt=D({sub_:function(r,e){var t,n=_(r,"a","sub"),o=_(e,"b","sub");t=kt(n,o),n=t[0],o=t[1];var a=ht(n.shape,o.shape);return T.runKernelFunc(function(i){return i.subtract(n,o)},{a:n,b:o},function(i){return{a:function(){var s=i,u=Ot(n.shape,a);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Ot(o.shape,a);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),Ld=D({subStrict_:function(r,e){var t=_(r,"a","subStrict"),n=_(e,"b","subStrict");return xt(t.shape,n.shape,"Error in subStrict: "),t.sub(n)}}),Pu=D({equal_:function(r,e){var t,n=_(r,"a","equal"),o=_(e,"b","equal");return t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape),T.runKernelFunc(function(a){return a.equal(n,o)},{$a:n,$b:o})}}),Wd=D({equalStrict_:function(r,e){var t=_(r,"a","equalStrict"),n=_(e,"b","equalStrict");return xt(t.shape,n.shape,"Error in equalStrict: "),t.equal(n)}}),zd=D({greater_:function(r,e){var t,n=_(r,"a","greater"),o=_(e,"b","greater");return t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape),T.runKernelFunc(function(a){return a.greater(n,o)},{a:n,b:o},null,"Greater")}}),Mu=D({greaterEqual_:function(r,e){var t,n=_(r,"a","greaterEqual"),o=_(e,"b","greaterEqual");return t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.greaterEqual(n,o);return i([n,o]),s},{a:n,b:o},function(a,i){var s=i[0],u=i[1];return{a:function(){return mt(s)},b:function(){return mt(u)}}},"GreaterEqual")}}),Ud=D({greaterEqualStrict_:function(r,e){var t=_(r,"a","greaterEqualStrict"),n=_(e,"b","greaterEqualStrict");return xt(t.shape,n.shape,"Error in greaterEqualStrict: "),t.greaterEqual(n)}}),Vd=D({greaterStrict_:function(r,e){var t=_(r,"a","greaterStrict"),n=_(e,"b","greaterStrict");return xt(t.shape,n.shape,"Error in greaterStrict: "),t.greater(n)}}),Gd=D({less_:function(r,e){var t,n=_(r,"a","less"),o=_(e,"b","less");return t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape),T.runKernelFunc(function(a){return a.less(n,o)},{a:n,b:o},null,"Less")}}),Hd=D({lessEqual_:function(r,e){var t,n=_(r,"a","lessEqual"),o=_(e,"b","lessEqual");return t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape),T.runKernelFunc(function(a,i){var s=a.lessEqual(n,o);return i([n,o]),s},{a:n,b:o},null,"LessEqual")}}),qd=D({lessEqualStrict_:function(r,e){var t=_(r,"a","lessEqualStrict"),n=_(e,"b","lessEqualStrict");return xt(t.shape,n.shape,"Error in lessEqualStrict: "),t.lessEqual(n)}}),jd=D({lessStrict_:function(r,e){var t=_(r,"a","lessStrict"),n=_(e,"b","lessStrict");return xt(t.shape,n.shape,"Error in lessStrict: "),t.less(n)}}),Kd=D({notEqual_:function(r,e){var t,n=_(r,"a","notEqual"),o=_(e,"b","notEqual");return t=kt(n,o),n=t[0],o=t[1],ht(n.shape,o.shape),T.runKernelFunc(function(a){return a.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),Xd=D({notEqualStrict_:function(r,e){var t=_(r,"a","notEqualStrict"),n=_(e,"b","notEqualStrict");return xt(t.shape,n.shape,"Error in notEqualStrict: "),t.notEqual(n)}});function es(r,e){for(var t=[],n=r;n<e;++n)t.push(n);return t}function ns(r){for(var e=[],t=0;t<r.length;++t)for(var n=0;n<r[t].length;++n)e.push(r[t][n]);return e}var Wa=D({gather_:function(r,e,t){t===void 0&&(t=0);var n=_(r,"x","gather"),o=_(e,"indices","gather","int32");t=Lt(t,n.shape)[0];var a=function(i,s,u){for(var c=i.shape[u],l=[],h=1,f=1,p=0;p<u;p++)l.push(i.shape[p]),h*=i.shape[p];for(p=0;p<s.rank;p++)l.push(s.shape[p]);for(p=u+1;p<i.rank;p++)l.push(i.shape[p]),f*=i.shape[p];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(n,o,t);return T.runKernelFunc(function(i,s){var u=i.gather(n,o.flatten(),t);return s([o]),u},{x:n,indices:o},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,t),f=h.length,p=c.slice(t,c.length).slice(1),d=p.length,v=es(0,f),m=es(f+1,f+1+d),g=ns([h,[l],p]),x=i.reshape(g),b=u.reshape([l]),y=ns([[f],v,m]),w=x.transpose(y),C=Ou(w,b,n.shape[t]),S=Ia(y);return C=C.transpose(S)},indices:function(){return u}}},"Gather",{axis:t}).reshape(a.outputShape)}}),Ou=D({unsortedSegmentSum_:function(r,e,t){var n=_(r,"x","unsortedSegmentSum"),o=_(e,"segmentIds","unsortedSegmentSum","int32");return E(Tt(t),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(a,i){var s=a.unsortedSegmentSum(n,o,t);return i([o]),s},{$x:n},function(a,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=La(c,mt(c)),h=Wa(u,l),f=Mu(c,q(0,"int32")),p=h.rank-f.rank,d=0;d<p;++d)f=le(f,d+1);f=so(f,jn(h.shape,"bool"));var v=mt(h);return mn(f,h,v)}(a,s)}}})}}),Yd=function(r,e,t){return X(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,p,d,v;return Y(this,function(m){switch(m.label){case 0:for(n=_(r,"tensor","boolMask"),o=_(e,"mask","boolMask","bool"),a=t??0,i=o.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),xt(s.slice(a,a+i),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=a;c<a+i;c++)u*=s[c];return l=s.slice(0,a).concat([u],s.slice(a+i)),h=n.reshape(l),f=o.reshape([-1]),[4,Tu(f)];case 1:return p=m.sent(),d=p.squeeze([1]),v=Wa(h,d,a),r!==n&&n.dispose(),e!==o&&o.dispose(),d.dispose(),h.dispose(),f.dispose(),p.dispose(),[2,v]}})})};function Bu(r,e,t,n,o,a,i){a===void 0&&(a="NHWC"),E(r.length===e.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+e.rank+") must match"});var s=r,u=e,c=!1;e.rank===3&&(c=!0,u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(t.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+t.rank});var l=a==="NHWC"?s[3]:s[1],h=a==="NHWC"?u.shape[3]:u.shape[1];E(l===t.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+t.shape[2]+"."}),E(h===t.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+t.shape[3]+"."}),i!=null&&E(Tt(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var f=Aa(a),p=bn(s,t.shape,n,1,o,i,!1,f),d=T.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,t,p);return m([t,u]),g},{dy4D:u,filter:t},function(v,m){var g=m[0],x=m[1];return{dy4D:function(){return pe(v,g,n,o,a,1,i)},filter:function(){return za(v,x,g.shape,n,o,a,i)}}});return c?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}function Vo(r){var e=function(a){return typeof a=="number"?[a,a,a]:a.length===2?[a[0],a[1],1]:a}(r),t=e[0],n=e[1],o=e[2];return t===1&&n===1&&o===1}function Lu(r,e,t,n,o){E(r.length===e.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+e.rank+") must match"});var a=r,i=e,s=!1;e.rank===4&&(s=!0,i=e.as5D(1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]),a=[1,r[0],r[1],r[2],r[3]]);var u=a[4],c=i.shape[4];E(a.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+a.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(t.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+t.rank}),E(u===t.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+t.shape[3]+"."}),E(c===t.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+t.shape[4]+"."});var l=Xr(a,t.shape,n,1,o),h=T.runKernelFunc(function(f){return f.conv3dDerInput(i,t,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var $d=D({conv1d_:function(r,e,t,n,o,a,i){o===void 0&&(o="NWC"),a===void 0&&(a=1);var s=_(r,"x","conv1d"),u=_(e,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Tt(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(ne(t,a),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+t+" and dilation '"+a+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),p=pe(f,h,[1,t],n,"NHWC",[1,a],i);return l?p.as2D(p.shape[2],p.shape[3]):p.as3D(p.shape[0],p.shape[2],p.shape[3])}}),pe=D({conv2d_:function(r,e,t,n,o,a,i){o===void 0&&(o="NHWC"),a===void 0&&(a=[1,1]);var s=_(r,"x","conv2d"),u=_(e,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Tt(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(ne(t,a),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"});var f=Aa(o),p=bn(c.shape,u.shape,t,a,n,i,!1,f),d=[u,c],v=T.runKernelFunc(function(m,g){var x=m.conv2d(c,u,p);return g([u,c]),x},{x:c,filter:u},function(m,g){var x=g,b=x[0],y=x[1];return E(Hn(a),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"}),{x:function(){return Wu(y.shape,m,b,t,n,o)},filter:function(){return za(y,m,b.shape,t,n,o)}}},"Conv2D",p,d);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Jd=D({conv3d_:function(r,e,t,n,o,a){o===void 0&&(o="NDHWC"),a===void 0&&(a=[1,1,1]);var i=_(r,"x","conv3d"),s=_(e,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(f,p){return Vo(f)||Vo(p)}(t,a),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Xr(u.shape,s.shape,t,a,n),h=T.runKernelFunc(function(f,p){var d=f.conv3d(u,s,l);return p([u,s]),d},{x:u,$filter:s},function(f,p){E(Vo(a),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+a+"'"});var d=p[0],v=p[1];return{x:function(){return Lu(d.shape,f,v,t,n)},$filter:function(){return function(m,g,x,b,y){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),E(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),E(C.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+x[4]+")."});var S=Xr(w.shape,x,b,1,y);return T.runKernelFunc(function(k){return k.conv3dDerFilter(w,C,S)},{x5D:w,dy5D:C})}(d,f,v.shape,t,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),za=D({conv2dDerFilter_:function(r,e,t,n,o,a,i){a===void 0&&(a="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=e;u.rank===3&&(u=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(t.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+t+"."});var c=a==="NHWC"?s.shape[3]:s.shape[1],l=a==="NHWC"?u.shape[3]:u.shape[1];E(c===t[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+t[2]+"."}),E(l===t[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+t[3]+")."}),i!=null&&E(Tt(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var h=Aa(a),f=bn(s.shape,t,n,1,o,i,!1,h);return T.runKernelFunc(function(p){return p.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),Wu=D({conv2dDerInput_:Bu}),uo=D({depthwiseConv2d_:function(r,e,t,n,o,a,i){a===void 0&&(a=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(e,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),a==null&&(a=[1,1]),E(ne(t,a),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+a+"'"}),i!=null&&E(Tt(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=bn(c.shape,u.shape,t,a,n,i,!0),f=[c,u],p=T.runKernelFunc(function(d,v){var m=d.depthwiseConv2D(c,u,h);return v([c,u]),m},{x:c,filter:u},function(d,v){E(Hn(a),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+a+"'"});var m=v[0],g=v[1];return{x:function(){return zu(m.shape,d,g,h)},filter:function(){return Uu(m,d,g.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}}),zu=D({depthwiseConv2dDerInput_:function(r,e,t,n){var o=e,a=!1;e.rank===3&&(a=!0,o=e.as4D(1,e.shape[0],e.shape[1],e.shape[2]));var i=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,t,n)},{dy4D:o});return a?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Uu=D({depthwiseConv2dDerFilter_:function(r,e,t,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=e;return a.rank===3&&(a=e.as4D(1,e.shape[0],e.shape[1],e.shape[2])),T.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(o,a,n)},{x4D:o,dy4D:a})}}),Ua=D({separableConv2d_:function(r,e,t,n,o,a,i){a===void 0&&(a=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(e,"depthwiseFilter","separableConv2d"),c=_(t,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],p=u.shape[3];E(c.shape[2]===f*p,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*p+", but got "+c.shape[2]+"."});var d=uo(l,u,n,o,i,a),v=pe(d,c,1,"valid",i);return h?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Qd=D({conv2dTranspose_:function(r,e,t,n,o,a){return Bu(t,_(r,"x","conv2dTranspose"),_(e,"filter","conv2dTranspose"),n,o,"NHWC",a)}}),Zd=D({conv3dTranspose_:function(r,e,t,n,o){return Lu(t,_(r,"x","conv3dTranspose"),_(e,"filter","conv3dTranspose"),n,o)}}),co=D({matMul_:function(r,e,t,n){var o;t===void 0&&(t=!1),n===void 0&&(n=!1);var a=_(r,"a","matMul"),i=_(e,"b","matMul");o=kt(a,i),a=o[0],i=o[1];var s=t?a.shape[a.rank-2]:a.shape[a.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=t?a.shape[a.rank-1]:a.shape[a.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=a.shape.slice(0,-2),f=i.shape.slice(0,-2),p=$(h),d=$(f);E(a.rank>=2&&i.rank>=2&&a.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+a.rank+" and "+i.rank+"."}),E(zt(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+a.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+a.shape+" and "+i.shape+" and transposeA="+t+" and transposeB="+n+" must match."});var v=a.shape.slice(0,-2).concat([c,l]),m=t?a.as3D(p,s,c):a.as3D(p,c,s),g=n?i.as3D(d,l,u):i.as3D(d,u,l),x={transposeA:t,transposeB:n};return T.runKernelFunc(function(b,y){var w=b.batchMatMul(m,g,t,n);return y([m,g]),w},{a:m,b:g},function(b,y){var w=y,C=w[0],S=w[1];return t||n?!t&&n?{a:function(){return b.matMul(S,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:t&&!n?{a:function(){return S.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return S.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(S,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(v)}}),tv=D({dot_:function(r,e){var t=_(r,"t1","dot"),n=_(e,"t2","dot");E(!(t.rank!==1&&t.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+t.rank+" and "+n.rank+"."});var o=t.rank===1?t.size:t.shape[1],a=n.rank===1?n.size:n.shape[0];return E(o===a,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+a+"."}),t.rank===1&&n.rank===1?t.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():t.rank===1&&n.rank===2?t.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():t.rank===2&&n.rank===1?t.matMul(n.as2D(-1,1)).as1D():t.matMul(n.as2D(n.shape[0],n.shape[1]))}}),ev=D({outerProduct_:function(r,e){var t=_(r,"v1","outerProduct"),n=_(e,"v2","outerProduct");return E(t.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+t.rank+" and "+n.rank+"."}),t.as2D(-1,1).matMul(n.as2D(1,-1))}}),dr=D({reverse_:function(r,e){var t=_(r,"x","reverse");if(t.rank===0)return t.clone();var n=Lt(e,t.shape);return T.runKernelFunc(function(o){return o.reverse(t,n)},{$x:t},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(t)}}),nv=D({reverse1d_:function(r){var e=_(r,"x","reverse");return E(e.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+e.rank+"."}),dr(e,0)}}),rv=D({reverse2d_:function(r,e){var t=_(r,"x","reverse");return E(t.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+t.rank+"."}),dr(t,e)}}),ov=D({reverse3d_:function(r,e){var t=_(r,"x","reverse");return E(t.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+t.rank+"."}),dr(t,e)}}),av=D({reverse4d_:function(r,e){var t=_(r,"x","reverse");return E(t.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+t.rank+"."}),dr(t,e)}});function Vu(r,e,t,n,o,a){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(ne(t,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+n+"'"}),a!=null&&E(Tt(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=rr(s.shape,e,t,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&zt(c.inShape,c.outShape))return i.clone();var l=[s],h=T.runKernelFunc(function(f,p){var d=f.maxPool(s,c);return p([s,d]),d},{x:s},function(f,p){var d=p[0],v=p[1];return{x:function(){return function(m,g,x,b,y,w,C,S){var k=_(m,"dy","maxPoolBackprop"),I=_(g,"input","maxPoolBackprop"),R=_(x,"output","maxPoolBackprop");E(I.rank===k.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+k.rank+")"}),E(ne(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."});var N=rr(I.shape,b,y,w,C,S);return T.runKernelFunc(function(A){return A.maxPoolBackprop(k,I,R,N)},{$dy:k,$input:I})}(f,d,v,e,t,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function Gu(r,e,t,n,o,a){var i=_(r,"x","avgPool","float32");E(ne(t,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),a!=null&&E(Tt(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var c=rr(s.shape,e,t,n,o,a);if(c.filterWidth===1&&c.filterHeight===1&&zt(c.inShape,c.outShape))return i.clone();var l=T.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,p,d,v,m,g){var x=_(f,"dy","avgPoolBackprop"),b=_(p,"input","avgPoolBackprop");E(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),E(ne(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var y=b,w=x,C=!1;b.rank===3&&(C=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var S=rr(y.shape,d,v,m,g),k=T.runKernelFunc(function(I){return I.avgPoolBackprop(w,y,S)},{dy4D:w,input4D:y});return C?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(h,s,e,t,n,o)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Wt=D({maxPool_:function(r,e,t,n,o){return Vu(r,e,t,1,n,o)}}),vr=D({avgPool_:function(r,e,t,n,o){return Gu(r,e,t,1,n,o)}}),iv=D({pool_:function(r,e,t,n,o,a){o==null&&(o=[1,1]),a==null&&(a=1),n===0&&(n="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(ne(a,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+a+" and dilations '"+o+"'"});var c,l=rr(s.shape,e,a,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var C=y.map(function(I,R){return I+(I-1)*(w[R]-1)}).map(function(I){return I-1}),S=C.map(function(I){return Math.floor(I/2)}),k=C.map(function(I,R){return I-S[R]});return C.map(function(I,R){return[S[R],k[R]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,p=function(y,w,C){var S=C.map(function(M){return M[0]}),k=C.map(function(M){return M[1]}),I=y.concat(S,k),R=w.map(function(M,B){return(M-I[B]%M)%M}),N=k.map(function(M,B){return M+R[B]}),A=w.map(function(M,B){return[S[B],N[B]]}),L=w.map(function(M,B){return[0,R[B]]});return[A,L]}([l.inHeight,l.inWidth],h,c),d=p[0],v=p[1],m=f?n:"valid",g=f?s:Ys(s,h,d),x=(t==="avg"?function(){return Gu(g,e,a,1,m)}:function(){return Vu(g,e,a,1,m)})(),b=f?x:js(x,h,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),sv=D({maxPool3d_:function(r,e,t,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ne(t,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}),o!=null&&E(Tt(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Kr(u.shape,e,t,i,n,o,a),h=T.runKernelFunc(function(f,p){var d=f.maxPool3d(u,l);return p([u,d]),d},{x:u},function(f,p){var d=p[0],v=p[1];return{x:function(){return function(m,g,x,b,y,w,C,S){var k=_(m,"dy","maxPool3dBackprop"),I=_(g,"input","maxPool3dBackprop"),R=_(x,"output","maxPool3dBackprop"),N=k,A=I,L=R,M=!1;I.rank===4&&(M=!0,N=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),A=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),L=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3])),E(N.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+N.rank+"."}),E(A.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+A.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),w==null&&(w=[1,1,1]),E(ne(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),S!=null&&E(Tt(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+S+" but got pad "+C+"."});var B=Kr(A.shape,b,y,w,C,S),U=T.runKernelFunc(function(W){return W.maxPool3dBackprop(N,A,L,B)},{dy5D:N,input5D:A});return M?U.as4D(U.shape[1],U.shape[2],U.shape[3],U.shape[4]):U}(f,d,v,e,t,i,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),uv=D({avgPool3d_:function(r,e,t,n,o,a,i){a===void 0&&(a="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(a==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+a}),E(ne(t,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+t+" and dilations '"+i+"'"}),o!=null&&E(Tt(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Kr(u.shape,e,t,i,n,o,a),h=T.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(p,d,v,m,g,x,b){var y=_(p,"dy","avgPool3dBackprop"),w=_(d,"input","avgPool3dBackprop"),C=y,S=w,k=!1;w.rank===4&&(k=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),S=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(S.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+S.rank+"."}),g==null&&(g=[1,1,1]),E(ne(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),b!=null&&E(Tt(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var I=Kr(S.shape,v,m,g,x,b),R=T.runKernelFunc(function(N){return N.avgPool3dBackprop(C,S,I)},{dy5D:C,input5D:S});return k?R.as4D(R.shape[1],R.shape[2],R.shape[3],R.shape[4]):R}(f,u,e,t,i,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ne=D({slice_:function(r,e,t){var n,o,a=_(r,"x","slice");if(a.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof e=="number"?[e].concat(new Array(a.rank-1).fill(0)):e.length<a.rank?e.concat(new Array(a.rank-e.length).fill(0)):e.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=t==null?new Array(a.rank).fill(-1):typeof t=="number"?[t].concat(new Array(a.rank-1).fill(-1)):t.length<a.rank?t.concat(new Array(a.rank-t.length).fill(-1)):t).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),a.shape[c]-n[c])}),Mh(a,n,o);var i=a.shape,s={begin:n,size:o};return T.runKernelFunc(function(u){return u.slice(a,n,o)},{x:a},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),cv=D({slice1d_:function(r,e,t){var n=_(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Ne(n,[e],[t])}}),lv=D({slice2d_:function(r,e,t){var n=_(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Ne(n,e,t)}}),Hu=D({slice3d_:function(r,e,t){var n=_(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Ne(n,e,t)}}),hv=D({slice4d_:function(r,e,t){var n=_(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Ne(n,e,t)}});function qu(r,e,t,n,o){return e.rank<t.rank&&(e=e.reshape(ee(e.shape,n))),r.rank<t.rank&&(r=r.reshape(ee(r.shape,n))),{x:function(){var a=r.mul(t.equal(e).cast(r.dtype));return o==null?a:a.transpose(o)}}}var fv=D({all_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","all","bool"),o=Lt(e,n.shape),a=o,i=Pe(a,n.rank);i!=null&&(n=n.transpose(i),a=Me(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.all(n,a)},{$x:n});if(t){var u=ee(s.shape,o);return s.reshape(u)}return s}}),pv=D({any_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","any","bool"),o=Lt(e,n.shape),a=o,i=Pe(a,n.rank);i!=null&&(n=n.transpose(i),a=Me(a.length,n.rank));var s=T.runKernelFunc(function(c){return c.any(n,a)},{$x:n});if(t){var u=ee(s.shape,o);return s.reshape(u)}return s}}),dv=D({argMax_:function(r,e){e===void 0&&(e=0);var t=_(r,"x","argMax");e==null&&(e=0);var n=Lt(e,t.shape),o=Pe(n,t.rank);o!=null&&(t=t.transpose(o),n=Me(n.length,t.rank));var a={axis:n[0]},i=[t];return T.runKernelFunc(function(s,u){var c=s.argMax(t,n[0]);return u([t]),c},{x:t},function(s,u){var c=u[0];return{x:function(){return mt(c)}}},"ArgMax",a,i)}}),vv=D({argMin_:function(r,e){e===void 0&&(e=0);var t=_(r,"x","argMin");e==null&&(e=0);var n=Lt(e,t.shape),o=Pe(n,t.rank);return o!=null&&(t=t.transpose(o),n=Me(n.length,t.rank)),T.runKernelFunc(function(a,i){var s=a.argMin(t,n[0]);return i([t]),s},{$x:t},function(a,i){var s=i[0];return{$x:function(){return mt(s)}}})}}),mv=D({logSumExp_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","logSumExp"),o=Lt(e,n.shape),a=n.max(o,!0),i=n.sub(a).exp().sum(o).log(),s=a.reshape(i.shape).add(i);if(t){var u=ee(s.shape,o);return s.reshape(u)}return s}}),lo=D({max_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","max"),o=n,a=Lt(e,n.shape),i=a,s=Pe(i,n.rank);s!=null&&(n=n.transpose(s),i=Me(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,f){var p=h.max(n,i);return f([o,p]),p},{x:n},function(h,f){return qu(h,f[1],f[0],a,s)},"Max",{axes:i},u,[!0]);if(t){var l=ee(c.shape,a);c=c.reshape(l)}return c}}),gv=D({mean_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","mean"),o=Lt(e,n.shape),a=$(qt(n.shape,o)[1]);return ao(function(i){var s=q(a);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(e,t),gradFunc:function(u){var c=i.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(jn(i.shape,"float32")).div(a)}}})(n)}}),yv=D({min_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","min"),o=n,a=Lt(e,n.shape),i=a,s=Pe(i,n.rank);s!=null&&(n=n.transpose(s),i=Me(i.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,f){var p=h.min(n,i);return f([o,p]),p},{x:n},function(h,f){return qu(h,f[1],f[0],a,s)},"Min",{axes:i},u,[!0]);if(t){var l=ee(c.shape,a);c=c.reshape(l)}return c}}),xv=D({moments_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=Lt(e,(r=_(r,"x","moments")).shape),o=r.mean(n,t),a=o.shape;t||(a=ee(o.shape,n));var i=r.toFloat().sub(o.reshape(a)).square();return{mean:o,variance:i.mean(n,t)}}}),ju=D({sum_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Lt(e,n.shape);return ao(function(a){var i=Pe(o,a.rank),s=o,u=a;i!=null&&(u=a.transpose(i),s=Me(s.length,a.rank));var c=function(p){var d=a.shape.slice();return o.forEach(function(v){d[v]=1}),p.reshape(d).mul(jn(a.shape,"float32"))},l={axes:s},h=T.runKernelFunc(function(p){return p.sum(u,s)},{x:u},function(p){return{x:function(){return c(p)}}},"Sum",l);if(t){var f=ee(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(n)}}),bv=D({prod_:function(r,e,t){e===void 0&&(e=null),t===void 0&&(t=!1);var n=_(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Lt(e,n.shape),a=Pe(o,n.rank),i=o,s=n;a!=null&&(s=n.transpose(a),i=Me(i.length,n.rank));var u=T.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(t){var c=ee(u.shape,o);u=u.reshape(c)}return u}}),Ku=D({elu_:function(r){var e=_(r,"x","elu");return T.runKernelFunc(function(t,n){var o=t.elu(e);return n([o]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){return T.runKernelFunc(function(a){return a.eluDer(t,o)},{dy:t,y:o})}}})}}),wv=D({leakyRelu_:function(r,e){e===void 0&&(e=.2);var t=_(r,"x","leakyRelu");return La(q(e).mul(t),t)}}),Xu=D({prelu_:function(r,e){var t=_(r,"x","prelu"),n=_(e,"alpha","prelu");return T.runKernelFunc(function(o,a){var i=o.prelu(t,n);return a([t,n]),i},{x:t,alpha:n},function(o,a){var i=a[0],s=a[1],u=i.greater(0);return{x:function(){return mn(u,o,o.mul(s))},alpha:function(){var c=mn(u,mt(o),o.mul(i)),l=Ot(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Rt=D({relu_:function(r){var e=_(r,"x","relu");return e.dtype==="bool"?e.toInt():T.runKernelFunc(function(t,n){var o=t.relu(e);return n([e]),o},{x:e},function(t,n){var o=n[0];return{x:function(){return t.mulStrict(o.step().toFloat())}}},"Relu")}}),Yu=D({relu6_:function(r){var e=_(r,"x","relu6");return e.dtype==="bool"?e.toInt():T.runKernelFunc(function(t,n){var o=t.relu6(e);return n([e]),o},{x:e},function(t,n){var o=n[0],a=o.lessEqual(6).mul(o.step());return{x:function(){return t.mulStrict(a.toFloat())}}},"Relu6")}}),Cv=D({selu_:function(r){var e=_(r,"x","selu");return T.runKernelFunc(function(t,n){var o=t.selu(e);return n([e]),o},{$x:e},function(t,n){var o=n[0];return{$x:function(){var a=o.greater(q(0)),i=q(Ma),s=q(Oa),u=t.mul(s),c=t.mul(i).mul(o.toFloat().exp());return mn(a,u,c)}}})}}),nn=D({transpose_:function(r,e){var t=_(r,"x","transpose");if(e==null&&(e=t.shape.map(function(o,a){return a}).reverse()),E(t.rank===e.length,function(){return"Error in transpose: rank of input "+t.rank+" must match length of perm "+e+"."}),e.forEach(function(o){E(o>=0&&o<t.rank,function(){return"All entries in 'perm' must be between 0 and "+(t.rank-1)+" but got "+e})}),t.rank<=1)return t.clone();var n={perm:e};return T.runKernelFunc(function(o){return o.transpose(t,e)},{x:t},function(o){var a=Ia(e);return{x:function(){return o.transpose(a)}}},"Transpose",n)}}),_v=D({localResponseNormalization_:function(r,e,t,n,o){e===void 0&&(e=5),t===void 0&&(t=1),n===void 0&&(n=1),o===void 0&&(o=.5);var a=_(r,"x","localResponseNormalization");E(a.rank===4||a.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+a.rank+"."}),E(Tt(e),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+e+"."});var i=a,s=!1;a.rank===3&&(s=!0,i=a.as4D(1,a.shape[0],a.shape[1],a.shape[2]));var u=T.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,e,t,n,o);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return T.runKernelFunc(function(p){return p.LRNGrad(c,h,f,e,t,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),$u=D({norm_:function(r,e,t,n){e===void 0&&(e="euclidean"),t===void 0&&(t=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),e,t),a=o.shape;if(n){var i=Lt(t,r.shape);a=ee(o.shape,i)}return o.reshape(a)}}),Ev=D({basicLSTMCell_:function(r,e,t,n,o,a){var i=_(r,"forgetBias","basicLSTMCell"),s=_(e,"lstmKernel","basicLSTMCell"),u=_(t,"lstmBias","basicLSTMCell"),c=_(n,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),h=_(a,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),p=f.shape[0],d=f.shape[1]/4,v=[p,d],m=f.slice([0,0],v),g=f.slice([0,d],v),x=f.slice([0,2*d],v),b=f.slice([0,3*d],v),y=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(i.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),Iv=D({multiRNNCell_:function(r,e,t,n){for(var o=_(e,"data","multiRNNCell"),a=Ur(t,"c","multiRNNCell"),i=Ur(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,a[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),Rv=D({movingAverage_:function(r,e,t,n,o){o===void 0&&(o=!0);var a=_(r,"v","movingAverage"),i=_(e,"x","movingAverage"),s=_(t,"decay","movingAverage");Cl(a,i),E(zt(a.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=i.sub(a).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=_(n,"step","movingAverage");l=l.div(u.sub(Jr(s,h)))}return a.add(l)}}),kv=D({stridedSlice_:function(r,e,t,n,o,a,i,s,u){if(o===void 0&&(o=0),a===void 0&&(a=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(e.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=Mi(s),h=c.shape.slice();l.forEach(function(m){e[m]=0,t[m]=1,h.splice(m,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)e[f]=Oh(o,e,n,c.shape,f),t[f]=Bh(a,t,n,c.shape,f),n[f]=n[f]||1;var p=Mi(u);p.forEach(function(m){t[m]=e[m]+1,n[m]=1});var d=Da(e,t,n),v=d.filter(function(m,g){return p.indexOf(g)===-1});return n.every(function(m){return m===1})?Ne(c,e,d).reshape(v):T.runKernelFunc(function(m){return m.stridedSlice(c,e,t,n)},{$x:c}).reshape(v)}}),Sv=D({topk_:function(r,e,t){e===void 0&&(e=1),t===void 0&&(t=!0);var n=_(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(e>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+e);var a=T.runKernelFunc(function(i){return i.topk(n,e,t)},{$x:n});return{values:a[0],indices:a[1]}}}),Dv=D({scatterND_:function(r,e,t){var n=_(r,"indices","scatterND","int32"),o=_(e,"updates","scatterND");return Ph(o,n,t),T.runKernelFunc(function(a){return a.scatterND(n,o,t)},{indices:n,updates:o},null,"ScatterNd",{shape:t})}}),Va=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var e=r.shape[r.shape.length-1],t=r.size/e,n=r.as2D(t,e);return T.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),Qr=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var e=r.shape[r.shape.length-1],t=r.size/e,n=r.as2D(t,e);return T.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Ga=D({rfft_:function(r,e){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var t,n=r.shape[r.shape.length-1],o=r.size/n;if(e!=null&&e<n){var a=r.shape.map(function(g){return 0}),i=r.shape.map(function(g){return g});i[r.shape.length-1]=e,t=r.slice(a,i),n=e}else if(e!=null&&e>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=e-n,t=r.concat(Ct(s),r.shape.length-1),n=e}else t=r;var u=t.zerosLike(),c=Vt(t,u).as2D(o,n),l=Va(c),h=Math.floor(n/2)+1,f=he(l),p=ke(l),d=f.split([h,n-h],f.shape.length-1),v=p.split([h,n-h],p.shape.length-1),m=t.shape.slice();return m[t.shape.length-1]=h,Vt(d[0],v[0]).reshape(m)}}),Ju=D({irfft_:function(r){var e=r.shape[r.shape.length-1],t=r.size/e;if(e<=2){var n=r.as2D(t,e),o=Qr(n);return he(o)}var a=[t,2*(e-1)],i=he(r).as2D(t,e),s=ke(r).as2D(t,e),u=i.slice([0,1],[t,e-2]).reverse(1),c=s.slice([0,1],[t,e-2]).reverse(1).mul(q(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=Vt(l,h).as2D(a[0],a[1]),o=Qr(n),he(o)}}),Av=Object.freeze({fft:Va,ifft:Qr,rfft:Ga,irfft:Ju}),Tv=D({sparseToDense_:function(r,e,t,n){n===void 0&&(n=0);var o=_(r,"sparseIndices","sparseToDense","int32"),a=_(e,"sparseValues","sparseToDense"),i=_(n,"defaultValue","sparseToDense",a.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var p=u.size;if(u.rank!==0&&(u.rank!==1||p!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,a,t,i),T.runKernelFunc(function(s){return s.sparseToDense(o,a,t,i)},{$sparseIndices:o,$sparseValues:a,$defaultValue:i})}}),Nv=D({gatherND_:function(r,e){var t=_(e,"indices","gatherND","int32"),n=_(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(n,t)},{x:n,indices:t},null,"GatherNd")}}),Fv=D({diag_:function(r){var e=_(r,"x","diag").flatten(),t=r.shape.concat(r.shape);return T.runKernelFunc(function(n){return n.diag(e)},{$x:e}).reshape(t)}}),Pv=D({dropout_:function(r,e,t,n){var o=_(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(e>=0&&e<1,function(){return"rate must be a float in the range [0, 1), but got "+e+"."}),e===0)return r instanceof It?o.clone():o;var a=function(u,c){if(c==null)return u.shape.slice();if(zt(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,t),i=1-e,s=Xs(a,0,1,"float32",n).add(i).floor().div(i);return o.mul(s)}});function Qu(r,e,t){for(var n=1-r%2,o=new Float32Array(r),a=0;a<r;++a){var i=2*Math.PI*a/(r+n-1);o[a]=e-t*Math.cos(i)}return Nt(o,"float32")}var Ha=D({hannWindow_:function(r){return Qu(r,.5,.5)}}),Zu=D({hammingWindow_:function(r){return Qu(r,.54,.46)}}),qa=D({frame_:function(r,e,t,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var a=0,i=[];a+e<=r.size;)i.push(Ne(r,a,e)),a+=t;if(n)for(;a<r.size;){var s=a+e-r.size,u=Pt([Ne(r,a,e-s),Te([s],o)]);i.push(u),a+=t}return i.length===0?Ze([],[0,e]):Pt(i).as2D(i.length,e)}}),tc=D({stft_:function(r,e,t,n,o){var a;o===void 0&&(o=Ha),n==null&&(a=e,n=Math.floor(Math.pow(2,Math.ceil(Math.log(a)/Math.log(2)))));for(var i=qa(r,e,t),s=Yt(i,o(e)),u=[],c=0;c<i.shape[0];c++)u.push(Ga(s.slice([c,0],[1,e]),n));return Pt(u)}}),Mv=Object.freeze({hannWindow:Ha,hammingWindow:Zu,frame:qa,stft:tc}),Xt,Ov=function(r,e,t){return t===void 0&&(t=1),X(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h,f,p,d,v,m;return Y(this,function(g){switch(g.label){case 0:return n=_(r,"predictions","inTopK"),o=_(e,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),xt(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),a=n.shape[n.shape.length-1],E(t>0&&t<=a,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+a+"), but got "+t}),[4,n.data()];case 1:return i=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[i.length/a,a],l=u[1],h=tr("bool",c=u[0]),f=0;f<c;f++){for(p=f*l,d=i.subarray(p,p+l),v=[],m=0;m<d.length;m++)v.push({value:d[m],index:m});for(v.sort(function(x,b){return b.value-x.value}),h[f]=0,m=0;m<t;m++)if(v[m].index===s[f]){h[f]=1;break}}return r!==n&&n.dispose(),e!==o&&o.dispose(),[2,Ht(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Xt||(Xt={}));var Bv=D({absoluteDifference_:function(r,e,t,n){n===void 0&&(n=Xt.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),a=_(e,"predictions","absoluteDifference"),i=null;t!=null&&(i=_(t,"weights","absoluteDifference")),xt(o.shape,a.shape,"Error in absoluteDifference: ");var s=o.sub(a).abs();return He(s,i,n)}}),He=D({computeWeightedLoss_:function(r,e,t){t===void 0&&(t=Xt.SUM_BY_NONZERO_WEIGHTS);var n=_(r,"losses","computeWeightedLoss"),o=null;e!=null&&(o=_(e,"weights","computeWeightedLoss"));var a=o==null?n:n.mul(o);if(t===Xt.NONE)return a;if(t===Xt.SUM)return a.sum();if(t===Xt.MEAN){if(o==null)return a.mean();var i=n.size/o.size,s=a.sum().div(o.sum());return i>1?s.div(q(i)):s}if(t===Xt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return a.sum().div(q(n.size));var u=o.mul(jn(n.shape)).notEqual(q(0)).sum().toFloat();return a.sum().div(u)}throw Error("Unknown reduction: "+t)}}),Lv=D({cosineDistance_:function(r,e,t,n,o){o===void 0&&(o=Xt.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","cosineDistance"),i=_(e,"predictions","cosineDistance"),s=null;n!=null&&(s=_(n,"weights","cosineDistance")),xt(a.shape,i.shape,"Error in cosineDistance: ");var u=q(1).sub(a.mul(i).sum(t,!0));return He(u,s,o)}}),Wv=D({hingeLoss_:function(r,e,t,n){n===void 0&&(n=Xt.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),a=_(e,"predictions","hingeLoss"),i=null;t!=null&&(i=_(t,"weights","hingeLoss")),xt(o.shape,a.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(a)).relu();return He(u,i,n)}}),zv=D({huberLoss_:function(r,e,t,n,o){n===void 0&&(n=1),o===void 0&&(o=Xt.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","huberLoss"),i=_(e,"predictions","huberLoss"),s=null;t!=null&&(s=_(t,"weights","huberLoss")),xt(a.shape,i.shape,"Error in huberLoss: ");var u=q(n),c=i.sub(a).abs(),l=Fu(c,u),h=c.sub(l),f=q(.5).mul(l.square()).add(u.mul(h));return He(f,s,o)}}),Uv=D({logLoss_:function(r,e,t,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=Xt.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","logLoss"),i=_(e,"predictions","logLoss"),s=null;t!=null&&(s=_(t,"weights","logLoss")),xt(a.shape,i.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=a.mul(i.add(c).log()).neg().sub(u.sub(a).mul(u.sub(i).add(c).log()));return He(l,s,o)}}),Vv=D({meanSquaredError_:function(r,e,t,n){n===void 0&&(n=Xt.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),a=_(e,"predictions","meanSquaredError"),i=null;t!=null&&(i=_(t,"weights","meanSquaredError")),xt(o.shape,a.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(a);return He(s,i,n)}}),Gv=D({sigmoidCrossEntropy_:function(r,e,t,n,o){n===void 0&&(n=0),o===void 0&&(o=Xt.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(e,"logits","sigmoidCrossEntropy"),s=null;if(t!=null&&(s=_(t,"weights","sigmoidCrossEntropy")),xt(a.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);a=a.mul(c.sub(u)).add(l.mul(u))}var h=function(f,p){var d=_(f,"labels","sigmoidCrossEntropyWithLogits"),v=_(p,"logits","sigmoidCrossEntropyWithLogits");xt(d.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(d),x=v.abs().neg().exp().log1p();return m.sub(g).add(x)}(a,i);return He(h,s,o)}}),Hv=D({softmaxCrossEntropy_:function(r,e,t,n,o){n===void 0&&(n=0),o===void 0&&(o=Xt.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(e,"logits","softmaxCrossEntropy"),s=null;if(t!=null&&(s=_(t,"weights","softmaxCrossEntropy")),xt(a.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(a.shape[1]);a=a.mul(c.sub(u)).add(u.div(l))}var h=function(f,p,d){if(d===void 0&&(d=-1),d===-1&&(d=p.rank-1),d!==p.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+p.rank+" and dim was "+d);return ao(function(v,m,g){var x=m.logSumExp([d],!0),b=m.toFloat().sub(x);return g([v,b]),{value:b.mul(v).neg().sum([d]),gradFunc:function(y,w){var C=w[0],S=w[1],k=ee(y.shape,[d]);return[y.reshape(k).mul(C.toFloat().sub(S.exp())),y.reshape(k).mul(S.exp().sub(C.toFloat()))]}}})(f,p)}(a,i);return He(h,s,o)}}),qv=Object.freeze({get Reduction(){return Xt},absoluteDifference:Bv,computeWeightedLoss:He,cosineDistance:Lv,hingeLoss:Wv,huberLoss:zv,logLoss:Uv,meanSquaredError:Vv,sigmoidCrossEntropy:Gv,softmaxCrossEntropy:Hv});function rs(r,e){return e===void 0&&(e=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var t=r.shape[0],n=r.shape[1],o=Ks(t),a=r.clone(),i=Ze([[1]],[1,1]),s=i.clone(),u=t>=n?n:t,c=function(h){var f,p=a,d=s,v=o;f=T.tidy(function(){var m=a.slice([h,h],[t-h,1]),g=m.norm(),x=a.slice([h,h],[1,1]),b=Ze([[-1]]).where(x.greater(0),Ze([[1]])),y=x.sub(b.mul(g)),w=m.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(y).div(g).neg(),S=a.slice([h,0],[t-h,n]),k=C.mul(s);if(h===0)a=S.sub(k.matMul(s.transpose().matMul(S)));else{var I=S.sub(k.matMul(s.transpose().matMul(S)));a=a.slice([0,0],[h,n]).concat(I,0)}var R=o.slice([0,h],[t,o.shape[1]-h]);if(h===0)o=R.sub(R.matMul(s).matMul(k.transpose()));else{var N=R.sub(R.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[t,h]).concat(N,1)}return[s,a,o]}),s=f[0],a=f[1],o=f[2],te([p,d,v])},l=0;l<u;++l)c(l);return!e&&t>n&&(o=o.slice([0,0],[t,n]),a=a.slice([0,0],[n,n])),[o,a]})}var jv=D({bandPart_:function(r,e,t){if(e%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+e+".");if(t%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+t+".");var n=_(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,a=n.shape.slice(-2),i=a[0],s=a[1];if(!(e<=i))throw new Error("bandPart(): numLower ("+e+") must not be greater than the number of rows ("+i+").");if(!(t<=s))throw new Error("bandPart(): numUpper ("+t+") must not be greater than the number of columns ("+s+").");e<0&&(e=i),t<0&&(t=s);var u=Vr(0,i,1,"int32").reshape([-1,1]),c=Vr(0,s,1,"int32"),l=Bt(u,c),h=so(l.lessEqual(q(+e,"int32")),l.greaterEqual(q(-t,"int32"))),f=Ct([i,s],n.dtype);return ce(Mt(n.reshape([-1,i,s])).map(function(p){return mn(h,p,f)})).reshape(o)}}),Kv=D({gramSchmidt_:function(r){var e;if(Array.isArray(r)){e=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var t=r[0].shape[0],n=function(u){E(r[u].shape[0]===t,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+t+")"})},o=1;o<r.length;++o)n(o)}else e=!0,r=ka(r,r.shape[0],0).map(function(u){return $s(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var a=[],i=r,s=function(u){a.push(T.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=ju(a[l].mulStrict(c)).mul(a[l]);c=c.sub(h)}return c.div($u(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return e?ce(a,0):a}}),Xv=D({qr_:function(r,e){if(e===void 0&&(e=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return rs(r,e);var t=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Mt(r.reshape([t,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],a=[];return n.forEach(function(i){var s=rs(i,e),u=s[0],c=s[1];o.push(u),a.push(c)}),[ce(o,0).reshape(r.shape),ce(a,0).reshape(r.shape)]}}),Yv=Object.freeze({bandPart:jv,gramSchmidt:Kv,qr:Xv});function ho(r,e,t,n,o,a){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),a==null&&(a=0);var i=r.shape[0];return t=Math.min(t,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(e.rank===1,function(){return"scores must be a 1D tensor"}),E(e.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+e.shape[0]}),E(0<=a&&a<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+a+"'"}),{maxOutputSize:t,iouThreshold:n,scoreThreshold:o,softNmsSigma:a}}var $v=D({resizeBilinear_:function(r,e,t){t===void 0&&(t=!1);var n=_(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(e.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+e+"."});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=e[0],s=e[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,i,s,t)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],t)},{})}}},"ResizeBilinear",{alignCorners:t,newHeight:i,newWidth:s});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Jv=D({resizeNearestNeighbor_:function(r,e,t){t===void 0&&(t=!1);var n=_(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(e.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+e+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,a=!1;n.rank===3&&(a=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=e[0],s=e[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,i,s,t)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],t)},{})}}});return a?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Qv=D({nonMaxSuppression_:function(r,e,t,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var a=_(r,"boxes","nonMaxSuppression"),i=_(e,"scores","nonMaxSuppression"),s=ho(a,i,t,n,o);t=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:t,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(a,i,t,n,o)},{boxes:a,scores:i},null,"NonMaxSuppressionV3",u)}}),Zv=function(r,e,t,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),X(this,void 0,void 0,function(){var a,i,s,u,c,l,h;return Y(this,function(f){switch(f.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),i=_(e,"scores","nonMaxSuppressionAsync"),s=ho(a,i,t,n,o),t=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([a.data(),i.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=Ta(c,l,t,n,o),a!==r&&a.dispose(),i!==e&&i.dispose(),[2,h]}})})},tm=D({nonMaxSuppressionWithScore_:function(r,e,t,n,o,a){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(e,"scores","nonMaxSuppression"),u=ho(i,s,t,n,o,a),c={maxOutputSize:t=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:a=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),em=function(r,e,t,n,o,a){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),a===void 0&&(a=0),X(this,void 0,void 0,function(){var i,s,u,c,l,h,f;return Y(this,function(p){switch(p.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(e,"scores","nonMaxSuppressionAsync"),u=ho(i,s,t,n,o,a),t=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,a=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=p.sent(),l=c[0],h=c[1],f=Na(l,h,t,n,o,a),i!==r&&i.dispose(),s!==e&&s.dispose(),[2,f]}})})},nm=D({cropAndResize_:function(r,e,t,n,o,a){var i=_(r,"image","cropAndResize"),s=_(e,"boxes","cropAndResize","float32"),u=_(t,"boxInd","cropAndResize","int32");o=o||"bilinear",a=a||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,n,o,a)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:a,cropSize:n})}}),ja=Object.freeze({resizeBilinear:$v,resizeNearestNeighbor:Jv,nonMaxSuppression:Qv,nonMaxSuppressionAsync:Zv,nonMaxSuppressionWithScore:tm,nonMaxSuppressionWithScoreAsync:em,cropAndResize:nm}),Ka=function(r,e){return!(r>0)||e==="linear"},Xa=function(r,e,t){if(t==null||t==="linear")return r;if(t==="relu")return r.mul(e.step());throw new Error("Gradient for activation "+t+" has not been implemented yet.")},Ya=function(r,e){var t=e,n=Ot(r.shape,e.shape);return n.length>0&&(t=t.sum(n)),t.reshape(r.shape)},$a=function(r,e,t){if(e==="linear")return r;if(e==="relu")return Rt(r);if(e==="elu")return Ku(r);if(e==="relu6")return Yu(r);if(e==="prelu")return Xu(r,t);throw new Error("Unknown fused activation "+e+".")},rm=D({fusedMatMul_:function(r){var e,t=r.a,n=r.b,o=r.transposeA,a=o!==void 0&&o,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(Ka(T.state.gradientDepth,l)===!1){var f=co(t,n,a,s);return u!=null&&(f=ct(f,u)),$a(f,l,h)}var p=_(t,"a","fused matMul"),d=_(n,"b","fused matMul");e=kt(p,d),p=e[0],d=e[1];var v=a?p.shape[p.rank-2]:p.shape[p.rank-1],m=s?d.shape[d.rank-1]:d.shape[d.rank-2],g=a?p.shape[p.rank-1]:p.shape[p.rank-2],x=s?d.shape[d.rank-2]:d.shape[d.rank-1],b=p.shape.slice(0,-2),y=d.shape.slice(0,-2),w=$(b),C=$(y);E(p.rank>=2&&d.rank>=2&&p.rank===d.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+p.rank+" and "+d.rank+"."}),E(zt(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+p.shape+" and "+d.shape+" must match."}),E(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+p.shape+" and "+d.shape+" and transposeA="+a+" and transposeB="+s+" must match."});var S,k,I=p.shape.slice(0,-2).concat([g,x]),R=a?p.as3D(w,v,g):p.as3D(w,g,v),N=s?d.as3D(C,x,m):d.as3D(C,m,x);u!=null&&ht(I,(S=kt(S=_(u,"bias","fused matMul"),p)[0]).shape),h!=null&&(k=_(h,"prelu weights","fused matMul"));var A={a:R,b:N};u!=null&&(A.bias=S),h!=null&&(A.preluActivationWeights=k);var L=[R,N];return T.runKernelFunc(function(M,B){var U=M.fusedBatchMatMul({a:R,b:N,transposeA:a,transposeB:s,bias:S,activation:l,preluActivationWeights:k});return B([R,N,U]),U},A,function(M,B){var U=B[0],W=B[1],z=B[2],G=Xa(M,z,l),H={};return u!=null&&(H={bias:function(){return Ya(S,G)}}),Object.assign(a||s?!a&&s?{a:function(){return G.matMul(W,!1,!1)},b:function(){return G.matMul(U,!0,!1)}}:a&&!s?{a:function(){return W.matMul(G,!1,!0)},b:function(){return U.matMul(G,!1,!1)}}:{a:function(){return W.matMul(G,!0,!0)},b:function(){return G.matMul(U,!0,!0)}}:{a:function(){return G.matMul(W,!1,!0)},b:function(){return U.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:a,transposeB:s,activation:l},L,[!0]).reshape(I)}}),om=D({fusedConv2d_:function(r){var e=r.x,t=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(f=f||"linear",Ka(T.state.gradientDepth,f)===!1){var d=pe(e,t,n,o,i,u,c);return l!=null&&(d=ct(d,l)),$a(d,f,p)}var v=_(e,"x","conv2d"),m=_(t,"filter","conv2d"),g=v,x=!1;v.rank===3&&(x=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&E(Tt(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),E(ne(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var b,y,w=bn(g.shape,m.shape,n,u,o,c);l!=null&&(b=kt(b=_(l,"bias","fused conv2d"),v)[0],ht(w.outShape,b.shape)),p!=null&&(y=_(p,"prelu weights","fused conv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),p!=null&&(C.preluActivationWeights=y);var S=[m,g],k=T.runKernelFunc(function(I,R){var N=I.fusedConv2d({input:g,filter:m,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return R([m,g,N]),N},C,function(I,R){var N=R,A=N[0],L=N[1],M=N[2],B=Xa(I,M,f);E(Hn(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var U={};return l!=null&&(U={bias:function(){return Ya(b,B)}}),Object.assign({x:function(){return Wu(L.shape,B,A,n,o)},filter:function(){return za(L,B,A.shape,n,o)}},U)},"FusedConv2D",{convInfo:w,activation:f},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),am=D({fusedDepthwiseConv2d_:function(r){var e=r.x,t=r.filter,n=r.strides,o=r.pad,a=r.dataFormat,i=a===void 0?"NHWC":a,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,p=r.preluActivationWeights;if(Ka(T.state.gradientDepth,f)===!1){var d=uo(e,t,n,o,i,u,c);return l!=null&&(d=ct(d,l)),$a(d,f,p)}var v=_(e,"x","depthwiseConv2d"),m=_(t,"filter","depthwiseConv2d"),g=v,x=!1;v.rank===3&&(x=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),E(ne(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Tt(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=bn(g.shape,m.shape,n,u,o,c,!0);l!=null&&(b=kt(b=_(l,"bias","fused conv2d"),v)[0],ht(w.outShape,b.shape)),p!=null&&(y=_(p,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),p!=null&&(C.preluActivationWeights=y);var S=[m,g],k=T.runKernelFunc(function(I,R){var N=I.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:b,activation:f,preluActivationWeights:y});return R([m,g,N]),N},C,function(I,R){E(Hn(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var N=R[0],A=R[1],L=R[2],M=Xa(I,L,f),B={};return l!=null&&(B={bias:function(){return Ya(b,M)}}),Object.assign({x:function(){return zu(A.shape,M,N,w)},filter:function(){return Uu(A,M,N.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:f},S,[!0]);return x?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),im=Object.freeze({matMul:rm,conv2d:om,depthwiseConv2d:am}),sm=Object.freeze({image:ja,linalg:Yv,losses:qv,spectral:Av,fused:im,signal:Mv,square:Up,squaredDifference:_u,conv1d:$d,conv2d:pe,conv3d:Jd,depthwiseConv2d:uo,separableConv2d:Ua,conv2dTranspose:Qd,conv3dTranspose:Zd,op:D,batchNormalization2d:gd,batchNormalization3d:yd,batchNormalization4d:xd,batchNormalization:bd,batchNorm:Du,batchNorm2d:wd,batchNorm3d:Cd,batchNorm4d:_d,booleanMaskAsync:Yd,complex:Vt,real:he,imag:ke,concat:Pt,concat1d:ah,concat2d:ih,concat3d:sh,concat4d:uh,split:ka,matMul:co,dot:tv,outerProduct:ev,reverse:dr,reverse1d:nv,reverse2d:rv,reverse3d:ov,reverse4d:av,maxPool:Wt,avgPool:vr,pool:iv,maxPool3d:sv,avgPool3d:uv,slice:Ne,slice1d:cv,slice2d:lv,slice3d:Hu,slice4d:hv,abs:Vp,acos:Gp,acosh:Hp,asin:qp,asinh:jp,atan:Kp,atanh:Xp,ceil:Yp,clipByValue:Ba,cos:$p,cosh:Jp,erf:Qp,exp:pa,expm1:Zp,floor:td,log:ed,log1p:nd,logSigmoid:rd,neg:$r,reciprocal:od,round:ad,rsqrt:Eu,sigmoid:Iu,sign:id,isNaN:sd,isInf:ud,isFinite:cd,sin:ld,sinh:hd,softplus:fd,sqrt:pd,step:dd,tan:vd,tanh:md,all:fv,any:pv,argMax:dv,argMin:vv,logSumExp:mv,max:lo,mean:gv,min:yv,moments:xv,sum:ju,prod:bv,equal:Pu,equalStrict:Wd,greater:zd,greaterEqual:Mu,greaterEqualStrict:Ud,greaterStrict:Vd,less:Gd,lessEqual:Hd,lessEqualStrict:qd,lessStrict:jd,notEqual:Kd,notEqualStrict:Xd,add:ct,addN:Rd,addStrict:kd,atan2:Sd,div:de,divNoNan:Dd,divStrict:Ad,floorDiv:Nu,maximum:La,maximumStrict:Td,minimum:Fu,minimumStrict:Nd,mod:Fd,modStrict:Pd,mul:Yt,mulStrict:Md,pow:Jr,powStrict:Od,squaredDifferenceStrict:Bd,sub:Bt,subStrict:Ld,elu:Ku,leakyRelu:wv,prelu:Xu,relu:Rt,relu6:Yu,selu:Cv,logicalAnd:so,logicalNot:Ed,logicalOr:Au,logicalXor:Id,where:mn,whereAsync:Tu,buffer:at,print:gh,batchToSpaceND:js,broadcastTo:yh,cast:xh,clone:bh,cumsum:wh,depthToSpace:Ch,expandDims:le,eye:Ks,multinomial:_h,oneHot:ca,pad:xn,pad1d:Eh,pad2d:Ih,pad3d:Rh,pad4d:kh,rand:Sh,randomNormal:Dh,randomGamma:Ah,randomUniform:Xs,reshape:ve,spaceToBatchND:Ys,squeeze:$s,stack:ce,tile:Mn,truncatedNormal:Th,unstack:Mt,setdiff1dAsync:Nh,fill:Te,linspace:oh,ones:jn,range:Vr,scalar:q,tensor:Ht,tensor1d:Nt,tensor2d:Ze,tensor3d:Ra,tensor4d:Jt,tensor5d:eh,tensor6d:nh,variable:rh,zeros:Ct,onesLike:qs,zerosLike:mt,transpose:nn,softmax:Ge,logSoftmax:Wh,localResponseNormalization:_v,norm:$u,gather:Wa,unsortedSegmentSum:Ou,basicLSTMCell:Ev,multiRNNCell:Iv,movingAverage:Rv,stridedSlice:kv,topk:Sv,scatterND:Dv,fft:Va,ifft:Qr,rfft:Ga,irfft:Ju,sparseToDense:Tv,gatherND:Nv,diag:Fv,dropout:Pv,hannWindow:Ha,hammingWindow:Zu,frame:qa,stft:tc,inTopKAsync:Ov});function V(r,e){Array.isArray(r)||(r=[r]),r.forEach(function(t){t!=null&&E(t.dtype!=="complex64",function(){return e+" does not support complex64 tensors."})})}function Go(r,e,t,n){if(t==="linear")return r.linear(e);if(t==="relu")return r.relu(e);if(t==="elu")return r.elu(e);if(t==="relu6")return r.relu6(e);if(t==="prelu")return r.prelu(e,n);throw new Error("Activation "+t+" has not been implemented for the CPU backend.")}var um=function(r){function e(){var t=r.call(this)||this;return t.blockSize=48,t.firstUse=!0,t.data=new ru(t,T),t}return ge(e,r),e.prototype.write=function(t,n,o){this.firstUse&&(this.firstUse=!1,O().get("IS_NODE")&&zr(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var a={};return this.data.set(a,{values:t,dtype:o}),a},e.prototype.move=function(t,n,o,a){this.data.set(t,{values:n,dtype:a})},e.prototype.numDataIds=function(){return this.data.numDataIds()},e.prototype.read=function(t){return X(this,void 0,void 0,function(){return Y(this,function(n){return[2,this.readSync(t)]})})},e.prototype.readSync=function(t){var n=this.data.get(t),o=n.dtype,a=n.complexTensors;return o==="complex64"?fa(this.readSync(a.real.dataId),this.readSync(a.imag.dataId)):this.data.get(t).values},e.prototype.bufferSync=function(t){var n=this.readSync(t.dataId),o=n;if(t.dtype==="string")try{o=n.map(function(a){return Br(a)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return at(t.shape,t.dtype,o)},e.prototype.makeOutput=function(t,n,o){var a=this.write(t,n,o);return T.makeTensorFromDataId(a,n,o,this)},e.prototype.disposeData=function(t){if(this.data.has(t)){var n=this.data.get(t).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(t)}},e.prototype.time=function(t){return X(this,void 0,void 0,function(){var n;return Y(this,function(o){return n=Ie(),t(),[2,{kernelMs:Ie()-n}]})})},e.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},e.prototype.complex=function(t,n){var o=this.makeOutput(null,t.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(t.clone()),imag:T.keep(n.clone())},o},e.prototype.real=function(t){return this.data.get(t.dataId).complexTensors.real.clone()},e.prototype.imag=function(t){return this.data.get(t.dataId).complexTensors.imag.clone()},e.prototype.slice=function(t,n,o){if(V(t,"slice"),eu(t.shape,n,o)){var a=nu(n,t.strides),i=$(o);return Ht(this.readSync(t.dataId).subarray(a,a+i),o,t.dtype)}for(var s=at(o,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+n[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},e.prototype.stridedSlice=function(t,n,o,a){V(t,"stridedSlice");var i=Da(n,o,a);if(i.some(function(p){return p===0}))return Ht([],i);for(var s=at(i,t.dtype),u=this.bufferSync(t),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*a[f]+n[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},e.prototype.diag=function(t){for(var n=this.readSync(t.dataId),o=at([t.size,t.size],t.dtype),a=o.values,i=0;i<n.length;i++)a[i*t.size+i]=n[i];return o.toTensor()},e.prototype.unstack=function(t,n){for(var o=t.shape[n],a=new Array(t.rank-1),i=0,s=0;s<t.rank;s++)s!==n&&(a[i++]=t.shape[s]);var u=new Array(t.rank).fill(0),c=t.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(t,u,c).reshape(a);return l},e.prototype.reverse=function(t,n){V(t,"reverse");for(var o=at(t.shape,t.dtype),a=this.bufferSync(t),i=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=t.shape[h]-1-l[h]}),o.set.apply(o,[a.get.apply(a,l)].concat(c))},s=0;s<o.size;s++)i(s);return o.toTensor()},e.prototype.concat=function(t,n){var o=this;if(t[0].dtype==="complex64"){var a=t.map(function(p){return he(p)}),i=t.map(function(p){return ke(p)});return Vt(this.concat(a,n),this.concat(i,n))}var s=t.map(function(p){var d=$(p.shape.slice(n));return p.as2D(-1,d)}),u=Gn(s.map(function(p){return p.shape}),1),c=at(u,t[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(p){c.set(o.readSync(p.dataId),l),l+=p.size})}else{var h=0;s.forEach(function(p){for(var d=o.readSync(p.dataId),v=0,m=0;m<p.shape[0];++m)for(var g=m*u[1]+h,x=0;x<p.shape[1];++x)c[g+x]=d[v++];h+=p.shape[1]})}var f=Gn(t.map(function(p){return p.shape}),n);return Ht(c,f,t[0].dtype)},e.prototype.neg=function(t){return V(t,"neg"),this.multiply(q(-1),t)},e.prototype.add=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o+i,imag:a+s}}):this.broadcastedBinaryOp(t,n,Gt(t.dtype,n.dtype),function(o,a){return o+a})},e.prototype.addN=function(t){var n=this;V(t,"addN");for(var o=t.map(function(l){return n.readSync(l.dataId)}),a=at(t[0].shape,t[0].dtype),i=a.values,s=0;s<t.length;s++)for(var u=o[s],c=0;c<i.length;c++)i[c]+=u[c];return a.toTensor()},e.prototype.softmax=function(t,n){var o=Lt([n],t.shape),a=this.max(t,o),i=ee(a.shape,o),s=this.subtract(t,a.reshape(i)),u=this.exp(s),c=this.sum(u,o).reshape(i);return this.realDivide(u,c)},e.prototype.subtract=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o-i,imag:a-s}}):this.broadcastedBinaryOp(t,n,Gt(t.dtype,n.dtype),function(o,a){return o-a})},e.prototype.pow=function(t,n){return V([t,n],"pow"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.pow(o,a)})},e.prototype.batchMatMul=function(t,n,o,a){V([t,n],"matMul");for(var i=o?t.shape[1]:t.shape[2],s=o?t.shape[2]:t.shape[1],u=a?n.shape[1]:n.shape[2],c=t.shape[0],l=this.readSync(t.dataId),h=this.readSync(n.dataId),f=o?[t.strides[0],1,t.strides[1]]:[t.strides[0],t.strides[1],1],p=f[0],d=f[1],v=f[2],m=a?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=m[0],x=m[1],b=m[2],y=s*u,w=at([c,s,u],t.dtype),C=w.values,S=this.blockSize,k=0;k<c;k++)for(var I=0;I<s;I+=S)for(var R=0;R<u;R+=S)for(var N=0;N<i;N+=S)for(var A=Math.min(I+S,s),L=Math.min(R+S,u),M=Math.min(N+S,i),B=I;B<A;B++)for(var U=R;U<L;U++){for(var W=0,z=N;z<M;z++)W+=l[k*p+B*d+z*v]*h[z*g+U*x+k*b];C[k*y+(B*u+U)]+=W}return w.toTensor()},e.prototype.fusedBatchMatMul=function(t){var n=t.a,o=t.b,a=t.transposeA,i=t.transposeB,s=t.bias,u=t.activation,c=t.preluActivationWeights,l=this.batchMatMul(n,o,a,i);return s&&(l=this.add(l,s)),u&&(l=Go(this,l,u,c)),l},e.prototype.multiply=function(t,n){return t.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(t.cast("complex64"),n.cast("complex64"),function(o,a,i,s){return{real:o*i-a*s,imag:o*s+a*i}}):this.broadcastedBinaryOp(t,n,Gt(t.dtype,n.dtype),function(o,a){return o*a})},e.prototype.realDivide=function(t,n){return V([t,n],"realDivide"),this.broadcastedBinaryOp(t,n,"float32",function(o,a){return o/a})},e.prototype.floorDiv=function(t,n){return V([t,n],"floorDiv"),this.broadcastedBinaryOp(t,n,"int32",function(o,a){return Math.floor(o/a)})},e.prototype.sum=function(t,n){V(t,"sum"),oe("sum",n,t.rank);for(var o=qt(t.shape,n),a=o[0],i=o[1],s=Ct(a,Gt(t.dtype,"int32")),u=$(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,p=0,d=0;d<u;++d)p+=l[f+d];c[h]=p}return s},e.prototype.prod=function(t,n){V(t,"sum");for(var o=qt(t.shape,n),a=o[0],i=o[1],s=Ct(a,Gt(t.dtype,"int32")),u=$(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,p=1,d=0;d<u;++d)p*=l[f+d];c[h]=p}return s},e.prototype.unsortedSegmentSum=function(t,n,o){V(t,"unsortedSegmentSum");for(var a=[],i=t.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=Pu(u,n).asType("float32").mul(t).sum(0);a.push(c)}return ce(a)},e.prototype.argMin=function(t,n){V(t,"argMin");var o=[n];oe("argMin",o,t.rank);for(var a=qt(t.shape,o),i=a[0],s=a[1],u=Ct(i,"int32"),c=$(s),l=this.readSync(u.dataId),h=this.readSync(t.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],v=0,m=0;m<c;++m){var g=h[p+m];g<d&&(d=g,v=m)}l[f]=v}return u},e.prototype.argMax=function(t,n){V(t,"argMax");var o=[n];oe("argMax",o,t.rank);for(var a=qt(t.shape,o),i=a[0],s=a[1],u=Ct(i,"int32"),c=$(s),l=this.readSync(u.dataId),h=this.readSync(t.dataId),f=0;f<l.length;++f){for(var p=f*c,d=h[p],v=0,m=0;m<c;++m){var g=h[p+m];g>d&&(d=g,v=m)}l[f]=v}return u},e.prototype.cumsum=function(t,n,o,a){if(V(t,"cumsum"),n!==t.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(t.rank-1)+" but got axis="+n);for(var i=Gt(t.dtype,"int32"),s=Ct(t.shape,i),u=this.readSync(s.dataId),c=this.readSync(t.dataId),l=t.shape[t.rank-1],h=a?function(m,g){return m+l-g-1}:function(m,g){return m+g},f=0;f<c.length;f+=l)for(var p=0;p<l;p++){var d=h(f,p);if(p===0)u[d]=o?0:c[d];else{var v=h(f,p-1);u[d]=o?c[v]+u[v]:c[d]+u[v]}}return s},e.prototype.equal=function(t,n){return V([t,n],"equal"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o===a?1:0})},e.prototype.notEqual=function(t,n){return V([t,n],"notEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o!==a?1:0})},e.prototype.less=function(t,n){return V([t,n],"less"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o<a?1:0})},e.prototype.lessEqual=function(t,n){return V([t,n],"lessEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o<=a?1:0})},e.prototype.greater=function(t,n){return V([t,n],"greater"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o>a?1:0})},e.prototype.greaterEqual=function(t,n){return V([t,n],"greaterEqual"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o>=a?1:0})},e.prototype.logicalNot=function(t){V(t,"logicalNot");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)o[a]=n[a]?0:1;return this.makeOutput(o,t.shape,"bool")},e.prototype.logicalAnd=function(t,n){return V([t,n],"logicalAnd"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o&&a})},e.prototype.logicalOr=function(t,n){return V([t,n],"logicalOr"),this.broadcastedBinaryOp(t,n,"bool",function(o,a){return o||a})},e.prototype.select=function(t,n,o){V([t,n,o],"select");for(var a=this.readSync(t.dataId),i=this.readSync(n.dataId),s=this.readSync(o.dataId),u=Ct(n.shape,Gt(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=t.rank===0||t.rank>1||n.rank===1?1:$(n.shape.slice(1)),f=0;f<a.length;f++)for(var p=0;p<h;p++)a[f]===1?c[l++]=i[f]:c[l++]=s[f];return u},e.prototype.where=function(t){V([t],"where");var n=this.readSync(t.dataId);return Fa(t.shape,n)},e.prototype.topk=function(t,n,o){return V(t,"topk"),hu(this.readSync(t.dataId),t.shape,t.dtype,n)},e.prototype.min=function(t,n){V(t,"min"),oe("min",n,t.rank);for(var o=qt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var v=l[f+d];v<p&&(p=v)}c[h]=p}return s},e.prototype.minimum=function(t,n){return V([t,n],"minimum"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.min(o,a)})},e.prototype.mod=function(t,n){return V([t,n],"mod"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){var i=o%a;return o<0&&a<0||o>=0&&a>=0?i:(i+a)%a})},e.prototype.max=function(t,n){V(t,"max"),oe("max",n,t.rank);for(var o=qt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var v=l[f+d];v>p&&(p=v)}c[h]=p}return s},e.prototype.maximum=function(t,n){return V([t,n],"maximum"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.max(o,a)})},e.prototype.all=function(t,n){V(t,"all"),oe("all",n,t.rank);for(var o=qt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var v=l[f+d];p=p&&v}c[h]=p}return s},e.prototype.any=function(t,n){V(t,"any"),oe("any",n,t.rank);for(var o=qt(t.shape,n),a=o[0],i=o[1],s=Ct(a,t.dtype),u=$(i),c=this.readSync(s.dataId),l=this.readSync(t.dataId),h=0;h<c.length;++h){for(var f=h*u,p=l[f],d=0;d<u;++d){var v=l[f+d];p=p||v}c[h]=p}return s},e.prototype.squaredDifference=function(t,n){return V([t,n],"squaredDifference"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){var i=o-a;return i*i})},e.prototype.ceil=function(t){V(t,"ceil");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.ceil(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.floor=function(t){V(t,"floor");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.floor(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.sign=function(t){V(t,"x");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)n[a]<0?o[a]=-1:n[a]>0?o[a]=1:o[a]=0;return this.makeOutput(o,t.shape,"float32")},e.prototype.isNaN=function(t){V(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isNaN(n[a])&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.isInf=function(t){V(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Math.abs(n[a])===1/0&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.isFinite=function(t){V(t,"x");for(var n=this.readSync(t.dataId),o=new Uint8Array(n.length),a=0;a<n.length;++a)Number.isFinite(n[a])&&(o[a]=1);return this.makeOutput(o,t.shape,"bool")},e.prototype.round=function(t){V(t,"round");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=Math.floor(n[a]);n[a]-i<.5?o[a]=Math.floor(n[a]):n[a]-i>.5?o[a]=Math.ceil(n[a]):o[a]=i%2==0?i:i+1}return this.makeOutput(o,t.shape,"float32")},e.prototype.exp=function(t){V(t,"exp");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.exp(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.expm1=function(t){V(t,"expm1");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=Math.expm1(n[a]);return this.makeOutput(o,t.shape,"float32")},e.prototype.log=function(t){V(t,"log");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.log1p=function(t){V(t,"log1p");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.log1p(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.sqrt=function(t){V(t,"sqrt");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=Math.sqrt(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.rsqrt=function(t){V(t,"rsqrt");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a){var i=n[a];o[a]=1/Math.sqrt(i)}return this.makeOutput(o,t.shape,"float32")},e.prototype.reciprocal=function(t){V(t,"reciprocal");for(var n=this.readSync(t.dataId),o=new Float32Array(n.length),a=0;a<n.length;++a)o[a]=1/n[a];return this.makeOutput(o,t.shape,"float32")},e.prototype.linear=function(t){return t},e.prototype.relu=function(t){V(t,"relu");for(var n=Ct(t.shape,t.dtype),o=this.readSync(n.dataId),a=this.readSync(t.dataId),i=0;i<a.length;++i)o[i]=Math.max(0,a[i]);return n},e.prototype.relu6=function(t){V(t,"relu");for(var n=Ct(t.shape,t.dtype),o=this.readSync(n.dataId),a=this.readSync(t.dataId),i=0;i<a.length;++i)o[i]=Math.min(Math.max(0,a[i]),6);return n},e.prototype.prelu=function(t,n){return V([t,n],"prelu"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return o<0?a*o:o})},e.prototype.elu=function(t){V(t,"elu");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=o[a];n[a]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,t.shape,"float32")},e.prototype.eluDer=function(t,n){V([t,n],"eluDer");for(var o=new Float32Array(n.size),a=this.readSync(n.dataId),i=this.readSync(t.dataId),s=0;s<a.length;++s){var u=a[s];o[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},e.prototype.selu=function(t){V(t,"selu");for(var n=Ma,o=Oa,a=new Float32Array(t.size),i=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(a,t.shape,"float32")},e.prototype.clip=function(t,n,o){V(t,"clip");for(var a=new Float32Array(t.size),i=this.readSync(t.dataId),s=0;s<i.length;++s){var u=i[s];a[s]=u>o?o:u<n?n:u}return this.makeOutput(a,t.shape,"float32")},e.prototype.abs=function(t){for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.abs(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.complexAbs=function(t){for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<t.size;++a){var i=o[2*a],s=o[2*a+1];n[a]=Math.hypot(i,s)}return this.makeOutput(n,t.shape,"float32")},e.prototype.int=function(t){V(t,"int");for(var n=new Int32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=o[a];return this.makeOutput(n,t.shape,"int32")},e.prototype.sigmoid=function(t){V(t,"sigmoid");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=1/(1+Math.exp(-o[a]));return this.makeOutput(n,t.shape,"float32")},e.prototype.softplus=function(t){V(t,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(t.size),a=this.readSync(t.dataId),i=0;i<a.length;++i){var s=a[i]>-n,u=a[i]<n,c=Math.exp(a[i]),l=void 0;l=u?c:s?a[i]:Math.log(1+c),o[i]=l}return this.makeOutput(o,t.shape,"float32")},e.prototype.sin=function(t){V(t,"sin");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.sin(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.cos=function(t){V(t,"cos");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.cos(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.tan=function(t){V(t,"tan");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.tan(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.asin=function(t){V(t,"asin");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.asin(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.acos=function(t){V(t,"acos");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.acos(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atan=function(t){V(t,"atan");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.atan(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atan2=function(t,n){return V([t,n],"atan2"),this.broadcastedBinaryOp(t,n,t.dtype,function(o,a){return Math.atan2(o,a)})},e.prototype.sinh=function(t){V(t,"sinh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.sinh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.cosh=function(t){V(t,"cosh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.cosh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.tanh=function(t){V(t,"tanh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=ul(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.asinh=function(t){V(t,"asinh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.asinh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.acosh=function(t){V(t,"acosh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.acosh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.atanh=function(t){V(t,"atanh");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a)n[a]=Math.atanh(o[a]);return this.makeOutput(n,t.shape,"float32")},e.prototype.erf=function(t){V(t,"erf");for(var n=new Float32Array(t.size),o=this.readSync(t.dataId),a=0;a<o.length;++a){var i=Math.sign(o[a]),s=Math.abs(o[a]),u=1/(1+.3275911*s);n[a]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,t.shape,"float32")},e.prototype.step=function(t,n){n===void 0&&(n=0),V(t,"step");for(var o=new Float32Array(t.size),a=this.readSync(t.dataId),i=0;i<a.length;++i){var s=a[i];isNaN(s)?o[i]=NaN:o[i]=s>0?1:n}return this.makeOutput(o,t.shape,"float32")},e.prototype.fusedConv2d=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.conv2d(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Go(this,c,s,u)),c},e.prototype.conv2d=function(t,n,o){V([t,n],"conv2d");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=at(o.outShape,t.dtype),p=t.strides[0],d=h?t.strides[1]:t.strides[2],v=h?t.strides[2]:1,m=h?1:t.strides[1],g=f.strides[0],x=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,y=h?1:f.strides[1],w=this.readSync(t.dataId),C=this.readSync(n.dataId),S=f.values,k=0;k<o.batchSize;++k)for(var I=k*p,R=k*g,N=0;N<o.outHeight;++N)for(var A=R+N*x,L=N*o.strideHeight-l,M=0;M<a;M++){var B=L+M*s;if(!(B<0||B>=o.inHeight))for(var U=M*n.strides[0],W=I+B*d,z=0;z<o.outWidth;++z)for(var G=A+z*b,H=z*o.strideWidth-c,j=0;j<i;j++){var J=H+j*u;if(!(J<0||J>=o.inWidth))for(var nt=W+J*v,st=U+j*n.strides[1],ut=0;ut<o.inChannels;++ut){for(var lt=w[nt+ut*m],dt=0;dt<o.outChannels;++dt)S[G+dt*y]+=lt*C[st+dt];st+=o.outChannels}}}return f.toTensor()},e.prototype.conv3d=function(t,n,o){for(var a=o.filterDepth,i=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,p=o.padInfo.top,d=at(o.outShape,t.dtype),v=this.readSync(t.dataId),m=this.readSync(n.dataId),g=d.values,x=0;x<o.batchSize;++x)for(var b=x*t.strides[0],y=x*d.strides[0],w=0;w<o.outDepth;++w)for(var C=y+w*d.strides[1],S=w*o.strideDepth-h,k=0;k<a;k++){var I=S+k*u;if(!(I<0||I>=o.inDepth))for(var R=k*n.strides[0],N=b+I*t.strides[1],A=0;A<o.outHeight;++A)for(var L=C+A*d.strides[2],M=A*o.strideHeight-p,B=0;B<i;B++){var U=M+B*c;if(!(U<0||U>=o.inHeight))for(var W=R+B*n.strides[1],z=N+U*t.strides[2],G=0;G<o.outWidth;++G)for(var H=L+G*o.outChannels,j=G*o.strideWidth-f,J=0;J<s;J++){var nt=j+J*l;if(!(nt<0||nt>=o.inWidth))for(var st=W+J*n.strides[2],ut=z+nt*o.inChannels,lt=st,dt=0;dt<o.inChannels;++dt){for(var ft=v[ut+dt],vt=0;vt<o.outChannels;++vt)g[H+vt]+=ft*m[lt+vt];lt+=o.outChannels}}}}return d.toTensor()},e.prototype.conv2dDerInput=function(t,n,o){V([t,n],"conv2dDerInput");for(var a=at(o.inShape,"float32"),i=a.values,s=this.readSync(t.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],f=c[2],p=o.batchSize,d=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,C=o.strideHeight,S=o.strideWidth,k=o.dataFormat,I=d-1-o.padInfo.top,R=v-1-o.padInfo.left,N=k==="channelsLast",A=a.strides[0],L=N?a.strides[1]:a.strides[2],M=N?a.strides[2]:1,B=N?1:a.strides[1],U=t.strides[0],W=N?t.strides[1]:t.strides[2],z=N?t.strides[2]:1,G=N?1:t.strides[1],H=0;H<p;++H)for(var j=0;j<m;++j)for(var J=0;J<g;++J)for(var nt=J-I,st=Math.max(0,Math.ceil(nt/C)),ut=Math.min(y,(d+nt)/C),lt=0;lt<x;++lt){for(var dt=lt-R,ft=Math.max(0,Math.ceil(dt/S)),vt=Math.min(w,(v+dt)/S),At=0,pt=st;pt<ut;++pt)for(var bt=pt*C-nt,gt=ft;gt<vt;++gt)for(var St=U*H+W*pt+z*gt,_t=l*(d-1-bt)+h*(v-1-(gt*S-dt))+f*j,Et=0;Et<b;++Et)At+=s[St+G*Et]*u[_t+Et];i[A*H+L*J+M*lt+B*j]=At}return a.toTensor()},e.prototype.conv3dDerInput=function(t,n,o){for(var a=at(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(t.dataId),p=t.strides,d=p[0],v=p[1],m=p[2],g=p[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=o.batchSize,I=o.filterDepth,R=o.filterHeight,N=o.filterWidth,A=o.inChannels,L=o.inDepth,M=o.inHeight,B=o.inWidth,U=o.outChannels,W=o.outDepth,z=o.outHeight,G=o.outWidth,H=o.strideDepth,j=o.strideHeight,J=o.strideWidth,nt=I-1-o.padInfo.front,st=R-1-o.padInfo.top,ut=N-1-o.padInfo.left,lt=0;lt<k;++lt)for(var dt=0;dt<A;++dt)for(var ft=0;ft<L;++ft)for(var vt=ft-nt,At=Math.max(0,Math.ceil(vt/H)),pt=Math.min(W,(I+vt)/H),bt=0;bt<M;++bt)for(var gt=bt-st,St=Math.max(0,Math.ceil(gt/j)),_t=Math.min(z,(R+gt)/j),Et=0;Et<B;++Et){for(var be=Et-ut,we=Math.max(0,Math.ceil(be/J)),re=Math.min(G,(N+be)/J),_n=0,Oe=At;Oe<pt;++Oe)for(var Xe=Oe*H-vt,Be=St;Be<_t;++Be)for(var En=Be*j-gt,Le=we;Le<re;++Le)for(var wo=d*lt+v*Oe+m*Be+g*Le,In=y*(I-1-Xe)+w*(R-1-En)+C*(N-1-(Le*J-be))+S*dt,Ce=0;Ce<U;++Ce)_n+=f[wo+Ce]*x[In+Ce];i[u*lt+c*ft+l*bt+h*Et+dt]=_n}return a.toTensor()},e.prototype.conv2dDerFilter=function(t,n,o){V([t,n],"conv2dDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=at(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,p=this.bufferSync(t),d=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/a)),g=Math.min(o.outHeight,(o.inHeight+f-v)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((h-x)/i)),y=Math.min(o.outWidth,(o.inWidth+h-x)/i),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var S=0,k=0;k<o.batchSize;++k)for(var I=m;I<g;++I)for(var R=v+I*a-f,N=b;N<y;++N){var A=x+N*i-h;S+=c?p.get(k,R,A,w)*d.get(k,I,N,C):p.get(k,w,R,A)*d.get(k,C,I,N)}l.set(S,v,x,w,C)}return l.toTensor()},e.prototype.conv3dDerFilter=function(t,n,o){for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=at(o.filterShape,"float32"),f=h.values,p=h.strides,d=p[0],v=p[1],m=p[2],g=p[3],x=this.readSync(n.dataId),b=n.strides,y=b[0],w=b[1],C=b[2],S=b[3],k=this.readSync(t.dataId),I=t.strides,R=I[0],N=I[1],A=I[2],L=I[3],M=o.padInfo.front,B=o.padInfo.left,U=o.padInfo.top,W=0;W<u;++W)for(var z=Math.max(0,Math.ceil((M-W)/a)),G=Math.min(o.outDepth,(o.inDepth+M-W)/a),H=W*d,j=0;j<c;++j)for(var J=Math.max(0,Math.ceil((U-j)/i)),nt=Math.min(o.outHeight,(o.inHeight+U-j)/i),st=j*v+H,ut=0;ut<l;++ut)for(var lt=Math.max(0,Math.ceil((B-ut)/s)),dt=Math.min(o.outWidth,(o.inWidth+B-ut)/s),ft=ut*m+st,vt=0;vt<o.inChannels;++vt)for(var At=vt*g+ft,pt=0;pt<o.outChannels;++pt){for(var bt=0,gt=0;gt<o.batchSize;++gt)for(var St=gt*R,_t=gt*y,Et=z;Et<G;++Et)for(var be=(W+Et*a-M)*N+St,we=Et*w+_t,re=J;re<nt;++re)for(var _n=(j+re*i-U)*A+be,Oe=re*C+we,Xe=lt;Xe<dt;++Xe){var Be=Xe*S+Oe;bt+=k[(ut+Xe*s-B)*L+_n+vt]*x[Be+pt]}f[At+pt]=bt}return h.toTensor()},e.prototype.fusedDepthwiseConv2D=function(t){var n=t.input,o=t.filter,a=t.convInfo,i=t.bias,s=t.activation,u=t.preluActivationWeights,c=this.depthwiseConv2D(n,o,a);return i&&(c=this.add(c,i)),s&&(c=Go(this,c,s,u)),c},e.prototype.depthwiseConv2D=function(t,n,o){V([t,n],"depthwiseConv2D");for(var a=o.filterHeight,i=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=at(o.outShape,t.dtype),p=this.readSync(t.dataId),d=this.readSync(n.dataId),v=f.values,m=0;m<o.batchSize;++m)for(var g=m*t.strides[0],x=m*f.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*f.strides[1],w=b*o.strideHeight-c,C=0;C<a;++C){var S=w+C*s;if(!(S<0||S>=o.inHeight))for(var k=C*n.strides[0],I=g+S*t.strides[1],R=0;R<o.outWidth;++R)for(var N=y+R*f.strides[2],A=R*o.strideWidth-l,L=0;L<i;++L){var M=A+L*u;if(!(M<0||M>=o.inWidth))for(var B=k+L*n.strides[1],U=I+M*o.inChannels,W=N,z=B,G=0;G<o.inChannels;++G){for(var H=p[U+G],j=0;j<h;++j)v[W+j]+=H*d[z+j];W+=h,z+=h}}}return f.toTensor()},e.prototype.depthwiseConv2DDerInput=function(t,n,o){V([t,n],"depthwiseConv2DDerInput");for(var a=at(o.inShape,"float32"),i=a.values,s=a.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(t.dataId),f=t.strides,p=f[0],d=f[1],v=f[2],m=this.readSync(n.dataId),g=n.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,C=o.filterHeight,S=o.filterWidth,k=o.inChannels,I=o.inHeight,R=o.inWidth,N=o.outChannels,A=o.outHeight,L=o.outWidth,M=o.strideHeight,B=o.strideWidth,U=C-1-o.padInfo.top,W=S-1-o.padInfo.left,z=N/k,G=0;G<w;++G)for(var H=0;H<k;++H)for(var j=0;j<I;++j)for(var J=j-U,nt=Math.max(0,Math.ceil(J/M)),st=Math.min(A,(C+J)/M),ut=0;ut<R;++ut){for(var lt=ut-W,dt=Math.max(0,Math.ceil(lt/B)),ft=Math.min(L,(S+lt)/B),vt=0,At=nt;At<st;++At)for(var pt=At*M-J,bt=dt;bt<ft;++bt)for(var gt=p*G+d*At+v*bt,St=x*(C-1-pt)+b*(S-1-(bt*B-lt))+y*H,_t=0;_t<z;++_t)vt+=h[gt+(H*z+_t)]*m[St+_t];i[u*G+c*j+l*ut+H]=vt}return a.toTensor()},e.prototype.depthwiseConv2DDerFilter=function(t,n,o){V([t,n],"depthwiseConv2DDerFilter");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=at(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,p=this.bufferSync(t),d=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/a)),g=Math.min(o.outHeight,(o.inHeight+h-v)/a),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/i)),y=Math.min(o.outWidth,(o.inWidth+l-x)/i),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/f),S=w%f,k=0,I=0;I<o.batchSize;++I)for(var R=m;R<g;++R)for(var N=v+R*a-h,A=b;A<y;++A){var L=x+A*i-l;k+=p.get(I,N,L,C)*d.get(I,R,A,w)}c.set(k,v,x,C,S)}return c.toTensor()},e.prototype.tile=function(t,n){return V(t,"tile"),lu(this.bufferSync(t),n)},e.prototype.pad=function(t,n,o){V(t,"pad");var a=n.map(function(f,p){return f[0]+t.shape[p]+f[1]}),i=n.map(function(f){return f[0]}),s=this.bufferSync(t),u=at(a,t.dtype);o!==0&&u.values.fill(o);for(var c=0;c<t.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,p){return f+i[p]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},e.prototype.transpose=function(t,n){V(t,"transpose");for(var o=new Array(t.rank),a=0;a<o.length;a++)o[a]=t.shape[n[a]];var i=this.readSync(t.dataId),s=at(o,t.dtype),u=this.bufferSync(t);for(a=0;a<t.size;++a){for(var c=u.indexToLoc(a),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var f=s.locToIndex(l);s.values[f]=i[a]}return s.toTensor()},e.prototype.gather=function(t,n,o){V([t,n],"gather");var a=t.shape.slice(),i=this.readSync(n.dataId);a[o]=i.length;for(var s=at(a,t.dtype),u=this.bufferSync(t),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=i[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},e.prototype.batchToSpaceND=function(t,n,o){V([t],"batchToSpaceND");var a=n.reduce(function(h,f){return h*f}),i=Gr(t.shape,n,a),s=Hr(i.length,n.length),u=qr(t.shape,n,a),c=Js(o,n.length),l=Qs(u,o,n.length);return t.reshape(i).transpose(s).reshape(u).slice(c,l)},e.prototype.spaceToBatchND=function(t,n,o){V([t],"spaceToBatchND");var a=n.reduce(function(f,p){return f*p}),i=[[0,0]];i.push.apply(i,o);for(var s=1+n.length;s<t.shape.length;++s)i.push([0,0]);var u=t.pad(i),c=Gr(u.shape,n,a,!1),l=Hr(c.length,n.length,!1),h=qr(u.shape,n,a,!1);return u.reshape(c).transpose(l).reshape(h)},e.prototype.pool=function(t,n,o){V(t,"pool");for(var a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,p=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,d=this.readSync(t.dataId),v=at(n.outShape,t.dtype),m=v.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],x=n.outShape[2]*n.outShape[3],b=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*g,C=y*t.strides[0],S=0;S<n.inChannels;++S)for(var k=0;k<n.outHeight;++k)for(var I=k*a-h,R=Math.max(0,I),N=Math.min(n.inHeight,c+I),A=w+k*x,L=0;L<n.outWidth;++L){for(var M=L*i-f,B=Math.max(0,M),U=Math.min(n.inWidth,l+M),W=p,z=0,G=0,H=R;H<N;H+=s){for(var j=C+H*t.strides[1],J=B;J<U;J+=u){var nt=d[j+J*t.strides[2]+S];o==="max"&&nt>W?W=nt:o==="avg"&&(z+=nt,G++)}if(isNaN(W))break}m[A+L*b+S]=o==="avg"?z/G:W}return v.toTensor()},e.prototype.maxPool=function(t,n){return this.pool(t,n,"max")},e.prototype.maxPoolPositions=function(t,n){for(var o=at(n.outShape,"int32"),a=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,p=this.bufferSync(t),d=0;d<n.batchSize;++d)for(var v=0;v<n.inChannels;++v)for(var m=0;m<n.outHeight;++m){for(var g=m*a-h,x=g;x<0;)x+=s;for(var b=Math.min(n.inHeight,c+g),y=0;y<n.outWidth;++y){for(var w=y*i-f,C=w;C<0;)C+=u;for(var S=Math.min(n.inWidth,l+w),k=Number.NEGATIVE_INFINITY,I=-1,R=x;R<b;R+=s)for(var N=R-g,A=C;A<S;A+=u){var L=A-w,M=p.get(d,R,A,v);M>k&&(k=M,I=N*l+L)}o.set(I,d,m,y,v)}}return o.toTensor()},e.prototype.maxPoolBackprop=function(t,n,o,a){V([n,o],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,a),s=a.strideHeight,u=a.strideWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,f=a.effectiveFilterWidth,p=f-1-a.padInfo.left,d=h-1-a.padInfo.top,v=at(n.shape,"float32"),m=this.bufferSync(i),g=this.bufferSync(t),x=0;x<a.batchSize;++x)for(var b=0;b<a.inChannels;++b)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-d,S=w-p,k=0,I=0;I<h;I+=c){var R=(C+I)/s;if(!(R<0||R>=a.outHeight||Math.floor(R)!==R))for(var N=0;N<f;N+=l){var A=(S+N)/u;if(!(A<0||A>=a.outWidth||Math.floor(A)!==A)){var L=h*f-1-m.get(x,R,A,b)===I*f+N?1:0;L!==0&&(k+=g.get(x,R,A,b)*L)}}}v.set(k,x,y,w,b)}return v.toTensor()},e.prototype.avgPoolBackprop=function(t,n,o){V([t,n],"avgPoolBackprop");for(var a=o.strideHeight,i=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,p=f-1-o.padInfo.left,d=h-1-o.padInfo.top,v=at(n.shape,"float32"),m=1/(s*u),g=this.bufferSync(t),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-d,S=w-p,k=0,I=0;I<h;I+=c){var R=(C+I)/a;if(!(R<0||R>=o.outHeight||Math.floor(R)!==R))for(var N=0;N<f;N+=l){var A=(S+N)/i;A<0||A>=o.outWidth||Math.floor(A)!==A||(k+=g.get(x,R,A,b))}}v.set(k*m,x,y,w,b)}return v.toTensor()},e.prototype.pool3d=function(t,n,o){V(t,"pool3d");for(var a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,p=n.effectiveFilterWidth,d=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(t.dataId),b=at(n.outShape,t.dtype),y=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],S=n.outShape[3]*n.outShape[4],k=n.outShape[4],I=0;I<n.batchSize;++I)for(var R=I*w,N=I*t.strides[0],A=0;A<n.inChannels;++A)for(var L=0;L<n.outDepth;++L){for(var M=L*a-d,B=M;B<0;)B+=u;for(var U=Math.min(n.inDepth,h+M),W=R+L*C,z=0;z<n.outHeight;++z){for(var G=z*i-v,H=G;H<0;)H+=c;for(var j=Math.min(n.inHeight,f+G),J=W+z*S,nt=0;nt<n.outWidth;++nt){for(var st=nt*s-m,ut=st;ut<0;)ut+=l;for(var lt=Math.min(n.inWidth,p+st),dt=J+nt*k,ft=g,vt=0,At=0,pt=B;pt<U;pt+=u){for(var bt=N+pt*t.strides[1],gt=H;gt<j;gt+=c){for(var St=bt+gt*t.strides[2],_t=ut;_t<lt;_t+=l){var Et=x[St+_t*t.strides[3]+A];if(o==="max"&&Et>ft?ft=Et:o==="avg"&&(vt+=Et,At++),isNaN(ft))break}if(isNaN(ft))break}if(isNaN(ft))break}y[dt+A]=o==="avg"?vt/At:ft}}}return b.toTensor()},e.prototype.avgPool3d=function(t,n){return V(t,"avgPool3d"),this.pool3d(t,n,"avg").toFloat()},e.prototype.avgPool3dBackprop=function(t,n,o){V([t,n],"avgPool3dBackprop");for(var a=o.strideDepth,i=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,p=o.dilationWidth,d=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=d-1-o.padInfo.front,x=m-1-o.padInfo.left,b=v-1-o.padInfo.top,y=at(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(t),S=0;S<o.batchSize;++S)for(var k=0;k<o.inChannels;++k)for(var I=0;I<o.inDepth;++I)for(var R=0;R<o.inHeight;++R)for(var N=0;N<o.inWidth;++N){for(var A=I-g,L=R-b,M=N-x,B=0,U=0;U<d;U+=h){var W=(A+U)/a;if(!(W<0||W>=o.outDepth||Math.floor(W)!==W))for(var z=0;z<v;z+=f){var G=(L+z)/i;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<m;H+=p){var j=(M+H)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=C.get(S,W,G,j,k))}}}y.set(B*w,S,I,R,N,k)}return y.toTensor()},e.prototype.maxPool3d=function(t,n){return V(t,"maxPool3d"),this.pool3d(t,n,"max").toFloat()},e.prototype.maxPool3dPositions=function(t,n){for(var o=at(n.outShape,"int32"),a=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,p=n.effectiveFilterWidth,d=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=this.bufferSync(t),x=0;x<n.batchSize;++x)for(var b=0;b<n.inChannels;++b)for(var y=0;y<n.outDepth;++y){for(var w=y*a-d,C=w;C<0;)C+=u;for(var S=Math.min(n.inDepth,h+w),k=0;k<n.outHeight;++k){for(var I=k*i-v,R=I;R<0;)R+=c;for(var N=Math.min(n.inHeight,f+I),A=0;A<n.outWidth;++A){for(var L=A*s-m,M=L;M<0;)M+=l;for(var B=Math.min(n.inWidth,p+L),U=Number.NEGATIVE_INFINITY,W=-1,z=C;z<S;z+=u)for(var G=z-w,H=R;H<N;H+=c)for(var j=H-I,J=M;J<B;J+=l){var nt=J-L,st=g.get(x,z,H,J,b);st>=U&&(U=st,W=G*f*p+j*f+nt)}o.set(W,x,y,k,A,b)}}}return o.toTensor()},e.prototype.maxPool3dBackprop=function(t,n,o,a){V([n,o],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,a),s=a.strideDepth,u=a.strideHeight,c=a.strideWidth,l=a.dilationDepth,h=a.dilationHeight,f=a.dilationWidth,p=a.effectiveFilterDepth,d=a.effectiveFilterHeight,v=a.effectiveFilterWidth,m=p-1-a.padInfo.front,g=v-1-a.padInfo.left,x=d-1-a.padInfo.top,b=at(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(t),C=0;C<a.batchSize;++C)for(var S=0;S<a.inChannels;++S)for(var k=0;k<a.inDepth;++k)for(var I=0;I<a.inHeight;++I)for(var R=0;R<a.inWidth;++R){for(var N=k-m,A=I-x,L=R-g,M=0,B=0;B<p;B+=l){var U=(N+B)/s;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var W=0;W<d;W+=h){var z=(A+W)/u;if(!(z<0||z>=a.outHeight||Math.floor(z)!==z))for(var G=0;G<v;G+=f){var H=(L+G)/c;if(!(H<0||H>=a.outWidth||Math.floor(H)!==H)){var j=p*d*v-1-y.get(C,U,z,H,S)===B*d*v+W*v+G?1:0;j!==0&&(M+=w.get(C,U,z,H,S)*j)}}}}b.set(M,C,k,I,R,S)}return b.toTensor()},e.prototype.cast=function(t,n){return iu(t,n,this)},e.prototype.reshape=function(t,n){return ha(t,n)},e.prototype.avgPool=function(t,n){return V(t,"avgPool"),this.pool(t,n,"avg").toFloat()},e.prototype.resizeBilinear=function(t,n,o,a){V(t,"resizeBilinear");for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(t.dataId),f=new Float32Array($([s,n,o,l])),p=[a&&n>1?u-1:u,a&&o>1?c-1:c],d=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=0,m=p[0]/d[0],g=p[1]/d[1],x=0;x<s;x++)for(var b=0;b<n;b++)for(var y=m*b,w=Math.floor(y),C=y-w,S=Math.min(u-1,Math.ceil(y)),k=x*t.strides[0]+w*t.strides[1],I=x*t.strides[0]+S*t.strides[1],R=0;R<o;R++)for(var N=g*R,A=Math.floor(N),L=N-A,M=Math.min(c-1,Math.ceil(N)),B=k+A*t.strides[2],U=I+A*t.strides[2],W=k+M*t.strides[2],z=I+M*t.strides[2],G=0;G<l;G++){var H=h[B+G],j=h[U+G],J=H+(h[W+G]-H)*L,nt=J+(j+(h[z+G]-j)*L-J)*C;f[v++]=nt}return Ht(f,[s,n,o,l])},e.prototype.resizeBilinearBackprop=function(t,n,o){V([t,n],"resizeBilinearBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=t.shape,h=l[1],f=l[2],p=new Float32Array(i*s*u*c),d=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],m=d[0]/v[0],g=d[1]/v[1],x=this.readSync(t.dataId),b=0,y=0;y<i;y++)for(var w=y*n.strides[0],C=0;C<h;C++)for(var S=C*m,k=Math.floor(S),I=Math.min(Math.ceil(S),s-1),R=w+k*n.strides[1],N=w+I*n.strides[1],A=S-k,L=1-A,M=0;M<f;M++)for(var B=M*g,U=Math.floor(B),W=Math.min(Math.ceil(B),u-1),z=B-U,G=1-z,H=R+U*n.strides[2],j=R+W*n.strides[2],J=N+U*n.strides[2],nt=N+W*n.strides[2],st=L*G,ut=L*z,lt=A*G,dt=A*z,ft=0;ft<c;ft++){var vt=x[b++];p[H+ft]+=vt*st,p[j+ft]+=vt*ut,p[J+ft]+=vt*lt,p[nt+ft]+=vt*dt}return Jt(p,[i,u,s,c],n.dtype)},e.prototype.resizeNearestNeighbor=function(t,n,o,a){V(t,"resizeNearestNeighbor");for(var i=t.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(t.dataId),f=new Float32Array(s*n*o*l),p=[a&&n>1?u-1:u,a&&o>1?c-1:c],d=[a&&n>1?n-1:n,a&&o>1?o-1:o],v=p[0]/d[0],m=p[1]/d[1],g=0,x=0;x<s;x++)for(var b=x*t.strides[0],y=0;y<n;y++)for(var w=v*y,C=b+Math.min(u-1,a?Math.round(w):Math.floor(w))*t.strides[1],S=0;S<o;S++)for(var k=m*S,I=C+Math.min(c-1,a?Math.round(k):Math.floor(k))*t.strides[2],R=0;R<l;R++){var N=h[I+R];f[g++]=N}return Ht(f,[s,n,o,l],t.dtype)},e.prototype.resizeNearestNeighborBackprop=function(t,n,o){V([t,n],"resizeNearestNeighborBackprop");for(var a=n.shape,i=a[0],s=a[1],u=a[2],c=a[3],l=t.shape,h=l[1],f=l[2],p=new Float32Array(i*s*u*c),d=this.readSync(t.dataId),v=[o&&h>1?s-1:s,o&&f>1?u-1:u],m=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=v[0]/m[0],x=v[1]/m[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,C=2*Math.ceil(y)+2,S=0;S<i;S++)for(var k=S*n.strides[0],I=0;I<s;I++)for(var R=k+I*n.strides[1],N=Math.floor(I*b),A=Math.floor(N-w/2),L=0;L<u;L++)for(var M=R+L*n.strides[2],B=Math.floor(L*y),U=Math.floor(B-C/2),W=0;W<c;W++){for(var z=0,G=0;G<w;G++){var H=G+A;if(!(H<0||H>=h)){var j=k+H*t.strides[1],J=H*g;if(I===Math.min(s-1,o?Math.round(J):Math.floor(J)))for(var nt=0;nt<C;nt++){var st=nt+U;if(!(st<0||st>=f)){var ut=j+st*t.strides[2],lt=st*x;L===Math.min(u-1,o?Math.round(lt):Math.floor(lt))&&(z+=d[ut+W])}}}}p[M+W]=z}return Jt(p,n.shape,n.dtype)},e.prototype.batchNormalization=function(t,n,o,a,i,s){V([t,n,o,i,s],"batchNorm");for(var u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),p=new Float32Array(u.length),d=f.length,v=h.length,m=l.length,g=c.length,x=0,b=0,y=0,w=0,C=0;C<u.length;++C)p[C]=f[x++]+(u[C]-c[b++])*h[y++]/Math.sqrt(l[w++]+a),x>=d&&(x=0),b>=g&&(b=0),y>=v&&(y=0),w>=m&&(w=0);return Jt(p,t.shape)},e.prototype.localResponseNormalization4D=function(t,n,o,a,i){V(t,"localResponseNormalization4D");var s=t.shape[3],u=s-1,c=this.readSync(t.dataId),l=t.size,h=new Float32Array(l);function f(m){for(var g=m%s,x=m-g+Math.max(0,g-n),b=m-g+Math.min(g+n,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var p=0;p<l;p++){var d=f(p),v=c[p]*Math.pow(o+a*d,-i);h[p]=v}return Jt(h,t.shape)},e.prototype.LRNGrad=function(t,n,o,a,i,s,u){V(t,"LRNGrad");for(var c=t.shape[3],l=this.readSync(t.dataId),h=this.readSync(n.dataId),f=this.readSync(o.dataId),p=new Float32Array(t.size),d=t.size,v=0;v<d;v++){for(var m=v%c,g=v-m+Math.max(0,m-a),x=v-m+Math.min(c,m+a+1),b=0,y=g;y<x;y++)b+=Math.pow(h[y],2);for(b=s*b+i,y=g;y<x;y++){var w=-2*s*u*h[y]*f[v]/b;v===y&&(w+=Math.pow(b,-u)),w*=l[v],p[y]+=w}}return Jt(p,t.shape)},e.prototype.multinomial=function(t,n,o,a){V(t,"multinomial");for(var i=n?t:Ge(t),s=i.shape[0],u=i.shape[1],c=Ct([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),f=0;f<s;++f){var p=f*u,d=new Float32Array(u-1);d[0]=h[p];for(var v=1;v<d.length;++v)d[v]=d[v-1]+h[p+v];for(var m=oo(a.toString()),g=f*o,x=0;x<o;++x){var b=m();l[g+x]=d.length;for(var y=0;y<d.length;y++)if(b<d[y]){l[g+x]=y;break}}}return c},e.prototype.oneHot=function(t,n,o,a){V(t,"oneHot");var i=new Float32Array(t.size*n);i.fill(a);for(var s=this.readSync(t.dataId),u=0;u<t.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=o);return Ze(i,[t.size,n],"int32")},e.prototype.nonMaxSuppression=function(t,n,o,a,i){return V(t,"nonMaxSuppression"),Ta(this.readSync(t.dataId),this.readSync(n.dataId),o,a,i)},e.prototype.fft=function(t){return this.fftBatch(t,!1)},e.prototype.ifft=function(t){return this.fftBatch(t,!0)},e.prototype.fftBatch=function(t,n){for(var o=t.shape[0],a=t.shape[1],i=at(t.shape,"float32"),s=at(t.shape,"float32"),u=he(t).as2D(o,a),c=ke(t).as2D(o,a),l=0;l<o;l++)for(var h=u.slice([l,0],[1,a]),f=c.slice([l,0],[1,a]),p=Vt(h,f),d=this.readSync(this.fftImpl(p,n).dataId),v=0;v<a;v++){var m=Oi(d,v);i.values[l*a+v]=m.real,s.values[l*a+v]=m.imag}return Vt(i.toTensor(),s.toTensor()).as2D(o,a)},e.prototype.fftImpl=function(t,n){var o=t.as1D(),a=o.size;if(this.isExponentOf2(a)){var i=this.fftRadix2(o,a,n).as2D(t.shape[0],t.shape[1]);return n&&(i=Vt(he(i).div(q(a)),ke(i).div(q(a)))),i}var s=this.readSync(t.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,a,n));return Vt(u.real,u.imag).as2D(t.shape[0],t.shape[1])},e.prototype.isExponentOf2=function(t){return(t&t-1)==0},e.prototype.fftRadix2=function(t,n,o){if(n===1)return t;var a=this.readSync(t.dataId),i=n/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),u=Vt(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(a),l=Vt(c.real,c.imag).as1D();u=this.fftRadix2(u,i,o),l=this.fftRadix2(l,i,o);var h=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:b,imag:y}}(n,o),f=Vt(h.real,h.imag).mul(l),p=u.add(f),d=u.sub(f),v=he(p).concat(he(d)),m=ke(p).concat(ke(d));return Vt(v,m).as1D()},e.prototype.fourierTransformByMatmul=function(t,n,o){for(var a=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Uh(i*c,n,o),h=Oi(t,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),zh(a,s,u,i)}return a},e.prototype.depthToSpace=function(t,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var a=t.shape[0],i=t.shape[1],s=t.shape[2],u=t.shape[3],c=i*n,l=s*n,h=u/(n*n),f=this.readSync(t.dataId),p=new Float32Array(a*c*l*h),d=0,v=0;v<a;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/n),x=m%n,b=0;b<l;++b)for(var y=Math.floor(b/n),w=(x*n+b%n)*h,C=0;C<h;++C){var S=C+w+u*(y+s*(g+i*v));p[d++]=f[S]}return Jt(p,[a,c,l,h])},e.prototype.broadcastedBinaryOp=function(t,n,o,a){var i=ht(t.shape,n.shape),s=at(i,o),u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=Je(t.shape,i),h=Je(n.shape,i),f=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;++p)f[p]=a(u[p%u.length],c[p%c.length]);else{var d=this.bufferSync(t),v=this.bufferSync(n),m=function(g){var x=s.indexToLoc(g),b=x.slice(-t.rank);l.forEach(function(S){return b[S]=0});var y=d.locToIndex(b),w=x.slice(-n.rank);h.forEach(function(S){return w[S]=0});var C=v.locToIndex(w);f[g]=a(u[y],c[C])};for(p=0;p<f.length;++p)m(p)}return s.toTensor()},e.prototype.broadcastedBinaryComplexOp=function(t,n,o){var a=ht(t.shape,n.shape),i=at(a,"float32"),s=at(a,"float32"),u=this.readSync(t.dataId),c=this.readSync(n.dataId),l=Je(t.shape,a),h=Je(n.shape,a),f=i.values,p=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;d++){var v=d%u.length,m=d%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);f[d]=g.real,p[d]=g.imag}else{var x=this.bufferSync(this.data.get(t.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),S=C.slice(-t.rank);l.forEach(function(A){return S[A]=0});var k=x.locToIndex(S),I=C.slice(-n.rank);h.forEach(function(A){return I[A]=0});var R=b.locToIndex(I),N=o(u[2*k],u[2*k+1],c[2*R],c[2*R+1]);f[w]=N.real,p[w]=N.imag};for(d=0;d<f.length;d++)y(d)}return this.complex(i.toTensor(),s.toTensor())},e.prototype.split=function(t,n,o){return cu(t,n,o)},e.prototype.dispose=function(){},e.prototype.floatPrecision=function(){return 32},e.prototype.epsilon=function(){return 1e-7},e.prototype.cropAndResize=function(t,n,o,a,i,s){for(var u=t.shape,c=u[0],l=u[1],h=u[2],f=u[3],p=n.shape[0],d=a[0],v=a[1],m=at([p,d,v,f],"float32"),g=this.readSync(n.dataId),x=this.readSync(o.dataId),b=this.readSync(t.dataId),y=t.strides,w=m.strides,C=0;C<p;C++){var S=4*C,k=g[S],I=g[S+1],R=g[S+2],N=g[S+3],A=x[C];if(!(A>=c))for(var L=d>1?(R-k)*(l-1)/(d-1):0,M=v>1?(N-I)*(h-1)/(v-1):0,B=0;B<d;B++){var U=d>1?k*(l-1)+B*L:.5*(k+R)*(l-1);if(U<0||U>l-1)for(var W=0;W<v;W++)for(var z=0;z<f;z++){var G=z+W*w[2]+B*w[1]+C*w[0];m.values[G]=s}else if(i==="bilinear"){var H=Math.floor(U),j=Math.ceil(U),J=U-H;for(W=0;W<v;W++)if((pt=v>1?I*(h-1)+W*M:.5*(I+N)*(h-1))<0||pt>h-1)for(z=0;z<f;z++)G=z+W*w[2]+B*w[1]+C*w[0],m.values[G]=s;else{var nt=Math.floor(pt),st=Math.ceil(pt),ut=pt-nt;for(z=0;z<f;z++){var lt=b[G=z+nt*y[2]+H*y[1]+A*y[0]],dt=b[G=z+st*y[2]+H*y[1]+A*y[0]],ft=b[G=z+nt*y[2]+j*y[1]+A*y[0]],vt=lt+(dt-lt)*ut,At=ft+(b[G=z+st*y[2]+j*y[1]+A*y[0]]-ft)*ut;G=z+W*w[2]+B*w[1]+C*w[0],m.values[G]=vt+(At-vt)*J}}}else for(W=0;W<v;++W){var pt;if((pt=v>1?I*(h-1)+W*M:.5*(I+N)*(h-1))<0||pt>h-1)for(z=0;z<f;z++)G=z+W*w[2]+B*w[1]+C*w[0],m.values[G]=s;else{var bt=Math.round(pt),gt=Math.round(U);for(z=0;z<f;z++){var St=z+bt*y[2]+gt*y[1]+A*y[0],_t=z+W*w[2]+B*w[1]+C*w[0];m.values[_t]=b[St]}}}}}return m.toTensor()},e.prototype.sparseToDense=function(t,n,o,a){var i=jr(0,t,o),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(t,n,o,h,c,u,s,l,a,!1)},e.prototype.gatherND=function(t,n){var o=n.shape,a=o[o.length-1],i=Zs(t,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return Ht([],s,t.dtype);for(var h=new er([u,c],t.dtype),f=this.readSync(n.dataId),p=this.readSync(t.dataId),d=0;d<u;d++){for(var v=[],m=0,g=0;g<a;g++){var x=f[d*a+g];m+=x*l[g],v.push(x)}if(m<0||m>=t.size/c)throw new Error("Invalid indices: "+v+" does not index into "+t.shape);for(var b=0;b<c;b++)h.values[d*c+b]=p[m*c+b]}return h.toTensor().reshape(s)},e.prototype.scatterND=function(t,n,o){var a=jr(0,t,o),i=a.sliceRank,s=a.numUpdates,u=a.sliceSize,c=a.strides,l=a.outputSize,h=q(0);return this.scatter(t,n,o,l,u,s,i,c,h,!0)},e.prototype.fill=function(t,n,o){var a=Or(o=o||cr(n),$(t));return a.fill(n),T.makeTensor(a,t,o,this)},e.prototype.onesLike=function(t){if(t.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(t.shape,1,t.dtype)},e.prototype.zerosLike=function(t){var n=Or(t.dtype,$(t.shape));return this.makeOutput(n,t.shape,t.dtype)},e.prototype.linspace=function(t,n,o){return su(t,n,o)},e.prototype.scatter=function(t,n,o,a,i,s,u,c,l,h){var f=[a/i,i],p=this.readSync(t.dataId),d=this.readSync(n.dataId);if(a===0)return Ht([],o,n.dtype);var v=new er(f,n.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],x=0,b=0;b<u;b++){var y=p[m*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=a/i)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<i;w++)h?v.values[x*i+w]+=d[m*i+w]:v.values[x*i+w]=n.rank===0?d[0]:d[m*i+w]}return v.toTensor().reshape(o)},e}(ou);T.registerBackend("cpu",function(){return new um},1);for(var Ho=0,os=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs,o=e,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=t;V(a,"NonMaxSuppressionWithScore");var p=Na(f.data.get(a.dataId).values,f.data.get(i.dataId).values,u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e.x,o=t;V(n,"square");for(var a=o.data.get(n.dataId).values,i=new Float32Array(a.length),s=0;s<a.length;++s){var u=a[s];i[s]=u*u}return{dataId:o.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:or,backendName:"cpu",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e,o=n.a,a=n.b,i=t;V([o,a],or);var s=i.data.get(o.dataId).values,u=i.data.get(a.dataId).values,c=function(f,p,d,v,m,g){var x=ht(f,p),b=x.length,y=Ae(x),w=tr(m,$(x)),C=f.length,S=p.length,k=Ae(f),I=Ae(p),R=Je(f,x),N=Je(p,x);if(R.length+N.length===0)for(var A=0;A<w.length;++A)w[A]=g(d[A%d.length],v[A%v.length]);else{var L=function(M){var B=gl(M,b,y),U=B.slice(-C);R.forEach(function(H){return U[H]=0});var W=ki(U,C,k),z=B.slice(-S);N.forEach(function(H){return z[H]=0});var G=ki(z,S,I);w[M]=g(d[W],v[G])};for(A=0;A<w.length;++A)L(A)}return[w,x]}(o.shape,a.shape,s,u,o.dtype,function(f,p){var d=f-p;return d*d}),l=c[0],h=c[1];return{dataId:i.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];Ho<os.length;Ho++)Ns(os[Ho]);var kn,cm=function(r){this.variableNames=["A"];var e=Kt(),t=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+t+`.0);

        vec4 values = `+e.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},lm=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var e=Kt(),t=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+t+`.0);
            vec4 values = `+e.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+e.output+` = result;
      }
    `};for(var qo=0,as=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs,o=e.pixels,a=n.numChannels,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,a];(s||i)&&(kn==null&&(kn=document.createElement("canvas").getContext("2d")),kn.canvas.width=c,kn.canvas.height=l,kn.drawImage(o,0,0,c,l),o=kn.canvas);var p=t.makeTensorInfo(h,"int32");t.texData.get(p.dataId).usage=ie.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(p.dataId),o);var d=O().getBool("WEBGL_PACK")?new lm(f):new cm(f),v=t.runWebGLProgram(d,[p],"int32");return t.disposeData(p.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=r.attrs;zr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=e,a=o.boxes,i=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=t,p=Na(f.readSync(a.dataId),f.readSync(i.dataId),u,c,l,h);return[p.selectedIndices,p.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e.x,o=t,a=new it(n.shape,"return x * x;");return o.runWebGLProgram(a,[n],n.dtype)}},{kernelName:or,backendName:"webgl",kernelFunc:function(r){var e=r.inputs,t=r.backend,n=e,o=n.a,a=n.b,i=t,s=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new ze("return (a - b) * (a - b);",o.shape,a.shape):new Dt("return (a - b) * (a - b);",o.shape,a.shape);return i.compileAndRun(s,[o,a])}}];qo<as.length;qo++)Ns(as[qo]);for(var jo=0,is=[{kernelName:"Square",gradFunc:function(r,e){var t=e[0];return{x:function(){return r.mul(t.toFloat().mul(2))}}}},{kernelName:or,gradFunc:function(r,e){var t=e[0],n=e[1],o=q(2);return{a:function(){return Yt(r,Yt(o,Bt(t,n)))},b:function(){return Yt(r,Yt(o,Bt(n,t)))}}}}];jo<is.length;jo++)il(is[jo]);var hm=function(){function r(){}return r.prototype.fetch=function(e,t){return fetch(e,t)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+t);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)},r.prototype.decode=function(e,t){return new TextDecoder(t).decode(e)},r}();O().get("IS_BROWSER")&&O().setPlatform("browser",new hm);var Ko,fm=function(){return require("node-fetch")},pm=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(e,t){return O().global.fetch!=null?O().global.fetch(e,t):(Ko==null&&(Ko=fm()),Ko(e,t))},r.prototype.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6},r.prototype.encode=function(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+t);return this.textEncoder.encode(e)},r.prototype.decode=function(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)},r}();O().get("IS_NODE")&&O().setPlatform("node",new pm);var da={float32:4,int32:4,uint16:2,uint8:1,bool:1},Zr=4;function ec(r,e){for(var t={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=$(l),f=void 0;if("quantization"in s){var p=s.quantization;if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+p.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var d=da[p.dtype],v=r.slice(n,n+h*d),m=p.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")f=Float32Array.from(m,function(C){return C*p.scale+p.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(m,function(C){return Math.round(C*p.scale+p.min)})}n+=h*d}else if(c==="string"){var g=$(s.shape);f=[];for(var x=0;x<g;x++){var b=new Uint32Array(r.slice(n,n+Zr))[0];n+=Zr;var y=new Uint8Array(r.slice(n,n+b));f.push(y),n+=b}}else{var w=da[c];if(v=r.slice(n,n+h*w),c==="float32")f=new Float32Array(v);else if(c==="int32")f=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(v)}n+=h*w}t[u]=Ht(f,l,c)},a=0,i=e;a<i.length;a++)o(i[a]);return t}function dm(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var e=0,t=[];r.forEach(function(a){if(e+=a.byteLength,t.push(a.byteLength===a.buffer.byteLength?a:new a.constructor(a)),!(a instanceof Float32Array||a instanceof Int32Array||a instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+a.constructor.name)});var n=new Uint8Array(e),o=0;return t.forEach(function(a){n.set(new Uint8Array(a.buffer),o),o+=a.byteLength}),n.buffer}var va=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ss(r){return va?Buffer.byteLength(r):new Blob([r]).size}function Ja(r){var e=0;r.forEach(function(o){e+=o.byteLength});var t=new Uint8Array(e),n=0;return r.forEach(function(o){t.set(new Uint8Array(o),n),n+=o.byteLength}),t.buffer}function us(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var e=r.split("/");return e[e.length-1]}function mr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:ss(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:ss(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var se=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(e){r.getInstance().saveRouters.push(e)},r.registerLoadRouter=function(e){r.getInstance().loadRouters.push(e)},r.getSaveHandlers=function(e){return r.getHandlers(e,"save")},r.getLoadHandlers=function(e,t){return r.getHandlers(e,"load",t)},r.getHandlers=function(e,t,n){var o=[];return(t==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(a){var i=a(e,n);i!==null&&o.push(i)}),o},r}(),Bn="://",tn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(e,t){E(e!=null,function(){return"scheme must not be undefined or null."}),e.endsWith(Bn)&&(e=e.slice(0,e.indexOf(Bn))),E(e.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[e]==null,function(){return"A model store manager is already registered for scheme '"+e+"'."}),n.managers[e]=t},r.getManager=function(e){var t=this.getInstance().managers[e];if(t==null)throw new Error("Cannot find model manager for scheme '"+e+"'");return t},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Pr(r){if(r.indexOf(Bn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+tn.getSchemes().join(","));return{scheme:r.split(Bn)[0],path:r.split(Bn)[1]}}function cs(r,e,t){return t===void 0&&(t=!1),X(this,void 0,void 0,function(){var n,o,a,i,s,u,c,l,h;return Y(this,function(f){switch(f.label){case 0:return E(r!==e,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=se.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((a=se.getSaveHandlers(e)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+e+"."}),E(a.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+e+"."}),i=a[0],s=Pr(r).scheme,u=Pr(r).path,c=s===Pr(r).scheme,[4,o.load()];case 1:return l=f.sent(),t&&c?[4,tn.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,i.save(l)];case 4:return h=f.sent(),!t||c?[3,6]:[4,tn.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var pn="models_store",Qe="model_info_store";function nc(){if(!O().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,e=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function ma(r){var e=r.result;e.createObjectStore(pn,{keyPath:"modelPath"}),e.createObjectStore(Qe,{keyPath:"modelPath"})}var Ln=function(){function r(e){if(this.indexedDB=nc(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}return r.prototype.save=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,e)]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(e,t){var n=this;return new Promise(function(o,a){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return ma(i)},i.onsuccess=function(){var s=i.result;if(t==null){var u=s.transaction(pn,"readonly"),c=u.objectStore(pn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),a(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),a(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=mr(t),f=s.transaction(Qe,"readwrite"),p=f.objectStore(Qe),d=p.put({modelPath:n.modelPath,modelArtifactsInfo:h});d.onsuccess=function(){var v=(l=s.transaction(pn,"readwrite")).objectStore(pn).put({modelPath:n.modelPath,modelArtifacts:t,modelArtifactsInfo:h});v.onsuccess=function(){return o({modelArtifactsInfo:h})},v.onerror=function(m){var g=(p=f.objectStore(Qe)).delete(n.modelPath);g.onsuccess=function(){return s.close(),a(v.error)},g.onerror=function(x){return s.close(),a(v.error)}}},d.onerror=function(v){return s.close(),a(d.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return a(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),ls=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Ln.URL_SCHEME)?(e=r.slice(Ln.URL_SCHEME.length),new Ln(e)):null;var e};se.registerSaveRouter(ls),se.registerLoadRouter(ls);var vm=function(){function r(){this.indexedDB=nc()}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var e=this;return Y(this,function(t){return[2,new Promise(function(n,o){var a=e.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return ma(a)},a.onsuccess=function(){var i=a.result,s=i.transaction(Qe,"readonly"),u=s.objectStore(Qe).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),o(u.error)},s.oncomplete=function(){return i.close()}},a.onerror=function(i){return o(a.error)}})]})})},r.prototype.removeModel=function(e){return X(this,void 0,void 0,function(){var t=this;return Y(this,function(n){var o;return e=(o=e).startsWith(Ln.URL_SCHEME)?o.slice(Ln.URL_SCHEME.length):o,[2,new Promise(function(a,i){var s=t.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return ma(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Qe,"readwrite"),h=l.objectStore(Qe),f=h.get(e);f.onsuccess=function(){if(f.result==null)return c.close(),i(new Error("Cannot find model with path '"+e+"' in IndexedDB."));var p=h.delete(e),d=function(){var v=(u=c.transaction(pn,"readwrite")).objectStore(pn).delete(e);v.onsuccess=function(){return a(f.result.modelArtifactsInfo)},v.onerror=function(m){return i(f.error)}};p.onsuccess=d,p.onerror=function(v){return d(),c.close(),i(f.error)}},f.onerror=function(p){return c.close(),i(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(O().getBool("IS_BROWSER"))try{tn.registerManager(Ln.URL_SCHEME,new vm)}catch{}var Ue="/",Fn="tensorflowjs_models",rc="info",mm="model_topology",gm="weight_specs",ym="weight_data",xm="model_metadata";function oc(r){return{info:[Fn,r,rc].join(Ue),topology:[Fn,r,mm].join(Ue),weightSpecs:[Fn,r,gm].join(Ue),weightData:[Fn,r,ym].join(Ue),modelMetadata:[Fn,r,xm].join(Ue)}}function bm(r){var e=r.split(Ue);if(e.length<3)throw new Error("Invalid key format: "+r);return e.slice(1,e.length-1).join(Ue)}var Wn=function(){function r(e){if(!O().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=oc(this.modelPath)}return r.prototype.save=function(e){return X(this,void 0,void 0,function(){var t,n,o;return Y(this,function(a){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),o=mr(e);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(va)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(e.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var e,t,n,o,a,i,s;return Y(this,function(u){if((e=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(t={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(t.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(t.weightSpecs=o,(a=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(a),t.format=i.format,t.generatedBy=i.generatedBy,t.convertedBy=i.convertedBy,t.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return t.weightData=function(c){if(va){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),p=0;p<h.length;++p)f.set([h.charCodeAt(p)],p);return f.buffer}(s),[2,t]})})},r.URL_SCHEME="localstorage://",r}(),hs=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Wn.URL_SCHEME)?(e=r.slice(Wn.URL_SCHEME.length),new Wn(e)):null;var e};se.registerSaveRouter(hs),se.registerLoadRouter(hs);var wm=function(){function r(){E(O().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return X(this,void 0,void 0,function(){var e,t,n,o,a,i;return Y(this,function(s){for(e={},t=Fn+Ue,n=Ue+rc,o=0;o<this.LS.length;++o)(a=this.LS.key(o)).startsWith(t)&&a.endsWith(n)&&(i=bm(a),e[i]=JSON.parse(this.LS.getItem(a)));return[2,e]})})},r.prototype.removeModel=function(e){return X(this,void 0,void 0,function(){var t,n;return Y(this,function(o){var a;if(e=(a=e).startsWith(Wn.URL_SCHEME)?a.slice(Wn.URL_SCHEME.length):a,t=oc(e),this.LS.getItem(t.info)==null)throw new Error("Cannot find model at path '"+e+"'");return n=JSON.parse(this.LS.getItem(t.info)),this.LS.removeItem(t.info),this.LS.removeItem(t.topology),this.LS.removeItem(t.weightSpecs),this.LS.removeItem(t.weightData),[2,n]})})},r}();if(O().getBool("IS_BROWSER"))try{tn.registerManager(Wn.URL_SCHEME,new wm)}catch{}var Cm="model",_m=".json",Em=".weights.bin";function fs(r){return new Promise(function(e){return setTimeout(e)}).then(r)}var Xo=function(){function r(e){if(!O().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(r.URL_SCHEME)&&(e=e.slice(r.URL_SCHEME.length)),e!=null&&e.length!==0||(e=Cm),this.modelTopologyFileName=e+_m,this.weightDataFileName=e+Em}return r.prototype.save=function(e){return X(this,void 0,void 0,function(){var t,n,o,a,i,s;return Y(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(t=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"})),!(e.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:n},a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=a,[4,fs(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),e.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=t,[4,fs(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:mr(e)}]}})})},r.URL_SCHEME="downloads://",r}(),Im=function(){function r(e){if(e==null||e.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+e);this.files=e}return r.prototype.load=function(){return X(this,void 0,void 0,function(){var e,t,n=this;return Y(this,function(o){return e=this.files[0],t=this.files.slice(1),[2,new Promise(function(a,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){t.length===0&&a({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=n.checkManifestAndWeightFiles(h,t)}catch(m){return void i(m)}var p=[],d=[],v=[];h.forEach(function(m){m.paths.forEach(function(g){d.push(g),v.push(null)}),p.push.apply(p,m.weights)}),h.forEach(function(m){m.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=d.indexOf(g);v[w]=y,v.indexOf(null)===-1&&a({modelTopology:l,weightSpecs:p,weightData:Ja(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return i("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(f[g])})})}else i(new Error("weightManifest field is missing from file "+e.name))}else i(new Error("modelTopology field is missing from file "+e.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+e.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(e)})]})})},r.prototype.checkManifestAndWeightFiles=function(e,t){for(var n=[],o=t.map(function(u){return us(u.name)}),a={},i=0,s=e;i<s.length;i++)s[i].paths.forEach(function(u){var c=us(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");a[u]=t[o.indexOf(c)]});if(n.length!==t.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+t.length+").");return a},r}();function ps(r,e,t,n){(function(a){E(a!=null&&Array.isArray(a)&&a.length>0,function(){return"promises must be a none empty array"})})(r),function(a,i){E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+a}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=a,function(){return"startFraction must be no more than endFraction, but got startFraction "+a+" and endFraction "+i})}(t=t??0,n=n??1);var o=0;return Promise.all(r.map(function(a){return a.then(function(i){var s=t+ ++o/r.length*(n-t);return e(s),i}),a}))}function ac(r,e){return X(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l;return Y(this,function(h){switch(h.label){case 0:return e==null&&(e={}),t=e.fetchFunc==null?O().platform.fetch:e.fetchFunc,n=r.map(function(f){return t(f,e.requestInit,{isBinary:!0})}),o=0,a=.5,e.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,ps(n,e.onProgress,o,a)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(f){return f.arrayBuffer()}),u=.5,c=1,e.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,ps(s,e.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function ds(r){var e=this;return function(t,n,o){return n===void 0&&(n=""),X(e,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d;return Y(this,function(v){switch(v.label){case 0:if(a=t.map(function(){return!1}),i={},s=o!=null?o.map(function(){return!1}):[],u=[],t.forEach(function(m,g){var x=0;m.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=da[y]*$(b.shape),C=function(){a[g]=!0,i[g]==null&&(i[g]=[]),i[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(S,k){S===b.name&&(C(),s[k]=!0)}):C(),u.push(b.name),x+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=a.reduce(function(m,g,x){return g&&m.push(x),m},[]),h=[],l.forEach(function(m){t[m].paths.forEach(function(g){var x=n+(n.endsWith("/")?"":"/")+g;h.push(x)})}),[4,r(h)];case 1:return f=v.sent(),p={},d=0,l.forEach(function(m){for(var g=t[m].paths.length,x=0,b=0;b<g;b++)x+=f[d+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),C=0,S=0;S<g;S++){var k=new Uint8Array(f[d+S]);w.set(k,C),C+=k.byteLength}i[m].forEach(function(I){var R=ec(y.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var N in R)p[N]=R[N]}),d+=g}),[2,p]}})})}}se.registerSaveRouter(function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Xo.URL_SCHEME)?function(e){return e===void 0&&(e="model"),new Xo(e)}(r.slice(Xo.URL_SCHEME.length)):null});var ic=function(){function r(e,t){if(this.DEFAULT_METHOD="POST",t==null&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.onProgress=t.onProgress,t.fetchFunc!=null?(E(typeof t.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=t.fetchFunc):this.fetch=O().platform.fetch,E(e!=null&&e.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(e)&&E(e.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+e.length+")."}),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{}}return r.prototype.save=function(e){return X(this,void 0,void 0,function(){var t,n,o,a;return Y(this,function(i){switch(i.label){case 0:if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,userDefinedMetadata:e.userDefinedMetadata,weightsManifest:n},t.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),e.weightData!=null&&t.body.append("model.weights.bin",new Blob([e.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,t)];case 1:if((a=i.sent()).ok)return[2,{modelArtifactsInfo:mr(e),responses:[a]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+a.status+".")}})})},r.prototype.load=function(){return X(this,void 0,void 0,function(){var e,t,n,o,a,i,s,u,c,l,h,f;return Y(this,function(p){switch(p.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(e=p.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+e.status+". Please verify this URL points to the model JSON of the model to load.");p.label=2;case 2:return p.trys.push([2,4,,5]),[4,e.json()];case 3:return t=p.sent(),[3,5];case 4:throw p.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=t.modelTopology,a=t.weightsManifest,i=t.generatedBy,s=t.convertedBy,u=t.format,c=t.userDefinedMetadata,o==null&&a==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return a==null?[3,7]:[4,this.loadWeights(a)];case 6:f=p.sent(),l=f[0],h=f[1],p.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(e){return X(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h,f;return Y(this,function(p){switch(p.label){case 0:for(t=Array.isArray(this.path)?this.path[1]:this.path,n=function(d){var v=d.lastIndexOf("/"),m=d.lastIndexOf("?"),g=d.substring(0,v),x=m>v?d.substring(m):"";return[g+"/",x]}(t),o=n[0],a=n[1],i=this.weightPathPrefix||o,s=[],u=0,c=e;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],e.forEach(function(d){d.paths.forEach(function(v){h.push(i+v+a)})}),[4,ac(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=p.sent(),[2,[s,Ja(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function ga(r){return r.match(ic.URL_SCHEME_REGEX)!=null}var vs=function(r,e){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(t){return ga(t)}):ga(r))?ya(r,{onProgress:e}):null};function ya(r,e){return new ic(r,e)}se.registerSaveRouter(vs),se.registerLoadRouter(vs);var Yo=function(){function r(e){this.modelArtifacts=e}return r.prototype.load=function(){return X(this,void 0,void 0,function(){return Y(this,function(e){return[2,this.modelArtifacts]})})},r}(),Rm=function(){function r(e){this.saveHandler=e}return r.prototype.save=function(e){return X(this,void 0,void 0,function(){return Y(this,function(t){return[2,this.saveHandler(e)]})})},r}(),sc=Object.freeze({browserFiles:function(r){return new Im(r)},browserHTTPRequest:function(r,e){return ya(r,e)},concatenateArrayBuffers:Ja,decodeWeights:ec,encodeWeights:function(r,e){return X(this,void 0,void 0,function(){var t,n,o,a,i,s=this;return Y(this,function(u){switch(u.label){case 0:for(t=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),a=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var p=new Promise(function(d){return X(s,void 0,void 0,function(){var v,m,g,x,b,y,w;return Y(this,function(C){switch(C.label){case 0:return[4,h.bytes()];case 1:for(v=C.sent(),m=v.reduce(function(S,k){return S+k.length},0)+Zr*v.length,g=new Uint8Array(m),x=0,b=0;b<v.length;b++)y=v[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=Zr,g.set(y,x),x+=y.length;return d(g),[2]}})})});n.push(p)}else n.push(h.data());e!=null&&(f.group=e),t.push(f)},i=0;i<o.length;++i)a(i);return[4,Promise.all(n)];case 1:return[2,{data:dm(u.sent()),specs:t}]}})})},fromMemory:function(r,e,t,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Yo(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Yo({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Yo({modelTopology:r,weightSpecs:e,weightData:t,trainingConfig:n}))},getLoadHandlers:function(r,e){return se.getLoadHandlers(r,e)},getModelArtifactsInfoForJSON:mr,getSaveHandlers:function(r){return se.getSaveHandlers(r)},http:ya,isHTTPScheme:ga,loadWeights:function(r,e,t,n){return e===void 0&&(e=""),X(this,void 0,void 0,function(){return Y(this,function(o){return[2,ds(function(a){return ac(a,{requestInit:n})})(r,e,t)]})})},registerLoadRouter:function(r){return se.registerLoadRouter(r)},registerSaveRouter:function(r){return se.registerSaveRouter(r)},weightsLoaderFactory:ds,withSaveHandler:function(r){return new Rm(r)},copyModel:function(r,e){return X(this,void 0,void 0,function(){return Y(this,function(t){return[2,cs(r,e,!1)]})})},listModels:function(){return X(this,void 0,void 0,function(){var r,e,t,n,o,a,i;return Y(this,function(s){switch(s.label){case 0:r=tn.getSchemes(),e={},t=0,n=r,s.label=1;case 1:return t<n.length?(o=n[t],[4,tn.getManager(o).listModels()]):[3,4];case 2:for(i in a=s.sent())e[o+Bn+i]=a[i];s.label=3;case 3:return t++,[3,1];case 4:return[2,e]}})})},moveModel:function(r,e){return X(this,void 0,void 0,function(){return Y(this,function(t){return[2,cs(r,e,!0)]})})},removeModel:function(r){return X(this,void 0,void 0,function(){var e;return Y(this,function(t){return e=Pr(r),[2,tn.getManager(e.scheme).removeModel(e.path)]})})}}),Sn;D({confusionMatrix_:function(r,e,t){var n=_(r,"labels","confusionMatrix"),o=_(e,"predictions","confusionMatrix");E(t==null||t>0&&Number.isInteger(t),function(){return"If provided, numClasses must be a positive integer, but got "+t}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(t>0&&Number.isInteger(t),function(){return"numClasses is required to be a positive integer, but got "+t});var a=ca(n.asType("int32"),t),i=ca(o.asType("int32"),t);return a.transpose().matMul(i).asType("int32")}});var km=D({fromPixels_:function(r,e){if(e===void 0&&(e=3),e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var t=!1,n=!1,o=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)a=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Ts("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:e});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||t?s=r.data:(a||o)&&(Sn==null&&(Sn=document.createElement("canvas").getContext("2d")),Sn.canvas.width=l,Sn.canvas.height=h,Sn.drawImage(r,0,0,l,h),s=Sn.getImageData(0,0,l,h).data),e===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*e);for(var p=0;p<f;p++)for(var d=0;d<e;++d)u[p*e+d]=s[4*p+d]}return Ra(u,[h,l,e],"int32")}}),Qa=Object.freeze({toPixels:function(r,e){return X(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h,f,p,d,v,m,g,x,b,y,w,C,S,k;return Y(this,function(I){switch(I.label){case 0:if(t=_(r,"img","toPixels"),r instanceof It||(t=t.toInt()),t.rank!==2&&t.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+t.rank+".");if(n=t.shape.slice(0,2),o=n[0],a=n[1],(i=t.rank===2?1:t.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,t.data()];case 1:return s=I.sent(),u=t.min(),c=t.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],f=l[1],p=h[0],d=f[0],u.dispose(),c.dispose(),t.dtype==="float32"){if(p<0||d>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+p+" - "+d+"].")}else{if(t.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+t.dtype+". Please use float32 or int32 tensors.");if(p<0||d>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+p+" - "+d+"].")}for(v=t.dtype==="float32"?255:1,m=new Uint8ClampedArray(a*o*4),g=0;g<o*a;++g)x=void 0,b=void 0,y=void 0,w=void 0,i===1?(x=s[g]*v,b=s[g]*v,y=s[g]*v,w=255):i===3?(x=s[3*g]*v,b=s[3*g+1]*v,y=s[3*g+2]*v,w=255):i===4&&(x=s[4*g]*v,b=s[4*g+1]*v,y=s[4*g+2]*v,w=s[4*g+3]*v),m[(C=4*g)+0]=Math.round(x),m[C+1]=Math.round(b),m[C+2]=Math.round(y),m[C+3]=Math.round(w);return e!=null&&(e.width=a,e.height=o,S=e.getContext("2d"),k=new ImageData(m,a,o),S.putImageData(k,0,0)),t!==r&&t.dispose(),[2,m]}})})},fromPixels:km}),Sm=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(e,t){return new e(t)},r}(),Dm=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(e){r.getMap().classNameMap[e.className]=[e,e.fromConfig]},r}();function wn(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Dm.register(r)}var Cn=function(r){function e(){return r!==null&&r.apply(this,arguments)||this}return ge(e,r),e.prototype.minimize=function(t,n,o){n===void 0&&(n=!1);var a=this.computeGradients(t,o),i=a.value,s=a.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return te(s),n?i:(i.dispose(),null)},Object.defineProperty(e.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),e.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},e.prototype.computeGradients=function(t,n){return Lh(t,n)},e.prototype.dispose=function(){this.iterations_!=null&&te(this.iterations_)},e.prototype.saveIterations=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){return Y(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},e.prototype.extractIterations=function(t){return X(this,void 0,void 0,function(){var n;return Y(this,function(o){switch(o.label){case 0:return n=this,[4,t[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,t.slice(1)]}})})},e}(Sm);Object.defineProperty(Cn,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Am=function(r){function e(t,n,o){o===void 0&&(o=null);var a=r.call(this)||this;return a.learningRate=t,a.rho=n,a.epsilon=o,a.accumulatedGrads=[],a.accumulatedUpdates=[],o==null&&(a.epsilon=T.backend.epsilon()),a}return ge(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accum_grad",variable:K(function(){return mt(i).variable(!1)})}),n.accumulatedUpdates[a]==null&&(n.accumulatedUpdates[a]={originalName:o+"/accum_var",variable:K(function(){return mt(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedGrads[a].variable,c=n.accumulatedUpdates[a].variable;K(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),f=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(f);var p=h.mul(-n.learningRate).add(i);i.assign(p)})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedUpdates!=null&&(te(this.accumulatedGrads.map(function(t){return t.variable})),te(this.accumulatedUpdates.map(function(t){return t.variable})))},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var t;return Y(this,function(n){switch(n.label){case 0:return t=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){var n;return Y(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),n=t.length/2,this.accumulatedGrads=t.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedUpdates=t.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},e.fromConfig=function(t,n){return new t(n.learningRate,n.rho,n.epsilon)},e.className="Adadelta",e}(Cn);wn(Am);var Tm=function(r){function e(t,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=t,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return ge(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedGrads[a]==null&&(n.accumulatedGrads[a]={originalName:o+"/accumulator",variable:K(function(){return Te(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedGrads[a].variable;K(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedGrads!=null&&te(this.accumulatedGrads.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){return Y(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),this.accumulatedGrads=t.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},e.fromConfig=function(t,n){return new t(n.learningRate,n.initialAccumulatorValue)},e.className="Adagrad",e}(Cn);wn(Tm);var Nm=function(r){function e(t,n,o,a){a===void 0&&(a=null);var i=r.call(this)||this;return i.learningRate=t,i.beta1=n,i.beta2=o,i.epsilon=a,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],K(function(){i.accBeta1=q(n).variable(),i.accBeta2=q(o).variable()}),a==null&&(i.epsilon=T.backend.epsilon()),i}return ge(e,r),e.prototype.applyGradients=function(t){var n=this,o=Array.isArray(t)?t.map(function(a){return a.name}):Object.keys(t);K(function(){var a=Bt(1,n.accBeta1),i=Bt(1,n.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:K(function(){return mt(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:K(function(){return mt(c).variable(!1)})});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedSecondMoment[u].variable,p=h.mul(n.beta1).add(l.mul(1-n.beta1)),d=f.mul(n.beta2).add(l.square().mul(1-n.beta2)),v=p.div(a),m=d.div(i);h.assign(p),f.assign(d);var g=v.div(m.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},e.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&te(this.accumulatedFirstMoment.map(function(t){return t.variable})),this.accumulatedSecondMoment!=null&&te(this.accumulatedSecondMoment.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var t;return Y(this,function(n){switch(n.label){case 0:return t=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){var n,o=this;return Y(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(t)];case 1:return t=a.sent(),K(function(){o.accBeta1.assign(Jr(o.beta1,o.iterations_+1)),o.accBeta2.assign(Jr(o.beta2,o.iterations_+1))}),n=t.length/2,this.accumulatedFirstMoment=t.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=t.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},e.fromConfig=function(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)},e.className="Adam",e}(Cn);wn(Nm);var Fm=function(r){function e(t,n,o,a,i){a===void 0&&(a=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=t,s.beta1=n,s.beta2=o,s.epsilon=a,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],K(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),a==null&&(s.epsilon=T.backend.epsilon()),s}return ge(e,r),e.prototype.applyGradients=function(t){var n=this,o=Array.isArray(t)?t.map(function(a){return a.name}):Object.keys(t);K(function(){var a=Bt(1,n.accBeta1),i=de(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:mt(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:mt(c).variable(!1)});var l=Array.isArray(t)?t[u].tensor:t[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedWeightedInfNorm[u].variable,p=h.mul(n.beta1).add(l.mul(1-n.beta1)),d=f.mul(n.beta2),v=l.abs(),m=d.maximum(v);h.assign(p),f.assign(m);var g=i.div(a).mul(p.div(m.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},e.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&te(this.accumulatedFirstMoment.map(function(t){return t.variable})),this.accumulatedWeightedInfNorm!=null&&te(this.accumulatedWeightedInfNorm.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){throw new Error("getWeights() is not implemented for Adamax yet.")})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){return Y(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},e.fromConfig=function(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},e.className="Adamax",e}(Cn);wn(Fm);var uc=function(r){function e(t){var n=r.call(this)||this;return n.learningRate=t,n.setLearningRate(t),n}return ge(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=Array.isArray(t)?t[a].tensor:t[o];if(i!=null){var s=T.registeredVariables[o];K(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},e.prototype.setLearningRate=function(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Ql(q(-t))},e.prototype.dispose=function(){this.c.dispose()},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()]]}})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){return Y(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:if((t=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate}},e.fromConfig=function(t,n){return new t(n.learningRate)},e.className="SGD",e}(Cn);wn(uc);var Pm=function(r){function e(t,n,o){o===void 0&&(o=!1);var a=r.call(this,t)||this;return a.learningRate=t,a.momentum=n,a.useNesterov=o,a.accumulations=[],a.m=q(a.momentum),a}return ge(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulations[a]==null&&(n.accumulations[a]={originalName:o+"/momentum",variable:K(function(){return mt(i).variable(!1)})});var s=n.accumulations[a].variable,u=Array.isArray(t)?t[a].tensor:t[o];u!=null&&K(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},e.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&te(this.accumulations.map(function(t){return t.variable}))},e.prototype.setMomentum=function(t){this.momentum=t},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){return Y(this,function(t){switch(t.label){case 0:return[4,this.saveIterations()];case 1:return[2,[t.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){return Y(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(t)];case 1:return t=n.sent(),this.accumulations=t.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},e.fromConfig=function(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)},e.className="Momentum",e}(uc);wn(Pm);var Mm=function(r){function e(t,n,o,a,i){n===void 0&&(n=.9),o===void 0&&(o=0),a===void 0&&(a=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=t,s.decay=n,s.momentum=o,s.epsilon=a,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,a==null&&(s.epsilon=T.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return ge(e,r),e.prototype.applyGradients=function(t){var n=this;(Array.isArray(t)?t.map(function(o){return o.name}):Object.keys(t)).forEach(function(o,a){var i=T.registeredVariables[o];n.accumulatedMeanSquares[a]==null&&(n.accumulatedMeanSquares[a]={originalName:o+"/rms",variable:K(function(){return mt(i).variable(!1)})}),n.accumulatedMoments[a]==null&&(n.accumulatedMoments[a]={originalName:o+"/momentum",variable:K(function(){return mt(i).variable(!1)})}),n.accumulatedMeanGrads[a]==null&&n.centered&&(n.accumulatedMeanGrads[a]={originalName:o+"/mg",variable:K(function(){return mt(i).variable(!1)})});var s=Array.isArray(t)?t[a].tensor:t[o];if(s!=null){var u=n.accumulatedMeanSquares[a].variable,c=n.accumulatedMoments[a].variable;K(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[a].variable,f=h.mul(n.decay).add(s.mul(1-n.decay)),p=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(p);var d=i.sub(p);i.assign(d)}else{var v=u.mul(n.decay).add(s.square().mul(1-n.decay));p=c.mul(n.momentum).add(s.mul(n.learningRate).div(v.add(n.epsilon).sqrt())),u.assign(v),c.assign(p),d=i.sub(p),i.assign(d)}})}}),this.incrementIterations()},e.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&te(this.accumulatedMeanSquares.map(function(t){return t.variable})),this.accumulatedMeanGrads!=null&&this.centered&&te(this.accumulatedMeanGrads.map(function(t){return t.variable})),this.accumulatedMoments!=null&&te(this.accumulatedMoments.map(function(t){return t.variable}))},e.prototype.getWeights=function(){return X(this,void 0,void 0,function(){var t;return Y(this,function(n){switch(n.label){case 0:return t=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&t.push.apply(t,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(t.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},e.prototype.setWeights=function(t){return X(this,void 0,void 0,function(){var n;return Y(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(t)];case 1:return t=o.sent(),n=this.centered?t.length/3:t.length/2,this.accumulatedMeanSquares=t.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedMoments=t.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=t.slice(2*n,3*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}})),[2]}})})},e.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},e.fromConfig=function(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},e.className="RMSProp",e}(Cn);wn(Mm);It.prototype.squaredDifference=function(r){return _u(this,r)},P=sm;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xa=function(r,e){return xa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)n.hasOwnProperty(o)&&(t[o]=n[o])},xa(r,e)};function ot(r,e){xa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var jt=function(){return jt=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},jt.apply(this,arguments)};function Z(r,e,t,n){function o(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?a(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function tt(r,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;t;)try{if(n=1,o&&(a=c[0]&2?o.return:c[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,c[1])).done)return a;switch(o=0,a&&(c=[c[0]&2,a.value]),c[0]){case 0:case 1:a=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,o=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!a||c[1]>a[0]&&c[1]<a[3])){t.label=c[1];break}if(c[0]===6&&t.label<a[1]){t.label=a[1],a=c;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(c);break}a[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(r,t)}catch(l){c=[6,l],o=0}finally{n=a=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Zn(){for(var r=0,e=0,t=arguments.length;e<t;e++)r+=arguments[e].length;for(var n=Array(r),o=0,e=0;e<t;e++)for(var a=arguments[e],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var dn=function(){function r(e,t){if(!vn(e)||!vn(t))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:e,height:t}));this._width=e,this._height=t}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function fo(r,e){return r instanceof It&&r.shape.length===e}function Om(r){return fo(r,2)}function po(r){return fo(r,3)}function en(r){return fo(r,4)}function Bm(r){return r%1!==0}function ms(r){return r%2===0}function Lm(r,e){e===void 0&&(e=2);var t=Math.pow(10,e);return Math.floor(r*t)/t}function gs(r){return r&&r.width&&r.height}function Wm(r,e){var t=r.width,n=r.height,o=e/Math.max(n,t);return new dn(Math.round(t*o),Math.round(n*o))}function Za(r){return r.reduce(function(e,t){return e.add(t)},new yt(0,0)).div(new yt(r.length,r.length))}function ar(r,e,t){return Array(r).fill(0).map(function(n,o){return e+o*t})}function vn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function ys(r){return vn(r)&&0<=r&&r<=1}var yt=function(){function r(e,t){this._x=e,this._y=t}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(e){return new r(this.x+e.x,this.y+e.y)},r.prototype.sub=function(e){return new r(this.x-e.x,this.y-e.y)},r.prototype.mul=function(e){return new r(this.x*e.x,this.y*e.y)},r.prototype.div=function(e){return new r(this.x/e.x,this.y/e.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),rn=function(){function r(e,t){t===void 0&&(t=!0);var n=e||{},o=[n.left,n.top,n.right,n.bottom].every(vn),a=[n.x,n.y,n.width,n.height].every(vn);if(!a&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=a?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",t),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(e){return!!e&&[e.x,e.y,e.width,e.height].every(vn)},r.assertIsValidBox=function(e,t,n){if(n===void 0&&(n=!1),!r.isRect(e))throw new Error(t+" - invalid box: "+JSON.stringify(e)+", expected object with properties x, y, width, height");if(!n&&(e.width<0||e.height<0))throw new Error(t+" - width ("+e.width+") and height ("+e.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new yt(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new yt(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new yt(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new yt(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var e=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),t=e[0],n=e[1],o=e[2],a=e[3];return new r({x:t,y:n,width:o,height:a})},r.prototype.floor=function(){var e=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),t=e[0],n=e[1],o=e[2],a=e[3];return new r({x:t,y:n,width:o,height:a})},r.prototype.toSquare=function(){var e=this,t=e.x,n=e.y,o=e.width,a=e.height,i=Math.abs(o-a);return o<a&&(t-=i/2,o+=i),a<o&&(n-=i/2,a+=i),new r({x:t,y:n,width:o,height:a})},r.prototype.rescale=function(e){var t=gs(e)?e.width:e,n=gs(e)?e.height:e;return new r({x:this.x*t,y:this.y*n,width:this.width*t,height:this.height*n})},r.prototype.pad=function(e,t){var n=[this.x-e/2,this.y-t/2,this.width+e,this.height+t],o=n[0],a=n[1],i=n[2],s=n[3];return new r({x:o,y:a,width:i,height:s})},r.prototype.clipAtImageBorders=function(e,t){var n=this,o=n.x,a=n.y,i=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(a,0),l=i-u,h=s-c,f=Math.min(l,e-u),p=Math.min(h,t-c);return new r({x:u,y:c,width:f,height:p}).floor()},r.prototype.shift=function(e,t){var n=this,o=n.width,a=n.height,i=this.x+e,s=this.y+t;return new r({x:i,y:s,width:o,height:a})},r.prototype.padAtBorders=function(e,t){var n=this.width+1,o=this.height+1,a=1,i=1,s=n,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>t&&(s=-h+t+n,h=t),f>e&&(u=-f+e+o,f=e),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:a,edx:s,y:l,ey:f,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(e){return new r({left:this.left+e.left*this.width,top:this.top+e.top*this.height,right:this.right+e.right*this.width,bottom:this.bottom+e.bottom*this.height}).toSquare().round()},r}(),vo=function(r){ot(e,r);function e(t,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{left:t,top:n,right:o,bottom:a},i)||this}return e}(rn),cc=function(){function r(e,t,n,o,a){this._imageDims=new dn(a.width,a.height),this._score=e,this._classScore=t,this._className=n,this._box=new rn(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new rn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(e,t){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:e,height:t})},r}(),xe=function(r){ot(e,r);function e(t,n,o){return r.call(this,t,t,"",n,o)||this}return e.prototype.forSize=function(t,n){var o=r.prototype.forSize.call(this,t,n),a=o.score,i=o.relativeBox,s=o.imageDims;return new e(a,i,s)},e}(cc);function zm(r,e,t){t===void 0&&(t=!0);var n=Math.max(0,Math.min(r.right,e.right)-Math.max(r.left,e.left)),o=Math.max(0,Math.min(r.bottom,e.bottom)-Math.max(r.top,e.top)),a=n*o;return t?a/(r.area+e.area-a):a/Math.min(r.area,e.area)}function Um(r){var e=r.map(function(s){return s.x}),t=r.map(function(s){return s.y}),n=e.reduce(function(s,u){return u<s?u:s},1/0),o=t.reduce(function(s,u){return u<s?u:s},1/0),a=e.reduce(function(s,u){return s<u?u:s},0),i=t.reduce(function(s,u){return s<u?u:s},0);return new vo(n,o,a,i)}function ir(r,e,t,n){n===void 0&&(n=!0);for(var o=e.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),a=[],i=function(){var s=o.pop();a.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],p=r[h];c.push(zm(f,p,n))}o=o.filter(function(d,v){return c[v]<=t})};o.length>0;)i();return a}function gr(r,e){return K(function(){var t=e[0],n=e[1],o=e[2],a=Te(Zn(r.shape.slice(0,3),[1]),t),i=Te(Zn(r.shape.slice(0,3),[1]),n),s=Te(Zn(r.shape.slice(0,3),[1]),o),u=Pt([a,i,s],3);return Bt(r,u)})}function Vm(r,e){return e===void 0&&(e=!1),K(function(){var t=r.shape.slice(1),n=t[0],o=t[1];if(n===o)return r;var a=Math.abs(n-o),i=Math.round(a*(e?.5:1)),s=n>o?2:1,u=function(p){var d=r.shape.slice();return d[s]=p,Te(d,0)},c=u(i),l=a-c.shape[s],h=e&&l?u(l):null,f=[h,r,c].filter(function(p){return!!p}).map(function(p){return p.toFloat()});return Pt(f,s)})}function $o(r){return 1/(1+Math.exp(-r))}var ti=function(r){ot(e,r);function e(t,n,o,a,i){return i===void 0&&(i=!1),r.call(this,{x:t,y:n,width:o,height:a},i)||this}return e}(rn),Gm=.5,Hm=.43,qm=.45,sr=function(){function r(e,t,n){n===void 0&&(n=new yt(0,0));var o=t.width,a=t.height;this._imgDims=new dn(o,a),this._shift=n,this._positions=e.map(function(i){return i.mul(new yt(o,a)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new yt(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var e=this;return this._positions.map(function(t){return t.sub(e._shift).div(new yt(e.imageWidth,e.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(e,t){return new this.constructor(this.relativePositions,{width:e,height:t})},r.prototype.shiftBy=function(e,t){return new this.constructor(this.relativePositions,this._imgDims,new yt(e,t))},r.prototype.shiftByPoint=function(e){return this.shiftBy(e.x,e.y)},r.prototype.align=function(e,t){if(t===void 0&&(t={}),e){var n=e instanceof xe?e.box.floor():new rn(e);return this.shiftBy(n.x,n.y).align(null,t)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},t),a=o.useDlibAlignment,i=o.minBoxPadding;return a?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var e=this.getRefPointsForAlignment(),t=e[0],n=e[1],o=e[2],a=function(h){return o.sub(h).magnitude()},i=(a(t)+a(n))/2,s=Math.floor(i/qm),u=Za(e),c=Math.floor(Math.max(0,u.x-Gm*s)),l=Math.floor(Math.max(0,u.y-Hm*s));return new ti(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(e){var t=Um(this.positions);return t.pad(t.width*e,t.height*e)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),jm=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getRefPointsForAlignment=function(){var t=this.positions;return[t[0],t[1],Za([t[3],t[4]])]},e}(sr),Km=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.getJawOutline=function(){return this.positions.slice(0,17)},e.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},e.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},e.prototype.getNose=function(){return this.positions.slice(27,36)},e.prototype.getLeftEye=function(){return this.positions.slice(36,42)},e.prototype.getRightEye=function(){return this.positions.slice(42,48)},e.prototype.getMouth=function(){return this.positions.slice(48,68)},e.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Za)},e}(sr),xs=function(){function r(e,t){this._label=e,this._distance=t}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(e){return e===void 0&&(e=!0),""+this.label+(e?" ("+Lm(this.distance)+")":"")},r}(),bs=function(r){ot(e,r);function e(t,n){var o=r.call(this,t)||this;return o._label=n,o}return e.assertIsValidLabeledBox=function(t,n){if(rn.assertIsValidBox(t,n),!vn(t.label))throw new Error(n+" - expected property label ("+t.label+") to be a number")},Object.defineProperty(e.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),e}(rn),Sr=function(){function r(e,t){if(typeof e!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(t)||t.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=e,this._descriptors=t}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(e){return Array.from(e)})}},r.fromJSON=function(e){var t=e.descriptors.map(function(n){return new Float32Array(n)});return new r(e.label,t)},r}();(function(r){ot(e,r);function e(t,n,o,a){var i=r.call(this,t,n)||this;return i._score=o,i._classScore=a,i}return e.assertIsValidPredictedBox=function(t,n){if(bs.assertIsValidLabeledBox(t,n),!ys(t.score)||!ys(t.classScore))throw new Error(n+" - expected properties score ("+t.score+") and ("+t.classScore+") to be a number between [0, 1]")},Object.defineProperty(e.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),e})(bs);function lc(r){return r.detection instanceof xe}function ur(r,e){var t={detection:e};return Object.assign({},r,t)}function hc(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},e=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:e}}function fc(r){var e="";if(!r)try{r=require("fs")}catch(n){e=n.toString()}var t=r?function(n){return new Promise(function(o,a){r.readFile(n,function(i,s){return i?a(i):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+e)};return{readFile:t}}function pc(){var r=global.Canvas||global.HTMLCanvasElement,e=global.Image||global.HTMLImageElement,t=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(e)return new e;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},a=fc();return jt({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:e||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:t,createImageElement:n,fetch:o},a)}function dc(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function vc(){return typeof global=="object"&&typeof require=="function"&&typeof $c<"u"&&typeof process<"u"&&!!process.version}var Ft;function Xm(){if(!Ft)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Ft}function ba(r){Ft=r}function ei(){dc()&&ba(hc()),vc()&&ba(pc())}function Ym(r){if(Ft||ei(),!Ft)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var e=r.Canvas,t=e===void 0?Ft.Canvas:e,n=r.Image,o=n===void 0?Ft.Image:n;Ft.Canvas=t,Ft.Image=o,Ft.createCanvasElement=r.createCanvasElement||function(){return new t},Ft.createImageElement=r.createImageElement||function(){return new o},Ft.ImageData=r.ImageData||Ft.ImageData,Ft.Video=r.Video||Ft.Video,Ft.fetch=r.fetch||Ft.fetch,Ft.readFile=r.readFile||Ft.readFile}var $t={getEnv:Xm,setEnv:ba,initialize:ei,createBrowserEnv:hc,createFileSystem:fc,createNodejsEnv:pc,monkeyPatch:Ym,isBrowser:dc,isNodejs:vc};ei();function mc(r){return!$t.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function gn(r){var e=$t.getEnv(),t=e.Canvas,n=e.CanvasRenderingContext2D;if(r instanceof n)return r;var o=mc(r);if(!(o instanceof t))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var a=o.getContext("2d");if(!a)throw new Error("resolveContext2d - canvas 2d context is null");return a}var ws;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(ws||(ws={}));function gc(r){var e=$t.getEnv(),t=e.Image,n=e.Video;return r instanceof t&&r.complete||r instanceof n&&r.readyState>=3}function $m(r){return new Promise(function(e,t){if(r instanceof $t.getEnv().Canvas||gc(r))return e();function n(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),e(a))}function o(a){a.currentTarget&&(a.currentTarget.removeEventListener("load",n),a.currentTarget.removeEventListener("error",o),t(a))}r.addEventListener("load",n),r.addEventListener("error",o)})}function yc(r){var e=$t.getEnv(),t=e.Image,n=e.Video;return r instanceof t?new dn(r.naturalWidth,r.naturalHeight):r instanceof n?new dn(r.videoWidth,r.videoHeight):new dn(r.width,r.height)}function mo(r){var e=r.width,t=r.height,n=$t.getEnv().createCanvasElement,o=n();return o.width=e,o.height=t,o}function ni(r,e){var t=$t.getEnv().ImageData;if(!(r instanceof t)&&!gc(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=yc(r),o=n.width,a=n.height,i=mo({width:o,height:a});return r instanceof t?gn(i).putImageData(r,0,0):gn(i).drawImage(r,0,0,o,a),i}function Jm(r,e){return Z(this,void 0,void 0,function(){var t,n,o,a,i,s;return tt(this,function(u){switch(u.label){case 0:return t=$t.getEnv().createCanvasElement(),n=r.shape.slice(en(r)?1:0),o=n[0],a=n[1],i=n[2],s=K(function(){return r.as3D(o,a,i).toInt()}),[4,Qa.toPixels(s,t)];case 1:return u.sent(),s.dispose(),[2,t]}})})}function Cs(r){var e=$t.getEnv(),t=e.Image,n=e.Canvas,o=e.Video;return r instanceof t||r instanceof n||r instanceof o}function Qm(r,e,t){t===void 0&&(t=!1);var n=$t.getEnv(),o=n.Image,a=n.Canvas;if(!(r instanceof o||r instanceof a))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=yc(r),s=e/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=mo({width:e,height:e}),h=r instanceof a?r:ni(r),f=Math.abs(u-c)/2,p=t&&u<c?f:0,d=t&&c<u?f:0;return gn(l).drawImage(h,p,d,u,c),l}var to=function(){function r(e,t){var n=this;if(t===void 0&&(t=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(e))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+e);this._treatAsBatchInput=t,this._batchSize=e.length,e.forEach(function(o,a){if(po(o)){n._imageTensors[a]=o,n._inputDimensions[a]=o.shape;return}if(en(o)){var i=o.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[a]=o,n._inputDimensions[a]=o.shape.slice(1);return}var s=o instanceof $t.getEnv().Canvas?o:ni(o);n._canvases[a]=s,n._inputDimensions[a]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var e=this;return ar(this.batchSize,0,1).map(function(t,n){return e.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(e){return this.canvases[e]||this.imageTensors[e]},r.prototype.getInputDimensions=function(e){return this._inputDimensions[e]},r.prototype.getInputHeight=function(e){return this._inputDimensions[e][0]},r.prototype.getInputWidth=function(e){return this._inputDimensions[e][1]},r.prototype.getReshapedInputDimensions=function(e){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var t=this.getInputWidth(e),n=this.getInputHeight(e);return Wm({width:t,height:n},this.inputSize)},r.prototype.toBatchTensor=function(e,t){var n=this;return t===void 0&&(t=!0),this._inputSize=e,K(function(){var o=ar(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof It){var u=en(s)?s:s.expandDims();return u=Vm(u,t),(u.shape[1]!==e||u.shape[2]!==e)&&(u=ja.resizeBilinear(u,[e,e])),u.as3D(e,e,3)}if(s instanceof $t.getEnv().Canvas)return Qa.fromPixels(Qm(s,e,t));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),a=ce(o.map(function(i){return i.toFloat()})).as4D(n.batchSize,e,e,3);return a})},r}();function Ut(r){return Z(this,void 0,void 0,function(){var e,t,n;return tt(this,function(o){switch(o.label){case 0:if(r instanceof to)return[2,r];if(e=Array.isArray(r)?r:[r],!e.length)throw new Error("toNetInput - empty array passed as input");return t=function(a){return Array.isArray(r)?" at input index "+a+":":""},n=e.map(mc),n.forEach(function(a,i){if(!Cs(a)&&!po(a)&&!en(a))throw typeof e[i]=="string"?new Error("toNetInput -"+t(i)+" string passed, but could not resolve HTMLElement for element id "+e[i]):new Error("toNetInput -"+t(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(en(a)){var s=a.shape[0];if(s!==1)throw new Error("toNetInput -"+t(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(a){return Cs(a)&&$m(a)}))];case 1:return o.sent(),[2,new to(n,Array.isArray(r))]}})})}function ri(r,e){return Z(this,void 0,void 0,function(){var t,n,o,a,i,s,u;return tt(this,function(c){switch(c.label){case 0:return t=$t.getEnv().Canvas,n=r,r instanceof t?[3,5]:[4,Ut(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return a=o.getInput(0),a instanceof t?(i=a,[3,4]):[3,2];case 2:return[4,Jm(a)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=gn(n),u=e.map(function(l){return l instanceof xe?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,f=l.y,p=l.width,d=l.height,v=mo({width:p,height:d});return gn(v).putImageData(s.getImageData(h,f,p,d),0,0),v})]}})})}function oi(r,e){return Z(this,void 0,void 0,function(){return tt(this,function(t){if(!po(r)&&!en(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(en(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,K(function(){var n=r.shape.slice(en(r)?1:0),o=n[0],a=n[1],i=n[2],s=e.map(function(c){return c instanceof xe?c.forSize(a,o).box:c}).map(function(c){return c.clipAtImageBorders(a,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,p=c.height;return Hu(r.as3D(o,a,i),[h,l,0],[p,f,i])});return u})]})})}function Zm(r,e){return Z(this,void 0,void 0,function(){var t,n;return tt(this,function(o){switch(o.label){case 0:return t=$t.getEnv().fetch,[4,t(r,e)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function tg(r){return Z(this,void 0,void 0,function(){return tt(this,function(e){switch(e.label){case 0:return[4,Zm(r)];case 1:return[2,e.sent().json()]}})})}function xc(r,e){var t=e+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:t};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+t};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),a=r.endsWith(".json")?o[o.length-1]:t,i=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+a:i+"/"+a}}function eg(r,e){return Z(this,void 0,void 0,function(){var t,n,o,a;return tt(this,function(i){switch(i.label){case 0:return t=xc(r,e),n=t.manifestUri,o=t.modelBaseUri,[4,tg(n)];case 1:return a=i.sent(),[2,sc.loadWeights(a,o)]}})})}var qe=function(){function r(e){this._name=e,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(e){var t=this.traversePropertyPath(e),n=t.obj,o=t.objProp;return n[o]},r.prototype.reassignParamFromPath=function(e,t){var n=this.traversePropertyPath(e),o=n.obj,a=n.objProp;o[a].dispose(),o[a]=t},r.prototype.getParamList=function(){var e=this;return this._paramMappings.map(function(t){var n=t.paramPath;return{path:n,tensor:e.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(e){return e.tensor instanceof Vn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(e){return!(e.tensor instanceof Vn)})},r.prototype.variable=function(){var e=this;this.getFrozenParams().forEach(function(t){var n=t.path,o=t.tensor;e.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var e=this;this.getTrainableParams().forEach(function(t){var n=t.path,o=t.tensor,a=Ht(o.dataSync());o.dispose(),e.reassignParamFromPath(n,a)})},r.prototype.dispose=function(e){e===void 0&&(e=!0),this.getParamList().forEach(function(t){if(e&&t.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+t.path);t.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(e){var t=e.tensor;return Array.from(t.dataSync())}).reduce(function(e,t){return e.concat(t)}))},r.prototype.load=function(e){return Z(this,void 0,void 0,function(){return tt(this,function(t){switch(t.label){case 0:return e instanceof Float32Array?(this.extractWeights(e),[2]):[4,this.loadFromUri(e)];case 1:return t.sent(),[2]}})})},r.prototype.loadFromUri=function(e){return Z(this,void 0,void 0,function(){var t;return tt(this,function(n){switch(n.label){case 0:if(e&&typeof e!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,eg(e,this.getDefaultModelName())];case 1:return t=n.sent(),this.loadFromWeightMap(t),[2]}})})},r.prototype.loadFromDisk=function(e){return Z(this,void 0,void 0,function(){var t,n,o,a,i,s,u,c,l,h;return tt(this,function(f){switch(f.label){case 0:if(e&&typeof e!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return t=$t.getEnv().readFile,n=xc(e,this.getDefaultModelName()),o=n.manifestUri,a=n.modelBaseUri,i=function(p){return Promise.all(p.map(function(d){return t(d).then(function(v){return v.buffer})}))},s=sc.weightsLoaderFactory(i),l=(c=JSON).parse,[4,t(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,a)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(e){var t=this.extractParamsFromWeigthMap(e),n=t.paramMappings,o=t.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(e){var t=this.extractParams(e),n=t.paramMappings,o=t.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(e){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var t=e.split("/").reduce(function(a,i){if(!a.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+e);return{obj:a.nextObj,objProp:i,nextObj:a.nextObj[i]}},{nextObj:this.params}),n=t.obj,o=t.objProp;if(!n||!o||!(n[o]instanceof It))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+e);return{obj:n,objProp:o}},r}();function ue(r,e,t){return K(function(){var n=Ua(r,e.depthwise_filter,e.pointwise_filter,t,"same");return n=ct(n,e.bias),n})}function Jo(r,e,t){return t===void 0&&(t=!1),K(function(){var n=Rt(t?ct(pe(r,e.conv0.filters,[2,2],"same"),e.conv0.bias):ue(r,e.conv0,[2,2])),o=ue(n,e.conv1,[1,1]),a=Rt(ct(n,o)),i=ue(a,e.conv2,[1,1]);return Rt(ct(n,ct(o,i)))})}function Dr(r,e,t,n){return t===void 0&&(t=!1),n===void 0&&(n=!0),K(function(){var o=Rt(t?ct(pe(r,e.conv0.filters,n?[2,2]:[1,1],"same"),e.conv0.bias):ue(r,e.conv0,n?[2,2]:[1,1])),a=ue(o,e.conv1,[1,1]),i=Rt(ct(o,a)),s=ue(i,e.conv2,[1,1]),u=Rt(ct(o,ct(a,s))),c=ue(u,e.conv3,[1,1]);return Rt(ct(o,ct(a,ct(s,c))))})}function me(r,e,t,n){return t===void 0&&(t="same"),n===void 0&&(n=!1),K(function(){var o=ct(pe(r,e.filters,[1,1],t),e.bias);return n?Rt(o):o})}function je(r,e){Object.keys(r).forEach(function(t){e.some(function(n){return n.originalPath===t})||r[t].dispose()})}function go(r,e){return function(t,n,o,a){var i=Jt(r(t*n*o*o),[o,o,t,n]),s=Nt(r(n));return e.push({paramPath:a+"/filters"},{paramPath:a+"/bias"}),{filters:i,bias:s}}}function ai(r,e){return function(t,n,o){var a=Ze(r(t*n),[t,n]),i=Nt(r(n));return e.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:a,bias:i}}}var bc=function(){function r(e,t,n){this.depthwise_filter=e,this.pointwise_filter=t,this.bias=n}return r}();function ii(r,e){return function(t,n,o){var a=Jt(r(9*t),[3,3,t,1]),i=Jt(r(t*n),[1,1,t,n]),s=Nt(r(n));return e.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new bc(a,i,s)}}function si(r){return function(e){var t=r(e+"/depthwise_filter",4),n=r(e+"/pointwise_filter",4),o=r(e+"/bias",1);return new bc(t,n,o)}}function sn(r,e){return function(t,n,o){var a=r[t];if(!fo(a,n))throw new Error("expected weightMap["+t+"] to be a Tensor"+n+"D, instead have "+a);return e.push({originalPath:t,paramPath:o||t}),a}}function Ke(r){var e=r;function t(o){var a=e.slice(0,o);return e=e.slice(o),a}function n(){return e}return{extractWeights:t,getRemainingWeights:n}}function wc(r,e){var t=go(r,e),n=ii(r,e);function o(i,s,u,c){c===void 0&&(c=!1);var l=c?t(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),f=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function a(i,s,u,c){c===void 0&&(c=!1);var l=o(i,s,u,c),h=l.conv0,f=l.conv1,p=l.conv2,d=n(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:p,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:a}}function ng(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=wc(n,e).extractDenseBlock4Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2"),c=a(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function Cc(r){return function(e){var t=r(e+"/filters",4),n=r(e+"/bias",1);return{filters:t,bias:n}}}function _c(r,e){var t=sn(r,e),n=Cc(t),o=si(t);function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:i}}function rg(r){var e=[],t=_c(r,e).extractDenseBlock4Params,n={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2"),dense3:t("dense3")};return je(r,e),{params:n,paramMappings:e}}var Ec=function(r){ot(e,r);function e(){return r.call(this,"FaceFeatureExtractor")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return K(function(){var o=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=gr(o,a).div(q(255)),s=Dr(i,n.dense0,!0);return s=Dr(s,n.dense1),s=Dr(s,n.dense2),s=Dr(s,n.dense3),s=vr(s,[7,7],[2,2],"valid"),s})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},e.prototype.extractParamsFromWeigthMap=function(t){return rg(t)},e.prototype.extractParams=function(t){return ng(t)},e}(qe);function Se(r,e){return K(function(){return ct(co(r,e.weights),e.bias)})}function og(r,e,t){var n=[],o=Ke(r),a=o.extractWeights,i=o.getRemainingWeights,s=ai(a,n),u=s(e,t,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function ag(r){var e=[],t=sn(r,e);function n(a){var i=t(a+"/weights",2),s=t(a+"/bias",1);return{weights:i,bias:s}}var o={fc:n("fc")};return je(r,e),{params:o,paramMappings:e}}function Ic(r){var e={},t={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?t:e;o[n]=r[n]}),{featureExtractorMap:e,classifierMap:t}}var Rc=function(r){ot(e,r);function e(t,n){var o=r.call(this,t)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),e.prototype.runNet=function(t){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return K(function(){var a=t instanceof to?n.faceFeatureExtractor.forwardInput(t):t;return Se(a.as2D(a.shape[0],-1),o.fc)})},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),r.prototype.dispose.call(this,t)},e.prototype.loadClassifierParams=function(t){var n=this.extractClassifierParams(t),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},e.prototype.extractClassifierParams=function(t){return og(t,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},e.prototype.extractParamsFromWeigthMap=function(t){var n=Ic(t),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),ag(a)},e.prototype.extractParams=function(t){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),a=o*n+o,i=t.slice(0,t.length-a),s=t.slice(t.length-a);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},e}(qe),_s=["neutral","happy","sad","angry","fearful","disgusted","surprised"],ig=function(){function r(e){var t=this;if(e.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+e.length);_s.forEach(function(n,o){t[n]=e[o]})}return r.prototype.asSortedArray=function(){var e=this;return _s.map(function(t){return{expression:t,probability:e[t]}}).sort(function(t,n){return n.probability-t.probability})},r}(),sg=function(r){ot(e,r);function e(t){return t===void 0&&(t=new Ec),r.call(this,"FaceExpressionNet",t)||this}return e.prototype.forwardInput=function(t){var n=this;return K(function(){return Ge(n.runNet(t))})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.predictExpressions=function(t){return Z(this,void 0,void 0,function(){var n,o,a,i,s=this;return tt(this,function(u){switch(u.label){case 0:return[4,Ut(t)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Mt(o).map(function(c){return Z(s,void 0,void 0,function(){var l;return tt(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return a=u.sent(),o.dispose(),i=a.map(function(c){return new ig(c)}),[2,n.isBatchInput?i:i[0]]}})})},e.prototype.getDefaultModelName=function(){return"face_expression_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e.prototype.getClassifierChannelsOut=function(){return 7},e}(Rc);function kc(r,e){var t={expressions:e};return Object.assign({},r,t)}function Sc(r){return lc(r)&&r.landmarks instanceof sr&&r.unshiftedLandmarks instanceof sr&&r.alignedRect instanceof xe}function yo(r,e){var t=r.detection.box,n=e.shiftBy(t.x,t.y),o=n.align(),a=r.detection.imageDims,i=new xe(r.detection.score,o.rescale(a.reverse()),a),s={landmarks:n,unshiftedLandmarks:e,alignedRect:i};return Object.assign({},r,s)}function ug(r,e){var t=go(r,e),n=ii(r,e);function o(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=t(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function a(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:t,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:a}}function cg(r,e){var t=[],n=Ke(r),o=n.extractWeights,a=n.getRemainingWeights,i=ug(o,t),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),p=c(64,128,"entry_flow/reduction_block_1"),d={conv_in:h,reduction_block_0:f,reduction_block_1:p},v={};ar(e,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:m,separable_conv:g};if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:t,params:{entry_flow:d,middle_flow:v,exit_flow:x}}}function lg(r,e){var t=sn(r,e),n=Cc(t),o=si(t);function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:a,extractMainBlockParams:i}}function hg(r,e){var t=[],n=lg(r,t),o=n.extractConvParams,a=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};ar(e,0,1).forEach(function(m){f["main_block_"+m]=s("middle_flow/main_block_"+m)});var p=i("exit_flow/reduction_block"),d=a("exit_flow/separable_conv"),v={reduction_block:p,separable_conv:d};return je(r,t),{params:{entry_flow:h,middle_flow:f,exit_flow:v},paramMappings:t}}function Dc(r,e,t){return ct(pe(r,e.filters,t,"same"),e.bias)}function Qo(r,e,t){t===void 0&&(t=!0);var n=t?Rt(r):r;return n=ue(n,e.separable_conv0,[1,1]),n=ue(Rt(n),e.separable_conv1,[1,1]),n=Wt(n,[3,3],[2,2],"same"),n=ct(n,Dc(r,e.expansion_conv,[2,2])),n}function fg(r,e){var t=ue(Rt(r),e.separable_conv0,[1,1]);return t=ue(Rt(t),e.separable_conv1,[1,1]),t=ue(Rt(t),e.separable_conv2,[1,1]),t=ct(t,r),t}var pg=function(r){ot(e,r);function e(t){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=t,n}return e.prototype.forwardInput=function(t){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return K(function(){var a=t.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=gr(a,i).div(q(256)),u=Rt(Dc(s,o.entry_flow.conv_in,[2,2]));return u=Qo(u,o.entry_flow.reduction_block_0,!1),u=Qo(u,o.entry_flow.reduction_block_1),ar(n._numMainBlocks,0,1).forEach(function(c){u=fg(u,o.middle_flow["main_block_"+c])}),u=Qo(u,o.exit_flow.reduction_block),u=Rt(ue(u,o.exit_flow.separable_conv,[1,1])),u})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"tiny_xception_model"},e.prototype.extractParamsFromWeigthMap=function(t){return hg(t,this._numMainBlocks)},e.prototype.extractParams=function(t){return cg(t,this._numMainBlocks)},e}(qe);function dg(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=ai(n,e),i=a(512,1,"fc/age"),s=a(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{fc:{age:i,gender:s}}}}function vg(r){var e=[],t=sn(r,e);function n(a){var i=t(a+"/weights",2),s=t(a+"/bias",1);return{weights:i,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return je(r,e),{params:o,paramMappings:e}}var eo;(function(r){r.FEMALE="female",r.MALE="male"})(eo||(eo={}));var mg=function(r){ot(e,r);function e(t){t===void 0&&(t=new pg(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=t,n}return Object.defineProperty(e.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),e.prototype.runNet=function(t){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return K(function(){var a=t instanceof to?n.faceFeatureExtractor.forwardInput(t):t,i=vr(a,[7,7],[2,2],"valid").as2D(a.shape[0],-1),s=Se(i,o.fc.age).as1D(),u=Se(i,o.fc.gender);return{age:s,gender:u}})},e.prototype.forwardInput=function(t){var n=this;return K(function(){var o=n.runNet(t),a=o.age,i=o.gender;return{age:a,gender:Ge(i)}})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.predictAgeAndGender=function(t){return Z(this,void 0,void 0,function(){var n,o,a,i,s,u,c=this;return tt(this,function(l){switch(l.label){case 0:return[4,Ut(t)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),a=Mt(o.age),i=Mt(o.gender),s=a.map(function(h,f){return{ageTensor:h,genderTensor:i[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,p=h.genderTensor;return Z(c,void 0,void 0,function(){var d,v,m,g,x;return tt(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return d=b.sent()[0],[4,p.data()];case 2:return v=b.sent()[0],m=v>.5,g=m?eo.MALE:eo.FEMALE,x=m?v:1-v,f.dispose(),p.dispose(),[2,{age:d,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},e.prototype.getDefaultModelName=function(){return"age_gender_model"},e.prototype.dispose=function(t){t===void 0&&(t=!0),this.faceFeatureExtractor.dispose(t),r.prototype.dispose.call(this,t)},e.prototype.loadClassifierParams=function(t){var n=this.extractClassifierParams(t),o=n.params,a=n.paramMappings;this._params=o,this._paramMappings=a},e.prototype.extractClassifierParams=function(t){return dg(t)},e.prototype.extractParamsFromWeigthMap=function(t){var n=Ic(t),o=n.featureExtractorMap,a=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),vg(a)},e.prototype.extractParams=function(t){var n=1539,o=t.slice(0,t.length-n),a=t.slice(t.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(a)},e}(qe),Ac=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.postProcess=function(t,n,o){var a=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=a.length;return K(function(){var s=function(f,p){return ce([Te([68],f),Te([68],p)],1).as2D(1,136).as1D()},u=function(f,p){var d=a[f],v=d.width,m=d.height;return p(v,m)?Math.abs(v-m)/2:0},c=function(f){return u(f,function(p,d){return p<d})},l=function(f){return u(f,function(p,d){return d<p})},h=t.mul(Te([i,136],n)).sub(ce(Array.from(Array(i),function(f,p){return s(c(p),l(p))}))).div(ce(Array.from(Array(i),function(f,p){return s(a[p].width,a[p].height)})));return h})},e.prototype.forwardInput=function(t){var n=this;return K(function(){var o=n.runNet(t);return n.postProcess(o,t.inputSize,t.inputDimensions.map(function(a){var i=a[0],s=a[1];return{height:i,width:s}}))})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.detectLandmarks=function(t){return Z(this,void 0,void 0,function(){var n,o,a,i=this;return tt(this,function(s){switch(s.label){case 0:return[4,Ut(t)];case 1:return n=s.sent(),o=K(function(){return Mt(i.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Z(i,void 0,void 0,function(){var l,h,f,p,d;return tt(this,function(v){switch(v.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[v.sent()]),p=l.filter(function(m,g){return ms(g)}),d=l.filter(function(m,g){return!ms(g)}),[2,new Km(Array(68).fill(0).map(function(m,g){return new yt(p[g],d[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},e.prototype.getClassifierChannelsOut=function(){return 136},e}(Rc),Tc=function(r){ot(e,r);function e(t){return t===void 0&&(t=new Ec),r.call(this,"FaceLandmark68Net",t)||this}return e.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},e.prototype.getClassifierChannelsIn=function(){return 256},e}(Ac);function gg(r){var e=[],t=_c(r,e).extractDenseBlock3Params,n={dense0:t("dense0",!0),dense1:t("dense1"),dense2:t("dense2")};return je(r,e),{params:n,paramMappings:e}}function yg(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=wc(n,e).extractDenseBlock3Params,i=a(3,32,"dense0",!0),s=a(32,64,"dense1"),u=a(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{dense0:i,dense1:s,dense2:u}}}var xg=function(r){ot(e,r);function e(){return r.call(this,"TinyFaceFeatureExtractor")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return K(function(){var o=t.toBatchTensor(112,!0),a=[122.782,117.001,104.298],i=gr(o,a).div(q(255)),s=Jo(i,n.dense0,!0);return s=Jo(s,n.dense1),s=Jo(s,n.dense2),s=vr(s,[14,14],[2,2],"valid"),s})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},e.prototype.extractParamsFromWeigthMap=function(t){return gg(t)},e.prototype.extractParams=function(t){return yg(t)},e}(qe),bg=function(r){ot(e,r);function e(t){return t===void 0&&(t=new xg),r.call(this,"FaceLandmark68TinyNet",t)||this}return e.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},e.prototype.getClassifierChannelsIn=function(){return 128},e}(Ac);(function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e})(Tc);function wg(r,e){return ct(Yt(r,e.weights),e.biases)}function ui(r,e,t,n,o){o===void 0&&(o="same");var a=e.conv,i=a.filters,s=a.bias,u=pe(r,i,t,o);return u=ct(u,s),u=wg(u,e.scale),n?Rt(u):u}function Cg(r,e){return ui(r,e,[1,1],!0)}function Nc(r,e){return ui(r,e,[1,1],!1)}function Fc(r,e){return ui(r,e,[2,2],!0,"valid")}function _g(r,e){function t(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Bm(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return K(function(){return nn(Jt(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=t(s,u,c),f=Nt(r(u));return e.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Nt(r(s)),l=Nt(r(s));return e.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function a(s,u,c,l){var h=n(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function i(s,u,c,l,h){h===void 0&&(h=!1);var f=a((h?.5:1)*s,u,c,l+"/conv1"),p=a(s,u,c,l+"/conv2");return{conv1:f,conv2:p}}return{extractConvLayerParams:a,extractResidualLayerParams:i}}function Eg(r){var e=Ke(r),t=e.extractWeights,n=e.getRemainingWeights,o=[],a=_g(t,o),i=a.extractConvLayerParams,s=a.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),p=s(36864,64,3,"conv64_1"),d=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),S=K(function(){return nn(Ze(t(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:p,conv64_2:d,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:S};return{params:k,paramMappings:o}}function Ig(r,e){var t=sn(r,e);function n(i){var s=t(i+"/scale/weights",1),u=t(i+"/scale/biases",1);return{weights:s,biases:u}}function o(i){var s=t(i+"/conv/filters",4),u=t(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function a(i){return{conv1:o(i+"/conv1"),conv2:o(i+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:a}}function Rg(r){var e=[],t=Ig(r,e),n=t.extractConvLayerParams,o=t.extractResidualLayerParams,a=n("conv32_down"),i=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),p=o("conv128_down"),d=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=r.fc;if(e.push({originalPath:"fc",paramPath:"fc"}),!Om(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:a,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:p,conv128_1:d,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return je(r,e),{params:w,paramMappings:e}}function _e(r,e){var t=Cg(r,e.conv1);return t=Nc(t,e.conv2),t=ct(t,r),t=Rt(t),t}function Ar(r,e){var t=Fc(r,e.conv1);t=Nc(t,e.conv2);var n=vr(r,2,2,"valid"),o=Ct(n.shape),a=n.shape[3]!==t.shape[3],i=n.shape[1]!==t.shape[1]||n.shape[2]!==t.shape[2];if(i){var s=Zn(t.shape);s[1]=1;var u=Ct(s);t=Pt([t,u],1);var c=Zn(t.shape);c[2]=1;var l=Ct(c);t=Pt([t,l],2)}return n=a?Pt([n,o],3):n,t=ct(n,t),t=Rt(t),t}var kg=function(r){ot(e,r);function e(){return r.call(this,"FaceRecognitionNet")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return K(function(){var o=t.toBatchTensor(150,!0).toFloat(),a=[122.782,117.001,104.298],i=gr(o,a).div(q(256)),s=Fc(i,n.conv32_down);s=Wt(s,3,2,"valid"),s=_e(s,n.conv32_1),s=_e(s,n.conv32_2),s=_e(s,n.conv32_3),s=Ar(s,n.conv64_down),s=_e(s,n.conv64_1),s=_e(s,n.conv64_2),s=_e(s,n.conv64_3),s=Ar(s,n.conv128_down),s=_e(s,n.conv128_1),s=_e(s,n.conv128_2),s=Ar(s,n.conv256_down),s=_e(s,n.conv256_1),s=_e(s,n.conv256_2),s=Ar(s,n.conv256_down_out);var u=s.mean([1,2]),c=co(u,n.fc);return c})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.computeFaceDescriptor=function(t){return Z(this,void 0,void 0,function(){var n,o,a,i=this;return tt(this,function(s){switch(s.label){case 0:return[4,Ut(t)];case 1:return n=s.sent(),o=K(function(){return Mt(i.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return a=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?a:a[0]]}})})},e.prototype.getDefaultModelName=function(){return"face_recognition_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Rg(t)},e.prototype.extractParams=function(t){return Eg(t)},e}(qe);function Pc(r,e){var t={descriptor:e};return Object.assign({},r,t)}function Mc(r,e){var t={age:e};return Object.assign({},r,t)}function Oc(r,e,t){var n={gender:e,genderProbability:t};return Object.assign({},r,n)}var Bc=function(){function r(e){var t=e===void 0?{}:e,n=t.minFaceSize,o=t.scaleFactor,a=t.maxNumScales,i=t.scoreThresholds,s=t.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=a||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Sg(r,e){function t(u,c){var l=Jt(r(9*u),[3,3,u,1]),h=Nt(r(u)),f=Nt(r(u)),p=Nt(r(u)),d=Nt(r(u));return e.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:p,batch_norm_variance:d}}function n(u,c,l,h,f){var p=Jt(r(u*c*l*l),[l,l,u,c]),d=Nt(r(c));return e.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:p,bias:d}}function o(u,c,l,h){var f=n(u,c,l,h,!0),p=f.filters,d=f.bias;return{filters:p,batch_norm_offset:d}}function a(u,c,l){var h=t(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function i(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=a(32,64,"mobilenetv1/conv_1"),l=a(64,128,"mobilenetv1/conv_2"),h=a(128,128,"mobilenetv1/conv_3"),f=a(128,256,"mobilenetv1/conv_4"),p=a(256,256,"mobilenetv1/conv_5"),d=a(256,512,"mobilenetv1/conv_6"),v=a(512,512,"mobilenetv1/conv_7"),m=a(512,512,"mobilenetv1/conv_8"),g=a(512,512,"mobilenetv1/conv_9"),x=a(512,512,"mobilenetv1/conv_10"),b=a(512,512,"mobilenetv1/conv_11"),y=a(512,1024,"mobilenetv1/conv_12"),w=a(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:p,conv_6:d,conv_7:v,conv_8:m,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),p=o(128,256,3,"prediction_layer/conv_5"),d=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),S=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),R=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),N=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),A={box_encoding_predictor:m,class_predictor:g},L={box_encoding_predictor:x,class_predictor:b},M={box_encoding_predictor:y,class_predictor:w},B={box_encoding_predictor:C,class_predictor:S},U={box_encoding_predictor:k,class_predictor:I},W={box_encoding_predictor:R,class_predictor:N};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:p,conv_6:d,conv_7:v,box_predictor_0:A,box_predictor_1:L,box_predictor_2:M,box_predictor_3:B,box_predictor_4:U,box_predictor_5:W}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function Dg(r){var e=[],t=Ke(r),n=t.extractWeights,o=t.getRemainingWeights,a=Sg(n,e),i=a.extractMobilenetV1Params,s=a.extractPredictionLayerParams,u=i(),c=s(),l=Ra(n(5118*4),[1,5118,4]),h={extra_dim:l};if(e.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:e}}function Ag(r,e){var t=sn(r,e);function n(c,l,h){var f=t(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),p=t(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:p}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",p=l+"/pointwise_conv",d=t(h+"/depthwise_weights",4,f+"/filters"),v=t(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),m=t(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),g=t(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),x=t(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:d,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:n("MobilenetV1",c,p)}}function a(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function i(c,l){var h=t(c+"/weights",4,l+"/filters"),f=t(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:u}}function Tg(r){var e=[],t=Ag(r,e),n=t.extractMobilenetV1Params,o=t.extractPredictionLayerParams,a=r["Output/extra_dim"];if(e.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!po(a))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+a);var i={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:a}};return je(r,e),{params:i,paramMappings:e}}function Ee(r,e,t){return K(function(){var n=pe(r,e.filters,t,"same");return n=ct(n,e.batch_norm_offset),Ba(n,0,6)})}var Ng=.0010000000474974513;function Fg(r,e,t){return K(function(){var n=uo(r,e.filters,t,"same");return n=Du(n,e.batch_norm_mean,e.batch_norm_variance,e.batch_norm_offset,e.batch_norm_scale,Ng),Ba(n,0,6)})}function Pg(r){return[2,4,6,12].some(function(e){return e===r})?[2,2]:[1,1]}function Mg(r,e){return K(function(){var t=null,n=Ee(r,e.conv_0,[2,2]),o=[e.conv_1,e.conv_2,e.conv_3,e.conv_4,e.conv_5,e.conv_6,e.conv_7,e.conv_8,e.conv_9,e.conv_10,e.conv_11,e.conv_12,e.conv_13];if(o.forEach(function(a,i){var s=i+1,u=Pg(s);n=Fg(n,a.depthwise_conv,u),n=Ee(n,a.pointwise_conv,[1,1]),s===11&&(t=n)}),t===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:t}})}function Og(r,e,t,n,o){var a=r.shape[0],i=Math.min(t,a),s=e.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,f=c.length-1;f>=0;--f){var p=Bg(r,l.boxIndex,c[f]);if(p!==0&&(l.score*=u(p),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function Bg(r,e,t){var n=r.arraySync(),o=Math.min(n[e][0],n[e][2]),a=Math.min(n[e][1],n[e][3]),i=Math.max(n[e][0],n[e][2]),s=Math.max(n[e][1],n[e][3]),u=Math.min(n[t][0],n[t][2]),c=Math.min(n[t][1],n[t][3]),l=Math.max(n[t][0],n[t][2]),h=Math.max(n[t][1],n[t][3]),f=(i-o)*(s-a),p=(l-u)*(h-c);if(f<=0||p<=0)return 0;var d=Math.max(o,u),v=Math.max(a,c),m=Math.min(i,l),g=Math.min(s,h),x=Math.max(m-d,0)*Math.max(g-v,0);return x/(f+p-x)}function Lg(r){var e=Mt(nn(r,[1,0])),t=[Bt(e[2],e[0]),Bt(e[3],e[1])],n=[ct(e[0],de(t[0],q(2))),ct(e[1],de(t[1],q(2)))];return{sizes:t,centers:n}}function Wg(r,e){var t=Lg(r),n=t.sizes,o=t.centers,a=Mt(nn(e,[1,0])),i=de(Yt(pa(de(a[2],q(5))),n[0]),q(2)),s=ct(Yt(de(a[0],q(10)),n[0]),o[0]),u=de(Yt(pa(de(a[3],q(5))),n[1]),q(2)),c=ct(Yt(de(a[1],q(10)),n[1]),o[1]);return nn(ce([Bt(s,i),Bt(c,u),ct(s,i),ct(c,u)]),[1,0])}function zg(r,e,t){return K(function(){var n=r.shape[0],o=Wg(ve(Mn(t.extra_dim,[n,1,1]),[-1,4]),ve(r,[-1,4]));o=ve(o,[n,o.shape[0]/n,4]);var a=Iu(Ne(e,[0,0,1],[-1,-1,-1])),i=Ne(a,[0,0,0],[-1,-1,1]);i=ve(i,[n,i.shape[1]]);var s=Mt(o),u=Mt(i);return{boxes:s,scores:u}})}function Dn(r,e){return K(function(){var t=r.shape[0],n=ve(me(r,e.box_encoding_predictor),[t,-1,1,4]),o=ve(me(r,e.class_predictor),[t,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function Ug(r,e,t){return K(function(){var n=Ee(r,t.conv_0,[1,1]),o=Ee(n,t.conv_1,[2,2]),a=Ee(o,t.conv_2,[1,1]),i=Ee(a,t.conv_3,[2,2]),s=Ee(i,t.conv_4,[1,1]),u=Ee(s,t.conv_5,[2,2]),c=Ee(u,t.conv_6,[1,1]),l=Ee(c,t.conv_7,[2,2]),h=Dn(e,t.box_predictor_0),f=Dn(r,t.box_predictor_1),p=Dn(o,t.box_predictor_2),d=Dn(i,t.box_predictor_3),v=Dn(u,t.box_predictor_4),m=Dn(l,t.box_predictor_5),g=Pt([h.boxPredictionEncoding,f.boxPredictionEncoding,p.boxPredictionEncoding,d.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),x=Pt([h.classPrediction,f.classPrediction,p.classPrediction,d.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var xo=function(){function r(e){var t=e===void 0?{}:e,n=t.minConfidence,o=t.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Lc=function(r){ot(e,r);function e(){return r.call(this,"SsdMobilenetv1")||this}return e.prototype.forwardInput=function(t){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return K(function(){var o=t.toBatchTensor(512,!1).toFloat(),a=Bt(Yt(o,q(.007843137718737125)),q(1)),i=Mg(a,n.mobilenetv1),s=Ug(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return zg(u,c,n.output_layer)})},e.prototype.forward=function(t){return Z(this,void 0,void 0,function(){var n;return tt(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ut(t)];case 1:return[2,n.apply(this,[o.sent()])]}})})},e.prototype.locateFaces=function(t,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,p,d,v,m,g,x,b,y,w,C,S,k;return tt(this,function(I){switch(I.label){case 0:return o=new xo(n),a=o.maxResults,i=o.minConfidence,[4,Ut(t)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],p=1;p<c.length;p++)c[p].dispose(),l[p].dispose();return m=(v=Array).from,[4,f.data()];case 2:return d=m.apply(v,[I.sent()]),g=.5,x=Og(h,d,a,g,i),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,C=y/b.height,S=h.arraySync(),k=x.map(function(R){var N=[Math.max(0,S[R][0]),Math.min(1,S[R][2])].map(function(W){return W*C}),A=N[0],L=N[1],M=[Math.max(0,S[R][1]),Math.min(1,S[R][3])].map(function(W){return W*w}),B=M[0],U=M[1];return new xe(d[R],new ti(B,A,U-B,L-A),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,k]}})})},e.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},e.prototype.extractParamsFromWeigthMap=function(t){return Tg(t)},e.prototype.extractParams=function(t){return Dg(t)},e}(qe);(function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e})(Lc);var Vg=.4,Gg=[new yt(.738768,.874946),new yt(2.42204,2.65704),new yt(4.30971,7.04493),new yt(10.246,4.59428),new yt(12.6868,11.8741)],Hg=[new yt(1.603231,2.094468),new yt(6.041143,7.080126),new yt(2.882459,3.518061),new yt(4.266906,5.178857),new yt(9.041765,10.66308)],qg=[117.001,114.697,97.404],jg="tiny_yolov2_model",Kg="tiny_yolov2_separable_conv_model",Tr=function(r){return typeof r=="number"};function Xg(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Tr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(e){return typeof e=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(e){return e||{}}).every(function(e){return Tr(e.x)&&Tr(e.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Tr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function ci(r){return K(function(){var e=Yt(r,q(.10000000149011612));return ct(Rt(Bt(r,e)),e)})}function Ye(r,e){return K(function(){var t=xn(r,[[0,0],[1,1],[1,1],[0,0]]);return t=pe(t,e.conv.filters,[1,1],"valid"),t=Bt(t,e.bn.sub),t=Yt(t,e.bn.truediv),t=ct(t,e.conv.bias),ci(t)})}function $e(r,e){return K(function(){var t=xn(r,[[0,0],[1,1],[1,1],[0,0]]);return t=Ua(t,e.depthwise_filter,e.pointwise_filter,[1,1],"valid"),t=ct(t,e.bias),ci(t)})}function Yg(r,e){var t=go(r,e);function n(i,s){var u=Nt(r(i)),c=Nt(r(i));return e.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(i,s,u){var c=t(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var a=ii(r,e);return{extractConvParams:t,extractConvWithBatchNormParams:o,extractSeparableConvParams:a}}function $g(r,e,t,n){var o=Ke(r),a=o.extractWeights,i=o.getRemainingWeights,s=[],u=Yg(a,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(e.withSeparableConvs){var p=n[0],d=n[1],v=n[2],m=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],C=e.isFirstLayerConv2d?c(p,d,3,"conv0"):h(p,d,"conv0"),S=h(d,v,"conv1"),k=h(v,m,"conv2"),I=h(m,g,"conv3"),R=h(g,x,"conv4"),N=h(x,b,"conv5"),A=y?h(b,y,"conv6"):void 0,L=w?h(y,w,"conv7"):void 0,M=c(w||y||b,5*t,1,"conv8");f={conv0:C,conv1:S,conv2:k,conv3:I,conv4:R,conv5:N,conv6:A,conv7:L,conv8:M}}else{var p=n[0],d=n[1],v=n[2],m=n[3],g=n[4],x=n[5],b=n[6],y=n[7],w=n[8],C=l(p,d,"conv0"),S=l(d,v,"conv1"),k=l(v,m,"conv2"),I=l(m,g,"conv3"),R=l(g,x,"conv4"),N=l(x,b,"conv5"),A=l(b,y,"conv6"),L=l(y,w,"conv7"),M=c(w,5*t,1,"conv8");f={conv0:C,conv1:S,conv2:k,conv3:I,conv4:R,conv5:N,conv6:A,conv7:L,conv8:M}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:f,paramMappings:s}}function Jg(r,e){var t=sn(r,e);function n(s){var u=t(s+"/sub",1),c=t(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=t(s+"/filters",4),c=t(s+"/bias",1);return{filters:u,bias:c}}function a(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=si(t);return{extractConvParams:o,extractConvWithBatchNormParams:a,extractSeparableConvParams:i}}function Qg(r,e){var t=[],n=Jg(r,t),o=n.extractConvParams,a=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(e.withSeparableConvs){var u=e.filterSizes&&e.filterSizes.length||9;s={conv0:e.isFirstLayerConv2d?o("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:o("conv8")}}else s={conv0:a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:a("conv6"),conv7:a("conv7"),conv8:o("conv8")};return je(r,t),{params:s,paramMappings:t}}var Es;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Es||(Es={}));var li=function(){function r(e){var t=e===void 0?{}:e,n=t.inputSize,o=t.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Wc=function(r){ot(e,r);function e(t){var n=r.call(this,"TinyYolov2")||this;return Xg(t),n._config=t,n}return Object.defineProperty(e.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),e.prototype.runTinyYolov2=function(t,n){var o=Ye(t,n.conv0);return o=Wt(o,[2,2],[2,2],"same"),o=Ye(o,n.conv1),o=Wt(o,[2,2],[2,2],"same"),o=Ye(o,n.conv2),o=Wt(o,[2,2],[2,2],"same"),o=Ye(o,n.conv3),o=Wt(o,[2,2],[2,2],"same"),o=Ye(o,n.conv4),o=Wt(o,[2,2],[2,2],"same"),o=Ye(o,n.conv5),o=Wt(o,[2,2],[1,1],"same"),o=Ye(o,n.conv6),o=Ye(o,n.conv7),me(o,n.conv8,"valid",!1)},e.prototype.runMobilenet=function(t,n){var o=this.config.isFirstLayerConv2d?ci(me(t,n.conv0,"valid",!1)):$e(t,n.conv0);return o=Wt(o,[2,2],[2,2],"same"),o=$e(o,n.conv1),o=Wt(o,[2,2],[2,2],"same"),o=$e(o,n.conv2),o=Wt(o,[2,2],[2,2],"same"),o=$e(o,n.conv3),o=Wt(o,[2,2],[2,2],"same"),o=$e(o,n.conv4),o=Wt(o,[2,2],[2,2],"same"),o=$e(o,n.conv5),o=Wt(o,[2,2],[1,1],"same"),o=n.conv6?$e(o,n.conv6):o,o=n.conv7?$e(o,n.conv7):o,me(o,n.conv8,"valid",!1)},e.prototype.forwardInput=function(t,n){var o=this,a=this.params;if(!a)throw new Error("TinyYolov2 - load model before inference");return K(function(){var i=t.toBatchTensor(n,!1).toFloat();return i=o.config.meanRgb?gr(i,o.config.meanRgb):i,i=i.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(i,a):o.runTinyYolov2(i,a)})},e.prototype.forward=function(t,n){return Z(this,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ut(t)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent()]}})})},e.prototype.detect=function(t,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,p,d,v,m,g,x=this;return tt(this,function(b){switch(b.label){case 0:return o=new li(n),a=o.inputSize,i=o.scoreThreshold,[4,Ut(t)];case 1:return s=b.sent(),[4,this.forwardInput(s,a)];case 2:return u=b.sent(),c=K(function(){return Mt(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(y){return y.box}),p=h.map(function(y){return y.score}),d=h.map(function(y){return y.classScore}),v=h.map(function(y){return x.config.classes[y.label]}),m=ir(f.map(function(y){return y.rescale(a)}),p,this.config.iouThreshold,!0),g=m.map(function(y){return new cc(p[y],d[y],v[y],f[y],l)}),[2,g]}})})},e.prototype.getDefaultModelName=function(){return""},e.prototype.extractParamsFromWeigthMap=function(t){return Qg(t,this.config)},e.prototype.extractParams=function(t){var n=this.config.filterSizes||e.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return $g(t,this.config,this.boxEncodingSize,n)},e.prototype.extractBoxes=function(t,n,o){return Z(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d,v,m,g,x,b,y,w,C,S,k,I,R,N,A,L,M,B,U,W,z=this;return tt(this,function(G){switch(G.label){case 0:return a=n.width,i=n.height,s=Math.max(a,i),u=s/a,c=s/i,l=t.shape[1],h=this.config.anchors.length,f=K(function(){var H=t.reshape([l,l,h,z.boxEncodingSize]),j=H.slice([0,0,0,0],[l,l,h,4]),J=H.slice([0,0,0,4],[l,l,h,1]),nt=z.withClassScores?Ge(H.slice([0,0,0,5],[l,l,h,z.config.classes.length]),3):q(0);return[j,J,nt]}),p=f[0],d=f[1],v=f[2],m=[],[4,d.array()];case 1:return g=G.sent(),[4,p.array()];case 2:x=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];y=0,G.label=4;case 4:if(!(y<l))return[3,11];w=0,G.label=5;case 5:return w<h?(C=$o(g[b][y][w][0]),!o||C>o?(S=(y+$o(x[b][y][w][0]))/l*u,k=(b+$o(x[b][y][w][1]))/l*c,I=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,R=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,N=S-I/2,A=k-R/2,L={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,L)]:[3,7]):[3,9]):[3,10];case 6:return W=G.sent(),[3,8];case 7:W={classScore:1,label:0},G.label=8;case 8:M=W,B=M.classScore,U=M.label,m.push(jt({box:new vo(N,A,N+I,A+R),score:C,classScore:C*B,label:U},L)),G.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return p.dispose(),d.dispose(),v.dispose(),[2,m]}})})},e.prototype.extractPredictedClass=function(t,n){return Z(this,void 0,void 0,function(){var o,a,i,s;return tt(this,function(u){switch(u.label){case 0:return o=n.row,a=n.col,i=n.anchor,[4,t.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][a][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},e.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],e}(qe),Zg=function(r){ot(e,r);function e(t){t===void 0&&(t=!0);var n=this,o=Object.assign({},{withSeparableConvs:t,iouThreshold:Vg,classes:["face"]},t?{anchors:Hg,meanRgb:qg}:{anchors:Gg,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(e.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),e.prototype.locateFaces=function(t,n){return Z(this,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return[4,this.detect(t,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new xe(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},e.prototype.getDefaultModelName=function(){return this.withSeparableConvs?Kg:jg},e.prototype.extractParamsFromWeigthMap=function(t){return r.prototype.extractParamsFromWeigthMap.call(this,t)},e}(Wc),zc=function(r){ot(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t._name="TinyFaceDetectorOptions",t}return e}(li),yr=function(){function r(){}return r.prototype.then=function(e){return Z(this,void 0,void 0,function(){var t;return tt(this,function(n){switch(n.label){case 0:return t=e,[4,this.run()];case 1:return[2,t.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Z(this,void 0,void 0,function(){return tt(this,function(e){throw new Error("ComposableTask - run is not implemented")})})},r}();function bo(r,e,t,n,o){return o===void 0&&(o=function(a){var i=a.alignedRect;return i}),Z(this,void 0,void 0,function(){var a,i,s,u,c;return tt(this,function(l){switch(l.label){case 0:return a=r.map(function(h){return Sc(h)?o(h):h.detection}),s=n,s?[3,5]:e instanceof It?[4,oi(e,a)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,ri(e,a)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,t(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof It&&h.dispose()}),[2,c]}})})}function hi(r,e,t,n,o){return Z(this,void 0,void 0,function(){var a=this;return tt(this,function(i){return[2,bo([r],e,function(s){return Z(a,void 0,void 0,function(){return tt(this,function(u){return[2,t(s[0])]})})},n,o)]})})}function t0(r){return K(function(){return ce(Mt(r,3).reverse(),3)})}var Nr=2,no=12;function e0(r,e){var t=go(r,e),n=ai(r,e);function o(c,l){var h=Nt(r(c));return e.push({paramPath:l}),h}function a(c,l,h){h===void 0&&(h=!1);var f=t(c[0],c[1],3,l+"/conv1"),p=o(c[1],l+"/prelu1_alpha"),d=t(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=t(c[2],c[3],h?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:p,conv2:d,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function i(){var c=a([3,10,16,32],"pnet"),l=t(32,2,1,"pnet/conv4_1"),h=t(32,4,1,"pnet/conv4_2");return jt(jt({},c),{conv4_1:l,conv4_2:h})}function s(){var c=a([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=n(128,2,"rnet/fc2_1"),p=n(128,4,"rnet/fc2_2");return jt(jt({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:p})}function u(){var c=a([3,32,64,64],"onet"),l=t(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=n(1152,256,"onet/fc1"),p=o(256,"onet/prelu5_alpha"),d=n(256,2,"onet/fc2_1"),v=n(256,4,"onet/fc2_2"),m=n(256,10,"onet/fc2_3");return jt(jt({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:p,fc2_1:d,fc2_2:v,fc2_3:m})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function n0(r){var e=Ke(r),t=e.extractWeights,n=e.getRemainingWeights,o=[],a=e0(t,o),i=a.extractPNetParams,s=a.extractRNetParams,u=a.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function r0(r,e){var t=sn(r,e);function n(l){var h=t(l+"/weights",4,l+"/filters"),f=t(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=t(l+"/weights",2),f=t(l+"/bias",1);return{weights:h,bias:f}}function a(l){return t(l,1)}function i(l){var h=n(l+"/conv1"),f=a(l+"/prelu1_alpha"),p=n(l+"/conv2"),d=a(l+"/prelu2_alpha"),v=n(l+"/conv3"),m=a(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:p,prelu2_alpha:d,conv3:v,prelu3_alpha:m}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),f=n("pnet/conv4_2");return jt(jt({},l),{conv4_1:h,conv4_2:f})}function u(){var l=i("rnet"),h=o("rnet/fc1"),f=a("rnet/prelu4_alpha"),p=o("rnet/fc2_1"),d=o("rnet/fc2_2");return jt(jt({},l),{fc1:h,prelu4_alpha:f,fc2_1:p,fc2_2:d})}function c(){var l=i("onet"),h=n("onet/conv4"),f=a("onet/prelu4_alpha"),p=o("onet/fc1"),d=a("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return jt(jt({},l),{conv4:h,prelu4_alpha:f,fc1:p,prelu5_alpha:d,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function o0(r){var e=[],t=r0(r,e),n=t.extractPNetParams,o=t.extractRNetParams,a=t.extractONetParams,i=n(),s=o(),u=a();return je(r,e),{params:{pnet:i,rnet:s,onet:u},paramMappings:e}}function wa(r,e){var t=e[0],n=e[1];return{height:Math.floor(t*r),width:Math.floor(n*r)}}function a0(r,e,t){for(var n=t[0],o=t[1],a=no/r,i=[],s=Math.min(n,o)*a,u=0;s>=12;)i.push(a*Math.pow(e,u)),s=s*e,u+=1;return i}var fi=function(r){ot(e,r);function e(t,n,o,a){return r.call(this,{left:t,top:n,right:o,bottom:a},!0)||this}return e}(rn);function Uc(r){return K(function(){return Yt(Bt(r,q(127.5)),q(.0078125))})}function zn(r,e){return K(function(){return ct(Rt(r),Yt(e,$r(Rt($r(r)))))})}function pi(r,e,t){return t===void 0&&(t=!1),K(function(){var n=me(r,e.conv1,"valid");return n=zn(n,e.prelu1_alpha),n=Wt(n,t?[2,2]:[3,3],[2,2],"same"),n=me(n,e.conv2,"valid"),n=zn(n,e.prelu2_alpha),n=t?n:Wt(n,[3,3],[2,2],"valid"),n=me(n,e.conv3,"valid"),n=zn(n,e.prelu3_alpha),n})}function i0(r,e){return K(function(){var t=pi(r,e,!0),n=me(t,e.conv4_1,"valid"),o=le(lo(n,3),3),a=Ge(Bt(n,o),3),i=me(t,e.conv4_2,"valid");return{prob:a,regions:i}})}function s0(r,e){return K(function(){var t=wa(e,r.shape.slice(1)),n=t.height,o=t.width,a=ja.resizeBilinear(r,[n,o]),i=Uc(a);return nn(i,[0,2,1,3])})}function u0(r,e,t,n){for(var o=[],a=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)a[i][s]>=n&&o.push(new yt(s,i));var u=o.map(function(c){var l=new vo(Math.round((c.y*Nr+1)/t),Math.round((c.x*Nr+1)/t),Math.round((c.y*Nr+no)/t),Math.round((c.x*Nr+no)/t)),h=a[c.y][c.x],f=e.arraySync(),p=new fi(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:p}});return u}function c0(r,e,t,n,o){o.stage1=[];var a=e.map(function(f){return K(function(){var p={scale:f},d=s0(r,f),v=Date.now(),m=i0(d,n),g=m.prob,x=m.regions;p.pnet=Date.now()-v;var b=Mt(Mt(g,3)[1])[0],y=Mt(x)[0];return{scoresTensor:b,regionsTensor:y,scale:f,statsForScale:p}})}),i=a.map(function(f){var p=f.scoresTensor,d=f.regionsTensor,v=f.scale,m=f.statsForScale,g=u0(p,d,v,t);if(p.dispose(),d.dispose(),!g.length)return o.stage1.push(m),[];var x=Date.now(),b=ir(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return m.nms=Date.now()-x,m.numBoxes=b.length,o.stage1.push(m),b.map(function(y){return g[y]})}),s=i.reduce(function(f,p){return f.concat(p)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=ir(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var p=f.cell,d=f.region;return new vo(p.left+d.left*p.width,p.top+d.top*p.height,p.right+d.right*p.width,p.bottom+d.bottom*p.height).toSquare().round()})}return{boxes:u,scores:c}}function Vc(r,e,t){var n=t.width,o=t.height;return Z(this,void 0,void 0,function(){var a,i,s,u=this;return tt(this,function(c){switch(c.label){case 0:return a=gn(r),[4,Promise.all(e.map(function(l){return Z(u,void 0,void 0,function(){var h,f,p,d,v,m,g,x;return tt(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,p=h.ey,d=h.x,v=h.ex,m=d-1,g=f-1,x=a.getImageData(m,g,v-m,p-g),[2,$t.isNodejs()?ni(x):createImageBitmap(x)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=mo({width:n,height:o}),f=gn(h);f.drawImage(l,0,0,n,o);for(var p=f.getImageData(0,0,n,o).data,d=[],v=0;v<p.length;v+=4)d.push(p[v+2]),d.push(p[v+1]),d.push(p[v]);s.push(d)}),[2,s.map(function(l){var h=K(function(){var f=nn(Jt(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Uc(f)});return h})]}})})}function l0(r,e){return K(function(){var t=pi(r,e),n=ve(t,[t.shape[0],e.fc1.weights.shape[0]]),o=Se(n,e.fc1),a=zn(o,e.prelu4_alpha),i=Se(a,e.fc2_1),s=le(lo(i,1),1),u=Ge(Bt(i,s),1),c=Se(a,e.fc2_2),l=Mt(u,1)[1];return{scores:l,regions:c}})}function h0(r,e,t,n,o){return Z(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d,v,m,g,x;return tt(this,function(b){switch(b.label){case 0:return a=Date.now(),[4,Vc(r,e,{width:24,height:24})];case 1:return i=b.sent(),o.stage2_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(y){var w=l0(y,n);return y.dispose(),w}),o.stage2_rnet=Date.now()-a,u=s.length>1?Pt(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>t}).map(function(y){var w=y.idx;return w}),p=f.map(function(y){return e[y]}),d=f.map(function(y){return c[y]}),v=[],m=[],p.length>0&&(a=Date.now(),g=ir(p,d,.7),o.stage2_nms=Date.now()-a,x=g.map(function(y){var w=s[f[y]].regions.arraySync();return new fi(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(y){return d[y]}),v=g.map(function(y,w){return p[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function f0(r,e){return K(function(){var t=pi(r,e);t=Wt(t,[2,2],[2,2],"same"),t=me(t,e.conv4,"valid"),t=zn(t,e.prelu4_alpha);var n=ve(t,[t.shape[0],e.fc1.weights.shape[0]]),o=Se(n,e.fc1),a=zn(o,e.prelu5_alpha),i=Se(a,e.fc2_1),s=le(lo(i,1),1),u=Ge(Bt(i,s),1),c=Se(a,e.fc2_2),l=Se(a,e.fc2_3),h=Mt(u,1)[1];return{scores:h,regions:c,points:l}})}function p0(r,e,t,n,o){return Z(this,void 0,void 0,function(){var a,i,s,u,c,l,h,f,p,d,v,m,g,x,b;return tt(this,function(y){switch(y.label){case 0:return a=Date.now(),[4,Vc(r,e,{width:48,height:48})];case 1:return i=y.sent(),o.stage3_extractImagePatches=Date.now()-a,a=Date.now(),s=i.map(function(w){var C=f0(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-a,u=s.length>1?Pt(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),f=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>t}).map(function(w){var C=w.idx;return C}),p=f.map(function(w){var C=s[w].regions.arraySync();return new fi(C[0][0],C[0][1],C[0][2],C[0][3])}),d=f.map(function(w,C){return e[w].calibrate(p[C])}),v=f.map(function(w){return c[w]}),m=[],g=[],x=[],d.length>0&&(a=Date.now(),b=ir(d,v,.7,!1),o.stage3_nms=Date.now()-a,m=b.map(function(w){return d[w]}),g=b.map(function(w){return v[w]}),x=b.map(function(w,C){return Array(5).fill(0).map(function(S,k){var I=s[w].points.arraySync();return new yt(I[0][k]*(m[C].width+1)+m[C].left,I[0][k+5]*(m[C].height+1)+m[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:x}]}})})}var d0=function(r){ot(e,r);function e(){return r.call(this,"Mtcnn")||this}return e.prototype.load=function(t){return Z(this,void 0,void 0,function(){return tt(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,t)]})})},e.prototype.loadFromDisk=function(t){return Z(this,void 0,void 0,function(){return tt(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,t)]})})},e.prototype.forwardInput=function(t,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o,a,i,s,u,c,l,h,f,p,d,v,m,g,x,b,y,w,C,S,k;return tt(this,function(I){switch(I.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(a=t.canvases[0],!a)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=K(function(){return t0(le(Qa.fromPixels(a)).toFloat())}),c=function(R){return u.dispose(),i.total=Date.now()-s,R},l=u.shape.slice(1),h=l[0],f=l[1],p=new Bc(n),d=p.minFaceSize,v=p.scaleFactor,m=p.maxNumScales,g=p.scoreThresholds,x=p.scaleSteps,b=(x||a0(d,v,[h,f])).filter(function(R){var N=wa(R,[h,f]);return Math.min(N.width,N.height)>no}).slice(0,m),i.scales=b,i.pyramid=b.map(function(R){return wa(R,[h,f])}),y=Date.now(),[4,c0(u,b,g[0],o.pnet,i)];case 1:return w=I.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,h0(a,w.boxes,g[1],o.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=I.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,p0(a,C.boxes,g[2],o.onet,i)]):[2,c({results:[],stats:i})];case 3:return S=I.sent(),i.total_stage3=Date.now()-y,k=S.boxes.map(function(R,N){return yo(ur({},new xe(S.scores[N],new ti(R.left/f,R.top/h,R.width/f,R.height/h),{height:h,width:f})),new jm(S.points[N].map(function(A){return A.sub(new yt(R.left,R.top)).div(new yt(R.width,R.height))}),{width:R.width,height:R.height}))}),[2,c({results:k,stats:i})]}})})},e.prototype.forward=function(t,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ut(t)];case 1:return[4,o.apply(this,[a.sent(),n])];case 2:return[2,a.sent().results]}})})},e.prototype.forwardWithStats=function(t,n){return n===void 0&&(n={}),Z(this,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return o=this.forwardInput,[4,Ut(t)];case 1:return[2,o.apply(this,[a.sent(),n])]}})})},e.prototype.getDefaultModelName=function(){return"mtcnn_model"},e.prototype.extractParamsFromWeigthMap=function(t){return o0(t)},e.prototype.extractParams=function(t){return n0(t)},e}(qe),v0=.4,m0=[new yt(1.603231,2.094468),new yt(6.041143,7.080126),new yt(2.882459,3.518061),new yt(4.266906,5.178857),new yt(9.041765,10.66308)],g0=[117.001,114.697,97.404],y0=function(r){ot(e,r);function e(){var t=this,n={withSeparableConvs:!0,iouThreshold:v0,classes:["face"],anchors:m0,meanRgb:g0,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return t=r.call(this,n)||this,t}return Object.defineProperty(e.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),e.prototype.locateFaces=function(t,n){return Z(this,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return[4,this.detect(t,n)];case 1:return o=a.sent(),[2,o.map(function(i){return new xe(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},e.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},e.prototype.extractParamsFromWeigthMap=function(t){return r.prototype.extractParamsFromWeigthMap.call(this,t)},e}(Wc),Zt={ssdMobilenetv1:new Lc,tinyFaceDetector:new y0,tinyYolov2:new Zg,mtcnn:new d0,faceLandmark68Net:new Tc,faceLandmark68TinyNet:new bg,faceRecognitionNet:new kg,faceExpressionNet:new sg,ageGenderNet:new mg},Gc=function(r){ot(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.extractedFaces=o,a}return e}(yr),di=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n,o=this;return tt(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return t=a.sent(),[4,bo(t,this.input,function(i){return Z(o,void 0,void 0,function(){return tt(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Zt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,t.map(function(i,s){return kc(i,n[s])})]}})})},e.prototype.withAgeAndGender=function(){return new yi(this,this.input)},e}(Gc),vi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n;return tt(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,hi(t,this.input,function(a){return Zt.faceExpressionNet.predictExpressions(a)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,kc(t,n)]}})})},e.prototype.withAgeAndGender=function(){return new xi(this,this.input)},e}(Gc),mi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withAgeAndGender=function(){return new bi(this,this.input)},e.prototype.withFaceDescriptors=function(){return new Ci(this,this.input)},e}(di),gi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withAgeAndGender=function(){return new wi(this,this.input)},e.prototype.withFaceDescriptor=function(){return new _i(this,this.input)},e}(vi),Hc=function(r){ot(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.extractedFaces=o,a}return e}(yr),yi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n,o=this;return tt(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return t=a.sent(),[4,bo(t,this.input,function(i){return Z(o,void 0,void 0,function(){return tt(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return Zt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=a.sent(),[2,t.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return Mc(Oc(i,l,h),c)})]}})})},e.prototype.withFaceExpressions=function(){return new di(this,this.input)},e}(Hc),xi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n,o,a,i;return tt(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?[4,hi(t,this.input,function(u){return Zt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,a=n.gender,i=n.genderProbability,[2,Mc(Oc(t,a,i),o)]}})})},e.prototype.withFaceExpressions=function(){return new vi(this,this.input)},e}(Hc),bi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withFaceExpressions=function(){return new mi(this,this.input)},e.prototype.withFaceDescriptors=function(){return new Ci(this,this.input)},e}(yi),wi=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.withFaceExpressions=function(){return new gi(this,this.input)},e.prototype.withFaceDescriptor=function(){return new _i(this,this.input)},e}(xi),qc=function(r){ot(e,r);function e(t,n){var o=r.call(this)||this;return o.parentTask=t,o.input=n,o}return e}(yr),Ci=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n;return tt(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),[4,bo(t,this.input,function(a){return Promise.all(a.map(function(i){return Zt.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(a,i){return Pc(t[i],a)})]}})})},e.prototype.withFaceExpressions=function(){return new mi(this,this.input)},e.prototype.withAgeAndGender=function(){return new bi(this,this.input)},e}(qc),_i=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n;return tt(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return t=o.sent(),t?[4,hi(t,this.input,function(a){return Zt.faceRecognitionNet.computeFaceDescriptor(a)},null,function(a){return a.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,Pc(t,n)]}})})},e.prototype.withFaceExpressions=function(){return new gi(this,this.input)},e.prototype.withAgeAndGender=function(){return new wi(this,this.input)},e}(qc),jc=function(r){ot(e,r);function e(t,n,o){var a=r.call(this)||this;return a.parentTask=t,a.input=n,a.useTinyLandmarkNet=o,a}return Object.defineProperty(e.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?Zt.faceLandmark68TinyNet:Zt.faceLandmark68Net},enumerable:!0,configurable:!0}),e}(yr),x0=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n,o,a,i,s=this;return tt(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return t=u.sent(),n=t.map(function(c){return c.detection}),this.input instanceof It?[4,oi(this.input,n)]:[3,3];case 2:return a=u.sent(),[3,5];case 3:return[4,ri(this.input,n)];case 4:a=u.sent(),u.label=5;case 5:return o=a,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),o.forEach(function(c){return c instanceof It&&c.dispose()}),[2,t.map(function(c,l){return yo(c,i[l])})]}})})},e.prototype.withFaceExpressions=function(){return new mi(this,this.input)},e.prototype.withAgeAndGender=function(){return new bi(this,this.input)},e.prototype.withFaceDescriptors=function(){return new Ci(this,this.input)},e}(jc),b0=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n,o,a,i;return tt(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return t=s.sent(),t?(n=t.detection,this.input instanceof It?[4,oi(this.input,[n])]:[3,3]):[2];case 2:return a=s.sent(),[3,5];case 3:return[4,ri(this.input,[n])];case 4:a=s.sent(),s.label=5;case 5:return o=a,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return i=s.sent(),o.forEach(function(u){return u instanceof It&&u.dispose()}),[2,yo(t,i)]}})})},e.prototype.withFaceExpressions=function(){return new gi(this,this.input)},e.prototype.withAgeAndGender=function(){return new wi(this,this.input)},e.prototype.withFaceDescriptor=function(){return new _i(this,this.input)},e}(jc),Kc=function(r){ot(e,r);function e(t,n){n===void 0&&(n=new xo);var o=r.call(this)||this;return o.input=t,o.options=n,o}return e}(yr),Xc=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n,o,a;return tt(this,function(i){switch(i.label){case 0:return t=this,n=t.input,o=t.options,o instanceof Bc?[4,Zt.mtcnn.forward(n,o)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(a=o instanceof zc?function(s){return Zt.tinyFaceDetector.locateFaces(s,o)}:o instanceof xo?function(s){return Zt.ssdMobilenetv1.locateFaces(s,o)}:o instanceof li?function(s){return Zt.tinyYolov2.locateFaces(s,o)}:null,!a)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,a(n)]}})})},e.prototype.runAndExtendWithFaceDetections=function(){var t=this;return new Promise(function(n){return Z(t,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o.map(function(i){return ur({},i)}))]}})})})},e.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new x0(this.runAndExtendWithFaceDetections(),this.input,t)},e.prototype.withFaceExpressions=function(){return new di(this.runAndExtendWithFaceDetections(),this.input)},e.prototype.withAgeAndGender=function(){return new yi(this.runAndExtendWithFaceDetections(),this.input)},e}(Kc);(function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.run=function(){return Z(this,void 0,void 0,function(){var t,n;return tt(this,function(o){switch(o.label){case 0:return[4,new Xc(this.input,this.options)];case 1:return t=o.sent(),n=t[0],t.forEach(function(a){a.score>n.score&&(n=a)}),[2,n]}})})},e.prototype.runAndExtendWithFaceDetection=function(){var t=this;return new Promise(function(n){return Z(t,void 0,void 0,function(){var o;return tt(this,function(a){switch(a.label){case 0:return[4,this.run()];case 1:return o=a.sent(),[2,n(o?ur({},o):void 0)]}})})})},e.prototype.withFaceLandmarks=function(t){return t===void 0&&(t=!1),new b0(this.runAndExtendWithFaceDetection(),this.input,t)},e.prototype.withFaceExpressions=function(){return new vi(this.runAndExtendWithFaceDetection(),this.input)},e.prototype.withAgeAndGender=function(){return new xi(this.runAndExtendWithFaceDetection(),this.input)},e})(Kc);function w0(r,e){return e===void 0&&(e=new xo),new Xc(r,e)}function C0(r,e){if(r.length!==e.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var t=Array.from(r),n=Array.from(e);return Math.sqrt(t.map(function(o,a){return o-n[a]}).reduce(function(o,a){return o+Math.pow(a,2)},0))}(function(){function r(e,t){t===void 0&&(t=.6),this._distanceThreshold=t;var n=Array.isArray(e)?e:[e];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,a=function(){return"person "+o++};this._labeledDescriptors=n.map(function(i){if(i instanceof Sr)return i;if(i instanceof Float32Array)return new Sr(a(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new Sr(a(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(e,t){return t.map(function(n){return C0(n,e)}).reduce(function(n,o){return n+o},0)/(t.length||1)},r.prototype.matchDescriptor=function(e){var t=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,a=n.label;return new xs(a,t.computeMeanDistance(e,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(e){var t=this.matchDescriptor(e);return t.distance<this.distanceThreshold?t:new xs("unknown",t.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(e){return e.toJSON()})}},r.fromJSON=function(e){var t=e.labeledDescriptors.map(function(n){return Sr.fromJSON(n)});return new r(t,e.distanceThreshold)},r})();function Yc(r,e){var t=new dn(e.width,e.height),n=t.width,o=t.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return Yc(s,{width:n,height:o})});if(Sc(r)){var a=r.detection.forSize(n,o),i=r.unshiftedLandmarks.forSize(a.box.width,a.box.height);return yo(ur(r,a),i)}return lc(r)?ur(r,r.detection.forSize(n,o)):r instanceof sr||r instanceof xe?r.forSize(n,o):r}class _0{constructor(e,t,n){et(this,"radius");et(this,"x");et(this,"y");this.radius=e,this.x=t,this.y=n}}const E0=.1,I0=.95;class R0{constructor(e,t,n,o,a,i){et(this,"index");et(this,"effect");et(this,"x");et(this,"y");et(this,"originX");et(this,"originY");et(this,"size");et(this,"vx");et(this,"vy");et(this,"ease");et(this,"friction");et(this,"dx");et(this,"dy");et(this,"distance");et(this,"force");et(this,"angle");et(this,"color");et(this,"visibilityLife");this.index=e,this.effect=t,this.originX=Math.floor(n),this.originY=Math.floor(o),this.x=this.originX,this.y=this.originY,this.size=this.effect.gap,this.vx=0,this.vy=0,this.ease=E0,this.friction=I0,this.dx=0,this.dy=0,this.distance=0,this.force=0,this.angle=0,this.color={red:a.red,green:a.green,blue:a.blue,alpha:a.alpha},this.visibilityLife=i}draw(e){e.fillStyle=`rgb(${this.color.red}, ${this.color.green}, ${this.color.blue}, ${this.color.alpha})`,e.fillRect(this.x,this.y,this.size,this.size)}update(e,t){this.color=e,this.visibilityLife=t,this.dx=(this.effect.mouse.x??0)-this.x,this.dy=(this.effect.mouse.y??0)-this.y,this.distance=this.dx*this.dx+this.dy*this.dy,this.force=-this.effect.mouse.radius/this.distance,this.distance<this.effect.mouse.radius&&(this.angle=Math.atan2(this.dy,this.dx),this.vx+=this.force*Math.cos(this.angle),this.vy+=this.force*Math.sin(this.angle)),this.x+=(this.vx*=this.friction)+(this.originX-this.x)*this.ease,this.y+=(this.vy*=this.friction)+(this.originY-this.y)*this.ease,this.visibilityLife>0?(this.color.alpha+=this.effect.visibilityEase,this.color.alpha>=1&&(this.color.alpha=1)):(this.color.alpha-=this.effect.visibilityEase,this.color.alpha<=0&&(this.color.alpha=0)),this.visibilityLife=this.visibilityLife-1}}const Ca=r=>{const{targetWidth:e,targetHeight:t,sourceWidth:n,sourceHeight:o,useMin:a=!1}=r,i=e/n,s=t/o,u=a?Math.min(i,s):Math.max(i,s),c=u*n,l=u*o,h=(e-c)/2,f=(t-l)/2;return{x:h,y:f,w:c,h:l,ratio:u}};class k0{constructor(e,t,n,o,a,i,s,u,c){et(this,"width");et(this,"height");et(this,"particlesArray");et(this,"video");et(this,"x");et(this,"y");et(this,"gap");et(this,"mouse");et(this,"faceDetections");et(this,"maxNumberOfFaces");et(this,"intervalId");et(this,"pixelSize");et(this,"visibilityEase");et(this,"recognitionLeniency");et(this,"canvasScaleRatio");et(this,"wrapper");et(this,"mouseInFaceDetection");et(this,"pixels");et(this,"delete",()=>{this.wrapper.removeEventListener("mousemove",this.onMouseMove),window.clearInterval(this.intervalId)});et(this,"onMouseMove",e=>{this.mouse.x=e.clientX*this.canvasScaleRatio,this.mouse.y=e.clientY*this.canvasScaleRatio});var l,h,f;this.width=e,this.height=t,this.particlesArray=[],this.video=u,this.x=0,this.y=0,this.gap=o,this.mouse=new _0(a*1e3,-1/0,-1/0),this.faceDetections=[],this.maxNumberOfFaces=0,this.intervalId=-1,this.pixelSize=o,this.visibilityEase=i,this.recognitionLeniency=s,this.canvasScaleRatio=n,this.wrapper=c,this.mouseInFaceDetection=!1,this.pixels=null,this.wrapper.addEventListener("mousemove",this.onMouseMove),(l=this.video)==null||l.play(),(h=this.video)==null||h.addEventListener("loadeddata",()=>this.detectFaces()),(((f=this.video)==null?void 0:f.readyState)??0)>0&&this.detectFaces(),this.video&&(this.video.currentTime=0)}updateParticleColors(e,t){var m,g,x,b,y;const n=!!(t!=null&&t.init),o=e.canvas,a=((m=this.video)==null?void 0:m.videoWidth)??0,i=((g=this.video)==null?void 0:g.videoHeight)??0,{x:s,y:u,w:c,h:l}=Ca({targetWidth:o.width,targetHeight:o.height,sourceWidth:a,sourceHeight:i}),h=this.video;if(!h)return;const f=((x=this.video)==null?void 0:x.videoWidth)??0,p=((b=this.video)==null?void 0:b.videoHeight)??0;e.drawImage(h,0,0,f,p,s,u,c,l);let d=e.getImageData(0,0,this.width,this.height).data,v=0;for(let w=0;w<this.height;w+=this.gap)for(let C=0;C<this.width;C+=this.gap){const S=(w*this.width+C)*4,k=d[S],I=d[S+1],R=d[S+2];let N=((y=this.particlesArray[v])==null?void 0:y.visibilityLife)??0;const A=C,L=C+this.pixelSize,M=w,B=w+this.pixelSize;this.faceDetections.forEach(W=>{const z=W.x,G=W.x+W.w,H=W.y,j=W.y+W.h;!(G<A||z>L||j<M||H>B)&&(N=1)});const U=n?{red:k,green:I,blue:R,alpha:0}:{red:k,green:I,blue:R,alpha:this.particlesArray[v].color.alpha};n?this.particlesArray.push(new R0(v,this,C,w,U,N)):this.particlesArray[v].update(U,N),v++}}draw(e){this.particlesArray.forEach(t=>t.draw(e))}detectFaces(){var c,l;const e=this.video;if(!e)return;const t=((c=this.video)==null?void 0:c.videoWidth)??0,n=((l=this.video)==null?void 0:l.videoHeight)??0,o={width:t,height:n},{x:a,y:i,ratio:s}=Ca({targetWidth:this.width,targetHeight:this.height,sourceWidth:t,sourceHeight:n});let u=0;this.intervalId=window.setInterval(()=>{Zt.tinyFaceDetector.isLoaded&&w0(e,new zc).then(h=>{let f=[];try{f=Yc(h,o)}catch(d){console.error(d)}f.length>this.maxNumberOfFaces&&(this.maxNumberOfFaces=f.length),f.length<this.maxNumberOfFaces?u++:u=0;const p=f.map(({box:d})=>({x:a+d.x*s,y:i+d.y*s,w:d.width*s,h:d.height*s}));return f.length>=this.maxNumberOfFaces||u>=this.recognitionLeniency?this.faceDetections=[...p]:this.faceDetections=[...this.faceDetections,...p],h})},60)}}class S0{constructor(e,t,n,o,a,i,s,u,c){et(this,"readCanvas");et(this,"readContext");et(this,"writeCanvas");et(this,"writeContext");et(this,"effect");et(this,"animationId");et(this,"lastExecutionTime");et(this,"throttleInterval");et(this,"frameRate");et(this,"delete",()=>{this.effect.delete(),cancelAnimationFrame(this.animationId),this.writeCanvas.removeEventListener("mouseleave",this.onMouseLeave),this.writeContext.clearRect(0,0,this.writeCanvas.width,this.writeCanvas.height),this.lastExecutionTime=0});et(this,"onMouseLeave",()=>{this.effect.mouse.x=-1/0,this.effect.mouse.y=-1/0});et(this,"animate",e=>{e-this.lastExecutionTime>=this.throttleInterval&&(this.writeContext.clearRect(0,0,this.writeCanvas.width,this.writeCanvas.height),this.effect.draw(this.writeContext),this.effect.updateParticleColors(this.readContext),this.lastExecutionTime=e),this.animationId=requestAnimationFrame(this.animate)});this.readCanvas=s,this.readContext=this.readCanvas.getContext("2d",{willReadFrequently:!0}),this.writeCanvas=i,this.writeContext=this.writeCanvas.getContext("2d",{willReadFrequently:!0});const{w:l,h,ratio:f}=Ca({targetWidth:screen.width,targetHeight:screen.height,sourceWidth:u.clientWidth,sourceHeight:u.clientHeight,useMin:!0});this.readCanvas.width=l,this.readCanvas.height=h,this.writeCanvas.width=this.readCanvas.width,this.writeCanvas.height=this.readCanvas.height,this.writeCanvas.addEventListener("mouseleave",this.onMouseLeave),this.effect=new k0(this.writeCanvas.width,this.writeCanvas.height,f,e,t,n,o,a,u),this.effect.updateParticleColors(this.readContext,{init:!0}),this.animationId=0,this.frameRate=c,this.lastExecutionTime=0,this.throttleInterval=1e3/this.frameRate}}const Is="wrapper",Rs="write-canvas",ks="read-canvas",Ss="video",Fr=r=>new Error(`element with id '${r}' not found`),D0=25,A0=10,T0=.1,N0=0,F0=120,P0="face-pixels/models",M0=`/face-pixels/${P0}`,O0=async()=>{await Zt.tinyFaceDetector.loadFromUri(M0);const r=document.getElementById(Rs);if(!r)throw Fr(Rs);const e=document.getElementById(ks);if(!e)throw Fr(ks);const t=document.getElementById(Ss);if(!t)throw Fr(Ss);const n=document.getElementById(Is);if(!n)throw Fr(Is);let o=null;const a=()=>!r||!e||!t?null:new S0(D0,A0,T0,N0,t,r,e,n,F0),i=()=>{o=a(),o==null||o.animate(0)};window.addEventListener("resize",()=>{o&&o.delete(),i()}),i()};O0()});export default B0();

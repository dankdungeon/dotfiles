"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[244],{244:(t,r,n)=>{n.d(r,{extractColors:()=>g});var s=n(6728);const o="https://local-image.spotify.com";let i=function(t){return t[t.ARRAY_BUFFER=0]="ARRAY_BUFFER",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t}({});var e=n(1590),a=n.n(e);var h=n(6248);const u=new function(){return a()('(()=>{"use strict";let t=function(t){return t[t.HEX=0]="HEX",t[t.HEXA=1]="HEXA",t[t.RGB=2]="RGB",t[t.RGBA=3]="RGBA",t[t.HSL=4]="HSL",t[t.HSLA=5]="HSLA",t}({});function r(t,r,n=1e-6){return Math.abs(t-r)<n}function n(t){return t.toString(16).padStart(2,"0")}function s(t){return`${parseFloat((100*t).toFixed(1))}%`}function o(t){t=t.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,(function(t,r,n,s){return r+r+n+n+s+s}));const r=/^#?(?<r>[a-f\\d]{2})(?<g>[a-f\\d]{2})(?<b>[a-f\\d]{2})(?<a>[a-f\\d]{2})?$/i.exec(t),n=r?.groups?.r,s=r?.groups?.g,o=r?.groups?.b,i=r?.groups?.a;if(void 0===n||void 0===s||void 0===o)throw new Error(`Invalid hex color code "${t}"`);return{r:n,g:s,b:o,a:i}}function i(t){const{a:r}=o(t);if(!r)return 1;return function(t,r,n){const s=t.toLocaleString("en",{useGrouping:!1,minimumFractionDigits:r,maximumFractionDigits:n});return Number(s)}(parseInt(r,16)/255,0,2)}function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function a({rgb:{r:t,g:r,b:n}}){return.2126*e(t/255)+.7152*e(r/255)+.0722*e(n/255)}function h(t,r){const n=a(t),s=a(r);return(Math.max(n,s)+.05)/(Math.min(n,s)+.05)}class u{constructor(t,r,n,s=1){this.rgb=t,this.hsl=r,this.hsv=n,this.a=s}static BLACK=u.fromRGB({r:0,g:0,b:0});static WHITE=u.fromRGB({r:255,g:255,b:255});static fromRGB(t,n){if(t.r<0||t.g<0||t.b<0||t.r>255||t.g>255||t.b>255||n&&n<0||n&&n>1)throw Error(`Invalid RGB color: ${JSON.stringify(t)}, alpha: ${n}`);const s=function({r:t,g:n,b:s}){const o=t/255,i=n/255,e=s/255,a=Math.max(o,i,e),h=Math.min(o,i,e),u=a-h;let c;const l=(a+h)/2,g=a;c=r(u,0)?0:r(g,o)?60*(0+(i-e)/u):r(g,i)?60*(2+(e-o)/u):60*(4+(o-i)/u),c%=360,c<0&&(c+=360);const f=0===l||1===l?0:(g-l)/Math.min(l,1-l);return{h:Math.round(c),s:f,l}}(t),o=function({r:t,g:n,b:s}){const o=t/255,i=n/255,e=s/255,a=Math.max(o,i,e),h=a-Math.min(o,i,e);let u;const c=a;u=r(h,0)?0:r(c,o)?60*(0+(i-e)/h):r(c,i)?60*(2+(e-o)/h):60*(4+(o-i)/h),u%=360,u<0&&(u+=360);const l=0===c?0:h/c;return{h:Math.round(u),s:l,v:c}}(t);return new u(t,s,o,n)}static fromHex(t,r){const n=function(t){const{r,g:n,b:s}=o(t);return{r:parseInt(r,16),g:parseInt(n,16),b:parseInt(s,16)}}(t),s=i(t);return u.fromRGB(n,r??s)}static fromHSV(t,r){const n=function({h:t,s:r,v:n}){const s=n*r,o=t/60,i=s*(1-Math.abs(o%2-1));let e;e=o>=0&&o<=1?[s,i,0]:o>1&&o<=2?[i,s,0]:o>2&&o<=3?[0,s,i]:o>3&&o<=4?[0,i,s]:o>4&&o<=5?[i,0,s]:o>5&&o<=6?[s,0,i]:[0,0,0];const a=n-s;return{r:Math.round(255*(e[0]+a)),g:Math.round(255*(e[1]+a)),b:Math.round(255*(e[2]+a))}}(t);return u.fromRGB(n,r)}static fromHSL(t,r){const n=function({h:t,s:r,l:n}){const s=(1-Math.abs(2*n-1))*r,o=t/60,i=s*(1-Math.abs(o%2-1));let e;e=o>=0&&o<=1?[s,i,0]:o>1&&o<=2?[i,s,0]:o>2&&o<=3?[0,s,i]:o>3&&o<=4?[0,i,s]:o>4&&o<=5?[i,0,s]:o>5&&o<=6?[s,0,i]:[0,0,0];const a=n-s/2;return{r:Math.round(255*(e[0]+a)),g:Math.round(255*(e[1]+a)),b:Math.round(255*(e[2]+a))}}(t);return u.fromRGB(n,r)}static fromInt(t,r){const n=function(t){return{r:t>>16&255,g:t>>8&255,b:255&t}}(t);return u.fromRGB(n,r)}static fromCSS(t,r){const n=function(t,r){const n=t.match(/^rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*(\\d+(?:\\.\\d+)?))?\\)$/);if(n){const[t,s,o,i]=n.slice(1),e=r??parseFloat(i);return{rgb:{r:parseInt(t,10),g:parseInt(s,10),b:parseInt(o,10)},rgbAlpha:Number.isNaN(e)?void 0:e}}return null}(t,r);if(n){const{rgb:t,rgbAlpha:r}=n;return u.fromRGB(t,r)}const s=function(t){const r=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(r)return r[1];return null}(t);if(s)return u.fromHex(s,r);const o=function(t,r){const n=t.match(/^hsla?\\((\\d+),\\s*(\\d+)%,\\s*(\\d+)%(?:,\\s*(\\d*(?:\\.\\d+)?))?\\)$/);if(n){const[t,s,o,i]=n.slice(1),e=r??parseFloat(i);return{hsl:{h:parseInt(t,10),s:parseInt(s,10)/100,l:parseInt(o,10)/100},hslAlpha:Number.isNaN(e)?void 0:e}}return null}(t,r);if(o){const{hsl:t,hslAlpha:r}=o;return u.fromHSL(t,r)}throw new Error(`Invalid or unsupported CSS color: ${t}`)}toCSS(r){switch(r){case t.HEX:return`#${n((o=this).rgb.r)}${n(o.rgb.g)}${n(o.rgb.b)}`;case t.HEXA:return function(t){return`#${n(t.rgb.r)}${n(t.rgb.g)}${n(t.rgb.b)}${n(Math.floor(255*t.a))}`}(this);case t.RGB:return function(t){return`rgb(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b})`}(this);case t.RGBA:return function(t){return`rgba(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b}, ${t.a})`}(this);case t.HSL:return function(t){const{h:r,s:n,l:o}=t.hsl;return`hsl(${r}, ${s(n)}, ${s(o)})`}(this);case t.HSLA:return function(t){const{h:r,s:n,l:o}=t.hsl;return`hsla(${r}, ${s(n)}, ${s(o)}, ${t.a})`}(this);default:throw new Error("Invalid or unsupported CSSColorFormat!")}var o}toRGBA255(){return{r:this.rgb.r,g:this.rgb.g,b:this.rgb.b,a:255*this.a}}contrastAdjust(t,r=4.5){let n=u.BLACK;if("light"===t&&(n=u.WHITE),n!==u.BLACK&&n!==u.WHITE)throw new Error("Only supports contrast calculation between black and white.");let s=h(this,n);if(s>=r)return this;let o=this.hsv.v,i=n===u.WHITE?-.02:.02,e=Number.MAX_VALUE,a=null;for(let t=0;t<100&&e>.07&&o>=0&&o<=1;t++){o=Math.min(o+i,1),a=u.fromHSV({h:this.hsv.h,s:this.hsl.s,v:o}),s=h(a,u.WHITE);const t=Math.round(10*Math.abs(s-r))/10;t>e&&(i*=-.5),e=t}return null===a?this:a}toString(){return`${this.rgb.r},${this.rgb.g},${this.rgb.b},${this.a}`}stringify(){return JSON.stringify(this)}static parse(t){const{rgb:r,hsl:n,hsv:s,a:o}=JSON.parse(t);return new u(r,n,s,o)}}class c{constructor(t,r){this.color=t,this.population=r}static fromColor(t,r){return new c(t,r)}static fromRGB(t,r){return new c(u.fromRGB(t),r)}}class l{constructor(t,r=[]){this._comparator=t,this._data=r}swap(t,r){[this._data[t],this._data[r]]=[this._data[r],this._data[t]]}compare(t,r){return this._comparator(this._data[t],this._data[r])}bubbleUp(t){for(;t>0;){const r=t-1>>>1;if(this.compare(t,r)>=0)break;this.swap(t,r),t=r}}bubbleDown(t){const r=this._data.length;for(;;){const n=1+(t<<1),s=n+1;let o=t;if(n<r&&this.compare(n,o)<=0&&(o=n),s<r&&this.compare(s,o)<0&&(o=s),o===t)break;this.swap(o,t),t=o}}size(){return this._data.length}push(t){this._data.push(t),this.bubbleUp(this._data.length-1)}pop(){if(0===this._data.length)return null;this.swap(0,this._data.length-1);const t=this._data.pop();return this.bubbleDown(0),t}clone(){return new l(this._comparator,[...this._data])}*popAll(){for(;this._data.length>0;)yield this.pop()}}const g=31;function f(t){const r=(t>>>10&31)<<3,n=(t>>>5&31)<<3,s=(t>>>0&31)<<3;return u.fromRGB({r,g:n,b:s})}function p(t,r){return Math.round((t>>>3)/r)<<3}function b({rgb:{r:t,g:r,b:n}},{rgb:{r:s,g:o,b:i}}){return t*g*g+r*g+n-(s*g*g+o*g+i)}function m({rgb:{r:t,g:r,b:n}},{rgb:{r:s,g:o,b:i}}){return r*g*g+t*g+n-(o*g*g+s*g+i)}function d({rgb:{r:t,g:r,b:n}},{rgb:{r:s,g:o,b:i}}){return n*g*g+r*g+t-(i*g*g+o*g+s)}class w{constructor(t,r){this.min=t,this.max=r}size(){return this.max-this.min+1}clampTo(t){this.min=this.max=t}extendTo(t){this.min=Math.min(this.min,t),this.max=Math.max(this.max,t)}}class _{_population=0;_spanR=new w(0,0);_spanG=new w(0,0);_spanB=new w(0,0);constructor(t){this._swatches=t,this.fitBox()}getVolume(){return this._spanR.size()*this._spanG.size()*this._spanB.size()}getColorCount(){return this._swatches.length}getAverageColor(){let t=0,r=0,n=0,s=0;for(const{color:o,population:i}of this._swatches)s+=i,t+=i*o.rgb.r,r+=i*o.rgb.g,n+=i*o.rgb.b;const o=p(t,s),i=p(r,s),e=p(n,s);return c.fromRGB({r:o,g:i,b:e},s)}canSplit(){return this.getColorCount()>1}split(){if(!this.canSplit())throw new Error("Can not split a box with only 1 color");const t=this.findSplitPoint(),r=new _(this._swatches.slice(t+1,this._swatches.length));return this._swatches.splice(t+1),this.fitBox(),r}fitBox(){this._population=0;for(let t=0;t<this._swatches.length;t++){const{color:r,population:n}=this._swatches[t];this._population+=n,0===t?(this._spanR.clampTo(r.rgb.r),this._spanG.clampTo(r.rgb.g),this._spanB.clampTo(r.rgb.b)):(this._spanR.extendTo(r.rgb.r),this._spanG.extendTo(r.rgb.g),this._spanB.extendTo(r.rgb.b))}}findSplitPoint(){const t=this.getLongestDimensionComparator();this._swatches.sort(((r,n)=>t(r.color,n.color)));const r=Math.floor(this._population/2);for(let t=0,n=0;t<this._swatches.length;t++)if(n+=this._swatches[t].population,n>=r)return Math.min(this._swatches.length-1,t);return 0}getLongestDimensionComparator(){const t=this._spanR.size(),r=this._spanG.size(),n=this._spanB.size();return t>=r&&t>=n?b:r>=t&&r>=n?m:d}}class M{queue=new l(((t,r)=>r.getVolume()-t.getVolume()));_swatches=[];constructor(t){this._options=t}static fromPixels(t,r){return new M(r).quantize(t)}quantize(t){const r=new Array(32768).fill(0);let n=0,s=0,o=0;for(let s=t.next();!s.done;s=t.next()){n++;r[((i=s.value)>>>0&255)>>3<<10|(i>>>8&255)>>3<<5|(i>>>16&255)>>3]++}var i;for(let t=0;t<r.length;t++){const n=r[t];if(0===n)continue;const i=f(t);(void 0===this._options.filter||this._options.filter(i))&&(s++,o+=i.hsv.s,this._swatches.push(c.fromColor(i,n)))}return this._swatches.length>this._options.maxColors&&(this._swatches=this.quantizePixels(this._options.maxColors)),{swatches:this._swatches,totalPixels:n,totalColors:s,totalSaturationFromHSV:o}}quantizePixels(t){this.queue.push(new _(this._swatches)),this.splitBoxes(t);const r=Array.from(this.queue.popAll()).map((t=>t.getAverageColor())),n=this._options.filter;return void 0!==n?r.filter((t=>n(t.color))):r}splitBoxes(t){for(;this.queue.size()<t;){const t=this.queue.pop();if(null===t||!t.canSplit())return;this.queue.push(t.split()),this.queue.push(t)}}}function v(t,r){return t.reduce(((t,n)=>null!==t&&r(t)>r(n)?t:n),null)}const x=30,S=80,R=2,A=.0016,B=.3,$=.1,G=45,I=.4,C=.6,E=.1,H=.02;function L(t,r,n){return(t-r)/(n-r)}function T(t){return(t%=360)<0?360+t:t}function y(t,r){const n=function(t){let r=Number.MAX_VALUE;for(const n of t)r=Math.min(r,n);r=-1*Math.abs(r);let n=0,s=360;for(const o of t){const t=T(o+r);t<180&&t>n&&(n=t),t>=180&&t<s&&(s=t)}return n=T(n-r),s=T(s-r),{hue1:Math.min(n,s),hue2:Math.max(n,s)}}(t);let s=0;return r>=n.hue1&&r<=n.hue2?L(T(r),n.hue1,n.hue2):(s=360-n.hue2,L(T(r+s),0,T(n.hue1+s)))}function F(t,r){const n=t.map((t=>t.color.hsv.h)),s=function(t){let r=0,n=0;for(const s of t)r+=Math.cos(s/180*Math.PI),n+=Math.sin(s/180*Math.PI);const s=r/t.length,o=n/t.length,i=180*Math.atan2(o,s)/Math.PI%360;return i>=0?i:360-Math.abs(i)}(n),o=y(n,s);return o>I||o<C?t.filter((t=>{return t.population/r>H||(n=t.color.hsv.h,o=s,i=G,Math.min(Math.abs(o-n),360-Math.abs(o-n))<i);var n,o,i})):t}function P({color:{hsv:t},population:r},n,s){return(n?1:function(t){const r=function(t,r,n){const s=(n-r)/2+r-r,o=t-r,i=(s-Math.abs(s-o))/s;return Math.max(0,Math.min(i,1))}(t,x,S);return-1*Math.abs(r*R)}(t.h))+r/s+t.s*t.v}function z(t,r,n,s){const o=s/n;if(o<$)return null;const i=t.filter((t=>t.population/r>=A)).filter((t=>!(o>=$+E)||function({hsv:t}){return(t.v>.85||t.v<.15)&&t.s<.2||t.v<.15||t.s<.2||t.s<.2&&t.v<.4?0:(t.v+t.s)/2}(t.color)>=B));if(0===i.length)return null;const e=F(i,r),a=function(t){return t.map((t=>t.color.hsv.h)).every((t=>t>=x&&t<=S))}(e);return v(e,(t=>P(t,a,r)))}const D={min:.3,target:.5,max:.7},N={min:0,target:.26,max:.45},q={min:.55,target:.74,max:1},k={min:.35,target:1,max:1},V={min:0,target:.3,max:.4},X={saturation:.24,luminance:.52,population:.24},O={vibrantLight:{lightness:q,saturation:k,weights:X},vibrant:{lightness:D,saturation:k,weights:X},vibrantDark:{lightness:N,saturation:k,weights:X},mutedLight:{lightness:q,saturation:V,weights:X},muted:{lightness:D,saturation:V,weights:X},mutedDark:{lightness:N,saturation:V,weights:X}},U=c.fromRGB({r:83,g:83,b:83},1),J=c.fromRGB({r:83,g:83,b:83},1),j=c.fromRGB({r:127,g:127,b:127},1);function W(t,r){const{color:{hsl:n}}=t;return n.s>=r.saturation.min&&n.s<=r.saturation.max&&n.l>=r.lightness.min&&n.l<=r.lightness.max}function K(t,r,n){const{color:{hsl:s}}=t;let o=0,i=0,e=0;return r.weights.saturation>0&&(o=r.weights.saturation*(1-Math.abs(s.s-r.saturation.target))),r.weights.luminance>0&&(i=r.weights.luminance*(1-Math.abs(s.l-r.lightness.target))),r.weights.population>0&&(e=r.weights.population*(t.population/n)),o+i+e}let Y=function(t){return t[t.ARRAY_BUFFER=0]="ARRAY_BUFFER",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t}({});const Q=self;const Z=t=>!function({hsl:t}){return t.l<=.05}(t)&&!function({hsl:t}){return t.l>=.95}(t)&&!function({hsl:t}){return t.h>=10&&t.h<=37&&t.s<=.82}(t)&&function({hsv:t}){return t.v>.2}(t);Q.addEventListener("message",(t=>{const[r,n]=t.data,s=function(t){if(t.source===Y.IMAGE_BITMAP){const r=t.data,n=new OffscreenCanvas(r.width,r.height).getContext("2d");return n.drawImage(r,0,0,r.width,r.height),n.getImageData(0,0,r.width,r.height).data.buffer}return t.data}(n),o=function*(t,r){const n=new Uint32Array(t),s=Math.ceil(n.length/r);for(let t=0;t<n.length;t+=s)yield n[t]}(s,2e4),i=M.fromPixels(o,{maxColors:16,filter:Z}),{visRefSwatch:e,visRefDarkSwatch:a,visRefLightSwatch:h}=function(t,r,n,s,o=O){const i=new Set,e=v(t,(t=>t.population)),a={};for(const[r,n]of Object.entries(o)){const s=v(t.filter((t=>!i.has(t.color.toString()))).filter((t=>W(t,n))),(t=>K(t,n,e?.population||1)));null!==s&&(a[r]=s,i.add(s.color.toString()))}const h=z(Object.values(a),r,n,s),u=h?c.fromColor(h.color.contrastAdjust("dark"),1):null,l=h?c.fromColor(h.color.contrastAdjust("light"),1):null;return{dominantSwatch:e,visRefSwatch:h||U,visRefDarkSwatch:u||J,visRefLightSwatch:l||j,visRefIsFallback:null===h,targetSwatches:a}}(i.swatches,i.totalPixels,i.totalColors,i.totalSaturationFromHSV);Q.postMessage([r,{colorRawJson:e.color.stringify(),colorLightJson:h.color.stringify(),colorDarkJson:a.color.stringify()}])}))})();\n',"Worker",void 0,void 0)};let c=0;async function l(t){const r=c++,n=new Promise(((t,n)=>{u.addEventListener("message",(n=>{const[o,i]=n.data;o===r&&t({colorRaw:s.Q.parse(i.colorRawJson),colorDark:s.Q.parse(i.colorDarkJson),colorLight:s.Q.parse(i.colorLightJson)})})),u.addEventListener("error",n)}));return u.postMessage([r,t],[t.data]),await n}async function g(t){let r;try{r=await async function(t){const r=new Image;return r.crossOrigin="anonymous",function(t){const r=0===t.indexOf("spotify:image:"),n=0===t.indexOf("spotify:mosaic:"),s=0===t.indexOf("spotify:localfileimage:");return r||n||s}(t)?r.src=`${o}?uri=${encodeURIComponent(t)}`:r.src=t,await r.decode(),r}(t)}catch(t){return Promise.resolve(h.A)}const n=r.naturalWidth,s=r.naturalHeight;if("createImageBitmap"in window&&"OffscreenCanvas"in window){const t=await window.createImageBitmap(r);return await async function(t){return await l({source:i.IMAGE_BITMAP,data:t})}(t)}const e=document.createElement("canvas"),a=e.getContext("2d");return e.width=n,e.height=s,a.drawImage(r,0,0,n,s),await async function(t){return await l({source:i.ARRAY_BUFFER,data:t.data.buffer})}(a.getImageData(0,0,n,s))}}}]);
//# sourceMappingURL=244.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"o6lB":[function(require,module,exports) {
const e=e=>new Promise(o=>{setTimeout(()=>{o(e)},e)}),o=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(o),e(1e3).then(o),e(1500).then(o);
},{}],"L79m":[function(require,module,exports) {
const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=(e,a)=>new Promise(n=>{n(e.map(e=>e.name===a?{...e,active:!e.active}:e))}),n=e=>console.table(e);a(e,"Mango").then(n),a(e,"Lux").then(n);
},{}],"eBhC":[function(require,module,exports) {
const t=(t,n)=>Math.floor(Math.random()*(n-t+1)+t),n=n=>{const a=t(200,500);return new Promise((t,o)=>{setTimeout(()=>{Math.random()>.3&&t({id:n.id,time:a}),o(n.id)},a)})},a=({id:t,time:n})=>{console.log(`Transaction ${t} processed in ${n}ms`)},o=t=>{console.warn(`Error processing transaction ${t}. Please try again later.`)};n({id:70,amount:150}).then(a).catch(o),n({id:71,amount:230}).then(a).catch(o),n({id:72,amount:75}).then(a).catch(o),n({id:73,amount:100}).then(a).catch(o);
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/task-01.js"),require("./js/task-02.js"),require("./js/task-03.js");
},{"./sass/main.scss":"clu1","./js/task-01.js":"o6lB","./js/task-02.js":"L79m","./js/task-03.js":"eBhC"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/src.4b4ee7fd.js.map
/*! For license information please see main.aa41f6bf.js.LICENSE.txt */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/bookings/",n(n.s=23)}([function(t,e){t.exports=React},function(t,e,n){"use strict";t.exports=n(10)},function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e,n){t.exports=n(13)()},,function(t,e){t.exports=ReactDOM},function(t,e,n){"use strict";(function(t){var r=n(0),o=n.n(r),i=n(2),a=n(3),c=n.n(a),u=1073741823,s="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{};function f(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter((function(e){return e!==t}))},get:function(){return t},set:function(n,r){t=n,e.forEach((function(e){return e(t,r)}))}}}var l=o.a.createContext||function(t,e){var n,o,a="__create-react-context-"+function(){var t="__global_unique_id__";return s[t]=(s[t]||0)+1}()+"__",l=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).emitter=f(e.props.value),e}Object(i.a)(n,t);var r=n.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?n=0:(n="function"===typeof e?e(r,o):u,0!==(n|=0)&&this.emitter.set(t.value,n))}var i,a},r.render=function(){return this.props.children},n}(r.Component);l.childContextTypes=((n={})[a]=c.a.object.isRequired,n);var p=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!==((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Object(i.a)(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=void 0===e||null===e?u:e},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?u:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return p.contextTypes=((o={})[a]=c.a.object,o),{Provider:l,Consumer:p}};e.a=l}).call(this,n(15))},function(t,e,n){var r=n(16);t.exports=d,t.exports.parse=i,t.exports.compile=function(t,e){return c(i(t,e),e)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",f=e&&e.delimiter||"/";null!=(n=o.exec(t));){var l=n[0],p=n[1],d=n.index;if(c+=t.slice(a,d),a=d+l.length,p)c+=p[1];else{var h=t[a],v=n[2],y=n[3],m=n[4],b=n[5],g=n[6],x=n[7];c&&(r.push(c),c="");var w=null!=v&&null!=h&&h!==v,O="+"===g||"*"===g,j="?"===g||"*"===g,S=n[2]||f,P=m||b;r.push({name:y||i++,prefix:v||"",delimiter:S,optional:j,repeat:O,partial:w,asterisk:!!x,pattern:P?s(P):x?".*":"[^"+u(S)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,e){for(var n=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(n[o]=new RegExp("^(?:"+t[o].pattern+")$",l(e)));return function(e,o){for(var i="",c=e||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var f=t[s];if("string"!==typeof f){var l,p=c[f.name];if(null==p){if(f.optional){f.partial&&(i+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(r(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(l=u(p[d]),!n[s].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');i+=f.prefix+l}}else i+=f}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function f(t,e){return t.keys=e,t}function l(t){return t&&t.sensitive?"":"i"}function p(t,e,n){r(e)||(n=e||n,e=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"===typeof s)a+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";e.push(s),s.repeat&&(d+="(?:"+p+d+")*"),a+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(n.delimiter||"/"),v=a.slice(-h.length)===h;return o||(a=(v?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+h+"|$)",f(new RegExp("^"+a,l(n)),e)}function d(t,e,n){return r(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?function(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(t,e)}(t,e):r(t)?function(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(d(t[o],e,n).source);return f(new RegExp("(?:"+r.join("|")+")",l(n)),e)}(t,e,n):function(t,e,n){return p(i(t,n),e,n)}(t,e,n)}},function(t,e,n){"use strict";var r=n(19),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(t){return r.isMemo(t)?a:c[t.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(h){var o=d(n);o&&o!==h&&t(e,o,r)}var a=f(n);l&&(a=a.concat(l(n)));for(var c=u(e),v=u(n),y=0;y<a.length;++y){var m=a[y];if(!i[m]&&(!r||!r[m])&&(!v||!v[m])&&(!c||!c[m])){var b=p(n,m);try{s(e,m,b)}catch(g){}}}}return e}},function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),r(n(21)),r(n(22))},function(t,e,n){"use strict";n(11);var r=n(0),o=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),e.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(t,e,n){var r,i={},s=null,f=null;for(r in void 0!==n&&(s=""+n),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(f=e.ref),e)c.call(e,r)&&!u.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:o,type:t,key:s,ref:f,props:i,_owner:a.current}}e.jsx=s,e.jsxs=s},function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function a(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,e){for(var n,c,u=a(t),s=1;s<arguments.length;s++){for(var f in n=Object(arguments[s]))o.call(n,f)&&(u[f]=n[f]);if(r){c=r(n);for(var l=0;l<c.length;l++)i.call(n,c[l])&&(u[c[l]]=n[c[l]])}}return u}},function(t,e,n){},function(t,e,n){"use strict";var r=n(14);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e,n){"use strict";t.exports=n(18)},function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case a:case u:case c:case h:return t;default:switch(t=t&&t.$$typeof){case f:case d:case m:case y:case s:return t;default:return e}}case i:return e}}}function j(t){return O(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=d,e.Fragment=a,e.Lazy=m,e.Memo=y,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=h,e.isAsyncMode=function(t){return j(t)||O(t)===l},e.isConcurrentMode=j,e.isContextConsumer=function(t){return O(t)===f},e.isContextProvider=function(t){return O(t)===s},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return O(t)===d},e.isFragment=function(t){return O(t)===a},e.isLazy=function(t){return O(t)===m},e.isMemo=function(t){return O(t)===y},e.isPortal=function(t){return O(t)===i},e.isProfiler=function(t){return O(t)===u},e.isStrictMode=function(t){return O(t)===c},e.isSuspense=function(t){return O(t)===h},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===p||t===u||t===c||t===h||t===v||"object"===typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===y||t.$$typeof===s||t.$$typeof===f||t.$$typeof===d||t.$$typeof===g||t.$$typeof===x||t.$$typeof===w||t.$$typeof===b)},e.typeOf=O},function(t,e,n){"use strict";t.exports=n(20)},function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,l=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,v=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function O(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case l:case p:case a:case u:case c:case h:return t;default:switch(t=t&&t.$$typeof){case f:case d:case m:case y:case s:return t;default:return e}}case i:return e}}}function j(t){return O(t)===p}e.AsyncMode=l,e.ConcurrentMode=p,e.ContextConsumer=f,e.ContextProvider=s,e.Element=o,e.ForwardRef=d,e.Fragment=a,e.Lazy=m,e.Memo=y,e.Portal=i,e.Profiler=u,e.StrictMode=c,e.Suspense=h,e.isAsyncMode=function(t){return j(t)||O(t)===l},e.isConcurrentMode=j,e.isContextConsumer=function(t){return O(t)===f},e.isContextProvider=function(t){return O(t)===s},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return O(t)===d},e.isFragment=function(t){return O(t)===a},e.isLazy=function(t){return O(t)===m},e.isMemo=function(t){return O(t)===y},e.isPortal=function(t){return O(t)===i},e.isProfiler=function(t){return O(t)===u},e.isStrictMode=function(t){return O(t)===c},e.isSuspense=function(t){return O(t)===h},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===a||t===p||t===u||t===c||t===h||t===v||"object"===typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===y||t.$$typeof===s||t.$$typeof===f||t.$$typeof===d||t.$$typeof===g||t.$$typeof===x||t.$$typeof===w||t.$$typeof===b)},e.typeOf=O},function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function c(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.createShell=function(t,e,n,i){var a=function(t,n){return r(void 0,void 0,void 0,(function(){var r;return o(this,(function(o){switch(o.label){case 0:switch(r=t.type,e.info("[shell] loading '"+r+"' micro front end"),r){case"component":case"composite":case"url":return[3,1]}return[3,3];case 1:return[4,c(t,n)];case 2:o.sent(),o.label=3;case 3:return[2]}}))}))},c=function(t,n){return r(void 0,void 0,void 0,(function(){var r,i,a,c,s,f;return o(this,(function(o){switch(o.label){case 0:return n=n||document,r=t.data,i=t.name,r?(a=i+"-script",c=u(t),n.getElementById(a)?(e.trace("[shell] script already loaded, go to render"),[2,Promise.resolve(c())]):(e.info("[shell] fetching manifest from "+r.url),[4,fetch(r.url)])):[2,e.error("[shell] invalid registration, missing 'data'")];case 1:return[4,o.sent().json()];case 2:return s=o.sent(),e.trace("[shell] creating script element and mounting script"),(f=n.createElement("script")).id=a,f.crossOrigin="",f.type="text/javascript",f.src=s.files["main.js"],f.onload=c,n.head.appendChild(f),e.info("[shell] finish mounting script to document"),[2]}}))}))},u=function(t){return function(){var r=window.__mfeRegistration;r&&r[t.name+"Reg"].init(""+t.target,n,i).then((function(){return e.info("[shell] finish mounting '"+t.name+"'.")}))}};return{init:function(e){var n=t.defaultFrontend,r=t.registry;n.forEach((function(t){a(r[t],e)}))},loadModule:function(n){var r=t.registry[n];if(!r)return e.error("[shell] '"+n+"' microfrontend is not registered");a(r)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createMicrofrontendRegistration=function(t){var e=t.id,n=t.init,r=t.update,o=t.unmount,i=window;return i.__mfeRegistration||(i.__mfeRegistration={}),i.__mfeRegistration[e+"Reg"]={id:e,init:n,update:r,unmount:o},i.__mfeRegistration[e+"Reg"]}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),i=n.n(o),a=n(5),c=n(2);n(3);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t){return"/"===t.charAt(0)}function f(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}var l=function(t,e){void 0===e&&(e="");var n,r=t&&t.split("/")||[],o=e&&e.split("/")||[],i=t&&s(t),a=e&&s(e),c=i||a;if(t&&s(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];n="."===u||".."===u||""===u}else n=!1;for(var l=0,p=o.length;p>=0;p--){var d=o[p];"."===d?f(o,p):".."===d?(f(o,p),l++):l&&(f(o,p),l--)}if(!c)for(;l--;l)o.unshift("..");!c||""===o[0]||o[0]&&s(o[0])||o.unshift("");var h=o.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h};var p="Invariant failed";var d=function(t,e){if(!t)throw new Error(p)};function h(t){return"/"===t.charAt(0)?t:"/"+t}function v(t){return"/"===t.charAt(0)?t.substr(1):t}function y(t,e){return function(t,e){return 0===t.toLowerCase().indexOf(e.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(e.length))}(t,e)?t.substr(e.length):t}function m(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function b(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(t,e,n,r){var o;"string"===typeof t?(o=function(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}(t)).state=e:(void 0===(o=u({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=l(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function x(){var t=null;var e=[];return{setPrompt:function(e){return t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"===typeof t?t(e,n):t;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0;function r(){n&&t.apply(void 0,arguments)}return e.push(r),function(){n=!1,e=e.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.forEach((function(t){return t.apply(void 0,n)}))}}}var w=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(t,e){e(window.confirm(t))}var j="popstate",S="hashchange";function P(){try{return window.history.state||{}}catch(t){return{}}}function _(t){void 0===t&&(t={}),w||d(!1);var e=window.history,n=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),r=!(-1===window.navigator.userAgent.indexOf("Trident")),o=t,i=o.forceRefresh,a=void 0!==i&&i,c=o.getUserConfirmation,s=void 0===c?O:c,f=o.keyLength,l=void 0===f?6:f,p=t.basename?m(h(t.basename)):"";function v(t){var e=t||{},n=e.key,r=e.state,o=window.location,i=o.pathname+o.search+o.hash;return p&&(i=y(i,p)),g(i,r,n)}function _(){return Math.random().toString(36).substr(2,l)}var E=x();function C(t){u(B,t),B.length=e.length,E.notifyListeners(B.location,B.action)}function k(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||T(v(t.state))}function $(){T(v(P()))}var R=!1;function T(t){if(R)R=!1,C();else{E.confirmTransitionTo(t,"POP",s,(function(e){e?C({action:"POP",location:t}):function(t){var e=B.location,n=M.indexOf(e.key);-1===n&&(n=0);var r=M.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(R=!0,I(o))}(t)}))}}var A=v(P()),M=[A.key];function L(t){return p+b(t)}function I(t){e.go(t)}var U=0;function N(t){1===(U+=t)&&1===t?(window.addEventListener(j,k),r&&window.addEventListener(S,$)):0===U&&(window.removeEventListener(j,k),r&&window.removeEventListener(S,$))}var F=!1;var B={length:e.length,action:"POP",location:A,createHref:L,push:function(t,r){var o="PUSH",i=g(t,r,_(),B.location);E.confirmTransitionTo(i,o,s,(function(t){if(t){var r=L(i),c=i.key,u=i.state;if(n)if(e.pushState({key:c,state:u},null,r),a)window.location.href=r;else{var s=M.indexOf(B.location.key),f=M.slice(0,s+1);f.push(i.key),M=f,C({action:o,location:i})}else window.location.href=r}}))},replace:function(t,r){var o="REPLACE",i=g(t,r,_(),B.location);E.confirmTransitionTo(i,o,s,(function(t){if(t){var r=L(i),c=i.key,u=i.state;if(n)if(e.replaceState({key:c,state:u},null,r),a)window.location.replace(r);else{var s=M.indexOf(B.location.key);-1!==s&&(M[s]=i.key),C({action:o,location:i})}else window.location.replace(r)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var e=E.setPrompt(t);return F||(N(1),F=!0),function(){return F&&(F=!1,N(-1)),e()}},listen:function(t){var e=E.appendListener(t);return N(1),function(){N(-1),e()}}};return B}var E="hashchange",C={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+v(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:v,decodePath:h},slash:{encodePath:h,decodePath:h}};function k(t){var e=t.indexOf("#");return-1===e?t:t.slice(0,e)}function $(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)}function R(t){window.location.replace(k(window.location.href)+"#"+t)}function T(t){void 0===t&&(t={}),w||d(!1);var e=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),t),r=n.getUserConfirmation,o=void 0===r?O:r,i=n.hashType,a=void 0===i?"slash":i,c=t.basename?m(h(t.basename)):"",s=C[a],f=s.encodePath,l=s.decodePath;function p(){var t=l($());return c&&(t=y(t,c)),g(t)}var v=x();function j(t){u(B,t),B.length=e.length,v.notifyListeners(B.location,B.action)}var S=!1,P=null;function _(){var t,e,n=$(),r=f(n);if(n!==r)R(r);else{var i=p(),a=B.location;if(!S&&(e=i,(t=a).pathname===e.pathname&&t.search===e.search&&t.hash===e.hash))return;if(P===b(i))return;P=null,function(t){if(S)S=!1,j();else{var e="POP";v.confirmTransitionTo(t,e,o,(function(n){n?j({action:e,location:t}):function(t){var e=B.location,n=L.lastIndexOf(b(e));-1===n&&(n=0);var r=L.lastIndexOf(b(t));-1===r&&(r=0);var o=n-r;o&&(S=!0,I(o))}(t)}))}}(i)}}var T=$(),A=f(T);T!==A&&R(A);var M=p(),L=[b(M)];function I(t){e.go(t)}var U=0;function N(t){1===(U+=t)&&1===t?window.addEventListener(E,_):0===U&&window.removeEventListener(E,_)}var F=!1;var B={length:e.length,action:"POP",location:M,createHref:function(t){var e=document.querySelector("base"),n="";return e&&e.getAttribute("href")&&(n=k(window.location.href)),n+"#"+f(c+b(t))},push:function(t,e){var n="PUSH",r=g(t,void 0,void 0,B.location);v.confirmTransitionTo(r,n,o,(function(t){if(t){var e=b(r),o=f(c+e);if($()!==o){P=e,function(t){window.location.hash=t}(o);var i=L.lastIndexOf(b(B.location)),a=L.slice(0,i+1);a.push(e),L=a,j({action:n,location:r})}else j()}}))},replace:function(t,e){var n="REPLACE",r=g(t,void 0,void 0,B.location);v.confirmTransitionTo(r,n,o,(function(t){if(t){var e=b(r),o=f(c+e);$()!==o&&(P=e,R(o));var i=L.indexOf(b(B.location));-1!==i&&(L[i]=e),j({action:n,location:r})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var e=v.setPrompt(t);return F||(N(1),F=!0),function(){return F&&(F=!1,N(-1)),e()}},listen:function(t){var e=v.appendListener(t);return N(1),function(){N(-1),e()}}};return B}function A(t,e,n){return Math.min(Math.max(t,e),n)}function M(t){void 0===t&&(t={});var e=t,n=e.getUserConfirmation,r=e.initialEntries,o=void 0===r?["/"]:r,i=e.initialIndex,a=void 0===i?0:i,c=e.keyLength,s=void 0===c?6:c,f=x();function l(t){u(m,t),m.length=m.entries.length,f.notifyListeners(m.location,m.action)}function p(){return Math.random().toString(36).substr(2,s)}var d=A(a,0,o.length-1),h=o.map((function(t){return g(t,void 0,"string"===typeof t?p():t.key||p())})),v=b;function y(t){var e=A(m.index+t,0,m.entries.length-1),r=m.entries[e];f.confirmTransitionTo(r,"POP",n,(function(t){t?l({action:"POP",location:r,index:e}):l()}))}var m={length:h.length,action:"POP",location:h[d],index:d,entries:h,createHref:v,push:function(t,e){var r="PUSH",o=g(t,e,p(),m.location);f.confirmTransitionTo(o,r,n,(function(t){if(t){var e=m.index+1,n=m.entries.slice(0);n.length>e?n.splice(e,n.length-e,o):n.push(o),l({action:r,location:o,index:e,entries:n})}}))},replace:function(t,e){var r="REPLACE",o=g(t,e,p(),m.location);f.confirmTransitionTo(o,r,n,(function(t){t&&(m.entries[m.index]=o,l({action:r,location:o}))}))},go:y,goBack:function(){y(-1)},goForward:function(){y(1)},canGo:function(t){var e=m.index+t;return e>=0&&e<m.entries.length},block:function(t){return void 0===t&&(t=!1),f.setPrompt(t)},listen:function(t){return f.appendListener(t)}};return m}var L=n(6),I=n(7),U=n.n(I);n(17);function N(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n(8);var F=function(t){var e=Object(L.a)();return e.displayName=t,e}("Router-History"),B=function(t){var e=Object(L.a)();return e.displayName=t,e}("Router"),z=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={location:e.history.location},n._isMounted=!1,n._pendingLocation=null,e.staticContext||(n.unlisten=e.history.listen((function(t){n._isMounted?n.setState({location:t}):n._pendingLocation=t}))),n}Object(c.a)(e,t),e.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var n=e.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return i.a.createElement(B.Provider,{value:{history:this.props.history,location:this.state.location,match:e.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(F.Provider,{children:this.props.children||null,value:this.props.history}))},e}(i.a.Component);i.a.Component;i.a.Component;var D={},H=0;function W(t,e){void 0===e&&(e={}),("string"===typeof e||Array.isArray(e))&&(e={path:e});var n=e,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,c=void 0!==a&&a,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(e,n){if(!n&&""!==n)return null;if(e)return e;var r=function(t,e){var n=""+e.end+e.strict+e.sensitive,r=D[n]||(D[n]={});if(r[t])return r[t];var o=[],i={regexp:U()(t,o,e),keys:o};return H<1e4&&(r[t]=i,H++),i}(n,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var f=u[0],l=u.slice(1),p=t===f;return i&&!p?null:{path:n,url:"/"===n&&""===f?"/":f,isExact:p,params:a.reduce((function(t,e,n){return t[e.name]=l[n],t}),{})}}),null)}var V=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(B.Consumer,null,(function(e){e||d(!1);var n=t.props.location||e.location,r=u({},e,{location:n,match:t.props.computedMatch?t.props.computedMatch:t.props.path?W(n.pathname,t.props):e.match}),o=t.props,a=o.children,c=o.component,s=o.render;return Array.isArray(a)&&0===a.length&&(a=null),i.a.createElement(B.Provider,{value:r},r.match?a?"function"===typeof a?a(r):a:c?i.a.createElement(c,r):s?s(r):null:"function"===typeof a?a(r):null)}))},e}(i.a.Component);function q(t){return"/"===t.charAt(0)?t:"/"+t}function K(t,e){if(!t)return e;var n=q(t);return 0!==e.pathname.indexOf(n)?e:u({},e,{pathname:e.pathname.substr(n.length)})}function G(t){return"string"===typeof t?t:b(t)}function J(t){return function(){d(!1)}}function Y(){}i.a.Component;var Q=function(t){function e(){return t.apply(this,arguments)||this}return Object(c.a)(e,t),e.prototype.render=function(){var t=this;return i.a.createElement(B.Consumer,null,(function(e){e||d(!1);var n,r,o=t.props.location||e.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){n=t;var a=t.props.path||t.props.from;r=a?W(o.pathname,u({},t.props,{path:a})):e.match}})),r?i.a.cloneElement(n,{location:o,computedMatch:r}):null}))},e}(i.a.Component);var X=i.a.useContext;var Z=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).history=_(e.props),e}return Object(c.a)(e,t),e.prototype.render=function(){return i.a.createElement(z,{history:this.history,children:this.props.children})},e}(i.a.Component);i.a.Component;var tt=function(t,e){return"function"===typeof t?t(e):t},et=function(t,e){return"string"===typeof t?g(t,null,null,e):t},nt=function(t){return t},rt=i.a.forwardRef;"undefined"===typeof rt&&(rt=nt);var ot=rt((function(t,e){var n=t.innerRef,r=t.navigate,o=t.onClick,a=N(t,["innerRef","navigate","onClick"]),c=a.target,s=u({},a,{onClick:function(t){try{o&&o(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=nt!==rt&&e||n,i.a.createElement("a",s)}));var it=rt((function(t,e){var n=t.component,r=void 0===n?ot:n,o=t.replace,a=t.to,c=t.innerRef,s=N(t,["component","replace","to","innerRef"]);return i.a.createElement(B.Consumer,null,(function(t){t||d(!1);var n=t.history,f=et(tt(a,t.location),t.location),l=f?n.createHref(f):"",p=u({},s,{href:l,navigate:function(){var e=tt(a,t.location);(o?n.replace:n.push)(e)}});return nt!==rt?p.ref=e||c:p.innerRef=c,i.a.createElement(r,p)}))})),at=function(t){return t},ct=i.a.forwardRef;"undefined"===typeof ct&&(ct=at);ct((function(t,e){var n=t["aria-current"],r=void 0===n?"page":n,o=t.activeClassName,a=void 0===o?"active":o,c=t.activeStyle,s=t.className,f=t.exact,l=t.isActive,p=t.location,h=t.sensitive,v=t.strict,y=t.style,m=t.to,b=t.innerRef,g=N(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(B.Consumer,null,(function(t){t||d(!1);var n=p||t.location,o=et(tt(m,n),n),x=o.pathname,w=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),O=w?W(n.pathname,{path:w,exact:f,sensitive:h,strict:v}):null,j=!!(l?l(O,n):O),S=j?function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter((function(t){return t})).join(" ")}(s,a):s,P=j?u({},y,{},c):y,_=u({"aria-current":j&&r||null,className:S,style:P,to:o},g);return at!==ct?_.ref=e||b:_.innerRef=b,i.a.createElement(it,_)}))}));function ut(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function st(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return ut(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ut(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.p,n(12);function ft(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(it,{to:"/zbookings",children:"Bookings"})}),Object(r.jsx)("li",{children:Object(r.jsx)(it,{to:"/zbookings/123",children:"Booking id=123"})})]}),Object(r.jsx)("h2",{children:"Landing"})]})}function lt(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(it,{to:"/zbookings",children:"Bookings"})}),Object(r.jsx)("li",{children:Object(r.jsx)(it,{to:"/zbookings/123",children:"Booking id=123"})})]}),Object(r.jsx)("h2",{children:"Bookings"})]})}function pt(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(it,{to:"/zbookings",children:"Bookings"})}),Object(r.jsx)("li",{children:Object(r.jsx)(it,{to:"/zbookings/457",children:"Booking id=123"})})]}),Object(r.jsx)("h2",{children:"Bookings ID"})]})}var dt=function(t){var e=t.listener,n=X(F),i=st(Object(o.useState)(null),2),a=i[0],c=i[1];return e&&e("navigation",(function(t){c(t),n.push(t.path)})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("h1",{children:["Nav Value: ",a&&a.path]}),Object(r.jsx)("header",{className:"App-header",children:Object(r.jsxs)(Q,{children:[Object(r.jsx)(V,{path:"/",exact:!0,children:Object(r.jsx)(ft,{})}),Object(r.jsx)(V,{path:"/zbookings",exact:!0,children:Object(r.jsx)(lt,{})}),Object(r.jsx)(V,{path:"/zbookings/:id",exact:!0,children:Object(r.jsx)(pt,{})})]})})]})},ht=n(9);Object(ht.createMicrofrontendRegistration)({id:"bookings",init:function(t,e){var n=e.history,o=e.subscribe;return Object(a.render)(Object(r.jsx)(Z,{children:Object(r.jsx)(dt,{history:n,listener:o})}),document.getElementById(t)),Promise.resolve()},update:function(){return Promise.resolve()},unmount:function(t){return Object(a.unmountComponentAtNode)(document.getElementById(t)),Promise.resolve()}})}]);
//# sourceMappingURL=main.aa41f6bf.js.map
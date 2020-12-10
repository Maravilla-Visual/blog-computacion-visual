_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"14uc":function(e,t,r){"use strict";r.r(t);r("FwDC");var n=r("q1tI"),a=r.n(n).a.createElement;t.default=function(){return a("div",{className:"main-projects-container"},a("div",{className:"title"},a("h1",{className:"title-text"},"Fractales de Newton")),a("div",{className:"contenido-reporte"},a("h3",{className:"mt-4"},"\xbfQue es un Fractal?"),a("p",{className:"ilusion-explanation ml-3"}," ","Fractal: lat\xedn fractus, roto, fragmentado o fracturado El t\xe9rmino fue acu\xf1ado por el  matem\xe1tico frances  Beno\xeft Mandelbrot En geometr\xeda un fractal es un objeto cuya estructura b\xe1sica, fragmentada o aparentemente irregular, se repite a diferentes escalas.",a("br",null),"Propiedades:  autosimilitud, recursividad, infinitud, una estructura compleja y suelen tener una forma demasiado irregular."," "),a("h4",null," Aplicaciones de fractales "),a("lu",{className:"padding-left-20"},a("li",null,"Naturaleza: ADN, Flores, Ramas, Analizar la forma de las estrellas."),a("li",null,"Computaci\xf3n: CGI, Compresi\xf3n de imagenes y texto."),a("li",null,"Arte: M\xfasica (Beethoven, Mozart), Creaci\xf3n de im\xe1genes.")),a("br",null),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula7.png",alt:"Ambient-light",className:"about-perfil-img"})),a("br",null),a("h4",{className:"mb-4"},"Fractales de newton"),a("p",{className:"ilusion-explanation ml-3"}," ","Una forma de encontrar fractales es utilizando el m\xe9todo de newton para encontrar raices de una funci\xf3n. Adaptar el algoritmo consiste en lo siguiente:",a("br",null),"Dada la funci\xf3n f : R \u2192 R le queremos encontrar una ra\xedz, es decir, un valor a tal que f(a) = 0.",a("br",null),"Para ello tomamos un punto inicial x0 no muy lejos de a y generamos una sucesi\xf3n de puntos (x, n), n que converge a a. La ecuaci\xf3n a iterar es:"," "),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula1.jpeg",alt:"Ambient-light",className:"about-perfil-img"})),a("p",{className:"ilusion-explanation ml-3"}," ","Y la funci\xf3n de Newton asociada a f es:"," "),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula2.jpeg",alt:"Ambient-light",className:"about-perfil-img"})),a("br",null),a("br",null),a("h4",{className:"mb-4"},"M\xe9todo de Newton en los complejos"),a("p",{className:"ilusion-explanation ml-3"}," ","Aplicar el m\xe9todo de Newton en ecuaciones complejas es sencillo en polinomios cuadr\xe1ticos, sin embargo, se complica en ecuaciones de mayor grado. Sin embargo, se conoce que las fronteras en las cuencas de atracci\xf3n tienen una naturaleza fractal.."," "),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula4.jpeg",alt:"Ambient-light",className:"about-perfil-img"})),a("p",{className:"ilusion-explanation ml-3"}," "," Por ejemplo La funci\xf3n cuadr\xe1tica de variable compleja,",a("br",null),"f : C \u2192 C con f(z) = z^2 \u2212 1 tiene dos ra\xedces. Dependiendo del valor inicial z0 la \xf3rbita Nf (z0) tiende a 1 \xf3 \u22121. Podemos ver que la cuenca de atracci\xf3n para la ra\xedz 1, es decir, el conjunto A(1) de los puntos que son atra\xeddos a 1, es el semiplano de la derecha formado por los puntos con primera componente positiva."," "),a("p",{className:"ilusion-explanation ml-3"}," ","Mientras que la cuenca de atracci\xf3n para la ra\xedz \u22121 es la parte izquierda del plano A."," "),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula3.jpeg",alt:"Ambient-light",className:"about-perfil-img"})),a("br",null),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula8.jpeg",alt:"Ambient-light",className:"about-perfil-img"})),a("br",null),a("div",{className:"d-flex flex-column align-items-center"},a("img",{src:"/blog-computacion-visual/formula9.jpeg",alt:"Ambient-light",className:"about-perfil-img"})),a("br",null)))}},"4JlD":function(e,t,r){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,i){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?o(s(e),(function(s){var i=encodeURIComponent(n(s))+r;return a(e[s])?o(e[s],(function(e){return i+encodeURIComponent(n(e))})).join(t):i+encodeURIComponent(n(e[s]))})).join(t):i?encodeURIComponent(n(i))+r+encodeURIComponent(n(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var s=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},FwDC:function(e,t,r){"use strict";t.__esModule=!0,t.getRedirectStatus=function(e){return e.statusCode||(e.permanent?o.PERMANENT_REDIRECT_STATUS:o.TEMPORARY_REDIRECT_STATUS)},t.normalizeRouteRegex=function(e){return e.replace(/\\\//g,"/")},t.default=async function(e){const[t,r,n]=await Promise.all([h(e),d(e),f(e)]);e.trailingSlash?(n.unshift({source:"/:file((?:[^/]+/)*[^/]+\\.\\w+)/",destination:"/:file",permanent:!0},{source:"/:notfile((?:[^/]+/)*[^/\\.]+)",destination:"/:notfile/",permanent:!0}),e.basePath&&n.unshift({source:e.basePath,destination:e.basePath+"/",permanent:!0,basePath:!1})):(n.unshift({source:"/:path+/",destination:"/:path+",permanent:!0}),e.basePath&&n.unshift({source:e.basePath+"/",destination:e.basePath,permanent:!0,basePath:!1}));return{headers:t,rewrites:r,redirects:n}};var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=n?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("zOyy")),a=r("QmWs"),o=r("w7wo");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}const i=new Set([301,302,303,307,308]);function c(e){const t=[];let r=!1;return e.statusCode&&!i.has(e.statusCode)&&(r=!0,t.push("`statusCode` is not undefined or valid statusCode")),"boolean"===typeof e.permanent||e.statusCode||t.push("`permanent` is not set to `true` or `false`"),{invalidParts:t,hadInvalidStatus:r}}function l(e){const t=[];if(Array.isArray(e.headers))for(const r of e.headers){if(!r||"object"!==typeof r){t.push("`headers` items must be object with { key: '', value: '' }");break}if("string"!==typeof r.key){t.push("`key` in header item must be string");break}if("string"!==typeof r.value){t.push("`value` in header item must be string");break}}else t.push("`headers` field must be an array");return t}function u(e,t){const r={};let o=e;try{if(t){const t=(0,a.parse)(e,!0);o=`${t.pathname}${t.hash||""}`}r.tokens=n.parse(o),n.tokensToRegexp(r.tokens)}catch(s){const t=s.message.match(/at (\d{0,})/);if(t){const r=parseInt(t[1],10);console.error(`\nError parsing \`${e}\` https://err.sh/vercel/next.js/invalid-route-source\nReason: ${s.message}\n\n  ${o}\n  ${new Array(r).fill(" ").join("")}^\n`)}else console.error(`\nError parsing ${e} https://err.sh/vercel/next.js/invalid-route-source`,s);r.error=!0}return r}function p(e,t){if(!Array.isArray(e))throw new Error(`${t}s must return an array, received ${typeof e}.\nSee here for more info: https://err.sh/next.js/routes-must-be-array`);let r=0,n=!1;const a="redirect"===t;let o;o="rewrite"===t||a?new Set(["source","destination","basePath",...a?["statusCode","permanent"]:[]]):new Set(["source","headers","basePath"]);for(const s of e){if(!s||"object"!==typeof s){console.error(`The route ${JSON.stringify(s)} is not a valid object with \`source\` and \`${"header"===t?"headers":"destination"}\``),r++;continue}if("rewrite"===t&&!1===s.basePath&&!s.destination.startsWith("http://")&&!s.destination.startsWith("https://")){console.error(`The route ${s.source} rewrites urls outside of the basePath. Please use a destination that starts with \`http://\` or \`https://\` https://err.sh/vercel/next.js/invalid-external-rewrite.md`),r++;continue}const e=Object.keys(s).filter(e=>!o.has(e)),a=[];if("undefined"!==typeof s.basePath&&!1!==s.basePath&&a.push("`basePath` must be undefined or false"),s.source?"string"!==typeof s.source?a.push("`source` is not a string"):s.source.startsWith("/")||a.push("`source` does not start with /"):a.push("`source` is missing"),"header"===t)a.push(...l(s));else{let e=s;e.destination?"string"!==typeof e.destination?a.push("`destination` is not a string"):"rewrite"!==t||e.destination.match(/^(\/|https:\/\/|http:\/\/)/)||a.push("`destination` does not start with `/`, `http://`, or `https://`"):a.push("`destination` is missing")}if("redirect"===t){const e=c(s);n=n||e.hadInvalidStatus,a.push(...e.invalidParts)}let i;if("string"===typeof s.source&&s.source.startsWith("/")){const{tokens:e,error:t}=u(s.source);t&&a.push("`source` parse failed"),i=e}if("string"===typeof s.destination&&s.destination.startsWith("/")&&Array.isArray(i)){const e=new Set;for(const t of i)if("object"===typeof t&&"number"===typeof t.name){const r=new RegExp(`:${t.name}(?!\\d)`);s.destination.match(r)&&e.add(":"+t.name)}if(e.size>0)a.push("`destination` has unnamed params "+[...e].join(", "));else{const{tokens:e,error:t}=u(s.destination,!0);if(t)a.push("`destination` parse failed");else{const t=new Set(i.map(e=>"object"===typeof e&&e.name).filter(Boolean)),r=new Set;for(const n of e)"object"!==typeof n||t.has(n.name)||r.add(n.name);r.size&&a.push(`\`destination\` has segments not in \`source\` (${[...r].join(", ")})`)}}}const p=e.length>0,f=a.length>0;(p||f)&&(console.error(`${a.join(", ")}${e.length?(f?",":"")+` invalid field${1===e.length?"":"s"}: `+e.join(","):""} for route ${JSON.stringify(s)}`),r++)}if(r>0)throw n&&console.error("\nValid redirect statusCode values are "+[...i].join(", ")),console.error(),new Error(`Invalid ${t}${1===r?"":"s"} found`)}async function f(e){if("function"!==typeof e.redirects)return[];const t=await e.redirects();return p(t,"redirect"),t}async function d(e){if("function"!==typeof e.rewrites)return[];const t=await e.rewrites();return p(t,"rewrite"),t}async function h(e){if("function"!==typeof e.headers)return[];const t=await e.headers();return p(t,"header"),t}},Mbr2:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/fractales_newton/reporte",function(){return r("14uc")}])},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},QmWs:function(e,t,r){var n,a=(n=r("s4NR"))&&"object"==typeof n&&"default"in n?n.default:n,o=/https?|ftp|gopher|file/;function s(e){"string"==typeof e&&(e=g(e));var t=function(e,t,r){var n=e.auth,a=e.hostname,o=e.protocol||"",s=e.pathname||"",i=e.hash||"",c=e.query||"",l=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",e.host?l=n+e.host:a&&(l=n+(~a.indexOf(":")?"["+a+"]":a),e.port&&(l+=":"+e.port)),c&&"object"==typeof c&&(c=t.encode(c));var u=e.search||c&&"?"+c||"";return o&&":"!==o.substr(-1)&&(o+=":"),e.slashes||(!o||r.test(o))&&!1!==l?(l="//"+(l||""),s&&"/"!==s[0]&&(s="/"+s)):l||(l=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),{protocol:o,host:l,pathname:s=s.replace(/[?#]/g,encodeURIComponent),search:u=u.replace("#","%23"),hash:i}}(e,a,o);return""+t.protocol+t.host+t.pathname+t.search+t.hash}var i="http://",c="w.w",l=i+c,u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function f(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?s(e):e;var n=g(t),a="";r.protocol&&!r.slashes&&(a=r.protocol,e=e.replace(r.protocol,""),a+="/"===t[0]||"/"===e[0]?"/":""),a&&n.protocol&&(a="",n.slashes||(a=n.protocol,t=t.replace(n.protocol,"")));var o=e.match(u);o&&!n.protocol&&(e=e.substr((a=o[1]+(o[2]||"")).length),/^\/\/[^/]/.test(t)&&(a=a.slice(0,-1)));var c=new URL(e,l+"/"),f=new URL(t,c).toString().replace(l,""),d=n.protocol||r.protocol;return d+=r.slashes||n.slashes?"//":"",!a&&d?f=f.replace(i,d):a&&(f=f.replace(i,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),a&&(f=a+("/"===f[0]?f.substr(1):f)),f}function d(){}d.prototype.parse=g,d.prototype.format=s,d.prototype.resolve=f,d.prototype.resolveObject=f;var h=/^https?|ftp|gopher|file/,m=/^(.*?)([#?].*)/,E=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,_=/^([a-z0-9.+-]*:)?\/\/\/*/i,T=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function g(e,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!1),e&&"object"==typeof e&&e instanceof d)return e;var n=(e=e.trim()).match(m);e=n?n[1].replace(/\\/g,"/")+n[2]:e.replace(/\\/g,"/"),T.test(e)&&"/"!==e.slice(-1)&&(e+="/");var o=!/(^javascript)/.test(e)&&e.match(E),i=_.test(e),u="";o&&(h.test(o[1])||(u=o[1].toLowerCase(),e=""+o[2]+o[3]),o[2]||(i=!1,h.test(o[1])?(u=o[1],e=""+o[3]):e="//"+o[3]),3!==o[2].length&&1!==o[2].length||(u=o[1],e="/"+o[3]));var p,f=(n?n[1]:e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),g=f&&f[1],R=new d,v="",I="";try{p=new URL(e)}catch(a){v=a,u||r||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(I="/",e=e.substr(1));try{p=new URL(e,l)}catch(e){return R.protocol=u,R.href=u,R}}R.slashes=i&&!I,R.host=p.host===c?"":p.host,R.hostname=p.hostname===c?"":p.hostname.replace(/(\[|\])/g,""),R.protocol=v?u||null:p.protocol,R.search=p.search.replace(/\\/g,"%5C"),R.hash=p.hash.replace(/\\/g,"%5C");var A=e.split("#");!R.search&&~A[0].indexOf("?")&&(R.search="?"),R.hash||""!==A[1]||(R.hash="#"),R.query=t?a.decode(p.search.substr(1)):R.search.substr(1),R.pathname=I+(o?function(e){return e.replace(/['^|`]/g,(function(e){return"%"+e.charCodeAt().toString(16).toUpperCase()})).replace(/((?:%[0-9A-F]{2})+)/g,(function(e,t){try{return decodeURIComponent(t).split("").map((function(e){var t=e.charCodeAt();return t>256||/^[a-z0-9]$/i.test(e)?e:"%"+t.toString(16).toUpperCase()})).join("")}catch(e){return t}}))}(p.pathname):p.pathname),"about:"===R.protocol&&"blank"===R.pathname&&(R.protocol="",R.pathname=""),v&&"/"!==e[0]&&(R.pathname=R.pathname.substr(1)),u&&!h.test(u)&&"/"!==e.slice(-1)&&"/"===R.pathname&&(R.pathname=""),R.path=R.pathname+R.search,R.auth=[p.username,p.password].map(decodeURIComponent).filter(Boolean).join(":"),R.port=p.port,g&&!R.host.endsWith(g)&&(R.host+=g,R.port=g.slice(1)),R.href=I?""+R.pathname+R.search+R.hash:s(R);var b=/^(file)/.test(R.href)?["host","hostname"]:[];return Object.keys(R).forEach((function(e){~b.indexOf(e)||(R[e]=R[e]||null)})),R}t.parse=g,t.format=s,t.resolve=f,t.resolveObject=function(e,t){return g(f(e,t))},t.Url=d},kd2E:function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,o){t=t||"&",r=r||"=";var s={};if("string"!==typeof e||0===e.length)return s;var i=/\+/g;e=e.split(t);var c=1e3;o&&"number"===typeof o.maxKeys&&(c=o.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var p,f,d,h,m=e[u].replace(i,"%20"),E=m.indexOf(r);E>=0?(p=m.substr(0,E),f=m.substr(E+1)):(p=m,f=""),d=decodeURIComponent(p),h=decodeURIComponent(f),n(s,d)?a(s[d])?s[d].push(h):s[d]=[s[d],h]:s[d]=h}return s};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,r){"use strict";t.decode=t.parse=r("kd2E"),t.encode=t.stringify=r("4JlD")},w7wo:function(e,t,r){"use strict";t.__esModule=!0,t.OPTIMIZED_FONT_PROVIDERS=t.SERVER_PROPS_ID=t.STATIC_PROPS_ID=t.PERMANENT_REDIRECT_STATUS=t.TEMPORARY_REDIRECT_STATUS=t.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS=t.CLIENT_STATIC_FILES_RUNTIME_WEBPACK=t.CLIENT_STATIC_FILES_RUNTIME_AMP=t.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH=t.CLIENT_STATIC_FILES_RUNTIME_MAIN=t.STRING_LITERAL_DROP_BUNDLE=t.AMP_RENDER_TARGET=t.CLIENT_STATIC_FILES_RUNTIME=t.CLIENT_STATIC_FILES_PATH=t.CLIENT_PUBLIC_FILES_PATH=t.BLOCKED_PAGES=t.BUILD_ID_FILE=t.CONFIG_FILE=t.SERVERLESS_DIRECTORY=t.SERVER_DIRECTORY=t.FONT_MANIFEST=t.REACT_LOADABLE_MANIFEST=t.DEV_CLIENT_PAGES_MANIFEST=t.ROUTES_MANIFEST=t.PRERENDER_MANIFEST=t.EXPORT_DETAIL=t.EXPORT_MARKER=t.BUILD_MANIFEST=t.PAGES_MANIFEST=t.PHASE_DEVELOPMENT_SERVER=t.PHASE_PRODUCTION_SERVER=t.PHASE_PRODUCTION_BUILD=t.PHASE_EXPORT=void 0;t.PHASE_EXPORT="phase-export";t.PHASE_PRODUCTION_BUILD="phase-production-build";t.PHASE_PRODUCTION_SERVER="phase-production-server";t.PHASE_DEVELOPMENT_SERVER="phase-development-server";t.PAGES_MANIFEST="pages-manifest.json";t.BUILD_MANIFEST="build-manifest.json";t.EXPORT_MARKER="export-marker.json";t.EXPORT_DETAIL="export-detail.json";t.PRERENDER_MANIFEST="prerender-manifest.json";t.ROUTES_MANIFEST="routes-manifest.json";t.DEV_CLIENT_PAGES_MANIFEST="_devPagesManifest.json";t.REACT_LOADABLE_MANIFEST="react-loadable-manifest.json";t.FONT_MANIFEST="font-manifest.json";t.SERVER_DIRECTORY="server";t.SERVERLESS_DIRECTORY="serverless";t.CONFIG_FILE="next.config.js";t.BUILD_ID_FILE="BUILD_ID";t.BLOCKED_PAGES=["/_document","/_app"];t.CLIENT_PUBLIC_FILES_PATH="public";t.CLIENT_STATIC_FILES_PATH="static";t.CLIENT_STATIC_FILES_RUNTIME="runtime";t.AMP_RENDER_TARGET="__NEXT_AMP_RENDER_TARGET__";t.STRING_LITERAL_DROP_BUNDLE="__NEXT_DROP_CLIENT_FILE__";t.CLIENT_STATIC_FILES_RUNTIME_MAIN="main";t.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH="react-refresh";t.CLIENT_STATIC_FILES_RUNTIME_AMP="amp";t.CLIENT_STATIC_FILES_RUNTIME_WEBPACK="webpack";t.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS="polyfills";t.TEMPORARY_REDIRECT_STATUS=307;t.PERMANENT_REDIRECT_STATUS=308;t.STATIC_PROPS_ID="__N_SSG";t.SERVER_PROPS_ID="__N_SSP";t.OPTIMIZED_FONT_PROVIDERS=["https://fonts.googleapis.com/css"]},zOyy:function(e,t,r){"use strict";function n(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:r,value:e[r++]});else{var a=1,o="";if("?"===e[i=r+1])throw new TypeError('Pattern cannot start with "?" at '+i);for(;i<e.length;)if("\\"!==e[i]){if(")"===e[i]){if(0===--a){i++;break}}else if("("===e[i]&&(a++,"?"!==e[i+1]))throw new TypeError("Capturing groups are not allowed at "+i);o+=e[i++]}else o+=e[i++]+e[i++];if(a)throw new TypeError("Unbalanced pattern at "+r);if(!o)throw new TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:o}),r=i}else{for(var s="",i=r+1;i<e.length;){var c=e.charCodeAt(i);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;s+=e[i++]}if(!s)throw new TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:s}),r=i}else t.push({type:"CLOSE",index:r,value:e[r++]});else t.push({type:"OPEN",index:r,value:e[r++]});else t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});else t.push({type:"MODIFIER",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,o="[^"+s(t.delimiter||"/#?")+"]+?",i=[],c=0,l=0,u="",p=function(e){if(l<r.length&&r[l].type===e)return r[l++].value},f=function(e){var t=p(e);if(void 0!==t)return t;var n=r[l],a=n.type,o=n.index;throw new TypeError("Unexpected "+a+" at "+o+", expected "+e)},d=function(){for(var e,t="";e=p("CHAR")||p("ESCAPED_CHAR");)t+=e;return t};l<r.length;){var h=p("CHAR"),m=p("NAME"),E=p("PATTERN");if(m||E){var _=h||"";-1===a.indexOf(_)&&(u+=_,_=""),u&&(i.push(u),u=""),i.push({name:m||c++,prefix:_,suffix:"",pattern:E||o,modifier:p("MODIFIER")||""})}else{var T=h||p("ESCAPED_CHAR");if(T)u+=T;else if(u&&(i.push(u),u=""),p("OPEN")){_=d();var g=p("NAME")||"",R=p("PATTERN")||"",v=d();f("CLOSE"),i.push({name:g||(R?c++:""),pattern:g&&!R?o:R,prefix:_,suffix:v,modifier:p("MODIFIER")||""})}else f("END")}}return i}function a(e,t){void 0===t&&(t={});var r=i(t),n=t.encode,a=void 0===n?function(e){return e}:n,o=t.validate,s=void 0===o||o,c=e.map((function(e){if("object"===typeof e)return new RegExp("^(?:"+e.pattern+")$",r)}));return function(t){for(var r="",n=0;n<e.length;n++){var o=e[n];if("string"!==typeof o){var i=t?t[o.name]:void 0,l="?"===o.modifier||"*"===o.modifier,u="*"===o.modifier||"+"===o.modifier;if(Array.isArray(i)){if(!u)throw new TypeError('Expected "'+o.name+'" to not repeat, but got an array');if(0===i.length){if(l)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var p=0;p<i.length;p++){var f=a(i[p],o);if(s&&!c[n].test(f))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but got "'+f+'"');r+=o.prefix+f+o.suffix}}else if("string"!==typeof i&&"number"!==typeof i){if(!l){var d=u?"an array":"a string";throw new TypeError('Expected "'+o.name+'" to be '+d)}}else{f=a(String(i),o);if(s&&!c[n].test(f))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but got "'+f+'"');r+=o.prefix+f+o.suffix}}else r+=o}return r}}function o(e,t,r){void 0===r&&(r={});var n=r.decode,a=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var o=n[0],s=n.index,i=Object.create(null),c=function(e){if(void 0===n[e])return"continue";var r=t[e-1];"*"===r.modifier||"+"===r.modifier?i[r.name]=n[e].split(r.prefix+r.suffix).map((function(e){return a(e,r)})):i[r.name]=a(n[e],r)},l=1;l<n.length;l++)c(l);return{path:o,index:s,params:i}}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function i(e){return e&&e.sensitive?"":"i"}function c(e,t,r){void 0===r&&(r={});for(var n=r.strict,a=void 0!==n&&n,o=r.start,c=void 0===o||o,l=r.end,u=void 0===l||l,p=r.encode,f=void 0===p?function(e){return e}:p,d="["+s(r.endsWith||"")+"]|$",h="["+s(r.delimiter||"/#?")+"]",m=c?"^":"",E=0,_=e;E<_.length;E++){var T=_[E];if("string"===typeof T)m+=s(f(T));else{var g=s(f(T.prefix)),R=s(f(T.suffix));if(T.pattern)if(t&&t.push(T),g||R)if("+"===T.modifier||"*"===T.modifier){var v="*"===T.modifier?"?":"";m+="(?:"+g+"((?:"+T.pattern+")(?:"+R+g+"(?:"+T.pattern+"))*)"+R+")"+v}else m+="(?:"+g+"("+T.pattern+")"+R+")"+T.modifier;else m+="("+T.pattern+")"+T.modifier;else m+="(?:"+g+R+")"+T.modifier}}if(u)a||(m+=h+"?"),m+=r.endsWith?"(?="+d+")":"$";else{var I=e[e.length-1],A="string"===typeof I?h.indexOf(I[I.length-1])>-1:void 0===I;a||(m+="(?:"+h+"(?="+d+"))?"),A||(m+="(?="+h+"|"+d+")")}return new RegExp(m,i(r))}function l(e,t,r){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?function(e,t,r){var n=e.map((function(e){return l(e,t,r).source}));return new RegExp("(?:"+n.join("|")+")",i(r))}(e,t,r):function(e,t,r){return c(n(e,r),t,r)}(e,t,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=n,t.compile=function(e,t){return a(n(e,t),t)},t.tokensToFunction=a,t.match=function(e,t){var r=[];return o(l(e,r,t),r,t)},t.regexpToFunction=o,t.tokensToRegexp=c,t.pathToRegexp=l}},[["Mbr2",0,1]]]);
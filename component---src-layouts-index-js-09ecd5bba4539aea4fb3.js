webpackJsonp([0x67ef26645b2a,60335399758886],{90:function(e,t){e.exports={data:{site:{siteMetadata:{name:"Bob Lubecker",title:"What is Buildkite?",date:"June 20, 2018"}},allMarkdownRemark:{edges:[{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/11.md",frontmatter:{image:"/images/whale3.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/10.md",frontmatter:{image:"/images/whale2.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/12.md",frontmatter:{image:"/images/cake-laptop.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/1.md",frontmatter:{image:"/images/kite.jpg",baseColor:"rgb(100, 55, 00, 0.4)"}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/3.md",frontmatter:{image:"/images/pipeline.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/13.md",frontmatter:{image:"/images/jungle-pipe.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/2.md",frontmatter:{image:"/images/pipe.jpg",baseColor:"#20a512"}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/4.md",frontmatter:{image:"/images/cloud.jpg",baseColor:"#05d5ff"}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/6.md",frontmatter:{image:"/images/code1.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/5.md",frontmatter:{image:"/images/trains.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/7.md",frontmatter:{image:"/images/code3.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/8.md",frontmatter:{image:"/images/code2.jpg",baseColor:null}}},{node:{fileAbsolutePath:"/Users/blubecker/ls_work/presentations/what_is_buildkite/src/pages/9.md",frontmatter:{image:"/images/whale.jpg",baseColor:null}}}]}},layoutContext:{}}},180:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),a=r(i),s=n(184),u=r(s),l=n(90),c=r(l);t.default=function(e){return a.default.createElement(u.default,o({},e,c.default))},e.exports=t.default},259:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(u(e))return!!u(t)&&(e=a.call(e),t=a.call(t),l(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var p=s(e),f=s(t)}catch(e){return!1}if(p.length!=f.length)return!1;for(p.sort(),f.sort(),i=p.length-1;i>=0;i--)if(p[i]!=f[i])return!1;for(i=p.length-1;i>=0;i--)if(c=p[i],!l(e[c],t[c],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,s=n(261),u=n(260),l=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},260:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},261:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},262:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t),n.hasSupport=e}}};n.update(),t.default=n},272:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},402:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),p=r(c),f=n(7),d=r(f),T=n(421),h=r(T),E=n(259),b=r(E),m=n(403),v=n(165),y=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return s(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,b.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case v.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return u({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[u({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TAG_NAMES.TITLE:return u({},o,(t={},t[r.type]=a,t.titleAttributes=u({},i),t));case v.TAG_NAMES.BODY:return u({},o,{bodyAttributes:u({},i)});case v.TAG_NAMES.HTML:return u({},o,{htmlAttributes:u({},i)})}return u({},o,(n={},n[r.type]=u({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=u({},t);return Object.keys(e).forEach(function(t){var r;n=u({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return p.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,s=o(i,["children"]),u=(0,m.convertReactPropstoHtmlAttributes)(s);switch(n.warnOnInvalidChildren(e,a),e.type){case v.TAG_NAMES.LINK:case v.TAG_NAMES.META:case v.TAG_NAMES.NOSCRIPT:case v.TAG_NAMES.SCRIPT:case v.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=u({},r);return n&&(i=this.mapChildrenToProps(n,i)),p.default.createElement(e,i)},l(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(p.default.Component),t.propTypes={base:d.default.object,bodyAttributes:d.default.object,children:d.default.oneOfType([d.default.arrayOf(d.default.node),d.default.node]),defaultTitle:d.default.string,defer:d.default.bool,encodeSpecialCharacters:d.default.bool,htmlAttributes:d.default.object,link:d.default.arrayOf(d.default.object),meta:d.default.arrayOf(d.default.object),noscript:d.default.arrayOf(d.default.object),onChangeClientState:d.default.func,script:d.default.arrayOf(d.default.object),style:d.default.arrayOf(d.default.object),title:d.default.string,titleAttributes:d.default.object,titleTemplate:d.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,m.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},S=(0,h.default)(m.reducePropsToState,m.handleClientStateChange,m.mapStateOnServer)(A),g=y(S);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},165:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},403:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),s=r(a),u=n(5),l=r(u),c=n(165),p=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=b(e,c.TAG_NAMES.TITLE),n=b(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=b(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},d=function(e){return b(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},E=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],u=s.toLowerCase();t.indexOf(u)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),t.indexOf(s)===-1||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],u=(0,l.default)({},r[s],o[s]);r[s]=u}return e},[]).reverse()},b=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=function(e){return{baseTag:h([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),defer:b(e,c.HELMET_PROPS.DEFER),encode:b(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:d(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},v=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){v(t)},0)}}(),y=function(e){return clearTimeout(e)},A="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||v:e.requestAnimationFrame||v,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,_=function(e){w&&S(w),e.defer?w=A(function(){P(e,function(){w=null})}):(P(e),w=null)},P=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,f=e.title,d=e.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,o),R(f,d);var T={baseTag:C(c.TAG_NAMES.BASE,n),linkTags:C(c.TAG_NAMES.LINK,i),metaTags:C(c.TAG_NAMES.META,a),noscriptTags:C(c.TAG_NAMES.NOSCRIPT,s),scriptTags:C(c.TAG_NAMES.SCRIPT,l),styleTags:C(c.TAG_NAMES.STYLE,p)},h={},E={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(E[e]=T[e].oldTags)}),t&&t(),u(e,h,E)},M=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var u=a[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),o.indexOf(u)===-1&&o.push(u);var p=i.indexOf(u);p!==-1&&i.splice(p,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},L=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},I=function(e,t,n,r){var o=L(n),i=M(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+p(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+p(i,r)+"</"+e+">"},N=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+p(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},G=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),i=k(n,o);return[s.default.createElement(c.TAG_NAMES.TITLE,i,t)]},U=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),s.default.createElement(e,o)})},H=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return G(e,t.title,t.titleAttributes,n)},toString:function(){return I(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return k(t)},toString:function(){return L(t)}};default:return{toComponent:function(){return U(e,t)},toString:function(){return N(e,t,n)}}}},D=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,p=e.title,f=void 0===p?"":p,d=e.titleAttributes;return{base:H(c.TAG_NAMES.BASE,t,r),bodyAttributes:H(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:H(c.ATTRIBUTE_NAMES.HTML,o,r),link:H(c.TAG_NAMES.LINK,i,r),meta:H(c.TAG_NAMES.META,a,r),noscript:H(c.TAG_NAMES.NOSCRIPT,s,r),script:H(c.TAG_NAMES.SCRIPT,u,r),style:H(c.TAG_NAMES.STYLE,l,r),title:H(c.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=_,t.mapStateOnServer=D,t.reducePropsToState=m,t.requestAnimationFrame=A,t.warn=g}).call(t,function(){return this}())},421:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(2),u=r(s),l=n(272),c=r(l),p=n(443),f=r(p);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(l){function p(){T=e(d.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof l)throw new Error("Expected WrappedComponent to be a React component.");var d=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,d=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){d.push(this),p()},t.prototype.componentDidUpdate=function(){p()},t.prototype.componentWillUnmount=function(){var e=d.indexOf(this);d.splice(e,1),p()},t.prototype.render=function(){return u.default.createElement(l,this.props)},t}(s.Component);return h.displayName="SideEffect("+r(l)+")",h.canUseDOM=c.default.canUseDOM,h}}},422:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(){return{x:null,y:null,swiping:!1,start:0}}function s(e){return"changedTouches"in e?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}}function u(e){return"touches"in e?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY}}function l(e,t){var n=s(e),r=n.x,o=n.y,i=t.x-r,a=t.y-o,u=Math.abs(i),l=Math.abs(a),c=Date.now()-t.start,p=Math.sqrt(u*u+l*l)/c;return{deltaX:i,deltaY:a,absX:u,absY:l,velocity:p}}var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=n(2),f=n(7),d=n(262).default,T=function(e){function t(n,i){r(this,t);var a=o(this,e.call(this,n,i));return a.eventStart=a.eventStart.bind(a),a.eventMove=a.eventMove.bind(a),a.eventEnd=a.eventEnd.bind(a),a.mouseDown=a.mouseDown.bind(a),a.mouseMove=a.mouseMove.bind(a),a.mouseUp=a.mouseUp.bind(a),a.cleanupMouseListeners=a.cleanupMouseListeners.bind(a),a.setupMouseListeners=a.setupMouseListeners.bind(a),a.elementRef=a.elementRef.bind(a),a.setupTouchmoveEvent=a.setupTouchmoveEvent.bind(a),a.cleanupTouchmoveEvent=a.cleanupTouchmoveEvent.bind(a),a.hasPassiveSupport=d.hasSupport,a}return i(t,e),t.prototype.componentWillMount=function(){this.swipeable=a()},t.prototype.componentDidMount=function(){this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentDidUpdate=function(e){e.disabled!==this.props.disabled&&(this.cleanupMouseListeners(),this.swipeable=a()),e.preventDefaultTouchmoveEvent&&!this.props.preventDefaultTouchmoveEvent?this.cleanupTouchmoveEvent():!e.preventDefaultTouchmoveEvent&&this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentWillUnmount=function(){this.cleanupMouseListeners()},t.prototype.setupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.addEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.setupMouseListeners=function(){document.addEventListener("mousemove",this.mouseMove),document.addEventListener("mouseup",this.mouseUp)},t.prototype.cleanupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.removeEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.cleanupMouseListeners=function(){document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp)},t.prototype.mouseDown=function(e){this.props.trackMouse&&"mousedown"===e.type&&("function"==typeof this.props.onMouseDown&&this.props.onMouseDown(e),this.setupMouseListeners(),this.eventStart(e))},t.prototype.mouseMove=function(e){this.eventMove(e)},t.prototype.mouseUp=function(e){this.cleanupMouseListeners(),this.eventEnd(e)},t.prototype.eventStart=function(e){if(!(e.touches&&e.touches.length>1)){var t=u(e),n=t.x,r=t.y;this.props.stopPropagation&&e.stopPropagation(),this.swipeable={start:Date.now(),x:n,y:r,swiping:!1}}},t.prototype.eventMove=function(e){var t=this.props,n=t.stopPropagation,r=t.delta,o=t.onSwiping,i=t.onSwipingLeft,a=t.onSwipedLeft,s=t.onSwipingRight,u=t.onSwipedRight,c=t.onSwipingUp,p=t.onSwipedUp,f=t.onSwipingDown,d=t.onSwipedDown,T=t.preventDefaultTouchmoveEvent;if(this.swipeable.x&&this.swipeable.y&&!(e.touches&&e.touches.length>1)){var h=l(e,this.swipeable);if(!(h.absX<r&&h.absY<r)||this.swipeable.swiping){n&&e.stopPropagation(),o&&o(e,h.deltaX,h.deltaY,h.absX,h.absY,h.velocity);var E=!1;h.absX>h.absY?h.deltaX>0?(i||a)&&(i&&i(e,h.absX),E=!0):(s||u)&&(s&&s(e,h.absX),E=!0):h.deltaY>0?(c||p)&&(c&&c(e,h.absY),E=!0):(f||d)&&(f&&f(e,h.absY),E=!0),this.swipeable.swiping=!0,E&&T&&e.preventDefault()}}},t.prototype.eventEnd=function(e){var t=this.props,n=t.stopPropagation,r=t.flickThreshold,o=t.onSwiped,i=t.onSwipedLeft,s=t.onSwipedRight,u=t.onSwipedUp,c=t.onSwipedDown,p=t.onTap;if(this.swipeable.swiping){var f=l(e,this.swipeable);n&&e.stopPropagation();var d=f.velocity>r;o&&o(e,f.deltaX,f.deltaY,d,f.velocity),f.absX>f.absY?f.deltaX>0?i&&i(e,f.deltaX,d):s&&s(e,f.deltaX,d):f.deltaY>0?u&&u(e,f.deltaY,d):c&&c(e,f.deltaY,d)}else p&&p(e);this.swipeable=a()},t.prototype.elementRef=function(e){this.element=e,this.props.innerRef&&this.props.innerRef(e)},t.prototype.render=function(){var e=c({},this.props);return this.props.disabled||(e.onTouchStart=this.eventStart,this.props.preventDefaultTouchmoveEvent&&this.hasPassiveSupport||(e.onTouchMove=this.eventMove),e.onTouchEnd=this.eventEnd,e.onMouseDown=this.mouseDown),e.ref=this.elementRef,delete e.onSwiped,delete e.onSwiping,delete e.onSwipingUp,delete e.onSwipingRight,delete e.onSwipingDown,delete e.onSwipingLeft,delete e.onSwipedUp,delete e.onSwipedRight,delete e.onSwipedDown,delete e.onSwipedLeft,delete e.onTap,delete e.flickThreshold,delete e.delta,delete e.preventDefaultTouchmoveEvent,delete e.stopPropagation,delete e.nodeName,delete e.children,delete e.trackMouse,delete e.disabled,delete e.innerRef,p.createElement(this.props.nodeName,e,this.props.children)},t}(p.Component);T.propTypes={onSwiped:f.func,onSwiping:f.func,onSwipingUp:f.func,onSwipingRight:f.func,onSwipingDown:f.func,onSwipingLeft:f.func,onSwipedUp:f.func,onSwipedRight:f.func,onSwipedDown:f.func,onSwipedLeft:f.func,onTap:f.func,flickThreshold:f.number,delta:f.number,preventDefaultTouchmoveEvent:f.bool,stopPropagation:f.bool,nodeName:f.string,trackMouse:f.bool,disabled:f.bool,innerRef:f.func,children:f.node},T.defaultProps={flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!1,stopPropagation:!1,nodeName:"div",disabled:!1},e.exports=T},443:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!s(l))return!1;var c=e[l],p=t[l];if(o=n?n.call(r,c,p,l):void 0,o===!1||void 0===o&&c!==p)return!1}return!0}},273:function(e,t){},184:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=n(2),u=r(s),l=n(7),c=r(l),p=n(86),f=r(p),d=n(402),T=r(d),h=n(422),E=r(h);n(273),n(274);var b=function(e){var t=e.name,n=e.title,r=e.date;return u.default.createElement("header",null,u.default.createElement(f.default,{to:"/1"},u.default.createElement("span",null,t)," — ",n),u.default.createElement("time",null,r))},m=function(e){function t(){var n,r,a;o(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=r=i(this,e.call.apply(e,[this].concat(u))),r.NEXT=39,r.PREV=37,r.swipeLeft=function(){r.navigate({keyCode:r.NEXT})},r.swipeRight=function(){r.navigate({keyCode:r.PREV})},r.navigate=function(e){var t=e.keyCode,n=parseInt(location.pathname.substr(1)),o=r.props.data.allMarkdownRemark.edges.filter(function(e){var t=e.node,n=t.fileAbsolutePath.replace(/^.*[\\\/]/,"").split(".")[0];if(n&&404!==n)return!0});if(n){if(t===r.PREV&&1===n)return!1;if(t===r.NEXT&&n===o.length)return!1;t===r.NEXT?(0,p.navigateTo)("/"+(n+1)):t===r.PREV&&(0,p.navigateTo)("/"+(n-1))}},a=n,i(r,a)}return a(t,e),t.prototype.componentDidMount=function(){document.addEventListener("keydown",this.navigate)},t.prototype.componentWillUnmount=function(){document.removeEventListener("keydown",this.navigate)},t.prototype.render=function(){var e=this.props,t=e.children,n=e.data;return u.default.createElement("div",null,u.default.createElement(T.default,{title:n.site.siteMetadata.title+" — "+n.site.siteMetadata.name}),u.default.createElement(b,{name:n.site.siteMetadata.name,title:n.site.siteMetadata.title,date:n.site.siteMetadata.date}),u.default.createElement(E.default,{onSwipingLeft:this.swipeLeft,onSwipingRight:this.swipeRight},u.default.createElement("div",{id:"slide"},t())))},t}(s.Component);m.propTypes={children:c.default.func,data:c.default.object},t.default=m;t.pageQuery="** extracted graphql fragment **"},274:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-09ecd5bba4539aea4fb3.js.map
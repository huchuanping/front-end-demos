webpackJsonp([22],{0:function(t,e,n){n(6),t.exports=n(165)},95:function(t,e,n){/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t,e,n){this.path=t,this.matcher=e,this.delegate=n}function e(t){this.routes={},this.children={},this.target=t}function n(e,i,r){return function(o,a){var s=e+o;return a?void a(n(s,i,r)):new t(e+o,i,r)}}function i(t,e,n){for(var i=0,r=0,o=t.length;r<o;r++)i+=t[r].path.length;e=e.substr(i);var a={path:e,handler:n};t.push(a)}function r(t,e,n,o){var a=e.routes;for(var s in a)if(a.hasOwnProperty(s)){var c=t.slice();i(c,s,a[s]),e.children[s]?r(c,e.children[s],n,o):n.call(o,c)}}function o(t,i){var o=new e;t(n("",o,this.delegate)),r([],o,function(t){i?i(this,t):this.add(t)},this)}function a(t){B||"undefined"==typeof console||console.error("[vue-router] "+t)}function s(t,e){try{return e?decodeURIComponent(t):decodeURI(t)}catch(n){a("malformed URI"+(e?" component: ":": ")+t)}}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(t){this.string=t}function u(t){this.name=t}function l(t){this.name=t}function p(){}function f(t,e,n){"/"===t.charAt(0)&&(t=t.substr(1));var i=t.split("/"),r=[];n.val="";for(var o=0,a=i.length;o<a;o++){var s,c=i[o];(s=c.match(/^:([^\/]+)$/))?(r.push(new u(s[1])),e.push(s[1]),n.val+="3"):(s=c.match(/^\*([^\/]+)$/))?(r.push(new l(s[1])),n.val+="2",e.push(s[1])):""===c?(r.push(new p),n.val+="1"):(r.push(new h(c)),n.val+="4")}return n.val=+n.val,r}function d(t){this.charSpec=t,this.nextStates=[]}function v(t){return t.sort(function(t,e){return e.specificity.val-t.specificity.val})}function m(t,e){for(var n=[],i=0,r=t.length;i<r;i++){var o=t[i];n=n.concat(o.match(e))}return n}function g(t){this.queryParams=t||{}}function _(t,e,n){for(var i=t.handlers,r=t.regex,o=e.match(r),a=1,s=new g(n),c=0,h=i.length;c<h;c++){for(var u=i[c],l=u.names,p={},f=0,d=l.length;f<d;f++)p[l[f]]=o[a++];s.push({handler:u.handler,params:p,isDynamic:!!l.length})}return s}function y(t,e){return e.eachChar(function(e){t=t.put(e)}),t}function w(t){return t=t.replace(/\+/gm,"%20"),s(t,!0)}function b(t){"undefined"!=typeof console&&console.error("[vue-router] "+t)}function C(t,e,n){var i=t.match(/(\?.*)$/);if(i&&(i=i[1],t=t.slice(0,-i.length)),"?"===e.charAt(0))return t+e;var r=t.split("/");n&&r[r.length-1]||r.pop();for(var o=e.replace(/^\//,"").split("/"),a=0;a<o.length;a++){var s=o[a];"."!==s&&(".."===s?r.pop():r.push(s))}return""!==r[0]&&r.unshift(""),r.join("/")}function k(t){return t&&"function"==typeof t.then}function R(t,e){var n=t&&(t.$options||t.options);return n&&n.route&&n.route[e]}function A(t,e){X?X.$options.components._=t.component:X={resolve:J.Vue.prototype._resolveComponent,$options:{components:{_:t.component}}},X.resolve("_",function(n){t.component=n,e(n)})}function x(t,e,n){return void 0===e&&(e={}),t=t.replace(/:([^\/]+)/g,function(n,i){var r=e[i];return r||b('param "'+i+'" not found when generating path for "'+t+'" with params '+JSON.stringify(e)),r||""}),n&&(t+=K(n)),t}function $(t,e,n){var i=t.childVM;if(!i||!e)return!1;if(t.Component!==e.component)return!1;var r=R(i,"canReuse");return"boolean"==typeof r?r:!r||r.call(i,{to:n.to,from:n.from})}function E(t,e,n){var i=t.childVM,r=R(i,"canDeactivate");r?e.callHook(r,i,n,{expectBoolean:!0}):n()}function V(t,e,n){A(t,function(t){if(!e.aborted){var i=R(t,"canActivate");i?e.callHook(i,null,n,{expectBoolean:!0}):n()}})}function S(t,e,n){var i=t.childVM,r=R(i,"deactivate");r?e.callHooks(r,i,n):n()}function P(t,e,n,i,r){var o=e.activateQueue[n];if(!o)return H(t),t._bound&&t.setComponent(null),void(i&&i());var a=t.Component=o.component,s=R(a,"activate"),c=R(a,"data"),h=R(a,"waitForData");t.depth=n,t.activated=!1;var u=void 0,l=!(!c||h);if(r=r&&t.childVM&&t.childVM.constructor===a)u=t.childVM,u.$loadingRouteData=l;else if(H(t),t.unbuild(!0),u=t.build({_meta:{$loadingRouteData:l},created:function(){this._routerView=t}}),t.keepAlive){u.$loadingRouteData=l;var p=u._keepAliveRouterView;p&&(t.childView=p,u._keepAliveRouterView=null)}var f=function(){u.$destroy()},d=function(){if(r)return void(i&&i());var n=e.router;n._rendered||n._transitionOnLoad?t.transition(u):(t.setCurrent?t.setCurrent(u):t.childVM=u,u.$before(t.anchor,null,!1)),i&&i()},v=function(){t.childView&&P(t.childView,e,n+1,null,r||t.keepAlive),d()},m=function(){t.activated=!0,c&&h?T(u,e,c,v,f):(c&&T(u,e,c),v())};s?e.callHooks(s,u,m,{cleanup:f,postActivate:!0}):m()}function O(t,e){var n=t.childVM,i=R(n,"data");i&&T(n,e,i)}function T(t,e,n,i,r){t.$loadingRouteData=!0,e.callHooks(n,t,function(){t.$loadingRouteData=!1,t.$emit("route-data-loaded",t),i&&i()},{cleanup:r,postActivate:!0,processData:function(e){var n=[];if(j(e)&&Object.keys(e).forEach(function(i){var r=e[i];k(r)?n.push(r.then(function(e){t.$set(i,e)})):t.$set(i,r)}),n.length)return n[0].constructor.all(n)}})}function H(t){t.keepAlive&&t.childVM&&t.childView&&(t.childVM._keepAliveRouterView=t.childView),t.childView=null}function j(t){return"[object Object]"===Object.prototype.toString.call(t)}function M(t){return"[object Object]"===Object.prototype.toString.call(t)}function D(t){return t?Array.prototype.slice.call(t):[]}function q(t){var e=t.util,n=e.extend,i=e.isArray,r=e.defineReactive,o=t.prototype._init;t.prototype._init=function(t){t=t||{};var e=t._parent||t.parent||this,n=e.$router,i=e.$route;n&&(this.$router=n,n._children.push(this),this._defineMeta?this._defineMeta("$route",i):r(this,"$route",i)),o.call(this,t)};var a=t.prototype._destroy;t.prototype._destroy=function(){!this._isBeingDestroyed&&this.$router&&this.$router._children.$remove(this),a.apply(this,arguments)};var s=t.config.optionMergeStrategies,c=/^(data|activate|deactivate)$/;s&&(s.route=function(t,e){if(!e)return t;if(!t)return e;var r={};n(r,t);for(var o in e){var a=r[o],s=e[o];a&&c.test(o)?r[o]=(i(a)?a:[a]).concat(s):r[o]=s}return r})}function z(t){var e=t.util,n=t.directive("_component")||t.internalDirectives.component,i=e.extend({},n);e.extend(i,{_isRouterView:!0,bind:function(){var t=this.vm.$route;if(!t)return void b("<router-view> can only be used inside a router-enabled app.");this._isDynamicLiteral=!0,n.bind.call(this);for(var e=void 0,i=this.vm;i;){if(i._routerView){e=i._routerView;break}i=i.$parent}if(e)this.parentView=e,e.childView=this;else{var r=t.router;r._rootView=this}var o=t.router._currentTransition;if(!e&&o.done||e&&e.activated){var a=e?e.depth+1:0;P(this,o,a)}},unbind:function(){this.parentView&&(this.parentView.childView=null),n.unbind.call(this)}}),t.elementDirective("router-view",i)}function Q(t){function e(t){return t.protocol===location.protocol&&t.hostname===location.hostname&&t.port===location.port}function n(t,e,n){if(e=e.trim(),e.indexOf(" ")===-1)return void n(t,e);for(var i=e.split(/\s+/),r=0,o=i.length;r<o;r++)n(t,i[r])}var i=t.util,r=i.bind,o=i.isObject,a=i.addClass,s=i.removeClass,c=t.directive("on").priority,h="__vue-router-link-update__",u=0;t.directive("link-active",{priority:9999,bind:function(){for(var t=this,e=String(u++),n=this.el.querySelectorAll("[v-link]"),i=0,r=n.length;i<r;i++){var o=n[i],a=o.getAttribute(h),s=a?a+","+e:e;o.setAttribute(h,s)}this.vm.$on(h,this.cb=function(n,i){n.activeIds.indexOf(e)>-1&&n.updateClasses(i,t.el)})},unbind:function(){this.vm.$off(h,this.cb)}}),t.directive("link",{priority:c-2,bind:function(){var t=this.vm;if(!t.$route)return void b("v-link can only be used inside a router-enabled app.");this.router=t.$route.router,this.unwatch=t.$watch("$route",r(this.onRouteUpdate,this));var e=this.el.getAttribute(h);e&&(this.el.removeAttribute(h),this.activeIds=e.split(",")),"A"===this.el.tagName&&"_blank"===this.el.getAttribute("target")||(this.handler=r(this.onClick,this),this.el.addEventListener("click",this.handler))},update:function(t){this.target=t,o(t)&&(this.append=t.append,this.exact=t.exact,this.prevActiveClass=this.activeClass,this.activeClass=t.activeClass),this.onRouteUpdate(this.vm.$route)},onClick:function(t){if(!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||0!==t.button)){var n=this.target;if(n)t.preventDefault(),this.router.go(n);else{for(var i=t.target;"A"!==i.tagName&&i!==this.el;)i=i.parentNode;if("A"===i.tagName&&e(i)){t.preventDefault();var r=i.pathname;this.router.history.root&&(r=r.replace(this.router.history.rootRE,"")),this.router.go({path:r,replace:n&&n.replace,append:n&&n.append})}}}},onRouteUpdate:function(t){var e=this.router.stringifyPath(this.target);this.path!==e&&(this.path=e,this.updateActiveMatch(),this.updateHref()),this.activeIds?this.vm.$emit(h,this,t.path):this.updateClasses(t.path,this.el)},updateActiveMatch:function(){this.activeRE=this.path&&!this.exact?new RegExp("^"+this.path.replace(/\/$/,"").replace(at,"").replace(ot,"\\$&")+"(\\/|$)"):null},updateHref:function(){if("A"===this.el.tagName){var t=this.path,e=this.router,n="/"===t.charAt(0),i=t&&("hash"===e.mode||n)?e.history.formatPath(t,this.append):t;i?this.el.href=i:this.el.removeAttribute("href")}},updateClasses:function(t,e){var i=this.activeClass||this.router._linkActiveClass;this.prevActiveClass&&this.prevActiveClass!==i&&n(e,this.prevActiveClass,s);var r=this.path.replace(at,"");t=t.replace(at,""),this.exact?r===t||"/"!==r.charAt(r.length-1)&&r===t.replace(rt,"")?n(e,i,a):n(e,i,s):this.activeRE&&this.activeRE.test(t)?n(e,i,a):n(e,i,s)},unbind:function(){this.el.removeEventListener("click",this.handler),this.unwatch&&this.unwatch()}})}function F(t,e){var n=e.component;ct.util.isPlainObject(n)&&(n=e.component=ct.extend(n)),"function"!=typeof n&&(e.component=null,b('invalid component for route "'+t+'".'))}var I={};I.classCallCheck=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.prototype={to:function(t,e){var n=this.delegate;if(n&&n.willAddRoute&&(t=n.willAddRoute(this.matcher.target,t)),this.matcher.add(this.path,t),e){if(0===e.length)throw new Error("You must have an argument in the function passed to `to`");this.matcher.addChild(this.path,t,e,this.delegate)}return this}},e.prototype={add:function(t,e){this.routes[t]=e},addChild:function(t,i,r,o){var a=new e(i);this.children[t]=a;var s=n(t,a,o);o&&o.contextEntered&&o.contextEntered(i,s),r(s)}};var U=["/",".","*","+","?","|","(",")","[","]","{","}","\\"],L=new RegExp("(\\"+U.join("|\\")+")","g"),B=!1;h.prototype={eachChar:function(t){for(var e,n=this.string,i=0,r=n.length;i<r;i++)e=n.charAt(i),t({validChars:e})},regex:function(){return this.string.replace(L,"\\$1")},generate:function(){return this.string}},u.prototype={eachChar:function(t){t({invalidChars:"/",repeat:!0})},regex:function(){return"([^/]+)"},generate:function(t){var e=t[this.name];return null==e?":"+this.name:e}},l.prototype={eachChar:function(t){t({invalidChars:"",repeat:!0})},regex:function(){return"(.+)"},generate:function(t){var e=t[this.name];return null==e?":"+this.name:e}},p.prototype={eachChar:function(){},regex:function(){return""},generate:function(){return""}},d.prototype={get:function(t){for(var e=this.nextStates,n=0,i=e.length;n<i;n++){var r=e[n],o=r.charSpec.validChars===t.validChars;if(o=o&&r.charSpec.invalidChars===t.invalidChars)return r}},put:function(t){var e;return(e=this.get(t))?e:(e=new d(t),this.nextStates.push(e),t.repeat&&e.nextStates.push(e),e)},match:function(t){for(var e,n,i,r=this.nextStates,o=[],a=0,s=r.length;a<s;a++)e=r[a],n=e.charSpec,"undefined"!=typeof(i=n.validChars)?i.indexOf(t)!==-1&&o.push(e):"undefined"!=typeof(i=n.invalidChars)&&i.indexOf(t)===-1&&o.push(e);return o}};var N=Object.create||function(t){function e(){}return e.prototype=t,new e};g.prototype=N({splice:Array.prototype.splice,slice:Array.prototype.slice,push:Array.prototype.push,length:0,queryParams:null});var G=function(){this.rootState=new d,this.names={}};G.prototype={add:function(t,e){for(var n,i=this.rootState,r="^",o={},a=[],s=[],c=!0,h=0,u=t.length;h<u;h++){var l=t[h],d=[],v=f(l.path,d,o);s=s.concat(v);for(var m=0,g=v.length;m<g;m++){var _=v[m];_ instanceof p||(c=!1,i=i.put({validChars:"/"}),r+="/",i=y(i,_),r+=_.regex())}var w={handler:l.handler,names:d};a.push(w)}c&&(i=i.put({validChars:"/"}),r+="/"),i.handlers=a,i.regex=new RegExp(r+"$"),i.specificity=o,(n=e&&e.as)&&(this.names[n]={segments:s,handlers:a})},handlersFor:function(t){var e=this.names[t],n=[];if(!e)throw new Error("There is no route named "+t);for(var i=0,r=e.handlers.length;i<r;i++)n.push(e.handlers[i]);return n},hasRoute:function(t){return!!this.names[t]},generate:function(t,e){var n=this.names[t],i="";if(!n)throw new Error("There is no route named "+t);for(var r=n.segments,o=0,a=r.length;o<a;o++){var s=r[o];s instanceof p||(i+="/",i+=s.generate(e))}return"/"!==i.charAt(0)&&(i="/"+i),e&&e.queryParams&&(i+=this.generateQueryString(e.queryParams)),i},generateQueryString:function(t){var e=[],n=[];for(var i in t)t.hasOwnProperty(i)&&n.push(i);n.sort();for(var r=0,o=n.length;r<o;r++){i=n[r];var a=t[i];if(null!=a){var s=encodeURIComponent(i);if(c(a))for(var h=0,u=a.length;h<u;h++){var l=i+"[]="+encodeURIComponent(a[h]);e.push(l)}else s+="="+encodeURIComponent(a),e.push(s)}}return 0===e.length?"":"?"+e.join("&")},parseQueryString:function(t){for(var e=t.split("&"),n={},i=0;i<e.length;i++){var r,o=e[i].split("="),a=w(o[0]),s=a.length,c=!1;1===o.length?r="true":(s>2&&"[]"===a.slice(s-2)&&(c=!0,a=a.slice(0,s-2),n[a]||(n[a]=[])),r=o[1]?w(o[1]):""),c?n[a].push(r):n[a]=r}return n},recognize:function(t,e){B=e;var n,i,r,o,a=[this.rootState],c={},h=!1;if(o=t.indexOf("?"),o!==-1){var u=t.substr(o+1,t.length);t=t.substr(0,o),u&&(c=this.parseQueryString(u))}if(t=s(t)){for("/"!==t.charAt(0)&&(t="/"+t),n=t.length,n>1&&"/"===t.charAt(n-1)&&(t=t.substr(0,n-1),h=!0),i=0,r=t.length;i<r&&(a=m(a,t.charAt(i)),a.length);i++);var l=[];for(i=0,r=a.length;i<r;i++)a[i].handlers&&l.push(a[i]);a=v(l);var p=l[0];return p&&p.handlers?(h&&"(.+)$"===p.regex.source.slice(-5)&&(t+="/"),_(p,t,c)):void 0}}},G.prototype.map=o;var K=G.prototype.generateQueryString,J={},X=void 0,Y=/#.*$/,W=function(){function t(e){var n=e.root,i=e.onChange;I.classCallCheck(this,t),n&&"/"!==n?("/"!==n.charAt(0)&&(n="/"+n),this.root=n.replace(/\/$/,""),this.rootRE=new RegExp("^\\"+this.root)):this.root=null,this.onChange=i;var r=document.querySelector("base");this.base=r&&r.getAttribute("href")}return t.prototype.start=function(){var t=this;this.listener=function(e){var n=location.pathname+location.search;t.root&&(n=n.replace(t.rootRE,"")),t.onChange(n,e&&e.state,location.hash)},window.addEventListener("popstate",this.listener),this.listener()},t.prototype.stop=function(){window.removeEventListener("popstate",this.listener)},t.prototype.go=function(t,e,n){var i=this.formatPath(t,n);e?history.replaceState({},"",i):(history.replaceState({pos:{x:window.pageXOffset,y:window.pageYOffset}},"",location.href),history.pushState({},"",i));var r=t.match(Y),o=r&&r[0];t=i.replace(Y,"").replace(this.rootRE,""),this.onChange(t,null,o)},t.prototype.formatPath=function(t,e){return"/"===t.charAt(0)?this.root?this.root+"/"+t.replace(/^\//,""):t:C(this.base||location.pathname,t,e)},t}(),Z=function(){function t(e){var n=e.hashbang,i=e.onChange;I.classCallCheck(this,t),this.hashbang=n,this.onChange=i}return t.prototype.start=function(){var t=this;this.listener=function(){var e=location.hash,n=e.replace(/^#!?/,"");"/"!==n.charAt(0)&&(n="/"+n);var i=t.formatPath(n);if(i!==e)return void location.replace(i);var r=location.search&&e.indexOf("?")>-1?"&"+location.search.slice(1):location.search;t.onChange(e.replace(/^#!?/,"")+r)},window.addEventListener("hashchange",this.listener),this.listener()},t.prototype.stop=function(){window.removeEventListener("hashchange",this.listener)},t.prototype.go=function(t,e,n){t=this.formatPath(t,n),e?location.replace(t):location.hash=t},t.prototype.formatPath=function(t,e){var n="/"===t.charAt(0),i="#"+(this.hashbang?"!":"");return n?i+t:i+C(location.hash.replace(/^#!?/,""),t,e)},t}(),tt=function(){function t(e){var n=e.onChange;I.classCallCheck(this,t),this.onChange=n,this.currentPath="/"}return t.prototype.start=function(){this.onChange("/")},t.prototype.stop=function(){},t.prototype.go=function(t,e,n){t=this.currentPath=this.formatPath(t,n),this.onChange(t)},t.prototype.formatPath=function(t,e){return"/"===t.charAt(0)?t:C(this.currentPath,t,e)},t}(),et=function(){function t(e,n,i){I.classCallCheck(this,t),this.router=e,this.to=n,this.from=i,this.next=null,this.aborted=!1,this.done=!1}return t.prototype.abort=function(){if(!this.aborted){this.aborted=!0;var t=!this.from.path&&"/"===this.to.path;t||this.router.replace(this.from.path||"/")}},t.prototype.redirect=function(t){this.aborted||(this.aborted=!0,"string"==typeof t?t=x(t,this.to.params,this.to.query):(t.params=t.params||this.to.params,t.query=t.query||this.to.query),this.router.replace(t))},t.prototype.start=function(t){for(var e=this,n=[],i=this.router._rootView;i;)n.unshift(i),i=i.childView;var r=n.slice().reverse(),o=this.activateQueue=D(this.to.matched).map(function(t){return t.handler}),a=void 0,s=void 0;for(a=0;a<r.length&&$(r[a],o[a],e);a++);a>0&&(s=r.slice(0,a),n=r.slice(a).reverse(),o=o.slice(a)),e.runQueue(n,E,function(){e.runQueue(o,V,function(){e.runQueue(n,S,function(){if(e.router._onTransitionValidated(e),s&&s.forEach(function(t){return O(t,e)}),n.length){var i=n[n.length-1],r=s?s.length:0;P(i,e,r,t)}else t()})})})},t.prototype.runQueue=function(t,e,n){function i(o){o>=t.length?n():e(t[o],r,function(){i(o+1)})}var r=this;i(0)},t.prototype.callHook=function(t,e,n){var i=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],r=i.expectBoolean,o=void 0!==r&&r,a=i.postActivate,s=void 0!==a&&a,c=i.processData,h=i.cleanup,u=this,l=!1,p=function(){h&&h(),u.abort()},f=function(t){if(s?v():p(),t&&!u.router._suppress)throw b("Uncaught error during transition: "),t instanceof Error?t:new Error(t)},d=function(t){try{f(t)}catch(e){setTimeout(function(){throw e},0)}},v=function(){return l?void b("transition.next() should be called only once."):(l=!0,u.aborted?void(h&&h()):void(n&&n()))},m=function(e){"boolean"==typeof e?e?v():p():k(e)?e.then(function(t){t?v():p()},d):t.length||v()},g=function(t){var e=void 0;try{e=c(t)}catch(n){return f(n)}k(e)?e.then(v,d):v()},_={to:u.to,from:u.from,abort:p,next:c?g:v,redirect:function(){u.redirect.apply(u,arguments)}},y=void 0;try{y=t.call(e,_)}catch(w){return f(w)}o?m(y):k(y)?c?y.then(g,d):y.then(v,d):c&&M(y)?g(y):t.length||v()},t.prototype.callHooks=function(t,e,n,i){var r=this;Array.isArray(t)?this.runQueue(t,function(t,n,o){r.aborted||r.callHook(t,e,o,i)},n):this.callHook(t,e,n,i)},t}(),nt=/^(component|subRoutes|fullPath)$/,it=function ut(t,e){var n=this;I.classCallCheck(this,ut);var i=e._recognizer.recognize(t);i&&([].forEach.call(i,function(t){for(var e in t.handler)nt.test(e)||(n[e]=t.handler[e])}),this.query=i.queryParams,this.params=[].reduce.call(i,function(t,e){if(e.params)for(var n in e.params)t[n]=e.params[n];return t},{})),this.path=t,this.matched=i||e._notFoundHandler,Object.defineProperty(this,"router",{enumerable:!1,value:e}),Object.freeze(this)},rt=/\/$/,ot=/[-.*+?^${}()|[\]\/\\]/g,at=/\?.*$/,st={"abstract":tt,hash:Z,html5:W},ct=void 0,ht=function(){function t(){var e=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],i=n.hashbang,r=void 0===i||i,o=n["abstract"],a=void 0!==o&&o,s=n.history,c=void 0!==s&&s,h=n.saveScrollPosition,u=void 0!==h&&h,l=n.transitionOnLoad,p=void 0!==l&&l,f=n.suppressTransitionError,d=void 0!==f&&f,v=n.root,m=void 0===v?null:v,g=n.linkActiveClass,_=void 0===g?"v-link-active":g;if(I.classCallCheck(this,t),!t.installed)throw new Error("Please install the Router with Vue.use() before creating an instance.");this.app=null,this._children=[],this._recognizer=new G,this._guardRecognizer=new G,this._started=!1,this._startCb=null,this._currentRoute={},this._currentTransition=null,this._previousTransition=null,this._notFoundHandler=null,this._notFoundRedirect=null,this._beforeEachHooks=[],this._afterEachHooks=[],this._rendered=!1,this._transitionOnLoad=p,this._root=m,this._abstract=a,this._hashbang=r;var y="undefined"!=typeof window&&window.history&&window.history.pushState;this._history=c&&y,this._historyFallback=c&&!y;var w=ct.util.inBrowser;this.mode=!w||this._abstract?"abstract":this._history?"html5":"hash";var b=st[this.mode];this.history=new b({root:m,hashbang:this._hashbang,onChange:function(t,n,i){e._match(t,n,i)}}),this._saveScrollPosition=u,this._linkActiveClass=_,this._suppress=d}return t.prototype.map=function(t){for(var e in t)this.on(e,t[e]);return this},t.prototype.on=function(t,e){return"*"===t?this._notFound(e):this._addRoute(t,e,[]),this},t.prototype.redirect=function(t){for(var e in t)this._addRedirect(e,t[e]);return this},t.prototype.alias=function(t){for(var e in t)this._addAlias(e,t[e]);return this},t.prototype.beforeEach=function(t){return this._beforeEachHooks.push(t),this},t.prototype.afterEach=function(t){return this._afterEachHooks.push(t),this},t.prototype.go=function(t){var e=!1,n=!1;ct.util.isObject(t)&&(e=t.replace,n=t.append),t=this.stringifyPath(t),t&&this.history.go(t,e,n)},t.prototype.replace=function(t){"string"==typeof t&&(t={path:t}),t.replace=!0,this.go(t)},t.prototype.start=function(t,e,n){if(this._started)return void b("already started.");if(this._started=!0,this._startCb=n,!this.app){if(!t||!e)throw new Error("Must start vue-router with a component and a root container.");if(t instanceof ct)throw new Error("Must start vue-router with a component, not a Vue instance.");this._appContainer=e;var i=this._appConstructor="function"==typeof t?t:ct.extend(t);i.options.name=i.options.name||"RouterApp"}if(this._historyFallback){var r=window.location,o=new W({root:this._root}),a=o.root?r.pathname.replace(o.rootRE,""):r.pathname;if(a&&"/"!==a)return void r.assign((o.root||"")+"/"+this.history.formatPath(a)+r.search)}this.history.start()},t.prototype.stop=function(){this.history.stop(),this._started=!1},t.prototype.stringifyPath=function(t){var e="";if(t&&"object"==typeof t){if(t.name){var n=ct.util.extend,i=this._currentTransition&&this._currentTransition.to.params,r=t.params||{},o=i?n(n({},i),r):r;e=encodeURI(this._recognizer.generate(t.name,o))}else t.path&&(e=encodeURI(t.path));if(t.query){var a=this._recognizer.generateQueryString(t.query);e+=e.indexOf("?")>-1?"&"+a.slice(1):a}}else e=encodeURI(t?t+"":"");return e},t.prototype._addRoute=function(t,e,n){if(F(t,e),e.path=t,e.fullPath=(n.reduce(function(t,e){return t+e.path},"")+t).replace("//","/"),n.push({path:t,handler:e}),this._recognizer.add(n,{as:e.name}),e.subRoutes)for(var i in e.subRoutes)this._addRoute(i,e.subRoutes[i],n.slice())},t.prototype._notFound=function(t){F("*",t),this._notFoundHandler=[{handler:t}]},t.prototype._addRedirect=function(t,e){"*"===t?this._notFoundRedirect=e:this._addGuard(t,e,this.replace)},t.prototype._addAlias=function(t,e){this._addGuard(t,e,this._match)},t.prototype._addGuard=function(t,e,n){var i=this;this._guardRecognizer.add([{path:t,handler:function(t,r){var o=x(e,t.params,r);n.call(i,o)}}])},t.prototype._checkGuard=function(t){var e=this._guardRecognizer.recognize(t,!0);return e?(e[0].handler(e[0],e.queryParams),!0):this._notFoundRedirect&&(e=this._recognizer.recognize(t),!e)?(this.replace(this._notFoundRedirect),!0):void 0},t.prototype._match=function(t,e,n){var i=this;if(!this._checkGuard(t)){var r=this._currentRoute,o=this._currentTransition;if(o){if(o.to.path===t)return;if(r.path===t)return o.aborted=!0,void(this._currentTransition=this._prevTransition);o.aborted=!0}var a=new it(t,this),s=new et(this,a,r);this._prevTransition=o,this._currentTransition=s,this.app||!function(){var t=i;i.app=new i._appConstructor({el:i._appContainer,created:function(){this.$router=t},_meta:{$route:a}})}();var c=this._beforeEachHooks,h=function(){s.start(function(){i._postTransition(a,e,n)})};c.length?s.runQueue(c,function(t,e,n){s===i._currentTransition&&s.callHook(t,null,n,{expectBoolean:!0})},h):h(),!this._rendered&&this._startCb&&this._startCb.call(null),this._rendered=!0}},t.prototype._onTransitionValidated=function(t){var e=this._currentRoute=t.to;this.app.$route!==e&&(this.app.$route=e,this._children.forEach(function(t){t.$route=e})),this._afterEachHooks.length&&this._afterEachHooks.forEach(function(e){return e.call(null,{to:t.to,from:t.from})}),this._currentTransition.done=!0},t.prototype._postTransition=function(t,e,n){var i=e&&e.pos;i&&this._saveScrollPosition?ct.nextTick(function(){window.scrollTo(i.x,i.y)}):n&&ct.nextTick(function(){var t=document.getElementById(n.slice(1));t&&window.scrollTo(window.scrollX,t.offsetTop)})},t}();return ht.installed=!1,ht.install=function(t){return ht.installed?void b("already installed."):(ct=t,q(ct),z(ct),Q(ct),J.Vue=ct,void(ht.installed=!0))},"undefined"!=typeof window&&window.Vue&&window.Vue.use(ht),ht})},164:function(t,e,n){"use strict";var i=n(13),r=n(95);i.use(r);var o=new r({transitionOnLoad:!0}),a={};a["/let-and-const"]={component:function(t){n.e(11,function(e){t(n(158))})}},a["/template-str"]={component:function(t){n.e(7,function(e){t(n(163))})}},a["/arrow-function"]={component:function(t){n.e(16,function(e){t(n(153))})}},a["/rest-parameters-and-defaults"]={component:function(t){n.e(8,function(e){t(n(162))})}},a["/destructing"]={component:function(t){n.e(15,function(e){t(n(154))})}},a["/for-of"]={component:function(t){n.e(14,function(e){t(n(155))})}},a["/iterator"]={component:function(t){n.e(12,function(e){t(n(157))})}},a["/module"]={component:function(t){n.e(6,function(e){t(n(159))})}},a["/promise"]={component:function(t){n.e(10,function(e){t(n(160))})}},a["/proxy"]={component:function(t){n.e(9,function(e){t(n(161))})}},a["/generator"]={component:function(t){n.e(13,function(e){t(n(156))})}},o.map(a),o.start(i.extend({template:n(439)}),"#main")},165:function(t,e,n){"use strict";n(408),n(164)},408:function(t,e){},439:function(t,e){t.exports="<div id=app> <h2>ES6 demos</h2> <p><small>输出见控制台</small></p> <ul class=nav> <li v-link=\"{ path: '/let-and-const', activeClass: 'nav__item--active' }\" class=nav__item>块作用域变量和常量</li> <li v-link=\"{ path: '/template-str', activeClass: 'nav__item--active' }\" class=nav__item>模板字符串</li> <li v-link=\"{ path: '/arrow-function', activeClass: 'nav__item--active' }\" class=nav__item>箭头函数</li> <li v-link=\"{ path: '/rest-parameters-and-defaults', activeClass: 'nav__item--active' }\" class=nav__item>不定参数和默认参数</li> <li v-link=\"{ path: '/destructing', activeClass: 'nav__item--active' }\" class=nav__item>解构</li> <li v-link=\"{ path: '/for-of', activeClass: 'nav__item--active' }\" class=nav__item>for-of</li> <li v-link=\"{ path: '/iterator', activeClass: 'nav__item--active' }\" class=nav__item>迭代器</li> <li v-link=\"{ path: '/module', activeClass: 'nav__item--active' }\" class=nav__item>模块</li> <li v-link=\"{ path: '/promise', activeClass: 'nav__item--active' }\" class=nav__item>Promise</li> <li v-link=\"{ path: '/proxy', activeClass: 'nav__item--active' }\" class=nav__item>代理</li> <li v-link=\"{ path: '/generator', activeClass: 'nav__item--active' }\" class=nav__item>迭代器</li> </ul> <div class=content> <router-view></router-view> </div> </div>"}});
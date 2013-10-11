define(["durandal/system","durandal/app","durandal/activator","durandal/events","durandal/composition","plugins/history","knockout","jquery"],function(e,t,n,i,r,o,a,u){function s(e){return e=e.replace(b,"\\$&").replace(m,"(?:$1)?").replace(p,function(e,t){return t?e:"([^/]+)"}).replace(h,"(.*?)"),new RegExp("^"+e+"$")}function l(e){var t=e.indexOf(":"),n=t>0?t-1:e.length;return e.substring(0,n)}function c(e){return e.router&&e.router.loadUrl}function d(e,t){return-1!==e.indexOf(t,e.length-t.length)}function f(e,t){if(!e||!t)return!1;if(e.length!=t.length)return!1;for(var n=0,i=e.length;i>n;n++)if(e[n]!=t[n])return!1;return!0}var v,g,m=/\((.*?)\)/g,p=/(\(\?)?:\w+/g,h=/\*\w+/g,b=/[\-{}\[\]+?.,\\\^$|#\s]/g,y=/\/$/,w=function(){function r(t,n){e.log("Navigation Complete",t,n);var i=e.getModuleId(D);i&&T.trigger("router:navigation:from:"+i),D=t,V=n;var r=e.getModuleId(D);r&&T.trigger("router:navigation:to:"+r),c(t)||T.updateDocumentTitle(t,n),g.explicitNavigation=!1,g.navigatingBack=!1,T.trigger("router:navigation:complete",t,n,T)}function u(t,n){e.log("Navigation Cancelled"),T.activeInstruction(V),V&&T.navigate(V.fragment,!1),C(!1),g.explicitNavigation=!1,g.navigatingBack=!1,T.trigger("router:navigation:cancelled",t,n,T)}function m(t){e.log("Navigation Redirecting"),C(!1),g.explicitNavigation=!1,g.navigatingBack=!1,T.navigate(t,{trigger:!0,replace:!0})}function p(e,t,n){g.navigatingBack=!g.explicitNavigation&&D!=n.fragment,T.trigger("router:route:activating",t,n,T),e.activateItem(t,n.params).then(function(i){if(i){var o=D;r(t,n),c(t)&&_({router:t.router,fragment:n.fragment,queryString:n.queryString}),o==t&&T.attached()}else e.settings.lifecycleData&&e.settings.lifecycleData.redirect?m(e.settings.lifecycleData.redirect):u(t,n);v&&(v.resolve(),v=null)})}function h(t,n,i){var r=T.guardRoute(n,i);r?r.then?r.then(function(r){r?e.isString(r)?m(r):p(t,n,i):u(n,i)}):e.isString(r)?m(r):p(t,n,i):u(n,i)}function b(e,t,n){T.guardRoute?h(e,t,n):p(e,t,n)}function x(e){return V&&V.config.moduleId==e.config.moduleId&&D&&(D.canReuseForRoute&&D.canReuseForRoute.apply(D,e.params)||D.router&&D.router.loadUrl)}function I(){if(!C()){var t=P.shift();if(P=[],t){if(t.router){var i=t.fragment;return t.queryString&&(i+="?"+t.queryString),t.router.loadUrl(i),void 0}C(!0),T.activeInstruction(t),x(t)?b(n.create(),D,t):e.acquire(t.config.moduleId).then(function(n){var i=e.resolveObject(n);b(O,i,t)}).fail(function(n){e.error("Failed to load routed module ("+t.config.moduleId+"). Details: "+n.message)})}}}function _(e){P.unshift(e),I()}function S(e,t,n){for(var i=e.exec(t).slice(1),r=0;r<i.length;r++){var o=i[r];i[r]=o?decodeURIComponent(o):null}var a=T.parseQueryString(n);return a&&i.push(a),{params:i,queryParams:a}}function k(t){T.trigger("router:route:before-config",t,T),e.isRegExp(t)?t.routePattern=t.route:(t.title=t.title||T.convertRouteToTitle(t.route),t.moduleId=t.moduleId||T.convertRouteToModuleId(t.route),t.hash=t.hash||T.convertRouteToHash(t.route),t.routePattern=s(t.route)),T.trigger("router:route:after-config",t,T),T.routes.push(t),T.route(t.routePattern,function(e,n){var i=S(t.routePattern,e,n);_({fragment:e,queryString:n,config:t,params:i.params,queryParams:i.queryParams})})}function A(t){if(e.isArray(t.route))for(var n=0,i=t.route.length;i>n;n++){var r=e.extend({},t);r.route=t.route[n],n>0&&delete r.nav,k(r)}else k(t);return T}function q(e){e.isActive||(e.isActive=a.computed(function(){var t=O();return t&&t.__moduleId__==e.moduleId}))}var D,V,P=[],C=a.observable(!1),O=n.create(),T={handlers:[],routes:[],navigationModel:a.observableArray([]),activeItem:O,isNavigating:a.computed(function(){var e=O(),t=C(),n=e&&e.router&&e.router!=T&&e.router.isNavigating()?!0:!1;return t||n}),activeInstruction:a.observable(null),__router__:!0};return i.includeIn(T),O.settings.areSameItem=function(e,t,n,i){return e==t?f(n,i):!1},T.parseQueryString=function(e){var t,n;if(!e)return null;if(n=e.split("&"),0==n.length)return null;t={};for(var i=0;i<n.length;i++){var r=n[i];if(""!==r){var o=r.split("=");t[o[0]]=o[1]&&decodeURIComponent(o[1].replace(/\+/g," "))}}return t},T.route=function(e,t){T.handlers.push({routePattern:e,callback:t})},T.loadUrl=function(t){var n=T.handlers,i=null,r=t,a=t.indexOf("?");if(-1!=a&&(r=t.substring(0,a),i=t.substr(a+1)),T.relativeToParentRouter){var u=this.parent.activeInstruction();r=u.params.join("/"),r&&"/"==r[0]&&(r=r.substr(1)),r||(r=""),r=r.replace("//","/").replace("//","/")}r=r.replace(y,"");for(var s=0;s<n.length;s++){var l=n[s];if(l.routePattern.test(r))return l.callback(r,i),!0}return e.log("Route Not Found"),T.trigger("router:route:not-found",t,T),V&&o.navigate(V.fragment,{trigger:!1,replace:!0}),g.explicitNavigation=!1,g.navigatingBack=!1,!1},T.updateDocumentTitle=function(e,n){n.config.title?document.title=t.title?n.config.title+" | "+t.title:n.config.title:t.title&&(document.title=t.title)},T.navigate=function(e,t){return e&&-1!=e.indexOf("://")?(window.location.href=e,!0):(g.explicitNavigation=!0,o.navigate(e,t))},T.navigateBack=function(){o.navigateBack()},T.attached=function(){setTimeout(function(){C(!1),T.trigger("router:navigation:attached",D,V,T),I()},10)},T.compositionComplete=function(){T.trigger("router:navigation:composition-complete",D,V,T)},T.convertRouteToHash=function(e){if(T.relativeToParentRouter){var t=T.parent.activeInstruction(),n=t.config.hash+"/"+e;return o._hasPushState&&(n="/"+n),n=n.replace("//","/").replace("//","/")}return o._hasPushState?e:"#"+e},T.convertRouteToModuleId=function(e){return l(e)},T.convertRouteToTitle=function(e){var t=l(e);return t.substring(0,1).toUpperCase()+t.substring(1)},T.map=function(t,n){if(e.isArray(t)){for(var i=0;i<t.length;i++)T.map(t[i]);return T}return e.isString(t)||e.isRegExp(t)?(n?e.isString(n)&&(n={moduleId:n}):n={},n.route=t):n=t,A(n)},T.buildNavigationModel=function(t){var n=[],i=T.routes;t=t||100;for(var r=0;r<i.length;r++){var o=i[r];o.nav&&(e.isNumber(o.nav)||(o.nav=t),q(o),n.push(o))}return n.sort(function(e,t){return e.nav-t.nav}),T.navigationModel(n),T},T.mapUnknownRoutes=function(t,n){var i="*catchall",r=s(i);return T.route(r,function(a,u){var s=S(r,a,u),l={fragment:a,queryString:u,config:{route:i,routePattern:r},params:s.params,queryParams:s.queryParams};if(t)if(e.isString(t))l.config.moduleId=t,n&&o.navigate(n,{trigger:!1,replace:!0});else if(e.isFunction(t)){var c=t(l);if(c&&c.then)return c.then(function(){T.trigger("router:route:before-config",l.config,T),T.trigger("router:route:after-config",l.config,T),_(l)}),void 0}else l.config=t,l.config.route=i,l.config.routePattern=r;else l.config.moduleId=a;T.trigger("router:route:before-config",l.config,T),T.trigger("router:route:after-config",l.config,T),_(l)}),T},T.reset=function(){return V=D=void 0,T.handlers=[],T.routes=[],T.off(),delete T.options,T},T.makeRelative=function(t){return e.isString(t)&&(t={moduleId:t,route:t}),t.moduleId&&!d(t.moduleId,"/")&&(t.moduleId+="/"),t.route&&!d(t.route,"/")&&(t.route+="/"),t.fromParent&&(T.relativeToParentRouter=!0),T.on("router:route:before-config").then(function(e){t.moduleId&&(e.moduleId=t.moduleId+e.moduleId),t.route&&(e.route=""===e.route?t.route.substring(0,t.route.length-1):t.route+e.route)}),T},T.createChildRouter=function(){var e=w();return e.parent=T,e},T};return g=w(),g.explicitNavigation=!1,g.navigatingBack=!1,g.activate=function(t){return e.defer(function(n){if(v=n,g.options=e.extend({routeHandler:g.loadUrl},g.options,t),o.activate(g.options),o._hasPushState)for(var i=g.routes,r=i.length;r--;){var a=i[r];a.hash=a.hash.replace("#","")}u(document).delegate("a","click",function(e){if(g.explicitNavigation=!0,o._hasPushState&&!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)){var t=u(this).attr("href"),n=this.protocol+"//";(!t||"#"!==t.charAt(0)&&t.slice(n.length)!==n)&&(e.preventDefault(),o.navigate(t))}})}).promise()},g.deactivate=function(){o.deactivate()},g.install=function(){a.bindingHandlers.router={init:function(){return{controlsDescendantBindings:!0}},update:function(e,t,n,i,o){var u=a.utils.unwrapObservable(t())||{};if(u.__router__)u={model:u.activeItem(),attached:u.attached,compositionComplete:u.compositionComplete,activate:!1};else{var s=a.utils.unwrapObservable(u.router||i.router)||g;u.model=s.activeItem(),u.attached=s.attached,u.compositionComplete=s.compositionComplete,u.activate=!1}r.compose(e,u,o)}},a.virtualElements.allowedBindings.router=!0},g});
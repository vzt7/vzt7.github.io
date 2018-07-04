module.exports=__NEXT_REGISTER_PAGE("/_app",function(){return{page:webpackJsonp([1],{204:function(e,t,r){e.exports=r(205)},205:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return p});var n=r(206),o=r.n(n),a=r(5),u=r.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a),r=t,(a=[{key:"render",value:function(){var e,t=this.props,r=t.Component,o=t.pageProps;return u.a.createElement(n.Container,null,u.a.createElement("section",{className:"auroral-container"},u.a.createElement("div",{className:(e=["auroral-northern","auroral-northern-intense","auroral-northern-dimmed","auroral-northern-dusk","auroral-northern-warm","auroral-agrabah"],e[Math.floor(Math.random()*e.length)])})),u.a.createElement("div",{className:"wrapper animated fadeIn"},u.a.createElement(r,o)))}}])&&i(r.prototype,a),l&&i(r,l),t}()},206:function(e,t,r){e.exports=r(207)},207:function(e,t,r){"use strict";var n=r(14),o=r(3);Object.defineProperty(t,"__esModule",{value:!0}),t.createUrl=w,t.Container=t.default=void 0;var a=o(r(41)),u=o(r(43)),l=o(r(208)),i=o(r(28)),c=o(r(19)),p=o(r(6)),f=o(r(7)),s=o(r(20)),d=o(r(21)),h=n(r(5)),y=o(r(35)),m=o(r(97)),b=r(18),v=r(44),_=function(e){function t(){return(0,p.default)(this,t),(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}var r;return(0,d.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{headManager:this.props.headManager,router:(0,v.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,r=e.Component,n=e.pageProps,o=w(t);return h.default.createElement(g,null,h.default.createElement(r,(0,l.default)({},n,{url:o})))}}],[{key:"getInitialProps",value:(r=(0,u.default)(a.default.mark(function e(t){var r,n,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,t.router,n=t.ctx,e.next=3,(0,b.loadGetInitialProps)(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})}]),t}(h.Component);t.default=_,Object.defineProperty(_,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"App"}),Object.defineProperty(_,"childContextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:y.default.any,headManager:y.default.object,router:y.default.object}});var g=function(e){function t(){return(0,p.default)(this,t),(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,f.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=this.props.hash;if(e){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"shouldComponentUpdate",value:function(e){return!(0,m.default)(this.props,e)}},{key:"render",value:function(){var e=this.props.children;return h.default.createElement(h.default.Fragment,null,e)}}]),t}(h.Component);t.Container=g,Object.defineProperty(g,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{_containerProps:y.default.any}});var P=(0,b.execOnce)(function(){0});function w(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){return P(),n},get pathname(){return P(),t},get asPath(){return P(),r},back:function(){P(),e.back()},push:function(t,r){return P(),e.push(t,r)},pushTo:function(t,r){P();var n=r?t:null,o=r||t;return e.push(n,o)},replace:function(t,r){return P(),e.replace(t,r)},replaceTo:function(t,r){P();var n=r?t:null,o=r||t;return e.replace(n,o)}}}},208:function(e,t,r){var n=r(70);function o(){return e.exports=o=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}e.exports=o}},[204]).default}});
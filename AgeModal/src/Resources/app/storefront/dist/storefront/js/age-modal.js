(window.webpackJsonp=window.webpackJsonp||[]).push([["age-modal"],{"5kJZ":function(t,e,n){"use strict";n.r(e);var o=n("hiMP");window.PluginManager.register("Modal",o.a,"[data-age-modal]")},hiMP:function(t,e,n){"use strict";(function(t){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}n.d(e,"a",(function(){return c}));var c=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),i(this,u(n).apply(this,arguments))}var o,c,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(n,e),o=n,(c=[{key:"init",value:function(){this.getCookie("age18plus")||(this.addButtonEvent(),t(".age-modal").show())}},{key:"addButtonEvent",value:function(){var e=this;t(".age-modal-button").click((function(){e.setCookie("age18plus",!0,30),t(".age-modal").hide()}))}},{key:"setCookie",value:function(t,e,n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var r="expires="+o.toUTCString();document.cookie=t+"="+e+";"+r+";path=/"}},{key:"getCookie",value:function(t){for(var e=t+"=",n=decodeURIComponent(document.cookie).split(";"),o=0;o<n.length;o++){for(var r=n[o];" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""}}])&&r(o.prototype,c),f&&r(o,f),n}(n("FGIj").a)}).call(this,n("UoTJ"))}},[["5kJZ","runtime","vendor-node","vendor-shared"]]]);
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.zingtouch = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
 * 
 * ZingTouch v1.0.5
 * Author: ZingChart http://zingchart.com
 * License: MIT
 */
!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),u=r(i);window.ZingTouch=u.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),u=r(i),o=n(4),a=r(o),s=n(10),c=r(s),f=n(11),l=r(f),d=n(12),p=r(d),h=n(13),y=r(h),v=n(14),g=r(v),m={_regions:[],Gesture:a.default,Pan:c.default,Pinch:l.default,Rotate:p.default,Swipe:y.default,Tap:g.default,Region:function(e,t,n){var r=m._regions.length,i=new u.default(e,t,n,r);return m._regions.push(i),i}};t.default=m},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3),a=r(o),s=n(4),c=r(s),f=n(6),l=r(f),d=n(9),p=r(d),h=function(){function e(t,n,r,u){var o=this;i(this,e),this.id=u,this.element=t,this.capture="undefined"!=typeof n&&n,this.preventDefault="undefined"==typeof r||r,this.state=new p.default(u);var a=[];a=window.PointerEvent&&!window.TouchEvent?["pointerdown","pointermove","pointerup"]:["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"],a.forEach(function(e){t.addEventListener(e,function(e){(0,l.default)(e,o)},o.capture)})}return u(e,[{key:"bind",value:function(e,t,n,r,i){if(!e||e&&!e.tagName)throw"Bind must contain an element";return i="undefined"!=typeof i&&i,t?void this.state.addBinding(e,t,n,r,i):new a.default(e,i,this.state)}},{key:"bindOnce",value:function(e,t,n,r){this.bind(e,t,n,r,!0)}},{key:"unbind",value:function(e,t){var n=this,r=this.state.retrieveBindingsByElement(e),i=[];return r.forEach(function(r){if(t){if("string"==typeof t&&n.state.registeredGestures[t]){var u=n.state.registeredGestures[t];u.id===r.gesture.id&&(e.removeEventListener(r.gesture.getId(),r.handler,r.capture),i.push(r))}}else e.removeEventListener(r.gesture.getId(),r.handler,r.capture),i.push(r)}),i}},{key:"register",value:function(e,t){if("string"!=typeof e)throw new Error("Parameter key is an invalid string");if(!t instanceof c.default)throw new Error("Parameter gesture is an invalid Gesture object");t.setType(e),this.state.registerGesture(t,e)}},{key:"unregister",value:function(e){this.state.bindings.forEach(function(t){t.gesture.getType()===e&&t.element.removeEventListener(t.gesture.getId(),t.handler,t.capture)});var t=this.state.registeredGestures[e];return delete this.state.registeredGestures[e],t}}]),e}();t.default=h},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,r,i){var u=this;n(this,e),this.element=t,Object.keys(i.registeredGestures).forEach(function(e){u[e]=function(t,n){return i.addBinding(u.element,e,t,n,r),u}})};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(5),a=r(o),s=function(){function e(){i(this,e),this.type=null,this.id=null}return u(e,[{key:"setType",value:function(e){this.type=e}},{key:"getType",value:function(){return this.type}},{key:"setId",value:function(e){this.id=e}},{key:"getId",value:function(){return null!==this.id?this.id:this.type}},{key:"update",value:function(e){var t=this;Object.keys(e).forEach(function(n){t[n]=e[n]})}},{key:"start",value:function(e,t,n){return null}},{key:"move",value:function(e,t,n){return null}},{key:"end",value:function(e){return null}},{key:"isValid",value:function(e,t,n){return e.every(function(e){return a.default.isInside(e.initial.x,e.initial.y,n)})}}]),e}();t.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=360,r=180,i={normalizeEvent:Object.freeze({mousedown:"start",touchstart:"start",pointerdown:"start",mousemove:"move",touchmove:"move",pointermove:"move",mouseup:"end",touchend:"end",pointerup:"end"}),isWithin:function(e,t,n,r,i){return Math.abs(t-r)<=i&&Math.abs(e-n)<=i},distanceBetweenTwoPoints:function(e,t,n,r){var i=Math.sqrt((t-e)*(t-e)+(r-n)*(r-n));return Math.round(100*i)/100},getMidpoint:function(e,t,n,r){return{x:(e+t)/2,y:(n+r)/2}},getAngle:function(e,t,i,u){var o=Math.atan2(u-t,i-e)*(r/Math.PI);return n-(o<0?n+o:o)},getAngularDistance:function(e,t){var i=(t-e)%n,u=i<0?1:-1;return i=Math.abs(i),i>r?u*(n-i):u*i},getVelocity:function(e,t,n,r,i,u){var o=this.distanceBetweenTwoPoints(e,r,t,i);return o/(u-n)},getRightMostInput:function(e){var t=null,n=Number.MIN_VALUE;return e.forEach(function(e){e.initial.x>n&&(t=e)}),t},isInteger:function(e){return"number"==typeof e&&e%1===0},isInside:function(e,t,n){var r=n.getBoundingClientRect();return e>r.left&&e<r.left+r.width&&t>r.top&&t<r.top+r.height},getPropagationPath:function(e){if(e.path)return e.path;for(var t=[],n=e.target;n!=document;)t.push(n),n=n.parentNode;return t},getPathIndex:function(e,t){var n=e.length;return e.forEach(function(e,r){e===t&&(n=r)}),n},setMSPreventDefault:function(e){e.style["-ms-content-zooming"]="none",e.style["touch-action"]="none"},removeMSPreventDefault:function(e){e.style["-ms-content-zooming"]="",e.style["touch-action"]=""},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}};t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=t.state,r=f.default.normalizeEvent[e.type];if(0!==n.inputs.length||"start"===r){if("undefined"!=typeof e.buttons&&"end"!==r&&0===e.buttons)return void n.resetInputs();if(n.updateInputs(e,t.element)){var i=n.retrieveBindingsByInitialPos();if(i.length>0){t.preventDefault?(f.default.setMSPreventDefault(t.element),f.default.preventDefault(e)):f.default.removeMSPreventDefault(t.element);var u={},a=(0,s.default)(i,e,n),c=f.default.getPropagationPath(e);a.forEach(function(e){var t=e.binding.gesture.getId();u[t]?f.default.getPathIndex(c,e.binding.element)<f.default.getPathIndex(c,u[t].binding.element)&&(u[t]=e):u[t]=e}),Object.keys(u).forEach(function(e){var t=u[e];(0,o.default)(t.binding,t.data,t.events)})}var l=0;n.inputs.forEach(function(e){"end"===e.getCurrentEventType()&&l++}),l===n.inputs.length&&n.resetInputs()}}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(7),o=r(u),a=n(8),s=r(a),c=n(5),f=r(c);t.default=i},function(e,t){"use strict";function n(e,t,n){t.events=n;var i=new CustomEvent(e.gesture.getId(),{detail:t,bubbles:!0,cancelable:!0});r(e.element,i,e)}function r(e,t,n){e.dispatchEvent(t),n.bindOnce&&ZingTouch.unbind(n.element,n.gesture.getType())}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){var r=o.default.normalizeEvent[t.type],i=n.inputs.map(function(e){return e.current}),u=e.reduce(function(e,t){var u=t.gesture[r](n.inputs,n,t.element);return u&&e.push({binding:t,data:u,events:i}),e},[]);return u}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=r(u);t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return e.find(function(e){return e.identifier===t})}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(10),l=r(f),d=n(11),p=r(d),h=n(12),y=r(h),v=n(13),g=r(v),m=n(14),b=r(m),w=n(15),_=r(w),P=n(16),E=r(P),O=n(5),x=r(O),I=0,j=function(){function e(t){i(this,e),this.regionId=t,this.inputs=[],this.bindings=[],this.numGestures=0,this.registeredGestures={},this.registerGesture(new l.default,"pan"),this.registerGesture(new y.default,"rotate"),this.registerGesture(new p.default,"pinch"),this.registerGesture(new g.default,"swipe"),this.registerGesture(new b.default,"tap")}return a(e,[{key:"addBinding",value:function(e,t,n,r,i){var u=void 0;if(e&&"undefined"==typeof e.tagName)throw new Error("Parameter element is an invalid object.");if("function"!=typeof n)throw new Error("Parameter handler is invalid.");if("string"==typeof t&&Object.keys(this.registeredGestures).indexOf(t)===-1)throw new Error("Parameter "+t+" is not a registered gesture");if("object"===("undefined"==typeof t?"undefined":o(t))&&!(t instanceof c.default))throw new Error("Parameter for the gesture is not of a Gesture type");"string"==typeof t?u=this.registeredGestures[t]:(u=t,""===u.id&&this.assignGestureId(u)),this.bindings.push(new _.default(e,u,n,r,i)),e.addEventListener(u.getId(),n,r)}},{key:"retrieveBindingsByElement",value:function(e){return this.bindings.filter(function(t){return t.element===e})}},{key:"retrieveBindingsByInitialPos",value:function(){var e=this;return this.bindings.filter(function(t){return e.inputs.some(function(e){return x.default.isInside(e.initial.x,e.initial.y,t.element)})})}},{key:"updateInputs",value:function(e,t){function n(e,t,n,r){var i=x.default.normalizeEvent[e.type],o=u(t.inputs,n);return"start"===i&&o?void t.resetInputs():"start"!==i&&o&&!x.default.isInside(o.current.x,o.current.y,r)?void t.resetInputs():"start"===i||o?void("start"===i?t.inputs.push(new E.default(e,n)):o.update(e,n)):void t.resetInputs()}var r=this,i=e.touches?"TouchEvent":e.pointerType?"PointerEvent":"MouseEvent";switch(i){case"TouchEvent":Array.from(e.changedTouches).forEach(function(i){n(e,r,i.identifier,t)});break;case"PointerEvent":n(e,this,e.pointerId,t);break;case"MouseEvent":default:n(e,this,I,t)}return!0}},{key:"resetInputs",value:function(){this.inputs=[]}},{key:"numActiveInputs",value:function(){var e=this.inputs.filter(function(e){return"end"!==e.current.type});return e.length}},{key:"registerGesture",value:function(e,t){this.assignGestureId(e),this.registeredGestures[t]=e}},{key:"assignGestureId",value:function(e){e.setId(this.regionId+"-"+this.numGestures++)}}]),e}();t.default=j},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=1,p=1,h=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="pan",n.numInputs=e&&e.numInputs?e.numInputs:d,n.threshold=e&&e.threshold?e.threshold:p,n}return o(t,e),a(t,[{key:"start",value:function(e){var t=this;e.forEach(function(e){var n=e.getGestureProgress(t.getId());n.active=!0,n.lastEmitted={x:e.current.x,y:e.current.y}})}},{key:"move",value:function(e,t,n){function r(e,t){var n=l.default.distanceBetweenTwoPoints(e.initial.x,e.current.x,e.initial.y,e.current.y),r=l.default.getAngle(e.initial.x,e.initial.y,e.current.x,e.current.y),i=l.default.getAngle(t.lastEmitted.x,t.lastEmitted.y,e.current.x,e.current.y),u={x:e.current.x-t.lastEmitted.x,y:e.current.y-t.lastEmitted.y};return{distanceFromOrigin:n,directionFromOrigin:r,currentDirection:i,change:u}}var i=this;if(this.numInputs!==e.length)return null;var u={data:[]};return e.forEach(function(e,t){var n=e.getGestureProgress(i.getId()),o=l.default.distanceBetweenTwoPoints(n.lastEmitted.x,n.lastEmitted.y,e.current.x,e.current.y),a=o>=i.threshold;n.active&&a&&(u.data[t]=r(e,n),n.lastEmitted.x=e.current.x,n.lastEmitted.y=e.current.y)}),u}},{key:"end",value:function(e){var t=this;return e.forEach(function(e){var n=e.getGestureProgress(t.getId());n.active=!1}),null}}]),t}(c.default);t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=2,p=1,h=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="pinch",n.threshold=e&&e.threshold?e.threshold:p,n}return o(t,e),a(t,[{key:"start",value:function(e,t,n){if(!this.isValid(e,t,n))return null;if(e.length===d){var r=e[0].getGestureProgress(this.type);r.lastEmittedDistance=l.default.distanceBetweenTwoPoints(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y)}}},{key:"move",value:function(e,t,n){if(t.numActiveInputs()===d){var r=l.default.distanceBetweenTwoPoints(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y),i=l.default.getMidpoint(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y),u=e[0].getGestureProgress(this.type),o=r-u.lastEmittedDistance;if(Math.abs(o)>=this.threshold)return u.lastEmittedDistance=r,{distance:r,center:i,change:o}}return null}}]),t}(c.default);t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=2,p=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="rotate",n.numInputs=e.numInputs||d,n}return o(t,e),a(t,[{key:"move",value:function(e,t,n){var r=t.numActiveInputs();if(this.numInputs!==r)return null;var i=void 0,u=void 0,o=void 0;if(1===r){var a=n.getBoundingClientRect();i={x:a.left+a.width/2,y:a.top+a.height/2},u=i,o=e[0]}else i=l.default.getMidpoint(e[0].current.x,e[1].current.x,e[0].current.y,e[1].current.y),o=l.default.getRightMostInput(e);var s=l.default.getAngle(i.x,i.y,o.current.x,o.current.y),c=o.getGestureProgress(this.getId());return c.initialAngle?(c.change=l.default.getAngularDistance(c.previousAngle,s),c.distance=c.distance+c.change):(c.initialAngle=c.previousAngle=s,c.distance=c.change=0),c.previousAngle=s,{angle:s,distanceFromOrigin:c.distance,distanceFromLast:c.change}}}]),t}(c.default);t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),c=r(s),f=n(5),l=r(f),d=1,p=100,h=.2,y=100,v=10,g=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="swipe",n.numInputs=e&&e.numInputs?e.numInputs:d,n.maxRestTime=e&&e.maxRestTime?e.maxRestTime:p,n.escapeVelocity=e&&e.escapeVelocity?e.escapeVelocity:h,n.timeDistortion=e&&e.timeDistortion?e.timeDistortion:y,n.maxProgressStack=e&&e.maxProgressStack?e.maxProgressStack:v,n}return o(t,e),a(t,[{key:"move",value:function(e,t,n){if(this.numInputs===e.length)for(var r=0;r<e.length;r++){var i=e[r].getGestureProgress(this.getId());i.moves||(i.moves=[]),i.moves.push({time:(new Date).getTime(),x:e[r].current.x,y:e[r].current.y}),i.length>this.maxProgressStack&&i.moves.shift()}return null}},{key:"end",value:function(e){if(this.numInputs===e.length){for(var t={data:[]},n=0;n<e.length;n++){if("end"!==e[n].current.type)return;var r=e[n].getGestureProgress(this.getId());if(r.moves&&r.moves.length>2){var i=r.moves.pop();if((new Date).getTime()-i.time>this.maxRestTime)return null;for(var u=void 0,o=r.moves.length-1;o!==-1;){if(r.moves[o].time!==i.time){u=r.moves[o];break}o--}u||(u=r.moves.pop(),u.time+=this.timeDistortion);var a=l.default.getVelocity(u.x,u.y,u.time,i.x,i.y,i.time);t.data[n]={velocity:a,distance:l.default.distanceBetweenTwoPoints(u.x,i.x,u.y,i.y),duration:i.time-u.time,currentDirection:l.default.getAngle(u.x,u.y,i.x,i.y)}}}for(var n=0;n<t.data.length;n++)if(a<this.escapeVelocity)return null;if(t.data.length>0)return t}return null}}]),t}(c.default);t.default=g},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=r(c),l=n(5),d=r(l),p=0,h=300,y=1,v=10,g=function(e){function t(e){i(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.type="tap",n.minDelay=e&&e.minDelay?e.minDelay:p,n.maxDelay=e&&e.maxDelay?e.maxDelay:h,n.numInputs=e&&e.numInputs?e.numInputs:y,n.tolerance=e&&e.tolerance?e.tolerance:v,n}return o(t,e),s(t,[{key:"start",value:function(e){var t=this;return e.length===this.numInputs&&e.forEach(function(e){var n=e.getGestureProgress(t.type);n.start=(new Date).getTime()}),null}},{key:"move",value:function(e,t,n){for(var r=this,i=0;i<e.length;i++)if("move"===e[i].getCurrentEventType()){var u=e[i].current,o=e[i].previous;if(!d.default.isWithin(u.x,u.y,o.x,o.y,this.tolerance)){var s=function(){var t=r.type;return e.forEach(function(e){e.resetProgress(t)}),{v:null}}();if("object"===("undefined"==typeof s?"undefined":a(s)))return s.v}}return null}},{key:"end",value:function(e){if(e.length!==this.numInputs)return null;for(var t=Number.MAX_VALUE,n=0;n<e.length;n++){if("end"!==e[n].getCurrentEventType())return null;var r=e[n].getGestureProgress(this.type);if(!r.start)return null;r.start<t&&(t=r.start)}var i=(new Date).getTime()-t;if(this.minDelay<=i&&this.maxDelay>=i)return{interval:i};var u=this.type;return e.forEach(function(e){e.resetProgress(u)}),null}}]),t}(f.default);t.default=g},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function e(t,r,i,u,o){n(this,e),this.element=t,this.gesture=r,this.handler=i,this.capture="undefined"!=typeof u&&u,this.bindOnce="undefined"!=typeof o&&o};t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(17),a=r(o),s=function(){function e(t,n){i(this,e);var r=new a.default(t,n);this.initial=r,this.current=r,this.previous=r,this.identifier="undefined"!=typeof n?n:0,this.progress={}}return u(e,[{key:"update",value:function(e,t){this.previous=this.current,this.current=new a.default(e,t)}},{key:"getGestureProgress",value:function(e){return this.progress[e]||(this.progress[e]={}),this.progress[e]}},{key:"getCurrentEventType",value:function(){return this.current.type}},{key:"resetProgress",value:function(e){this.progress[e]={}}}]),e}();t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(5),o=r(u),a=0,s=function e(t,n){i(this,e),this.originalEvent=t,this.type=o.default.normalizeEvent[t.type],this.x=a,this.y=a;var r=void 0;r=t.touches&&t.changedTouches?Array.from(t.changedTouches).find(function(e){return e.identifier===n}):t,this.x=this.clientX=r.clientX,this.y=this.clientY=r.clientY,this.pageX=r.pageX,this.pageY=r.pageY,this.screenX=r.screenX,this.screenY=r.screenY};t.default=s}]);

},{}],2:[function(require,module,exports){
require('./dist/zingtouch.min.js');
module.exports = ZingTouch;

},{"./dist/zingtouch.min.js":1}]},{},[2])(2)
});

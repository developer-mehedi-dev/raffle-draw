!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.onload=function(){var e=document.getElementById("inp"),t=document.getElementById("name-list"),r=document.getElementById("display"),o=document.getElementById("give-a-try"),a=document.getElementById("first-position"),u=document.getElementById("second-position"),l=document.getElementById("third-position"),f=[];e.addEventListener("keypress",(function(e){if("Enter"===e.key){var n=e.target.value.split(", ");""!==n[0]&&n.forEach((function(n){f.push(n);var r=function(e){var t=document.createElement("li");return t.className="list-group-item",t.innerHTML=e,t}(n);t.appendChild(r),e.target.value=""}))}})),o.addEventListener("click",(function(e){0===f.length?alert("You have no name"):function(){var e=function(e){for(var t=n(e),r=t.length-1;r>0;r--){var o=Math.floor(Math.random()*(r+1)),i=t[o];t[o]=t[r],t[r]=i}return t}(f);for(i=1;i<e.length;i++)!function(t,n){setTimeout((function(){var t=Math.floor(Math.random()*e.length);if(r.innerHTML=e[t],n===e.length-1)if(a.innerHTML)if(u.innerHTML)if(l.innerHTML)alert("Raffle Draw Already Completed!");else{l.innerHTML=e[t];var o=f.indexOf(e[t]);f.splice(o,1)}else{u.innerHTML=e[t];var i=f.indexOf(e[t]);f.splice(i,1)}else{a.innerHTML=e[t];var c=f.indexOf(e[t]);f.splice(c,1)}}),t)}(100*i,i)}()}))}}]);
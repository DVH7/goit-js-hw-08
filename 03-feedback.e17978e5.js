function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function T(e){return l=e,u=setTimeout(O,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function O(){var e=v();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function h(e){return u=void 0,g&&i?y(e):(i=r=void 0,a)}function w(){var e=v(),n=j(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){T={email:j.value,message:O.value},localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),console.log({email:email.value,message:message.value}),""===email.value||""===message.value)return alert("Будь ласка, заповніть всі обов'язкові поля.");localStorage.removeItem(STORAGE_KEY),e.currentTarget.reset(),dataForm={}}));let T=JSON.parse(localStorage.getItem("feedback-form-state"))||{};const{email:j,message:O}=y.elements;T&&(j.value=T.email||"",O.value=T.message||"");
//# sourceMappingURL=03-feedback.e17978e5.js.map
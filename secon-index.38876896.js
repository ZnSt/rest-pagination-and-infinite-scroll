!function(){var e,t=document.querySelector("#prev-button"),n=document.querySelector("#next-button"),i=document.querySelector("#pagination-numbers"),r=document.querySelector("#paginated-list").querySelectorAll("li"),a=Math.ceil(r.length/10);function c(i){e=i;var c=10*(i-1),d=10*i;document.querySelectorAll(".pagination-number").forEach((function(t){var n=Number(t.getAttribute("page-index"));t.classList.remove("active"),n===e&&t.classList.add("active")})),function(){1===e?o(t):u(t);e===a?o(n):u(n)}(),r.forEach((function(e,t){e.classList.add("hidden"),t>=c&&t<d&&e.classList.remove("hidden")}))}function o(e){e.setAttribute("disabled",!0)}function u(e){e.removeAttribute("disabled")}window.addEventListener("load",(function(){!function(){for(var e=1;e<=a;e++)t=e,n=void 0,(n=document.createElement("button")).className="pagination-number",n.setAttribute("page-index",t),n.innerHTML=t,n.setAttribute("arial-label","page"+t),i.appendChild(n);var t,n}(),c(1),document.querySelectorAll(".pagination-number").forEach((function(e){var t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(function(){c(t)}))})),t.addEventListener("click",(function(){c(e-1)})),n.addEventListener("click",(function(){c(e+1)}))}))}();
//# sourceMappingURL=secon-index.38876896.js.map

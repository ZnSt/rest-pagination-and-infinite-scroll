const e=document.querySelector("#prev-button"),t=document.querySelector("#next-button"),n=document.querySelector("#pagination-numbers"),i=document.querySelector("#paginated-list").querySelectorAll("li");let c;const o=Math.ceil(i.length/10);function r(e){const t=document.createElement("button");t.className="pagination-number",t.setAttribute("page-index",e),t.innerHTML=e,t.setAttribute("arial-label","page"+e),n.appendChild(t)}function a(n){c=n;const r=10*(n-1),a=10*n;document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));e.classList.remove("active"),t===c&&e.classList.add("active")})),function(){1===c?d(e):l(e);c===o?d(t):l(t)}(),i.forEach(((e,t)=>{e.classList.add("hidden"),t>=r&&t<a&&e.classList.remove("hidden")}))}function d(e){e.setAttribute("disabled",!0)}function l(e){e.removeAttribute("disabled")}window.addEventListener("load",(()=>{!function(){for(let e=1;e<=o;e++)r(e)}(),a(1),document.querySelectorAll(".pagination-number").forEach((e=>{const t=Number(e.getAttribute("page-index"));t&&e.addEventListener("click",(()=>{a(t)}))})),e.addEventListener("click",(()=>{a(c-1)})),t.addEventListener("click",(()=>{a(c+1)}))}));
//# sourceMappingURL=secon-index.1d117fa1.js.map

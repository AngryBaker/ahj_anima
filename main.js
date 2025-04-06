/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/js/Collapse.js
class Collapse {
  createCollapse() {
    const collapseEl = document.createElement("div");
    this.collapseEl = collapseEl;
    collapseEl.className = "collapse";
    collapseEl.innerHTML = `<button class="collapse_btn">Collapse</button>
      <div class="collapse_content">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
    `;
    document.body.appendChild(collapseEl);
  }
  addEvListeneer() {
    const content = this.collapseEl.querySelector(".collapse_content");
    this.collapseEl.querySelector(".collapse_btn").addEventListener("click", e => {
      e.preventDefault();
      content.classList.toggle("show");
    });
    console.log(this.collapseEl.querySelector(".collapse_btn"));
  }
}
;// ./src/js/app.js

const collapse = new Collapse();
collapse.createCollapse();
collapse.addEvListeneer();
;// ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
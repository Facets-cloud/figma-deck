(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class FigmaDeck extends HTMLElement {
      connectedCallback() {
        this.style.display = "block";
        this.style.width = "100%";
        this.style.height = "100%";
    
        this.innerHTML = `
        <iframe
          style="width:100%;height:100%;border:1px solid rgba(0,0,0,0.1);border-radius:8px;"
          src="https://embed.figma.com/deck/P8fRO7AOCSVSbyPBh7LOhS/Basic-Concepts?node-id=1-1830&viewport=-3225%2C12%2C0.48&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
          allowfullscreen>
        </iframe>
      `;
      }
    }
    
    customElements.define("figma-deck", FigmaDeck);

}));

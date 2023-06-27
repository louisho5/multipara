/*!
 * Simple JS plugin for multiple layered parallax effects
 *
 * Copyright (c) 2023 @louisho5
 * Under the MIT license.
 *
 * @version 0.0.1
 */

class MultiPara {
  constructor(options = {}) {
    this.options = options;
    if (this.options.container == undefined) {
        this.options.container = '.multipara';
    }
    if (this.options.layer == undefined) {
      this.options.layer = '.layer';
    }
    this.init = this.init.bind(this);
    document.addEventListener("DOMContentLoaded", this.init);
  }

  init() {
    var paraContainer = this.options.container;
    var paraLayer = this.options.layer;
    window.addEventListener("scroll", function(){
        var multipara = document.querySelectorAll(paraContainer);
        multipara.forEach(function(multiparaContainer){
          var multiparaTop = multiparaContainer.offsetTop - window.pageYOffset;
          var multiparaLayers = multiparaContainer.querySelectorAll(paraLayer);
          multiparaLayers.forEach(function(multiparaLayer) {
            var multiparaX = multiparaLayer.getAttribute('data-multipara-x') || 0;
            var multiparaY = multiparaLayer.getAttribute('data-multipara-y') || 0;
            var multiparaXPos = multiparaTop * multiparaX;
            var multiparaYPos = multiparaTop * multiparaY;
            multiparaLayer.style.transform = `translate(${multiparaXPos}px, ${multiparaYPos}px)`;
          });
        });
    });

    window.dispatchEvent(new Event('scroll'));
  }
}
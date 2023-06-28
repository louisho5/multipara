/*!
 * Simple JS plugin for multiple layered parallax effects
 *
 * Copyright (c) 2023 @louisho5
 * Under the MIT license.
 *
 * @version 0.2.0
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
    if (this.options.stoppable == undefined) {
      this.options.stoppable = false;
    }
    this.init = this.init.bind(this);
    document.addEventListener("DOMContentLoaded", this.init);
  }

  init() {
    var paraContainer = this.options.container;
    var paraLayer = this.options.layer;
    var paraStoppable = this.options.stoppable;
    window.addEventListener("scroll", function(){
        var multipara = document.querySelectorAll(paraContainer);
        multipara.forEach(function(multiparaContainer){
          var multiparaTop = multiparaContainer.offsetTop - window.pageYOffset;
          var multiparaLayers = multiparaContainer.querySelectorAll(paraLayer);
          multiparaLayers.forEach(function(multiparaLayer) {
            var multiparaX = multiparaLayer.getAttribute('data-multipara-x') || 0;
            var multiparaY = multiparaLayer.getAttribute('data-multipara-y') || 0;
            var paraOriginX, paraOriginY;
            var multiparaXPos;
            var multiparaYPos;
            if(multiparaX > 0){
              paraOriginX = true;
            } else {
              paraOriginX = false;
            }
            if(multiparaY > 0){
              paraOriginY = true;
            } else {
              paraOriginY = false;
            }
            if(!paraStoppable){
              multiparaXPos = multiparaTop * multiparaX;
              multiparaYPos = multiparaTop * multiparaY;
            } else {
              multiparaXPos = multiparaTop * multiparaX;
              if(paraOriginX && multiparaXPos < 0){
                multiparaXPos = 0;
              }
              if(!paraOriginX && multiparaXPos > 0){
                multiparaXPos = 0;
              }
              multiparaYPos = multiparaTop * multiparaY;
              if(paraOriginY && multiparaYPos < 0){
                multiparaYPos = 0;
              }
              if(!paraOriginY && multiparaYPos > 0){
                multiparaYPos = 0;
              }
            }
            multiparaLayer.style.transform = `translate(${multiparaXPos}px, ${multiparaYPos}px)`;
          });
        });
    });

    window.dispatchEvent(new Event('scroll'));
    
    document.addEventListener("resize", function(){
      window.dispatchEvent(new Event('scroll'));
    });
  }
}

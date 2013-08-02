// Generated by CoffeeScript 1.4.0
(function() {

  this.iFrameOverlay = (function() {

    function iFrameOverlay(container, dimensions, link) {
      this.container = container;
      this.dimensions = dimensions;
      this.link = link;
      this.create_markup();
      this.position_element();
    }

    iFrameOverlay.prototype.set_toolbar = function(toolbar) {
      this.toolbar = toolbar;
    };

    iFrameOverlay.prototype.create_markup = function() {
      this.wrapper = $('<div class="overlay_wrapper"></div>');
      this.iframe = $('<iframe class="overlay_iframe" src="' + this.link.target + '"></iframe>');
      this.close = $('<div class="close"> X </div>');
      this.close.click(function() {
        return $(this).parent().remove();
      });
      this.container.after(this.wrapper);
      this.wrapper.html(this.iframe);
      return this.wrapper.prepend(this.close);
    };

    iFrameOverlay.prototype.resize = function(dimensions) {
      this.dimensions = dimensions;
      return this.position_element();
    };

    iFrameOverlay.prototype.position_element = function() {
      this.wrapper.offset(this.dimensions.offset);
      this.wrapper.width(this.dimensions.width);
      return this.wrapper.height(this.dimensions.height);
    };

    return iFrameOverlay;

  })();

}).call(this);

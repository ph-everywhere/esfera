// Generated by CoffeeScript 1.4.0
(function() {

  this.OverlayController = (function() {
    var overlays;

    function OverlayController() {}

    overlays = [];

    OverlayController.create = function(link) {
      return new PDFOverlay(link);
    };

    return OverlayController;

  })();

}).call(this);

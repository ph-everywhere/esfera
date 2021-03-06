// Generated by CoffeeScript 1.4.0
(function() {

  this.Animations = {
    blink: function(elem, min, max, time) {
      var blink_in, blink_out,
        _this = this;
      if (min == null) {
        min = .1;
      }
      if (max == null) {
        max = 1;
      }
      if (time == null) {
        time = 1000;
      }
      blink_out = null;
      blink_in = function() {
        return elem.fadeTo(time, min, blink_out);
      };
      blink_out = function() {
        return elem.fadeTo(time, max, blink_in);
      };
      return blink_out();
    }
  };

}).call(this);

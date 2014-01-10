(function() {
  var GLOBAL_MODULES;

  GLOBAL_MODULES = window.GLOBAL_MODULES = {};

  window.require = function(name) {
    var moudle;
    moudle = GLOBAL_MODULES[name];
    if (moudle) {
      return moudle.exports;
    } else {
      return null;
    }
  };

}).call(this);

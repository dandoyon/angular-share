(function(exports) {
  var NG = exports.NG || {};
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var trivialReporter = new jasmine.TrivialReporter();
  jasmineEnv.addReporter(trivialReporter);

  jasmineEnv.specFilter = function(spec) {
    return trivialReporter.specFilter(spec);
  };
  NG.jasmineEnv = jasmineEnv;
})(window);​
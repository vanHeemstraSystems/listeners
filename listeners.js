/*
 * Listeners
 * 
 * Param: app 
 */
module.exports = function(app) {
  var _Listeners = {};
  var path = require('../libraries/path');
  var paths = require('../paths/paths');
  config = require(path.join(paths.configurations, '/configurations.js'))(app);
  var common = config.common,
  server_prefix = common.server_prefix || 'PREFIX';
  console.log(server_prefix + " - Listeners listeners required.");
  var http = require(path.join(paths.libraries, '/http.js'));
  var httpServer = http.createServer(app);
  httpServer.listen(8080, function () {
    console.log('Listening on port 8080');
  });
  return _Listeners;
};//does not call itself

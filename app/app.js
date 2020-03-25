"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("./config/express"));

var _index = _interopRequireDefault(require("./routes/index.route"));

var errorHandler = _interopRequireWildcard(require("./middlewares/errorHandler"));

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpackConfig = _interopRequireDefault(require("../webpack/webpack.config.dev"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

if (process.env.NODE_ENV === 'development') {
  console.log('App running in development mode!');
  var compiler = (0, _webpack["default"])(_webpackConfig["default"]);

  _express["default"].use((0, _webpackDevMiddleware["default"])(compiler, {
    noInfo: true,
    publicPath: _webpackConfig["default"].output.publicPath
  }));

  _express["default"].use((0, _webpackHotMiddleware["default"])(compiler));
} // Router


_express["default"].use('/', _index["default"]); // Landing page


_express["default"].get('*', function (req, res) {
  res.sendFile(_path["default"].join(__dirname, '../public/index.html'));
}); // Error Handler


_express["default"].use(errorHandler.notFoundErrorHandler);

_express["default"].use(errorHandler.errorHandler); // const Server = require('socket.io');
// const io = new Server(9000);


var http = require('http').Server(_express["default"]);

var io = require('socket.io')(http);

io.on('connect', function (socket) {
  console.log(socket.id + ' CONNECTED'); // console.log(socket.id);

  socket.on('data', function (data) {
    // console.log('weapon detected');
    var dataArr = []; // console.log(data.weapon)

    for (var i in data) {
      this[i] = data[i].split('._____.');
    }

    for (var j = 0; j < this.weapon.length; j++) {
      dataArr[j] = {
        'weapon': this.weapon[j],
        'percentage': this.percentage[j],
        'img': this.img[j]
      };
    }

    io.emit('dataAA', dataArr);
  });
  socket.on('close', function (data) {
    // console.log(data)
    io.emit('response', data);
  });
  socket.on('passcmd', function (data) {
    io.emit('cmd', data);
    console.log(data);
  });
  socket.on('disconnect', function () {
    console.log(socket.id + ' DISCONNECT');
  });
}); // app.listen(app.get('port'), app.get('host'), () => {
//     console.log('server running');
// })

http.listen(_express["default"].get('port'), _express["default"].get('host'), function () {
  console.log('SERVER RUNNING AT ' + process.env.APP_HOST + ':' + process.env.APP_PORT);
});
var _default = _express["default"];
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(http, "http", "e:\\XrayUI\\server\\app.js");
  reactHotLoader.register(io, "io", "e:\\XrayUI\\server\\app.js");
  reactHotLoader.register(_default, "default", "e:\\XrayUI\\server\\app.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
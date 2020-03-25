"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _bookshelf = _interopRequireDefault(require("../config/bookshelf"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

var TABLE_NAME = 'users';

var User =
/*#__PURE__*/
function (_bookshelf$Model) {
  (0, _inherits2["default"])(User, _bookshelf$Model);

  function User() {
    (0, _classCallCheck2["default"])(this, User);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(User).apply(this, arguments));
  }

  (0, _createClass2["default"])(User, [{
    key: "verifyPassword",
    value: function verifyPassword(password) {
      return this.get('password') === password;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: "tableName",
    get: function get() {
      return TABLE_NAME;
    }
  }]);
  return User;
}(_bookshelf["default"].Model);

var _default = User;
var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TABLE_NAME, "TABLE_NAME", "e:\\XrayUI\\server\\models\\user.model.js");
  reactHotLoader.register(User, "User", "e:\\XrayUI\\server\\models\\user.model.js");
  reactHotLoader.register(_default, "default", "e:\\XrayUI\\server\\models\\user.model.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _winston = _interopRequireDefault(require("../config/winston"));

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).enterModule;
  enterModule && enterModule(module);
})();

function login(req, res) {
  var _req$body = req.body,
      userid = _req$body.userid,
      password = _req$body.password;

  _user["default"].query({
    where: {
      userid: userid
    }
  }).fetch().then(function (user) {
    if (user) {
      if (password === user.get('password')) {
        var token = _jsonwebtoken["default"].sign({
          id: user.get('id'),
          userid: user.get('userid')
        }, process.env.TOKEN_SECRET_KEY);

        res.send({
          success: true,
          token: token,
          userid: user.get('userid'),
          username: user.get('username')
        });
      } else {
        _winston["default"].log('error', 'Authentication failed. Invalid password.');

        res.status(_httpStatusCodes["default"].UNAUTHORIZED).send({
          success: false,
          message: 'Authentication failed. Invalid password.'
        });
      }
    } else {
      _winston["default"].log('error', 'Invalid userID or password.');

      res.status(_httpStatusCodes["default"].UNAUTHORIZED).send({
        success: false,
        message: 'Invalid userID or password.'
      });
    }
  });
}

;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(login, "login", "e:\\XrayUI\\server\\controllers\\auth.controller.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : require('react-hot-loader')).leaveModule;
  leaveModule && leaveModule(module);
})();
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = save;

var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));

var _threat = _interopRequireDefault(require("../models/threat.model"));

(function() {
  var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
    ? reactHotLoaderGlobal
    : require("react-hot-loader")
  ).enterModule;
  enterModule && enterModule(module);
})();

var weapon, img, percentage;

function save(req, res) {
  for (var i = 0; i < req.body.length; i++) {
    weapon = req.body[i].weapon;
    img = req.body[i].img;
    percentage = req.body[i].percentage;

    _threat["default"]
      .forge(
        {
          weapon: weapon,
          img: img,
          percentage: percentage
        },
        {
          hasTimestamp: true
        }
      )
      .save()
      ["catch"](function(err) {
        return res
          .status(_httpStatusCodes["default"].INTERNAL_SERVER_ERROR)
          .json({
            error: err
          });
      });
  }

  res.json({
    save: true
  });
}

(function() {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
    ? reactHotLoaderGlobal
    : require("react-hot-loader")
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    weapon,
    "weapon",
    "e:\\XrayUI\\server\\controllers\\log.controller.js"
  );
  reactHotLoader.register(
    img,
    "img",
    "e:\\XrayUI\\server\\controllers\\log.controller.js"
  );
  reactHotLoader.register(
    percentage,
    "percentage",
    "e:\\XrayUI\\server\\controllers\\log.controller.js"
  );
  reactHotLoader.register(
    save,
    "save",
    "e:\\XrayUI\\server\\controllers\\log.controller.js"
  );
})();

(function() {
  var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
    ? reactHotLoaderGlobal
    : require("react-hot-loader")
  ).leaveModule;
  leaveModule && leaveModule(module);
})();

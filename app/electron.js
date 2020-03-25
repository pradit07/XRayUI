"use strict";

(function() {
  var enterModule = (typeof reactHotLoaderGlobal !== "undefined"
    ? reactHotLoaderGlobal
    : require("react-hot-loader")
  ).enterModule;
  enterModule && enterModule(module);
})();

var _require = require("electron"),
  app = _require.app,
  BrowserWindow = _require.BrowserWindow;

require("./app.js");

var mainWindow = null;
app.on("ready", function() {
  mainWindow = new BrowserWindow();
  //mainWindow.loadURL("http://192.168.1.135:7000/");
  mainWindow.loadURL("http://localhost:7000/");
  mainWindow.on("close", function(event) {
    mainWindow = null;
  });
});
(function() {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== "undefined"
    ? reactHotLoaderGlobal
    : require("react-hot-loader")
  ).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    mainWindow,
    "mainWindow",
    "e:\\XrayUI\\server\\electron.js"
  );
})();

(function() {
  var leaveModule = (typeof reactHotLoaderGlobal !== "undefined"
    ? reactHotLoaderGlobal
    : require("react-hot-loader")
  ).leaveModule;
  leaveModule && leaveModule(module);
})();

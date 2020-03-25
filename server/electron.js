var { app, BrowserWindow } = require('electron');
require('./app.js');

let mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow()
    //mainWindow.loadURL(`http://192.168.1.135:7000/`)
	mainWindow.loadURL(`http://localhost:7000/`)
    mainWindow.on('close', event => {
        mainWindow = null
    })
});
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function onClosed() {
  mainWindow = null;
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080
  });

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  });

  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', onClosed);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!mainWindow) { 
    createWindow();
  }
});

app.on('ready', createWindow)
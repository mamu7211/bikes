const path = require('path');
const {app, BrowserWindow} = require('electron');

const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Bikes",
        width: 800,
        height: 600
    });
    mainWindow.loadFile(path.join(__dirname, '../frontend/index.html'));
}

exports.init = () => {
    
    if (isLinux) {
        //HACK: prevent error 'GetVSyncParametersIfAvailable() failed for <n> times!' on Ubuntu 22.0.4 
        app.disableHardwareAcceleration();
    }

    app.whenReady().then(() => {
        createMainWindow();
    });
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });

    app.on('window-all-closed', () => {
        if (!isMac) {
            app.quit();
        }
    });
}
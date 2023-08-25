const path = require('path');
const {app, BrowserWindow} = require('electron');


function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: "Bikes",
        width: 500,
        height: 600
    });

    mainWindow.loadFile(path.join(__dirname, './frontend/index.html'));    
    console.log("Window created...");
}

app.whenReady().then(() => {
    console.log("CREATING WINDOW");
    createMainWindow();
    console.log("DONE");
});
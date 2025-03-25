const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'assets', 'app.ico'),  // Ensure the path is correct
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true,
            webSecurity: false
        }
    })

    win.setMenu(null)
    win.loadFile('index.html')

    // macOS-specific: set the icon in the Dock
    if (process.platform === 'darwin') {
        app.dock.setIcon(path.join(__dirname, 'assets', 'favicon.png'));  // Set the Dock icon
    }
}

app.whenReady().then(createWindow)

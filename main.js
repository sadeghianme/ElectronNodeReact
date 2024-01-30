const { app, BrowserWindow } = require('electron');
const path = require('path');
const expressApp = require('./app/backend/server'); // Import the Express app


function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true, // It's recommended for security purposes
            nodeIntegration: false, // Disable nodeIntegration for security reasons
        },
        icon: path.join(__dirname, 'assets/logo.png') // or .icns/.png depending on the platform

    });

    // Load the built version of index.html
    win.loadFile(path.join(__dirname, 'app/frontend/build/index.html'));

    // Open the DevTools automatically if in development
    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            // Note: The path to the electron executable and the arguments
            // to restart the app might vary depending on your setup.
            electron: require(`${__dirname}/node_modules/electron`)
        });
    }

}

app.whenReady().then(() => {
    createWindow();

    // Start the Express server
    const server = expressApp.listen(3000, () => {
        console.log(`Express server listening on port 3000`);
    });

    app.on('window-all-closed', () => {
        // On macOS it's common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });

    // Stop the Express server when Electron app is closed
    app.on('will-quit', () => {
        server.close(() => {
            console.log('Express server shut down.');
        });
    });
});

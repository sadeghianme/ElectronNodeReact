const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    doSomething: () => ipcRenderer.send('do-something')
});


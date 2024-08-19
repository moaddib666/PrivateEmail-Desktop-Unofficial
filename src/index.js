const { app, BrowserWindow , shell} = require('electron');
const PrivateEmail = "https://privateemail.com/";
function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: false,  // Disable Node.js integration in renderer process for security reasons
      contextIsolation: true,   // Enable context isolation for renderer process
    },
  });

  // Load the specified URL
  win.loadURL(PrivateEmail);

  // Open external links in the default browser
  // Handle window open requests
  win.webContents.setWindowOpenHandler((details) => {
    const url = details.url;
    // Check if the URL is external
    if (!url.includes(PrivateEmail)) {
      shell.openExternal(url); // Open the URL in the default system browser
      return { action: 'deny' }; // Prevent the new window from being created within the app
    }
    return { action: 'allow' }; // Allow internal links to open normally
  });

  // Optionally, you can remove the menu bar if you want a clean look
  win.setMenuBarVisibility(false);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

import { app } from 'electron';
import { createMainWindow } from './electron/mainWindow';
import { setupIpcHandlers } from './electron/ipcHandlers';
import { updateTitle } from './electron/titleUpdater';
import { createTray } from './electron/systemTray';
import path from 'path';

let win;

// Opens DevTools, sets app icon, changes title and sets up IpcHandlers
async function createWindow() {
  win = createMainWindow();

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    // Load the index.html when not in development
    win.loadURL('app://./index.html');
  }
  const iconPath = path.join(__dirname, '../src/assets/Logo.png');
  win.setIcon(iconPath);

  updateTitle(win);

  setupIpcHandlers(win);
}

// Starts the app and creates a tray icon.
app.on('ready', async () => {
  createWindow();
  createTray(win, app);
});
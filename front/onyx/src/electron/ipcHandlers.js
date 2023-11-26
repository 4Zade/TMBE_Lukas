import { ipcMain } from 'electron';

//Gets the window size state (maximized or minimized)
export function setupIpcHandlers(win) {
  ipcMain.on('get-window-state', (event) => {
    const isMaximized = win.isMaximized();
    event.reply('window-state', isMaximized);
  });

  // Drops down the app window
  ipcMain.on('minimize-window', () => {
    if (win) {
      win.minimize();
    }
  });

  //Maximizes & Minimized the app window
  ipcMain.on('maximize-window', () => {
    if (win) {
      if (win.isMaximized()) {
        win.unmaximize();
      } else {
        win.maximize();
      }
    }

    const isMaximized = win.isMaximized();
    win.webContents.send('window-state', isMaximized);
  });

  // Closes the app window
  ipcMain.on('close-window', () => {
    if (win) {
      win.close();
    }
  });
}
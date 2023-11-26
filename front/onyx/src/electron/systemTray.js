import { Tray, Menu } from 'electron';
import path from 'path';

let tray = null;

//Initiates tray
export function createTray(win, app) {
  const iconPath = path.join(__dirname, '../src/assets/Logo.png');
  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open', click: () => win.show() },
    { label: 'Quit', click: () => app.quit() }
  ]);

  tray.setToolTip('Your Electron App');
  tray.setContextMenu(contextMenu);

  tray.on('double-click', () => {
    win.show();
  });

  return tray;
}

export function getTray() {
    return tray;
}
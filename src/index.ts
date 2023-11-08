import { app, BrowserWindow } from "electron";
import path from "path";
import url from "url";
import { AddIPCMainHandle } from "./ipc/myIPC";

let mainWindow: BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    "icon": __dirname + "favicon.ico",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "view", "index.html"),
    protocol: "file:",
    slashes: true,
  }));

  mainWindow.on("closed", () => {
    // mainWindow = null;
  });

  AddIPCMainHandle();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

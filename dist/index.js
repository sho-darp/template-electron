"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
const url_1 = __importDefault(require("url"));
const myIPC_1 = require("./ipc/myIPC");
let mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        "icon": __dirname + "favicon.ico",
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.js"),
        },
    });
    mainWindow.loadURL(url_1.default.format({
        pathname: path_1.default.join(__dirname, "view", "index.html"),
        protocol: "file:",
        slashes: true,
    }));
    mainWindow.on("closed", () => {
        // mainWindow = null;
    });
    (0, myIPC_1.AddIPCMainHandle)();
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

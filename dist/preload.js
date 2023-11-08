"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld("api", {
    Sample: async (value) => await electron_1.ipcRenderer.invoke("Sample", value),
});

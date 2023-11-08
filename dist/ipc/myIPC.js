"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIPCMainHandle = exports.Sample = void 0;
const electron_1 = require("electron");
function Sample(event, value) {
    console.log(value);
    return "World!";
}
exports.Sample = Sample;
function AddIPCMainHandle() {
    electron_1.ipcMain.handle("Sample", Sample);
}
exports.AddIPCMainHandle = AddIPCMainHandle;

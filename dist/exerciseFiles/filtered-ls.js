"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredLs = void 0;
const path = __importStar(require("node:path"));
const fs = __importStar(require("fs"));
const filePath = process.argv[2] || process.argv0;
const fileExt = process.argv[3] || process.argv[1];
function filteredLs(filePath, fileExt) {
    fs.readdir(filePath, 'utf-8', (err, data) => {
        if (err)
            console.log(err);
        else
            data
                .filter((extItem) => path.extname(extItem) === `.${fileExt}`)
                .forEach((item) => console.log(item));
    });
}
exports.filteredLs = filteredLs;
filteredLs(filePath, fileExt);
//# sourceMappingURL=filtered-ls.js.map
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
const http = __importStar(require("http"));
const validUrl = __importStar(require("valid-url"));
// import { BufferList } from 'bl';
const url = process.argv[2];
const isValidUrl = (url) => {
    if (validUrl.isWebUri(url))
        fetchData(url);
    return;
};
// opcion 1 sin uso una biblioteca
function fetchData(url) {
    let totalChar = 0;
    let rawData = '';
    http.get(url, (res) => {
        res.setEncoding('utf-8').on('data', (data) => {
            totalChar += data.length;
            rawData += data;
        });
        res.on('error', (err) => console.log(err));
        res.on('end', () => {
            console.log(totalChar);
            console.log(rawData);
        });
    });
}
// opcion 2 con uso la biblioteca 'Buffer list'
// function fetchData(url: string) {
//   let totalChar: number = 0;
//   let rawData: string = '';
//   http.get(url, (res: http.IncomingMessage) => {
//     const bl = new BufferList();
//     res.on('data', (chunk) => {
//       bl.append(chunk);
//       totalChar += chunk.length;
//     });
//     res.on('error', (err) => console.log(err));
//     res.on('end', () => {
//       console.log(totalChar);
//       rawData = bl.toString('utf-8');
//       const lines = rawData.split('\n');
//       lines.forEach((line) => {
//         console.log(line);
//       });
//     });
//   });
// }
isValidUrl(url);
//# sourceMappingURL=http-collect.js.map
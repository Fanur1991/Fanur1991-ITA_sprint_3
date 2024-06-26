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
exports.isValidUrl = void 0;
const http = __importStar(require("http"));
const validUrl = __importStar(require("valid-url"));
const url = process.argv[2];
const isValidUrl = (url) => {
    if (validUrl.isWebUri(url))
        fetchData(url);
    else
        return;
};
exports.isValidUrl = isValidUrl;
function fetchData(url) {
    http.get(url, (res) => {
        res.setEncoding('utf-8').on('data', function (data) {
            console.log(data);
        });
        res.on('error', function (err) {
            console.log(err);
        });
        res.on('end', function () { });
    });
}
(0, exports.isValidUrl)(url);
//# sourceMappingURL=http-client.js.map
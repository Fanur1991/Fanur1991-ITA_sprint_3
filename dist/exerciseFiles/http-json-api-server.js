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
exports.httpJsonApiServer = void 0;
const http = __importStar(require("http"));
const PORT = process.argv[2];
const PARSETIME_ENDPOINT = '/api/parsetime';
const UNIXTIME_ENDPOINT = '/api/unixtime';
const httpJsonApiServer = (port) => {
    const server = http.createServer((req, res) => {
        if (!req.url) {
            console.error('URL is missing in the request');
            return;
        }
        const requestURL = new URL(req.url, `http://${req.headers.host}`);
        const queryParams = requestURL.searchParams;
        if (req.method === 'GET' && requestURL.pathname === PARSETIME_ENDPOINT) {
            handleParseTimeRequest(queryParams, res);
        }
        else if (req.method === 'GET' && requestURL.pathname === UNIXTIME_ENDPOINT) {
            handleUnixTimeRequest(queryParams, res);
        }
        else {
            handleError(res, 404, 'Endpoint not found');
        }
        //   if (requestURL.pathname === '/api/parsetime' && req.method === 'GET') {
        //     const isoValue = queryParams.get('iso');
        //     if (isoValue) {
        //       const date = new Date(isoValue);
        //       const responseObject = {
        //         hour: date.getHours(),
        //         minute: date.getMinutes(),
        //         second: date.getSeconds(),
        //       };
        //       res.setHeader('Content-Type', 'application/json');
        //       res.end(JSON.stringify(responseObject));
        //     }
        //   }
        //   if (requestURL.pathname === '/api/unixtime' && req.method === 'GET') {
        //     const unixtimeValue = queryParams.get('iso');
        //     if (unixtimeValue) {
        //       const date = new Date(unixtimeValue);
        //       const unixTime = date.getTime();
        //       res.setHeader('Content-Type', 'application/json');
        //       res.end(JSON.stringify({ unixtime: unixTime }));
        //     }
        //   }
        // }
    });
    server.listen(port, () => {
        console.log(`Server listening on port ${PORT}`);
    });
};
exports.httpJsonApiServer = httpJsonApiServer;
function handleParseTimeRequest(queryParams, res) {
    const isoValue = queryParams.get('iso');
    if (!isoValue) {
        handleError(res, 400, 'ISO parameter is missing');
        return;
    }
    const date = new Date(isoValue);
    const responseObject = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
    sendJSONResponse(res, responseObject);
}
function handleUnixTimeRequest(queryParams, res) {
    const isoValue = queryParams.get('iso');
    if (!isoValue) {
        handleError(res, 400, 'ISO parameter is missing');
        return;
    }
    const unixTime = (new Date(isoValue)).getTime();
    sendJSONResponse(res, { unixtime: unixTime });
}
function handleError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
}
function sendJSONResponse(res, data) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
}
(0, exports.httpJsonApiServer)(PORT);
//# sourceMappingURL=http-json-api-server.js.map
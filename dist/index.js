"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryption = exports.Middleware = exports.unixTime = exports.response = void 0;
const encryption_1 = __importDefault(require("./encryption"));
exports.Encryption = encryption_1.default;
const middleware_1 = __importDefault(require("./middleware/middleware"));
exports.Middleware = middleware_1.default;
const response = (res, status, message, data) => {
    return res.status(200).json({
        status: status,
        message: message,
        data: data
    });
};
exports.response = response;
const unixTime = (timezone) => {
    const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
    return utcTime + timezone * 60 * 60 * 1000;
};
exports.unixTime = unixTime;
//# sourceMappingURL=index.js.map
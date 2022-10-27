"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unixTime = exports.response = void 0;
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
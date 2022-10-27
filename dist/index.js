"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecret = exports.jsonValid = exports.unixTime = exports.response = void 0;
const express_1 = require("express");
const encryption_1 = require("./encryption");
Object.defineProperty(exports, "createSecret", { enumerable: true, get: function () { return encryption_1.createSecret; } });
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
function jsonValid() {
    return (req, res, next) => {
        (0, express_1.json)()(req, res, (err) => {
            if (err)
                return response(res, 100, "資料錯誤");
            return next();
        });
    };
}
exports.jsonValid = jsonValid;
//# sourceMappingURL=index.js.map
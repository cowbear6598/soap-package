"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const send_1 = __importDefault(require("../send"));
class Middleware {
    constructor() {
        this.jsonValid = () => {
            return (req, res, next) => {
                (0, express_1.json)()(req, res, (err) => {
                    if (err)
                        return send_1.default.bad(res);
                    return next();
                });
            };
        };
        this.recordRequest = (logger) => {
            return (req, res, next) => {
                logger.log(`${req.ip} - ${req.url}`);
                next();
            };
        };
    }
}
exports.default = new Middleware();
//# sourceMappingURL=index.js.map
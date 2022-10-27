"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../index");
class Middleware {
    jsonValid() {
        return (req, res, next) => {
            (0, express_1.json)()(req, res, (err) => {
                if (err)
                    return (0, index_1.response)(res, 100, "資料錯誤");
                return next();
            });
        };
    }
    ;
    recordRequest(logger) {
        return (req, res, next) => {
            logger.debug(`${req.ip} - ${req.url}`);
            next();
        };
    }
}
exports.default = new Middleware();
//# sourceMappingURL=middleware.js.map
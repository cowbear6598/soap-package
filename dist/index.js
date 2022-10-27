"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
function response(res, status, message, data) {
    return res.status(200).json({
        status: status,
        message: message,
        data: data
    });
}
exports.response = response;
//# sourceMappingURL=index.js.map
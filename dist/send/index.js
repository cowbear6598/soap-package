"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Send {
    constructor() {
        this.normal = (res, status, message, data) => {
            return res.status(200).json({
                status: status,
                message: message,
                data: data
            });
        };
        this.bad = (res, message = "請求失敗，請確認請求格式是否正確") => {
            return res.status(400).json({
                status: 400,
                message: message
            });
        };
        this.unauth = (res, message = "驗證失敗，您可能閒置過長時間或是從其他地方登入") => {
            return res.status(401).json({
                status: 401,
                message: message
            });
        };
        this.many = (res, message = "請求太頻繁，請稍候再試") => {
            return res.status(429).json({
                status: 429,
                message: message
            });
        };
        this.error = (message) => {
            throw Error(message);
        };
    }
}
exports.default = new Send();
//# sourceMappingURL=index.js.map
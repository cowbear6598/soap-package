"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.createSecret = void 0;
const crypto_1 = require("crypto");
const createSecret = () => {
    return (0, crypto_1.randomBytes)(25).toString('hex').toUpperCase();
};
exports.createSecret = createSecret;
const verify = (plain_text, secret, encrypted) => {
    const correctSign = (0, crypto_1.createHmac)('sha256', secret).update(plain_text).digest().toString('hex');
    return correctSign == encrypted;
};
exports.verify = verify;
//# sourceMappingURL=index.js.map
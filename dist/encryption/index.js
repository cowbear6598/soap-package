"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Encryption {
    createSecret() {
        return (0, crypto_1.randomBytes)(25).toString('hex').toUpperCase();
    }
    ;
    Hmac(plain_text, secret) {
        return (0, crypto_1.createHmac)('sha256', secret).update(plain_text).digest().toString('hex');
    }
    verify(plain_text, secret, encrypted) {
        return this.Hmac(plain_text, secret) == encrypted;
    }
}
exports.default = new Encryption();
//# sourceMappingURL=index.js.map
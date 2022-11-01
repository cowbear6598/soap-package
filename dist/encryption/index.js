"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
class Encryption {
    aesEncrypt(plainText, key) {
        const iv = Buffer.from('');
        const bufferPlainText = Buffer.from(plainText, 'utf-8');
        const cipher = (0, crypto_1.createCipheriv)('aes-256-ecb', key, iv);
        const encrypted = Buffer.concat([cipher.update(bufferPlainText), cipher.final()]);
        return encrypted.toString('hex');
    }
    aesDecrypt(cipherText, key) {
        const iv = Buffer.from('');
        const bufferCipherText = Buffer.from(cipherText, "hex");
        const cipher = (0, crypto_1.createDecipheriv)("aes-256-ecb", key, iv);
        return Buffer.concat([cipher.update(bufferCipherText), cipher.final()]).toString();
    }
    createSecret(key) {
        const token = (0, crypto_1.randomBytes)(25).toString('hex').toUpperCase();
        const encryptedToken = this.aesEncrypt(token, key);
        return {
            'token': token,
            'encrypted': encryptedToken
        };
    }
    Hmac(plain_text, secret) {
        return (0, crypto_1.createHmac)('sha256', secret).update(plain_text).digest().toString('hex');
    }
}
exports.default = new Encryption();
//# sourceMappingURL=index.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const base64url_1 = __importDefault(require("base64url"));
class Encryption {
    constructor() {
        this.aesEncrypt = (plainText, key) => {
            const iv = Buffer.from('');
            const bufferPlainText = Buffer.from(plainText, 'utf-8');
            const cipher = (0, crypto_1.createCipheriv)('aes-256-ecb', key, iv);
            const encrypted = Buffer.concat([cipher.update(bufferPlainText), cipher.final()]);
            return encrypted.toString('hex');
        };
        this.aesDecrypt = (cipherText, key) => {
            const iv = Buffer.from('');
            const bufferCipherText = Buffer.from(cipherText, "hex");
            const cipher = (0, crypto_1.createDecipheriv)("aes-256-ecb", key, iv);
            return Buffer.concat([cipher.update(bufferCipherText), cipher.final()]).toString();
        };
        this.createRandom = (size = 25) => {
            return (0, crypto_1.randomBytes)(size).toString('hex').toUpperCase();
        };
        this.Hmac = (plain_text, secret) => {
            return (0, crypto_1.createHmac)('sha256', secret).update(plain_text).digest().toString('hex');
        };
        this.createJWT = (iss, iat, exp, sub, key) => {
            const header = {
                alg: "HS256",
                typ: "JWT"
            };
            const headerHash = (0, base64url_1.default)(JSON.stringify(header));
            const payload = {
                iss: iss,
                iat: iat,
                exp: exp,
                sub: sub
            };
            const payloadHash = (0, base64url_1.default)(JSON.stringify(payload));
            const signature = base64url_1.default.fromBase64((0, crypto_1.createHmac)('SHA256', key)
                .update(headerHash + "." + payloadHash)
                .digest('base64'));
            return headerHash + "." + payloadHash + "." + signature;
        };
    }
}
exports.default = new Encryption();
//# sourceMappingURL=index.js.map
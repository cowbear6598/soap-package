declare class Encryption {
    aesEncrypt(plainText: string, key: string): string;
    aesDecrypt(cipherText: string, key: string): string;
    createSecret(key: string): {
        token: string;
        encrypted: string;
    };
    Hmac(plain_text: string, secret: string): string;
}
declare const _default: Encryption;
export default _default;
//# sourceMappingURL=index.d.ts.map
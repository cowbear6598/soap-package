/// <reference types="node" />
declare class Encryption {
    aesEncrypt(plainText: string, key: string): string;
    aesDecrypt(cipherText: string, key: string): Buffer;
    createSecret(key: string): {
        token: string;
        encrypted: string;
    };
    Hmac(plain_text: string, secret: string): string;
    verify(plain_text: string, secret: string, encrypted: string): boolean;
}
declare const _default: Encryption;
export default _default;
//# sourceMappingURL=index.d.ts.map
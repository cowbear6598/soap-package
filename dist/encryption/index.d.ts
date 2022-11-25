declare class Encryption {
    aesEncrypt(plainText: string, key: string): string;
    aesDecrypt(cipherText: string, key: string): string;
    createRandom(size?: number): string;
    Hmac(plain_text: string, secret: string): string;
    createJWT(iss: any, iat: number, exp: number, sub: string, key: string): string;
}
declare const _default: Encryption;
export default _default;
//# sourceMappingURL=index.d.ts.map
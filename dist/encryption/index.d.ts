declare class Encryption {
    createSecret(): string;
    Hmac(plain_text: string, secret: string): string;
    verify(plain_text: string, secret: string, encrypted: string): boolean;
}
declare const _default: Encryption;
export default _default;
//# sourceMappingURL=index.d.ts.map
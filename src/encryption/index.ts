import {createCipheriv, createDecipheriv, createHmac, randomBytes} from "crypto";
import e from "express";

class Encryption {
    aesEncrypt(plainText: string, key: string) {
        const iv = Buffer.from('');
        const bufferPlainText = Buffer.from(plainText, 'utf-8');

        const cipher = createCipheriv('aes-256-ecb', key, iv);
        const encrypted = Buffer.concat([cipher.update(bufferPlainText), cipher.final()]);

        return encrypted.toString('hex');
    }

    aesDecrypt(cipherText: string, key: string) {
        const iv = Buffer.from('');
        const bufferCipherText = Buffer.from(cipherText, "hex");

        const cipher = createDecipheriv("aes-256-ecb", key, iv);
        return Buffer.concat([cipher.update(bufferCipherText), cipher.final()]).toString();
    }

    createSecret(key: string) {
        const token = randomBytes(25).toString('hex').toUpperCase();
        const encryptedToken = this.aesEncrypt(token, key);

        return {
            'token': token,
            'encrypted': encryptedToken
        };
    }

    Hmac(plain_text: string, secret: string) {
        return createHmac('sha256', secret).update(plain_text).digest().toString('hex');
    }

    verify(plain_text: string, secret: string, encrypted: string) {
        return this.Hmac(plain_text, secret) == encrypted;
    }
}

export default new Encryption();
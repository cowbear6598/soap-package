import {createCipheriv, createDecipheriv, createHmac, randomBytes} from "crypto";

class Encryption {
    aesEncrypt(plainText: string, key: string) {
        const iv = Buffer.from('');
        const bufferKey = Buffer.from(key, 'hex');
        const bufferPlainText = Buffer.from(plainText, 'utf-8');

        const cipher = createCipheriv('aes-256-ecb', bufferKey, iv);
        const encrypted = Buffer.concat([cipher.update(bufferPlainText), cipher.final()]);

        return encrypted.toString('hex');
    }

    aesDecrypt(cipherText: string, key: string) {
        const iv = Buffer.from('');
        const bufferKey = Buffer.from(key, 'hex');
        const bufferCipherText = Buffer.from(cipherText, "utf-8");

        const cipher = createDecipheriv("aes-256-ecb", bufferKey, iv);
        const decrypted = Buffer.concat([cipher.update(bufferCipherText), cipher.final()]);

        return decrypted.toString('hex');
    }

    createSecret(key: string) {
        const token = randomBytes(25).toString('hex').toUpperCase();
        return this.aesEncrypt(token, key);
    }

    Hmac(plain_text: string, secret: string) {
        return createHmac('sha256', secret).update(plain_text).digest().toString('hex');
    }

    verify(plain_text: string, secret: string, encrypted: string) {
        return this.Hmac(plain_text, secret) == encrypted;
    }
}

export default new Encryption();
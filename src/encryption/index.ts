import {createCipheriv, createDecipheriv, createHmac, randomBytes} from "crypto";

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

    createSecret(key: string, size: number = 25) {
        const token = randomBytes(size).toString('hex');
        const encryptedToken = this.aesEncrypt(token, key);

        return {
            'token': token,
            'encrypted': encryptedToken
        };
    }

    createRandom(size: number = 25) {
        return randomBytes(size).toString('hex');
    }

    Hmac(plain_text: string, secret: string) {
        return createHmac('sha256', secret).update(plain_text).digest().toString('hex');
    }
}

export default new Encryption();
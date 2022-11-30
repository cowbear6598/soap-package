import {createCipheriv, createDecipheriv, createHmac, randomBytes} from "crypto";
import base64url from "base64url";

class Encryption {
    aesEncrypt = (plainText: string, key: string) => {
        const iv = Buffer.from('');
        const bufferPlainText = Buffer.from(plainText, 'utf-8');

        const cipher = createCipheriv('aes-256-ecb', key, iv);
        const encrypted = Buffer.concat([cipher.update(bufferPlainText), cipher.final()]);

        return encrypted.toString('hex');
    }

    aesDecrypt = (cipherText: string, key: string) => {
        const iv = Buffer.from('');
        const bufferCipherText = Buffer.from(cipherText, "hex");

        const cipher = createDecipheriv("aes-256-ecb", key, iv);
        return Buffer.concat([cipher.update(bufferCipherText), cipher.final()]).toString();
    }

    createRandom = (size: number = 25) => {
        return randomBytes(size).toString('hex').toUpperCase();
    }

    Hmac = (plain_text: string, secret: string) => {
        return createHmac('sha256', secret).update(plain_text).digest().toString('hex');
    }

    createJWT = (iss: any, iat: number, exp: number, sub: string, key: string) => {
        const header = {
            alg: "HS256",
            typ: "JWT"
        }
        const headerHash = base64url(JSON.stringify(header));

        const payload = {
            iss: iss,
            iat: iat,
            exp: exp,
            sub: sub
        }
        const payloadHash = base64url(JSON.stringify(payload));

        const signature = base64url.fromBase64(createHmac('SHA256', key)
            .update(headerHash + "." + payloadHash)
            .digest('base64'));

        return headerHash + "." + payloadHash + "." + signature;
    }
}

export default new Encryption();
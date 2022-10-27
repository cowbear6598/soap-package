import {randomBytes, createHmac} from "crypto";

class Encryption {
    createSecret() {
        return randomBytes(25).toString('hex').toUpperCase();
    };

    Hmac(plain_text: string, secret: string) {
        return createHmac('sha256', secret).update(plain_text).digest().toString('hex');
    }

    verify(plain_text: string, secret: string, encrypted: string) {
        return this.Hmac(plain_text, secret) == encrypted;
    }
}

export default new Encryption();
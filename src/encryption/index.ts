import {randomBytes, createHmac} from "crypto";

class Encryption {
    createSecret() {
        return randomBytes(25).toString('hex').toUpperCase();
    };

    verify(plain_text: string, secret: string, encrypted: string) {
        const correctSign = createHmac('sha256', secret).update(plain_text).digest().toString('hex');
        return correctSign == encrypted;
    }
}

export default new Encryption();
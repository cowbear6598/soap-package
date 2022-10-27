import {randomBytes, createHmac} from "crypto";

const createSecret = () => {
    return randomBytes(25).toString('hex').toUpperCase();
}

const verify = (plain_text: string, secret: string, encrypted: string) => {
    const correctSign = createHmac('sha256', secret).update(plain_text).digest().toString('hex');

    return correctSign == encrypted;
}

export {createSecret, verify};
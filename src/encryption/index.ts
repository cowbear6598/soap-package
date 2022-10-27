import {randomBytes, createHmac} from "crypto";

const createSecret = () => {
    return randomBytes(25).toString('hex').toUpperCase();
}

export {createSecret};
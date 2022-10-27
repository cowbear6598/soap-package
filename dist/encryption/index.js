"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSecret = void 0;
const crypto_1 = require("crypto");
const createSecret = () => {
    return (0, crypto_1.randomBytes)(25).toString('hex').toUpperCase();
};
exports.createSecret = createSecret;
//# sourceMappingURL=index.js.map
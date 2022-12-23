"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Moment {
    constructor() {
        this.unixTime = (timezone) => {
            const utcTime = Math.trunc(new Date().getTime() / 1000);
            return utcTime + timezone * 60 * 60;
        };
        this.unixTimeMilliSecond = (timezone) => {
            const utcTime = new Date().getTime();
            return utcTime + timezone * 60 * 60 * 1000;
        };
    }
}
exports.default = new Moment();
//# sourceMappingURL=index.js.map
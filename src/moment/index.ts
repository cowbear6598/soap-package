class Moment {
    unixTime = (timezone: number) => {
        const utcTime = Math.trunc(new Date().getTime() / 1000) + new Date().getTimezoneOffset() * 60; // timezone 0
        return utcTime + timezone * 60 * 60;
    }

    unixTimeMilliSecond = (timezone: number) => {
        const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000; // timezone 0
        return utcTime + timezone * 60 * 60 * 1000;
    }
}

export default new Moment();
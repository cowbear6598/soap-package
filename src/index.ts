import {Response} from "express";

const response = (res: Response, status: number, message: string, data?: any) => {
    return res.status(200).json({
        status: status,
        message: message,
        data: data
    });
}

const unixTime = (timezone: number) => {
    const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000; // timezone 0
    return utcTime + timezone * 60 * 60 * 1000;
}

export {response, unixTime}
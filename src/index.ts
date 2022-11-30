import {Response} from "express";
import Encryption from "./encryption";
import Middleware from "./middleware/middleware";

const response = (res: Response, status: number, message: string, data?: any, htmlStatus: number = 200) => {
    return res.status(htmlStatus).json({
        status: status,
        message: message,
        data: data
    });
}

const unixTime = (timezone: number) => {
    const utcTime = Math.trunc(new Date().getTime() / 1000) + new Date().getTimezoneOffset() * 60; // timezone 0
    return utcTime + timezone * 60 * 60;
}

const unixTimeMilliSecond = (timezone: number) => {
    const utcTime = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000; // timezone 0
    return utcTime + timezone * 60 * 60 * 1000;
}


export {response, unixTime, unixTimeMilliSecond, Middleware, Encryption}
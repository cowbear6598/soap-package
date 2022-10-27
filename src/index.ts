import {NextFunction, Request, Response, json} from "express";
import {createSecret} from "./encryption";

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

function jsonValid() {
    return (req: Request, res: Response, next: NextFunction) => {
        json()(req, res, (err) => {
            if (err)
                return response(res, 100, "資料錯誤");

            return next();
        })
    }
}


export {response, unixTime, jsonValid, createSecret}
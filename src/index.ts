import {Response} from "express";

export function response(res: Response, status: number, message: string, data?: any) {
    return res.status(200).json({
        status: status,
        message: message,
        data: data
    });
}
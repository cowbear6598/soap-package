import {Response} from "express";

class Send {
    normal = (res: Response, status: number, message: string, data?: any) => {
        return res.status(200).json({
            status: status,
            message: message,
            data: data
        });
    }

    bad = (res: Response, message: string = "請求失敗，請確認請求格式是否正確") => {
        return res.status(400).json({
            status: 400,
            message: message
        });
    }

    unauth = (res: Response, message: string = "驗證失敗，您可能閒置過長時間或是從其他地方登入") => {
        return res.status(401).json({
            status: 401,
            message: message
        });
    }

    many = (res: Response, message: string = "請求太頻繁，請稍候再試") => {
        return res.status(429).json({
            status: 429,
            message: message
        });
    }

    error = (message: string) => {
        throw Error(message);
    }
}

export default new Send();
import {json, NextFunction, Request, Response} from "express";
import {response} from "../index";
import {Logger} from "log4js";

class Middleware {
    jsonValid() {
        return (req: Request, res: Response, next: NextFunction) => {
            json()(req, res, (err) => {
                if (err)
                    return response(res, 100, "資料錯誤");

                return next();
            })
        }
    };
    recordRequest(logger: Logger) {
        return (req: Request, res: Response, next: NextFunction) => {
            logger.debug(`${req.ip} - ${req.url}`);
            next();
        }
    }
}

export default new Middleware();
import {json, NextFunction, Request, Response} from "express";
import Send from "../send";
import {Logger} from "log4js";

class Middleware {
    jsonValid = () => {
        return (req: Request, res: Response, next: NextFunction) => {
            json()(req, res, (err) => {
                if (err)
                    return Send.bad(res);

                return next();
            })
        }
    };
    recordRequest = (logger: Logger) => {
        return (req: Request, res: Response, next: NextFunction) => {
            logger.log(`${req.ip} - ${req.url}`);
            next();
        }
    }
}

export default new Middleware();
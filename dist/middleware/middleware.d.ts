import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
export default class Middleware {
    jsonValid(): (req: Request, res: Response, next: NextFunction) => void;
    recordRequest(logger: Logger): (req: Request, res: Response, next: NextFunction) => void;
}
//# sourceMappingURL=middleware.d.ts.map
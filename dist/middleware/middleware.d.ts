import { NextFunction, Request, Response } from "express";
import { Logger } from "log4js";
declare class Middleware {
    jsonValid(): (req: Request, res: Response, next: NextFunction) => void;
    recordRequest(logger: Logger): (req: Request, res: Response, next: NextFunction) => void;
}
declare const _default: Middleware;
export default _default;
//# sourceMappingURL=middleware.d.ts.map
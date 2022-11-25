import { Response } from "express";
import Encryption from "./encryption";
import Middleware from "./middleware/middleware";
declare const response: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
declare const unixTimeMilliSecond: (timezone: number) => number;
export { response, unixTimeMilliSecond, Middleware, Encryption };
//# sourceMappingURL=index.d.ts.map
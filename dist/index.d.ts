import { Response } from "express";
import { createSecret } from "./encryption";
import Middleware from "./middleware/middleware";
declare const response: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
declare const unixTime: (timezone: number) => number;
export { response, unixTime, Middleware, createSecret };
//# sourceMappingURL=index.d.ts.map
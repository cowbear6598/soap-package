import { Response } from "express";
import encryption from "./encryption";
import middleware from "./middleware/middleware";
declare const response: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
declare const unixTime: (timezone: number) => number;
export { response, unixTime, middleware, encryption };
//# sourceMappingURL=index.d.ts.map
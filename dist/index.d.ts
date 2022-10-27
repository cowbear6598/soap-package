import { NextFunction, Request, Response } from "express";
import { createSecret } from "./encryption";
declare const response: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
declare const unixTime: (timezone: number) => number;
declare function jsonValid(): (req: Request, res: Response, next: NextFunction) => void;
export { response, unixTime, jsonValid, createSecret };
//# sourceMappingURL=index.d.ts.map
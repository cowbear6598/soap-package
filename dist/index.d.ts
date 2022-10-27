import { NextFunction, Request, Response } from "express";
declare const response: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
declare const unixTime: (timezone: number) => number;
declare const jsonValid: () => (req: Request, res: Response, next: NextFunction) => void;
export { response, unixTime, jsonValid };
//# sourceMappingURL=index.d.ts.map
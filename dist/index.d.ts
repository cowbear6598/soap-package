import { Response } from "express";
declare const response: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
declare const unixTime: (timezone: number) => number;
export { response, unixTime };
//# sourceMappingURL=index.d.ts.map
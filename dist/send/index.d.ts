import { Response } from "express";
declare class Send {
    normal: (res: Response, status: number, message: string, data?: any) => Response<any, Record<string, any>>;
    bad: (res: Response, message?: string) => Response<any, Record<string, any>>;
    unauth: (res: Response, message?: string) => Response<any, Record<string, any>>;
    many: (res: Response, message?: string) => Response<any, Record<string, any>>;
    error: (message: string) => never;
}
declare const _default: Send;
export default _default;
//# sourceMappingURL=index.d.ts.map
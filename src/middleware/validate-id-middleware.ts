import { Request, Response, NextFunction } from "express";

export function validateNumericId(paramName: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const id = req.params[paramName];
        if (!/^\d+$/.test(id)) {
            res.status(400).json({
                error: `Parameter "${paramName}" harus berupa angka positif.`,
            });
            return;
        }
        next();
    };
}

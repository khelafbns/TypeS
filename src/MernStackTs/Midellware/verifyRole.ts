import { Request, Response, NextFunction } from "express";

const verifyRole = (role: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== role)
      return res.status(403).json({ status: "fail", message: "Not allowed" });

    next();
  };
};

export default verifyRole;

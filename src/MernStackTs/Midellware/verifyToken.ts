import { Request, Response, NextFunction } from "express";

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // fake security for example
  req.user = { id: "123", role: "admin" };
  next();
};

export default verifyToken;

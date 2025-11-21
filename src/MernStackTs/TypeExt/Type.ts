import "express";

declare module "express" {
  export interface Request {
    dto?: any;
    user?: { id: string; role: string };
  }
}

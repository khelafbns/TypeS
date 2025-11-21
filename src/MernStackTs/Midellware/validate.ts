import { Request, Response, NextFunction } from "express";
import Joi from "joi";

const validateDto = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { value, error } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error)
      return res.status(400).json({
        status: "fail",
        errors: error.details.map((d) => d.message),
      });

    req.dto = value; // attach validated DTO
    next();
  };
};

export default validateDto;

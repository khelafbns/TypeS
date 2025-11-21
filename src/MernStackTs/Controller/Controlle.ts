import { Request, Response } from "express";
import { createPromoCode, findExistingCode } from "../services/promoCode.service";
import catchAsync from "../utils/catchAsync";

export const addPromoCode = catchAsync(async (req: Request, res: Response) => {
  await findExistingCode(req.dto.CodeP);

  const newPromo = await createPromoCode(req.dto);

  res.status(201).json({
    status: "success",
    data: { promoCode: newPromo },
  });
});

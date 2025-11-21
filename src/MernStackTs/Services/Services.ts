
import { PromoCode } from "../models/promoCode.model";
import { ConflictError } from "../helpers/ConflictError";

export const findExistingCode = async (CodeP: string) => {
  const exists = await PromoCode.findOne({ CodeP });
  if (exists) throw new ConflictError("Code Promo already exists");
};

export const createPromoCode = async (data: any) => {
  const newPromo = new PromoCode(data);
  await newPromo.save();
  return newPromo;
};

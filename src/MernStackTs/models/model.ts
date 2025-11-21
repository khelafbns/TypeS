import mongoose, { Document, Schema } from "mongoose";

export interface IPromoCode extends Document {
  CodeP: string;
  discount: number;
  isActive: boolean;
  expiresAt: Date | null;
}

const PromoCodeSchema = new Schema<IPromoCode>({
  CodeP: { type: String, required: true, unique: true },
  discount: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
  expiresAt: { type: Date, default: null },
}, { timestamps: true });

export const PromoCode = mongoose.model<IPromoCode>("PromoCode", PromoCodeSchema);

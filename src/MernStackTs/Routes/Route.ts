import { Router } from "express";
import { addPromoCode } from "../controllers/promoCode.controller";
import validateDto from "../middlewares/validateDto";
import { PromoCodeDto } from "../dto/promoCode.dto";
import verifyToken from "../middlewares/verifyToken";
import verifyRole from "../middlewares/verifyRole";

const router = Router();

router.post(
  "/add",
  verifyToken,
  verifyRole("admin"),
  validateDto(PromoCodeDto),
  addPromoCode
);

export default router;

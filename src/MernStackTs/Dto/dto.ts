import Joi from "joi";

export const PromoCodeDto = Joi.object({
  CodeP: Joi.string()
    .trim()
    .length(6)
    .pattern(/^[A-Z]{3}[0-9]{3}$/)
    .required(),

  discount: Joi.number().min(1).max(100).required(),

  isActive: Joi.boolean().required(),

  expiresAt: Joi.date()
    .greater("now")
    .when("isActive", {
      is: true,
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
});

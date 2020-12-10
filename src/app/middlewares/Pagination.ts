import Joi from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

const numberSchema = Joi.number().min(1);
const orderSchema = Joi.string().valid('ASC', 'DESC');

export default async function (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<any> {
  const { page = 1, amount = 10, order } = request.query;

  const pageValidation = numberSchema.validate(page);
  response.locals.page = pageValidation.error ? 1 : pageValidation.value;

  const amountValidation = numberSchema.validate(amount);
  response.locals.amount = amountValidation.error ? 10 : amountValidation.value;

  const orderValidation = orderSchema.validate(order);
  response.locals.order = orderValidation.error ? 'DESC' : orderValidation.value;

  return next();
}

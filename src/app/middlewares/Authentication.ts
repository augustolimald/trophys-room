import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../../lib/Token';
import { User } from '../entities';

export default async function (
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<any> {
  /**
   * Header verification
   */
  const header = request.headers.authorization;
  if (!header) {
    return response.status(401).json({ error: 'Informe um token' });
  }

  const [, token] = header.split(' ');
  if (!token) {
    return response.status(401).json({ error: 'Informe um token no formato bearer' });
  }

  /**
   * Validating token
   */
  const { error, decoded } = await validateToken(token);
  if (error || !decoded.id) {
    return response.status(401).json({ error: 'Informe um token válido' });
  }

  /**
   * Search User
   */
  const user = await User.findOne({
    where: { id: decoded.id, token },
    relations: ['wishlist', 'playedList'],
  });

  if (!user) {
    return response.status(404).json({ error: 'Usuário não encontrado' });
  }

  /**
   * Passing parameters to next function
   */
  response.locals.user = user;
  response.locals.token = token;
  return next();
}

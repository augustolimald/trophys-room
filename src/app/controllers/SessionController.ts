import { Request, Response } from 'express';
import { User } from '../entities';
import Controller from './Controller';
import { generateToken } from '../../lib/Token';

class SessionController implements Controller {
  async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return response.status(404).json({ error: 'Usuário não existe' });
    }

    if (!user.comparePassword(password)) {
      return response.status(404).json({ error: 'Senha inválida' });
    }

    user.token = generateToken(user.id);
    await user.save();

    return response.status(200).json({
      user: user.filterFields(),
      token: user.token,
    });
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;

    user.token = null;
    await user.save();

    return response.status(204).json();
  }
}

export default new SessionController();

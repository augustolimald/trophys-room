import { Request, Response } from 'express';
import { Not } from 'typeorm';
import { User } from '../entities';

class UserController {
  async index(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;

    if (!user.admin) {
      return response.status(403).json({ error: 'Sem permissão' });
    }

    const users = await User.find();
    return response.status(200).json(users.map(user => user.filterFields()));
  }

  async store(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) {
      return response.status(409).json({ error: 'Usuário já existe' });
    }

    const user = User.create({ name, email, password, profile_picture: request.file.filename });
    await user.save();

    return response.status(200).json(user.filterFields());
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_user } = request.params;

    if (!user.admin && user.id !== parseInt(id_user)) {
      return response.status(403).json({ error: 'Sem permissão' });
    }

    const userToFind = await User.findOne({ where: { id: id_user } });
    if (!userToFind) {
      return response.status(404).json({ error: 'Usuário não existe' });
    }

    return response.status(200).json(userToFind.filterFields());
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_user } = request.params;
    const { name, email, password } = request.body;

    if (user.id !== parseInt(id_user)) {
      return response.status(403).json({ error: 'Sem permissão' });
    }

    const emailExists = await User.findOne({ where: { id: Not(user.id), email } });
    if (emailExists) {
      return response.status(409).json({ error: 'Usuário já existe' });
    }

    Object.assign(user, { name, email, password });
    user.token = null;
    await user.save();

    return response.status(200).json(user.filterFields());
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_user } = request.params;

    if (user.id !== parseInt(id_user)) {
      return response.status(403).json({ error: 'Sem permissão' });
    }

    await user.remove();

    return response.status(204).json();
  }

  async changeAdmin(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { admin } = request.body;
    const { id_user } = request.params;

    if (!user.admin) {
      return response.status(403).json({ error: 'Sem permissão' });
    }

    const userToFind = await User.findOne({ where: { id: id_user } });
    if (!userToFind) {
      return response.status(404).json({ error: 'Usuário não existe' });
    }

    userToFind.admin = admin;
    await userToFind.save();

    return response.status(200).json(userToFind.filterFields());
  }
}

export default new UserController();

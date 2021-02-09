import cloudinary from 'cloudinary';
import { Request, Response } from 'express';
import { Not } from 'typeorm';
import { User } from '../entities';
import Controller from './Controller';

class UserController implements Controller {
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

    const user = User.create({
      name,
      email,
      password,
      profile_picture: eval('request.file.public_id'),
    });

    await user.save();

    return response.status(200).json(user.filterFields());
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

    if (!user.admin && user.id !== parseInt(id_user)) {
      return response.status(403).json({ error: 'Sem permissão' });
    }

    const userToRemove = await User.findOne({ where: { id: id_user } });
    if (!userToRemove) {
      return response.status(404).json({ error: 'Usuário não existe' });
    }

    if (userToRemove.profile_picture) {
      await cloudinary.v2.uploader.destroy(user.profile_picture);
    }

    await userToRemove.remove();

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

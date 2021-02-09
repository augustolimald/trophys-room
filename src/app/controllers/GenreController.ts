import { Request, Response } from 'express';
import { Genre } from '../entities';
import Controller from './Controller';

class GenreController implements Controller {
  async index(request: Request, response: Response): Promise<Response> {
    const genres = await Genre.find();
    return response.status(200).json(genres);
  }
}

export default new GenreController();

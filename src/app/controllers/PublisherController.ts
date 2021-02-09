import { Request, Response } from 'express';
import { Publisher } from '../entities';
import Controller from './Controller';

class PublisherController implements Controller {
  async index(request: Request, response: Response): Promise<Response> {
    const publishers = await Publisher.find();
    return response.status(200).json(publishers);
  }
}

export default new PublisherController();

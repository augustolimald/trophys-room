import { Request, Response } from 'express';

class PublisherController {
  async index(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new PublisherController();

import { Request, Response } from 'express';

class GenreController {
  async index(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new GenreController();

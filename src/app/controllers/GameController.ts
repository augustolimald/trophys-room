import { Request, Response } from 'express';

class GameController {
  async index(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async store(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async show(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async update(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async remove(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new GameController();

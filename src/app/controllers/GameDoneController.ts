import { Request, Response } from 'express';

class GameDoneController {
  async index(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async store(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async remove(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new GameDoneController();

import { Request, Response } from 'express';

class SessionController {
  async store(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async remove(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new SessionController();

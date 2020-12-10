import { Request, Response } from 'express';
import env from '../../env';

class UserController {
  async index(request: Request, response: Response): Promise<Response> {
    return response;
  }

  async store(request: Request, response: Response): Promise<Response> {
    // request.file.filename
    return response
      .status(200)
      .json(`${env.get('URL')}/api/files/${eval('request.file.filename')}`);
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

  async changeAdmin(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new UserController();

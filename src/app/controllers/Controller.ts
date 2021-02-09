import { Request, Response } from 'express';

interface Controller {
  index?(request: Request, response: Response): Promise<Response>;
  show?(request: Request, response: Response): Promise<Response>;
  store?(request: Request, response: Response): Promise<Response>;
  update?(request: Request, response: Response): Promise<Response>;
  remove?(request: Request, response: Response): Promise<Response>;
}

export default Controller;

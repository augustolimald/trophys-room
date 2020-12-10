import { Request, Response } from 'express';

class ReviewController {
  async store(request: Request, response: Response): Promise<Response> {
    return response;
  }
}

export default new ReviewController();

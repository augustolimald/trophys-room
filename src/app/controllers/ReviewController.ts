import { Request, Response } from 'express';
import { Game, Review } from '../entities';

class ReviewController {
  async store(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_game } = request.params;
    const { score, comment } = request.body;

    const game = await Game.findOne({ where: { id: id_game } });
    if (!game) {
      return response.status(404).json({ error: 'Jogo não foi encontrado' });
    }

    const gameIndex = user.playedList.findIndex(game => game.id === parseInt(id_game));
    if (gameIndex === -1) {
      return response.status(404).json({ error: 'Jogo não foi jogado' });
    }

    const review = Review.create({ user, game, score, comment });
    await review.save();

    return response.status(200).json(review.filterFields());
  }
}

export default new ReviewController();

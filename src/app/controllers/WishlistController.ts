import { Request, Response } from 'express';
import { Game } from '../entities';

class WishlistController {
  async index(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    return response.status(200).json(user.wishlist);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_game } = request.body;

    const game = await Game.findOne({ where: { id: id_game } });
    if (!game) {
      return response.status(404).json({ error: 'Jogo não encontrado' });
    }

    user.wishlist.push(game);
    await user.save();

    return response.status(200).json(game);
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_game } = request.body;

    const gameIndex = await user.wishlist.findIndex(game => game.id === parseInt(id_game));
    if (gameIndex === -1) {
      return response.status(404).json({ error: 'Jogo não encontrado' });
    }

    user.wishlist.splice(gameIndex, 1);
    await user.save();

    return response.status(204).json();
  }
}

export default new WishlistController();

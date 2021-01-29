import { Request, Response } from 'express';
import { FindManyOptions } from 'typeorm';
import { Game, Genre, Publisher } from '../entities';

class GameController {
  async index(request: Request, response: Response): Promise<Response> {
    const { id_genre, id_publisher } = request.query;

    const options: FindManyOptions<Game> = {};
    if (id_genre) {
      options['genre'] = { id: id_genre };
    }

    if (id_publisher) {
      options['publisher'] = { id: id_publisher };
    }

    const games = await Game.find(options);
    return response.status(200).json(games);
  }

  async store(request: Request, response: Response): Promise<Response> {
    const {
      id_publisher,
      id_genre,
      title,
      description,
      picture,
      release_date,
      metacritic_score,
    } = request.body;

    const genre = await Genre.findOne({ where: { id: id_genre } });
    if (!genre) {
      return response.status(404).json({ error: 'Gênero não existe' });
    }

    const publisher = await Publisher.findOne({ where: { id: id_publisher } });
    if (!publisher) {
      return response.status(404).json({ error: 'Desenvolvedora não existe' });
    }

    const game = await Game.create({
      genre,
      publisher,
      title,
      description,
      picture,
      release_date: new Date(release_date),
      metacritic_score,
    });
    await game.save();

    return response.status(200).json(game);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id_game } = request.params;

    const game = await Game.findOne({ where: { id: id_game }, relations: ['reviews'] });
    if (!game) {
      return response.status(404).json({ error: 'Jogo não existe' });
    }

    return response.status(200).json({
      ...game,
      average_score:
        game.reviews.reduce((sum, review) => sum + review.score, 0) / (game.reviews.length || 1),
    });
  }

  async update(request: Request, response: Response): Promise<Response> {
    const {
      id_publisher,
      id_genre,
      title,
      description,
      picture,
      release_date,
      metacritic_score,
    } = request.body;
    const { id_game } = request.params;

    const game = await Game.findOne({ where: { id: id_game } });
    if (!game) {
      return response.status(404).json({ error: 'Jogo não existe' });
    }

    const genre = await Genre.findOne({ where: { id: id_genre } });
    if (!genre) {
      return response.status(404).json({ error: 'Gênero não existe' });
    }

    const publisher = await Publisher.findOne({ where: { id: id_publisher } });
    if (!publisher) {
      return response.status(404).json({ error: 'Desenvolvedora não existe' });
    }

    Object.assign(game, {
      genre,
      publisher,
      title,
      description,
      picture,
      release_date: new Date(release_date),
      metacritic_score,
    });
    await game.save();

    return response.status(200).json(game);
  }

  async remove(request: Request, response: Response): Promise<Response> {
    const { id_game } = request.params;

    const game = await Game.findOne({ where: { id: id_game } });
    if (!game) {
      return response.status(404).json({ error: 'Jogo não existe' });
    }

    await game.remove();
    return response.status(204).json();
  }
}

export default new GameController();

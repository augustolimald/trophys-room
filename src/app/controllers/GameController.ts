import { Request, Response } from 'express';
import { FindManyOptions, In } from 'typeorm';
import { Game, Genre, Publisher } from '../entities';
import Controller from './Controller';

class GameController implements Controller {
  async index(request: Request, response: Response): Promise<Response> {
    const { user } = response.locals;
    const { id_genre, id_publisher, wishlist, played } = request.query;

    const options: FindManyOptions<Game> = {
      where: {},
      relations: ['reviews'],
      order: { title: 'ASC' },
    };

    if (id_genre) {
      options.where['genre'] = { id: id_genre };
    }

    if (id_publisher) {
      options.where['publisher'] = { id: id_publisher };
    }

    if (wishlist === 'true') {
      const wishIds = user.wishlist.map(game => game.id);
      if (wishIds.length === 0) {
        wishIds.push(null);
      }

      options.where['id'] = In(wishIds);
    }

    if (played === 'true') {
      const playedIds = user.playedList.map(game => game.id);
      if (playedIds.length === 0) {
        playedIds.push(null);
      }

      options.where['id'] = In(playedIds);
    }

    const games = await Game.find(options);
    return response.status(200).json(
      games.map(game => ({
        ...game,
        wishlist: !!user.wishlist.find(gameInTheList => game.id === gameInTheList.id),
        played: !!user.playedList.find(gameInTheList => game.id === gameInTheList.id),
        reviewed: !!user.reviews.find(review => game.id === review.game.id),
        average_score: game.getAverageScore(),
      })),
    );
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

    const game = await Game.findOne({ where: { id: id_game } });
    if (!game) {
      return response.status(404).json({ error: 'Jogo não existe' });
    }

    return response.status(200).json(game);
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

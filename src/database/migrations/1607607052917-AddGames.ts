import { MigrationInterface, QueryRunner } from 'typeorm';
import { Publisher, Game, Genre } from '../../app/entities';

export class AddGames1607607052917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const genres = await Genre.save([
      Genre.create({ name: 'Ação/Aventura' }),
      Genre.create({ name: 'Luta' }),
      Genre.create({ name: 'Tiro/Shooter' }),
      Genre.create({ name: 'Role-Playing Game (RPG)' }),
      Genre.create({ name: 'Construção/Gerenciamento' }),
      Genre.create({ name: 'Vida Virtual' }),
      Genre.create({ name: 'Música/Ritmo' }),
      Genre.create({ name: 'Esportes' }),
      Genre.create({ name: 'Simulação de Veículo' }),
    ]);

    const publishers = await Publisher.save([
      Publisher.create({ name: 'CD Projekt Red' }),
      Publisher.create({ name: 'Ubisoft' }),
      Publisher.create({ name: 'Rockstar Games' }),
      Publisher.create({ name: 'Eletronic Arts' }),
      Publisher.create({ name: 'Bandai Namco' }),
      Publisher.create({ name: 'Activision' }),
      Publisher.create({ name: 'Nintendo' }),
      Publisher.create({ name: 'Naughty Dog' }),
      Publisher.create({ name: 'Valve' }),
      Publisher.create({ name: 'Konami' }),
      Publisher.create({ name: 'Square Enix' }),
      Publisher.create({ name: 'Capcom' }),
    ]);

    const games = await Game.save([
      Game.create({
        publisher: publishers[0],
        genre: genres[3],
        title: 'The Witcher 3',
        description:
          'The Witcher 3: Wild Hunt é um jogo eletrônico de ação do subgênero RPG desenvolvido pela CD Projekt RED e lançado no dia 19 de maio de 2015 para as plataformas Microsoft Windows, PlayStation 4, Xbox One e em outubro de 2019 para o Nintendo Switch, sendo o terceiro título da série de jogos The Witcher.',
        picture:
          'https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png',
        metacritic_score: 92,
        release_date: new Date(2015, 5, 18),
      }),

      Game.create({
        publisher: publishers[0],
        genre: genres[2],
        title: 'Cyberpunk 2077',
        description:
          'Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt. Lançado em 10 de dezembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One, e previsto para 2021 para PlayStation 5 e Xbox Series X/S, o jogo é uma adaptação da franquia Cyberpunk com a história sendo ambientada na distópica Night City, um mundo aberto com seis regiões distintas.',
        picture:
          'https://olhardigital.com.br/wp-content/uploads/2020/12/cyberpunk-2077-button-fin-1594877291453.jpg',
        metacritic_score: 91,
        release_date: new Date(2020, 12, 10),
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM game WHERE id > 0;');
    await queryRunner.query('DELETE FROM genre WHERE id > 0;');
    await queryRunner.query('DELETE FROM publisher WHERE id > 0;');
  }
}

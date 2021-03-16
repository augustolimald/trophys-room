import { MigrationInterface, QueryRunner } from 'typeorm';
import { Publisher, Game, Genre } from '../../app/entities';

export class AddGames1607607052917 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const genres = await Genre.save([
      Genre.create({ name: 'Ação/Aventura' }), // 0
      Genre.create({ name: 'Luta' }), // 1
      Genre.create({ name: 'Tiro/Shooter' }), // 2
      Genre.create({ name: 'Role-Playing Game (RPG)' }), // 3
      Genre.create({ name: 'Construção/Gerenciamento' }), // 4
      Genre.create({ name: 'Vida Virtual' }), // 5
      Genre.create({ name: 'Música/Ritmo' }), // 6
      Genre.create({ name: 'Esportes' }), // 7
      Genre.create({ name: 'Simulação de Veículo' }), // 8
    ]);

    const publishers = await Publisher.save([
      Publisher.create({ name: 'CD Projekt Red' }), //0
      Publisher.create({ name: 'Ubisoft' }), //1
      Publisher.create({ name: 'Rockstar Games' }), //2
      Publisher.create({ name: 'Eletronic Arts' }), //3
      Publisher.create({ name: 'Bandai Namco' }), //4
      Publisher.create({ name: 'Activision' }), //5
      Publisher.create({ name: 'Nintendo' }), //6
      Publisher.create({ name: 'Naughty Dog' }), //7
      Publisher.create({ name: 'Valve' }), //8
      Publisher.create({ name: 'Konami' }), //9
      Publisher.create({ name: 'Square Enix' }), //10
      Publisher.create({ name: 'Capcom' }), //11
      Publisher.create({ name: 'Microsoft Game Studios' }), //12
      Publisher.create({ name: 'Sony' }), //13
      Publisher.create({ name: '2k Games' }), //14
      Publisher.create({ name: 'Studio MDHR' }), //15
      Publisher.create({ name: 'Disney Interactive Studios' }), //16
      Publisher.create({ name: 'Beat Games' }), //17
      Publisher.create({ name: 'Sega' }), //18
      Publisher.create({ name: 'Harmonix Music Systems' }), //19
      Publisher.create({ name: 'Curve Digital' }), //20
      Publisher.create({ name: 'Gaijin Entertainment' }), //21
      Publisher.create({ name: 'Deep Silver' }), //22
      Publisher.create({ name: 'Codemasters' }), //23
      Publisher.create({ name: 'ID Software' }), //24
      Publisher.create({ name: 'Infinite Ward' }), //25
      Publisher.create({ name: 'Bungie' }), //26
      Publisher.create({ name: 'Guerrilla' }), //27
      Publisher.create({ name: 'Rebellion' }), //28
      Publisher.create({ name: 'Respawn Entertainment' }), //29
      Publisher.create({ name: 'Bioware' }), //30
      Publisher.create({ name: 'Bethesda' }), //31
      Publisher.create({ name: 'ZA/UM' }), //32
      Publisher.create({ name: 'Eric Barone' }), //33
      Publisher.create({ name: 'Tobyfox' }), //34
      Publisher.create({ name: 'NetherRealm' }), //35
      Publisher.create({ name: 'Other Ocean Interactive' }), //36
      Publisher.create({ name: 'Team Ninja' }), //37
      Publisher.create({ name: '2K Sports' }), //38
      Publisher.create({ name: 'Easy Day STudios' }), //39
      Publisher.create({ name: 'Paradox Interactive' }), //40
      Publisher.create({ name: 'Lonely Troops' }), //41
      Publisher.create({ name: 'Frontier Developments' }), //42
      Publisher.create({ name: 'Vr Chat Inc.' }), //43
      Publisher.create({ name: 'U-play Online' }), //44
      Publisher.create({ name: 'Sulake' }), //45
      Publisher.create({ name: 'Linden Lab' }), //46
      Publisher.create({ name: 'Greenheart Games' }), //47
      Publisher.create({ name: 'LightHouse Games Studio' }), //48
    ]);

    await Game.save([
      /**
       * Genre 0
       */
      Game.create({
        publisher: publishers[12],
        genre: genres[0],
        title: 'Ori and The Will of The Wisps',
        description:
          'Ori and the Will of the Wisps é um jogo eletrônico metroidvania de ação, aventura e plataforma desenvolvido pela Moon Studios e publicado pela Xbox Game Studios Europe para Xbox One, Nintendo Switch e Windows 10. É a sequência de Ori and the Blind Forest e foi lançado em 11 de março de 2020.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_OriAndTheWillOfTheWisps_image1600w.jpg',
        metacritic_score: 92,
        release_date: new Date(2020, 2, 11),
      }),

      Game.create({
        publisher: publishers[1],
        genre: genres[0],
        title: 'Rayman Legends',
        description:
          'Rayman Legends é um videojogo de plataformas produzido pela Ubisoft Montpellier e e publicado pela Ubisoft. É o quinto jogo principal da série Rayman.',
        picture: 'https://cdn.cloudflare.steamstatic.com/steam/apps/242550/capsule_616x353.jpg',
        metacritic_score: 90,
        release_date: new Date(2014, 1, 18),
      }),

      Game.create({
        publisher: publishers[13],
        genre: genres[0],
        title: 'Sackboy: A big adventure',
        description:
          'Sackboy: A Big Adventure é um jogo de plataforma 2020 desenvolvido pela Sumo Digital e publicado pela Sony Interactive Entertainment para PlayStation 5 e PlayStation 4. Um spinoff da série LittleBigPlanet, segue Sackboy e apresenta plataforma 3D em oposição a 2.5D em entradas anteriores.',
        picture:
          'https://blog.br.playstation.com/tachyon/sites/4/2020/11/06_4_sackboy-featured.jpg',
        metacritic_score: 83,
        release_date: new Date(2020, 10, 12),
      }),

      Game.create({
        publisher: publishers[14],
        genre: genres[0],
        title: 'Bioshock: The Collection',
        description:
          'BioShock: The Collection é uma compilação dos videogames BioShock, desenvolvido pela Blind Squirrel Games e publicado pela 2K Games. A coleção apresenta versões atualizadas do BioShock, BioShock 2 e BioShock Infinite, com novas texturas e suporte para telas de alta resolução e taxas de quadros.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BioShockTheCollection.jpg',
        metacritic_score: 84,
        release_date: new Date(2016, 8, 13),
      }),

      Game.create({
        publisher: publishers[13],
        genre: genres[0],
        title: 'Uncharted: The Lost Legacy',
        description:
          "Uncharted: The Lost Legacy é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. É um título derivado da série Uncharted e uma expansão autônoma de Uncharted 4: A Thief's End, tendo sido lançado exclusivamente para PlayStation 4 em agosto de 2017.",
        picture:
          'https://image.api.playstation.com/vulcan/img/rnd/202010/2813/h9Xc7ZhCEGUcS05YvpEcNT0D.png',
        metacritic_score: 84,
        release_date: new Date(2017, 7, 22),
      }),

      Game.create({
        publisher: publishers[5],
        genre: genres[0],
        title: "Crash Bandicoot 4: It's About Time",
        description:
          "Crash Bandicoot 4: It's About Time é um jogo da série de jogos Crash Bandicoot, desenvolvido pela Toys For Bob e publicado pela Activision. Ele continuará a história de Crash Bandicoot: Warped lançado em 1998. O jogo foi lançado em 2 de outubro de 2020.",
        picture: 'https://gritasaopaulo.com.br/wp-content/uploads/2020/06/Crash-Bandicoot-4.jpg',
        metacritic_score: 85,
        release_date: new Date(2020, 9, 2),
      }),

      Game.create({
        publisher: publishers[13],
        genre: genres[0],
        title: 'Ratchet & Clank',
        description:
          'Ratchet & Clank é um jogo eletrônico de plataforma desenvolvido pela Insomniac Games e publicado pela Sony Computer Entertainment para a PlayStation 4. É uma re-imaginação do primeiro jogo da série Ratchet & Clank e baseado no filme criado pela Rainmaker Entertainment e Blockade Entertainment.',
        picture:
          'https://img.elo7.com.br/product/zoom/2624D00/big-poster-gamer-ratchet-clank-lo002-tamanho-90x60-cm-posters-de-games.jpg',
        metacritic_score: 85,
        release_date: new Date(2016, 3, 12),
      }),

      Game.create({
        publisher: publishers[15],
        genre: genres[0],
        title: 'Cuphead',
        description:
          'Cuphead é um jogo eletrônico de Run and Gun e plataforma feito pelos irmãos canadenses Chad e Jared Moldenhauer com o nome de Studio MDHR, desenhado no estilo dos desenhos animados da década de 1930. Como Cuphead, o jogador luta contra uma série de chefes para pagar uma dívida adquirida com o diabo.',
        picture:
          'https://image.api.playstation.com/vulcan/img/cfn/11307fllh6D-IvbpCa18N0vRggVeRYWA06paTNCj3DENJMScAzW2f3ry4IwFcXBAt9kWXdZGpGoOGjxJ_e9MdordMVAosNhZ.png',
        metacritic_score: 86,
        release_date: new Date(2017, 8, 29),
      }),

      Game.create({
        publisher: publishers[6],
        genre: genres[0],
        title: 'Super Mario Odyssey',
        description:
          'Super Mario Odyssey é um jogo de aventura e plataforma desenvolvido pela Nintendo Entertainment Planning & Development e publicado pela Nintendo. Foi lançado mundialmente em 27 de outubro de 2017 exclusivamente para o Nintendo Switch.',
        picture:
          'https://img.estadao.com.br/fotos/crop/640x400/resources/jpg/9/5/1510099320159.jpg',
        metacritic_score: 97,
        release_date: new Date(2017, 9, 27),
      }),

      Game.create({
        publisher: publishers[13],
        genre: genres[0],
        title: 'Detroit: Become Human',
        description:
          'Detroit: Become Human é um jogo eletrônico produzido pela Quantic Dream e publicado pela Sony Interactive Entertainment para o PlayStation 4 e Microsoft Windows PC.',
        picture:
          'https://image.api.playstation.com/vulcan/img/rnd/202010/2119/wl4DB5QGzlEHAXy1KLUVgOAu.png',
        metacritic_score: 78,
        release_date: new Date(2018, 4, 25),
      }),

      /**
       * Genre 1
       */
      Game.create({
        publisher: publishers[4],
        genre: genres[1],
        title: 'Dragon Ball FighterZ',
        description:
          'Dragon Ball FighterZ é um jogo da franquia Dragon Ball, desenvolvido pela Arc System Works é publicado pela Bandai Namco Entertainment para PlayStation 4, Xbox One , Nintendo Switch e Microsoft Windows via Steam. Sua data de lançamento foi em janeiro de 2018.',
        picture:
          'https://image.api.playstation.com/cdn/UP0700/CUSA09072_00/2eBPISxxvTv5foYSDlqiBJfmRj5LZxv3.png',
        metacritic_score: 87,
        release_date: new Date(2018, 1, 26),
      }),

      Game.create({
        publisher: publishers[35],
        genre: genres[1],
        title: 'Mortal Kombat X',
        description:
          'Mortal Kombat X[b] é um videojogo de luta da série Mortal Kombat. Foi produzido pelo estúdio NetherRealm Studios e publicado pela Warner Bros. Home Entertainment. Realizado por Ed Boon, um dos criadores da série. É o décimo título principal da série e serve como sequela para Mortal Kombat de 2011. Foi lançado a 14 de Abril de 2015 para Microsoft Windows, PlayStation 4 e Xbox One. Foi criada uma versão para os sistemas iOS e Android por uma equipa da NetherRealm Studios, lançadas a 7 de Abril de 2015 e 4 de Maio de 2015, respectivamente. Inicialmente também previsto para PlayStation 3 e Xbox 360. Em 28 de Agosto de 2015 a Warner Bros. anunciou o cancelamento de ambas as versões.',
        picture: 'https://m.media-amazon.com/images/I/71zd7fs4VrL._AC_SL1500_.jpg',
        metacritic_score: 83,
        release_date: new Date(2015, 4, 14),
      }),

      Game.create({
        publisher: publishers[36],
        genre: genres[1],
        title: 'Ultra Street Fighter 4',
        description:
          'Street Fighter IV é um jogo de luta feito pela Capcom e o quinto título da série Street Fighter. Foi lançado nos Arcades japoneses em Julho de 2008 e as versões para PS3 e Xbox 360 saíram no fim do ano de 2008. Uma versão para PC saiu em Julho de 2009. Em 27 de Abril de 2010 foi lançada uma versão mais atual com o nome de "Super Street Fighter IV", onde foram adicionados mais 10 personagens jogáveis, novos cenários, novo balanceamento de personagens e novas modalidades de partidas online.',
        picture:
          'https://gamehall.com.br/wp-content/uploads/2014/08/ultra_street_fighter_iv_02.jpg',
        metacritic_score: 71,
        release_date: new Date(2015, 3, 26),
      }),

      Game.create({
        publisher: publishers[35],
        genre: genres[1],
        title: 'Injustice Gods Among Us',
        description:
          'Injustice: Gods Among Us, (no Brasil, Injustiça: Deuses Entre Nós), é um videojogo de luta produzido pela NetherRealm Studios e publicado pela Warner Brothers Games em Abril de 2013 para Wii U, PlayStation 3 ,Xbox 360 e PC. Uma versão gratuita para iOS e Android foi editada a 3 de Abril e 21 de Novembro de 2013, respectivamente.Injustice: Gods Among Us coloca os jogadores a controlar personagens do universo da DC Comics.',
        picture: 'https://images-na.ssl-images-amazon.com/images/I/81LzcafnulL.jpg',
        metacritic_score: 80,
        release_date: new Date(2013, 11, 12),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[1],
        title: 'Tekken 7',
        description:
          'Tekken 7 é um jogo eletrônico de luta desenvolvido e publicado pela Bandai Namco Entertainment. É o nono jogo da série de luta Tekken, sendo o primeiro a utilizar o motor de jogo Unreal Engine 4. Sendo lançado no dia 2 de Julho de 2016. Este marca os vinte anos de Tekken. Sendo lançado para Xbox One e PlayStation 4 e e tento compatibilidade com o PlayStation VR.',
        picture: 'https://coverfiles.alphacoders.com/105/105967.jpg',
        metacritic_score: 82,
        release_date: new Date(2017, 6, 2),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[1],
        title: 'Soulcalibur 6',
        description:
          'SoulCalibur VI é um jogo de luta 3D desenvolvido pela Projeto Soul e publicado pela Bandai Namco Entertainment. Ele foi lançado na Microsoft Windows, PlayStation 4 e Xbox One em 19 de outubro de 2018. De acordo com o produtor Motohiro Okubo, o jogo é uma comemoração do 20º aniversário da franquia.',
        picture:
          'https://compass-ssl.xbox.com/assets/2e/98/2e98ca38-a32d-4033-8873-7cb1fb0649a9.jpg?n=Soul-Calibur-VI_GLP-Page-Hero-1084_1920x600.jpg',
        metacritic_score: 84,
        release_date: new Date(2018, 10, 29),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[1],
        title: 'Guilty Gear Xrd Rev2',
        description:
          'Guilty Gear Xrd com as legendas -SIGN-, é um jogo de luta criado pela Arc System Works. É o quinto jogo da série Guilty Gear, e foi lançado para os Arcades em 20 de fevereiro de 2014 com suporte para o sistema ALL.Net P-ras MULTI Ver.2. Foi depois lançado para PlayStation 3 e PlayStation 4 no Japão e na América do Norte em dezembro do mesmo ano, enquanto a versão da Europa foi lançada em junho de 2015 apenas em versão digital. Em dezembro de 2015 foi lançada a versão para PC na plataforma Steam, da Valve.',
        picture:
          'https://image.api.playstation.com/cdn/UP1024/CUSA00834_00/SENiGRRAKhgGlJYklKtlJSH8KgIu6YSz.png',
        metacritic_score: 86,
        release_date: new Date(2017, 5, 26),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[1],
        title: 'UFC 2',
        description:
          'O EA Sports UFC 2 é um videogame misto de combate de artes marciais desenvolvido pela EA Canadá e publicado em março de 2016 pela Electronic Arts para PlayStation 4 e Xbox One. A sequência do EA Sports UFC de 2014, é baseada na marca Ultimate Fighting Championship.',
        picture: 'https://gamecrate.com/sites/default/files/field/image/RondaUFC.jpg',
        metacritic_score: 79,
        release_date: new Date(2016, 3, 15),
      }),

      Game.create({
        publisher: publishers[37],
        genre: genres[1],
        title: 'Dead or Alive 5',
        description:
          'Dead or Alive 5 é um videogame de combate da série Dead or Alive, desenvolvido pela Team Ninja e lançado pela Tecmo Koei simultaneamente para o PlayStation 3 e Xbox 360 em 2012.',
        picture:
          'https://image.api.playstation.com/cdn/UP4108/CUSA01627_00/8b3eVINuTJf6y47a98THfkEtiuB1zs0u.png',
        metacritic_score: 74,
        release_date: new Date(2015, 2, 17),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[1],
        title: 'Naruto Shippuden Ultimate Ninja Storm 4',
        description:
          'Naruto Shippuden: Ultimate Ninja Storm 4, é o quarto jogo da série Ultimate Ninja Storm. É um jogo de luta, desenvolvido pelo CyberConect2 e publicado pela Namco-Bandai games para PC, PlayStation 4, Xbox One e Nintendo Switch baseado na franquia de anime e mangá Naruto. É a continuação do jogo Naruto Shippuden: Ultimate Ninja Storm 3 e é o primeiro jogo de Naruto a marcar presença nos consoles da oitava geração. O jogo conta a história da reta final da trama do mangá, sendo assim, o último capítulo da série Storm. O lançamento ocorreu no dia 04 de Fevereiro de 2016 no Japão, um dia depois nas Américas, no dia 09 de Fevereiro de 2016 na Europa e no dia 05 de Fevereiro de 2016 aqui no Brasil, além de ser o primeiro jogo da franquia a ser dublado em Português Brasileiro.',
        picture:
          'https://cinesiageek.com.br/wp-content/uploads/2016/02/naruto-shippuden-ultimate-ninja-storm-4-1454697889180_1280w-1.jpg',
        metacritic_score: 79,
        release_date: new Date(2016, 2, 9),
      }),

      /**
       * Genre 2
       */
      Game.create({
        publisher: publishers[0],
        genre: genres[2],
        title: 'Cyberpunk 2077',
        description:
          'Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt. Lançado em 10 de dezembro de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One, e previsto para 2021 para PlayStation 5 e Xbox Series X/S, o jogo é uma adaptação da franquia Cyberpunk com a história sendo ambientada na distópica Night City, um mundo aberto com seis regiões distintas.',
        picture:
          'https://olhardigital.com.br/wp-content/uploads/2020/12/cyberpunk-2077-button-fin-1594877291453.jpg',
        metacritic_score: 91,
        release_date: new Date(2020, 11, 10),
      }),

      Game.create({
        publisher: publishers[24],
        genre: genres[2],
        title: 'Doom Eternal',
        description:
          'Doom Eternal é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela id Software e publicado pela Bethesda Softworks. Foi lançado em 20 de março de 2020 para Google Stadia, Microsoft Windows, PlayStation 4 e Xbox One e em 08 de dezembro de 2020 para Nintendo Switch.[1] É o quinto título principal da série Doom e a sequência de Doom (2016).',
        picture:
          'https://switch-brasil.com/wp-content/uploads/2019/06/Doom-Eternal-Scrn090619-001.jpg',
        metacritic_score: 87,
        release_date: new Date(2020, 3, 20),
      }),

      Game.create({
        publisher: publishers[25],
        genre: genres[2],
        title: 'Call of Duty: Modern Warfare',
        description:
          'Call of Duty: Modern Warfare é um jogo eletrônico de tiro em primeira pessoa produzido pela Infinity Ward. Foi publicado pela Activision em 25 de outubro de 2019 para Microsoft Windows, PlayStation 4 e Xbox One. É o decimo sexto jogo da serie Call of Duty e actua como um "soft reboot" da sub-serie Modern Warfare.',
        picture:
          'https://www.apertestart.com.br/wp-content/uploads/2019/10/d9ffbcf4aa5df29167b21484b9aac12507a9deb9.jpg',
        metacritic_score: 80,
        release_date: new Date(2019, 8, 23),
      }),

      Game.create({
        publisher: publishers[26],
        genre: genres[2],
        title: 'Destiny 2',
        description:
          'Destiny 2 é um jogo eletrônico de tiro em primeira pessoa multijogador desenvolvido pela Bungie e publicado pela Activision. Foi lançado para PlayStation 4 e Xbox One em 6 de setembro de 2017, seguido por uma versão para Microsoft Windows no mês seguinte.[1][2] É a continuação de Destiny (2014) e de suas expansões subsequentes. Situado em um mundo de "ficção científica mítica", o jogo apresenta um ambiente multiplayer de "mundo compartilhado" com elementos de RPG.',
        picture: 'https://www.bungie.net/7/ca//destiny/bgs/new_light/hero_desktop_bg.jpg',
        metacritic_score: 85,
        release_date: new Date(2017, 9, 6),
      }),

      Game.create({
        publisher: publishers[14],
        genre: genres[2],
        title: 'Bioshock: The Collection',
        description:
          'BioShock: The Collection é uma compilação dos videogames BioShock, desenvolvido pela Blind Squirrel Games e publicado pela 2K Games. A coleção apresenta versões atualizadas do BioShock, BioShock 2 e BioShock Infinite, com novas texturas e suporte para telas de alta resolução e taxas de quadros.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_BioShockTheCollection_image1600w.jpg',
        metacritic_score: 84,
        release_date: new Date(2016, 9, 13),
      }),

      Game.create({
        publisher: publishers[27],
        genre: genres[2],
        title: 'Killzone Shadowfall',
        description:
          'Killzone: Shadow Fall é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Guerrilla Games em exclusivo para a PlayStation 4. É o sexto jogo da série de jogos eletrônicos Killzone.[1] Shadow Fall foi anunciado durante o PlayStation Meeting em Fevereiro de 2013, e foi um título de lançamento da PlayStation 4,[2] editado em 15 de Novembro de 2013 na América do Norte, 29 de Novembro de 2013 na Europa e América do Sul e 22 de Fevereiro de 2014 no Japão.',
        picture:
          'https://image.api.playstation.com/cdn/UP9000/CUSA00191_00/e7X1OTNrSN1j0ifqh2lUvMuIrVq5la5G.png',
        metacritic_score: 73,
        release_date: new Date(2013, 11, 15),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[2],
        title: 'Battlefield 1',
        description:
          'Battlefield 1 é um jogo eletrônico de tiro em primeira pessoa ambientado na Primeira Guerra Mundial, desenvolvido pela DICE e publicada pela Electronic Arts. É o décimo quarto jogo da franquia Battlefield. Foi lançado em outubro de 2016 para Microsoft Windows, PlayStation 4 e Xbox One. Foi um grande sucesso de crítica e vendas.',
        picture: 'https://www.centralxbox.com.br/wp-content/uploads/2016/11/Battlefield_1.jpg',
        metacritic_score: 89,
        release_date: new Date(2016, 10, 18),
      }),

      Game.create({
        publisher: publishers[2],
        genre: genres[2],
        title: 'Red Dead Redemption 2',
        description:
          'Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar Games. É o terceiro título da série Red Dead e uma prequela de Red Dead Redemption, tendo sido lançado em outubro de 2018 para PlayStation 4 e Xbox One e em novembro de 2019 para Microsoft Windows e Google Stadia. A história se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste e sobreviver à perseguição de forças governamentais, gangues rivais e outros adversários.',
        picture:
          'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
        metacritic_score: 97,
        release_date: new Date(2018, 10, 26),
      }),

      Game.create({
        publisher: publishers[25],
        genre: genres[2],
        title: 'Call of Duty Warzone',
        description:
          'Call of Duty: Warzone é um jogo eletrônico free-to-play do gênero battle royale desenvolvido pela Infinity Ward e Raven Software e publicado pela Activision.[1] Lançado em 10 de março de 2020 para Microsoft Windows, PlayStation 4 e Xbox One, o jogo faz parte do título Call of Duty: Modern Warfare (2019), mas não requer compra. Warzone permite um combate em um modo multijogador on-line entre 150 jogadores na cidade fictícia de Verdansk, que é vagamente baseada na cidade de Donetsk, no leste da Ucrânia.[2] Ele apresenta uma progressão de plataforma-cruzada entre os dois jogos.',
        picture:
          'https://observatoriodegames.uol.com.br/wp-content/uploads/2020/03/Call-of-Duty-Warzone-1.jpg',
        metacritic_score: 79,
        release_date: new Date(2020, 3, 10),
      }),

      Game.create({
        publisher: publishers[28],
        genre: genres[2],
        title: 'Sniper Elite 4',
        description:
          'Sniper Elite 4 é um videojogo de stealth e tiro táctico em terceira pessoa, desenvolvido e publicado pela Rebellion Developments.[1] Sequela directa de Sniper Elite III, o jogo foi lançado em 14 de fevereiro de 2017 para Microsoft Windows, PlayStation 4 e Xbox One, e em 17 de Novembro de 2020 para Nintendo Switch, além de ser lançado em 01 de Novembro no Stadia.',
        picture: 'https://cdn-products.eneba.com/resized-products/HIqxbHX_350x200_3x-0.jpg',
        metacritic_score: 77,
        release_date: new Date(2017, 2, 14),
      }),

      Game.create({
        publisher: publishers[29],
        genre: genres[2],
        title: 'Titanfall 2',
        description:
          'Titanfall 2 é um videojogo de tiro na primeira pessoa (first person shooter) produzido pela Respawn Entertainment e publicado pela Electronic Arts em outubro de 2016 para Xbox One, Windows PC e PlayStation 4. É a Sequência de Titanfall (2014), o jogo foca-se na história de Jack Cooper, um soldado que aspira ser um piloto de um Titan, enormes robots Mecha usados na guerra.',
        picture:
          'https://www.centralxbox.com.br/wp-content/uploads/2016/11/theVideoGameGallery_28836_1920x1080.jpg',
        metacritic_score: 89,
        release_date: new Date(2016, 10, 28),
      }),

      /**
       * Genre 3
       */
      Game.create({
        publisher: publishers[0],
        genre: genres[3],
        title: 'The Witcher 3',
        description:
          'The Witcher 3: Wild Hunt é um jogo eletrônico de ação do subgênero RPG desenvolvido pela CD Projekt RED e lançado no dia 19 de maio de 2015 para as plataformas Microsoft Windows, PlayStation 4, Xbox One e em outubro de 2019 para o Nintendo Switch, sendo o terceiro título da série de jogos The Witcher.',
        picture:
          'https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png',
        metacritic_score: 92,
        release_date: new Date(2015, 4, 18),
      }),

      Game.create({
        publisher: publishers[10],
        genre: genres[3],
        title: 'Final Fantasy XV',
        description:
          'Final Fantasy XV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Square Enix. Ele foi lançado mundialmente no dia 29 de novembro de 2016 para as plataformas PlayStation 4 e Xbox One. É o décimo quinto título principal da série Final Fantasy e faz parte da subsérie Fabula Nova Crystallis, formada por jogos que compartilham uma mesma mitologia. Originalmente desenvolvido como um título derivado chamado de Final Fantasy Versus XIII exclusivamente para PlayStation 3, ele foi pensado como uma grande mudança em relação aos jogos anteriores da série, possuindo uma atmosfera focada em ambientes realistas e personagens mais humanos.',
        picture: 'https://attackofthefanboy.com/wp-content/uploads/2017/01/ffxv-cover.jpg',
        metacritic_score: 81,
        release_date: new Date(2016, 11, 29),
      }),

      Game.create({
        publisher: publishers[10],
        genre: genres[3],
        title: 'Final Fantasy VII Remake',
        description:
          'Final Fantasy VII Remake é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Square Enix. É um título da série Final Fantasy e uma recriação de Final Fantasy VII, tendo sido lançado para PlayStation 4 em 10 de abril de 2020. A história se passa na metrópole distópica de Midgar e acompanha o mercenário Cloud Strife, que se junta a um grupo ecoterrorista em uma tentativa de impedir que a poderosa megacorporação Shinra use a essência vital do planeta como fonte de energia. A jogabilidade combina combate em tempo real com elementos de estratégia.',
        picture:
          'https://image.api.playstation.com/vulcan/img/cfn/113075PxnarzRek4cRpjrRWSpLfrcBd23B5e_Yj2azms6nWYKmySv4h3a22G5_R1CM4BQUmSRD6oOArDROKv041NUkgun78-.png',
        metacritic_score: 87,
        release_date: new Date(2020, 4, 10),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[3],
        title: 'Ni No Kuni 2 Revenant Kingdom',
        description:
          'Ni no Kuni II: Revenant Kingdom (二ノ国II レヴァナントキングダム Ni no Kuni: Revananto Kingudamu?) é um jogo eletrônico de RPG de ação desenvolvido pela Level-5 e publicado pela Bandai Namco Entertainment. O jogo é uma sequência de Ni no Kuni: Wrath of the White Witch, e foi lançado em 23 de março de 2018 para Microsoft Windows e PlayStation 4.',
        picture: 'https://jpimg.com.br/uploads/2018/04/Ni-No-Kuni-II-Revenant-Kingdom_bg.jpg',
        metacritic_score: 84,
        release_date: new Date(2018, 3, 23),
      }),

      Game.create({
        publisher: publishers[10],
        genre: genres[3],
        title: 'Kingdom Hearts 3',
        description:
          'Kingdom Hearts III é um jogo eletrônico do gênero RPG de ação desenvolvido e publicado pela Square Enix e distribuído pela Disney Interactive Studios para o PlayStation 4 e Xbox One. Ele é o terceiro jogo principal da série Kingdom Hearts e o décimo primeiro título geral da série.',
        picture: 'https://www.gamerview.com.br/wp-content/uploads/2019/02/kh3-cover.jpg',
        metacritic_score: 83,
        release_date: new Date(2019, 1, 29),
      }),

      Game.create({
        publisher: publishers[27],
        genre: genres[3],
        title: 'Horizon Zero Dawn',
        description:
          'Horizon Zero Dawn é um jogo eletrônico de RPG de ação desenvolvido pela Guerrilla Games e publicado pela Sony Interactive Entertainment. Foi lançado em 28 de fevereiro de 2017 para PlayStation 4 e em 7 de agosto de 2020 para Microsoft Windows. A trama segue Aloy, uma caçadora em um mundo invadido por máquinas, que decide descobrir seu passado. O jogador usa armas de longo alcance, lanças e furtividade para combater criaturas mecânicas e outras forças inimigas. Uma árvore de habilidades fornece ao jogador novas habilidades e bônus. O jogador pode explorar o mundo aberto para descobrir locais e realizar missões secundárias.',
        picture:
          'https://observatoriodegames.uol.com.br/wp-content/uploads/2020/03/HOrizon-zero-dawn-.jpg',
        metacritic_score: 89,
        release_date: new Date(2017, 2, 28),
      }),

      Game.create({
        publisher: publishers[30],
        genre: genres[3],
        title: 'Dragon Age Inquisition',
        description:
          'Dragon Age: Inquisition é um jogo eletrônico de RPG de ação desenvolvido pela BioWare e publicado pela Electronic Arts. Sendo o terceiro jogo principal da franquia, Dragon Age: Inquisition é uma sequencia de Dragon Age: Origins e Dragon Age II. O jogo foi lançado mundialmente em novembro de 2014 para Microsoft Windows, PlayStation 3, PlayStation 4, Xbox 360 e Xbox One. Após o seu lançamento, Dragon Age: Inquisition foi amplamente aclamado pela crítica, com alguns o considerando um dos melhores RPGs já feitos na história.',
        picture:
          'https://data2.origin.com/content/dam/originx/web/app/games/dragon-age/dragon-age-inquisition/dragon-age-inquisition-dlc-bundle_gdp-bg.jpg',
        metacritic_score: 89,
        release_date: new Date(2014, 11, 18),
      }),

      Game.create({
        publisher: publishers[31],
        genre: genres[3],
        title: 'The Elder Scrolls Skyrim',
        description:
          'The Elder Scrolls V: Skyrim é um jogo eletrônico de RPG de ação desenvolvido pela Bethesda Game Studios e publicado pela Bethesda Softworks. É o quinto jogo principal da série The Elder Scrolls, seguindo The Elder Scrolls IV: Oblivion. Foi lançado em 11 de novembro de 2011 para Microsoft Windows, PlayStation 3 e Xbox 360. É o primeiro jogo ocidental da história a receber 40/40 (nota máxima) na conceituada Famitsu. O jogo conseguiu três prêmios no VGA 2011, incluindo Jogo do Ano.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheElderScrollsVSkyrim_image1600w.jpg',
        metacritic_score: 94,
        release_date: new Date(2011, 11, 11),
      }),

      Game.create({
        publisher: publishers[32],
        genre: genres[3],
        title: 'Disco Elysium',
        description:
          "Disco Elysium é um jogo eletrônico de RPG desenvolvido e publicado pela ZA/UM. Foi lançado para Microsoft Windows em 15 de outubro de 2019, com um lançamento para Nintendo Switch, PlayStation 4 e Xbox One planejado para 2020. O jogo é inspirado nos jogos de RPG da Infinity Engine (como Baldur's Gate e Planescape: Torment) e nos jogos de RPG de Mesa, sendo escrito e projetado pelo romancista estoniano Robert Kurvitz. O jogo foi aclamado pela crítica, com alguns citando-o como um dos melhores jogos de RPG de todos os tempos.",
        picture:
          'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fdisco-elysium%2Fhome%2FEGS_DiscoElysium_ZAUM_S2-1200x1600-6280f1147761adcaefd5bae77dc686b6d21c39e0.jpg',
        metacritic_score: 91,
        release_date: new Date(2019, 10, 15),
      }),

      Game.create({
        publisher: publishers[33],
        genre: genres[3],
        title: 'Stardew Valley',
        description:
          'Stardew Valley é um jogo de videogame, dos gêneros RPG e simulação, desenvolvido por Eric Barone e publicado pela ConcernedApe e pela Chucklefish. O jogo foi lançado para Microsoft Windows em 26 de fevereiro de 2016. Versões para Mac OS X e Linux foram lançadas em 29 de julho de 2016.',
        picture:
          'https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png',
        metacritic_score: 89,
        release_date: new Date(2016, 2, 26),
      }),

      Game.create({
        publisher: publishers[34],
        genre: genres[3],
        title: 'Undertale',
        description:
          'Undertale é um RPG eletrônico criado pelo desenvolvedor independente norte-americano Toby Fox. No jogo, o jogador pode controlar uma criança humana que caiu em uma caverna, uma região grande e isolada sob a superfície da Terra, separada por uma barreira mágica. Vários monstros podem ser encontrados durante sua missão para retornar à superfície, principalmente através do sistema de combate; o jogador navega pelos ataques em formato bullet hell do oponente e pode optar por pacificar ou subjugar os monstros para poupá-los em vez de assassiná-los. Essas escolhas causam mudanças no diálogo, nos personagens e na história com base nos resultados.',
        picture: 'https://sucodemanga.com.br/wp-content/uploads/2018/09/undertale-thumb.jpg',
        metacritic_score: 92,
        release_date: new Date(2015, 9, 15),
      }),

      /**
       * Genre 4
       */
      Game.create({
        publisher: publishers[12],
        genre: genres[4],
        title: 'Age of Empires III',
        description:
          'Age of Empires III é um jogo de estratégia em tempo real desenvolvido pela Ensemble Studios e divulgado pela Microsoft. A versão de computador foi lançada em 18 de outubro de 2005 e é o terceiro título da série Age of Empires.',
        picture: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Aoeiii-cover.jpg',
        metacritic_score: 81,
        release_date: new Date(2005, 9, 18),
      }),

      Game.create({
        publisher: publishers[12],
        genre: genres[4],
        title: 'Age of Empires II - Edição Definitiva',
        description:
          'Age of Empires II é um jogo de estratégia em tempo real desenvolvido pela Ensemble Studios e divulgado pela Microsoft. A versão de computador foi lançada em 14 de novembro de 2019 e é o terceiro título da série Age of Empires.',
        picture:
          'https://s2.glbimg.com/oS4245iRNZxYSWc7UOcNsUAfo3w=/0x0:1200x674/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/4/A/cHMqDtRAGhy5S40umNRA/7rtney5fy5rrkmh9q78xv-1200-80.jpg',
        metacritic_score: 84,
        release_date: new Date(2019, 10, 14),
      }),

      Game.create({
        publisher: publishers[12],
        genre: genres[4],
        title: 'Cities Skylines',
        description:
          'Cities Skylines é um jogo de construção de cidade singleplayer produzido pela Colossal Order e publicado pela Paradox Interactive, lançado em 10 de março de 2015 para PC (Microsoft Windows, macOS, Linux), XBOX, PS4 e Switch. Os jogadores se engajam no planejamento urbano, controlando o zoneamento, a construção de estradas, a tributação, os serviços públicos e o transporte público da cidade.',
        picture:
          'https://upload.wikimedia.org/wikipedia/pt/thumb/5/58/Cities_Skylines_cover_art.jpg/250px-Cities_Skylines_cover_art.jpg',
        metacritic_score: 85,
        release_date: new Date(2015, 2, 10),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[4],
        title: 'Sim City',
        description:
          'SimCity é uma série de jogos de simulação na qual o jogador constrói e administra uma cidade. As cidades construídas possuem características semelhantes às cidades americanas em aspectos culturais e legais nos séculos XX e XXI.',
        picture:
          'https://media.contentapi.ea.com/content/dam/eacom/pt-br/migrated-images/2017/01/c-simcity-buildit-scbi-game-splash.jpg.adapt.crop191x100.1200w.jpg',
        metacritic_score: 64,
        release_date: new Date(2013, 2, 5),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[4],
        title: 'The Sims',
        description:
          'The Sims é uma série de jogos eletrônicos de simulação de vida real criado pelo designer de jogos Will Wright e produzida pela Maxis. O primeiro jogo da série, The Sims, foi lançado em 4 de fevereiro de 2000. Os jogos da série The Sims são, em grande parte, jogos sandbox, pois não possuem objetivos definidos',
        picture: 'https://i.ytimg.com/vi/cOz_vn0wLAc/maxresdefault.jpg',
        metacritic_score: 92,
        release_date: new Date(2000, 1, 4),
      }),
      Game.create({
        publisher: publishers[3],
        genre: genres[4],
        title: 'The Sims 4',
        description:
          'The Sims 4 é o quarto título da franquia de jogos eletrônicos de simulação de vida The Sims, desenvolvido pela Maxis e publicado pela Electronic Arts. The Sims 4 foi originalmente anunciado em 6 de maio de 2013, e lançado nos Estados Unidos, Brasil e Portugal em 2 de setembro de 2014, para o Microsoft Windows.',
        picture:
          'https://media.contentapi.ea.com/content/dam/eacom/SIMS/brand-refresh-assets/images/2019/07/ts4-featured-image-base-refresh.png.adapt.crop191x100.1200w.png',
        metacritic_score: 70,
        release_date: new Date(2014, 7, 2),
      }),

      Game.create({
        publisher: publishers[41],
        genre: genres[4],
        title: 'Megapolis',
        description:
          'Megapolis é um jogo simulador de construção e gerenciamento desenvolvido pela Solial Quantum em 2012, aonde o jogador deve administrar múltiplas cidades virtuais.',
        picture: 'https://www.socialquantum.com/images/games/megapolis/slide-0.jpg',
        metacritic_score: 76,
        release_date: new Date(2012, 10, 23),
      }),

      Game.create({
        publisher: publishers[42],
        genre: genres[4],
        title: 'Planet Coaster',
        description:
          'Planet Coaster é um jogo de simulação sandbox de construção e gerenciamento de um parque de diversões, desenvolvido e publicado pela Frontier Developments para Microsoft Windows, no qual foi lançado oficialmente em novembro de 2016.',
        picture:
          'https://image.api.playstation.com/vulcan/ap/rnd/202007/2213/MsxJaWqum7oDl3D6357ngYqE.png',
        metacritic_score: 84,
        release_date: new Date(2016, 10, 17),
      }),

      Game.create({
        publisher: publishers[42],
        genre: genres[4],
        title: 'Planet Zoo',
        description:
          'O Planet Zoo é um jogo de simulação de construção e gerenciamento desenvolvido e publicado pela Frontier Developments para Microsoft Windows . O jogo é um "sucessor espiritual" , com uma jogabilidade semelhante à variante de parque temático do estúdio, Planet Coaster. Foi lançado mundialmente em 5 de novembro de 2019.',
        picture: 'https://cdn.cloudflare.steamstatic.com/steam/apps/703080/header.jpg?t=1607429152',
        metacritic_score: 81,
        release_date: new Date(2019, 10, 5),
      }),

      /**
       * Genre 5
       */
      Game.create({
        publisher: publishers[43],
        genre: genres[5],
        title: 'VR Chat',
        description:
          'VRChat é um jogo gratuito online, de realidade virtual em plataforma criado por Graham Gaylor e Jesse Joudrey. O jogo permite que os jogadores interagam entre si como personagens 3D.',
        picture:
          'https://ibcdn.canaltech.com.br/UB2YTb6n00Zf9grS7C0bZ8MsK7I=/512x288/smart/i366586.png',
        metacritic_score: 68,
        release_date: new Date(2017, 1, 1),
      }),

      Game.create({
        publisher: publishers[44],
        genre: genres[5],
        title: 'Youtubers Life',
        description:
          'Youtubers Life é um jogo de simulação de vida com elementos de simulação de negócios e influências dos videogames Game Dev Tycoon e The Sims. O jogador precisa gerenciar um personagem tentando construir uma carreira como uma personalidade do YouTube.',
        picture: 'https://i.ytimg.com/vi/MRK93FKRLoQ/maxresdefault.jpg',
        metacritic_score: 63,
        release_date: new Date(2016, 4, 18),
      }),
      Game.create({
        publisher: publishers[45],
        genre: genres[5],
        title: 'Habbo',
        description:
          'O Habbo Hotel é uma comunidade virtual na forma de hotel voltado para o público jovem com idade acima de 13 anos. Atualmente, o Habbo está distribuído em nove diferentes línguas, com 300 milhões de personagens registrados.',
        picture:
          'https://image.winudf.com/v2/image1/YWlyLmNvbS5zdWxha2UuaGFiYm9haXJfc2NyZWVuX3B0LUJSXzBfMTU2Njk5NTE1OV8wMDE/screen-0.jpg?fakeurl=1&type=.jpg',
        metacritic_score: 67,
        release_date: new Date(2006, 1, 12),
      }),

      Game.create({
        publisher: publishers[47],
        genre: genres[5],
        title: 'Game Dev. Tycoon',
        description:
          'Game Dev Tycoon é jogo eletrônico de simulação. O jogo simula uma empresa que cria videogames. A simulação consiste em desenvolver jogos para as mais variadas plataformas de videogame e utilizando técnicas e estratégias para fazer o seu game ser cada vez mais vendido.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_GameDevTycoon_image1600w.jpg',
        metacritic_score: 68,
        release_date: new Date(2013, 3, 28),
      }),

      Game.create({
        publisher: publishers[6],
        genre: genres[5],
        title: 'Animal Crossing',
        description:
          'Animal Crossing é uma série de jogos eletrônicos de simulação produzida pela Nintendo. Criada por Katsuya Egushi e Hisashi Nogami. Em Animal Crossing, o personagem do jogador é um humano que vive em uma comunidade habitada por vários animais antropomórficos, realizando várias atividades como pesca, captura de insetos, jardinagem, vendas entre outros.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_AnimalCrossingNewHorizons_image380w.jpg',
        metacritic_score: 90,
        release_date: new Date(2020, 2, 20),
      }),

      Game.create({
        publisher: publishers[48],
        genre: genres[5],
        title: 'Comedy Night',
        description:
          'Comedy Night é um jogo simulador de palco de Stand-up, no qual os jogadores se reunem para socializar ou praticar suas piadas. Desenvolvido pela LightHouse Games Studio e lançado para pc em 24 de Agosto de 2017',
        picture: 'https://i.ytimg.com/vi/88vn4PAwnCw/maxresdefault.jpg',
        metacritic_score: 68,
        release_date: new Date(2017, 7, 24),
      }),

      /**
       * Genre 6
       */
      Game.create({
        publisher: publishers[16],
        genre: genres[6],
        title: 'Fantasia: Music Evolved',
        description:
          'Fantasia: Music Evolved é um jogo eletrônico musical controlado por movimentos lançado em 21 de outubro de 2014, desenvolvido pela Harmonix para as plataformas Xbox 360 e Xbox One com Kinect. Ele foi inspirado no filme animação de 1940 da Walt Disney chamada Fantasia e em sua seqûencia de 1999, Fantasia 2000.',
        picture:
          'http://s2.glbimg.com/Nk1kM6BTh5GeVwYenXEIP9ZCgNA=/695x0/s.glbimg.com/po/tt2/f/original/2014/11/10/fantasia-cover.jpg',
        metacritic_score: 77,
        release_date: new Date(2014, 9, 21),
      }),

      Game.create({
        publisher: publishers[17],
        genre: genres[6],
        title: 'Beat Saber',
        description:
          'Beat Saber é um jogo eletrônico de ritmo de realidade virtual desenvolvido e publicado pela Beat Games. O jogo se passa em um ambiente surrealista de neon noir e apresenta blocos que representam batidas musicais com um par de sabres coloridos contrastantes.',
        picture: 'https://squared-potato.pt/wp-content/uploads/2019/07/beatsaber-destaque.jpg',
        metacritic_score: 93,
        release_date: new Date(2018, 4, 1),
      }),

      Game.create({
        publisher: publishers[5],
        genre: genres[6],
        title: 'Guitar Hero Live',
        description:
          'Guitar Hero Live é um jogo de ritmo desenvolvido pela FreeStyleGames e publicado pela Activision. É o sétimo jogo da linha principal da série Guitar Hero. O jogo foi lançado para PlayStation 3, PlayStation 4, Wii U, Xbox 360 e Xbox One em outubro de 2015 e para dispositivos iOS como o Apple TV em novembro de 2015.',
        picture:
          'https://www.guitarhero.com/content/dam/atvi/guitarhero/ghlive/buy/wtb/gh-packart.jpg',
        metacritic_score: 80,
        release_date: new Date(2015, 9, 20),
      }),

      Game.create({
        publisher: publishers[1],
        genre: genres[6],
        title: 'Just Dance 2021',
        description:
          'Just Dance 2021 é um jogo de ritmo de dança desenvolvido pela Ubisoft. Foi revelado em 26 de agosto de 2020 durante a apresentação na web Nintendo Direct Mini. Vem de uma longa série de jogos que começaram a ser lançados desde 2009.',
        picture:
          'https://s2.glbimg.com/GYGivjqzQx-LlulKgtj1D543ODs=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/t/M/kZ2wlTQemTthuwQEI8xQ/just-dance-2021-switch-ps4-xbox-one.jpg',
        metacritic_score: 70,
        release_date: new Date(2020, 10, 12),
      }),

      Game.create({
        publisher: publishers[18],
        genre: genres[6],
        title: 'Project Sekai: Colorful Stage feat. Hatsune Miku',
        description:
          'Projeto Sekai: Palco Colorido! Parceria. Hatsune Miku é um jogo de ritmo móvel japonês desenvolvido pela Paleta colorida e Craft Egg da CyberAgent, e publicado pela Sega Corporation.',
        picture:
          'https://i0.wp.com/storage.qoo-app.com/game/9038/UCdeuPCoa0bB0bPSTbsPYif20Qzf5o4k.jpg',
        metacritic_score: 84,
        release_date: new Date(2020, 8, 30),
      }),

      Game.create({
        publisher: publishers[13],
        genre: genres[6],
        title: 'Patapon Remastered',
        description:
          'Patapon é um jogo de plataforma em 2D onde os patapons se movimentam com base no ritmo dos tambores tocados. A tribo Patapon viveu na fronteira devastada por muitos anos, depois de ser expulsa de sua terra natal pelo perverso exército Zigoton. A aparência bonitinha dos Patapons esconde um espírito de guerreiro impiedoso que só pode ser comandado pelo ritmo dos tambores de guerra do Deus deles.',
        picture:
          'https://www.wasd.pt/wp-content/uploads/2017/07/patapon-remastered-listing-thumb-01-ps4-us-03dec16.png',
        metacritic_score: 72,
        release_date: new Date(2017, 7, 1),
      }),

      Game.create({
        publisher: publishers[19],
        genre: genres[6],
        title: 'Rock Band 4',
        description:
          'Rock Band 4 é um videogame musical de 2015 desenvolvido e publicado pela Harmonix. Rock Band 4 permite que os jogadores simulem a reprodução de música em muitas décadas e gêneros diferentes usando controladores de instrumentos que imitam tocar guitarra solo e baixo, bateria e voz.',
        picture: 'https://www.gamereactor.pt/media/41/jarokkiso_1404104.png',
        metacritic_score: 78,
        release_date: new Date(2015, 9, 6),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[6],
        title: "Taiko No Tatsujin: Drum 'n' fun!",
        description:
          "Taiko no Tatsujin: Drum 'n' Fun !, lançado na Ásia como Taiko no Tatsujin: Nintendo Switch Version !, é um jogo de ritmo desenvolvido e publicado pela Bandai Namco Entertainment.",
        picture:
          'https://cdn01.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_TaikoNoTatsujinDrumnFun_image500w.jpg',
        metacritic_score: 78,
        release_date: new Date(2018, 10, 2),
      }),

      Game.create({
        publisher: publishers[1],
        genre: genres[6],
        title: 'Just Dance 2018',
        description:
          'Just Dance 2018, faz parte da série de jogos eletrônicos Just Dance, produzida pela empresa francesa Ubisoft. O jogo foi anunciado no evento Electronic Entertainment Expo, onde foi publicada a primeira parte da lista de músicas do jogo, no caso as 12 primeiras músicas.',
        picture:
          'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_JustDance2018_image1600w.jpg',
        metacritic_score: 75,
        release_date: new Date(2017, 9, 24),
      }),

      Game.create({
        publisher: publishers[1],
        genre: genres[6],
        title: 'Just Sing',
        description:
          'Just Sing é um jogo de vídeo karaokê desenvolvido pela iNiS e publicado pela Ubisoft, que foi lançado para o PlayStation 4 e Xbox One em 6 de setembro de 2016.',
        picture:
          'https://ubistatic19-a.akamaihd.net/ubicomstatic/pt-br/global/search-thumbnail/750x422_mobile_246524.jpg',
        metacritic_score: 60,
        release_date: new Date(2016, 8, 6),
      }),

      /**
       * Genre 7
       */
      Game.create({
        publisher: publishers[3],
        genre: genres[7],
        title: 'MADDEN NFL 2003',
        description:
          'Madden NFL 2003 é um videogame de simulação de futebol americano baseado na NFL, desenvolvido pela EA Tiburon e Budcat Creations e publicado pela EA Sports em 12 de Agosto de 2012 para a plataforma de Playstation 2.',
        picture: 'https://upload.wikimedia.org/wikipedia/en/7/75/Madden2003Box.jpg',
        metacritic_score: 95,
        release_date: new Date(2012, 7, 12),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[7],
        title: 'FIFA 21',
        description:
          'FIFA 21 é um videogame de simulação de esportes desenvolvido pela Electronic Arts e publicado pela mesma empresa. O jogo foi anunciado em 19 de junho de 2020.',
        picture:
          'https://upload.wikimedia.org/wikipedia/pt/thumb/7/76/EA_Sports_FIFA_21.jpg/250px-EA_Sports_FIFA_21.jpg',
        metacritic_score: 74,
        release_date: new Date(2020, 5, 19),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[7],
        title: 'NHL 21',
        description:
          "NHL 21 é um jogo simulação de hockey de gelo desenvolvido pela Eletronic Art's de Vancouver e publicada pela EA Sports. é o 30º jogo da série e foi anunciado para Playstation 4 e Xbox One em Outubro de 2020.",
        picture:
          'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/NHL_21_cover_art.jpg/220px-NHL_21_cover_art.jpg',
        metacritic_score: 81,
        release_date: new Date(2020, 9, 13),
      }),

      Game.create({
        publisher: publishers[38],
        genre: genres[7],
        title: 'NBA 2K21',
        description:
          'NBA 2K21 é um jogo simulador de basquete no qual foi foi desenvolvido pela Visual Concepts e publicado pela 2K Sports, baseado na associação nacional de basquete (NBA). Ele foi anunciado em 4 de setembro de 2020, para Windows, Nintendo Switch, Playstation 4, Xbox One e Stadia.',
        picture:
          'https://upload.wikimedia.org/wikipedia/en/a/a2/NBA_2K21_-_Damian_Lilliard_cover_art.jpg',
        metacritic_score: 79,
        release_date: new Date(2020, 8, 4),
      }),

      Game.create({
        publisher: publishers[9],
        genre: genres[7],
        title: 'PES 2021',
        description:
          'PES 2021 é um jogo eletrônico de futebol desenvolvido pela PES Production e publicado pela Konami. O jogo foi lançado em 15 de Setembro de 2020, e é o 20° lançamento da série Pro Evolution Soccer, o segundo com o nome eFootball no título.',
        picture:
          'https://programadoresbrasil.com.br/wp-content/uploads/2020/10/mock-visual_pes2021.jpg',
        metacritic_score: 73,
        release_date: new Date(2020, 8, 15),
      }),

      Game.create({
        publisher: publishers[5],
        genre: genres[7],
        title: "TONY HAWK'S PRO SKATER 1+2",
        description:
          "Tony Hawk's Pro Skater 1 + 2 é um jogo eletrônico de skate desenvolvido pela Vicarious Visions e publicado pela Activision. Foi lançado em 4 de setembro de 2020 para Microsoft Windows, PlayStation 4 e Xbox One. É um remake de Tony Hawk's Pro Skater (1999) e Tony Hawk's Pro Skater 2 (2000) e o primeiro grande título da série desde Tony Hawk's Pro Skater 5 (2015).",
        picture:
          'https://cdn2.unrealengine.com/egs-tonyhawksproskater12-vicariousvisions-s6-1200x1600-914784345.jpg',
        metacritic_score: 88,
        release_date: new Date(2020, 8, 4),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[7],
        title: 'CAPTAIN TSUBASA: RYSE OF NEW CHAMPIONS',
        description:
          'Captain Tsubasa: Rise of New Champions é um videogame de futebol desenvolvido pela Tamsoft e produzido pela empresa japonesa Bandai Namco Entertainment. É baseado no mangá e anime Captain Tsubasa (Super Campeões no Brasil).Foi lançado em 28 de agosto de 2020 no PlayStation 4, Nintendo Switch e Microsoft Windows.',
        picture:
          'https://image.api.playstation.com/vulcan/ap/rnd/202007/0208/l1JkNQ9xmY9sYRV8Dl0hwc0e.png',
        metacritic_score: 71,
        release_date: new Date(2020, 7, 28),
      }),

      Game.create({
        publisher: publishers[39],
        genre: genres[7],
        title: 'Skater XL',
        description:
          'Skater XL é um jogo eletrônico simulador de skate desenvolvido e publicado pela Easy Day Studios. Seu lançamento foi em 28 de julho de 2020, para PC, PS4 e XBOX ONE.',
        picture: 'https://steamcdn-a.akamaihd.net/steam/apps/962730/header.jpg?t=1595948838',
        metacritic_score: 71,
        release_date: new Date(2020, 6, 28),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[7],
        title: 'FIFA 20',
        description:
          'FIFA 20 é um videogame de simulação de esportes desenvolvido pela Electronic Arts e publicado pela mesma empresa. O jogo foi anunciado em 19 de junho de 2020.',
        picture: 'https://upload.wikimedia.org/wikipedia/pt/4/46/Fifa-20-Cover.jpg',
        metacritic_score: 79,
        release_date: new Date(2019, 8, 24),
      }),

      Game.create({
        publisher: publishers[18],
        genre: genres[7],
        title: 'MARIO & SONIC AT OLYMPIC GAMES: TOKYO 2020',
        description:
          'Se trata de um jogo de esportes de 2019 baseado nos Jogos Olímpicos de 2020. É o sexto jogo da série Mario & Sonic, um crossover entre as franquias Super Mario da Nintendo e Sonic the Hedgehog da Sega, e o primeiro desde a edição dos Jogos Olímpicos Rio 2016.',
        picture:
          'https://gamernews.com.br/wp-content/uploads/2019/09/gamernews-Mario-Sonic-at-the-Olympic-Games.jpg',
        metacritic_score: 79,
        release_date: new Date(2019, 11, 1),
      }),

      /**
       * Genre 8
       */
      Game.create({
        publisher: publishers[12],
        genre: genres[8],
        title: 'Microsoft Flight Simulator',
        description:
          'Microsoft Flight Simulator é uma franquia de simuladores de vôo virtuais para computador e console. Criado pela Microsoft para uso doméstico, a série conta com 13 títulos disponíveis e este, recém lançado.',
        picture: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1250410/capsule_616x353.jpg',
        metacritic_score: 91,
        release_date: new Date(2020, 7, 18),
      }),

      Game.create({
        publisher: publishers[4],
        genre: genres[8],
        title: 'Ace Combat 7',
        description:
          'Ace Combat 7: Skies Unknown é um jogo eletrônico de simulação de combate aéreo desenvolvido pela Bandai Namco Studios e publicado pela Bandai Namco Entertainment.',
        picture:
          'https://cdn-ext.fanatical.com/production/product/original/b44201ee-ba32-4b3d-8d20-37c028a8d200.jpeg',
        metacritic_score: 80,
        release_date: new Date(2019, 0, 18),
      }),

      Game.create({
        publisher: publishers[20],
        genre: genres[8],
        title: 'Bomber Crew',
        description:
          'Bomber Crew é um videogame de estratégia em tempo real desenvolvido pela Runner Duck e publicado pela Curve Digital. Foi lançado no Microsoft Windows, OS X e Linux em 19 de outubro de 2017. Foi lançado para PlayStation 4, Xbox One e Nintendo Switch em 10 de julho de 2018.',
        picture: 'https://cdn.cloudflare.steamstatic.com/steam/apps/537800/capsule_616x353.jpg',
        metacritic_score: 75,
        release_date: new Date(2017, 9, 19),
      }),

      Game.create({
        publisher: publishers[21],
        genre: genres[8],
        title: 'War Thunder',
        description:
          'War Thunder é um simulador de combates aéreos, navais e blindados, ambientado durante a Segunda Guerra Mundial e Guerra Fria, desenvolvido e publicado pela desenvolvedora russa Gaijin Entertainment. War Thunder concorre diretamente com World of Tanks, World of Warplanes, e World of Warships.',
        picture:
          'https://mmorpgbr.com.br/como-diminuir-o-lag-em-war-thunder/news_event_korean_war_com_3ed51536945a9eb23d688cb032db66d5-2/',
        metacritic_score: 76,
        release_date: new Date(2014, 5, 3),
      }),

      Game.create({
        publisher: publishers[12],
        genre: genres[8],
        title: 'Ride 4',
        description:
          'Ride 4 é um jogo de simulação de corrida de motocicletas, desenvolvido pela Milestone e publicado pela Deep Silver, foi lançado em 05 de outubro de 2020.',
        picture: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1259980/header.jpg',
        metacritic_score: 75,
        release_date: new Date(2020, 9, 5),
      }),

      Game.create({
        publisher: publishers[23],
        genre: genres[8],
        title: 'Dirt 5',
        description:
          'Dirt 5 é um videogame de corrida desenvolvido e publicado pela Codemasters. É o décimo quarto jogo da série Colin McRae Rally e o oitavo jogo a levar o título Dirt.',
        picture: 'https://www.codemasters.com/wp-content/uploads/2020/05/hero_dirt5.jpg',
        metacritic_score: 79,
        release_date: new Date(2020, 10, 6),
      }),

      Game.create({
        publisher: publishers[12],
        genre: genres[8],
        title: 'Forza Horizon 4',
        description:
          'Forza Horizon 4 é um jogo de corrida em mundo aberto desenvolvido pela Playground Games em colaboração com a Turn 10 e publicado pela Xbox Game Studios, que na época do lançamento ainda era conhecida como Microsoft Studios. É o quarto da franquia Forza Horizon e o décimo primeiro da edição Forza.',
        picture:
          'https://compass-ssl.xbox.com/assets/6a/31/6a31393d-b0cc-4833-8e82-fd3a2c6b6e19.jpg',
        metacritic_score: 92,
        release_date: new Date(2018, 8, 28),
      }),

      Game.create({
        publisher: publishers[23],
        genre: genres[8],
        title: 'Dirt Rally 2.0',
        description:
          'Dirt Rally 2.0 é um jogo de corrida desenvolvido e publicado pela Codemasters para o Microsoft Windows, PlayStation 4 e Xbox One. Foi lançado em 26 de fevereiro de 2019. O jogo é o décimo terceiro título da série Colin McRae Rally e o sétimo título para levar o nome Dirt.',
        picture: 'https://www.wasd.pt/wp-content/uploads/2018/12/dirtrally2_2019.jpg',
        metacritic_score: 84,
        release_date: new Date(2019, 1, 26),
      }),

      Game.create({
        publisher: publishers[3],
        genre: genres[8],
        title: 'Need For Speed: Hot Pursuit Remastered',
        description:
          'Need for Speed: Hot Pursuit é um jogo de corrida desenvolvido pela Criterion Games e publicado pela Electronic Arts. O jogo foi lançado em 13 de Novembro de 2020.',
        picture:
          'https://media.contentapi.ea.com/content/dam/eacom/need-for-speed-hot-pursuit-remastered/images/2020/09/nfs-youtube-cover-image-16x9-l.jpg.adapt.crop16x9.320w.jpg',
        metacritic_score: 76,
        release_date: new Date(2020, 10, 13),
      }),

      Game.create({
        publisher: publishers[12],
        genre: genres[8],
        title: 'Forza Motorsport 7',
        description:
          'Forza Motorsport 7 é um jogo de corrida desenvolvido pela Turn 10 Studios e publicado pela Xbox Game Studios Exclusivamente para o Xbox One e Windows 10. Foi lançado no dia 03 de Outubro de 2017. É o décimo jogo da franquia na série Forza, o sétimo na série principal.',
        picture:
          'https://compass-ssl.xbox.com/assets/3f/89/3f894a57-17c3-4242-acce-ab098f0dd90b.jpg?n=FM7_GLP-Hero-0_1083x680_02.jpg',
        metacritic_score: 86,
        release_date: new Date(2017, 9, 3),
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM game WHERE id > 0;');
    await queryRunner.query('DELETE FROM genre WHERE id > 0;');
    await queryRunner.query('DELETE FROM publisher WHERE id > 0;');
  }
}

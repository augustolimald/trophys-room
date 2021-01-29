import { BaseEntity, Column, OneToOne, JoinColumn, Entity, PrimaryColumn } from 'typeorm';
import { User } from './User';
import { Game } from './Game';

@Entity('review', { withoutRowid: true })
export class Review extends BaseEntity {
  @PrimaryColumn()
  id_game: number;

  @PrimaryColumn()
  id_user: number;

  @OneToOne(type => Game, game => game.reviews)
  @JoinColumn({ name: 'id_game' })
  game: Game;

  @OneToOne(type => User, user => user.reviews)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @Column()
  score: number;

  @Column()
  comment: string;

  public filterFields(): any {
    return {
      user: {
        id: this.user.id,
        name: this.user.name,
      },
      game: this.game,
      score: this.score,
      comment: this.comment,
    };
  }
}

import { BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { Game } from './Game';

@Entity('genre')
export class Genre extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Game, game => game.genre)
  games: Game[];
}

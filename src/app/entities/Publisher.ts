import { BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';
import { Game } from './Game';

@Entity('publisher')
export class Publisher extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Game, game => game.publisher)
  games: Game[];
}

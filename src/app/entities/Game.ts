import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  Entity,
} from 'typeorm';
import { Genre } from './Genre';
import { Review } from './Review';
import { Publisher } from './Publisher';

@Entity('game')
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Publisher, { eager: true })
  @JoinColumn({ name: 'id_publisher' })
  publisher: Publisher;

  @OneToOne(type => Genre, { eager: true })
  @JoinColumn({ name: 'id_genre' })
  genre: Genre;

  @OneToMany(type => Review, review => review.game)
  reviews: Review[];

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @Column()
  metacritic_score: number;

  @Column()
  release_date: Date;

  getAverageScore(): number {
    return this.reviews && this.reviews.length > 0
      ? this.reviews.reduce((sum, review) => sum + review.score, 0) / this.reviews.length
      : 0;
  }
}

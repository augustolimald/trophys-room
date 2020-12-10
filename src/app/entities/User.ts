import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  Entity,
} from 'typeorm';
import bcrypt from 'bcrypt';
import Env from '../../env';
import { Review } from './Review';

@Entity('user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ default: 'default-user.jpg' })
  profile_picture: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @Column({ default: false })
  admin: boolean;

  @OneToMany(type => Review, review => review.game)
  reviews: Review[];

  public filterFields(): any {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      profile_picture: `${Env.get('URL')}/api/files/${this.profile_picture}`,
      admin: this.admin,
    };
  }

  /**
   * Password Encryption
   */
  private tmp_password;

  @AfterLoad()
  private loadPassword(): void {
    this.tmp_password = this.password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  private encryptPassword(): void {
    if (this.tmp_password === '' || this.tmp_password !== this.password) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }

  public comparePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
  @Column('varchar', {
    unique: true,
  })
  username: string;

  @Column('varchar')
  password: string;

  @Column('boolean', { default: true })
  is_user: boolean;

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('boolean', { default: true })
  estado: boolean;
}

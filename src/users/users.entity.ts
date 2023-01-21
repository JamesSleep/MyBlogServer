import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class User extends CommonEntity {
  @IsNotEmpty()
  @Column({ nullable: true })
  uid: string;

  @IsNotEmpty()
  @Column({ nullable: true })
  password: string;

  @IsNotEmpty()
  @Column()
  name: string;

  @IsNotEmpty()
  @Column()
  ip: string;
}

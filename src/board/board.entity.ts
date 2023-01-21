import { CommonEntity } from 'src/common/entities/common.entity';
import { Column } from 'typeorm';

export class Board extends CommonEntity {
  @Column()
  title: string;

  @Column()
  content: string;
}

import { CommonEntity } from 'src/common/entities/common.entity';
import { Column } from 'typeorm';

export class Category extends CommonEntity {
  @Column()
  name: string;
}

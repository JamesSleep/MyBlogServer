import { CommonEntity } from "src/common/entities/common.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends CommonEntity {
    @Column({ nullable: true })  
    uid: string;

    @Column({ nullable: true })
    password: string;

    @Column()
    name: string;
}
import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    PrimaryGeneratedColumn,
  } from "typeorm";

import { UserInfo } from "./userInfo.entity";
import { Exclude } from "class-transformer";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 250 })
    name: string;

    @Column({ length: 250 })
    email: string;

    @Column({ length: 250 })
    password: string;

    @Column({ nullable: false })
    purchaser: boolean;

    @Column({ nullable: false })
    seller: boolean;

    @Column()
    CPF: number;

    @Column()
    birthday: Date;

    @OneToMany(() => UserInfo, (userInfo) => userInfo.user, {
        eager: true,
      })
      @Exclude()
      @JoinTable()
      userInfo: UserInfo;

}
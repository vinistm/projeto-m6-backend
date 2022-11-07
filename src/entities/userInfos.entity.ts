import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
@Entity("user_info")
export class UserInfo {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  user: User;

  @Column({ nullable: true })
  CPF: number;

  @Column({ nullable: true })
  telephone: number;

  @Column({ nullable: true })
  birthday: number;

  @Column({ nullable: true })
  CEP: number;

  @Column({ nullable: true })
  address: number;

  @Column({ nullable: true })
  num: number;

  @Column({ nullable: true })
  complement: string;

  @Column()
  descriptions:string;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
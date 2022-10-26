import{
    Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,OneToMany
} from "typeorm"

import { User } from "../User/user.entity";
export enum VeiculeType{
    CAR = 'car',
    MOTORCYCLE = 'mortorcycle',
}
@Entity("veicule")
export class Veicule{
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column({length:256})
    title:string;
    @Column({length:256})
    description:string;
    @Column({length:256})
    km:number;
    @Column()
    year:number;
    @Column()
    value:number;
    @Column({type:"simple-enum", enum:VeiculeType,default:VeiculeType.CAR})
    type:string;
    @Column()
    status:boolean;
    @CreateDateColumn()
    date_public:Date
    @OneToMany(() => User, (user) => user.id,{eager:true})
    users:User[];

}
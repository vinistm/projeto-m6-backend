import{
    Entity,Column,PrimaryGeneratedColumn,CreateDateColumn, ManyToOne
} from "typeorm"
import { User } from "./user.entity";

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

    @Column()
    description:string;

    @Column()
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

    @ManyToOne(()=> User,(user)=> user.id)
    user:User;
    

}
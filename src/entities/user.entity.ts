import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinTable , OneToMany} from "typeorm";
import {v4 as uuid} from "uuid";
import { Veicule } from "./veicule.entity";

@Entity("users")


class User{
    @PrimaryGeneratedColumn("uuid")
    readonly id:string

    @Column({length:255})
    name:string

    @Column()
    email:string

    @Column()
    password: string
    
    @Column()
    purcharser: boolean
    
    @Column()
    seller: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor(){
        if(!this.id){
            this.id= uuid()
        }
    }
    @OneToMany(() => Veicule,(veicule) => veicule.user)
    @JoinTable()
    veicule:Veicule[]
}
export {User}
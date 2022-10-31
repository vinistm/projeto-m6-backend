import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

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
}
export {User}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'client'})
export class ClientEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    name:string
    @Column()

    image:string
    
}
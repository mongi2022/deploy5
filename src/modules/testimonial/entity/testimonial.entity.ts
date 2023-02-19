import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'testimonial'})
export class TestimonialEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    text: string 
    @Column()

    author:string
    @Column()

    position: string
    @Column()

    image: string
}
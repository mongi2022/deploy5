import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'social'})
export class SocialEntity{
    @PrimaryGeneratedColumn()
id:number

@Column()
twitter: string
@Column()
linkedin:string
@Column()
instagram:string
@Column()
website:string


}


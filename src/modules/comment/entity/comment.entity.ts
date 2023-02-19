import { SocialEntity } from "src/modules/social/entity/social.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'comment'})
export class CommentEntity{
    @PrimaryGeneratedColumn()
id:number
@Column({nullable:true})
author:string
@Column({nullable:true})

avatar:string
@Column({nullable:true})

tooltip:string
@Column({nullable:true})

icon:string
@Column({nullable:true})

date:Date=new Date()
@Column({nullable:true,length:500})

text:string



}



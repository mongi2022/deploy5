import { PropertyEntity } from "src/modules/property/entity/property.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'videos'})
export class VideosEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    name:string
    @Column({nullable:true})
    link:string
    @ManyToOne(() => PropertyEntity, (property: PropertyEntity) => property.videos,{onDelete:"CASCADE",onUpdate:"CASCADE"})
     property: PropertyEntity; 

}
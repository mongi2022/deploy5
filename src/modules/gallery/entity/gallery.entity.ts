import { PropertyEntity } from "src/modules/property/entity/property.entity"
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'gallery'})
export class GalleryEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})
    small:string
    @Column({nullable:true})
    medium:string
    @Column({nullable:true})
    big:string
 
    @ManyToOne(() => PropertyEntity, (property: PropertyEntity) => property.gallery,{onDelete:"CASCADE",onUpdate:"CASCADE"})

    public property: PropertyEntity; 
   



}
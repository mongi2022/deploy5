import { PropertyEntity } from "src/modules/property/entity/property.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'localisation'})
export class LocalisationEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    lat:number
    @Column()

    lng:number



    @OneToOne(() => PropertyEntity, property => property.location,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    @JoinColumn({name:'propertyId'})

    property: PropertyEntity; 




}
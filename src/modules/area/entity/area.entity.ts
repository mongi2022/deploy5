import { PropertyEntity } from "src/modules/property/entity/property.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'area'})
export class AreaEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    value:number
    @Column()

    unit:string


    @OneToOne(() => PropertyEntity, property => property.area,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    @JoinColumn({name:'propertyId'})

    property: PropertyEntity; 


}
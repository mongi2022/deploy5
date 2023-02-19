import { PropertyEntity } from "src/modules/property/entity/property.entity"
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'price'})
export class PriceEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column({nullable:true})

    sale:number
    @Column({nullable:true})

    rent:number

    @OneToOne(() => PropertyEntity, property => property.priceDollar,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    @JoinColumn({name:'propertyId'})
    property:PropertyEntity




}
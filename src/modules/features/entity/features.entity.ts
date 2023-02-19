import { Exclude } from "class-transformer";
import { PropertyEntity } from "src/modules/property/entity/property.entity"
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { FeatureEnum } from "../enum/feature.enum";
@Entity({name:'features'})
export class FeaturesEntity{

    @PrimaryGeneratedColumn()
    id:number
    
    @Column({length:50   
    
    })
    desc:string
    
    @ManyToOne(type => PropertyEntity, property => property.features,{onDelete:"CASCADE",onUpdate:"CASCADE"})
    property: PropertyEntity;

  

}
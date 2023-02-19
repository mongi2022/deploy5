import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'featurelist'})
export class FeaturelistEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    name:string
    @Column()
    selected:boolean
  
    
}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'featurelistTerrain'})
export class FeaturelistTerrainEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    name:string
    @Column()
    selected:boolean
 
}
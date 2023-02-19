import { PropertyEntity } from "src/modules/property/entity/property.entity"
import { VilleEntity } from "src/modules/Ville/entity/ville.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
@Entity({name:'neighborhood'})
export class NeighborhoodEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    name:string
 
 
    @ManyToOne(() => VilleEntity, (ville: VilleEntity) => ville.neighborhood,{cascade:true,eager:true})
    public city: VilleEntity; 
   



}
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name:'house'})
export class HouseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()

    price:number
    @Column()

    nb_chambre:number
    @Column()

    couvert:number
    @Column()

    sal_bain:number
    @Column()

    nb_etage:number
    @Column({nullable:true})

    constr_year:Date
    @Column()

    commission:boolean
    @Column({default:true,nullable:true})

    caution:boolean
    @Column()

    loyer:number
    @Column()

    titre_bleu:boolean
    @Column()

    surface_terrain:number
    
}
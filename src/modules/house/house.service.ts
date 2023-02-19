import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { HouseDTO } from "./dto/house.dto";
import { HouseEntity } from "./entity/house.entity";

@Injectable()
export class HouseService{
constructor(@InjectRepository(HouseEntity) private readonly houseRepository:Repository<HouseEntity>){}


getAllHouse(){
    return this.houseRepository.find();
}

getHouseById(id:number){
    return this.houseRepository.findOne({where:{id}})
}
 async createHouse(houseDTO:HouseDTO){
    const house=new HouseEntity()
    house.caution=houseDTO.caution
    house.nb_chambre=houseDTO.nb_chambre
    house.commission=houseDTO.commission
    house.couvert=houseDTO.couvert
    house.loyer=houseDTO.loyer
    house.nb_etage=houseDTO.nb_etage
    house.price=houseDTO.price
    house.sal_bain=houseDTO.sal_bain
    house.surface_terrain=houseDTO.surface_terrain
    house.titre_bleu=houseDTO.titre_bleu

    const houseRes=this.houseRepository.create(house)
    await this.houseRepository.save(houseRes)
    return houseRes
}

async updateHouse(id:number,houseDTO:Partial<HouseDTO>){
    await this.houseRepository.update(id,houseDTO)
    const houseUppdated= await this.houseRepository.findOne({where:{id}})
    if(houseUppdated==null) throw new NotFoundException(`House n° ${id} n'existe pas`)

    return houseUppdated

    
}
async deleteHouse(id:number){
    const deletedHouse= await this.houseRepository.findOne({where:{id}})
    if(deletedHouse==null) throw new NotFoundException(`House n° ${id} n'existe pas`)

    await this.houseRepository.delete({id})
    return deletedHouse
}
}
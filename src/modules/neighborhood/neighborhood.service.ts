import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { VilleEntity } from "../Ville/entity/ville.entity";
import { NeighborhoodDTO } from "./dto/neighborhood.dto";
import { NeighborhoodEntity } from "./entity/neighborhood.entity";

@Injectable()
export class NeighborhoodService{
constructor(@InjectRepository(NeighborhoodEntity) private readonly neighborhoodRepository:Repository<NeighborhoodEntity>,){}
            @InjectRepository(VilleEntity) private readonly villeRepository:Repository<VilleEntity>

getAllNeighborhood(){
    return this.neighborhoodRepository.find();
}
getNeighborhoodById(id:number){
   
    const neighborhood= this.neighborhoodRepository.findOne({where:{id}})
    return neighborhood
} 

 getNeighborhoodByCity(cityId:number){

 
   const regions = this.neighborhoodRepository.query(`SELECT * FROM neighborhood where cityId=${cityId}`);


    return regions
}

    async createNeighborhood(cityId:number,neighborhoodDTO:NeighborhoodDTO){
        const city = await this.villeRepository.findOne({ where: { id: cityId } });
        const savedNeighborhood = await this.neighborhoodRepository.create({
            ...neighborhoodDTO,
            city,
          });
          await this.neighborhoodRepository.save(savedNeighborhood);
         return savedNeighborhood
    

}

async updateNeighborhood(id:number, data:Partial<NeighborhoodDTO>){
    await this.neighborhoodRepository.update(id,data)
    const updatedVideo=await this.neighborhoodRepository.findOne({where:{id}})
    if(updatedVideo==null) throw new NotFoundException(`Feature n° ${id} n'existe pas`)

    return updatedVideo
}

async deleteNeighborhood(id:number){
    const deletedVideo= await this.neighborhoodRepository.findOne({where:{id}})
    if(deletedVideo==null) throw new NotFoundException(`Feature n° ${id} n'existe pas`)

    await this.neighborhoodRepository.delete({id})
    return deletedVideo
}
}
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FeaturelistTerrainDTO } from "./dto/featuresList.dto";
import { FeaturelistTerrainEntity } from "./entity/featuresListTerrain.entity";

@Injectable()
export class FeaturelistTerrainService{
constructor(@InjectRepository(FeaturelistTerrainEntity) private readonly featurelistTerrainRepository:Repository<FeaturelistTerrainEntity>){}


getAllFeaturelistTerrain(){
    return this.featurelistTerrainRepository.find();
}
async getFeaturelistTerrainById(id:number){
    return await this.featurelistTerrainRepository.findOne({where:{id}})
}
async createFeaturelistTerrain(data:FeaturelistTerrainDTO):Promise<FeaturelistTerrainEntity>{
 

        const featurelistTerrain = await this.featurelistTerrainRepository.create(data );
        return this.featurelistTerrainRepository.save(featurelistTerrain);
      
}

async updateFeaturelistTerrain(id:number,data:Partial<FeaturelistTerrainDTO> ){
 await this.featurelistTerrainRepository.update({id},data)
 const newFeaturelistTerrain=await this.featurelistTerrainRepository.findOne({where:{id}})
 if(newFeaturelistTerrain==null) throw new NotFoundException(`FeaturelistTerrain n° ${id} n'existe pas`)

 return newFeaturelistTerrain

}

async deleteFeaturelistTerrain(id:number){
  const deleted=  await this.featurelistTerrainRepository.findOne({where:{id}})
  if(deleted==null) throw new NotFoundException(`FeaturelistTerrain n° ${id} n'existe pas`)
    await this.featurelistTerrainRepository.delete({id})
    return deleted

}
}
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FeaturelistDTO } from "./dto/featuresList.dto";
import { FeaturelistEntity } from "./entity/featuresList.entity";

@Injectable()
export class FeaturelistService{
constructor(@InjectRepository(FeaturelistEntity) private readonly featurelistRepository:Repository<FeaturelistEntity>){}


getAllFeaturelist(){
    return this.featurelistRepository.find();
}
async getFeaturelistById(id:number){
    return await this.featurelistRepository.findOne({where:{id}})
}
async createFeaturelist(data:FeaturelistDTO):Promise<FeaturelistEntity>{
 

        const featurelist = await this.featurelistRepository.create(data );
        return this.featurelistRepository.save(featurelist);
      
}

async updateFeaturelist(id:number,data:Partial<FeaturelistDTO> ){
 await this.featurelistRepository.update({id},data)
 const newFeaturelist=await this.featurelistRepository.findOne({where:{id}})
 if(newFeaturelist==null) throw new NotFoundException(`Featurelist n° ${id} n'existe pas`)

 return newFeaturelist

}

async deleteFeaturelist(id:number){
  const deleted=  await this.featurelistRepository.findOne({where:{id}})
  if(deleted==null) throw new NotFoundException(`Featurelist n° ${id} n'existe pas`)
    await this.featurelistRepository.delete({id})
    return deleted

}
}
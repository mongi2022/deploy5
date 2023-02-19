import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { FeaturesDTO } from "./dto/features.dto";
import { FeaturesEntity } from "./entity/features.entity";

@Injectable()
export class FeaturesService{
constructor(@InjectRepository(FeaturesEntity) 
            private readonly featuresRepository:Repository<FeaturesEntity>,
            @InjectRepository(PropertyEntity) private readonly propertyRepository:Repository<PropertyEntity>){}


getAllFeatures(){
    return this.featuresRepository.find();
}
getFeaturesById(id:number){
   
    const features= this.featuresRepository.findOne({where:{id}})
    return features
}

async createFeatures(propertyId:number,featureDTO:FeaturesDTO){
    
   const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
    
    const savedFeature = await this.featuresRepository.create({
        ...featureDTO,
         property,
      });
      await this.featuresRepository.save(savedFeature);
     return savedFeature


}

async updateFeatures(id:number, data:Partial<FeaturesDTO>){
    await this.featuresRepository.update(id,data)
    const updatedLocal=await this.featuresRepository.findOne({where:{id}})
    if(updatedLocal==null) throw new NotFoundException(`Feature n° ${id} n'existe pas`)

    return updatedLocal
}

async deleteFeatures(id:number){
    const deletedLocal= await this.featuresRepository.findOne({where:{id}})
    if(deletedLocal==null) throw new NotFoundException(`Feature n° ${id} n'existe pas`)

    await this.featuresRepository.delete({id})
    return deletedLocal
}
}
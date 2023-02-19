import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { LocalisationDTO } from "./dto/localisation.dto";
import { LocalisationEntity } from "./entity/localisation.entity";

@Injectable()
export class LocalisationService{
constructor(@InjectRepository(LocalisationEntity)
            private readonly localisationRepository:Repository<LocalisationEntity>,
            @InjectRepository(PropertyEntity) private propertyRepository:Repository<PropertyEntity>){}


getAllLocalisation(){
    return this.localisationRepository.find();
}
getLocalisationById(id:number){
   
    const localisation= this.localisationRepository.findOne({where:{id}})
    return localisation
}



async createLocalisation(propertyId:number,localDTO:LocalisationDTO){
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });

           const localSaved= await this.localisationRepository.create({
    ...localDTO,
      property,
   })
  console.log(property.location);
   console.log(propertyId);

 //  if(property.id==propertyId)  throw new NotFoundException(`La localisation existe déja`)
  
     await this.localisationRepository.save(localSaved)
   return localSaved
   
    
   }
   
  





async updateLocalisation(id:number, data:Partial<LocalisationDTO>){
    await this.localisationRepository.update(id,data)
    const updatedLocal=await this.localisationRepository.findOne({where:{id}})
    if(updatedLocal==null) throw new NotFoundException(`Localisation n° ${id} n'existe pas`)

    return updatedLocal
}

async deleteLocalisation(id:number){
    const deletedLocal= await this.localisationRepository.findOne({where:{id}})
    if(deletedLocal==null) throw new NotFoundException(`Localisation n° ${id} n'existe pas`)

    await this.localisationRepository.delete({id})
    return deletedLocal
}
}
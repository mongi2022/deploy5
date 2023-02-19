import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PriceDTO } from "./dto/price.dto";
import { PriceEntity } from "./entity/price.entity";

@Injectable()
export class PriceService{
constructor(@InjectRepository(PriceEntity) private readonly priceRepository:Repository<PriceEntity>,
@InjectRepository(PropertyEntity) private readonly propertyRepository:Repository<PropertyEntity>){}


getAllPrice(){
    return this.priceRepository.find();
}
getPriceById(id:number){
   
    const price= this.priceRepository.findOne({where:{id}})
    return price
}


async createPrice(propertyId:number,priceDTO:PriceDTO){
   
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
    const price = await this.priceRepository.findOne({ where: { id: propertyId } });
     console.log(price);
     
    if(price!=null) {
           throw new NotFoundException(`Appartement n° ${propertyId} n'existe pas`)
    }  else if(price==null) {
         const priceSaved= await this.priceRepository.create({
    ...priceDTO,
      property,
   })
  
   await this.priceRepository.save(priceSaved)
   return priceSaved
    }


    
   
         
     
  



}

async updatePrice(id:number, data:Partial<PriceDTO>){
    await this.priceRepository.update(id,data)
    const updatedVideo=await this.priceRepository.findOne({where:{id}})
    if(updatedVideo==null) throw new NotFoundException(`Price n° ${id} n'existe pas`)

    return updatedVideo
}

async deletePrice(id:number){
    const deletedVideo= await this.priceRepository.findOne({where:{id}})
    if(deletedVideo==null) throw new NotFoundException(`Price n° ${id} n'existe pas`)

    await this.priceRepository.delete({id})
    return deletedVideo
}
}
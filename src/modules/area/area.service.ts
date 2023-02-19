import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { AreaDTO } from "./dto/area.dto";
import { AreaEntity } from "./entity/area.entity";

@Injectable()
export class AreaService{
constructor(@InjectRepository(AreaEntity) private readonly areaRepository:Repository<AreaEntity>,
@InjectRepository(PropertyEntity) private readonly propertyRepository:Repository<PropertyEntity>){}



getAllArea(){
    return this.areaRepository.find();
}
getAreaById(id:number){
   
    const area= this.areaRepository.findOne({where:{id}})
    return area
}


async createArea(propertyId:number,areaDTO:AreaDTO){
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
  
   const areaSaved= await this.areaRepository.create({
    ...areaDTO,
    property,
   })
   
   await this.areaRepository.save(areaSaved)
   return areaSaved

}


async updateArea(id:number, data:Partial<AreaDTO>){
    await this.areaRepository.update(id,data)
    const updatedVideo=await this.areaRepository.findOne({where:{id}})
    if(updatedVideo==null) throw new NotFoundException(`Area n° ${id} n'existe pas`)

    return updatedVideo
}

async deleteArea(id:number){
    const deletedVideo= await this.areaRepository.findOne({where:{id}})
    if(deletedVideo==null) throw new NotFoundException(`Area n° ${id} n'existe pas`)

    await this.areaRepository.delete({id})
    return deletedVideo
}
}
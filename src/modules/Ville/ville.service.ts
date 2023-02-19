import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VilleDTO } from "./dto/ville.dto";
import { VilleEntity } from "./entity/ville.entity";

@Injectable()
export class VilleService{
constructor(@InjectRepository(VilleEntity) 
private readonly villeRepository:Repository<VilleEntity>,
          
          ){}


 getAllProperties(){
    return  this.villeRepository.find();
}

getVilleById(id:number){
    return this.villeRepository.findOne({where:{id}})

}



async createVille(data: VilleDTO):Promise<VilleEntity>{
        const ville = await this.villeRepository.create(data );
        return this.villeRepository.save(ville);
      
 
}

 async updateVille( id:number, data:Partial<VilleEntity>){
    await this.villeRepository.update({id},data)
     const ville=await this.villeRepository.findOne({where:{id}})
     if ( ville ==null) throw new NotFoundException(`ville N°: ${id} n'existe pas`)
     return ville
}

async deleteVille(id:number):Promise<VilleEntity>{

    const ville= await this.villeRepository.findOne({where:{id}})
    
    if ( ville ==null) throw new NotFoundException(`ville N°: ${id} n'existe pas`)
    this.villeRepository.delete({id})

    return ville
}


}
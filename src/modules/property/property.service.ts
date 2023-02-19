import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../users/entity/user.entity";
import { PropertyDTO } from "./dto/property.dto";
import { PropertyEntity } from "./entity/property.entity";

@Injectable()
export class PropertyService{
constructor(@InjectRepository(PropertyEntity) 
private readonly propertyRepository:Repository<PropertyEntity>,
@InjectRepository(User) 
private readonly userRepository:Repository<User>   
          ){}


 getAllProperties(){
    return  this.propertyRepository.find();
}
async getAllPropertiesByUser(userId:number){
    const user = await this.userRepository.findOne({ where: { id: userId } });
   // console.log(user.property);
    return user.property
}
getPropertyById(id:number){
    return this.propertyRepository.findOne({where:{id}})

}



async createProperty(userId:number,data: PropertyDTO):Promise<PropertyEntity>{


  /*   const property = await this.propertyRepository.findOne({ where: { id: properyId } });
        const savedGallery = await this.galleryRepository.create({
            ...galleryDTO,
            property,
          });
          await this.galleryRepository.save(savedGallery);
         return savedGallery */
         const user = await this.userRepository.findOne({ where: { id: userId } });


        const savedProperty = await this.propertyRepository.create({...data,user} );
        return this.propertyRepository.save(savedProperty);
      
 
}

 async updateProperty( id:number, data:Partial<PropertyEntity>){
    await this.propertyRepository.update({id},data)
     const property=await this.propertyRepository.findOne({where:{id}})
     if ( property ==null) throw new NotFoundException(`property N°: ${id} n'existe pas`)
     return property
}

async deleteProperty(id:number):Promise<PropertyEntity>{

    const property= await this.propertyRepository.findOne({where:{id}})
    
    if ( property ==null) throw new NotFoundException(`property N°: ${id} n'existe pas`)
    this.propertyRepository.delete({id})

    return property
}


}
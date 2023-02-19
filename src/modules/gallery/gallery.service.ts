import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { GalleryDTO } from "./dto/gallery.dto";
import { GalleryEntity } from "./entity/gallery.entity";

@Injectable()
export class GalleryService{
constructor(@InjectRepository(GalleryEntity) private readonly galleryRepository:Repository<GalleryEntity>,){}
            @InjectRepository(PropertyEntity) private readonly propertyRepository:Repository<PropertyEntity>

getAllGallery(){
    return this.galleryRepository.find();
}
getGalleryById(id:number){
   
    const gallery= this.galleryRepository.findOne({where:{id}})
    return gallery
}


    async createGallery(properyId:number,galleryDTO:GalleryDTO){
        const property = await this.propertyRepository.findOne({ where: { id: properyId } });
        const savedGallery = await this.galleryRepository.create({
            ...galleryDTO,
            property,
          });
          await this.galleryRepository.save(savedGallery);
         return savedGallery
    

}

async updateGallery(id:number, data:Partial<GalleryDTO>){
    await this.galleryRepository.update(id,data)
    const updatedVideo=await this.galleryRepository.findOne({where:{id}})
    if(updatedVideo==null) throw new NotFoundException(`Feature n° ${id} n'existe pas`)

    return updatedVideo
}

async deleteGallery(id:number){
    const deletedVideo= await this.galleryRepository.findOne({where:{id}})
    if(deletedVideo==null) throw new NotFoundException(`Feature n° ${id} n'existe pas`)

    await this.galleryRepository.delete({id})
    return deletedVideo
}
}
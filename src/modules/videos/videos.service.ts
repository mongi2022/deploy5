import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { VideosDTO } from "./dto/videos.dto";
import { VideosEntity } from "./entity/videos.entity";

@Injectable()
export class VideosService{
constructor(@InjectRepository(VideosEntity) private readonly videosRepository:Repository<VideosEntity>,
@InjectRepository(PropertyEntity) private readonly propertyRepository:Repository<PropertyEntity>
){}


getAllVideos(){
    return this.videosRepository.find();
}
getVideosById(id:number){
   
    const videos= this.videosRepository.findOne({where:{id}})
    return videos
}



async createVideos(propertyId:number,videoDTO:VideosDTO){
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
    const savedVideo = await this.videosRepository.create({
        ...videoDTO,
        property
      });
      await this.videosRepository.save(savedVideo);
     return savedVideo


}

async updateVideos(id:number, data:Partial<VideosDTO>){
    await this.videosRepository.update(id,data)
    const updatedVideo=await this.videosRepository.findOne({where:{id}})
    if(updatedVideo==null) throw new NotFoundException(`Videos n° ${id} n'existe pas`)

    return updatedVideo
}

async deleteVideos(id:number){
    const deletedVideo= await this.videosRepository.findOne({where:{id}})
    if(deletedVideo==null) throw new NotFoundException(`Videos n° ${id} n'existe pas`)

    await this.videosRepository.delete({id})
    return deletedVideo
}
}
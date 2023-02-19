import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { VideosDTO } from "./dto/videos.dto";
import { VideosService } from "./videos.service";

@Controller('videos')
export class VideosController{
  constructor(private readonly videoService:VideosService){}

@Get()
  getAllVideoss(){
    return this.videoService.getAllVideos()
  }

  @Get(':id')
  getVideosById(@Param('id') id:number){
    return this.videoService.getVideosById(id)
  }

  
  @Post('property/:id')
  createVideos(@Param('id') id:number, @Body()videoDTO:VideosDTO){
    return this.videoService.createVideos(id,videoDTO)
  }


  @Put(':id')
  updateVideos(@Param('id')id:number,@Body()videoDTO:VideosDTO){
    return this.videoService.updateVideos(id,videoDTO)
  }

  
  @Delete(':id')
    deleteVideos(@Param('id')id:number){
      return this.videoService.deleteVideos(id)
    
  }
}
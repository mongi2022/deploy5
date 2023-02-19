import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { FeaturesDTO } from "./dto/features.dto";
import { FeaturesService } from "./features.service";

@Controller('features')
export class FeaturesController{
  constructor(private readonly featureService:FeaturesService){}

@Get()
  getAllFeatures(){
    return this.featureService.getAllFeatures()
  }

  @Get(':id')
  getFeaturesById(@Param('id') id:number){
    return this.featureService.getFeaturesById(id)
  }
@Post('property/:id')

  createFeatures(@Param('id') id:number, @Body()featureDTO:FeaturesDTO){
    
    return this.featureService.createFeatures(id,featureDTO)
  }

  @Put(':id')
  updateFeatures(@Param('id')id:number,@Body()featureDTO:FeaturesDTO){
    return this.featureService.updateFeatures(id,featureDTO)
  }

  @Delete(':id')
    deleteFeatures(@Param('id')id:number){
      return this.featureService.deleteFeatures(id)
    
  }
}
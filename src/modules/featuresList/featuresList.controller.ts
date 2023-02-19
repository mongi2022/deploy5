import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

import { FeaturelistService } from "./featuresList.service";
import { FeaturelistDTO } from "./dto/featuresList.dto";

@Controller('featurelist')
export class FeaturelistController{
  constructor(private featurelistService:FeaturelistService){}

@Get()
  getAllFeaturelist(){
    return this.featurelistService.getAllFeaturelist()
  }

  @Get(':id')
  getBienById(@Param('id') id: number) {
      return this.featurelistService.getFeaturelistById(id)
  }

@Post()
createFeaturelist(@Body()featurelistDTO:FeaturelistDTO){
  return this.featurelistService.createFeaturelist(featurelistDTO)
}

@Put(':id')
updateFeaturelist(@Param('id') id:number,@Body() featurelistDTO:FeaturelistDTO){
  return this.featurelistService.updateFeaturelist(id,featurelistDTO)

}

@Delete(':id')
deleteFeaturelist(@Param('id')id:number){
  return this.featurelistService.deleteFeaturelist(id)
}
}
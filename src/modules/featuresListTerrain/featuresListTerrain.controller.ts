import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

import { FeaturelistTerrainService } from "./featuresListTerrain.service";
import { FeaturelistTerrainDTO } from "./dto/featuresList.dto";

@Controller('featurelistTerrain')
export class FeaturelistTerrainController{
  constructor(private featurelistTerrainService:FeaturelistTerrainService){}

@Get()
  getAllFeaturelistTerrain(){
    return this.featurelistTerrainService.getAllFeaturelistTerrain()
  }

  @Get(':id')
  getBienById(@Param('id') id: number) {
      return this.featurelistTerrainService.getFeaturelistTerrainById(id)
  }

@Post()
createFeaturelistTerrain(@Body()featurelistTerrainDTO:FeaturelistTerrainDTO){
  return this.featurelistTerrainService.createFeaturelistTerrain(featurelistTerrainDTO)
}

@Put(':id')
updateFeaturelistTerrain(@Param('id') id:number,@Body() featurelistTerrainDTO:FeaturelistTerrainDTO){
  return this.featurelistTerrainService.updateFeaturelistTerrain(id,featurelistTerrainDTO)

}

@Delete(':id')
deleteFeaturelistTerrain(@Param('id')id:number){
  return this.featurelistTerrainService.deleteFeaturelistTerrain(id)
}
}
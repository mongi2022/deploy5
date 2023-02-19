import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { NeighborhoodDTO } from "./dto/neighborhood.dto";
import { NeighborhoodService } from "./neighborhood.service";

@Controller('neighborhood')
export class NeighborhoodController{
  constructor(private readonly neighborhoodService:NeighborhoodService){}

@Get()
  getAllNeighborhood(){
    return this.neighborhoodService.getAllNeighborhood()
  }

  @Get(':id')
  getNeighborhoodById(@Param('id')id:number){
    return this.neighborhoodService.getNeighborhoodById(id)
  }
@Get('region/:cityId')
  getNeighborhoodByCity(@Param('cityId') cityId:number){
    return this.neighborhoodService.getNeighborhoodByCity(cityId)
  }

  @Post('ville/:id')
  createFeatures(@Param('id') id:number, @Body()neighborhoodDTO:NeighborhoodDTO){
    return this.neighborhoodService.createNeighborhood(id,neighborhoodDTO)
  }


  @Put(':id')
  updateNeighborhood(@Param('id')id:number,@Body()neighborhoodDTO:NeighborhoodDTO){
    return this.neighborhoodService.updateNeighborhood(id,neighborhoodDTO)
  }

  @Delete(':id')
    deleteNeighborhood(@Param('id')id:number){
      return this.neighborhoodService.deleteNeighborhood(id)
    
  }
}
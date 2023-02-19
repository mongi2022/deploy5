import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { AreaDTO } from "./dto/area.dto";
import { AreaService } from "./area.service";

@Controller('area')
export class AreaController{
  constructor(private readonly areaService:AreaService){}

@Get()
  getAllAreas(){
    return this.areaService.getAllArea()
  }

  @Get(':id')
  getAreaById(@Param('id')id:number){
    return this.areaService.getAreaById(id)
  }
  
@Post('property/:id')
  createArea(@Param('id') id:number,@Body()areaDTO:AreaDTO){
    return this.areaService.createArea(id,areaDTO)
  }

  @Put(':id')
  updateArea(@Param('id') id:number,@Body()areaDTO:AreaDTO){
    return this.areaService.updateArea(id,areaDTO)
  }

  @Delete(':id')
    deleteArea(@Param('id')id:number){
      return this.areaService.deleteArea(id)
    
  }
}
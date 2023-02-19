import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { LocalisationDTO } from "./dto/localisation.dto";
import { LocalisationService } from "./localisation.service";

@Controller('localisation')
export class LocalisationController{
  constructor(private readonly localService:LocalisationService){}

@Get()
  getAllLocalisations(){
    return this.localService.getAllLocalisation()
  }

  @Get(':id')
  getLocalisationById(@Param('id')id:number){
    return this.localService.getLocalisationById(id)
  }
 
  @Post('property/:id')
  createLocalisation(@Param('id') id:number,@Body()localDTO:LocalisationDTO){
    return this.localService.createLocalisation(id,localDTO)
  }

  @Put(':id')
  updateLocalisation(@Param('id')id:number,@Body()localDTO:LocalisationDTO){
    return this.localService.updateLocalisation(id,localDTO)
  }

  @Delete(':id')
    deleteLocalisation(@Param('id')id:number){
      return this.localService.deleteLocalisation(id)
    
  }
}
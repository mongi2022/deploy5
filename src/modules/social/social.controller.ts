import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { SocialService } from "./social.service";
import { SocialDTO } from "./dto/social.dto";
import { SocialEntity } from "./entity/social.entity";


@Controller('social')
export class SocialController{
  constructor(private readonly socialService:SocialService){}
  @UseGuards(AccessTokenGuard)

  @Get()
  async getAllCategories(){
return await this.socialService.getAllSocial()
  }
@Get(':id')
  getTerrainById(@Param('id')id:number){
    return this.socialService.getSocialById(id)
  }

@Post('agent/:id')
  createSocial(@Param('id')id:number,@Body() agentDTO:SocialDTO){
    return this.socialService.createSocial(id,agentDTO)
  }

  @Put(':id')
  updateSocial(@Param('id')id:number,@Body()catDTO:SocialDTO){
    return this.socialService.updateSocial(id,catDTO)
  }
@Delete(':id')
  deleteSocial(@Param('id')id:number){
    return this.socialService.deleteSocial(id)
  }

}
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { Repository } from "typeorm";
import { HouseDTO } from "./dto/house.dto";
import { HouseEntity } from "./entity/house.entity";
import { HouseService } from "./house.service";

@Controller('house')
export class HouseController{
constructor(private readonly houseService:HouseService){}
@UseGuards(AccessTokenGuard)

@Get()
getAllHouse(){
    return this.houseService.getAllHouse()
}
@Get(':id')
gethouseById(@Param('id')id:number){
    return this.houseService.getHouseById(id)
}
@Post()
createHouse(@Body()houseDTO:HouseDTO){
    return this.houseService.createHouse(houseDTO)
}
@Put(':id')
updateHouse(@Param('id')id:number,@Body()houseDTO:HouseDTO){
    return this.houseService.updateHouse(id,houseDTO)
}

@Delete(':id')
deleteHouse(@Param('id') id:number){
    return this.houseService.deleteHouse(id)
}
}
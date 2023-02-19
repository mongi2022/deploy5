import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PropertyService } from "./property.service";
import { PropertyDTO } from "./dto/property.dto";
import { PropertyEntity } from "./entity/property.entity";

@Controller('property')
export class PropertyController {

    constructor(@InjectRepository(PropertyEntity) private readonly propertyRepository: Repository<PropertyEntity>, private readonly propertyService: PropertyService) { }

    @Get()
    getAllproperty() {
        return this.propertyService.getAllProperties()
    }
    @Get(':id')
    getpropertyById(@Param('id') id: number) {
        return this.propertyService.getPropertyById(id)
    }
     @Get('user/:userId')
    getAllPropertiesByUser(@Param('userId') userId:number){
      return  this.propertyService.getAllPropertiesByUser(userId)
    }

    @Post('user/:id')
    
    createproperty(@Param('id') userId:number,@Body() propertyDTO: PropertyDTO) {
        return this.propertyService.createProperty(userId,propertyDTO)
    }
    @Put(':id')
    updateproperty(@Param('id')id:number,@Body()property:PropertyEntity){
        return this.propertyService.updateProperty(id,property)
    }
    @Delete(':id')
    deleteproperty(@Param('id')id:number):Promise<PropertyEntity>{
        return this.propertyService.deleteProperty(id)
    }
}
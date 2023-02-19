import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { VilleService } from "./ville.service";
import { VilleDTO } from "./dto/ville.dto";
import { VilleEntity } from "./entity/ville.entity";

@Controller('ville')
export class VilleController {

    constructor(@InjectRepository(VilleEntity) private readonly villeRepository: Repository<VilleEntity>, private readonly villeService: VilleService) { }

    @Get()
    getAllville() {
        return this.villeService.getAllProperties()
    }
    @Get(':id')
    getvilleById(@Param('id') id: number) {
        return this.villeService.getVilleById(id)
    }



    @Post()
    
    createville(@Body() villeDTO: VilleDTO) {
        return this.villeService.createVille(villeDTO)
    }
    @Put(':id')
    updateville(@Param('id')id:number,@Body()ville:VilleEntity){
        return this.villeService.updateVille(id,ville)
    }
    @Delete(':id')
    deleteville(@Param('id')id:number):Promise<VilleEntity>{
        return this.villeService.deleteVille(id)
    }
}
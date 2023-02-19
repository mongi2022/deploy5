import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VilleController } from "./ville.controller";
import { VilleService } from "./ville.service";
import { VilleEntity } from "./entity/ville.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([VilleEntity])],
        controllers:[VilleController],
        providers:[VilleService]
        
    })
   
    export class VilleModule {
    
    }
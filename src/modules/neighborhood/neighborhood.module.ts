import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { VilleEntity } from "../Ville/entity/ville.entity";
import { VilleService } from "../Ville/ville.service";
import { NeighborhoodEntity } from "./entity/neighborhood.entity";
import { NeighborhoodController } from "./neighborhood.controller";
import { NeighborhoodService } from "./neighborhood.service";

    @Module({
        imports: [TypeOrmModule.forFeature([NeighborhoodEntity,VilleEntity])],
        controllers:[NeighborhoodController],
        providers:[NeighborhoodService,VilleService],
        
    })
       export class NeighborhoodModule {
    
    }
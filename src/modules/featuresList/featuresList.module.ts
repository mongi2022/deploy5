import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeaturelistController } from "./featuresList.controller";
import { FeaturelistService } from "./featuresList.service";
import { FeaturelistEntity } from "./entity/featuresList.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([FeaturelistEntity])],
        controllers:[FeaturelistController],
        providers:[FeaturelistService]
        
    })
   
    export class FeaturelistModule {
    
    }
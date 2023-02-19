import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeaturelistTerrainController } from "./featuresListTerrain.controller";
import { FeaturelistTerrainService } from "./featuresListTerrain.service";
import { FeaturelistTerrainEntity } from "./entity/featuresListTerrain.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([FeaturelistTerrainEntity])],
        controllers:[FeaturelistTerrainController],
        providers:[FeaturelistTerrainService]
        
    })
   
    export class FeaturelistTerrainModule {
    
    }
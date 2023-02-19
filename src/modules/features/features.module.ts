import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { User } from "../users/entity/user.entity";
import { UsersService } from "../users/users.service";
import { FeaturesEntity } from "./entity/features.entity";
import { FeaturesController } from "./features.controller";
import { FeaturesService } from "./features.service";

    @Module({
        imports: [TypeOrmModule.forFeature([FeaturesEntity,PropertyEntity,User])],
        controllers:[FeaturesController],
        providers:[FeaturesService,PropertyService,UsersService]
        
    })
   
    export class FeaturesModule {
    
    }
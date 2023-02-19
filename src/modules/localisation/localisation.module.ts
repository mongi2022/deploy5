import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { User } from "../users/entity/user.entity";
import { UsersModule } from "../users/users.module";
import { LocalisationEntity } from "./entity/localisation.entity";
import { LocalisationController } from "./localisation.controller";
import { LocalisationService } from "./localisation.service";

    @Module({
        imports: [TypeOrmModule.forFeature([LocalisationEntity,PropertyEntity,User])],
        controllers:[LocalisationController],
        providers:[LocalisationService,PropertyService,UsersModule]
        
    })
   
    export class LocalisationModule {
    
    }
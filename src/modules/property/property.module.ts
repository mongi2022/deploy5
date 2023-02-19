import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyController } from "./property.controller";
import { PropertyService } from "./property.service";
import { PropertyEntity } from "./entity/property.entity";
import { UsersService } from "../users/users.service";
import { User } from "../users/entity/user.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([PropertyEntity,User])],
        controllers:[PropertyController],
        providers:[PropertyService,UsersService]
        
    })
   
    export class PropertyModule {
    
    }
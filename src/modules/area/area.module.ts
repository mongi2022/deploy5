import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AreaEntity } from "./entity/area.entity";
import { AreaController } from "./area.controller";
import { AreaService } from "./area.service";
import { PropertyService } from "../property/property.service";
import { PropertyEntity } from "../property/entity/property.entity";
import { UsersService } from "../users/users.service";
import { User } from "../users/entity/user.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([AreaEntity,PropertyEntity,User])],
        controllers:[AreaController],
        providers:[AreaService,PropertyService,UsersService]
        
    })
   
    export class AreaModule {
    
    }
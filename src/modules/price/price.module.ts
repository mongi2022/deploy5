import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { User } from "../users/entity/user.entity";
import { UsersService } from "../users/users.service";
import { PriceEntity } from "./entity/price.entity";
import { PriceController } from "./price.controller";
import { PriceService } from "./price.service";

    @Module({
        imports: [TypeOrmModule.forFeature([PriceEntity,PropertyEntity,User])],
        controllers:[PriceController],
        providers:[PriceService,PropertyService,UsersService]
        
    })
   
    export class PriceModule {
    
    }
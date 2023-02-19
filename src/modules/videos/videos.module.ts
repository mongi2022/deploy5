import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { User } from "../users/entity/user.entity";
import { UsersService } from "../users/users.service";
import { VideosEntity } from "./entity/videos.entity";
import { VideosController } from "./videos.controller";
import { VideosService } from "./videos.service";

    @Module({
        imports: [TypeOrmModule.forFeature([VideosEntity,PropertyEntity,User])],
        controllers:[VideosController],
        providers:[VideosService,PropertyService,UsersService]
        
    })
   
    export class VideosModule {
    
    }
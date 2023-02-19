import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyEntity } from "../property/entity/property.entity";
import { PropertyService } from "../property/property.service";
import { User } from "../users/entity/user.entity";
import { UsersService } from "../users/users.service";
import { GalleryEntity } from "./entity/gallery.entity";
import { GalleryController } from "./gallery.controller";
import { GalleryService } from "./gallery.service";

    @Module({
        imports: [TypeOrmModule.forFeature([GalleryEntity,PropertyEntity,User]),
        MulterModule.register({
            dest: './images',
          })],
        controllers:[GalleryController],
        providers:[GalleryService,PropertyService,UsersService],
        
    })
       export class GalleryModule {
    
    }
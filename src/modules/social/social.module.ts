import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SocialController } from "./social.controller";
import { SocialService } from "./social.service";
import { SocialEntity } from "./entity/social.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([SocialEntity])],
        controllers:[SocialController],
        providers:[SocialService]
        
    })
   
    export class SocialModule {
    
    }
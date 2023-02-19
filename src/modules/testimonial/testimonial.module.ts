import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TestimonialEntity } from "./entity/testimonial.entity";
import { TestimonialController } from "./testimonial.controller";
import { TestimonialService } from "./testimonial.service";

    @Module({
        imports: [TypeOrmModule.forFeature([TestimonialEntity])],
        controllers:[TestimonialController],
        providers:[TestimonialService]
        
    })
   
    export class TestimonialModule {
    
    }
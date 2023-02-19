import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { TestimonialDTO } from "./dto/testimonial.dto";
import { TestimonialService } from "./testimonial.service";

@Controller('testimonial')
export class TestimonialController {
    constructor(private readonly testimonialService: TestimonialService) { }
    @Get()
    getAllTestimonial() {
        return this.testimonialService.getAllTestimonial()
    }
    @UseGuards(AccessTokenGuard)
    @Get(':id')
    getTestimonialById(@Param('id') id: number) {
        return this.testimonialService.getTestimonialById(id)
    }
    @Post()
    createTestimonial(@Body() testimonialDTO: TestimonialDTO) {
        return this.testimonialService.createTestimonial(testimonialDTO)

    }
    @UseGuards(AccessTokenGuard)

    @Put(':id')
    updateTestimonial(@Param('id') id: number, @Body() testimonialDTO: TestimonialDTO) {
        return this.testimonialService.updateTestimonial(id, testimonialDTO)
    }
    @UseGuards(AccessTokenGuard)
    @Delete(':id')
    deleteTestimonial(@Param('id') id: number) {
        return this.testimonialService.deleteTestimonial(id)
    }
}
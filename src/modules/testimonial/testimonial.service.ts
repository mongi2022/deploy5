import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TestimonialDTO } from "./dto/testimonial.dto";
import { TestimonialEntity } from "./entity/testimonial.entity";

@Injectable()
export class TestimonialService{
constructor(@InjectRepository(TestimonialEntity) private readonly testimonialRepository:Repository<TestimonialEntity>){}


getAllTestimonial(){
    return this.testimonialRepository.find();
}
getTestimonialById(id:number){
    return this.testimonialRepository.findOne({where:{id}})
}

async createTestimonial(data:TestimonialDTO):Promise<TestimonialEntity>{
 

        const testimonial = await this.testimonialRepository.create(data );
        return this.testimonialRepository.save(testimonial);
      
    
    }




async updateTestimonial(id:number,data:Partial<TestimonialDTO>){

await this.testimonialRepository.update(id,data)
const updatedTestimonial= await this.testimonialRepository.findOne({where:{id}})
if(updatedTestimonial==null) throw new NotFoundException(`Testimonial n° ${id} n'existe pas`)

return updatedTestimonial

}

async deleteTestimonial(id:number){
  const deletedTestimonial= await this.testimonialRepository.findOne({where:{id}})
  if(deletedTestimonial==null) throw new NotFoundException(`Testimonial n° ${id} n'existe pas`)

    await this.testimonialRepository.delete(id)
    return deletedTestimonial
}
}
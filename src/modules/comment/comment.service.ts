import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CommentDTO } from "./dto/comment.dto";
import { CommentEntity } from "./entity/comment.entity";

@Injectable()
export class CommentService{
constructor(@InjectRepository(CommentEntity) private readonly commentRepository:Repository<CommentEntity>){}

getAllComment():Promise<CommentEntity[]>{
    return this.commentRepository.find();
}

async createComment(data: CommentDTO):Promise<CommentEntity>{
    const comment = await this.commentRepository.create(data );
    return this.commentRepository.save(comment);
  

}

getCommentById(id:number):Promise<CommentEntity>{
    return this.commentRepository.findOne({where:{id}});
} 

async updateComment(id:number,commentDto:Partial<CommentDTO> ){
  await this.commentRepository.update({id},commentDto)

const comment=await this.commentRepository.findOne({where:{id}})
if(comment==null) throw new NotFoundException(`Appartement n° ${id} n'existe pas`)

return comment
}

 async deleteComment(id:number){
const deletedApp= await this.commentRepository.findOne({where:{id}})
if(deletedApp==null) throw new NotFoundException(`Appartement n° ${id} n'existe pas`)
   this.commentRepository.delete(id)
   return deletedApp
}
}
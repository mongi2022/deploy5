import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CommentDTO } from "./dto/comment.dto";
import { CommentService } from "./comment.service";
import { CommentEntity } from "./entity/comment.entity";
import { ApiResponse } from "@nestjs/swagger";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService,
        ) { }


@Get()
@ApiResponse({
    status: 201,
    description: 'The record list returns.',
})
@ApiResponse({ status: 404, description: 'Not Found.' })
   async getAllCommentController(){
return await this.commentService.getAllComment()
   }

@Post()
@ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
})
@ApiResponse({ status: 403, description: 'Forbidden.' }) 
   async addCommentController(@Body() appDTO:CommentDTO):Promise<CommentEntity>{
        
        return await this.commentService.createComment(appDTO)
    }
@Get(':id')
  async getCommentByIdController(@Param('id') id:number):Promise<CommentEntity>{
   return await this.commentService.getCommentById(id)
  }
@Put(':id')
async updateCommentController(@Param('id') id:number,@Body() commentDto:CommentDTO){
return await  this.commentService.updateComment(id,commentDto)
}
@Delete(':id')
deleteComment(@Param('id')id:number){
    return this.commentService.deleteComment(id)
}
    }

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  NotFoundException,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from '../auth/dto/auth.dto';
import { request } from 'express';
import { REQUEST } from '@nestjs/core';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName } from '../gallery/utils/editFileName';
import { imageFileFilter } from '../gallery/utils/imageFileFilter';
import { readFile } from 'fs';
import { promisify } from 'util';
const readFileAsyc = promisify(readFile);
import * as sharp from 'sharp';
import * as fs from 'fs'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService, private configService: ConfigService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
  @UseGuards(AccessTokenGuard)
  @Get()
  findAll() {

    const allUsers = this.usersService.findAllUsers();
    return allUsers
  }

  @Get(':id')
 async findById(@Param('id') id: number) {
    const user= await this.usersService.findUserById(id);
   const {password,...result}=user
    return result
  }
  
/*   @Get()
 // SELECT * FROM `users` WHERE email='adem@email.com'

  async findByEmail(@Query('email') createUserDto: CreateUserDto) {
    const user = await this.usersService.findByEmail(
      createUserDto.email,
    ); 

     return user
   }*/
   @Post('email')
  
    async findByEmail2(@Body() createUserDto: CreateUserDto) {
     
     const user= this.usersService.findByEmail(createUserDto.email);
             
   //console.log(user);
     if (await(await user).email!=createUserDto.email) throw new NotFoundException('not found')
     return user
   
 
       
    
    
      }
    
     
  @Patch(':id')
 async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    await this.usersService.updateUser(id, updateUserDto);
    const user = await this.usersService.findUserById(id)
   const  {password,...result}=user
   return result
  }

  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.removeUser(id);
  }


  @Post('upload/:id')
  @UseInterceptors(
    FileInterceptor('image',  {
      storage: diskStorage({
        filename: editFileName,
        
      })
    }),
  )
uploadFile(@Param('id') id:number,@UploadedFile() file){
  const response = [];
  
  const [, ext] = file.mimetype.split('/');
  this.saveOneImage(ext, file,id);
  response.push(file);
 

  
  return response; 

}



private async saveOneImage(ext: string,file,id:number): Promise<void> {
  
  if (['jpeg', 'jpg', 'png','gif','webp'].includes(ext)) {
   
     var filename=''
          var url= '/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/profiles' 
        
        var dir=`${url}/${id}`
        if (!fs.existsSync(dir)){
          fs.mkdirSync(dir, { recursive: true });
      }
      let originalname=Buffer.from(file.originalname, 'latin1').toString('utf8');
        filename=`${url}/${id}/${originalname}`
     
    
      
      
  //    console.log(filename);
   //  console.log(height);
      
      readFileAsyc(file.path)
        .then((b: Buffer) => {
          return sharp(b)      

            .toFile(
              filename,
            );
        })
        .then()
        .catch(console.error);
       
   
      
  }
 
}
}
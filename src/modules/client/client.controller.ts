import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";

import { ClientService } from "./client.service";
import { ClientDTO } from "./dto/client.dto";

@Controller('client')
export class ClientController{
  constructor(private clientService:ClientService){}

@Get()
  getAllClient(){
    return this.clientService.getAllClient()
  }

  
  @Get(':id')
  getBienById(@Param('id') id: number) {
      return this.clientService.getClientById(id)
  }

@Post()
createClient(@Body()clientDTO:ClientDTO){
  return this.clientService.createClient(clientDTO)
}

@Put(':id')
updateClient(@Param('id') id:number,@Body() clientDTO:ClientDTO){
  return this.clientService.updateClient(id,clientDTO)

}

@Delete(':id')
deleteClient(@Param('id')id:number){
  return this.clientService.deleteClient(id)
}
}
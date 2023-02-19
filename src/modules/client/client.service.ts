import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ClientDTO } from "./dto/client.dto";
import { ClientEntity } from "./entity/client.entity";

@Injectable()
export class ClientService{
constructor(@InjectRepository(ClientEntity) private readonly clientRepository:Repository<ClientEntity>){}


getAllClient(){
    return this.clientRepository.find();
}
async getClientById(id:number){
    return await this.clientRepository.findOne({where:{id}})
}
async createClient(data:ClientDTO):Promise<ClientEntity>{
 

        const client = await this.clientRepository.create(data );
        return this.clientRepository.save(client);
      
}

async updateClient(id:number,data:Partial<ClientDTO> ){
 await this.clientRepository.update({id},data)
 const newClient=await this.clientRepository.findOne({where:{id}})
 if(newClient==null) throw new NotFoundException(`Client n° ${id} n'existe pas`)

 return newClient

}

async deleteClient(id:number){
  const deleted=  await this.clientRepository.findOne({where:{id}})
  if(deleted==null) throw new NotFoundException(`Client n° ${id} n'existe pas`)
    await this.clientRepository.delete({id})
    return deleted

}
}
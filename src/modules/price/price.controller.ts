import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { PriceDTO } from "./dto/price.dto";
import { PriceService } from "./price.service";

@Controller('price')
export class PriceController{
  constructor(private readonly priceService:PriceService){}

@Get()
  getAllPrices(){
    return this.priceService.getAllPrice()
  }

  @Get(':id')
  getPriceById(@Param('id')id:number){
    return this.priceService.getPriceById(id)
  }
@Post('property/:id')
  createPrice(@Param('id') id: number,@Body()priceDTO:PriceDTO){
    return this.priceService.createPrice(id,priceDTO)
  }

  @Put(':id')
  updatePrice(@Param('id')id:number,@Body()priceDTO:PriceDTO){
    return this.priceService.updatePrice(id,priceDTO)
  }

  @Delete(':id')
    deletePrice(@Param('id')id:number){
      return this.priceService.deletePrice(id)
    
  }
}
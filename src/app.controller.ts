import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Purchase } from './dto/purchase.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Purchase[] {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() purchase: Purchase ){
    this.appService.create(purchase);
  }

  @Put(':id')
  update(@Body() purchase: Purchase, @Param('id') id: string){
   return this.appService.update(purchase, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string ){
    return this.appService.remove(id)
  }
}

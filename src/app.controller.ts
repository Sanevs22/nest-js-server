import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {  Card } from './dto/card.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAll(): Card[] {
    return this.appService.getAll();
  }

  @Post()
  create(@Body() purchase: Card ){
    this.appService.create(purchase);
  }

  @Put(':id')
  update(@Body() purchase: Card, @Param('id') id: string){
   return this.appService.update(purchase, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string ){
    return this.appService.remove(id)
  }
}

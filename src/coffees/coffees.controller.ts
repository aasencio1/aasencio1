import {  Body, Controller, Get, Param, Post, Patch, Delete, Query } from '@nestjs/common';
import { throws } from 'assert';
import { get } from 'http';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('cafe')
export class CoffeesController {
    constructor (private readonly CoffeesService: CoffeesService) {}
    //private: only accesible for class itself
    //readonly: best practices
    // parameter -> CoffeeService
    
    @Get()
    findAll(@Query() paginationQuery)
    {
        //const { limit, offset } = paginationQuery
        return this.CoffeesService.findAll();
        //return `This action returns all coffees. Limit ${limit}, offset:${offset}`;
    }
    @Get(':id')
    findOne(@Param('id') id: number)   // tipo es por defecto
    {
      console.log (typeof id);
      return this.CoffeesService.findOne('' + id);
     // return this.findOne(id);

        //return `This action returns #${id} coffee`;
    }


    @Post()
    //create(@Body('brand') body){
    create(@Body() createCoffeeDto: CreateCoffeeDto)
    {
      console.log(createCoffeeDto instanceof CreateCoffeeDto);
      return this.CoffeesService.create(createCoffeeDto);
    // return this.CoffeesService.create(body);
    //return body;
    //return `This action creates a coffee`
    }

    @Patch (':id')
    /*update(@Param('id') id: string, body)
    // Este Ejemplo corre excelente ...
    {
      return `This action updates #${id} coffee`;
    }*/

    //update(@Param('id') id: string, @Body() body)
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto)
    {
     return this.CoffeesService.update(id,UpdateCoffeeDto);
     // return this.CoffeesService.update(id,body);
     // return `This action updates #${id} coffee`;
    }

    @Delete(':id') 
    remove(@Param('id') id: string) 
    {
      return this.CoffeesService.remove(id);
      //return `This action removes #${id} coffee`;
    }



}
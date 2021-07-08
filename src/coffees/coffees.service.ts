import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { throws } from 'assert';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService 
{
private coffees: Coffee[] = [
    {
        id: 1,
        name: 'Shipwreck Roast',
        brand: 'Buddy Brew', 
        flavors: ['chocalate', 'vanilla']
    }
];

// Sample implementation without real database ...

    findAll()
    {
    return this.coffees;
    }
    /*findOne(id: String)
    {
        throw 'A ramdom error';
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee)
        {
            //throw new HttpException (`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
            throw new NotFoundException (`Coffee #${id} not found`);
        }
        //return this.coffees.find(item => item.id === +id);
        return coffee;
    }*/
    /*findOne(id: string) {
        return this.coffees.find(item => item.id === +id);
      }
     */
      findOne(id: string) {
        //throw 'A ramdom error';
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
           // throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
          throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
      }
    
    create(CreateCoffeeDto: any)
    {
      this.coffees.push(CreateCoffeeDto);   
      return CreateCoffeeDto;
      //return this.coffees; //le devuelve el Objeto a la Peticion del Controller     
    }
   // update (id: string, updateCoffeeDto: any)
   update (id: string, updateCoffeeDto: any)
    {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
          // update the existing entity
        }
      }
    remove(id: String)
    {
     const coffeeIndex = this.coffees.findIndex (item => item.id === +id);
     if (coffeeIndex >= 0)
     {
         this.coffees.splice(coffeeIndex, 1)

     }

    } 

}

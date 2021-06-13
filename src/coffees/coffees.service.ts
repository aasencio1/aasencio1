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
    findOne(id: String)
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
    }
    create(createCoffeDto: any)
    {
      this.coffees.push(createCoffeDto);        
    }
    update (id: string, updateCoffeeDto: any)
    {
        const existingCofee = this.findOne(id);
        if (existingCofee)
        {
            //update the existing entity
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

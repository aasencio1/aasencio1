import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from 'src/coffees/coffees.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:
   [
    DatabaseModule.register({   //Se invoca el metodo de registro definido en el modulo Database.
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'pass123',
    })
    
    ,CoffeesModule
  ], 
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}

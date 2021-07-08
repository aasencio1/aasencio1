import { IsString } from 'class-validator';

export class CreateCoffeeDto{ 
 @IsString()   //Hace que la Propiedad sea requerida
 readonly name: string;
 
 @IsString()   //Hace que la Propiedad sea requerida
 readonly brand: string;

 @IsString({ each: true})    //Indica que cada valor en el Arreglo debe ser un String
 readonly flavors: string[]; 

}

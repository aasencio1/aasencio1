import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
//con PartialType, se retorna la clase que se pasa en PartialType

/*
export class UpdateCoffeeDto
{
    //? means that is optional.
    readonly name?: string;
    readonly brand?: string;
    readonly flavors?: string[]; 


}
*/
import { IsNotEmpty, IsString } from "class-validator";
import { Genero } from "../entities/genero.entity";

export class CreateGeneroDto extends Genero{
    @IsString()
    @IsNotEmpty()
    nome: string;
}

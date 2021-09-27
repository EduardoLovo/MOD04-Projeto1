import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Perfi } from "../entities/perfi.entity";

export class CreatePerfiDto extends Perfi{
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    imagem: string;
}

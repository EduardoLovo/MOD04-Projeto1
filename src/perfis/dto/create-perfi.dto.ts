import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Perfil } from "../entities/perfi.entity";

export class CreatePerfilDto extends Perfil{
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    imagem: string;
}

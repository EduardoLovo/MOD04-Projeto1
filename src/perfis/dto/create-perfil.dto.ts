import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CreateJogoDto } from "src/jogos/dto/create-jogo.dto";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";
import { Perfil } from "../entities/perfi.entity";

export class CreatePerfilDto extends Perfil{
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    imagem: string;

    @IsOptional()
    @IsNumber()
    usuarios: CreateUsuarioDto[];

    

    
}

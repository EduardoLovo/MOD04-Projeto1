import { ArrayNotEmpty, IsArray, IsEmail, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreatePerfilDto } from "src/perfis/dto/create-perfil.dto";
import { Usuario } from "../entities/usuario.entity";


export class CreateUsuarioDto extends Usuario {
    @IsString()
    @IsNotEmpty()
    nome: string;
    
    @IsString()
    @IsNotEmpty()
    sobrenome: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsOptional()
    @IsInt({ each: true })
    @IsArray()
    @ArrayNotEmpty()
    perfisIds?: number[];
}



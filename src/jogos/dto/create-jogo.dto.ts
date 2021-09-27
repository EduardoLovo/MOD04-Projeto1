import { Prisma } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Jogo } from "../entities/jogo.entity";

export class CreateJogoDto extends Jogo{
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    capa: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsInt()
    @IsNotEmpty()
    ano: number;

    @IsInt()
    @IsNotEmpty()
    nota: number;

    @IsString()
    @IsNotEmpty()
    trailer: string;

    @IsString()
    @IsNotEmpty()
    gameplay: string;
}

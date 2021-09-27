import { Prisma } from "@prisma/client";

export class Usuario implements Prisma.UsuarioUncheckedCreateInput{
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    perfis: Prisma.PerfilUncheckedCreateNestedManyWithoutUsuarioInput
}
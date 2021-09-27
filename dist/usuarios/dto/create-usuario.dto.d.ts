import { Prisma } from "@prisma/client";
import { Usuario } from "../entities/usuario.entity";
export declare class CreateUsuarioDto extends Usuario {
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    perfil?: Prisma.PerfilUncheckedCreateNestedManyWithoutUsuarioInput;
}

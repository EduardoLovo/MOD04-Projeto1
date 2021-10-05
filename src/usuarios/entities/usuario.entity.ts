import { Perfil } from "src/perfis/entities/perfi.entity";

export class Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    perfis?: Perfil[];
}
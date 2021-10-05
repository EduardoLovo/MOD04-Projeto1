import { Perfil } from "src/perfis/entities/perfi.entity";
export declare class Usuario {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    cpf: string;
    perfis?: Perfil[];
}

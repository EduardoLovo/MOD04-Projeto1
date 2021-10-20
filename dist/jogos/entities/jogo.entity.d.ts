import { Genero } from "src/generos/entities/genero.entity";
export declare class Jogo {
    id: number;
    titulo: string;
    capa: string;
    descricao: string;
    ano: number;
    nota: number;
    trailer: string;
    gameplay: string;
    generos?: Genero[];
}

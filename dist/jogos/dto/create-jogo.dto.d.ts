import { Jogo } from "../entities/jogo.entity";
export declare class CreateJogoDto extends Jogo {
    titulo: string;
    capa: string;
    descricao: string;
    ano: number;
    nota: number;
    trailer: string;
    gameplay: string;
    generosIds?: number[];
}

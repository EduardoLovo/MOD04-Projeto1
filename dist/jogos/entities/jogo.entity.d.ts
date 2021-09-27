import { Prisma } from ".prisma/client";
export declare class Jogo implements Prisma.JogoUncheckedCreateInput {
    id?: number;
    titulo: string;
    capa: string;
    descricao: string;
    ano: number;
    nota: number;
    trailer: string;
    gameplay: string;
    generos?: Prisma.GeneroUncheckedCreateNestedManyWithoutJogoInput;
}

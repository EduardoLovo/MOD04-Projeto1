import { Prisma } from "@prisma/client";
export declare class Genero implements Prisma.GeneroUncheckedCreateInput {
    id?: number;
    jogoId: number;
    nome: string;
}

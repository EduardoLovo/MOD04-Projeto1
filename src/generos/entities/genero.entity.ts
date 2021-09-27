import { Prisma } from "@prisma/client";

export class Genero implements Prisma.GeneroUncheckedCreateInput{
    id?: number;
    jogoId: number;
    nome: string;
    
}

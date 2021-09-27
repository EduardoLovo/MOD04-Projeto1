import { Prisma } from "@prisma/client";
export declare class Perfi implements Prisma.PerfilUncheckedCreateInput {
    id?: number;
    usuarioId: number;
    titulo: string;
    imagem: string;
}

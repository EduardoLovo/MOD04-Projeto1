import { Prisma } from "@prisma/client";

export class Perfi implements Prisma.PerfilUncheckedCreateInput {
    id?: number;
    usuarioId: number;
    titulo: string;
    imagem: string;
}

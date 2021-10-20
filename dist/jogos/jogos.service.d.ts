import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateJogoDto): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        perfis: {
            titulo: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        perfis: {
            titulo: string;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    update(id: number, dto: UpdateJogoDto): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        perfis: {
            titulo: string;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}

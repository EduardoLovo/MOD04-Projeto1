import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        usuarios: {
            nome: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        usuarios: {
            nome: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        usuarios: {
            nome: string;
        }[];
    }>;
    update(id: number, data: UpdateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        usuarios: {
            nome: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}

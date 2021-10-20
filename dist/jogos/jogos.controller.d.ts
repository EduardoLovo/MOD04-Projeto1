import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosController {
    private readonly jogosService;
    constructor(jogosService: JogosService);
    create(createJogoDto: CreateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    update(id: number, updateJogoDto: UpdateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        perfis: {
            titulo: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}

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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        usuarios: {
            nome: string;
        }[];
    }>;
    update(id: string, updateJogoDto: UpdateJogoDto): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo & {
        generos: {
            nome: string;
        }[];
        usuarios: {
            nome: string;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}

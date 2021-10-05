import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
export declare class JogosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateJogoDto): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Jogo[]>;
    findOne(id: number): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    update(id: number, data: UpdateJogoDto): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
    remove(id: number): Prisma.Prisma__JogoClient<import(".prisma/client").Jogo>;
}

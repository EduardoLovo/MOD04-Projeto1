import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
        jogos: {
            titulo: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
        jogos: {
            titulo: string;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
        jogos: {
            titulo: string;
        }[];
    }>;
    update(id: number, data: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
        jogos: {
            titulo: string;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

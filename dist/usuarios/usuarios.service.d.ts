import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUsuarioDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        cpf: string;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuario & {})[]>;
    findById(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    findByEmail(email: string): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    update(id: number, data: UpdateUsuarioDto): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {}>;
    remove(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

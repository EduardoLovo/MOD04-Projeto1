import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAdminDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        email: string;
        codigoAdmin: string;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Admin[]>;
    findOne(id: number): Prisma.Prisma__AdminClient<import(".prisma/client").Admin>;
    findByEmail(email: string): Prisma.Prisma__AdminClient<import(".prisma/client").Admin>;
    update(id: number, data: UpdateAdminDto): Prisma.Prisma__AdminClient<import(".prisma/client").Admin>;
    remove(id: number): Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

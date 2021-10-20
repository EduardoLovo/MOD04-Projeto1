import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        email: string;
        codigoAdmin: string;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Admin[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AdminClient<import(".prisma/client").Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<import(".prisma/client").Admin>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

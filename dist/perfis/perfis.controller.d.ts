import { PerfisService } from './perfis.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
export declare class PerfisController {
    private readonly perfisService;
    constructor(perfisService: PerfisService);
    create(createPerfilDto: CreatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Perfil[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    update(id: string, updatePerfilDto: UpdatePerfilDto): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PerfilClient<import(".prisma/client").Perfil>;
}

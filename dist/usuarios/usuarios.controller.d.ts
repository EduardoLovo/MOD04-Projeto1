import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
    }>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {
        perfis: {
            titulo: string;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<{
        senha: any;
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        cpf: string;
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Usuario & {})[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
    update(id: string, updateUsuarioDto: UpdateUsuarioDto): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario & {}>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__UsuarioClient<import(".prisma/client").Usuario>;
}

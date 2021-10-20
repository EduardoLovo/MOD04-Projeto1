import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './model/LoginDto';
import { UsuarioToken } from './model/UserToken';
export declare class AuthService {
    private readonly jwtService;
    private readonly usuarioService;
    constructor(jwtService: JwtService, usuarioService: UsuariosService);
    login(dto: LoginDto): Promise<UsuarioToken>;
    validateUsuario(email: string, password: string): Promise<Usuario>;
}

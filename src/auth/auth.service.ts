import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDto } from './model/LoginDto';
import { UsuarioPayload } from './model/UserPayload';
import { UsuarioToken } from './model/UserToken';


@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usuarioService: UsuariosService,
    ) {}

    async login(dto: LoginDto) : Promise<UsuarioToken> {
        const usuario: Usuario = await this.validateUsuario(dto.email, dto.senha);

        const payload: UsuarioPayload = {
            sub: usuario.id,
            username: usuario.email,
        };
        
        return {
            accessToken: this.jwtService.sign(payload),
        }
    }
    async validateUsuario(email: string, password: string): Promise<Usuario> {
        const usuario: Usuario = await this.usuarioService.findByEmail(email);

        if(usuario) {
            const isPasswordValid = await bcrypt.compare(password, usuario.senha);

            if (isPasswordValid) {
                return {
                    ...usuario,
                    senha: undefined,
                };
            }
        }

        throw new Error('User and/or passwoird are invalid.');
    }


    //===========================================================


    
}
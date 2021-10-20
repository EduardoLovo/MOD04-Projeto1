import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsuariosService } from 'src/usuarios/usuarios.service';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    private reflector;
    private readonly usuariosService;
    constructor(reflector: Reflector, usuariosService: UsuariosService);
    canActivate(context: ExecutionContext): boolean | import("rxjs").Observable<boolean>;
}
export {};

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthRequest } from 'src/auth/model/AuthRequest';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

export const CurrentUsuarios = createParamDecorator(
  (data: unknown, context: ExecutionContext): Usuario => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.principal;
  },
);

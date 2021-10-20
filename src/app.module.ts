import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfisModule } from './perfis/perfis.module';
import { JogosModule } from './jogos/jogos.module';
import { GenerosModule } from './generos/generos.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Module({
  imports: [UsuariosModule, PerfisModule, JogosModule, GenerosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, UsuariosModule,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

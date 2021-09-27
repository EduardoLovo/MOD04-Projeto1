import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { PerfisModule } from './perfis/perfis.module';
import { JogosModule } from './jogos/jogos.module';
import { GenerosModule } from './generos/generos.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UsuariosModule, PerfisModule, JogosModule, GenerosModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

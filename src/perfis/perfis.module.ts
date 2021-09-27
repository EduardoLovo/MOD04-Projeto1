import { Module } from '@nestjs/common';
import { PerfisService } from './perfis.service';
import { PerfisController } from './perfis.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PerfisController],
  providers: [PerfisService, PrismaService]
})
export class PerfisModule {}

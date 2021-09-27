import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfiDto } from './dto/create-perfi.dto';
import { UpdatePerfiDto } from './dto/update-perfi.dto';

@Injectable()
export class PerfisService {
  constructor (private readonly prisma: PrismaService) {}
  
  create(data: CreatePerfiDto) {
    return this.prisma.perfil.create({
      data,
    });
  }

  findAll() {
    return this.prisma.perfil.findMany()
  }

  findOne(id: number) {
    return this.prisma.perfil.findUnique({
      where: {id},
    });
  }

  update(id: number, data: UpdatePerfiDto) {
    return this.prisma.perfil.update({
      where: {id},
      data,
    });
  }

  remove(id: number) {
    return this.prisma.perfil.delete({
      where: {id},
    });
  }
}

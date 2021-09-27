import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor (private readonly prisma: PrismaService) {}
  
  private readonly _include = {
    perfis: {
      select: {
        titulo: true
      }
    },

    jogos: {
      select: {
        titulo: true
      }
    }
  };

  create(data: CreateUsuarioDto) {
    return this.prisma.usuario.create({
      data,
      include: this._include,
    })
  }

  findAll() {
    return this.prisma.usuario.findMany({
      include: this._include,
    })
  };
  

  findOne(id: number) {
    return this.prisma.usuario.findUnique({
      where: {id},
      include: this._include,
    });
  }

  update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuario.update({
      where: {id},
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({
      where: {id},
    });
  }
}

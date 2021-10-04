import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';

@Injectable()
export class JogosService {
  constructor (private readonly prisma: PrismaService) {}

  private readonly _include = {
    generos: {
      select: {
        nome: true
      }
    },

    usuarios: {
      select: {
        nome: true
      }
    }

  }
  

  create(data: CreateJogoDto) {
    return this.prisma.jogo.create({
      data,
      // include: this._include,
    });
  }

  findAll() {
    return this.prisma.jogo.findMany({
      // include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.jogo.findUnique({
      where: {id},
      // include: this._include,
    });
  }

  update(id: number, data: UpdateJogoDto) {
    return this.prisma.jogo.update({
      where: {id},
      data,
      // include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.jogo.delete({
      where: {id},
    });
  }
}

import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor (private readonly prisma: PrismaService) {}
  
  private readonly _include: Prisma.UsuarioInclude = {
    perfis: {
      select: {
        titulo: true
      },
    },
  }

  async create(dto: CreateUsuarioDto) {
    const perfisIds = dto.perfisIds;

    delete dto.perfisIds;

    const data: Prisma.UsuarioCreateInput = {
      ...dto,
      perfis: {
        connect: perfisIds.map((perfilId) => ({ id: perfilId })),
      },
      senha: await bcrypt.hash(dto.senha, 10),
    };

    const createUsuario = await this.prisma.usuario.create({
      data,
      include: this._include,
    });
    return {
      ...createUsuario,
      senha: undefined,
    };
  }

  findAll() {
    return this.prisma.usuario.findMany({
      include: this._include,
    });
  }
  

  findById(id: number) {
    return this.prisma.usuario.findUnique({ where: { id }});
  }

  findByEmail(email: string) {
    return this.prisma.usuario.findUnique({ where: { email }});
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

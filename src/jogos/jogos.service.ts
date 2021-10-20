import { Prisma } from '.prisma/client';
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
        nome: true,
      },
    },
    perfis: {
      select: {
        titulo: true,
      },
    },
  };
  

  create(dto: CreateJogoDto) {
    const generosIds = dto.generosIds;

    delete dto.generosIds;


    const data: Prisma.JogoCreateInput = {
      ...dto,
      generos: {        
        connect: generosIds.map((generoId) => ({ id: generoId })),
      },
       
    };
    return this.prisma.jogo.create({
      data,
      include: this._include,
    });
    
  };

  findAll() {
    return this.prisma.jogo.findMany({
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.jogo.findUnique({
      where: { id },
    });
  }

  update(id: number, dto: UpdateJogoDto) {
    const generosIds = dto.generosIds;

    delete dto.generosIds;

    

    const data: Prisma.JogoUpdateInput = {
      ...dto,
      generos: {        
        connect: generosIds?.map((generoId) => ({ id: generoId })),
      },
      
    };
    
    return this.prisma.jogo.update({
      where: {id},
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    console.log('deletado');
    return this.prisma.jogo.delete({
      where: { id },
    });
    
  }

  
}

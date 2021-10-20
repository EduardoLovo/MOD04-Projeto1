import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Public } from 'src/auth/public.decorator';

@Controller('jogos')
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  // @Public()
  @Post()
  create(@Body() createJogoDto: CreateJogoDto) {
    return this.jogosService.create(createJogoDto);
  }

  @Public()
  @Get()
  findAll() {  
    return this.jogosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.jogosService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateJogoDto: UpdateJogoDto) {
    return this.jogosService.update(id, updateJogoDto);
  }

  @Public()
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    console.log('passou');
    
    return this.jogosService.remove(id);
  }
}

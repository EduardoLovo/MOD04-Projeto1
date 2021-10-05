import { CreateJogoDto } from "src/jogos/dto/create-jogo.dto";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuario.dto";
import { Perfil } from "../entities/perfi.entity";
export declare class CreatePerfilDto extends Perfil {
    titulo: string;
    imagem: string;
    usuarios?: CreateUsuarioDto[];
    jogos?: CreateJogoDto[];
}

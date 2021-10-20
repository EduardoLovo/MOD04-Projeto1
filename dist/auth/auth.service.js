"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const usuarios_service_1 = require("../usuarios/usuarios.service");
let AuthService = class AuthService {
    constructor(jwtService, usuarioService) {
        this.jwtService = jwtService;
        this.usuarioService = usuarioService;
    }
    async login(dto) {
        const usuario = await this.validateUsuario(dto.email, dto.senha);
        const payload = {
            sub: usuario.id,
            username: usuario.email,
        };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }
    async validateUsuario(email, password) {
        const usuario = await this.usuarioService.findByEmail(email);
        if (usuario) {
            const isPasswordValid = await bcrypt.compare(password, usuario.senha);
            if (isPasswordValid) {
                return Object.assign(Object.assign({}, usuario), { senha: undefined });
            }
        }
        throw new Error('User and/or passwoird are invalid.');
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        usuarios_service_1.UsuariosService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
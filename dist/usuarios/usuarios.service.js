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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    constructor(prisma) {
        this.prisma = prisma;
        this._include = {
            perfis: {
                select: {
                    titulo: true
                },
            },
        };
    }
    async create(dto) {
        const perfisIds = dto.perfisIds;
        delete dto.perfisIds;
        const data = Object.assign(Object.assign({}, dto), { perfis: {
                connect: perfisIds.map((perfilId) => ({ id: perfilId })),
            }, senha: await bcrypt.hash(dto.senha, 10) });
        const createUsuario = await this.prisma.usuario.create({
            data,
            include: this._include,
        });
        return Object.assign(Object.assign({}, createUsuario), { senha: undefined });
    }
    findAll() {
        return this.prisma.usuario.findMany({
            include: this._include,
        });
    }
    findById(id) {
        return this.prisma.usuario.findUnique({ where: { id } });
    }
    findByEmail(email) {
        return this.prisma.usuario.findUnique({ where: { email } });
    }
    update(id, data) {
        return this.prisma.usuario.update({
            where: { id },
            data,
            include: this._include,
        });
    }
    remove(id) {
        return this.prisma.usuario.delete({
            where: { id },
        });
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map
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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const data = Object.assign(Object.assign({}, dto), { senha: await bcrypt.hash(dto.senha, 10) });
        const createAdmin = await this.prisma.admin.create({
            data
        });
        return Object.assign(Object.assign({}, createAdmin), { senha: undefined });
    }
    findAll() {
        return this.prisma.admin.findMany();
    }
    findOne(id) {
        return this.prisma.admin.findUnique({ where: { id } });
    }
    findByEmail(email) {
        return this.prisma.admin.findUnique({ where: { email } });
    }
    update(id, data) {
        return this.prisma.admin.update({
            where: { id },
            data,
        });
    }
    remove(id) {
        return this.prisma.usuario.delete({
            where: { id },
        });
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map
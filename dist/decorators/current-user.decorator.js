"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUsuarios = void 0;
const common_1 = require("@nestjs/common");
const AuthRequest_1 = require("../auth/model/AuthRequest");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
exports.CurrentUsuarios = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return request.principal;
});
//# sourceMappingURL=current-user.decorator.js.map
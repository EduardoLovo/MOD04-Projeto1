"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePerfiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_perfil_dto_1 = require("./create-perfil.dto");
class UpdatePerfiDto extends (0, mapped_types_1.PartialType)(create_perfil_dto_1.CreatePerfilDto) {
}
exports.UpdatePerfiDto = UpdatePerfiDto;
//# sourceMappingURL=update-perfi.dto.js.map
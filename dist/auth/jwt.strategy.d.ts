import { Strategy } from 'passport-jwt';
import { UsuarioFromJwt } from './model/UserFromJwt';
import { UsuarioPayload } from './model/UserPayload';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UsuarioPayload): UsuarioFromJwt;
}
export {};

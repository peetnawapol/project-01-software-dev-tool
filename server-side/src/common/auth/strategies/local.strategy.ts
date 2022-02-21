import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import { Strategy } from 'passport'
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' })
  }
} 
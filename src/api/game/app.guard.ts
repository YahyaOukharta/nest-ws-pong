import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToWs().getClient();
    const cookie = request.handshake.headers.cookie;
    const authorization = request.handshake.headers.Authorization;
    const user = await this.authService.isAuthenticated(cookie, authorization);
    request.user = user;
    return user ? true : false;
  }
}

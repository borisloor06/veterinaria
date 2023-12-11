import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const client: Socket = context.switchToWs().getClient();
    const token = this.extractTokenFromHeader(client.handshake.headers);
    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.authService.validateToken(token);
      client.data.user = payload;

      // Optionally, you can set the 'user' property on the request object as well
      // const request = context.switchToHttp().getRequest();
      // request.user = payload;

      return true;
    } catch (error) {
      return false;
    }
  }

  private extractTokenFromHeader(headers: Record<string, string | string[] | undefined>): string | undefined {
    const authorization = headers['authorization'] as String;
    if (!authorization) {
      return undefined;
    }

    const [type, token] = authorization.split(' ') ?? [];

    if (type !== 'Bearer') {
      return undefined;
    }

    return token;
  }
}
import { Module } from '@nestjs/common';
import { SocketService } from './socket.service';
import { SocketGateway } from './socket.gateway';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { AuthService } from 'src/guards/auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    SocketGateway,
    SocketService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class SocketModule {}

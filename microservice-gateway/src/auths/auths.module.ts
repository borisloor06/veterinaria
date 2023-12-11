import { Module } from '@nestjs/common';
import { AuthsController } from './auths.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [AuthsController],
})
export class AuthsModule {}

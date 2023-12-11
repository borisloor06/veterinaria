import { Module } from '@nestjs/common';
import { ClientProxyVeterinaria } from './client-proxy';

@Module({
  providers: [ClientProxyVeterinaria],
  exports: [ClientProxyVeterinaria],
})
export class ProxyModule {}

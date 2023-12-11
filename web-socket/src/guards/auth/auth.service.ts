import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom, map } from 'rxjs';
import { User } from '../entities/auth.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService, 
    private readonly configService: ConfigService
    ) {}

  validateToken(token: string): Promise<User> {
    const uri = this.configService.get('AUTH_API_URL') + '/validate';

    try {
      return firstValueFrom(
        this.httpService
          .get(uri, {
            headers: {
              'X-Auth-token': `${token}`,
            },
          })
          .pipe(map((response: AxiosResponse) => response.data)),
      );
    } catch (error) {
      console.error(error);
    }
  }
}

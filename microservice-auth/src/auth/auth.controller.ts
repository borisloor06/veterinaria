import { Controller } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthMsg } from 'src/common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto } from './dto/LoginDto.dto';
import { RegisterDto } from './dto/RegisterDto.dto';
import { AuthSQLService } from './services/auth_sql.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sqlAuthService: AuthSQLService,
  ) {}

  @MessagePattern(AuthMsg.LOGIN)
  async login(@Payload() credentials: LoginDto) {
    const user = await this.authService.validateUser(credentials);
    // const user = await this.sqlAuthService.validateUser(credentials);

    if (user) {
      return this.authService.login(user);
    } else {
      return { message: 'Invalid credentials' };
    }
  }

  @MessagePattern(AuthMsg.REGISTER)
  async register(@Payload() userData: RegisterDto) {
    try {
      const user = await this.authService.register(userData);
      // await this.sqlAuthService.register(userData);
      return this.authService.login(user);
    } catch (error) {
      return { message: error.message || 'Registration failed' };
    }
  }

  @MessagePattern(AuthMsg.GET_USER)
  async getProfileData(@Payload() token: string) {
    const user = await this.authService.validateToken(token);
    // const user = await this.sqlAuthService.validateToken(token);
    if (user) {
      return user;
    } else {
      return { message: 'Invalid token' };
    }
  }
}

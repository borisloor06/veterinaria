import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Auth as AuthSQL } from '../entities/user.entity';
import { RegisterDto } from '../dto/RegisterDto.dto';
import { LoginDto } from '../dto/LoginDto.dto';

@Injectable()
export class AuthSQLService {
  constructor(
    @InjectModel(AuthSQL.name)
    private readonly userRepository: Repository<AuthSQL>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginDto): Promise<any> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      is_user: user.is_user,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register({ username, password, isUser }: RegisterDto): Promise<any> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const createdUser = this.userRepository.create({
        username,
        password: hashedPassword,
        is_user: isUser,
      });

      const result = await this.userRepository.save(createdUser);

      const { password, ...user } = result;
      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      }
      const logger = new Logger('AuthService');
      logger.error(error);
      throw error;
    }
  }

  async validateToken(token: string): Promise<any> {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userRepository.findOne(payload.sub);

      if (user) {
        const { password, ...result } = user;
        return result;
      }
    } catch (error) {
      return null;
    }
  }
}

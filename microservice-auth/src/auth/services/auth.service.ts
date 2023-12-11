import { Injectable, ConflictException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
import { Auth } from '../entities/user.model';
import { RegisterDto } from '../dto/RegisterDto.dto';
import { LoginDto } from '../dto/LoginDto.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly userModel: Model<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ username, password }: LoginDto): Promise<any> {
    const user = await this.userModel.findOne({ username }).exec();

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user.toObject();
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
      is_user: user.is_user,
    };
    return {
      access_token: this.jwtService.sign(payload),
      is_user: user.is_user,
    };
  }

  async register({ username, password, isUser }: RegisterDto): Promise<any> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const createdUser = new this.userModel({
        username,
        password: hashedPassword,
        is_user: isUser,
      });

      const result = await createdUser.save();

      const { password, ...user } = result.toObject();
      return user;
    } catch (error) {
      // Si hay un error de duplicación (por ejemplo, el nombre de usuario ya existe), lanza una excepción de conflicto.
      if (error.code === 11000) {
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
      const user = await this.userModel.findById(payload.sub).exec();
      if (user) {
        const { password, ...result } = user.toObject();
        return result;
      }
    } catch (error) {
      return null;
    }
  }
}

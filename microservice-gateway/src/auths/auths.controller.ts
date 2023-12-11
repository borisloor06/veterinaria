import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { AuthMsg } from './../common/constants';
import { Observable } from 'rxjs';
import { ClientProxyVeterinaria } from '../common/proxy/client-proxy';
import { User } from './entities/auth.entity';
import { RegisterDto } from './dto/RegisterDto';
import { LoginDto } from './dto/LoginDto';

@Controller('/auth')
export class AuthsController {
  constructor(private readonly clientProxy: ClientProxyVeterinaria) {}
  private _clientProxyUser = this.clientProxy.clientProxyAuth();

  @Post('register')
  register(@Body() registerDTO: RegisterDto): Observable<string> {
    return this._clientProxyUser.send(AuthMsg.REGISTER, registerDTO);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto): Observable<string> {
    return this._clientProxyUser.send(AuthMsg.LOGIN, loginDto);
  }

  @Get('validate')
  findOne(@Headers('X-Auth-token') token: string): Observable<User> {
    return this._clientProxyUser.send(AuthMsg.GET_USER, token);
  }
}

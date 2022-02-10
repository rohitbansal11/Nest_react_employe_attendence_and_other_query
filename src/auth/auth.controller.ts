import { Body, Controller, Get, Post ,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BaseTodoDto } from './dto/Basedto';
import { Login } from './dto/Login';


@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/register')
  async index(@Body() BaseTodoDto: BaseTodoDto) {
    return await this.service.registerUser(BaseTodoDto);
  }

  @Post('/login')
  async logints(@Body() Login:Login) {
      return await this.service.loginPage(Login)


  }
  @Get('allusers')
  async Alluserget(){
    return await this.service.allUser()
  }














}

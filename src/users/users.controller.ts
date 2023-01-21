import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from './dto/user.create.dto';
import { UsersService } from './users.service';
import { RealIP } from 'nestjs-real-ip';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('login')
  login() {
    return;
  }

  @Post('signUp')
  signUp(@RealIP() ip: string, @Body() body: UserCreateDto) {
    return this.usersService.createUser(ip, body);
  }
}

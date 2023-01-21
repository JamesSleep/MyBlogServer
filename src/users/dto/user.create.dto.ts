import { PickType } from '@nestjs/swagger';
import { User } from '../users.entity';

export class UserCreateDto extends PickType(User, ['uid', 'password']) {}

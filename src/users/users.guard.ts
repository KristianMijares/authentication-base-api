import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ConflictException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const userRequest = context.switchToHttp().getRequest().body;
    return this.userService.findOneByEmail(userRequest.email).then((user) => {
      if (user) {
        throw new ConflictException('User already exists');
      }
      return true;
    });
  }
}

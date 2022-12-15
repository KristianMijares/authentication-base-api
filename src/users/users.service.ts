import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { USER_REPOSITORY } from 'src/core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly usersRepository: typeof User,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const hash = await bcrypt.hashSync(createUserDto.password, 10);

      return await this.usersRepository.create({
        ...createUserDto,
        password: hash,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

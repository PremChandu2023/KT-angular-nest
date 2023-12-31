import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create.user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entites/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  async changePassword(userName: string, userDetails: UpdateUserDto) {
    const newUser = await this.userRepository.findOne({
      where: { user_name: userName },
    });

    if (!newUser) throw new BadRequestException('invalid userName');
    if (!(newUser.password === userDetails.currentPassword)) {
      throw new BadRequestException('Given current password is invalid');
    }
    newUser.password = userDetails.newPassword;
    return await this.userRepository.save(newUser);
  }
  async getUserByName(getUsers: CreateUserDto) {
    const newUser = await this.userRepository.findOne({
      where: { user_name: getUsers.userName, password: getUsers.password },
    });
    if (!newUser) throw new BadRequestException('invalid credentials');
    return newUser;
  }
  async createUser(userDetails: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create({
      user_name: userDetails.userName,
      password: userDetails.password,
    });

    console.log();
    return await this.userRepository.save(newUser);
  }
}

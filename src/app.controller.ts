import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
 async  getHello(@Body('userName') userName:CreateUserDto) {
    return await this.appService.getUserByName(userName);
  }
  @Put('password')
  async updatePassword(@Body() getUsers:CreateUserDto)
  {
      return await this.appService.changePassword(getUsers);
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    try{
    return await this.appService.createUser(createUser);
    }
    catch(error)
    {
        throw new InternalServerErrorException({error:error});
    }
  }
}

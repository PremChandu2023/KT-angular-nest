import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, UpdateUserDto } from './dto/create.user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
 async  getHello(@Body() userName:CreateUserDto) {
    return await this.appService.getUserByName(userName);
  }
  @Put('/:name/password')
  async updatePassword(@Param('name') name:string,@Body() getUsers:UpdateUserDto)
  {
      return await this.appService.changePassword(name,getUsers);
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

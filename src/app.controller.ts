import { Body, Controller, Get, InternalServerErrorException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {}

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

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entites/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'test',

entities:[User],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

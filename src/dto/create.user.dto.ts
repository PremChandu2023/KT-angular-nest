import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  userName: string;
  @Length(5)
  password: string;
}

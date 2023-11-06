import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  userName: string;
  @Length(5)
  password: string;
}
export class UpdateUserDto extends CreateUserDto{
  @IsNotEmpty()
  userName: string;
    @Length(5)
    currentPassword:string
    @Length(5)
    newPassword:string
}

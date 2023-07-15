import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsInt()
  age: number;

  @IsString()
  hello: string;
}

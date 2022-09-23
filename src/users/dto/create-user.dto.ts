import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Wrong email' })
  readonly email: string;

  @ApiProperty({ example: 'test42', description: 'Password' })
  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'Password must be between 4 and 16 characters' })
  readonly password: string;
}

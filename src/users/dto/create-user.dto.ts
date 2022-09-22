import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Should be string' })
  @IsEmail({}, { message: 'Wrong email' })
  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  readonly email: string;

  @IsString({ message: 'Should be string' })
  @Length(4, 16, { message: 'Password must be between 4 and 16 characters' })
  @ApiProperty({ example: 'test42', description: 'Password' })
  readonly password: string;
}

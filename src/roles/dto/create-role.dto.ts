import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @IsString({ message: 'Should be a sting' })
  readonly value: string;

  @ApiProperty({ example: 'User with the ability to edit data', description: 'Description Role' })
  @IsString({ message: 'Should be a sting' })
  readonly description: string;
}

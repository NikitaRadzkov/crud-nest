import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'User Id' })
  @IsInt({ message: 'Should be a number' })
  readonly userId: number;

  @ApiProperty({ example: 'Insults', description: 'Ban reason' })
  @IsString({ message: 'Should be string' })
  readonly banReason: string;
}

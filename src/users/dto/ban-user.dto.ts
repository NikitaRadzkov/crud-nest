import { IsInt, IsString } from 'class-validator';

export class BanUserDto {
  @IsInt({ message: 'Should be number' })
  readonly userId: number;

  @IsString({ message: 'Should be string' })
  readonly banReason: string;
}

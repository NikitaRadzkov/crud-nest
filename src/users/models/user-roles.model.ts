import { Role } from './../../roles/models/roles.model';
import { User } from './users.model';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table, DataType, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: '1', description: 'Row Id' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: '1', description: 'User Id' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: '1', description: 'Role Id' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: number;
}

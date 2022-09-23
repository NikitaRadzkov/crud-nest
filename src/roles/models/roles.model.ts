import { UserRoles } from './../../users/models/user-roles.model';
import { User } from '../../users/models/users.model';
import { Column, Model, Table, DataType, BelongsToMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'User role' })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @ApiProperty({ example: 'Administrator', description: 'Role Description' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({ example: 'User[]', description: 'Array users' })
  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}

import { UserRoles } from './user-roles.model';
import { Role } from './../../roles/models/roles.model';
import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identifier' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'test@test.com', description: 'Email', required: true })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'test42', description: 'Password', required: true })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: true, description: 'Banned or not', default: false })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Insults', description: 'Why the user was blocked' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @ApiProperty({ example: 'Role[]', description: 'Array roles' })
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}

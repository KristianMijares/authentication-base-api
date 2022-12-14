import {
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize/types/model';
import { Model, Table, Column } from 'sequelize-typescript';

@Table
export default class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Column
  public email!: string;
  @Column
  public password!: string;
  @Column
  public isActive!: boolean;
}

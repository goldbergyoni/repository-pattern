import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserMapper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100
  })
  name: string;

  @Column("double")
  age: number;

  @Column()
  isApproved: boolean;
}

import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class NorskPetroleum extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field_name: string;

  @Column()
  area: string;

  @Column()
  status: string;

  @Column()
  disc_year: number

  @Column()
  orig_res: string;

  @Column()
  rem_res: string;

  @Column()
  prod_start: string;

  @Column()
  operator: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"list"})
export class List {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}


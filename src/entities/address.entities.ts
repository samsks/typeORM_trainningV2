import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  street: string;

  @Column({ length: 5 })
  number: string;

  @Column({ length: 8 })
  zip_code: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 50, nullable: true })
  information?: string;
}

export default Address;

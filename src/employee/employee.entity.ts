import { Company } from "src/company/company.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @Column('int')
    salary: number;

    @Column('text')
    position: string;

    @Column('int')
    yearsOfExperience: number;

    @ManyToOne(() => Company, (company) => company.employees, { eager: true })
    company: Company;
}
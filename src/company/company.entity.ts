import { Employee } from "src/employee/employee.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    name: string;

    @OneToMany(() => Employee, (employee) => employee.company)
    employees: Employee[];
}
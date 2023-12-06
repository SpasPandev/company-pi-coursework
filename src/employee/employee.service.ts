import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeeService {

    constructor(
        @Inject('EMPLOYEE_REPOSITORY')
        private employeeRepository: Repository<Employee>,
    ) { }

    async findAll(): Promise<Employee[]> {
        return this.employeeRepository.find();
    }

    async findAllByPosition(position): Promise<Employee[]> {
        return this.employeeRepository.find(
            {
                where: {
                    position: position
                }
            }
        );
    }

    async updateEmployeeById(id, updateEmployeeDto) {
        
        console.log(updateEmployeeDto.name);
        return this.employeeRepository.update(id, updateEmployeeDto);
    }

    addEmployee(employee) {

        return this.employeeRepository.save(employee);
    }

    deleteEmployeeById(id) {

        return this.employeeRepository.delete(id);
    }
}
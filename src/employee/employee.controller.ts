import { Body, Controller, Get, Post, Delete, Patch, Param } from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee.entity";
import { UpdateEmployeeDto } from "./updateEmployee.dto";

@Controller('employee')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    getAllEmployees(): Promise<Employee[]> {
        
        return this.employeeService.findAll();
    }

    @Get(':positon')
    getAllEmployeesByPosition(@Param('positon') positon: string): Promise<Employee[]> {
        
        return this.employeeService.findAllByPosition(positon);
    }

    @Post()
    addEmployee(@Body() employee) {
        
        return this.employeeService.addEmployee(employee);
    } 

    @Patch(':id')
    updateEmployee(@Param('id') id: number, @Body() updateEmployeeDto: UpdateEmployeeDto) {

        return this.employeeService.updateEmployeeById(id, updateEmployeeDto);
    }

    @Delete(':id')
    deleteEmployee(@Param ('id') id: number){

        return this.employeeService.deleteEmployeeById(id);
    }
}
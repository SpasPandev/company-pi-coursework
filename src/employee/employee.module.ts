import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { employeeProviders } from "./employee.providers";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";

@Module({
    
    controllers: [EmployeeController],
    imports: [DatabaseModule],
    providers:[
        ...employeeProviders,
        EmployeeService,    
    ],
})

export class EmployeeModule {}
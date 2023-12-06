import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {

    constructor(private readonly companyService: CompanyService) { }

    @Get()
    getAllCompanies() {
        return this.companyService.findAll();
    }

    @Post()
    createCompany(@Body() company){
        
        this.companyService.createOne(company);
    }

    @Delete(':id')
    deleteCompany(@Param('id') id: number){

        this.companyService.deleteCompanyById(id);
    }
}
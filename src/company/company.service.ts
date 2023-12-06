import { Injectable, Inject } from '@nestjs/common';
import { Repository } from "typeorm";
import { Company } from "./company.entity";

@Injectable()
export class CompanyService {

    constructor(
        @Inject('COMPANY_REPOSITORY')
        private companyRepository: Repository<Company>,
    ) { }

    async findAll(): Promise<Company[]> {
        return this.companyRepository.find();
    } 

    createOne(company){
        return this.companyRepository.save(company);
    }

    deleteCompanyById(id){
        return this.companyRepository.delete(id);
    }
}
import { Module } from '@nestjs/common';
import { CompanyController } from "./company.controller";
import { DatabaseModule } from 'src/database/database.module';
import { companyProviders } from './company.providers';
import { CompanyService } from './company.service';

@Module(
    {
        controllers: [CompanyController],
        imports: [DatabaseModule],
        providers: [...companyProviders, CompanyService]
    }
)
export class CompanyModule { }
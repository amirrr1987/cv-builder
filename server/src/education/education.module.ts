import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationController } from './education.controller';
import { EducationRepository } from './education-repository';

@Module({
  controllers: [EducationController],
  providers: [EducationService, EducationRepository],
})
export class EducationModule {}

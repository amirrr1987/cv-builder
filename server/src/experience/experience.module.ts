import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceController } from './experience.controller';
import { ExperienceRepository } from './experience-repository';

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService, ExperienceRepository],
})
export class ExperienceModule {}

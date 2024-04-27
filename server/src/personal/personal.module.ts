import { Module } from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { PersonalRepository } from './personal-repository';

@Module({
  controllers: [PersonalController],
  providers: [PersonalService, PersonalRepository],
})
export class PersonalModule {}

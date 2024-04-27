import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { EducationModule } from './education/education.module';

@Module({
  imports: [UserModule, SkillModule, EducationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

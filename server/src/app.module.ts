import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SkillModule } from './skill/skill.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { PersonalModule } from './personal/personal.module';
import { SocialModule } from './social/social.module';

@Module({
  imports: [
    UserModule,
    SkillModule,
    EducationModule,
    ExperienceModule,
    PersonalModule,
    SocialModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

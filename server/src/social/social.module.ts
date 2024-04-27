import { Module } from '@nestjs/common';
import { SocialService } from './social.service';
import { SocialController } from './social.controller';
import { SocialRepository } from './social-repository';

@Module({
  controllers: [SocialController],
  providers: [SocialService, SocialRepository],
})
export class SocialModule {}

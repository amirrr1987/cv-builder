import { Injectable } from '@nestjs/common';
import { SocialCreateDTO } from './dto/social-create.dto';
import { SocialUpdateDTO } from './dto/social-update.dto';
@Injectable()
export class SocialRepository {
  create(dto: SocialCreateDTO) {
    return 'This action adds a new social';
  }

  findAll() {
    return `This action returns all social`;
  }

  findById(id: string) {
    return `This action returns a #${id} social`;
  }
  findOne(dto: SocialUpdateDTO) {
    return `This action returns a #${dto} social`;
  }

  update(id: string, dto: SocialUpdateDTO) {
    return `This action updates a #${id} social`;
  }

  remove(id: string) {
    return `This action removes a #${id} social`;
  }
}

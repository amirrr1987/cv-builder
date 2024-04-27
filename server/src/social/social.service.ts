import { Injectable } from '@nestjs/common';
import { SocialCreateDTO } from './dto/social-create.dto';
import { SocialUpdateDTO } from './dto/social-update.dto';
import { SocialRepository } from './social-repository';

@Injectable()
export class SocialService {
  constructor(private readonly repository: SocialRepository) {}
  async create(dto: SocialCreateDTO) {
    return await this.repository.create(dto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async findOne(dto: SocialUpdateDTO) {
    return await this.repository.findOne(dto);
  }

  async update(id: string, dto: SocialUpdateDTO) {
    return await this.repository.update(id, dto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}

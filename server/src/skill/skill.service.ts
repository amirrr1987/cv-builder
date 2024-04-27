import { Injectable } from '@nestjs/common';
import { SkillCreateDTO } from './dto/skill-create.dto';
import { SkillUpdateDTO } from './dto/skill-update.dto';
import { SkillRepository } from './skill-repository';

@Injectable()
export class SkillService {
  constructor(private readonly repository: SkillRepository) {}
  async create(dto: SkillCreateDTO) {
    return await this.repository.create(dto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async findOne(dto: SkillUpdateDTO) {
    return await this.findOne(dto);
  }

  async update(id: string, dto: SkillUpdateDTO) {
    return await this.repository.update(id, dto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}

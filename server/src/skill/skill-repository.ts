import { Injectable } from '@nestjs/common';
import { SkillCreateDTO } from './dto/skill-create.dto';
import { SkillUpdateDTO } from './dto/skill-update.dto';

@Injectable()
export class SkillRepository {
  async create(dto: SkillCreateDTO) {
    return await 'This action adds a new skill';
  }

  async findAll() {
    return await `This action returns all skill`;
  }

  async findById(id: string) {
    return await `This action returns a #${id} skill`;
  }
  async findOne(id: string) {
    return await `This action returns a #${id} skill`;
  }

  async update(id: string, dto: SkillUpdateDTO) {
    return await `This action updates a #${id} skill`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} skill`;
  }
}

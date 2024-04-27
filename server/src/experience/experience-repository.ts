import { Injectable } from '@nestjs/common';
import { ExperienceCreateDTO } from './dto/experience-create.dto';
import { ExperienceUpdateDTO } from './dto/experience-update.dto';
@Injectable()
export class ExperienceRepository {
  async create(dto: ExperienceCreateDTO) {
    return await 'This action adds a new experience';
  }

  async findAll() {
    return await `This action returns all experience`;
  }

  async findById(id: string) {
    return await `This action returns a #${id} experience`;
  }

  async findOne(dto: ExperienceUpdateDTO) {
    return await `This action returns a #${dto} experience`;
  }

  async update(id: string, dto: ExperienceUpdateDTO) {
    return await `This action updates a #${id} experience`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} experience`;
  }
}

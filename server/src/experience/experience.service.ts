import { Injectable } from '@nestjs/common';
import { ExperienceCreateDTO } from './dto/experience-create.dto';
import { ExperienceUpdateDTO } from './dto/experience-update.dto';
import { ExperienceRepository } from './experience-repository';

@Injectable()
export class ExperienceService {
  constructor(private readonly repository: ExperienceRepository) {}
  async create(dto: ExperienceCreateDTO) {
    return await this.repository.create(dto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(dto: ExperienceUpdateDTO) {
    return this.repository.findOne(dto);
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, dto: ExperienceUpdateDTO) {
    return await this.repository.update(id, dto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}

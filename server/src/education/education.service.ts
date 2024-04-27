import { Injectable } from '@nestjs/common';
import { EducationCreateDTO } from './dto/education-create.dto';
import { EducationUpdateDTO } from './dto/education-update.dto';
import { EducationRepository } from './education-repository';

@Injectable()
export class EducationService {
  constructor(private readonly repository: EducationRepository) {}
  async create(dto: EducationCreateDTO) {
    return await this.repository.create(dto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(dto: EducationUpdateDTO) {
    return await this.repository.findOne(dto);
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, dto: EducationUpdateDTO) {
    return await this.repository.update(id, dto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}

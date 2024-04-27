import { Injectable } from '@nestjs/common';
import { PersonalCreateDTO } from './dto/personal-create.dto';
import { PersonalUpdateDTO } from './dto/personal-update.dto';
import { PersonalRepository } from './personal-repository';

@Injectable()
export class PersonalService {
  constructor(private readonly repository: PersonalRepository) {}
  async create(dto: PersonalCreateDTO) {
    return await this.repository.create(dto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  findOne(dto: PersonalUpdateDTO) {
    return this.repository.findOne(dto);
  }

  update(id: string, dto: PersonalUpdateDTO) {
    return this.update(id, dto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}

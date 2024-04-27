import { Inject, Injectable } from '@nestjs/common';
import { PersonalCreateDTO } from './dto/personal-create.dto';
import { PersonalUpdateDTO } from './dto/personal-update.dto';

@Injectable()
export class PersonalRepository {
  async create(dto: PersonalCreateDTO) {
    return await dto;
  }

  async findAll() {
    return await `This action returns all personal`;
  }

  async findOne(dto: PersonalUpdateDTO) {
    return await `This action returns a #${dto} personal`;
  }

  async findById(id: string) {
    return await `This action returns a #${id} personal`;
  }

  async update(id: string, dto: PersonalUpdateDTO) {
    return await `This action updates a #${id} personal`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} personal`;
  }
}

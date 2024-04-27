import { Injectable } from '@nestjs/common';
import { EducationCreateDTO } from './dto/education-create.dto';
import { EducationUpdateDTO } from './dto/education-update.dto';
@Injectable()
export class EducationRepository {
  async create(dto: EducationCreateDTO) {
    return await 'This action adds a new education';
  }

  async findAll() {
    return await `This action returns all education`;
  }

  async findById(id: string) {
    return await `This action returns a #${id} education`;
  }

  async findOne(dto: EducationUpdateDTO) {
    return await `This action returns a #${dto} education`;
  }

  async update(id: string, dto: EducationUpdateDTO) {
    return await `This action updates a #${dto} education`;
  }

  async remove(id: string) {
    return await `This action removes a #${id} education`;
  }
}

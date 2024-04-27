import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationCreateDTO } from './dto/education-create.dto';
import { EducationUpdateDTO } from './dto/education-update.dto';

@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post()
  create(@Body() dto: EducationCreateDTO) {
    return this.educationService.create(dto);
  }

  @Get()
  findAll() {
    return this.educationService.findAll();
  }

  @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.educationService.findById(id);
  }

  @Get('findOne')
  findOne(@Body() dto: EducationUpdateDTO) {
    return this.educationService.findOne(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: EducationUpdateDTO) {
    return this.educationService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educationService.remove(id);
  }
}

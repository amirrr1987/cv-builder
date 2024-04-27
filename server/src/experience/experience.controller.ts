import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceCreateDTO } from './dto/experience-create.dto';
import { ExperienceUpdateDTO } from './dto/experience-update.dto';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post()
  create(@Body() dto: ExperienceCreateDTO) {
    return this.experienceService.create(dto);
  }

  @Get()
  findAll() {
    return this.experienceService.findAll();
  }

  @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.experienceService.findById(id);
  }

  @Get('findOne')
  findOne(@Body() dto: ExperienceUpdateDTO) {
    return this.experienceService.findOne(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: ExperienceUpdateDTO) {
    return this.experienceService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceService.remove(id);
  }
}

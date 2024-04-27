import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillCreateDTO } from './dto/skill-create.dto';
import { SkillUpdateDTO } from './dto/skill-update.dto';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  create(@Body() dto: SkillCreateDTO) {
    return this.skillService.create(dto);
  }

  @Get()
  findAll() {
    return this.skillService.findAll();
  }

  @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.skillService.findById(id);
  }

  @Get('findOne/')
  findOne(@Body() dto: SkillUpdateDTO) {
    return this.skillService.findOne(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: SkillUpdateDTO) {
    return this.skillService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillService.remove(id);
  }
}

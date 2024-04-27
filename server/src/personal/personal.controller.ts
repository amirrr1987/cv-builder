import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PersonalService } from './personal.service';
import { PersonalCreateDTO } from './dto/personal-create.dto';
import { PersonalUpdateDTO } from './dto/personal-update.dto';

@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @Post()
  create(@Body() createPersonalDto: PersonalCreateDTO) {
    return this.personalService.create(createPersonalDto);
  }

  @Get()
  findAll() {
    return this.personalService.findAll();
  }

  @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.personalService.findById(id);
  }

  @Get('findOne')
  findOne(@Body() dto: PersonalUpdateDTO) {
    return this.personalService.findOne(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: PersonalUpdateDTO) {
    return this.personalService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personalService.remove(id);
  }
}

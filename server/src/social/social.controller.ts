import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SocialService } from './social.service';
import { SocialCreateDTO } from './dto/social-create.dto';
import { SocialUpdateDTO } from './dto/social-update.dto';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  create(@Body() dto: SocialCreateDTO) {
    return this.socialService.create(dto);
  }

  @Get()
  findAll() {
    return this.socialService.findAll();
  }

  @Get('findOne')
  findOne(@Body() dto: SocialUpdateDTO) {
    return this.socialService.findOne(dto);
  }

  @Get('findById/:id')
  findById(@Param('id') id: string) {
    return this.socialService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: SocialUpdateDTO) {
    return this.socialService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialService.remove(id);
  }
}

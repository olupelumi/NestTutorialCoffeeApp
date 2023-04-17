import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    return this.coffeesService.findOne(params.id);
  }

  @Post()
  Create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  Update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  Delete(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { prototype } from 'events';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeService: CoffeesService) {}

  @Get()
  findAllCoffees() {
    return this.coffeService.findAllCoffees();
  }

  @Get(':id')
  findOneCoffee(@Param('id') id: String) {
    const coffee = this.coffeService.findOneCoffee(id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} NOT FOUND`);
    } else {
      return coffee;
    }
  }

  @Post()
  createCoffe(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeService.createCoffee(createCoffeeDto);
  }

  @Patch(':id')
  updateCoffee(
    @Param('id') id: String,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    this.coffeService.updateCoffee(id, updateCoffeeDto);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: String) {
    return this.coffeService.deleteCoffee(id);
  }
}

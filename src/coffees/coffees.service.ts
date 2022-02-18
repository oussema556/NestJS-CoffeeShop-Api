import { Injectable } from '@nestjs/common';
import { Coffee } from 'src/entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAllCoffees() {
    return this.coffees;
  }

  findOneCoffee(id: String) {
    return this.coffees.find((item) => item.id === id);
  }

  createCoffee(body: any) {
    const coffee: Coffee = {
      id: body.id,
      name: body.name,
      brand: body.brand,
      flavors: body.flavors,
    };
    this.coffees.push(coffee);
    return "Coffee Created!";
  }

  updateCoffee(id: String, body: any) {
    if (this.findOneCoffee(id)) {
      return 'Coffee Updated';
    }
  }

  deleteCoffee(id: String) {
    const coffeIndex = this.coffees.findIndex((item) => item.id === id);
    if (coffeIndex >= 0) {
      this.coffees.splice(coffeIndex, 1);
      return 'Coffee Deleted!';
    }
    return 'Coffee Not Found!!';
  }
}

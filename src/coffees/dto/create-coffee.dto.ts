import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: String;
  @IsString()
  readonly brand: String;
  @IsString({ each: true })
  readonly flavors: String[];
}

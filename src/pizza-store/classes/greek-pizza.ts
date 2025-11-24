import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class GreekPizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.GREEK;
  }
}

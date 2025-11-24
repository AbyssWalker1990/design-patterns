import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class CheesePizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.CHEESE;
  }
}

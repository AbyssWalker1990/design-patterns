import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class PepperoniPizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.PEPPERONI;
  }
}

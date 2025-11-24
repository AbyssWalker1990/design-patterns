import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.NY_STYLE_PEPPERONI;
  }
}

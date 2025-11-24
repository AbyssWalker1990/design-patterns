import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.CHICAGO_STYLE_PEPPERONI;
  }
}

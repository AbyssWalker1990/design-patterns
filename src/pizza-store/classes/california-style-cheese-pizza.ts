import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class CaliforniaStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.CALIFORNIA_STYLE_CHEESE;
  }
}

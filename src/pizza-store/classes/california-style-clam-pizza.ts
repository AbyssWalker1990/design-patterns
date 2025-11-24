import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";

export class CaliforniaStyleClamPizza extends Pizza {
  constructor() {
    super();
    this.description = PizzaTypesEnum.CALIFORNIA_STYLE_CLAM;
  }
}

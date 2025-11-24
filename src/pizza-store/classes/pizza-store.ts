import { PizzaTypesEnum } from "../enums/pizza-types.enum";
import { Pizza } from "./pizza";
import { SimplePizzaFactory } from "./simple-pizza.factory";

export class PizzaStore {
  constructor(
    private readonly pizzaFactory: SimplePizzaFactory = new SimplePizzaFactory()
  ) {}

  public orderPizza(type: PizzaTypesEnum): Pizza {
    const pizza = this.pizzaFactory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

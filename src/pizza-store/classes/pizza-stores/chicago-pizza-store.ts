import { PizzaTypesEnum } from "../../enums/pizza-types.enum";
import { ChicagoPizzaIngredientFactory } from "../factories/chicago-pizza-ingredient.factory";
import { CheesePizza } from "../pizzas/cheese-pizza";
import { ClamPizza } from "../pizzas/clam-pizza";
import { PepperoniPizza } from "../pizzas/pepperoni-pizza";
import { Pizza } from "../pizzas/pizza";
import { VeggiePizza } from "../pizzas/veggie-pizza";
import { PizzaStore } from "./pizza-store";

export class ChicagoPizzaStore extends PizzaStore {
  private pizzaIngredientFactory = new ChicagoPizzaIngredientFactory();

  public createPizza(type: PizzaTypesEnum): Pizza {
    switch (type) {
      case PizzaTypesEnum.CHEESE:
        this.pizza = new CheesePizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("Chicago Style Cheese Pizza");
        break;
      case PizzaTypesEnum.CLAM:
        this.pizza = new ClamPizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("Chicago Style Clam Pizza");
        break;
      case PizzaTypesEnum.PEPPERONI:
        this.pizza = new PepperoniPizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("Chicago Style Pepperoni Pizza");
        break;
      case PizzaTypesEnum.VEGGIE:
        this.pizza = new VeggiePizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("Chicago Style Veggie Pizza");
        break;
      default:
        throw new Error("Unknown Pizza");
    }

    return this.pizza;
  }
}

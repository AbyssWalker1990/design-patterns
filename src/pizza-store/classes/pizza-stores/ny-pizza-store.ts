import { PizzaTypesEnum } from "../../enums/pizza-types.enum";
import { CheesePizza } from "../pizzas/cheese-pizza";
import { ClamPizza } from "../pizzas/clam-pizza";
import { NYPizzaIngredientFactory } from "../factories/ny-pizza-ingredient.factory";
import { Pizza } from "../pizzas/pizza";
import { PizzaStore } from "./pizza-store";
import { PepperoniPizza } from "../pizzas/pepperoni-pizza";
import { VeggiePizza } from "../pizzas/veggie-pizza";

export class NYPizzaStore extends PizzaStore {
  private pizzaIngredientFactory = new NYPizzaIngredientFactory();

  public createPizza(type: PizzaTypesEnum): Pizza {
    switch (type) {
      case PizzaTypesEnum.CHEESE:
        this.pizza = new CheesePizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("NY Style Cheese Pizza");
        break;
      case PizzaTypesEnum.CLAM:
        this.pizza = new ClamPizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("NY Style Clam Pizza");
        break;
      case PizzaTypesEnum.PEPPERONI:
        this.pizza = new PepperoniPizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("NY Style Pepperoni Pizza");
        break;
      case PizzaTypesEnum.VEGGIE:
        this.pizza = new VeggiePizza(this.pizzaIngredientFactory);
        this.pizza.setDescription("NY Style Veggie Pizza");
        break;
      default:
        throw new Error("Unknown Pizza");
    }

    return this.pizza;
  }
}

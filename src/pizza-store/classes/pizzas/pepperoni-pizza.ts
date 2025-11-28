import { PizzaTypesEnum } from "../../enums/pizza-types.enum";
import { PizzaIngredientFactoryInterface } from "../../interfaces/pizza-ingredient.factory.interface";
import { Pizza } from "./pizza";

export class PepperoniPizza extends Pizza {
  constructor(
    private readonly ingredientFactory: PizzaIngredientFactoryInterface
  ) {
    super();
    this.description = PizzaTypesEnum.CHEESE;
  }

  prepare(): void {
    console.log("Start Preparing: " + this.description);
    this.cheese = this.ingredientFactory.createCheese();
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.pepperoni = this.ingredientFactory.createPepperoni();
  }
}

import { Cheese } from "../../interfaces/cheese.interface";
import { Clam } from "../../interfaces/clam.interface";
import { Pepperoni } from "../../interfaces/pepperoni.interface";
import { PizzaIngredientFactoryInterface } from "../../interfaces/pizza-ingredient.factory.interface";
import { Sauce } from "../../interfaces/sauce.interface";
import { Veggie } from "../../interfaces/veggie.interface";
import { BlackOlives } from "../ingredients/black-olives";
import { Dough } from "../ingredients/dough";
import { Eggplant } from "../ingredients/eggplant";
import { FrozenClams } from "../ingredients/frozen-clams";
import { MozzarellaCheese } from "../ingredients/mozzarella-cheese";
import { PlumTomatoSauce } from "../ingredients/plum-tomato-sauce";
import { SlicedPepperoni } from "../ingredients/sliced-pepperoni";
import { Spinach } from "../ingredients/spinach";
import { ThickCrustDough } from "../ingredients/thick-crust-dough";

export class ChicagoPizzaIngredientFactory
  implements PizzaIngredientFactoryInterface
{
  createDough(): Dough {
    return new ThickCrustDough();
  }

  createSauce(): Sauce {
    return new PlumTomatoSauce();
  }

  createCheese(): Cheese {
    return new MozzarellaCheese();
  }

  createVeggies(): Veggie[] {
    return [new BlackOlives(), new Spinach(), new Eggplant()];
  }

  createClam(): Clam {
    return new FrozenClams();
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
}

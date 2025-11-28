import { Cheese } from "../../interfaces/cheese.interface";
import { Clam } from "../../interfaces/clam.interface";
import { Dough } from "../../interfaces/dough.interface";
import { Pepperoni } from "../../interfaces/pepperoni.interface";
import { PizzaIngredientFactoryInterface } from "../../interfaces/pizza-ingredient.factory.interface";
import { Sauce } from "../../interfaces/sauce.interface";
import { Veggie } from "../../interfaces/veggie.interface";
import { FreshClams } from "../ingredients/fresh-clams";
import { Garlic } from "../ingredients/garlic";
import { MarinaraSauce } from "../ingredients/marinara-sauce";
import { Mushroom } from "../ingredients/mushroom";
import { Onion } from "../ingredients/onion";
import { RedPepper } from "../ingredients/red-pepper";
import { ReggianoCheese } from "../ingredients/reggiano-cheese";
import { SlicedPepperoni } from "../ingredients/sliced-pepperoni";
import { ThinCrustDough } from "../ingredients/thin-crust-dough";

export class NYPizzaIngredientFactory
  implements PizzaIngredientFactoryInterface
{
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggie[] {
    return [new Garlic(), new Onion(), new Mushroom(), new RedPepper()];
  }

  createClam(): Clam {
    return new FreshClams();
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }
}

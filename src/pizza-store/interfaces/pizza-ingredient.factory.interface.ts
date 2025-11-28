import { Cheese } from "./cheese.interface";
import { Clam } from "./clam.interface";
import { Dough } from "./dough.interface";
import { Pepperoni } from "./pepperoni.interface";
import { Sauce } from "./sauce.interface";
import { Veggie } from "./veggie.interface";

export interface PizzaIngredientFactoryInterface {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggie[];
  createPepperoni(): Pepperoni;
  createClam(): Clam;
}

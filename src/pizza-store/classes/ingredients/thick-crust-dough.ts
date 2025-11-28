import { Dough } from "./dough";
import { Ingredient } from "./ingredient";

export class ThickCrustDough extends Ingredient implements Dough {
  constructor() {
    super("Thick Crust Dough");
  }
}

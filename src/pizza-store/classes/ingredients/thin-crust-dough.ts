import { Dough } from "./dough";
import { Ingredient } from "./ingredient";

export class ThinCrustDough extends Ingredient implements Dough {
  constructor() {
    super("Thin Crust Dough");
  }
}

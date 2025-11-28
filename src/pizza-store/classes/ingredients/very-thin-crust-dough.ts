import { Dough } from "./dough";
import { Ingredient } from "./ingredient";

export class VeryThinCrustDough extends Ingredient implements Dough {
  constructor() {
    super("Very Thin Crust Dough");
  }
}

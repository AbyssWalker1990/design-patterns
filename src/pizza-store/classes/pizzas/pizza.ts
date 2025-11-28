import { Cheese } from "../../interfaces/cheese.interface";
import { Clam } from "../../interfaces/clam.interface";
import { Dough } from "../../interfaces/dough.interface";
import { Pepperoni } from "../../interfaces/pepperoni.interface";
import { Sauce } from "../../interfaces/sauce.interface";
import { Veggie } from "../../interfaces/veggie.interface";

export abstract class Pizza {
  protected description: string = "Unknown Pizza";
  protected dough?: Dough | null = null;
  protected clam?: Clam | null = null;
  protected sauce?: Sauce | null = null;
  protected pepperoni?: Pepperoni | null = null;
  protected veggies?: Veggie[] | [];
  protected cheese?: Cheese | null;

  abstract prepare(): void;

  public bake(): void {
    console.log("Baking");
  }

  public cut(): void {
    console.log("Cutting");
  }

  public box(): void {
    console.log("Box");
  }

  public getDescription() {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }
}

import { CaffeineBeverage } from "./caffeine-beverage";
import { getUserInput } from "../helpers/get-user-input.helper";

export class Coffee extends CaffeineBeverage {
  protected brew(): void {
    console.log("Dripping Coffee through Filter");
  }

  protected addCondiment(): void {
    console.log("Adding Sugar and Milk");
  }

  protected async customerWantsCondiments(): Promise<boolean> {
    const answer = await getUserInput("Would you like condiments (y/n)?");

    return answer === "y" || answer === "yes";
  }
}

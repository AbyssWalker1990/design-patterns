import { getUserInput } from "../helpers/get-user-input.helper";
import { CaffeineBeverage } from "./caffeine-beverage";

export class Tea extends CaffeineBeverage {
  protected brew(): void {
    console.log("Steeping the Tea");
  }

  protected addCondiment(): void {
    console.log("Adding Lemon");
  }

  protected async customerWantsCondiments(): Promise<boolean> {
    const answer = await getUserInput("Would you like condiments (y/n)?");

    return answer === "y" || answer === "yes";
  }
}

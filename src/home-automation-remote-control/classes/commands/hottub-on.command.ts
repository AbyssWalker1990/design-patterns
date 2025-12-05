import { CommandInterface } from "../../interfaces/command.interface";
import { HottubInterface } from "../../interfaces/hottub.interface";

export class HottubOnCommand implements CommandInterface {
  constructor(private readonly hottub: HottubInterface) {}

  public execute(): void {
    this.hottub.on();
  }

  public undo(): void {
    this.hottub.off();
  }
}

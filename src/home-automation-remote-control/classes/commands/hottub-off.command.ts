import { CommandInterface } from "../../interfaces/command.interface";
import { HottubInterface } from "../../interfaces/hottub.interface";

export class HottubOffCommand implements CommandInterface {
  constructor(private readonly hottub: HottubInterface) {}

  public execute(): void {
    this.hottub.off();
  }

  public undo(): void {
    this.hottub.on();
  }
}

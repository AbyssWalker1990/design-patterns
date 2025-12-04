import { CommandInterface } from "../../interfaces/command.interface";
import { LightInterface } from "../../interfaces/light.interface";

export class LightOnCommand implements CommandInterface {
  constructor(private readonly light: LightInterface) {}

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

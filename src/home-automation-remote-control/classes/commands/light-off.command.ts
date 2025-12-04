import { CommandInterface } from "../../interfaces/command.interface";
import { LightInterface } from "../../interfaces/light.interface";

export class LightOffCommand implements CommandInterface {
  constructor(private readonly light: LightInterface) {}

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}

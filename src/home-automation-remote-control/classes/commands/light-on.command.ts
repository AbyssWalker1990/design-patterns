import { CommandInterface } from "../../interfaces/command.interface";
import { LightInterface } from "../../interfaces/light.interface";

export class LightOnCommand implements CommandInterface {
  constructor(private readonly light: LightInterface) {}

  public execute() {
    this.light.on();
  }
}

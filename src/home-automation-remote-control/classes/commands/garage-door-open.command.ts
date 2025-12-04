import { CommandInterface } from "../../interfaces/command.interface";
import { GarageDoorInterface } from "../../interfaces/garage-door.interface";
import { LightInterface } from "../../interfaces/light.interface";

export class GarageDoorOpenCommand implements CommandInterface {
  constructor(private readonly garageDoor: GarageDoorInterface) {}

  public execute(): void {
    this.garageDoor.up();
    this.garageDoor.lightOn();
  }

  public undo(): void {
    this.garageDoor.down();
    this.garageDoor.lightOff();
  }
}

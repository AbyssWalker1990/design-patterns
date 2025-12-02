import { CommandInterface } from "../../interfaces/command.interface";
import { GarageDoorInterface } from "../../interfaces/garage-door.interface";
import { LightInterface } from "../../interfaces/light.interface";

export class GarageDoorCommand implements CommandInterface {
  constructor(private readonly garageDoor: GarageDoorInterface) {}

  public execute() {
    this.garageDoor.up();
    this.garageDoor.lightOn();
  }
}

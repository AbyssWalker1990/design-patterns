import { CommandInterface } from "../../interfaces/command.interface";
import { GarageDoorInterface } from "../../interfaces/garage-door.interface";

export class GarageDoorCloseCommand implements CommandInterface {
  constructor(private readonly garageDoor: GarageDoorInterface) {}

  public execute(): void {
    this.garageDoor.down();
    this.garageDoor.lightOff();
  }
}

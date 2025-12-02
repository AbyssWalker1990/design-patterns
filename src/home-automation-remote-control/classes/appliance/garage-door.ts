import { GarageDoorInterface } from "../../interfaces/garage-door.interface";

export class GarageDoor implements GarageDoorInterface {
  public up() {
    console.log("Garage Door is OPEN");
  }

  public down() {
    console.log("Garage Door is CLOSED");
  }

  public stop() {
    console.log("Garage Door Stop");
  }

  public lightOn() {
    console.log("Garage Lights ON");
  }

  public lightOff() {
    console.log("Garage Lights OFF");
  }
}

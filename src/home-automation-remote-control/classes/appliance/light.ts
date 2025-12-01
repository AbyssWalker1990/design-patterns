import { LightInterface } from "../../interfaces/light.interface";

export class Light implements LightInterface {
  public on() {
    console.log("Lights ON");
  }

  public off() {
    console.log("Lights OFF");
  }
}

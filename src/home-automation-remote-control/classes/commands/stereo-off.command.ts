import { CommandInterface } from "../../interfaces/command.interface";
import { StereoInterface } from "../../interfaces/stereo.interface";

export class StereoOffCommand implements CommandInterface {
  constructor(private readonly stereo: StereoInterface) {}

  public execute() {
    this.stereo.off();
  }
}

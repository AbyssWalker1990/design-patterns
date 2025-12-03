import { CommandInterface } from "../../interfaces/command.interface";
import { StereoInterface } from "../../interfaces/stereo.interface";

export class StereoOnWithCdCommand implements CommandInterface {
  constructor(private readonly stereo: StereoInterface) {}

  public execute() {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }
}

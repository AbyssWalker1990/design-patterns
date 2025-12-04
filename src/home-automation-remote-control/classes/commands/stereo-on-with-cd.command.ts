import { CommandInterface } from "../../interfaces/command.interface";
import { StereoInterface } from "../../interfaces/stereo.interface";

export class StereoOnWithCdCommand implements CommandInterface {
  constructor(private readonly stereo: StereoInterface) {}

  public execute(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }

  public undo(): void {
    this.stereo.off();
  }
}

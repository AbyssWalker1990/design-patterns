import { CommandInterface } from "../../interfaces/command.interface";
import { StereoInterface } from "../../interfaces/stereo.interface";

export class StereoOffCommand implements CommandInterface {
  constructor(private readonly stereo: StereoInterface) {}

  public execute(): void {
    this.stereo.off();
  }

  public undo(): void {
    this.stereo.on();
    this.stereo.setCd();
    this.stereo.setVolume(11);
  }
}

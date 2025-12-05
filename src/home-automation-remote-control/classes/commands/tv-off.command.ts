import { CommandInterface } from "../../interfaces/command.interface";
import { TvInterface } from "../../interfaces/tv.interface";

export class TvOffCommand implements CommandInterface {
  constructor(private readonly tv: TvInterface) {}

  public execute(): void {
    this.tv.off();
  }

  public undo(): void {
    this.tv.on();
  }
}

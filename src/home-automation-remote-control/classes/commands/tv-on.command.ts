import { CommandInterface } from "../../interfaces/command.interface";
import { TvInterface } from "../../interfaces/tv.interface";

export class TvOnCommand implements CommandInterface {
  constructor(private readonly tv: TvInterface) {}

  public execute(): void {
    this.tv.on();
  }

  public undo(): void {
    this.tv.off();
  }
}

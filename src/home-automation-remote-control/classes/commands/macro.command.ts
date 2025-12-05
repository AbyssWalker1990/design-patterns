import { CommandInterface } from "../../interfaces/command.interface";

export class MacroCommand implements CommandInterface {
  constructor(private readonly commands: CommandInterface[]) {}

  public execute(): void {
    this.commands.forEach((command) => command.execute());
  }

  public undo(): void {
    this.commands.forEach((command) => command.undo());
  }
}

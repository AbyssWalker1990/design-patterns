import { CommandInterface } from "../interfaces/command.interface";
import { NoCommandCommand } from "./commands/no-command.command";

export class RemoteControl {
  private onCommands: Array<CommandInterface> = new Array<CommandInterface>(
    7
  ).fill(new NoCommandCommand());
  private offCommands: Array<CommandInterface> = new Array<CommandInterface>(
    7
  ).fill(new NoCommandCommand());
  private undoCommand: CommandInterface = new NoCommandCommand();

  constructor() {}

  public setCommand(
    slot: number,
    onCommand: CommandInterface,
    offCommand: CommandInterface
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number): void {
    const command = this.onCommands[slot];

    if (command !== null && command !== undefined) {
      command.execute();
      this.undoCommand = this.offCommands[slot] || new NoCommandCommand();
    }
  }

  public offButtonWasPushed(slot: number): void {
    const command = this.offCommands[slot];
    if (command !== null && command !== undefined) {
      command.execute();
      this.undoCommand = this.onCommands[slot] || new NoCommandCommand();
    }
  }

  public undoButtonWasPushed(): void {
    this.undoCommand.execute();
  }

  toString(): string {
    let stringBuff = "\n------ Remote Control -------\n";

    for (let i = 0; i < this.onCommands.length; i++) {
      const onCommand = this.onCommands[i];
      const offCommand = this.offCommands[i];
      stringBuff += `[slot ${i}] ${
        onCommand ? onCommand.constructor.name : "No Command"
      }    ${offCommand ? offCommand.constructor.name : "No Command"}\n`;
    }

    stringBuff += `[undo] ${this.undoCommand.constructor.name}\n`;

    return stringBuff;
  }
}

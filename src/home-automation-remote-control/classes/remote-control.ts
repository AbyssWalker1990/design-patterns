import { CommandInterface } from "../interfaces/command.interface";
import { NoCommandCommand } from "./commands/no-command.command";

export class RemoteControl {
  private onCommands: Array<CommandInterface> = new Array<CommandInterface>(
    7
  ).fill(new NoCommandCommand());
  private offCommands: Array<CommandInterface> = new Array<CommandInterface>(
    7
  ).fill(new NoCommandCommand());

  constructor() {}

  public setCommand(
    slot: number,
    onCommand: CommandInterface,
    offCommand: CommandInterface
  ): void {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  public onButtonWasPushed(slot: number) {
    const command = this.onCommands[slot];
    if (command !== null && command !== undefined) {
      command.execute();
    }
  }

  public offButtonWasPushed(slot: number) {
    const command = this.offCommands[slot];
    if (command !== null && command !== undefined) {
      command.execute();
    }
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

    return stringBuff;
  }
}

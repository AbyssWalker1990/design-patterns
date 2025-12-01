import { CommandInterface } from "../interfaces/command.interface";

export class SimpleRemoteControl {
  private slot: CommandInterface | null = null;

  constructor() {}

  public setCommand(command: CommandInterface): void {
    this.slot = command;
  }

  public buttonWasPressed() {
    if (this.slot !== null) {
      this.slot.execute();
    }
  }
}

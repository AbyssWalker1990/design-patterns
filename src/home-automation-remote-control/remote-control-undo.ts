import { CeilingFan } from "./classes/appliance/ceiling-fan";
import { CeilingFanHighCommand } from "./classes/commands/ceiling-fan-high.command";
import { CeilingFanMediumCommand } from "./classes/commands/ceiling-fan-medium.command";
import { CeilingFanOffCommand } from "./classes/commands/ceiling-fan-off.command";
import { RemoteControl } from "./classes/remote-control";

const remoteControlWithUndo = new RemoteControl();

const ceilingFan = new CeilingFan("Kitchen Fan");

const ceilingFanHighCommand = new CeilingFanHighCommand(ceilingFan);
const ceilingFanMediumCommand = new CeilingFanMediumCommand(ceilingFan);
const ceilingFanOffCommand = new CeilingFanOffCommand(ceilingFan);

remoteControlWithUndo.setCommand(
  0,
  ceilingFanHighCommand,
  ceilingFanOffCommand
);

remoteControlWithUndo.setCommand(
  1,
  ceilingFanMediumCommand,
  ceilingFanOffCommand
);

remoteControlWithUndo.onButtonWasPushed(0);
remoteControlWithUndo.offButtonWasPushed(0);
console.log(remoteControlWithUndo.toString());
remoteControlWithUndo.undoButtonWasPushed();

remoteControlWithUndo.onButtonWasPushed(1);
console.log(remoteControlWithUndo.toString());
remoteControlWithUndo.undoButtonWasPushed();

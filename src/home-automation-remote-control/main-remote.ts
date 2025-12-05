import { GarageDoor } from "./classes/appliance/garage-door";
import { Hottub } from "./classes/appliance/hottub";
import { Light } from "./classes/appliance/light";
import { Stereo } from "./classes/appliance/stereo";
import { Tv } from "./classes/appliance/tv";
import { GarageDoorCloseCommand } from "./classes/commands/garage-door-close.command";
import { GarageDoorOpenCommand } from "./classes/commands/garage-door-open.command";
import { HottubOffCommand } from "./classes/commands/hottub-off.command";
import { HottubOnCommand } from "./classes/commands/hottub-on.command";
import { LightOffCommand } from "./classes/commands/light-off.command";
import { LightOnCommand } from "./classes/commands/light-on.command";
import { MacroCommand } from "./classes/commands/macro.command";
import { StereoOffCommand } from "./classes/commands/stereo-off.command";
import { StereoOnWithCdCommand } from "./classes/commands/stereo-on-with-cd.command";
import { TvOffCommand } from "./classes/commands/tv-off.command";
import { TvOnCommand } from "./classes/commands/tv-on.command";
import { RemoteControl } from "./classes/remote-control";

const remoteControl = new RemoteControl();

const livingRoomLight = new Light("Living Room Light");
const kitchenLight = new Light("Kitchen Light");
const garageDoor = new GarageDoor("Main Garage");
const stereo = new Stereo("Living Room Stereo");
const hottub = new Hottub();
const tv = new Tv();

const turnOnLivingRoomLight = new LightOnCommand(livingRoomLight);
const turnOffLivingRoomLight = new LightOffCommand(livingRoomLight);
const turnOnKitchenLight = new LightOnCommand(kitchenLight);
const turnOffKitchenLight = new LightOffCommand(kitchenLight);
const openGarageDoor = new GarageDoorOpenCommand(garageDoor);
const closeGarageDoor = new GarageDoorCloseCommand(garageDoor);
const turnOnStereo = new StereoOnWithCdCommand(stereo);
const turnOffStereo = new StereoOffCommand(stereo);
const turnOnHottub = new HottubOnCommand(hottub);
const turnOffHottub = new HottubOffCommand(hottub);
const turnOnTv = new TvOnCommand(tv);
const turnOffTv = new TvOffCommand(tv);

const partyOn = [turnOnHottub, turnOnStereo, turnOnTv];
const partyOff = [turnOffHottub, turnOffStereo, turnOffTv];
const partyOnMacro = new MacroCommand(partyOn);
const partyOffMacro = new MacroCommand(partyOff);

remoteControl.setCommand(0, turnOnLivingRoomLight, turnOffLivingRoomLight);
remoteControl.setCommand(1, turnOnKitchenLight, turnOffKitchenLight);
remoteControl.setCommand(2, openGarageDoor, closeGarageDoor);
remoteControl.setCommand(3, turnOnStereo, turnOffStereo);
remoteControl.setCommand(4, partyOnMacro, partyOffMacro);

console.log(remoteControl);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
console.log("Remote Control before first undo:");
console.log(remoteControl);
remoteControl.undoButtonWasPushed();
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
console.log("Remote Control before second undo:");
console.log(remoteControl);
remoteControl.undoButtonWasPushed();

console.log("MACRO COMMAND HERE");
remoteControl.onButtonWasPushed(4);
remoteControl.offButtonWasPushed(4);

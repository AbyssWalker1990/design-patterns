import { GarageDoor } from "./classes/appliance/garage-door";
import { Light } from "./classes/appliance/light";
import { Stereo } from "./classes/appliance/stereo";
import { GarageDoorCloseCommand } from "./classes/commands/garage-door-close.command";
import { GarageDoorOpenCommand } from "./classes/commands/garage-door-open.command";
import { LightOffCommand } from "./classes/commands/light-off.command";
import { LightOnCommand } from "./classes/commands/light-on.command";
import { StereoOffCommand } from "./classes/commands/stereo-off.command";
import { StereoOnWithCdCommand } from "./classes/commands/stereo-on-with-cd.command";
import { RemoteControl } from "./classes/remote-control";

const remoteControl = new RemoteControl();

const livingRoomLight = new Light("Living Room Light");
const kitchenLight = new Light("Kitchen Light");
const garageDoor = new GarageDoor("Main Garage");
const stereo = new Stereo("Living Room Stereo");

const turnOnLivingRoomLight = new LightOnCommand(livingRoomLight);
const turnOffLivingRoomLight = new LightOffCommand(livingRoomLight);
const turnOnKitchenLight = new LightOnCommand(kitchenLight);
const turnOffKitchenLight = new LightOffCommand(kitchenLight);
const openGarageDoor = new GarageDoorOpenCommand(garageDoor);
const closeGarageDoor = new GarageDoorCloseCommand(garageDoor);
const turnOnStereo = new StereoOnWithCdCommand(stereo);
const turnOffStereo = new StereoOffCommand(stereo);

remoteControl.setCommand(0, turnOnLivingRoomLight, turnOffLivingRoomLight);
remoteControl.setCommand(1, turnOnKitchenLight, turnOffKitchenLight);
remoteControl.setCommand(2, openGarageDoor, closeGarageDoor);
remoteControl.setCommand(3, turnOnStereo, turnOffStereo);

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

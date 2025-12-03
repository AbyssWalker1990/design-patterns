import { CeilingFan } from "./classes/appliance/ceiling-fan";
import { GarageDoor } from "./classes/appliance/garage-door";
import { Light } from "./classes/appliance/light";
import { Stereo } from "./classes/appliance/stereo";
import { CeilingFanOnCommand } from "./classes/commands/ceiling-fan-on.command";
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
const ceilingFan = new CeilingFan("Bedroom Fan");
const garageDoor = new GarageDoor("Main Garage");
const stereo = new Stereo("Living Room Stereo");

const turnOnLivingRoomLight = new LightOnCommand(livingRoomLight);
const turnOffLivingRoomLight = new LightOffCommand(livingRoomLight);
const turnOnKitchenLight = new LightOnCommand(kitchenLight);
const turnOffKitchenLight = new LightOffCommand(kitchenLight);
const turnOnCeilingFan = new CeilingFanOnCommand(ceilingFan);
const turnOffCeilingFan = new LightOffCommand(ceilingFan);
const openGarageDoor = new GarageDoorOpenCommand(garageDoor);
const closeGarageDoor = new GarageDoorCloseCommand(garageDoor);
const turnOnStereo = new StereoOnWithCdCommand(stereo);
const turnOffStereo = new StereoOffCommand(stereo);

remoteControl.setCommand(0, turnOnLivingRoomLight, turnOffLivingRoomLight);
remoteControl.setCommand(1, turnOnKitchenLight, turnOffKitchenLight);
remoteControl.setCommand(2, turnOnCeilingFan, turnOffCeilingFan);
remoteControl.setCommand(3, openGarageDoor, closeGarageDoor);
remoteControl.setCommand(4, turnOnStereo, turnOffStereo);

console.log(remoteControl);

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
remoteControl.onButtonWasPushed(4);
remoteControl.offButtonWasPushed(4);

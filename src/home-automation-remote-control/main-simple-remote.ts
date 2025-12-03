import { GarageDoor } from "./classes/appliance/garage-door";
import { Light } from "./classes/appliance/light";
import { GarageDoorOpenCommand } from "./classes/commands/garage-door-open.command";
import { LightOnCommand } from "./classes/commands/light-on.command";
import { SimpleRemoteControl } from "./classes/simple-remote-control";

const simpleRemoteControl = new SimpleRemoteControl();

const light = new Light("Kitchen Light");
const lightOn = new LightOnCommand(light);

simpleRemoteControl.setCommand(lightOn);
simpleRemoteControl.buttonWasPressed();

const garageDoor = new GarageDoor("Main Garage");
const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);

simpleRemoteControl.setCommand(garageDoorOpen);
simpleRemoteControl.buttonWasPressed();

import { Light } from "./classes/appliance/light";
import { LightOnCommand } from "./classes/commands/light-on.command";
import { SimpleRemoteControl } from "./classes/simple-remote-control";

const simpleRemoteControl = new SimpleRemoteControl();
const light = new Light();
const lightOn = new LightOnCommand(light);

simpleRemoteControl.setCommand(lightOn);
simpleRemoteControl.buttonWasPressed();

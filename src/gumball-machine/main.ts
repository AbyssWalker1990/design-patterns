import { GumballMachine } from "./classes/gumball-machine";

const gumballMachine = new GumballMachine(5);

console.log(gumballMachine.toString());

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.toString());

gumballMachine.dispense();

console.log(gumballMachine.toString());

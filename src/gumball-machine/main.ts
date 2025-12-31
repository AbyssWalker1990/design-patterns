import { GumballMachine } from "./classes/gumball-machine";
import { GumballMonitor } from "./classes/gumball-monitor";

const args = process.argv.slice(2);
const [location, countStr] = args;
const count = Number.parseInt(countStr ?? "", 10);

if (!location || Number.isNaN(count) || count < 0) {
  console.error("Usage: node main.js <location> <count>");
  process.exit(1);
}

const gumballMachine = new GumballMachine(location, count);
const gumballMachineMonitor = new GumballMonitor(gumballMachine);

console.log(gumballMachine.toString());

gumballMachine.insertQuarter();
gumballMachine.turnCrank();

console.log(gumballMachine.toString());

gumballMachine.dispense();

console.log(gumballMachine.toString());

gumballMachine.refill(100);

console.log(gumballMachine.toString());

gumballMachineMonitor.monitor();

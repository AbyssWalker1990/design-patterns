import { DinerMenu } from "./classes/diner-menu";
import { PancakeHouseMenu } from "./classes/pancake-house-menu";
import { Waitress } from "./classes/waitress";

const dinerMenu = new DinerMenu();
const pancakeMenu = new PancakeHouseMenu();

const waitress = new Waitress(dinerMenu, pancakeMenu);

waitress.printMenu();

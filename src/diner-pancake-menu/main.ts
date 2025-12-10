import { CafeMenu } from "./classes/cafe-menu";
import { DinerMenu } from "./classes/diner-menu";
import { PancakeHouseMenu } from "./classes/pancake-house-menu";
import { Waitress } from "./classes/waitress";

const dinerMenu = new DinerMenu();
const pancakeMenu = new PancakeHouseMenu();
const cafeMenu = new CafeMenu();

const waitress = new Waitress(dinerMenu, pancakeMenu, cafeMenu);

waitress.printMenu();

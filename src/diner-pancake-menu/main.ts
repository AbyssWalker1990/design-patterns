import { Menu } from "./classes/menu";
import { Waitress } from "./classes/waitress";

const menu = new Menu();

const waitress = new Waitress(menu.createIterator());

waitress.printMenu();

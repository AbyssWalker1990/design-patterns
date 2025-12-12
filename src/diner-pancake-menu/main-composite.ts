import { CafeMenuComposite } from "./classes/cafe-menu-composite";
import { DessertMenuComposite } from "./classes/dessert-menu-composite";
import { DinerMenuComposite } from "./classes/diner-menu-composite";
import { MenuComposite } from "./classes/menu-composite";
import { PancakeHouseMenuComposite } from "./classes/pancake-house-menu-composite";
import { WaitressComposite } from "./classes/waitress-composite";

const dinerMenuComposite = new DinerMenuComposite();
const cafeMenuComposite = new CafeMenuComposite();
const pancakeHouseMenuComposite = new PancakeHouseMenuComposite();
const dessertMenuComposite = new DessertMenuComposite();

const allMenus = new MenuComposite("ALL MENUS", "All menus combined");

allMenus.add(dinerMenuComposite);
allMenus.add(cafeMenuComposite);
allMenus.add(pancakeHouseMenuComposite);
dinerMenuComposite.add(dessertMenuComposite);

const waitressComposite = new WaitressComposite(allMenus);

waitressComposite.printMenu();

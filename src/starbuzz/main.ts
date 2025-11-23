import { Beverage } from "./classes/beverage";
import { DarkRoast } from "./classes/dark-roast";
import { Espresso } from "./classes/espresso";
import { HouseBlend } from "./classes/house-blend";
import { Mocha } from "./classes/mocha.decorator";
import { Soy } from "./classes/soy";
import { Whip } from "./classes/whip";
import { BeverageSizesEnum } from "./enums/beverage-sizes.enum";

const beverage1: Beverage = new Espresso();
beverage1.setSize(BeverageSizesEnum.LG);
console.log(`${beverage1.getDescription()} $${beverage1.cost()}`);

let beverage2: Beverage = new DarkRoast();
beverage2.setSize(BeverageSizesEnum.SM);
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

let beverage3: Beverage = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);

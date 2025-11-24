import { CaliforniaPizzaStore } from "./classes/california-pizza-store";
import { ChicagoPizzaStore } from "./classes/chicago-pizza-store";
import { NYPizzaStore } from "./classes/ny-pizza-store";
import { PizzaStore } from "./classes/pizza-store";
import { PizzaTypesEnum } from "./enums/pizza-types.enum";

const nyPizzaStore = new NYPizzaStore();
const nyPepperoniPizza = nyPizzaStore.orderPizza(
  PizzaTypesEnum.NY_STYLE_PEPPERONI
);

console.log("nyPepperoniPizza: ", nyPepperoniPizza);

const chicagoPizzaStore = new ChicagoPizzaStore();
const chicagoVeggiePizza = chicagoPizzaStore.orderPizza(
  PizzaTypesEnum.CHICAGO_STYLE_VEGGIE
);

console.log("chicagoVeggiePizza: ", chicagoVeggiePizza);

const californiaPizzaStore = new CaliforniaPizzaStore();
const californiaClamPizza = californiaPizzaStore.orderPizza(
  PizzaTypesEnum.CALIFORNIA_STYLE_CLAM
);

console.log("californiaClamPizza: ", californiaClamPizza);

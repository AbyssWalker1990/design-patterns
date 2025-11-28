import { ChicagoPizzaStore } from "./classes/pizza-stores/chicago-pizza-store";
import { NYPizzaStore } from "./classes/pizza-stores/ny-pizza-store";
import { PizzaTypesEnum } from "./enums/pizza-types.enum";

const nyPizzaStore = new NYPizzaStore();
const nyCheesePizza = nyPizzaStore.orderPizza(PizzaTypesEnum.CHEESE);

console.log("nyCheesePizza: ", nyCheesePizza);

const chicagoPizzaStore = new ChicagoPizzaStore();
const chicagoClamPizza = chicagoPizzaStore.orderPizza(PizzaTypesEnum.CLAM);

console.log("chicagoClamPizza: ", chicagoClamPizza);

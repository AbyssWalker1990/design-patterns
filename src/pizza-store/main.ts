import { PizzaStore } from "./classes/pizza-store";
import { PizzaTypesEnum } from "./enums/pizza-types.enum";

const pizzaStore = new PizzaStore();

const pepperoniPizza = pizzaStore.orderPizza(PizzaTypesEnum.PEPPERONI);
console.log("Pepperoni Pizza: ", pepperoniPizza);

const cheesePizza = pizzaStore.orderPizza(PizzaTypesEnum.CHEESE);
console.log("Cheese Pizza: ", cheesePizza);

const greekPizza = pizzaStore.orderPizza(PizzaTypesEnum.GREEK);
console.log("Greek Pizza: ", greekPizza);

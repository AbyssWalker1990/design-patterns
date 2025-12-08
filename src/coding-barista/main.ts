import { Coffee } from "./classes/coffee";
import { Tea } from "./classes/tea";

(async function main() {
  const tea = new Tea();
  const coffee = new Coffee();

  await tea.prepareRecipe();
  console.log("\n");
  await coffee.prepareRecipe();
})();

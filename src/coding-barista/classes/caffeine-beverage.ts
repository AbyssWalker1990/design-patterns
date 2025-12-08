export abstract class CaffeineBeverage {
  public async prepareRecipe(): Promise<void> {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (await this.customerWantsCondiments()) {
      this.addCondiment();
    }
  }

  protected boilWater(): void {
    console.log("Boiling the Water");
  }

  protected abstract brew(): void;

  protected pourInCup(): void {
    console.log("Pouring in the Cup");
  }

  protected abstract addCondiment(): void;

  /**
   * Asks the user whether they want condiments for the drink.
   * This method uses a synchronous (blocking) user prompt implemented
   * locally in this class via `getUserInput()` so that subclasses
   * won't be required to provide the logic and to keep the template
   * method synchronous.
   *
   * Subclasses CAN override this method if needed; for the pattern
   * example we keep the default implementation here.
   */
  protected async customerWantsCondiments(): Promise<boolean> {
    // Default: no interactive prompt in the base class. Subclasses may override
    // this method to prompt the user synchronously or asynchronously.
    return true;
  }

  /**
   * Local helper used only inside this class to read one line from stdin.
   * It's intentionally `private` so subclasses cannot use it directly.
   *
   * NOTE: this uses the `readline-sync` package for a synchronous prompt
   * so we can keep the template `prepareRecipe()` synchronous.
   */
  // Removed the synchronous helper — subclasses can provide async prompts
  // or rely on this default implementation that returns `true`.
}

export class ChocolateBoiler {
  private static instance: ChocolateBoiler;
  private isEmpty: boolean;
  private isBoiled: boolean;

  private constructor() {
    this.isEmpty = true;
    this.isBoiled = false;
  }

  public static getInstance(): ChocolateBoiler {
    if (!ChocolateBoiler.instance) {
      ChocolateBoiler.instance = new ChocolateBoiler();
    }

    return ChocolateBoiler.instance;
  }

  public fill(): void {
    if (this.isEmpty) {
      this.isEmpty = false;
      this.isBoiled = false;
      console.log("Filling the chocolate boiler.");
    } else {
      console.log("Chocolate boiler is already filled.");
    }
  }

  public boil(): void {
    if (!this.isEmpty && !this.isBoiled) {
      this.isBoiled = true;
      console.log("Boiling the chocolate.");
    } else if (this.isEmpty) {
      console.log("Cannot boil. The chocolate boiler is empty.");
    } else {
      console.log("Chocolate is already boiled.");
    }
  }

  public drain(): void {
    if (!this.isEmpty && this.isBoiled) {
      this.isEmpty = true;
      this.isBoiled = false;
      console.log("Draining the chocolate boiler.");
    } else if (this.isEmpty) {
      console.log("Cannot drain. The chocolate boiler is already empty.");
    } else {
      console.log("Cannot drain. The chocolate is not boiled yet.");
    }
  }

  public getStatus(): { isEmpty: boolean; isBoiled: boolean } {
    return {
      isEmpty: this.isEmpty,
      isBoiled: this.isBoiled,
    };
  }
}

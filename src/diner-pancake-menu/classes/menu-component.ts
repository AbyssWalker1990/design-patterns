import { UnsupportedOperationException } from "./exceptions/unsupported-operation.exception";

export abstract class MenuComponent {
  public add(menuComponent: MenuComponent): void {
    throw new UnsupportedOperationException();
  }

  public remove(menuComponent: MenuComponent): void {
    throw new UnsupportedOperationException();
  }

  public getChild(i: number): MenuComponent | null {
    throw new UnsupportedOperationException();
  }

  public getName(): string {
    throw new UnsupportedOperationException();
  }

  public getDescription(): string {
    throw new UnsupportedOperationException();
  }

  public getIsVegetarian(): boolean {
    throw new UnsupportedOperationException();
  }

  public getPrice(): number {
    throw new UnsupportedOperationException();
  }

  public print(): void {}
}

import { MenuComponent } from "./menu-component";

export class WaitressComposite {
  constructor(private readonly allMenus: MenuComponent) {}

  public printMenu(): void {
    this.allMenus.print();
  }
}

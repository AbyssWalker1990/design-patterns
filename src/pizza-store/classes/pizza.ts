export abstract class Pizza {
  protected description: string = "Unknown Pizza";

  public prepare(): void {
    console.log("Preparing");
  }

  public bake(): void {
    console.log("Baking");
  }

  public cut(): void {
    console.log("Cutting");
  }

  public box(): void {
    console.log("Box");
  }
}

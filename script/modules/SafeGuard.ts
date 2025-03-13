export class SafeGuard extends Error {
  constructor(message: string) {
    super(message);
  }
  public logError() {
    alert(this.message);
  }
}

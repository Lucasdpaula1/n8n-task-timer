export class SafeGuard extends Error {
    constructor(message) {
        super(message);
    }
    logError() {
        alert(this.message);
    }
}

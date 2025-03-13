import { SafeGuard } from "./safeGuard.js";
export function ModularizationError(e) {
    if (e instanceof SafeGuard) {
        e.logError();
        return;
    }
    console.log(e);
    alert("erro interno");
}

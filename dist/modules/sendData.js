import { convertionTime } from "./convertionTime.js";
import { ModularizationError } from "./modularizationError.js";
import { SafeGuard } from "./SafeGuard.js";
export function sendData(e) {
    try {
        const time = document.getElementById("time");
        const task = document.getElementById("task");
        const card = document.getElementById("card");
        if (!(task instanceof HTMLInputElement &&
            time instanceof HTMLInputElement &&
            card)) {
            throw new SafeGuard("tipo não compátivel");
        }
        convertionTime(time.value, task.value);
    }
    catch (error) {
        ModularizationError(error);
        return;
    }
}

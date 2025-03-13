import { convertionTime } from "./convertionTime.js";
import { ModularizationError } from "./modularizationError.js";
import { SafeGuard } from "./safeGuard.js";

export function sendData(e: MouseEvent) {
  try {
    const time = document.getElementById("time");
    const task = document.getElementById("task");
    if (
      !(task instanceof HTMLInputElement && time instanceof HTMLInputElement)
    ) {
      throw new SafeGuard("tipo não compátivel");
    }
    convertionTime(time.value, task.value);
  } catch (error) {
    ModularizationError(error);
    return;
  }
}

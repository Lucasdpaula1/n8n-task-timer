import { ModularizationError } from "./modularizationError.js";
import { timeStringToSeconds } from "./timeStringToSeconds.js";
export function convertionTime(time, task) {
    try {
        const regex = /[:]/gi;
        if (time.match(regex)) {
            const timeSplit = time.split(":");
            return timeStringToSeconds(timeSplit, task);
        }
        return timeStringToSeconds(time, task);
    }
    catch (error) {
        ModularizationError(error);
    }
}

import { ModularizationError } from "./modularizationError.js";
import { SafeGuard } from "./SafeGuard.js";

export function convertToSecond(time: string) {
  const checkOutWords = /\b[A-Z][a-z]+\b/;
  try {
    if (time.toLowerCase().includes("h")) {
      const hour = parseInt(time.replace(checkOutWords, ""), 10);
      return hour * 3600;
    } else if (time.toLowerCase().includes("m")) {
      const minute = parseInt(time.replace(checkOutWords, ""), 10);
      return minute * 60;
    } else if (time.toLowerCase().includes("s")) {
      const seconds = parseInt(time.replace(checkOutWords, ""), 10);
      console.log(seconds);
      return seconds;
    } else {
      throw new SafeGuard("adicione a unidade de tempo");
    }
  } catch (errr) {
    // ModularizationError(errr);
    throw errr;
  }
}
export function convertToSecondArray(time: string[]) {
  try {
    if (time.length === 2) {
      const minute = time[0];
      const seconds = time[1];
      return parseInt(minute, 10) * 60 + parseInt(seconds);
    } else if (time.length === 3) {
      const hour = time[0];
      const minute = time[1];
      const seconds = time[2];
      return parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(seconds);
    } else if (time.length === 1) {
      return parseInt(time[0]);
    } else {
      throw new SafeGuard("tipo não compátivel");
    }
  } catch (error) {
    throw error;
  }
}

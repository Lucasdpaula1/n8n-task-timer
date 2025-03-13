import { ModularizationError } from "./modularizationError.js";
import { convertToSecond, convertToSecondArray } from "./time.js";
import { n8nConnection } from "./n8nConnection.js";
import { generateCard } from "../utils/generateCard.utils.js";

export function timeStringToSeconds(time: string[], task: string) {
  try {
    const card = document.getElementById("card") as HTMLElement;
    const newTimeSecond = convertToSecondArray(time);

    setTimeout(async () => {
      n8nConnection({ task });
    }, 1000 * newTimeSecond);

    generateCard(card, task, newTimeSecond);
    return "atividade em execução";

    // const newTimeSecond = convertToSecond(time);
    // setTimeout(async () => {
    //   n8nConnection({ task });
    // }, 1000 * newTimeSecond);
    // return "atividade em execução";
  } catch (error) {
    console.log("cheguei aqui");
    throw error;
  }
}

import { sendData } from "./sendData.js";
export const init = () => {
    const button = document.getElementById("button");
    if (button) {
        button.addEventListener("click", sendData);
    }
};

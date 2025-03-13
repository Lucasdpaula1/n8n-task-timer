export function generateCard(
  parentElement: HTMLElement,
  task: string,
  timeInSeconds: number
) {
  // Converter o tempo em segundos para o formato HH:MM:SS
  function formatTime(seconds: number) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const remainingSeconds = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${remainingSeconds}`;
  }

  // Função para atualizar o contador de tempo
  function startTimer() {
    let timeLeft = timeInSeconds;
    const timerElement = document.querySelector(".timer");

    // Atualizar o contador a cada segundo
    const intervalId = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalId); // Parar o contador quando o tempo acabar
      } else {
        timeLeft--;
        if (timerElement) {
          timerElement.textContent = formatTime(timeLeft);
        }
      }
    }, 1000);
  }

  // Adicionar o HTML do card
  parentElement.innerHTML += `
      <div class="item">
        <div class="information-area">
          <p class="task-name">${task}</p>
          <div class="item-icons">
            <div class="icon-container">
              <img src="assets/close.svg" alt="" class="icon" />
            </div>
            <div class="icon-container">
              <img src="assets/clock.svg" alt="" class="icon clock-icon" />
            </div>
          </div>
        </div>

        <div class="clock-area">
          <span class="timer">${formatTime(timeInSeconds)}</span>
        </div>
      </div>
  `;

  // Iniciar o contador assim que o card for gerado
  startTimer();
}

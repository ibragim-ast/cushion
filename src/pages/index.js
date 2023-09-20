const timerElement = document.querySelector(".banner__timer");

const endDate = new Date("2023-10-05T04:51:16");

const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const currentDate = new Date().getTime();
  const timeLeft = endDate - currentDate;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timerElement.innerHTML = "Таймер истек";
  } else {
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerElement.innerHTML = formattedTime;
  }
}

function changeImage(clickedImage) {
  const mainImage = document.querySelector(".product__image");
  mainImage.style.opacity = "0";

  setTimeout(() => {
    mainImage.src = clickedImage.src;
    mainImage.style.opacity = "1";
  }, 300);
}

updateTimer();

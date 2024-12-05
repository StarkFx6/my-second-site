document.addEventListener("DOMContentLoaded", () => {
  const images = ["apple.png", "casino.png", "cherries.png", "lemon.png", "watermelon.png"];
  let userName = prompt("Введіть ваше ім'я:") || "User";
  let winCounter = 0;
  document.querySelector(".user").textContent = userName;
  const generateButton = document.querySelector(".button");
  const rows = document.querySelectorAll(".rowCasino");
  const generateIcons = () => {
      rows.forEach(row => {
          const icons = row.querySelectorAll(".icon");
          const usedImages = new Set();

          icons.forEach(icon => {
              let randomImage;
              do {
                  randomImage = images[Math.floor(Math.random() * images.length)];
              } while (usedImages.has(randomImage)); // Переконатися, що вертикально не повторюється
              usedImages.add(randomImage);

              icon.style.backgroundImage = `url('img/${randomImage}')`;
              icon.style.backgroundSize = "cover";
          });
      });
  };
  const checkForWin = () => {
      const middleIcons = Array.from(rows).map(row => 
          row.querySelectorAll(".icon")[1].style.backgroundImage
      );

      if (middleIcons.every(icon => icon === middleIcons[0])) {
          winCounter++;
          setTimeout(function() {
            alert(`Вітаємо, ${userName}! Ви виграли! Загальні перемоги: ${winCounter}`)}, 300);
      }
  };
  generateButton.addEventListener("click", () => {
      generateIcons();
      checkForWin();
  });
});




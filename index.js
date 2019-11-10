document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM Ready");
  localStorage.clear();

  // raccourci pour donner une valeusr par défaut
  let username =
    localStorage.getItem("username") ||
    prompt("Comment tu t'appelles ?") ||
    "toto2000";

  let defaultLevel =
    localStorage.getItem("defaultLevel") ||
    prompt("Choisis ton niveau : ") ||
    1;

  // on le stocke dans le local storage
  localStorage.setItem("username", username);
  localStorage.setItem("connectedAt", new Date());
  localStorage.setItem("defaultLevel", defaultLevel);

  // const idDevelopper = username === "dev" ? true : false;

  const $screen = document.querySelector("#screen");
  const $startBtn = document.querySelector("#start");
  const $btns = document.querySelectorAll(".btn-circle");

  $screen.innerHTML = `
  <p>Bonjour ${username} !<br> Clique sur "start" pour commencer !</p>
  `;

  const game = new Simon($screen, {
    intervalDuration: 1000,
    level: defaultLevel
  });

  $startBtn.addEventListener("click", function() {
    game.play();
  });

  for (let $button of $btns) {
    $button.addEventListener("click", function() {
      const color = $button.dataset.color;
      game.addAnswer(color);
    });
  }
});

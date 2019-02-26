/**
 *
 * @param {*} $screen
 * @param {*} options
 */
function Simon($screen, options) {
  /**
   * Available colors
   */
  const colors = ["#f00", "#0f0", "#ff0", "#00f"];

  let sequence = [];

  let playerAnswers = [];

  /**
   * Prepare the game for the given level
   * @param {number} level
   */
  function goToLevel(level) {
    for (let i = sequence.length; i < level; i++) {
      const randomIndex = randomInt(colors.length);
      const color = colors[randomIndex];
      sequence.push(color);
    }
  }

  function goToNextLevel() {
    goToLevel(sequence.length + 1);
    playerAnswers = [];
  }

  function registerAnswers(answer) {
    if (!colors.includes(answer)) {
      console.error("Invalid colros, answer ignored");
      return;
    }

    if (sequence.length === 0) {
      console.error("Le jeu n'a pas démarré");
      return;
    }

    if (playerAnswers.length === sequence.length) {
      console.error("Vous avez déjà joué, du calme !");
      return;
    }
    playerAnswers.push(answer);
  }

  function run() {
    let i = 0;
    const interval = setInterval(function() {
      const color = sequence[i];

      if (!color) {
        clearInterval(interval);
        return;
      }

      $screen.style.backgroundColor = color;
      i++;

      setTimeout(function() {
        $screen.style.backgroundColor = "#fff";
      }, options.intervalDuration - 200);
    }, options.intervalDuration);
  }

  return {
    play: function() {
      goToNextLevel();
      run();
    },
    addAnswer: registerAnswers
  };
}

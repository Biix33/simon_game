/**
 *
 * @param {*} $screen
 * @param {Object} options
 */
function Simon($screen, options) {
  /**
   * Available colors
   */
  const colors = options.colors || ["#f00", "#0f0", "#ff0", "#00f"];
  let isRunning = false;

  let sequence = [];

  let playerAnswers = [];

  let defaultlevel = options.level;

  /**
   * Prepare the game for the given level
   */
  function goToLevel() {
    if (defaultlevel === null || options.level === null) {
      defaultlevel = 1;
    }

    for (let i = sequence.length; i < defaultlevel; i++) {
      const randomIndex = randomInt(colors.length);
      const color = colors[randomIndex];
      sequence.push(color);
    }

    playerAnswers = [];
    isRunning = false;
  }

  function goToNextLevel() {
    defaultlevel++;
    goToLevel();
  }

  function registerAnswers(answer) {
    if (!isRunning) return;

    if (sequence.length === 0) {
      throw new Error("Le jeu n'a pas démarré");
    }

    if (!colors.includes(answer)) {
      console.error("Invalid colors, answer ignored");
      return;
    }

    if (playerAnswers.length === sequence.length) {
      console.error("Vous avez déjà joué, du calme !");
      return;
    }
    // On la valide la réponse
    const currentIndex = playerAnswers.length;
    const solution = sequence[currentIndex];

    if (solution !== answer) {
      gameOver();
      return;
    }

    playerAnswers.push(answer);

    if (playerAnswers.length === sequence.length) {
      levelComplete();
    }
  }

  function run() {
    isRunning = true;
    
    let i = 0;
    const interval = setInterval(function() {
      const color = sequence[i];

      if (!color) {
        clearInterval(interval);
        isRunning = true;
        return;
      }

      $screen.style.backgroundColor = color;
      $screen.textContent = "";
      i++;

      setTimeout(function() {
        $screen.style.backgroundColor = "#1d1d1d";
      }, options.intervalDuration - (options.intervalDuration * 0.2));
    }, options.intervalDuration);

    $screen.innerHTML = `<p>Niveau ${defaultlevel}</p>`;
  }

  function levelComplete() {
    goToNextLevel();
    if (confirm(`Good Job :) Niveau suivant ${defaultlevel} ?`)) {
      localStorage.setItem("curentLevel", defaultlevel);
      run();
    }
  }

  function gameOver() {
    $screen.innerHTML = "<p>Game over &#128540; !</p>";
    sequence = [];
    defaultlevel = options.level;
    localStorage.setItem("curentLevel", options.level);
    goToLevel();
  }

  goToLevel();

  return {
    play: function() {
      if (isRunning) return;
      run();
    },
    addAnswer: function(color) {
      if (isRunning) registerAnswers(color);
    },
  };
}

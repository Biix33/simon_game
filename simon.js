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
  };
}

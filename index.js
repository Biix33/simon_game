document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');
    const $screen = document.querySelector('#screen'); 
    const $playBtn = document.querySelector('#play');
    const $btns = document.querySelector("#btns");  
    
    const game = new Simon($screen, {
        intervalDuration: 1000
    });

    $playBtn.addEventListener('click', function() {
        game.play();
    });

    $btns.addEventListener("click", function(event) {
      let btnDataColor = event.target.dataset.color;

      if (btnDataColor !== undefined && currentGame.length > 0) {
        answer.push(btnDataColor);
      }

      if (areArraysSimilar(currentGame, answer)) {
        result = "Bravo";
        nextLevel(result);
      } else {
        result = "Try again";
      }
      alert(result);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');
    const $screen = document.querySelector('#screen'); 
    const $playBtn = document.querySelector('#play');
    const $btns = document.querySelectorAll(".btn-circle");  
    
    const game = new Simon($screen, {
        intervalDuration: 1000
    });

    $playBtn.addEventListener('click', function() {
        game.play();
    });

    for (let $button of $btns) {
        $button.addEventListener("click", function() {
            const color = $button.dataset.color;
            game.addAnswer(color);
        });
    }
});
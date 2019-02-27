document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');
    const $screen = document.querySelector('#screen'); 
    const $startBtn = document.querySelector('#start');
    const $btns = document.querySelectorAll(".btn-circle");  
    
    const game = new Simon($screen, {
        intervalDuration: 1000
    });

    $startBtn.addEventListener('click', function() {
        game.play();
    });

    for (let $button of $btns) {
        $button.addEventListener("click", function() {
            const color = $button.dataset.color;
            game.addAnswer(color);
        });
    }
});
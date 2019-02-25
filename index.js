document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');

    const colors = ['#f00', '#0f0', '#ff0', '#00f'];
    const $screen = document.querySelector('#screen');

    let i = 0;
    const interval = setInterval(function () {
        const color = colors[i];

        if (!color) {
            clearInterval(interval);
            return;
        }

        $screen.style.backgroundColor = color;
        i++;
    }, 1000);
    
    
});
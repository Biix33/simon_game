/**
 * 
 * @param {*} $screen 
 * @param {*} options 
 */
function Simon($screen, options) {
    const colors = ['#f00', '#0f0', '#ff0', '#00f'];

    function run() {
        let i = 0;
        const interval = setInterval(function () {
            const color = colors[i];

            if (!color) {
                clearInterval(interval);
                return;
            }

            $screen.style.backgroundColor = color;
            i++;
            
            setTimeout(function() {
                $screen.style.backgroundColor = 'transparent';
            }, options.intervalDuration - 200);
        }, options.intervalDuration);
    };
    // Run the game
    run();
};
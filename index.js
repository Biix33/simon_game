document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Ready');
    const $screen = document.querySelector('#screen');    
    
    new Simon($screen, {
        intervalDuration: 1000
    });
});
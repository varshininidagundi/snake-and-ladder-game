document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired.');

    let button = document.getElementById('submit');
    let player1 = document.getElementById('playerone');
    let player2 = document.getElementById('playertwo');

    if (button && player1 && player2) {
        button.addEventListener('click', function() {
            let one = player1.value;
            let two = player2.value;
            localStorage.setItem('playerone', one);
            localStorage.setItem('playertwo', two);
            console.log('Values stored in localStorage:', one, two);
        });
    } else {
        console.error('Button or input elements not found.');
    }
});

/*
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

const container = document.querySelector('.container');

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    div.classList.add('number');

    if (i % 2 === 0) {
        div.classList.add('green');
    } else {
        div.classList.add('yellow');
    }

    if (isPrime(i)) {
        div.classList.remove('green', 'yellow');
        div.classList.add('red');
    }

    container.appendChild(div);
}
*/
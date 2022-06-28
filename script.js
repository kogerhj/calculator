function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a -b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const display = document.getElementById('display')

const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent = button.id;
    })
});

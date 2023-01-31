const counterEl = document.querySelector('.counter');
const decreaseEl = document.querySelector('.decrease');
const increaseEl = document.querySelector('.increase');
const reset = document.querySelector('.reset');
const stepEl = document.getElementById('step');

let counter = 0;

counterEl.innerText = counter;

function count(operator) {
  if (operator === 'decrease') {
    counter -= +stepEl.value;
  } else if (operator === 'increase') {
    counter += +stepEl.value;
  } else {
    counter = 0;
  }

  counterEl.innerText = counter;
}

decreaseEl.addEventListener('click', () => {
  count('decrease');
});

increaseEl.addEventListener('click', () => {
  count('increase');
});

reset.addEventListener('click', () => {
  count(null);
});

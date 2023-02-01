const counterEl = document.querySelector('.counter');
const decreaseEl = document.querySelector('.decrease');
const increaseEl = document.querySelector('.increase');
const resetEl = document.querySelector('.reset');
const stepEl = document.getElementById('step');

const LS_COUNTER_KEY = 'counter.counter';
const LS_STEP_KEY = 'counter.step';

let counter = +localStorage.getItem(LS_COUNTER_KEY) || 0;

counterEl.innerText = counter;
stepEl.value = localStorage.getItem(LS_STEP_KEY) || 1;

function count(operator) {
  if (operator === 'decrease') {
    counter -= +stepEl.value;
  } else if (operator === 'increase') {
    counter += +stepEl.value;
  } else {
    counter = 0;
  }

  localStorage.setItem(LS_COUNTER_KEY, counter);
  counterEl.innerText = counter;
}

stepEl.addEventListener('input', () => {
  localStorage.setItem(LS_STEP_KEY, stepEl.value);
});

decreaseEl.addEventListener('click', () => {
  count('decrease');
});

increaseEl.addEventListener('click', () => {
  count('increase');
});

resetEl.addEventListener('click', () => {
  count(null);
});

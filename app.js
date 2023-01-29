const counterEl = document.querySelector('.counter');
const decreaseEl = document.querySelector('.decrease');
const increaseEl = document.querySelector('.increase');

let counter = 0;

counterEl.innerText = counter;

decreaseEl.addEventListener('click', () => {
  counter--;
  counterEl.innerText = counter;
});

increaseEl.addEventListener('click', () => {
  counter++;
  counterEl.innerText = counter;
});

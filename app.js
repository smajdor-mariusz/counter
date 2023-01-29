const counterEl = document.querySelector('.counter');
const increaseEl = document.querySelector('.increase');

let counter = 0;

counterEl.innerText = counter;

increaseEl.addEventListener('click', () => {
  counter++;
  counterEl.innerText = counter;
});

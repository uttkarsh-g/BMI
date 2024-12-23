const r = document.querySelector('#result');
const w = document.querySelector('#weight');
const h = document.querySelector('#height');
const f = document.querySelector('form');

const calc = () => {
  const heightInMeter = h.value * 0.01;
  const weight = w.value;
  return weight / (heightInMeter * heightInMeter);
};

f.addEventListener('submit', (e) => {
  e.preventDefault();
  r.innerHTML = `${calc().toFixed(1)}  kg/m<sup>2</sup>`;
});

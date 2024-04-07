const proteinSlider = document.getElementById('protein');
const fatSlider = document.getElementById('fat');
const carbohydratesSlider = document.getElementById('carbohydrates');
const caloriesSlider = document.getElementById('calories');

const proteinValue = document.getElementById('protein-value');
const fatValue = document.getElementById('fat-value');
const carbohydratesValue = document.getElementById('carbohydrates-value');
const caloriesValue = document.getElementById('calories-value');

proteinSlider.addEventListener('input', () => {
  proteinValue.textContent = proteinSlider.value;
});

fatSlider.addEventListener('input', () => {
  fatValue.textContent = fatSlider.value;
});

carbohydratesSlider.addEventListener('input', () => {
  carbohydratesValue.textContent = carbohydratesSlider.value;
});

caloriesSlider.addEventListener('input', () => {
  caloriesValue.textContent = caloriesSlider.value;
});

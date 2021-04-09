import colors from './colors.js';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.getElementById('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', colorSwitchStart);
refs.stopBtn.addEventListener('click', colorSwitchStop);

let intervalColorId;

function colorSwitchStart() {
  refs.startBtn.disabled = true;
  intervalColorId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
}

function colorSwitchStop() {
  refs.startBtn.disabled = false;
  clearInterval(intervalColorId);
}

// Есть массив цветов в hex-формате и кнопки Start и Stop
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval

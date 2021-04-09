// button.disabled = true
// button.disabled = false
import colors from './colors.js';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.getElementsByTagName('body')[0],
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', colorSwitchStart);

function colorSwitchStart() {
  setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 500);
}

////////
// Есть массив цветов в hex-формате и кнопки Start и Stop
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval

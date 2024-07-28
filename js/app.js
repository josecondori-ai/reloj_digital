// Selecciona todos los elementos con clase 'number' dentro de los elementos con id 'hours', 'minutes' y 'seconds'
const hoursEls = document.querySelectorAll('#hours .number');
const minutesEls = document.querySelectorAll('#minutes .number');
const secondsEls = document.querySelectorAll('#seconds .number');
const periodEl = document.querySelector('#period .period'); // Selecciona el elemento de período

// Estados de los segmentos para representar números del 0 al 9
const states = [
  [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13],
  [3, 5, 8, 10, 13],
  [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13],
  [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13],
  [1, 3, 4, 5, 6, 7, 8, 10, 13],
  [1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13],
  [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 5, 8, 10, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13]
];

// Llama a la función getTime cada segundo
setInterval(getTime, 1000);

// Obtiene la hora actual y actualiza los elementos del reloj
function getTime() {
  const time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let period = 'AM'; // Inicializa el período como AM

  // Convierte el formato de 24 horas a 12 horas
  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  // Actualiza el elemento de período
  periodEl.textContent = period;

  // Formatea las horas, minutos y segundos para que siempre tengan dos dígitos
  hours = (hours < 10 ? `0${hours}` : hours).toString().split('');
  minutes = (minutes < 10 ? `0${minutes}` : minutes).toString().split('');
  seconds = (seconds < 10 ? `0${seconds}` : seconds).toString().split('');

  // Actualiza los elementos de las horas
  displayNumber(hoursEls[0], +hours[0]);
  displayNumber(hoursEls[1], +hours[1]);

  // Actualiza los elementos de los minutos
  displayNumber(minutesEls[0], +minutes[0]);
  displayNumber(minutesEls[1], +minutes[1]);

  // Actualiza los elementos de los segundos
  displayNumber(secondsEls[0], +seconds[0]);
  displayNumber(secondsEls[1], +seconds[1]);
}

// Muestra u oculta las piezas para representar el número dado
function displayNumber(el, number) {
  const pieces = el.querySelectorAll('.piece');

  pieces.forEach((piece, idx) => {
    // Muestra la pieza si está en el estado correspondiente del número
    if (states[number].includes(idx + 1)) {
      piece.classList.add('show');
    } else {
      piece.classList.remove('show');
    }
  });
}

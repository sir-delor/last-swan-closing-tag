const container = document.getElementById('container');
const overlay = document.getElementById('overlay');

// Радиус прозрачной области (в пикселях)
const RADIUS = 100;

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  // Координаты курсора относительно контейнера
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Обновляем маску оверлея: создаём прозрачное «окно» в точке курсора
  overlay.style.mask = `radial-gradient(circle at ${x}px ${y}px, transparent ${RADIUS}px, black ${RADIUS + 5}px)`;
  overlay.style.webkitMask = `radial-gradient(circle at ${x}px ${y}px, transparent ${RADIUS}px, black ${RADIUS + 5}px)`;
});

// При выходе курсора из контейнера — возвращаем чёрный фон
container.addEventListener('mouseleave', () => {
  overlay.style.mask = 'none';
  overlay.style.webkitMask = 'none';
});

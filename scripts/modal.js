//
// Управление Модальным Окном
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');

// Открываем модальное окно
openBtn.onclick = function() {
  modal.showModal(); // showModal() делает окно модальным
};

// Закрываем модальное окно
closeBtn.onclick = function() {
  modal.close();
};

//-------------------------------
// Скрытие текста при переполнении
document.querySelector('.fade-btn').addEventListener('click', function() {
  const content = document.getElementById('poem-content');
  const isExpanded = this.getAttribute('aria-expanded') === 'true';

  content.hidden = isExpanded;
  content.classList.toggle('expanded', !isExpanded);
  this.setAttribute('aria-expanded', String(!isExpanded));
  this.textContent = isExpanded ? 'Читать полностью' : 'Скрыть';
});

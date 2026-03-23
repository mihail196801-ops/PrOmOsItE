// slider.js
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  };

  // Автопрокрутка каждые 5 сек
  let autoSlideInterval = setInterval(nextSlide, 5000);

  // Остановить автопрокрутку при наведении на слайдер
  const slider = document.querySelector('.hero-slider');
  slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });
  slider.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 5000);
  });

  // Кнопки
  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  document.querySelector('.next').addEventListener('click', nextSlide);

  // Инициализация
  showSlide(0);
});

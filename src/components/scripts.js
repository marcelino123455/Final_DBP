export function initSlider() {
  document.addEventListener('DOMContentLoaded', function() {
    let slider = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.slider .dots li');

    let lengthItems = items.length - 1;
    let active = 0;

    let refreshInterval;

    function startAutoSlide() {
      refreshInterval = setInterval(() => {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
      }, 3000);
    }

    next.onclick = function() {
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
      clearInterval(refreshInterval);
      startAutoSlide();
    }

    prev.onclick = function() {
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
      clearInterval(refreshInterval);
      startAutoSlide();
    }

    function reloadSlider() {
      slider.style.left = -items[active].offsetLeft + 'px';

      let lastActiveDot = document.querySelector('.slider .dots li.active');
      if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
      }
      dots[active].classList.add('active');
    }

    dots.forEach((li, key) => {
      li.addEventListener('click', () => {
        active = key;
        reloadSlider();
        clearInterval(refreshInterval);
        startAutoSlide();
      });
    });

    window.onresize = function(event) {
      reloadSlider();
    };

    startAutoSlide();
  });
}

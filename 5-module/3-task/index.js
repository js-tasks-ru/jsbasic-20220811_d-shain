function initCarousel() {
  let slide = document.querySelector('.carousel__slide');
  let width = slide.offsetWidth;
  let position = 0;
  let ppx = 0;
  let rbutton = document.querySelector('.carousel__arrow_right');
  let lbutton = document.querySelector('.carousel__arrow_left');
  lbutton.style.display = 'none';
  let elem = document.querySelector('.carousel__inner');
  rbutton.addEventListener('click', () => {
    if (position < 3) {
      ppx = ppx - width;
      elem.style.transform = `translateX(${ppx}px)`;
      position += 1;
    }
    if (position == 3) rbutton.style.display = 'none';
    if (position == 1) lbutton.style.display = '';
  });
  lbutton.addEventListener('click', () => {
    if (position > 0) {
      ppx = ppx + width;
      elem.style.transform = `translateX(${ppx}px)`;
      position -= 1;
    }
    if (position == 0) lbutton.style.display = 'none';
    if (position == 3) rbutton.style.display = '';
  });
}

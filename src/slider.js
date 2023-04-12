export function getAllCarouselItems(element) {
  return element.querySelectorAll('img.carousel-item');
}

export function nextSlide() {
  const allCarouselItems = getAllCarouselItems(
    document.querySelector('#carousel'),
  );
  const { length } = allCarouselItems;
  if (length > 1) {
    for (let i = 0; i < length; i++) {
      if (allCarouselItems[i].classList.contains('active')) {
        if (i === length - 1) {
          allCarouselItems[0].classList.add('active');
        } else {
          allCarouselItems[i + 1].classList.add('active');
        }
        allCarouselItems[i].classList.remove('active');
        return;
      }
    }
  }
}

export function previewSlide() {
  const allCarouselItems = getAllCarouselItems(
    document.querySelector('#carousel'),
  );
  const { length } = allCarouselItems;
  if (length > 1) {
    for (let i = 0; i < length; i++) {
      if (allCarouselItems[i].classList.contains('active')) {
        if (i === 0) {
          allCarouselItems[length - 1].classList.add('active');
        } else {
          allCarouselItems[i - 1].classList.add('active');
        }
        allCarouselItems[i].classList.remove('active');
        return;
      }
    }
  }
}

export function createSlider(element, countSliders = 1) {
  element.classList.add('carousel');
  element
    .appendChild(document.createElement('button'))
    .classList.add('button', 'preview');
  element.appendChild(document.createElement('ul'));
  element
    .appendChild(document.createElement('button'))
    .classList.add('button', 'next');

  const ul = element.querySelector('ul');
  for (let i = 0; i < countSliders; i++) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('carousel-item');
    if (i === 0) {
      img.classList.add('active');
    }
    li.appendChild(img);
    ul.appendChild(li);
  }

  element.querySelector('button.next').addEventListener('click', nextSlide);
}

document.querySelector('button.next').addEventListener('click', nextSlide);
document
  .querySelector('button.preview')
  .addEventListener('click', previewSlide);
document.querySelector('button.preview').innerHTML = '<';
document.querySelector('button.next').innerHTML = '>';

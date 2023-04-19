export function getAllCarouselItems(element) {
  return element.querySelectorAll('img.carousel-item');
}

export function nextSlide() {
  // console.log("nextSlide");
  // console.log(this.outerHTML);
  // console.log(document.querySelector('#carousel').outerHTML);
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

(function () {
  function initialize() {
    console.log("I'm here!!!!!!!!!!!!!!!!");
    document.querySelector('button.next').addEventListener('click', nextSlide);
    document
      .querySelector('button.preview')
      .addEventListener('click', previewSlide);
    document.querySelector('button.preview').innerHTML = '<';
    document.querySelector('button.next').innerHTML = '>';
  }

  window.addEventListener('load', initialize);
}());

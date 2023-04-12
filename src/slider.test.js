import { createSlider, getAllCarouselItems } from './slider';
import '@testing-library/jest-dom';

describe('Get all items', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('div');
    createSlider(el, 3);
  });

  it('Slider has been created', () => {
    expect(el.classList.contains('carousel')).toBeTruthy();
    expect(el.querySelector('div > button.preview')).toBeTruthy();
    expect(el.querySelector('div > button.next')).toBeTruthy();
    expect(el.querySelector('div > ul')).toBeTruthy();
    expect(
      el.querySelector('div > ul > li > img.carousel-item.active'),
    ).toBeTruthy();
  });
  it('All carousel items is presented', () => {
    expect(getAllCarouselItems(el).length).toBe(3);
  });
  it.skip("Button 'next' switches slide to the next", () => {
    el.querySelector('button.next').click();
    expect(getAllCarouselItems(el)[0].classList.contains('active')).toBeFalsy;
    expect(getAllCarouselItems(el)[1].classList.contains('active')).toBeTruthy;
  });
  it.skip("Button 'next' switches last slide to the first slide", () => {
    el.querySelector('button.next').click();
    el.querySelector('button.next').click();
    el.querySelector('button.next').click();
    expect(getAllCarouselItems(el)[2].classList.contains('active')).toBeFalsy;
    expect(getAllCarouselItems(el)[0].classList.contains('active')).toBeTruthy;
  });
  it.skip("Button 'preview' switches first slide to the last slide", () => {
    el.querySelector('button.preview').click();
    expect(getAllCarouselItems(el)[0].classList.contains('active')).toBeFalsy;
    expect(getAllCarouselItems(el)[2].classList.contains('active')).toBeTruthy;
  });
  it.skip("Button 'preview' switches slide to the preview", () => {
    el.querySelector('button.preview').click();
    el.querySelector('button.preview').click();
    expect(getAllCarouselItems(el)[0].classList.contains('active')).toBeFalsy;
    expect(getAllCarouselItems(el)[1].classList.contains('active')).toBeTruthy;
  });
});

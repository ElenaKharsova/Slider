import { initialize } from "./slider";
import "@testing-library/jest-dom";

describe("Testing creating 1 slider", () => {
  let el;
  let allImages;

  beforeEach(() => {
    el = document.createElement("div");
    el.classList.add("slider");

    for (let i = 0; i < 5; i++) {
      el.appendChild(document.createElement("img"));
    }

    initialize([el]);
    allImages = el.querySelectorAll("img");
  });

  it("Slider has been created", () => {
    expect(el.classList.contains("slider")).toBeTruthy();
    expect(el.querySelector("div > button.preview")).toBeTruthy();
    expect(el.querySelector("div > button.next")).toBeTruthy();
    expect(el.querySelector("div > ul")).toBeTruthy();
    expect(
      el.querySelector("div > ul > li > img.slider-item.active")
    ).toBeTruthy();
  });
  it("All carousel items is presented", () => {
    expect(allImages.length).toBe(5);
  });
  it("Button 'next' switches slide to the next", () => {
    el.querySelector("button.next").click();
    expect(allImages[0].classList.contains("active")).toBeFalsy;
    expect(allImages[1].classList.contains("active")).toBeTruthy;
  });
  it("Button 'next' switches last slide to the first slide", () => {
    el.querySelector("button.next").click();
    el.querySelector("button.next").click();
    el.querySelector("button.next").click();
    expect(allImages[2].classList.contains("active")).toBeFalsy;
    expect(allImages[0].classList.contains("active")).toBeTruthy;
  });
  it("Button 'preview' switches first slide to the last slide", () => {
    el.querySelector("button.preview").click();
    expect(allImages[0].classList.contains("active")).toBeFalsy;
    expect(allImages[2].classList.contains("active")).toBeTruthy;
  });
  it("Button 'preview' switches slide to the preview", () => {
    el.querySelector("button.preview").click();
    el.querySelector("button.preview").click();
    expect(allImages[0].classList.contains("active")).toBeFalsy;
    expect(allImages[1].classList.contains("active")).toBeTruthy;
  });
});

describe("Testing creating 3 slider", () => {
  const newPage = document.createElement("div");
  const countSliders = 3;
  const countImages = 5;
  for (let i = 0; i < countSliders; i++) {
    const slider = document.createElement("div");
    slider.classList.add("slider");

    for (let j = 0; j < countImages; j++) {
      slider.appendChild(document.createElement("img"));
    }
    newPage.appendChild(slider);
  }

  const allSliders = newPage.querySelectorAll(".slider");
  initialize(allSliders);

  it("All sliders have been created", () => {
    expect(allSliders.length).toBe(countSliders);
    for (let i = 0; i < countSliders; i++) {
      expect(allSliders[i].querySelectorAll("img").length).toBe(countImages);
      expect(allSliders[i].querySelector("div > button.preview")).toBeTruthy();
      expect(allSliders[i].querySelector("div > button.next")).toBeTruthy();
      expect(allSliders[i].querySelector("div > ul")).toBeTruthy();
      expect(
        allSliders[i].querySelector("div > ul > li > img.slider-item.active")
      ).toBeTruthy();
    }
  });
});

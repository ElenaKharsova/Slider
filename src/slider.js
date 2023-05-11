export function initialize(sliders) {
  function createSlider(element) {
    const slider = document.createElement("div");
    let images = element.querySelectorAll("img");
    const countImages = images.length;

    slider
      .appendChild(document.createElement("button"))
      .classList.add("button", "preview");
    slider.querySelector("button.preview").innerHTML = "<";
    const ul = document.createElement("ul");
    slider.appendChild(ul);

    element.querySelector("img").classList.add("active");
    for (let i = 0; i < countImages; i++) {
      const li = document.createElement("li");
      images[i].classList.add("slider-item");
      li.appendChild(images[i]);
      ul.appendChild(li);
    }
    slider
      .appendChild(document.createElement("button"))
      .classList.add("button", "next");
    slider.querySelector("button.next").innerHTML = ">";

    element.innerHTML = slider.innerHTML;
    images = element.querySelectorAll("img");

    function nextSlide() {
      if (countImages > 1) {
        for (let i = 0; i < countImages; i++) {
          if (images[i].classList.contains("active")) {
            if (i === countImages - 1) {
              images[0].classList.add("active");
            } else {
              images[i + 1].classList.add("active");
            }
            images[i].classList.remove("active");
            return;
          }
        }
      }
    }

    function previewSlide() {
      if (countImages > 1) {
        for (let i = 0; i < countImages; i++) {
          if (images[i].classList.contains("active")) {
            if (i === 0) {
              images[countImages - 1].classList.add("active");
            } else {
              images[i - 1].classList.add("active");
            }
            images[i].classList.remove("active");
            return;
          }
        }
      }
    }

    element.querySelector("button.next").addEventListener("click", nextSlide);
    element
      .querySelector("button.preview")
      .addEventListener("click", previewSlide);
  }

  const countSliders = sliders.length;
  for (let i = 0; i < countSliders; i++) {
    createSlider(sliders[i]);
  }
}

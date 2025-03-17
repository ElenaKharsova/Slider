<img src="https://img.shields.io/badge/JS-yellow"> <img src="https://img.shields.io/badge/HTML-orange"> <img src="https://img.shields.io/badge/CSS-purple">

## Slider plugin

This is a plugin, which allows to add a slider to your page.
Steps for applying slider:

1. Import files slider.js, slider.css
2. Set in your page Elements with class = "slider". Add tags images, which will be presented in the slider, inner tag with class = "slider".
3. Call function initialize() with parameters - all tags with class = "slider".
-------------------------------------------------------------------------------
<i>For example:</i>

<b>index.html:</b>
```
<div class="slider"> 
  <img src="./src/images/bridge.jpg" alt="Slide 1" />
  <img src="./src/images/firework.jpg" alt="Slide 2" />
  <img src="./src/images/people.jpg" alt="Slide 3" />
</div>
```

<b>index.js:</b>
```
initialize(document.querySelectorAll(".slider"));
```
------------------------------------------------------------------------------
Result of work you can see in https://elenakharsova.github.io/Slider/

Codesandbox https://codesandbox.io/s/github/ElenaKharsova/Slider/tree/slider

![image](https://github.com/ElenaKharsova/Slider/assets/96537658/bca197cf-829c-4993-a390-7c53fa5d6d3c)

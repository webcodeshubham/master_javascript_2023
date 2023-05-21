// Select the HTML Element using DOM Browserable APIs.
// slides is an array of elements having all the slide images.
let slides = document.querySelectorAll(".slide");

// Declare and assign a variable as Counter
let counter = 0;

// Or it can be anything like 1-6

// Align the slides in the different positions using forEach Array Method.

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// Build a logic or machine to alter the position of the slide.
const imageSlider = () => {
  slides.forEach((slide, index) => {
    // We want to move or translate the slide on x axis, with magnitude and direction as (- or +).
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Two Secenarios, when someone clicks on NEXT Button =>
// #1. When the Counter is 0 => Non-Functional.
// #2. When the Counter is greater than 0 => Functional.
// You are decreasing the counter and translating forwards with 100% width, it will take the reference from parent left container.
// The counter value will no more decrease, once it is reached to index = 0 (Image).
const prev = () => {
  if (counter > 0) {
    counter -= 1;
    imageSlider();
  }
};

// Three Secenarios, when someone clicks on NEXT Button =>
// #1. When the Counter is 0 => Functional.
// #2. When the Counter is 4 => Functional.
// #3. When the Counter becomes equals to (slides.length - 1) => Non-Functional.
// You are increasing the counter and translating backwards with 100% width, it will take the reference from parent left container.
// The counter value will no more increase, once all slides have finished.
const next = () => {
  if (counter < slides.length - 1) {
    counter += 1;
    imageSlider();
  }
};

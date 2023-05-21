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
    // Translating is only moving not changing the static position of the slide.
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

// Secenarios, when someone clicks on PREV Button =>
// #1. Counter will increase or remains 0 (initial value). It will never be negative.
// #2. When the Counter becomes equals to 0 => Non-Functional/Counter will not decrease.
// #3. When the Counter is greater than 0 => Functional.
// You are decreasing the counter and translating forwards with 100% width, it will take the reference from parent left container(ORIGIN 0 (it will shift x% left of origin)).
// The counter value will no more decrease, once it is reached to index = 0 (Image).
const prev = () => {
  if (counter > 0) {
    counter -= 1;
    imageSlider();
  }
};

// Secenarios, when someone clicks on NEXT Button =>
// #1. Counter will increase or remains 0 (initial value).
// #2. When the Counter becomes equals to (slides.length - 1) => Non-Functional/Counter will not increase.
// #3. When the Counter is less than (slides.length - 1) => Functional/Counter will Increase.
// #4. When the Counter is 4 => Functional.
// You are increasing the counter and translating backwards with 100% width, it will take the reference from parent left container(ORIGIN 0 (it will shift x% left of origin)).
// The counter value will no more increase, once all slides have finished or we have reached to final index value.
const next = () => {
  if (counter < slides.length - 1) {
    counter += 1;
    imageSlider();
  }
};






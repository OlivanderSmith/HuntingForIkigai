const a = document.getElementById("slide-a");
const b = document.getElementById("slide-b");
const c = document.getElementById("slide-c");

const one = "slide-order-1";
const two = "slide-order-2";
const three = "slide-order-3";

const leftArrow = () => {
  if (a.classList.contains(one)) {
    c.classList.add("left-animation");
    setTimeout(() => c.classList.remove("left-animation"), 1000);
    a.classList.remove(one);
    a.classList.add(two);
    b.classList.remove(two);
    b.classList.add(three);
    c.classList.remove(three);
    c.classList.add(one);
  } else if (b.classList.contains(one)) {
    a.classList.add("left-animation");
    setTimeout(() => a.classList.remove("left-animation"), 1000);
    b.classList.remove(one);
    b.classList.add(two);
    c.classList.remove(two);
    c.classList.add(three);
    a.classList.remove(three);
    a.classList.add(one);
  } else if (c.classList.contains(one)) {
    b.classList.add("left-animation");
    setTimeout(() => b.classList.remove("left-animation"), 1000);
    c.classList.remove(one);
    c.classList.add(two);
    a.classList.remove(two);
    a.classList.add(three);
    b.classList.remove(three);
    b.classList.add(one);
  }
};

const rightArrow = () => {
  if (a.classList.contains(one)) {
    b.classList.add("right-animation");
    setTimeout(() => b.classList.remove("right-animation"), 1000);
    //
    setTimeout(() => {
      a.classList.remove(one);
      a.classList.add(three);
      b.classList.remove(two);
      b.classList.add(one);
      c.classList.remove(three);
      c.classList.add(two);
    }, 1000);
    //
  } else if (b.classList.contains(one)) {
    c.classList.add("right-animation");
    setTimeout(() => c.classList.remove("right-animation"), 1000);
    //
    setTimeout(() => {
      b.classList.remove(one);
      b.classList.add(three);
      c.classList.remove(two);
      c.classList.add(one);
      a.classList.remove(three);
      a.classList.add(two);
    }, 1000);
  } else if (c.classList.contains(one)) {
    a.classList.add("right-animation");
    setTimeout(() => a.classList.remove("right-animation"), 1000);
    //
    setTimeout(() => {
      c.classList.remove(one);
      c.classList.add(three);
      a.classList.remove(two);
      a.classList.add(one);
      b.classList.remove(three);
      b.classList.add(two);
    }, 1000);
  }
};

document.onkeydown = function() {
  switch (window.event.keyCode) {
    case 37:
      leftArrow();
      break;
    case 39:
      rightArrow();
      break;
    case 32:
      playPause();
      break;
  }
};

const playPause = () => {
  getElementById("body").classList.toggle("body-toggle");
};

setInterval(
  () =>
    document.getElementById("body").classList.contains("body-toggle")
      ? rightArrow()
      : null,
  3000
);

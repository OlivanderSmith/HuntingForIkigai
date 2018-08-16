arr = [
  "Maybe have a Guinness?",
  "The grass is always greener in Ireland",
  "The Leprachaun's are coming...run!",
  "Mahogony gas-bags",
  "try again",
  "uh...maybe?",
  "once you've passed the dog with tree legs you've gone to faaaar",
  "yeh, I'll get on that"
];

const magic8 = () =>
  (document.getElementById("magic8-answer").innerHTML =
    arr[Math.floor(Math.random() * 8)]);

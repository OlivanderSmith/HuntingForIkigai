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

const magic8 = () => {
  const input = document.getElementById("magic8-input");

  const output = document.getElementById("8BallOutput");

  if (!input || !output) {
    return console.log("missing element");
  }
  if (input.value === "") {
    output.innerHTML = "Did you ask a question?";
    input.classList.add("missing-question");
    setTimeout(() => input.classList.remove("missing-question"), 3000);
  } else {
    document.getElementById("8BallOutput").innerHTML =
      arr[Math.floor(Math.random() * 8)];
  }
};

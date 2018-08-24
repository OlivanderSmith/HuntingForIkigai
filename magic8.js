//Array for magic 8 output
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

// Magic 8 function
const magic8 = () => {
  const input = document.getElementById("magic8-input");

  const output = document.getElementById("8BallOutput");

  if (input.value === "") {
    output.innerHTML = "Did you ask a question?";
    input.classList.add("missing-question");
    setTimeout(() => input.classList.remove("missing-question"), 1000);
  } else {
    document.getElementById("8BallOutput").innerHTML =
      arr[Math.floor(Math.random() * 8)];
    document.getElementById("magic8-input").value = "";
  }
};

// Enter key support for Magic 8 input box
document.getElementById("magic8-input").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    magic8();
  }
});

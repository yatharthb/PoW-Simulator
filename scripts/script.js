const submitButton = document.getElementById("submit-button");
const numberInput = document.getElementById("number-input");
const successMessage = document.createElement("p");
successMessage.setAttribute("id", "success-message");
document.body.appendChild(successMessage);

const failureMessage = document.createElement("p");
failureMessage.setAttribute("id", "failure-message");
document.body.appendChild(failureMessage);

let nonce = Math.floor(Math.random() * 999999);
let difficulty = 100000;
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const input = parseInt(numberInput.value);
  if (Math.abs(input - nonce) < difficulty) {
    successMessage.textContent = "Success";
    successMessage.style.color = "green";
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);
    nonce = Math.floor(Math.random() * 999999);
    difficulty = Math.max(difficulty * 0.9, 10);
  } else {
    failureMessage.textContent = "Failure";
    failureMessage.style.color = "red";
    failureMessage.style.display = "block";
    setTimeout(() => {
      failureMessage.style.display = "none";
    }, 5000);
    difficulty = Math.min(difficulty * 1.01, 500000);
  }
  numberInput.value = "";
});

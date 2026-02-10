const EmailInput = document.getElementById("EmailInput");
const EmailLabel = document.getElementById("EmailLabel");
const forget = document.getElementById("forget");
const forms = document.getElementById("forms");
const SEB = document.getElementById("SEB");
const P = document.getElementById("P");


forms.addEventListener("submit", e => {
  e.preventDefault();
  EmailInput.type = "number";
  EmailInput.required = true;
  EmailLabel.innerText = "Enter Code";
  SEB.innerText = "Verify Code";

  timer()

});

const timer = () => {
  P.addEventListener("click", timer)
  P.classList.add("timer")
  P.classList.remove("link")
  let seconds = 50;
  P.innerText = `Resend code after 00:${seconds}`
  let secondsCounter = setInterval(() => {
    if (seconds > 0) {
      P.innerText = `Resend code after 00:${String(seconds).padStart(2, '0')}`
    }
    if (seconds == 0) {
      P.innerText = `Resend the code`
      P.classList.add("link");
      P.addEventListener("click", timer)
    }
    seconds--

  }, 1000);

  setTimeout(() => {
    clearInterval(secondsCounter)
  }, 51000);


  forms.insertBefore(forget, SEB);
}
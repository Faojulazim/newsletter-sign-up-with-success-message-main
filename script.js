const emailField = document.getElementById("emailField");
const fpsubmitBtn = document.getElementById("fpsubmitBtn");
const error = document.getElementById("error");
const fp = document.getElementById("fp");

fpsubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailFieldValue = emailField.value;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(emailFieldValue)) {
    error.classList.remove("hidden");
    emailField.classList.add("bg-[hsl(4_100%_67%/.1)]");
    emailField.classList.remove("border-[hsl(231_7%_60%)]");
    emailField.classList.add("border-[hsl(4_100%_67%)]");
  } else {
    error.classList.add("hidden");
    emailField.classList.remove("bg-[hsl(4_100%_67%/.1)]");
    emailField.classList.add("border-[hsl(231_7%_60%)]");
    emailField.classList.remove("border-[hsl(4_100%_67%)]");
    fp.classList.add("hidden");
    emailField.value = "";
    document.getElementById("placeEmail").textContent = emailFieldValue;
    document.getElementById("sp").classList.remove("hidden");
    document.querySelector("#dismissBtn").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("sp").classList.add("hidden");
      fp.classList.remove("hidden");
    });
  }
});

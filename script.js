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
    document.body.insertAdjacentHTML(
      "afterbegin",
      `
      <section class="" id="sp">
        <div class="sm:max-w-[500px] px-6 min-h-[100dvh] sm:min-h-0 bg-white relative sm:px-14 sm:py-14 sm:rounded-[2rem]">
          <div class="pt-32 sm:pt-0 sm:pb-8">
            <div>
              <img src="assets/images/icon-success.svg" alt="" />
            </div>
            <div>
              <h1 class="text-4xl pt-8 font-RobotoBold sm:text-5xl">
                Thanks for subscribing!
              </h1>
              <p class="pt-5 text-[14px] small:text-[16px]">
                A confirmation email has been sent to
                <span class="font-RobotoBold">${emailFieldValue}.</span>
                Please open it and click the button inside to confirm your
                subscription.
              </p>
            </div>
          </div>
          <button class="py-4 bg-DarkSlateGrey text-white font-RobotoBold rounded-lg tracking-wide absolute bottom-[3rem] w-[calc(100%-3rem)] sm:relative sm:bottom-0 sm:w-full hover:bg-gradient-to-r hover:from-Tomato hover:to-yellow-400" id="dismissBtn">
            Dismiss message
          </button>
        </div>
      </section>
`
    );
    document.querySelector("#dismissBtn").addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("sp").classList.add("hidden");
      fp.classList.remove("hidden");
    });
  }
});

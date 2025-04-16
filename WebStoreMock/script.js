// function loginWindownDisplay() {
//   let modularWindow = document.getElementById("modularWindow");
//   console.log(modularWindow);
//   toggleModularWindow(modularWindow);
//   modularWindow.addEventListener("Escape", toggleModularWindow(modularWindow));
// }

// function toggleModularWindow(modularWindow) {
//   modularWindow.classList.toggle("hidden");
// }

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     toggleModularWindow(modularWindow);
//   }
// });
document.addEventListener("DOMContentLoaded", () => {
  //Create all three needed objects
  const loginModularWindow = document.getElementById("loginModularWindow");
  const loginBtn = document.getElementById("loginBtn");
  const loginCloseBtn = document.getElementById("modularWindowCloseBtn");
  const registerCloseBtn = document.getElementById("registerWindowCloseBtn");
  const registerModularWindow = document.getElementById(
    "registrationModularWindow"
  );

  //Add an event listener to the login button upon loading the DOM content
  //Event listener will either add or remove the css class name to apply the style
  loginBtn.addEventListener("click", () => {
    loginModularWindow.classList.toggle("hidden");
    document.body.classList.toggle("blurred");
  });

  loginCloseBtn.addEventListener("click", () => {
    loginModularWindow.classList.add("hidden");
    registerModularWindow.classList.add("hidden");
    document.body.classList.toggle("blurred");
  });

  registerCloseBtn.addEventListener("click", () => {
    registerModularWindow.classList.add("hidden");
    document.body.classList.toggle("blurred");
  });
  //Event listener
  document.addEventListener("keydown", (event) => {
    if (
      (event.key === "Escape" &&
        !loginModularWindow.classList.contains("hidden")) ||
      (event.key === "Escape" &&
        !registerModularWindow.classList.contains("hidden"))
    ) {
      loginModularWindow.classList.add("hidden");
      registerModularWindow.classList.add("hidden");
      document.body.classList.remove("blurred");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const registerButton = document.getElementById("registerBtn");
  const loginButton = document.getElementById("loginswitchBtn");
  const loginModularWindow = document.getElementById("loginModularWindow");
  const registerModularWindow = document.getElementById(
    "registrationModularWindow"
  );

  registerButton.addEventListener("click", () => {
    console.log("Button clicked");
    registerModularWindow.classList.toggle("hidden");
    loginModularWindow.classList.toggle("hidden");
  });

  loginButton.addEventListener("click", () => {
    registerModularWindow.classList.toggle("hidden");
    loginModularWindow.classList.toggle("hidden");
  });
});

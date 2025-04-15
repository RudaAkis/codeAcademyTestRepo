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
  const modularWindow = document.getElementById("modularWindow");
  const loginBtn = document.getElementById("loginBtn");
  const closeBtn = document.getElementById("modularWindowCloseBtn");

  //Add an event listener to the login button upon loading the DOM content
  //Event listener will either add or remove the css class name to apply the style
  loginBtn.addEventListener("click", () => {
    modularWindow.classList.toggle("hidden");
    document.body.classList.toggle("blurred");
  });

  closeBtn.addEventListener("click", () => {
    modularWindow.classList.toggle("hidden");
    document.body.classList.toggle("blurred");
  });
  //Event listener
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modularWindow.classList.contains("hidden")) {
      modularWindow.classList.add("hidden");
      document.body.classList.remove("blurred");
    }
  });
});

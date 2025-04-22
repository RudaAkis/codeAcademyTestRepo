function assignDate() {
  const currentDate = new Date();
  const currentDateFormatted = currentDate.toDateString();
  let heading = document.createElement("h3");
  heading.textContent = currentDateFormatted;
  const topNav = document.getElementById("topNav");
  topNav.appendChild(heading);
  heading.setAttribute;
}

assignDate();

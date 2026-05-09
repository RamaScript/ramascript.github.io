// Age Timer
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const now = new Date();
  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();
  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days, hours, minutes, seconds };
}
function padZero(number) {
  return number < 10 ? `0${number}` : number;
}
function updateAge() {
  const dob = "2005-01-04T05:27:00";
  const age = calculateAge(dob);

  const ids = ["y", "mo", "d", "h", "mi", "s"];
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      const value = padZero(age[id === "y" ? "years" : id === "mo" ? "months" : id === "d" ? "days" : id === "h" ? "hours" : id === "mi" ? "minutes" : "seconds"]);
      el.innerText = value;
    }
  });
}

const timerExists = ["y", "mo", "d", "h", "mi", "s"].some((id) => document.getElementById(id));
if (timerExists) {
  setInterval(updateAge, 1000);
  updateAge();
}

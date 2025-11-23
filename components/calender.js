$(document).ready(function () {
  if ($("#calendar-container").length) {
    $("#calendar-container").load("components/kalender.html", function () {
function initCalendar() {
  const monthYear = document.getElementById("month-year");
  const calendarBody = document.getElementById("calendar-body");
  let currentDate = new Date();

  const bookedDates = {
    "2025-12-13": true,
    "2025-12-14": true,
  };

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sonntag
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weekdaysOffset = (firstDay + 6) % 7; // Montag = 0
    monthYear.textContent = date.toLocaleDateString("de-DE", { month: "long", year: "numeric" });

    calendarBody.innerHTML = "";
    let row = document.createElement("tr");

    for (let i = 0; i < weekdaysOffset; i++) {
      row.appendChild(document.createElement("td"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement("td");
      cell.textContent = day;
      cell.setAttribute("tabindex", "0");

      // Prüfen, ob das Datum gebucht ist
      const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      if (bookedDates[key]) {
        cell.classList.add("booked");
      }

      row.appendChild(cell);

      if ((weekdaysOffset + day) % 7 === 0 || day === daysInMonth) {
        calendarBody.appendChild(row);
        row = document.createElement("tr");
      }
    }
  }

  document.getElementById("prev").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  document.getElementById("next").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  renderCalendar(currentDate);
}
 if (typeof initCalendar === "function") {
        initCalendar();
      }
    });
  }
});
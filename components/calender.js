$(document).ready(function () {

  // Prüfen, ob ein Element mit der ID "calendar-container" existiert
  if ($("#calendar-container").length) {

    // Kalender-HTML in den Container laden
    $("#calendar-container").load("components/kalender.html", function () {

      // Funktion zur Initialisierung des Kalenders
      function initCalendar() {
        const monthYear = document.getElementById("month-year");
        const calendarBody = document.getElementById("calendar-body");
        let currentDate = new Date();

        // Liste der gebuchten Termine (markierte Tage)
        const bookedDates = {
          "2025-12-13": true,
          "2025-12-14": true,
        };

        // Funktion zum Rendern des Kalenders für ein bestimmtes Datum
        function renderCalendar(date) {
          const year = date.getFullYear();
          const month = date.getMonth();
          const firstDay = new Date(year, month, 1).getDay(); // 0 = Sonntag
          const daysInMonth = new Date(year, month + 1, 0).getDate();

          const weekdaysOffset = (firstDay + 6) % 7; // Montag = 0
          monthYear.textContent = date.toLocaleDateString("de-DE", { month: "long", year: "numeric" });

          calendarBody.innerHTML = "";
          let row = document.createElement("tr");

          // Leere Zellen für die Tage vor dem 1. des Monats einfügen
          for (let i = 0; i < weekdaysOffset; i++) {
            row.appendChild(document.createElement("td"));
          }
          // Alle Tage des Monats einfügen
          for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement("td");
            cell.textContent = day;
            cell.setAttribute("tabindex", "0");

            // Prüfen, ob das Datum gebucht ist
            const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            if (bookedDates[key]) {
              cell.classList.add("booked");

            } else {
              //  Interaktion und Anfrage senden
              cell.addEventListener("click", () => {
                const form = document.getElementById("booking-form");
                form.classList.add("visible"); // Formular sichtbar machen
                document.getElementById("date").value = key; // Datum ins Formular schreiben
              });
            }

            row.appendChild(cell);

            row.appendChild(cell);

            // Zeilenumbruch nach Sonntag oder letztem Tag
            if ((weekdaysOffset + day) % 7 === 0 || day === daysInMonth) {
              calendarBody.appendChild(row);
              row = document.createElement("tr");
            }
          }
        }

        // Klick-Event für "vorheriger Monat"
        document.getElementById("prev").addEventListener("click", () => {
          currentDate.setMonth(currentDate.getMonth() - 1);
          renderCalendar(currentDate);
        });
        // Klick-Event für "nächster Monat"
        document.getElementById("next").addEventListener("click", () => {
          currentDate.setMonth(currentDate.getMonth() + 1);
          renderCalendar(currentDate);
        });

        // Kalender mit aktuellem Monat starten
        renderCalendar(currentDate);
      }

      // Sicherstellen, dass die Funktion existiert, und dann starten
      if (typeof initCalendar === "function") {
        initCalendar();
      }
    });
  }
});
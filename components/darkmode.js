// Button-Element mit der ID "toggle-dark" aus dem HTML holen
const toggleButton = document.getElementById("toggle-dark");

// Prüfen, ob im localStorage bereits "darkMode" aktiviert ist
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "Light Mode";
}
// Klick-Event für den Button hinzufügen
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  // Prüfen, ob Dark-Mode aktuell aktiv ist
  const isDark = document.body.classList.contains("dark-mode");

  // Einstellung im localStorage speichern ("enabled" oder "disabled")
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");


  toggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
});

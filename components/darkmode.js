const toggleButton = document.getElementById("toggle-dark");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  toggleButton.textContent = "Light Mode";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

  
  toggleButton.textContent = isDark ? "Light Mode" : "Dark Mode";
});

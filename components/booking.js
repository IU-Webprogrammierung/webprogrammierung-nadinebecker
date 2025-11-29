document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-booking");
  const form = document.getElementById("booking-form");

  if (openBtn && form) {
    openBtn.addEventListener("click", () => {
      form.classList.remove("hidden");
      form.classList.add("visible");
    });
  }
});

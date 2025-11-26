// Warten, bis das gesamte DOM geladen ist
$(document).ready(function () {
  // Den Inhalt der Datei "header.html" in das <header>-Element laden
  $("header").load("components/header.html", function () {
    // Aktuelle Seite aus der URL ermitteln (z. B. "index.html" oder "buchungen.html")
    const currentPage = window.location.pathname.split("/").pop();
    // Alle Links innerhalb der Navigation durchgehen
    $(".navi a").each(function () {
      const linkPage = $(this).attr("href");

      if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
        $(this).addClass("active"); // Klasse "active" hinzufügen → Link wird optisch hervorgehobe
      }
    });
  });
});

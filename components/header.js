// Warten, bis das gesamte DOM geladen ist
$(document).ready(function () {
    // Den Inhalt der Datei "header.html" in das <header>-Element laden
  $("header").load("components/header.html", function () {
    $.getScript("components/navigation.js");
  });
});
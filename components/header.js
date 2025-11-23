$(document).ready(function () {
  $("header").load("components/header.html", function () {
    $.getScript("components/navigation.js");
  });
});
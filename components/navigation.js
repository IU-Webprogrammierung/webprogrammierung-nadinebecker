  $(document).ready(function () {
    $("header").load("components/header.html", function () {
      const currentPage = window.location.pathname.split("/").pop();

      $(".navi a").each(function () {
        const linkPage = $(this).attr("href");

        if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
          $(this).addClass("active");
        }
      });
    });
  });

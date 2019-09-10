$("#sidebarCollapse").on("click", () => {
  $("nav").toggleClass("active");
  $(".wrapper").toggleClass("menuup");
  $(".mobile-header").toggleClass("hide");
});

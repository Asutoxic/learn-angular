menu = (e) => {
  let selectMenu = document.querySelector("#mobile-menu");
  e.name === "menu"
    ? ((e.name = "close"), (selectMenu.style.opacity = 100))
    : ((e.name = "menu"), (selectMenu.style.opacity = 100));
};

toHome = () => {
  document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
};

toTestimonials = () => {
  document
    .getElementById("Testimonials")
    .scrollIntoView({ behavior: "smooth" });
};

toPrice = () => {
  document.getElementById("Price").scrollIntoView({ behavior: "smooth" });
};

toProjects = () => {
  document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
};

toggleMode = (e) => {
  const selectToggle = document.querySelector("#toggleDark");
  e.name === "moon"
    ? ((e.name = "sunny"), selectToggle.classList.add("dark"))
    : ((e.name = "moon"), selectToggle.classList.remove("dark"));
};

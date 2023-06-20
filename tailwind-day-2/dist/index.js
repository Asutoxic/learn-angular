openMenu = () => {
  document.getElementById("md-menu").classList.add("md:block");
};
closeMenu = () => {
  document.getElementById("md-menu").classList.remove("md:block");
};
openSearchMenu = () => {
  document.getElementById("mobile-search-menu").classList.remove("hidden");
};
closeSearchMenu = () => {
  document.getElementById("mobile-search-menu").classList.add("hidden");
};
openSmMenu = () => {
  document.getElementById("mobile-menu").classList.remove("hidden");
};
closeSmMenu = () => {
  document.getElementById("mobile-menu").classList.add("hidden");
};

modalHandlerLogin = () => {
  let modalLogin = document.querySelector("#modalLogin");
  modalLogin.classList.remove("hidden");
};

modalHandlerCart = () => {
  let modalLogin = document.querySelector("#modalCart");
  modalLogin.classList.remove("hidden");
};

checkoutBack = () => {
  let modalLogin = document.querySelector("#modalCart");
  modalLogin.classList.add("hidden");
};

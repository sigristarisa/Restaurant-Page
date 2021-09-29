const Header = () => {
  //header //
  const header = document.createElement("div");
  header.setAttribute("id", "header");

  // logo //
  const logo = document.createElement("img");
  logo.src = "../../assets/pizza-dark-orange.svg";
  logo.setAttribute("id", "logo");

  // append the logo and the navibar to the header //
  header.appendChild(logo);
  header.appendChild(NavBar());

  return header;
};

// create the navibar that is in the header //
const NavBar = () => {
  // navi bar //
  const navBar = document.createElement("ul");
  navBar.setAttribute("id", "navbar");

  // links in the navi //
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.innerHTML = "<button class='button'>Home</button>";
  menu.innerHTML = "<button class='button'>Menu</button>";
  contact.innerHTML = "<button class='button'>Contact</button>";

  // jump to the section in the home page //
  home.addEventListener("click", () => {
    document.getElementById("content").scrollIntoView({ behavior: "smooth" });
  });

  menu.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });

  contact.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });

  // append the links to the navi bar //
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  return navBar;
};

export default Header;

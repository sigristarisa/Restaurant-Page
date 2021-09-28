import slideShow from "../components/Slideshow";

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

  home.innerHTML = "Home";
  menu.innerHTML = "Menu";
  contact.innerHTML = "Contact";

  //buttons making clickable //
  // home.addEventListener("click", () => {});

  // menu.addEventListener("click", () => {
  //   console.log("click from menu");
  // });

  // contact.addEventListener("click", () => {
  //   console.log("click from contact");
  // });

  // append the buttons to the navi bar //
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  return navBar;
};

const Home = () => {
  // body //
  const home = document.createElement("div");
  home.setAttribute("id", "main");

  // main image //
  const mainImage = document.createElement("img");
  mainImage.src = "../../assets/main-image-edited.png";
  mainImage.setAttribute("id", "mainImage");

  // restaurant name //
  const title = document.createElement("h1");
  title.innerText = "World Piece";

  // restaurant description //
  const description = document.createElement("div");
  description.innerText =
    "You want a place that makes you wait awhile as your pizza is cooked to perfection? \n You want a place that makes you feel cozy and not feel stressed about what you have to wear? \n \n You want, ultimately, tradition? \n \n World Piece is one of the original pizza places in Zürich \n where it keeps the passed-down authenticity on what it means to be Italian.";
  description.setAttribute("id", "description");

  home.appendChild(mainImage);
  home.appendChild(title);
  home.appendChild(description);
  home.appendChild(slideShow());

  return home;
};

// create a footer //
const Footer = () => {
  const footer = document.createElement("footer");

  const copyright = document.createElement("p");
  copyright.innerText = "© World Piece 2021";

  footer.appendChild(copyright);

  return footer;
};

const HomePage = () => {
  const content = document.getElementById("content");
  content.appendChild(Header());
  content.appendChild(Home());
  content.appendChild(Footer());
};

export default HomePage;

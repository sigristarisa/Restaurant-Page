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

  // buttons in the navi //
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  home.innerHTML = "<button>Home</button>";
  menu.innerHTML = "<button>Menu</button>";
  contact.innerHTML = "<button>Contact</button>";

  // append the buttons to the navi bar //
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  return navBar;
};

const Body = () => {
  // body //
  const body = document.createElement("div");
  body.setAttribute("id", "body");

  // main image //
  const mainImage = document.createElement("img");
  mainImage.src = "../../assets/main-image-edited.png";
  mainImage.setAttribute("id", "mainImage");

  // restaurant name //
  const title = document.createElement("h1");
  title.innerText = "World Piece";

  body.appendChild(mainImage);
  body.appendChild(title);

  return body;
};

// create a footer //
const Footer = () => {
  const footer = document.createElement("footer");
  const copyright = document.createElement("p");

  footer.appendChild(copyright);

  copyright.innerText = "© World Piece 2021";

  return footer;
};

const mainPage = () => {
  const content = document.getElementById("content");
  content.appendChild(Header());
  content.appendChild(Body());
  content.appendChild(Footer());
};

export default mainPage;

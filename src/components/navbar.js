const Header = () => {
  const header = document.createElement("div");
  const title = document.createElement("h1");

  header.appendChild(title);
  title.innerHTML = "World Piece";

  header.appendChild(NavBar());

  return header;
};

const NavBar = () => {
  const navBar = document.createElement("ul");
  navBar.setAttribute("id", "navbar");

  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);

  home.innerHTML = "<button>Home</button>";
  menu.innerHTML = "<button>Menu</button>";
  contact.innerHTML = "<button>Contact</button>";

  return navBar;
};

const Footer = () => {
  const footer = document.createElement("footer");
  const copyright = document.createElement("p");

  footer.appendChild(copyright);

  copyright.innerText = "© World Piece 2021";

  return footer;
};

// const Body = () => {
//   const image = document.createElement("img");
//   image.src = "../../assets/main-image.jpg";

//   return image;
// };

const mainPage = () => {
  const content = document.getElementById("content");
  content.appendChild(Header());
  //   content.appendChild(Body());
  content.appendChild(Footer());
};

export default mainPage;

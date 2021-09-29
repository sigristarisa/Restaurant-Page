import Header from "../components/Header";
import Menu from "../components/menuPage";
import Contact from "../components/contactPage";
import Footer from "../components/Footer";

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

  return home;
};

const HomePage = () => {
  const content = document.getElementById("content");
  content.appendChild(Header());
  content.appendChild(Home());
  content.appendChild(Menu());
  content.appendChild(Contact());
  content.appendChild(Footer());
};

export default HomePage;

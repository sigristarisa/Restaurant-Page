// create a footer //
const Footer = () => {
  const footer = document.createElement("footer");

  const copyright = document.createElement("p");
  copyright.innerText = "© World Piece 2021";

  footer.appendChild(copyright);

  return footer;
};

export default Footer;

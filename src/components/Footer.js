// create a footer //
const Footer = () => {
  const footer = document.createElement("footer");

  const socialContainer = document.createElement("div");
  socialContainer.setAttribute("id", "socialMedia");

  const facebook = document.createElement("a");
  facebook.href = "https://www.facebook.com/";
  facebook.innerHTML = facebook.innerHTML =
    "<img src ='../../assets/facebook.svg' />";

  const twitter = document.createElement("a");
  twitter.href = "https://twitter.com/?lang=en";
  twitter.innerHTML = "<img src ='../../assets/twitter.svg' />";

  const instagram = document.createElement("a");
  instagram.href = "https://www.instagram.com/";
  instagram.innerHTML = "<img src ='../../assets/instagram.svg' />";

  socialContainer.appendChild(facebook);
  socialContainer.appendChild(twitter);
  socialContainer.appendChild(instagram);

  const copyright = document.createElement("p");
  copyright.innerText = "© World Piece 2021";

  footer.appendChild(socialContainer);
  footer.appendChild(copyright);

  return footer;
};

export default Footer;

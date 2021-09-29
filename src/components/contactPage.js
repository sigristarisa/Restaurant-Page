const Contact = () => {
  // contact container //
  const contact = document.createElement("div");
  contact.setAttribute("id", "menu");

  // contact title //
  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Contact";

  // contact image //
  const contactImage = document.createElement("img");
  contactImage.src = "../../assets/slideimage-1.jpg";
  menuImage.setAttribute("id", "contactImage");

  // menu content //
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");

  const contactTitle = document.createElement("h4");
  const contactDescription = document.createElement("p");

  contactTitle.innerText = "World Piece";
  contactDescription.innerText = "Limmatquai 54, 8001, Zürich";

  // append the contact to the container
  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactDescription);

  contact.appendChild(contactTitle);
  contact.appendChild(contactImage);
  contact.appendChild(contactContent);

  return contact;
};

export default Contact;

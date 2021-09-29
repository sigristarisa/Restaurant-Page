const Contact = () => {
  // contact container //
  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");

  // contact title //
  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Contact";

  // contact image //
  const contactImage = document.createElement("img");
  contactImage.src = "../../assets/slideimage-1.jpg";
  contactImage.setAttribute("id", "contactImage");

  // menu content //
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contactContent");

  const contactSubTitle = document.createElement("h4");
  const contactAddress = document.createElement("p");
  const contactHours = document.createElement("p");

  contactSubTitle.innerText = "World Piece";
  contactAddress.innerText = "Limmatquai 54, 8001, Zürich";
  contactHours.innerText =
    "Opening hours: \n Tuesday – Friday  \n 12:00 – 14:00, 18:00 – 23:00 \n Saturday \n  18:00 – 23:00   \n \n Sunday and Monday we are closed.";

  // append the contact to the container
  contactContent.appendChild(contactSubTitle);
  contactContent.appendChild(contactAddress);
  contactContent.appendChild(contactHours);

  contact.appendChild(contactTitle);
  contact.appendChild(contactImage);
  contact.appendChild(contactContent);

  return contact;
};

export default Contact;

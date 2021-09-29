const Menu = () => {
  // main container //
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  // menu title //
  const menuTitle = document.createElement("h2");
  menuTitle.innerText = "Menu";

  // menu image //
  const menuImage = document.createElement("img");
  menuImage.src = "../../assets/slideimage-4.jpg";
  menuImage.setAttribute("id", "menuImage");

  // menu content //
  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menuContent");

  //marinara //
  const marinara = document.createElement("div");
  const marinaraTitle = document.createElement("h4");
  const marinaraDescription = document.createElement("p");

  marinaraTitle.innerText = "Marinara";
  marinaraDescription.innerText =
    "San Marzano Tomato Sauce | Garlic | Oregano | Extra Virgin Olive Oil \n \n 16.- CHF";
  marinara.appendChild(marinaraTitle);
  marinara.appendChild(marinaraDescription);

  // margerita //
  const margerita = document.createElement("div");
  const margeritaTitle = document.createElement("h4");
  const margeritaDescription = document.createElement("p");

  margeritaTitle.innerText = "Margerita";
  margeritaDescription.innerText =
    "San Marzano Tomato Sauce | Basil | Fresh Mozzarella | Parmigiano Reggiano D.O.P | Extra Virgin Olive Oil \n \n 20.- CHF";
  margerita.appendChild(margeritaTitle);
  margerita.appendChild(margeritaDescription);

  // append the menus to the container
  menuContent.appendChild(marinara);
  menuContent.appendChild(margerita);

  menu.appendChild(menuTitle);
  menu.appendChild(menuImage);
  menu.appendChild(menuContent);

  return menu;
};

export default Menu;

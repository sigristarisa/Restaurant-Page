const navBar = document.createElement("ul");

const home = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");

navBar.appendChild(home);
navBar.appendChild(menu);
navBar.appendChild(contact);

home.innerHTML = "<button>Home</button>";
menu.innerHTML = "<button>Menu</button>";
contact.innerHTML = "<button>Contact</button>";

export default navBar;

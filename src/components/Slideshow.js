const slideShow = (index) => {
  // create an array of images
  const imageArr = [];
  for (let i = 0; i < 4; i++) {
    let image = document.createElement("img");
    imageArr.push(image);
  }
  // create the slide container
  const slideContainer = document.createElement("div");
  slideContainer.setAttribute("id", "slideContainer");

  // create classes for each image and assign the source
  imageArr.forEach((image, index) => {
    image.classList.add("slideshowImages");
    image.src = "../../assets/slideimage-" + (index + 1) + ".jpg";

    slideContainer.appendChild(image);
  });

  return slideContainer;
};

export default slideShow;

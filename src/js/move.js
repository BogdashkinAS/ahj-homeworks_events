import image from '../img/goblin.png';

export default class Move {

  randomMove() {

    const activeElement = document.querySelector(".active");
    const imgElement = document.createElement("img");
    imgElement.src = image;
    const itemArray = Array.from(document.querySelectorAll(".square"));
    const randomItem = Math.floor(Math.random() * itemArray.length);
    activeElement.classList.remove("active");
    activeElement.firstElementChild.remove();

    itemArray[randomItem].classList.add("active");
    itemArray[randomItem].append(imgElement);
    
  };
}
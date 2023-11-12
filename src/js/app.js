import Move from "./move";
import elementClick from "./click";

document.addEventListener("DOMContentLoaded", () => {
  
  const item = new Move(document.querySelector(".grid"));
  const timer = setInterval(item.randomMove, 1000);
  elementClick(timer);

});

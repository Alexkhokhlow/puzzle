export class Moves {
  moves;
  item;

  constructor() {

    this.moves = document.createElement("div");
    this.moves.innerText = "Moves: ";
    this.item = document.createElement("span");
    this.item.setAttribute("data-moves", 0);
    this.item.innerHTML = 0
    this.item.classList.add("moves");
    this.moves.appendChild(this.item);
    this.item.addEventListener("moves", this.changeMoves.bind(this));
  }

  changeMoves() {   
    this.item.innerHTML = ++this.item.dataset.moves;
  }


}

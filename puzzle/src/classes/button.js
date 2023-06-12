export class Button {
  button;

  constructor(innerHTML) {
    this.button = document.createElement("button");
    this.button.innerHTML = innerHTML;
  }

  handlerButton(cb) {
    this.button.addEventListener('click',cb);
  }
}

export class Frame {
  selectedSize;
  frame;

  constructor(){
    this.frame = document.createElement('div')
    const frameSizeContainer = document.createElement("div");
    const otherSizeContainer = document.createElement("div");

    frameSizeContainer.append(this.createFrameTextHtml('Frame'));
    frameSizeContainer.append(this.createFrameSizeHtml(4,'span'));
    otherSizeContainer.append(this.createFrameTextHtml('Other'));

    for (let i = 3; i <= 8; i++) {
      otherSizeContainer.append(this.createFrameSizeHtml(i,'button'));
    }

    this.frame.append(frameSizeContainer)
    this.frame.append(otherSizeContainer)
  }

  handlerFrameButton(cb){
    this.frame.addEventListener('click', cb)
  }

  createFrameSizeHtml(size,type) {
    const item = document.createElement(type);
    item.innerHTML = ` ${size}x${size}`;
    item.setAttribute('data-size', size)
    return item;
  }

  createFrameTextHtml(text){
    const item = document.createElement('span');
    item.innerText = `${text} size:`
    return item
  }
}

export class Timer {
  timer;
  item;
  pause;

  constructor() {
    this.timer = document.createElement("div");
    this.item = document.createElement("span");

    this.timer.innerText = "Timer: ";
    this.item.innerHTML = "0";
    this.item.setAttribute("timer", 0);
    this.pause = false;
    this.timer.appendChild(this.item);
    this.item.innerHTML = "00:00";
    this.item.dataset.timer = 0;
  }

  startTimer() {
    setInterval(() => {
      if (this.pause) {
          this.item.innerHTML = this.timeChanger(this.item.dataset.timer)
          this.item.dataset.timer = +this.item.dataset.timer + 1
      }
    }, 1000);
  }

  pauseTimer() {
    this.pause = false;
  }

  timeChanger(time) {
    let item = time;
    if (item < 10) {
      return `00:0${item}`;
    } else if (item < 60) {
      return `00:${item}`;
    } else if (Math.floor(item / 60) < 10) {
      if (item % 60 < 10) {
        return `0${Math.floor(item / 60)}:0${item % 60}`;
      } else {
        return `0${Math.floor(item / 60)}:${item % 60}`;
      }
    } else {
      if (item % 60 < 10) {
        return `${Math.floor(item / 60)}:0${item % 60}`;
      } else {
        return `${Math.floor(item / 60)}:${item % 60}`;
      }
    }
  }

  playTimer() {
    if (document.getElementsByClassName("pause")[0])
      document.getElementsByClassName("pause")[0].classList.remove("pause");
    this.pause = true;
  }
}

import clickSound from "./click.mp3";
import { Moves } from "./moves";
import { Timer } from "./timer";

export class Puzzle {
  size;
  puzzleContainer;
  emptyItemPosition;
  config = [];
  moves;
  eventMoves;
  item;
  recordsTable;
  timer;
  message;
  winMessage;
  pauseMusic;

  constructor() {
    this.puzzleContainer = document.createElement("div");
    this.eventMoves = new Event("moves");
    this.message = document.createElement("div");
    this.message.classList.add("win");
    this.timer = new Timer();
    this.moves = new Moves();

    this.initResordsTable();
    this.initClickHandler();
    this.puzzleContainer.appendChild(this.moves.moves);
    this.puzzleContainer.appendChild(this.timer.timer);
    this.puzzleContainer.appendChild(this.message);
    this.message.addEventListener("click", this.hiddenMessage.bind(this));
    this.recordsTable.addEventListener(
      "click",
      this.hidenPositionTable.bind(this)
    );
    this.timerFlag = true;
    this.pauseMusic = false;
  }

  getSaveGame() {
    if (localStorage.getItem("puzzle")) {
      this.config = JSON.parse(localStorage.getItem("puzzle"));
      let moves = localStorage.getItem("moves");

      this.moves.item.innerHTML = moves;
      this.moves.item.dataset.moves = moves;
      let timerData = localStorage.getItem("timer");
      this.timer.item.innerHTML = this.timer.timeChanger(timerData);
      this.timer.item.dataset.timer = timerData;
      this.size = Math.sqrt(this.config.length);
      this.createPuzzle();
    } else {
      alert("Нет сохраненной игры");
    }
  }

  initPuzzle(size) {
    this.createConfigPuzzle(size);
    this.timer.startTimer();
  }

  createConfigPuzzle(size) {
    this.size = size;

    do {
      this.config = [];

      this.emptyItemPosition =
        Math.floor(Math.random() * Math.pow(this.size, 2)) + 1;

      for (let i = 1; i < Math.pow(this.size, 2); i++) {
        if (i == this.emptyItemPosition) {
          this.config.push("");
        }
        this.config.push(i);
      }
      if (this.emptyItemPosition == Math.pow(this.size, 2))
        this.config.push("");

      this.config.sort(() => Math.random() - 0.5);
    } while (this.checkConfig());
    this.createPuzzle();
  }

  checkConfig() {
    return (
      this.config.reduce((acc, item, index) => {
        for (let i = index; i < this.config.length; i++) {
          if (item > this.config[i] && item != "" && this.config[i] != "") {
            acc += 1;
          }
        }
        return acc;
      }, 0) % 2
    );
  }

  createPuzzle() {
    const puzzle = document.createElement("div");

    puzzle.classList.add("puzzle");
    puzzle.style.gridTemplateColumns = `repeat(${this.size},1fr)`;
    puzzle.setAttribute("data-size", this.size);
    this.config.forEach((item, index) =>
      puzzle.append(this.createPuzzleItem(index + 1, item))
    );

    if (this.checkIfPuzzleExsist()) {
      this.puzzleContainer.replaceChild(
        puzzle,
        document.getElementsByClassName("puzzle")[0]
      );
    } else {
      this.puzzleContainer.append(puzzle);
    }
  }

  initClickHandler() {
    this.puzzleContainer.addEventListener(
      "mousedown",
      this.changePosition.bind(this)
    );
  }

  changePosition(event) {
    const targetPosition = event.target.dataset.position;
    const emptyItem = document.getElementsByClassName("empty-item")[0];

    if (
      Math.abs(targetPosition - this.emptyItemPosition) == this.size ||
      (this.emptyItemPosition % this.size != 0 &&
        targetPosition - this.emptyItemPosition == 1) ||
      (this.emptyItemPosition % this.size != 1 &&
        targetPosition - this.emptyItemPosition == -1)
    ) {
      let item = event.target.cloneNode(true);
      item.classList.add("item");
      item.style.zIndex = 20;
      item.style.width = event.target.offsetWidth + "px";
      item.style.height = event.target.offsetHeight + "px";

      item.style.position = "absolute";
      let shiftX = event.clientX - event.target.getBoundingClientRect().left;
      let shiftY = event.clientY - event.target.getBoundingClientRect().top;
      item.style.top =
        event.target.offsetTop +
        +document.getElementsByClassName("puzzle")[0].offsetTop +
        "px";
      item.style.left =
        event.target.offsetLeft + this.puzzleContainer.offsetLeft + "px";
      this.puzzleContainer.appendChild(item);
      event.target.style.opacity = 0.5;
      document.addEventListener("mousemove", onMouseMove);
      function moveAt(pageX, pageY) {
        item.style.left = pageX - shiftX + "px";
        item.style.top = pageY - shiftY + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      this.puzzleContainer.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        this.puzzleContainer.onmouseup = null;
        event.target.style.opacity = 1;

        this.clickItem(event);
        this.puzzleContainer.removeChild(item);
      }.bind(this);
    }
  }

  clickItem(event) {
    this.timer.playTimer();
    const targetPosition = event.target.dataset.position;
    const emptyItem = document.getElementsByClassName("empty-item")[0];

    let configItem = this.config[targetPosition - 1];

    event.target.style.order = this.emptyItemPosition;
    event.target.dataset.position = this.emptyItemPosition;
    this.config[targetPosition - 1] = this.config[this.emptyItemPosition - 1];
    emptyItem.style.order = targetPosition;
    emptyItem.dataset.position = targetPosition;
    this.config[this.emptyItemPosition - 1] = configItem;
    this.emptyItemPosition = targetPosition;

    this.moves.item.dispatchEvent(this.eventMoves);

    if (this.emptyItemPosition == this.config.length) {
      this.checkWinerPosition();
    }
    this.playSound();
  }

  playSound() {
    if (!this.pauseMusic) {
      let audio = new Audio(clickSound);
      audio.autoplay = true;
    }
  }

  checkWinerPosition() {
    for (let i = 0; i < this.config.length - 1; i++) {
      if (this.config[i] != i + 1) {
        return;
      }
    }
    console.log("you win");
    this.saveRecord(this.moves.item.innerHTML, this.timer.item.innerHTML);
    this.initResordsTable();
  }

  createPuzzleItem(order, innerHTML = "") {
    const item = document.createElement("div");

    item.classList.add("item");
    item.innerHTML = innerHTML;
    item.style.order = order;
    item.setAttribute("data-position", order);
    if (innerHTML == "") {
      item.classList.add("empty-item");
      this.emptyItemPosition = order;
    }

    return item;
  }

  checkIfPuzzleExsist() {
    return Boolean(document.getElementsByClassName("puzzle").length);
  }

  initResordsTable() {
    this.recordsTable = document.createElement("div");
    this.recordsTable.classList.add("records-table");
    this.recordsTable.innerHTML = "Таблица рекордов";
    this.puzzleContainer.appendChild(this.recordsTable);
    let records = this.getRecords();
    for (let i = 3; i <= 30; i = i + 3) {
      let item = document.createElement("div");
      if (records.length >= i) {
        let sizePlace = localStorage.getItem('size')
        item.innerHTML = `${i / 3} moves: ${records[i - 3]} times: ${
          records[i - 2]
        } ${records[i-1]}x${records[i-1]}`;
      } else {
        item.innerHTML = `${i / 3} ---`;
      }
      this.recordsTable.appendChild(item);
    }
  }

  openRecordsTable() {
    this.recordsTable.classList.toggle("visibility");
  }

  savePuzzle() {
    localStorage.setItem("puzzle", JSON.stringify(this.config));
    localStorage.setItem("moves", this.moves.item.dataset.moves);
    localStorage.setItem("timer", this.timer.item.dataset.timer);
    
  }

  getRecords() {
    let records = localStorage.getItem("records");
    records = records ? records.split(",") : [];
    return records;
  }

  saveRecord(moves, timer,size) {
    const records = this.getRecords();
    this.winMessage = `Ура! Вы решили головоломку за ${timer}  и ${moves} ходов!`;

    if (records.length != 0) {
      for (let i = 0; i <= 30; i = i + 3) {
        if (records.length <= i) break;
        if (+records[i] >= moves) {
          records.splice(i, 0, moves, timer, size);
          break;
        } else {
          records.splice(records.length, 0, moves, timer);
          break;
        }
      }
    } else {
      records.push(moves);
      records.push(timer);
      records.push(this.size)
    }
    localStorage.setItem("records", records);
    this.clear();
    this.showMessage();
  }

  clear() {
    this.moves.item.innerHTML = 0;
    this.timer.item.innerHTML = "00:00";
    this.moves.item.dataset.moves = 0;
    this.timer.item.dataset.timer = 0;
    this.timer.pauseTimer();
  }

  showMessage() {
    this.message.classList.toggle("visibility");
    this.message.innerHTML = this.winMessage;
  }

  hiddenMessage() {
    this.message.classList.toggle("visibility");
    this.createConfigPuzzle(this.size);
  }

  hidenPositionTable() {
    this.recordsTable.classList.toggle("visibility");
  }

  pauseTimer() {
    this.timer.pauseTimer();
  }

  pauseButtonClick() {
    this.timer.pause = !this.timer.pause;
  }

  changeSound() {
    this.pauseMusic = !this.pauseMusic;
  }
}

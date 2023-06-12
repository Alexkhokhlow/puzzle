import { Button } from "./button";
import { Puzzle } from "./puzzle";
import { Frame } from "./frame";
import { Moves } from "./moves";
import { Timer } from "./timer";

export class Game {
  shuffleButton;
  stopButton;
  saveButton;
  resultButton;
  soundButton;
  main;
  puzzleContainer;
  puzzleSize = 4;
  frame;

  constructor() {
    this.shuffleButton = new Button("shuffle");
    this.stopButton = new Button("stop");
    this.saveButton = new Button("save");
    this.lastGameButton = new Button('last game')
    this.resultButton = new Button("results");
    this.soundButton = new Button('sound')
    this.puzzleContainer = new Puzzle();
    this.frame = new Frame();
    this.main = document.createElement("section");
  }

  init() {
    this.initButtons();
    this.initPuzzle();
    this.main.appendChild(this.lastGameButton.button)
    this.main.appendChild(this.shuffleButton.button);
    this.main.appendChild(this.stopButton.button);
    this.main.appendChild(this.saveButton.button);
    this.main.appendChild(this.resultButton.button);
    this.main.appendChild(this.soundButton.button)
    this.main.appendChild(this.puzzleContainer.puzzleContainer);
    this.main.appendChild(this.frame.frame);
  }

  initButtons() {
    this.lastGameButton.handlerButton(this.getSaveGame.bind(this))
    this.shuffleButton.handlerButton(this.shufflePuzzle.bind(this));
    this.saveButton.handlerButton(this.savePuzzle.bind(this));
    this.resultButton.handlerButton(this.getResult.bind(this));
    this.stopButton.handlerButton(this.stopTimer.bind(this))
    this.soundButton.handlerButton(this.changeSound.bind(this))
    this.frame.handlerFrameButton(this.reloadPuzzle.bind(this));
  }

  getSaveGame(){
    this.puzzleContainer.getSaveGame()
  }

  changeSound(){
    this.soundButton.button.classList.toggle('pause_sound')
    this.puzzleContainer.changeSound()
  }

  stopTimer(){
    this.stopButton.button.classList.toggle('pause')
    this.puzzleContainer.pauseButtonClick()
  }

  initPuzzle() {
    this.puzzleContainer.initPuzzle(this.puzzleSize);
  }

  reloadPuzzle(event) {
    if (event.target.dataset.size)
    this.puzzleContainer.createConfigPuzzle(event.target.dataset.size);
    this.puzzleContainer.clear()
  }

  shufflePuzzle() {
    this.puzzleContainer.createConfigPuzzle(this.puzzleContainer.size);
    this.puzzleContainer.clear()
  }

  savePuzzle() {
    this.puzzleContainer.savePuzzle.apply(this.puzzleContainer)
  }

  getResult() {
    this.puzzleContainer.openRecordsTable()
  }

}

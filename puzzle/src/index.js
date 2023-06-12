import { Game } from "./classes/game";
import './style.scss' 
const body = document.getElementsByTagName('body')[0]

const game = new Game()
game.init()

body.appendChild(game.main)
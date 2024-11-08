import Board from "./Board"
import { useEffect, useState } from "react"
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import gameoversoundAsset from '../sounds/Game-Over.mov';
import clicksoundAsset from '../sounds/Click.mov';

const gameoversound = new Audio(gameoversoundAsset);
gameoversound.volume = 0.2;

const clicksound = new Audio(clicksoundAsset);
clicksound.volume = 0.4;

const player_X = "X";
const player_Y = "O";

const winningCombinations = [
  //Rows
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles,setstrikeClass, setgameState) {
  for( const {combo,strikeClass} of winningCombinations) {
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if(tileValue1 !== null && tileValue1 === tileValue2 && tileValue2 === tileValue3) {
      setstrikeClass(strikeClass);
      if(tileValue1 === player_X) {
        setgameState(GameState.playerXWins);
      } else {
        setgameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllFilled = tiles.every((tile) => tile !== null);
  if(areAllFilled) {
    setgameState(GameState.draw);
  }
}


function TicTacToe() {

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setplayerTurn] = useState(player_X);
  const [strikeClass, setstrikeClass] = useState();
  const [gameState, setgameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if(gameState !== GameState.inProgress) return;

    if(tiles[index] !== null) return;

    const newTiles = [...tiles]
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    setplayerTurn(playerTurn === player_X ? player_Y : player_X);
  }

  const handleReset = () => {
    setTiles(Array(9).fill(null));
    setplayerTurn(player_X);
    setstrikeClass();
    setgameState(GameState.inProgress);
  }

  useEffect(() => {
    checkWinner(tiles, setstrikeClass, setgameState)
  },[tiles])

  useEffect(() => {
    if( tiles.some((tile) => tile !== null)){
      clicksound.play();
    }
  },[tiles])

  useEffect(() => {
    if(gameState !== GameState.inProgress){
      gameoversound.play();
    }
  })

  return (
    <div>
      <h1>Tic Tac Toe ⭕❌</h1>
      <Board strikeClass={strikeClass} playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onReset={handleReset} />
    </div>
  )
}

export default TicTacToe
import Board from "./Board"
import { useEffect, useState } from "react"

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

function checkWinner() {
  console.log("hi");
}

function TicTacToe() {

  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setplayerTurn] = useState(player_X);
  const [strikeClass, setstrikeClass] = useState();

  const handleTileClick = (index) => {
    if(tiles[index] !== null) return;

    const newTiles = [...tiles]
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    setplayerTurn(playerTurn === player_X ? player_Y : player_X);
  }

  useEffect(() => {
    checkWinner()
  },[tiles])

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} />
    </div>
  )
}

export default TicTacToe
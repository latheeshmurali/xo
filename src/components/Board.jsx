import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles, onTileClick, playerTurn, strikeClass}) {
    return ( 
        <div className="board">
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(0)} value={tiles[0]} classname="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(1)} value={tiles[1]} classname="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(2)} value={tiles[2]} classname="bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(3)} value={tiles[3]} classname="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(4)} value={tiles[4]} classname="right-border bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(5)} value={tiles[5]} classname="bottom-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(6)} value={tiles[6]} classname="right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(7)} value={tiles[7]} classname="right-border" />
            <Tile playerTurn={playerTurn} onClick={() => onTileClick(8)} value={tiles[8]} />
            <Strike strikeClass={strikeClass} />
        </div>
     );
}

export default Board;
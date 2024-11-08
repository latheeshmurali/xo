function Tile({classname, value, onClick, playerTurn}) {
    let hoverClass = null;
    if(value == null && playerTurn != null){
        hoverClass = playerTurn === "X" ? "x-hover" : "o-hover";
    }
    
    return ( 
        <div onClick={onClick} className={`tile ${classname} ${hoverClass}`}>{value}</div>
    );
}

export default Tile;
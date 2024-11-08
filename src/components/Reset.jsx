import GameState from "./GameState";

function Reset({gameState, onReset}) {
    if(gameState == GameState.inProgress) return;

    return ( 
        <div>
            <button onClick={onReset} className="reset-button">Play Again 🎮</button>
            <div className="goat">
               <p className="vr">Made by VR12🐐 Fans Club</p>
               <p>Total no.of fans = 2 💥</p>
            </div>
        </div>
     );
}

export default Reset;
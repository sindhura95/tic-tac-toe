export default function GameOver({winner, onRematch}) {
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} Won!</p>}
            {!winner && <p>Its a draw</p>}
            <button onClick={onRematch}>ReMatch</button>
        </div>
    )
}
const ScoreBoard = ( { score, setScoreDisplay } ) => {
    function resetScore() {
        setScoreDisplay(score)
    }

  return (
        <div className="score-board">
            <button> RESET </button>
            <h2 className="score">SCORE: &nbsp;&nbsp; {score}</h2>
        </div>
    )
}

export default ScoreBoard
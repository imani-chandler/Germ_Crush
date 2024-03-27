const ScoreBoard = ( { score, setScoreDisplay } ) => {
    function resetScore() {
        setScoreDisplay(score)
    }

  return (
        <div className="score-board">
            <button
                style={{
                    position: 'absolute',
                    left: 140,
                    top: 10
                }}
            > RESET </button>
            <h2 className="score"
                style={{
                    position: 'absolute',
                    fontSize: 50,
                    left: 110,
                    top: 35
                }}
            >&nbsp;&nbsp; {score} pts</h2>
        </div>
    )
}

export default ScoreBoard
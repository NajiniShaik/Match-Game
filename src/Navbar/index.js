import './index.css'

const Navbar = props => {
  const {score, timeInSec} = props

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          alt="website logo"
          className="navbar-logo"
        />

        <ul className="score-and-timer-card">
          <li className="navbar-cards">
            <p className="score">Score:</p>
            <p className="count">{score}</p>
          </li>

          <li className="navbar-cards">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              alt="timer"
              className="clock-img"
            />
            <p className="timer">{timeInSec} sec</p>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

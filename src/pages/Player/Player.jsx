import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'

const Player = () => {

    return (
      <div className="player">
        <img src={back_arrow_icon} alt="icon pic" />
        <iframe width='90%' height='90%' src='https://www.youtube.com/watch?v=wqIzNDSutSI' title='trailer'
        frameBorder='0' allowFullScreen>
          <div className="player-info">
            <p>Published Date</p>
            <p>Name</p>
            <p>Type</p>
          </div>
        </iframe>
      </div>
    )
  }
  
  export default Player
  
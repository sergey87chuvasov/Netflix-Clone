import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';

const Player = () => {

  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZGMzNmMzOTM0YzJkYWY2YTViNmMzM2ZjN2I1YjdiOCIsIm5iZiI6MTcxOTY1MjQzNy4xNTEzMDcsInN1YiI6IjY2N2RkMGQ3ZmE1MTQzZTNjMWNjOTY4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YgQT8tZS558VbZj1y3Txm8pXY1RqJCai7kE2z0GpEWU'
    }
  };

  useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  },[])
  
 
    return (
      <div className="player">
        <img src={back_arrow_icon} alt="icon pic" />
        <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer'
        frameBorder='0' allowFullScreen></iframe>
          <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
      </div>
    )
  }
  
  export default Player
  
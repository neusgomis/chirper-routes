import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FilmDetails = () => {

  const { filmid } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`https://ghibliapi.vercel.app/films/${filmid}`)
    .then(res => res.json())
    .then(data => setDetails(data))
  });

  return (
    <div className="card main-movie-card mb-3 mt-5" style={{width: "40rem"}}>
      <img src={details.movie_banner} className="card img-top" alt="movie banner"></img>
      <div className="card-body">
        <h3 className="card-title">{details.title}</h3>
        <h5 className="card-text"><small className="text-muted">Original Title: </small>
          {details.original_title}
        </h5>
        <p className="card-text">{details.description}</p>
        <p className="card-text"><small className="text-muted">Director: </small>{details.director}</p>
        <p className="card-text"><small className="text-muted">Producer: </small>{details.producer}</p>
        <p className="card-text"><small className="text-muted">Year: </small>{details.release_date}</p>
        <p className="card-text"><small className="text-muted">Duration: </small>{details.running_time} minutes</p>
        <p className="card-text"><small className="text-muted">RT Score: </small>{details.rt_score}%</p>
      </div>
    </div>
  )
}

export default FilmDetails;

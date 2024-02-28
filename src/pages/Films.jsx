import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
    .then(res => res.json())
    .then(data => setFilms(data))
    .catch(e => alert(e.message));
  }, []);

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
        {films.map(film => (
          <div key={`film-${film.id}`} className="card-big-product mt-3">
            <div className="card-big-product-infos">
              <h3>{film.title}</h3>
              <p><small className="text-muted">Year: </small>{film.release_date}</p>
              <p><small className="text-muted">Director: </small>{film.director}</p>
              <p className={film.rt_score > 60 ? 'greenScore' : 'redScore' }><small className="text-muted">Rotten Tomatoes Score: </small>{film.rt_score}%</p>
              <div className="wrapper">
                <p className="text-long">{film.description}</p>
              </div>
              <Link to={`/films/${film.id}`} className="btn mt-3">Go to Details</Link>
            </div>
          </div>
        ))}
		</div>
	)
}

export default Films;

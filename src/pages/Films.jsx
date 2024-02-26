import { useState, useEffect } from 'react';

const Films = () => {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.vercel.app/films')
    .then(res => res.json())
    .then(data => setFilms(data))
    .catch(e => alert(e.message));
  }, []);

	return (
		<div className="d-flex justify-content-center">
			<ul className="list-group">
        {films.map(film => (
          <li key={`film-${film.id}`} className="list-group-item">
            {film.title}
            {film.release_date}
            {film.director}
            {film.description}
          </li>
        ))}
			</ul>
		</div>
	)
}

export default Films;

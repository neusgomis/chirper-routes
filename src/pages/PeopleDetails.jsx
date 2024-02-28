import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

const PeopleDetails = () => {

  const { personid } = useParams();

  const [details, setDetails] = useState({});
  const [films, setFilms] = useState([]);

  const fetchMovies = useCallback(async () => {
    try {
      if (details.films) {
        const response = await fetch(details.films);
        const data = await response.json();
        const filmsArray = Object.values(data);
        setFilms(filmsArray);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  }, [details.films]);

  useEffect(() => {
    const fetchPersonDetails = async () => {
      try {
        const response = await fetch(`https://ghibliapi.vercel.app/people/${personid}`);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.error('Error fetching person details:', error);
      }
    };

    fetchPersonDetails();
  }, [personid]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]); // Fetch movies when fetchMovies function changes

  return (
    <div className="d-flex justify-content-around mt-5">
      {details && (
        <div className="card person-details" style={{width: "18rem"}}>
          <h4 className="card-header">{details.name}</h4>
          <div className="card-body">
            <p className="card-text"><small className="text-muted">Age: </small>{details.age}</p>
            <p className="card-text"><small className="text-muted">Gender: </small>{details.gender}</p>
            <p className="card-text"><small className="text-muted">Eye color: </small>{details.eye_color}</p>
            <p className="card-text"><small className="text-muted">Hair color: </small>{details.hair_color}</p>
          </div>
        </div>
      )}
      <div className="card-small-product" style={{width: "30rem"}}>
        <img src={films[4]}  className="card-img-top" alt="film banner"></img>
        <div className="card-small-product-infos">
          <h3 className="card-title"><small className="text-muted">Appears in: </small>{films[1]}</h3>
          <p classname="card-text">Japanese Title: {films[2]}</p>
          <Link to="#" className="btn mt-3">Movie Details</Link>
        </div>
      </div>
    </div>
  )
}

export default PeopleDetails;
